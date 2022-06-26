var TextareaWithHTML = {
    // compteur pour savoir combien d element il faut inséré pour les class multiple
    count: 0,

    /**
     * Fonction qui s éxécute une fois le DOm chargé
     */
    init: function () {
        // on cherche tous les textarea avec la classe addButtonHTML
        const textareaHTML = document.querySelectorAll('textarea.addButtonHTML');
        // Si il y en as 
        if (textareaHTML) {
            // pour chaque textarea
            textareaHTML.forEach(area => {
                // on appel la fonction qui ajoute les bouttons et leurs fonctionnalitées
                TextareaWithHTML.AddDivArroundTextarea(area);
                // on appel la fonction qui ajoute la fonctionnalité prévisualiser
                TextareaWithHTML.AddPreviewButton(area);
            });
            // on ecoute la page et on execute handleClickOptionDisplayed() au click
            document.addEventListener('click', TextareaWithHTML.handleClickOptionDisplayed);
        }
    },

    /**
     * Fonction qui retourne la liste des bouttons a créer avec leurs propriétés
     * @returns listButtonsHTML
     */
    listOfbuttons: function () {
        const listButtonsHTML = [
            {
                'id': 'Br',
                'class': 'simple',
                'img': 'fas fa-level-down-alt enter',
                'codeBefore': '<br>',
                'codeAfter': '',
                'labels': [],
                'options': [],
                'type': [],
            },
            {
                'id': 'Strong',
                'class': 'between',
                'img': 'fas fa-bold',
                'codeBefore': '<b>#0',
                'codeAfter': '</b>',
                'labels': ['Texte en gras'],
                'options': ['bold-text'],
                'type': ['text'],
            },
            {
                'id': 'Italic',
                'class': 'between',
                'img': 'fas fa-italic',
                'codeBefore': '<i>#0',
                'codeAfter': '</i>',
                'labels': ['Texte en italique'],
                'options': ['italic-text'],
                'type': ['text'],
            },
            {
                'id': 'Underline',
                'class': 'between',
                'img': 'fas fa-underline',
                'codeBefore': '<u>#0',
                'codeAfter': '</u>',
                'labels': ['Texte souligné'],
                'options': ['underline-text'],
                'type': ['text'],
            },
            {
                'id': 'Strike',
                'class': 'between',
                'img': 'fas fa-strikethrough',
                'codeBefore': '<strike>#0',
                'codeAfter': '</strike>',
                'labels': ['Texte barré'],
                'options': ['strike-text'],
                'type': ['text'],
            },
            {
                'id': 'Left',
                'class': 'between',
                'img': 'fas fa-align-left',
                'codeBefore': '<p class="text-start">#0',
                'codeAfter': '</p>',
                'labels': ['Texte a gauche'],
                'options': ['left-text'],
                'type': ['text'],
            },
            {
                'id': 'Center',
                'class': 'between',
                'img': 'fas fa-align-center',
                'codeBefore': '<p class="text-center">#0',
                'codeAfter': '</p>',
                'labels': ['Texte au milieu'],
                'options': ['center-text'],
                'type': ['text'],
            },
            {
                'id': 'Right',
                'class': 'between',
                'img': 'fas fa-align-right',
                'codeBefore': '<p class="text-end">#0',
                'codeAfter': '</p>',
                'labels': ['Texte a droite'],
                'options': ['right-text'],
                'type': ['text'],
            },
            {
                'id': 'Quote',
                'class': 'between',
                'img': 'fas fa-code',
                'codeBefore': '<q>#0',
                'codeAfter': '</q>',
                'labels': ['Citation'],
                'options': ['strike-text'],
                'type': ['text'],
            },
            {
                'id': 'List',
                'class': 'multiple',
                'img': 'fas fa-list',
                'codeBefore': '<ul>',
                'multipleTag': '<li>#</li>',
                'codeAfter': '</ul>',
                'labels': ['Element n° 1'],
                'options': ['li-text'],
                'type': ['text'],
            },
            {
                'id': 'Span',
                'class': 'between',
                'img': 'fas fa-paint-brush',
                'codeBefore': '<span style="color:#0;">#1',
                'codeAfter': '</span>',
                'labels': ['Couleur du texte', 'Texte en couleur'],
                'options': ['color-text', 'colored-text'],
                'type': ['color', 'text'],
            },
            {
                'id': 'Link',
                'class': 'between',
                'img': 'fas fa-link',
                'codeBefore': '<a href="#0" target="_blank">#1',
                'codeAfter': '</a>',
                'labels': ['Lien http', 'Texte du lien'],
                'options': ['link-http', 'link-text'],
                'type': ['text', 'text'],
            },
            {
                'id': 'Image',
                'class': 'between',
                'img': 'far fa-image',
                'codeBefore': '<img src="#0"width="#1">',
                'codeAfter': '',
                'labels': ['Http de l image', 'largeur'],
                'options': ['link-http', 'width-image'],
                'type': ['text', 'text'],
            },
        ];
        return listButtonsHTML;
    },

    /**
     * Fonction qui entour le textarea d un div
     * @param textareaHTML balise textarea
     */
    AddDivArroundTextarea: function (textareaHTML) {
        // on créer la div qui va contenir tout le block textarea ( bouton + input + previsualiser )
        const divArea = document.createElement('div');
        divArea.setAttribute('id', 'divForTextarea-' + textareaHTML.id);
        divArea.setAttribute('class', 'd-flex flex-column');
        // on insert la div au dessus de son textarea
        textareaHTML.parentElement.insertBefore(divArea, textareaHTML);
        // on déplace le textarea dans son div
        divArea.appendChild(textareaHTML);

        // on appel la fonction qui va ajouter les bouttons en lui donnant la div qui les contiens
        TextareaWithHTML.AddButtonsHTML(divArea);
    },

    /**
     * Fonction qui ajoute les boutons au dessus de son teaxtarea
     */
    AddButtonsHTML: function (divArea) {
        // on récupere la liste de bouttons a créer
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        // on recupere l id du textarea
        const areaId = divArea.id.split('-');

        // on créer la div qui va contenir les bouttons
        const divListButtons = document.createElement('div');
        divListButtons.setAttribute('id', 'listButtons' + '-' + areaId[1]);
        divListButtons.setAttribute('class', 'containerButtonTextarea');
        // on l attache au dessus du textarea
        divArea.prepend(divListButtons);

        // pour chaque element de la liste des bouttons
        ListbuttonsHTML.forEach(btn => {
            // on créer le boutton
            button = document.createElement('button');
            button.setAttribute('id', 'buttonHTML-' + btn.id + '-' + areaId[1]);
            button.setAttribute('class', 'btn btn-light my-1 mx-1 btn-style btn-style-md');

            // on lui donne son image de fond
            const img = document.createElement('i');
            img.setAttribute('id', 'img-' + btn.id + '-' + areaId[1]);
            img.setAttribute('class', btn.img + " img-style img-style-md");

            // on l ajoute dans la div qui contient les bouttons
            divListButtons.append(button);
            button.append(img);

            // si la class du boutton est simple
            if (btn.class == "simple") {
                //on declenche handleClickAddSimpleTag() au click
                button.addEventListener('click', TextareaWithHTML.handleClickAddSimpleTag);
            }
            // sinon
            else {
                // on déclenche handleClickDisplayOptions() au click
                button.addEventListener('click', TextareaWithHTML.handleClickDisplayOptions);
            }
        });
    },

    /**
     * Fonction qui ajoute les tag sans fermeture
     */
    handleClickAddSimpleTag: function (event) {
        event.preventDefault();
        // on recupere l id de l evennement
        const fullId = event.target.id.split("-");
        const id = fullId[1];
        // on selection le textarea avec cet id
        const textareaHTML = document.querySelector('#' + fullId[2] + '.addButtonHTML');
        // on recupere la liste des bouttons
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        // pour chaque boutton
        ListbuttonsHTML.forEach(btn => {
            // si l id du boutton est = a l id de l evenement
            if (btn.id == id) {
                // on insert la balise dans le textarea
                textareaHTML.value = textareaHTML.value + btn.codeBefore + btn.codeAfter;
            }
        });
    },

    /**
     * Fonction qui ouvre le panneau de configuration des tags avec fermeture
     */
    handleClickDisplayOptions: function (event) {
        event.preventDefault();
        // on stock dans le tableau fullId l id de la target, coupé par le -
        const fullId = event.target.id.split("-");
        // on stock l id
        const id = fullId[1];
        // on recup la liste des bouttons
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        // pour chaque boutton de la liste
        ListbuttonsHTML.forEach(btn => {
            // si l id du boutton = id de la target
            if (btn.id == id) {
                // on regarde si il y as deja une div pour cet element
                const alreadyDiv = document.querySelector("#SettingsTag-" + id + '-' + fullId[2]);
                // on regarde si il y as deja une div
                const allDivsSettings = document.querySelectorAll("div[id^=SettingsTag-]");
                // si elle existe deja on la supprime
                if (alreadyDiv) {
                    alreadyDiv.remove();
                }
                // sinon
                else {
                    // si il y a d'autres div on les supp
                    if (allDivsSettings.length >= 1) {
                        allDivsSettings.forEach(div => {
                            div.remove();
                        });
                    }
                    // on selectionne les elements nécessaire
                    const divForTextarea = document.querySelector('#divForTextarea-' + fullId[2]);
                    const divListbuttons = document.querySelector('#listButtons-' + fullId[2]);
                    const textareaToSelect = document.querySelector('textarea#' + fullId[2]);
                    const divListbuttonsHeight = parseInt(getComputedStyle(divListbuttons).height);

                    // on créer la div qui va contenir les options
                    const divSettingsTag = document.createElement('div');
                    divSettingsTag.setAttribute('id', 'SettingsTag-' + id + '-' + fullId[2]);
                    divSettingsTag.setAttribute('class', 'SettingsTag');
                    // on décale la div pour qu elle ne cache pas les bouttons et on le centre
                    divSettingsTag.setAttribute('style', 'margin-top:' + divListbuttonsHeight + 'px;left:calc((100% - 300px) / 2);');

                    // on ajoute notre div au dessus du textarea
                    divForTextarea.insertBefore(divSettingsTag, textareaToSelect);

                    // si la class du boutton est between
                    if (btn.class == 'between') {
                        // on appel la fonction createBetweenOptions()
                        TextareaWithHTML.createBetweenOptions(id, fullId[2]);
                    }
                    // si la class du boutton est multiple
                    else if (btn.class == 'multiple') {
                        // on appel la fonction createMultipleOptions()
                        TextareaWithHTML.createMultipleOptions(id, fullId[2]);
                    }
                }
            }
        });
    },

    /**
     * Fonction qui créer les lignes adéquats aux options des tag between
     */
    createBetweenOptions: function (id, textareaId) {
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        const divSettings = document.querySelector('#SettingsTag-' + id + '-' + textareaId);
        // pour chaque boutton de la liste
        ListbuttonsHTML.forEach((btn, key) => {
            // si l id du boutton = l id passé a la fonction
            if (btn.id == id) {
                // on stock sa liste d options
                const listOfOptions = btn.options;
                if (btn.class == "between") {

                    if (btn.id == "Image") {

                        // on créer la row
                        const row = document.createElement('div');
                        row.setAttribute('id', 'row-Image');
                        row.setAttribute('class', 'd-flex flex-row justify-content-around text-center');
                        divSettings.append(row);

                        // on créer un select
                        const select = document.createElement('select');
                        select.setAttribute('id', 'select-Image-mode');
                        select.setAttribute('name', 'select-Image-mode');
                        select.addEventListener('change', TextareaWithHTML.handleChangeDisplayImgOptions);
                        row.append(select);

                        // on definit la liste d options
                        const options = [
                            "--",
                            "url",
                            "image du site",
                        ];
                        let optionValue = 0;

                        // on créer les options
                        options.forEach(option => {
                            const newOption = document.createElement('option');
                            newOption.setAttribute('value', optionValue);
                            newOption.innerText = option;
                            select.append(newOption);
                            optionValue++;
                        });
                        const initialrow = document.createElement('div');
                        initialrow.setAttribute('class', 'd-flex flex-row justify-content-around text-center mt-1');
                        initialrow.innerText = 'Merci de choisir un mode au dessus';
                        divSettings.append(initialrow);
                    }
                    else {
                        // pour chaque option
                        listOfOptions.forEach((option, key2) => {
                            const row = document.createElement('div');
                            row.setAttribute('id', 'row-' + option);
                            row.setAttribute('class', 'd-flex flex-row justify-content-around text-center');
                            divSettings.append(row);

                            const label = document.createElement('label');
                            label.setAttribute('class', 'w-50');
                            label.setAttribute('for', 'input-' + btn.id + '-' + option);
                            label.innerText = btn.labels[key2];
                            row.append(label);

                            const input = document.createElement('input');
                            input.setAttribute('id', 'input-' + btn.id + '-' + option);
                            input.setAttribute('class', 'w-50');
                            input.setAttribute('name', 'input-' + btn.id + '-' + option);
                            input.setAttribute('type', ListbuttonsHTML[key]['type'][key2]);
                            row.append(input);
                        });
                    }
                }

                if (btn.id != "Image") {
                    const validate = document.createElement('button');
                    validate.setAttribute('id', 'validate-' + btn.id + '-' + textareaId);
                    validate.setAttribute('class', 'btn btn-md btn-success my-2');
                    validate.innerText = 'Valider';
                    divSettings.append(validate);
                    const validateInHtml = document.querySelector('#validate-' + btn.id + '-' + textareaId);
                    validateInHtml.addEventListener('click', TextareaWithHTML.handleClickAddBetweenSettedTag)
                }
            };
        });
    },

    handleChangeDisplayImgOptions: function (event) {
        const options = [
            "--",
            "url",
            "image du site",
        ];
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        const divSettings = document.querySelector('div[id^=SettingsTag-Image]');
        const textareaId = divSettings.id.split('-')[2];

        // tant que le nombre d enfant est supperieur a 1
        while (divSettings.childNodes.length > 1) {
            // on supprime le dernier enfant
            divSettings.removeChild(divSettings.lastChild);
        }

        ListbuttonsHTML.forEach((btn, key) => {

            if (btn.id == 'Image') {
                const listOfOptions = btn.options;

                if (event.target.value == 0) {

                    const initialrow = document.createElement('div');
                    initialrow.setAttribute('class', 'd-flex flex-row justify-content-around text-center mt-1');
                    initialrow.innerText = 'Merci de choisir un mode au dessus';
                    divSettings.append(initialrow);
                }

                if (event.target.value == 1) {

                    listOfOptions.forEach((option, key2) => {
                        const row = document.createElement('div');
                        row.setAttribute('id', 'row-' + option);
                        row.setAttribute('class', 'd-flex flex-row justify-content-around text-center mt-1');
                        divSettings.append(row);

                        const label = document.createElement('label');
                        label.setAttribute('class', 'w-50');
                        label.setAttribute('for', 'input-' + btn.id + '-' + option);
                        label.innerText = btn.labels[key2];
                        row.append(label);

                        const input = document.createElement('input');
                        input.setAttribute('id', 'input-' + btn.id + '-' + option);
                        input.setAttribute('class', 'w-50');
                        input.setAttribute('name', 'input-' + btn.id + '-' + option);
                        input.setAttribute('type', ListbuttonsHTML[key]['type'][key2]);
                        row.append(input);
                    });
                    const validate = document.createElement('button');
                    validate.setAttribute('id', 'validate-' + btn.id + '-' + textareaId);
                    validate.setAttribute('class', 'btn btn-md btn-success my-2');
                    validate.innerText = 'Valider';
                    divSettings.append(validate);
                    const validateInHtml = document.querySelector('#validate-' + btn.id + '-' + textareaId);
                    validateInHtml.addEventListener('click', TextareaWithHTML.handleClickAddBetweenSettedTag)
                }

                if (event.target.value == 2) {

                    const select = document.querySelector('#' + event.target.id);
                    const textareaId = select.parentElement.parentElement.id.split('-')[2];
                    const textarea = document.querySelector('#' + textareaId);
                    const listImages = textarea.dataset.images;
                    const baseUrl = window.location.origin;
                    const listImagesDecode = JSON.parse(listImages);

                    if (Array.isArray(listImagesDecode) == false) {
                        const initialrow = document.createElement('div');
                        initialrow.setAttribute('class', 'd-flex flex-row justify-content-around text-center mt-1 text-danger');
                        initialrow.innerText = 'Merci de donner un tableau de chemins relatif dans la propriétée data-images du textarea';
                        divSettings.append(initialrow);

                    }
                    else if (listImagesDecode.length < 1) {
                        const initialrow = document.createElement('div');
                        initialrow.setAttribute('class', 'd-flex flex-row justify-content-around text-center mt-1 text-danger');
                        initialrow.innerText = 'Merci de donner une liste qui contient au moins 1 chemin relatif';
                        divSettings.append(initialrow);
                    }
                    else {
                        const initialrow = document.createElement('div');
                        initialrow.setAttribute('class', 'd-flex flex-row justify-content-around text-center mt-1');
                        divSettings.append(initialrow);

                        const label = document.createElement('label');
                        label.setAttribute('class', 'w-50');
                        label.setAttribute('for', 'input-Image-Width');
                        label.innerText = 'largeur';
                        initialrow.append(label);

                        const input = document.createElement('input');
                        input.setAttribute('id', 'input-Image-Width');
                        input.setAttribute('class', 'w-50');
                        input.setAttribute('name', 'input-Image-Width');
                        input.setAttribute('type', 'text');
                        initialrow.append(input);

                        const row = document.createElement('div');
                        row.setAttribute('id', 'row-Image');
                        row.setAttribute('class', 'row');
                        divSettings.append(row);

                        listImagesDecode.forEach((img, imgKey) => {
                            const completUrl = baseUrl+img.replace('./','/');
                            const element = document.createElement('div');
                            element.setAttribute('id', 'row-Image');
                            element.setAttribute('class', 'col-4 d-flex justify-content-center align-items-center m-auto mt-1');
                            row.append(element);

                            const image = document.createElement('img');
                            image.setAttribute('id', 'img-' + imgKey);
                            image.setAttribute('class', 'img-fluid rounded');
                            image.setAttribute('src', completUrl);
                            image.addEventListener('click', TextareaWithHTML.handleclickImageSite);
                            element.append(image);

                        });
                    }

                }
            }
        });
    },

    handleclickImageSite: function (event) {
        const selectedImage = document.querySelector('#' + event.target.id);
        const alreadySelectedImage = document.querySelector('.selected-image');
        const alreadyValidate = document.querySelector('button[id^=validate-Image-]');
        const divSettings = document.querySelector('div[id^=SettingsTag-Image]');
        const textareaId = divSettings.id.split('-')[2];

        if (alreadySelectedImage && selectedImage.parentElement != alreadySelectedImage) {
            alreadySelectedImage.classList.toggle('selected-image');
        }
        selectedImage.parentElement.classList.toggle('selected-image');

        if (!alreadyValidate) {
            const validate = document.createElement('button');
            validate.setAttribute('id', 'validate-Image-' + textareaId);
            validate.setAttribute('class', 'btn btn-md btn-success my-2');
            validate.innerText = 'Valider';
            divSettings.append(validate);
            const validateInHtml = document.querySelector('#validate-Image-' + textareaId);
            validateInHtml.addEventListener('click', TextareaWithHTML.handleClickAddImageSite)
        }
    },

    handleClickAddImageSite: function (event) {
        event.preventDefault();
        const divSettings = document.querySelector('div[id^=SettingsTag-Image]');
        const textareaId = divSettings.id.split('-')[2];
        const textarea = document.querySelector('textarea#'+textareaId);
        const selectedImage = document.querySelector('.selected-image').firstChild;
        const width = document.querySelector('#input-Image-Width');
        textarea.value = textarea.value + '<img src="'+selectedImage.src+'" width="'+width.value+'">';
        divSettings.remove();
    },

    /**
     * Fonction qui créer les lignes adéquats aux options des tag multiple
     */
    createMultipleOptions: function (id, textareaId) {
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        const divSettings = document.querySelector('#SettingsTag-' + id + '-' + textareaId);
        // pour chaque boutton de la liste
        ListbuttonsHTML.forEach((btn, key) => {
            // si l id du boutton = l id passé a la fonction
            if (btn.id == id) {
                // on stock sa liste d options
                const listOfOptions = btn.options;
                // on créer la div row qui contiendra un label et un input
                const row = document.createElement('div');
                row.setAttribute('class', 'd-flex flex-row justify-content-around text-center');
                // on ajoute row dans divSettings
                divSettings.append(row);

                // pour chaque option
                listOfOptions.forEach((option, key2) => {
                    const label = document.createElement('label');
                    TextareaWithHTML.count += 1;
                    label.setAttribute('id', 'elem-' + TextareaWithHTML.count);
                    label.setAttribute('class', 'w-50');
                    label.setAttribute('for', 'input-' + btn.id + '-' + option);
                    label.innerText = btn.labels[key2];
                    row.append(label);

                    const input = document.createElement('input');
                    input.setAttribute('id', 'input-elem-' + TextareaWithHTML.count);
                    input.setAttribute('class', 'w-50');
                    input.setAttribute('name', 'input-' + btn.id + '-' + option);
                    input.setAttribute('type', ListbuttonsHTML[key]['type'][key2]);
                    row.append(input);
                });

                const buttonAdd = document.createElement('button');
                buttonAdd.addEventListener('click', TextareaWithHTML.handleClickAddElem);
                buttonAdd.setAttribute('id', 'btnAdd-' + btn.id + '-' + textareaId);
                buttonAdd.setAttribute('class', 'btn btn-sm btn-success m-auto my-1 d-block');
                buttonAdd.innerHTML = '+';
                divSettings.append(buttonAdd);

                const validate = document.createElement('button');
                validate.setAttribute('id', 'validate-' + btn.id + '-' + textareaId);
                validate.setAttribute('class', 'btn btn-md btn-success my-2');
                validate.innerText = 'Valider';
                divSettings.append(validate);
                const validateInHtml = document.querySelector('#validate-' + btn.id + '-' + textareaId);
                validateInHtml.addEventListener('click', TextareaWithHTML.handleClickAddMultipleSettedTag)
            };
        });
    },

    /**
     * Fonction qui ajoute un element aux tags multiple
     */
    handleClickAddElem: function (event) {
        event.preventDefault();
        // on augmente le compteur
        TextareaWithHTML.count += 1;
        const textareaId = event.target.id.split("-");
        const divSettings = document.querySelector('#SettingsTag-' + textareaId[1] + '-' + textareaId[2]);
        const btnAddLi = document.querySelector('#btnAdd-' + textareaId[1] + '-' + textareaId[2]);

        const row = document.createElement('div');
        row.setAttribute('class', 'd-flex flex-row justify-content-around text-center');
        divSettings.insertBefore(row, btnAddLi);

        const label = document.createElement('label');
        label.setAttribute('id', 'elem-' + TextareaWithHTML.count);
        label.setAttribute('class', 'w-50');
        label.innerText = "Element n° " + TextareaWithHTML.count;
        row.append(label);

        const input = document.createElement('input');
        input.setAttribute('id', 'input-elem-' + TextareaWithHTML.count);
        input.setAttribute('class', 'w-50');
        row.append(input);
    },

    /**
     * Fonction qui ajoute les tags between configuré dans son textarea
     */
    handleClickAddBetweenSettedTag: function (event) {
        const fullId = event.target.id.split("-");
        const id = fullId[1];
        const textareaHTML = document.querySelector('textarea#' + fullId[2] + '.addButtonHTML');
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        const divSettings = document.querySelector('#SettingsTag-' + id + '-' + fullId[2]);

        ListbuttonsHTML.forEach(btn => {
            let stringForTextarea = btn.codeBefore + btn.codeAfter;
            if (btn.id == id) {
                btn.options.forEach((option, key) => {
                    const inputOfOption = document.querySelector('#input-' + btn.id + '-' + option);
                    stringForTextarea = stringForTextarea.replace('#' + key + '', inputOfOption.value);
                });
                textareaHTML.value = textareaHTML.value + stringForTextarea;
            }
        });
        divSettings.remove();
    },

    /**
     * Fonction qui ajoute les tags between configuré dans son textarea
     */
    handleClickAddMultipleSettedTag: function (event) {
        const fullId = event.target.id.split("-");
        const id = fullId[1];
        const textareaHTML = document.querySelector('textarea#' + fullId[2] + '.addButtonHTML');
        const ListbuttonsHTML = TextareaWithHTML.listOfbuttons();
        const divSettings = document.querySelector('#SettingsTag-' + id + '-' + fullId[2]);

        ListbuttonsHTML.forEach(btn => {
            if (btn.id == id) {
                const elemList = divSettings.querySelectorAll("input[id^=input-elem-]");
                if (elemList) {
                    stringForTextarea = btn.codeBefore;
                    elemList.forEach(actualElem => {
                        stringForTextarea = stringForTextarea + btn.multipleTag;
                        stringForTextarea = stringForTextarea.replace('#', actualElem.value);
                    })
                    stringForTextarea = stringForTextarea + btn.codeAfter;
                }
                textareaHTML.value = textareaHTML.value + stringForTextarea;
            }
        });
        divSettings.remove();
    },

    /**
     * Fonction qui ajoute le boutton preview sous le textarea
     */
    AddPreviewButton: function (textareaHTML) {
        const textareaId = textareaHTML.id;
        // on créer la div qui va contenir le boutton
        const divListButtons = document.createElement('div');
        divListButtons.setAttribute('id', 'divPreviewBtn-' + textareaId);
        divListButtons.setAttribute('class', 'd-flex flex-row justify-content-around');
        // on selectionne le parent de textarea
        const parent = textareaHTML.parentElement;
        // on attache divListButtons au parent
        parent.append(divListButtons);

        // on créer le boutton qui affiche la prévisualisation
        const previewButton = document.createElement('button');
        previewButton.setAttribute('id', 'previewBtn-' + textareaId);
        previewButton.setAttribute('class', 'btn btn-preview btn-sm');
        // on lui donne son labeal
        previewButton.innerText = 'Prévisualiser';
        // on lui ajoute son écouteur
        previewButton.addEventListener('click', TextareaWithHTML.handleClickPreview)
        // on ajoute a divListButtons notre previewButton 
        divListButtons.append(previewButton);
    },

    /**
     * Fonction qui affiche la prévisualisation
     */
    handleClickPreview: function (event) {
        event.preventDefault();
        const mainTag = document.querySelector('main');
        const areaId = event.target.id.split('-')[1]
        const alreadyDisplayed = document.querySelector("div#preview-" + areaId);
        const textareaHTML = document.querySelector('textarea#' + areaId);
        if (alreadyDisplayed) {
            alreadyDisplayed.parentElement.remove();
        }
        else {
            const heightClient = window.innerHeight;
            const divScreen = document.createElement('div');
            divScreen.setAttribute('class', 'preview-bg');
            mainTag.append(divScreen);
            const divPreview = document.createElement('div');
            divPreview.setAttribute('id', 'preview-' + areaId);
            if (heightClient <= 584) {
                divPreview.setAttribute('class', 'preview preview-sm');
            }
            else {
                divPreview.setAttribute('class', 'preview');
            }
            divPreview.innerHTML = textareaHTML.value;
            divScreen.append(divPreview);
          
            const close = document.createElement('div');
            close.setAttribute('class', 'closeDisplay d-flex rounded-circle');
            const img = document.createElement('i');
            img.setAttribute('class', 'far fa-times-circle fa-1-5 m-auto');
            close.addEventListener('click', TextareaWithHTML.handleClickCloseDisplay)
            close.append(img);
            divPreview.prepend(close);
        }
    },

    /**
     * Fonction qui affiche le boutton pour fermer la prévisualisation
     */
    handleClickCloseDisplay: function (event) {
        document.querySelector("div.preview").parentElement.remove();
    },

    /**
     * Fonction qui vérifie si on click dans SettingsTag ou pas
     */
    handleClickOptionDisplayed: function () {
        // on stocke  la list des div SettingsTag
        const settings = document.querySelectorAll("div[id^=SettingsTag-]");
        // si on en trouve 1
        if (settings.length >= 1) {
            // on ecoute le document
            document.addEventListener('click', function handleClickOutsideSettingsTag(event) {
                // pour chaque div SettingsTag
                settings.forEach(setting => {
                    // si on as pas clicker dessus
                    if (!setting.contains(event.target)) {
                        // on le supprime
                        setting.remove();
                    }
                });
            });
        }

    },
};

document.addEventListener('DOMContentLoaded', TextareaWithHTML.init);
