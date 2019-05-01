var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/*
 * Vars
 */

// Sass origem
var scssFiles = [
	'../css/*.scss'
];

// Sass destino
var cssDest = '../dist/css';

// ####################
// ####################
// ####################

// JS origem
var jsFiles = [
  '../js/*.js'
];

// JS destino
var jsDest = '../dist/js';

// ####################
// ####################
// ####################

// Dev
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Prod
var sassProdOptions = {
  outputStyle: 'compressed'
}

// ####################
// ####################
// ####################

/*
 * Tasks
 */

gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))

    .pipe(autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }))
    
    .pipe(concat('main.css'))
    .pipe(gulp.dest(cssDest))
});

gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))

    .pipe(autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }))

    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(cssDest))
});

gulp.task('jsprod', function() {
  return gulp.src(jsFiles)
    .pipe(uglify())
  	.pipe(concat('all.min.js'))
    .pipe(gulp.dest(jsDest))
});

gulp.task('watch', function() {

  // gulp.watch(['../*.php', '../**/*.php']).on('change', function(file) {
  //   livereload.changed(file.path);
  // });

  gulp.watch(scssFiles, ['sassdev', 'sassprod']);
  gulp.watch(jsFiles, ['jsprod']);
});

// ####################
// ####################
// ####################

/*
 * Default
 */
gulp.task('default', ['sassdev', 'sassprod', 'jsprod', 'watch']);