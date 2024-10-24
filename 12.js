// 1
let block1 = document.querySelector("header p");
let block6 = document.querySelector("footer p");

let temp = block1.textContent;
block1.textContent = block6.textContent;
block6.textContent = temp;

// 2
function calculateArea(d1, d2) {
    let area = d1 * d2 / 2;
    let block3 = document.querySelector(".content p");
    block3.textContent += `\n${area}`;
}

calculateArea(10, 5);
