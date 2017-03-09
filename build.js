/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Created by nmk on 10.02.17.
 */
//var x = 0;
//var y;
    module.exports = function (someArg, someFunc) {

        someFunc = func(value);
        arguments[0] = someArg+1;
        arguments[1] = someFunc;

        return [someArg,someFunc];
    }



/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Created by nmk on 1.03.17.
 */


    module.exports = function (value) {

        return (value + 1);

    }


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Created by nmk on 10.02.17.
 */


    module.exports = function (value) {

        return (value + 2);

    }



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by nmk on 7.02.17.
 */


var clickCounter = __webpack_require__(0);
var count1 = __webpack_require__(1);
var count2 = __webpack_require__(2);


    document.getElementById("p1").style.color = "blue";
    document.getElementById("p1").style.font.size = "large";
    document.getElementById("p1").style.background = "";
    document.getElementById("button").style.color = "red";

function mDown() {
    "button".style.backgroundColor = "#1ec5e5";
}

function mUp() {
    "button".style.backgroundColor = "#D94A38";
}

var getTime = function () {
    return (new Date().getHours() + ':' + new Date().getMinutes());
}
    alert(getTime());


    //window.count = 0;
    //window.clickNumber = 0;
    var count = 0;
    var clickNumber = 0;
span = document.getElementById('span');
span2 = document.getElementById('span2');

window.doAction = function () {

    clickNumber += clickCounter.arguments[0];
    //count = clickCounter.arguments[1];
    clickCounter(clickNumber % 2 == 0 ? count1(count) : count2(count));
    console.log(count, clickNumber);
    span.innerHTML = count;
    span2.innerHTML = clickNumber;

}




/***/ })
/******/ ]);