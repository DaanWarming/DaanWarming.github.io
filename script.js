var x = 0;


function price() {
    var decider = document.getElementById('toggle');

    if (decider.checked) {
        changePrice();
    } else {
        changePriceHigher();
    }
    x += 1;
}

function changePrice() {
    var basicPrice = document.getElementById("price-basic");
    basicPrice.innerHTML = "$199.99";
    var professionalPrice = document.getElementById("price-professional");
    professionalPrice.innerHTML = "$249.99";
    var masterPrice = document.getElementById("price-master");
    masterPrice.innerHTML = "$399.99";
}

function changePriceHigher() {
    var basicPrice = document.getElementById("price-basic");
    basicPrice.innerHTML = "$19.99";
    var professionalPrice = document.getElementById("price-professional");
    professionalPrice.innerHTML = "$24.99";
    var masterPrice = document.getElementById("price-master");
    masterPrice.innerHTML = "$39.99";
}