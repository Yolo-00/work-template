<script setup lang="ts" name="PuzzleVerify">
import Vcode from "vue3-puzzle-vcode";
import { ref } from "vue";

interface ImageProps {
	imageUrl?: string[]; // 图片地址 ==> 非必传
	width?: number; // 组件宽度 ==> 非必传（默认为 320px）
	height?: number; // 组件高度 ==> 非必传（默认为 160px）
}
// 接收父组件参数并设置默认值
withDefaults(defineProps<ImageProps>(), {
	width: 320,
	height: 160
});
const isShow = ref(false);
let directiveFun: any;

const onSuccess = () => {
	handleClose();
	directiveFun && directiveFun();
};

const handleClose = () => {
	isShow.value = false;
};

const open = (fun?: any) => {
	if (fun) directiveFun = fun;
	isShow.value = true;
};

defineExpose({
	handleClose,
	open
});
</script>

<template>
	<div>
		<Vcode
			:imgs="[imageUrl]"
			:canvas-width="width"
			:canvas-height="height"
			:show="isShow"
			@close="handleClose"
			@success="onSuccess"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
