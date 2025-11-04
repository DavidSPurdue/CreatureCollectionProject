// This is a copy of a JS file that the prof showed us, however I can't seem to remember why it was important. IDK what it does.


document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[data-include]");

    includeElements.forEach(el => {
        const file = el.getAttribute("data-include");
        if (file) {
            fetch(file)
                .then(response => {
                    if(!response.ok) throw new Error("Failed to load $(file");
                    return response.text();
                })
                .then(html => {
                    el.innerHTML = html;
                    if (el.querySelector("[data-include]")) {
                        const event = new Event ("DOMContentLoaded");
                        document.dispatchEvent(event);
                    }
                })
                .catch(err => {
                    console.error("Include error:", err);
                    el.innerHTML = <p style="color: red;">Erro loading $(file)</p>;
                })
        }
    })
})