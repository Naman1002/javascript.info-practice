let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
// console.log( fruits.length ); 4

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