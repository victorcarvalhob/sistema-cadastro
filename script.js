document.getElementById("cadastroForm").addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();

    const NOME = document.getElementById("nome").value.trim();
    const IDADE = Number(document.getElementById("idade").value);
    const SENHA = document.getElementById("senha").value;
    const CONFIRMAR_SENHA = document.getElementById("confirmarSenha").value;
    const TAMANHO_MINIMO_DA_SENHA = 4;
    const MENOR_VALOR_DA_IDADE_VALIDA = 0
    const MAIOR_VALOR_DA_IDADE_VALIDA = 120
    const IDADE_ADULTA = 18;
    const IDADE_DE_ADOLESCENTE = 13;
    let mensagemDeConfirmacao = document.getElementById("mensagemDeConfirmação");

    function exibirMensagem(texto, tipo = "") {
      mensagemDeConfirmacao.textContent = texto;
      mensagemDeConfirmacao.className = tipo;
    }

    // Comparação de Strings
    if (NOME === "Admin") {
        exibirMensagem("Erro: o nome 'Admin' não pode ser usado.", "erro")
        return;
    }

    // Validações
    if (nome === "" || senha === "" || confirmarSenha === "" || isNaN(idade)) {
        mensagem.textContent = "Erro: Todos os campos são obrigatórios!";
        mensagem.className = "erro";
        return;
    }

    if (SENHA.length < TAMANHO_MINIMO_DA_SENHA) {
        exibirMensagem("Erro: A senha deve ter pelo menos 4 caracteres!", "erro")
        return;
    }

    if (SENHA !== CONFIRMAR_SENHA) {
        exibirMensagem("Erro: As senhas não conferem!", "erro")
        return;
    }

    if (IDADE < MENOR_VALOR_DA_IDADE_VALIDA || IDADE >= MAIOR_VALOR_DA_IDADE_VALIDA) {
        exibirMensagem("Erro: Idade inválida!", "erro")
        return;
    }

    // Operador Ternário Para Classificação da Idade
    const CLASSIFICACAO_DA_IDADE = IDADE >= IDADE_ADULTA
    ? "Você é maior de idade."
    : IDADE >= IDADE_DE_ADOLESCENTE 
    ? "Você é adolescente."
    : "Você é criança.";

    exibirMensagem(`Cadastro concluído! Bem-vindo(a), ${NOME}. ${CLASSIFICACAO_DA_IDADE}`, "sucesso")
});