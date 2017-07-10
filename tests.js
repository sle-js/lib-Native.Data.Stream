const Unit = require("./test/Lib").Unit;

require("./test/StreamsTest")
    .then(Unit.showErrors)
    .then(Unit.showSummary)
    .then(Unit.setExitCodeOnFailures);