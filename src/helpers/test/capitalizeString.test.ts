import { capitalizeString } from "../capitalizeString";

describe("Capitalize string", () => {
   it.each([
      { input: "string to edit", expected: "String to edit" },
      { input: "string", expected: "String" },
   ])("'$input' after capitalizeString should be '$expected'", ({ input, expected }) => {
      const actual = capitalizeString(input);
      expect(actual).toBe(expected);
   });
});
