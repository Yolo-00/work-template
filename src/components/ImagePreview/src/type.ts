export interface ImageProps {
	imageUrl: string | string[]; // 图片地址 ==> 必传
	imageFit?: "fill" | "contain" | "cover" | "none" | "scale-down"; // 图片缩放方式 ==> 非必传（默认为 cover）
	imageLazy?: boolean; // 是否懒加载 ==> 非必传（默认为 true）
	height?: string; // 组件高度 ==> 非必传（默认为 150px）
	width?: string; // 组件宽度 ==> 非必传（默认为 150px）
	borderRadius?: string; // 组件边框圆角 ==> 非必传（默认为 8px）
	rowGap?: string; // 组件行间距 ==> 非必传（默认为 10px）
}
