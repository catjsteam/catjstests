console.log("CatJS running tests from directory: ", process.cwd());

var args = process.argv.slice(2),
    _extractFolder = "test-apps-master"
    child_process = require('child_process'),
    testdata = [
        {
            name: "sencha",
            testname: "sencha-test",
            port: "8088",
            cwd: "./test/" + _extractFolder + "/sencha/",
            tasks: ["t@init", "t@scrap", "t@inject", "t@autotest", "t@server.start", "t@runner.start"]
        },
        {
            name: "enyo",
            testname: "enyo-test",
            port: "8089",
            cwd: "./test/"+ _extractFolder +"/enyo/",
            tasks: ["t@init", "t@scrap", "t@inject", "t@server.start", "t@runner.start"]
        },
        {
            name: "catjs_example",
            testname: "catjs_example-test",
            port: "8089",
            cwd: "./test/" + _extractFolder +"/catjs_example/",
            tasks: ["t@init", "t@scrap", "t@inject", "t@autotest", "t@server.start", "t@runner.start"]
        }
    ],
    tests=[],
    counter= 0,
    size = testdata.length;


function task(counter) {

    var data= testdata[counter];
    tests[counter] = child_process.fork("./build.js", ["all"], {
        cwd: data.cwd
    });

    if (args && args[0] && args[0] === "clean") {
        data.init = false;
    } else {
        data.init = true;
    }
    tests[counter].send(data);
    tests[counter].on ("message", function (obj){
       if (obj.status === "done") {

           tests[counter].kill();

           counter++;
           if (counter < size) {
                task(counter);
           }
       }
    });
    if (tests[counter].stdout ) {
        tests[counter].stdout.pipe(process.stdout);
    }
    if (tests[counter].stderr) {
        tests[counter].stderr.pipe(process.stderr);
    }
}


if (require.main === module) {
    // command line call
    task(counter);

} else {
    module.exports = {

       run: function(entity) {
           
           var map = {
               sencha: testdata[0],
               enyo: testdata[1],
               "catjs_example": testdata[2] 
                   
           },data= map[entity],
               handle;

           handle = child_process.fork("./build.js", ["all"], {
               cwd: data.cwd
           });
           handle.send(data);
           handle.on ("message", function (obj){
               if (obj.status === "done") {

                   handle.kill();

               }

           });
           if (handle.stdout ) {
               handle.stdout.pipe(process.stdout);
           }
           if (handle.stderr ) {
               handle.stderr.pipe(process.stderr);
           }
       }

    };
}
