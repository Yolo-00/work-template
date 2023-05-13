/**
 * @description 姓名手机号身份证遮掩
 * @param {string} value 遮掩值
 * @param {number} startLen 头部保留位数
 * @param {number} endLen 尾部保留位数
 * @return string
 */
export function coverContent(value: string, startLen: number, endLen: number): string {
	let len = value.length - startLen - endLen;
	let cover = "";
	for (let i = 0; i < len; i++) {
		cover += "*";
	}
	return value.substring(0, startLen) + cover + value.substring(value.length - endLen);
}

/**
 * 防抖函数,一定时间内执行最后一次
 * @param {function} fun
 * @param {number} time
 * @returns
 */
// export function debounce(fun: Function, time = 500) {
// 	let timeout: any = null;
// 	return function () {
// 		if (timeout) clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			fun.call(this, arguments);
// 		}, time);
// 	};
// }

/**
 * 节流函数, 一定时间内执行一次
 * @param {function} fun
 * @param {number} time
 */
// export function throttle(fun: Function, time = 500) {
// 	let timeout: any = null;
// 	return function () {
// 		if (timeout) return;
// 		fun.apply(this, arguments);
// 		timeout = setTimeout(() => {
// 			timeout = null;
// 		}, time);
// 	};
// }
