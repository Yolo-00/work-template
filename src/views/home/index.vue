<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
	<div>{{ t("home.home") }}</div>
</template>

<style lang="scss" scoped></style>
