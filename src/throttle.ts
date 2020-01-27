export const throttle = (cb: any, limit: number) => {
	let wait = false;
	return function() {
		if (!wait) {
			cb.call();
			wait = true;
			setTimeout(function() {
				wait = false;
			}, limit);
		}
	}
};