_cat.core.define("iframe.page1.iframe1.html.iframe2$$cat", function(thi$) {

  var pkgName = "iframe.page1.iframe1.html.iframe2$$cat",
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
      'code': ["assert", "ok(true,\"hello assert2\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("iframe.page1.iframe1.html.iframe4$$cat", function(thi$) {

  var pkgName = "iframe.page1.iframe1.html.iframe4$$cat",
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
      'code': ["assert", "ok(true,\"hello scrap4\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});