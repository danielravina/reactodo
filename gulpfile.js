var gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    reactify   = require('reactify'),
    connect    = require('gulp-connect'),
    concat     = require('gulp-concat');

gulp.task('browserify', function() {

  var bundler = browserify({
      entries: ['./app/js/main.js'],
      transform: [reactify],
      extensions: ['.js', '.jsx'],
      debug: false,
      cache: {}, packageCache: {}, fullPaths: true
  });

  var watcher  = watchify(bundler);

  return watcher
    .on('update', function () {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
      .on('error', swallowError)
      .pipe(source('main.js'))
      .pipe(gulp.dest('./build/'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
  gulp.src("app/css/**/*.css")
    .pipe(sass({ errLogToConsole: true}))
    .on('error', swallowError)
    .pipe(minifycss())
    .pipe(gulp.dest(dev.css.dest))
});

gulp.task('css', function () {
  gulp.watch('app/css/**/*.css', function () {
    return gulp.src('css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build/main.css'));
  });
});

gulp.task('connect', function() {
  connect.server({
    root: "./build",
    port: 3000
  });
});

gulp.task('default', ['browserify', 'css', 'connect']); // Yeahy!

// Util
function swallowError(error) {
    console.log(error.toString())
    this.emit('end');
}