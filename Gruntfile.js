module.exports = function(grunt) {

  grunt.initConfig({

    emberTemplates: {
      compile: {
        options: {
          amd: false,
          templateNamespace: 'Handlebars',
          templateBasePath:"public/templates"
        },
        files: { "public/templates/templates.js": 'public/templates/**/*.hbs' }
      }
    },

    watch: {
      files: ['public/templates/**/*.hbs'],
      tasks: ['emberTemplates']
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['emberTemplates']);

};
