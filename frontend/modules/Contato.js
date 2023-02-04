import validator from "validator";

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('Submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        if (!nomeInput.value) {
            this.criaErro(nomeInput, 'Nome é um campo obrigatório');
            error = true;
        }

        if (!validator.isEmail(emailInput.value) && !telefoneInput.value) {
            this.criaErro(emailInput, 'Pelo menos o e-mail ou telefone devem ser preenchidos');
            this.criaErro(telefoneInput, 'Pelo menos o e-mail ou telefone devem ser preenchidos');
            error = true;
        }

        if (!error) el.submit();

    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        const small = document.createElement('small');
        small.innerHTML = msg;
        div.appendChild(small);
        div.classList.add('error-text', 'text-danger');

        campo.insertAdjacentElement('afterEnd', div);
    }

}






