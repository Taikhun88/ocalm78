
var app = {
    init: function () {
        // on selectionne le checkbox par sa classe
        const checkMdp = document.querySelector("#flexSwitchCheckDefault.form-check-input");

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

        const buttonSidebar = document.querySelector("#displayListLink");
        if (buttonSidebar) {
            buttonSidebar.addEventListener('click', backofficehome.handleClick);
        }

        const displayPanier = document.querySelector("#displayPanier");
        if (displayPanier) {
            displayPanier.addEventListener('click', backofficehome.handleClickPanier);
        }

        const buttonNewsletterImages = document.querySelector('#addNewsletterImages');
        if (buttonNewsletterImages) {
            buttonNewsletterImages.addEventListener('click', back_newsletter.handleClickDisplayListImages)
        }

        const listOfImg = document.querySelectorAll('.newsletter-image');
        if (listOfImg) {
            listOfImg.forEach(img => {
                img.addEventListener('click', back_newsletter.handleClickAddImg);
            });
        }

        const imgInDatabase = document.querySelectorAll('.actions-btn');
        if (imgInDatabase) {
            imgInDatabase.forEach(img => {
                img.parentElement.firstElementChild.addEventListener('click', backNewsletterImg.handleClickDisplayBtn);
            });
        }

        const notificationRequest = document.querySelectorAll('.fa-bell.notification-request');
        if (notificationRequest) {
            notificationRequest.forEach(bellRequest => {
                bellRequest.addEventListener('click', backofficehome.handleClickDisplayRequest);
            });
        }

        const closeRequest = document.querySelectorAll('.close-request');
        if (closeRequest) {
            closeRequest.forEach(closeRequestIcon => {
                closeRequestIcon.addEventListener('click', backofficehome.handleClickCloseRequest);
            });
        }

        const div = document.querySelector(".carousel-item");
        if (div) {
            div.classList.add('active');
        }

        const prevCarousel = document.querySelector(".carousel-control-prev");
        const nextCarousel = document.querySelector(".carousel-control-next");

        if (prevCarousel && nextCarousel) {
            prevCarousel.addEventListener('click', carousel.handleClickPrev);
            nextCarousel.addEventListener('click', carousel.handleClickNext);
        }

        const checkAvatarSelect = document.querySelector('#user_avatar');
        if (checkAvatarSelect) {
            avatar_select.init();
        }

        let listOfItems = document.querySelectorAll("input[name^=qty_]");
        if (listOfItems) {
            listOfItems.forEach(button => {
                button.addEventListener('change', order.handleChange)
            });
        }
    },

    handleSwitchDropdownToPanier: function (clickedTag) {
        const ulDropdown = document.querySelector('.ulDropdown');
        const divPanier = document.querySelector('#listPanier');

        if (clickedTag == ulDropdown) {
            if (divPanier.classList.contains('panierActive')) {
                divPanier.classList.toggle('panierActive');
                divPanier.classList.toggle('panierInactive');                
            }
        }

        if (clickedTag == divPanier) {
            if (ulDropdown.classList.length > 1) {
                ulDropdown.classList.toggle('active');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);
