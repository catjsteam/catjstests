var _fs = require("fs"),
    _log = catrequire("cat.global").log(),
    _utils = catrequire("cat.utils"),
    _path = require("path"),
    _basePlugin = catrequire("cat.plugin.base");

/**
 * Copy plugin, copies a target folder to a destination folder according to CAT project
 * Note: copy plugin extends Base.js implementation
 *
 * @type {*}
 */
module.exports = _basePlugin.ext(function () {

    var _me = this,
        _global,
        _data,
        _emitter,
        _module,
        _internalConfig,
        _project;


    _module = {
        
        /**
         * 
         *
         * @param config The configuration:
         *          data - The configuration data
         *          emitter - The emitter reference
         *          global - The global data configuration
         *          internalConfig - CAT internal configuration
         */
        init: function (config) {

            /* 
                Initialization 
            */
            
            if (!config) {
                _log.error(_errors[0]);
                _me.setDisabled(true);
            }

            _emitter = config.emitter;
            _global = config.global;
            _data = config.data;
            _internalConfig = config.internalConfig;
            _project = config.internalConfig.externalConfig.project;

            // initial data binding to 'this'
            _me.dataInit(_data.data);
                        
           /*
                Reports Process
            */
            
            var from, to;

            function _crawler(rootDir, cb, obj) {

                function _process(files) {
                    var stats, dirs = (obj && typeof obj === 'object' ? obj.dirs : []), 
                        idx = 0,
                        file, filePath;

                    for (idx = 0; idx < files.length; idx++) {
                        file = files[idx];
                        if (file !== '.') {
                            filePath = _path.resolve(rootDir + '/' + file);
                            stats = _fs.statSync(filePath);
                            if (stats) {
                                if (!stats.isDirectory()) {
                                    dirs.push(filePath);
                                    //console.log(filePath);
                                    
                                } else {
                                    _crawler(filePath, null, {dirs: dirs});
                                    
                                }                                                              
                            }
                        }                      
                    }

                    if (cb !== null) {
                        cb.call({dirs: dirs});
                    }
                }
                
                var folders = _fs.readdirSync(rootDir);
                if (folders) {
                    _process(folders);
                } 
            }
            
            /// run from the last test - only one session id
            from = _me.get("from");
            to = _me.get("to");
            
            if (from && to) {

                _crawler(from, function(){
                    console.log("[catjs reports task]: processed folders: ", this.dirs);
                    this.dirs.forEach(function() {
                        
                    });
                })
                
            }
            
            // send end task signal
            _emitter.emit("job.done", {status: "done"});
        },

        /**
         * Validate the plugin
         *
         *      dependencies {Array} The array of the supported dependencies types
         *
         * @returns {{dependencies: Array}}
         */
        validate: function () {
            return { dependencies: ["manager"]};
        }
    };

    return _module;
});