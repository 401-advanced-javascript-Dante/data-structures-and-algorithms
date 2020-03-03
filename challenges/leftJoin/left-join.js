'use strict';


const leftJoin = (map1, map2) => {

  let result = [];
  let map1Keys = Object.keys(map1);

  for (let i = 0; i < map1Keys.length; i++) {
    if (map2[map1Keys[i]]) {
      result.push([map1Keys[i], map1[map1Keys[i]], map2[map1Keys[i]]]);
    } else {
      result.push([map1Keys[i], map1[map1Keys[i]],null]);
    }
  }
  return result;
};


module.exports = leftJoin ;