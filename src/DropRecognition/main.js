import Rectangle from "./src/Rectangle";
import DropRecognition from "./src/DropRecognition";
import WebFont from "webfontloader";
let FontLoaded = new Promise((resolve, reject) => {
  WebFont.load({
    custom: {
      families: ["Novecento WideBold"]
    },
    active: function () {
      resolve();
    }
  });
});
export { DropRecognition, Rectangle,FontLoaded };
export default DropRecognition;
