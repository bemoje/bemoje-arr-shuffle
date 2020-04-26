import arrShuffle from '../src/arr-shuffle'

describe('arrShuffle', () => {
	test('works', () => {
		const original = []
		const shuffled = []
		for (let i = 0; i < 1000; i++) {
			original.push(i)
			shuffled.push(i)
		}
		expect(arrShuffle(shuffled)).not.toStrictEqual(original)
	})
})
