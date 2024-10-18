class MyCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.name = this.getAttribute("name");
        this.image = this.getAttribute("image");

        // Render the HTML in the shadow DOM
        this.shadowRoot.innerHTML = `
            <div class="card">
                <div class="card-img_container">
                    <img src="${this.image}" alt="" class="card-img">
                </div>
                <div class="card-content_container">
                    <span class="card-content">${this.name}</span>
                </div>
            </div>
        `;
    }
}

customElements.define("my-card", MyCard);
