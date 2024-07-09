function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  
    for (let element of array) {    
      if (Array.isArray(element)) {
       sum += sumItems(element)
      } else {
        sum += element;
      }
    }

  return sum;
}

module.exports = sumItems;