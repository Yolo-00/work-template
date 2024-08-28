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
			}
		]
	}
];

export default componentRouter;
