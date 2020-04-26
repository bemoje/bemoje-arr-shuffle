import arrSwap from '@bemoje/arr-swap';
import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

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

export default arrShuffle;
