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
}
export {};
