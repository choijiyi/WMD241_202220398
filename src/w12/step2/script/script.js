console.log("안녕하세요?");
// body를 불러오는 방법
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8, 0.05, 0)";

let aCard = document.querySelector(".card");
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");
  // aCard.sytle.backgroundColor = "#ff0000";
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList);
});

// let allCard = document.querySelectorAll(".card");
// console.log(allCard);
