import type { App } from "vue";
// 图片预览组件
import ImagePreview from "@/components/ImagePreview/index";
// icon
import SvgIcon from "@/components/SvgIcon/index";
// 富文本
import WangEditor from "@/components/WangEditor/index";

export default {
	install: function (app: App<Element>) {
		app.component("ImagePreview", ImagePreview);
		app.component("SvgIcon", SvgIcon);
		app.component("WangEditor", WangEditor);
	}
};
