'use strict';

/**
 * Inicjalizacja, decyzja o wywolaniu okreslonej funkcji
 */
function init(){
    const mode          = process.argv[2];
    const lang          = process.argv[3];
    const langPack      = require('./langs/'+lang+'.json');
    const niepl         = Object.values(langPack[mode]);
    const pl            = Object.keys(langPack[mode]);
    const randomIndex   = Math.floor(Math.random()*niepl.length);

    console.log(niepl[randomIndex]);

    process.stdin.on('data', () => {
        console.log(pl[randomIndex]);
        process.exit(1);
    });
}

module.exports.init = init();