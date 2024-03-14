import { Plugin } from "vite";
// import { printLog } from "../../src/utils/index";
import { bold, green, magenta } from "picocolors";
import dayjs from "dayjs";
import pack from "../../package.json";
/**
 * viteServeInfo插件
 */
export function viteServeInfoPlugin(): Plugin {
	return {
		name: "vite:serve-info",
		buildStart() {
			// console.log(bold(printLog()));
			console.log(bold(green(`当前时间 ${magenta(dayjs().format("YYYY年MM月DD日 HH时mm分ss秒"))}`)));
			console.log(bold(green(`欢迎使用 ${magenta(pack.name)} ${magenta("v:" + pack.version)}`)));
		}
	};
}
