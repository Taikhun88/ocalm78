var avatar_select = {
    dataAvatarSelect:"",
    init: function ()
    {
        const dataAvatarSelect = document.querySelector('#user_avatar');
        avatar_select.dataAvatarSelect = dataAvatarSelect;
        avatar_select.removeSelect();
        avatar_select.createAvatarButton();
        const selectedOption = avatar_select.checkSelectedAvatar(dataAvatarSelect);
        const avatarBtn = document.querySelector('button[name^=user_avatar]');

        if (selectedOption[0] == true) {
            const baseUrl = window.location.origin;
            const fullPath = baseUrl + "/images/avatars/" + selectedOption[1];
            const selectedAvatar = document.createElement('img');
            selectedAvatar.setAttribute('id', 'avatarInform');
            selectedAvatar.setAttribute('class', 'rounded-circle');
            selectedAvatar.setAttribute('src', fullPath);
            selectedAvatar.setAttribute('width', '50px');
            avatarBtn.parentElement.insertBefore(selectedAvatar, avatarBtn);
        } else 
        {
            const defaultAvatar = document.createElement('i');
            defaultAvatar.setAttribute('class', 'fas fa-user-circle fa-2x text-white');
            defaultAvatar.setAttribute('id', 'avatarInform');
            avatarBtn.parentElement.insertBefore(defaultAvatar, avatarBtn);
        }

        // ajout texte après img du bouton avatar
        const textAvatar = document.createElement('span');
        textAvatar.innerHTML = " Choisissez votre avatar";
        textAvatar.setAttribute('class', 'text-white');
        avatarBtn.append(textAvatar);
        const modifyUserBtn = document.querySelector('#modifyUser');
        modifyUserBtn.addEventListener('click', avatar_select.handleClickRestoreSelect);
    },
    
    handleClickRestoreSelect: function(event)
    {
        // event.preventDefault();
        const dataAvatarSelect = avatar_select.dataAvatarSelect;        
        const imgAvatar = document.querySelector('img#avatarInform');
        if (imgAvatar) {
            const srcSplitted = imgAvatar.src.split("/");
            const nameImg = srcSplitted[5];
            const holdOptionSelected = dataAvatarSelect.querySelector('option[selected^=selected]');
            if (holdOptionSelected) {
                holdOptionSelected.removeAttribute('selected');
            }
            const allOptions = dataAvatarSelect.querySelectorAll('option');
            allOptions.forEach(option => {
                if (option.innerText == nameImg) {                    
                    option.setAttribute('selected', 'selected');
                }
            });
            imgAvatar.remove();
            const btnAvatar = document.querySelector('button[name^=user_avatar]');
            btnAvatar.remove();
            const containerAvatars = document.querySelector('div.containerAvatars');
            if (containerAvatars) {
                containerAvatars.remove();
            }
            const labelAvatar = document.querySelector('label[for^=user_avatar]');
            labelAvatar.parentElement.append(dataAvatarSelect);
        } 
    },

    removeSelect: function()
    {
        const avatarSelect = document.querySelector('#user_avatar');
        avatarSelect.remove();
    },

    createAvatarButton: function () 
    {
        const avatarBtn = document.createElement('button');
        avatarBtn.setAttribute('class', 'btn btn-primary mt-2');
        avatarBtn.setAttribute('name', 'user_avatar');
        avatarBtn.addEventListener('click', avatar_select.handleClickDisplayAvatars);

        const labelAvatar = document.querySelector('label[for^=user_avatar]');
        labelAvatar.parentElement.append(avatarBtn);
        labelAvatar.parentElement.classList.add('d-flex', 'flex-column', 'align-items-center');
    }, 

    handleClickDisplayAvatars: function(event) 
    {
        event.preventDefault();
        const checkContainerAvatars = document.querySelector('.containerAvatars');
        if (checkContainerAvatars) {
            checkContainerAvatars.remove();
        } else 
        {
            const containerAvatars = document.createElement('div');
            containerAvatars.setAttribute('class', 'containerAvatars');            
            
            const closeContainer = document.createElement('div');
            closeContainer.setAttribute('class', 'closeContainer');
            containerAvatars.append(closeContainer);

            const closeIcon = document.createElement('i');
            closeIcon.setAttribute('class', 'far fa-times-circle text-red');
            closeIcon.addEventListener('click', avatar_select.handleClickCloseAvatarsBox)
            closeContainer.append(closeIcon);
            
            const labelAvatar = document.querySelector('label[for^=user_avatar]');

            labelAvatar.parentElement.append(containerAvatars);
            avatar_select.fillContainerAvatars();
        }
    },

    fillContainerAvatars: function()
    {
        const divListOfAvatars = document.querySelector('#listOfAvatars');
        const dataAvatars = JSON.parse(divListOfAvatars.dataset.avatars);
        const btnBox = document.createElement('div');
        btnBox.setAttribute('class', 'd-flex flex-row justify-content-evenly mt-1');
        const containerAvatars = document.querySelector('.containerAvatars');
        
        dataAvatars.forEach( data => {
            const nbrImg = data.listImg.length;
            if (nbrImg) {                
                const avatarCategoryBtn = document.createElement('button');
                avatarCategoryBtn.setAttribute('class', 'btn btn-secondary btn-sm');
                avatarCategoryBtn.innerHTML = data.name;
                avatarCategoryBtn.addEventListener('click', avatar_select.handleClickDisplayImgCategory);
                btnBox.append(avatarCategoryBtn);
            }
        });
        containerAvatars.append(btnBox); 
    },

    handleClickDisplayImgCategory: function(event)
    {
        event.preventDefault();
        const checkDisplayedImg = document.querySelector('#blockAvatars');

        if (checkDisplayedImg) {
            checkDisplayedImg.remove();
        }         
            const imgBox = document.createElement('div');
            imgBox.setAttribute('class', 'd-flex flex-row mt-2 flex-wrap');
            imgBox.setAttribute('id', 'blockAvatars');
            const containerAvatars = document.querySelector('.containerAvatars');
    
            const divListOfAvatars = document.querySelector('#listOfAvatars');
            const dataAvatars = JSON.parse(divListOfAvatars.dataset.avatars);
            dataAvatars.forEach(data => {
                if (data.name == event.target.innerText) {
                    data.listImg.forEach(img => {
    
                        const imgAvatar = document.querySelector('img#avatarInform');
                        const baseUrl = window.location.origin;
                        const fullPath = baseUrl + "/images/avatars/" + img;
                        const div = document.createElement('div');
                        if (imgAvatar) {
                            if (imgAvatar.src == fullPath) {
                               div.setAttribute('class',  'd-flex flex-column divAvatar activeAvatar'); 
                            } else
                            {
                                div.setAttribute('class', 'd-flex flex-column divAvatar');                                
                            }
                        } else
                        {
                            div.setAttribute('class', 'd-flex flex-column divAvatar');                                

                        }

                        imgBox.append(div);    
    
                        const avatar = document.createElement('img');
                        avatar.setAttribute('class', 'imgAvatar');
                        avatar.setAttribute('src', fullPath);
                        avatar.addEventListener('click', avatar_select.handleClickSwitchImg);
                        div.append(avatar);
    
                        const nameImg = document.createElement('p');
                        nameImg.setAttribute('class', 'avatarName');
    
                        const realNameImg = img.split("-");
                        nameImg.innerHTML = realNameImg[0];
                        div.append(nameImg);
                    });
                }
            });
            containerAvatars.append(imgBox);
    },

    handleClickSwitchImg: function(event) 
    {
        const fullPath = event.target.src;
        const splittedPath = fullPath.split("/");
        const iAvatar = document.querySelector('i#avatarInform');
        
        const avatarBtn = document.querySelector('button[name^=user_avatar]');
        if (iAvatar) {
            iAvatar.remove();
            const selectedAvatar = document.createElement('img');
            selectedAvatar.setAttribute('class', 'rounded-circle');
            selectedAvatar.setAttribute('id', 'avatarInform');
            selectedAvatar.setAttribute('src', fullPath);
            selectedAvatar.setAttribute('width', '50px');
            avatarBtn.parentElement.insertBefore(selectedAvatar, avatarBtn);
        } else 
        {
            const imgAvatar = document.querySelector('img#avatarInform');
            imgAvatar.src = fullPath;
        }
        const listActiveAvatar = document.querySelectorAll('.activeAvatar');
        if (listActiveAvatar) {
            listActiveAvatar.forEach(activeAvatar => {
                activeAvatar.classList.remove('activeAvatar');
            });
        }
        const avatarInform = document.querySelector('img#avatarInform');
        if (avatarInform) {
            event.target.parentElement.classList.add('activeAvatar');
        }
    },

    handleClickCloseAvatarsBox: function()
    {
        const containerAvatars = document.querySelector('.containerAvatars');
        containerAvatars.remove();
    },

    checkSelectedAvatar: function(dataAvatarSelect)
    {
        const options = dataAvatarSelect.querySelectorAll('option');
        let selectedOption = false;
        let imgPath = '';
            options.forEach(option => {
                if (option.getAttribute('selected') != null) {
                    selectedOption = true;
                    imgPath = option.innerText;
                }                
            });
            const data = [selectedOption, imgPath];
            return data;        
    },
};