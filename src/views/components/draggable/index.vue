<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";

const list = ref([
	{
		id: 1,
		name: "John"
	},
	{
		id: 2,
		name: "Jane"
	},
	{
		id: 3,
		name: "Joe"
	}
]);
</script>

<template>
	<div>
		<draggable v-model="list" item-key="id">
			<template #item="{ element }">
				<el-card class="mt-5">
					<div>{{ element.name }}</div>
				</el-card>
			</template>
		</draggable>
	</div>
</template>

<style lang="scss" scoped></style>
