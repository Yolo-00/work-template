<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import QRCode from "qrcode";
import { generateUUID } from "@/utils";
import { QRCodeProps } from "./type";

// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<QRCodeProps>(), {
	type: "img",
	size: 200,
	iconSize: 40,
	errorLevel: "H"
});

const qrCodeUrl = ref<string>("");
const canvasId = ref("canvas" + generateUUID());
const loading = ref(true);

const QRCodeStyle = computed(() => {
	return {
		width: props.size + "px",
		height: props.size + "px"
	};
});

// 生成二维码
const initQRCode = async () => {
	if (props.type === "canvas") {
		const canvasRef: any = await QRCode.toCanvas(document.getElementById(canvasId.value), props.content, {
			width: props.size,
			margin: 2,
			errorCorrectionLevel: props.errorLevel,
			...props.options
		});
		if (props.logo) {
			const ctx = canvasRef.getContext("2d");
			const iconBgW = props.iconSize + 5;
			const iconBgH = props.iconSize + 5;
			const iconBgX = (canvasRef.width - iconBgW) / 2;
			const iconBgY = (canvasRef.width - iconBgH) / 2;
			ctx.fillStyle = "#fff";
			ctx.fillRect(iconBgX, iconBgY, iconBgW, iconBgH);
			// logo
			const iconX = (canvasRef.width - props.iconSize) / 2;
			const iconY = (canvasRef.width - props.iconSize) / 2;
			const image = new Image();
			image.crossOrigin = "Anonymous"; // 设置图片的跨域属性
			image.onload = () => {
				ctx.drawImage(image, iconX, iconY, props.iconSize, props.iconSize);
				qrCodeUrl.value = canvasRef.toDataURL();
			};
			image.src = props.logo;
		} else {
			qrCodeUrl.value = canvasRef.toDataURL();
		}
		loading.value = false;
	} else {
		const url = await QRCode.toDataURL(props.content, {
			width: props.size,
			margin: 2,
			errorCorrectionLevel: props.errorLevel,
			...props.options
		});
		qrCodeUrl.value = url;
		loading.value = false;
	}
};

// 下载二维码
const downLoadQRCode = (fileName: string = generateUUID(), fileType: string = ".png") => {
	const exportFile = document.createElement("a");
	exportFile.style.display = "none";
	exportFile.download = `${fileName}${fileType}`;
	exportFile.href = qrCodeUrl.value;
	document.body.appendChild(exportFile);
	exportFile.click();
	// 去除下载对 url 的影响
	document.body.removeChild(exportFile);
};

onMounted(() => {
	initQRCode();
});

defineExpose({
	downLoadQRCode
});
</script>

<template>
	<div :style="QRCodeStyle" overflow-hidden rounded-lg border border-slate-300 border-solid v-loading="loading">
		<ImagePreview :width="QRCodeStyle.width" :height="QRCodeStyle.height" v-if="type === 'img'" :image-url="qrCodeUrl" />
		<canvas v-else :style="QRCodeStyle" :id="canvasId"></canvas>
	</div>
</template>

<style lang="scss" scoped></style>
