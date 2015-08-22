/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1080,
            suffix: '-ar3_1x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 2160,
            suffix: '-ar3_2x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 800,
            suffix: '-ar3_1x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 1600,
            suffix: '-ar3_2x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 600,
            suffix: '-ar1p5_1x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 1200,
            suffix: '-ar1p5_2x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 375,
            suffix: '-ar1p5_1x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 750,
            suffix: '-ar1p5_2x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 265,
            suffix: '-ar1p5_1x',
            quality: 80 /* compression ratio, jpg only */
          },
          {
            width: 530,
            suffix: '-ar1p5_2x',
            quality: 80 /* compression ratio, jpg only */
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,svg}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png,svg}',
          dest: 'images'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
