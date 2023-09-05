import { camelToFlat } from "./normalizeString";

describe("camelToFlat", () => {
  test.each([["aWordWithCamels", "A Word With Camels"]])(
    "expect %s === %s",
    (input, expected) => {
      const result = camelToFlat(input);
      expect(result).toEqual(expected);
    },
  );
});
