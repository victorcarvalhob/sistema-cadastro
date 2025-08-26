document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let idade = Number(document.getElementById("idade").value);
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "";
    mensagem.className = "";

    // Comparação de Strings
    if (nome === "Admin") {
        mensagem.textContent = "Erro: o nome 'Admin' não pode ser usado."
        mensagem.className = "erro";
        return;
    }

    // Validações
    if (nome === "" || senha === "" || confirmarSenha === "" || isNaN(idade)) {
        mensagem.textContent = "Erro: Todos os campos são obrigatórios!";
        mensagem.className = "erro";
        return;
    }

    if (senha.length < 4) {
        mensagem.textContent = "Erro: A senha deve ter pelo menos 4 caracteres!";
        mensagem.className = "erro";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.textContent = "Erro: As senhas não conferem!";
        mensagem.className =  "erro";
        return;
    }

    if (idade < 0) {
        mensagem.textContent = "Erro: Idade inválida!";
        mensagem.className = "erro";
        return;
    }

    // Uso de Booleano
    let maiorDeIdade = idade >= 18;

    // Operador Ternário Para Classificação da Idade
    let classificacao = maiorDeIdade
    ? "Você é maior de idade."
    : idade >= 13 
    ? "Você é adolescente."
    : "Você é criança.";

    mensagem.textContent = `Cadastro concluído! Bem-vindo(a), ${nome}. ${classificacao}`;
    mensagem.className = "sucesso";
});