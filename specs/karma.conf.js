module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    browsers: ["Chrome"],
    files: [
      'src/**/*.js',
      'specs/**/*.spec.js'
    ],
  });
};