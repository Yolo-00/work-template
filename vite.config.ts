import { defineConfig, loadEnv, ConfigEnv, UserConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

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
					// target: 'http://192.168.0.108:8080',  // 本地node路径
					target: "http://47.97.193.216:9095",
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		plugins: [
			vue(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_APP_TITLE
					}
				}
			}),
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
