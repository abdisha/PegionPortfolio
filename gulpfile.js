function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask

const { task } = require('gulp');
var sass =require('gulp-sass');
var srcfile = './src/scss/*.scss';
var srcDist ='./src/css/';


const { watch } = require('gulp');

// All events will be watched

watch('./src/app.js', { events: 'change' }, function(cb) {
  // body omitted
  cb();
});
watch('./src/app.scss', { events: 'change' }, function(cb) {
  // body omitted
  cb();
});

var jquery = require('gulp-jquery');
var gulp = require('gulp');
gulp.task('jquery', function () {
    return jquery.src({
        release: 2, //jQuery 2
        flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
    })
    .pipe(gulp.dest('./src/js'));
    // creates ./public/vendor/jquery.custom.js
});
gulp.task('css', function(){
   return gulp.src(srcfile)
   .pipe(sass({errorLogToConsole:true,}))
   .on('error', console.error.bind( console ))
    .pipe(gulp.dest(srcDist)); 
});
gulp.task('js',function(){
   return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
              .pipe(gulp.dest('./src/js/'));

}); 
gulp.task('jquery',function(){
   return gulp.src('./node_modules/jQuery/dist/jQuery.js')
              .pipe(gulp.dest('./src/js/'));

}); 