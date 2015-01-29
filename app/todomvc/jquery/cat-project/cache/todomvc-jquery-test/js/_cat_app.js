_cat.core.define("todomvc-jquery-test.js.app.scrap_7b8c9f75-3969-0094-fade-3faf08467a99$$cat", function(thi$) {

  var pkgName = "todomvc-jquery-test.js.app.scrap_7b8c9f75-3969-0094-fade-3faf08467a99$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    context,
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  context = {
    scrap: _ipkg.scrap,
    args: _args
  };


  /* test content in here */
  _cat.core.clientmanager.delayManager({
    commands: [
      function(context, thi$) {
        _cat.utils.chai.assert(context);
      }
    ],
    context: {
      'code': ["assert", "ok(my.tests.inputTest(thi$),\"Failed to insert Todo item\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("todomvc-jquery-test.js.app.scrap_f2d55433-b6d2-213b-3f5b-837557168116$$cat", function(thi$) {

  var pkgName = "todomvc-jquery-test.js.app.scrap_f2d55433-b6d2-213b-3f5b-837557168116$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    context,
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  context = {
    scrap: _ipkg.scrap,
    args: _args
  };


  /* test content in here */
  _cat.core.clientmanager.delayManager({
    commands: [
      function(context, thi$) {
        _cat.utils.chai.assert(context);
      }
    ],
    context: {
      'code': ["assert", "ok(my.tests.deleteTest(thi$),\"Failed to delete Todo item\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});