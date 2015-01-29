_cat.core.declare('singlescrap.index.html.singleScrap$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "code",
      "cell": 0
    }],
    "name": ["singleScrap"],
    "embed": ["true"],
    "code": ["console.log(\"hello single scrap\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/singlescrap/cat-project/target/singlescrap/index.html",
    "scrapinfo": {
      "start": {
        "line": 18,
        "col": 1
      },
      "end": {
        "line": 22,
        "col": 3
      }
    },
    "commentinfo": {
      "start": {
        "line": 17,
        "col": 0
      },
      "end": {
        "line": 23,
        "col": 4
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "code": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "$standalone": true,
      "id": true,
      "$type": true
    },
    "singleton": {
      "stack": -1,
      "name": -1,
      "embed": -1,
      "code": 2,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 2,
      "auto": -1,
      "injectcode": -1,
      "$standalone": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "$standalone": false,
    "id": "scrap_2a73ac41-7e40-9e4e-7c79-ab2994dee58f",
    "$type": "html",
    "pkgName": "singlescrap.index.html.singleScrap"
  }
}, 'scrap');
_cat.core.define("singlescrap.index.html.singleScrap$$cat", function(thi$) {

  var pkgName = "singlescrap.index.html.singleScrap$$cat",
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
        console.log("hello single scrap");
      }
    ],
    context: {
      scrapName: 'code',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});