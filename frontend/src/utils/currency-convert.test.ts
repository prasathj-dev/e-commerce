import { expect, it } from "vitest";
import { formatCurrency } from "./currency-convert";

it("formarts 2444 as €24.44", () => {
  expect(formatCurrency(2444)).toBe("€24.44");
});
