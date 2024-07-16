// Efeito Acordeão
const accBtn = document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const accContent = btn.nextSibling;

        btn.classList.toggle("active");

        if(btn.classList.contains("active")) {
            accContent.style.height = `${accContent.scrollHeight}px`;
            accContent.style.visibility = "visible";
        } else {
            accContent.style.height = 0;
            accContent.style.visibility = "hidden";
        }
    });
});