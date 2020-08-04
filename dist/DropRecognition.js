class Rectangle {
  constructor(data = {}) {
    this.left = data.left || 0;
    this.top = data.top || 0;
    this.right = data.right || 0;
    this.bottom = data.bottom || 0;
    for (let [key, value] of Object.entries(data)) {
      if (!(key in this)) {
        this[key] = value;
      }
    }
  }
  update(data) {
    return Object.assign(this, data);
  }
  direction(Rect2) {
    let left = Rect2.right < this.left;
    let right = Rect2.left > this.right;
    let top = Rect2.bottom < this.top;
    let bottom = Rect2.top > this.bottom;
    return [left, right, top, bottom];
  }
  merge(Rect2) {
    return this.update({
      left: Math.min(this.left, Rect2.left),
      right: Math.max(this.right, Rect2.right),
      top: Math.min(this.top, Rect2.top),
      bottom: Math.max(this.bottom, Rect2.bottom)
    });
  }
  /**
   * 计算矩形距离
   * https://stackoverflow.com/a/26178015
   * @param {*} Rect2
   */
  distance(Rect2) {
    let [left, right, top, bottom] = this.direction(Rect2);
    if (left && top) {
      return Math.hypot(this.left - Rect2.right, this.top - Rect2.bottom);
    } else if (right && top) {
      return Math.hypot(this.right - Rect2.left, this.top - Rect2.bottom);
    } else if (left && bottom) {
      return Math.hypot(this.left - Rect2.right, this.bottom - Rect2.top);
    } else if (right && bottom) {
      return Math.hypot(this.right - Rect2.left, this.bottom - Rect2.top);
    } else if (left) {
      return this.left - Rect2.right;
    } else if (right) {
      return Rect2.left - this.right;
    } else if (top) {
      return this.top - Rect2.bottom;
    } else if (bottom) {
      return Rect2.top - this.bottom;
    } else {
      return 0;
    }
  }
  get width() {
    return this.right - this.left + 1;
  }
  get height() {
    return this.bottom - this.top + 1;
  }
  get area(){
    return this.width * this.height;
  }
}

class ConnectedAreaRecognition {
  constructor(Matrix, Node, GetMatrix) {
    this.Matrix = Matrix;
    if (Node) this.Node = Node;
    if (GetMatrix) {
      this.GetMatrix = GetMatrix;
    }
  }
  GetConnectedArea(Vertex, Callback) {
    let Result = this.BFS(this.Matrix, Vertex);
    if (this.GetMatrix) {
      let Matrix = [];
      for (let y = 0; y < Result.height; y++) {
        Matrix.push(new Array(Result.width).fill(false));
      }
      for (let aVertex of Result.matrix) {
        Matrix[aVertex[1]-Result.top][aVertex[0]-Result.left] = true;
      }
      Result.matrix = Matrix;
    }
    if (Callback) Result = Callback(Result);
    return Result;
  }
  GetAllConnectedArea(Callback) {
    let Queue = this.Node.values();
    let Ret = [];
    for (let Vertex of Queue) {
      let Result = Callback
        ? this.GetConnectedArea([Math.floor(Vertex / 10000), Vertex % 10000], Callback)
        : this.GetConnectedArea([Math.floor(Vertex / 10000), Vertex % 10000]);
      if (Result) {
        Ret.push(Result);
      }
    }
    return Ret;
  }
  BFS(Matrix, Vertex) {
    let Rect = new Rectangle({
      left: Infinity,
      right: -Infinity,
      top: Infinity,
      bottom: -Infinity,
      point: 0
    });
    if (this.GetMatrix) {
      Rect.matrix = [];
    }
    let Queue = [];
    let Direction = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0]
    ];
    Rect.update({
      left: Math.min(Rect.left, Vertex[0]),
      right: Math.max(Rect.right, Vertex[0]),
      top: Math.min(Rect.top, Vertex[1]),
      bottom: Math.max(Rect.bottom, Vertex[1])
    });
    Matrix[Vertex[1]][Vertex[0]] = false;
    if (this.Node) this.Node.delete(Vertex[0] * 10000 + Vertex[1]);
    Queue.push(Vertex);
    while (Queue.length != 0) {
      Rect.point++;
      let NowVertex = Queue.shift();
      if (this.GetMatrix) {
        Rect.matrix.push(NowVertex);
      }
      for (let d = 0; d < Direction.length; d++) {
        let NextVertex = [NowVertex[0] + Direction[d][0], NowVertex[1] + Direction[d][1]];
        if (
          NextVertex[0] < 0 ||
          NextVertex[1] < 0 ||
          NextVertex[0] >= Matrix[0].length ||
          NextVertex[1] >= Matrix.length
        )
          continue;
        if (Matrix[NextVertex[1]][NextVertex[0]]) {
          Rect.update({
            left: Math.min(Rect.left, NextVertex[0]),
            right: Math.max(Rect.right, NextVertex[0]),
            top: Math.min(Rect.top, NextVertex[1]),
            bottom: Math.max(Rect.bottom, NextVertex[1])
          });
          Matrix[NextVertex[1]][NextVertex[0]] = false;
          if (this.Node) this.Node.delete(NextVertex[0] * 10000 + NextVertex[1]);
          Queue.push(NextVertex);
        }
      }
    }
    return Rect;
  }
}

