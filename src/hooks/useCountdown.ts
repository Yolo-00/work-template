import { ref } from "vue";
import { clone } from "lodash";

/**
 * @description 倒计时
 * @param {number} time 时间(默认为60)
 */

export const useCountdown = (time = 60) => {
	const currentTime = ref(clone(time));
	const isDisabled = ref(false);
	let timer: any = null;

	/** 倒计时开始 */
	const countdownStart = () => {
		isDisabled.value = true;
		currentTime.value--;
		timer = setInterval(() => {
			if (currentTime.value > 0) {
				currentTime.value--;
			} else {
				countdownEnd();
			}
		}, 1000);
	};

	/** 倒计时结束 */
	const countdownEnd = () => {
		currentTime.value = clone(time);
		isDisabled.value = false;
		clearInterval(timer);
	};
	return {
		currentTime,
		isDisabled,
		countdownStart,
		countdownEnd
	};
};
