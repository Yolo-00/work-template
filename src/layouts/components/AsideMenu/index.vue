<script setup lang="ts">
import {} from "vue";
const title = import.meta.env.VITE_APP_TITLE;
</script>

<template>
	<div bg-blue h-full>
		<div h-15 flex="~ items-center justify-center">{{ title }}</div>
	</div>
</template>

<style lang="scss" scoped></style>
