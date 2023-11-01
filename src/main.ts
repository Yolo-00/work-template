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
import "@/styles/tailwindcss.scss";

const app = createApp(App);

Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus).use(pinia).use(router).use(directives).use(i18n).mount("#app");
