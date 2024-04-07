<template>
	<div>
		<!-- <div style="height: 1000px">home</div> -->
		<el-button type="primary" @click="handle">按钮</el-button>
		<PDFPreview ref="pdfPreviewRef" />
	</div>
</template>

<script setup lang="ts">
import PDFPreview from "@/components/PDFPreview/index.vue";
import { ref } from "vue";

const pdfPreviewRef = ref();
const handle = () => {
	pdfPreviewRef.value.open();
};
</script>

<style scoped lang="scss"></style>
