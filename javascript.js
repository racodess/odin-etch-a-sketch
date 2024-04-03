const sketch = document.querySelector("#sketch-container");
const sizeButton = document.querySelector("#size-button");
const opacityButton = document.querySelector("#opacity-button");
const colorfulButton = document.querySelector("#colorful-button");

let opacity = false;
let colorful = false;

let size = 32;
createPad(size);

sizeButton.addEventListener("click", resize);

opacityButton.addEventListener("click", () => {
  if (opacity) {
    opacity = false;
    opacityButton.style.backgroundColor = "#e9e9ed";
  } else {
    opacity = true;
    opacityButton.style.backgroundColor = "green";
  }
  createPad(size);
});

colorfulButton.addEventListener("click", () => {
  if (colorful) {
    colorful = false;
    colorfulButton.style.backgroundColor = "#e9e9ed";
  } else {
    colorful = true;
    colorfulButton.style.backgroundColor = "green";
  }
  createPad(size);
});

function createPad(size) {
  removePad();
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    row.setAttribute("class", "row");
    sketch.appendChild(row);

    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");

      square.style.opacity = 1;
      pickMode(square, opacity, colorful);

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

function etchColorful(event) {
  const square = event.target;

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  square.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function pickMode(square, opacity, colorful) {
  if (opacity) square.addEventListener("mouseover", etchProgressive);
  if (colorful) square.addEventListener("mouseover", etchColorful);
  else if (!opacity && !colorful) square.addEventListener("mouseover", etch);
}

function resize(event) {
  size = Number(
    window.prompt(
      "Enter a new size for the sketch pad. Min: 16   Max: 100",
      16,
    ),
  );

  if (size < 16 || size > 100) {
    size = 32;
    alert("Size must be a number from 16 to 100");
    return;
  }

  createPad(size);
}
