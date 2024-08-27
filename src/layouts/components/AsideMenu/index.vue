<script setup lang="ts">
import { computed } from "vue";
// pinia
import { useAppStore } from "@/stores/modules/app";
// vue-router
import { useRouter, useRoute, type RouteRecordRaw } from "vue-router";
// component
import SubMenuItem from "../SubMenuItem/index.vue";

const title = import.meta.env.VITE_APP_TITLE;

const appStore = useAppStore();
const router = useRouter();
const route = useRoute();

console.log(router.options.routes);

const routerList = computed<RouteRecordRaw[]>(() => {
	let list = router.options.routes.map((item: RouteRecordRaw) => (item.children?.length === 1 ? item.children[0] : item));
	list = list.filter(item => !item.meta?.hidden);
	return list;
});

const activeMenu = computed(() => {
	const { path } = route;
	return path;
});
console.log(routerList.value);
</script>

<template>
	<div class="bg-[var(--theme-bg)]" h-full>
		<RouterLink to="/" w-full h-15 flex="~ items-center justify-center">
			<img w-10 h-10 src="/favicon.svg" alt="" />
			<transition name="logoTitle">
				<div ml-2 whitespace-nowrap no-underline v-show="!appStore.isCollapse">{{ title }}</div>
			</transition>
		</RouterLink>
		<el-scrollbar class="h-[calc(100%-3.75rem)]">
			<el-menu router :default-active="activeMenu" class="el-menu-vertical-demo" :collapse="appStore.isCollapse" unique-opened>
				<SubMenuItem
					v-for="(routeItem, index) in routerList"
					:key="routeItem.path + index"
					:item="routeItem"
					:base-path="routeItem.path"
				/>
			</el-menu>
		</el-scrollbar>
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
</style>
