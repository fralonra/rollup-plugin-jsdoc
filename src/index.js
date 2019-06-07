import { spawn } from 'child_process'
import path from 'path'

export default function jsdocPlugin (options = {}) {
  const args = options.args || []
  const conf = options.config || 'jsdoc.json'
  const jsdocRoot = path.resolve(__dirname, '../..', '.bin')

  return {
    name: 'jsdoc',
    buildEnd () {
      let childProcess; let bin; let opt = {}
      if (conf) {
        args.push('-c')
        args.push(conf)
      }
      if (process.platform === 'win32') {
        bin = 'jsdoc.cmd'
        opt.cwd = jsdocRoot
      } else {
        bin = path.join(jsdocRoot, 'jsdoc')
      }
      childProcess = spawn(bin, args, opt)
      childProcess.stdout.on('data', function (data) { console.log('\x1b[33m%s\x1b[0m', '[JSDOC] ' + data.toString()) })
      childProcess.stderr.on('data', function (data) { console.error('\x1b[31m%s\x1b[0m', '[JSDOC] ' + data.toString()) })
      childProcess.on('close', function () {
        console.log('\x1b[33m%s\x1b[0m', 'JsDoc Generated')
      })
    }
  }
}
