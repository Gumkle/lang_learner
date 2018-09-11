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

    if(process.argv[4] == "helper"){
        var i = 0;  // dots counter
        var interval = setInterval(function() {
            process.stdout.clearLine();  // clear current text
            process.stdout.cursorTo(0);  // move cursor to beginning of line
            i++;
            var dots = new Array(i + 1).join("*");
            process.stdout.write(dots);  // write text
            if(i > 5){
                console.log('\n');
                clearInterval(interval);
                console.log(niepl[randomIndex]);
            }
        }, 500);
    }

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

    if(process.argv[4] == "helper"){
        var i = 0;  // dots counter
        var interval = setInterval(function() {
            process.stdout.clearLine();  // clear current text
            process.stdout.cursorTo(0);  // move cursor to beginning of line
            i++;
            var dots = new Array(i + 1).join("*");
            process.stdout.write(dots);  // write text
            if(i > 5){
                console.log('\n');
                clearInterval(interval);
                console.log(niepl[randomIndex]);
            }
        }, 500);
    }
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