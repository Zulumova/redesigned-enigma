document.getElementById("submitButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var result = document.getElementById("result");

    if (name === "" || email === "") {
        result.innerHTML = "Пожалуйста, заполните все поля!";
    } else if (!validateEmail(email)) {
        result.innerHTML = "Пожалуйста, введите корректный email!";
    } else {
        result.innerHTML = "Данные отправлены: Имя - " + name + ", Email - " + email;
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}