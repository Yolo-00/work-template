<script setup lang="ts">
import {} from "vue";
// pinia
import { useAppStore } from "@/stores/modules/app";

const appStore = useAppStore();

const title = import.meta.env.VITE_APP_TITLE;
</script>

<template>
	<div class="bg-[var(--theme-bg)]" h-full>
		<RouterLink to="/" w-full h-15 flex="~ items-center justify-center">
			<img w-10 h-10 src="/favicon.svg" alt="" />
			<transition>
				<div ml-2 whitespace-nowrap no-underline v-show="!appStore.isCollapse">{{ title }}</div>
			</transition>
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
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
