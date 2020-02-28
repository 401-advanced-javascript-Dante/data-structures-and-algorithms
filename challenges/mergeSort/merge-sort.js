'use strict';


function mergeSort(arr){

  let length = arr.length ;
    
  if( length > 1){

    let mid = Math.floor(length/2) ;
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);

    return merge(left , right , arr);
  }
}


function merge(left , right , arr){  

  let i = 0 ;
  let j = 0 ;
  let k = 0 ;

  while(i < left.length && j < right.length){

    if(left[i] <= right[j]){
      arr[k] = left[i];
      i ++ ; 
    }else{
      arr[k] = right[j];
      j ++ ;
    }
    k ++ ;
  }

  if(i === left.length){
    while(j < right.length){
      arr[k]=right[j];
      j ++ ;
      k ++ ;
    }
  }else{
    while(i < left.length){
      arr[k]=left[i];
      i ++;
      k++ ;
    }
  }

  return arr ;
}


console.log(mergeSort([5,4,3,2,1]));
module.exports = mergeSort ;