import "./style.css";
import { renderHome } from "./home";

const pageController = class {
  constructor(toAttach, functionsRender, ...args) {
    this.content = document.getElementById(toAttach);
    this.functionsRender = functionsRender;
    this.buttons = args;
    this.mappingButtonsFunctions = {};
    this.initialize();
  }
  initialize() {
    for (const buttonId of this.buttons) {
      const button = document.getElementById(buttonId);
      button.addEventListener("click", () => {
        this.clearNode();
        const div = renderHome();
        this.content.appendChild(div);
      });
    }
  }
  mapping() {
    for (const buttonId of this.buttons) {
      for (const functionRender of this.functionsRender) {
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
