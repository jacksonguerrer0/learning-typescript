"use strict";
(() => {
    console.log('Complex interface');
    const client = {
        id: 1,
        name: 'Jack',
        address: {
            id: 23,
            zip: '23481M',
            city: 'Arauquita'
        },
        getName(msg) {
            return `msg: ${this.name}`;
        }
    };
    console.log(client);
})();
