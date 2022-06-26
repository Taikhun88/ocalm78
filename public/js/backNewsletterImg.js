var backNewsletterImg = {
    handleClickDisplayBtn: function(event)
    {
        const targetedImg = event.target;
        let splittedId = targetedImg.id;
        splittedId = splittedId.split('-');
        const actionsBtnTargeted = document.querySelector('#actions-btn-' + splittedId[2]);
        actionsBtnTargeted.classList.toggle('active');
        targetedImg.classList.toggle('targeted-img-margin');
    },

};