// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    let newArray = [];
        newArray.push(array[0]);
        newArray.push(array[1]);
    return newArray;
}

const returnLastTwoDrivers = (array) => {
    let newArray = [];
        newArray.push(array[array.length - 2]);
        newArray.push(array[array.length - 1]);
    return newArray;
}

var selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers];

function createFareMultiplier(multi) {
    const fareMultiplier = (fare) => fare * multi;

    return fareMultiplier;
}


function fareDoubler(fare) {
    const double = createFareMultiplier(2)(fare); 
    return double;
}

function fareTripler(fare) {
    const triple = createFareMultiplier(3)(fare);
    return triple;
}

function selectDifferentDrivers(array, x) {
   const drivers = x(array);
   return drivers;
}