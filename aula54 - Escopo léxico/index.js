const nome = 'Yan';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Eduardo';
    falaNome();
}
usaFalaNome();