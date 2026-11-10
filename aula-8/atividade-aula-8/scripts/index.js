// Máscara do CPF: 000.000.000-00
const campoCpf = document.getElementById("cpf");

campoCpf.addEventListener("input", function () {
    let cpf = campoCpf.value.replace(/\\D/g, "");

    cpf = cpf.substring(0, 11);
    cpf = cpf.replace(/(\\d{3})(\\d)/, "$1.$2");
    cpf = cpf.replace(/(\\d{3})(\\d)/, "$1.$2");
    cpf = cpf.replace(/(\\d{3})(\\d{1,2})$/, "$1-$2");

    campoCpf.value = cpf;
});

// Máscara do telefone
const campoTelefone = document.getElementById("telefone");

campoTelefone.addEventListener("input", function () {
    let telefone = campoTelefone.value.replace(/\\D/g, "");

    telefone = telefone.substring(0, 11);
    telefone = telefone.replace(/^(\\d{2})(\\d)/, "($1) $2");
    telefone = telefone.replace(/(\\d{5})(\\d)/, "$1-$2");

    campoTelefone.value = telefone;
});

// Envio do formulário
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    // Verifica se todos os campos estão preenchidos corretamente
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Verifica a quantidade de números do CPF e telefone
    const cpf = campoCpf.value.replace(/\\D/g, "");
    const telefone = campoTelefone.value.replace(/\\D/g, "");

    if (cpf.length !== 11) {
        alert("Digite um CPF com 11 números.");
        campoCpf.focus();
        return;
    }

    if (telefone.length < 10 || telefone.length > 11) {
        alert("Digite um telefone válido.");
        campoTelefone.focus();
        return;
    }

    // Pega os dados digitados no formulário
    const dados = Object.fromEntries(new FormData(formulario).entries());

    try {
        // Envia os dados para a API
        const resposta = await fetch("https://postman-echo.com/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const retorno = await resposta.json();

        // Mostra o retorno da API no navegador
        alert("Cadastro enviado! Retorno da API:\\n" + JSON.stringify(retorno, null, 2));

    } catch (erro) {
        alert("Não foi possível enviar os dados. Verifique sua conexão e tente novamente.");
        console.log(erro);
    }
});
