// Define 4 const called: append, prepend, removeLast and removeFirst, and set all to an initial value of ["Milo", "Otis", "Garfield"]

const append = ["Milo", "Otis", "Garfield"];
const prepend = append.slice();
const removeLast = append.slice();
const removeFirst = append.slice();

append.push('Odie');
removeLast.pop();
removeFirst.shift();
prepend.unshift('Odie');
