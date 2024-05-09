<script setup lang="ts" name="LottieWeb">
import lottie from "lottie-web";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { generateUUID } from "@/utils";
import { ImageProps } from "./type";

// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<ImageProps>(), {
	isLoop: true,
	isAutoplay: true,
	width: 250,
	height: 250
});
const lottieRef = ref();
const lottieId = ref("lottieID" + generateUUID());

const lottieStyle = computed(() => ({
	width: props.width + "px",
	height: props.height + "px"
}));

interface LottieWebEmits {
	(e: "loopComplete"): void; // 循环播放完成回调
	(e: "complete"): void; // 播放完成回调
}
const emit = defineEmits<LottieWebEmits>();

// 获取Lottie实例
const getLottie = () => {
	return lottieRef.value;
};

onMounted(() => {
	lottieRef.value = lottie.loadAnimation({
		container: document.getElementById(lottieId.value) as HTMLElement, // 绑定dom节点
		renderer: "canvas", // 渲染方式:svg、canvas
		loop: props.isLoop, // 是否循环播放，默认：false
		autoplay: props.isAutoplay, // 是否自动播放, 默认true
		animationData: props.animationData // AE动画导出为json数据
	});
	if (props.isLoop) {
		lottieRef.value.addEventListener("loopComplete", () => {
			emit("loopComplete");
		});
	} else {
		lottieRef.value.addEventListener("complete", () => {
			emit("complete");
		});
	}
});

onUnmounted(() => {
	// 销毁
	lottieRef.value.destroy();
});
defineExpose({
	getLottie
});
</script>

<template>
	<div :style="lottieStyle" :id="lottieId"></div>
</template>

<style lang="scss" scoped></style>
