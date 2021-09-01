module.exports = function mpg123(path) {
    const exec = require('child_process').exec;
    exec(`mpg123 ${path}`);

    return {
        mpg123
    };
};