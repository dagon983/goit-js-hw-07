const form = document.querySelector(".login-form");
form.insertAdjacentHTML("afterend", `<p id = "alert">All form fields must be filled in!</p>`);
const alert = document.querySelector("#alert");
alert.style.display = "none";

function handleSubmit(event) {
    event.preventDefault();
    const login = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (login === "" || password === "") {
        return alert.style.display = "block";
    }

     

    console.log({Email: `${login}`, Password: `${password}`})

    event.target.reset();
    alert.style.display = "none";
}

form.addEventListener("submit", handleSubmit);

