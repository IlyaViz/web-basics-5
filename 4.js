// 4
let block2 = document.querySelector("ul");
let radioButton = document.getElementById("radio-cursive");
let form = document.querySelector("form")

block2.addEventListener("mouseover", () => {
    block2.style.fontStyle = "italic";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (radioButton.checked && block2.style.fontStyle == "italic") {
        localStorage.setItem("cursive", "true");
    } else {
        localStorage.removeItem("cursive");
    }
})

if (localStorage.getItem("cursive") != null) {
    block2.style.fontStyle = "italic";
}