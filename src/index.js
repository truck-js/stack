class Stack {
  constructor(maximumLength) {
    this.maximumLength = maximumLength || 65535;
    this.stackSize = 0;
    this.values = {};
  }

  get length() {
    return this.stackSize;
  }

  empty() {
    this.values = {};
    this.stackSize = 0;
  }

  isEmpty() {
    return this.length <= 0;
  }

  isFull() {
    return this.length >= this.maximumLength;
  }

  peek() {
    return this.values[this.stackSize - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.stackSize -= 1;
    const item = this.values[this.stackSize];
    delete this.values[this.stackSize];
    return item;
  }

  push(value) {
    if (this.isFull()) {
      throw new RangeError('The Stack is full, cannot insert more items');
    } else {
      this.values[this.stackSize] = value;
      this.stackSize += 1;
    }
  }

  toArray() {
    return Object.keys(this.values).map(key => this.values[key]);
  }
}

export default Stack;
