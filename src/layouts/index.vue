<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";
import AsideMenu from "./components/AsideMenu/index.vue";
// vue
import { computed } from "vue";
// vue-router
import { useRouter } from "vue-router";

const router = useRouter();

const routerInclude = computed(() => {
	console.log();
	const list = router
		.getRoutes()
		.filter(item => item.meta?.noKeepAlive)
		.map(item => item.meta?.key);
	return list;
});
</script>

<template>
	<div>
		<el-container class="h-100vh">
			<AsideMenu />
			<el-container>
				<el-header><Navbar /></el-header>
				<el-container>
					<el-main style="height: calc(100vh - 60px)" class="bg-gray-100 dark-bg-black">
						<el-scrollbar>
							<div class="dark:bg-[var(--theme-bg)]" p-5 bg-white rounded-lg>
								<!-- 子路由 -->
								<router-view v-slot="{ Component, route }">
									<transition name="slide-fade" :include="routerInclude">
										<keep-alive>
											<component :is="Component" :key="route.path" />
										</keep-alive>
									</transition>
								</router-view>
								<!-- <el-footer>Footer</el-footer> -->
							</div>
						</el-scrollbar>
					</el-main>
					<el-backtop target=".el-main .el-scrollbar__wrap">
						<SvgIcon color="#409eff" :icon-style="{ width: '25px', height: '25px' }" name="backtop" />
					</el-backtop>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<style lang="scss" scoped></style>
