//Rolling a dice till 10 is reached and printing the maximum and minimum occurences
let diceMap = new Map();
let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
while(count1<10 && count2<10 && count3<10 && count4<10 && count5<10 && count6<10){
    let dice = Math.floor(Math.random()*6)+1;
    switch(dice){
        case 1:count1++; 
        diceMap.set(1,count1);
        break;
        case 2: count2++;
        diceMap.set(2,count2);
        break;
        case 3: count3++;
        diceMap.set(3,count3);
        break;
        case 4: count4++;
        diceMap.set(4,count4);
        break;
        case 5: count5++;
        diceMap.set(5,count5);
        break;
        case 6: count6++;
        diceMap.set(6,count6);
        break;
        default: break;
    }
}
let minValue= Math.min(...diceMap.values());
for (let keys of diceMap.keys()) {
    let value=diceMap.get(keys);
    if(value==10){
        console.log("Maximum occurence "+keys);
    }
    if(minValue==value){
        console.log("Minimum occurence "+keys);
    }
}


 

