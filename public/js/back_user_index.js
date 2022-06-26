var back_user_index = {

    handleClickUser: function (event) {
        const actions = document.querySelector("#actions[data-userid='"+event.target.dataset.userid+"']");
        const tr = document.querySelector("#deploy-actions[data-userid='"+event.target.dataset.userid+"']");
        
        if (actions.classList.value == "") {
            actions.classList.add('-active');
            tr.classList.remove('deploy');
            tr.classList.add('deployed');
        }else{
            actions.classList.remove('-active');
            tr.classList.remove('deployed');
            tr.classList.add('deploy');
        }
    },

};
