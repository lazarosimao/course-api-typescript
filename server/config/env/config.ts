
// let extension: string = 'js';
// if(process.env.NODE_ENV == 'development') {
//   extension = 'ts';
// }

// console.log(process.env.NODE_ENV)
module.exports = () => require(`../env/${ process.env.NODE_ENV }.env.js`);