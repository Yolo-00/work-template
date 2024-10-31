import { RouteRecordRaw } from "vue-router";

// 扩展 RouteRecordRaw，允许 `component` 为字符串类型
export interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, "component" | "children"> {
	component?: string | RouteRecordRaw["component"];
	children?: CustomRouteRecordRaw[];
}
