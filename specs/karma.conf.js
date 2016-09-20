module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    browsers: ["Chrome"],
    files: [
      'app/javascripts/**/*.js',
      'specs/**/*.spec.js'
    ],
  });
};