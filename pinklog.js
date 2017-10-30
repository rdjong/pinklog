const chalk = require('chalk')
const util = require('util')

pinklog = {
    log(txt) {
            if (process.env.VERBOSE !== 'false') {
                console.log(chalk.magenta(txt));
            }
    },
    ob(obj) {
        console.log(chalk.blue(util.inspect(obj, {showHidden: false, depth: null})));
    },
    ok(txt) {
        console.log(chalk.green(txt));
    },
    err(txt) {
            console.log(chalk.bold.red(txt));
    }
}
module.exports = pinklog;
