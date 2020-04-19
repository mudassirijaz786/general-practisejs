//encapsulation

//1) using weakMaps and namespaces

/*
    one WeakMap can be used to store private members of multiple instances of the class
    Each value inside of the map is an object that we call namespace
    Weak maps guarantee that objects are only accessible using get method.
    WeakMap does not have any other methods for accessing its items(looping, Object.keys() and etc).
*/
let HedgehogWeakMaps = (function () {
  let privateProps = new WeakMap();

  class HedgehogWeakMaps {
    constructor(name) {
      this.name = name; // this is public
      privateProps.set(this, { speed: 1000 }); // this is private
    }

    zoom() {
      console.log(
        `${this.name} zooms with the speed of ${
          privateProps.get(this).speed
        } miles per second!`
      );
    }
  }

  return HedgehogWeakMaps;
})();

let sonicWeakMaps = new WeakMaps("Sonic");
sonicWeakMaps.zoom();

// 2) Using Symbols (kind of encapsulated)
/*
    Symbol is a type of primitive that is guaranteed to be unique.
    One of its primary purposes is to be used as key for dictionary collections.
*/
let HedgehogSymbols = (function () {
  const speed = Symbol();
  class HedgehogSymbols {
    constructor(name) {
      this.name = name;
      this[speed] = 1000; // this is not directly accessible
    }

    zoom() {
      console.log(
        `${this.name} zooms with the speed of ${this[speed]} miles per second!`
      );
    }
  }

  return HedgehogSymbols;
})();

let sonicSymbol = new HedgehogSymbols("Sonic");
sonicSymbol.zoom();
