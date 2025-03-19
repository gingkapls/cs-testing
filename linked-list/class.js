const Node = require("./Node.js");

const LinkedList = class {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  append(value) {
    const node = new Node(value);

    if (this.#head === null) {
      this.#head = node;
      this.#tail = this.#head;
      return;
    }

    this.#tail.nextNode = node;
    this.#tail = node;
  }

  prepend(value) {
    const node = new Node(value, this.#head);
    this.#head = node;
  }
    
  size() {
      let count = 0;
      let head = this.#head;
      while (head !== null) {
        head = head.nextNode;
        count++
      }
      
      return count;
  }
}

module.exports =  LinkedList;
