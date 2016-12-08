var app = function () {

    var _module = {

        ajax: function(url, callback) {
            var obj, xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    obj = JSON.parse(xhr.responseText);
                    callback.call(this, obj);
                }
            }
            xhr.onerror = function(e) {
                callback.call(this, obj, e);
            }
            xhr.open("GET", url)
            xhr.send();
        },

        init: function() {

            console.log("[app] The application is ready ");

           
            /*
             @[scrap
                 @@name flowTest1
                 @@context app
                 @@log "testing..."
             ]@
             */
        
         /*
             @[scrap
                 @@name flowTest2
                 @@resolve false
                 @@log "testing...2"
                 @@context app
                 @@code mytestscripts.ajaxtest(context, app)
             ]@
             */

            /*
             @[scrap
                 @@name flowTest3
                 @@resolve false
                 @@log "testing...3"
                 @@context app
                 @@code mytestscripts.ajaxalltest(context, app)
             ]@
             */

         /*
             @[scrap
                 @@name flowTest4
                 @@log "testing...4"
             ]@
             */
        }
        
    };

    return _module;
}();

window.onload = function (e) {
    app.init();
    
};