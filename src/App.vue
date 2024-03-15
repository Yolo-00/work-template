<template>
	<div>
		<el-config-provider :locale="i18nLocale">
			<router-view />
		</el-config-provider>
	</div>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { ElConfigProvider } from "element-plus";
import { useGlobalStore } from "@/stores/modules/user";
import { computed } from "vue";
import { getBrowserLang } from "./utils/util";

const globalStore = useGlobalStore();

// element 语言配置
const i18nLocale = computed(() => {
	if (globalStore.language == "zh") return zhCn;
	if (globalStore.language == "en") return en;
	return getBrowserLang() == "zh" ? zhCn : en;
});
</script>
