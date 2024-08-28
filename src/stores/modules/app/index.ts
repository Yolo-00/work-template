import { defineStore } from "pinia";
import piniaPersistConfig from "@/configs/piniaPersist";
import type { appStoreType } from "../../interface";
import { RouteRecordNormalized } from "vue-router";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useAppStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "appState",
	// state: 返回对象的函数
	state: (): appStoreType => ({
		// 菜单是否折叠
		isCollapse: false,
		// 面包屑
		crumbsList: []
	}),
	getters: {},
	actions: {
		// set菜单是否折叠
		setIsCollapse(isCollapse: boolean) {
			this.isCollapse = isCollapse;
		},
		// set面包屑
		setCrumbsList(crumbsList: RouteRecordNormalized[]) {
			this.crumbsList = crumbsList;
		}
	},
	// [] 需要持久化的state,不传默认全部持久化
	persist: piniaPersistConfig("appState")
});
