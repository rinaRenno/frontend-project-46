import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.');

program
    .argument('<filepath1>', 'user to login')
    .argument('<filepath2>', 'password for user, if required', 'no password given')
    .action((username, password) => {
        console.log('username:', username);
        console.log('password:', password);
      })
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .helpOption('-h, --help', 'output usage information');

program.parse();
