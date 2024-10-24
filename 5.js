let blocks = document.querySelectorAll(".block");
let anchors = document.querySelectorAll("a");

for ([key, string] of Object.entries(localStorage)) {
    let ol = document.createElement("ol");

    let array = JSON.parse(string);

    if (array.length != 0) {
        array.forEach((value, index) => {
            let li = document.createElement("li");
            li.innerText = value;

            if (index % 2) {
                li.style.backgroundColor = "white";
                li.style.color = "black"
            } else {
                li.style.backgroundColor = "black";
                li.style.color = "white";
            }

            ol.appendChild(li);
        })

        let oldText = blocks[key].querySelector("p, h3");

        blocks[key].removeChild(oldText);
        blocks[key].appendChild(ol);
    }
}

anchors.forEach((a, index) => {
    a.addEventListener('click', () => {
        if (!olFormExists(index)) {
           let form = createOlForm(index);
           blocks[index].appendChild(form);
        }
    })
});

function olFormExists(number) {
    return document.querySelector(`.olForm${number}`) != null;
}

function createOlForm(number) {
    let form = document.createElement("form");
    form.className = `olForm${number}`;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputs = document.querySelectorAll(`.olForm${number} input`);
        let values = [];
        
        inputs.forEach(input => {
            if (input.value != ""){
                values.push(input.value);
            }
        });

        localStorage.setItem(number, JSON.stringify(values));
    })

    let button = document.createElement("button");
    button.type = "button";
    button.innerText = "Add input";
    
    button.addEventListener("click", () => {
        let input = document.createElement("input");
        input.type = "text";
        
        form.appendChild(input);
    })

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Submit";

    form.appendChild(button);
    form.appendChild(submitButton);
    
    return form;
}