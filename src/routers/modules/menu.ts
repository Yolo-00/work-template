import type { CustomRouteRecordRaw } from "../interface";

// 首页模块
const menuRouter: Array<CustomRouteRecordRaw> = [
	{
		path: "/menu",
		name: "Menu",
		meta: {
			title: "菜单嵌套",
			localeKey: "router.menu.module",
			key: "menu",
			icon: "xianxingfeiji",
			sort: 4
		},
		redirect: "/menu/menu-1",
		children: [
			{
				path: "/menu/menu-1",
				name: "Menu-1",
				component: "/menu/menu-1/index",
				meta: {
					title: "菜单-1",
					localeKey: "router.menu.menu1",
					key: "menu-1",
					icon: "xianxingfeiji",
					sort: 1
				}
			},
			{
				path: "/menu/menu-2",
				name: "Menu-2",
				meta: {
					title: "菜单-2",
					localeKey: "router.menu.menu2",
					key: "menu-2",
					icon: "xianxingfeiji",
					sort: 2
				},
				redirect: "/menu/menu-2/menu-2-1",
				children: [
					{
						path: "/menu/menu-2/menu-2-1",
						name: "Menu-2-1",
						component: "/menu/menu-2/menu-2-1/index",
						meta: {
							title: "菜单-2-1",
							localeKey: "router.menu.menu2_1",
							key: "menu-2-1",
							icon: "xianxingfeiji",
							sort: 1
						}
					},
					{
						path: "/menu/menu-2/menu-2-2",
						name: "Menu-2-2",
						component: "/menu/menu-2/menu-2-2/index",
						meta: {
							title: "菜单-2-2",
							localeKey: "router.menu.menu2_2",
							key: "menu-2-2",
							icon: "xianxingfeiji",
							sort: 2
						}
					}
				]
			}
		]
	}
];

export default menuRouter;
