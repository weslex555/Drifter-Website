const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="../resources/css/index.css" />

<header>
  <h1>Drifter</h1>
  <h2>Deckbuilding In Corporate Dystopia</h2>
</header>

<nav id="main-nav">
    <ul>
      <li><a href="../index.html">Home</a></li>
      <li><a href="../html/heroes.html">Heroes</a></li>
      <li><a href="../html/about.html">About Us</a></li>
      <li><a href="https://weslex555.itch.io/drifter-deckbuilding-game/download/ieuEK3_ASTYEBXAEJ7w7_HcubBCo2jCDl6Et2K_F" target="_blank">Play Now!</a></li>
    </ul>
  </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
