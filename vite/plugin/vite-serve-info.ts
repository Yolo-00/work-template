import { Plugin } from "vite";
import dayjs from "dayjs";
import pack from "../../package.json";

/**
 * viteServeInfo插件
 */
export function viteServeInfoPlugin(): Plugin {
	return {
		name: "vite:serve-info",
		buildStart() {
			console.log(`[vite] ${dayjs().format("YYYY-MM-DD HH:mm:ss")} ${pack.name} v${pack.version}`);
		}
	};
}
