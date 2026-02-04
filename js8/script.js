const main = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(img => {
  img.onclick = () => main.src = img.src;
});
