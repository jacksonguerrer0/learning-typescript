"use strict";
(() => {
    console.log('Void');
    function superman() {
        console.log('Laser');
    }
    const batman = () => {
        // return 'Batimovil'
    };
    console.log({
        superman, batman
    });
})();
