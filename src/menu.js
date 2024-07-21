import Bruschetta from "./img/bruschetta.jpg";
import Soup from "./img/soup.jpg";
import Avocado from "./img/avocado.jpg";

function addElements(parent, elements) {
  for (const key in elements) {
    if (elements.hasOwnProperty(key)) {
      const element = elements[key];
      const content = document.createElement("div");
      content.classList.add("content");
      const name = document.createElement("div");
      name.innerText = key;
      const img = document.createElement("img");
      img.src = element[0];
      const desc = document.createElement("div");
      desc.innerText = element[1];
      content.appendChild(name);
      content.appendChild(img);
      content.appendChild(desc);
      parent.appendChild(content);
    }
  }
}
export function renderMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const appetizer = document.createElement("div");
  appetizer.classList.add("appetizer");
  const appetizerTitle = document.createElement("div");
  appetizerTitle.innerText = "Appetizer:";
  appetizerTitle.classList.add("title");
  appetizer.appendChild(appetizerTitle);
  const appetizerList = {
    "Garden Fresh Bruschetta 8$": [
      Bruschetta,
      "A medley of vine-ripened tomatoes, fresh basil, and garlic on toasted artisan bread, drizzled with balsamic glaze.",
    ],
    "Butternut Squash Soup 7$": [
      Soup,
      "A velvety blend of roasted butternut squash, caramelized onions, and a hint of nutmeg, garnished with a swirl of crème fraîche and toasted pumpkin seeds.",
    ],
    "Avocado & Mango Salad 9$": [
      Avocado,
      "Fresh avocado and ripe mango slices on a bed of mixed greens, topped with feta cheese and a zesty lime vinaigrette.",
    ],
  };
  const gridMenu = document.createElement("div");
  gridMenu.classList.add("gridMenu");
  addElements(gridMenu, appetizerList);
  appetizer.appendChild(gridMenu);
  menu.appendChild(appetizer);
  return menu;
}
