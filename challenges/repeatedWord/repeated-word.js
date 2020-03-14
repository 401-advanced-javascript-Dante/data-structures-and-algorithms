'use strict';



// Big O(n)

// function repeated(string){
//   let arr = string.toLowerCase().split(' ');
//   let map = {} ;

//   for(let i=0 ; i < arr.length ; i++){
//     if(map[arr[i]]){
//       return arr[i];
//     }else{
//       map[arr[i]] = arr[i];
//     }
//   }
//   return 'Unique!';
// }
// console.log(repeated('hi dante hi dante'));





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

module.exports = repeated ;