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

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn }).use(pinia).use(router).use(directives).mount("#app");
