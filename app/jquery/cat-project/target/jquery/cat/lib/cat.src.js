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
    "id": "scrap_8a73ae50-6603-84c2-826c-517e6fb99e84",
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
    "id": "scrap_aa913cc3-df63-9454-2099-991dd3ca3351",
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
    "id": "scrap_29c2b874-77e8-4f44-c633-5ee503fae686",
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
    "id": "scrap_116f3944-5e19-e989-11dd-57087a1ad534",
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
    "id": "scrap_730e63e8-ef4d-09d2-1bc8-a84c075359c7",
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
    "id": "scrap_7a8ac908-5b23-4d58-95ee-0d84e4d111a8",
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
    "id": "scrap_d602fb88-bdec-1309-d887-fd2c2121b3b8",
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
    "id": "scrap_50bd5421-19b9-01e0-f512-c120a9795802",
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
    "id": "scrap_591a782a-06c1-497d-92ce-eb7c1eef0db0",
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
    "id": "scrap_7991349f-e3c5-7b07-1141-dccb4c93495d",
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
    "id": "scrap_4f14da20-29bd-4915-55c5-8bf3f22822ab",
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
    "id": "scrap_20dd92e0-d321-128b-7550-44ce1af3c646",
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
    "id": "scrap_d20b4451-fb07-8565-b3a9-7389b8027be8",
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
    "id": "scrap_e4fe1be1-cc09-e0a8-6c41-c2e4195a8013",
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
    "id": "scrap_6b4ab786-1c2a-8b43-99dc-afd18da6d829",
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
    "id": "scrap_f7ef97e1-d067-8751-594b-a02cb9482680",
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
    "id": "scrap_74064751-395d-b327-6ca4-c1f3640e6829",
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
    "id": "scrap_8ebf5331-bcff-3a5f-5278-2236d1ec2448",
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
    "id": "scrap_f7fd3671-076e-1a7d-27af-0af178a2904d",
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
    "id": "scrap_1b0ecda0-7f56-e390-21ff-80d967059d61",
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
    "id": "scrap_96b79a10-683f-66ea-afe5-ef5736575a1a",
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
    "id": "scrap_768f033e-ecf3-269b-09a9-80f6f9502349",
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
    "id": "scrap_ada6899a-4266-5f32-33b4-20d76e704686",
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
    "id": "scrap_9de373b2-d916-97e9-4a39-df21bfd12de0",
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
    "id": "scrap_289b0175-a096-cf8f-0884-812385093231",
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
    "id": "scrap_8b201349-cc7a-18b1-2e2c-2acfd82c213b",
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
    "id": "scrap_a1dfa5eb-5ef7-5f2e-9b11-843c5e4ca1d2",
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
    "id": "scrap_f356c842-6b7a-2dd7-f9c0-8dee3599331b",
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
    "id": "scrap_5a6c766c-d600-fa1c-51d6-9d87b7f7f35d",
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
    "id": "scrap_63ede8a4-39b9-2dc2-ff11-73accb0103e1",
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
    "id": "scrap_53905aa5-ab74-b091-d3ec-a2e58bca756e",
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
    "id": "scrap_470d7982-0fc2-d68c-1c13-068233dc9a55",
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
    "id": "scrap_42745d03-2162-f43f-ad93-f493bd6a193b",
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
    "id": "scrap_3932ccb0-791b-9503-a586-55cb1c78f3da",
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
    "id": "scrap_473bf348-449b-dbe0-8d7a-7c16d041b1a1",
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
    "id": "scrap_204f469e-2757-2e83-05c9-9210de9e9ac7",
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
    "id": "scrap_76f697c2-0185-7d07-8254-7a90393ad550",
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
    "id": "scrap_7d248bfa-f0c7-44ad-98a0-037d75798b73",
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
    "id": "scrap_8632e0ea-2adc-0329-561d-de1c449e9a45",
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
    "id": "scrap_9b8645df-2c04-a777-ddad-fd309f7df7fb",
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
    "id": "scrap_4d1fd6e4-a4ae-8db8-80a7-8243f3aa1972",
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
    "id": "scrap_e58ad3f1-f2e0-ddad-35e6-8bfccb13a469",
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
    "id": "scrap_899bce20-607e-1028-8dc5-bb75fe2baf91",
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
    "id": "scrap_d1605aab-92d0-7f07-5afc-0b61564b7822",
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
    "id": "scrap_e2f89ab6-13f5-1f37-af57-ae99242fd1fc",
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
    "id": "scrap_0c21479d-ac95-ce85-99b0-7de58106b379",
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
    "id": "scrap_3a009d48-fcc5-230f-e205-8635ab81fd3d",
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
    "id": "scrap_78cff4d9-4b3d-bef2-0100-728cfb559f63",
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
    "id": "scrap_6a0fb660-a57f-8f23-93bd-b44dd8779062",
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
    "id": "scrap_2295bf96-0907-6e62-7c47-17ee718dee46",
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
    "id": "scrap_a720c634-893e-cc41-a289-d0f46fa410f7",
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
    "id": "scrap_020ffb98-0ab8-f2cf-e824-69ab3023fde1",
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
    "id": "scrap_e6ada1f8-ff4f-a808-d416-44971511ef6f",
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
    "id": "scrap_4b0455c0-bc88-89e9-e26a-c07b1fad258e",
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
    "id": "scrap_16e2d558-84bb-0d37-7fe0-934316e45f04",
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
    "id": "scrap_68f270c7-9422-c344-a178-b00215a7bc87",
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
    "id": "scrap_1ed002a1-fc29-3171-ee0f-2d8eb1a79f3a",
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
    "id": "scrap_8dc37e77-fd7b-20cd-eec1-dc363a988d53",
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
    "id": "scrap_da68b971-5de4-462e-21c4-f374c63662d1",
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
    "id": "scrap_89534fc9-0a53-0adf-a126-0a97708c0677",
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
    "id": "scrap_5df3c60d-dc6f-25ae-5b54-346bb4db6788",
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
    "id": "scrap_79e600e1-a8b8-7c24-899e-0aba4ff043b7",
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
    "id": "scrap_57a7cb66-7e8e-e375-4154-a130311c68dd",
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
    "id": "scrap_8d0eaa2d-91b6-062f-53e9-8b6a2ff5fe53",
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
    "id": "scrap_8c22e2bc-b005-3384-9fa8-cee336c73242",
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
    "id": "scrap_c15b0200-7b02-142d-425b-62d0052a0408",
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
    "id": "scrap_d880e1a5-1e48-4523-eb6c-b6e8fc7bbdb1",
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
    "id": "scrap_6440b750-4144-0cf9-6af4-1ff238ff6c60",
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
    "id": "scrap_035b6b29-de29-c6bb-0736-abaac547d51a",
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
    "id": "scrap_cb401afa-91df-1745-46b0-acbc78817810",
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
    "id": "scrap_52c2112a-9d63-54eb-fe8c-7b0acb2a9829",
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
    "id": "scrap_d735f611-9951-6b51-e7c1-264e5a80952d",
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
    "id": "scrap_9a4c28bb-8ee5-fd97-2985-d34281e851fc",
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
    "id": "scrap_a32c4552-d210-6190-88e8-af6eb8e260e1",
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
    "id": "scrap_6f35eccd-cfff-6a0b-117b-15e2d9d3a19c",
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
    "id": "scrap_8a66eacb-98aa-42f9-cb28-41234a132e8c",
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
    "id": "scrap_a3b95653-d1f9-fc99-b78b-e5453fcad0e0",
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
    "id": "scrap_9cd81641-6bd6-1451-a72a-ac70150c1291",
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
    "id": "scrap_b70f7c1a-e784-4c90-c3c3-e4cc8c877620",
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
    "id": "scrap_b6b13dff-1058-e658-76fc-c42de9db0b63",
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
    "id": "scrap_bf58caec-2c2c-ac59-b2e6-4335698669c1",
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
    "id": "scrap_41077850-869c-c924-62a4-33a2a0124b3b",
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
    "id": "scrap_b9258216-ace4-1b48-5acc-c2e843d85da7",
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
    "id": "scrap_a032f589-7abf-7fd7-0bb6-c63a3fb65852",
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
    "id": "scrap_bf754f94-f2ee-0b26-7863-eda38f7bf57d",
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
    "id": "scrap_be26ddf1-8e34-5926-2d63-d86577ccd720",
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
    "id": "scrap_dc8d5248-f36a-d46c-0cd0-5af915647359",
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
    "id": "scrap_be9f8857-25e6-87df-cd3b-56e415f2f82a",
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
    "id": "scrap_be80f6c8-2784-b624-0dc2-2ba2923b8710",
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
    "id": "scrap_a6ed9be4-7f07-5d85-b8e7-4f89bc40e622",
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
    "id": "scrap_f1af0dba-24e2-87c7-7b3f-5f48ad45e7ce",
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
    "id": "scrap_b4ed334d-5d05-3aaa-44d4-b6dfbcdced1f",
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
    "id": "scrap_b0de4665-ee26-43e4-7ae1-81cebdc9e148",
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
    "id": "scrap_c9327514-1c64-0fc8-fdc9-f70694814202",
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
    "id": "scrap_9230c9af-aaa1-301c-4633-9d97667fd761",
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
    "id": "scrap_09346076-0946-086d-f1fc-128a5a3bc3c7",
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
    "id": "scrap_e26cfffa-441a-b202-e150-d19605c0d20d",
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
    "id": "scrap_61ae2da7-94d3-63d7-be5d-0b29aaecba89",
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
    "id": "scrap_15316782-0c2a-5ec7-a845-bb4a32221259",
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
    "id": "scrap_45a4f1d0-3828-90bf-6736-4b5e7d6625c1",
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
    "id": "scrap_8d0991f7-8ef0-9d57-54fc-f7b2a8284cd9",
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
    "id": "scrap_5421a768-e40b-433f-2f2a-5049424a6ec4",
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
    "id": "scrap_2ceb3f15-7f1a-3071-8de3-813d7f03f130",
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
    "id": "scrap_e113169f-b477-e867-8396-12f53adcb60b",
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
    "id": "scrap_3e5cb706-d05e-431d-19de-06c39a43e9ae",
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
    "id": "scrap_5e226636-592c-b67e-c8a2-90221061c707",
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
    "id": "scrap_8d638fa5-b440-6cee-87fd-503ebb21bce7",
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
    "id": "scrap_8290f98c-37b3-52f7-fbd4-58ec07f34b59",
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
    "id": "scrap_041e8b4f-d9dc-9dfc-b8f2-079cee9ba7dc",
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
    "id": "scrap_8ac36fb5-37bd-4f8c-f175-b7c16d8b7324",
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
    "id": "scrap_9edf99c2-7570-807e-6c5a-6b032d81db57",
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
    "id": "scrap_5421f8ff-da52-7f96-5ff3-91cfb46e52cf",
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
    "id": "scrap_d3c47370-a4ca-2895-e794-16643116605b",
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
    "id": "scrap_7b55411a-ed1a-2978-d584-51addd6b5a91",
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
    "id": "scrap_7a035aa0-aa7d-b9f2-e903-161342931269",
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
    "id": "scrap_c049bf31-64f7-be14-9ef9-836ee92ae6a5",
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
    "id": "scrap_96b03def-6dac-2b78-f711-593149f05af9",
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
    "id": "scrap_3e73726a-97c0-3bf6-c34f-765e1dca9a6a",
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