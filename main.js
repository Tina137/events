// №1
let imeges = [
  "https://images.pexels.com/photos/4617294/pexels-photo-4617294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/11815778/pexels-photo-11815778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6195166/pexels-photo-6195166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
let imgg = document.querySelector(".image");
let index = 0;
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    index++;
    console.log(index);
    imgg.src = imeges[index];
    if (index === 3) {
      index = 0;
      imgg.src = imeges[index];
    }
  }
  if (e.code === "ArrowLeft") {
    index--;
    console.log(index);
    imgg.src = imeges[index];
    if (index === -1) {
      index = 2;
      imgg.src = imeges[index];
    }
  }
});

// №2
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let input = document.querySelector("input");
let add = document.querySelector(".render");
let delate = document.querySelector(".destroy");
let boxes = document.querySelector("#boxes");
function createBoxes(amount) {
  for (let numb = 0; numb < amount; numb++) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomColor();
    boxes.append(div);
    if (numb === 0) {
      div.style.width = "30px";
      div.style.height = "30px";
    } else {
      let previousDiv = boxes.children[numb - 1];
      let prevWidth = parseInt(previousDiv.style.width);
      let prevHeight = parseInt(previousDiv.style.height);

      div.style.width = prevWidth + 10 + "px";
      div.style.height = prevHeight + 10 + "px";
    }
  }
}
add.addEventListener("click", function () {
  createBoxes(Number(input.value));
});
delate.addEventListener("click", () => {
  boxes.innerHTML = ``;
});
