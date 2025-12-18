let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); 4

styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll");
arrM = (styles.length -1)/2;
styles[arrM] ="Classics";
styles.shift("Jazz");
styles.unshift("Reggae");
styles.unshift("Rap");
console.log(styles);


const maxArr = (arrNum) =>{
        for (let num in arrNum){
            if(num >0){
                let pArray = [];
               pArray = pArray.push(1);
            }
            else{
                return 0;
            } 
        }
}


arr = [2,3,4,-1,1,-1]
    if(arr[3] <  0 ){
        let sum =0;
        let newArr = []
        for(i = 0; i < arr.length; i++){
           sum += arr[i]; 
           newArr.push(sum);
        }
       newArr

        console.log(`The sum is ${newArr[(newArr.length)-1]} and the maximal array is ${newArr}`) ;
    }


const maximalArray = (arr) =>{
    sec_arr = [2,3,4,-1,1,-1,-2];
           let sumArr =0;
let biggestSum = []
        for(i = 0; i < sec_arr.length; i++){
           sumArr += sec_arr[i]; 
           biggestSum.push(sumArr);
        }
        console.log(biggestSum)
        let max = biggestSum[0];
        for(i=0; i<biggestSum.length ; i++){
            if (biggestSum[i] > max){
                max = biggestSum[i];
            }
        }

        console.log(max)
        return max;

}

    












