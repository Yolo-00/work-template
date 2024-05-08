<script setup lang="ts">
// icon
import { Moon, Sunny } from "@element-plus/icons-vue";
// hooks
import useLanguage from "@/hooks/useLanguage";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";
// image
import Avatar from "@/assets/images/avatar.png";
// pinia
import { useGlobalStore } from "@/stores/modules/user";
import { useAppStore } from "@/stores/modules/app";

const { isFullscreen, toggle } = useFullscreen();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const { setLanguage } = useLanguage();
const globalStore = useGlobalStore();
const appStore = useAppStore();

// 退出登录
const handleOut = () => {
	globalStore.setReset();
};
</script>

<template>
	<div flex="~ justify-between items-center" px-5 shadow h-full>
		<div flex="~ items-center">
			<el-icon :size="25" cursor-pointer @click="appStore.setIsCollapse(!appStore.isCollapse)">
				<Expand v-show="appStore.isCollapse" />
				<Fold v-show="!appStore.isCollapse" />
			</el-icon>
		</div>
		<div flex="~ items-center">
			<!-- 国际化 -->
			<div mr-4>
				<el-dropdown>
					<div cursor-pointer>
						<SvgIcon color="#333" :icon-style="{ width: '20px', height: '20px' }" name="language" />
					</div>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>
								<div class="px-4" @click="setLanguage('en')">English</div>
							</el-dropdown-item>
							<el-dropdown-item divided>
								<div class="px-4" @click="setLanguage('zh')">简体中文</div>
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<!-- 全屏 -->
			<div mr-4 cursor-pointer>
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
			<!-- 头像 -->
			<el-dropdown>
				<el-image cursor-pointer :src="Avatar" w-10 h-10 rounded-lg fit="cover" />
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>
							<div @click="handleOut">退出</div>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
