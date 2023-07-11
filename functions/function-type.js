"use strict";
(() => {
    console.log('Function Type');
    const chiken = (isAdult = false) => {
        return isAdult ? 'Cucurucu' : 'Pioo';
    };
    const cow = () => 'Muuuu';
    const dog = (msg) => msg;
    // Add type for functions using  a function with params and return
    let execute_function;
    execute_function = chiken;
    execute_function(true);
    let execute_cow;
    execute_cow = cow;
    execute_cow();
    let execute_dog;
    execute_dog = dog;
    execute_dog('Text');
    console.log({
        execute_function, cow
    });
})();
