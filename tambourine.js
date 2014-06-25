(function(document) {
  'use strict';

  var tambourine = {
    els: []
  };

  // Get an element from the dom
  function select(selector) {
    // First, try selector as an id
    var el = document.querySelector(selector);

    // If that doesn't work, try it as an id
    if (el === null) {
      el = document.getElementById(selector);
    }

    // Still no? Oh dear...
    if (el === null) {
      throw new Error('Hmmm... Tambourine can\'t find anything that looks like ' + selector +
        '. Are you sure you spelled it right?');
    }

    return el;
  }

  // Extend an element with all the useful tambourine goodness, adding it to the list of tracked
  // elements
  function extend(el) {
    tambourine.els.push(el);

    console.log(window.getComputedStyle(el));

    var pos = {};
    ['top', 'bottom', 'left', 'right'].forEach(function (prop) {
      Object.defineProperty(pos, prop, {
        configurable: false,
        get: function () { return parseFloat(el.style[prop]) || 0; },
        set: function (x) {
          console.log('Set ' + prop + ' to ' + x);
          el.style[prop] = x + 'px';
        }
      });
    });

    el.position = pos;

    return el;
  }

  // Get an element from the DOM and extend it with all the useful tambourine bits.
  function element(selector) {
    return extend(select(selector));
  }

  // Key named key mappings:
  var keyNames = {
    8: 'backspace', 9: 'tab', 13: 'enter', 16: 'shift', 17: 'ctrl',
    19: 'pausebreak', 18: 'alt', 20: 'capslock', 27: 'escape', 32: 'space', 33: 'pageup',
    34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right',
    40: 'down', 45: 'insert', 46: 'delete'
  };

  function _keyProp(e) {
    var key = e.which || e.keyCode,
      name = keyNames[key] || String.fromCharCode(key);

    return name.toLowerCase() + 'KeyPressed';
  }
  window.addEventListener('keydown', function (e) {
    console.log(_keyProp(e), true);
    window[_keyProp(e)] = true;
  });

  window.addEventListener('keyup', function (e) {
    console.log(_keyProp(e), false);
    window[_keyProp(e)] = false;
  });

  function _setupKeys() {
    for (var code in keyNames) {
      window[keyNames[code] + 'KeyPressed'] = false;
    }
  }

  // Main internal event loop
  function _eventLoop() {
    if (window.loop) {
      window.loop();
    }

    for (var i = 0, els = tambourine.els, l = els.length; i < l; i++) {
      if (els[i].loop) {
        els[i].loop();
      }
    }
    window.requestAnimationFrame(_eventLoop);
  }

  // Random integer between two numbers (inclusive)
  function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  // startGame kicks off the main event loop
  function startGame() {
    _setupKeys();
    window.requestAnimationFrame(_eventLoop);
  }

  // Expose everything
  window.select = select;
  window.extend = extend;
  window.element = element;
  window.startGame = startGame;
  window.random = random;
}(window.document));
