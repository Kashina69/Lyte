import { describe, it, expect } from "vitest";
import { signal, effect } from "../src/index";

describe("signal()", () => {
  it("should return getter and setter", () => {
    const [count, setCount] = signal(0);
    expect(count()).toBe(0);
    setCount(5);
    expect(count()).toBe(5);
  });

  it("should trigger effect on change", () => {
    const [count, setCount] = signal(1);
    let runs = 0;
    effect(() => {
      count();
      runs++;
    });
    expect(runs).toBe(1);
    setCount(2);
    expect(runs).toBe(2);
  });
});
