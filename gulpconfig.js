/* ----- *
 * RUTAS *
 * ----- */

 // Fichero de configuración
var setting_file_name = 'setting',
	setting_file = setting_file_name + '.json',
	setting_url = './' + setting_file,
	setting = require(setting_url),
	data = require('gulp-data');

// Rutas | Base
var basePaths = {
	dev: 'dev/',
	app: 'app/',
	tasks: '../../',
	node: 'node_modules/'
};

// Rutas | Específicas
module.exports = {
	setting: basePaths.tasks + setting_file,
	html: {
		in: basePaths.dev + 'jade/**/!(_)*.jade',
		watch: basePaths.dev + 'jade/**/*.jade',
		out: basePaths.app
	},
	sass: {
		in: basePaths.dev + 'sass/**/*.scss',
		var: basePaths.dev + 'sass/variables/setting',
		out: basePaths.app + 'css',
		dir: basePaths.dev + 'sass/',
		min: basePaths.app + 'css/min',
		setting: setting_url,
		name: 'styles.css'
	},
	js: {
		in: basePaths.dev + 'js/*.js',
		out: basePaths.app + 'js',
		min: basePaths.app + 'js/min',
		vendors: {
			in: basePaths.dev + 'js/vendors/*.js',
			out: basePaths.app + 'vendors'
		}
	},
	images: {
		in: basePaths.dev + 'images/**',
		out: basePaths.app + 'images/'
	},
	fonts:  {
		in: basePaths.dev + 'fonts/**',
		out: basePaths.app + 'fonts/'
	},
	server: {
		host: 'http://localhost:8080',
		browser: 'chrome',
		out: basePaths.app
	},
	htaccess: {
		in: basePaths.node + 'apache-server-configs/dist/.htaccess',
		out: basePaths.app
	}
}