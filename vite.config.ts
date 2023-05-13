import { defineConfig, loadEnv, ConfigEnv, UserConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueSetupExtend from "vite-plugin-vue-setup-extend-plus";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	return {
		base: "./",
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		server: {
			open: viteEnv.VITE_OPEN,
			host: "0.0.0.0",
			port: viteEnv.VITE_PORT,
			proxy: {
				"/api": {
					target: "http://192.168.0.108:8080", // 本地node路径
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		plugins: [
			vue(),
			VueI18nPlugin({
				include: [path.resolve(__dirname, "./src/language")]
			}),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_APP_TITLE
					}
				}
			}),
			// * name 可以写在 script 标签上
			vueSetupExtend(),
			// * 是否生成包预览(分析依赖包大小,方便做优化处理)
			viteEnv.VITE_REPORT && (visualizer() as PluginOption),
			viteCompression({
				verbose: true,
				disable: false,
				threshold: 10240,
				algorithm: "gzip",
				ext: ".gz"
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * 使用 svg 图标
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			})
		],
		esbuild: {
			pure: ["console.log", "debugger"]
		},
		build: {
			outDir: "dist"
		}
	};
});
