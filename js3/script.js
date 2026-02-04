const btn = document.getElementById("toggleBtn");

btn.onclick = () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark")
    ? "Disable Dark Mode"
    : "Enable Dark Mode";
};
