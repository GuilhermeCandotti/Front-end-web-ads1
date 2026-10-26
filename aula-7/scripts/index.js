function executar(evento){
    evento.preventDefault();

    limparForm();

    validarForm();

}
function validarForm(){
    const nome = document.querySelector("#nome").value;
    const erroNome = document.querySelector("#erro-nome");
    if(nome==""){
        erroNome.textContent = "Nome nao pode ser vazio";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("#idade").value;
    const erroIdade = document.querySelector("#erro-idade");
    if(idade==""){
        erroIdade.textContent = "Idade nao pode ser vazio";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if (Number(idade) < 18){
        erroIdade.textContent = "e necessario ter 18 anos ";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }
    // validar email com regex
    const termos = document.querySelector("#termos");
    const erroTermos = document.querySelector("#erro-termos");
    if (!termos.checked) {
        erroTermos.textContent = "E preciso aceitar os termos!";
        erroTermos.classList.add("erro")
        erroTermos.classList.remove("oculto");
    }

    const concluido = document.querySelector("#concluido");
    const valido = document.querySelectorAll(".erro").length=== 0;

    if(!valido) {
        concluido.textContent = "O cadastro nao foi concluidp!";
        concluido.classList.add("erro");
        concluido.classList.remove("oculto");
    } else {
        concluido.textContent = "Cadastro concluido com sucesso!";
        concluido.classList.add("sucesso");
        concluido.classList.remove("oculto");
    }
}

//()=> {} arrow function
function limparForm(){
    document.querySelectorAll(".erro").forEach((item) => {
        item.classList.remove("erro");
        item.classList.add("oculto");
    })
    document.querySelector("#concluido").classList.add("oculto");
}