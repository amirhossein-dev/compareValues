const { deepEquale } = require("./main");

// console.log(deepEquale({}, {}));
console.log(deepEquale({ a: 1 }, { a: 1 }));
console.log(deepEquale({ a: 1 }, { a: 2 }));
// console.log(deepEquale({ a: 1, obj: { b: 2 } }, { a: 1, obj: { b: 2 } }));
// console.log(deepEquale({ a: 1212 }, { a: 1212 }));

// console.log("FALSE");

// console.log(deepEquale({}, { a: 2 }));
// console.log(deepEquale({ a: 1 }, { a: 43 }));
// console.log(deepEquale({ a: 1, obj: { b: 3 } }, { a: 1, obj: { b: 2 } }));
// console.log("OMS Bourse Test");
// console.log(deepEquale({ a: 1212 }, { a: 1222 }));
