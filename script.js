document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let idade = Number(document.getElementById("idade").value);
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "";
    mensagem.className = "";
    const TAMANHO_MINIMO_DA_SENHA = 4;
    const MENOR_VALOR_DA_IDADE_VALIDA = 0
    const MAIOR_VALOR_DA_IDADE_VALIDA = 120
    const IDADE_ADULTA = 18;
    const IDADE_DE_ADOLESCENTE = 13;

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

        mensagem.textContent = "Erro: A senha deve ter pelo menos 4 caracteres!";
        mensagem.className = "erro";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.textContent = "Erro: As senhas não conferem!";
        mensagem.className =  "erro";
        return;
    }

        mensagem.textContent = "Erro: Idade inválida!";
        mensagem.className = "erro";
    if (IDADE < MENOR_VALOR_DA_IDADE_VALIDA || IDADE >= MAIOR_VALOR_DA_IDADE_VALIDA) {
        return;
    }

    // Operador Ternário Para Classificação da Idade
    const CLASSIFICACAO_DA_IDADE = IDADE >= IDADE_ADULTA
    ? "Você é maior de idade."
    : IDADE >= IDADE_DE_ADOLESCENTE 
    ? "Você é adolescente."
    : "Você é criança.";

    mensagem.textContent = `Cadastro concluído! Bem-vindo(a), ${nome}. ${classificacao}`;
    mensagem.className = "sucesso";
});