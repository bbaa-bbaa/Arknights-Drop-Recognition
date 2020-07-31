import mdui from "mdui";
import "mdui/dist/css/mdui.css";
import { DropRecognition, FontLoaded } from "./DropRecognition";
import axios from "axios";
let $ = mdui.$;
let ItemtoName = {};
FontLoaded.then(() => {
  $("#LoadingText").text("正在从企鹅物流获取物品列表");
  return axios.get("https://penguin-stats.io/PenguinStats/api/v2/items");
})
  .then(data => {
    for (let Item of data.data) {
      ItemtoName[Item.itemId] = Item.name;
    }
    $("#LoadingText").text("正在从企鹅物流获取关卡列表");
    return axios.get("https://penguin-stats.io/PenguinStats/api/v2/stages?server=CN");
  })
  .then(Stages => {
    let oStage = {};
    for (let Stage of Stages.data) {
      oStage[Stage.code] = Stage;
    }
    DropRecognition.init("Stage", oStage);
    $("#LoadingText").text("正在获取物品图片列表");
    return axios.get("https://static.bbaasite.cn/akitems/Items.json");
  })
  .then(Items => {
    $("#LoadingText").text("正在加载物品图片");
    return loadImages(Items.data);
  })
  .then(Images => {
    DropRecognition.init("ItemImage", Images);
  })
  .then(() => {
    $("#Loading").hide();
    $("#Main").show();
    $("button").on("click", () => {
      $("#File").get(0).click();
      $("#File").on("change", function () {
        for (let File of this.files) {
          try {
            if (!File.type.match("image.*")) {
              continue;
            }
          } catch (e) {
            continue;
          }
          let Reader = new FileReader();
          Reader.onload = function () {
            Recognition(this.result);
          };
          Reader.readAsDataURL(File);
        }
      });
    });
  });
function Recognition(data) {
  let img = new Image();
  let Element = $('<div class="mdui-row"></div>');
  let showImg = new Image();
  showImg.src = data;
  $(showImg).addClass("csc");
  Element.append($('<div class="mdui-col-xs-12 image-box"></div>').append(showImg));
  $("#DataArea").append(Element);
  img.onload = () => {
    let Start = new Date().getTime();
    try {
      let Result = new DropRecognition(img);
      let End = new Date().getTime();
      console.log(Result);
      let TBody = Element.append(
        `
      <table class="mdui-table">
        <thead>
          <tr>
            <th>关卡代码</th>
            <th>${Result.Stage.Code}</th>
            <th>可信度</th>
            <th>${Result.Stage.Confidence.toFixed(5)}</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
     `
      ).find("tbody");

      for (let [Index, Item] of Result.Items.entries()) {
        let tr = TBody.append("<tr></tr>").children().last();
        tr.append(`<td>物品${Index + 1}</td>`);
        tr.append(`<td>类型:${Item.type}</td>`);
        if (Item.ItemId) {
          tr.append(`<td>名称:${ItemtoName[Item.ItemId]}(${Item.Confidence.ItemId.toFixed(5)})</td>`);
          tr.append(`<td>数量:${Item.Count}(${Item.Confidence.Count.map(a => a.toFixed(5)).join(",")})</td>`);
        } else {
          tr.append(`<td>未参与识别</td>`);
          tr.append(`<td>未参与识别</td>`);
        }
      }
      tr.append(`<tr>识别用时${End - Start}ms</tr>`);
    } catch (e) {
      tr.append(`<div class="mdui-col-xs-12">发生错误${e}</div>`);
      throw e;
    }
    mdui.mutation();
  };
  img.src = data;
}
async function loadImages(Items) {
  let Count = 0;
  let ImageEle = {};
  await new Promise(resolve => {
    for (let Name of Items) {
      let Img = new Image();
      Img.crossOrigin = "Anonymous";
      ImageEle[Name] = Img;
      Img.onload = function () {
        $("#LoadingText").text(`正在加载物品图片${Count + 1}/${Items.length}`);
        if (++Count == Items.length) {
          resolve();
        }
      };
      Img.onerror = function () {
        setTimeout(() => {
          let I = new Image();
          ImageEle[Name] = I;
          I.crossOrigin = "Anonymous";
          I.onerror = this.onerror;
          I.onload = this.onload;
          Img.src = "https://static.bbaasite.cn/akitems/" + Name + ".png";
        }, 1000);
      };
      Img.src = "https://static.bbaasite.cn/akitems/" + Name + ".png";
    }
  });
  return ImageEle;
}
