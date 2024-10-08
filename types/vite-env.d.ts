/// <reference types="vite/client" />

declare interface Navigator {
	msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
	browserLanguage: string;
}

declare module "nprogress";
declare module "qs";

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_PORT: number;
	readonly VITE_OPEN: boolean;
	readonly VITE_APP_TITLE: string;
	readonly VITE_REPORT: boolean;
	readonly VITE_IMG_URL: string;
	readonly VITE_CDN: boolean;
	readonly VITE_HASH: boolean;
}

declare module "postcss-preset-env";
declare module "vue3-puzzle-vcode";
