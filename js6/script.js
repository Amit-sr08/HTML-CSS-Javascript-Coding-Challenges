const text = document.getElementById("text");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

text.oninput = () => {
  counter.textContent = text.value.length + " / 100";
  warning.textContent = text.value.length >= 100 ? "Character limit reached!" : "";
};
