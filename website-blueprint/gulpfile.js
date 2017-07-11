var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars');


/* gulp.task('name_of_the_task', 'what to do when the task is called' )*/
gulp.task('default', function(){
	console.log('Hurray');
});

gulp.task('html', function(){
	console.log('imagine sth happens when you make change to your index.html :D');
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
				.pipe(postcss([cssvars, autoprefixer]))
				.pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});