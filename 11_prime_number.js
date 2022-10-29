function primeNumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
      if(numberToCheck%index==0) {
          return false;
      }
    }
    return true;
  }

  console.log(primeNumber(11));
  console.log(primeNumber(9));
  console.log(primeNumber(29));
  console.log("---------------------------");

  const array=[6,7,11,23,46,77];
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
  }