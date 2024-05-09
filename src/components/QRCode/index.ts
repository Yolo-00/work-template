import { withInstall } from "@/utils";

import qRCode from "./src/index.vue";

export const QRCode = withInstall(qRCode);
export default QRCode;

export * from "./src/index.vue";
