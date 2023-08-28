function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const colorBtnEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');
// console.log(colorBtnEl);
// console.log(colorSpanEl);

colorBtnEl.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
  // colorSpanEl.style.color = randomColor;
});
