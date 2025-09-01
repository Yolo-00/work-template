<script setup lang="ts">
import {} from "vue";
import dataScreenRouter from "@/routers/modules/dataScreen";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
	<div>
		<el-container class="h-100vh">
			<el-header>
				<el-menu router :default-active="route.path" mode="horizontal">
					<el-menu-item v-for="(item, index) in dataScreenRouter" :key="index" :index="item.path">
						{{ item.meta?.title }}
					</el-menu-item>
				</el-menu>
			</el-header>
			<el-main class="p-0"><slot></slot></el-main>
		</el-container>
	</div>
</template>

<style lang="scss" scoped>
:deep(.el-menu--horizontal) {
	--el-menu-horizontal-height: 60px;
}
</style>
