function randomMinMax(min,max){
   const minRand = (max-min)*(Math.random()) + min ;
   return minRand;
}

// console.log(randomMinMax(3,5));

// integers only 
function randomMinMaxInt(min,max){
       const minRand = (((max-min)*(Math.random()))+ min).toFixed(0);
          return minRand;
          }

          console.log(randomMinMaxInt(3,5));
          
