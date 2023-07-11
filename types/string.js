"use strict";
(() => {
    var _a;
    console.log('Strings');
    const batman = 'Batman';
    const superman = 'Superman';
    // Back trick
    console.log(`I'm ${batman}`);
    // Execute toUpperCase when superman[100] is deferent to undefined
    console.log(((_a = superman[100]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Upps, not found');
})();
