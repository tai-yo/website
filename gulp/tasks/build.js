var gulp = require('gulp');

gulp.task('build', ['sass', 'images', 'icons', 'vendor', 'browserify']);