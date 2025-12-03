function faz_login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "etec@gmail.com" && senha === "12345678") {
        alert("Login realizado com sucesso!");
        window.location.href = "../Home/home.html";
    } else {
        alert("Usuário não cadastrado!");
    }
}
