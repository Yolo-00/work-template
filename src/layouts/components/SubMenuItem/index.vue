<script setup lang="ts" name="SubMenuItem">
// vue-router
import { type RouteRecordRaw } from "vue-router";
import SubMenuItem from "./index.vue";

defineProps({
	item: {
		type: Object as () => RouteRecordRaw,
		required: true
	},
	basePath: {
		type: String,
		required: true
	}
});
</script>

<template>
	<div>
		<el-menu-item v-if="!item.children" :index="basePath">
			<SvgIcon :icon-style="{ width: '25px', height: '25px' }" :name="item.meta?.icon" />
			<template #title>
				<span class="ml-2 truncate">{{ item.meta?.title }}</span>
			</template>
		</el-menu-item>
		<el-sub-menu v-else :index="item.path">
			<template #title>
				<SvgIcon :icon-style="{ width: '25px', height: '25px' }" :name="item.meta?.icon" />
				<span class="ml-2 truncate">{{ item.meta?.title }}</span>
			</template>
			<SubMenuItem
				v-for="(routeItem, index) in item.children"
				:key="routeItem.path + index"
				:item="routeItem"
				:base-path="basePath + '/' + routeItem.path"
			/>
		</el-sub-menu>
	</div>
</template>

<style lang="scss" scoped></style>
