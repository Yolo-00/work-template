import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NProgress from "@/configs/nprogress";
import { useGlobalStore } from "@/stores";

// * 导入所有router
const metaRouters = import.meta.glob("./modules/*.ts", { eager: true });

// * 处理路由表
export const routerArray: RouteRecordRaw[] = [];

Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item] as object).forEach(key => {
		routerArray.push(...(metaRouters[item] as any)[key]);
	});
});

const routers: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: "/home"
	},
	...routerArray,
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录",
			key: "login"
		}
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routers,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	const globalStore = useGlobalStore();

	// 1.NProgress 开始
	NProgress.start();

	// 2.动态设置标题
	const title = import.meta.env.VITE_APP_TITLE;
	document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

	// 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
	if (to.path === "/login") {
		if (globalStore.token) return next(from.fullPath);
		return next();
	}

	// 4.判断是否有 Token，没有重定向到 login
	if (!globalStore.token) return next({ path: "/login", replace: true });

	// 5.正常访问页面
	next();
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

export default router;
