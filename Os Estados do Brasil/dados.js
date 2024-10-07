function filterStates() {
    const input = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".item-resultados");

    cards.forEach(card => {
        const stateName = card.querySelector("h2").textContent.toLowerCase();
        if (stateName.includes(input)) {
            card.style.display = "block";  
        } else {
            card.style.display = "none";   
        }
    });
}