module.exports = grunt => {
  grunt.initConfig({
    copy: {
      build: {
        cwd: "app",
        src: ["**"],
        dest: "dist",
        expand: true
      }
    },
    clean: {
      build: {
        src: ["dist"]
      },
      scripts: {
        src: ["dist/**/*", "!dist/application.js"]
      }
    },
    uglify: {
      build: {
        files: {
          "dist/application.js": "dist/**/*.js"
        }
      }
    },
    watch: {
      scripts: {
        files: "app/**/*.js",
        tasks: ["clean", "copy", "uglify", "clean:scripts"],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      options: {
        port: 3000,
        livereload: 35729,
        hostname: "localhost"
      },
      livereload: {
        options: {
          open: true,
          base: ["./"]
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.registerTask("default", [
    "clean",
    "copy",
    "uglify",
    "clean:scripts",
    "connect",
    "watch"
  ]);
};
