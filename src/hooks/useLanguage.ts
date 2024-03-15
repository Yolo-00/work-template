import type { LanguageType } from "@/stores/interface";
import { useGlobalStore } from "@/stores/modules/user";
import { useI18n } from "vue-i18n";

/**
 * @description 国际化
 */
export default function useLanguage() {
	const globalStore = useGlobalStore();
	const { locale } = useI18n();

	// 设置element/i18n语言
	const setLanguage = (lang: LanguageType) => {
		if (lang == globalStore.language) return;
		globalStore.setLanguage(lang);
		locale.value = lang;
	};
	return {
		setLanguage
	};
}
