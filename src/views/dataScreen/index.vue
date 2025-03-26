<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as Cesium from "cesium";

// 使用 ref 保存 viewer 实例（后续可以用于销毁或其他操作）
const viewer = ref<any>(null);

onMounted(() => {
	// 初始化 Cesium Viewer，并绑定到容器元素上
	viewer.value = new Cesium.Viewer("cesiumContainer", {
		animation: false, // 关闭动画控件
		timeline: false, // 关闭时间轴控件
		geocoder: false, // 关闭地理编码控件
		fullscreenButton: false, // 隐藏全屏按钮
		navigationHelpButton: false, // 隐藏帮助按钮
		homeButton: false, // 隐藏主页按钮
		sceneModePicker: false, // 隐藏 3D/2D 选
		baseLayerPicker: false // 隐藏图层选择器
	});
	viewer.value._cesiumWidget._creditContainer.style.display = "none";
	// 启用大气效果
	viewer.value.scene.skyAtmosphere.show = true;
	// 启用光照效果
	viewer.value.scene.globe.enableLighting = true;

	viewer.value.imageryLayers.remove(viewer.value.imageryLayers.get(0));
	viewer.value.imageryLayers.addImageryProvider(
		new Cesium.UrlTemplateImageryProvider({
			url: "https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
			minimumLevel: 1,
			maximumLevel: 20
		})
	);

	viewer.value.camera.setView({
		destination: Cesium.Cartesian3.fromDegrees(116.391389, 39.906667, 12000000), // 调整高度到1200万米
		orientation: {
			heading: 0.0,
			pitch: -Cesium.Math.PI_OVER_TWO, // 垂直向下看
			roll: 0.0
		}
	});

	// 添加天安门标记点
	viewer.value.entities.add({
		name: "天安门",
		position: Cesium.Cartesian3.fromDegrees(116.391389, 39.906667),
		billboard: {
			image: "https://img.icons8.com/color/48/000000/marker.png", // 标记图标
			verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
			scale: 0.5, // 图标大小
			heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 确保标记贴地
		}
	});
});
onUnmounted(() => {
	// 在组件销毁时销毁 Cesium Viewer
	viewer.value.destroy();
});
</script>

<template>
	<div class="w-full h-100vh" id="cesiumContainer"></div>
</template>

<style lang="scss" scoped></style>
