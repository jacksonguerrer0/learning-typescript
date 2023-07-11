"use strict";
(() => {
    console.log('Functions');
    const buildMsg = () => {
        return 'Signal activated!';
    };
    const msg = buildMsg();
    const signal = (msg) => {
        console.log(msg);
    };
    signal(msg);
})();
