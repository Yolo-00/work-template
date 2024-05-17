<template>
	<div>
		<el-config-provider :locale="i18nLocale" :button="{ autoInsertSpace: true }" :message="{ max: 10 }">
			<router-view />
		</el-config-provider>
	</div>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { ElConfigProvider } from "element-plus";
import { useGlobalStore } from "@/stores/modules/user";
import { computed, onMounted } from "vue";
import { getBrowserLang } from "./utils/util";
import { checkVersion } from "version-rocket";

const globalStore = useGlobalStore();

// element 语言配置
const i18nLocale = computed(() => {
	if (globalStore.language == "zh") return zhCn;
	if (globalStore.language == "en") return en;
	return getBrowserLang() == "zh" ? zhCn : en;
});

onMounted(() => {
	const { name: title, version } = __APP_INFO__.pkg;
	const { BASE_URL, MODE } = import.meta.env;
	// 版本实时更新检测，只作用于线上环境
	checkVersion(
		// config
		{
			// 5分钟检测一次版本
			pollingTime: 300000,
			localPackageVersion: version,
			originVersionFileUrl: `${location.origin}${BASE_URL}version.json`,
			enable: MODE === "production"
		},
		// options
		{
			title,
			description: "检测到新版本",
			buttonText: "立即更新"
		}
	);
});
</script>
