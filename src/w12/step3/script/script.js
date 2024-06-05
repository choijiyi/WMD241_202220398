let elemBody = document.body;
elemBody.style.backgroundColor = "cornflowerblue";

// let aCard = document.querySelector(".card:nth-child(2)");
// let aCard = document.querySelector(".card");
// aCard.addEventListener("click", function () {
//   console.log("클릭!");
//   aCard.classList.toggle("card--state-clicked");
//   console.log(aCard.classList);
// });

let cards = document.querySelectorAll(".card");
console.log(cards);
// cards.forEach((eachCard) => {
//   eachCard.addEventListener('click', function() {

//   });
// });
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toggle("card--state-clicked");
  });
}
