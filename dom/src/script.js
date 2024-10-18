
async function renderTask(){
    const response = await fetch("data.json")
    const {results} = await response.json()
    console.log(results);
    const container = document.getElementById("cards-container")
    container.innerHTML = ""

    results.forEach(task => {
        const card = document.createElement("div")
        card.className = "card"
        
        const card_img = document.createElement("div")
        card_img.className = "card-img"
        const image = document.createElement("img")
        image.src = task.image
        image.className = "card-img_img"
        card_img.appendChild(image)

        const card_content = document.createElement("div")
        card_content.className = "card-content"
        const name = document.createElement("span")
        name.textContent = task.name
        card_content.appendChild(name)

        card.appendChild(card_img)
        card.appendChild(card_content)
        container.appendChild(card)
    })
}

renderTask()