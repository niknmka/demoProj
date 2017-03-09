/**
 * Created by nmk on 10.02.17.
 */
//var x = 0;
//var y;
    module.exports = function (someArg, someFunc) { // Probably the value varaible should be passed here also

        // There is no any func to call, there is no any value to call
        // Probably someFunc have to be passed here as an argument and 
        // called instead: var callResult = someFunc(value)
        someFunc = func(value);
        arguments[0] = someArg+1;
        arguments[1] = someFunc; // If it

        // Some func has not be the value, it looks like it's callback that should return value.
        return [someArg,someFunc];
    }

