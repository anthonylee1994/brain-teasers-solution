import { recursiveDigitsSum } from '../question1';

describe('Question 1', () => {
  it("should handle\"23935198273\"", () => {
    expect(recursiveDigitsSum(23935198273)).toBe(7);
  });
  it("should handle\"1234567890\"", () => {
    expect(recursiveDigitsSum(1234567890)).toBe(9);
  });
  it("should handle\"1111111111\"", () => {
    expect(recursiveDigitsSum(1111111111)).toBe(1);
  });
  it("should handle\"2222222222\"", () => {
    expect(recursiveDigitsSum(2222222222)).toBe(2);
  });
  it("should handle\"2222222222\"", () => {
    expect(recursiveDigitsSum(3333333333)).toBe(3);
  });
  it("should handle\"1231231234\"", () => {
    expect(recursiveDigitsSum(1231231234)).toBe(4);
  });
  it("should handle\"37289153932\"", () => {
    expect(recursiveDigitsSum(37289153932)).toBe(7);
  });
});
