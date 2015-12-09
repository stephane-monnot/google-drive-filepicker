module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        bower: {
            dev: {
                dest: 'dist/js/lib/'
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/js',
                    extDot: 'last'
                }]
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/js',
                    ext: '.min.js',
                    extDot: 'last'
                }]
            }
        },
        watch: {
            all: {
                files: ['**/*.html', '**/*.js'],
                options: {
                    livereload: true
                }
            },
            scripts: {
              files: 'src/**/*.js',
              tasks: ['copy:dist', 'uglify:dist']
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["copy", "uglify"]);
};