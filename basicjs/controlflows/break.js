// The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// expected output: 3
