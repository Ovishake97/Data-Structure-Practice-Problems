//Printing the integers with a sum of zero
let arr = [1,-1,2,0,-3];
arr.sort((a,b)=>a-b);
let found=false;
for (let i=0; i<arr.length-1; i++) 
    { 
        let l=i+1;
        let r = arr.length - 1; 
        let x = arr[i]; 
        while (i+1 < r) 
        { 
            if (x + arr[l] + arr[r] == 0) 
            { 
                console.log(x);
                console.log(arr[l]);
                console.log(arr[r]);
                console.log("-----");
                l++; 
                r--; 
                found = true; 
            } 
   
            else if (x + arr[l] + arr[r] < 0) 
                l++; 
  

            else
                r--; 
        } 
    } 
  
    if (found == false) 
        console.log("No such triplets") 
 
  


