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


function throttle(fn, interval, scope = this) {
	let timer = 0;
	let currentArgs = [];
	let shouldExecute = false;

	function execute() {
		timer = setTimeout(handleTimeout, interval);
		fn.apply(scope, currentArgs);
	}

    function handleTimeout() {
    	timer = 0;
    	if (shouldExecute) {
    		shouldExecute = false;
            execute();
    	}
    }

	return function(...args) {
		currentArgs = args;

		if (!timer) {
			// Execute the function and start a timer.
			execute();
		} else {
			shouldExecute = true;
		}
	}
}