import { RouteRecordRaw } from "vue-router";

// 首页模块
const errorRouter: Array<RouteRecordRaw> = [
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/error/404.vue"),
		meta: {
			requiresAuth: false,
			title: "404",
			key: "err"
		}
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
		meta: {
			requiresAuth: false,
			title: "err"
		}
	}
];

export default errorRouter;
