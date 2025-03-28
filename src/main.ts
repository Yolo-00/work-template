import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "@/routers/index";
import pinia from "@/stores/index";
import directives from "@/directives/index";
import * as Icons from "@element-plus/icons-vue";
import i18n from "@/language/index";
import componentsPlugin from "@/components/index";
import VxeUITable from "vxe-table";
import VueCesium from "vue-cesium";

import "vxe-table/lib/style.css";
import "element-plus/dist/index.css";
import "@/styles/app.scss";
import "virtual:uno.css";
import "virtual:svg-icons-register";
import "animate.css";
import "vue-cesium/dist/index.css";

const app = createApp(App);

Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app
	.use(ElementPlus)
	.use(componentsPlugin)
	.use(pinia)
	.use(router)
	.use(directives)
	.use(i18n)
	.use(VxeUITable)
	.use(VueCesium)
	.mount("#app");
