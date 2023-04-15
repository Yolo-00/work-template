/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export function localGet(key: string) {
	const value = window.localStorage.getItem(key);
	try {
		return JSON.parse(window.localStorage.getItem(key) as string);
	} catch (error) {
		return value;
	}
}

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
export function localSet(key: string, value: any) {
	window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
export function localRemove(key: string) {
	window.localStorage.removeItem(key);
}

/**
 * @description 清除所有localStorage
 * @return void
 */
export function localClear() {
	window.localStorage.clear();
}

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
	for (var i = 0; i < len; i++) {
		cover += "*";
	}
	return value.substring(0, startLen) + cover + value.substring(value.length - endLen);
}

/**
 * @description 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @return number
 */
export function randomNum(min: number, max: number): number {
	let num = Math.floor(Math.random() * (min - max) + max);
	return num;
}

/**
 * 防抖函数,一定时间内执行最后一次
 * @param {function} fun
 * @param {number} time
 * @returns
 */
export function debounce(fun: Function, time = 500) {
	let timeout: any = null;
	return function () {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			fun.call(this, arguments);
		}, time);
	};
}

/**
 * 节流函数, 一定时间内执行一次
 * @param {function} fun
 * @param {number} time
 */
export function throttle(fun: Function, time = 500) {
	let timeout: any = null;
	return function () {
		if (timeout) return;
		fun.apply(this, arguments);
		timeout = setTimeout(() => {
			timeout = null;
		}, time);
	};
}

/**
 * @description 生成唯一 uuid
 * @return string
 */
export function generateUUID() {
	if (typeof crypto === "object") {
		if (typeof crypto.randomUUID === "function") {
			return crypto.randomUUID();
		}
		if (typeof crypto.getRandomValues === "function" && typeof Uint8Array === "function") {
			const callback = (c: any) => {
				const num = Number(c);
				return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
			};
			return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, callback);
		}
	}
	let timestamp = new Date().getTime();
	let performanceNow = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
		let random = Math.random() * 16;
		if (timestamp > 0) {
			random = (timestamp + random) % 16 | 0;
			timestamp = Math.floor(timestamp / 16);
		} else {
			random = (performanceNow + random) % 16 | 0;
			performanceNow = Math.floor(performanceNow / 16);
		}
		return (c === "x" ? random : (random & 0x3) | 0x8).toString(16);
	});
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export function isType(val: any) {
	if (val === null) return "null";
	if (typeof val !== "object") return typeof val;
	else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}
