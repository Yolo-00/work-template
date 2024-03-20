import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "@/routers/index";
import pinia from "@/stores/index";
import directives from "@/directives/index";
import "virtual:svg-icons-register";
import * as Icons from "@element-plus/icons-vue";
import i18n from "@/language/index";

import "element-plus/dist/index.css";
import "@/styles/app.scss";
import "virtual:uno.css";

const app = createApp(App);

// 图片预览组件
import ImgPreview from "@/components/ImgPreview/index.vue";
// icon
import SvgIcon from "@/components/SvgIcon/index.vue";
// 富文本
import WangEditor from "@/components/WangEditor/index.vue";

app.component("ImgPreview", ImgPreview);
app.component("SvgIcon", SvgIcon);
app.component("WangEditor", WangEditor);

Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus).use(pinia).use(router).use(directives).use(i18n).mount("#app");