class RectRecognition {
  constructor(ImageData) {
    let height = ImageData.length;
    let width = ImageData[0].length;
    this.ImageData = ImageData;
    this.Node = new Set();
    /* 粗检测关卡掉落信息区域 */
    let YAxis = Array(height).fill(0);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        YAxis[y] += ImageData[y][x][0] + ImageData[y][x][1] + ImageData[y][x][2];
      }
      YAxis[y] /= 3;
    }
    let DataAreaSpilt = -1;
    for (let y = 1; y < height; y++) {
      if (YAxis[y - 1] - YAxis[y] > 20000) {
        let cancel = false;
        for (let x = 0; x < width; x++) {
          if (ImageData[y][x].reduce((a, b) => a + b) / 3 > 100) {
            cancel = true;
            break;
          }
        }
        if (cancel) continue;
        DataAreaSpilt = y;
        break;
      }
    }
    this.DataAreaSpilt = DataAreaSpilt;
    let BinarizationMatrix = this.Binarization(width, height, ImageData);
    let ConnectedArea = new ConnectedAreaRecognition(BinarizationMatrix, this.Node);
    let mergedRects = this.AutomergeRect(
      ConnectedArea.GetAllConnectedArea(Result => {
        Result.update({
          top: Result.top + DataAreaSpilt,
          bottom: Result.bottom + DataAreaSpilt
        });
        if (Result.point > 100) {
          delete Result.point;
          return Result;
        }
      })
    );
    this.Bound(mergedRects);
    this.GetDropType(mergedRects.Right, ImageData);
    this.mergedRects = mergedRects;
    delete this.DataAreaSpilt;
    delete this.Node;
    delete this.ImageData;
  }
  // 识别边界
  Bound(Rects) {
    this.Stage = Rects.Stage;
    this.Items = [];
    for (let Rect of Rects.Right) {
      if (Math.abs(Rect.height / Rect.width - 1) < 0.2 && Rect.height > 50 && Rect.width > 50) {
        this.Items.push(Rect);
      }
    }
    this.Items.sort((a, b) => a.left - b.left);
  }
  GetDropType(Rects, ImageData) {
    let top = this.Items.reduce((a, b) => a + b.bottom, 0) / this.Items.length;
    let DropType = [];
    for (let Rect of Rects) {
      if (Rect.top > top && Rect.width / Rect.height > 3) {
        DropType.push({
          left: Rect.left,
          right: Rect.right,
          type: this.CompareType(ImageData[Rect.top][(Rect.left + Rect.right) >> 1])
        });
      }
    }
    for (let Rect of this.Items) {
      for (let type of DropType) {
        let [left, right] = Rect.direction(type);
        if (!left && !right) {
          Rect.type = type.type;
        }
      }
    }
  }
  RGBDiff(rgb1, rgb2) {
    return rgb1.map((v, i) => Math.abs(v - rgb2[i])).reduce((a, b) => a + b);
  }
  CompareType(rgb) {
    let Type = Object.entries(RectRecognition.DropTypeColor);
    for (let [type, color] of Type) {
      if (color(...rgb)) {
        return type;
      }
    }
    return "ALL_DROP";
  }
  Binarization(width, height, ImageData) {
    let Matrix = [];
    for (let y = this.DataAreaSpilt, ry = 0; y < height; y++) {
      Matrix.push([]);
      for (let x = 0; x < width; x++) {
        Matrix[ry][x] = (ImageData[y][x][0] + ImageData[y][x][1] + ImageData[y][x][2]) / 3 < 75 ? false : true;
        if (Matrix[ry][x]) {
          this.Node.add(x * 10000 + ry);
        }
      }
      ry++;
    }
    return Matrix;
  }
  sortRect(Rect1, Rect2) {
    let y = Rect1.top - Rect2.top,
      x = Rect1.left - Rect2.left;
    if (y == 0) {
      return x;
    } else {
      return y;
    }
  }
  /**
   * 合并边界距离在一定范围内的连通区
   * @param {*} Rects
   */
  AutomergeRect(Rects) {
    // 搜索出中间的竖线 以它为参考
    let MiddleLine = { top: 1, bottom: 0 };
    for (let i = 0; i < Rects.length; i++) {
      if (Rects[i].bottom - Rects[i].top > MiddleLine.bottom - MiddleLine.top) {
        MiddleLine = Rects[i];
      }
    }
    let MiddleX = (MiddleLine.right + MiddleLine.left) / 2;
    let LeftRect = [],
      RightRect = [];
    for (let Rect of Rects) {
      if (Rect.right < MiddleX) {
        if (this.ISChar(Rect)) {
          LeftRect.push(Rect);
        }
      }

      if (Rect.left > MiddleX) {
        RightRect.push(Rect);
      }
    }
    LeftRect.sort(this.sortRect);
    let StageRect = LeftRect.shift();
    for (let Rect of LeftRect) {
      let [left, right, top, bottom] = StageRect.direction(Rect);
      if ((right || left) && !top && !bottom) {
        StageRect.merge(Rect);
      } else {
        break;
      }
    }
    let Merge = (Rects, q) => {
      for (let i = 0; i < Rects.length; i++) {
        for (let j = i + 1; j < Rects.length; j++) {
          if (Rects[i].distance(Rects[j]) < q) {
            Rects[i].merge(Rects[j]);
            delete Rects.splice(j, 1);
            i--;
            break;
          }
        }
      }
      return Rects;
    };
    return {
      Stage: StageRect,
      Right: Merge(RightRect, 10),
      Middle: MiddleLine
    };
  }
  ISChar(Rect) {
    let C = 0;
    for (let y = 0; y < Rect.height; y++) {
      for (let x = 0; x < Rect.width; x++) {
        let [R, G, B] = this.ImageData[y + Rect.top][x + Rect.left];
        let A = 255;
        let D = (Math.abs(R - A) + Math.abs(G - A) + Math.abs(B - A)) / 3;
        if (D < 30) {
          C++;
        }
      }
    }
    return C / (Rect.width * Rect.height) > 0.1;
  }
}
RectRecognition.DropTypeColor = {
  SPECIAL_DROP: (R, G, B) => {
    return Math.abs(R - 240) < 5 && Math.abs(G - 100) < 10 && B < 50;
  },
  NORMAL_DROP: (R, G, B) => {
    return Math.abs(R - 175) + Math.abs(G - 175) + Math.abs(B - 175) < 20;
  },
  EXTRA_DROP: (R, G, B) => {
    return G > R && G > B && B < 150 && R > 200 && G > 200;
  },
  FIXED_DROP: (R, G, B) => {
    return R > 200 && Math.abs(G - 200) < 20 && B < 120;
  },
  LUCKY_DROP: (R, G, B) => {
    return Math.abs(R - 250) < 5 && Math.abs(G - 100) < 10 && B < 50;
  }
};

const dictionary = [
     "font",         "-",         " ",         ":",         ";",        "\"", "Novecento",  "WideBold",         "'",         ".",
        "@",      "face",         "{",    "family",       "src",       "url",         "(",         "/",      "woff",         ")",
    "style",      "bold",         "}",
];
const charToInteger = JSON.parse('{"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"+":62,"/":63,"=":64}');
const decode = (encoded) => {
    if (typeof encoded === 'object') {
        return encoded.$$esifycss;
    }
    const result = [];
    let value = 0;
    let shift = 0;
    const end = encoded.length;
    for (let index = 0; index < end; index++) {
        let integer = charToInteger[encoded[index]];
        if (0 <= integer) {
            const hasContinuationBit = integer & 32;
            integer &= 31;
            value += integer << shift;
            if (hasContinuationBit) {
                shift += 5;
            }
            else {
                value >>= 1;
                result.push(dictionary[value]);
                value = shift = 0;
            }
        }
        else {
            throw new Error(`EsifyCSS:UnexpectedToken:${encoded[index]}:'${encoded}'[${index}]`);
        }
    }
    return result.join('');
};
const style = document.createElement('style');
const addStyle = (rules) => {
    if (!style.parentNode) {
        document.head.appendChild(style);
    }
    const cssStyleSheet = style.sheet;
    rules.forEach((words) => {
        const rule = decode(words);
        if (!(/^\s*@charset/i).test(rule)) {
            cssStyleSheet.insertRule(rule, cssStyleSheet.cssRules.length);
        }
    });
};

addStyle(["UACWEYACaGKMEOKIcGegBQSiBMEOSkBQmBIACoBGqBIsB"]);

var FontSizeData = {
	"10px": {
	width: 6,
	height: 2
},
	"11px": {
	width: 6,
	height: 2
},
	"12px": {
	width: 7,
	height: 2
},
	"13px": {
	width: 6,
	height: 2
},
	"14px": {
	width: 7,
	height: 2
},
	"15px": {
	width: 7,
	height: 3
},
	"16px": {
	width: 8,
	height: 3
},
	"17px": {
	width: 9,
	height: 3
},
	"18px": {
	width: 9,
	height: 3
},
	"19px": {
	width: 10,
	height: 3
},
	"20px": {
	width: 10,
	height: 3
},
	"21px": {
	width: 11,
	height: 3
},
	"22px": {
	width: 11,
	height: 3
},
	"23px": {
	width: 12,
	height: 4
},
	"24px": {
	width: 12,
	height: 4
},
	"25px": {
	width: 13,
	height: 4
},
	"26px": {
	width: 12,
	height: 4
},
	"27px": {
	width: 13,
	height: 4
},
	"28px": {
	width: 13,
	height: 4
},
	"29px": {
	width: 14,
	height: 4
},
	"30px": {
	width: 14,
	height: 5
},
	"31px": {
	width: 15,
	height: 5
},
	"32px": {
	width: 15,
	height: 5
},
	"33px": {
	width: 16,
	height: 5
},
	"34px": {
	width: 17,
	height: 5
},
	"35px": {
	width: 17,
	height: 5
},
	"36px": {
	width: 18,
	height: 5
},
	"37px": {
	width: 18,
	height: 6
},
	"38px": {
	width: 19,
	height: 6
},
	"39px": {
	width: 18,
	height: 6
},
	"40px": {
	width: 19,
	height: 6
},
	"41px": {
	width: 19,
	height: 6
},
	"42px": {
	width: 20,
	height: 6
},
	"43px": {
	width: 20,
	height: 6
},
	"44px": {
	width: 21,
	height: 7
},
	"45px": {
	width: 21,
	height: 7
},
	"46px": {
	width: 22,
	height: 7
},
	"47px": {
	width: 22,
	height: 7
},
	"48px": {
	width: 23,
	height: 7
},
	"49px": {
	width: 24,
	height: 7
},
	"50px": {
	width: 24,
	height: 7
},
	"51px": {
	width: 25,
	height: 7
},
	"52px": {
	width: 24,
	height: 8
},
	"53px": {
	width: 25,
	height: 8
},
	"54px": {
	width: 25,
	height: 8
},
	"55px": {
	width: 26,
	height: 8
},
	"56px": {
	width: 26,
	height: 8
},
	"57px": {
	width: 27,
	height: 8
},
	"58px": {
	width: 27,
	height: 8
},
	"59px": {
	width: 28,
	height: 9
},
	"60px": {
	width: 28,
	height: 9
},
	"61px": {
	width: 29,
	height: 9
},
	"62px": {
	width: 29,
	height: 9
},
	"63px": {
	width: 30,
	height: 9
},
	"64px": {
	width: 30,
	height: 9
},
	"65px": {
	width: 30,
	height: 9
},
	"66px": {
	width: 30,
	height: 10
},
	"67px": {
	width: 31,
	height: 10
},
	"68px": {
	width: 32,
	height: 10
},
	"69px": {
	width: 32,
	height: 10
},
	"70px": {
	width: 33,
	height: 10
},
	"71px": {
	width: 33,
	height: 10
},
	"72px": {
	width: 34,
	height: 10
},
	"73px": {
	width: 34,
	height: 11
},
	"74px": {
	width: 35,
	height: 11
},
	"75px": {
	width: 35,
	height: 11
},
	"76px": {
	width: 36,
	height: 11
},
	"77px": {
	width: 35,
	height: 11
},
	"78px": {
	width: 36,
	height: 11
},
	"79px": {
	width: 36,
	height: 11
},
	"80px": {
	width: 37,
	height: 11
},
	"81px": {
	width: 37,
	height: 12
},
	"82px": {
	width: 38,
	height: 12
},
	"83px": {
	width: 39,
	height: 12
},
	"84px": {
	width: 39,
	height: 12
},
	"85px": {
	width: 40,
	height: 12
},
	"86px": {
	width: 40,
	height: 12
},
	"87px": {
	width: 41,
	height: 12
},
	"88px": {
	width: 41,
	height: 13
},
	"89px": {
	width: 42,
	height: 13
},
	"90px": {
	width: 41,
	height: 13
},
	"91px": {
	width: 42,
	height: 13
},
	"92px": {
	width: 42,
	height: 13
},
	"93px": {
	width: 43,
	height: 13
},
	"94px": {
	width: 43,
	height: 13
},
	"95px": {
	width: 44,
	height: 13
},
	"96px": {
	width: 44,
	height: 14
},
	"97px": {
	width: 45,
	height: 14
},
	"98px": {
	width: 46,
	height: 14
},
	"99px": {
	width: 46,
	height: 14
},
	"100px": {
	width: 47,
	height: 14
}
};

