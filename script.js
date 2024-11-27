class PhraseBox extends HTMLElement {
  constructor() {
    super();

    // Récupérer la phrase depuis l'attribut
    // le this représente l'instance de classe sur laquelle on travaille ici notre element HTML custom

    const phrase = this.getAttribute("phrase");

    // Créer un élément texte pour afficher la phrase
    const textElement = document.createElement("p");
    // un peu de style bootstrap
    textElement.classList.add("bg-primary-subtle");

    textElement.textContent = phrase;

    // Ajouter l'élément texte dans le Custom Element
    this.appendChild(textElement);
  }
}

// Déclarer le Custom Element
// Côté HTML la balise s'utilisera sous le nom <phrase-box></phrase-box>

customElements.define("phrase-box", PhraseBox);

class UserBox extends HTMLElement {
  constructor() {
    super();
    const userName = this.getAttribute("nom");
    const userImg = this.getAttribute("imageuser");

    const textElement = document.createElement("p");
    textElement.classList.add("bg-primary-subtle");

    textElement.textContent = userName;

    const imgElement = document.createElement("img");
    imgElement.src = userImg;
    this.appendChild(textElement);
    this.appendChild(imgElement);
  }
}
customElements.define("user-box", UserBox);
