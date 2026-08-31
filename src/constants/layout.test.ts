// layout.ts reads Dimensions once at import, so each case re-requires it with a
// mocked screen size
const load = (width: number, height: number) => {
  jest.resetModules();
  jest.doMock('react-native', () => ({
    Dimensions: { get: () => ({ width, height }) },
  }));
  return require('./layout') as typeof import('./layout');
};

afterEach(() => {
  jest.dontMock('react-native');
  jest.resetModules();
});

describe('responsive scale', () => {
  it('is identity at the 375-wide base', () => {
    const { horizontalScale, moderateScale } = load(375, 812);
    expect(horizontalScale(10)).toBe(10);
    expect(moderateScale(10)).toBe(10);
  });

  it('scales linearly with width, and moderateScale by half of that', () => {
    const { horizontalScale, verticalScale, moderateScale } = load(750, 1624);
    expect(horizontalScale(10)).toBe(20);
    expect(verticalScale(10)).toBe(20);
    expect(moderateScale(10, 0.5)).toBe(15);
  });
});
