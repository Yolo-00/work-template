<template>
	<div class="text-teal-500">{{ t("login") }}</div>
	<el-button @click="setLanguage('en')">切换英文</el-button>
	<el-button @click="setLanguage('zh')">切换中文</el-button>
	<el-date-picker type="datetime" placeholder="Select date and time" />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import useLanguage from "@/hooks/useLanguage";
const { setLanguage } = useLanguage();
const { t } = useI18n();
</script>

<style scoped lang="scss"></style>
