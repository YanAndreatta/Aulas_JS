function cpfLimpo(num) {
    const cpfString = num.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfString);
    return cpfArray;
}

function multiplyNums(array, plus = 0) {
    const modifArray = [...array];
    modifArray.splice(-2 + plus, Number.MAX_VALUE);

    const multiply = modifArray.map(function (valor, indice) {
        if (plus > 0) {
            const newArray = valor * (11 - indice);
            return newArray;
        }
        const newArray = valor * (10 - indice);
        return newArray;
    }).reduce((acum, valor) => acum += valor);
    return multiply;
}

function comparaCPF(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
}

function validaCPF(cpf) {
    const originalCpf = cpfLimpo(cpf);
    const sequencia = originalCpf[0].repeat(originalCpf.length);
    if( comparaCPF(Array.from(sequencia), originalCpf)) return false;

    const modifCpf = [...originalCpf];
    modifCpf.splice(-2, Number.MAX_VALUE);

    let firstNum = (11 - (multiplyNums(originalCpf) % 11));
    if (firstNum >= 9) firstNum = 0;

    let secondNum = (11 - (multiplyNums(originalCpf, 1) % 11));
    if (secondNum >= 9) secondNum = 0;

    modifCpf.splice(modifCpf.length, 0, firstNum.toString(), secondNum.toString());
    const newOriginalCpf = modifCpf;

    if (comparaCPF(originalCpf, newOriginalCpf)) return true;
    return false;
}

console.log(validaCPF('705.484.450-52'));

// 705.484.450-52