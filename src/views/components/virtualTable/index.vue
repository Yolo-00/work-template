<script setup lang="tsx">
const generateColumns = (length = 10, prefix = "column-", props?: any) =>
	Array.from({ length }).map((_, columnIndex) => ({
		...props,
		key: `${prefix}${columnIndex}`,
		dataKey: `${prefix}${columnIndex}`,
		title: `Column ${columnIndex}`,
		width: 150,
		align: "center"
	}));

const generateData = (columns: ReturnType<typeof generateColumns>, length = 200, prefix = "row-") =>
	Array.from({ length }).map((_, rowIndex) => {
		return columns.reduce(
			(rowData, column, columnIndex) => {
				rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
				return rowData;
			},
			{
				id: `${prefix}${rowIndex}`,
				parentId: null
			}
		);
	});

const columns = generateColumns(10);
const data = generateData(columns, 5000);
</script>

<template>
	<div class="w-full h-[calc(100vh-140px)]">
		<el-auto-resizer>
			<template #default="{ height, width }">
				<el-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed />
			</template>
		</el-auto-resizer>
	</div>
</template>

<style lang="scss" scoped></style>
