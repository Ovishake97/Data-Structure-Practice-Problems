//Printing the prime factors of a number
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number=Number(number);
let result= new Array();
console.log("Prime factors are: "+GetPrimeFactors(number));
function GetPrimeFactors(num) {
    for (let i = 2; i <= num; i++)
    {
      while (isPrime(i) && num % i === 0) 
      {
         result.push(i);
        num /= i;
      }
    }
    return result;
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0)
       return false;
    }
    return true;
  }

