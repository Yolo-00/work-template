<template>
	<div>
		<el-button v-copy="'www.baidu.com'">复制</el-button>
		<el-button type="primary" @click="handlePreview">预览</el-button>
		<DocxPreview ref="docxPreviewRef" />
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DocxPreview from "@/components/DocxPreview/index.vue";

const docxPreviewRef = ref();
const handlePreview = () => {
	docxPreviewRef.value();
};
</script>

<style scoped lang="scss"></style>
