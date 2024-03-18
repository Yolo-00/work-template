<script setup lang="ts" name="ImgPreview">
import { computed } from "vue";

interface ImageProps {
	imageUrl: string | string[]; // 图片地址 ==> 必传
	imageFit?: "fill" | "contain" | "cover" | "none" | "scale-down"; // 图片缩放方式 ==> 非必传（默认为 cover）
	imageLazy?: boolean; // 是否懒加载 ==> 非必传（默认为 true）
	height?: string; // 组件高度 ==> 非必传（默认为 150px）
	width?: string; // 组件宽度 ==> 非必传（默认为 150px）
	borderRadius?: string; // 组件边框圆角 ==> 非必传（默认为 8px）
	rowGap?: string; // 组件行间距 ==> 非必传（默认为 10px）
}
// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<ImageProps>(), {
	imageUrl: "",
	imageFit: "cover",
	imageLazy: true,
	height: "150px",
	width: "150px",
	borderRadius: "8px",
	rowGap: "10px"
});

// 图片列表
const imageList = computed<string[]>(() => {
	if (Array.isArray(props.imageUrl)) {
		return props.imageUrl;
	}
	return [props.imageUrl];
});
</script>

<template>
	<div class="image-list">
		<div v-for="(item, index) in imageList" :key="index">
			<el-image
				class="image-style"
				:src="item"
				hide-on-click-modal
				:preview-src-list="[item]"
				:lazy="imageLazy"
				:fit="imageFit"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.image-list {
	display: grid;
	grid-row-gap: v-bind(rowGap);
	grid-template-columns: repeat(auto-fill, v-bind(width));
	justify-content: space-between;
	.image-style {
		width: v-bind(width);
		height: v-bind(height);
		border-radius: v-bind(borderRadius);
	}
}
</style>
