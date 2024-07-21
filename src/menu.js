import Bruschetta from "./img/bruschetta.jpg";
import Soup from "./img/soup.jpg";
import Avocado from "./img/avocado.jpg";

import Chops from "./img/chops.jpg";
import Chicken from "./img/chicken.jpg";
import Spaghetti from "./img/spaghetti.jpg";

import Cheesecake from "./img/cheesecake.jpg";
import Fondant from "./img/fondant.jpg";
import Tart from "./img/tart.jpg";

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
  appetizer.classList.add("category");
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
  const gridAppetizer = document.createElement("div");
  gridAppetizer.classList.add("gridMenu");
  addElements(gridAppetizer, appetizerList);
  appetizer.appendChild(gridAppetizer);
  menu.appendChild(appetizer);

  const mainDishes = document.createElement("div");
  mainDishes.classList.add("category");
  const mainDishesTitle = document.createElement("div");
  mainDishesTitle.innerHTML = "Main Dishes:";
  mainDishes.classList.add("title");
  mainDishes.appendChild(mainDishesTitle);
  const mainDishesList = {
    "Herb-Crusted Lamb Chops 12$": [
      Chops,
      "Succulent lamb chops coated with a fragrant herb crust, served with roasted garlic mashed potatoes and seasonal vegetables.",
    ],
    "Grilled Chicken Breast 11$": [
      Chicken,
      "A tender grilled chicken breast seasoned with herbs and spices, served with garlic mashed potatoes and steamed green beans.",
    ],
    "Spaghetti Aglio e Olio 10$": [
      Spaghetti,
      "Classic spaghetti tossed with garlic, olive oil, red pepper flakes, and parsley, topped with freshly grated Parmesan cheese.",
    ],
  };
  const gridMainDishes = document.createElement("div");
  gridMainDishes.classList.add("gridMenu");
  addElements(gridMainDishes, mainDishesList);
  mainDishes.appendChild(gridMainDishes);
  menu.appendChild(mainDishes);

  const desserts = document.createElement("div");
  desserts.classList.add("dessert");
  desserts.classList.add("category");
  const dessertsTitle = document.createElement("div");
  dessertsTitle.innerText = "Desserts";
  dessertsTitle.classList.add("title");
  desserts.appendChild(dessertsTitle);
  const dessertsList = {
    "Lemon Lavender Cheesecake": [
      Cheesecake,
      "A rich and creamy cheesecake infused with lemon zest and lavender, set on a graham cracker crust, and topped with a lavender-infused whipped cream.",
    ],
    "Chocolate Fondant": [
      Fondant,
      "A warm, gooey-centered chocolate cake served with a scoop of vanilla bean ice cream and a drizzle of raspberry coulis.",
    ],
    "Seasonal Fruit Tart": [
      Tart,
      "A delicate tart shell filled with vanilla custard and adorned with an array of fresh, seasonal fruits, glazed with a light apricot glaze.",
    ],
  };
  const gridDesserts = document.createElement("div");
  gridDesserts.classList.add("gridMenu");
  addElements(gridDesserts, dessertsList);
  desserts.appendChild(gridDesserts);
  menu.appendChild(desserts);
  return menu;
}
