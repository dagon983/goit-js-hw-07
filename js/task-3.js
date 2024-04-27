const nameInmut = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
nameInmut.addEventListener("input", event => {
    outputName.textContent = event.currentTarget.value.trim();

    if (event.currentTarget.value === "" || /^\s+$/.test(event.currentTarget.value)) {
        outputName.textContent = "Anonymous";
    }
});

