function inserirnome () {
    let nomeusuario =  prompt ("informe seu nome?")
    let elemento = document.querySelector ("#nome-ususario");
    elemento.textContent = nomeusuario;
} 

inserirnome();

