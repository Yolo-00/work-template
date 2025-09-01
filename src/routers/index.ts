import { createRouter, createWebHistory, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import NProgress from "@/configs/nprogress";
import { useGlobalStore } from "@/stores/modules/user";
import { useAppStore } from "@/stores/modules/app";

/**
 * Note: 路由配置项
 *
 * meta : {
	hidden: true                    // 当设置 true 的时候该路由不会在侧边栏出现 如401,login等页面,默认false
	requiresAuth: true              // 如果设置为true，表示此页面需要用户认证,默认false
	title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
	localeKey: 'home'               // 设置该页面的国际化名称
	key: 'home'                		// 用于唯一标识此页面的键值
	noKeepAlive: true               // 如果设置为true，表明此页面组件不需要被缓存
	icon: 'xianxingditu'      		// 置页面的图标为“xianxingditu”
	noLayout: true 					// 如果设置为true,表示此页面不需要layout布局,默认为false
	sort: 1                          // 菜单排序，越大越靠后
  }
 */

const routers: RouteRecordRaw[] = [
	{
		path: "/",
		meta: {
			hidden: true
		},
		redirect: "/layout",
		children: []
	},
	{
		path: "/layout",
		name: "layout",
		meta: {
			hidden: true
		},
		component: () => import("@/layouts/index.vue"),
		redirect: "/home",
		children: [
			{
				path: "/home",
				name: "Home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
					localeKey: "router.home",
					requiresAuth: true,
					key: "home",
					icon: "xianxingxiarilengyin",
					sort: 1
				}
			}
		]
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			hidden: true,
			title: "登录",
			localeKey: "router.login",
			key: "login"
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/error/404.vue"),
		meta: {
			hidden: true,
			title: "404",
			key: "err"
		}
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
		meta: {
			hidden: true
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
	console.log(to, "路由跳转");
	const globalStore = useGlobalStore();
	const appStore = useAppStore();

	// 1.NProgress 开始
	NProgress.start();

	// 2. 判断是否有 Token，没有重定向到 login
	if (!globalStore.token && to.meta.requiresAuth) return next({ path: "/login", query: to.query, replace: true });

	// 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
	if (to.path === "/login") {
		if (globalStore.token) return next(from.fullPath);
		return next();
	}

	// 4. 添加路由
	if (!appStore.menuList.length) {
		await appStore.getMenuList();
		appStore.addRouterList.forEach(route => {
			if (route.meta?.noLayout) {
				router.addRoute(route as RouteRecordRaw);
			} else {
				router.addRoute("layout", route as RouteRecordRaw);
			}
		});
		return next();
	}

	// 5.动态设置标题
	const title = import.meta.env.VITE_APP_TITLE;
	document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

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
