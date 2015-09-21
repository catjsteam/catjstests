var consoleReporter = function () {

  
    var options = {
            timer: new jasmine.Timer,
            consoleprefix: "[catjs] "
        },
        onComplete = options.onComplete || function () { },
        timer = options.timer,
        specCount,
        failureCount,
        pendingCount;

    function plural(str, count) {
        return count == 1 ? str : str + "s";
    }
    
    var _module = {
        
        /**
         * ### jasmineStarted
         *
         * `jasmineStarted` is called after all of the specs have been loaded, but just before execution starts.
         */
        jasmineStarted: function (suiteInfo) {
            /**
             * suiteInfo contains a property that tells how many specs have been defined
             */
            specCount = 0;
            failureCount = 0;
            pendingCount = 0;
            console.log(options.consoleprefix, " Jasmine has Started");
            console.log('');
            timer.start();
        },
        /**
         * ### suiteStarted
         *
         * `suiteStarted` is invoked when a `describe` starts to run
         */
        suiteStarted: function (result) {
            /**
             * the result contains some meta data about the suite itself.
             */
            console.group(options.consoleprefix, result.description);
        },
        /**
         * ### specStarted
         *
         * `specStarted` is invoked when an `it` starts to run (including associated `beforeEach` functions)
         */
        specStarted: function (result) {
            /**
             * the result contains some meta data about the spec itself.
             */
            
        },
        /**
         * ### specDone
         *
         * `specDone` is invoked when an `it` and its associated `beforeEach` and `afterEach` functions have been run.
         *
         * While jasmine doesn't require any specific functions, not defining a `specDone` will make it impossible for a reporter to know when a spec has failed.
         */
        specDone: function (result) {
            /**
             * The result here is the same object as in `specStarted` but with the addition of a status and a list of failedExpectations.
             */


            specCount++;
            
            if (result.status == "pending") {
                pendingCount++;
                console.log('%c%s %s', 'color: orange', '..', result.description);
                return;
            }

            if (result.status == "passed") {
                console.log('%c%s %s', 'color: green', '\u2713', result.description);
                return;
            }

            if (result.status == "failed") {
                failureCount++;
                console.groupCollapsed('%c%s %s', 'color: red', '\u2717', result.description);
                for (var i = 0; i < result.failedExpectations.length; i++) {
                    var failedExpectation = result.failedExpectations[i];
                    console.log(failedExpectation.stack);
                }
                console.groupEnd();
            }
        },
        
        /**
         * ### suiteDone
         *
         * `suiteDone` is invoked when all of the child specs and suites for a given suite have been run
         *
         * While jasmine doesn't require any specific functions, not defining a `suiteDone` will make it impossible for a reporter to know when a suite has failures in an `afterAll`.
         */
        suiteDone: function (result) {
            /**
             * The result here is the same object as in `suiteStarted` but with the addition of a status and a list of failedExpectations.
             */
            console.groupEnd();
        },
        
        /**
         * ### jasmineDone
         *
         * When the entire suite has finished execution `jasmineDone` is called
         */
        jasmineDone: function () {
            console.log('');
            var specCounts = specCount + " " + plural("spec", specCount) + ", " +
                failureCount + " " + plural("failure", failureCount);

            if (pendingCount) {
                specCounts += ", " + pendingCount + " pending " + plural("spec", pendingCount);
            }

            console.log(options.consoleprefix, specCounts);
            
            var seconds = timer.elapsed() / 1000;
            console.log(options.consoleprefix, "Finished in " + seconds + " " + plural("second", seconds));

            console.log('');

            onComplete(failureCount === 0);
        }
    };

    return _module;
};