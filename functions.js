/**
 * Wraps a function to allow it to be called, at most, once per interval
 * (specified in milliseconds). If the wrapper function is called N times within
 * that interval, only the Nth call will go through.
 */
function debounce(fn, interval, scope = this) {
	let clear = 0;
	return function(...args) {
		clearTimeout(clear);
		clear = setTimeout(() => {
			fn.apply(this, args);
		}, interval);
	}
}