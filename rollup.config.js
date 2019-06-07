import pkg from './package.json'

export default {
	input: 'src/index.js',
	plugins: [],
	external: Object.keys(pkg.dependencies).concat(['child_process', 'path']),
	output: [{
    format: 'es',
    file: pkg.module,
    sourcemap: true
  }, {
    format: 'cjs',
    file: pkg.main,
    sourcemap: true
  }]
}