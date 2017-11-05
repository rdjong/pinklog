const chalk = require('chalk')
const util = require('util')

pinklog = {
    log(txt) {
            if (process.env.VERBOSE !== 'false') {
                console.log(chalk.magenta(txt));
            }
    },
    ob(obj) {
        console.log(chalk.bold.blue('[OBJECT] : ')+chalk.blue(util.inspect(obj, {showHidden: false, depth: null})));
    },
    ok(txt) {
        console.log(chalk.bold.green('[OK] : ')+chalk.green(txt));
    },
    err(txt) {
            console.log(chalk.bold.red('[ERROR] : ')+chalk.red(txt));
    },
    if( bool, txt) {
        if(bool == true || bool == 1){
            console.log(chalk.bold.green('[TRUE] : ')+chalk.green(txt));
        }
        if(bool == false || bool == 0){
            console.log(chalk.bold.red('[FALSE] : ')+chalk.red(txt));
        }
        if(bool != true && bool != false && bool !=1 && bool !=0){
            console.log(chalk.bold.blue('[NO BOOL] : ')+chalk.blue(txt));
        }

    }
}
module.exports = pinklog;
