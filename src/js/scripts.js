// const
const main = document.querySelector("main");
const body = document.querySelector("body");
const btnadd = document.querySelector("btn-add");
const btnupdate = document.querySelector("btn-update");
const btndelete = document.querySelector("btn-delete");
let i = 0;
// fonction de chargement des informations des characters
async function displayCharactersCards() {
  const response = await fetch(
    "https://character-database.becode.xyz/characters"
    );
    const character = await response.json();
    console.log(character);
    console.log(character.length);
    for (i; i < character.length; i++) {
      const desc = character[i].description;
    // Nom des characters
    let cardS = document.createElement("div");
    cardS.setAttribute("class", "cards");
    main.appendChild(cardS);
    // Nom des characters
    let cardName = document.createElement("div");
    cardName.setAttribute("class", "card-name");
    cardS.appendChild(cardName);
    cardName.innerHTML = character[i].name;
    // Image des characters
    let cardimg = document.createElement("img");
    cardimg.setAttribute("class", "card-img");
    cardimg.setAttribute("src", "data:image/png;base64," + character[i].image);
    cardS.appendChild(cardimg);
    // Description courte des characters
    let cardShortDesc = document.createElement("div");
    cardShortDesc.setAttribute("class", "card-short-desc");
    cardS.appendChild(cardShortDesc);
    cardShortDesc.innerHTML = character[i].shortDescription;
    // clique sur la photo pour afficher les info
    cardS.addEventListener("click", function() {
      cardShortDesc.innerHTML = desc;
      cardShortDesc.setAttribute("class", "card-short-desc");
      cardS.appendChild(cardShortDesc);
      }, false);
    }
    // bouton new character
    let cardBtn = document.createElement("div");
    cardBtn.setAttribute("class", "btn-add");
    body.appendChild(cardBtn);
    cardBtn.innerHTML = "New character";
    // bouton delete character
    let cardBtnDel = document.createElement("div");
    cardBtnDel.setAttribute("class", "btn-delete");
    body.appendChild(cardBtnDel);
    cardBtnDel.innerHTML = "Delete character";
    }
displayCharactersCards();