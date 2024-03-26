import { data } from "./data.js";
let cards = document.querySelector(".main__cards");
let input = document.querySelector("input");
function push(ar) {ar.forEach((el) => {
  let set = new Set(el.keywords.split(" "));
  let newset = [...set];
  newset = newset.join(" ");
  let card = document.createElement("article");
  card.innerHTML = `
 <h2>${el.symbol}</h2>
  <h3>${el.title}</h3>
 <p>${newset}</p>
 `;
  cards.append(card);
});}
push(data)
input.addEventListener("input", function () {
  let arr = data.filter(
    (el) =>
      el.keywords.includes(input.value.trim().toLowerCase()) ||
      el.title.includes(input.value.trim().toLowerCase())
  );
  cards.innerHTML = "";
  push(arr);
});


