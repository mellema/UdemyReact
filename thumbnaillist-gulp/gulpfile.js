/**
 * Created by walkermellema on 11/15/15.
 */
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify   = require('watchify');
var reactify   = require('reactify');

gulp.task('default', function(){
	console.log('GULP!');

  var bundler = watchify(browserify({
	  entries: ['./src/app.jsx'],
	  transform: [reactify],
	  extensions: ['.jsx'],
	  debug: true,
	  cache: {},
	  packageCache: {},
	  fullPaths: true
  }));

	function build(file){
		if(file){
			gutil.log('recompiling ' + file);
		}
		return bundler
		  .bundle()
		  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
		  .pipe(source('main.js'))
		  .pipe(gulp.dest('./'));
	}
	build();
	bundler.on('update', build);

});