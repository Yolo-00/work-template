<script setup lang="ts">
import { onMounted, ref } from "vue";
import { VxeTableInstance } from "vxe-table";
import { ElMessage } from "element-plus";

interface RowVO {
	id: number;
	[key: string]: string | number;
}

const tableRef = ref<VxeTableInstance>();

const loading = ref(false);

// 模拟行数据
const loadData = (rowSize: number) => {
	const $table = tableRef.value;
	loading.value = true;
	setTimeout(() => {
		const dataList: RowVO[] = [];
		for (let i = 0; i < rowSize; i++) {
			const item: RowVO = {
				id: 10000 + i
			};
			for (let j = 0; j < 60; j++) {
				item[`col${j}`] = `值_${i}_${j}`;
			}
			dataList.push(item);
		}
		loading.value = false;
		if ($table) {
			const startTime = Date.now();
			$table.loadData(dataList).then(() => {
				ElMessage({
					message: `加载时间 ${Date.now() - startTime} 毫秒`,
					type: "success"
				});
			});
		}
	}, 50);
};

onMounted(() => {
	loadData(50);
});
</script>

<template>
	<div class="w-full min-h-[calc(100vh-140px)] overflow-auto">
		<p>
			<el-button @click="loadData(500)">加载500行</el-button>
			<el-button @click="loadData(1000)">加载1k行</el-button>
			<el-button @click="loadData(5000)">加载5k行</el-button>
			<el-button @click="loadData(10000)">加载1w行</el-button>
			<el-button @click="loadData(30000)">加载3w行</el-button>
		</p>
		<vxe-table
			border
			ref="tableRef"
			height="700"
			v-loading="loading"
			:scroll-y="{ enabled: true, gt: 0 }"
			:scroll-x="{ enabled: true, gt: 0 }"
		>
			<vxe-column field="col0" title="列0" width="160"></vxe-column>
			<vxe-column field="col1" title="列1" width="100"></vxe-column>
			<vxe-column field="col2" title="列2" width="160"></vxe-column>
			<vxe-column field="col3" title="列3" width="200"></vxe-column>
			<vxe-column field="col4" title="列4" width="140"></vxe-column>
			<vxe-column field="col5" title="列5" width="300"></vxe-column>
			<vxe-column field="col6" title="列6" width="160"></vxe-column>
			<vxe-column field="col7" title="列7" width="120"></vxe-column>
			<vxe-column field="col8" title="列8" width="400"></vxe-column>
			<vxe-column field="col9" title="列9" width="160"></vxe-column>
			<vxe-column field="col10" title="列10" width="160"></vxe-column>
			<vxe-column field="col11" title="列11" width="180"></vxe-column>
			<vxe-column field="col12" title="列12" width="160"></vxe-column>
			<vxe-column field="col13" title="列13" width="80"></vxe-column>
			<vxe-column field="col14" title="列14" width="120"></vxe-column>
			<vxe-column field="col15" title="列15" width="360"></vxe-column>
			<vxe-column field="col16" title="列16" width="150"></vxe-column>
			<vxe-column field="col17" title="列17" width="380"></vxe-column>
			<vxe-column field="col18" title="列18" width="100"></vxe-column>
			<vxe-column field="col19" title="列19" width="290"></vxe-column>
			<vxe-column field="col20" title="列20" width="80"></vxe-column>
			<vxe-column field="col21" title="列21" width="100"></vxe-column>
			<vxe-column field="col22" title="列22" width="120"></vxe-column>
			<vxe-column field="col23" title="列23" width="270"></vxe-column>
			<vxe-column field="col24" title="列24" width="330"></vxe-column>
			<vxe-column field="col25" title="列25" width="460"></vxe-column>
			<vxe-column field="col26" title="列26" width="280"></vxe-column>
			<vxe-column field="col27" title="列27" width="220"></vxe-column>
			<vxe-column field="col28" title="列28" width="120"></vxe-column>
			<vxe-column field="col29" title="列29" width="180"></vxe-column>
			<vxe-column field="col30" title="列30" width="500"></vxe-column>
			<vxe-column field="col31" title="列31" width="600"></vxe-column>
			<vxe-column field="col32" title="列32" width="100"></vxe-column>
			<vxe-column field="col33" title="列33" width="490"></vxe-column>
			<vxe-column field="col34" title="列34" width="100"></vxe-column>
			<vxe-column field="col35" title="列35" width="150"></vxe-column>
		</vxe-table>
	</div>
</template>

<style lang="scss" scoped></style>
