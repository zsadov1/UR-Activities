// var countEl = document.querySelector('#count');
// var incrementEl = document.getElementById('increment');
// var decrementEl = document.querySelector('#decrement');

// var num = 0;

// var increment = function(){
//     num++
//     countEl.textContent = num
// };

// var decrement = function(){
//     num--
//     countEl.textContent = num
// };

// decrementEl.addEventListener('click' , decrement);

// increment.addEventListener('click', increment);

var countEl = document.querySelector('#count');
var incrementEl = document.getElementById('increment');
var decrementEl = document.querySelector('#decrement');
var count = 0;

var handleDecrement = function(){
    count--
    countEl.textContent = count
};

decrementEl.addEventListener('click', handleDecrement)

var handleIncrement = function(){
    count++
    countEl.textContent = count
};

incrementEl.addEventListener('click' , handleIncrement);

countEl.textContent = count; 