_cat.core.define("iframe.page2.iframe2.html.iframe5$$cat", function(thi$) {

  var pkgName = "iframe.page2.iframe2.html.iframe5$$cat",
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
        return _cat.utils.chai.assert({
          scrap: context.scrap,
          code: function() {
            return chai.assert.ok(true, "hello assert5");
          }
        });
      }
    ],
    context: {
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("iframe.page2.iframe2.html.iframe6$$cat", function(thi$) {

  var pkgName = "iframe.page2.iframe2.html.iframe6$$cat",
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
        return _cat.utils.chai.assert({
          scrap: context.scrap,
          code: function() {
            return chai.assert.ok(true, "hello assert6");
          }
        });
      }
    ],
    context: {
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});