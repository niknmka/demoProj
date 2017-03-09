/**
 * Created by nmk on 10.02.17.
 */
//var x = 0;
//var y;
    module.exports = function (someArg, callSomeFunc, value) { // Probably the value variable should be passed here also

        // There is no any func to call, there is no any value to call
        // Probably someFunc have to be passed here as an argument and 
        // called instead: var callResult = someFunc(value)
        someArg = someArg + 1;
        var callResult = callSomeFunc(value);
        var array = [someArg, callResult]
        // Some func has not be the value, it looks like it's callback that should return value.
        return array;
    }

