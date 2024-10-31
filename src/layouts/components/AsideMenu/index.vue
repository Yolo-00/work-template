<script setup lang="ts">
import { computed } from "vue";
// pinia
import { useAppStore } from "@/stores/modules/app";
// vue-router
import { useRoute } from "vue-router";
import type { CustomRouteRecordRaw } from "@/routers/interface/index";
// component
import SubMenuItem from "../SubMenuItem/index.vue";
// vueuse
import { useWindowSize } from "@vueuse/core";

const title = import.meta.env.VITE_APP_TITLE;

const { width } = useWindowSize();
const appStore = useAppStore();
const route = useRoute();

const routerList = computed<CustomRouteRecordRaw[]>(() => appStore.menuList);

// 处理面包屑
const getAllBreadcrumbList = (menuList: CustomRouteRecordRaw[], parent = [], result: { [key: string]: any } = {}) => {
	for (const item of menuList) {
		result[item.path] = [...parent, item];
		if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
	}
	return result;
};

const activeMenu = computed(() => {
	const { path } = route;
	appStore.setCrumbsList(getAllBreadcrumbList(appStore.menuList)[route.matched[route.matched.length - 1].path]);
	return path;
});
</script>

<template>
	<div>
		<el-aside
			class="max-md:hidden bg-[var(--theme-bg)] h-full"
			style="transition: width 0.5s"
			:width="appStore.isCollapse ? '64px' : '200px'"
		>
			<RouterLink to="/" w-full h-15 flex="~ items-center justify-center">
				<img w-10 h-10 src="/favicon.svg" alt="" />
				<transition name="logoTitle">
					<div ml-2 whitespace-nowrap no-underline v-show="!appStore.isCollapse">{{ title }}</div>
				</transition>
			</RouterLink>
			<el-scrollbar class="h-[calc(100%-3.75rem)]">
				<el-menu router :default-active="activeMenu" :collapse="appStore.isCollapse" unique-opened :collapse-transition="false">
					<SubMenuItem
						v-for="(routeItem, index) in routerList"
						:key="routeItem.path + index"
						:item="routeItem"
						:base-path="routeItem.path"
					/>
				</el-menu>
			</el-scrollbar>
		</el-aside>
		<el-drawer
			v-if="width <= 768"
			v-model="appStore.isCollapse"
			:show-close="false"
			class="bg-[var(--theme-bg)]"
			direction="ltr"
			:with-header="false"
			:size="200"
		>
			<RouterLink to="/" w-full h-15 flex="~ items-center justify-center">
				<img w-10 h-10 src="/favicon.svg" alt="" />
				<div ml-2 whitespace-nowrap no-underline>{{ title }}</div>
			</RouterLink>
			<el-scrollbar class="h-[calc(100%-3.75rem)]">
				<el-menu router :default-active="activeMenu" unique-opened :collapse-transition="false">
					<SubMenuItem
						v-for="(routeItem, index) in routerList"
						:key="routeItem.path + index"
						:item="routeItem"
						:base-path="routeItem.path"
					/>
				</el-menu>
			</el-scrollbar>
		</el-drawer>
	</div>
</template>

<style lang="scss" scoped>
.logoTitle-enter-active,
.logoTitle-leave-active {
	transition: opacity 0.5s ease;
}

.logoTitle-enter-from,
.logoTitle-leave-to {
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

:deep(.el-drawer__body) {
	padding: 0;
}
</style>
