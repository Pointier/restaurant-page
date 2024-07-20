import "./style.css";
import { renderHome } from "./home";

const pageController = class {
  constructor(toAttach, functionsRendering, ...args) {
    this.content = document.getElementById(toAttach);
    this.functionsRendering = functionsRendering;
    this.buttons = args;
    this.initialize();
  }

  initialize() {
    let isFirstButton = true;
    for (const buttonId of this.buttons) {
      const functionRendering = this.mapping(buttonId);
      const button = document.getElementById(buttonId);

      button.addEventListener("click", () => {
        this.clearNode();
        const div = functionRendering();
        if (div) {
          this.content.appendChild(div);
        } else {
          console.log(`${buttonId} is not mapped`);
        }
      });
      if (isFirstButton) {
        this.clearNode(); // Clear existing content before rendering the first button's content
        const div = functionRendering();
        if (div) {
          this.content.appendChild(div);
        } else {
          console.log(`${buttonId} is not mapped`);
        }
        isFirstButton = false;
      }
    }
  }

  mapping(buttonId) {
    // Too convoluted but i wanted to automatically assign function to button if we added more
    for (const functionRendering of this.functionsRendering) {
      const name = functionRendering.name.toLowerCase();
      if (name.includes(buttonId)) {
        return functionRendering;
      }
    }
  }

  clearNode() {
    while (this.content.firstChild) {
      this.content.removeChild(this.content.lastChild);
    }
  }
};

new pageController("content", [renderHome], "home", "menu", "contact", "about");
