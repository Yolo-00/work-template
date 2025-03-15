<script setup lang="ts">
import { ref } from "vue";

import CoverImageAdjuster from "@/components/CoverImageAdjuster/index";
import avatar from "@/assets/images/avatar.png";
import loginBg from "@/assets/images/login-bg.png";

const position1 = ref<undefined | { x: number; y: number }>(undefined);
const position2 = ref<undefined | { x: number; y: number }>(undefined);
const disabled = ref(true);

const getPositionChange1 = (position: any) => {
	position1.value = position;
};
const getPositionChange2 = (position: any) => {
	position2.value = position;
};
</script>

<template>
	<div>
		<div class="text-lg">{{ position1 }}</div>
		<el-switch v-model="disabled" class="mt-5" active-text="启用" inactive-text="禁用" />
		<CoverImageAdjuster :src="loginBg" :draggable="disabled" :width="1000" :height="300" @position-change="getPositionChange1" />

		<div class="text-lg mt-5">{{ position2 }}</div>
		<CoverImageAdjuster class="mt-5" :src="avatar" :width="500" :height="400" @position-change="getPositionChange2" />
	</div>
</template>

<style lang="scss" scoped></style>
