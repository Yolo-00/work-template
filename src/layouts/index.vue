<script setup lang="ts">
import {} from "vue";
import Navbar from "./components/Navbar/index.vue";
import AsideMenu from "./components/AsideMenu/index.vue";
</script>

<template>
	<div>
		<el-container class="h-100vh">
			<el-aside width="200px">
				<AsideMenu />
			</el-aside>
			<el-container>
				<el-header><Navbar /></el-header>
				<el-container>
					<el-main style="height: calc(100vh - 60px)">
						<el-scrollbar>
							<div p-3>
								<!-- 子路由 -->
								<router-view v-slot="{ Component, route }">
									<transition name="slide-fade">
										<keep-alive>
											<component :is="Component" :key="route.path" />
										</keep-alive>
									</transition>
								</router-view>
								<el-footer>Footer</el-footer>
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
