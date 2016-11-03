// Módulos
var gulp = require('gulp'),
	path = require('../../gulpconfig').js.vendors;

// Tarea | Copiar JS vendors
gulp.task('js_vendors', function() {
	gulp.src(path.in)
	.pipe(gulp.dest(path.out));
});