<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import enUS from "vue-cesium/es/locale/lang/en-us";
import zhCN from "vue-cesium/es/locale/lang/zh-hans";

import { useGlobalStore } from "@/stores/modules/user";
const globalStore = useGlobalStore();

// 使用 ref 保存 viewer 实例（后续可以用于销毁或其他操作）
const viewer = ref<any>(null);
const rectangle = ref<any>(null);
const data = ref<any>([]);

const locale = computed(() => {
	return globalStore.language === "zh" ? zhCN : enUS;
});

const ready = ({ Cesium }: any) => {
	Cesium.Resource.fetchJson({ url: "https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json" }).then((res: any) => {
		console.log(res, "res");
		rectangle.value = res.bounds;
		data.value = res.data;
	});
};

onMounted(() => {
	console.log(viewer.value);
});
onUnmounted(() => {
	// 在组件销毁时销毁 Cesium Viewer
	viewer.value.destroy();
});
</script>

<template>
	<vc-config-provider :locale="locale">
		<vc-viewer ref="viewer" :show-credit="false" shadows @ready="ready">
			<vc-layer-imagery :alpha="1" :brightness="1" :contrast="1" :sort-order="20">
				<vc-imagery-provider-amap
					:lang="globalStore.language === 'zh' ? 'zh_cn' : 'en'"
					map-style="7"
					:projection-transforms="{
						from: 'GCJ02',
						to: 'WGS84'
					}"
				></vc-imagery-provider-amap>
			</vc-layer-imagery>
			<vc-overlay-heatmap v-if="data.length" :data="data" :rectangle="rectangle"></vc-overlay-heatmap>
		</vc-viewer>
	</vc-config-provider>
</template>

<style lang="scss" scoped>
.cesiumContainer {
	width: 100%;
	height: 100vh;
}
</style>
