/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
	/**
	 * Window 的类型提示
	 */
	interface Window {
		webkitCancelAnimationFrame: (handle: number) => void;
		mozCancelAnimationFrame: (handle: number) => void;
		oCancelAnimationFrame: (handle: number) => void;
		msCancelAnimationFrame: (handle: number) => void;
		webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
		mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
		oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
		msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
	}
	/**
	 * 平台的名称、版本、运行所需的`node`和`pnpm`版本、依赖、最后构建时间的类型提示
	 */
	const __APP_INFO__: {
		pkg: {
			name: string;
			version: string;
			dependencies: Recordable<string>;
			devDependencies: Recordable<string>;
		};
		lastBuildTime: string;
	};
}
export {};
