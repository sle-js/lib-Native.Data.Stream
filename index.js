function StreamType(content) {
    this.content = content;
}


const Nil =
    new StreamType([0]);


const Cons = x => xs =>
    new StreamType([1, x, xs]);


StreamType.prototype.isEmpty = function() {
    return this.content[0] === 0;
};


module.exports = {
    Cons, Nil
};