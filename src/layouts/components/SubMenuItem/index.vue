<script setup lang="ts" name="SubMenuItem">
import type { CustomRouteRecordRaw } from "@/routers/interface/index";
import SubMenuItem from "./index.vue";

defineProps({
	item: {
		type: Object as () => CustomRouteRecordRaw,
		required: true
	},
	basePath: {
		type: String,
		required: true
	}
});
</script>

<template>
	<el-menu-item v-if="!item.children" :index="basePath">
		<div class="flex items-center">
			<SvgIcon :icon-style="{ width: '25px', height: '25px' }" :name="item.meta?.icon" />
		</div>
		<template #title>
			<span class="ml-2 truncate">{{ item.meta?.title }}</span>
		</template>
	</el-menu-item>
	<el-sub-menu v-else :index="item.path">
		<template #title>
			<div class="flex items-center">
				<SvgIcon :icon-style="{ width: '25px', height: '25px' }" :name="item.meta?.icon" />
			</div>
			<span class="ml-2 truncate">{{ item.meta?.title }}</span>
		</template>
		<SubMenuItem
			v-for="(routeItem, index) in item.children"
			:key="routeItem.path + index"
			:item="routeItem"
			:base-path="routeItem.path"
		/>
	</el-sub-menu>
</template>

<style lang="scss" scoped></style>
