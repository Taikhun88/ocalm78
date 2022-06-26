var mdp = {

    fr: {
        'see': 'Voir le mot de passe',
        'hide': 'Cacher le mot de passe'
    },
    en: {
        'see': 'See the password',
        'hide': 'Hide the password'
    },

    handleClickMdp: function () {
        const imput = document.querySelector(".form-check-input");
        const label = document.querySelector(".form-check-label");
        const password = document.querySelector("#registration_form_plainPassword_first");
        const password2 = document.querySelector("#registration_form_plainPassword_second");
        const lang = label.dataset.lang;

        if (password.type === "password") {
            password.type = "text";
            password2.type = "text";
            imput.id = "flexSwitchCheckChecked";
            label.setAttribute("for", "flexSwitchCheckChecked");
            label.textContent = mdp[lang].see;
        } else {
            password.type = "password";
            password2.type = "password";
            imput.id = "flexSwitchCheckDefault";
            label.setAttribute("for", "flexSwitchCheckDefault");
            label.textContent = mdp[lang].hide;
        }
    },

};
