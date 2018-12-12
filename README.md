[![Build Status](https://travis-ci.org/truck-js/stack.svg?branch=master)](https://travis-ci.org/truck-js/stack)
[![Coverage Status](https://coveralls.io/repos/github/truck-js/stack/badge.svg?branch=master)](https://coveralls.io/github/truck-js/stack?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Stack

A JavaScript _Stack_ data structure.

A _Stack_ follows a LIFO (Last-In-First-Out) methodology, just like pancakes in a plate.

## Installation

Install `@truck/stack` via npm:

```sh
$ npm install --save @truck/stack
```

## Methods

### `constructor(maximumLength?: int)`

Build a new stack. Pass an optional `maximumLength` which will limit the _Stack_ length, the default
is _65535_.

### `empty(): void`

**O(1)**. Empties the _Stack_, resetting the length back to 0.

### `isEmpty(): boolean`

**O(1)**. Checks whether the _Stack_ is empty.

### `isFull(): boolean`

**O(1)**. Checks whether the _Stack_ is full.

### `peek(): any`

**O(1)**. Get the item at the front of the _Stack_ without removing it.

### `pop(): any`

**O(1)**. Removes the top (last inserted) value from the _Stack_ and returns it.

### `push(value: any): void`

**O(1)**. Adds a value to the top of the _Stack_. Throws a `RangeError` when the addition will
exceed the maximum length allowed (defined in the `constructor`).

### `toArray(): any[]`

**O(n)**. Returns the _Stack_ as an array.

## Properties

### `.length: number`

Returns the current length of the _Stack_.

## Examples

A _Stack_ is a standard class which can be instantiated with the `new` keyword:

```js
// Build a new Stack with a maximum length of 10 values
const stack = new Stack(10);
// Get the length of the Stack
let length = Stack.length; // 0
// Add some values to the Stack
stack.push(1);
stack.push('two');
stack.push({ three: 'three' });
stack.push(false);
// Check if the Stack is full
if (!stack.isFull()) {
  stack.push('FIVE');
}
// Get the length of the Stack
length = Stack.length; // 5
// Get the Stack as an array
const stackAsArray = stack.toArray(); // [1, 'two', { three: 'three' }, false, 'FIVE']
// Remove the values from the Stack
stack.pop(); // 'FIVE'
stack.pop(); // false
stack.pop(); // { three: 'three' }
stack.pop(); // 'two'
// Check if the Stack is empty
if (!stack.isEmpty()) {
  stack.pop(); // 1
}
// Get the length of the Stack
length = Stack.length; // 0
```

## Testing

Use the following command to run all the tests described below together:

```sh
$ docker-compose run --rm app npm test
```

### Commit messages

Commit messages are linted through the use of [husky](https://www.npmjs.com/package/husky) and
[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) using the
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
commit convention.

Please read through the
[AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
to get a better understanding of how commit messages are formatted.

After doing an `npm install` the required git hooks wil be added automatically and commit messages
will be linted automatically.

### Linting

Linting is done using [eslint](https://eslint.org/) using the
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) configuration
with very few alterations, all of which can be seen in the [.eslintrc](.eslintrc) file in the root
of this repository.

Linting can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:lint
```

### Auditing

Auditing of dependencies is done through the [npm audit](https://docs.npmjs.com/cli/audit)
command-line tool.

Auditing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:vulnerabilities
```

### Unit testing

Unit testing is done with [jest](https://jestjs.io). The test file for each file to be tested is to
be placed alongside the file in testing and marked with the `.test.js` extension.

Unit testing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:scripts
```

## Contributing

Contributions are always welcome, just submit a PR to get the conversation going. Please make sure
all tests pass before submitting a PR.

### Releases

The moment a PR is merged into the `master` branch
[semantic-release](https://github.com/semantic-release/semantic-release) will kick-off a new
release, thus the importance of clear commit messages.
