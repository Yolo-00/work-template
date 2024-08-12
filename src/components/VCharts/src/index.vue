<script setup lang="ts" name="VCharts">
import { generateUUID } from "@/utils/index";
import type { EChartsOption, ECharts, EChartsInitOpts } from "echarts";
import * as echarts from "echarts";
import { watch, onBeforeUnmount, ref, computed, nextTick, onMounted, type CSSProperties } from "vue";

type initOptionsType = {
	theme: string | object | null;
	opts: EChartsInitOpts;
};

interface VeChartsProps {
	initOptions?: initOptionsType; // 初始化配置项 ==> 非必传
	options?: EChartsOption; // 配置项 ==> 非必传
	width?: number;
	height?: number;
	customStyle?: CSSProperties; // 自定义样式 ==> 非必传
	getApi?: (params?: any) => Promise<any>; // 请求接口 ==> 非必传
	getChangeData?: (params?: any) => EChartsOption; // 处理接口返回数据 ==> 非必传
	isRealTimeUpdate?: boolean; // 是否实时更新 ==> 非必传（默认为false）
	realTime?: number; // 实时更新时间间隔 ==> 非必传（默认为5分钟，单位秒）
}

const props = withDefaults(defineProps<VeChartsProps>(), {
	width: 500,
	height: 500,
	realTime: 300,
	isRealTimeUpdate: false
});

const { initOptions, getApi, getChangeData, realTime, isRealTimeUpdate } = props;

const timer = ref<any>();
const myChart = ref<ECharts>();
const echartsID = generateUUID();
const loading = ref(false);
const isData = ref(false);

// 判断是否有数据
const isSeries = (data: any) => {
	const { series } = data || { series: [] };
	return series.length > 0 && series.every((item: any) => item.data.length > 0);
};

// 图表样式
const myChartStyle = computed<CSSProperties>(() => {
	return {
		...props.customStyle,
		width: props.width + "px",
		height: props.height + "px"
	};
});

watch(
	() => props.options,
	async () => {
		if (!isSeries(props.options)) return;
		isData.value = true;
		await nextTick();
		if (myChart.value) {
			setOptions();
		} else {
			getInit();
		}
	},
	{
		deep: true,
		immediate: true
	}
);

const getInit = () => {
	const { theme, opts } = initOptions || { theme: null, opts: {} };
	myChart.value = echarts.init(document.getElementById(echartsID), theme, opts);
	setOptions();
};

const setOptions = async () => {
	myChart.value?.setOption(props.options || {});
};

const getApiSetOptions = (options: EChartsOption) => {
	if (!myChart.value) {
		const { theme, opts } = initOptions || { theme: null, opts: {} };
		myChart.value = echarts.init(document.getElementById(echartsID), theme, opts);
	}
	myChart.value?.setOption(options);
};
const getApiInit = async () => {
	if (!getApi || !getChangeData) return;
	try {
		loading.value = true;
		const res = await getApi();
		loading.value = false;
		if (isSeries(getChangeData(res))) {
			isData.value = true;
			await nextTick();
			getApiSetOptions(getChangeData(res));
		}
		if (isRealTimeUpdate) {
			timer.value = setInterval(async () => {
				const res = await getApi();
				if (isSeries(getChangeData(res))) {
					if (!isData.value) {
						isData.value = true;
						await nextTick();
					}
					getApiSetOptions(getChangeData(res));
				}
			}, realTime * 1000);
		}
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	getApiInit();
});
onBeforeUnmount(() => {
	timer.value && clearInterval(timer.value);
});
</script>

<template>
	<div>
		<div v-if="isData" :id="echartsID" :style="myChartStyle"></div>
		<div :style="myChartStyle" v-if="!isData" v-loading="loading" class="flex items-center justify-center">
			<slot><el-empty description="暂无数据" /></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
