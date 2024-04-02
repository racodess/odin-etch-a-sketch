const sketch = document.querySelector("#sketch-container");

for (let i = 0; i < 16; i++) {
  const square = document.createElement("div");

  square.setAttribute("class", "square");
  square.style.minHeight = "30px";
  square.style.maxWidth = "30px";

  sketch.appendChild(square);
}
