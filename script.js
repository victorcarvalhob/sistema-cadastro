document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let idade = Number(document.getElementById("idade").value);
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "";
    mensagem.className = "";

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

    // Classificação da Idade
    let classificacao = "";
    if (idade >= 18) {
        classificacao = "Você é maior de idade.";
    } else if (idade >= 13) {
        classificacao = "Você é adolescente.";
    } else {
        classificacao = "Você é criança.";
    }

    mensagem.textContent = `Cadastro concluído! Bem-vindo(a), ${nome}. ${classificacao}`;
    mensagem.className = "sucesso";
});