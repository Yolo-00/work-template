<script setup lang="ts" name="ImagePreview">
import { computed } from "vue";
import { ImageProps } from "./type";

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
				:initial-index="index"
				:preview-src-list="imageList"
				:lazy="imageLazy"
				:fit="imageFit"
				:z-index="99999"
				preview-teleported
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
