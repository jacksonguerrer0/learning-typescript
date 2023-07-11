"use strict";
(() => {
    console.log('Arrays');
    const numbers = [1, 6, 8, 9, 5];
    const strings = ['Jack', 'Guerrero'];
    const numbersAndStrings = [...numbers, ...strings];
    console.log({
        numbers,
        strings,
        numbersAndStrings
    });
})();
