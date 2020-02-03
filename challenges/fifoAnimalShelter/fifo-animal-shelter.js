'use strict';
class Animal {
  constructor(name){
    this.animal = name ;
    this.next = null;
        
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.back = null;
  }


  enqueue(animal){
    let newAnimal = new Animal(animal);
    // let nextAnimals = this.front ;
    if(this.front === null){
      this.front = newAnimal ;
      this.back = newAnimal ;
      return newAnimal.animal ;
    }else{

      // this.back = newAnimal ;
      this.back.next = newAnimal;
      this.back = this.back.next ;
      console.log('this front',this.front);
      console.log('this',this);

      return newAnimal.animal ;      
    }  

  }

  dequeue(){
    if(this.front === null){
      return null;
    }else{
      let popOut = this.front.animal ;
      this.front = this.front.next ;
      return popOut ;
    } 
        
  }
}


module.exports = AnimalShelter ;