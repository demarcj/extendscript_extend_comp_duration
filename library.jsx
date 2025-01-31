var i;
var proj = app.project;
var current_comp = proj.activeItem;
var comp = {};

var trim_comp_to_work_area = function() { app.executeCommand(2360) };
var add_footage_to_comp = function() { app.executeCommand(2005) };
var create_camera = function() { app.executeCommand(2564) };

var get_index = function() {
  for(i = 1; i <= proj.numItems; i += 1){
    comp[proj.item(i).name] = i;
    proj.item(i).selected = false;
  }
}

String.prototype.includes = function(search, start) {
  'use strict';

  if (search instanceof RegExp) {
    throw TypeError('first argument must not be a RegExp');
  }
  if (start === undefined) { 
    start = 0; 
  }
  return this.indexOf(search, start) !== -1;
}

Array.prototype.filter = function(callback, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
}

Array.prototype.fill = function(value, start, end) {
  var arr = [];
  var get_end = end || this.length;
  for(var i = start || 0; i < get_end; i++){
    arr.push(value);
  }
  return arr;
}

Array.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.map = function(callback) {
  var arr = []; 
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
}

Object.keys = (function() {
  'use strict';
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

  return function(obj) {
    if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
      throw new TypeError('Object.keys called on non-object');
    }

    var result = [], prop, i;

    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(prop);
      }
    }

    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i]);
        }
      }
    }
    return result;
  };
}());

Object.values = (function() {
  'use strict';
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

  return function(obj) {
    if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
      throw new TypeError('Object.keys called on non-object');
    }

    var result = [], prop, i;

    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(obj[prop]);
      }
    }

    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i]);
        }
      }
    }
    return result;
  };
}());
