import { RouteRecordRaw } from "vue-router";

// 首页模块
const componentRouter: Array<RouteRecordRaw> = [
	{
		path: "/component",
		name: "Component",
		component: () => import("@/layouts/index.vue"),
		redirect: "/component/index",
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
				component: () => import("@/views/components/WangEditor/index.vue"),
				meta: {
					requiresAuth: true,
					title: "富文本编辑器",
					key: "wangEditor",
					icon: "xianxinglvhangriji"
				}
			}
		]
	}
];

export default componentRouter;
