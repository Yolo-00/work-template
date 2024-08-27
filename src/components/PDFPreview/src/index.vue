<script setup lang="ts">
import { ref } from "vue";
import VuePdfEmbed from "vue-pdf-embed";

const pdfUrl = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";

const dialogVisible = ref(false);
const loading = ref(false);
const pdfRef = ref();
const source = ref("");
const currentPage = ref<number | undefined>(1);
const pageCount = ref(1);
const showAllPages = ref(false);

const open = (url: string = pdfUrl) => {
	source.value = url;
	dialogVisible.value = true;
	loading.value = true;
};

const documentRender = () => {
	loading.value = false;
	pageCount.value = pdfRef.value.doc.numPages;
};

const showAllPagesChange = () => {
	currentPage.value = showAllPages.value ? undefined : 1;
};

const handleDownload = () => {
	pdfRef.value.download();
};

const handlePrint = () => {
	// 如果在打印时，打印页面是本身的两倍，在打印配置 页面 设置 仅限页码为奇数的页面 即可
	pdfRef.value.print();
};

defineExpose({
	open
});
</script>

<template>
	<div>
		<el-dialog v-model="dialogVisible" title="预览" width="80%" align-center destroy-on-close>
			<div flex="~ justify-between items-center">
				<div>
					<el-pagination
						v-if="!showAllPages"
						v-model:current-page="currentPage"
						layout="prev, pager, next"
						:page-size="1"
						:total="pageCount"
						hide-on-single-page
					/>
					<div v-else>共{{ pageCount }}页</div>
				</div>
				<div flex="~ items-center">
					<el-checkbox v-model="showAllPages" @change="showAllPagesChange">展示所有</el-checkbox>
					<el-tooltip effect="dark" content="下载">
						<SvgIcon
							ml-2
							cursor-pointer
							@click="handleDownload"
							:icon-style="{ width: '20px', height: '20px' }"
							name="download"
						/>
					</el-tooltip>
					<el-tooltip effect="dark" content="打印">
						<SvgIcon ml-2 cursor-pointer @click="handlePrint" :icon-style="{ width: '20px', height: '20px' }" name="printing" />
					</el-tooltip>
				</div>
			</div>
			<el-scrollbar mt-3 height="75vh" v-loading="loading">
				<vue-pdf-embed ref="pdfRef" container overflow-auto :source="source" :page="currentPage" @rendered="documentRender" />
			</el-scrollbar>
		</el-dialog>
	</div>
</template>

<style lang="scss" scoped></style>
