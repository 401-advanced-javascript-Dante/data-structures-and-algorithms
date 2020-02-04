'user strict';

function multiBracketValidation(string){
  let regexPopen = /\(/ ;
  let regexPclose = /\)/ ;
  
  let regexBstart = /\[/ ;
  let regexBend = /\]/ ;
  
  let regexCstart = /\{/ ;
  let regexCend = /\}/ ;
  
  let braCounter = 0 ;
  let curlyCounter = 0 ;
  let pranthCounter = 0 ;
  
  let theArr = string.split('');
  theArr.map(val => {
    if(regexPopen.test(val)){
      pranthCounter++ ;
    }else if(regexPclose.test(val)){
      pranthCounter-- ;
    }else if(regexBstart.test(val)){
      braCounter++ ;
    }else if(regexBend.test(val)){
      braCounter-- ;
    }else if(regexCstart.test(val)){
      curlyCounter++ ;
    }else if(regexCend.test(val)){
      curlyCounter-- ;
    }
  });
  

  if(pranthCounter === 0 && braCounter === 0 && curlyCounter === 0){
    return true ;
  }else{
    return false ;
  }
}

module.exports = multiBracketValidation ; 