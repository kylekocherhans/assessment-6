const {shuffleArray} = require('./utils')
const arr = [1,2,3,4,5];

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(Array.isArray(shuffleArray(arr))).toBe(true);
    });

    test('shuffleArray should return array of same length as argument sent in', () => {
        expect(shuffleArray(arr).length).toBe(arr.length);
    });
})