const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const list = document.getElementById("list");
const search = document.getElementById("search");

function render(items) {
  list.innerHTML = "";
  items.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

render(fruits);

search.oninput = () => {
  const filtered = fruits.filter(f =>
    f.toLowerCase().includes(search.value.toLowerCase())
  );
  render(filtered);
};
