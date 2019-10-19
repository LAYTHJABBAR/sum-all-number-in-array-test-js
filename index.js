function sumItems(array) {
  let sum = 0;
for (let item in array){
    if (Array.isArray(array[item]) === false) {
     sum += array[item]
} else {
  sum += sumItems(array[item])
} 
} return sum;
}

module.exports = sumItems;


console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]))
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]))