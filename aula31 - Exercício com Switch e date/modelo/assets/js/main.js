function meuEscopo () {
    const section = document.querySelector('.container');
    const event = new Date();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    section.innerHTML = `<strong>${event.toLocaleDateString('pt-BR', options)}</strong>`;
    section.innerHTML += `<br><strong>${event.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</strong></br>`;
}

meuEscopo();