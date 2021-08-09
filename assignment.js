/* ===========================
01. conversion of seer to mon  
============================= */

let n = 1 / 40;
function seerToMon(seer) {
    if (seer >= 0) {
        mon = seer * n;
        return mon;
    }
    else if (seer < 0) {
        return "Please input a positive number";
    }
    else if (typeof seer == "string") {
        return "Please input a valid number";
    }
    else if (typeof seer == "boolean") {
        return "Please input a valid number";
    }
    else {
        return "Please input a valid number"
    }
}

let findMon = seerToMon(40);
console.log(findMon);

/* ========================
02. calculating total sales 
=========================== */

function totalSales(shirt, pant, shoe) {
    const thePriceOfShirt = 100;
    const thePriceOfPant = 200;
    const thePriceOfShoe = 500;
    const salesOfShirt = shirt * thePriceOfShirt;
    const salesOfPant = pant * thePriceOfPant;
    const salesOfShoe = shoe * thePriceOfShoe;
    const total = salesOfShirt + salesOfPant + salesOfShoe;
    if (total >= 0) {
        return total;
    }

    else {
        return 'The amount can not be negative, empty or any string! Please input a valid number.'
    }
}

let mySales = totalSales(2, 2, 2);
console.log(mySales);

/* =================================
03. calculating total delivery cost
=================================== */

function deliveryCost(number) {
    if (number < 0) {
        return "Please give a positive number as input value!"
    }
    else if (number <= 100) {
        let deliveryPriceOfTshirt = 100;
        const total1 = deliveryPriceOfTshirt * number;
        return total1;
    }
    else if ((number > 100) && (number <= 200)) {
        let deliveryPriceOfTshirt1 = 100;
        let deliveryPriceOfTshirt2 = 80;
        const total2 = (deliveryPriceOfTshirt1 * 100) + ((number - 100) * deliveryPriceOfTshirt2);
        return total2;
    }
    else if (number > 200) {
        let deliveryPriceOfTshirt1 = 100;
        let deliveryPriceOfTshirt2 = 80;
        let deliveryPriceOfTshirt3 = 50;
        const total3 = (deliveryPriceOfTshirt1 * 100) + (deliveryPriceOfTshirt2 * 100) + ((number - 200) * deliveryPriceOfTshirt3);
        return total3;
    }
    else if (typeof number == "string") {
        return "Please give me a number as input value!";
    }
    else if (typeof number == "boolean") {
        return "Please give me a number as input value!";
    }
    else {
        return "Please give me a number as input value!";
    }
}

let myDeliveryCost = deliveryCost(2);
console.log(myDeliveryCost);

/* ================
04. perfect friend 
================== */

let names = ['tanvi', 'jim', 'raju', 'tanha', 'sifat'];
function perfectFriend(names) {
    if (names[0].length >= 5) {
        return names[0];
    }
    else {
        return "The character of first name is less than 5";
    }
}

let myFriend = perfectFriend(names);
console.log(myFriend);
