function cadastrar() {
    const usuario = document.getElementById("text").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("con-senha").value;
    const nascimento = document.getElementById("dt-nasc").value;

    // valida se todos os campos foram preenchidos
    if (!usuario || !email || !senha || !confirmarSenha || !nascimento) {
        alert("Preencha todos os campos!");
        return;
    }

    // valida senhas
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // salva no localStorage
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    localStorage.setItem("nascimento", nascimento);

    alert("Cadastro realizado com sucesso!");

    // redireciona para login
    window.location.href = "../login/login.html";
}
