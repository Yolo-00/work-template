<script setup lang="ts">
import { ref } from "vue";
const wangEditorValue = ref("");
</script>

<template>
	<div>
		<WangEditor v-model:value="wangEditorValue" />
	</div>
</template>

<style lang="scss" scoped></style>
