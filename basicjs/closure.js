a = () => {
  let grandFather = "grandpa";
  return (b = () => {
    let father = "father";
    return (c = () => {
      let son = "son";
      return `${grandFather} > ${father} > ${son}`;
    });
  });
};

const funcAResult = a(); // return b function
// by now 'a' funciton will removed from call stack but grandFather variable will not be removed by garbage collection as it is refrenced by one of child function
const funcBResult = funcAResult(); // returnc function c
// by now 'b' funciton will removed from call stack but father variable will not be removed by garbage collection as it is refrenced by one of child function
funcBResult(); // will print 'grandpa > father > son'
console.log(funcBResult());
