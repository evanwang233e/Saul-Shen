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

  }
});
