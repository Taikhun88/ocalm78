
var app = {
    init: function () {
        // on selectionne le checkbox par sa classe
        const checkMdp = document.querySelector(".form-check-input");

        // si l imput avec la classe form-check-input est dans la page
        if (checkMdp) {
            // on lui ajoute un écouteur qui lancera handleClickMdp
            checkMdp.addEventListener('click', mdp.handleClickMdp);
        }

        // on selectionne les td avec l id deploy-actions
        const deploy = document.querySelectorAll("#deploy-actions");

        // si y as des td
        if (deploy) {
            // pour chaque td
            deploy.forEach(td => {
                // on ajoute un écouteur qui lancera handleClickUser
                td.addEventListener('click', back_user_index.handleClickUser);
            });
        }
    },
};

document.addEventListener('DOMContentLoaded', app.init);
