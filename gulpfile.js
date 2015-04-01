var gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    reactify   = require('reactify'),
    connect    = require('gulp-connect'),
    concat     = require('gulp-concat');

gulp.task('browserify', function() {
  var bundler = browserify({
      entries: ['./app/main.js'],
      transform: [reactify],
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
  });
  var watcher  = watchify(bundler);
  return watcher
  .on('update', function () {
    var updateStart = Date.now();
    console.log('Updating!');
    watcher.bundle()
    .pipe(source('main.js'))

    .pipe(gulp.dest('./build/'));
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./build/'));
});


gulp.task('css', function () {
  gulp.watch('styles/**/*.css', function () {
    return gulp.src('styles/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/'));
  });
});

gulp.task('connect', function() {
  connect.server({
    root: "./build",
    port: 3000
  });
});

gulp.task('default', ['browserify', 'css', 'connect']); // Yeahy!