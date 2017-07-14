const Assertion = require("./Lib").Assertion;
const Unit = require("./Lib").Unit;

const Stream = require("../index.js");


const streamOfNumbers = n =>
    Stream.Cons(n)(() => streamOfNumbers(n + 1));


module.exports =
    Unit.Suite("Native.Data.Streams")([
        Unit.Suite("isEmpty")([
            Unit.Test("given Nil should return true")(
                Assertion.isTrue(Stream.Nil.isEmpty())
            ),
            Unit.Test("given stream of numbers should return false")(
                Assertion.isTrue(!streamOfNumbers(0).isEmpty())
            )
        ])
    ]);