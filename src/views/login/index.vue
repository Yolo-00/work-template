<script setup lang="ts">
// icon
import { Moon, Sunny } from "@element-plus/icons-vue";
// hooks
import { useDark, useToggle, useSessionStorage } from "@vueuse/core";
import useLanguage from "@/hooks/useLanguage";
// vue
import { reactive, ref, onBeforeMount } from "vue";
// params
import { formRules } from "./index";
// types
import type { FormInstance } from "element-plus";
// pinia
import { useGlobalStore } from "@/stores/modules/user";
// i18n
import { useI18n } from "vue-i18n";
// router
import { useRouter } from "vue-router";
// utils
import { debounce } from "lodash";
// components
import PuzzleVerify from "@/components/PuzzleVerify/index";
// api
// import { loginApi } from "@/api/modules/login";

const router = useRouter();
const { setLanguage } = useLanguage();
const { t } = useI18n();
const globalStore = useGlobalStore();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const title = import.meta.env.VITE_APP_TITLE;
const puzzleVerifyRef = ref();

const formRef = ref<FormInstance>();
const formData = reactive({
	account: "admin",
	password: "123456"
});

const handleLogin = debounce(() => {
	formRef.value?.validate(res => {
		if (!res) return;
		puzzleVerifyRef.value.open(() => {
			globalStore.setToken(new Date().getTime().toString());
			router.replace("/");
			// loginApi({
			// 	loginName: formData.account,
			// 	password: formData.password
			// }).then(res => {
			// 	globalStore.setToken(res.data.accessToken);
			// 	router.replace("/");
			// 	// globalStore.setUserInfo();
			// });
		});
	});
}, 500);

const clientId = "Ov23liyRpMRmQeOGgqel"; // GitHub OAuth Client ID
const redirectUri = "http://192.168.3.6:1103/#/login"; // 重定向的回调URL
const state = useSessionStorage("state", new Date().toLocaleString());
const type: number = 2; // 1 重定向方式授权登陆 2 弹窗式授权登陆
const handleAuth = () => {
	const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user&state=${state.value}`;
	if (type === 1) {
		window.location.href = githubAuthUrl; // 重定向到 GitHub 的授权页面
	} else if (type === 2) {
		const githubPopup = window.open(githubAuthUrl, "oauthWindow", "width=600,height=700");
		if (githubPopup) {
			// 监听弹出窗口关闭，或者在窗口内通过 postMessage 传递数据回来
			window.addEventListener("message", getGithubCallBack, false);
		}
	}
};
const getGithubCallBack = (event: any) => {
	const { code, state } = event.data;
	console.log("Received authorization:", code, state);
	// 继续处理授权结果，如请求 access_token 等
	if (code && state) {
		globalStore.setToken(code || "");
		router.replace("/");
		// 移除事件监听
		window.removeEventListener("message", getGithubCallBack);
	}
};
onBeforeMount(() => {
	const urlParams = new URLSearchParams(location.search);
	if (urlParams.get("code") && urlParams.get("state")) {
		console.log("code", urlParams.get("code"));
		console.log("state", urlParams.get("state"));
		console.log(state.value);
		if (type === 1) {
			globalStore.setToken(new URLSearchParams(location.search).get("code") || "");
			window.location.href = location.origin;
		} else if (type === 2) {
			window.opener.postMessage({ code: urlParams.get("code"), state: urlParams.get("state") }, location.origin);
			window.close(); // 关闭弹出窗口
		}
	}
});
</script>

<template>
	<div fixed right-10 top-10 flex="~ items-center">
		<!-- 主题 -->
		<div mr-4>
			<el-switch :width="45" v-model="isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @change="toggleDark" />
		</div>
		<!-- 国际化 -->
		<div>
			<el-dropdown>
				<div class="cursor-pointer">
					<SvgIcon color="#333" :icon-style="{ width: '20px', height: '20px' }" name="language" />
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>
							<div class="px-4" @click="setLanguage('en')">English</div>
						</el-dropdown-item>
						<el-dropdown-item divided>
							<div class="px-4" @click="setLanguage('zh')">简体中文</div>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
	<div class="login-bg" flex="~ justify-center items-center" bg="no-repeat cover center">
		<div p-5 bg-white dark:bg-black rounded-lg w-70>
			<div font-semibold text-xl text-center mb-4>{{ title }}</div>
			<el-form ref="formRef" :model="formData" :rules="formRules">
				<el-form-item prop="account">
					<el-input
						v-model="formData.account"
						prefix-icon="UserFilled"
						clearable
						:placeholder="t('login.account')"
						@keyup.enter="handleLogin"
					/>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="formData.password"
						prefix-icon="lock"
						clearable
						:placeholder="t('login.password')"
						show-password
						@keyup.enter="handleLogin"
					/>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" w-full @click="handleLogin">{{ t("login.login") }}</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="info" w-full @click="handleAuth">{{ t("login.auth") }}</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>

	<PuzzleVerify ref="puzzleVerifyRef" />
</template>

<style scoped lang="scss">
.login-bg {
	background-image: url("@/assets/images/login-bg.png");
	width: 100%;
	height: 100vh;
}
</style>
