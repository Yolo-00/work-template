// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetTypography,
	presetUno,
	presetWind,
	transformerDirectives,
	transformerVariantGroup,
	transformerAttributifyJsx
} from "unocss";

/** @type {import('unocss').UserConfig} */
export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		}
	},
	presets: [presetUno(), presetAttributify(), presetTypography(), presetWind()],
	transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()]
});
