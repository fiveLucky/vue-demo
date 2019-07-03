const path = require('path');

// 命令执行的目录 commondPath
const CP = p => path.resolve(process.cwd, p)
// 文件所在的目录 dirPath
const DP = p => path.resolve(__dirname, p)

module.exports = { CP, DP }


