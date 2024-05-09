import { type QRCodeRenderersOptions } from "qrcode";

export interface QRCodeProps {
	type?: "canvas" | "img"; // 二维码类型 ==> 默认img, img 支持预览,canvas支持logo
	size?: number; // 二维码大小 ==> 默认200
	iconSize?: number; // 二维码图标大小 ==> 默认40
	content: string; // 二维码内容 ==> 必填
	logo?: string; // 二维码logo ==> 默认无
	options?: QRCodeRenderersOptions; // 二维码配置 ==> 默认无
	errorLevel?: "L" | "M" | "Q" | "H"; // 二维码容错级别 ==> 默认H
}
