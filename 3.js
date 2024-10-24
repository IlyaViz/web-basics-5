// 3
if (document.cookie){
    if (confirm(`${document.cookie}, do you want to clean cookies?`)){
        document.cookie += '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.reload();
    } else {
        alert("There are cookies. Please reload page");
        window.stop();
    }
}

function onFormSubmit() {
    let sides = document.querySelectorAll("input");

    side1Val = parseInt(sides[0].value);
    side2Val = parseInt(sides[1].value);
    side3Val = parseInt(sides[2].value);

    if (isNaN(side1Val) || isNaN(side2Val) || isNaN(side3Val)){
        alert("Enter correct sides");
    } else {
        alert(side1Val + side2Val > side3Val && side1Val + side3Val > side2Val && side2Val + side3Val > side1Val);
        document.cookie = "triangle=false";
    }
}

window.addEventListener("load", () => {
    let form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        onFormSubmit();
    })
})