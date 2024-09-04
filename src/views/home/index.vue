<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";
import { QRCode } from "@/components/QRCode/index";

const { t } = useI18n();
</script>

<template>
	<div>
		<QRCode content="www.baidu.com" />
		<div>{{ t("home.home") }}</div>
	</div>
</template>

<style lang="scss" scoped></style>
