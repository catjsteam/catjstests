var app = {};

app.utils = function() {

    var dragObj = null;

    function _addEventListener(event, elem, fn) {
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
    }

    function _getElt(id) {
        var elt;

        if (id) {
            if (typeof $ !== "undefined") {
                elt = $(id);
                if (elt && elt[0]) {
                    return elt[0];
                }
            } else {
                if (typeof id === "object") {
                    return id;

                } else if (typeof id === "string") {
                    return document.querySelector(id);
                }
            }
        }
        return undefined;
    }

    
    function isjquery() {
        if (typeof $ !== "undefined") {
            return true;
        }
        
        return false;
    }
    
    return {

        mouseinfo: function(e) {
            var elt = e.target;
            console.log("Element: tag:", elt.tagName, " id: ", (elt.id  ? elt.id : "NA") ," was clicked, ", e.pageX, ":", e.pageY);
        },
        
        draggable: function (id) {
            
            function _nativedraggable(id) {
                var obj;

                obj = _getElt(id);
                obj.style.position = "absolute";
                obj.onmousedown = function(){
                    dragObj = obj;
                };

                document.onmouseup = function(e){
                    dragObj = null;
                };

                document.onmousemove = function(e){
                    var x = e.pageX;
                    var y = e.pageY;

                    if(dragObj == null)
                        return;

                    dragObj.style.left = x - 35 + "px";
                    dragObj.style.top = y - 35 + "px";
                };                
            }
            
            if (isjquery()) {
                $(id).draggable();
                
            } else {
                
                _nativedraggable(id);
            }                                           
        },
        
        listenToAll: function(id) {
            var key,
                addons = [],
                elt = (typeof id === "object" ? id : _getElt(id)),
                listenerLogger = function(e) {
                    var elt = e.target;
                    console.log("[app event] event type ", e.type, " tag: ", elt.tagName, " id:", (elt.id ? elt.id : "NA"));
                };
            
            function _addListener (key, elt, fn) {
                key = key.substring(2);
                _addEventListener(key, elt, fn);
            }
            
            if (elt) {
                for (key in elt) {
                    if (key.indexOf("on") === 0) {
                        _addListener(key, elt, listenerLogger);               
                    }
                }
                addons.forEach(function(key) {
                    _addListener(key, elt, listenerLogger);
                });
            }
        },
        
        markPosition: function(id) {
            var elt, details;
            
            elt =  _getElt(id);
            if (elt) {
                details = elt.getBoundingClientRect();
                elt.innerHTML += "<div style='font-size: 9px;'>( left: " + details.left + " top: " + parseInt(details.top) +")</div>";
            }
            
        },
        
        setElementTestLog: function(id, text) {
            var elt;

            elt = _getElt(id);
            if (elt) {
                elt.innerHTML += "<div style='font-size: 12px; color: orange'> [test log]" + text + "</div>";
            }
        }
    };
    
}();
