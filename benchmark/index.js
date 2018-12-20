// eslint-disable-next-line import/no-extraneous-dependencies
const Benchmark = require('benchmark');

// eslint-disable-next-line import/no-unresolved
const Stack = require('../lib/index').default;

const suite = new Benchmark.Suite();

const testLength = process.argv[2] || 1000000;
const stack = new Stack(testLength);
const array = new Array(testLength);

for (let length = 0; length < testLength; length += 1) {
  stack.push(length);
  array.push(length);
}

process.stdout.write(`\nRunning benchmark with ${testLength} items:\n\n`);

suite
  .add('Array#pop() ', () => {
    const a = array.pop();
    const b = array.pop();
    const c = array.pop();
    array.push(a);
    array.push(b);
    array.push(c);
  })
  .add('Stack#pop() ', () => {
    const a = stack.pop();
    const b = stack.pop();
    const c = stack.pop();
    stack.push(a);
    stack.push(b);
    stack.push(c);
  })
  .on('cycle', (event) => {
    process.stdout.write(`${String(event.target)}\n`);
  })
  .on('complete', function complete() {
    process.stdout.write(`Fastest is ${this.filter('fastest').map('name')}\n`);
  })
  .run({ async: true });
