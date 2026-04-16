(function() {
  var _scriptLoaded = false;
  
  function load(options) {
    return loadEntrypoint(options);
  }

  function loadEntrypoint(options) {
    if (_scriptLoaded) {
      return;
    }
    _scriptLoaded = true;
    var script = document.createElement('script');
    script.src = 'main.dart.js';
    script.type = 'application/javascript';
    var entrypointLoader = {
      loadEntrypoint: function(loaderOptions) {
        return new Promise(function(resolve, reject) {
          script.onload = function() {
            if (window._flutter && window._flutter.engineInitializer) {
              resolve(window._flutter.engineInitializer);
            } else {
              // Fallback for older engine versions
              resolve({
                initializeEngine: function(args) {
                  return window._flutter.engineInitializer.initializeEngine(args);
                }
              });
            }
          };
          script.onerror = reject;
          document.body.append(script);
        });
      }
    };

    if (options && options.onEntrypointLoaded) {
      options.onEntrypointLoaded(entrypointLoader);
    } else {
      // Default behavior if no callback provided
      entrypointLoader.loadEntrypoint().then(function(engineInitializer) {
        return engineInitializer.initializeEngine();
      }).then(function(appRunner) {
        return appRunner.runApp();
      });
    }
  }

  window._flutter = {
    loader: {
      load: load,
      loadEntrypoint: loadEntrypoint
    }
  };
})();
