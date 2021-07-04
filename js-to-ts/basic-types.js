"use strict";
exports.__esModule = true;
exports.dumpStringOrNumber = exports.dumpObject = exports.introducePerson = exports.introduction = exports.addNumbers = exports.isACat = void 0;
var isACat = function (animal) { return animal === "cat"; };
exports.isACat = isACat;
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
var introduction = function (name) { return "Hello " + name; };
exports.introduction = introduction;
var introducePerson = function (name) {
    return console.log(exports.introduction(name));
};
exports.introducePerson = introducePerson;
var dumpObject = function (type, obj) {
    return type + ":" + JSON.stringify(obj);
};
exports.dumpObject = dumpObject;
var dumpStringOrNumber = function (info) { return "value " + info; };
exports.dumpStringOrNumber = dumpStringOrNumber;
/* ============================ */
// source - https://www.youtube.com/watch?v=j92fxPpFaL8&ab_channel=JackHerrington
