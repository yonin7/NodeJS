const yargs = require('yargs');
const users = require('./users.js');

// Customize yargs version
yargs.version('1.1.0');

//create
yargs.command({
  command: 'add',
  describe: 'create a new user',
  builder: {
    name: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'User Email',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    users.createUser(argv.name, argv.email);
  },
});

//remove
yargs.command({
  command: 'remove',
  describe: 'Remove a user',
  builder: {
    id: {
      describe: 'User ID',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    users.removeUser(argv.id);
  },
});

//list
yargs.command({
  command: 'list',
  describe: 'List Users',
  handler() {
    users.listUsers();
  },
});

//read
yargs.command({
  command: 'read',
  describe: 'Read a user',
  builder: {
    id: {
      describe: 'User ID',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    users.readUser(argv.id);
  },
});

//update
yargs.command({
  command: 'update',
  describe: 'update a user',
  builder: {
    id: {
      describe: 'User ID',
      demandOption: true,
      type: 'string',
    },
    name: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'User Email',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.parse();
