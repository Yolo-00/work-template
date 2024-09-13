import { createRouter, createWebHistory, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import NProgress from "@/configs/nprogress";
import { useGlobalStore } from "@/stores/modules/user";
import { useAppStore } from "@/stores/modules/app";

// * 导入所有router
const metaRouters = import.meta.glob("./modules/*.ts", { eager: true });

// * 处理路由表
export const routerArray: RouteRecordRaw[] = [];

Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item] as object).forEach(key => {
		routerArray.push(...(metaRouters[item] as any)[key]);
	});
});

/**
 * Note: 路由配置项
 *
 * meta : {
    requiresAuth: true              // 如果设置为true，表示此页面需要用户认证
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    key: 'home'                		// 用于唯一标识此页面的键值
    noKeepAlive: true               // 如果设置为true，表明此页面组件不需要被缓存
    icon: 'xianxingditu'      		// 置页面的图标为“xianxingditu”
  }
 */

const routers: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("@/layouts/index.vue"),
		redirect: "/home",
		children: [
			{
				path: "/home",
				name: "Home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home",
					icon: "xianxingxiarilengyin"
				}
			}
		]
	},
	...routerArray,
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			hidden: true,
			requiresAuth: false,
			title: "登录",
			key: "login"
		}
	}
];

const router = createRouter({
	history: `${import.meta.env.VITE_HASH}` === "true" ? createWebHashHistory() : createWebHistory(),
	routes: routers,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	const globalStore = useGlobalStore();
	const appStore = useAppStore();

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
	if (!globalStore.token && to.meta.requiresAuth) return next({ path: "/login", replace: true });

	// 5.设置面包屑
	appStore.setCrumbsList(to.matched);

	// 6.正常访问页面
	next();
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

export default router;
