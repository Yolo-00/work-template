import type { languageType } from "@/stores/interface";
import { GlobalStore } from "@/stores";
import { useI18n } from "vue-i18n";

/**
 * @description 国际化
 */
export default function useLanguage() {
	const globalStore = GlobalStore();
	const i18n = useI18n();

	// 设置element/i18n语言
	const setLanguage = (lang: languageType) => {
		if (lang == globalStore.language) return;
		globalStore.setLanguage(lang);
		i18n.locale.value = lang;
	};
	return {
		setLanguage
	};
}
