import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "@/styles/app.scss";
import router from "@/routers/index";
import pinia from "@/stores/index";
import directives from "@/directives/index";
import "virtual:svg-icons-register";
import * as Icons from "@element-plus/icons-vue";

const app = createApp(App);

Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus, { locale: zhCn }).use(pinia).use(router).use(directives).mount("#app");
