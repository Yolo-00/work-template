import { withInstall } from "@/utils";

import codeEditor from "./src/index.vue";

export const CodeEditor = withInstall(codeEditor);
export default CodeEditor;

export * from "./src/index.vue";
