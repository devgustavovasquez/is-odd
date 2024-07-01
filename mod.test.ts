import { assertEquals, assertThrows } from "https://deno.land/std@0.224.0/assert/mod.ts";

import { isOdd, isEven } from "./mod.ts"

Deno.test("[isOdd]", async (test) => {
  await test.step("should return true for odd numbers", () => {
    assertEquals(isOdd(3), true);
  });

  await test.step("should return true for negative odd numbers", () => {
    assertEquals(isOdd(-3), true);
  });

  await test.step("should return false for even numbers", () => {
    assertEquals(isOdd(2), false);
  });

  await test.step("should return false for 0", () => {
    assertEquals(isOdd(0), false);
  });

  await test.step("should throw for NaN", () => {
    assertThrows(() => {
      isOdd(Number.NaN);
    });
  });  

  await test.step("should throw for strings", () => {
    assertThrows(() => {
      isOdd("10" as unknown as number);
    });
  });

  await test.step("should throw for non-integers", () => {
    assertThrows(() => {
      isOdd(3.14);
    });
  })

  await test.step("should throw for non-safe integers", () => {
    assertThrows(() => {
      isOdd(Number.MAX_SAFE_INTEGER + 1);
    });
  })
})

Deno.test("[isEven]", async (test) => {
  await test.step("should return true for even numbers", () => {
    assertEquals(isEven(2), true);
  });

  await test.step("should return false for odd numbers", () => {
    assertEquals(isEven(3), false);
  });
})