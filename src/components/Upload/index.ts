import { withInstall } from "@/utils";

import uploadImg from "./src/img.vue";
import uploadImgs from "./src/imgs.vue";

export const UploadImg = withInstall(uploadImg);
export const UploadImgs = withInstall(uploadImgs);
export default UploadImgs;

export * from "./src/img.vue";
export * from "./src/imgs.vue";
