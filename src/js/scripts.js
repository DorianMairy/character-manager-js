nosniff = function  () {
  return 'Content-Type: text/html; charset=utf-8';
}




// constante
const main = document.querySelector("main");
const body = document.querySelector("body");
const btnadd = document.querySelector("btn-add");
const btnupdate = document.querySelector("btn-update");
const btndelete = document.querySelector("btn-delete");
let i = 0;

// fonction de chargement des informations des characters
async function displayCharactersCards() {
  main.innerHTML = "";
  const response = await fetch(
    "https://character-database.becode.xyz/characters"
  );
  const character = await response.json();
  console.log(character);
  console.log(character.length);
  for (i; i < character.length; i++) {
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


    let p = document.createElement("p");
    p.setAttribute("id", "characterID");
    p.setAttribute("style", "display:none;");
    p.innerHTML = character[i].id;
    cardS.appendChild(p);
    
    const descri = character[i].description;
    // clique sur la photo pour afficher les info
    cardimg.addEventListener("click", function () {
      cardShortDesc.setAttribute("class", "card-short-desc");
      cardimg.after(cardShortDesc);
      cardShortDesc.innerHTML = descri;
  });




  // bouton
  // bouton new character
  let cardBtnAdd = document.createElement("div");
  cardBtnAdd.setAttribute("class", "btn-add");
  cardS.appendChild(cardBtnAdd);
  cardBtnAdd.innerHTML = "New character";

  cardBtnAdd.addEventListener("click", () => {
    main.innerHTML = "";
    main.innerHTML = `
    <input class="form-name" type="text" id="form-name" placeholder="name">
    <input class="form-short-desc" type="text" id="form-short-desc" placeholder="short description">
    <input class="form-description" type="text" id="form-description" placeholder="description">
    <input class="form-image" type="file" id="form-image" placeholder="image">
    <button class="btn-add" id="btn-add">Add</button>
    `;
    let submit = document.getElementById("btn-add");


      submit.addEventListener("click", () => {
        const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
      });
        
        async function Main() {
        const file = document.querySelector('#form-image').files[0];
        const img64 = await toBase64(file);
      
      console.log(img64);
      
        let name = document.getElementById("form-name").value;
        let description = document.getElementById("form-description").value;
        let shortDescription = document.getElementById("form-short-desc").value;

        fetch(`https://character-database.becode.xyz/characters`, { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name : name,
            description : description,
            shortDescription : shortDescription,
            image : img64.replace(/^data:image\/[a-z]+;base64,/, "")
          })
          
        })}
        Main()
      setTimeout(function(){
    window.location.reload();
    }, 1000);
      })});




  // bouton edits character (Tout les champs obligatoire ^^')
  let cardBtnEdit = document.createElement("div");
  cardBtnEdit.setAttribute("class", "btn-edit");
  cardS.appendChild(cardBtnEdit);
  cardBtnEdit.innerHTML = "Edit character";


  cardBtnEdit.addEventListener("click", () => {
    main.innerHTML = "";
    main.innerHTML = `
    <input class="form-name" type="text" id="form-name" placeholder="name">
    <input class="form-short-desc" type="text" id="form-short-desc" placeholder="short description">
    <input class="form-description" type="text" id="form-description" placeholder="description">
    <input class="form-image" type="file" id="form-image" placeholder="image">
    <button class="btn-edit" id="btn-edit">Edit</button>
    `;
    let submit = document.getElementById("btn-edit");
    
    console.log(getID);
      submit.addEventListener("click", () => {
        const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
      });
        
        async function Main() {
        const file = document.querySelector('#form-image').files[0];
        const img64 = await toBase64(file);
      
      console.log(img64);
      
        let name = document.getElementById("form-name").value;
        let description = document.getElementById("form-description").value;
        let shortDescription = document.getElementById("form-short-desc").value;
        fetch(`https://character-database.becode.xyz/characters/` + getID, { 
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name : name,
            description : description,
            shortDescription : shortDescription,
            image : img64.replace(/^data:image\/[a-z]+;base64,/, "")
          })
          
        })}
        Main()
  setTimeout(function(){
    window.location.reload();
  }, 1000);
      })});




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
    setTimeout(function(){
      window.location.reload();
  }, 1000);
  }
  )};
}
// afficher dans le console
displayCharactersCards();