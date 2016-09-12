const args = process.argv.slice(2);
var sum = args.reduce((pr, nv) => parseInt(pr) + parseInt(nv));
console.log(sum);
