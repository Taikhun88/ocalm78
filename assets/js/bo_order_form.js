export var bo_order_form = {
    init: function () {
        const btnBurgerIcon = document.querySelector('button.dropdown-toggle');
        if (btnBurgerIcon) {
            btnBurgerIcon.addEventListener('click', bo_order_form.handleClickCleanP);
        }

        const btnAddProduct = document.querySelector('#add-product');
        if (btnAddProduct) {
            btnAddProduct.addEventListener('click', bo_order_form.handleClickAddProduct);
        }
    },

    handleClickCleanP:function (event)
    {
        const pElement = document.querySelector('p.elementMissing');
        if (pElement) {
            pElement.remove();
        }
    },
    
    handleClickAddProduct:function (event)
    {
        event.preventDefault();
        const selectAddProduct = document.querySelector('select[name=product_add]');
        const inputProductQty = document.querySelector('input.input-add');
        const inputSelectedQty = inputProductQty.value;
        if (selectAddProduct.selectedIndex == 0 || inputSelectedQty <= 0) {
            const pElement = document.createElement('p');
            pElement.setAttribute('class', 'elementMissing');
            pElement.innerHTML = 'Merci de sélectionner un produit et sa quantité';
            const formTag = document.querySelector('form');
            
            const divDetailsForm = document.querySelector('div.card-details-form');
            formTag.insertBefore(pElement, divDetailsForm);
            return;
        }
        const optionSelectedProduct = selectAddProduct.value;
        const productNames = document.querySelectorAll('option[data-productname]');
        const productName = productNames[selectAddProduct.selectedIndex - 1];

        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'd-flex flex-row text-light justify-content-between option-style');
        const cardDetailsForm = document.querySelector('div.card-details-form');
        cardDetailsForm.append(divRow);

        const divSelect = document.createElement('div');
        divSelect.setAttribute('class', 'w-25 text-start');
        divRow.append(divSelect);

        const selectElement = document.createElement('select');
        selectElement.setAttribute('class', 'select-style');
        selectElement.setAttribute('name', 'product_' + optionSelectedProduct);
        divSelect.append(selectElement);

        const optionElement = document.createElement('option');
        optionElement.setAttribute('class', 'text-start');
        optionElement.value = optionSelectedProduct;
        optionElement.selected = 'selected';
        optionElement.innerHTML = productName.dataset.productname;
        selectElement.append(optionElement);

        const divInput = document.createElement('div');
        divInput.setAttribute('class', 'w-25 text-end');
        divRow.append(divInput);

        const inputTag = document.createElement('input');
        inputTag.setAttribute('class', 'text-center');
        inputTag.setAttribute('min', '0');
        inputTag.setAttribute('max', '10');
        inputTag.setAttribute('type', 'number');
        inputTag.setAttribute('name', 'qty_' + optionSelectedProduct);
        inputTag.setAttribute('value', inputSelectedQty);
        divInput.append(inputTag);
        productNames[selectAddProduct.selectedIndex - 1].remove();
   }
};

document.addEventListener('DOMContentLoaded', bo_order_form.init);
