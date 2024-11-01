import type { CustomRouteRecordRaw } from "../interface";

// 组件模块
const componentRouter: Array<CustomRouteRecordRaw> = [
	{
		path: "/component",
		name: "Component",
		meta: {
			title: "组件模块",
			key: "component",
			icon: "xianxingdiqiu",
			sort: 3
		},
		redirect: "/component/codeEditor",
		children: [
			{
				path: "/component/codeEditor",
				name: "CodeEditor",
				component: "/components/codeEditor/index",
				meta: {
					requiresAuth: true,
					title: "代码编辑器",
					key: "codeEditor",
					icon: "xianxingfeiji",
					sort: 1
				}
			},
			{
				path: "/component/wangEditor",
				name: "WangEditor",
				component: "/components/wangEditor/index",
				meta: {
					title: "富文本编辑器",
					key: "wangEditor",
					icon: "xianxinglvhangriji",
					sort: 2
				}
			},
			{
				path: "/component/mdEditor",
				name: "MdEditor",
				component: "/components/mdEditor/index",
				meta: {
					requiresAuth: true,
					title: "Markdown编辑器",
					key: "mdEditor",
					icon: "xianxingdaoyu",
					sort: 3
				}
			},
			{
				path: "/component/preview",
				name: "Preview",
				component: "/components/preview/index",
				meta: {
					title: "文件预览",
					key: "preview",
					icon: "xianxingfanchuan",
					sort: 4
				}
			},
			{
				path: "/component/masonry",
				name: "Masonry",
				component: "/components/masonry/index",
				meta: {
					requiresAuth: true,
					title: "瀑布流布局",
					key: "masonry",
					icon: "xianxingzijiayou",
					sort: 5
				}
			},
			{
				path: "/component/qrCode",
				name: "QrCode",
				component: "/components/qrCode/index",
				meta: {
					title: "生成二维码",
					key: "qrCode",
					icon: "xianxingtianqiyubao",
					sort: 6
				}
			},
			{
				path: "/component/fragment",
				name: "Fragment",
				component: "/components/fragment/index",
				meta: {
					requiresAuth: true,
					title: "碎片化图片",
					key: "fragment",
					noKeepAlive: true,
					icon: "xianxingditu",
					sort: 7
				}
			},
			{
				path: "/component/splitPanel",
				name: "SplitPanel",
				component: "/components/splitPanel/index",
				meta: {
					title: "分割面板",
					key: "splitPanel",
					icon: "xianxingxiarilengyin",
					sort: 8
				}
			},
			{
				path: "/component/draggable",
				name: "Draggable",
				component: "/components/draggable/index",
				meta: {
					title: "拖动面板",
					key: "draggable",
					icon: "xianxingzijiayou",
					sort: 9
				}
			},
			{
				path: "/component/jsonPretty",
				name: "JsonPretty",
				component: "/components/jsonPretty/index",
				meta: {
					title: "JSON美化",
					key: "jsonPretty",
					icon: "xianxingyoulun",
					sort: 10
				}
			}
		]
	}
];

export default componentRouter;
