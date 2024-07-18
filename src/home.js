const divContent = document.createElement("div");
export function renderHome() {
  divContent.style.width = "300px";
  divContent.style.height = "400px";
  divContent.style.backgroundColor = "blue";
  divContent.innerText = "testons cette div";
  divContent.style.color = "white";
  return divContent;
}
