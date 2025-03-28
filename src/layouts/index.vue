<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";
import AsideMenu from "./components/AsideMenu/index.vue";
// vue
import { computed } from "vue";
// vue-router
import { useRouter } from "vue-router";

const router = useRouter();

const routerInclude = computed<string[]>(() => {
	const list = router
		.getRoutes()
		.filter(item => item.meta?.noKeepAlive)
		.map(item => item.meta?.key) as string[];
	return list;
});
</script>

<template>
	<div>
		<el-container class="h-100vh">
			<AsideMenu />
			<el-container>
				<el-header><Navbar /></el-header>
				<el-main class="bg-gray-100 dark-bg-black h-[calc(100vh-60px)]">
					<el-scrollbar class="h-[calc(100vh-140px)]">
						<div class="dark:bg-[var(--theme-bg)]" p-5 bg-white rounded-lg>
							<!-- 子路由 -->
							<router-view v-slot="{ Component, route }">
								<transition name="slide-fade">
									<keep-alive :include="routerInclude">
										<component :is="Component" :key="route.path" />
									</keep-alive>
								</transition>
							</router-view>
						</div>
					</el-scrollbar>
				</el-main>
				<el-footer class="bg-white h-10 rounded-md flex items-center justify-center">Footer</el-footer>
			</el-container>
		</el-container>

		<el-backtop target=".el-main .el-scrollbar__wrap" :bottom="80" :right="66">
			<SvgIcon color="#409eff" :icon-style="{ width: '25px', height: '25px' }" name="backtop" />
		</el-backtop>
	</div>
</template>

<style lang="scss" scoped></style>
