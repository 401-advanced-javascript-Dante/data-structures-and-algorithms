'use strict';

function repeated(string){

  let arr = string.toLowerCase().split(' ');

  for(let i = 1 ; i < arr.length ; i ++){
    let pre = i-1 ;
    let current = arr[i];
   
    while(pre >= 0 ){

      if(current === arr[pre]){
        i = arr.length ;
        return current;
      }
      pre--;
    }

  }

  return 'None Repeated!' ;

}

// console.log(repeated('HI hi he hi he'));
module.exports = repeated ;