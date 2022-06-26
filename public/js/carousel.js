var carousel = {
    handleClickPrev: function (event) 
    {
        const carouselInner = document.querySelector('.carousel-inner');
        for (let index = 1; index < 4; index++) {
            const currentDiv = document.querySelector('#carouselElm-' + index);
            if (currentDiv.classList.contains('active')) {
                currentDiv.classList.toggle('active');
                let newIndex = (index - 1);
                if (index == 1) {
                    newIndex = 3;
                }
                const prevDiv = document.querySelector('#carouselElm-' + newIndex);
                prevDiv.classList.toggle('active');
                break;
            }
        }
    },

    handleClickNext: function (event) 
    {   
        const carouselInner = document.querySelector('.carousel-inner');
        for (let index = 1; index < 4; index++) {
            const currentDiv = document.querySelector('#carouselElm-' + index);
            if (currentDiv.classList.contains('active')) {
                currentDiv.classList.toggle('active');
                let newIndex = (index + 1);
                if (index == 3) {
                    newIndex = 1;
                }
                const nextDiv = document.querySelector('#carouselElm-' + newIndex);
                nextDiv.classList.toggle('active');
                break;
            }
        }

    },
};