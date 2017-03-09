/**
 * Created by nmk on 9.02.17.
 */
var x = function() {
    var y = function() {
        return ++y.c;
    }
    y.c = 0;
    return y;
} ()
console.log(x);
console.log(x);
