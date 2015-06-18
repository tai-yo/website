var gulp = require('gulp');
var config = require('../config').icons;

gulp.task('icons', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});