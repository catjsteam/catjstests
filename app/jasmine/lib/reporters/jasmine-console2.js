var consoleReporter = function () {

  
    var options = {
            timer: new jasmine.Timer,
            showColors:true,
            consoleprefix: "[catjs] "
        },
        showColors = options.showColors || false,
        onComplete = options.onComplete || function() {},
        timer = options.timer,
        specCount,
        failureCount,
        failedSpecs = [],
        pendingCount,
        ansi = {
            green: 'color: orange',
            red: 'color: red',
            yellow: 'color: yellow',
            none: ''
        },
        failedSuites = [];

    function print() {
        console.log.apply(console, arguments);
    }
    
    function printNewline() {
        print('\n');
    }

    function colored(color, str) {
        return showColors ? ['%c%s', ansi[color],  str] : [str];
    }

    function plural(str, count) {
        return count == 1 ? str : str + 's';
    }

    function repeat(thing, times) {
        var arr = [];
        for (var i = 0; i < times; i++) {
            arr.push(thing);
        }
        return arr;
    }

    function indent(str, spaces) {
        var lines = (str || '').split('\n');
        var newArr = [];
        for (var i = 0; i < lines.length; i++) {
            newArr.push(repeat(' ', spaces).join('') + lines[i]);
        }
        return newArr.join('\n');
    }

    function specFailureDetails(result) {
        printNewline();
        print(result.fullName);

        for (var i = 0; i < result.failedExpectations.length; i++) {
            var failedExpectation = result.failedExpectations[i];
            printNewline();
            print(indent(failedExpectation.message, 2));
            print(indent(failedExpectation.stack, 2));
        }

        printNewline();
    }

    function suiteFailureDetails(result) {
        for (var i = 0; i < result.failedExpectations.length; i++) {
            printNewline();
            print.apply(this, colored('red', 'An error was thrown in an afterAll'));
            printNewline();
            print.apply(this, colored('red', ('AfterAll ' + result.failedExpectations[i].message)));

        }
        printNewline();
    }

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
            print('Started');
            printNewline();
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

            if (result.status == 'pending') {
                pendingCount++;
                print.apply(this, colored('yellow', (' .. ' + result.description)));
                return;
            }

            if (result.status == 'passed') {
                print.apply(this, colored('green', (' \u2713 ' + result.description)));
                return;
            }

            if (result.status == 'failed') {
                failureCount++;
                failedSpecs.push(result);
                print.apply(this, colored('red', (' \u2717 ' + result.description)));
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
            if (result.failedExpectations && result.failedExpectations.length > 0) {
                failureCount++;
                failedSuites.push(result);
            }
        },
        
        /**
         * ### jasmineDone
         *
         * When the entire suite has finished execution `jasmineDone` is called
         */
        jasmineDone: function () {
            printNewline();
            for (var i = 0; i < failedSpecs.length; i++) {
                specFailureDetails(failedSpecs[i]);
            }

            if(specCount > 0) {
                printNewline();

                var specCounts = specCount + ' ' + plural('spec', specCount) + ', ' +
                    failureCount + ' ' + plural('failure', failureCount);

                if (pendingCount) {
                    specCounts += ', ' + pendingCount + ' pending ' + plural('spec', pendingCount);
                }

                print(specCounts);
            } else {
                print('No specs found');
            }

            printNewline();
            var seconds = timer.elapsed() / 1000;
            print('Finished in ' + seconds + ' ' + plural('second', seconds));
            printNewline();

            for(i = 0; i < failedSuites.length; i++) {
                suiteFailureDetails(failedSuites[i]);
            }

            onComplete(failureCount === 0);
        }
    };

    return _module;
};