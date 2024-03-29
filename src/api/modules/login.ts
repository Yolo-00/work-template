import { Login } from "@/api/interface/index";
// import qs from "qs";
import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/account/login`, params);
	// return http.post<Login.ResLogin>(`/login`, params); // 正常 post json 请求  ==>  application/json
	// return http.post<Login.ResLogin>(`/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	// return http.post<Login.ResLogin>(`/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	// return http.post<Login.ResLogin>(`/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};

// * 获取按钮权限
export const getAuthButtons = () => {
	return http.get<Login.ResAuthButtons>(`/auth/buttons`);
};
