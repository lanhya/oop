function getLargestNumber(numA:number, numB:number) {
    if (numA >= numB){
      return numA;
    } else {
      return numB;
    }
  }
  let a = 40;
  let b = 50;
  console.log("The largest number is " + getLargestNumber(a,b));
  
  
  let c = 10;
  let d = 5;
  console.log("The largest number is " + getLargestNumber(c,d));
  
  
  let e = 10;
  let f = 5;
  console.log("The largest number is " + getLargestNumber(e,f));


  //c2
  function getWordRevers(words: string[]): string[] {
    let result: string[] = [];
    for (let i = words.length - 1; i >= 0; i--) {
      result.push(words[i]);
    }
    return result;
  }
