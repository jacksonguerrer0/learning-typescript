"use strict";
(() => {
    console.log('Enumerations');
    // only exists in TS
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 10] = "min";
        AudioLevel[AudioLevel["medium"] = 11] = "medium";
        AudioLevel[AudioLevel["max"] = 12] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const audioMin = AudioLevel.min;
    console.log({
        AudioLevel,
        audioMin
    });
})();
