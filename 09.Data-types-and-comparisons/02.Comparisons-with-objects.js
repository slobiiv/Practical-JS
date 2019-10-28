/* 
  {} === {} // false 
  [1,2,3] = [1,2,3] // false

  When comparing objects, arrays ... JavaScript doesn't care if they 'look' exactly the same(same value), but if we are comparing the SAME objects.
      {} - memory address 1
      {} - memory address 2
      {} - memory address 3 
      * When you create and object, it saves at a unique location in memory
          var houseA = {};
          var houseB = {};
          houseA === houseB; // false
          houseA === houseA; // true

*/
