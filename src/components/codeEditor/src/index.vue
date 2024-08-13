<script setup lang="ts">
import { onMounted } from "vue";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

const props = defineProps({
	codeHeight: {
		type: Number,
		default: 500
	},
	disabled: {
		type: Boolean,
		default: false
	},
	options: {
		type: Object
	}
});
const model = defineModel<string>();

self.MonacoEnvironment = {
	getWorker: function (_, label: any) {
		if (label === "json") {
			return new jsonWorker();
		}
		if (label === "css" || label === "scss" || label === "less") {
			return new cssWorker();
		}
		if (label === "html" || label === "handlebars" || label === "razor") {
			return new htmlWorker();
		}
		if (label === "typescript" || label === "javascript") {
			return new tsWorker();
		}
		return new editorWorker();
	}
};

let editor: monaco.editor.IStandaloneCodeEditor;
const initMonaco = () => {
	monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
		noSemanticValidation: true,
		noSyntaxValidation: false
	});
	monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ES2020,
		allowNonTsExtensions: true
	});

	editor = monaco.editor.create(document.getElementById("monacoEditor") as HTMLElement, {
		value: model.value,
		language: "javascript",
		theme: "vs-dark",
		automaticLayout: true, // 自适应布局
		foldingStrategy: "indentation", // 折叠方式  auto | indentation
		renderLineHighlight: "all", // 行亮
		selectOnLineNumbers: true, // 显示行号
		minimap: {
			// 小地图
			enabled: true
		},
		readOnly: props.disabled, // 只读
		contextmenu: true,
		fontSize: 14, // 字体大小
		scrollBeyondLastLine: false, // 取消代码后面一大段空白
		overviewRulerBorder: false, // 不要滚动条的边框
		...props.options
	});
	editor.onDidChangeModelContent(() => {
		model.value = editor.getValue();
	});

	editor.addAction({
		id: "save-file",
		label: "保存",
		keybindings: [
			monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS // 绑定 Ctrl+S 或 Cmd+S
		],
		contextMenuGroupId: "navigation",
		contextMenuOrder: 1.5,
		run: (editor: any) => {
			console.log(editor);
			// 在这里处理保存逻辑，例如发送到服务器或本地存储
		}
	});
};

const setEditValue = (value: string) => {
	editor.setValue(value);
};

onMounted(() => {
	initMonaco();
});

defineExpose({
	setEditValue
});
</script>

<template>
	<div>
		<div id="monacoEditor" :style="{ height: `${codeHeight}px` }"></div>
	</div>
</template>

<style lang="scss" scoped>
#monacoEditor {
	width: 100%;
}
</style>
