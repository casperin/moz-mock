module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'es5/mosaik.js': 'import/mock.js'
                },
                options: {
                    transform: ['babelify']
                }
            }
        },

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'es6',
                    src: ['**/*.js'],
                    dest: 'es5',
                    ext: '.js'
                }]
            }
        },

        uglify: {
            build: {
                src: 'es5/mosaik.js',
                dest: 'build/mosaik.min.js'
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src',
                    name: 'mosaik-mock',
                    include: '../node_modules/grunt-contrib-requirejs/node_modules/requirejs/require',
                    mainConfigFile: 'src/mosaik-mock.js',
                    findNestedDependencies: true,
                    optimize: 'none',
                    generateSourceMaps: true,
                    wrap: true,
                    out: 'build/mosaik.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', [
        'babel',
        'uglify'
    ]);
};
