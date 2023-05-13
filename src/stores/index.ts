import { defineStore, createPinia } from "pinia";
import piniaPersistConfig from "@/configs/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import type { GlobalStoreType, languageType } from "./interface";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	// state: 返回对象的函数
	state: (): GlobalStoreType => ({
		// token
		token: "",
		// userInfo
		userInfo: "",
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
		setLanguage(language: languageType) {
			this.language = language;
		}
	},
	persist: piniaPersistConfig("GlobalState")
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
