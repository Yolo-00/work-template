<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
	<div>
		<span>{{ t("home.home") }}</span>
	</div>
</template>

<style lang="scss" scoped></style>
