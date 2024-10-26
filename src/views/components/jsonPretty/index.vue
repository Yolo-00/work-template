<script setup lang="ts">
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { ref } from "vue";

const value = ref({
	status: 200,
	text: "",
	error: null,
	data: [
		{ news_id: 51184, title: "iPhone X Review: Innovative future with real black technology", source: "Netease phone" },
		{
			news_id: 51183,
			title: "Traffic paradise: How to design streets for people and unmanned vehicles in the future?",
			source: "Netease smart",
			link: "http://netease.smart/traffic-paradise/1235"
		},
		{
			news_id: 51182,
			title: "Teslamask's American Business Relations: The government does not pay billions to build factories",
			source: "AI Finance",
			members: ["Daniel", "Mike", "John"]
		}
	]
});
</script>

<template>
	<div>
		<vue-json-pretty :data="value" show-length show-line-number show-icon />
	</div>
</template>

<style lang="scss" scoped></style>
