const yargs = require('yargs');
yargs.version('1.1.0');
yargs.command({
  command: 'add',
  describe: 'a+b',
  builder: {
    a: {
      describe: 'first number',
      demandOption: true,
      type: 'number',
    },
    b: {
      describe: 'second number',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    console.log(argv.a + argv.b);
  },
});
yargs.command({
  command: 'sub',
  describe: 'a-b',
  builder: {
    a: {
      describe: 'first number',
      demandOption: true,
      type: 'number',
    },
    b: {
      describe: 'second number',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    console.log(argv.a - argv.b);
  },
});
yargs.command({
  command: 'mult',
  describe: 'a*b',
  builder: {
    a: {
      describe: 'first number',
      demandOption: true,
      type: 'number',
    },
    b: {
      describe: 'second number',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    console.log(argv.a * argv.b);
  },
});
yargs.command({
  command: 'pow',
  describe: 'a**2',
  builder: {
    a: {
      describe: 'first number',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    console.log(argv.a ** 2);
  },
});
console.log(yargs.argv);
