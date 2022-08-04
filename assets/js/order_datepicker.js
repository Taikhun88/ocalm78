export var order_datepicker = {
    months: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ],

    monthsAbrv: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],

    fullletterDays: [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
    ],

    currentDate: new Date(),

    yearValue: "",
    monthValue: "",
    dayValue: "",
    hourValue: "",
    minuteValue: "",

    selectecDeliveryDate: {},

    copyInput: "",

    construct: function () {
        const yearSelect = document.querySelector('select[name=select-annee]');
        const yearValue = yearSelect.value;
        order_datepicker.yearValue = yearValue;

        const monthSelect = document.querySelector('select[name=select-mois]');
        const monthValue = monthSelect.value;
        order_datepicker.monthValue = monthValue;

        const daySelect = document.querySelector('select[name=select-jour]');
        const dayValue = daySelect.value;
        order_datepicker.dayValue = dayValue;

        const hourSelect = document.querySelector('select[name=select-heure]');
        const hourValue = hourSelect.value;
        order_datepicker.hourValue = hourValue;

        const minuteSelect = document.querySelector('select[name=select-minute]');
        const minuteValue = minuteSelect.value;
        order_datepicker.minuteValue = minuteValue;

        const selectecDeliveryDate = new Date(yearValue, monthValue - 1, dayValue);
        order_datepicker.selectecDeliveryDate = selectecDeliveryDate;
    },

    init: function () {
        const formCustomerOrder = document.querySelector('form[name=order_customer]');
        const formOrder = document.querySelector('form[name=order]');
        if (formCustomerOrder || formOrder) {
            const inputDeliveryDate = document.querySelector('input[name=delivery_date]');
            order_datepicker.copyInput = inputDeliveryDate;
            const deliveryDateParent = inputDeliveryDate.parentElement;

            if (formOrder) {
                const inputValue = inputDeliveryDate.value;
                const newDate = JSON.parse(inputValue);
                let newDateArray = newDate.date.split(' ');
                let hourDate = newDateArray[1];
                hourDate = hourDate.split('.');
                hourDate = hourDate[0];
                newDateArray = newDateArray[0];
                newDateArray = newDateArray.replaceAll('-', ' ');
                const currentDeliveryDate = new Date('' + newDateArray + ' ' + hourDate);
                order_datepicker.currentDate = currentDeliveryDate;
            }

            inputDeliveryDate.remove();

            order_datepicker.createSelectContainer(deliveryDateParent);
            order_datepicker.construct();
            const submitBtn = document.querySelector('button[type=submit]');
            submitBtn.addEventListener('click', order_datepicker.handleClickSubmit);

            const spanDayFullLetter = document.querySelector('#fullletterDay');
            const monthSelect = document.querySelector('select[name=select-mois]');
            const daySelect = document.querySelector('select[name=select-jour]');

            if (order_datepicker.selectecDeliveryDate.getDay() != 0 && order_datepicker.selectecDeliveryDate.getDay() != 1 && order_datepicker.selectecDeliveryDate.getDay() != 6) {
                spanDayFullLetter.setAttribute('class', 'text-secondary');
                spanDayFullLetter.setAttribute('style', 'text-decoration:line-through;');
                spanDayFullLetter.setAttribute('title', 'Nous ne sommes pas ouverts ce jour.');

                monthSelect.classList.add('text-secondary');
                monthSelect.setAttribute('style', 'text-decoration:line-through;');
                daySelect.classList.add('text-secondary');
                daySelect.setAttribute('style', 'text-decoration:line-through;');
            }
            const selectContainer = document.querySelector('.selectContainerStyle');
            const cutOffTimeElt = document.createElement('p');
            cutOffTimeElt.setAttribute('class', 'text-orange fst-italic');
            selectContainer.append(cutOffTimeElt);


            const checkSameDay = order_datepicker.currentDate.getDate() == order_datepicker.dayValue ? true : false && order_datepicker.currentDate.getMonth() == order_datepicker.monthValue ? true : false;
            if (checkSameDay) {
                if (order_datepicker.currentDate.getHours() < 10) {
                    const timeLeftElt = document.createElement('span');
                    timeLeftElt.setAttribute('id', 'timeLeft');
                    timeLeftElt.setAttribute('class', 'countDown');

                    const hoursLeftResult = (10 - order_datepicker.currentDate.getHours()) - 1;
                    const minutesLeftResult = (60 - order_datepicker.currentDate.getMinutes() - 1);
                    const secondsLeftResult = (60 - order_datepicker.currentDate.getSeconds() - 1);
                    let dataTimeLeft = '{ "hour": 0, "minute": 0, "seconde": 5 }';
                    dataTimeLeft = JSON.parse(dataTimeLeft);
                    dataTimeLeft.hour = hoursLeftResult;
                    dataTimeLeft.minute = minutesLeftResult;
                    dataTimeLeft.seconde = secondsLeftResult;
                    timeLeftElt.setAttribute('data-timeleft', JSON.stringify(dataTimeLeft));
                    // timeLeftElt.setAttribute('data-doatend', 'target.innerText = "Les livraisons pour aujourd hui sont closes"');
                    timeLeftElt.setAttribute('data-doatend', "alert('Plus de livraison possible pour aujourd hui, sélectionnez une date ultérieure.'); target.innerText = '';");
                    cutOffTimeElt.append(timeLeftElt);
                    dynamicTime.init();
                } else {
                    cutOffTimeElt.innerText = 'Les livraisons pour aujourd\'hui sont closes';
                }
            }
        }
    },

    createSelectContainer: function (deliveryDateParent) {
        const divSelect = document.createElement('div');
        divSelect.setAttribute('class', 'd-flex flex-column selectContainerStyle');
        deliveryDateParent.append(divSelect);

        const listRowA = [
            {
                'name': 'annee',
                'optionlist': [
                    order_datepicker.currentDate.getFullYear(),
                    order_datepicker.currentDate.getFullYear() + 1,
                ],
            },
        ];

        const listRowB = [
            {
                'name': 'heure',
                'optionlist': [18 + "h", 19 + "h", 20 + "h", 21 + "h", 22 + "h", 23 + "h"],
            },
            {
                'name': 'minute',
                'optionlist': [0, 15, 30, 45],
            },
            {
                'name': 'jour',
                'optionlist': order_datepicker.myRange(1, 31),
            },
            {
                'name': 'mois',
                'optionlist': order_datepicker.myRange(1, 12),
            },
        ];

        order_datepicker.createRow(divSelect);
        order_datepicker.fillRow(divSelect, listRowA);
        order_datepicker.createRow(divSelect);
        order_datepicker.fillRow(divSelect, listRowB);
    },

    createRow: function (divSelect) {
        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'd-flex flex-row justify-content-center align-content-baseline my-1');
        divSelect.append(divRow);
    },

    fillRow: function (divSelect, listRow) {
        const divRow = divSelect.lastChild;
        listRow.forEach((select, key) => {
            if (listRow.length > 1 && key == 0) {
                const spanAtTime = document.createElement('span');
                spanAtTime.setAttribute('class', 'text-dark');
                spanAtTime.innerHTML = "À";
                divRow.append(spanAtTime);
            } else if (listRow.length > 1 && key == 2) {
                const spanOnDay = document.createElement('span');
                spanOnDay.setAttribute('class', 'text-dark mx-2');
                spanOnDay.setAttribute('id', 'fullletterDay');

                spanOnDay.setAttribute('data-bs-toggle', 'tooltip');
                spanOnDay.setAttribute('data-bs-html', 'true');

                spanOnDay.innerHTML = "le " + order_datepicker.fullletterDays[order_datepicker.currentDate.getDay()];
                divRow.append(spanOnDay);
            }
            const selectTag = document.createElement('select');
            selectTag.setAttribute('name', 'select-' + select.name);
            selectTag.addEventListener('change', order_datepicker.handleChangeCheckDate);
            divRow.append(selectTag);

            const optionList = select.optionlist;
            optionList.forEach(option => {
                const optionTag = document.createElement('option');
                optionTag.setAttribute('value', option);
                if (selectTag.name == "select-mois") {
                    optionTag.innerText = order_datepicker.months[option - 1];
                    optionTag.setAttribute('class', "text-center");
                    if (option - 1 == order_datepicker.currentDate.getMonth()) {
                        optionTag.setAttribute('selected', 'selected');
                    }
                }
                else if (selectTag.name == "select-heure") {
                    if (option == order_datepicker.currentDate.getHours() + 'h') {
                        optionTag.setAttribute('selected', 'selected');
                    }
                    optionTag.innerText = option;
                }
                else if (selectTag.name == "select-minute") {
                    if (option == order_datepicker.currentDate.getMinutes()) {
                        optionTag.setAttribute('selected', 'selected');
                    }
                    optionTag.innerText = option < 10 ? "0" + option : "" + option;
                }
                else if (selectTag.name == "select-jour") {
                    if (option == order_datepicker.currentDate.getDate()) {
                        optionTag.setAttribute('selected', 'selected');
                    }
                    optionTag.innerText = option < 10 ? "0" + option : "" + option;
                }
                else {
                    optionTag.innerText = option < 10 ? "0" + option : "" + option;
                }
                selectTag.append(optionTag);
            });
        });
    },

    myRange: function (min, max) {
        const list = [];
        for (let index = min; index <= max; index++) {
            list[index] = index;
        }
        return list;
    },

    handleChangeCheckDate: function (event) {
        const yearSelect = document.querySelector('select[name=select-annee]');
        const yearValue = yearSelect.value;

        const monthSelect = document.querySelector('select[name=select-mois]');
        const monthValue = monthSelect.value;

        const daySelect = document.querySelector('select[name=select-jour]');
        const dayValue = daySelect.value;

        const hourSelect = document.querySelector('select[name=select-heure]');
        const hourValue = hourSelect.value;

        const minuteSelect = document.querySelector('select[name=select-minute]');
        const minuteValue = minuteSelect.value;

        const spanDayFullLetter = document.querySelector('#fullletterDay');
        const selectecDeliveryDate = new Date(yearValue, monthValue - 1, dayValue);

        const checkIfPInvalid = document.querySelector('p.pInvalidSubmit');
        if (checkIfPInvalid) {
            checkIfPInvalid.remove();
        }

        // check if selected date exists
        const isDate = order_datepicker.checkIfDateTrue(dayValue, monthValue, yearValue);
        // design and info of selected value if false
        if (isDate == false) {
            spanDayFullLetter.innerHTML = "le ";

            if (!monthSelect.classList.contains('text-danger')) {
                monthSelect.classList.add('text-danger');
                monthSelect.setAttribute('style', 'text-decoration:line-through;');
            }
            if (!daySelect.classList.contains('text-danger')) {
                daySelect.classList.add('text-danger');
                daySelect.setAttribute('style', 'text-decoration:line-through;');
            }
            if (!daySelect.title) {
                daySelect.setAttribute('data-bs-toggle', 'tooltip');
                daySelect.setAttribute('data-bs-html', 'true');
                daySelect.setAttribute('title', 'La date du ' + dayValue + ' ' + order_datepicker.months[monthValue - 1] + ' n\'existe pas.');
            } else {
                daySelect.setAttribute('title', 'La date du ' + dayValue + ' ' + order_datepicker.months[monthValue - 1] + ' n\'existe pas.');
            }
        } else {
            // Affiche le jour uniquement si la date existe
            if (selectecDeliveryDate.getDay() != 0 && selectecDeliveryDate.getDay() != 1 && selectecDeliveryDate.getDay() != 6) {
                spanDayFullLetter.setAttribute('class', "text-secondary");
                spanDayFullLetter.setAttribute('style', 'text-decoration:line-through;');
                spanDayFullLetter.setAttribute('title', 'Nous ne sommes pas ouverts ce jour.');
                monthSelect.classList.add('text-secondary');
                monthSelect.setAttribute('style', 'text-decoration:line-through;');
                daySelect.classList.add('text-secondary');
                daySelect.setAttribute('style', 'text-decoration:line-through;');
            } else {
                if (spanDayFullLetter.classList.contains('text-secondary')) {
                    spanDayFullLetter.classList.replace('text-secondary', 'text-dark');
                    spanDayFullLetter.setAttribute('style', 'text-decoration:none;');
                    spanDayFullLetter.setAttribute('title', '');
                    monthSelect.classList.remove('text-secondary');
                    monthSelect.setAttribute('style', 'text-decoration:none;');
                    daySelect.classList.remove('text-secondary');
                    daySelect.setAttribute('style', 'text-decoration:none;');
                }
                const requestedDeliveryDate = new Date("" + yearValue + " " + monthValue + " " + dayValue);
                const isBeforeNow = requestedDeliveryDate < order_datepicker.currentDate ? false : true;

                if (isBeforeNow == false) {
                    if (selectecDeliveryDate.getDay() == 0 || selectecDeliveryDate.getDay() == 1 || selectecDeliveryDate.getDay() == 6) {
                        spanDayFullLetter.setAttribute('class', "text-secondary");
                        spanDayFullLetter.setAttribute('style', 'text-decoration:line-through;');
                        spanDayFullLetter.setAttribute('title', 'La date sélectionnée est dans le passé. Date invalide');
                        monthSelect.classList.add('text-secondary');
                        monthSelect.setAttribute('style', 'text-decoration:line-through;');
                        daySelect.classList.add('text-secondary');
                        daySelect.setAttribute('style', 'text-decoration:line-through;');
                    }
                }
            }

            spanDayFullLetter.innerHTML = "le " + order_datepicker.fullletterDays[selectecDeliveryDate.getDay()];

            if (monthSelect.classList.contains('text-danger')) {
                monthSelect.classList.remove('text-danger');
                monthSelect.setAttribute('style', 'text-decoration:none;');
            }
            if (daySelect.classList.contains('text-danger')) {
                daySelect.classList.remove('text-danger');
                daySelect.setAttribute('style', 'text-decoration:none;');
            }
            if (daySelect.title) {
                daySelect.setAttribute('title', '');
            }
        }
        const isDeliveryTime = order_datepicker.checkDeliveryTime();
    },

    checkDeliveryTime: function () {
        const hourSelect = document.querySelector('select[name=select-heure]');
        const hourValue = hourSelect.value;

        const minuteSelect = document.querySelector('select[name=select-minute]');
        const minuteValue = minuteSelect.value;

        if (hourValue == "23h" && minuteValue != 0) {
            hourSelect.classList.add('text-secondary');
            hourSelect.setAttribute('style', 'text-decoration:line-through;');
            hourSelect.setAttribute('data-bs-toggle', 'tooltip');
            hourSelect.setAttribute('data-bs-html', 'true');

            hourSelect.setAttribute('title', 'Nous ne sommes pas ouverts à cette heure là.');

            minuteSelect.classList.add('text-secondary');
            minuteSelect.setAttribute('style', 'text-decoration:line-through;');
            minuteSelect.setAttribute('data-bs-toggle', 'tooltip');
            minuteSelect.setAttribute('data-bs-html', 'true');
            minuteSelect.setAttribute('title', 'Nous ne sommes pas ouverts à cette heure là.');
            return false;
        } else {
            if (hourSelect.classList.contains('text-secondary')) {
                hourSelect.classList.remove('text-secondary');
                hourSelect.setAttribute('style', 'text-decoration:none;');
                hourSelect.setAttribute('title', '');

                minuteSelect.classList.remove('text-secondary');
                minuteSelect.setAttribute('style', 'text-decoration:none;');
                minuteSelect.setAttribute('title', '');
            }
            return true;
        }
    },

    /**
     *
     * @param { number | string } day
     * @param { number | string } month
     * @param { number| string } year
     * @returns { boolean }
     */
    checkIfDateTrue: function (day, month, year) {

        day = Number(day);
        month = Number(month) - 1; //bloody 0-indexed month
        year = Number(year);

        let d = new Date(year, month, day);

        let yearMatches = d.getUTCFullYear() === year;
        let monthMatches = d.getMonth() === month;
        let dayMatches = d.getDate() === day;

        let validDate = true;
        if (yearMatches == false) {
            validDate = false;
        }
        if (monthMatches == false) {
            validDate = false;
        }
        if (dayMatches == false) {
            validDate = false;
        }
        return validDate;
    },

    handleClickSubmit: function (event) {
        const selectContainer = document.querySelector('.selectContainerStyle');
        const yearSelect = document.querySelector('select[name=select-annee]');
        const yearValue = yearSelect.value;

        const monthSelect = document.querySelector('select[name=select-mois]');
        const monthValue = monthSelect.value < 10 ? '0' + (monthSelect.value).toString() : monthSelect.value;

        const daySelect = document.querySelector('select[name=select-jour]');
        const dayValue = daySelect.value < 10 ? '0' + (daySelect.value).toString() : daySelect.value;

        const hourSelect = document.querySelector('select[name=select-heure]');
        const hourValue = hourSelect.value.slice(0, -1);

        const minuteSelect = document.querySelector('select[name=select-minute]');
        const minuteValue = minuteSelect.value < 10 ? '0' + (minuteSelect.value).toString() : minuteSelect.value;

        const weekday = document.querySelector('span#fullletterDay');
        const weekdayValue = (weekday.innerText).substring(3);

        const isWeekday = weekdayValue == "Samedi" || weekdayValue == "Dimanche" || weekdayValue == "Lundi" ? true : false;
        const isDate = order_datepicker.checkIfDateTrue(dayValue, monthValue, yearValue);
        const isDeliveryTime = order_datepicker.checkDeliveryTime();

        let isBeforeCutOffTime = true;
        if ((order_datepicker.currentDate.getMonth() + 1) == monthValue && order_datepicker.currentDate.getDate() == dayValue) {
            const dateWhenSubmit = new Date();
            isBeforeCutOffTime = dateWhenSubmit.getHours() < 10 ? true : false;
        }

        const requestedDeliveryDate = new Date("" + yearValue + " " + monthValue + " " + dayValue);
        const isBeforeNow = requestedDeliveryDate < order_datepicker.currentDate ? false : true;

        const isValid = (isWeekday + isDate + isDeliveryTime + isBeforeCutOffTime + isBeforeNow) == 5 ? true : false;

        const checkIfPInvalid = document.querySelector('p.pInvalidSubmit');
        if (checkIfPInvalid) {
            checkIfPInvalid.remove();
        }

        if (isValid == true) {
            selectContainer.remove();

            const labelDeliveryDate = document.querySelector('label[for=delivery_date]');
            const copyInput = order_datepicker.copyInput;
            const currentDateObject = JSON.parse(copyInput.value);

            const newDate = yearValue + '-' + monthValue + '-' + dayValue + ' ' + hourValue + ':' + minuteValue + ':00';
            currentDateObject.date = newDate;
            const dateToReturn = JSON.stringify(currentDateObject);
            copyInput.setAttribute('value', dateToReturn);

            labelDeliveryDate.parentElement.append(copyInput)
        } else {
            event.preventDefault();
            const pInvalidSubmit = document.createElement('p');
            pInvalidSubmit.setAttribute('class', 'pInvalidSubmit');
            pInvalidSubmit.innerText = 'Votre date de livraison n\'est pas valide.';
            const labelDeliveryDate = document.querySelector('label[for=delivery_date]');
            labelDeliveryDate.parentElement.append(pInvalidSubmit);
        }
    },
}

document.addEventListener('DOMContentLoaded', order_datepicker.init);