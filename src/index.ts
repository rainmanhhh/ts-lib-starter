import { Command } from 'commander'
import * as path from 'path'
import * as fs from 'fs'
const packageJsonPath = path.join(__dirname, 'package.json');
const packageContent = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

const program = new Command()

program
  .version(packageContent.version)
  .description('My CLI tool description')
// .option('-p, --peppers <number>', 'add peppers (default 2)')
// .allowUnknownOption()
// .command('setup', 'setup CLI tool')
// .action(() => {
//   // Do something
// })

program.parse(process.argv)
