const Node = require("./Node.js");

function LinkedList() {
  this._head = null;
  this._tail = null;

  this.append = function(value) {
    const node = new Node(value);
    if (this._head === null) {
      this._tail = this._head = node;
      return;
    }

    this._tail.nextNode = node;
    this._tail = node;
  };
    
  this.prepend = function(value) {
    const node = new Node(value, this._head);

    if (this.head === null) {
      this._tail = this._head = node;
      return;
    }

    this._head = node;
  };

  this.head = function() {
    return this._head;
  }
    
  this.tail = function() {
    return this._tail;
  }

  this.size = function () {
    let temp = this._head;
    let count = 0;
    while (temp !== null) {
      temp = temp.nextNode;
      count++;
    }

    return count;
  };
}

module.exports = LinkedList;
