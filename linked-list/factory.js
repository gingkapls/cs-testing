const Node = require("./Node.js");

function LinkedList() {
  let head = null;
  let tail = null;

  const append = (value) => {
    const node = new Node(value);
    if (head === null) {
      tail = head = node;
      return;
    }

    tail.nextNode = node;
    tail = node;
  };

  const prepend = (value) => {
    const node = new Node(value, head);

    if (head === null) {
      tail = head = node;
      return;
    }

    head = node;
  };

  const size = () => {
    let temp = head;
    let count = 0;
    while (temp !== null) {
      temp = temp.nextNode;
      count++;
    }

    return count;
  };

  return {
    head() {
      return head;
    },
    tail() {
      return tail;
    },
    append,
    prepend,
    size,
  };
}

module.exports = LinkedList;
