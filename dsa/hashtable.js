//1) hash table
/*
    Hash tables are used to store key-value pairs.
    They are like arrays, but the keys are not ordered.
    Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

    Nearly every programming language has some sort of hash table data structure
    Because of their speed, hash tables are very commonly used!

    existing implementations of hashing
        Python has Dictionaries
        JS has Objects and Maps*
        Java, Go, & Scala have Maps
        Ruby has Hashes

    Objects have some restrictions, but are basically hash tables
*/

//1.a) hash table
/*
    Imagine we want to store some colors
    [ "#ff69b4","#ff4500","#00ffff" ] 
    Not super readable!  What do these colors correspond to?

    It would be nice if instead of using indices to access the colors, we could use more human-readable keys.
    orangered - #ff4500
    pink      - #ff69b4
    cyan      - #00ffff

    so, colors["cyan"] is way better than colors[2]

    problem occured 
    How can we get human-readability and computer readability?
    Computers don't know how to find an element at index pink!

    but solution is 
    Hash tables to the rescue!
*/

//1.b) hash

/*
    To implement a hash table, we'll be using an array.
    In order to look up values by key, we need a way to convert keys into valid array indices.
    A function that performs this task is called a hash function.

    what makes a good hash
        Fast (i.e. constant time)
        Doesn't cluster outputs at specific indices, but distributes uniformly
        Deterministic (same input yields same output)

    The prime number in the hash is helpful in spreading out the keys more uniformly
    It's also helpful if the array that you're putting values into has a prime length
    You don't need to know why. (Math is complicated!) But here are some links if you're curious
*/

//1.c) collision
/*
    Even with a large array and a great hash function, collisions are inevitable. 
    There are many strategies for dealing with collisions, but we'll focus on two:
        Separate Chaining
            With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
            This allows us to store multiple key-value pairs at the same index.
        Linear Probing
            With linear probing, when we find a collision, we search through the array to find the next empty slot.
            Unlike with separate chaining, this allows us to store a single key-value at each index.
*/

//1.d) set/get
/*
    set
        Accepts a key and a value
        Hashes the key
        Stores the key-value pair in the hash table array via separate chaining
    get
        Accepts a key
        Hashes the key
        Retrieves the key-value pair in the hash table
        If the key isn't found, returns undefined
*/

//1.e) key/values
/*
    keys
        Loops through the hash table array and returns an array of keys in the table
    values
        Loops through the hash table array and returns an array of values in the table
*/

//bigO (average case) of hash
/*
    Insert   - O(1)
    Deletion - O(1)
    Access   - O(1)
*/

//hash functions
//good  O(1)
//worst O(n)

// more about hashing
/*
    Hash tables are collections of key-value pairs
    Hash tables can find values quickly given a key
    Hash tables can add new key-values quickly
    Hash tables store data in a large array, and work by hashing the keys
    A good hash should be fast, distribute keys uniformly, and be deterministic
    Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
    When in doubt, use a hash table!
*/

//code hashing

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
