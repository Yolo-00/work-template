import http from "@/api";

/**
 * @name 公共模块
 */
// * 获取菜单列表
export const getMenuList = () => {
	return http.get(`/menu/treeselect`);
};
