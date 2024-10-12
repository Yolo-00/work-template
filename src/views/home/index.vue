<script setup lang="ts">
// i18n
import { useI18n } from "vue-i18n";
import JsxComponent from "./JsxComponent";

const { t } = useI18n();
// fetch("http://localhost:9000/register", {
// 	method: "post",
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	body: JSON.stringify({
// 		username: "Yolo",
// 		password: "123456"
// 	})
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// fetch("http://localhost:9000/login", {
// 	method: "post",
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	body: JSON.stringify({
// 		username: "Yolo",
// 		password: "654321"
// 	})
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// fetch("http://localhost:9000/getInfo", {
// 	method: "post",
// 	headers: {
// 		"Content-Type": "application/json",
// 		Authorization:
// 			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcyNTk2MjExNywiZXhwIjoxNzI1OTY1NzE3fQ.fC0eyJrESlUuGLqFQRavsWLgjz37MXqOrVj6Vrga3Hw"
// 	},
// 	body: JSON.stringify({})
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// fetch("http://localhost:9000/delete_user/2", {
// 	method: "delete",
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	body: JSON.stringify({})
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// const params = {
// 	page: 1,
// 	size: 20
// };
// fetch("http://localhost:9000/get_user_list" + `?${new URLSearchParams(params).toString()}`, {
// 	method: "get",
// 	headers: {
// 		"Content-Type": "application/json"
// 	}
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// fetch("http://localhost:9000/updatePassWord", {
// 	method: "put",
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	body: JSON.stringify({
// 		username: "Yolo",
// 		password: "123456",
// 		newPassword: "654321"
// 	})
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));
</script>

<template>
	<div>
		<div>{{ t("home.home") }}</div>
		<JsxComponent />
	</div>
</template>

<style lang="scss" scoped>
:deep(.expand-none div) {
	display: none !important;
}
</style>
