function meuEscopo () {

    const elementos = [
        {tag: 'p', texto: 'Frase 1'}, // 0
        {tag: 'div', texto: 'Frase 2'}, // 1
        {tag: 'footer', texto: 'Frase 3'}, // 2
        {tag: 'section', texto: 'Frase 4'}, // 3 
    ];

    function setResult(elementos) {
        const result = document.querySelector('.container');
        const div = document.createElement('div');

        for (let i = 0; i < elementos.length; i++) {
            const { tag, texto } = elementos[i];
            const inputTag = document.createElement(tag);
            inputTag.innerHTML = texto;
            div.appendChild(inputTag);
            result.appendChild(div);
              
        }
    }

    setResult(elementos);

}

meuEscopo();