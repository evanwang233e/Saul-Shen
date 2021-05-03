var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');
var fs = require('fs');

describe('generator-vue-bucket test', function() {
  before(function(){
    return helpers.run(path.join(__dirname, '../app'));
  });

  //抽查一下文件是不是存在
  it('should created files in dir', function() {
    var files = [
      '.babelrc',
      'package.json',
      'webpack.config.js',
      'src/main.js',
      'src/index.html',
      'src/views/App.vue'
    ];
    assert.file(files);
  });

  //看看.babelrc内容对不对
  it('should have right content in .babelrc', function() {
    assert.jsonFileContent('.babelrc', {
     "presets": ["es2015", "stage-0"],
     "plugins": ["transform-runtime"]
    });
  });
});
