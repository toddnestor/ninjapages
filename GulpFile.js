var gulp = require( 'gulp' );
var bowerFiles = require( 'main-bower-files' );
var minifyjs = require( 'gulp-uglify' );
var minifycss = require( 'gulp-minify-css' );
var less = require( 'gulp-less' );
var concat = require( 'gulp-concat' );
var ngAnnotate = require( 'gulp-ng-annotate' );

gulp.task( 'bower', function()
{
    gulp.src( bowerFiles( '**/*.js' ) )
        .pipe( concat( 'vendor.min.js' ) )
        .pipe( ngAnnotate() )
        .pipe( gulp.dest( 'compiled/js/' ) );

    gulp.src( bowerFiles( '**/*.css' ) )
        .pipe( concat( 'vendor.min.css' ) )
        .pipe( gulp.dest( 'compiled/css/' ) );

    return true;
} );

gulp.task( 'js', function()
{
    gulp.src( [
        'compiled/js/vendor.min.js',
        'src/app/restful-herc.js',
        'src/app/config.js',
        'src/app/directives/**/*.js',
        'src/app/filters/**/*.js',
        'src/app/services/**/*.js',
        'src/components/**/*.js'
    ] )
        .pipe( concat( 'main.min.js' ) )
        .pipe( minifyjs( { mangle: false, output: { ascii_only: true } } ) )
        .pipe( gulp.dest( 'www/assets/js/' ) );

    return true;
} );

gulp.task( 'css', function()
{
    gulp.src( [
        'src/components/**/*.less'
    ] )
        .pipe( less( {
            strictMath: true
        } ) )
        .pipe( concat( 'compiled-less.css' ) )
        .pipe( gulp.dest( 'compiled/css' ) );

    gulp.src( [
        'compiled/css/vendor.min.css',
        'bower/bootstrap/dist/css/bootstrap.min.css',
        'src/app/**/*.css',
        'src/components/**/*.css',
        'compiled/css/compiled-less.css'
    ] )
        .pipe( concat( 'main.min.css' ) )
        .pipe( minifycss({processImport: false}) )
        .pipe( gulp.dest( 'www/assets/css/' ) );

    return true;
} );

gulp.task( 'templates', function()
{
    return gulp.src( 'src/components/**/*.html' )
        .pipe( gulp.dest( 'www/templates' ) );
} );

gulp.task( 'watch', function()
{
    gulp.watch( 'src/**/*.js', [ 'js' ] );
    gulp.watch( 'src/**/*.css', [ 'css' ] );
    gulp.watch( 'src/**/*.less', [ 'css' ] );
    gulp.watch( 'src/**/*.html', [ 'templates' ] );
    gulp.watch( 'bower/**/*', [ 'bower', 'css', 'js' ] );
} );

gulp.task( 'add', function()
{
    var name = process.argv.slice( 3 )[ 1 ];
    var fs = require( 'fs' );
    var abs_path = name.split( '.' ).join( '/' );
    var dir = 'src/components/' + abs_path;
    var url = name.split( "." ).pop();
    var controllerName = '';
    var page_title = '';

    var name_bits = name.split('.');

    for( key in name_bits ) {
        controllerName += name_bits[ key ].charAt(0).toUpperCase() + name_bits[ key ].slice( 1 );
        page_title += name_bits[ key ].charAt(0).toUpperCase() + name_bits[ key ].slice( 1 ) + ' ';
    };

    var className = name.split( ".").join( '-' );

    fs.mkdirSync( dir );
    fs.writeFileSync( dir + "/" + url + ".js", 'var app = angular.module("app");\n\napp.config(function($stateProvider){\n\t$stateProvider\n\t\t.state("' + name + '",{\n\t\t\turl: "/' + url + '",\n\t\t\tdata: { pageTitle: \'' + page_title + '\' },\n\t\t\ttemplateUrl: "/templates/' + abs_path + '/' + url + '.html",\n\t\t\tcontroller: "' + controllerName + 'Controller"\n\t\t})\n}); \n\napp.controller("' + controllerName + 'Controller", function ($scope, $rootScope, $state, $stateParams, Herc) {\n\t\/\/All your code goes here\n});' );
    fs.writeFileSync( dir + "/" + url + ".html", '<div class="' + className + '">\n\t<!-- put all the view stuff in here-->\n\t<ui-view></ui-view>\n</div>' );
    fs.writeFileSync( dir + "/" + url + ".less", '.' + className + ' {\n\n\/*less/css stuff can go in here*\/\n\n}' );
} );

gulp.task( 'compile', [ 'bower', 'templates', 'css', 'js' ] );
gulp.task( 'default', [ 'bower', 'templates', 'css', 'js', 'watch' ] );