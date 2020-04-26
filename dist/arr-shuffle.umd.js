(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-swap'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-swap', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-shuffle'] = factory(global.arrSwap, global.assertArgs, global.assertType));
}(this, (function (arrSwap, assertArgs, assertType) { 'use strict';

	arrSwap = arrSwap && Object.prototype.hasOwnProperty.call(arrSwap, 'default') ? arrSwap['default'] : arrSwap;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Shuffle items in an array in-place. Runtime: O(n)
	 * @param {Array} arr - The array to shuffle.
	 * @returns {Array} The shuffled array
	 */
	function arrShuffle(arr) {
		assertArgs(arr);
		assertType(Array, arr);

		for (let i = 0, len = arr.length; i < len; i++) {
			const newIndex = Math.floor(Math.random() * len);
			arrSwap(arr, i, newIndex);
		}

		return arr
	}

	return arrShuffle;

})));
