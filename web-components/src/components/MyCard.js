class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.image = this.getAttribute("image");

    // Render the HTML in the shadow DOM
    this.shadowRoot.innerHTML = `
        <style>
            @scope {
                .card-container {
                    display:flex;
                }
                    
                .card-img_container {
                    width: 30%;
                }
                
                .card-img {
                    width: 80%;
                }
                    
                .card-content_container {
                    width: 70%;
                }

            }
        </style>
        <div class="card-container">
            <div class="card-img_container">
                <img src="${this.image}" alt="" class="card-img">
            </div>
            <div class="card-content_container">
                <span class="card-content">${this.name}</span>
            </div>
        </div>`;
        //this.shadowRoot.className = "card"
  }
}

customElements.define("my-card", MyCard);
