<script setup lang="ts" name="ImageFragmentation">
import { onMounted, ref } from "vue";
import avatar from "@/assets/images/avatar.png";

interface ImageFragmentationProps {
	imageUrl?: string; // 图片 URL ==> 必传
	rows?: number; // 行数 ==> 必传
	cols?: number; // 列数 ==> 必传
	containerWidth?: string; // 容器宽度 ==> 必传
	containerHeight?: string; // 容器高度 ==> 必传
}

// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<ImageFragmentationProps>(), {
	imageUrl: avatar,
	rows: 4,
	cols: 4,
	containerWidth: "400px",
	containerHeight: "400px"
});

// 组件的 DOM 元素引用
const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if (!containerRef.value) return;
	const fragments: HTMLDivElement[] = [];
	const containerWidthPx = parseFloat(props.containerWidth);
	const containerHeightPx = parseFloat(props.containerHeight);
	const fragmentWidth = containerWidthPx / props.cols;
	const fragmentHeight = containerHeightPx / props.rows;
	// 创建碎片
	for (let row = 0; row < props.rows; row++) {
		for (let col = 0; col < props.cols; col++) {
			const fragment = document.createElement("div");
			// // 设置碎片样式的对象
			const styles = {
				position: "absolute",
				backgroundPosition: `-${col * fragmentWidth}px -${row * fragmentHeight}px`,
				backgroundSize: `${containerWidthPx}px ${containerHeightPx}px`,
				left: `${col * fragmentWidth}px`,
				top: `${row * fragmentHeight}px`,
				backgroundImage: `url(${props.imageUrl})`,
				width: `${fragmentWidth}px`,
				height: `${fragmentHeight}px`,
				transition: "transform 0.8s ease-in-out",
				transform: "scale(0)"
			};
			// 将样式对象应用到碎片上
			Object.assign(fragment.style, styles);
			containerRef.value.appendChild(fragment);
			fragments.push(fragment);
		}
	}
	// 动画效果
	setTimeout(() => {
		fragments.forEach(fragment => {
			fragment.style.transform = "scale(1)";
		});
	}, 100);
});
</script>

<template>
	<div class="container" ref="containerRef"></div>
</template>

<style lang="scss" scoped>
.container {
	position: relative;
	overflow: hidden;
	width: v-bind(containerWidth);
	height: v-bind(containerHeight);
}
</style>
