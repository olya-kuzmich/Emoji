import { data } from "./data.js";
let cards = document.querySelector(".main__cards");
let input = document.querySelector("input");
data.forEach((el) => {
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
});
input.addEventListener("input", function () {
  let arr = data.filter(
    (el) =>
      el.title == input.value ||
      (el.keywords == input.value) ||
        el.keywords.includes(input.value) ||
        el.title.includes(input.value)
  );
  cards.innerHTML = "";
  arr.forEach((el) => {
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
  });
});
