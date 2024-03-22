import { Plugin as importToCDN } from "vite-plugin-cdn-import";

export const cdn = importToCDN({
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
			path: "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js"
		},
		{
			name: "axios",
			var: "axios",
			path: "axios.min.js"
		}
	]
});
