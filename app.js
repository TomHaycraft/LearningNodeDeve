console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes =  require("./notes.js");

var filiteredArray = _.uniq(["thomas", 1, "thomas", 1, 2, 3, 4]);
console.log(filiteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Thomas'));

// var res = notes.add(9,-2);
// console.log(res);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
//
// fs.appendFileSync(
//   "greetings.txt", `Hello ${user.username}! You are ${notes.age}.`
// );
