_cat.core.declare('iframe.index.html.main1$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["main1"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert1\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/index.html",
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
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_d69145a8-225a-6cec-3ba1-873f8435f3e0",
    "$type": "html",
    "pkgName": "iframe.index.html.main1"
  }
}, 'scrap');
_cat.core.declare('iframe.index.html.main3$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["main3"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert3\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/index.html",
    "scrapinfo": {
      "start": {
        "line": 49,
        "col": 5
      },
      "end": {
        "line": 53,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 48,
        "col": 4
      },
      "end": {
        "line": 54,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_dae67adb-ffa4-1ace-73d4-8ed2a2a37c97",
    "$type": "html",
    "pkgName": "iframe.index.html.main3"
  }
}, 'scrap');
_cat.core.define("iframe.index.html.main1$$cat", function(thi$) {

  var pkgName = "iframe.index.html.main1$$cat",
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
            return chai.assert.ok(true, "hello assert1");
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
_cat.core.define("iframe.index.html.main3$$cat", function(thi$) {

  var pkgName = "iframe.index.html.main3$$cat",
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
            return chai.assert.ok(true, "hello assert3");
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
_cat.core.declare('iframe.page1.iframe1.html.iframe2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["iframe2"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert2\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/page1/iframe1.html",
    "scrapinfo": {
      "start": {
        "line": 24,
        "col": 5
      },
      "end": {
        "line": 28,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 23,
        "col": 4
      },
      "end": {
        "line": 29,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_089ccb90-d70c-12c6-b43b-d35f41a567eb",
    "$type": "html",
    "pkgName": "iframe.page1.iframe1.html.iframe2"
  }
}, 'scrap');
_cat.core.declare('iframe.page1.iframe1.html.iframe4$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["iframe4"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello scrap4\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/page1/iframe1.html",
    "scrapinfo": {
      "start": {
        "line": 32,
        "col": 9
      },
      "end": {
        "line": 36,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 31,
        "col": 4
      },
      "end": {
        "line": 37,
        "col": 12
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_5f59772c-83d1-e9d2-ac92-f013e809bdfc",
    "$type": "html",
    "pkgName": "iframe.page1.iframe1.html.iframe4"
  }
}, 'scrap');
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
        return _cat.utils.chai.assert({
          scrap: context.scrap,
          code: function() {
            return chai.assert.ok(true, "hello assert2");
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
        return _cat.utils.chai.assert({
          scrap: context.scrap,
          code: function() {
            return chai.assert.ok(true, "hello scrap4");
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
_cat.core.declare('iframe.page2.iframe2.html.iframe5$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["iframe5"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert5\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/page2/iframe2.html",
    "scrapinfo": {
      "start": {
        "line": 25,
        "col": 5
      },
      "end": {
        "line": 29,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 24,
        "col": 4
      },
      "end": {
        "line": 30,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_d8ba50f6-bff4-811d-88d5-72349e082a1f",
    "$type": "html",
    "pkgName": "iframe.page2.iframe2.html.iframe5"
  }
}, 'scrap');
_cat.core.declare('iframe.page2.iframe2.html.iframe6$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["iframe6"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert6\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/page2/iframe2.html",
    "scrapinfo": {
      "start": {
        "line": 32,
        "col": 5
      },
      "end": {
        "line": 36,
        "col": 7
      }
    },
    "commentinfo": {
      "start": {
        "line": 31,
        "col": 4
      },
      "end": {
        "line": 37,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_f6863de9-472d-20a2-accb-670b205cf56f",
    "$type": "html",
    "pkgName": "iframe.page2.iframe2.html.iframe6"
  }
}, 'scrap');
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
_cat.core.declare('iframe.page3.iframe3.html.iframe7$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["iframe7"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert7\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/page3/iframe3.html",
    "scrapinfo": {
      "start": {
        "line": 25,
        "col": 1
      },
      "end": {
        "line": 29,
        "col": 3
      }
    },
    "commentinfo": {
      "start": {
        "line": 24,
        "col": 0
      },
      "end": {
        "line": 30,
        "col": 4
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_0bd66930-e2d3-0ffd-c6ab-33f6a4b2c530",
    "$type": "html",
    "pkgName": "iframe.page3.iframe3.html.iframe7"
  }
}, 'scrap');
_cat.core.declare('iframe.page3.iframe3.html.iframe8$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["iframe8"],
    "embed": ["true"],
    "assert": ["return _cat.utils.chai.assert({ scrap: context.scrap, code: function() { return chai.assert.ok(true,\"hello assert8\");} });"],
    "file": "/home/arik/dev/projects/lastboy/catjstests/app/iframe/cat-project/target/iframe/page3/iframe3.html",
    "scrapinfo": {
      "start": {
        "line": 32,
        "col": 1
      },
      "end": {
        "line": 36,
        "col": 3
      }
    },
    "commentinfo": {
      "start": {
        "line": 31,
        "col": 0
      },
      "end": {
        "line": 37,
        "col": 4
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_5797e481-7ec4-404b-8fda-65d8c65c44f9",
    "$type": "html",
    "pkgName": "iframe.page3.iframe3.html.iframe8"
  }
}, 'scrap');
_cat.core.define("iframe.page3.iframe3.html.iframe7$$cat", function(thi$) {

  var pkgName = "iframe.page3.iframe3.html.iframe7$$cat",
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
            return chai.assert.ok(true, "hello assert7");
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
_cat.core.define("iframe.page3.iframe3.html.iframe8$$cat", function(thi$) {

  var pkgName = "iframe.page3.iframe3.html.iframe8$$cat",
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
            return chai.assert.ok(true, "hello assert8");
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