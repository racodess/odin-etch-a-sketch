const sketch = document.querySelector("#sketch-container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");

  row.setAttribute("class", "row");
  sketch.appendChild(row);

  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");

    square.setAttribute("class", "square");
    square.style.minHeight = "30px";
    square.style.minWidth = "30px";

    square.addEventListener("mouseover", etch);

    row.appendChild(square);
  }
}

function etch(event) {
  const square = event.target;

  square.style.backgroundColor = "black";
}
