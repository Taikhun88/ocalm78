var feedbackIndex = {
    listAllCards: '',

    init: function () {
        feedbackIndex.createSelects();
    },

    createSelects: function () {
        const dataSelects = feedbackIndex.dataSelects();
        const divListCards = document.querySelector('#divListCards');

        dataSelects.forEach(data => {
            const divSelect = document.createElement('div');
            divSelect.setAttribute('class', 'divSelect-' + data.label);
            divListCards.parentElement.insertBefore(divSelect, divListCards);

            const spanTag = document.createElement('span');
            spanTag.setAttribute('class', 'spanClass');
            spanTag.innerHTML = data.label;
            divSelect.append(spanTag);

            const selectTag = document.createElement('select');
            selectTag.setAttribute('name', data.name);
            selectTag.setAttribute('class', data.class);
            selectTag.setAttribute('id', data.id);

            selectTag.addEventListener('change', feedbackIndex.handleChangeSelect);

            divSelect.append(selectTag);

            data.options.forEach(dataOption => {
                const optionTag = document.createElement('option');
                optionTag.setAttribute('value', dataOption);
                optionTag.innerHTML = dataOption;
                selectTag.append(optionTag);
            });
        });
    },

    handleChangeSelect: function (event) {
        const divAllCards = document.querySelector('#divListCards');
        const storeAllCards = JSON.parse(divAllCards.dataset.listfeedbacks);

        if (storeAllCards.length == divAllCards.childElementCount) {
            feedbackIndex.listAllCards = divAllCards;
        }

        const selects = document.querySelectorAll('select');
        let sortBy1 = '';
        let sortBy2 = '';
        selects.forEach(select => {
            if (select.id == 'statusSelect') {

                sortBy1 = select.value;
            } else {
                sortBy2 = select.value;
            }
        });

        feedbackIndex.sortByStatus(sortBy1);
        feedbackIndex.sortByRating(sortBy2);
        const listActiveCards = document.querySelectorAll('div.cardFeedback-active');
        const checkPmessage = document.querySelector('#divListCards > p')
        if (checkPmessage) {
            checkPmessage.remove();
        }
        if (listActiveCards.length == 0) {
            const message = "Il n'y aucun feedback avec ces critères.";
            const pMessage = document.createElement('p');
            pMessage.innerHTML = message;
            divAllCards.prepend(pMessage);
        }
    },

    sortByStatus: function (sortBy1) {
        const divListAllCards = feedbackIndex.listAllCards;
        const listAllCards = divListAllCards.querySelectorAll('div[id^=cardFeedback-]');
        listAllCards.forEach(card => {
            const idCard = card.id.split("-");
            const divStatus = card.querySelector('#statusFeedback-' + idCard[1]);
            if (sortBy1 == "validé") {
                if (divStatus.dataset.status != 1) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            } else if (sortBy1 == "non-validé") {
                if (divStatus.dataset.status != '') {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.add('cardFeedback-active');
                    card.classList.remove('cardFeedback');
                }
            } else {
                card.classList.add('cardFeedback-active');
            }
        });

    },

    sortByRating: function (sortBy2) {
        const divListAllCards = feedbackIndex.listAllCards;
        const listAllCards = divListAllCards.querySelectorAll('div.cardFeedback-active');
        listAllCards.forEach(card => {
            const idCard = card.id.split("-");
            const divRating = card.querySelector('#ratingFeedback-' + idCard[1]);

            if (sortBy2 == "0 sur 5") {
                if (divRating.dataset.rating != 0) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            } else if (sortBy2 == "1 sur 5") {
                if (divRating.dataset.rating != 1) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            }
            else if (sortBy2 == "2 sur 5") {
                if (divRating.dataset.rating != 2) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            } else if (sortBy2 == "3 sur 5") {
                if (divRating.dataset.rating != 3) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            } else if (sortBy2 == "4 sur 5") {
                if (divRating.dataset.rating != 4) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            } else if (sortBy2 == "5 sur 5") {
                if (divRating.dataset.rating != 5) {
                    card.classList.remove('cardFeedback-active');
                    card.classList.add('cardFeedback');
                } else {
                    card.classList.remove('cardFeedback');
                    card.classList.add('cardFeedback-active');
                }
            } else
            {
                card.classList.add('cardFeedback-active');
            }
        });
    },

    dataSelects: function () {
        const selectsData = [
            {
                'label': 'Status',
                'name': 'statusSelect',
                'class': 'statusSelect',
                'id': 'statusSelect',
                'options': ['', 'non-validé', 'validé'],
            },
            {
                'label': 'Note',
                'name': 'ratingSelect',
                'class': 'ratingSelect',
                'id': 'ratingSelect',
                'options': ['', '0 sur 5', '1 sur 5', '2 sur 5', '3 sur 5', '4 sur 5', '5 sur 5'],
            },
        ];

        return selectsData;
    },
};
document.addEventListener('DOMContentLoaded', feedbackIndex.init);