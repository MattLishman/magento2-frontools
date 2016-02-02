module.exports = function() {
  // global vars
  var gulp    = this.gulp,
      plugins = this.opts.plugins,
      configs = this.opts.configs;

  // local vars
  var themeName = plugins.util.env.theme || false,
      themes = themeName ? [themeName] : Object.keys(configs.themes);

  themes.forEach(name => {
    configs.themes[name].locale.forEach(locale => {
      var theme = configs.themes[name];
      if (theme.default) {
        gulp.watch(theme.dest + '/**/*.' + theme.lang, [configs.themes[name].lang + ':' + name + ':' + locale]);
      }
      else {
        gulp.watch(theme.src + '/**/*.' + theme.lang, [configs.themes[name].lang + ':' + name + ':' + locale]);
      }
    });
  });
};
