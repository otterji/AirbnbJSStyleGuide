function getKey(k) {
  return `a key named ${k}`;
}

const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};

const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;


