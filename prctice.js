var myFirstName = 'Dewan Mizanur';
var myLastName = 'Rahman';
var myFullName = myFirstName + ' ' + myLastName;
// console.log(myFullName);

var mangoPrice = 80;
var orangePrice = '120';
var total = mangoPrice + parseFloat(orangePrice);
// console.log(total);

total += 100;
total++;
// console.log(total);

var availableMoney = 123;
var rice1Kg = 33;
var riceAmountInKg = parseFloat(availableMoney / rice1Kg).toFixed(1);
console.log(riceAmountInKg);
var remainingMoney = availableMoney % rice1Kg;
// console.log(remainingMoney);

var date = new Date();
console.log(typeof date);