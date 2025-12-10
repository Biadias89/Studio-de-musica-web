function criarNovaSenha() {
    const novaSenha = document.getElementById("nv-senha").value;
    const confirmarSenha = document.getElementById("con-senha").value;

    if (novaSenha.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres!");
        return;
    }

    if (novaSenha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    
    localStorage.setItem("senha", novaSenha);

    alert("Senha alterada com sucesso!");

    window.location.href = "../login/login.html";
}
