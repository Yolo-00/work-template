<script setup lang="ts">
import { ref, computed } from "vue";
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";
import { ElNotification } from "element-plus";
import { RenderOptions } from "./types";

interface DocxProps {
	height?: string; // 组件高度 ==> 非必传（默认为 150px）
	customOptions?: RenderOptions; // 配置参数 ==> 非必传（默认为 {}）
}
// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<DocxProps>(), {
	height: "80vh"
});

const show = ref(false);
const loading = ref(true);
const docx = ref();
const url = ref("http://static.shanhuxueyuan.com/test.docx");

const customStyle = computed(() => {
	return {
		height: props.height
	};
});

const renderedCallback = () => {
	loading.value = false;
};

const open = async (src?: string) => {
	show.value = true;
	if (src) {
		url.value = src;
	}
	fetch(url.value)
		.then(response => response.blob())
		.then(res => {
			if (res.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
				docx.value = res;
			} else {
				ElNotification({
					title: "提示",
					message: "目前仅支持预览 Docx 类型的文件",
					type: "warning"
				});
			}
		});
};

defineExpose({
	open
});
</script>

<template>
	<div>
		<el-dialog v-model="show" align-center title="预览" width="80%">
			<VueOfficeDocx v-loading="loading" :options="customOptions" :style="customStyle" :src="docx" @rendered="renderedCallback" />
		</el-dialog>
	</div>
</template>

<style lang="scss" scoped></style>
