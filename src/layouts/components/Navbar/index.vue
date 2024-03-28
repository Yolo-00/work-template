<script setup lang="ts">
// icon
import { Moon, Sunny } from "@element-plus/icons-vue";
// i18n
import { useI18n } from "vue-i18n";
// hooks
import useLanguage from "@/hooks/useLanguage";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";
// image
import Avatar from "@/assets/image/avatar.png";

const title = import.meta.env.VITE_APP_TITLE;
const { isFullscreen, toggle } = useFullscreen();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const { setLanguage } = useLanguage();
const { t } = useI18n();
</script>

<template>
	<div flex="~ justify-between items-center" h-full>
		<div>{{ title }}</div>
		<div flex="~ items-center">
			<!-- 国际化 -->
			<div mr-4>
				<el-dropdown>
					<div class="cursor-pointer">
						<SvgIcon color="#333" :icon-style="{ width: '20px', height: '20px' }" name="language" />
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
			</div>
			<!-- 全屏 -->
			<div mr-4>
				<SvgIcon
					color="#333"
					:icon-style="{ width: '20px', height: '20px' }"
					:name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
					@click="toggle"
				/>
			</div>
			<!-- 主题 -->
			<div mr-4>
				<el-switch :width="45" v-model="isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @change="toggleDark" />
			</div>
			<div>
				{{ t("login") }}
			</div>
			<!-- 头像 -->
			<el-image :src="Avatar" w-10 h-10 rounded-lg fit="cover" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
