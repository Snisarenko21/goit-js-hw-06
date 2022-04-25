const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function changeOutput(event) {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous";
    }
}
nameInput.addEventListener("input", changeOutput);

