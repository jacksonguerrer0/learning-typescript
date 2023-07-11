"use strict";
(() => {
    console.log('Booleans');
    const isSuperman = true;
    let isBatman;
    const isGoku = (isSuperman) ? false : true;
    console.log({
        isSuperman,
        // isBatman,
        isGoku
    });
})();
