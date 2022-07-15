function deepEquale(valueOne, valueTwo) {
   const valueOneKeys = Object.keys(valueOne);
   const valueTwoKeys = Object.keys(valueTwo);

   if (lengthDiff(valueOneKeys, valueTwoKeys)) return false;
   if (isLengthZone(valueOneKeys, valueTwoKeys)) return true;

   for (let i = 0; i < valueOneKeys.length; i++) {
      const key1 = valueOneKeys[i];
      const key2 = valueTwoKeys[i];
      if (!compareValues(valueOne[key1], valueTwo[key2])) {
         return false;
      }
   }
   return true;
}

function lengthDiff(obj1Keys, obj2Keys) {
   return obj1Keys.length !== obj2Keys.length;
}

function isLengthZone(obj1Keys, obj2Keys) {
   return obj1Keys.length === 0 && obj2Keys.length === 0;
}

function compareValues(valueOne, valueTwo) {
   if (!isPrimitive(valueOne, valueTwo)) {
      return deepEquale(valueOne, valueTwo);
   }
   return comparePrimitives(valueOne, valueTwo);
}

function isPrimitive(val1, val2) {
   if (typeof val1 === "string" && typeof val2 === "string") {
      return true;
   }
   if (typeof val1 === "number" && typeof val2 === "number") {
      return true;
   }
   return false;
}

function comparePrimitives(value1, value2) {
   return value1 === value2;
}

exports.deepEquale = deepEquale;
