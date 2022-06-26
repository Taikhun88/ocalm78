var back_newsletter = {
    handleClickDisplayListImages: function (event) 
    {
        // const imagesData = JSON.parse(buttonNewsletterImages.dataset.listofimages);
        const listofimages = document.querySelector('.list_of_images');
        listofimages.classList.toggle('active');
    },

    handleClickAddImg: function (event)
    {
        const tagImg = event.target;
        const newTagImg = '<img width="200px" src=" '+ event.target.src +' ">';
        back_newsletter.addImgToTextarea(newTagImg);
    },

    addImgToTextarea: function (newTagImg)
    {
        const selectTextarea = document.querySelector('#newsletter_message');
        selectTextarea.value = selectTextarea.value + newTagImg;
    },

};

