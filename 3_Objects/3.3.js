const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  },
};


const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};

// properties
var foo = {
  x: x,
  y: y,
  z: z,
};

// methods
var foo = {
  a: function () { },
  b: function () { }
};

/*eslint-env es6*/

// properties
var foo = { x, y, z };

// methods
var foo = {
  a() { },
  b() { }
};

var ShinHJ = {
  w: function () { },
  x: function* () { },
  [y]: function () { },
  z: z
};

var ShinHJ = {
  w() { },
  *x() { },
  [y]() { },
  z
};

