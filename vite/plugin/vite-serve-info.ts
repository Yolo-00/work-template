import { Plugin } from "vite";
import { printLog } from "../../src/utils/bashLog";
import gradientString from "gradient-string";
import dayjs from "dayjs";
import pack from "../../package.json";

/**
 * viteServeInfo插件
 */
export function viteServeInfoPlugin(): Plugin {
	return {
		name: "vite:serve-info",
		buildStart() {
			console.log(gradientString("cyan", "pink", "magenta")(printLog()));
			console.log(gradientString("cyan", "pink", "magenta")(`当前时间 ${dayjs().format("YYYY年MM月DD日 HH时mm分ss秒")}`));
			console.log(gradientString("cyan", "pink", "magenta")(`欢迎使用 ${pack.name} ${"v:" + pack.version}`));
		}
	};
}
