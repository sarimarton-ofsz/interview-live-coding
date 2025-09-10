const { isAlmostPalindrome } = require('./solution');

describe('isAlmostPalindrome', () => {
  test('Példa 1: Már palindrom, k=0', () => {
    expect(isAlmostPalindrome('racecar', 0)).toBe(true);
  });

  test('Példa 2: Egy módosítással palindrom', () => {
    expect(isAlmostPalindrome('abcdba', 1)).toBe(true);
  });

  test('Példa 3: Túl sok módosítás kellene', () => {
    expect(isAlmostPalindrome('abcdef', 2)).toBe(false);
  });

  test('Példa 4: Rövid string egy módosítással', () => {
    expect(isAlmostPalindrome('abc', 1)).toBe(true);
  });

  test('Példa 5: Üres string', () => {
    expect(isAlmostPalindrome('', 0)).toBe(true);
    expect(isAlmostPalindrome('', 5)).toBe(true);
  });

  test('Példa 6: Egy karakteres string', () => {
    expect(isAlmostPalindrome('a', 0)).toBe(true);
    expect(isAlmostPalindrome('a', 1)).toBe(true);
  });

  test('Példa 7: Két karakteres, azonos', () => {
    expect(isAlmostPalindrome('aa', 0)).toBe(true);
  });

  test('Példa 8: Két karakteres, különböző', () => {
    expect(isAlmostPalindrome('ab', 0)).toBe(false);
    expect(isAlmostPalindrome('ab', 1)).toBe(true);
  });

  test('Példa 9: Hosszú palindrom', () => {
    expect(isAlmostPalindrome('aabaa', 0)).toBe(true);
  });

  test('Példa 10: Majdnem palindrom hosszú string', () => {
    expect(isAlmostPalindrome('aabxbaa', 1)).toBe(true);
  });

  test('Példa 11: Páratlan hosszú, középső elem különböző', () => {
    expect(isAlmostPalindrome('abcba', 0)).toBe(true);
    expect(isAlmostPalindrome('abxba', 0)).toBe(true);
  });

  test('Példa 12: K nagyobb mint szükséges', () => {
    expect(isAlmostPalindrome('abcd', 10)).toBe(true);
  });

  test('Példa 13: Minden karakter különböző', () => {
    expect(isAlmostPalindrome('abcdefg', 3)).toBe(true);
    expect(isAlmostPalindrome('abcdefg', 2)).toBe(false);
  });
});