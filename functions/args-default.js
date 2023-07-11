"use strict";
(() => {
    console.log('Arguments default');
    // Add ? for arguments optional
    const fullName = (firstName, lastName, upperCase = false) => {
        const name = `FullName: ${firstName} ${lastName || '...'}`;
        return upperCase ? name.toLocaleUpperCase() : name;
    };
    const personOne = fullName('Jackson', 'Guerrero', true);
    const personTwo = fullName('Jorge');
    console.log({
        personOne,
        personTwo
    });
})();
