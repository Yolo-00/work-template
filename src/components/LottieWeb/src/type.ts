export interface ImageProps {
	animationData: any; // LottieJSON ==> 必传
	isLoop?: boolean; // 是否循环播放 ==> 非必传（默认为true）
	isAutoplay?: boolean; // 是否自动播放 ==> 非必传（默认为true）
	width?: number; // 组件宽度 ==> 非必传（默认为 250px）
	height?: number; // 组件高度 ==> 非必传（默认为 250px）
}
