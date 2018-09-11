/**
 * Losowanie słowa
 */
function randomWord(){
    const lang          = process.argv[3];
    const langPack      = require('./langs/'+lang+'.json');
    const pl            = Object.values(langPack['words']);
    const niepl         = Object.keys(langPack['words']);
    const randomIndex   = Math.floor(Math.random()*pl.length);

    console.log(pl[randomIndex]);

    process.stdin.on('data', () => {
        console.log(niepl[randomIndex]);
        process.exit(1);
    });
}

/**
 * Losowanie zdania
 */
function randomSentence(){
    const lang      = process.argv[3];
    const langPack  = require('./langs/'+lang+'.json');
    const pl            = Object.values(langPack['sentences']);
    const niepl         = Object.keys(langPack['sentences']);
    const randomIndex   = Math.floor(Math.random()*pl.length);

    console.log(pl[randomIndex]);

    process.stdin.on('data', () => {
        console.log(niepl[randomIndex]);
        process.exit(1);
    });
}

/**
 * Inicjalizacja, decyzja o wywolaniu okreslonej funkcji
 */
function init(){
    const mode = process.argv[2];
    switch(mode){
        case 'word':
            randomWord();
            break;
        case 'sentence':
            randomSentence();
            break;
        default:
            throw new Error('Nieznane polecenie');
    }
}

module.exports.init = init();