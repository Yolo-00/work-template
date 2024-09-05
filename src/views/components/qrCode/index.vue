<script setup lang="ts">
import QRCode from "@/components/QRCode/index";
import avatar from "@/assets/images/avatar.png";
</script>

<template>
	<div>
		<el-row :gutter="24">
			<el-col :span="8">
				<QRCode content="www.baidu.com" />
			</el-col>
			<el-col :span="8">
				<QRCode type="canvas" :logo="avatar" content="www.baidu.com" />
			</el-col>
			<el-col :span="8">
				<QRCode
					type="canvas"
					:options="{ color: { dark: '#FFFF00', light: '#00FFFF' } }"
					:logo="avatar"
					content="www.baidu.com"
				/>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped></style>
