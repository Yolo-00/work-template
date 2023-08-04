<template>
	<div>
		layouts
		<!-- 子路由 -->
		<router-view v-slot="{ Component, route }">
			<transition name="slide-fade">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
