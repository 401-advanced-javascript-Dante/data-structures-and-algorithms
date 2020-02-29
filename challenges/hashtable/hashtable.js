'use strict';

const ll = require('./linked-list.js');



class HashTable {

  constructor(size){
    this.size = size ;
    this.table = new Array(size);
  }


  hash(key){

    let hashedKey = key.split('').reduce((acc , val ,idx) => {
      return acc += val.charCodeAt(0) ;
    },0) * 19 % this.size ;

    return hashedKey ;
  }

  add(key , value){
    let hashed = this.hash(key);

    // Solves the collision problem
    if(!this.table[hashed]){
      ll.insert([key,value]);
      this.table[hashed] =ll ;
    }else{
      this.table[hashed].insert([key,value]);
    }
  }

  get(key){
    let hashed = this.hash(key);
    let result = this.table[hashed];


    if(result){
      return result.find(key) ;
    }else{
      return null;
    }
  }


  contain(key){
    let hashed = this.hash(key);
    let result = this.table[hashed];  

    if(result){
      return true ;
    }else{
      return false;
    }
  }




}

// let table = new HashTable(100) ;
// console.log(table);
// console.log(table.add('hot' , 26 ));
// console.log(table);
// console.log('get', table.get('bobs'));
// table.table.map(val => {
//   console.log(val);
// });

module.exports = HashTable ;