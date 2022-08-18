//Adding the event handler
document.getElementById('btn-discount').addEventListener('click', function () {
    const totalShopping = document.getElementById('old-price');
    const totalShoppingString = totalShopping.value;
    const totalShoppingAmount = parseFloat(totalShoppingString);
    totalShopping.value = '';

    //calculating 30% discounted price
    const reducedPrice = totalShoppingAmount * 0.30;
    const discountedPrice = totalShoppingAmount - reducedPrice;

    //setting the value
    setTextElementValueById('display-price', discountedPrice);


})