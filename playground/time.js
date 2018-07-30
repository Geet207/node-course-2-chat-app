// // jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

var moment = require('moment');

// var date = moment();
// date.add(2, 'years');
// console.log(date.format('MMM Do, YYYY'));

var someTimeStamp =moment().valueOf();
console.log(someTimeStamp);

var createdAt =1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));