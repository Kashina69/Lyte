import { signal, effect, render } from "../index.js";

function Counter() {
  const [count, setCount] = signal(0);

  const btn = document.createElement("button");
  btn.textContent = count();

  btn.onclick = () => setCount(count() + 1);

  effect(() => {
    btn.textContent = `Count: ${count()}`;
  });

  return btn;
}

render(Counter, document.getElementById("app"));
