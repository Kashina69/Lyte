type EffectFn = () => void;

let currentEffect: EffectFn | null = null;

export function signal<T>(value: T): [() => T, (newVal: T) => void] {
  const subscribers = new Set<EffectFn>();

  const get = (): T => {
    if (currentEffect) subscribers.add(currentEffect);
    return value;
  };

  const set = (newVal: T): void => {
    value = newVal;
    subscribers.forEach((fn) => fn());
  };

  return [get, set];
}

export function effect(fn: EffectFn): void {
  currentEffect = fn;
  fn();
  currentEffect = null;
}
