var myVar = 'my variable';
function myFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; });
var Mathematic = (function () {
    function Mathematic() {
    }
    Mathematic.prototype.sum = function (x, y) {
        return x + y;
    };
    return Mathematic;
}());

