<script setup lang="ts">
import data from "@emoji-mart/data";
import zh from "@emoji-mart/data/i18n/zh.json";
import en from "@emoji-mart/data/i18n/en.json";
import { Picker } from "emoji-mart";
import { ref, onMounted, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
	mode: {
		type: String,
		default: "popup"
	},
	locale: {
		type: String,
		default: "zh"
	},
	theme: {
		type: String,
		default: "light"
	},
	trigger: {
		type: String,
		default: "hover"
	}
});

const emit = defineEmits(["select", "change"]);
const pickerRef = ref<HTMLElement | null>(null);
const pickerInstance = ref<any>(null);

const initPicker = () => {
	if (pickerRef.value && pickerInstance.value) {
		pickerRef.value.removeChild(pickerInstance.value);
	}

	const i18n = props.locale === "zh" ? zh : en;
	pickerInstance.value = new Picker({
		data,
		i18n,
		theme: props.theme,
		onEmojiSelect: (emoji: any) => {
			emit("select", emoji);
			emit("change", emoji);
		},
		previewPosition: "none",
		skinTonePosition: "none"
	});
	pickerRef.value?.appendChild(pickerInstance.value);
};

// 监听 locale 和 theme 的变化
watch([() => props.locale, () => props.theme], () => {
	initPicker();
});

onMounted(initPicker);
</script>

<template>
	<div class="flex items-center">
		<template v-if="mode === 'popup'">
			<el-popover placement="top" width="auto" :trigger="trigger" popper-class="emoji-picker-popover" :show-arrow="false">
				<template #reference>
					<slot></slot>
				</template>
				<div ref="pickerRef"></div>
			</el-popover>
		</template>
		<template v-else>
			<div ref="pickerRef"></div>
		</template>
	</div>
</template>

<style lang="scss">
.emoji-picker-popover.el-popper.is-light {
	background: none;
	border: none;
	padding: 0;
	box-shadow: none;
}
</style>
