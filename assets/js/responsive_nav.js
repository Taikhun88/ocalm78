import { data } from "jquery";

export var responsive_nav = {
    clientWidth: 0,
    clientHeight: 0,
    isPortrait: false,
    isLandscape: false,

    copyBurgerMenuBtn: document.querySelector('button#btn-menu'),

    baseUri: window.location.origin,

    construct: function () {
        responsive_nav.clientWidth = window.innerWidth;
        responsive_nav.clientHeight = window.innerHeight;
        responsive_nav.isPortrait = window.innerHeight > window.innerWidth ? true : false;
        responsive_nav.isLandscape = window.innerWidth > window.innerHeight ? true : false;
    },

    init: function () {
        responsive_nav.construct();
        responsive_nav.displayBurgerMenu();

        if (responsive_nav.isPortrait) {
            responsive_nav.displayPortrait();
        }
        else {
            responsive_nav.displayLandscape();
        }

        window.addEventListener('resize', function (event) {
            responsive_nav.construct();
            responsive_nav.displayBurgerMenu();
            if (responsive_nav.isPortrait) {
                responsive_nav.displayPortrait();
                responsive_nav.clearLandscape();
                responsive_nav.displayBurgerMenu();
            }
            else {
                responsive_nav.displayLandscape();
                responsive_nav.clearPortrait();
            }
        });


        const burgerMenuBtn = document.querySelector('button#btn-menu');
        if (burgerMenuBtn) {
            burgerMenuBtn.addEventListener('click', responsive_nav.handleClickToggleMenu);
        }

    },

    displayBurgerMenu: function () {
        const burgerMenuBtn = document.querySelector('button#btn-menu');
        const parentBurger = document.querySelector('#divRightSideNav');

        if (responsive_nav.isPortrait == true) {
            if (burgerMenuBtn) {
                burgerMenuBtn.setAttribute('style', 'display:inline-block');
            }
            else {
                responsive_nav.copyBurgerMenuBtn.addEventListener('click', responsive_nav.handleClickToggleMenu);
                parentBurger.append(responsive_nav.copyBurgerMenuBtn);
            }
        }

        if (responsive_nav.isLandscape == true) {
            if (burgerMenuBtn) {
                burgerMenuBtn.remove();
            }
        }
    },

    handleClickToggleMenu: function () {
        const divMenuPortrait = document.querySelector('div#menuPortrait');
        divMenuPortrait.classList.toggle('active');
    },

    displayPortrait: function () {
        const divMenuPortrait = document.querySelector('div#menuPortrait');
        if (divMenuPortrait.childElementCount == 0) {
            const divParentBlockNav = document.createElement('div');
            divParentBlockNav.setAttribute('class', 'd-flex flex-column w-50');
            divParentBlockNav.setAttribute('id', 'blockNavA');
            divMenuPortrait.append(divParentBlockNav);

            const divParentBlockNavB = document.createElement('div');
            divParentBlockNavB.setAttribute('class', 'd-flex flex-column w-50');
            divParentBlockNavB.setAttribute('id', 'blockNavB');

            divMenuPortrait.append(divParentBlockNavB);

            responsive_nav.displayNavListLink(divParentBlockNavB);

            const ulBtnActions = document.createElement('ul');
            ulBtnActions.setAttribute('class', 'navbar-nav d-flex flex-column');
            const checkPortrait = responsive_nav.isPortrait;

            if (checkPortrait) {
                divParentBlockNav.prepend(ulBtnActions);
            } else {
                divParentBlockNav.append(ulBtnActions);
            }
            responsive_nav.displayNavActionsBtn(ulBtnActions);
        }
    },

    clearPortrait: function () {
        const divMenuPortrait = document.querySelector('div#menuPortrait');
        divMenuPortrait.innerHTML = "";
        const isActive = divMenuPortrait.classList.contains('active');
        if (isActive) {
            divMenuPortrait.classList.toggle('active');
        }
    },

    displayLandscape: function () {
        const parentBurger = document.querySelector('#divRightSideNav');
        if (parentBurger.childElementCount == 0) {
            const divParentBlockNav = document.createElement('div');
            divParentBlockNav.setAttribute('class', 'd-flex flex-row');
            parentBurger.append(divParentBlockNav);

            responsive_nav.displayNavListLink(divParentBlockNav);
            const ulBtnActions = document.createElement('ul');
            ulBtnActions.setAttribute('class', 'navbar-nav d-flex flex-row position-relative');
            divParentBlockNav.append(ulBtnActions);
            responsive_nav.displayNavActionsBtn(ulBtnActions);
        }
    },

    clearLandscape: function () {
        const parentBurger = document.querySelector('#divRightSideNav');
        parentBurger.innerHTML = "";
    },

    displayNavListLink: function (parent) {
        const ulElement = document.createElement('ul');
        if (responsive_nav.isPortrait == true) {
            ulElement.setAttribute('class', 'navbar-nav d-flex flex-column');
        }
        else {
            ulElement.setAttribute('class', 'navbar-nav d-flex flex-row');
        }
        parent.append(ulElement);

        //! Création des liens de navigation
        const liMonPanier = document.createElement('li');
        liMonPanier.setAttribute('class', 'nav-item');
        ulElement.append(liMonPanier);

        const divCurrentRoute = document.querySelector('#currentRoute');

        const aMonPanier = document.createElement('a');
        aMonPanier.setAttribute('href', responsive_nav.baseUri + "/order");

        if (divCurrentRoute.dataset.data == 'app_order') {
            aMonPanier.setAttribute('class', "nav-link active");
        }
        else {
            aMonPanier.setAttribute('class', "nav-link");
        }
        liMonPanier.append(aMonPanier);
        const iMonPanier = document.createElement('i');
        iMonPanier.setAttribute('class', 'fas fa-shopping-cart light opacity-75');
        aMonPanier.append(iMonPanier);
        const qtePanier = document.querySelector('#isLoggedIn');
        
        aMonPanier.append(qtePanier.dataset.countpanier > 0 ? " Mon panier (" + qtePanier.dataset.countpanier + ')' : " Mon panier");               

        const liNosProduits = document.createElement('li');
        liNosProduits.setAttribute('class', 'nav-item');
        ulElement.append(liNosProduits);

        const aNosProduits = document.createElement('a');
        aNosProduits.setAttribute('href', responsive_nav.baseUri + "/product");

        if (divCurrentRoute.dataset.data == 'product_list') {
            aNosProduits.setAttribute('class', "nav-link active");
        }
        else {
            aNosProduits.setAttribute('class', "nav-link");
        }
        liNosProduits.append(aNosProduits);
        const iNosProduits = document.createElement('i');
        iNosProduits.setAttribute('class', 'fas fa-hamburger light opacity-75');
        aNosProduits.append(iNosProduits);
        aNosProduits.append(' Nos produits');

        const isLoggedIn = document.querySelector('#isLoggedIn');
        const dataIsLoggedIn = JSON.parse(isLoggedIn.dataset.data);

        if (dataIsLoggedIn != null) {
            const liMesCommandes = document.createElement('li');
            liMesCommandes.setAttribute('class', 'nav-item');
            ulElement.append(liMesCommandes);

            const aMesCommandes = document.createElement('a');

            aMesCommandes.setAttribute('href', responsive_nav.baseUri + "/order/show/");

            if (divCurrentRoute.dataset.data == 'app_order_show') {
                aMesCommandes.setAttribute('class', "nav-link active");
            }
            else {
                aMesCommandes.setAttribute('class', "nav-link");
            }
            liMesCommandes.append(aMesCommandes);
            const iMesCommandes = document.createElement('i');
            iMesCommandes.setAttribute('class', 'fas fa-history light opacity-75');
            aMesCommandes.append(iMesCommandes);
            aMesCommandes.append(' Mes commandes');
        }
    },

    displayNavActionsBtn: function (parent) {
        const isLoggedIn = document.querySelector('#isLoggedIn');
        const dataIsLoggedIn = JSON.parse(isLoggedIn.dataset.data);

        if (dataIsLoggedIn == null) {
            const liRegister = document.createElement('li');
            liRegister.setAttribute('class', 'nav-item');
            parent.append(liRegister);

            const divCurrentRoute = document.querySelector('#currentRoute');

            const aRegister = document.createElement('a');
            aRegister.setAttribute('href', responsive_nav.baseUri + "/register");

            if (divCurrentRoute.dataset.data == 'app_register') {
                aRegister.setAttribute('class', "nav-link active");
            }
            else {
                aRegister.setAttribute('class', "nav-link");
            }
            liRegister.append(aRegister);
            const iRegister = document.createElement('i');
            iRegister.setAttribute('class', 'fas fa-user-edit light opacity-75');
            aRegister.append(iRegister);
            aRegister.append(' S\'inscrire');
            liRegister.append(aRegister);

            const liLogIn = document.createElement('li');
            liLogIn.setAttribute('class', 'nav-item');
            parent.append(liLogIn);

            const aLogIn = document.createElement('a');
            aLogIn.setAttribute('href', responsive_nav.baseUri + "/login");

            if (divCurrentRoute.dataset.data == 'app_login') {
                aLogIn.setAttribute('class', "nav-link active");
            }
            else {
                aLogIn.setAttribute('class', "nav-link");
            }
            liLogIn.append(aLogIn);
            const iLogIn = document.createElement('i');
            iLogIn.setAttribute('class', 'fas fa-sign-in-alt light opacity-75');
            aLogIn.append(iLogIn);
            aLogIn.append(' Se connecter');
        }
        else {
            const liDropDown = document.createElement('li');
            liDropDown.setAttribute('class', 'nav-item dropdown');
            parent.append(liDropDown);

            const aDropDown = document.createElement('a');
            aDropDown.setAttribute('class', 'dropdown-toggle btn');
            aDropDown.setAttribute('href', '#');
            aDropDown.setAttribute('id', 'navbarDropdown');
            aDropDown.setAttribute('role', 'button');
            // aDropDown.setAttribute('data-bs-toggle', 'dropdown');
            // aDropDown.setAttribute('aria-expanded', false);
            aDropDown.addEventListener('click', responsive_nav.handleClickToggleDropdown);

            liDropDown.append(aDropDown);

            const dataAvatar = isLoggedIn.dataset.avatar;
            let isJpg = new RegExp('.jpg').test(dataAvatar);
            if (isJpg == true) {
                const imgAvatar = document.createElement('img');
                imgAvatar.setAttribute('class', 'rounded-pill');
                imgAvatar.setAttribute('src', responsive_nav.baseUri + '/images/avatars/' + dataAvatar);
                imgAvatar.setAttribute('width', "30");
                imgAvatar.setAttribute('alt', 'avatar');
                aDropDown.append(imgAvatar);
            }
            else {
                const iAvatar = document.createElement('i');
                iAvatar.setAttribute('class', dataAvatar);
                aDropDown.append(iAvatar);
            }
            const dataPseudo = isLoggedIn.dataset.pseudo;
            aDropDown.append(' ' + dataPseudo);

            const ulDropdownNav = document.createElement('ul');
            ulDropdownNav.setAttribute('class', 'ulDropdown');
            ulDropdownNav.setAttribute('aria-labelledby', 'navbarDropdown');
            ulDropdownNav.setAttribute('data-bs-popper', 'static');
            
            parent.append(ulDropdownNav);

            const liProfil = document.createElement('li');
            liProfil.setAttribute('class', 'nav-item');
            ulDropdownNav.append(liProfil);

            const aProfil = document.createElement('a');
            aProfil.setAttribute('class', 'dropdown-item nav-link')
            aProfil.setAttribute('href', responsive_nav.baseUri + "/profil/" + isLoggedIn.dataset.id);
            liProfil.append(aProfil);
            
            const iProfil = document.createElement('i');
            iProfil.setAttribute('class', 'fas fa-user-cog light opacity-75')
            aProfil.append(iProfil);
            aProfil.append(" Profil");

            const liLogout = document.createElement('li');
            liLogout.setAttribute('class', 'nav-item');
            ulDropdownNav.append(liLogout);

            const aLogout = document.createElement('a');
            aLogout.setAttribute('class', 'dropdown-item nav-link')
            aLogout.setAttribute('href', responsive_nav.baseUri + "/logout");
            liLogout.append(aLogout);
            
            const iLogout = document.createElement('i');
            iLogout.setAttribute('class', 'fas fa-sign-out-alt light opacity-75')
            aLogout.append(iLogout);
            aLogout.append(" Déconnexion\n");
        }
    },

    handleClickToggleDropdown: function (event) {
        const ulDropdown = document.querySelector('.ulDropdown');
        app.handleSwitchDropdownToPanier(ulDropdown);

        ulDropdown.classList.toggle('active');
    },
}

document.addEventListener('DOMContentLoaded', responsive_nav.init);