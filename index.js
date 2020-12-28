let macDollarPrice = 5.65;
let macIndex;

function bigMacIndex(macPrice){
     macIndex = macPrice / macDollarPrice;
    return macIndex;
}

function compareValues(currency, actualRate){
    let rateDifference = (actualRate-macIndex) / actualRate;
    let rateDifferencePercent = rateDifference * 100;
    let roundedRateDifferencePercent = rateDifferencePercent.toFixed(2);
    if(macIndex < actualRate){
        return "The "+currency+" is under-valued by "+roundedRateDifferencePercent + "% against the US dollar"; 
    }else{
        // return "The "+currency+" is over-valued against the US dollar";
        return "The "+currency+" is over-valued by "+(-roundedRateDifferencePercent) + "% against the US dollar"; 
    }
}

console.log("UK");
console.log( "The Big Mac Index for UK is: "+bigMacIndex(3.49));
console.log(compareValues("pound",0.73));

console.log("Sweden");
console.log("The Big Mac Index for Sweden is: " +bigMacIndex(54));
console.log(compareValues("krona",8.72));

console.log("China");
console.log("The Big Mac Index for China is: "+bigMacIndex(22.4));
console.log(compareValues("yuan",6.48));

console.log("Switzerland");
console.log("The Big Mac Index for Switzerland is: "+bigMacIndex(6.5));
console.log(compareValues("franc",0.92));

console.log("Denmark");
console.log("The Big Mac Index for Denmark is: "+bigMacIndex(30));
console.log(compareValues("Danish krone",6.32));

// Challenge #1-not sure if this is what you meant
let ukMacIndex = bigMacIndex(3.49);
let swedMacIndex = bigMacIndex(54);
let chinaMacIndex  = bigMacIndex(22.4);
let swissMacIndex = bigMacIndex(6.5);
let denMacIndex =  bigMacIndex(30);

function isGreaterThan(index1, index2){
    let result = false;
    if(index1 > index2){
        result = true;
        return result;
    }
    return result;
}
console.log("Is UK Big Mac Index greater than Sweeden Big Mac Index? "+ isGreaterThan(ukMacIndex,swedMacIndex));
console.log("Is China Big Mac Index greater than Denmark Big Mac Index? "+ isGreaterThan(chinaMacIndex,denMacIndex));