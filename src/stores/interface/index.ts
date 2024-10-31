import { CustomRouteRecordRaw } from "@/routers/interface/index";

export interface GlobalStoreType {
	token: string;
	userInfo: any;
	language: LanguageType;
}

export interface appStoreType {
	isCollapse: boolean;
	crumbsList: CustomRouteRecordRaw[];
	menuList: CustomRouteRecordRaw[];
	addRouterList: CustomRouteRecordRaw[];
}

// * 语言
export type LanguageType = "zh" | "en";
