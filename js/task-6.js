function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls > input");
const divBox = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");


createBtn.addEventListener("click", () => {
   let currentValue = parseInt(inputNumber.value);
   if (currentValue <= 100) {
    createBoxes(currentValue);
   }
   inputNumber.value = "";
})

function createBoxes(amount) {
  let minWidth = 20;
  let minHeight = 20;
  // for (let i = 0; i < amount; i++) {
  //   divBox.insertAdjacentHTML("afterbegin", `<div class="box"></div>`)
  // }
  const elementsArray = Array.from({ length: amount }, (item, index) => {
    const box = document.createElement("div");
    box.classList.add("box");
    return box;
  });
  divBox.append(...elementsArray);

  const box = document.querySelectorAll(".box");
  box.forEach(elem => {
    minWidth += 10;
    minHeight += 10;
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.width = `${minWidth}px`;
    elem.style.height = `${minHeight}px`; 
  })
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  const box = document.querySelectorAll(".box");
  box.forEach(elem => {
    elem.remove()
  })
}