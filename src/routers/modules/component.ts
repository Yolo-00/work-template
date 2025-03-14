import type { CustomRouteRecordRaw } from "../interface";

// 组件模块
const componentRouter: Array<CustomRouteRecordRaw> = [
	{
		path: "/component",
		name: "Component",
		meta: {
			title: "组件模块",
			localeKey: "router.component.module",
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
					title: "代码编辑器",
					localeKey: "router.component.codeEditor",
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
					localeKey: "router.component.wangEditor",
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
					title: "Markdown编辑器",
					localeKey: "router.component.mdEditor",
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
					localeKey: "router.component.preview",
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
					title: "瀑布流布局",
					localeKey: "router.component.masonry",
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
					localeKey: "router.component.qrCode",
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
					title: "碎片化图片",
					localeKey: "router.component.fragment",
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
					localeKey: "router.component.splitPanel",
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
					localeKey: "router.component.draggable",
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
					localeKey: "router.component.jsonPretty",
					key: "jsonPretty",
					icon: "xianxingyoulun",
					sort: 10
				}
			},
			{
				path: "/component/virtualTable",
				name: "virtualTable",
				component: "/components/virtualTable/index",
				meta: {
					title: "虚拟表格",
					localeKey: "router.component.virtualTable",
					key: "virtualTable",
					icon: "xianxingzijiayou",
					sort: 11
				}
			}
		]
	}
];

export default componentRouter;
