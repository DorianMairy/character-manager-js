// fonction de chargement des informations des characters
async function displayCharactersCards() {
      const response = await fetch(
        "https://character-database.becode.xyz/characters"
      );
      const character = await response.json();
  console.log(character);
  }
  displayCharactersCards() 
// constantes
const btnadd = document.querySelector("btn-add");
const main = document.getElementById("main");
const btnupdate = document.querySelector("btn-update");
const btndelete = document.querySelector("btn-delete");



function addCharacterToPage(data) {
    const card = document.getElementById("cards");
    card.classList.add("card-name");
    card.innerHTML = `
    <article>
        <div class="card-name">
        <h2>Test</h2>
        </div>
        <div class="card-img"></div>
        <div class="card-desc"></div>
        <btn-update>Update</btn-update>
    </article>
`;
    main.innerHTML = "";
    main.appendChild(card);
    
}
