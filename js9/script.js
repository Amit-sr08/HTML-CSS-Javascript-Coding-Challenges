const headers = document.querySelectorAll(".header");

headers.forEach(h => {
  h.onclick = () => {
    document.querySelectorAll(".content").forEach(c => c.style.display = "none");
    h.nextElementSibling.style.display = "block";
  };
});
