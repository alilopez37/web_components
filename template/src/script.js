
async function renderTask(){
    const response = await fetch("data.json")
    const {results} = await response.json()
    console.log(results);
    const container = document.getElementById("cards-container")
    container.innerHTML = ""

    results.forEach(task => {
        const template = document.getElementById("card-template").content.cloneNode(true)
        template.querySelector(".card-img").src = task.image
        template.querySelector(".card-content").textContent = task.name
        container.appendChild(template)
    })
}

renderTask()