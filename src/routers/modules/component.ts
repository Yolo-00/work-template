import { RouteRecordRaw } from "vue-router";

// 首页模块
const componentRouter: Array<RouteRecordRaw> = [
	{
		path: "/component",
		name: "Component",
		component: () => import("@/layouts/index.vue"),
		redirect: "/component/codeEditor",
		meta: {
			requiresAuth: true,
			title: "组件模块",
			key: "component",
			icon: "xianxingdiqiu"
		},
		children: [
			{
				path: "codeEditor",
				name: "CodeEditor",
				component: () => import("@/views/components/codeEditor/index.vue"),
				meta: {
					requiresAuth: true,
					title: "代码编辑器",
					key: "codeEditor",
					icon: "xianxingfeiji"
				}
			},
			{
				path: "wangEditor",
				name: "WangEditor",
				component: () => import("@/views/components/wangEditor/index.vue"),
				meta: {
					requiresAuth: true,
					title: "富文本编辑器",
					key: "wangEditor",
					icon: "xianxinglvhangriji"
				}
			},
			{
				path: "mdEditor",
				name: "MdEditor",
				component: () => import("@/views/components/mdEditor/index.vue"),
				meta: {
					requiresAuth: true,
					title: "Markdown编辑器",
					key: "mdEditor",
					icon: "xianxingdaoyu"
				}
			},
			{
				path: "preview",
				name: "Preview",
				component: () => import("@/views/components/preview/index.vue"),
				meta: {
					requiresAuth: true,
					title: "文件预览",
					key: "preview",
					icon: "xianxingfanchuan"
				}
			},
			{
				path: "masonry",
				name: "Masonry",
				component: () => import("@/views/components/masonry/index.vue"),
				meta: {
					requiresAuth: true,
					title: "瀑布流布局",
					key: "masonry",
					icon: "xianxingzijiayou"
				}
			},
			{
				path: "qrCode",
				name: "QrCode",
				component: () => import("@/views/components/qrCode/index.vue"),
				meta: {
					requiresAuth: true,
					title: "生成二维码",
					key: "qrCode",
					icon: "xianxingtianqiyubao"
				}
			},
			{
				path: "fragment",
				name: "Fragment",
				component: () => import("@/views/components/fragment/index.vue"),
				meta: {
					requiresAuth: true,
					title: "碎片化图片",
					key: "fragment",
					noKeepAlive: true,
					icon: "xianxingditu"
				}
			},
			{
				path: "splitPanel",
				name: "SplitPanel",
				component: () => import("@/views/components/splitPanel/index.vue"),
				meta: {
					requiresAuth: true,
					title: "分割面板",
					key: "splitPanel",
					icon: "xianxingxiarilengyin"
				}
			},
			{
				path: "draggable",
				name: "Draggable",
				component: () => import("@/views/components/draggable/index.vue"),
				meta: {
					requiresAuth: true,
					title: "拖动面板",
					key: "draggable",
					icon: "xianxingzijiayou"
				}
			},
			{
				path: "jsonPretty",
				name: "JsonPretty",
				component: () => import("@/views/components/jsonPretty/index.vue"),
				meta: {
					requiresAuth: true,
					title: "JSON美化",
					key: "jsonPretty",
					icon: "xianxingyoulun"
				}
			}
		]
	}
];

export default componentRouter;
