const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Pega todos os estilos computados no Body
const backgroundColorBody = estilosBody.backgroundColor; // Selecionou especificamente a cor de fundo do Body
// console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}

