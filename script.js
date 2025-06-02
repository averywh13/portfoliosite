const toggleButton = document.getElementById('menuToggle');
const nav = document.getElementById('verticalNav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});



const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

window.onload = function () {
    document.getElementsByClassName('input-container').textContent = ''
};

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    for (let [name, value] of formData.entries()) {
        if (value.trim() === "") {
            alert("Please fill out all fields in order for your message to be sent.");
            return;
        }
    }

    fetch(form.action, {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert("Message sent!");
                form.reset();
            } else {
                alert("There was a problem sending your message.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was a problem sending your message.");
        });
}





