<template>
	<div class="text-teal-500">{{ t("login") }}</div>
	<el-button @click="setLanguage('en')">切换英文</el-button>
	<el-button @click="setLanguage('zh')">切换中文</el-button>
	<el-date-picker type="datetime" placeholder="Select date and time" />
	<SvgIcon name="xianxingdiqiu" />
	<!-- 主题 -->
	<el-switch v-model="isDark" inline-prompt active-value :active-icon="Moon" :inactive-icon="Sunny" @change="toggleDark" />
</template>

<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { useI18n } from "vue-i18n";
import useLanguage from "@/hooks/useLanguage";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { setLanguage } = useLanguage();
const { t } = useI18n();
</script>

<style scoped lang="scss"></style>
