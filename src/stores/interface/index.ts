export interface GlobalStoreType {
	token: string;
	userInfo: any;
	language: languageType;
}

// * 语言
export type languageType = "zh" | "en";
