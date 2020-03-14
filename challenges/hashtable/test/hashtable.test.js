'use strict';

const HashTable = require('../hashtable.js');

describe('HashTable', ()=> {


  let table ;
  beforeEach(()=>{
    table = new HashTable(100) ;
  });

  it('Adding a key/value to your hash-table results in the value being in the data structure',()=>{

    table.add('level', 99);
    expect(table.contain('level')).toBeTruthy();
  });


  it('Retrieving based on a key returns the value stored',()=>{

    table.add('level', 99);
    expect(table.get('level')).toBe(99);
  });


  it('Successfully returns null for a key that does not exist in the hash-table',()=>{

    table.add('level', 99);
    expect(table.get('test')).toBe(null);
  });


  it('Successfully handle a collision within the hash-table',()=>{

    table.add('level', 99);
    table.add('listen', 'aha');
    table.add('silent', 'works');

    expect(table.get('listen')).toBe('aha');
    expect(table.get('silent')).toBe('works');


  });

  it('Successfully hash a key to an in-range value',()=>{
    let test = table.hash('HakonaMatata');
    expect(test < 100).toBe(true);
  });

  // DanTe SignOut !

});

