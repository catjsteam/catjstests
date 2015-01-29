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
    "id": "scrap_87014d77-46e9-c422-4e5d-07dc974ec64d",
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
    "id": "scrap_7d4df656-f2ec-7559-d03d-80627b5c2bd6",
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
        "line": 95,
        "col": 19
      },
      "end": {
        "line": 99,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 94,
        "col": 8
      },
      "end": {
        "line": 100,
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
    "id": "scrap_bd8eb7ab-b9a6-aa0e-e790-2328d495176c",
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
        "line": 102,
        "col": 19
      },
      "end": {
        "line": 106,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 101,
        "col": 8
      },
      "end": {
        "line": 107,
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
    "id": "scrap_2737ffae-4a2e-3249-55ae-d48238b502db",
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
        "line": 110,
        "col": 19
      },
      "end": {
        "line": 115,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 109,
        "col": 8
      },
      "end": {
        "line": 116,
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
    "id": "scrap_76bae837-a51f-49e4-be5f-39757f41fcd1",
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
        "line": 120,
        "col": 18
      },
      "end": {
        "line": 125,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 119,
        "col": 8
      },
      "end": {
        "line": 126,
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
    "id": "scrap_3db1762c-0168-6f85-5608-68be4bd4f979",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.setCheckB"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat', {
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
    "name": ["checkboxHorizontalScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#checkboxHorizontal\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 129,
        "col": 19
      },
      "end": {
        "line": 133,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 128,
        "col": 8
      },
      "end": {
        "line": 134,
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
    "id": "scrap_ca6362b1-1b48-b75b-e4dd-1ca3190b4ac9",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.checkboxHorizontalScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.setHCheckC$$cat', {
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
    "name": ["setHCheckC"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#checkbox-h-2a\");"],
    "assert": ["ok($('#checkbox-h-2a').is(':checked'),'checkbox-h-2a is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 137,
        "col": 19
      },
      "end": {
        "line": 142,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 136,
        "col": 8
      },
      "end": {
        "line": 143,
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
    "id": "scrap_0603a23b-217f-e1d4-0611-e93081cf35c6",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.setHCheckC"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.setHCheckB$$cat', {
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
    "name": ["setHCheckB"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#checkbox-h-2c\");"],
    "assert": ["ok($('#checkbox-h-2c').is(':checked'),'checkbox-h-2c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 147,
        "col": 18
      },
      "end": {
        "line": 152,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 146,
        "col": 8
      },
      "end": {
        "line": 153,
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
    "id": "scrap_628fe831-db36-6cb2-a298-68134851f66b",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.setHCheckB"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat', {
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
    "name": ["scrollTopCheckbox"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 156,
        "col": 11
      },
      "end": {
        "line": 160,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 155,
        "col": 8
      },
      "end": {
        "line": 163,
        "col": 9
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
    "id": "scrap_3c05c500-d20d-f669-7a70-31c40030e150",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.scrollTopCheckbox"
  }
}, 'scrap');
_cat.core.setManager("scrapCheckboxManager", "jquery.checkboxradio-checkbox.index.html.appMenuClick$$cat");
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.appMenuClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["appMenuClick"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 166,
        "col": 22
      },
      "end": {
        "line": 171,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 165,
        "col": 8
      },
      "end": {
        "line": 172,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_409d2f2d-13d9-32a1-0569-63c6a36740b6",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.appMenuClick"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.sliderScroll1$$cat', {
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
    "name": ["sliderScroll1"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#sliderWidget\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 177,
        "col": 23
      },
      "end": {
        "line": 181,
        "col": 25
      }
    },
    "commentinfo": {
      "start": {
        "line": 176,
        "col": 8
      },
      "end": {
        "line": 182,
        "col": 21
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
    "id": "scrap_6f9b06f0-79eb-32d3-6c09-d186f213d806",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.sliderScroll1"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.sliderMenuClick$$cat', {
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
    "name": ["sliderMenuClick"],
    "embed": ["true"],
    "jqm": ["click(\"#sliderWidget\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 184,
        "col": 26
      },
      "end": {
        "line": 188,
        "col": 28
      }
    },
    "commentinfo": {
      "start": {
        "line": 183,
        "col": 8
      },
      "end": {
        "line": 189,
        "col": 27
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
    "id": "scrap_0df22604-4006-b6e2-b55a-e32eefc8c674",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.sliderMenuClick"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.sliderScroll2$$cat', {
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
    "name": ["sliderScroll2"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#sliderWidget\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 192,
        "col": 23
      },
      "end": {
        "line": 196,
        "col": 25
      }
    },
    "commentinfo": {
      "start": {
        "line": 191,
        "col": 8
      },
      "end": {
        "line": 197,
        "col": 21
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
    "id": "scrap_996e02ca-1ba1-1fc9-8a7e-65db65759d0b",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.sliderScroll2"
  }
}, 'scrap');
_cat.core.declare('jquery.checkboxradio-checkbox.index.html.sliderRef$$cat', {
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
    "name": ["sliderRef"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#sliderRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 200,
        "col": 22
      },
      "end": {
        "line": 204,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 199,
        "col": 8
      },
      "end": {
        "line": 205,
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
    "id": "scrap_d13d1026-304d-e865-9a72-67163e462571",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-checkbox.index.html.sliderRef"
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#checkboxHorizontal");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.setHCheckC$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.setHCheckC$$cat",
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
        _cat.core.plugin("jqm").actions.setCheck("#checkbox-h-2a");
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
      'code': ["assert", "ok($(\"#checkbox-h-2a\").is(\":checked\"),\"checkbox-h-2a is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-checkbox.index.html.setHCheckB$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.setHCheckB$$cat",
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
        _cat.core.plugin("jqm").actions.setCheck("#checkbox-h-2c");
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
      'code': ["assert", "ok($(\"#checkbox-h-2c\").is(\":checked\"),\"checkbox-h-2c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTop();
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.appMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.appMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenu");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.sliderScroll1$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.sliderScroll1$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#sliderWidget");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.sliderMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.sliderMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#sliderWidget");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.sliderScroll2$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.sliderScroll2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#sliderWidget");
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
_cat.core.define("jquery.checkboxradio-checkbox.index.html.sliderRef$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-checkbox.index.html.sliderRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#sliderRef");
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
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.appMenuRadioClick$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.appMenuRadioClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["appMenuRadioClick"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuRadio\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 30,
        "col": 21
      },
      "end": {
        "line": 35,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 29,
        "col": 8
      },
      "end": {
        "line": 36,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_500837a2-f504-a16d-d064-fb395c32eb03",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.appMenuRadioClick"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.verDivScroll$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.verDivScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["verDivScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#verDiv\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 70,
        "col": 16
      },
      "end": {
        "line": 76,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 69,
        "col": 8
      },
      "end": {
        "line": 77,
        "col": 14
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_cfc6cc55-c6b1-a383-2ae7-26e7163263a6",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.verDivScroll"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.verGroupRadio$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.verGroupRadio$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["verGroupRadio"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2c\");"],
    "assert": ["ok($('#radio-choice-v-2c').is(':checked'),'radio-choice-v-2c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 79,
        "col": 22
      },
      "end": {
        "line": 85,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 78,
        "col": 8
      },
      "end": {
        "line": 86,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_866d01cd-b557-8155-b804-c722c6710585",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.verGroupRadio"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.verGroupRadio2$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.verGroupRadio2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["verGroupRadio2"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2a\");"],
    "assert": ["ok($('#radio-choice-v-2a').is(':checked'),'radio-choice-v-2a is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 89,
        "col": 22
      },
      "end": {
        "line": 96,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 88,
        "col": 8
      },
      "end": {
        "line": 97,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_6d6fba3a-6e5a-847e-6b49-ca9ab495d75a",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.verGroupRadio2"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.verGroupRadio3$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.verGroupRadio3$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["verGroupRadio3"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2d\");"],
    "assert": ["ok($('#radio-choice-v-2d').is(':checked'),'radio-choice-v-2d is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 100,
        "col": 21
      },
      "end": {
        "line": 106,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 99,
        "col": 8
      },
      "end": {
        "line": 107,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_4f02eb0b-605a-3242-6207-e3adc4c2cf52",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.verGroupRadio3"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.horDivScroll$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.horDivScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["horDivScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#horDiv\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 132,
        "col": 16
      },
      "end": {
        "line": 138,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 131,
        "col": 8
      },
      "end": {
        "line": 139,
        "col": 14
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_342cd941-837d-cee0-6a9f-67189c015f88",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.horDivScroll"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.horGroupRadio$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.horGroupRadio$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["horGroupRadio"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2c\");"],
    "assert": ["ok($('#radio-choice-h-2c').is(':checked'),'radio-choice-h-2c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 141,
        "col": 22
      },
      "end": {
        "line": 147,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 140,
        "col": 8
      },
      "end": {
        "line": 148,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_b883b595-7ab0-7b07-17a2-04af67bed427",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.horGroupRadio"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.horGroupRadio2$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.horGroupRadio2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["horGroupRadio2"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2b\");"],
    "assert": ["ok($('#radio-choice-h-2b').is(':checked'),'radio-choice-h-2b is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 151,
        "col": 21
      },
      "end": {
        "line": 157,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 150,
        "col": 8
      },
      "end": {
        "line": 158,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_cc6aea3f-7e57-2b24-6608-d6ee3fdfcb82",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.horGroupRadio2"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.agreeDivScroll$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.agreeDivScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["agreeDivScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#agreeDiv\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 245,
        "col": 16
      },
      "end": {
        "line": 251,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 244,
        "col": 8
      },
      "end": {
        "line": 252,
        "col": 14
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_7c146ace-6acf-3076-b797-04e6b4a7b6e5",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.agreeDivScroll"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.agreeGroupRadio$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.agreeGroupRadio$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["agreeGroupRadio"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"agreeClass\", \"radio-enhanced\");"],
    "assert": ["ok($('#radio-enhanced').is(':checked'),'radio-enhanced is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 254,
        "col": 22
      },
      "end": {
        "line": 260,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 253,
        "col": 8
      },
      "end": {
        "line": 261,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_ac01bb4f-0324-ae6e-446c-42cf92b29e19",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.agreeGroupRadio"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["collapsibleMenuScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#collapsibleMenuScroll\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 286,
        "col": 17
      },
      "end": {
        "line": 291,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 285,
        "col": 4
      },
      "end": {
        "line": 292,
        "col": 15
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_a93f4c20-5ff0-5419-4e00-1e13430a8a1b",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.collapsibleMenuScroll"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.collapsibleMenuClick$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.collapsibleMenuClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["collapsibleMenuClick"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["click(\"#collapsibleMenuScroll\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 295,
        "col": 21
      },
      "end": {
        "line": 300,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 294,
        "col": 4
      },
      "end": {
        "line": 301,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_403e8805-4948-a861-482f-1c3c82e38622",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.collapsibleMenuClick"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["collapsibleMenuScroll2"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#collapsibleMenuScroll\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 304,
        "col": 19
      },
      "end": {
        "line": 309,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 303,
        "col": 4
      },
      "end": {
        "line": 310,
        "col": 17
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_0f40b2d2-83d2-9b0e-dc00-f1185bbf42b1",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.collapsibleMenuScroll2"
  }
}, 'scrap');
_cat.core.setManager("radioManager", "jquery.checkboxradio-radio.index.html.collapsibleRef$$cat");
_cat.core.declare('jquery.checkboxradio-radio.index.html.collapsibleRef$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["collapsibleRef"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#collapsibleRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 313,
        "col": 18
      },
      "end": {
        "line": 318,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 312,
        "col": 4
      },
      "end": {
        "line": 319,
        "col": 19
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_5f8322b3-7a65-8c58-de3f-cea2bd897dda",
    "$type": "html",
    "pkgName": "jquery.checkboxradio-radio.index.html.collapsibleRef"
  }
}, 'scrap');
_cat.core.define("jquery.checkboxradio-radio.index.html.appMenuRadioClick$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.appMenuRadioClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuRadio");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.verDivScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.verDivScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#verDiv");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.verGroupRadio$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.verGroupRadio$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("verRadioGroup", "radio-choice-v-2c");
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
      'code': ["assert", "ok($(\"#radio-choice-v-2c\").is(\":checked\"),\"radio-choice-v-2c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-radio.index.html.verGroupRadio2$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.verGroupRadio2$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("verRadioGroup", "radio-choice-v-2a");
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
      'code': ["assert", "ok($(\"#radio-choice-v-2a\").is(\":checked\"),\"radio-choice-v-2a is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-radio.index.html.verGroupRadio3$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.verGroupRadio3$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("verRadioGroup", "radio-choice-v-2d");
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
      'code': ["assert", "ok($(\"#radio-choice-v-2d\").is(\":checked\"),\"radio-choice-v-2d is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-radio.index.html.horDivScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.horDivScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#horDiv");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.horGroupRadio$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.horGroupRadio$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("horGroup", "radio-choice-h-2c");
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
      'code': ["assert", "ok($(\"#radio-choice-h-2c\").is(\":checked\"),\"radio-choice-h-2c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-radio.index.html.horGroupRadio2$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.horGroupRadio2$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("horGroup", "radio-choice-h-2b");
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
      'code': ["assert", "ok($(\"#radio-choice-h-2b\").is(\":checked\"),\"radio-choice-h-2b is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-radio.index.html.agreeDivScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.agreeDivScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#agreeDiv");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.agreeGroupRadio$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.agreeGroupRadio$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("agreeClass", "radio-enhanced");
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
      'code': ["assert", "ok($(\"#radio-enhanced\").is(\":checked\"),\"radio-enhanced is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#collapsibleMenuScroll");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.collapsibleMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.collapsibleMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#collapsibleMenuScroll");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#collapsibleMenuScroll");
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
_cat.core.define("jquery.checkboxradio-radio.index.html.collapsibleRef$$cat", function(thi$) {

  var pkgName = "jquery.checkboxradio-radio.index.html.collapsibleRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#collapsibleRef");
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
_cat.core.declare('jquery.collapsible.index.html.appMenuCollapsibleClick$$cat', {
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
    "name": ["appMenuCollapsibleClick"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuCollapsible\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 34,
        "col": 20
      },
      "end": {
        "line": 39,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 33,
        "col": 8
      },
      "end": {
        "line": 40,
        "col": 21
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
    "id": "scrap_7991eed1-dc46-33c1-ae19-3f5e0fa14b73",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.appMenuCollapsibleClick"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.basicCollapsibleScroll$$cat', {
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
    "name": ["basicCollapsibleScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#basicCollapsibleScroll\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 55,
        "col": 18
      },
      "end": {
        "line": 60,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 54,
        "col": 8
      },
      "end": {
        "line": 61,
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
    "id": "scrap_2e169387-e403-cd24-83c6-ccedc58c74c0",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.basicCollapsibleScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.basicCollapsibleClick$$cat', {
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
    "name": ["basicCollapsibleClick"],
    "embed": ["true"],
    "jqm": ["collapsible(\"#basicCollapsible\");"],
    "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 64,
        "col": 21
      },
      "end": {
        "line": 70,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 63,
        "col": 8
      },
      "end": {
        "line": 71,
        "col": 22
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
    "id": "scrap_68296fb7-2e17-d32e-72af-5799861ff153",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.basicCollapsibleClick"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.legendScroll$$cat', {
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
    "name": ["legendScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#legend\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 158,
        "col": 22
      },
      "end": {
        "line": 163,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 157,
        "col": 8
      },
      "end": {
        "line": 164,
        "col": 20
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
    "id": "scrap_937980b1-0645-9531-dc06-3c599ab6861a",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.legendScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.legendClick$$cat', {
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
    "name": ["legendClick"],
    "embed": ["true"],
    "jqm": ["collapsible(\"#legendClick\");"],
    "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 171,
        "col": 21
      },
      "end": {
        "line": 177,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 170,
        "col": 16
      },
      "end": {
        "line": 178,
        "col": 22
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
    "id": "scrap_fe8c1db0-5cd8-19d6-79b0-00718010d597",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.legendClick"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.setTextLegend$$cat', {
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
    "name": ["setTextLegend"],
    "embed": ["true"],
    "jqm": ["setText(\"#textinput-f\", \"hello from legend\");"],
    "assert": ["ok($('#textinput-f').val()=='hello from legend','textinput-f text is correct');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 181,
        "col": 17
      },
      "end": {
        "line": 187,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 180,
        "col": 16
      },
      "end": {
        "line": 188,
        "col": 15
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
    "id": "scrap_92516db6-ad60-13a8-e1c9-cd59c727a284",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.setTextLegend"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.setCheckCollaps3$$cat', {
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
    "name": ["setCheckCollaps3"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#checkbox-3-a\");"],
    "assert": ["ok($('#checkbox-3-a').is(':checked'),'checkbox-3-a is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 192,
        "col": 18
      },
      "end": {
        "line": 198,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 191,
        "col": 16
      },
      "end": {
        "line": 199,
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
    "id": "scrap_d5b3a014-1909-4011-4782-c2968517e45f",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.setCheckCollaps3"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.setCheckCollaps1$$cat', {
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
    "name": ["setCheckCollaps1"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#checkbox-1-a\");"],
    "assert": ["ok($('#checkbox-1-a').is(':checked'),'checkbox-1-a is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 203,
        "col": 18
      },
      "end": {
        "line": 209,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 202,
        "col": 16
      },
      "end": {
        "line": 210,
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
    "id": "scrap_db0bb5b5-7071-eaa7-99a3-218679db4741",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.setCheckCollaps1"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.legendUnClick$$cat', {
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
    "name": ["legendUnClick"],
    "embed": ["true"],
    "jqm": ["collapsible(\"#legendClick\");"],
    "assert": ["ok($('#legendClick').collapsible( 'option' ).collapsed,'legendClick is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 213,
        "col": 21
      },
      "end": {
        "line": 219,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 212,
        "col": 16
      },
      "end": {
        "line": 220,
        "col": 22
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
    "id": "scrap_0c4d7771-5c41-06cf-0b7e-9c332515a072",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.legendUnClick"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.selectMenuScroll$$cat', {
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
    "name": ["selectMenuScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#selectMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 468,
        "col": 17
      },
      "end": {
        "line": 472,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 467,
        "col": 4
      },
      "end": {
        "line": 473,
        "col": 15
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
    "id": "scrap_64c705c2-f4ec-29ce-e41f-30b80ae25e4d",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.selectMenuScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.selectMenuClick$$cat', {
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
    "name": ["selectMenuClick"],
    "embed": ["true"],
    "jqm": ["click(\"#selectMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 476,
        "col": 21
      },
      "end": {
        "line": 480,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 475,
        "col": 4
      },
      "end": {
        "line": 481,
        "col": 22
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
    "id": "scrap_eb101712-4aeb-d990-7eed-d5a455a0d35f",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.selectMenuClick"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.selectMenuScroll2$$cat', {
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
    "name": ["selectMenuScroll2"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#selectMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 484,
        "col": 19
      },
      "end": {
        "line": 488,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 483,
        "col": 4
      },
      "end": {
        "line": 489,
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
    "id": "scrap_4af8e9b5-5132-f0a9-3026-11ac85703636",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.selectMenuScroll2"
  }
}, 'scrap');
_cat.core.declare('jquery.collapsible.index.html.selectmenuRef$$cat', {
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
    "name": ["selectmenuRef"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#selectmenuRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 492,
        "col": 18
      },
      "end": {
        "line": 496,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 491,
        "col": 4
      },
      "end": {
        "line": 497,
        "col": 19
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
    "id": "scrap_74242c29-9a53-349f-3448-23856d28443b",
    "$type": "html",
    "pkgName": "jquery.collapsible.index.html.selectmenuRef"
  }
}, 'scrap');
_cat.core.define("jquery.collapsible.index.html.appMenuCollapsibleClick$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.appMenuCollapsibleClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuCollapsible");
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
_cat.core.define("jquery.collapsible.index.html.basicCollapsibleScroll$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.basicCollapsibleScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#basicCollapsibleScroll");
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
_cat.core.define("jquery.collapsible.index.html.basicCollapsibleClick$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.basicCollapsibleClick$$cat",
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
        _cat.core.plugin("jqm").actions.collapsible("#basicCollapsible");
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
      'code': ["assert", "ok(!$(\"#basicCollapsible\").collapsible(\"option\").collapsed,\"radio-choice-v-2c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.collapsible.index.html.legendScroll$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.legendScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#legend");
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
_cat.core.define("jquery.collapsible.index.html.legendClick$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.legendClick$$cat",
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
        _cat.core.plugin("jqm").actions.collapsible("#legendClick");
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
      'code': ["assert", "ok(!$(\"#basicCollapsible\").collapsible(\"option\").collapsed,\"radio-choice-v-2c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.collapsible.index.html.setTextLegend$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.setTextLegend$$cat",
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
        _cat.core.plugin("jqm").actions.setText("#textinput-f", "hello from legend");
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
      'code': ["assert", "ok($(\"#textinput-f\").val()==\"hello from legend\",\"textinput-f text is correct\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.collapsible.index.html.setCheckCollaps3$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.setCheckCollaps3$$cat",
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
        _cat.core.plugin("jqm").actions.setCheck("#checkbox-3-a");
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
      'code': ["assert", "ok($(\"#checkbox-3-a\").is(\":checked\"),\"checkbox-3-a is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.collapsible.index.html.setCheckCollaps1$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.setCheckCollaps1$$cat",
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
        _cat.core.plugin("jqm").actions.setCheck("#checkbox-1-a");
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
      'code': ["assert", "ok($(\"#checkbox-1-a\").is(\":checked\"),\"checkbox-1-a is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.collapsible.index.html.legendUnClick$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.legendUnClick$$cat",
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
        _cat.core.plugin("jqm").actions.collapsible("#legendClick");
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
      'code': ["assert", "ok($(\"#legendClick\").collapsible(\"option\").collapsed,\"legendClick is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.collapsible.index.html.selectMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.selectMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#selectMenu");
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
_cat.core.define("jquery.collapsible.index.html.selectMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.selectMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#selectMenu");
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
_cat.core.define("jquery.collapsible.index.html.selectMenuScroll2$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.selectMenuScroll2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#selectMenu");
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
_cat.core.define("jquery.collapsible.index.html.selectmenuRef$$cat", function(thi$) {

  var pkgName = "jquery.collapsible.index.html.selectmenuRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#selectmenuRef");
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
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.formTextScroll$$cat");
_cat.core.declare('jquery.forms.index.html.formTextScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["formTextScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#formText\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 282,
        "col": 16
      },
      "end": {
        "line": 287,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 281,
        "col": 8
      },
      "end": {
        "line": 288,
        "col": 14
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_2174c0b7-ebfb-11c7-6aea-9eddd32c270e",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.formTextScroll"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.setTextForm$$cat");
_cat.core.declare('jquery.forms.index.html.setTextForm$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["setTextForm"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["setText(\"#text-basic\", \"hello world\");"],
    "assert": ["ok($('#text-basic').val()=='hello world','text-basic text == hello world');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 293,
        "col": 19
      },
      "end": {
        "line": 299,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 292,
        "col": 8
      },
      "end": {
        "line": 300,
        "col": 17
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_8ff72d69-583d-df66-00df-36414e807ee1",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.setTextForm"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.formDateScroll$$cat");
_cat.core.declare('jquery.forms.index.html.formDateScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["formDateScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#dateDiv\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 302,
        "col": 25
      },
      "end": {
        "line": 307,
        "col": 27
      }
    },
    "commentinfo": {
      "start": {
        "line": 301,
        "col": 8
      },
      "end": {
        "line": 308,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_7a022f3a-6a8f-ee60-af7b-15b126c56b8a",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.formDateScroll"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.setDate$$cat");
_cat.core.declare('jquery.forms.index.html.setDate$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["setDate"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["setText(\"#date\", \"2014-02-27\");"],
    "assert": ["ok($('#date').val()=='2014-02-27','date == 2014-02-27');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 311,
        "col": 18
      },
      "end": {
        "line": 317,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 310,
        "col": 8
      },
      "end": {
        "line": 318,
        "col": 16
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_9a913067-194c-b74b-8019-9cd229991651",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.setDate"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.checkbox-radioHScroll$$cat");
_cat.core.declare('jquery.forms.index.html.checkbox-radioHScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["checkbox-radioHScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#checkbox-radioH\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 323,
        "col": 26
      },
      "end": {
        "line": 328,
        "col": 28
      }
    },
    "commentinfo": {
      "start": {
        "line": 322,
        "col": 8
      },
      "end": {
        "line": 329,
        "col": 24
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_1afeb8a6-d5f9-7225-efef-aa6a9d8edc58",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.checkbox-radioHScroll"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.hRadio$$cat");
_cat.core.declare('jquery.forms.index.html.hRadio$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["hRadio"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-c\" );"],
    "assert": ["ok($('#radio-choice-c').is(':checked'),'radio-choice-c is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 331,
        "col": 10
      },
      "end": {
        "line": 337,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 330,
        "col": 8
      },
      "end": {
        "line": 338,
        "col": 11
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_8cfb6c51-4552-0a23-6a10-b073abb50bcf",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.hRadio"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.hRadio2$$cat");
_cat.core.declare('jquery.forms.index.html.hRadio2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["hRadio2"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-e\" );"],
    "assert": ["ok($('#radio-choice-e').is(':checked'),'radio-choice-e is checked');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 342,
        "col": 10
      },
      "end": {
        "line": 348,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 341,
        "col": 8
      },
      "end": {
        "line": 349,
        "col": 11
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_06a6aa35-a117-c0f6-b875-b3e812a505b0",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.hRadio2"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.scrollTopForm$$cat");
_cat.core.declare('jquery.forms.index.html.scrollTopForm$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["scrollTopForm"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 356,
        "col": 11
      },
      "end": {
        "line": 361,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 355,
        "col": 8
      },
      "end": {
        "line": 362,
        "col": 9
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_91d2dc78-cf0f-d3c8-8feb-bda6111f62a5",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.scrollTopForm"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.appMenuFormClick$$cat");
_cat.core.declare('jquery.forms.index.html.appMenuFormClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["appMenuFormClick"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuForm\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 365,
        "col": 30
      },
      "end": {
        "line": 370,
        "col": 32
      }
    },
    "commentinfo": {
      "start": {
        "line": 364,
        "col": 8
      },
      "end": {
        "line": 371,
        "col": 31
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_b2c5ef7c-e163-8828-8605-65ca3589b1da",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.appMenuFormClick"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.gridsMenuScroll$$cat");
_cat.core.declare('jquery.forms.index.html.gridsMenuScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["gridsMenuScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#gridsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 373,
        "col": 17
      },
      "end": {
        "line": 378,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 372,
        "col": 8
      },
      "end": {
        "line": 379,
        "col": 15
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_c7ef942a-4c22-5a0f-fa38-9e7cef5f665a",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.gridsMenuScroll"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.gridsMenuClick$$cat");
_cat.core.declare('jquery.forms.index.html.gridsMenuClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["gridsMenuClick"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["click(\"#gridsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 382,
        "col": 25
      },
      "end": {
        "line": 387,
        "col": 27
      }
    },
    "commentinfo": {
      "start": {
        "line": 381,
        "col": 8
      },
      "end": {
        "line": 388,
        "col": 26
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_b52d7636-3a13-7f30-7b40-8093e9872d53",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.gridsMenuClick"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.gridsMenuScroll2$$cat");
_cat.core.declare('jquery.forms.index.html.gridsMenuScroll2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["gridsMenuScroll2"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#gridsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 391,
        "col": 23
      },
      "end": {
        "line": 396,
        "col": 25
      }
    },
    "commentinfo": {
      "start": {
        "line": 390,
        "col": 8
      },
      "end": {
        "line": 397,
        "col": 21
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_550e4856-0874-741f-6cf4-57ed37be0186",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.gridsMenuScroll2"
  }
}, 'scrap');
_cat.core.setManager("scrapFormManager", "jquery.forms.index.html.gridsRef$$cat");
_cat.core.declare('jquery.forms.index.html.gridsRef$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["gridsRef"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#gridsPageLink\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 400,
        "col": 22
      },
      "end": {
        "line": 405,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 399,
        "col": 8
      },
      "end": {
        "line": 406,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_cd503bc0-ff7e-296c-4c8e-0baa8311193c",
    "$type": "html",
    "pkgName": "jquery.forms.index.html.gridsRef"
  }
}, 'scrap');
_cat.core.define("jquery.forms.index.html.formTextScroll$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.formTextScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#formText");
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
_cat.core.define("jquery.forms.index.html.setTextForm$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.setTextForm$$cat",
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
        _cat.core.plugin("jqm").actions.setText("#text-basic", "hello world");
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
      'code': ["assert", "ok($(\"#text-basic\").val()==\"hello world\",\"text-basic text == hello world\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.forms.index.html.formDateScroll$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.formDateScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#dateDiv");
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
_cat.core.define("jquery.forms.index.html.setDate$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.setDate$$cat",
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
        _cat.core.plugin("jqm").actions.setText("#date", "2014-02-27");
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
      'code': ["assert", "ok($(\"#date\").val()==\"2014-02-27\",\"date == 2014-02-27\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.forms.index.html.checkbox-radioHScroll$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.checkbox-radioHScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#checkbox-radioH");
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
_cat.core.define("jquery.forms.index.html.hRadio$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.hRadio$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("hRadio", "radio-choice-c");
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
      'code': ["assert", "ok($(\"#radio-choice-c\").is(\":checked\"),\"radio-choice-c is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.forms.index.html.hRadio2$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.hRadio2$$cat",
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
        _cat.core.plugin("jqm").actions.checkRadio("hRadio", "radio-choice-e");
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
      'code': ["assert", "ok($(\"#radio-choice-e\").is(\":checked\"),\"radio-choice-e is checked\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.forms.index.html.scrollTopForm$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.scrollTopForm$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTop();
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
_cat.core.define("jquery.forms.index.html.appMenuFormClick$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.appMenuFormClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuForm");
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
_cat.core.define("jquery.forms.index.html.gridsMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.gridsMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#gridsMenu");
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
_cat.core.define("jquery.forms.index.html.gridsMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.gridsMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#gridsMenu");
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
_cat.core.define("jquery.forms.index.html.gridsMenuScroll2$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.gridsMenuScroll2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#gridsMenu");
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
_cat.core.define("jquery.forms.index.html.gridsRef$$cat", function(thi$) {

  var pkgName = "jquery.forms.index.html.gridsRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#gridsPageLink");
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
_cat.core.setManager("gridManager", "jquery.grids.index.html.appMenuGridsClick$$cat");
_cat.core.declare('jquery.grids.index.html.appMenuGridsClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["appMenuGridsClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuGrids\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 29,
        "col": 22
      },
      "end": {
        "line": 34,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 28,
        "col": 8
      },
      "end": {
        "line": 35,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_b18d91b5-797e-1f15-1b3b-6fa590bc52ff",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.appMenuGridsClick"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.btnDivsScroll$$cat");
_cat.core.declare('jquery.grids.index.html.btnDivsScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["btnDivsScroll"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#btnDivs\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 76,
        "col": 18
      },
      "end": {
        "line": 82,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 75,
        "col": 8
      },
      "end": {
        "line": 83,
        "col": 16
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_084eccdb-0f8b-1b07-2127-8055aa9aec4c",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.btnDivsScroll"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.hmmBtnClick$$cat");
_cat.core.declare('jquery.grids.index.html.hmmBtnClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["hmmBtnClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#hmmBtn\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 97,
        "col": 22
      },
      "end": {
        "line": 102,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 96,
        "col": 20
      },
      "end": {
        "line": 103,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_48133cdd-03c6-c865-d919-5020cd99e808",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.hmmBtnClick"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.yesBtnClick$$cat");
_cat.core.declare('jquery.grids.index.html.yesBtnClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["yesBtnClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#yesBtn\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 106,
        "col": 22
      },
      "end": {
        "line": 111,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 105,
        "col": 20
      },
      "end": {
        "line": 112,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_a2899151-a542-e217-5c46-3bdf6cb1f315",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.yesBtnClick"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.noBtnClick$$cat");
_cat.core.declare('jquery.grids.index.html.noBtnClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["noBtnClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#noBtn\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 114,
        "col": 22
      },
      "end": {
        "line": 119,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 113,
        "col": 20
      },
      "end": {
        "line": 120,
        "col": 23
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_5272f6fe-f42b-0e2e-fa70-4a3f9508fd5b",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.noBtnClick"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.radioMenuScroll$$cat");
_cat.core.declare('jquery.grids.index.html.radioMenuScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["radioMenuScroll"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#radioMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 267,
        "col": 13
      },
      "end": {
        "line": 272,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 266,
        "col": 4
      },
      "end": {
        "line": 273,
        "col": 11
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_29211b29-d8b1-55f3-cece-a07ec8f64f0b",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.radioMenuScroll"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.radioMenuClick$$cat");
_cat.core.declare('jquery.grids.index.html.radioMenuClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["radioMenuClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["click(\"#radioMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 276,
        "col": 21
      },
      "end": {
        "line": 281,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 275,
        "col": 4
      },
      "end": {
        "line": 282,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_e65bb7d6-21b6-4f8a-5c8e-029b96a1cfac",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.radioMenuClick"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.radioMenuScroll2$$cat");
_cat.core.declare('jquery.grids.index.html.radioMenuScroll2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["radioMenuScroll2"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#radioMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 285,
        "col": 19
      },
      "end": {
        "line": 290,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 284,
        "col": 4
      },
      "end": {
        "line": 291,
        "col": 17
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_d4590fe1-771b-f797-a75e-124b7f05ba3e",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.radioMenuScroll2"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.radioRef$$cat");
_cat.core.declare('jquery.grids.index.html.radioRef$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["radioRef"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#radioRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 294,
        "col": 18
      },
      "end": {
        "line": 299,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 293,
        "col": 4
      },
      "end": {
        "line": 300,
        "col": 19
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_d827aeca-eaf9-8e42-af26-ee795005cf66",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.radioRef"
  }
}, 'scrap');
_cat.core.setManager("gridManager", "jquery.grids.index.html.scrollTopGrids$$cat");
_cat.core.declare('jquery.grids.index.html.scrollTopGrids$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["scrollTopGrids"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 309,
        "col": 11
      },
      "end": {
        "line": 314,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 308,
        "col": 0
      },
      "end": {
        "line": 315,
        "col": 9
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_59a8a284-cf32-e549-8dc2-fd1019fdcd82",
    "$type": "html",
    "pkgName": "jquery.grids.index.html.scrollTopGrids"
  }
}, 'scrap');
_cat.core.define("jquery.grids.index.html.appMenuGridsClick$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.appMenuGridsClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuGrids");
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
_cat.core.define("jquery.grids.index.html.btnDivsScroll$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.btnDivsScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#btnDivs");
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
_cat.core.define("jquery.grids.index.html.hmmBtnClick$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.hmmBtnClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#hmmBtn");
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
_cat.core.define("jquery.grids.index.html.yesBtnClick$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.yesBtnClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#yesBtn");
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
_cat.core.define("jquery.grids.index.html.noBtnClick$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.noBtnClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#noBtn");
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
_cat.core.define("jquery.grids.index.html.radioMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.radioMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#radioMenu");
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
_cat.core.define("jquery.grids.index.html.radioMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.radioMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#radioMenu");
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
_cat.core.define("jquery.grids.index.html.radioMenuScroll2$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.radioMenuScroll2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#radioMenu");
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
_cat.core.define("jquery.grids.index.html.radioRef$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.radioRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#radioRef");
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
_cat.core.define("jquery.grids.index.html.scrollTopGrids$$cat", function(thi$) {

  var pkgName = "jquery.grids.index.html.scrollTopGrids$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTop();
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
_cat.core.declare('jquery.selectmenu.index.html.appMenuSelectClick$$cat', {
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
    "name": ["appMenuSelectClick"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuSelect\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 29,
        "col": 20
      },
      "end": {
        "line": 34,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 28,
        "col": 8
      },
      "end": {
        "line": 35,
        "col": 21
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
    "id": "scrap_8119b3e4-e5b4-913a-71f6-8c6ae0b8061f",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.appMenuSelectClick"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.basicSelectScroll$$cat', {
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
    "name": ["basicSelectScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#basicSelect\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 51,
        "col": 16
      },
      "end": {
        "line": 57,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 50,
        "col": 16
      },
      "end": {
        "line": 58,
        "col": 14
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
    "id": "scrap_2f96df41-6efb-72d2-5722-63c0319943f1",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.basicSelectScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectMenu3$$cat', {
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
    "name": ["selectMenu3"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-1\", 3);"],
    "assert": ["ok($('#select-native-1  option:selected').val() == '3','select-native-1 selected : 3');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 64,
        "col": 18
      },
      "end": {
        "line": 70,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 63,
        "col": 16
      },
      "end": {
        "line": 71,
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
    "id": "scrap_1bc7f435-94ac-505a-0a2f-48c39f442875",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectMenu3"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectMenu2$$cat', {
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
    "name": ["selectMenu2"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-1\", 2);"],
    "assert": ["ok($('#select-native-1  option:selected').val() == '2','select-native-1 selected : 2');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 74,
        "col": 18
      },
      "end": {
        "line": 80,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 73,
        "col": 16
      },
      "end": {
        "line": 81,
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
    "id": "scrap_64fd87b4-40eb-0b47-d378-87ec8bb5bcd1",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectMenu2"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.verticalGroupScroll$$cat', {
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
    "name": ["verticalGroupScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#verticalGroup\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 185,
        "col": 16
      },
      "end": {
        "line": 191,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 184,
        "col": 8
      },
      "end": {
        "line": 192,
        "col": 14
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
    "id": "scrap_888b8168-e5e2-686c-2bce-de59e1b524bb",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.verticalGroupScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectGroupMenu5$$cat', {
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
    "name": ["selectGroupMenu5"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-5\", \"twoOption\");"],
    "assert": ["ok($('#select-native-5  option:selected')[0].id == 'twoOption','select-native-5 selected : twoOption');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 202,
        "col": 18
      },
      "end": {
        "line": 208,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 201,
        "col": 16
      },
      "end": {
        "line": 209,
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
    "id": "scrap_e31c578f-9ff9-fd62-6734-3420e09a36e8",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectGroupMenu5"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectGroupMenu7$$cat', {
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
    "name": ["selectGroupMenu7"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-7\", \"threeOption\");"],
    "assert": ["ok($('#select-native-7  option:selected')[0].id == 'threeOption','select-native-7 selected : threeOption');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 211,
        "col": 18
      },
      "end": {
        "line": 217,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 210,
        "col": 16
      },
      "end": {
        "line": 218,
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
    "id": "scrap_0b4fd62f-c186-ffac-45d5-900182e1d044",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectGroupMenu7"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectGroupMenu6$$cat', {
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
    "name": ["selectGroupMenu6"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-6\", \"threeOption2\");"],
    "assert": ["ok($('#select-native-6  option:selected')[0].id == 'threeOption2','select-native-6 selected : threeOption2');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 220,
        "col": 18
      },
      "end": {
        "line": 226,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 219,
        "col": 16
      },
      "end": {
        "line": 227,
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
    "id": "scrap_0692a6a2-815f-b33e-fc47-19480e54c0e1",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectGroupMenu6"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.horGroupScroll$$cat', {
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
    "name": ["horGroupScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#horGroup\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 282,
        "col": 15
      },
      "end": {
        "line": 288,
        "col": 17
      }
    },
    "commentinfo": {
      "start": {
        "line": 281,
        "col": 8
      },
      "end": {
        "line": 289,
        "col": 13
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
    "id": "scrap_78e153e7-1ca3-5006-4758-111f05f59900",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.horGroupScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectGroupMenu11$$cat', {
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
    "name": ["selectGroupMenu11"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-11\", \"twoOptionHor\");"],
    "assert": ["ok($('#select-native-11  option:selected')[0].id == 'twoOptionHor','select-native-11 selected : twoOptionHor');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 292,
        "col": 17
      },
      "end": {
        "line": 298,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 291,
        "col": 8
      },
      "end": {
        "line": 299,
        "col": 15
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
    "id": "scrap_b033f263-40bc-c6d8-df73-666ac765feac",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectGroupMenu11"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectGroupMenu12$$cat', {
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
    "name": ["selectGroupMenu12"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-12\", \"oneOptionHor\");"],
    "assert": ["ok($('#select-native-12 option:selected')[0].id == 'oneOptionHor','select-native-12 selected : oneOptionHor');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 301,
        "col": 10
      },
      "end": {
        "line": 307,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 300,
        "col": 8
      },
      "end": {
        "line": 308,
        "col": 8
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
    "id": "scrap_3fb6d94d-bb91-2f67-d35a-940645ab74b1",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectGroupMenu12"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.selectGroupMenu13$$cat', {
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
    "name": ["selectGroupMenu13"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"#select-native-13\", \"threeOptionHor\");"],
    "assert": ["ok($('#select-native-13 option:selected')[0].id == 'threeOptionHor','select-native-13 selected : oneOptionHor');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 310,
        "col": 10
      },
      "end": {
        "line": 316,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 309,
        "col": 8
      },
      "end": {
        "line": 317,
        "col": 8
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
    "id": "scrap_b66da19d-32fb-68b8-83ee-9c6497021824",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.selectGroupMenu13"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.tabsMenuScroll$$cat', {
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
    "name": ["tabsMenuScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#tabsRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 551,
        "col": 1
      },
      "end": {
        "line": 556,
        "col": 3
      }
    },
    "commentinfo": {
      "start": {
        "line": 550,
        "col": 0
      },
      "end": {
        "line": 557,
        "col": 3
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
    "id": "scrap_ced7a69b-a80d-fc8d-f3e8-96e0d95b2c69",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.tabsMenuScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.selectmenu.index.html.tabsMenuClick$$cat', {
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
    "name": ["tabsMenuClick"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#tabsRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 560,
        "col": 17
      },
      "end": {
        "line": 565,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 559,
        "col": 0
      },
      "end": {
        "line": 566,
        "col": 18
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
    "id": "scrap_0bb3eaac-f44a-8bd0-5069-248d468ec451",
    "$type": "html",
    "pkgName": "jquery.selectmenu.index.html.tabsMenuClick"
  }
}, 'scrap');
_cat.core.define("jquery.selectmenu.index.html.appMenuSelectClick$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.appMenuSelectClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuSelect");
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
_cat.core.define("jquery.selectmenu.index.html.basicSelectScroll$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.basicSelectScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#basicSelect");
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
_cat.core.define("jquery.selectmenu.index.html.selectMenu3$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectMenu3$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-1", 3);
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
      'code': ["assert", "ok($(\"#select-native-1  option:selected\").val()==\"3\",\"select-native-1 selected : 3\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.selectMenu2$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectMenu2$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-1", 2);
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
      'code': ["assert", "ok($(\"#select-native-1  option:selected\").val()==\"2\",\"select-native-1 selected : 2\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.verticalGroupScroll$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.verticalGroupScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#verticalGroup");
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
_cat.core.define("jquery.selectmenu.index.html.selectGroupMenu5$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectGroupMenu5$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-5", "twoOption");
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
      'code': ["assert", "ok($(\"#select-native-5  option:selected\")[0].id==\"twoOption\",\"select-native-5 selected : twoOption\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.selectGroupMenu7$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectGroupMenu7$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-7", "threeOption");
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
      'code': ["assert", "ok($(\"#select-native-7  option:selected\")[0].id==\"threeOption\",\"select-native-7 selected : threeOption\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.selectGroupMenu6$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectGroupMenu6$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-6", "threeOption2");
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
      'code': ["assert", "ok($(\"#select-native-6  option:selected\")[0].id==\"threeOption2\",\"select-native-6 selected : threeOption2\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.horGroupScroll$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.horGroupScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#horGroup");
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
_cat.core.define("jquery.selectmenu.index.html.selectGroupMenu11$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectGroupMenu11$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-11", "twoOptionHor");
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
      'code': ["assert", "ok($(\"#select-native-11  option:selected\")[0].id==\"twoOptionHor\",\"select-native-11 selected : twoOptionHor\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.selectGroupMenu12$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectGroupMenu12$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-12", "oneOptionHor");
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
      'code': ["assert", "ok($(\"#select-native-12 option:selected\")[0].id==\"oneOptionHor\",\"select-native-12 selected : oneOptionHor\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.selectGroupMenu13$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.selectGroupMenu13$$cat",
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
        _cat.core.plugin("jqm").actions.selectMenu("#select-native-13", "threeOptionHor");
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
      'code': ["assert", "ok($(\"#select-native-13 option:selected\")[0].id==\"threeOptionHor\",\"select-native-13 selected : oneOptionHor\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.selectmenu.index.html.tabsMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.tabsMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#tabsRef");
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
_cat.core.define("jquery.selectmenu.index.html.tabsMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.selectmenu.index.html.tabsMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#tabsRef");
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
_cat.core.setManager("sliderManager", "jquery.slider.index.html.basicSliderScroll$$cat");
_cat.core.declare('jquery.slider.index.html.basicSliderScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["basicSliderScroll"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#basicSlider\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 90,
        "col": 15
      },
      "end": {
        "line": 95,
        "col": 17
      }
    },
    "commentinfo": {
      "start": {
        "line": 89,
        "col": 4
      },
      "end": {
        "line": 96,
        "col": 13
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_60f12fb6-854c-58a2-56b5-b0c4835fbf71",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.basicSliderScroll"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.slider25$$cat");
_cat.core.declare('jquery.slider.index.html.slider25$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["slider25"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["slide(\"#slider-1\" , 25);"],
    "assert": ["ok($('#slider-1').val()=='25','hello');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 98,
        "col": 7
      },
      "end": {
        "line": 105,
        "col": 9
      }
    },
    "commentinfo": {
      "start": {
        "line": 97,
        "col": 4
      },
      "end": {
        "line": 106,
        "col": 5
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_08881712-4149-d3f0-fa9e-4922f43bacfd",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.slider25"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.HighlightScroll$$cat");
_cat.core.declare('jquery.slider.index.html.HighlightScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["HighlightScroll"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#highlightSlider\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 108,
        "col": 15
      },
      "end": {
        "line": 113,
        "col": 17
      }
    },
    "commentinfo": {
      "start": {
        "line": 107,
        "col": 4
      },
      "end": {
        "line": 114,
        "col": 13
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_456f322b-08d5-d917-d354-c98706df7627",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.HighlightScroll"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.sliderHighlight77$$cat");
_cat.core.declare('jquery.slider.index.html.sliderHighlight77$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
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
    "name": ["sliderHighlight77"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["slide(\"#slider-2\" , 77);"],
    "assert": ["ok($('#slider-2').val()=='77','hello');"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 117,
        "col": 11
      },
      "end": {
        "line": 123,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 116,
        "col": 4
      },
      "end": {
        "line": 124,
        "col": 9
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_10527f42-1506-8f3c-75c6-06e3b1da25fe",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.sliderHighlight77"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.scrollTopSlider$$cat");
_cat.core.declare('jquery.slider.index.html.scrollTopSlider$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["scrollTopSlider"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 126,
        "col": 7
      },
      "end": {
        "line": 131,
        "col": 9
      }
    },
    "commentinfo": {
      "start": {
        "line": 125,
        "col": 4
      },
      "end": {
        "line": 132,
        "col": 5
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_8beda9cc-f0b6-a164-4cca-591af8230771",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.scrollTopSlider"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.appMenuSliderClick$$cat");
_cat.core.declare('jquery.slider.index.html.appMenuSliderClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["appMenuSliderClick"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuSlider\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 136,
        "col": 21
      },
      "end": {
        "line": 141,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 135,
        "col": 4
      },
      "end": {
        "line": 142,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_742d0c99-9116-9d07-66a8-220f099f6e87",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.appMenuSliderClick"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.formsMenuScroll$$cat");
_cat.core.declare('jquery.slider.index.html.formsMenuScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["formsMenuScroll"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#formsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 145,
        "col": 18
      },
      "end": {
        "line": 150,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 144,
        "col": 4
      },
      "end": {
        "line": 151,
        "col": 16
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_743c3454-f8db-686a-c605-80a2e5b0accc",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.formsMenuScroll"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.formsMenuClick$$cat");
_cat.core.declare('jquery.slider.index.html.formsMenuClick$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["formsMenuClick"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["click(\"#formsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 154,
        "col": 21
      },
      "end": {
        "line": 159,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 153,
        "col": 4
      },
      "end": {
        "line": 160,
        "col": 22
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_624619cc-d518-ad4a-5bb3-faed6413127b",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.formsMenuClick"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.formsMenu2$$cat");
_cat.core.declare('jquery.slider.index.html.formsMenu2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["formsMenu2"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#formsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 163,
        "col": 19
      },
      "end": {
        "line": 168,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 162,
        "col": 4
      },
      "end": {
        "line": 169,
        "col": 17
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_753993b0-b3ef-37c1-a3c4-9f9aada7943f",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.formsMenu2"
  }
}, 'scrap');
_cat.core.setManager("sliderManager", "jquery.slider.index.html.formRef$$cat");
_cat.core.declare('jquery.slider.index.html.formRef$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["formRef"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#formRef\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 172,
        "col": 18
      },
      "end": {
        "line": 177,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 171,
        "col": 4
      },
      "end": {
        "line": 178,
        "col": 19
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_b4b2ba80-ad87-20db-4e86-370763a25a0c",
    "$type": "html",
    "pkgName": "jquery.slider.index.html.formRef"
  }
}, 'scrap');
_cat.core.define("jquery.slider.index.html.basicSliderScroll$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.basicSliderScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#basicSlider");
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
_cat.core.define("jquery.slider.index.html.slider25$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.slider25$$cat",
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
        _cat.core.plugin("jqm").actions.slide("#slider-1", 25);
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
      'code': ["assert", "ok($(\"#slider-1\").val()==\"25\",\"hello\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.slider.index.html.HighlightScroll$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.HighlightScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#highlightSlider");
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
_cat.core.define("jquery.slider.index.html.sliderHighlight77$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.sliderHighlight77$$cat",
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
        _cat.core.plugin("jqm").actions.slide("#slider-2", 77);
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
      'code': ["assert", "ok($(\"#slider-2\").val()==\"77\",\"hello\")\n"].join("."),
      'fail': true,
      scrapName: 'assert',
      scrap: _ipkg.scrap,
      args: _args,
      scrapRowIdx: 0
    }
  });
});
_cat.core.define("jquery.slider.index.html.scrollTopSlider$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.scrollTopSlider$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTop();
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
_cat.core.define("jquery.slider.index.html.appMenuSliderClick$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.appMenuSliderClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuSlider");
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
_cat.core.define("jquery.slider.index.html.formsMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.formsMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#formsMenu");
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
_cat.core.define("jquery.slider.index.html.formsMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.formsMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#formsMenu");
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
_cat.core.define("jquery.slider.index.html.formsMenu2$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.formsMenu2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#formsMenu");
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
_cat.core.define("jquery.slider.index.html.formRef$$cat", function(thi$) {

  var pkgName = "jquery.slider.index.html.formRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#formRef");
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
_cat.core.declare('jquery.swipe-list.index.html.appMenuSwipeListClick$$cat', {
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
    "name": ["appMenuSwipeListClick"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuSwipeList\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 148,
        "col": 20
      },
      "end": {
        "line": 153,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 147,
        "col": 8
      },
      "end": {
        "line": 154,
        "col": 21
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
    "id": "scrap_792780a3-4d2c-9141-058d-87cad766e272",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.appMenuSwipeListClick"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.openSwipe$$cat', {
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
    "name": ["openSwipe"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#openSwipe\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 166,
        "col": 13
      },
      "end": {
        "line": 171,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 165,
        "col": 8
      },
      "end": {
        "line": 172,
        "col": 14
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
    "id": "scrap_5881670a-3e67-b227-e32e-b95a3dff34c7",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.openSwipe"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.homePageRef$$cat', {
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
    "name": ["homePageRef"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#homePage\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 182,
        "col": 14
      },
      "end": {
        "line": 187,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 181,
        "col": 12
      },
      "end": {
        "line": 188,
        "col": 15
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
    "id": "scrap_59b8ed75-24c1-98d2-9dfa-3bbebcc1fc2e",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.homePageRef"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.eventsMenuScrollSwipeItems$$cat', {
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
    "name": ["eventsMenuScrollSwipeItems"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#eventsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 220,
        "col": 17
      },
      "end": {
        "line": 225,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 219,
        "col": 4
      },
      "end": {
        "line": 226,
        "col": 15
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
    "id": "scrap_b236113e-a4d0-f52c-63f2-e38ac750a603",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.eventsMenuScrollSwipeItems"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.eventsMenuClickSwipeItems$$cat', {
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
    "name": ["eventsMenuClickSwipeItems"],
    "embed": ["true"],
    "jqm": ["click(\"#eventsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 229,
        "col": 21
      },
      "end": {
        "line": 234,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 228,
        "col": 4
      },
      "end": {
        "line": 235,
        "col": 22
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
    "id": "scrap_44595f52-67bf-34ce-4729-cb0968080ce3",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.eventsMenuClickSwipeItems"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.eventsMenuScroll2SwipeItems$$cat', {
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
    "name": ["eventsMenuScroll2SwipeItems"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#eventsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 238,
        "col": 19
      },
      "end": {
        "line": 243,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 237,
        "col": 4
      },
      "end": {
        "line": 244,
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
    "id": "scrap_9ace7784-416c-342d-4074-d7bec2f85fd6",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.eventsMenuScroll2SwipeItems"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipePageRef$$cat', {
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
    "name": ["swipePageRef"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#swipePage\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 247,
        "col": 18
      },
      "end": {
        "line": 252,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 246,
        "col": 4
      },
      "end": {
        "line": 253,
        "col": 19
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
    "id": "scrap_11b38c92-b781-1ff0-720b-35efd85d50fd",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipePageRef"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.backBtn$$cat', {
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
    "name": ["backBtn"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#backBtn\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 622,
        "col": 18
      },
      "end": {
        "line": 627,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 621,
        "col": 8
      },
      "end": {
        "line": 628,
        "col": 19
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
    "id": "scrap_5a4a751d-7fe1-c217-6762-5042abdd29fa",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.backBtn"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeAvery$$cat', {
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
    "name": ["swipeAvery"],
    "embed": ["true"],
    "jqm": ["swipeItemRight(\"#swipeAvery\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 639,
        "col": 19
      },
      "end": {
        "line": 644,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 638,
        "col": 16
      },
      "end": {
        "line": 645,
        "col": 20
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
    "id": "scrap_381c007b-7346-7e6f-37fc-6799916ebca9",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeAvery"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeMike$$cat', {
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
    "name": ["swipeMike"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"#swipeMike\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 666,
        "col": 19
      },
      "end": {
        "line": 671,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 665,
        "col": 16
      },
      "end": {
        "line": 672,
        "col": 20
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
    "id": "scrap_5125207d-a5ee-8241-fe0c-c55585d43e89",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeMike"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeRedfin$$cat', {
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
    "name": ["swipeRedfin"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"#swipeRedfin\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 686,
        "col": 19
      },
      "end": {
        "line": 691,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 685,
        "col": 16
      },
      "end": {
        "line": 692,
        "col": 20
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
    "id": "scrap_ca901a05-d6c4-2738-a64a-075018014f93",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeRedfin"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeAngela$$cat', {
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
    "name": ["swipeAngela"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"#swipeAngela\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 703,
        "col": 19
      },
      "end": {
        "line": 708,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 702,
        "col": 16
      },
      "end": {
        "line": 709,
        "col": 20
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
    "id": "scrap_592b7aa6-3e40-fb88-3433-c76661ea7a5a",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeAngela"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeMikeDel$$cat', {
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
    "name": ["swipeMikeDel"],
    "embed": ["true"],
    "jqm": ["click(\"#yes\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 808,
        "col": 14
      },
      "end": {
        "line": 813,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 807,
        "col": 8
      },
      "end": {
        "line": 814,
        "col": 15
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
    "id": "scrap_9ea74c1a-8d06-1fbe-1c08-f7e6ee20b746",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeMikeDel"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeRedfinCancel$$cat', {
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
    "name": ["swipeRedfinCancel"],
    "embed": ["true"],
    "jqm": ["click(\"#cancel\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 818,
        "col": 14
      },
      "end": {
        "line": 823,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 817,
        "col": 8
      },
      "end": {
        "line": 824,
        "col": 15
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
    "id": "scrap_a4170b4a-12d0-9e6e-9205-9ec9a9e41222",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeRedfinCancel"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeAveryCancel$$cat', {
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
    "name": ["swipeAveryCancel"],
    "embed": ["true"],
    "jqm": ["click(\"#cancel\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 827,
        "col": 14
      },
      "end": {
        "line": 832,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 826,
        "col": 8
      },
      "end": {
        "line": 833,
        "col": 15
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
    "id": "scrap_dba99acc-c303-958c-81fb-c28413aac3fd",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeAveryCancel"
  }
}, 'scrap');
_cat.core.declare('jquery.swipe-list.index.html.swipeAngelaDel$$cat', {
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
    "name": ["swipeAngelaDel"],
    "embed": ["true"],
    "jqm": ["click(\"#yes\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 837,
        "col": 14
      },
      "end": {
        "line": 842,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 836,
        "col": 8
      },
      "end": {
        "line": 843,
        "col": 15
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
    "id": "scrap_dd37b35b-082f-a25e-19e6-800bf4b39cd8",
    "$type": "html",
    "pkgName": "jquery.swipe-list.index.html.swipeAngelaDel"
  }
}, 'scrap');
_cat.core.define("jquery.swipe-list.index.html.appMenuSwipeListClick$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.appMenuSwipeListClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuSwipeList");
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
_cat.core.define("jquery.swipe-list.index.html.openSwipe$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.openSwipe$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#openSwipe");
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
_cat.core.define("jquery.swipe-list.index.html.homePageRef$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.homePageRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#homePage");
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
_cat.core.define("jquery.swipe-list.index.html.eventsMenuScrollSwipeItems$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.eventsMenuScrollSwipeItems$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#eventsMenu");
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
_cat.core.define("jquery.swipe-list.index.html.eventsMenuClickSwipeItems$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.eventsMenuClickSwipeItems$$cat",
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
        _cat.core.plugin("jqm").actions.click("#eventsMenu");
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
_cat.core.define("jquery.swipe-list.index.html.eventsMenuScroll2SwipeItems$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.eventsMenuScroll2SwipeItems$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#eventsMenu");
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
_cat.core.define("jquery.swipe-list.index.html.swipePageRef$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipePageRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#swipePage");
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
_cat.core.define("jquery.swipe-list.index.html.backBtn$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.backBtn$$cat",
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
        _cat.core.plugin("jqm").actions.clickButton("#backBtn");
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
_cat.core.define("jquery.swipe-list.index.html.swipeAvery$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeAvery$$cat",
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
        _cat.core.plugin("jqm").actions.swipeItemRight("#swipeAvery");
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
_cat.core.define("jquery.swipe-list.index.html.swipeMike$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeMike$$cat",
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
        _cat.core.plugin("jqm").actions.swipeItemLeft("#swipeMike");
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
_cat.core.define("jquery.swipe-list.index.html.swipeRedfin$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeRedfin$$cat",
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
        _cat.core.plugin("jqm").actions.swipeItemLeft("#swipeRedfin");
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
_cat.core.define("jquery.swipe-list.index.html.swipeAngela$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeAngela$$cat",
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
        _cat.core.plugin("jqm").actions.swipeItemLeft("#swipeAngela");
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
_cat.core.define("jquery.swipe-list.index.html.swipeMikeDel$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeMikeDel$$cat",
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
        _cat.core.plugin("jqm").actions.click("#yes");
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
_cat.core.define("jquery.swipe-list.index.html.swipeRedfinCancel$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeRedfinCancel$$cat",
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
        _cat.core.plugin("jqm").actions.click("#cancel");
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
_cat.core.define("jquery.swipe-list.index.html.swipeAveryCancel$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeAveryCancel$$cat",
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
        _cat.core.plugin("jqm").actions.click("#cancel");
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
_cat.core.define("jquery.swipe-list.index.html.swipeAngelaDel$$cat", function(thi$) {

  var pkgName = "jquery.swipe-list.index.html.swipeAngelaDel$$cat",
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
        _cat.core.plugin("jqm").actions.click("#yes");
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
_cat.core.declare('jquery.tabs.index.html.appMenuTabsClick$$cat', {
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
    "name": ["appMenuTabsClick"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#appMenuTabs\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 43,
        "col": 20
      },
      "end": {
        "line": 47,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 42,
        "col": 8
      },
      "end": {
        "line": 48,
        "col": 21
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
    "id": "scrap_43a78a64-b316-30da-e329-5416d1fc9666",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.appMenuTabsClick"
  }
}, 'scrap');
_cat.core.declare('jquery.tabs.index.html.navScroll$$cat', {
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
    "name": ["navScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#navTabs\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 60,
        "col": 20
      },
      "end": {
        "line": 64,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 59,
        "col": 8
      },
      "end": {
        "line": 65,
        "col": 18
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
    "id": "scrap_96247de9-9d8c-ac40-b65c-76c0c689c3e5",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.navScroll"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.navTabSelect2$$cat");
_cat.core.declare('jquery.tabs.index.html.navTabSelect2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["navTabSelect2"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"#navTab2\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 68,
        "col": 10
      },
      "end": {
        "line": 73,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 67,
        "col": 8
      },
      "end": {
        "line": 74,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_28776f31-7203-ff2a-25f2-48ef2762e717",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.navTabSelect2"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.navTabSelect3$$cat");
_cat.core.declare('jquery.tabs.index.html.navTabSelect3$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["navTabSelect3"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"#navTab3\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 77,
        "col": 10
      },
      "end": {
        "line": 82,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 76,
        "col": 8
      },
      "end": {
        "line": 83,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_062bbf70-d3c9-9d68-8504-6a1fcbd9dba9",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.navTabSelect3"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.navTabSelect1$$cat");
_cat.core.declare('jquery.tabs.index.html.navTabSelect1$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["navTabSelect1"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"#navTab1\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 85,
        "col": 10
      },
      "end": {
        "line": 90,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 84,
        "col": 8
      },
      "end": {
        "line": 91,
        "col": 8
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_e06e8c04-5957-4167-fc69-6294cbdbeb66",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.navTabSelect1"
  }
}, 'scrap');
_cat.core.declare('jquery.tabs.index.html.listTabsScroll$$cat', {
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
    "name": ["listTabsScroll"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#listTabs\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 120,
        "col": 20
      },
      "end": {
        "line": 124,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 119,
        "col": 12
      },
      "end": {
        "line": 125,
        "col": 18
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
    "id": "scrap_9b460757-4ff9-7dca-73fd-00efd5be12f4",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.listTabsScroll"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.listTabsSelect3$$cat");
_cat.core.declare('jquery.tabs.index.html.listTabsSelect3$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["listTabsSelect3"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"#listTabsSelect3\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 128,
        "col": 14
      },
      "end": {
        "line": 133,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 127,
        "col": 12
      },
      "end": {
        "line": 134,
        "col": 12
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_1c3b97bb-65d0-f896-ce02-4bf0aec79484",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.listTabsSelect3"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.listTabsSelect1$$cat");
_cat.core.declare('jquery.tabs.index.html.listTabsSelect1$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["listTabsSelect1"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"#listTabsSelect1\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 137,
        "col": 14
      },
      "end": {
        "line": 142,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 136,
        "col": 12
      },
      "end": {
        "line": 143,
        "col": 12
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_aac58423-640b-ce58-9a06-a24d9d24b6fc",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.listTabsSelect1"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.listTabsSelect2$$cat");
_cat.core.declare('jquery.tabs.index.html.listTabsSelect2$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["listTabsSelect2"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"#listTabsSelect2\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 145,
        "col": 14
      },
      "end": {
        "line": 150,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 144,
        "col": 12
      },
      "end": {
        "line": 151,
        "col": 12
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_44b222ee-3f7f-c31c-7491-3ad6dd9afdc1",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.listTabsSelect2"
  }
}, 'scrap');
_cat.core.setManager("tabsManager", "jquery.tabs.index.html.eventsMenuScroll$$cat");
_cat.core.declare('jquery.tabs.index.html.eventsMenuScroll$$cat', {
  scrap: {
    "stack": [{
      "key": "name",
      "cell": 0
    }, {
      "key": "run@",
      "cell": 0
    }, {
      "key": "embed",
      "cell": 0
    }, {
      "key": "jqm",
      "cell": 0
    }],
    "name": ["eventsMenuScroll"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#eventsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 212,
        "col": 17
      },
      "end": {
        "line": 217,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 211,
        "col": 4
      },
      "end": {
        "line": 218,
        "col": 15
      }
    },
    "single": {
      "stack": true,
      "name": true,
      "run@": true,
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
      "run@": -1,
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
    "id": "scrap_e38daad4-4bf4-9ecc-b3e0-6564f55b4960",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.eventsMenuScroll"
  }
}, 'scrap');
_cat.core.declare('jquery.tabs.index.html.eventsMenuClick$$cat', {
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
    "name": ["eventsMenuClick"],
    "embed": ["true"],
    "jqm": ["click(\"#eventsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 221,
        "col": 21
      },
      "end": {
        "line": 225,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 220,
        "col": 4
      },
      "end": {
        "line": 226,
        "col": 22
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
    "id": "scrap_f4e1f5f6-2c32-9a27-2580-8742e2ef2e5d",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.eventsMenuClick"
  }
}, 'scrap');
_cat.core.declare('jquery.tabs.index.html.eventsMenuScroll2$$cat', {
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
    "name": ["eventsMenuScroll2"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"#eventsMenu\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 229,
        "col": 19
      },
      "end": {
        "line": 233,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 228,
        "col": 4
      },
      "end": {
        "line": 234,
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
    "id": "scrap_fae8da89-11ac-ded0-1a5d-779e043d4e3f",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.eventsMenuScroll2"
  }
}, 'scrap');
_cat.core.declare('jquery.tabs.index.html.swipeListRef$$cat', {
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
    "name": ["swipeListRef"],
    "embed": ["true"],
    "jqm": ["clickRef(\"#swipeList\");"],
    "file": "/Users/ransnir/Documents/workspace/catjstests/app/jquery/cat-project/target/jquery/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 237,
        "col": 18
      },
      "end": {
        "line": 241,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 236,
        "col": 4
      },
      "end": {
        "line": 242,
        "col": 19
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
    "id": "scrap_514e703f-cbe0-0cb9-00b8-2d932d97103b",
    "$type": "html",
    "pkgName": "jquery.tabs.index.html.swipeListRef"
  }
}, 'scrap');
_cat.core.define("jquery.tabs.index.html.appMenuTabsClick$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.appMenuTabsClick$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#appMenuTabs");
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
_cat.core.define("jquery.tabs.index.html.navScroll$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.navScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#navTabs");
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
_cat.core.define("jquery.tabs.index.html.navTabSelect2$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.navTabSelect2$$cat",
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
        _cat.core.plugin("jqm").actions.selectTab("#navTab2");
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
_cat.core.define("jquery.tabs.index.html.navTabSelect3$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.navTabSelect3$$cat",
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
        _cat.core.plugin("jqm").actions.selectTab("#navTab3");
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
_cat.core.define("jquery.tabs.index.html.navTabSelect1$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.navTabSelect1$$cat",
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
        _cat.core.plugin("jqm").actions.selectTab("#navTab1");
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
_cat.core.define("jquery.tabs.index.html.listTabsScroll$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.listTabsScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#listTabs");
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
_cat.core.define("jquery.tabs.index.html.listTabsSelect3$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.listTabsSelect3$$cat",
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
        _cat.core.plugin("jqm").actions.selectTab("#listTabsSelect3");
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
_cat.core.define("jquery.tabs.index.html.listTabsSelect1$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.listTabsSelect1$$cat",
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
        _cat.core.plugin("jqm").actions.selectTab("#listTabsSelect1");
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
_cat.core.define("jquery.tabs.index.html.listTabsSelect2$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.listTabsSelect2$$cat",
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
        _cat.core.plugin("jqm").actions.selectTab("#listTabsSelect2");
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
_cat.core.define("jquery.tabs.index.html.eventsMenuScroll$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.eventsMenuScroll$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#eventsMenu");
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
_cat.core.define("jquery.tabs.index.html.eventsMenuClick$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.eventsMenuClick$$cat",
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
        _cat.core.plugin("jqm").actions.click("#eventsMenu");
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
_cat.core.define("jquery.tabs.index.html.eventsMenuScroll2$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.eventsMenuScroll2$$cat",
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
        _cat.core.plugin("jqm").actions.scrollTo("#eventsMenu");
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
_cat.core.define("jquery.tabs.index.html.swipeListRef$$cat", function(thi$) {

  var pkgName = "jquery.tabs.index.html.swipeListRef$$cat",
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
        _cat.core.plugin("jqm").actions.clickRef("#swipeList");
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