System['register']([], function (_0x5bba87, _0x527bab) {
  'use strict';
  var _0x4e34ee, _0x572b8c;
  function _0x44136d(_0x14330a, _0x2b9dc8) {
      if (!(_0x14330a instanceof _0x2b9dc8)) {
          throw new TypeError('Cannot\x20call\x20a\x20class\x20as\x20a\x20function');
      }
  }
  function _0x1fa1f6(_0xd19e1a, _0x4c1095) {
      for (var _0x9bf80f = 0x0; _0x9bf80f < _0x4c1095['length']; _0x9bf80f++) {
          var _0x213749 = _0x4c1095[_0x9bf80f];
          _0x213749['enumerable'] = _0x213749['enumerable'] || ![];
          _0x213749['configurable'] = !![];
          if ('value' in _0x213749)
              _0x213749['writable'] = !![];
          Object['defineProperty'](_0xd19e1a, _0x213749['key'], _0x213749);
      }
  }
  function _0x337d8f(_0xf78bf9, _0x209fd1, _0x1a9495) {
      if (_0x209fd1)
          _0x1fa1f6(_0xf78bf9['prototype'], _0x209fd1);
      if (_0x1a9495)
          _0x1fa1f6(_0xf78bf9, _0x1a9495);
      return _0xf78bf9;
  }
  return {
      'setters': [],
      'execute': function () {
          _0x5bba87('Application', _0x572b8c = function () {
              function _0xa7daf3() {
                  _0x44136d(this, _0xa7daf3);
                  this['settingsPath'] = 'src/settings.15780.json';
                  this['showFPS'] = ![];
              }
              _0x337d8f(_0xa7daf3, [
                  {
                      'key': 'init',
                      'value': function _0xc53c0f(_0x21d8b3) {
                          _0x4e34ee = _0x21d8b3;
                          _0x4e34ee['game']['onPostBaseInitDelegate']['add'](this['onPostInitBase']['bind'](this));
                          _0x4e34ee['game']['onPostSubsystemInitDelegate']['add'](this['onPostSystemInit']['bind'](this));
                      }
                  },
                  {
                      'key': 'onPostInitBase',
                      'value': function _0x660aa3() {
                      }
                  },
                  {
                      'key': 'onPostSystemInit',
                      'value': function _0x1bdf7a() {
                      }
                  },
                  {
                      'key': 'start',
                      'value': function _0x1e694b() {
                          return _0x4e34ee['game']['init']({
                              'debugMode': ![] ? _0x4e34ee['DebugMode']['INFO'] : _0x4e34ee['DebugMode']['ERROR'],
                              'settingsPath': this['settingsPath'],
                              'overrideSettings': { 'profiling': { 'showFPS': this['showFPS'] } }
                          })['then'](function () {
                              return _0x4e34ee['game']['run']();
                          });
                      }
                  }
              ]);
              return _0xa7daf3;
          }());
      }
  };
});