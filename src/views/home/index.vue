<template>
	<div>
		<!-- <div style="height: 1000px">home</div> -->
		<QRCode
			ref="qrCodeRef"
			logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
			type="img"
			:options="{ color: { dark: '#60a5fa' } }"
			content="www.baidu.com"
		/>
		<el-button @click="handleUpdate">下载</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QRCode from "@/components/QRCode/index.vue";

const qrCodeRef = ref();

const handleUpdate = () => {
	qrCodeRef.value.downLoadQRCode();
};
</script>

<style scoped lang="scss"></style>
