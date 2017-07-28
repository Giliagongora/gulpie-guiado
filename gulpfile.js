var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

/* Concatenar los archivos convirtiendolos en script.js guardados en una carpeta llamada dist*/
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js/*.js'])
	.pipe(concat('script.js'))
	//carta dist
	.pipe(gulp.dest('dist/js/'));
});

/* concatenar main.scss conviertiendolo en style.min.css que se guardara en dist*/
gulp.task('style', function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'assets/sass/main.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dis/css/'));
});

/* webserver : crea un servidor web*/

gulp.task('webserver', function(){
	gulp.src('../gulpie/')
	.pipe(webserver({
		fallback: 'index.html',
		livereload: true,
		directoryListing: false,
		open: true
	}));
});

/* indicador de tareas a ejecutar al correr el comendo glup en la terminal*/

gulp.task('default', ['script', 'style', 'webserver']);