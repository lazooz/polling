
exports.parseCommand = function (fullCommand) {
    cmdArray = fullCommand.trim().split(/ +/);
    command = cmdArray[1];
    return typeof command === 'string' ? command.toLowerCase() : null;
};
exports.parseCreatePollCmd  = function  (command){
    var index = command.search("q:");
    res = command.substr(index+2).split(token);
    var res2 = [];
    res.forEach(function (phrase, index, theArray) {
        theArray[index] = phrase.trim();
        pharse = phrase.trim();
        res2.push(phrase.trim());
    });
    return res;
};

