/// <reference types="vite/client" />

declare global {
	interface Navigator {
		msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
		browserLanguage: string;
	}
}

declare interface Navigator {
	msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
	browserLanguage: string;
}

declare module "nprogress";
declare module "qs";

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
	VITE_API_URL: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_APP_TITLE: string;
	VITE_DROP_CONSOLE: boolean;
	VITE_PROXY_URL: string;
	VITE_BUILD_GZIP: boolean;
	VITE_REPORT: boolean;
	VITE_IMG_URL: string;
}
