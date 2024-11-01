import { defineStore } from "pinia";
import piniaPersistConfig from "@/configs/piniaPersist";
import type { GlobalStoreType, LanguageType } from "../../interface";
import router from "@/routers";
import { useAppStore } from "../app/index";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useGlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "globalState",
	// state: 返回对象的函数
	state: (): GlobalStoreType => ({
		// token
		token: "",
		// userInfo
		userInfo: {},
		// language
		language: "zh"
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token;
		},
		// setUserInfo
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo;
		},
		// setLanguage
		setLanguage(language: LanguageType) {
			this.language = language;
		},
		// reset
		setReset() {
			const appStore = useAppStore();
			this.setToken("");
			this.setUserInfo({});
			router.replace("/login");
			appStore.clearRouter();
		}
	},
	// [] 需要持久化的state,不传默认全部持久化
	persist: piniaPersistConfig("globalState", ["token", "userInfo"])
});
