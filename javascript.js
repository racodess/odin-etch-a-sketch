const sketch = document.querySelector("#sketch-container");
const sizeButton = document.querySelector("#size-button");

createPad(64);

sizeButton.addEventListener("click", resize);

function createPad(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    row.setAttribute("class", "row");
    sketch.appendChild(row);

    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");

      square.setAttribute("class", "square");

      square.style.opacity = 1;
      square.addEventListener("mouseover", etch);

      row.appendChild(square);
    }
  }
}

function removePad() {
  while (sketch.lastChild) sketch.removeChild(sketch.lastChild);
}

function etch(event) {
  const square = event.target;

  square.style.opacity = 0;
}

function etchProgressive(event) {
  const square = event.target;

  square.style.opacity -= 0.3;
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

  removePad();
  createPad(size);
}
