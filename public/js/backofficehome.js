var backofficehome = {
    handleClick:function (event) { 
        const divLink = document.querySelector('#listLink');
        const buttonSidebar = document.querySelector('#buttonSidebar');
        buttonSidebar.classList.toggle('fa-chevron-right');
        buttonSidebar.classList.toggle('fa-chevron-left');
        
        divLink.classList.toggle('listLinkInactive');
        divLink.classList.toggle('listLinkActive');
    },
    
    handleClickPanier:function (event) { 
        const divPanier = document.querySelector('#listPanier');
        const buttonPanier = document.querySelector('#buttonPanier');
        buttonPanier.classList.toggle('fa-flip-horizontal');
        app.handleSwitchDropdownToPanier(divPanier);
      
        divPanier.classList.toggle('panierActive');
        divPanier.classList.toggle('panierInactive');
    },

    handleClickDisplayRequest:function (event) { 
        const requestWindow = document.querySelector("div#requestWindow-" + event.target.id);
        const checkRequestWindow = document.querySelectorAll('div[id^=requestWindow-]');

        checkRequestWindow.forEach(reqWindow => {
            if (reqWindow != requestWindow) {
                if (reqWindow.classList.contains('active')) {
                    reqWindow.classList.toggle('active');                    
                }
            } else {
                    requestWindow.classList.toggle('active');
            }
        }); 
    },

    handleClickCloseRequest:function (event) { 
        const id = event.target.id.split("-")[1];
        const requestWindow = document.querySelector("div#requestWindow-" + id);
        requestWindow.classList.toggle('active');
    },

};