<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";
import AsideMenu from "./components/AsideMenu/index.vue";
// vue
import { computed, reactive, watch } from "vue";
// vue-router
import { useRouter } from "vue-router";
// hook
import { useDark } from "@vueuse/core";

const isDark = useDark();
const router = useRouter();

const font = reactive({
	color: "rgba(0, 0, 0, .15)"
});

watch(
	isDark,
	() => {
		font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
	},
	{
		immediate: true
	}
);
const routerInclude = computed<string[]>(() => {
	const list = router
		.getRoutes()
		.filter(item => item.meta?.noKeepAlive)
		.map(item => item.meta?.key) as string[];
	return list;
});
</script>

<template>
	<el-watermark content="Yolo" :font="font">
		<el-container class="h-100vh">
			<AsideMenu />
			<el-container>
				<el-header><Navbar /></el-header>
				<el-main class="bg-gray-100 dark:bg-black">
					<el-scrollbar class="h-[calc(100vh-140px)]">
						<div class="dark:bg-[var(--theme-bg)] min-h-[calc(100vh-140px)]" p-5 bg-white rounded-lg>
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
				<el-footer class="bg-white !dark:bg-[var(--theme-bg)] h-10 flex items-center justify-center">Footer</el-footer>
			</el-container>
		</el-container>

		<el-backtop target=".el-main .el-scrollbar__wrap" :bottom="80" :right="66">
			<SvgIcon color="#409eff" :icon-style="{ width: '25px', height: '25px' }" name="backtop" />
		</el-backtop>
	</el-watermark>
</template>

<style lang="scss" scoped></style>
