const evalList = { student1: 1, student2: 2 };
const copy = Object.assign(evalList, { student3: 3 });
delete copy.student1;

const evalList = { student1: 1, student2: 2 };
const copy = { ...evalList, student3: 3 };

const { student1, ...editedEvalList } = copy;

{ student1: 1, student2: 2 } -> { student2: 2, student3: 3 }

