const has = Object.prototype.hasOwnProperty;
console.log(has.call(object, key));

import has from 'has';
console.log(has(object, key));

console.log(object.hasOwnProperty(key));

console.log(Object.prototype.hasOwnProperty.call(object, key));

