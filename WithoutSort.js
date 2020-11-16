//Printing second largest and second smallest element of an array without sorting
let num1= Math.floor(Math.random()*900+100);
let num2= Math.floor(Math.random()*900+100);
let num3= Math.floor(Math.random()*900+100);
let num4= Math.floor(Math.random()*900+100);
let num5= Math.floor(Math.random()*900+100);
let num6= Math.floor(Math.random()*900+100);
let num7= Math.floor(Math.random()*900+100);
let num8= Math.floor(Math.random()*900+100);
let num9= Math.floor(Math.random()*900+100);
let num10= Math.floor(Math.random()*900+100);
let numArr=[num1,num2,num3,num4,num5,num6,num7,num8,num8,num9,num10];
console.log("Second largest element is: "+GetSecondLargest(numArr));
console.log("Second minimun number is "+GetSecondMinimum(numArr));
function GetSecondLargest(arr){
    let temp=0;  
    for ( i = 0; i < arr.length; i++)   
            {  
                for (let j = i + 1; j < arr.length; j++)   
                {  
                    if (arr[i] > arr[j])   
                    {  
                        temp = arr[i];  
                        arr[i] = arr[j];  
                        arr[j] = temp;  
                    }  
                }  
            }  
           return arr[arr.length-2];  
    }  
    function GetSecondMinimum(arr){
        let temp=0;  
        for ( i = 0; i < arr.length; i++)   
                {  
                    for (let j = i + 1; j < arr.length; j++)   
                    {  
                        if (arr[i] > arr[j])   
                        {  
                            temp = arr[i];  
                            arr[i] = arr[j];  
                            arr[j] = temp;  
                        }  
                    }  
                }  
               return arr[1];  
        }  

