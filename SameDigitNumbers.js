//Printing the numbers whose digits are same
const prompt= require('prompt-sync')({sigint:true});
let n= prompt("Enter the upper limit ");
n=Number(n);
for(let i=10;i<=n;i++){
let arr = GetDigits(i);
let count =0;
for(let j=0;j<arr.length;j++){
    if(arr[j]==arr[j+1])
    count++;
}
if(count==(arr.length-1))
console.log(i);
}
function GetDigits(num){
    let arr=[];
    let temp=0;
    while(num>0){
        temp=num%10;
        num=parseInt(num/10);
        arr.push(temp);
    }
    return arr;
}

 
  


