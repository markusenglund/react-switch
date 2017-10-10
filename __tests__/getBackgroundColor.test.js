import getBackgroundColor from '../src/getBackgroundColor';

describe('getBackgroundColor()', () => {
  it('returns onColor when pos === checkedPos', () => {
    expect(getBackgroundColor(10, 10, '#aabbcc', '#ddeeff')).toBe('#ddeeff');
  });
});
