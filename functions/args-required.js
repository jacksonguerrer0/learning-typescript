"use strict";
(() => {
    console.log('Arguments required');
    // Whe use type is required
    const fullName = (firstName, lastName) => {
        return `FullName: ${firstName} ${lastName}`;
    };
    const personOne = fullName('Jackson', 'Guerrero');
    // const personTwo = fullName('Jorge')
    console.log({
        personOne,
        // personTwo
    });
})();
