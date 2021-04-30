var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  initializing: function () {
    this.props = {};
  },

  writing: function () {
    /*copy source files*/
    this.fs.copy(
      this.templatePath(),  //from
      this.destinationPath() //to
    );

    /*write .babelrc*/
    this.fs.writeJSON(this.destinationPath('.babelrc'), {
      "presets": ["es2015", "stage-0"],
      "plugins": ["transform-runtime"]
    });
  }
});
