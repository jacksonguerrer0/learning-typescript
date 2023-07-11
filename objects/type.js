"use strict";
(() => {
    console.log('Types');
    let superman = {
        name: 'dummy',
        age: 0,
        canFly: false
    };
    let batman = {
        name: 'Batman',
        age: 45,
        canFly: false
    };
    superman = {
        name: 'Superman',
        age: 43,
        canFly: true,
        getName() {
            return this.name;
        }
    };
    console.log({
        superman, batman
    });
})();
