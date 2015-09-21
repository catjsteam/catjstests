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
        },
        
        size = metadata.size, 
        idx = 0;

    _module = {


        click: function(idx) {
            var elt = _getElt("#test" + idx);
            if (elt) {
                _fire("click", elt);
            }
        },
        
        insert: function(counter) {
            var tpl = metadata.template,
                elt = document.createElement("div"),
                ref;

            elt.innerHTML = _compile(tpl, {index: counter});
            ref = document.body.appendChild(elt);
            
            _module.listener(ref);                     
        },
        
        listener: function(elt) {
            
            _addEventListener("click", elt, function (e) {
                
                var elt = e.target, 
                    eltmsg = elt.querySelector(".msg"),
                    eltid = elt.id,
                    counter = eltid.substring(eltid.length-1);

                eltmsg.innerHTML = "[app] clicked, elt: test" + counter;
                setTimeout(function() {
                    eltmsg.innerHTML = "";
                }, 500);

                console.log("[app] clicked, elt: test", counter);
                
            });

        },
        
        init: function() {

            console.log("[app] The application is ready ");
                      
            var h = setInterval(function() {
                idx++;
                _module.insert(idx);
                if (idx >= size) {
                    clearInterval(h);
                    
                    //window.location.href = "main.html"
                    
                }
            }, 500);                        
            
            /*
             @[scrap
                 @@name flowTest1
                 @@context app                 
                 @@js my.clickTest1(app)
             ]@
             */
          
            /*
             @[scrap
                 @@name flowTest2
                 @@context app
                 @@wait object("#test2", 5000)
                 @@js my.clickTest2(app)
             ]@
             */

            /*
             @[scrap
                 @@name flowTest3
                 @@context app  
                 @@js my.clickTest3(app)
             ]@
             */

            /*
             @[scrap
                 @@name flowTest4
                 @@wait object("#activateTest2")
                 @@assert ok(true, "Flow test 3 failed")
             ]@
             */

            /*
             @[scrap
                 @@name flowTest5
                 @@js my.clickTest31()
             ]@
             */

          
            /*
             [scrap
                 @@name done
             ]@
             */

 
        
        },

        getElt: _getElt
        
    };

    return _module;
}();

window.onload = function (e) {
    app.init();
};