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
