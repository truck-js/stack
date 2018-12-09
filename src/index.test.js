import Stack from './index';

describe('.empty()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  test('Empties the stack', () => {
    const expected = 0;

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.empty();
    const actual = stack.length;

    expect(actual).toBe(expected);
  });
});

describe('.length', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  test('Returns \'0\' upon construction of the Stack', () => {
    expect(stack.length).toBe(0);
  });

  test('Returns the length of the Stack after adding values', () => {
    const expected = 5;

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    const actual = stack.length;

    expect(actual).toBe(expected);
  });

  test('Returns the length of the Stack after removing values', () => {
    const expected = 2;

    stack.pop();
    stack.pop();
    stack.pop();
    const actual = stack.length;

    expect(actual).toBe(expected);
  });

  test('Returns \'0\' again after removing all values', () => {
    const expected = 0;

    stack.pop();
    stack.pop();
    const actual = stack.length;

    expect(actual).toBe(expected);
  });
});

describe('.pop()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  test('Returns \'undefined\' if there are no values to remove', () => {
    expect(stack.pop()).toBe(undefined);
  });

  test('Returns the values in FILO order', () => {
    const VALUE_ONE = 'VALUE_ONE';
    const VALUE_TWO = 'VALUE_TWO';
    const VALUE_THREE = 'VALUE_THREE';
    const expected = [VALUE_THREE, VALUE_TWO, VALUE_ONE];

    stack.push(VALUE_ONE);
    stack.push(VALUE_TWO);
    stack.push(VALUE_THREE);
    const actual = [stack.pop(), stack.pop(), stack.pop()];

    expect(actual).toEqual(expected);
  });
});

describe('.push()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack(5);
  });

  test('Adds values to the Stack', () => {
    const expected = 5;

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    const actual = stack.length;

    expect(actual).toBe(expected);
  });

  test('Throws a \'RangeError\' when the Stack is full', () => {
    const expected = new RangeError('The Stack is full, cannot insert more items');
    let actual;

    try {
      stack.push(6);
    } catch (error) {
      actual = error;
    }

    expect(actual).toEqual(expected);
  });
});

describe('.isEmpty()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  test('Returns \'true\' when the Stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('Returns \'false\' when the Stack is not empty', () => {
    const expected = false;

    stack.push(1);
    const actual = stack.isEmpty();

    expect(actual).toBe(expected);
  });

  test('Returns \'true\' when the Stack is emptied again', () => {
    const expected = true;

    stack.pop();
    const actual = stack.isEmpty();

    expect(actual).toBe(expected);
  });
});

describe('.isFull()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack(5);
  });

  test('Returns \'false\' when the Stack is not full', () => {
    expect(stack.isFull()).toBe(false);
  });

  test('Returns \'true\' when the Stack is filled', () => {
    const expected = true;

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    const actual = stack.isFull();

    expect(actual).toBe(expected);
  });

  test('Returns \'false\' when a value from a filled Stack is popped', () => {
    const expected = false;

    stack.pop();
    const actual = stack.isFull();

    expect(actual).toBe(expected);
  });
});

describe('.peek()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  test('Returns \'undefined\' when the Stack is empty', () => {
    expect(stack.peek()).toBe(undefined);
  });

  test('Returns the value at the top of the Stack', () => {
    const VALUE_ONE = 'VALUE_ONE';
    const VALUE_TWO = 'VALUE_TWO';
    const VALUE_THREE = 'VALUE_THREE';
    const expected = VALUE_THREE;

    stack.push(VALUE_ONE);
    stack.push(VALUE_TWO);
    stack.push(VALUE_THREE);
    const actual = stack.peek();

    expect(actual).toBe(expected);
  });

  test('Does not remove the value at the top of the Stack', () => {
    expect(stack.length).toBe(3);
  });
});

describe('.toArray()', () => {
  let stack;

  beforeAll(() => {
    stack = new Stack();
  });

  test('Returns an empty array for a Stack with no items', () => {
    expect(stack.toArray()).toEqual([]);
  });

  test('Returns the values in the Stack as an array', () => {
    const VALUE_ONE = 'VALUE_ONE';
    const VALUE_TWO = 'VALUE_TWO';
    const VALUE_THREE = 'VALUE_THREE';
    const expected = [VALUE_ONE, VALUE_TWO, VALUE_THREE];

    stack.push(VALUE_ONE);
    stack.push(VALUE_TWO);
    stack.push(VALUE_THREE);
    const actual = stack.toArray();

    expect(actual).toEqual(expected);
  });
});
