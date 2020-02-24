'use strict';


function mergeSort(arr){

  let length = arr.length ;
    
  if( length > 1){

    let mid = Math.floor(length/2) ;
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);
    console.log('left', left);
    console.log('right', right);
  

    mergeSort(left);
    mergeSort(right);

    console.log('aa', arr);
    return merge(left , right , arr);

  }
//   return;
//   return arr ;
}


function merge(left , right , arr){
  console.log('left', left);
  console.log('right', right);
//   console.log('arr', arr);
  
  let i = 0 ;
  let j = 0 ;
  let k = 0 ;

  while(i < left.length && j < right.length){

    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1 ; 
    }else{
      arr[k] = right[j];
      j = j + 1 ;
    }
    k = k + 1 ;
  }
  console.log('remaining', arr);

  if(i === left.length){
    return arr.concat(right);
  }else{
    console.log('remaining', arr);
    return arr.concat(left);
  }




//   if i = left.length
//   set remaining entries in arr to remaining values in right
// else
//   set remaining entries in arr to remaining values in left
}


console.log('output',mergeSort([8,4,23,42,16,15]));