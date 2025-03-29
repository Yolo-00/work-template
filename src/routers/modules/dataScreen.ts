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
			localeKey: "router.dataScreen",
			key: "dataScreen",
			icon: "xianxingxiarilengyin",
			sort: 2
		}
	},
	{
		path: "/cesiumContainer",
		name: "CesiumContainer",
		component: "/dataScreen/cesiumContainer/index",
		meta: {
			hidden: true,
			noLayout: true,
			title: "Cesium",
			key: "CesiumContainer",
			icon: "xianxingxiarilengyin",
			sort: 3
		}
	}
];

export default dataScreenRouter;
