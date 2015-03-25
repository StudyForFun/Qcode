'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // 读取 package对象 存储到 pkg对象
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['dest'],
            publish: ['publish']
        },

        // css压缩  
        cssmin: {
            minify: {
                expand: true,
                cwd: 'src/',
                src: ['*.css'],
                dest: 'dest/',
                ext: '.min.css'
            }
        },
        // html压缩
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: 'src/',
                    src: ['*.tpl'],
                    dest: 'dest/',
                    ext: '.min.tpl'
                }]
            }
        },
        // Configuration to be run (and then tested).
        inlinedata: {
            dist: {
                expand: true,
                cwd: 'src/',
                src: ['*.js'],
                dest: 'plugin/src/',
                ext: '.dev.js'
            }
        },
        // 压缩文件
        uglify: {
            options: {
                //生成一个banner注释并插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'publish/index-<%= (new Date()).getTime() %>-<%= pkg.version %>.js': 'plugin/src/index.dev.js'
                }
            }
        },
        // 监听文件变化
        watch: {
            debug: {
                files: ['src/*'],
                tasks: ['clean', 'cssmin', 'htmlmin' ,'inlinedata']
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-inline-data');
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // plugin's task(s), then test the result.
    grunt.registerTask('default', ['clean', 'cssmin', 'htmlmin' ,'inlinedata', 'watch']);
    grunt.registerTask('build', ['clean', 'cssmin', 'htmlmin' ,'inlinedata', 'uglify', 'clean:dist']);

};
