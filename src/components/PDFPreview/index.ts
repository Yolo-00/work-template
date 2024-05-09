import { withInstall } from "@/utils";

import pdfPreview from "./src/index.vue";

export const PDFPreview = withInstall(pdfPreview);
export default PDFPreview;

export * from "./src/index.vue";
