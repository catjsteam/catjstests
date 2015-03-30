var app = function () {

    var _module,

        metadata = {
            size: 5,
            template: '<div id="test${index}" class="elt"><div class="header">Test element ${index}</div><div class="msg">  </div></div>'
        },

        _compile = function (tmpl, data) {
            return tmpl.split("${index}").join(data.index);
        },

        _getElt = function (q) {
            return document.querySelector(q);
        },

        _addEventListener = function (event, elem, fn) {
            if (!elem) {
                return undefined;
            }
            if (elem.addEventListener) {
                elem.addEventListener(event, fn, false);

            } else {
                elem.attachEvent("on" + event, function () {

                    return(fn.call(elem, window.event));
                });
            }
        },
        
        _fire = function(type, elt) {

            if (document.createEvent) {

                var event = document.createEvent("MouseEvents");
                event.initMouseEvent(type, true, true, window,
                    0, 0, 0, 0, 0, false, false, false, 0, null);
                elt.dispatchEvent(event);
                
            } else {
                
                elt.fireEvent("on" + type);
            }
        };

    _module = {


        click: function(idx) {
            var elt = _getElt("#test" + idx);
            if (elt) {
                _fire("click", elt);
            }
        },
        
        init: function() {

            var size = metadata.size, idx = 0,
                tpl = metadata.template,
                counter = 0;


            window.onload = function (e) {

                console.log("[app] The application is ready ");

                for (; idx < size; idx++) {
                    counter++;
                    document.body.innerHTML += _compile(tpl, {index: counter});

                }

                counter = 0;
                idx = 0;
                for (; idx < size; idx++) {
                    counter++;
                    (function (counter) {
                        
                        var elt = _getElt("#test" + counter);
                        _addEventListener("click", elt, function (e) {
                            
                            var elt = _getElt("#test" + counter + " .msg");
                            elt.innerHTML = "[app] clicked, elt: test" + counter;
                            setTimeout(function() {
                                elt.innerHTML = "";
                            }, 500);
                            
                            console.log("[app] clicked, elt: test", counter);                            
                        });
                        
                    })(counter);

                }
            }
        },

        getElt: _getElt
        
    };

    return _module;
}();