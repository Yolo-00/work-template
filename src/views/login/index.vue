<template>
	<div class="text-teal-500">{{ t("login") }}</div>
	<!-- 国际化 -->
	<el-dropdown>
		<div class="cursor-pointer">
			<SvgIcon :icon-style="{ width: '25px', height: '25px' }" name="language" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>
					<div class="px-4" @click="setLanguage('en')">英文</div>
				</el-dropdown-item>
				<el-dropdown-item divided>
					<div class="px-4" @click="setLanguage('zh')">中文</div>
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- 全屏 -->
	<SvgIcon
		:icon-style="{ width: '25px', height: '25px' }"
		:name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
		@click="toggle"
	/>
	<!-- 主题 -->
	<el-switch v-model="isDark" inline-prompt active-value :active-icon="Moon" :inactive-icon="Sunny" @change="toggleDark" />
</template>

<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import useLanguage from "@/hooks/useLanguage";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";

const { isFullscreen, toggle } = useFullscreen();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const { setLanguage } = useLanguage();
const { t } = useI18n();
</script>

<style scoped lang="scss"></style>
