// Módulos
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	jsonSass = require('gulp-json-sass'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	connect = require('gulp-connect'),
	pathRoot = require('../../gulpconfig'),
	path = require('../../gulpconfig').sass;



// Tarea | JSON to Sass
gulp.task('json_sass', function() {
	return gulp.src(path.setting)
		.pipe(plumber())
		.pipe(jsonSass({
			sass: false
		}))
		.pipe(rename('_' + 'setting' + '.scss'))
		.pipe(gulp.dest(path.var))
		.pipe(connect.reload());
});

// Tarea | Compilar estilos CSS
gulp.task('styles', ['json_sass'], function () {
	return gulp.src(path.in)
		.pipe(plumber())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(rename(path.name))
		.pipe(gulp.dest(path.out))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(path.min))
		.pipe(connect.reload());
});