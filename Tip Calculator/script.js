var totalEl = document.getElementById('total');
var tipEl = document.getElementById('tipPercent');
var submitEl = document.getElementById('submit');
var splitEl = doucment.getElementById('split');

function calculateTip(total, tipPercent){
    var roundedResult = (total * tipPercent).toFixed(2)
    return roundedResult; 
}

function calculateTotal(total, tipAmount){
    return parseFloat(total) + parseFloat (tipAmount);
}

funtion addTip(){
    event.preventDefault();
    var tipPercentage = tipEl.value * 0.1;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector(#)
     
}