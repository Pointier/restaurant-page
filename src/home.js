function addElements(parent, elements) {
  for (const key in elements) {
    if (elements.hasOwnProperty(key)) {
      const element = elements[key];
      const div = document.createElement("div");
      div.classList.add("paragraph");
      div.innerText = `${key}\n${element}`;
      parent.appendChild(div);
    }
  }
}
export function renderHome() {
  const divContent = document.createElement("div");
  divContent.classList.add("home");
  divContent.style.display = "flex";

  const presentation = document.createElement("div");
  presentation.classList.add("presentation");

  const elements = {
    "Welcome to The Gourmet Garden": `At The Gourmet Garden, we believe that dining is an experience that should tantalize all your senses. Nestled in the heart of Paris,
      our restaurant is a culinary sanctuary where fresh, locally-sourced ingredients meet innovative, gourmet creations.`,
    "Our Philosophy": `Our culinary philosophy is rooted in the love for fresh produce and the art of creating extraordinary flavors.
      We take pride in crafting dishes that not only delight your palate but also nourish your body and soul.
      Each plate is a harmonious blend of tradition and innovation, designed to take you on a gastronomic journey.`,
    "The Ambiance": `Step into a serene oasis where the ambiance reflects the natural beauty of a garden. Surrounded by lush greenery and elegant decor,
      our dining space offers a tranquil retreat from the hustle and bustle of everyday life. 
      Whether you are celebrating a special occasion or enjoying a casual meal, The Gourmet Garden provides the perfect setting.`,
    "Our menu": `Our menu is a celebration of seasonal produce and artisanal ingredients. From farm-fresh salads and succulent meats to delectable desserts,
      each dish is thoughtfully prepared to highlight the essence of its ingredients. We offer a diverse selection of vegetarian, vegan, 
      and gluten-free options to cater to all dietary preferences.`,
    "Exceptional Service": `At The Gourmet Garden, exceptional service is at the heart of our dining experience. 
     Our attentive and knowledgeable staff are dedicated to making your visit memorable, ensuring that every detail is taken care of from the moment you walk through our doors.`,
  };

  addElements(presentation, elements);

  divContent.appendChild(presentation);

  return divContent;
}
