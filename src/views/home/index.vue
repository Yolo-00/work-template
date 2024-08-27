<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";
import { QRCode } from "@/components/QRCode/index";
// import { VCharts } from "@/components/VCharts/index";
import { onMounted, ref } from "vue";

const { t } = useI18n();
// let num = 1;

// const testApi = () => {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(1);
// 		}, 2000);
// 	});
// };

// const getChange = (res: any) => {
// 	console.log(res, "执行接口");
// 	num += 1;
// 	if (num >= 4) {
// 		configData.value.series[0].data = [250, 130, 254, 218, 135, 147, 660];
// 	}
// 	if (num >= 6) {
// 		configData.value.series[0].data = [270, 180, 154, 118, 235, 147, 660];
// 	}
// 	if (num >= 8) {
// 		configData.value.series[0].data = [250, 130, 254, 218, 135, 147, 660];
// 	}
// 	return configData.value;
// };

const configData = ref<any>({
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	},
	yAxis: {
		type: "value"
	},
	series: [
		{
			data: [],
			type: "line"
		}
	]
});

onMounted(() => {
	setTimeout(() => {
		configData.value.series[0].data = [250, 130, 254, 218, 135, 147, 660];
	}, 2000);
});
</script>

<template>
	<div>
		<QRCode content="www.baidu.com" />
		<div>{{ t("home.home") }}</div>
		<!-- <VCharts :options="configData"> </VCharts> -->
	</div>
</template>

<style lang="scss" scoped></style>
