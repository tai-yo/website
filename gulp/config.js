var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    proxy: 'http://localhost:8000'
  },
  sass: {
    src: src + '/styles/**/*.scss',
    dest: dest
  },
  images: {
    src: src + '/images/**/*',
    dest: dest + '/images'
  },
  icons: {
    src: src + '/icons/**/*',
    dest: dest + '/icons'
  },
  browserify: {
    bundleConfigs: [{
      entries: src + '/js/main.js',
      dest: dest + '/js',
      outputName: 'build.js'
    }]
  },
  vendor: {
    src: src + '/js/vendor/**/*',
    dest: dest + '/vendor'
  }
};
