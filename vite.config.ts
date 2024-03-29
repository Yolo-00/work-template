import { defineConfig, loadEnv, ConfigEnv, UserConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { wrapperEnv } from "./src/utils/getEnv";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import postcssPresetEnv from "postcss-preset-env";
import UnoCSS from "unocss/vite";
import { viteServeInfoPlugin } from "./vite/plugin/vite-serve-info";
import { cdn } from "./vite/plugin/cdn";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd());
	const viteEnv = wrapperEnv(env);
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
					target: "http://localhost:1103", // 本地node路径
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
			// * name 可以写在 script 标签上
			vueSetupExtend({}),
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
			viteEnv.VITE_CDN && cdn,
			UnoCSS(),
			viteServeInfoPlugin(),
			VueDevTools()
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
