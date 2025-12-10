function verificarCodigo() {
    const inputs = document.querySelectorAll(".codigo input");
    let codigoDigitado = "";

    inputs.forEach(input => {
        codigoDigitado += input.value;
    });

    const codigoCorreto = localStorage.getItem("codigo_recuperacao");

    if (codigoDigitado === codigoCorreto) {
        alert("Código correto!");
        window.location.href = "esqueceu_senha.html";
    } else {
        alert("Código inválido!");
    }
}
