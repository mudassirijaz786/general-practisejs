// The RegExp object is used for matching text with a pattern.

let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr);

let text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
let lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

let s = "Please yes\nmake my day!";
s.match(/yes.*day/);
// Returns null
s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]

let textInRussian = "Образец text на русском языке";
let regex = /[\u0400-\u04FF]+/g;

let match = regex.exec(textInRussian);
console.log(match[0]); // logs 'Образец'
console.log(regex.lastIndex); // logs '7'

let match2 = regex.exec(textInRussian);
console.log(match2[0]); // logs 'на' [did not log 'text']
console.log(regex.lastIndex); // logs '15'

// and so on

let url = "http://xxx.domain.com";
console.log(/[^.]+/.exec(url)[0].substr(7)); // logs 'xxx'

getVowels = (str) => {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
};

console.log(getVowels("continue"));
// expected output: 4
