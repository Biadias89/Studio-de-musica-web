function enviarCodigo() {
    const email = document.getElementById("email").value; // pega o email correto

    
    const emailSalvo = localStorage.getItem("email");

    if (!email) {
        alert("Por favor, digite seu e-mail.");
        return;
    }

    if (email !== emailSalvo) {
        alert("E-mail não encontrado!");
        return;
    }

    
    const codigo = Math.floor(100000 + Math.random() * 900000);

   
    localStorage.setItem("codigo_recuperacao", codigo);

    alert("Código enviado! (simulação)\nSeu código: " + codigo);

    
    window.location.href = "esqueceu_senha_codigo.html";
}
