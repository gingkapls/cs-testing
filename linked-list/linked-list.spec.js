const { describe, it, expect } = require("@jest/globals");
const LinkedList = require("./factory");
// const LinkedList  = require("./class");
// const LinkedList = require("./anon-arrow-factory");

describe("constructor", () => {
  it("creates an empty linked list", () => {
    const list = new LinkedList();
    expect(list.head()).toBeNull();
  });
});

describe("append()", () => {
  it("appends a single value", () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.tail().value).toBe(1);
  });

  it("appends a multiple values", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head().value).toBe(1);
    expect(list.tail().value).toBe(4);
  });
});

describe("prepend()", () => {
  it("prepends a single value", () => {
    const list = new LinkedList();
    list.prepend(1);
    expect(list.head().value).toBe(1);
  });

  it("prepends multiple values", () => {
    const list = new LinkedList();
    list.prepend(1);
    expect(list.head().value).toBe(1);

    list.prepend(2);
    expect(list.head().value).toBe(2);
  });
});

describe("size()", () => {
  it("returns the size of an empty list", () => {
    const list = new LinkedList();
    expect(list.size()).toBe(0);
  });

  it("returns the size of a list with one element", () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.size()).toBe(1);
  });

  it("returns the size of a list with multiple elements", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.size()).toBe(3);
  });
});
