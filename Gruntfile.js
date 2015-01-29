/**
 * Created by ransnir on 9/30/14.
 */
module.exports = function(grunt) {

    /* Pretty-print task times, helps understanding who's to blame if the build takes long. */
    require('time-grunt')(grunt);

    /* Load tasks from package.json, so no need to write (and maintain) grunt.loadNpmTasks(...) lines. */
    require('load-grunt-tasks')(grunt);


    /* Define tasks configuration. */
    grunt.initConfig({


        /* LESS compilation. */
        less: {
            dev: {
                options: {
                    dumpLineNumbers: 'comments'
                },
                src: 'web/css/less/app.less',
                dest: 'web/css/jqueryspa.css'
            },
            prod: {
                options: {
                    cleancss: true // Minify
                },
                src: 'web/css/less/app.less',
                dest: 'web/css/jqueryspa.min.css'
            }
        },



        /* Watch task, typically for dev. Watch some files, do something when they change. */
        watch: {
            options: {
                spawn: false
            },

            /* Watch less files and build CSS as necessary. */
            less: {
                files: ['web/css/less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    /* Register default task, should be what we want to run in a build server. */
    grunt.registerTask('default', 'Build jqueryspa client for production.', ['less']);
};