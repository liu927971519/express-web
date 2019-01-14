// 接收命令行参数, 提供基础信息提示功能
const commander = require('commander');
// 执行shell命令
const shell = require('shelljs');
// 获取路径
const path = require('path');
// 读取package.json
const { version } = require('../package.json');
const filePath = path.join(__dirname, '../', 'server.js');
commander
  .version(version, '-v, --version', '查看版本号')

commander
  .command('dev')
  .description('开发_启动服务')
  .action(() => {
    shell.exec(`node ${filePath}`);
  });

commander
  .command('start')
  .option('-n, --name <name>', '项目名')
  .description('生产_启动服务')
  .action((cmd) => {
    if (typeof cmd.name === 'string') {
      shell.exec(`pm2 start ${filePath} --name ${cmd.name}`);
      return
    }
    shell.exec(`pm2 start ${filePath}`);
  });

commander
  .command('stop')
  .option('-n, --name <name>', '项目名')
  .description('停止服务')
  .action((cmd) => {
    if (typeof cmd.name === 'string') {
      shell.exec(`pm2 stop ${cmd.name} && pm2 delete ${cmd.name}`);
      return
    }
    shell.exec('pm2 stop server && pm2 delete server');
  });

// 读取参数
commander.parse(process.argv);
