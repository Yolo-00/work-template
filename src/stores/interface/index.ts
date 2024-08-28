import { RouteRecordNormalized } from "vue-router";

export interface GlobalStoreType {
	token: string;
	userInfo: any;
	language: LanguageType;
}

export interface appStoreType {
	isCollapse: boolean;
	crumbsList: RouteRecordNormalized[];
}

// * 语言
export type LanguageType = "zh" | "en";
