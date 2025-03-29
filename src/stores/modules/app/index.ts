import { defineStore } from "pinia";
import piniaPersistConfig from "@/configs/piniaPersist";
import type { appStoreType } from "../../interface";
import type { CustomRouteRecordRaw } from "@/routers/interface/index";
import router from "@/routers";
import { cloneDeep } from "lodash";

// * 导入所有router
const metaRouters = import.meta.glob("@/routers/modules/*.ts", { eager: true });
// * 导入所有views
const viewsModules = import.meta.glob("@/views/**/*.vue");
// * 处理路由表
export const routerArray: CustomRouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item] as object).forEach(key => {
		routerArray.push(...(metaRouters[item] as any)[key]);
	});
});

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useAppStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "appState",
	// state: 返回对象的函数
	state: (): appStoreType => ({
		// 菜单是否折叠
		isCollapse: false,
		// 面包屑
		crumbsList: [],
		// 菜单列表
		menuList: [],
		// 添加路由列表
		addRouterList: []
	}),
	getters: {},
	actions: {
		// set菜单是否折叠
		setIsCollapse(isCollapse: boolean) {
			this.isCollapse = isCollapse;
		},
		// set面包屑
		setCrumbsList(crumbsList: CustomRouteRecordRaw[]) {
			this.crumbsList = crumbsList;
		},
		// set菜单列表
		async getMenuList() {
			const routerList = await this.getRouterArray();
			this.menuList = getChangeMenuList(routerList as CustomRouteRecordRaw[]);
			this.addRouterList = getChangeRouterList(routerList as CustomRouteRecordRaw[]);
		},
		// 获取路由表,模拟请求接口获取路由表
		getRouterArray() {
			return new Promise(resolve => {
				// 因为是模拟数据，需要拷贝一下防止数据污染
				resolve(cloneDeep(routerArray));
			});
		},
		// 清除路由
		clearRouter() {
			this.addRouterList.forEach(route => {
				router.removeRoute(route.name as string);
			});
			this.addRouterList = [];
			this.menuList = [];
		}
	},
	// [] 需要持久化的state,不传默认全部持久化
	persist: piniaPersistConfig("appState", ["isCollapse", "crumbsList"])
});

// 处理菜单表
export const getChangeMenuList = (routers: CustomRouteRecordRaw[]) => {
	return routers
		.map(item => {
			if (item.children && item.children.length > 0) {
				item.children = getChangeMenuList(item.children);
			}
			return item;
		})
		.filter(item => !item.meta?.hidden)
		.sort((a: any, b: any) => a.meta?.sort - b.meta?.sort);
};

// 处理路由表
export const getChangeRouterList = (menuList: CustomRouteRecordRaw[], list: CustomRouteRecordRaw[] = []) => {
	menuList.forEach(item => {
		if (item.children) {
			getChangeRouterList(item.children, list);
		}
		if (item.component) {
			item.component = viewsModules["/src/views" + item.component + ".vue"];
		}
		list.push(item);
	});
	return list;
};
