var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();
    var nameError = document.getElementById("nameError");

    var categoryRadios = document.querySelectorAll('input[name="category"]');
    var selectedCategory = false;
    var categoryError = document.getElementById("categoryError");

    for (var i = 0; i < categoryRadios.length; i++) {
        if (categoryRadios[i].checked) {
            selectedCategory = true;
            break;
        }
    }

    var descriptionTextarea = document.getElementById("description");
    var descriptionValue = descriptionTextarea.value.trim();
    var descriptionError = document.getElementById("descriptionError");

    var colorInput = document.getElementById("color");
    var colorValue = colorInput.value;
    var colorError = document.getElementById("colorError");

    var dateInput = document.getElementById("date");
    var dateValue = dateInput.value;
    var dateError = document.getElementById("dateError");

    var agreeCheckbox = document.getElementById("agree");
    var agreeError = document.getElementById("agreeError");

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailError = document.getElementById("emailError");

    nameInput.style.border = "";
    nameError.innerHTML = "";

    for (var i = 0; i < categoryRadios.length; i++) {
        categoryError.innerHTML = "";
    }

    descriptionTextarea.style.border = "";
    descriptionError.innerHTML = "";

    colorInput.style.border = "";
    colorError.innerHTML = "";

    dateInput.style.border = "";
    dateError.innerHTML = "";

    emailInput.style.border = "";
    emailError.innerHTML = "";

    agreeError.innerHTML = "";

    if (nameValue === "") {
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "A név mező nem lehet üres!";
        return;
    }

    if (!selectedCategory) {
        categoryError.innerHTML = "Kategória kiválasztása kötelező!";
        return;
    }

    if (descriptionValue === "") {
        descriptionTextarea.style.border = "1px solid red";
        descriptionError.innerHTML = "A leírás mező nem lehet üres!";
        return;
    }

    if (colorValue === "#000000") {
        colorInput.style.border = "1px solid red";
        colorError.innerHTML = "Kérlek válassz egy érvényes színt!";
        return;
    }

    if (dateValue === "") {
        dateInput.style.border = "1px solid red";
        dateError.innerHTML = "Dátum kiválasztása kötelező!";
        return;
    }

    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
        emailInput.style.border = "1px solid red";
        if (emailValue === "") {
            emailError.innerHTML = "Az e-mail cím megadása kötelező!";
            return;
        }
        emailError.innerHTML = "Kérlek adj meg egy érvényes e-mail címet!";
        return;
    }

    if (!agreeCheckbox.checked) {
        agreeError.innerHTML = "A feltételek elfogadása kötelező!";
        return;
    }

    myForm.submit();

    alert("Sikeresen beküldted a parfüm javaslatot!");
});
