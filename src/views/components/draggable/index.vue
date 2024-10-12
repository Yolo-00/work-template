<script setup lang="ts">
import draggable from "vuedraggable";
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
		id: 3,
		name: "aaa"
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
		<draggable v-model="list" item-key="id" class="max-md:hidden">
			<template #item="{ element }">
				<el-card class="mt-5">
					<div>{{ element.name }}</div>
				</el-card>
			</template>
		</draggable>
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

<style lang="scss" scoped></style>
