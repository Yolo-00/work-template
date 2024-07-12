<template>
	<svg :style="iconStyle" aria-hidden="true">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, type CSSProperties } from "vue";

interface SvgProps {
	name: string; // 图标的名称 ==> 必传
	prefix?: string; // 图标的前缀 ==> 非必传（默认为"icon"）
	iconStyle?: CSSProperties; // 图标的样式 ==> 非必传
	color: string;
}
// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
	prefix: "icon",
	iconStyle: () => ({ width: "100px", height: "100px" }),
	color: "#000"
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
