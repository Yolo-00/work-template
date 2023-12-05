import { defineConfig, loadEnv, ConfigEnv, UserConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueSetupExtend from "vite-plugin-vue-setup-extend-plus";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import postcssPresetEnv from "postcss-preset-env";
import viteCdnImport from "vite-plugin-cdn-import";
import UnoCSS from "unocss/vite";
import { printLog } from "./src/utils/index";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	printLog();
	return {
		base: "./",
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src")
			}
		},
		server: {
			open: viteEnv.VITE_OPEN,
			host: true,
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
			viteEnv.VITE_REPORT &&
				(visualizer({
					emitFile: true,
					filename: "stats.html"
				}) as PluginOption),
			// * gzip压缩
			viteCompression({
				verbose: true,
				disable: false,
				threshold: 10240,
				algorithm: "gzip",
				ext: ".gz",
				deleteOriginFile: false
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * 使用 svg 图标
			createSvgIconsPlugin({
				iconDirs: [path.resolve(__dirname, "./src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			}),
			viteEnv.VITE_CDN &&
				viteCdnImport({
					// * 平台采用国内cdn：https://www.bootcdn.cn,当然你也可以选择 https://cdnjs.com/
					// * name: 对应modules的name,version：读取package.json对应依赖的版本号,path: 对应modules的path,也可写完整路径，会替换prodUrl
					prodUrl: "https://cdn.bootcdn.net/ajax/libs/{name}/{version}/{path}",
					modules: [
						{
							name: "dayjs",
							var: "dayjs",
							path: "dayjs.min.js"
						},
						{
							name: "lodash",
							var: "_",
							path: "https://cdn.bootcdn.net/ajax/libs/lodash.js/{version}/lodash.min.js"
						},
						{
							name: "axios",
							var: "axios",
							path: "axios.min.js"
						}
					]
				}),
			UnoCSS()
		],
		css: {
			// * postcss后处理器
			postcss: {
				// * postcssPresetEnv css语法降级
				plugins: [postcssPresetEnv()]
			}
		},
		esbuild: {
			pure: ["console.log", "debugger"]
		},
		build: {
			outDir: "dist",
			rollupOptions: {
				output: {
					// * 分包策略
					manualChunks: (id: string) => {
						if (id.includes("node_modules")) return "vendor";
					},
					// * 静态资源分类包装
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};
});
