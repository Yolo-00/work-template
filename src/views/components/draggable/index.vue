<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { ref } from "vue";

const list = ref([
	{
		id: 1,
		name: "张三"
	},
	{
		id: 2,
		name: "李四"
	},
	{
		id: 3,
		name: "王五"
	},
	{
		id: 4,
		name: "赵六"
	}
]);

const dragging = ref(false);
const dragIndex = ref(0);
const dragData = ref("");
const clientX = ref(0);
const clientY = ref(0);
const draggingStyle = ref({});
const onTouchStart = (index: number, e: any) => {
	// console.log(index, e, "开始");
	dragIndex.value = index;
	dragData.value = list.value[index].name;
	draggingStyle.value = {
		left: `${e.touches[0].clientX - 40}px`,
		top: `${e.touches[0].clientY - 40}px`,
		opacity: 0.5
	};
	dragging.value = true;
};
const onTouchMove = (e: any) => {
	// console.log(e, "进行中");
	if (dragging.value) {
		draggingStyle.value = {
			left: `${e.touches[0].clientX - 40}px`,
			top: `${e.touches[0].clientY - 40}px`,
			opacity: 0.5
		};
	}
	clientX.value = e.touches[0].clientX;
	clientY.value = e.touches[0].clientY;
};
const onTouchEnd = () => {
	console.log(clientX.value, clientY.value, "结束");
	const elList = document.querySelectorAll(".grid-item");
	elList.forEach((el, index: number) => {
		const itemRect = el.getBoundingClientRect();
		console.log(itemRect);
		if (
			clientX.value > itemRect.left &&
			clientX.value < itemRect.left + itemRect.width &&
			clientY.value > itemRect.top &&
			clientY.value < itemRect.top + itemRect.height
		) {
			console.log(el, itemRect, "命中");
			if (dragging.value) {
				list.value[dragIndex.value].name = list.value[index].name;
				list.value[index].name = dragData.value;
			}
		}
	});
	dragging.value = false;
	draggingStyle.value = {};
};
</script>

<template>
	<div>
		<div class="max-md:hidden flex items-start justify-between">
			<VueDraggable v-model="list" ghost-class="ghost" :animation="300" class="w-2/5">
				<div class="mt-5 cursor-move p-5 rounded bg-[#f9f4e7]" v-for="element in list" :key="element.id">
					<div>{{ element.name }}</div>
				</div>
			</VueDraggable>
			<vue-json-pretty class="w-2/5" :data="list" />
		</div>

		<div class="max-md:hidden">
			<VueDraggable v-model="list" ghost-class="ghost" :animation="300" class="grid grid-cols-2 gap-4">
				<div class="mt-5 cursor-move p-5 rounded bg-[#f6f0ad]" v-for="element in list" :key="element.id">
					<div>{{ element.name }}</div>
				</div>
			</VueDraggable>
		</div>

		<div class="w-80 grid grid-cols-3 bg-gray-300 p-5 gap-5 md:hidden">
			<div
				v-for="(item, index) in list"
				:key="item.id"
				class="w-20 h-20 bg-white flex justify-center items-center grid-item"
				@touchstart="onTouchStart(index, $event)"
				@touchmove="onTouchMove($event)"
				@touchend="onTouchEnd()"
			>
				{{ item.name }}
			</div>
			<div v-if="dragging" class="w-20 h-20 bg-white flex justify-center items-center fixed" :style="draggingStyle">
				{{ dragData }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ghost {
	opacity: 0.5;
	background: #7963f9;
}
</style>
