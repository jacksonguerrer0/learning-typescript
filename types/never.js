"use strict";
(() => {
    console.log('Never');
    // Used when the code not work
    const error = () => {
        console.log('Running');
        throw new Error("Error bruhhh");
    };
    error();
    console.log({
        error
    });
})();
