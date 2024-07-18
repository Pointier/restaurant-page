import "./style.css";
import Background from "./icon.jpg";

const content = document.getElementById("content");
const myIcon = new Image();
myIcon.src = Background;

content.appendChild(myIcon);
