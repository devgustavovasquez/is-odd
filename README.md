# is-odd

This project provides functions to check whether a number is odd or even, supporting both regular numbers and bigints.

## Functions

- `isOdd(value: number | bigint): boolean`: Checks if a number is odd.
- `isEven(value: number | bigint): boolean`: Checks if a number is even.

## Usage Examples

```typescript
import { isOdd, isEven } from './mod.ts';

console.log(isOdd(3)); // true
console.log(isOdd(3n)); // true

console.log(isEven(4)); // false
console.log(isEven(4n)); // false
```

## Contributing

Contributions Welcome! You can contribute in the following ways.

- Create an Issue - Propose a new feature. Report a bug.
- Pull Request - Fix a bug and typo. Refactor the code.
- Share - Share this project with others.
- Make your application - Please try to use this project.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.