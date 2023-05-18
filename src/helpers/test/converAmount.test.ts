import { convertAmount } from "../convertAmout";

describe("Convert amount", () => {
   it.each([
      { input: 1000000, expected: 10000 },
      { input: 100, expected: 1 },
   ])("'$input' after convertAmount should be '$expected'", ({ input, expected }) => {
      const actual = convertAmount(input);
      expect(actual).toBe(expected);
   });
   it("input lower than 100 should return 0", () => {
      const actual = convertAmount(99);
      expect(actual).toBe(0);
   });
});
