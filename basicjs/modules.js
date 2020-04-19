// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules

// CommonJS (Used in Node)
// Exporting
module.exports.Cirlce = Circle;
// Importing
const Circle = require("./circle");

// ES6 Modules (Used in Browser)
// Exporting
export class Square {}
// Importing
import { Square } from "./square";

// We use Babel to transpile our modern JavaScript code
// into code that browsers can understand (typically ES5).

// We use Webpack to combine our JavaScript files into a
// bundle.

//so tips and tricks shortly

// import defaultExport from "module-name";
// import * as name from "module-name";
// import { export1 } from "module-name";
// import { export1 as alias1 } from "module-name";
// import { export1 , export2 } from "module-name";
// import { foo , bar } from "module-name/path/to/specific/un-exported/file";
// import { export1 , export2 as alias2 , [...] } from "module-name";
// import defaultExport, { export1 [ , [...] ] } from "module-name";
// import defaultExport, * as name from "module-name";
// import "module-name";
// var promise = import("module-name");
