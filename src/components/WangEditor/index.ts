import { withInstall } from "@/utils";

import wangEditor from "./src/index.vue";

export const WangEditor = withInstall(wangEditor);
export default WangEditor;

export * from "./src/index.vue";
