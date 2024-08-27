<script setup lang="ts">
import { ref } from "vue";
import DocxPreview from "@/components/DocxPreview";
import ExcelPreview from "@/components/ExcelPreview";
import PDFPreview from "@/components/PDFPreview";

const docxPreviewRef = ref();
const excelPreviewRef = ref();
const pdfPreviewRef = ref();
const srcList: string[] = [
	"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
	"https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
	"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
];
</script>

<template>
	<div>
		<DocxPreview ref="docxPreviewRef" />
		<ExcelPreview ref="excelPreviewRef" />
		<PDFPreview ref="pdfPreviewRef" />
		<el-button type="primary" @click="docxPreviewRef.open()">Docx文件预览</el-button>
		<el-button type="primary" @click="excelPreviewRef.open()">Excel文件预览</el-button>
		<el-button type="primary" @click="pdfPreviewRef.open()">pdf文件预览</el-button>
		<ImagePreview class="mt-5" :image-url="srcList" />
	</div>
</template>

<style lang="scss" scoped></style>
