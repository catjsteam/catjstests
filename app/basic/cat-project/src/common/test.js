var my = {};

/**
 * Test that clicks on a given element when its ready
 * Using a given testdata with find api example
 *
 * @param app {Object} The application reference
 */
my.clickTest1 = function (app) {

    var testItems = _catjs.testdata.find(".ids"),
        counter = 0,
        ref = _catjs.manager;

    testItems.forEach(function (item) {
        console.log("Wait Loop 1.....");
//        ref = ref.wait({delay: 1000, steps: 1, callback: function () {
//            console.log("Nested 1 Wait Loop .....") ;
//            ref = ref.wait({delay: 10000, steps: 10, match: ("#test" + item.id), callback: function () {
//                console.log("Nested 2 Wait Loop .....");
//
//                counter++;
//                app.click(item.id);
//                _catjs.ui.console({desc: (item.desc + " (Test1) - " + ("#test" + item.id))});
//            }});
//        }});
    });
    
};

/**
 * Test that clicks on a given element when its ready
 * Using a given testdata with find api example
 *
 * @param app {Object} The application reference
 */
my.clickTest2 = function (app) {

    var testItems = _catjs.testdata.find(".ids"),
        counter = 0,
        ref = _catjs.manager;

    testItems.forEach(function (item) {
        console.log("Wait Loop 1.....");
//        ref = ref.wait({delay: 10, steps: 0, callback: function () {
//            ref = ref.wait({delay: 10000, steps: 10, match: ("#test" + item.id), callback: function () {
//                counter++;
//                app.click(item.id);
//                _catjs.ui.console({desc: (item.desc + " (Test2) - " + ("#test" + item.id))});
//            }});
//        }});
    });
    
    return ref;
};

/**
 * Test that clicks on a given element when its ready
 * Using a given testdata with next, hasnext api example
 * 
 * NOTE: Cannot be used in case of chain promise waiting..
 *
 * @param app
 */
my.clickTestX = function (app) {

    var firstItem = _catjs.testdata.next(".ids"),
        counter = 0,
        ref = _catjs.manager;

    function _click(item) {
        ref.wait({delay: 10000, steps: 10, match: ("#test" + item.id), callback: function () {
            counter++;
            app.click(item.id);

            _catjs.ui.console({desc: (item.desc + " (Test2) - " + ("#test" + item.id))});

            if (_catjs.testdata.hasnext(".ids")) {
                _click(_catjs.testdata.next(".ids"));
            }
        }});
    }

    _click(firstItem);

    return ref;
};

my.clickTest3 = function(app) {

    window.location.href = "main.html";  
};

my.clickTest31 = function(app) {

   // window.location.href = "index.html";  
};