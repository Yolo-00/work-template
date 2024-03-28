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
					<el-main>
						<!-- 子路由 -->
						<router-view v-slot="{ Component, route }">
							<transition name="slide-fade">
								<keep-alive>
									<component :is="Component" :key="route.path" />
								</keep-alive>
							</transition>
						</router-view>
					</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
		<el-backtop />
	</div>
</template>

<style lang="scss" scoped></style>
