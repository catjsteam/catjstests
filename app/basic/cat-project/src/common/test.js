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
        ref.wait({delay: 1000, steps: 0, callback: function () {
            ref.wait({delay: 10000, steps: 10, match: ("#test" + item.id), callback: function () {
                counter++;
                app.click(item.id);
                _catjs.ui.console({desc: item.desc});
            }});
        }});
    });
};

/**
 * Test that clicks on a given element when its ready
 * Using a given testdata with next, hasnext api example
 *
 * @param app
 */
my.clickTest2 = function (app) {

    var firstItem = _catjs.testdata.next(".ids"),
        counter = 0,
        ref = _catjs.manager;

    function _click(item) {
        ref.wait({delay: 10000, steps: 10, match: ("#test" + item.id), callback: function () {
            counter++;
            app.click(item.id);

            _catjs.ui.console({desc: item.desc});

            if (_catjs.testdata.hasnext(".ids")) {
                _click(_catjs.testdata.next(".ids"));
            }
        }});
    }

    _click(firstItem);

    return ref;
};