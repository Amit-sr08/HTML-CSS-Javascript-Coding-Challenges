const box = document.getElementById("box");

document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => box.style.backgroundColor = btn.dataset.color;
});
