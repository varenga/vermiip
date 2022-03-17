const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

function css(){
	return gulp
		.src('scss/estilos.scss')
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sass({
			outputStyle: 'compressed',

		}))
		.pipe( gulp.dest('css') );
}

function watchFiles(){
	gulp.watch('scss/*.scss', css);
}

//Registro la tarea que luego será llamada con gulp css por ejemplo

gulp.task('css',css);
gulp.task('watch',watchFiles);