<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 动态加载JS方法
const loadScript = (url: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = url;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
		document.head.appendChild(script);
	});
};

// 使用示例
const loadExternalScript = async () => {
	try {
		await loadScript("https://pagespy.jikejishu.com/page-spy/index.min.js");
		(window as any).$pageSpy = new (window as any).PageSpy({
			lang: "zh"
		});
		console.log((window as any).$pageSpy, "???");
		console.log("脚本加载成功");
	} catch (error) {
		console.error("脚本加载失败:", error);
	}
};
</script>

<template>
	<div>
		<span>{{ t("home.home") }}</span>
		<el-button @click="loadExternalScript">加载外部脚本</el-button>
	</div>
</template>

<style lang="scss" scoped></style>
