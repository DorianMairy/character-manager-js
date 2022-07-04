// constante
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

    // character infos
    // nom des characters
    let cardS = document.createElement("div");
    cardS.setAttribute("class", "cards");
    main.appendChild(cardS);

    // nom des characters
    let cardName = document.createElement("div");
    cardName.setAttribute("class", "card-name");
    cardS.appendChild(cardName);
    cardName.innerHTML = character[i].name;

    // image des characters
    let cardimg = document.createElement("img");
    cardimg.setAttribute("class", "card-img");
    cardimg.setAttribute("src", "data:image/png;base64," + character[i].image);
    cardS.appendChild(cardimg);

    // description courte des characters
    let cardShortDesc = document.createElement("div");
    cardShortDesc.setAttribute("class", "card-short-desc");
    cardS.appendChild(cardShortDesc);
    cardShortDesc.innerHTML = character[i].shortDescription;

    // clique sur la photo pour afficher les info
    cardS.addEventListener("click", function () {
      cardShortDesc.innerHTML = desc;
      cardShortDesc.setAttribute("class", "card-short-desc");
      cardS.appendChild(cardShortDesc);
    });
    
    // bouton
  // bouton new character
  let cardBtnAdd = document.createElement("div");
  cardBtnAdd.setAttribute("class", "btn-add");
  cardS.appendChild(cardBtnAdd);
  cardBtnAdd.innerHTML = "New character";


  cardBtnAdd.addEventListener("click", () => {
    console.log(getID);
    fetch(`https://character-database.becode.xyz/characters/${getID}`, { method: 'POST',data:character })
    .then(() => cardS.innerHTML = 'Add successful');
  })




  // bouton edits character
  let cardBtnEdit = document.createElement("div");
  cardBtnEdit.setAttribute("class", "btn-edit");
  cardS.appendChild(cardBtnEdit);
  cardBtnEdit.innerHTML = "Edit character";




  // bouton delete character
  let cardBtnDel = document.createElement("div");
  cardBtnDel.setAttribute("class", "btn-delete");
  cardS.appendChild(cardBtnDel);
  cardBtnDel.innerHTML = "Delete character";
  let getID = character[i].id;

  cardBtnDel.addEventListener("click", () => {
    console.log(getID);
    if (confirm('Are you sure you want to delete this character?')) {
      fetch(`https://character-database.becode.xyz/characters/${getID}`, { method: 'DELETE' })
      .then(() => cardS.innerHTML = 'Delete successful');
    }
    else {
      alert('Character not deleted');
    }
  }
  )};
}
// afficher dans le console
displayCharactersCards();
