//  exemple :
//  <ul>
//    <li class="dynamicTime"></li>
//    <li class="dynamicTime" data-optiondate='{ "weekday": "long", "year": "numeric", "month": "long", "day": "2-digit" }' data-optiontime="false"></li>
//    <li class="dynamicTime" data-optiondate='{ "weekday": "long", "year": "numeric", "month": "long", "day": "2-digit" }'></li>
//    <li class="countDown" data-timeleft='{ "hour": 0, "minute": 0, "seconde": 5 }' data-doatend="target.innerHTML = 'Temps écoulé';"></li>
//  </ul>
/**
 * pour fonctionner, cela requiert une balise avec
 * la classe dynamicTime
 * param : l attribut data-optiondate contenant un objet ( { "weekday": "long", "year": "numeric", "month": "long", "day": "2-digit" } )
 * param : l attribut data-optiontime contenant un booleen
 * param : l attribut data-doatend contenant le code js à éxécuter
 *
 */
 var dynamicTime = {
    fullDateTimeDynamic: [],
    optionDate: [],
    optionTime: [],
    countDown: [],
    timeLeft: [],
    doAtEnd: [],
    construct() {
        dynamicTime.fullDateTimeDynamic = document.querySelectorAll('.dynamicTime');
        if (dynamicTime.fullDateTimeDynamic) {
            dynamicTime.fullDateTimeDynamic.forEach((element, key) => {
                const optionDate = element.dataset.optiondate ?? '{}';
                dynamicTime.optionDate[key] = JSON.parse(optionDate);
                const optionTime = element.dataset.optiontime ?? true;
                dynamicTime.optionTime[key] = JSON.parse(optionTime);
            });
        }
        dynamicTime.countDown = document.querySelectorAll('.countDown');
        if (dynamicTime.countDown) {
            dynamicTime.countDown.forEach( (cdElement , keyCdElement) => {
                const timeLeft = cdElement.dataset.timeleft ?? '{ "hour": 0, "minute": 0, "seconde": 1 }';
                dynamicTime.timeLeft[keyCdElement] = JSON.parse(timeLeft);
                const doAtEnd = cdElement.dataset.doatend ?? '';
                dynamicTime.doAtEnd[keyCdElement] = doAtEnd;
            });
        }
    },
    init: function () {
        dynamicTime.construct();
        if (dynamicTime.fullDateTimeDynamic) {
            dynamicTime.fullDateTimeDynamic.forEach((Elt, keyElt) => {
                dynamicTime.displayDynamicTime(dynamicTime.optionDate[keyElt], dynamicTime.optionTime[keyElt], Elt);
            });
        }
        if (dynamicTime.countDown) {
            dynamicTime.countDown.forEach((cdElt, keycdElt) => {
                dynamicTime.displayCountDown(cdElt, dynamicTime.timeLeft[keycdElt].hour, dynamicTime.timeLeft[keycdElt].minute, dynamicTime.timeLeft[keycdElt].seconde, dynamicTime.doAtEnd[keycdElt]);
            });
        }
    },
    pause: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    /**
     *
     * @param {Object} optionDate { weekday: "long", year: "numeric", month: "long", day: "2-digit" }
     * @param {boolean} optionTime
     * @param {HTMLElement} target &lt;span id="monID"&gt;&lt;/span&gt;
     */
    displayDynamicTime: async function (optionDate, optionHour, target) {
        const currentDay = new Date();
        const date = currentDay.toLocaleDateString("fr-FR", optionDate);
        const hour = ("0" + currentDay.getHours()).slice(-2) + ":" + ("0" + currentDay.getMinutes()).slice(-2) + ":" + ("0" + currentDay.getSeconds()).slice(-2);
        var dateToReturn = Object.keys(optionDate).length > 0 ? date + " " + (optionHour == true ? hour : '') : optionHour == true ? hour : '';
        dateToReturn = dateToReturn.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        target.innerHTML = dateToReturn;
        while (true) {
            await dynamicTime.pause(1000);
            const newCurrentDay = new Date();
            const newDate = newCurrentDay.toLocaleDateString("fr-FR", optionDate);
            const newHour = ("0" + newCurrentDay.getHours()).slice(-2) + ":" + ("0" + newCurrentDay.getMinutes()).slice(-2) + ":" + ("0" + newCurrentDay.getSeconds()).slice(-2);
            var newDateToReturn = Object.keys(optionDate).length > 0 ? newDate + " " + (optionHour == true ? newHour : '') : optionHour == true ? newHour : '';
            newDateToReturn = newDateToReturn.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
            target.innerHTML = newDateToReturn;
        }
    },
    /**
     *
     * @param {HTMLElement} target
     * @param {number} hourLeft
     * @param {number} minuteLeft
     * @param {number} secondeLeft
     * @param {string} doAtEnd
     */
    displayCountDown: async function (target, hourLeft, minuteLeft, secondeLeft, doAtEnd) {
        target.innerHTML = "Il vous reste " + hourLeft + 'h ' + minuteLeft + 'min ' + secondeLeft + ' sec' + " pour être livré aujourd\'hui";
        let secondToWait = dynamicTime.calculSecondToWait(hourLeft, minuteLeft, secondeLeft);
        while (secondToWait > 0) {
            await dynamicTime.pause(1000);
            if (secondeLeft == 0 && minuteLeft != 0 && hourLeft != 0) {
                minuteLeft = minuteLeft - 1;
                secondeLeft = 59;
            } else if (secondeLeft == 0 && minuteLeft != 0 && hourLeft == 0) {
                minuteLeft = minuteLeft - 1;
                secondeLeft = 59;
            } else if (secondeLeft == 0 && minuteLeft == 0 && hourLeft != 0) {
                hourLeft = hourLeft - 1;
                minuteLeft = 59;
                secondeLeft = 59;
            } else {
                secondeLeft = secondeLeft - 1;
            }
            secondToWait = dynamicTime.calculSecondToWait(hourLeft, minuteLeft, secondeLeft);
            if (secondToWait == 0) {
                target.innerHTML = hourLeft + 'h ' + minuteLeft + 'min ' + secondeLeft + ' sec';
                await dynamicTime.pause(1);
                try {
                    eval(doAtEnd);
                } catch (e) {
                    if (e instanceof ReferenceError) {
                        target.innerHTML = ''+ '<span class="error-js-message">'+ e.message+'</span>'+'';
                    } else {
                        throw e;
                    }
                }
            }else {
                target.innerHTML = "Il vous reste " + hourLeft + 'h ' + minuteLeft + 'min ' + secondeLeft + ' sec' + " pour être livré aujourd\'hui";
            }
        }
    },
    calculSecondToWait: function (hourLeft, minuteLeft, secondeLeft) {
        const mih = 60;
        const sim = 60;
        const secondToWaittoreturn = ((hourLeft * mih) * sim) + (minuteLeft * sim) + secondeLeft;
        return secondToWaittoreturn;
    },
};
document.addEventListener('DOMContentLoaded', dynamicTime.init);