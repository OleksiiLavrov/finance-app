import { timeConverter } from "../unixTimeConverter";

describe("Convert amount", () => {
   it.each([{ input: 1684070368, expected: { day: "14 May", time: "16:19:28" } }])(
      "'$input' after timeConverter should be '$expected'",
      ({ input, expected }) => {
         const actual = timeConverter(input);
         expect(actual).toEqual(expected);
      }
   );
   it("should return accurate day and time", () => {
      const { day, time } = timeConverter(1684070368);
      expect(day).toBe("14 May");
      expect(time).toBe("16:19:28");
   });
});
