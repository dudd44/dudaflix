function inserirNome () {
    let nomeUsuario =  prompt ("informe seu nome?")
    let elemento = document.querySelector ("#nome-ususario");
    elemento.textContent = nomeUsuario;
} 

inserirNome();

