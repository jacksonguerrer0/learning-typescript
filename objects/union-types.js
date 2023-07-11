"use strict";
(() => {
    console.log('Union types');
    let myCustomVariable = 'Jack';
    console.log(myCustomVariable);
    myCustomVariable = 19;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Jack',
        age: 19,
        canFly: false
    };
    console.log(myCustomVariable);
})();
