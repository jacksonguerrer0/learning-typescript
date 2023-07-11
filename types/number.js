"use strict";
(() => {
    console.log('Numbers');
    const currentYear = 2023;
    const lastYear = 2022;
    if (currentYear < lastYear) {
        console.log('Nooow');
    }
    else {
        console.log('Laaaast year');
    }
    // NaN is considered a Number
    const number = Number('123AD');
    console.log({
        currentYear,
        lastYear,
        number
    });
})();
