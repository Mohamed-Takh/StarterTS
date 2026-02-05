import { sum } from "./sum";
import { describe, expect, test } from '@jest/globals';

describe("fonctionExemple", () => {
  test("1 + 2 equals 3", () => {
    expect(sum(1, 2)).toBe(3);
  })
})
