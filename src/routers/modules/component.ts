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
		redirect: "/component/wangEditor",
		children: [
			{
				path: "/component/wangEditor",
				name: "WangEditor",
				component: "/components/wangEditor/index",
				meta: {
					title: "富文本编辑器",
					localeKey: "router.component.wangEditor",
					key: "wangEditor",
					icon: "xianxinglvhangriji",
					sort: 1
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
					sort: 2
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
					sort: 3
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
					sort: 4
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
					sort: 5
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
					sort: 6
				}
			}
		]
	}
];

export default componentRouter;
