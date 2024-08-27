<script setup lang="ts">
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("# Hello Editor");
</script>

<template>
	<div>
		<MdEditor v-model="text" input-box-witdh="60%" />
	</div>
</template>

<style lang="scss" scoped></style>
