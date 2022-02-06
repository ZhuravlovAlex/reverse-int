module.exports = function reverse (n) {
  let string = n.toString();
  let array = string.split("");
  let arrayReverse = array.reverse();
  let newString = arrayReverse.join("");
 
 
  let nReverse = parseInt(newString, 10);
  return nReverse
}
