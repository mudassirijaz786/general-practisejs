//space complexity is basically about auxiliary space complexity
//rule of thumb is following
/*
    1)most primitive types are constant space
    2)string requires O(n) space where n is string length
    3)reference type requires O(n) space where n is length (for array) or number of keys(for objects)
*/

sumF1 = (array) => {
  let total = 0; //primitive type(Nymber) take constance space O(1)
  if (array instanceof Array) {
    //again primitive type(Nymber) below i = 0 which takes constance space O(1)
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
};

doubleF2 = (array) => {
  let newArray = [];
  if (newArray instanceof Array) {
    for (let i = 0; i < array.length; i++) {
      newArray.push(2 * array[i]);
    }
    //reference type(Array) take constance space O(n)
    return newArray;
  }
};
