import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "@/routers/index";
import pinia from "@/stores/index";
import directives from "@/directives/index";
import * as Icons from "@element-plus/icons-vue";
import i18n from "@/language/index";
import componentsPlugin from "@/components/index";

import "element-plus/dist/index.css";
import "@/styles/app.scss";
import "virtual:uno.css";
import "virtual:svg-icons-register";

const app = createApp(App);

Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus).use(componentsPlugin).use(pinia).use(router).use(directives).use(i18n).mount("#app");
