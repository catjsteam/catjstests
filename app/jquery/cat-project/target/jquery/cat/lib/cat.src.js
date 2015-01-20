_cat.core.declare('jquery.index.html.formWidgetsScroll$$cat', {
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
    "name": ["formWidgetsScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#formWidgets\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/index.html",
    "scrapinfo": {
      "start": {
        "line": 83,
        "col": 18
      },
      "end": {
        "line": 87,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 82,
        "col": 16
      },
      "end": {
        "line": 88,
        "col": 16
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
    "id": "scrap_28299d34-ab98-25fb-e991-253abfa78b81",
    "$type": "html",
    "pkgName": "jquery.index.html.formWidgetsScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.index.html.checkboxesRef$$cat', {
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
    "name": ["checkboxesRef"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#checkboxesRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/index.html",
    "scrapinfo": {
      "start": {
        "line": 93,
        "col": 22
      },
      "end": {
        "line": 97,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 92,
        "col": 20
      },
      "end": {
        "line": 98,
        "col": 23
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
    "id": "scrap_db6a0814-a338-e27a-84fc-542f9e5c7bbc",
    "$type": "html",
    "pkgName": "jquery.index.html.checkboxesRef"
  }
}, 'scrap');
_cat.core.define("jquery.index.html.formWidgetsScroll$$cat", function(thi$) {

  var pkgName = "jquery.index.html.formWidgetsScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#formWidgets");
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
_cat.core.define("jquery.index.html.checkboxesRef$$cat", function(thi$) {

  var pkgName = "jquery.index.html.checkboxesRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#checkboxesRef");
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
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat', {
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
    "name": ["checkboxVerticalScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#checkboxVertical\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 103,
        "col": 19
      },
      "end": {
        "line": 107,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 102,
        "col": 8
      },
      "end": {
        "line": 108,
        "col": 17
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
    "id": "scrap_73940c5a-ee32-e57a-cebb-2315fe60287a",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.checkboxVerticalScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat', {
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
    "name": ["checkboxVerticalGroupScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#checkboxVerticalGroup\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 110,
        "col": 19
      },
      "end": {
        "line": 114,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 109,
        "col": 8
      },
      "end": {
        "line": 115,
        "col": 17
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
    "id": "scrap_7956da96-0a62-6040-0d00-fc2c993b8039",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.setCheckC$$cat', {
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
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["setCheckC"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#checkbox-v-2c\");"],
    "assert": ["ok($('#checkbox-v-2c').is(':checked'),'checkbox-v-2c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 118,
        "col": 19
      },
      "end": {
        "line": 123,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 117,
        "col": 8
      },
      "end": {
        "line": 124,
        "col": 17
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "jqm": false,
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
      "jqm": -1,
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
    "id": "scrap_9269e351-8499-5a85-1a8c-6d8a830570e8",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.setCheckC"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.setCheckB$$cat', {
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
    }, {
      "key": "assert",
      "cell": 0
    }],
    "name": ["setCheckB"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#checkbox-v-2b\");"],
    "assert": ["ok($('#checkbox-v-2b').is(':checked'),'checkbox-v-2b is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 128,
        "col": 18
      },
      "end": {
        "line": 133,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 127,
        "col": 8
      },
      "end": {
        "line": 134,
        "col": 16
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "embed": true,
      "jqm": false,
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
      "jqm": -1,
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
    "id": "scrap_51fd1b59-a5ac-de1c-efbf-30c924cb51b4",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.setCheckB"
  }
}, 'scrap');
_cat.core.define("jquery.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#checkboxVertical");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#checkboxVerticalGroup");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.setCheckC$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.setCheckC$$cat",
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
        _cat.core.plugin("jqm").actions.setCheck("#checkbox-v-2c");
      }
    ],
    context: {
      scrapName: 'jqm',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
  _cat.core.clientmanager.delayManager({
    commands: [
      function(context, thi$) {
        _cat.utils.chai.assert(context);
      }
    ],
    context: {
      'code': ["assert", "ok($(\"#checkbox-v-2c\").is(\":checked\"),\"checkbox-v-2c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-checkbox.index.html.setCheckB$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.setCheckB$$cat",
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
        _cat.core.plugin("jqm").actions.setCheck("#checkbox-v-2b");
      }
    ],
    context: {
      scrapName: 'jqm',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
  _cat.core.clientmanager.delayManager({
    commands: [
      function(context, thi$) {
        _cat.utils.chai.assert(context);
      }
    ],
    context: {
      'code': ["assert", "ok($(\"#checkbox-v-2b\").is(\":checked\"),\"checkbox-v-2b is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});