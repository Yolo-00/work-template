<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import avatar from "@/assets/images/avatar.png";
import loginBG from "@/assets/images/login-bg.png";
import Masonry from "masonry-layout";

const list = ref([
	{
		img: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
		title: "图片1"
	},
	{
		img: loginBG,
		title: "图片2"
	},
	{
		img: avatar,
		title: "图片3"
	},
	{
		img: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
		title: "图片4"
	},
	{
		img: loginBG,
		title: "图片5"
	}
]);
const masonryData = ref();
const num = ref(0);

const onImageLoad = async () => {
	num.value++;
	if (num.value == list.value.length) {
		await nextTick();
		masonryData.value.reloadItems();
		masonryData.value.layout();
	}
};
const handleAdd = () => {
	list.value = list.value.concat([
		{
			img: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
			title: "图片1"
		},
		{
			img: loginBG,
			title: "图片2"
		},
		{
			img: avatar,
			title: "图片3"
		},
		{
			img: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
			title: "图片4"
		}
	]);
};

onMounted(async () => {
	masonryData.value = new Masonry(document.querySelector(".grid-list") as HTMLElement, {
		columnWidth: ".grid-item",
		itemSelector: ".grid-item",
		percentPosition: true,
		transitionDuration: "0.4s", // Smooth transition for layout changes
		gutter: 50
	});
});
</script>

<template>
	<div>
		<div class="grid-list w-full mx-auto">
			<div class="grid-item w-70" v-for="(item, index) in list" :key="index">
				<img :src="item.img" class="w-full" alt="" @load="onImageLoad" />
				<div class="text-center">{{ item.title }}</div>
			</div>
		</div>
		<div class="text-center mt-5">
			<el-button type="primary" @click="handleAdd">添加图片</el-button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.grid-list {
	display: grid;
	grid-template-columns: repeat(3, 33.33%);
	justify-content: space-between;
}
</style>
