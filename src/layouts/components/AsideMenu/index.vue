<script setup lang="ts">
import {} from "vue";
// pinia
import { useAppStore } from "@/stores/modules/app";

const appStore = useAppStore();

const title = import.meta.env.VITE_APP_TITLE;
</script>

<template>
	<div class="bg-[var(--theme-bg)]" h-full>
		<RouterLink to="/" w-full h-15 flex="~ items-center justify-center">
			<img w-10 h-10 src="/favicon.svg" alt="" />
			<transition>
				<div ml-2 whitespace-nowrap no-underline v-show="!appStore.isCollapse">{{ title }}</div>
			</transition>
		</RouterLink>

		<el-menu unique-opened background-color="var(--theme-bg)" :collapse="appStore.isCollapse">
			<el-sub-menu index="1">
				<template #title>
					<el-icon><location /></el-icon>
					<span>Navigator One</span>
				</template>
				<el-menu-item-group>
					<template #title><span>Group One</span></template>
					<el-menu-item index="1-1">item one</el-menu-item>
					<el-menu-item index="1-2">item two</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Group Two">
					<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-sub-menu index="1-4">
					<template #title><span>item four</span></template>
					<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
			<el-menu-item index="3">
				<el-icon><document /></el-icon>
				<template #title>Navigator Three</template>
			</el-menu-item>
			<el-menu-item index="4">
				<el-icon><setting /></el-icon>
				<template #title>Navigator Four</template>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

a {
	text-decoration: none; /* 去除下划线 */
	color: inherit; /* 使用继承的颜色 */
}

a:hover {
	text-decoration: none; /* 鼠标悬停时去除下划线 */
	color: inherit; /* 使用继承的颜色 */
}
</style>
