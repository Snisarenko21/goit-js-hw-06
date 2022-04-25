
const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit)
function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    if (formEl.email.value === "" || formEl.password.value === "") {
        return alert("Все поля должны быть заполнены!")
    }
    const email = formEl.email.value;
    const password = formEl.password.value;
    const formData = {
        email,
        password,
    }
    console.log(formData);
    event.currentTarget.reset();
   
}
