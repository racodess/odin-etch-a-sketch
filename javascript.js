const sketch = document.querySelector("#sketch-container");
const sizeButton = document.querySelector("#size-button");

createPad(16);

sizeButton.addEventListener("click", resize);

function createPad(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    row.setAttribute("class", "row");
    sketch.appendChild(row);

    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");

      square.setAttribute("class", "square");

      square.addEventListener("mouseover", etch);

      row.appendChild(square);
    }
  }
}

function etch(event) {
  const square = event.target;

  square.style.backgroundColor = "black";
}

function resize(event) {
  const size = Number(
    window.prompt(
      "Enter a new size for the sketch pad. Min: 16   Max: 100",
      16,
    ),
  );

  if (size < 16 || size > 100) {
    alert("Size must be a number from 16 to 100");
    return;
  }

  createPad(size);
}
