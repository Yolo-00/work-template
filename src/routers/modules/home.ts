import type { CustomRouteRecordRaw } from "../interface";

// 首页模块
const homeRouter: Array<CustomRouteRecordRaw> = [
	{
		path: "/home",
		name: "Home",
		component: "/home/index",
		meta: {
			requiresAuth: true,
			title: "首页",
			key: "home",
			icon: "xianxingxiarilengyin",
			sort: 1
		}
	}
];

export default homeRouter;
