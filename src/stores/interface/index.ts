export interface GlobalStoreType {
	token: string;
	userInfo: any;
	language: LanguageType;
}

export interface appStoreType {
	isCollapse: boolean;
}

// * 语言
export type LanguageType = "zh" | "en";
