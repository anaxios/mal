let READ = x => x;
let EVAL = x => x;
let PRINT = x => x;
let rep = x => PRINT(EVAL(READ(x)));

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'user> '
});

rl.prompt();

rl.on('line', (line) => {

    console.log(rep(line));


  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
