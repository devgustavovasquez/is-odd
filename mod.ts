/**
 * Checks if a number is odd.
 * @param {number | bigint} value - The number to check.
 * @returns {boolean} True if the input is odd, false otherwise.
 * @example
 * console.log(isOdd(3)); // true
 * console.log(isOdd(3n)); // true
 * @example
 * console.log(isOdd(4)); // false
 */
export function isOdd(value: number | bigint): boolean {
  if (typeof value === 'number') {
    return isOddNumber(value);
  }

  if (typeof value === 'bigint') {
    return isOddBigInt(value);
  } 

  throw new TypeError("expected a number or bigint");
}

/**
 * Checks if a number is even.
 * @param {number | bigint} value - The number to check.
 * @returns {boolean} True if the input is even, false otherwise.
 * @example
 * console.log(isEven(2)); // true
 * console.log(isEven(2n)); // true
 * @example
 * console.log(isEven(3)); // false
 */
export function isEven(value: number | bigint): boolean {
  if (typeof value === 'number') {
    return !isOddNumber(value);
  }

  if (typeof value === 'bigint') {
    return !isOddBigInt(value);
  } 

  throw new TypeError("expected a number or bigint");
}

function isOddNumber(value: number): boolean {
  const n = Math.abs(value);

  if (Number.isNaN(n)) {
    throw new TypeError("expected a valid number");
  }

  if (!Number.isInteger(n)) {
    throw new Error("expected an integer");
  }

  if (!Number.isSafeInteger(n)) {
    throw new Error("value exceeds maximum safe integer");
  }

  return n % 2 === 1;
}

function isOddBigInt(value: bigint): boolean {
  return value % 2n === 1n;
}
