_cat.core.declare('iframe.iframe1.html.secondScrap$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["secondScrap"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#secondButton\")"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/iframe/cat-project/target/iframe/iframe1.html",
    "scrapinfo": {
      "start": {
        "line": 23,
        "col": 5
      },
      "end": {
        "line": 27,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 22,
        "col": 4
      },
      "end": {
        "line": 28,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "jqm": false,
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
      "jqm": -1,
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
    "id": "scrap_aa3e351e-24eb-2702-4e34-0e2067f38c05",
    "$type": "html",
    "pkgName": "iframe.iframe1.html.secondScrap"
  }
}, 'scrap');
_cat.core.declare('iframe.index.html.firstScrap$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["firstScrap"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#firstButton\")"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/iframe/cat-project/target/iframe/index.html",
    "scrapinfo": {
      "start": {
        "line": 41,
        "col": 5
      },
      "end": {
        "line": 45,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 40,
        "col": 4
      },
      "end": {
        "line": 46,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "jqm": false,
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
      "jqm": -1,
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
    "id": "scrap_47de5775-6a60-49dc-e431-5051569039be",
    "$type": "html",
    "pkgName": "iframe.index.html.firstScrap"
  }
}, 'scrap');
_cat.core.define("iframe.iframe1.html.secondScrap$$cat", function(thi$) {

  var pkgName = "iframe.iframe1.html.secondScrap$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#secondButton");
      }
    ],
    context: {
      scrapName: 'jqm',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("iframe.index.html.firstScrap$$cat", function(thi$) {

  var pkgName = "iframe.index.html.firstScrap$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#firstButton");
      }
    ],
    context: {
      scrapName: 'jqm',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.declare('iframe.page1.iframe1.html.secondScrap$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["secondScrap"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#secondButton\")"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/iframe/cat-project/target/iframe/page1/iframe1.html",
    "scrapinfo": {
      "start": {
        "line": 23,
        "col": 5
      },
      "end": {
        "line": 27,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 22,
        "col": 4
      },
      "end": {
        "line": 28,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "jqm": false,
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
      "jqm": -1,
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
    "id": "scrap_e3ddb5df-4c7f-e074-699b-cff4b13738d8",
    "$type": "html",
    "pkgName": "iframe.page1.iframe1.html.secondScrap"
  }
}, 'scrap');
_cat.core.define("iframe.page1.iframe1.html.secondScrap$$cat", function(thi$) {

  var pkgName = "iframe.page1.iframe1.html.secondScrap$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#secondButton");
      }
    ],
    context: {
      scrapName: 'jqm',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});