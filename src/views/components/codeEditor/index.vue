<script setup lang="ts">
import { ref } from "vue";
import CodeEditor from "@/components/codeEditor";

const codeEditorValue = ref(`console.log("Hello")`);
</script>

<template>
	<div>
		<CodeEditor v-model="codeEditorValue" />
	</div>
</template>

<style lang="scss" scoped></style>
