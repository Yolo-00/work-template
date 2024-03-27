import { App } from "vue";
// 图片预览组件
import ImgPreview from "@/components/ImgPreview/index.vue";
// icon
import SvgIcon from "@/components/SvgIcon/index.vue";
// 富文本
import WangEditor from "@/components/WangEditor/index.vue";

export default {
	install: function (app: App<Element>) {
		app.component("ImgPreview", ImgPreview);
		app.component("SvgIcon", SvgIcon);
		app.component("WangEditor", WangEditor);
	}
};
