
async function renderTask(){
    const response = await fetch("data.json")
    const {results} = await response.json()
    console.log(results);
    const container = document.getElementById("cards-container")
    container.innerHTML = ""

    results.forEach(task => {
        const card = document.createElement("my-card")
        card.setAttribute("image", task.image)
        card.setAttribute("name", task.name)
        card.className = "card"
        container.appendChild(card)
    })
}

renderTask()