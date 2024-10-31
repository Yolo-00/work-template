import type { CustomRouteRecordRaw } from "../interface";

// 数据大屏模块
const dataScreenRouter: Array<CustomRouteRecordRaw> = [
	{
		path: "/dataScreen",
		name: "DataScreen",
		component: "/dataScreen/index",
		meta: {
			noLayout: true,
			title: "数据大屏",
			key: "dataScreen",
			icon: "xianxingxiarilengyin",
			sort: 2
		}
	}
];

export default dataScreenRouter;
