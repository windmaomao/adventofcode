// 5-27-24
const timer = document.getElementById("timer");
const start = document.getElementById("start-button");
const stop = document.getElementById("stop-button");
const reset = document.getElementById("reset-button");
let lastTime;
let watcher = 0;
let running = false;

function render() {
  const p0 = watcher % 1000;
  const t = (watcher - p0) / 1000;
  const p1 = t % 60;
  const p2 = (t - p1) / 60;
  const s0 = `${p0}`.padStart(3, "0");
  const s1 = `${p1}`.padStart(2, "0");
  const s2 = `${p2}`.padStart(2, "0");
  timer.textContent = `${s2}:${s1}:${s0}`;
}

function onStep() {
  if (!running) return;
  const currentTime = Date.now();
  watcher += currentTime - lastTime;
  lastTime = currentTime;
  render();
  window.requestAnimationFrame(onStep);
}

function onStart() {
  start.toggleAttribute("disabled");
  stop.toggleAttribute("disabled");
  reset.setAttribute("disabled", "disabled");
  lastTime = Date.now();
  running = true;
  window.requestAnimationFrame(onStep);
}

function onStop() {
  start.toggleAttribute("disabled");
  stop.toggleAttribute("disabled");
  reset.removeAttribute("disabled");
  running = false;
}

function onReset() {
  stop.setAttribute("disabled", true);
  reset.setAttribute("disabled", true);
  watcher = 0;
  render();
}

function init() {
  start.addEventListener("click", onStart);
  stop.addEventListener("click", onStop);
  reset.addEventListener("click", onReset);
}

init();
