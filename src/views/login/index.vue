<script setup lang="ts">
// icon
import { Moon, Sunny } from "@element-plus/icons-vue";
// hooks
import { useDark, useToggle } from "@vueuse/core";
import useLanguage from "@/hooks/useLanguage";
// vue
import { reactive, ref } from "vue";
// params
import { formRules } from "./index";
// types
import type { FormInstance } from "element-plus";
// pinia
import { useGlobalStore } from "@/stores/modules/user";
// i18n
import { useI18n } from "vue-i18n";

const { setLanguage } = useLanguage();
const { t } = useI18n();
const globalStore = useGlobalStore();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const title = import.meta.env.VITE_APP_TITLE;

const formRef = ref<FormInstance>();
const formData = reactive({
	phone: "",
	password: ""
});

const handleLogin = () => {
	formRef.value?.validate(res => {
		if (!res) return;
		console.log(formData);
		console.log(globalStore);
		// globalStore.setToken();
		// globalStore.setUserInfo();
	});
};
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
				<el-form-item prop="phone">
					<el-input v-model="formData.phone" prefix-icon="UserFilled" clearable :placeholder="t('login.phone')" />
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="formData.password" prefix-icon="lock" clearable :placeholder="t('login.password')" show-password />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" w-full @click="handleLogin">{{ t("login.login") }}</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<style scoped lang="scss">
.login-bg {
	background-image: url("@/assets/image/login-bg.png");
	width: 100%;
	height: 100vh;
}
</style>