let FontCache = {};
function StageRecognition(ImageMatrix) {
  let Matrix = [];
  let Confidence = [];
  let Node = new Set();
  for (let y = 0; y < ImageMatrix.length; y++) {
    Matrix.push([]);
    for (let x = 0; x < ImageMatrix[0].length; x++) {
      let [R, G, B] = ImageMatrix[y][x];
      Matrix[y][x] = (R + G + B) / 3 > 80;
      if (Matrix[y][x]) {
        Node.add(x * 10000 + y);
      }
    }
  }
  let getConnectedArea = new ConnectedAreaRecognition(Matrix, Node, true);
  let ConnectedAreas = getConnectedArea.GetAllConnectedArea().sort((a, b) => a.left - b.left);
  let Chars = [];
  let SplitChar;
  for (let Char of ConnectedAreas) {
    if (Char.height < Matrix.length >> 1) {
      Chars.push("-");
      SplitChar = Char;
    } else {
      Chars.push("");
    }
  }
  let FontSize = getFontSize(SplitChar);
  if (!FontCache[FontSize]) {
    FontCache[FontSize] = genFontData(FontSize);
  }
  for (let [Index, Char] of Chars.entries()) {
    if (Char == "-") {
      Confidence.push(1);
      continue;
    }
    let Result = compareNumber(ConnectedAreas[Index].matrix, FontCache[FontSize]);
    Chars[Index] = Result[0];
    let NumConf = Result[1];
    if (Result[1] < 0.9) {
      Result = compareChar(ConnectedAreas[Index].matrix, FontCache[FontSize]);
      if (Result[1] > NumConf) {
        Chars[Index] = Result[0];
        Confidence.push(Result[1]);
      } else {
        Confidence.push(NumConf);
      }
    } else {
      Confidence.push(NumConf);
    }
  }
  return [Chars.join(''),Confidence.reduce((a,b)=>a+b)/Confidence.length]
}
function getFontSize(CharRect) {
  let Find = false;
  let Ret;
  let Diff = Infinity;
  for (let [Size, Rect] of Object.entries(FontSizeData)) {
    let D = Math.abs(Rect.width - CharRect.width) + Math.abs(Rect.height - CharRect.height);
    if (D <= Diff) {
      Diff = D;
      Ret = Size;
      if (D == 0) {
        Find = true;
      }
    } else if (Find) {
      break;
    }
  }
  return Ret;
}
function compareNumber(Matrix, Font) {
  let Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let Confidence = -Infinity;
  let Result;
  for (let Num of Number) {
    let Conf = compareMatrix(Matrix,Font[Num]);
    if (Conf > Confidence) {
      Confidence = Conf;
      Result = Num;
    }
  }
  return [Result, Confidence];
}
function compareChar(Matrix, Font) {
  let Chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  let Confidence = -Infinity;
  let Result;
  for (let Char of Chars) {
    let Conf = compareMatrix(Matrix,Font[Char]);
    if (Conf > Confidence) {
      Confidence = Conf;
      Result = Char;
    }
  }
  return [Result, Confidence];
}
function compareMatrix(Matrix1, Matrix2) {
  let Width = Math.min(Matrix1[0].length, Matrix2[0].length);
  let Height = Math.min(Matrix1.length, Matrix2.length);
  let Count = 0;
  for (let y = 0; y < Height; y++) {
    for (let x = 0; x < Width; x++) {
      if (Matrix1[y][x] == Matrix2[y][x]) {
        Count++;
      }
    }
  }
  return Count / (Matrix1[0].length * Matrix1.length);
}
// 生成每个字符数据
function genFontData(size) {
  let Canvas = document.createElement("canvas");
  let Ctx = Canvas.getContext("2d");
  Ctx.font = `${size} 'Novecento WideBold'`;
  Ctx.fillStyle = "#000000";
  Ctx.textBaseline = "top";
  let Data = {};
  let Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (let Char of Chars) {
    let Size = Ctx.measureText(Char);
    Canvas.height = Size.actualBoundingBoxAscent + Size.actualBoundingBoxDescent;
    Canvas.width = Size.width;
    Ctx.font = `${size} 'Novecento WideBold'`;
    Ctx.fillStyle = "#000000";
    Ctx.textBaseline = "top";
    Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    Ctx.fillText(Char, 0, Size.actualBoundingBoxAscent);
    let IData = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);
    let XFlags = new Array(Canvas.width).fill(false);
    let XRange = [];
    for (let x = 0; x < Canvas.width; x++) {
      for (let y = 0; y < Canvas.height; y++) {
        let Index = (y * Canvas.width + x) * 4;
        if (IData.data[Index + 3] > 0) {
          XFlags[x] = true;
          break;
        }
      }
    }
    for (let x = 0; x < Canvas.width; x++) {
      if (XFlags[x] && XRange.length == 0) {
        XRange.push(x);
      } else if (XFlags[x]) {
        XRange[1] = x;
      }
    }
    IData = Ctx.getImageData(XRange[0], 0, XRange[1] - XRange[0] + 1, Canvas.height);
    let Matrix = [];
    for (let y = 0; y < IData.height; y++) {
      Matrix.push([]);
      for (let x = 0; x < IData.width; x++) {
        Matrix[y][x] = IData.data[(y * IData.width + x) * 4 + 3] > 0;
      }
    }
    Data[Char] = Matrix;
  }
  return Data;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var ssim_web = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(window,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i});},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e,r){function i(t){return a(t)/t.length}function a(t){for(var e=0,r=0;r<t.length;r++)e+=t[r];return e}function n(t){for(var e=t.data,r=0,i=0;i<e.length;i++)r+=e[i];return r}function d(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]+e;return {data:n,width:i,height:a}}function o(t,e){return "number"==typeof e?function(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]*e;return {data:n,width:i,height:a}}(t,e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<r.length;o++)d[o]=r[o]*n[o];return {data:d,width:i,height:a}}(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.covariance=e.variance=e.mean2d=e.square2d=e.multiply2d=e.divide2d=e.subtract2d=e.add2d=e.sum2d=e.floor=e.sum=e.average=void 0,e.average=i,e.sum=a,e.floor=function(t){for(var e=new Array(t.length),r=0;r<t.length;r++)e[r]=Math.floor(t[r]);return e},e.sum2d=n,e.add2d=function(t,e){return "number"==typeof e?d(t,e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<a;o++)for(var u=o*i,h=0;h<i;h++)d[u+h]=r[u+h]+n[u+h];return {data:d,width:i,height:a}}(t,e)},e.subtract2d=function(t,e){return "number"==typeof e?d(t,-e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<a;o++)for(var u=o*i,h=0;h<i;h++)d[u+h]=r[u+h]-n[u+h];return {data:d,width:i,height:a}}(t,e)},e.divide2d=function(t,e){return "number"==typeof e?function(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]/e;return {data:n,width:i,height:a}}(t,e):function(t,e){for(var r=t.data,i=t.width,a=t.height,n=e.data,d=new Array(r.length),o=0;o<r.length;o++)d[o]=r[o]/n[o];return {data:d,width:i,height:a}}(t,e)},e.multiply2d=o,e.square2d=function(t){return o(t,t)},e.mean2d=function(t){return n(t)/t.data.length},e.variance=function(t,e){void 0===e&&(e=i(t));for(var r=0,a=t.length;a--;)r+=Math.pow(t[a]-e,2);return r/t.length},e.covariance=function(t,e,r,a){void 0===r&&(r=i(t)),void 0===a&&(a=i(e));for(var n=0,d=t.length;d--;)n+=(t[d]-r)*(e[d]-a);return n/t.length};},function(t,e,r){var i=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}});}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r];}),a=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||e.hasOwnProperty(r)||i(e,t,r);};Object.defineProperty(e,"__esModule",{value:!0}),a(r(2),e),a(r(7),e),a(r(11),e),a(r(12),e),a(r(13),e),a(r(3),e),a(r(9),e),a(r(14),e),a(r(15),e),a(r(5),e),a(r(16),e),a(r(6),e);},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2=void 0;var i=r(0),a=r(3),n=r(5),d=r(6);function o(t,e,r){var i=t.data,a=t.width,n=t.height;void 0===r&&(r="full");for(var o=a+e.width-1,u=n+e.height-1,h=d.zeros(u,o).data,f=0;f<e.height;f++)for(var s=0;s<e.width;s++){var v=e.data[f*e.width+s];if(v)for(var c=0;c<n;c++)for(var w=0;w<a;w++)h[(c+f)*o+w+s]+=i[c*a+w]*v;}return l({data:h,width:o,height:u},r,n,e.height,a,e.width)}function u(t,e,r){var n=e.data,d=e.width,o=e.height;void 0===r&&(r="full");var u=f(t,a.ones(o,1),a.ones(1,d),r);return i.multiply2d(u,n[0])}function h(t){for(var e=t.data,r=e[0],i=1;i<e.length;i++)if(e[i]!==r)return !1;return !0}function f(t,e,r,i){void 0===i&&(i="full");var a=Math.max(e.height,e.width),n=Math.max(r.height,r.width),d=o(t,e,"full");return l(o(d,r,"full"),i,t.height,a,t.width,n)}function l(t,e,r,i,a,d){if("full"===e)return t;if("same"===e){var o=Math.ceil((t.height-r)/2),u=Math.ceil((t.width-a)/2);return n.sub(t,o,r,u,a)}return n.sub(t,i-1,r-i+1,d-1,a-d+1)}e.conv2=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[2]&&t[2].data?f.apply(void 0,t):h(t[1])?u.apply(void 0,t):o.apply(void 0,t)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ones=void 0;var i=r(4);e.ones=function(t,e){return void 0===e&&(e=t),i.numbers(t,e,1)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.numbers=void 0,e.numbers=function(t,e,r){for(var i=e*t,a=new Array(i),n=0;n<i;n++)a[n]=r;return {data:a,width:e,height:t}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.sub=void 0,e.sub=function(t,e,r,i,a){for(var n=t.data,d=t.width,o=new Array(a*r),u=0;u<r;u++)for(var h=0;h<a;h++)o[u*a+h]=n[(i+u)*d+e+h];return {data:o,width:a,height:r}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.zeros=void 0;var i=r(4);e.zeros=function(t,e){return void 0===e&&(e=t),i.numbers(t,e,0)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.filter2=void 0;var i=r(2);e.filter2=function(t,e,r){return void 0===r&&(r="same"),i.conv2(e,function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(e.length),n=0;n<i;n++)for(var d=0;d<r;d++)a[n*r+d]=e[(i-1-n)*r+r-1-d];return {data:a,width:r,height:i}}(t),r)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.mod=void 0,e.mod=function(t,e){return t-e*Math.floor(t/e)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.padarray=void 0;var i=r(8);function a(t,e){for(var r=t.width+2*e,a=new Array(r*t.height),n=function(t,e){for(var r=t.width+e.width,i=new Array(t.height*r),a=0;a<t.height;a++){for(var n=0;n<t.width;n++)i[a*r+n]=t.data[a*t.width+n];for(n=0;n<e.width;n++)i[a*r+n+t.width]=e.data[a*e.width+n];}return {data:i,width:r,height:t.height}}(t,function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(e.length),n=0;n<i;n++)for(var d=0;d<r;d++)a[n*r+d]=e[n*r+r-1-d];return {data:a,width:r,height:i}}(t)),d=0;d<t.height;d++)for(var o=-e;o<t.width+e;o++)a[d*r+o+e]=n.data[d*n.width+i.mod(o,n.width)];return {data:a,width:r,height:t.height}}function n(t,e){for(var r=function(t,e){return {data:t.data.concat(e.data),height:t.height+e.height,width:t.width}}(t,function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(e.length),n=0;n<i;n++)for(var d=0;d<r;d++)a[n*r+d]=e[(i-1-n)*r+d];return {data:a,width:r,height:i}}(t)),a=t.height+2*e,n=new Array(t.width*a),d=-e;d<t.height+e;d++)for(var o=0;o<t.width;o++)n[(d+e)*t.width+o]=r.data[i.mod(d,r.height)*t.width+o];return {data:n,width:t.width,height:a}}e.padarray=function(t,e,r,i){var d=e[0],o=e[1];return t.height>=d&&t.width>=o?function(t,e){for(var r=e[0],i=e[1],a=t.width+2*i,n=t.height+2*r,d=new Array(a*n),o=-r;o<0;o++){for(var u=-i;u<0;u++)d[(o+r)*a+u+i]=t.data[(Math.abs(o)-1)*t.width+Math.abs(u)-1];for(u=0;u<t.width;u++)d[(o+r)*a+u+i]=t.data[(Math.abs(o)-1)*t.width+u];for(u=t.width;u<t.width+i;u++)d[(o+r)*a+u+i]=t.data[(Math.abs(o)-1)*t.width+2*t.width-u-1];}for(o=0;o<t.height;o++){for(u=-i;u<0;u++)d[(o+r)*a+u+i]=t.data[o*t.width+Math.abs(u)-1];for(u=0;u<t.width;u++)d[(o+r)*a+u+i]=t.data[o*t.width+u];for(u=t.width;u<t.width+i;u++)d[(o+r)*a+u+i]=t.data[o*t.width+2*t.width-u-1];}for(o=t.height;o<t.height+r;o++){for(u=-i;u<0;u++)d[(o+r)*a+u+i]=t.data[(2*t.height-o-1)*t.width+Math.abs(u)-1];for(u=0;u<t.width;u++)d[(o+r)*a+u+i]=t.data[(2*t.height-o-1)*t.width+u];for(u=t.width;u<t.width+i;u++)d[(o+r)*a+u+i]=t.data[(2*t.height-o-1)*t.width+2*t.width-u-1];}return {data:d,width:a,height:n}}(t,[d,o]):n(a(t,o),d)};},function(t,e,r){var i=this&&this.__assign||function(){return (i=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=void 0;var a=r(1),n=r(0),d=r(17),o=r(18),u=r(19),h=r(20),f=r(21),l={fast:d.ssim,original:o.originalSsim,bezkrovny:u.bezkrovnySsim};function s(t){var e=i(i({},f.defaults),t);return function(t){if(Object.keys(t).forEach((function(t){if(!(t in f.defaults))throw new Error('"'+t+'" is not a valid option')})),"k1"in t&&("number"!=typeof t.k1||t.k1<0))throw new Error("Invalid k1 value. Default is "+f.defaults.k1);if("k2"in t&&("number"!=typeof t.k2||t.k2<0))throw new Error("Invalid k2 value. Default is "+f.defaults.k2);if(!(t.ssim in l))throw new Error("Invalid ssim option (use: "+Object.keys(l).join(", ")+")")}(e),e}function v(t,e,r){var i=(new Date).getTime(),d=function(t){var e=t[0],r=t[1],i=t[2];return l[i.ssim](e,r,i)}(function(t){var e=t[0],r=t[1],i=t[2],a=h.downsample([e,r],i);return [a[0],a[1],i]}(function(t){var e=t[0],r=t[1],i=t[2];return [a.rgb2gray(e),a.rgb2gray(r),i]}(function(t){var e=t[0],r=t[1],i=t[2];if(e.width!==r.width||e.height!==r.height)throw new Error("Image dimensions do not match");return [e,r,i]}([t,e,s(r)]))));return {ssim_map:d,mssim:n.mean2d(d),performance:(new Date).getTime()-i}}e.ssim=v,e.default=v;},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.fspecial=void 0;var i=r(0);e.fspecial=function(t,e,r){void 0===e&&(e=3),void 0===r&&(r=1.5);var a=function(t,e){for(var r=t.data,i=t.width,a=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=Math.exp(-r[d]/(2*Math.pow(e,2)));return {data:n,width:i,height:a}}(function(t){for(var e=2*t+1,r=new Array(Math.pow(e,2)),i=0;i<e;i++)for(var a=0;a<e;a++)r[i*e+a]=Math.pow(i-t,2)+Math.pow(a-t,2);return {data:r,width:e,height:e}}(e=(e-1)/2),r),n=i.sum2d(a);return i.divide2d(a,n)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.imfilter=void 0;var i=r(8),a=r(9),n=r(0),d=r(7);e.imfilter=function(t,e,r,o){return void 0===r&&(r="symmetric"),void 0===o&&(o="same"),t=function(t,e,r,d){if(t=a.padarray(t,n.floor([e/2,r/2]),d),0===i.mod(e,2)&&(t.data=t.data.slice(0,-t.width),t.height--),0===i.mod(r,2)){for(var o=[],u=0;u<t.data.length;u++)(u+1)%t.width!=0&&o.push(t.data[u]);t.data=o,t.width--;}return t}(t,e.width,e.height,r),o=function(t){return "same"===t&&(t="valid"),t}(o),d.filter2(e,t,o)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.normpdf=void 0,e.normpdf=function(t,e,r){var i=t.data,a=t.width,n=t.height;void 0===e&&(e=0),void 0===r&&(r=1);for(var d=new Array(i.length),o=0;o<i.length;o++){var u=(i[o]-e)/r;d[o]=Math.exp(-Math.pow(u,2)/2)/(2.5066282746310007*r);}return {data:d,width:a,height:n}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.rgb2gray=void 0,e.rgb2gray=function(t){for(var e,r,i,a=t.data,n=t.width,d=t.height,o=new Array(n*d),u=0;u<d;u++)for(var h=0;h<n;h++){var f=h+u*n,l=4*f;o[f]=(e=a[l],r=a[l+1],i=a[l+2],Math.round(.29894*e+.58704*r+.11402*i));}return {data:o,width:n,height:d}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.skip2d=void 0,e.skip2d=function(t,e,r){for(var i=e[0],a=e[1],n=e[2],d=r[0],o=r[1],u=r[2],h=Math.ceil((u-d)/o),f=Math.ceil((n-i)/a),l=new Array(h*f),s=0;s<f;s++)for(var v=0;v<h;v++){var c=i+s*a,w=d+v*o;l[s*h+v]=t.data[c*t.width+w];}return {data:l,width:h,height:f}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.transpose=void 0,e.transpose=function(t){for(var e=t.data,r=t.width,i=t.height,a=new Array(r*i),n=0;n<i;n++)for(var d=0;d<r;d++)a[d*i+n]=e[n*r+d];return {data:a,height:r,width:i}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=void 0;var i=r(0),a=r(1);e.ssim=function(t,e,r){var n=a.normpdf(function(t){for(var e=Math.floor(t/2),r=new Array(2*e+1),i=-e;i<=e;i++)r[i+e]=Math.abs(i);return {data:r,width:r.length,height:1}}(r.windowSize),0,1.5),d=Math.pow(2,r.bitDepth)-1,o=Math.pow(r.k1*d,2),u=Math.pow(r.k2*d,2);n=i.divide2d(n,i.sum2d(n));var h=a.transpose(n),f=a.conv2(t,n,h,"valid"),l=a.conv2(e,n,h,"valid"),s=i.square2d(f),v=i.square2d(l),c=i.multiply2d(f,l),w=i.square2d(t),g=i.square2d(e),p=i.subtract2d(a.conv2(w,n,h,"valid"),s),y=i.subtract2d(a.conv2(g,n,h,"valid"),v),m=i.subtract2d(a.conv2(i.multiply2d(t,e),n,h,"valid"),c);return o>0&&u>0?function(t,e,r,a,n,d,o,u){var h=i.add2d(i.multiply2d(t,2),o),f=i.add2d(i.multiply2d(e,2),u),l=i.add2d(i.add2d(r,a),o),s=i.add2d(i.add2d(n,d),u);return i.divide2d(i.multiply2d(h,f),i.multiply2d(l,s))}(c,m,s,v,p,y,o,u):function(t,e,r,a,n,d){var o=i.multiply2d(t,2),u=i.multiply2d(e,2),h=i.add2d(r,a),f=i.add2d(n,d);return i.divide2d(i.multiply2d(o,u),i.multiply2d(h,f))}(c,m,s,v,p,y)};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.originalSsim=void 0;var i=r(0),a=r(1);e.originalSsim=function(t,e,r){var n=a.fspecial("gaussian",r.windowSize,1.5),d=Math.pow(2,r.bitDepth)-1,o=Math.pow(r.k1*d,2),u=Math.pow(r.k2*d,2);n=i.divide2d(n,i.sum2d(n));var h=a.filter2(n,t,"valid"),f=a.filter2(n,e,"valid"),l=i.square2d(h),s=i.square2d(f),v=i.multiply2d(h,f),c=i.square2d(t),w=i.square2d(e),g=i.subtract2d(a.filter2(n,c,"valid"),l),p=i.subtract2d(a.filter2(n,w,"valid"),s),y=i.subtract2d(a.filter2(n,i.multiply2d(t,e),"valid"),v);if(o>0&&u>0){var m=i.add2d(i.multiply2d(v,2),o),b=i.add2d(i.multiply2d(y,2),u),M=i.add2d(i.add2d(l,s),o),_=i.add2d(i.add2d(g,p),u);return i.divide2d(i.multiply2d(m,b),i.multiply2d(M,_))}var j=i.multiply2d(v,2),O=i.multiply2d(y,2),P=i.add2d(l,s),k=i.add2d(g,p);return i.divide2d(i.multiply2d(j,O),i.multiply2d(P,k))};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.bezkrovnySsim=void 0;var i=r(0),a=r(1);function n(t,e,r){var a=t.data,n=e.data,d=r.bitDepth,o=r.k1,u=r.k2,h=Math.pow(2,d)-1,f=Math.pow(o*h,2),l=Math.pow(u*h,2),s=i.average(a),v=i.average(n),c=i.variance(a,s),w=i.variance(n,v);return (2*s*v+f)*(2*i.covariance(a,n,s,v)+l)/((Math.pow(s,2)+Math.pow(v,2)+f)*(c+w+l))}e.bezkrovnySsim=function(t,e,r){for(var i=r.windowSize,d=Math.ceil(t.width/i),o=Math.ceil(t.height/i),u=new Array(d*o),h=0,f=0;f<t.height;f+=i)for(var l=0;l<t.width;l+=i){var s=Math.min(i,t.width-l),v=Math.min(i,t.height-f),c=a.sub(t,l,v,f,s),w=a.sub(e,l,v,f,s);u[h++]=n(c,w,r);}return {data:u,width:d,height:o}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.downsample=void 0;var i=r(0),a=r(1);function n(t,e,r){var i=a.imfilter(t,e,"symmetric","same");return a.skip2d(i,[0,r,i.height],[0,r,i.width])}e.downsample=function(t,e){return "original"===e.downsample?function(t,e,r){void 0===r&&(r=256);var d=Math.min(t.width,e.height)/r,o=Math.round(d);if(o>1){var u=a.ones(o);t=n(t,u=i.divide2d(u,i.sum2d(u)),o),e=n(e,u,o);}return [t,e]}(t[0],t[1],e.maxSize):t};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.defaults=void 0,e.defaults={windowSize:11,k1:.01,k2:.03,bitDepth:8,downsample:"original",ssim:"fast",maxSize:256};}])}));

});

var NumbersHashList = [
	{
		number: 0,
		hash: [
			2,
			9,
			8,
			3,
			0,
			0,
			0,
			0,
			10,
			2,
			0,
			0,
			10,
			10,
			1,
			0,
			10,
			0,
			0,
			0,
			0,
			10,
			8,
			0,
			3,
			0,
			0,
			0,
			0,
			6,
			10,
			2,
			0,
			0,
			0,
			0,
			0,
			4,
			10,
			3,
			0,
			0,
			0,
			0,
			0,
			4,
			10,
			3,
			3,
			0,
			0,
			0,
			0,
			5,
			10,
			2,
			9,
			0,
			0,
			0,
			0,
			9,
			9,
			0,
			10,
			3,
			0,
			0,
			10,
			10,
			1,
			0,
			3,
			9,
			10,
			3,
			0,
			0,
			0,
			0
		],
		count: 10
	},
	{
		number: 1,
		hash: [
			51,
			47,
			37,
			22,
			0,
			0,
			0,
			0,
			54,
			25,
			46,
			29,
			0,
			0,
			0,
			0,
			0,
			6,
			45,
			43,
			0,
			0,
			0,
			0,
			0,
			1,
			45,
			43,
			0,
			0,
			0,
			0,
			0,
			1,
			45,
			43,
			0,
			0,
			0,
			0,
			0,
			2,
			45,
			43,
			0,
			0,
			0,
			0,
			0,
			2,
			45,
			43,
			0,
			0,
			0,
			0,
			0,
			1,
			45,
			43,
			0,
			0,
			0,
			0,
			3,
			6,
			48,
			44,
			0,
			0,
			0,
			0,
			16,
			1,
			1,
			0,
			0,
			0,
			0,
			0
		],
		count: 60
	},
	{
		number: 2,
		hash: [
			35,
			33,
			14,
			2,
			1,
			1,
			0,
			0,
			9,
			0,
			0,
			3,
			33,
			33,
			3,
			0,
			0,
			0,
			0,
			0,
			24,
			36,
			13,
			0,
			0,
			0,
			0,
			0,
			23,
			36,
			14,
			0,
			0,
			0,
			0,
			0,
			29,
			36,
			3,
			0,
			0,
			0,
			0,
			14,
			36,
			12,
			1,
			0,
			0,
			4,
			28,
			36,
			4,
			1,
			0,
			0,
			15,
			32,
			31,
			5,
			0,
			0,
			0,
			0,
			36,
			24,
			3,
			0,
			1,
			2,
			0,
			0,
			9,
			0,
			1,
			1,
			0,
			1,
			1,
			0
		],
		count: 36
	},
	{
		number: 3,
		hash: [
			31,
			28,
			14,
			6,
			0,
			0,
			0,
			0,
			27,
			1,
			0,
			0,
			29,
			30,
			6,
			0,
			0,
			0,
			0,
			0,
			13,
			31,
			16,
			0,
			0,
			0,
			0,
			0,
			23,
			29,
			8,
			0,
			3,
			25,
			32,
			10,
			6,
			0,
			0,
			0,
			2,
			19,
			25,
			14,
			23,
			11,
			1,
			0,
			0,
			0,
			0,
			0,
			5,
			28,
			29,
			2,
			0,
			0,
			0,
			0,
			1,
			23,
			31,
			5,
			1,
			0,
			0,
			1,
			17,
			32,
			25,
			2,
			32,
			21,
			6,
			2,
			1,
			0,
			0,
			0
		],
		count: 32
	},
	{
		number: 4,
		hash: [
			0,
			0,
			0,
			12,
			30,
			17,
			0,
			0,
			0,
			0,
			16,
			30,
			15,
			0,
			0,
			0,
			0,
			2,
			30,
			26,
			0,
			13,
			0,
			0,
			1,
			30,
			29,
			0,
			18,
			30,
			0,
			0,
			27,
			30,
			1,
			0,
			24,
			30,
			0,
			0,
			30,
			4,
			0,
			0,
			24,
			30,
			0,
			0,
			12,
			0,
			0,
			2,
			11,
			9,
			0,
			0,
			3,
			0,
			0,
			3,
			29,
			27,
			0,
			0,
			0,
			0,
			0,
			0,
			22,
			30,
			0,
			0,
			0,
			0,
			0,
			0,
			22,
			30,
			0,
			0
		],
		count: 30
	},
	{
		number: 5,
		hash: [
			34,
			11,
			2,
			0,
			0,
			0,
			0,
			0,
			33,
			1,
			0,
			0,
			1,
			1,
			0,
			0,
			32,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			31,
			0,
			1,
			5,
			0,
			0,
			0,
			0,
			33,
			0,
			0,
			0,
			21,
			18,
			1,
			0,
			10,
			0,
			0,
			0,
			20,
			35,
			33,
			2,
			0,
			0,
			0,
			0,
			0,
			25,
			35,
			6,
			0,
			0,
			0,
			0,
			2,
			29,
			34,
			4,
			0,
			0,
			0,
			3,
			30,
			36,
			23,
			0,
			36,
			25,
			8,
			1,
			3,
			0,
			0,
			0
		],
		count: 36
	},
	{
		number: 6,
		hash: [
			3,
			10,
			13,
			8,
			2,
			0,
			0,
			0,
			13,
			9,
			0,
			0,
			1,
			9,
			7,
			0,
			13,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			6,
			0,
			0,
			3,
			1,
			0,
			0,
			0,
			0,
			0,
			6,
			3,
			2,
			3,
			0,
			0,
			0,
			0,
			0,
			0,
			6,
			13,
			10,
			0,
			2,
			0,
			0,
			0,
			0,
			9,
			13,
			1,
			10,
			0,
			0,
			0,
			0,
			10,
			13,
			1,
			13,
			3,
			0,
			0,
			5,
			13,
			9,
			0,
			7,
			11,
			12,
			5,
			0,
			0,
			0,
			0
		],
		count: 13
	},
	{
		number: 7,
		hash: [
			5,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			2,
			0,
			0,
			0,
			12,
			19,
			8,
			0,
			0,
			0,
			0,
			1,
			18,
			18,
			1,
			0,
			0,
			0,
			0,
			4,
			19,
			0,
			0,
			0,
			0,
			0,
			2,
			19,
			7,
			0,
			0,
			0,
			0,
			0,
			8,
			19,
			0,
			0,
			0,
			0,
			0,
			1,
			18,
			17,
			0,
			0,
			0,
			0,
			0,
			1,
			19,
			14,
			0,
			0,
			0,
			0,
			0,
			2,
			19,
			12,
			0,
			0,
			0,
			0,
			0,
			3,
			19,
			10,
			0,
			0,
			0,
			0
		],
		count: 19
	},
	{
		number: 8,
		hash: [
			12,
			18,
			18,
			8,
			1,
			0,
			0,
			0,
			19,
			3,
			0,
			0,
			13,
			19,
			8,
			0,
			16,
			0,
			0,
			0,
			3,
			17,
			17,
			1,
			19,
			1,
			0,
			0,
			3,
			19,
			17,
			0,
			13,
			19,
			8,
			0,
			3,
			8,
			0,
			0,
			19,
			12,
			0,
			5,
			16,
			6,
			0,
			0,
			9,
			0,
			0,
			0,
			5,
			18,
			19,
			5,
			1,
			0,
			0,
			0,
			0,
			6,
			19,
			11,
			13,
			0,
			0,
			0,
			6,
			18,
			17,
			4,
			17,
			19,
			13,
			5,
			3,
			3,
			0,
			0
		],
		count: 19
	},
	{
		number: 9,
		hash: [
			14,
			17,
			11,
			2,
			1,
			0,
			0,
			0,
			13,
			0,
			0,
			0,
			14,
			16,
			4,
			0,
			1,
			0,
			0,
			0,
			4,
			14,
			16,
			1,
			0,
			0,
			0,
			0,
			0,
			10,
			17,
			3,
			8,
			0,
			0,
			0,
			8,
			16,
			16,
			0,
			17,
			8,
			1,
			0,
			7,
			2,
			10,
			2,
			0,
			3,
			3,
			0,
			0,
			11,
			17,
			2,
			0,
			0,
			0,
			0,
			4,
			16,
			15,
			0,
			12,
			2,
			0,
			1,
			17,
			17,
			1,
			0,
			17,
			10,
			5,
			3,
			0,
			0,
			0,
			0
		],
		count: 17
	}
];

for (let hash of NumbersHashList) {
  if (hash.hash instanceof Array) {
    hash.hash = hash.hash.map(v => v / hash.count);
  }
}
class ItemRecognition {
  constructor(ImageData, Rules, Rect) {
    if (ImageData instanceof Rectangle) {
      this.Bound = Rect;
      this.Confidence = {
        ItemId: -Infinity,
        Count: []
      };
      this.ItemId = "";
      this.Count = NaN;
      return;
    }
    this.Matrix = ImageData;
    this.Width = ImageData[0].length;
    this.Height = ImageData.length;
    this.IData = new Array();
    this.Bound = Rect;
    this.Rules = Rules;
    this.Confidence = {
      ItemId: -Infinity,
      Count: []
    };
    this.prepare();
    this.ItemId = this.getItemId();
    this.Count = this.getCount();
    delete this.Rules;
    delete this.IData;
    delete this.Height;
    delete this.Width;
    delete this.Matrix;
  }
  prepare() {
    let cx = this.Matrix[0].length >> 1;
    let cy = this.Matrix.length >> 1;
    let r = (cx + cy) >> 1;

    for (let y = 0; y < this.Height; y++) {
      for (let x = 0; x < this.Width; x++) {
        let TempColor = this.Matrix[y][x];
        if (Math.hypot(x - cx, y - cy) > r) TempColor = [255, 255, 255];
        this.IData.push(...TempColor, 255);
      }
    }
    this.IData = {
      data: this.IData,
      height: this.Height,
      width: this.Width
    };
  }
  getItemId() {
    let Images = [];
    let Canvas = document.createElement("canvas");
    Canvas.width = this.Width;
    Canvas.height = this.Height;
    let Ctx = Canvas.getContext("2d");
    let Confidence = -Infinity;
    let Result = "";
    for (let Rule of this.Rules) {
      if (!ItemRecognition.Images[Rule.id]) continue;
      Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
      Ctx.drawImage(
        ItemRecognition.Images[Rule.id],
        0,
        0,
        ItemRecognition.Images[Rule.id].width,
        ItemRecognition.Images[Rule.id].height,
        0,
        0,
        Canvas.width,
        Canvas.height
      );
      let ImageD = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);
      Images.push([Rule.id, ImageD]);
    }
    for (let Image of Images) {
      let SSIM = ssim_web.ssim(Image[1], this.IData, { windowSize: 8, ssim: "bezkrovny" }).mssim;
      if (SSIM > Confidence) {
        Confidence = SSIM;
        Result = Image[0];
      }
    }
    this.Confidence.ItemId = Confidence;
    return Result;
  }
  getCount() {
    if (this.ItemId == "") {
      return NaN;
    }
    let Range = this.Rules.find(v => v.id == this.ItemId);
    if (Range) {
      Range = Range.range;
    } else {
      return;
    }
    let NumRange = [Range.upper > 9 ? 0 : Math.max(1, Range.lower), Math.min(9, Range.upper)];
    let NumList = [];
    for (let i = NumRange[0]; i <= NumRange[1]; i++) {
      NumList.push(i);
    }
    if (NumList.length == 1) {
      this.Confidence.Count[0] = 1;
      return NumList[0];
    }
    let XStart = false,
      XEnd = false,
      YStart = 0,
      Find = false;
    let NumberRect = new Rectangle();
    for (let y = this.Height >> 1; y < this.Height; y++) {
      XStart = false;
      XEnd = false;
      for (let x = this.Width >> 1; x < this.Width; x++) {
        let GreyUp = distance =>
          (this.Matrix[y - distance][x][0] + this.Matrix[y - distance][x][1] + this.Matrix[y - distance][x][2]) / 3;
        let GreyNow = (this.Matrix[y][x][0] + this.Matrix[y][x][1] + this.Matrix[y][x][2]) / 3;
        if (
          (this.ItemId == "3301"
            ? Math.abs(GreyNow - GreyUp(1))
            : Math.max(Math.abs(GreyNow - GreyUp(1)), Math.abs(GreyNow - GreyUp(2)), GreyNow - GreyUp(3))) > 20
        ) {
          if (!XStart) {
            XStart = x;
          } else {
            XEnd = x;
          }
        } else {
          if (XEnd - XStart + 1 > 20) {
            Find = true;
            break;
          } else {
            XStart = false;
            XEnd = false;
          }
        }
      }
      if (Find) {
        YStart = y;
        break;
      }
    }
    if (Find) {
      NumberRect.update({
        left: XStart,
        right: XEnd,
        top: YStart,
        bottom: Math.round(this.Bound.height - this.Bound.height * 0.08)
      });
      /* console.log({
        left: NumberRect.left + this.Bound.left,
        right: NumberRect.right + this.Bound.left,
        top: NumberRect.top + this.Bound.top,
        bottom: NumberRect.bottom + this.Bound.top
      });*/
    } else {
      return;
    }
    let NumberMartix = [];
    let NumberNodes = new Set();
    for (let y = 0; y < NumberRect.height; y++) {
      NumberMartix.push([]);
      for (let x = 0; x < NumberRect.width; x++) {
        let [R, G, B] = this.Matrix[y + NumberRect.top][x + NumberRect.left];
        let Grey = (R + G + B) / 3;
        if (Grey >= 120) {
          NumberMartix[y][x] = true;
        } else if (Grey < 120 && Grey > 105) {
          let left, right, top, bottom;
          if (x !== 0) {
            left = this.Matrix[y + NumberRect.top][x + NumberRect.left - 1].reduce((a, b) => a + b) / 3;
          }
          if (x !== NumberRect.width - 1) {
            right = this.Matrix[y + NumberRect.top][x + NumberRect.left + 1].reduce((a, b) => a + b) / 3;
          }
          if (y != 0) {
            top = this.Matrix[y + NumberRect.top - 1][x + NumberRect.left].reduce((a, b) => a + b) / 3;
          }
          if (y !== NumberRect.height - 1) {
            bottom = this.Matrix[y + NumberRect.top + 1][x + NumberRect.left].reduce((a, b) => a + b) / 3;
          }
          if ((left && left > 120) || (right && right > 120) || (top && top > 120) || (bottom && bottom > 120)) {
            NumberMartix[y][x] = true;
          } else {
            NumberMartix[y][x] = false;
          }
        } else {
          NumberMartix[y][x] = false;
        }
        NumberMartix[y][x] = Grey > 80;
        if (NumberMartix[y][x]) {
          NumberNodes.add(x * 10000 + y);
        }
      }
    }
    let GetAllNumber = new ConnectedAreaRecognition(NumberMartix, NumberNodes, true);
    let TempCount = "";
    let Result = GetAllNumber.GetAllConnectedArea(Rect => {
      //console.log(Rect);
      if (
        Rect.point < 20 ||
        Rect.width > Rect.height ||
        Rect.height < 8 ||
        Rect.width < 3 ||
        NumberRect.width - Rect.left < 5 ||
        Rect.left < 5
      ) {
        return false;
      }
      return Rect;
    }).sort((a, b) => a.left - b.left);
    let NumCanvas = document.createElement("canvas");
    NumCanvas.width = 9;
    NumCanvas.height = 10;
    let NumCtx = NumCanvas.getContext("2d");
    for (let Num of Result) {
      let Canvas = document.createElement("canvas");
      Canvas.width = Num.width;
      Canvas.height = Num.height;
      let Ctx = Canvas.getContext("2d");
      let ImgData = Ctx.getImageData(0, 0, Canvas.width, Canvas.height);
      for (let y = 0; y < Num.height; y++) {
        for (let x = 0; x < Num.width; x++) {
          let Index = (y * Canvas.width + x) * 4;
          if (Num.matrix[y][x]) {
            ImgData.data[Index] = 0;
            ImgData.data[Index + 1] = 0;
            ImgData.data[Index + 2] = 0;
          } else {
            ImgData.data[Index] = 255;
            ImgData.data[Index + 1] = 255;
            ImgData.data[Index + 2] = 255;
          }
          ImgData.data[Index + 3] = 255;
        }
      }
      Ctx.putImageData(ImgData, 0, 0);
      NumCtx.clearRect(0, 0, NumCanvas.width, NumCanvas.height);
      NumCtx.drawImage(Canvas, 0, 0, Canvas.width, Canvas.height, 0, 0, NumCanvas.width, NumCanvas.height);
      let DHash = this.getDHash(NumCtx.getImageData(0, 0, NumCanvas.width, NumCanvas.height));
      let NumberResult = this.dHashtoNumber(DHash, NumList);
      TempCount += NumberResult.Num;
      this.Confidence.Count.push(NumberResult.Confidence);
    }
    return Number(TempCount);
  }
  getDHash(item) {
    let HashString = "";
    for (let index = 0; index < item.data.length; index += 4) {
      if (Math.floor(index / 4) % item.width == 0) continue;
      if (
        Math.floor((item.data[index - 4] + item.data[index - 3] + item.data[index - 2]) / 3) >
        Math.floor((item.data[index] + item.data[index + 1] + item.data[index + 2]) / 3)
      ) {
        HashString += 1;
      } else {
        HashString += 0;
      }
    }
    return HashString;
  }
  /**
   *
   * @param {string} hash
   * @param {array} Numbers
   */
  dHashtoNumber(hash, Numbers) {
    let NumConfidence = -Infinity;
    let Num = NaN;
    let AllLength = 80;
    let NumsHashList = NumbersHashList.filter(v => Numbers.includes(v.number));
    for (let NumberDHash of NumsHashList) {
      let Confidence = 0;
      for (let i = 0; i < hash.length; i++) {
        if (hash[i] == "1") {
          Confidence += NumberDHash.hash[i];
        } else {
          Confidence += 1 - NumberDHash.hash[i];
        }
      }
      Confidence /= AllLength;
      if (Confidence > NumConfidence) {
        NumConfidence = Confidence;
        Num = NumberDHash.number;
      }
    }
    return {
      Num: Num,
      Confidence: NumConfidence
    };
  }
  static init(Image) {
    this.Images = Image;
  }
}

class DropsRecognition {
  constructor(img) {
    this.Image = img;
    this.Canvas = document.createElement("canvas");
    //document.body.appendChild(this.Canvas);
    this.Canvas.width = img.width;
    this.Canvas.height = img.height;
    this.ctx = this.Canvas.getContext("2d");
    this.ctx.drawImage(img, 0, 0);
    this.ctx.fillStyle = "#00ff00";
    this.ctx.strokeStyle = "#00ff00";
    this.rawImageData = this.ctx.getImageData(0, 0, img.width, img.height);
    this.matrixImageData = [[]];
    this.BoundData = {};
    this.Stage = {};
    this.Items = [];
    for (let index = 0, x = 0, y = 0; index < this.rawImageData.data.length; index += 4) {
      this.matrixImageData[y][x] = [
        this.rawImageData.data[index],
        this.rawImageData.data[index + 1],
        this.rawImageData.data[index + 2]
      ];
      if (++x == img.width) {
        x = 0;
        if (++y != img.height) this.matrixImageData.push([]);
      }
    }
    this.RectRecognition();
    if (this.Debug) {
      for (let Rect of this.BoundData.mergedRects.Right) {
        this.ctx.strokeRect(Rect.left, Rect.top, Rect.width, Rect.height);
      }
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.strokeRect(
        this.BoundData.Stage.left,
        this.BoundData.Stage.top,
        this.BoundData.Stage.width,
        this.BoundData.Stage.height
      );
    }
    this.detectStage();
    this.detectFurniture();
    this.detectItem();
    delete this.ctx;
    delete this.Canvas;
    delete this.matrixImageData;
    delete this.rawImageData;
    delete this.Image;
  }
  /**
   * 识别图像边界
   */
  RectRecognition() {
    this.BoundData = new RectRecognition(this.matrixImageData);
  }
  detectFurniture() {
    let DetectType = ["LUCKY_DROP", "SPECIAL_DROP", "ALL_DROP"];
    for (let Rect of this.BoundData.Items) {
      if (DetectType.includes(Rect.type)) {
        let OtherItems = this.BoundData.Items.filter(a => a != Rect);
        let AreaDiff =
          OtherItems.reduce((a, OtherItem) => {
            return a + Math.abs(OtherItem.area - Rect.area);
          }, 0) / OtherItems.length;
        if (AreaDiff > 1000) {
          Rect.type = "LUCKY_DROP";
          Rect.AreaDiff = AreaDiff;
        } else if ((Rect.type == "LUCKY_DROP")) {
          Rect.type == "SPECIAL_DROP";
        }
      }
    }
  }
  detectItem() {
    let DetectType = ["NORMAL_DROP", "EXTRA_DROP", "SPECIAL_DROP", "ALL_DROP"];
    for (let Rect of this.BoundData.Items) {
      let Type = Rect.type;
      delete Rect.type;
      let Result = { type: Type };
      if (DetectType.includes(Type)) {
        let DropList = [];
        for (let Drop of DropsRecognition.Stage[this.Stage.Code].dropInfos) {
          if ((Drop.dropType == Type || Type == "ALL_DROP") && Drop.itemId && Drop.itemId != "furni") {
            DropList.push({ id: Drop.itemId, range: Drop.bounds });
          }
        }
        // console.log(Type);
        let Item = new ItemRecognition(
          this.getImageMatrix(Rect.left, Rect.top, Rect.right, Rect.bottom),
          DropList,
          Rect
        );
        Object.assign(Result, Item);
      } else if (Type == "LUCKY_DROP") {
        let Item = new ItemRecognition(Rect);
        Item.ItemId = "furni";
        Item.Count = 1;
        Item.Confidence.Count = [1];

        Item.Confidence.ItemId = (ratio => {
          if (ratio > 1) {
            return 1;
          }
          let range,linear_val;
          if (ratio < 0.5) {
            range = 1.0 - 0.5;
            linear_val = ratio / (range * 2.0);
            return linear_val;
          } else {
            range = 0.5;
            linear_val = ratio / (range * 2.0);
            return linear_val + (1.0 - linear_val) * Math.pow((linear_val - 0.5) * 2, 0.2);
          }
        })(Rect.AreaDiff/2000);
        Object.assign(Result, Item);
      }
      this.Items.push(Result);
    }
  }
  getImageMatrix(x1, y1, x2, y2) {
    let Matrix = [];
    for (let y = y1; y <= y2; y++) {
      let ry = Matrix.push([]) - 1;
      for (let x = x1, rx = 0; x <= x2; x++, rx++) {
        Matrix[ry][rx] = [].concat(this.matrixImageData[y][x]);
      }
    }
    return Matrix;
  }
  detectStage() {
    [this.Stage.Code, this.Stage.Confidence] = StageRecognition(
      this.getImageMatrix(
        this.BoundData.Stage.left,
        this.BoundData.Stage.top,
        this.BoundData.Stage.right,
        this.BoundData.Stage.bottom
      )
    );
  }
  static init(dataName, Data) {
    switch (dataName) {
      case "Stage":
        this.Stage = Data;
        break;
      case "ItemImage":
        ItemRecognition.init(Data);
        break;
    }
  }
}

var webfontloader = createCommonjsModule(function (module) {
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return +new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document;}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild);}function v(a){a.parentNode&&a.parentNode.removeChild(a);}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e]);}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e]);}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"");}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return !0;return !1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null);}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d();},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d();}):setTimeout(function(){e=!0;d();},0);u(a,"head",b);}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f));};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")));},d||5E3);return f}return null}function B(){this.a=0;this.c=null;}function C(a){a.a++;return function(){a.a--;D(a);}}function E(a,b){a.c=b;D(a);}function D(a){0==a.a&&a.c&&(a.c(),a.c=null);}function F(a){this.a=a||"-";}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10));}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d);}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b}function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes;}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading");}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d);}K(a,"inactive");}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]();}function ja(){this.c={};}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c));}return d}function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f);}function N(a){u(a.c,"body",a.a);}function O(a){return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")}function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0;}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25);},function(){e();});}f();}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f);});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a);},function(){b.j(b.a);});};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m);}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10));}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this);};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return !0;return !1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v);}function ma(a){setTimeout(p(function(){U(this);},a),50);}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a);},a),0);}function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c;}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this);};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e);}K(b,"fontinactive",a);na(this);};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a));}function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0;}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a);};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else {b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0;}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r);}for(h=0;h<l.length;h++)l[h].start();}},0);}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c);});}function ra(a,b){this.c=a;this.a=b;}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k));}a(e);}else setTimeout(function(){b();},50);}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b());}).id="__MonotypeAPIScript__"+d;}else a([]);};function sa(a,b){this.c=a;this.a=b;}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f);});};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||"";}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f));}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b}function ya(a){this.f=a;this.a=[];this.c={};}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else {k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("");}}else k="";k&&g.push(k);}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d));}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]));}}function Ea(a,b){this.c=a;this.a=b;}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa);});};function Ga(a,b){this.c=a;this.a=b;}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0});}catch(l){}a(e);}},2E3):a([]);};function Ha(a,b){this.c=a;this.f=b;this.a=[];}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)));}a(d.a);},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([]);})):a([]);};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());
});

let FontLoaded = new Promise((resolve, reject) => {
  webfontloader.load({
    custom: {
      families: ["Novecento WideBold"]
    },
    active: function () {
      resolve();
    }
  });
});

export default DropsRecognition;
export { DropsRecognition as DropRecognition, FontLoaded, Rectangle };
