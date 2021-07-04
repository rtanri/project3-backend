import {
  isACat,
  addNumbers,
  introduction,
  introducePerson,
  dumpObject,
  dumpStringOrNumber,
} from "./basic-types";

console.log(isACat("cat"));
console.log(isACat("dog"));
console.log("");

console.log(addNumbers(1, 2));
console.log("");

console.log(introduction("Jack"));
console.log("");

introducePerson("Molly");
console.log("");

console.log(dumpObject("object", {}));
console.log("");

console.log(dumpStringOrNumber("foo"));
console.log(dumpStringOrNumber(10));
