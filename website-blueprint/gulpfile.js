var gulp = require('gulp'),
watch = require('gulp-watch');


/* gulp.task('name_of_the_task', 'what to do when the task is called' )*/
gulp.task('default', function(){
	console.log('Hurray');
});

gulp.task('html', function(){
	console.log('imagine sth happens when you make change to your index.html :D');
});

gulp.task('styles', function(){
	console.log('Imagine all the css, being proccessed here');
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});