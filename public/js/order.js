const order = {
    handleChange:function (event) { 
        const value = document.querySelector("input[name="+ event.target.name +"]")
        const qty = value.value;
        const priceItem = value.dataset.price;
        const total = qty * priceItem;
        const name = event.target.name.split('_');
        const priceOnDisplay = document.querySelector('#price_' + name[1]);
        priceOnDisplay.innerHTML = total + ' €';
        order.changeTotal();
    },
    changeTotal:function () {
        const inputs = document.querySelectorAll("input[name^=qty_]");
        let total = 0;
        inputs.forEach(input => {
            total = total + (input.value * input.dataset.price);
        });
        const totalOnDisplay = document.querySelector('#total');
        totalOnDisplay.innerHTML = total + ' €';
    }
    
};