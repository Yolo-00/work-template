<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
	<div>
		<div>{{ t("home.home") }}</div>
	</div>
</template>

<style lang="scss" scoped></style>
