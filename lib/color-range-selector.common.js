module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0778":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorRangeSelector_vue_vue_type_style_index_0_id_00029efc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b5c9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorRangeSelector_vue_vue_type_style_index_0_id_00029efc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorRangeSelector_vue_vue_type_style_index_0_id_00029efc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorRangeSelector_vue_vue_type_style_index_0_id_00029efc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "12f9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6859");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5cdb51e9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3de1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".palette-item[data-v-5b525de1]{display:flex;align-items:center;justify-content:space-between;padding-top:3px;padding-bottom:3px;z-index:101}.palette-item .delBtn[data-v-5b525de1]{cursor:pointer;width:60px}.palette-item .delBtn[data-v-5b525de1]:hover{fill:#fff}.palette-item .color-bg[data-v-5b525de1]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}.palette-item .color-bg[data-v-5b525de1],.palette-item .color-bg .color-block[data-v-5b525de1]{width:32px;height:18px;display:inline-block}.palette-item .color-edit[data-v-5b525de1]{margin-left:12px;width:100%}.palette-item .color-edit .color-input[data-v-5b525de1]{color:#a0a7b4;font-size:10px;letter-spacing:.43px;line-height:18px;height:24px;font-weight:400;max-width:80px;padding-left:4px;margin-left:-4px;background-color:transparent;border:1px solid transparent}.palette-item .color-edit .color-input[data-v-5b525de1]:focus,.palette-item .color-edit .color-input[data-v-5b525de1]:hover{border:1px solid #6a7485}.palette-item .anchor[data-v-5b525de1]{visibility:hidden;width:60px}.palette-item[data-v-5b525de1]:hover{background-color:#3a4552}.palette-item:hover .anchor[data-v-5b525de1]{visibility:visible}.button[data-v-5b525de1]{color:#a0a7b4;cursor:pointer;padding:9px 12px;line-height:14px}.button[data-v-5b525de1]:hover{color:#fff}.line-split[data-v-5b525de1]{width:calc(100% - 16px);height:1px;background-color:#6a7485;margin-top:8px;margin-left:8px}.edit-footer[data-v-5b525de1]{margin-top:11px;display:flex;direction:rtl}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5973":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3de1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("87012a18", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "661a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CusSelect_vue_vue_type_style_index_0_id_66d81634_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("12f9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CusSelect_vue_vue_type_style_index_0_id_66d81634_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CusSelect_vue_vue_type_style_index_0_id_66d81634_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CusSelect_vue_vue_type_style_index_0_id_66d81634_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6859":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropdown-label[data-v-66d81634]{margin-left:10px}.dropdown-select[data-v-66d81634]{z-index:100;position:relative}.dropdown-select .dropdown-input[data-v-66d81634]{background-color:#3a414c;border-color:#d3d8e0;box-shadow:none}.dropdown-select .dropdown-input .dropdown-val[data-v-66d81634]{color:#a0a7b4;overflow:hidden}.dropdown-select .dropdown-panel[data-v-66d81634]{border:0;left:0;z-index:100;width:100%;position:absolute;bottom:auto;margin-top:4px;margin-bottom:auto;display:flex;flex-direction:column;background-color:#29323c;box-shadow:0 6px 12px 0 rgba(0,0,0,.16)}.dropdown-select .dropdown-panel .item-selector[data-v-66d81634]{background-color:#29323c;border-top:1px solid #242730;overflow-y:auto;max-height:280px;box-shadow:0 6px 12px 0 rgba(0,0,0,.16);border-radius:2px}.dropdown-select .dropdown-panel .item-selector[data-v-66d81634]::-webkit-scrollbar{width:10px!important;height:10px!important}.dropdown-select .dropdown-panel .item-selector[data-v-66d81634]::-webkit-scrollbar-corner{background:#29323c!important}.dropdown-select .dropdown-panel .item-selector[data-v-66d81634]::-webkit-scrollbar-thumb{border-radius:10px!important;background-color:#3a4552!important;border:3px solid #29323c!important}.dropdown-select .dropdown-panel .item-selector .list_item[data-v-66d81634]{font-size:11px;font-weight:500;white-space:nowrap}.dropdown-select .dropdown-panel .item-selector .list_item[data-v-66d81634]:hover{cursor:pointer;background-color:#6a7485}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "72e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paletteEdit_vue_vue_type_style_index_0_id_5b525de1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5973");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paletteEdit_vue_vue_type_style_index_0_id_5b525de1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paletteEdit_vue_vue_type_style_index_0_id_5b525de1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paletteEdit_vue_vue_type_style_index_0_id_5b525de1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "79ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPalette_vue_vue_type_style_index_0_id_2ded4e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb4a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPalette_vue_vue_type_style_index_0_id_2ded4e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPalette_vue_vue_type_style_index_0_id_2ded4e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPalette_vue_vue_type_style_index_0_id_2ded4e5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "80b5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".color-picker[data-v-3ffa2358]{font-size:13px;border:1px solid #888;padding:12px}.color-picker .color-opacity[data-v-3ffa2358]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-size:14px 14px;position:relative}.color-picker .color-opacity .color-opacity-bar[data-v-3ffa2358]{width:100%;height:14px}.color-picker .color-opacity .color-opacity-thumb[data-v-3ffa2358]{position:absolute;top:-1px;left:0;width:4px;height:100%;background:#fff;box-sizing:content-box;border:1px solid #ddd;border-radius:4px;cursor:pointer;box-shadow:0 0 2px rgba(0,0,0,.6)}.color-picker .color-picker-up[data-v-3ffa2358]{display:flex;min-height:100px;margin-bottom:14px}.color-picker .color-picker-up .color-panel[data-v-3ffa2358]{position:relative;width:92%;margin-right:14px}.color-picker .color-picker-up .color-panel .panel-bg-black[data-v-3ffa2358],.color-picker .color-picker-up .color-panel .panel-bg-white[data-v-3ffa2358]{width:100%;height:100%;position:absolute}.color-picker .color-picker-up .color-panel .panel-bg-white[data-v-3ffa2358]{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.color-picker .color-picker-up .color-panel .panel-bg-black[data-v-3ffa2358]{background:linear-gradient(0deg,#000,transparent)}.color-picker .color-picker-up .color-panel .panel-thumb[data-v-3ffa2358]{position:absolute;width:5px;height:5px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px);cursor:pointer}.color-picker .color-picker-up .color-sidebar[data-v-3ffa2358]{position:relative;flex:1}.color-picker .color-picker-up .color-sidebar .side-bar-bg[data-v-3ffa2358]{width:10px;height:100%;background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.color-picker .color-picker-up .color-sidebar .side-bar-thumb[data-v-3ffa2358]{position:absolute;top:0;left:-1px;width:11px;height:4px;background:#fff;box-sizing:content-box;border:1px solid #ddd;border-radius:4px;cursor:pointer;box-shadow:0 0 2px rgba(0,0,0,.6)}.color-picker .color-number[data-v-3ffa2358]{width:70%;display:flex;align-items:center;justify-content:space-between}.color-picker .color-number div[data-v-3ffa2358]{text-align:center;width:24px;height:24px;padding:6px 6px;border:1px solid #ddd;outline:none;border-radius:4px;color:#777;letter-spacing:1px}.color-picker .flexbox-fix[data-v-3ffa2358]{justify-content:space-between}.color-picker .flexbox-fix div[data-v-3ffa2358]{padding-left:1px}.color-picker .flexbox-fix div span[data-v-3ffa2358]{display:block;text-align:center;font-size:11px;color:#6a7485;text-transform:capitalize}.color-picker .flexbox-fix div input[data-v-3ffa2358]{max-width:25px;border:none;font-size:11px;text-align:center;color:#a0a7b4!important;border-color:#242730!important;outline:none;background-color:#3a414c!important}.color-picker .flexbox-fix div input[data-v-3ffa2358]::-webkit-inner-spin-button,.color-picker .flexbox-fix div input[data-v-3ffa2358]::-webkit-outer-spin-button{-webkit-appearance:none}.color-picker .flexbox-fix div input[type=number][data-v-3ffa2358]{-moz-appearance:textfield}.color-picker .color-confirm[data-v-3ffa2358]{border:1px solid #ddd;border-radius:4px;cursor:pointer;color:#aaa;text-align:center;font-size:8px;width:40px;display:flex;align-items:center;justify-content:center;height:20px}.color-picker .color-confirm[data-v-3ffa2358]:hover{color:#409eff;border-color:#409eff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8935":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".palette[data-v-2ded4e5a]{display:flex;flex-grow:1;border-width:1px;border-style:solid;border-color:transparent;padding:4px;border-radius:4px;cursor:pointer}.palette .palette__inner[data-v-2ded4e5a]{border-radius:2px;display:flex;flex-direction:row;flex-grow:1;justify-content:space-between;overflow:hidden}.palette .palette__block[data-v-2ded4e5a]{flex-grow:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8a23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return It; });
function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function e(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var n=e(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),o=e(/Edge/i),i=e(/firefox/i),r=e(/safari/i)&&!e(/chrome/i)&&!e(/android/i),a=e(/iP(ad|od|hone)/i),l=e(/chrome/i)&&e(/android/i),s={capture:!1,passive:!1};function c(t,e,o){t.addEventListener(e,o,!n&&s)}function u(t,e,o){t.removeEventListener(e,o,!n&&s)}function d(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function h(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function f(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&d(t,e):d(t,e))||o&&t===n)return t;if(t===n)break}while(t=h(t))}return null}var p,g=/\s+/g;function v(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(g," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(g," ")}}function m(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function b(t,e){var n="";if("string"==typeof t)n=t;else do{var o=m(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function w(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function E(){return document.scrollingElement||document.documentElement}function y(t,e,o,i,r){if(t.getBoundingClientRect||t===window){var a,l,s,c,u,d,h;if(t!==window&&t!==E()?(l=(a=t.getBoundingClientRect()).top,s=a.left,c=a.bottom,u=a.right,d=a.height,h=a.width):(l=0,s=0,c=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||o)&&t!==window&&(r=r||t.parentNode,!n))do{if(r&&r.getBoundingClientRect&&("none"!==m(r,"transform")||o&&"static"!==m(r,"position"))){var f=r.getBoundingClientRect();l-=f.top+parseInt(m(r,"border-top-width")),s-=f.left+parseInt(m(r,"border-left-width")),c=l+a.height,u=s+a.width;break}}while(r=r.parentNode);if(i&&t!==window){var p=b(r||t),g=p&&p.a,v=p&&p.d;p&&(c=(l/=v)+(d/=v),u=(s/=g)+(h/=g))}return{top:l,left:s,bottom:c,right:u,width:h,height:d}}}function D(t,e,n){for(var o=x(t,!0),i=y(t)[e];o;){var r=y(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===E())break;o=x(o,!1)}return!1}function _(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==It.ghost&&r[i]!==It.dragged&&f(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function S(t,e){for(var n=t.lastElementChild;n&&(n===It.ghost||"none"===m(n,"display")||e&&!d(n,e));)n=n.previousElementSibling;return n||null}function C(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===It.clone||e&&!d(t,e)||n++;return n}function T(t){var e=0,n=0,o=E();if(t)do{var i=b(t);e+=t.scrollLeft*i.a,n+=t.scrollTop*i.d}while(t!==o&&(t=t.parentNode));return[e,n]}function x(t,e){if(!t||!t.getBoundingClientRect)return E();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=m(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return E();if(o||e)return n;o=!0}}}while(n=n.parentNode);return E()}function M(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function N(t,e){return function(){if(!p){var n=arguments,o=this;1===n.length?t.call(o,n[0]):t.apply(o,n),p=setTimeout(function(){p=void 0},e)}}}function O(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function A(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function I(t,e){m(t,"position","absolute"),m(t,"top",e.top),m(t,"left",e.left),m(t,"width",e.width),m(t,"height",e.height)}function P(t){m(t,"position",""),m(t,"top",""),m(t,"left",""),m(t,"width",""),m(t,"height","")}var k="Sortable"+(new Date).getTime(),R=[],X={initializeByDefault:!0},Y={mount:function(t){for(var e in X)X.hasOwnProperty(e)&&!(e in t)&&(t[e]=X[e]);R.push(t)},pluginEvent:function(e,n,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";R.forEach(function(i){n[i.pluginName]&&(n[i.pluginName][r]&&n[i.pluginName][r](t({sortable:n},o)),n.options[i.pluginName]&&n[i.pluginName][e]&&n[i.pluginName][e](t({sortable:n},o)))})},initializePlugins:function(t,e,n,o){for(var i in R.forEach(function(o){var i=o.pluginName;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[i]=r,Object.assign(n,r.defaults)}}),t.options)if(t.options.hasOwnProperty(i)){var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r)}},getEventProperties:function(t,e){var n={};return R.forEach(function(o){"function"==typeof o.eventProperties&&Object.assign(n,o.eventProperties.call(e[o.pluginName],t))}),n},modifyOption:function(t,e,n){var o;return R.forEach(function(i){t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))}),o}};function B(e){var i=e.sortable,r=e.rootEl,a=e.name,l=e.targetEl,s=e.cloneEl,c=e.toEl,u=e.fromEl,d=e.oldIndex,h=e.newIndex,f=e.oldDraggableIndex,p=e.newDraggableIndex,g=e.originalEvent,v=e.putSortable,m=e.extraEventProperties;if(i=i||r&&r[k]){var b,w=i.options,E="on"+a.charAt(0).toUpperCase()+a.substr(1);!window.CustomEvent||n||o?(b=document.createEvent("Event")).initEvent(a,!0,!0):b=new CustomEvent(a,{bubbles:!0,cancelable:!0}),b.to=c||r,b.from=u||r,b.item=l||r,b.clone=s,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var y=t({},m,Y.getEventProperties(a,i));for(var D in y)b[D]=y[D];r&&r.dispatchEvent(b),w[E]&&w[E].call(i,b)}}var H=function(e,n,o){var i=void 0===o?{}:o,r=i.evt,a=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)e.indexOf(n=r[o])>=0||(i[n]=t[n]);return i}(i,["evt"]);Y.pluginEvent.bind(It)(e,n,t({dragEl:L,parentEl:K,ghostEl:W,rootEl:j,nextEl:z,lastDownEl:G,cloneEl:U,cloneHidden:q,dragStarted:lt,putSortable:tt,activeSortable:It.active,originalEvent:r,oldIndex:V,oldDraggableIndex:Q,newIndex:Z,newDraggableIndex:$,hideGhostForTarget:xt,unhideGhostForTarget:Mt,cloneNowHidden:function(){q=!0},cloneNowShown:function(){q=!1},dispatchSortableEvent:function(t){F({sortable:n,name:t,originalEvent:r})}},a))};function F(e){B(t({putSortable:tt,cloneEl:U,targetEl:L,rootEl:j,oldIndex:V,oldDraggableIndex:Q,newIndex:Z,newDraggableIndex:$},e))}var L,K,W,j,z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht=!1,ft=!1,pt=[],gt=!1,vt=!1,mt=[],bt=!1,wt=[],Et="undefined"!=typeof document,yt=a,Dt=o||n?"cssFloat":"float",_t=Et&&!l&&!a&&"draggable"in document.createElement("div"),St=function(){if(Et){if(n)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ct=function(t,e){var n=m(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=_(t,0,e),r=_(t,1,e),a=i&&m(i),l=r&&m(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+y(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+y(r).width;return"flex"===n.display?"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal":"grid"===n.display?n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal":i&&a.float&&"none"!==a.float?!r||"both"!==l.clear&&l.clear!==("left"===a.float?"left":"right")?"horizontal":"vertical":i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Dt]||r&&"none"===n[Dt]&&s+c>o)?"vertical":"horizontal"},Tt=function(t){function e(t,n){return function(o,i,r,a){if(null==t&&(n||o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var l=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},xt=function(){!St&&W&&m(W,"display","none")},Mt=function(){!St&&W&&m(W,"display","")};Et&&document.addEventListener("click",function(t){if(ft)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ft=!1,!1},!0);var Nt,Ot=function(t){if(L){var e=(i=(t=t.touches?t.touches[0]:t).clientX,r=t.clientY,pt.some(function(t){if(!S(t)){var e=y(t),n=t[k].options.emptyInsertThreshold;return n&&i>=e.left-n&&i<=e.right+n&&r>=e.top-n&&r<=e.bottom+n?a=t:void 0}}),a);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[k]._onDragOver(n)}}var i,r,a},At=function(t){L&&L.parentNode[k]._isOutsideThisEl(t.target)};function It(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not "+{}.toString.call(e);this.el=e,this.options=n=Object.assign({},n),e[k]=this;var o,i,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ct(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==It.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var a in Y.initializePlugins(this,e,r),r)!(a in n)&&(n[a]=r[a]);for(var l in Tt(n),this)"_"===l.charAt(0)&&"function"==typeof this[l]&&(this[l]=this[l].bind(this));this.nativeDraggable=!n.forceFallback&&_t,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?c(e,"pointerdown",this._onTapStart):(c(e,"mousedown",this._onTapStart),c(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(c(e,"dragover",this),c(e,"dragenter",this)),pt.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),Object.assign(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==m(e,"display")&&void 0!==e){i.push({target:e,rect:y(e)});var n=t({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=b(e,!0);o&&(n.top-=o.f,n.left-=o.e)}e.fromRect=n}})},addAnimationState:function(t){i.push(t)},removeAnimationState:function(t){i.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(i,{target:t}),1)},animateAll:function(t){var e=this;if(!this.options.animation)return clearTimeout(o),void("function"==typeof t&&t());var n=!1,r=0;i.forEach(function(t){var o=0,i=t.target,a=i.fromRect,l=y(i),s=i.prevFromRect,c=i.prevToRect,u=t.rect,d=b(i,!0);d&&(l.top-=d.f,l.left-=d.e),i.toRect=l,i.thisAnimationDuration&&M(s,l)&&!M(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(o=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,e.options)),M(l,a)||(i.prevFromRect=a,i.prevToRect=l,o||(o=e.options.animation),e.animate(i,u,l,o)),o&&(n=!0,r=Math.max(r,o),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},o),i.thisAnimationDuration=o)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof t&&t()},r):"function"==typeof t&&t(),i=[]},animate:function(t,e,n,o){if(o){m(t,"transition",""),m(t,"transform","");var i=b(this.el),r=(e.left-n.left)/(i&&i.a||1),a=(e.top-n.top)/(i&&i.d||1);t.animatingX=!!r,t.animatingY=!!a,m(t,"transform","translate3d("+r+"px,"+a+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),m(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),m(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){m(t,"transition",""),m(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}))}function Pt(t,e,i,r,a,l,s,c){var u,d,h=t[k],f=h.options.onMove;return!window.CustomEvent||n||o?(u=document.createEvent("Event")).initEvent("move",!0,!0):u=new CustomEvent("move",{bubbles:!0,cancelable:!0}),u.to=e,u.from=t,u.dragged=i,u.draggedRect=r,u.related=a||e,u.relatedRect=l||y(e),u.willInsertAfter=c,u.originalEvent=s,t.dispatchEvent(u),f&&(d=f.call(h,u,s)),d}function kt(t){t.draggable=!1}function Rt(){bt=!1}function Xt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Yt(t){return setTimeout(t,0)}function Bt(t){return clearTimeout(t)}It.prototype={constructor:It,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(st=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,L):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,i=o.preventOnFilter,a=t.type,l=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(l||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,u=o.filter;if(function(t){wt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&wt.push(o)}}(n),!L&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!r||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=f(s,o.draggable,n,!1))&&s.animated||G===s)){if(V=C(s),Q=C(s,o.draggable),"function"==typeof u){if(u.call(this,t,s,this))return F({sortable:e,rootEl:c,name:"filter",targetEl:s,toEl:n,fromEl:n}),H("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(u&&(u=u.split(",").some(function(o){if(o=f(c,o.trim(),n,!1))return F({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:n,toEl:n}),H("filter",e,{evt:t}),!0})))return void(i&&t.cancelable&&t.preventDefault());o.handle&&!f(c,o.handle,n,!1)||this._prepareDragStart(t,l,s)}}},_prepareDragStart:function(t,e,r){var a,l=this,s=l.el,u=l.options,d=s.ownerDocument;if(r&&!L&&r.parentNode===s){var h=y(r);if(j=s,K=(L=r).parentNode,z=L.nextSibling,G=r,J=u.group,It.dragged=L,rt=(et={target:L,clientX:(e||t).clientX,clientY:(e||t).clientY}).clientX-h.left,at=et.clientY-h.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,L.style["will-change"]="all",a=function(){H("delayEnded",l,{evt:t}),It.eventCanceled?l._onDrop():(l._disableDelayedDragEvents(),!i&&l.nativeDraggable&&(L.draggable=!0),l._triggerDragStart(t,e),F({sortable:l,name:"choose",originalEvent:t}),v(L,u.chosenClass,!0))},u.ignore.split(",").forEach(function(t){w(L,t.trim(),kt)}),c(d,"dragover",Ot),c(d,"mousemove",Ot),c(d,"touchmove",Ot),c(d,"mouseup",l._onDrop),c(d,"touchend",l._onDrop),c(d,"touchcancel",l._onDrop),i&&this.nativeDraggable&&(this.options.touchStartThreshold=4,L.draggable=!0),H("delayStart",this,{evt:t}),!u.delay||u.delayOnTouchOnly&&!e||this.nativeDraggable&&(o||n))a();else{if(It.eventCanceled)return void this._onDrop();c(d,"mouseup",l._disableDelayedDrag),c(d,"touchend",l._disableDelayedDrag),c(d,"touchcancel",l._disableDelayedDrag),c(d,"mousemove",l._delayedDragTouchMoveHandler),c(d,"touchmove",l._delayedDragTouchMoveHandler),u.supportPointer&&c(d,"pointermove",l._delayedDragTouchMoveHandler),l._dragStartTimer=setTimeout(a,u.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){L&&kt(L),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;u(t,"mouseup",this._disableDelayedDrag),u(t,"touchend",this._disableDelayedDrag),u(t,"touchcancel",this._disableDelayedDrag),u(t,"mousemove",this._delayedDragTouchMoveHandler),u(t,"touchmove",this._delayedDragTouchMoveHandler),u(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?c(document,this.options.supportPointer?"pointermove":e?"touchmove":"mousemove",this._onTouchMove):(c(L,"dragend",this),c(j,"dragstart",this._onDragStart));try{document.selection?Yt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(ht=!1,j&&L){H("dragStarted",this,{evt:e}),this.nativeDraggable&&c(document,"dragover",At);var n=this.options;!t&&v(L,n.dragClass,!1),v(L,n.ghostClass,!0),It.active=this,t&&this._appendGhost(),F({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(nt){this._lastX=nt.clientX,this._lastY=nt.clientY,xt();for(var t=document.elementFromPoint(nt.clientX,nt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(nt.clientX,nt.clientY))!==e;)e=t;if(L.parentNode[k]._isOutsideThisEl(t),e)do{if(e[k]&&e[k]._onDragOver({clientX:nt.clientX,clientY:nt.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break;t=e}while(e=e.parentNode);Mt()}},_onTouchMove:function(t){if(et){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=W&&b(W,!0),a=W&&r&&r.a,l=W&&r&&r.d,s=yt&&dt&&T(dt),c=(i.clientX-et.clientX+o.x)/(a||1)+(s?s[0]-mt[0]:0)/(a||1),u=(i.clientY-et.clientY+o.y)/(l||1)+(s?s[1]-mt[1]:0)/(l||1);if(!It.active&&!ht){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(W){r?(r.e+=c-(ot||0),r.f+=u-(it||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix("+r.a+","+r.b+","+r.c+","+r.d+","+r.e+","+r.f+")";m(W,"webkitTransform",d),m(W,"mozTransform",d),m(W,"msTransform",d),m(W,"transform",d),ot=c,it=u,nt=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!W){var t=this.options.fallbackOnBody?document.body:j,e=y(L,!0,yt,!0,t),n=this.options;if(yt){for(dt=t;"static"===m(dt,"position")&&"none"===m(dt,"transform")&&dt!==document;)dt=dt.parentNode;dt!==document.body&&dt!==document.documentElement?(dt===document&&(dt=E()),e.top+=dt.scrollTop,e.left+=dt.scrollLeft):dt=E(),mt=T(dt)}v(W=L.cloneNode(!0),n.ghostClass,!1),v(W,n.fallbackClass,!0),v(W,n.dragClass,!0),m(W,"transition",""),m(W,"transform",""),m(W,"box-sizing","border-box"),m(W,"margin",0),m(W,"top",e.top),m(W,"left",e.left),m(W,"width",e.width),m(W,"height",e.height),m(W,"opacity","0.8"),m(W,"position",yt?"absolute":"fixed"),m(W,"zIndex","100000"),m(W,"pointerEvents","none"),It.ghost=W,t.appendChild(W),m(W,"transform-origin",rt/parseInt(W.style.width)*100+"% "+at/parseInt(W.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;H("dragStart",this,{evt:t}),It.eventCanceled?this._onDrop():(H("setupClone",this),It.eventCanceled||((U=A(L)).draggable=!1,U.style["will-change"]="",this._hideClone(),v(U,this.options.chosenClass,!1),It.clone=U),n.cloneId=Yt(function(){H("clone",n),It.eventCanceled||(n.options.removeCloneOnHide||j.insertBefore(U,L),n._hideClone(),F({sortable:n,name:"clone"}))}),!e&&v(L,i.dragClass,!0),e?(ft=!0,n._loopId=setInterval(n._emulateDragOver,50)):(u(document,"mouseup",n._onDrop),u(document,"touchend",n._onDrop),u(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,L)),c(document,"drop",n),m(L,"transform","translateZ(0)")),ht=!0,n._dragStartId=Yt(n._dragStarted.bind(n,e,t)),c(document,"selectstart",n),lt=!0,r&&m(document.body,"user-select","none"))},_onDragOver:function(e){var n,o,i,r,a=this.el,l=e.target,s=this.options,c=s.group,u=It.active,d=J===c,h=s.sort,p=tt||u,g=this,b=!1;if(!bt){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),l=f(l,s.draggable,a,!0),B("dragOver"),It.eventCanceled)return b;if(L.contains(e.target)||l.animated&&l.animatingX&&l.animatingY||g._ignoreWhileAnimating===l)return U(!1);if(ft=!1,u&&!s.disabled&&(d?h||(i=!j.contains(L)):tt===this||(this.lastPutMode=J.checkPull(this,u,L,e))&&c.checkPut(this,u,L,e))){if(r="vertical"===this._getDirection(e,l),n=y(L),B("dragOverValid"),It.eventCanceled)return b;if(i)return K=j,G(),this._hideClone(),B("revert"),It.eventCanceled||(z?j.insertBefore(L,z):j.appendChild(L)),U(!0);var w=S(a,s.draggable);if(!w||function(t,e,n){var o=y(S(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(e,r,this)&&!w.animated){if(w===L)return U(!1);if(w&&a===e.target&&(l=w),l&&(o=y(l)),!1!==Pt(j,a,L,n,l,o,e,!!l))return G(),a.appendChild(L),K=a,q(),U(!0)}else if(l.parentNode===a){o=y(l);var E,_,T,x=L.parentNode!==a,M=!function(t,e,n){var o=n?t.left:t.top,i=n?e.left:e.top;return o===i||(n?t.right:t.bottom)===(n?e.right:e.bottom)||o+(n?t.width:t.height)/2===i+(n?e.width:e.height)/2}(L.animated&&L.toRect||n,l.animated&&l.toRect||o,r),N=r?"top":"left",A=D(l,"top","top")||D(L,"top","top"),I=A?A.scrollTop:void 0;if(st!==l&&(_=o[N],gt=!1,vt=!M&&s.invertSwap||x),0!==(E=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&ut<c*i){if(!gt&&(1===ct?s>u+c*r/2:s<d-c*r/2)&&(gt=!0),gt)h=!0;else if(1===ct?s<u+ut:s>d-ut)return-ct}else if(s>u+c*(1-i)/2&&s<d-c*(1-i)/2)return function(t){return C(L)<C(t)?1:-1}(e);return(h=h||a)&&(s<u+c*r/2||s>d-c*r/2)?s>u+c/2?1:-1:0}(e,l,o,r,M?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,vt,st===l))){var P=C(L);do{T=K.children[P-=E]}while(T&&("none"===m(T,"display")||T===W))}if(0===E||T===l)return U(!1);st=l,ct=E;var R=l.nextElementSibling,X=!1,Y=Pt(j,a,L,n,l,o,e,X=1===E);if(!1!==Y)return 1!==Y&&-1!==Y||(X=1===Y),bt=!0,setTimeout(Rt,30),G(),X&&!R?a.appendChild(L):l.parentNode.insertBefore(L,X?R:l),A&&O(A,0,I-A.scrollTop),K=L.parentNode,void 0===_||vt||(ut=Math.abs(_-y(l)[N])),q(),U(!0)}if(a.contains(L))return U(!1)}return!1}function B(s,c){H(s,g,t({evt:e,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:n,targetRect:o,canSort:h,fromSortable:p,target:l,completed:U,onMove:function(t,o){return Pt(j,a,L,n,t,y(t),e,o)},changed:q},c))}function G(){B("dragOverAnimationCapture"),g.captureAnimationState(),g!==p&&p.captureAnimationState()}function U(t){return B("dragOverCompleted",{insertion:t}),t&&(d?u._hideClone():u._showClone(g),g!==p&&(v(L,tt?tt.options.ghostClass:u.options.ghostClass,!1),v(L,s.ghostClass,!0)),tt!==g&&g!==It.active?tt=g:g===It.active&&tt&&(tt=null),p===g&&(g._ignoreWhileAnimating=l),g.animateAll(function(){B("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(l===L&&!L.animated||l===a&&!l.animated)&&(st=null),s.dragoverBubble||e.rootEl||l===document||(L.parentNode[k]._isOutsideThisEl(e.target),!t&&Ot(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function q(){Z=C(L),$=C(L,s.draggable),F({sortable:g,name:"change",toEl:a,newIndex:Z,newDraggableIndex:$,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){u(document,"mousemove",this._onTouchMove),u(document,"touchmove",this._onTouchMove),u(document,"pointermove",this._onTouchMove),u(document,"dragover",Ot),u(document,"mousemove",Ot),u(document,"touchmove",Ot)},_offUpEvents:function(){var t=this.el.ownerDocument;u(t,"mouseup",this._onDrop),u(t,"touchend",this._onDrop),u(t,"pointerup",this._onDrop),u(t,"touchcancel",this._onDrop),u(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;Z=C(L),$=C(L,n.draggable),H("drop",this,{evt:t}),K=L&&L.parentNode,Z=C(L),$=C(L,n.draggable),It.eventCanceled||(ht=!1,vt=!1,gt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Bt(this.cloneId),Bt(this._dragStartId),this.nativeDraggable&&(u(document,"drop",this),u(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),r&&m(document.body,"user-select",""),m(L,"transform",""),t&&(lt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),W&&W.parentNode&&W.parentNode.removeChild(W),(j===K||tt&&"clone"!==tt.lastPutMode)&&U&&U.parentNode&&U.parentNode.removeChild(U),L&&(this.nativeDraggable&&u(L,"dragend",this),kt(L),L.style["will-change"]="",lt&&!ht&&v(L,tt?tt.options.ghostClass:this.options.ghostClass,!1),v(L,this.options.chosenClass,!1),F({sortable:this,name:"unchoose",toEl:K,newIndex:null,newDraggableIndex:null,originalEvent:t}),j!==K?(Z>=0&&(F({rootEl:K,name:"add",toEl:K,fromEl:j,originalEvent:t}),F({sortable:this,name:"remove",toEl:K,originalEvent:t}),F({rootEl:K,name:"sort",toEl:K,fromEl:j,originalEvent:t}),F({sortable:this,name:"sort",toEl:K,originalEvent:t})),tt&&tt.save()):Z!==V&&Z>=0&&(F({sortable:this,name:"update",toEl:K,originalEvent:t}),F({sortable:this,name:"sort",toEl:K,originalEvent:t})),It.active&&(null!=Z&&-1!==Z||(Z=V,$=Q),F({sortable:this,name:"end",toEl:K,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){H("nulling",this),j=L=K=W=z=U=G=q=et=nt=lt=Z=$=V=Q=st=ct=tt=J=It.dragged=It.ghost=It.clone=It.active=null,wt.forEach(function(t){t.checked=!0}),wt.length=ot=it=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":L&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)f(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Xt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,o){var i=n.children[o];f(i,this.options.draggable,n,!1)&&(e[t]=i)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return f(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=Y.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Tt(n)},destroy:function(){H("destroy",this);var t=this.el;t[k]=null,u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart),u(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),pt.splice(pt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!q){if(H("hideClone",this),It.eventCanceled)return;m(U,"display","none"),this.options.removeCloneOnHide&&U.parentNode&&U.parentNode.removeChild(U),q=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(q){if(H("showClone",this),It.eventCanceled)return;L.parentNode!=j||this.options.group.revertClone?z?j.insertBefore(U,z):j.appendChild(U):j.insertBefore(U,L),this.options.group.revertClone&&this.animate(L,U),m(U,"display",""),q=!1}}else this._hideClone()}},Et&&c(document,"touchmove",function(t){(It.active||ht)&&t.cancelable&&t.preventDefault()}),It.utils={on:c,off:u,css:m,find:w,is:function(t,e){return!!f(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:N,closest:f,toggleClass:v,clone:A,index:C,nextTick:Yt,cancelNextTick:Bt,detectDirection:Ct,getChild:_},It.get=function(t){return t[k]},It.mount=function(){var e=[].slice.call(arguments);e[0].constructor===Array&&(e=e[0]),e.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not "+{}.toString.call(e);e.utils&&(It.utils=t({},It.utils,e.utils)),Y.mount(e)})},It.create=function(t,e){return new It(t,e)},It.version="1.12.0";var Ht,Ft,Lt,Kt,Wt,jt=[],zt=[],Gt=!1,Ut=!1,qt=!1;function Vt(t,e){zt.forEach(function(n,o){var i=e.children[n.sortableIndex+(t?Number(o):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function Zt(){jt.forEach(function(t){t!==Lt&&t.parentNode&&t.parentNode.removeChild(t)})}var Qt=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.dispatchSortableEvent,r=t.unhideGhostForTarget;if(e){var a=n||t.activeSortable;(0,t.hideGhostForTarget)();var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,s=document.elementFromPoint(l.clientX,l.clientY);r(),a&&!a.el.contains(s)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function $t(){}function Jt(){}$t.prototype={startIndex:null,dragStart:function(t){this.startIndex=t.oldDraggableIndex},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=_(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:Qt},Object.assign($t,{pluginName:"revertOnSpill"}),Jt.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:Qt},Object.assign(Jt,{pluginName:"removeOnSpill"});var te,ee,ne,oe,ie,re,ae=[],le=!1;function se(){ae.forEach(function(t){clearInterval(t.pid)}),ae=[]}function ce(){clearInterval(re)}var ue=N(function(t,e,n,o){if(e.scroll){var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=E(),u=!1;ee!==n&&(ee=n,se(),i=e.scrollFn,!0===(te=e.scroll)&&(te=x(n,!0)));var d=0,h=te;do{var f=h,p=y(f),g=p.top,v=p.bottom,b=p.left,w=p.right,D=p.width,_=p.height,S=void 0,C=void 0,T=f.scrollWidth,M=f.scrollHeight,N=m(f),A=f.scrollLeft,I=f.scrollTop;f===c?(S=D<T&&("auto"===N.overflowX||"scroll"===N.overflowX||"visible"===N.overflowX),C=_<M&&("auto"===N.overflowY||"scroll"===N.overflowY||"visible"===N.overflowY)):(S=D<T&&("auto"===N.overflowX||"scroll"===N.overflowX),C=_<M&&("auto"===N.overflowY||"scroll"===N.overflowY));var P=S&&(Math.abs(w-r)<=l&&A+D<T)-(Math.abs(b-r)<=l&&!!A),R=C&&(Math.abs(v-a)<=l&&I+_<M)-(Math.abs(g-a)<=l&&!!I);if(!ae[d])for(var X=0;X<=d;X++)ae[X]||(ae[X]={});ae[d].vx==P&&ae[d].vy==R&&ae[d].el===f||(ae[d].el=f,ae[d].vx=P,ae[d].vy=R,clearInterval(ae[d].pid),0==P&&0==R||(u=!0,ae[d].pid=setInterval(function(){o&&0===this.layer&&It.active._onTouchMove(ie);var e=ae[this.layer].vy?ae[this.layer].vy*s:0,n=ae[this.layer].vx?ae[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(It.dragged.parentNode[k],n,e,t,ie,ae[this.layer].el)||O(ae[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=x(h,!1)));le=u}},30);It.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?c(document,"dragover",this._handleAutoScroll):c(document,this.options.supportPointer?"pointermove":e.touches?"touchmove":"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):(u(document,"pointermove",this._handleFallbackAutoScroll),u(document,"touchmove",this._handleFallbackAutoScroll),u(document,"mousemove",this._handleFallbackAutoScroll)),ce(),se(),clearTimeout(p),p=void 0},nulling:function(){ie=ee=te=le=re=ne=oe=null,ae.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,a=(t.touches?t.touches[0]:t).clientX,l=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(a,l);if(ie=t,e||o||n||r){ue(t,this.options,s,e);var c=x(s,!0);!le||re&&a===ne&&l===oe||(re&&ce(),re=setInterval(function(){var n=x(document.elementFromPoint(a,l),!0);n!==c&&(c=n,se()),ue(t,i.options,n,e)},10),ne=a,oe=l)}else{if(!this.options.bubbleScroll||x(s,!0)===E())return void se();ue(t,this.options,x(s,!1),!1)}}},Object.assign(t,{pluginName:"scroll",initializeByDefault:!0})}),It.mount(Jt,$t),It.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){Nt=t.dragEl},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.changed,i=t.cancel;if(t.activeSortable.options.swap){var r=this.options;if(n&&n!==this.sortable.el){var a=Nt;!1!==(0,t.onMove)(n)?(v(n,r.swapClass,!0),Nt=n):Nt=null,a&&a!==Nt&&v(a,r.swapClass,!1)}o(),e(!0),i()}},drop:function(t){var e,n,o,i,r,a,l=t.activeSortable,s=t.putSortable,c=t.dragEl,u=s||this.sortable,d=this.options;Nt&&v(Nt,d.swapClass,!1),Nt&&(d.swap||s&&s.options.swap)&&c!==Nt&&(u.captureAnimationState(),u!==l&&l.captureAnimationState(),a=(n=Nt).parentNode,(r=(e=c).parentNode)&&a&&!r.isEqualNode(n)&&!a.isEqualNode(e)&&(o=C(e),i=C(n),r.isEqualNode(a)&&o<i&&i++,r.insertBefore(n,r.children[o]),a.insertBefore(e,a.children[i])),u.animateAll(),u!==l&&l.animateAll())},nulling:function(){Nt=null}},Object.assign(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Nt}}})}),It.mount(new function(){function t(t){for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this));t.options.supportPointer?c(document,"pointerup",this._deselectMultiDrag):(c(document,"mouseup",this._deselectMultiDrag),c(document,"touchend",this._deselectMultiDrag)),c(document,"keydown",this._checkKeyDown),c(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(e,n){var o="";jt.length&&Ft===t?jt.forEach(function(t,e){o+=(e?", ":"")+t.textContent}):o=n.textContent,e.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){Lt=t.dragEl},delayEnded:function(){this.isMultiDrag=~jt.indexOf(Lt)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<jt.length;o++)zt.push(A(jt[o])),zt[o].sortableIndex=jt[o].sortableIndex,zt[o].draggable=!1,zt[o].style["will-change"]="",v(zt[o],this.options.selectedClass,!1),jt[o]===Lt&&v(zt[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.dispatchSortableEvent,n=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||jt.length&&Ft===t.sortable&&(Vt(!0,t.rootEl),e("clone"),n()))},showClone:function(t){var e=t.cloneNowShown,n=t.cancel;this.isMultiDrag&&(Vt(!1,t.rootEl),zt.forEach(function(t){m(t,"display","")}),e(),Wt=!1,n())},hideClone:function(t){var e=this,n=t.cloneNowHidden,o=t.cancel;this.isMultiDrag&&(zt.forEach(function(t){m(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),Wt=!0,o())},dragStartGlobal:function(t){!this.isMultiDrag&&Ft&&Ft.multiDrag._deselectMultiDrag(),jt.forEach(function(t){t.sortableIndex=C(t)}),jt=jt.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),qt=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){jt.forEach(function(t){t!==Lt&&m(t,"position","absolute")});var o=y(Lt,!1,!0,!0);jt.forEach(function(t){t!==Lt&&I(t,o)}),Ut=!0,Gt=!0}n.animateAll(function(){Ut=!1,Gt=!1,e.options.animation&&jt.forEach(function(t){P(t)}),e.options.sort&&Zt()})}},dragOver:function(t){var e=t.completed,n=t.cancel;Ut&&~jt.indexOf(t.target)&&(e(!1),n())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;jt.length>1&&(jt.forEach(function(t){o.addAnimationState({target:t,rect:Ut?y(t):i}),P(t),t.fromRect=i,e.removeAnimationState(t)}),Ut=!1,function(t,e){jt.forEach(function(n,o){var i=e.children[n.sortableIndex+(t?Number(o):0)];i?e.insertBefore(n,i):e.appendChild(n)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.activeSortable,i=t.parentEl,r=t.putSortable,a=this.options;if(t.insertion){if(n&&o._hideClone(),Gt=!1,a.animation&&jt.length>1&&(Ut||!n&&!o.options.sort&&!r)){var l=y(Lt,!1,!0,!0);jt.forEach(function(t){t!==Lt&&(I(t,l),i.appendChild(t))}),Ut=!0}if(!n)if(Ut||Zt(),jt.length>1){var s=Wt;o._showClone(e),o.options.animation&&!Wt&&s&&zt.forEach(function(t){o.addAnimationState({target:t,rect:Kt}),t.fromRect=Kt,t.thisAnimationDuration=null})}else o._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(jt.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){Kt=Object.assign({},e);var i=b(Lt,!0);Kt.top-=i.f,Kt.left-=i.e}},dragOverAnimationComplete:function(){Ut&&(Ut=!1,Zt())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!qt)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),v(Lt,c.selectedClass,!~jt.indexOf(Lt)),~jt.indexOf(Lt))jt.splice(jt.indexOf(Lt),1),Ht=null,B({sortable:i,rootEl:n,name:"deselect",targetEl:Lt,originalEvt:e});else{if(jt.push(Lt),B({sortable:i,rootEl:n,name:"select",targetEl:Lt,originalEvt:e}),e.shiftKey&&Ht&&i.el.contains(Ht)){var d,h,f=C(Ht),p=C(Lt);if(~f&&~p&&f!==p)for(p>f?(h=f,d=p):(h=p,d=f+1);h<d;h++)~jt.indexOf(u[h])||(v(u[h],c.selectedClass,!0),jt.push(u[h]),B({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else Ht=Lt;Ft=s}if(qt&&this.isMultiDrag){if((o[k].options.sort||o!==n)&&jt.length>1){var g=y(Lt),m=C(Lt,":not(."+this.options.selectedClass+")");if(!Gt&&c.animation&&(Lt.thisAnimationDuration=null),s.captureAnimationState(),!Gt&&(c.animation&&(Lt.fromRect=g,jt.forEach(function(t){if(t.thisAnimationDuration=null,t!==Lt){var e=Ut?y(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),Zt(),jt.forEach(function(t){u[m]?o.insertBefore(t,u[m]):o.appendChild(t),m++}),a===C(Lt))){var b=!1;jt.forEach(function(t){t.sortableIndex===C(t)||(b=!0)}),b&&r("update")}jt.forEach(function(t){P(t)}),s.animateAll()}Ft=s}(n===o||l&&"clone"!==l.lastPutMode)&&zt.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=qt=!1,zt.length=0},destroyGlobal:function(){this._deselectMultiDrag(),u(document,"pointerup",this._deselectMultiDrag),u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==qt&&qt||Ft!==this.sortable||t&&f(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;jt.length;){var e=jt[0];v(e,this.options.selectedClass,!1),jt.shift(),B({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Object.assign(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[k];e&&e.options.multiDrag&&!~jt.indexOf(t)&&(Ft&&Ft!==e&&(Ft.multiDrag._deselectMultiDrag(),Ft=e),v(t,e.options.selectedClass,!0),jt.push(t))},deselect:function(t){var e=t.parentNode[k],n=jt.indexOf(t);e&&e.options.multiDrag&&~n&&(v(t,e.options.selectedClass,!1),jt.splice(n,1))}},eventProperties:function(){var t=this,e=[],n=[];return jt.forEach(function(o){var i;e.push({multiDragElement:o,index:o.sortableIndex}),i=Ut&&o!==Lt?-1:Ut?C(o,":not(."+t.options.selectedClass+")"):C(o),n.push({multiDragElement:o,index:i})}),{items:[].concat(jt),clones:[].concat(zt),oldIndicies:e,newIndicies:n}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})});/* harmony default export */ __webpack_exports__["default"] = (It);
//# sourceMappingURL=sortable.complete.esm.js.map


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9c25":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".input-box[data-v-00029efc]{display:flex;justify-content:space-between}.selector[data-v-00029efc]{background-color:#29323c;border:1px solid #d3d8e0;border-radius:2px;caret-color:#d3d8e0;color:#a0a7b4;font-size:11px;font-weight:500;font-family:ff-clan-web-pro,Helvetica Neue,Helvetica,sans-serif;height:34px;outline:none;text-overflow:ellipsis;transition:all .4s ease;white-space:nowrap;min-width:200px;word-wrap:normal;pointer-events:all;opacity:1;box-shadow:none}.selector .dropdown-label[data-v-00029efc]{color:#a0a7b4;margin-left:10px;font-size:11px;line-height:20px}.selector .selector-input[data-v-00029efc]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:4px 8px;cursor:pointer;box-sizing:border-box}.selector .selector-check[data-v-00029efc]{display:flex;min-height:12px;margin-left:12px;justify-content:flex-end}.selector .selector-check input[data-v-00029efc]{position:absolute;display:none}.selector .selector-check .un-check[data-v-00029efc]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;line-height:12px;font-weight:500;font-size:12px;color:#6a7485;position:relative;display:inline-block;padding:0 0 0 24px}.selector .selector-check .un-check[data-v-00029efc]:before{position:absolute;top:0;left:-12px;content:\"\";display:block;width:24px;height:12px;border-radius:1px;background:#242730}.selector .selector-check .un-check[data-v-00029efc]:after{transition:all .4s ease;position:absolute;top:0;left:-12px;content:\"\";display:block;height:12px;width:12px;box-shadow:0 2px 4px 0 rgba(0,0,0,.4);border-radius:0;background:#3a414c}.selector .selector-check .check[data-v-00029efc]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;line-height:12px;font-weight:500;font-size:12px;color:#6a7485;position:relative;display:inline-block;padding:0 0 0 24px}.selector .selector-check .check[data-v-00029efc]:before{background:#1fbad6;position:absolute;top:0;left:-12px;content:\"\";display:block;width:24px;height:12px;border-radius:1px}.selector .selector-check .check[data-v-00029efc]:after{transition:all .4s ease;position:absolute;top:0;left:0;content:\"\";display:block;height:12px;width:12px;background:#d3d8e0;box-shadow:0 2px 4px 0 rgba(0,0,0,.4);border-radius:0}.selector .selector-input[data-v-00029efc]:hover{cursor:pointer;background-color:#3a414c;border-color:#d3d8e0}.selector .dropdown[data-v-00029efc]{background-color:#29323c;border:0;max-height:450px;min-height:350px;overflow-y:auto;overflow-x:hidden;width:100%;left:0;z-index:100;position:relative;bottom:auto;margin-top:4px;margin-bottom:auto;box-shadow:0 6px 12px 0 rgba(0,0,0,.16)}.selector .dropdown .color-palette__group .color-palette__outer[data-v-00029efc]{padding:0 8px}.selector .dropdown .color-palette__group .color-palette__outer[data-v-00029efc]:hover{background-color:#39423c;cursor:pointer}.selector .dropdown[data-v-00029efc]::-webkit-scrollbar{width:10px!important;height:10px!important}.selector .dropdown[data-v-00029efc]::-webkit-scrollbar-corner{background:#29323c!important}.selector .dropdown[data-v-00029efc]::-webkit-scrollbar-thumb{border-radius:10px!important;background-color:#3a4552!important;border:3px solid #29323c!important}.selector .form-wrapper[data-v-00029efc]{display:flex;align-items:center;justify-content:space-between;margin:5px 10px}.selector .form-wrapper .form-item[data-v-00029efc]{line-height:32px;flex:1;box-sizing:border-box;position:relative}.selector .num-input[data-v-00029efc]{background-color:#3a414c;border-color:#d3d8e0;box-shadow:none;width:100%;box-sizing:border-box;line-height:28px;color:#a0a7b4;overflow:hidden}.selector .num-input input[data-v-00029efc]{width:100%;background:transparent;border:none;outline:none}.selector .num-input input[data-v-00029efc]::-webkit-inner-spin-button,.selector .num-input input[data-v-00029efc]::-webkit-outer-spin-button{-webkit-appearance:none}.selector .num-input input[type=number][data-v-00029efc]{-moz-appearance:textfield}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b5c9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9c25");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("06e78dde", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toInteger = __webpack_require__("a691");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "b76a":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("8a23"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ }),

/***/ "b899":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("80b5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("51b85f81", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c327":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_3ffa2358_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b899");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_3ffa2358_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_3ffa2358_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_3ffa2358_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5bda2051-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorRangeSelector.vue?vue&type=template&id=00029efc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.closeDropdown),expression:"closeDropdown"}],ref:"dom",staticClass:"selector"},[_c('div',{staticClass:"selector-input"},[(_vm.selectPalette)?_c('color-palette',{attrs:{"colors":_vm.selectPalette.colors}}):_vm._e(),(!_vm.showDrop)?_c('svg',{staticStyle:{"fill":"#fff","cursor":"pointer"},attrs:{"viewBox":"0 0 1024 1024","width":"16","height":"16"},on:{"click":_vm.showDropdown}},[_c('path',{attrs:{"d":"M792.576 327.68c-8.192-8.192-20.48-8.192-28.672 0L552.96 559.104 342.016\n                327.68c-8.192-8.192-20.48-8.192-28.672 0-8.192 8.192-8.192 20.48 0 28.672l223.232\n                245.76c4.096 4.096 10.24 6.144 16.384 6.144 6.144 0 12.288-2.048\n                16.384-6.144l223.232-245.76C800.768 348.16 800.768 335.872 792.576 327.68z"}})]):_vm._e(),(_vm.showDrop)?_c('svg',{staticStyle:{"fill":"#fff","cursor":"pointer"},attrs:{"viewBox":"0 0 1024 1024","width":"16","height":"16"},on:{"click":_vm.closeDropdown}},[_c('path',{attrs:{"d":"M696 285.6L285.8 695.8c-11.7 11.7-11.7 30.8 0 42.4 11.7 11.7 30.8 11.7 42.4 0L738.4 328c11.7-11.7 11.7-30.8 0-42.4-11.6-11.7-30.7-11.7-42.4 0z"}}),_c('path',{attrs:{"d":"M328.2 285.6l410.2 410.2c11.7 11.7 11.7 30.8 0 42.4-11.7 11.7-30.8 11.7-42.4 0L285.8 328c-11.7-11.7-11.7-30.8 0-42.4 11.6-11.7 30.7-11.7 42.4 0z"}})]):_vm._e()],1),(_vm.showDrop)?_c('div',{staticClass:"dropdown",style:(_vm.dropWidth)},[_c('div',{staticClass:"form-wrapper"},[_c('div',{staticClass:"form-item"},[_vm._v("Types")]),_c('cus-select',{staticClass:"form-item",attrs:{"types":_vm.types,"clazz":_vm.currentType},on:{"change":_vm.chooseType}})],1),_c('div',{staticClass:"form-wrapper"},[_c('div',{staticClass:"form-item"},[_vm._v("Steps")]),_c('cus-select',{staticClass:"form-item",staticStyle:{"z-index":"5"},attrs:{"types":[3,4,5,6,7,8,9,10,11,12,15,20],"clazz":_vm.step},on:{"change":_vm.changeStep}})],1),_c('div',{staticClass:"form-wrapper"},[_c('div',{staticClass:"form-item"},[_vm._v("Reversed")]),_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"selector-check",on:{"click":_vm.reverseColor}},[_c('label',{class:_vm.reverse?'check':'un-check'})])])]),_c('div',{staticClass:"form-wrapper"},[_c('div',{staticClass:"form-item"},[_vm._v("Custom")]),_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"selector-check",on:{"click":_vm.showCustom}},[_c('label',{class:_vm.showCus?'check':'un-check'})])])]),(!_vm.showCus)?_c('div',{staticClass:"color-palette__group"},_vm._l((_vm.matchColorSets),function(item){return _c('div',{key:item.name,staticClass:"color-palette__outer",on:{"click":function($event){return _vm.choosePalette(item)}}},[_c('color-palette',{attrs:{"colors":item.colors}})],1)}),0):_vm._e(),(_vm.showCus&&_vm.selectPalette)?_c('div',{staticClass:"color-custom__group"},[_c('color-palette',{attrs:{"colors":_vm.selectPalette.colors},nativeOn:{"click":function($event){return _vm.showDropdown($event)}}}),_c('palette-edit',{attrs:{"palette":_vm.selectPalette},on:{"change":_vm.editChange}})],1):_vm._e()]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ColorRangeSelector.vue?vue&type=template&id=00029efc&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5bda2051-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorPalette.vue?vue&type=template&id=2ded4e5a&scoped=true&
var ColorPalettevue_type_template_id_2ded4e5a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"palette"},[_c('div',{staticClass:"palette__inner",staticStyle:{"height":"10px","transform":"scale(1, 1)"}},_vm._l((_vm.colors),function(color,i){return _c('div',{key:i,staticClass:"palette__block",style:('background-color:'+color)})}),0)])}
var ColorPalettevue_type_template_id_2ded4e5a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ColorPalette.vue?vue&type=template&id=2ded4e5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorPalette.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var ColorPalettevue_type_script_lang_js_ = ({
  name: "ColorRamp",
  props: ['colors']
});
// CONCATENATED MODULE: ./src/components/ColorPalette.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ColorPalettevue_type_script_lang_js_ = (ColorPalettevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ColorPalette.vue?vue&type=style&index=0&id=2ded4e5a&lang=scss&scoped=true&
var ColorPalettevue_type_style_index_0_id_2ded4e5a_lang_scss_scoped_true_ = __webpack_require__("79ce");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/ColorPalette.vue






/* normalize component */

var component = normalizeComponent(
  components_ColorPalettevue_type_script_lang_js_,
  ColorPalettevue_type_template_id_2ded4e5a_scoped_true_render,
  ColorPalettevue_type_template_id_2ded4e5a_scoped_true_staticRenderFns,
  false,
  null,
  "2ded4e5a",
  null
  
)

/* harmony default export */ var ColorPalette = (component.exports);
// CONCATENATED MODULE: ./src/components/colorSchemas.js
/*
 * This product includes color specifications and designs developed by Cynthia
 * Brewer (http://colorbrewer.org/).
 
 https://groups.google.com/forum/?fromgroups=#!topic/d3-js/iyXFgJR1JY0
 */
var schemeNames = {
  sequential: ["BuGn", "BuPu", "GnBu", "OrRd", "PuBu", "PuBuGn", "PuRd", "RdPu", "YlGn", "YlGnBu", "YlOrBr", "YlOrRd"],
  singlehue: ["Blues", "Greens", "Greys", "Oranges", "Purples", "Reds"],
  diverging: ["BrBG", "PiYG", "PRGn", "PuOr", "RdBu", "RdGy", "RdYlBu", "RdYlGn", "Spectral"],
  qualitative: ["Accent", "Dark2", "Paired", "Pastel1", "Pastel2", "Set1", "Set2", "Set3"]
};
var colorScheme = [{
  "name": "Uber Viz Diverging 0",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#FEEEE8", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 0.5",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#A2D4D7", "#EFBEAE", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 1",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#85C4C8", "#FEEEE8", "#EC9370", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 1.5",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#5DBABF", "#BAE1E2", "#F8C0AA", "#DD7755", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 2",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#65B3BA", "#A2D4D7", "#FEEEE8", "#F5B097", "#E17449", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 2.5",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#3EADB3", "#7CC7CB", "#BAE1E2", "#F8C0AA", "#E68F71", "#D45F39", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 3",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#49A6AE", "#65B3BA", "#B2DCDF", "#FEEEE8", "#F8C0AA", "#EC9370", "#DA6436", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 3.5",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#2FA7AE", "#5DBABF", "#8CCED1", "#BAE1E2", "#F8C0AA", "#EB9C80", "#DD7755", "#D0532B", "#C22E00"]
}, {
  "name": "Uber Viz Diverging 4",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#00939C", "#49A6AE", "#71BABF", "#97CED1", "#BAE1E2", "#FEEEE8", "#F8C0AA", "#F2A587", "#E68059", "#D55A2B", "#C22E00"]
}, {
  "name": "Uber Viz Sequential 1",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#E6FAFA", "#89C6CA", "#00939C"]
}, {
  "name": "Uber Viz Sequential 2",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#E6FAFA", "#AAD7DA", "#68B4BB", "#00939C"]
}, {
  "name": "Uber Viz Sequential 3",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#E6FAFA", "#B8E0E1", "#89C6CA", "#56ACB3", "#00939C"]
}, {
  "name": "Uber Viz Sequential 4",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#E6FAFA", "#C1E5E6", "#9DD0D4", "#75BBC1", "#4BA7AF", "#00939C"]
}, {
  "name": "Uber Viz Sequential 5",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#E6FAFA", "#C1E5E6", "#9DD0D4", "#75BBC1", "#4BA7AF", "#00939C", "#108188"]
}, {
  "name": "Uber Viz Sequential 6",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#E6FAFA", "#C1E5E6", "#9DD0D4", "#75BBC1", "#4BA7AF", "#00939C", "#108188", "#0E7077"]
}, {
  "name": "Uber Viz Qualitative 0",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C"]
}, {
  "name": "Uber Viz Qualitative 0.5",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F"]
}, {
  "name": "Uber Viz Qualitative 1",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17"]
}, {
  "name": "Uber Viz Qualitative 1.2",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A"]
}, {
  "name": "Uber Viz Qualitative 1.4",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF"]
}, {
  "name": "Uber Viz Qualitative 1.6",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF", "#125C77"]
}, {
  "name": "Uber Viz Qualitative 1.8",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF", "#125C77", "#4DC19C"]
}, {
  "name": "Uber Viz Qualitative 2",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF", "#125C77", "#4DC19C", "#776E57"]
}, {
  "name": "Uber Viz Qualitative 3",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF", "#125C77", "#4DC19C", "#776E57", "#17B8BE", "#F6D18A", "#B7885E", "#FFCB99", "#F89570"]
}, {
  "name": "Uber Viz Qualitative 4",
  "type": "qualitative",
  "category": "Uber",
  "colors": ["#12939A", "#DDB27C", "#88572C", "#FF991F", "#F15C17", "#223F9A", "#DA70BF", "#125C77", "#4DC19C", "#776E57", "#17B8BE", "#F6D18A", "#B7885E", "#FFCB99", "#F89570", "#829AE3", "#E79FD5", "#1E96BE", "#89DAC1", "#B3AD9E"]
}, {
  "name": "UberPool",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#223F9A", "#2C51BE", "#482BBD", "#7A0DA6", "#AE0E7F", "#CF1750", "#E31A1A", "#FD7900", "#FAC200", "#FAE300"]
}, {
  "name": "UberPool 9",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#2C51BE", "#482BBD", "#7A0DA6", "#AE0E7F", "#CF1750", "#E31A1A", "#FD7900", "#FAC200", "#FAE300"]
}, {
  "name": "UberPool 8",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#213E9A", "#3C1FA7", "#811CB5", "#C318B0", "#D01367", "#DE0F0E", "#EC7007", "#F9E200"]
}, {
  "name": "UberPool 7",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#213E9A", "#461FA9", "#9B1BBA", "#CA168E", "#DA102C", "#E95E08", "#F9E200"]
}, {
  "name": "UberPool 6",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#213E9A", "#551EAD", "#C019BD", "#D31256", "#E6470A", "#F9E200"]
}, {
  "name": "UberPool 5",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#213E9A", "#6E1DB2", "#CA168E", "#E2260C", "#F9E200"]
}, {
  "name": "UberPool 4",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#213E9A", "#9B1BBA", "#DA102C", "#F9E200"]
}, {
  "name": "UberPool 3",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#213E9A", "#CA168E", "#F9E200"]
}, {
  "name": "Ice And Fire 3",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#0198BD", "#FAFEB3", "#D50255"]
}, {
  "name": "Ice And Fire 4",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#0198BD", "#E8FEB5", "#FEAD54", "#D50255"]
}, {
  "name": "Ice And Fire 5",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#0198BD", "#49E3CE", "#FAFEB3", "#FEAD54", "#D50255"]
}, {
  "name": "Ice And Fire",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#0198BD", "#49E3CE", "#E8FEB5", "#FEEDB1", "#FEAD54", "#D50255"]
}, {
  "name": "Ice And Fire 7",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#0198BD", "#54BAB9", "#A7DCB6", "#FAFEB3", "#FCD583", "#FEAD54", "#D50255"]
}, {
  "name": "Ice And Fire 8",
  "type": "diverging",
  "category": "Uber",
  "colors": ["#007A99", "#0198BD", "#49E3CE", "#E8FEB5", "#FEEDB1", "#FEAD54", "#D50255", "#7F1941"]
}, {
  "name": "Global Warming 3",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#5A1846", "#C70039", "#FFC300"]
}, {
  "name": "Global Warming 4",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#5A1846", "#831A3D", "#E3611C", "#FFC300"]
}, {
  "name": "Global Warming 5",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#5A1846", "#831A3D", "#AC1C17", "#D55D0E", "#FFC300"]
}, {
  "name": "Global Warming",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
}, {
  "name": "Global Warming 7",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#5A1846", "#751A43", "#911932", "#AC1C17", "#C84411", "#E37B0A", "#FFC300"]
}, {
  "name": "Global Warming 8",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#4C0035", "#650031", "#7F0023", "#98000A", "#B21800", "#CB4600", "#E57F00", "#FFC300"]
}, {
  "name": "Sunrise 3",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#355C7D", "#C06C84", "#F8B195"]
}, {
  "name": "Sunrise 4",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#355C7D", "#9A627C", "#C86A7E", "#F8B195"]
}, {
  "name": "Sunrise",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#355C7D", "#6C5B7B", "#C06C84", "#F67280", "#F8B195"]
}, {
  "name": "Sunrise 6",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#355C7D", "#63617F", "#916681", "#D88185", "#E8998D", "#F8B195"]
}, {
  "name": "Sunrise 7",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#355C7D", "#63617F", "#916681", "#C06C84", "#D28389", "#E59A8F", "#F8B195"]
}, {
  "name": "Sunrise 8",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#194266", "#355C7D", "#63617F", "#916681", "#C06C84", "#D28389", "#E59A8F", "#F8B195"]
}, {
  "name": "Ocean Green 3",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#3A748A", "#3EACA8", "#E5EEc1"]
}, {
  "name": "Ocean Green 4",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#547A82", "#3EACA8", "#A2D4AB", "#E5EEc1"]
}, {
  "name": "Ocean Green 5",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#3A748A", "#54A38F", "#73BC84", "#A9D597", "#E5EEc1"]
}, {
  "name": "Ocean Green 6",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#37535E", "#3A748A", "#4095B5", "#52AEC9", "#72BFC4", "#93CFBF"]
}, {
  "name": "Ocean Green 7",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#3A748A", "#4B9A95", "#5EAB8B", "#73BC84", "#92CC8B", "#BEDDA5", "#E5EEc1"]
}, {
  "name": "Ocean Green 8",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#37535E", "#3A748A", "#4B9A95", "#5EAB8B", "#73BC84", "#92CC8B", "#BEDDA5", "#E5EEc1"]
}, {
  "name": "Pink Wine 3",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#50315E", "#956485", "#EDD1CA"]
}, {
  "name": "Pink Wine 4",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#50315E", "#774976", "#B28294", "#EDD1CA"]
}, {
  "name": "Pink Wine 5",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#50315E", "#643D68", "#956485", "#C1939D", "#EDD1CA"]
}, {
  "name": "Pink Wine 6",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2C1E3D", "#573660", "#83537C", "#A6758E", "#C99DA4", "#EDD1CA"]
}, {
  "name": "Pink Wine 7",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2C1E3D", "#4F315A", "#774976", "#956485", "#B28294", "#CFA4A8", "#EDD1CA"]
}, {
  "name": "Pink Wine",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2C1E3D", "#50315E", "#764476", "#9A5B88", "#B77495", "#CF91A3", "#E0B1B3", "#EDD1CA"]
}, {
  "name": "Purple Blue Yellow 3",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2B1E3E", "#5EA28D", "#D6DEBF"]
}, {
  "name": "Purple Blue Yellow 4",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2B1E3E", "#466373", "#7BA889", "#D6DEBF"]
}, {
  "name": "Purple Blue Yellow 5",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2B1E3E", "#3A4B66", "#5F8E86", "#8BB68D", "#D6DEBF"]
}, {
  "name": "Purple Blue Yellow 6",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2B1E3E", "#343D5E", "#4F777E", "#709E87", "#99BE95", "#D6DEBF"]
}, {
  "name": "Purple Blue Yellow 7",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2B1E3E", "#303558", "#466373", "#5F8E86", "#7BA889", "#A4C39B", "#D6DEBF"]
}, {
  "name": "Purple Blue Yellow",
  "type": "sequential",
  "category": "Uber",
  "colors": ["#2B1E3E", "#383C65", "#3E5F7E", "#49838A", "#5EA28D", "#82BB92", "#AECEA1", "#D6DEBF"]
}, {
  "name": "ColorBrewer YlGn-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcb9", "#addd8e", "#31a354"]
}, {
  "name": "ColorBrewer YlGn-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#c2e699", "#78c679", "#238443"]
}, {
  "name": "ColorBrewer YlGn-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"]
}, {
  "name": "ColorBrewer YlGn-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#31a354", "#006837"]
}, {
  "name": "ColorBrewer YlGn-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#005a32"]
}, {
  "name": "ColorBrewer YlGn-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#005a32"]
}, {
  "name": "ColorBrewer YlGn-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"]
}, {
  "name": "ColorBrewer YlGnBu-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8b1", "#7fcdbb", "#2c7fb8"]
}, {
  "name": "ColorBrewer YlGnBu-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#a1dab4", "#41b6c4", "#225ea8"]
}, {
  "name": "ColorBrewer YlGnBu-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"]
}, {
  "name": "ColorBrewer YlGnBu-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494"]
}, {
  "name": "ColorBrewer YlGnBu-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"]
}, {
  "name": "ColorBrewer YlGnBu-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"]
}, {
  "name": "ColorBrewer YlGnBu-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"]
}, {
  "name": "ColorBrewer GnBu-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#e0f3db", "#a8ddb5", "#43a2ca"]
}, {
  "name": "ColorBrewer GnBu-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f0f9e8", "#bae4bc", "#7bccc4", "#2b8cbe"]
}, {
  "name": "ColorBrewer GnBu-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"]
}, {
  "name": "ColorBrewer GnBu-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f0f9e8", "#ccebc5", "#a8ddb5", "#7bccc4", "#43a2ca", "#0868ac"]
}, {
  "name": "ColorBrewer GnBu-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f0f9e8", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#08589e"]
}, {
  "name": "ColorBrewer GnBu-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#08589e"]
}, {
  "name": "ColorBrewer GnBu-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"]
}, {
  "name": "ColorBrewer BuGn-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#e5f5f9", "#99d8c9", "#2ca25f"]
}, {
  "name": "ColorBrewer BuGn-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#b2e2e2", "#66c2a4", "#238b45"]
}, {
  "name": "ColorBrewer BuGn-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#b2e2e2", "#66c2a4", "#2ca25f", "#006d2c"]
}, {
  "name": "ColorBrewer BuGn-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#2ca25f", "#006d2c"]
}, {
  "name": "ColorBrewer BuGn-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"]
}, {
  "name": "ColorBrewer BuGn-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"]
}, {
  "name": "ColorBrewer BuGn-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"]
}, {
  "name": "ColorBrewer PuBuGn-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ece2f0", "#a6bddb", "#1c9099"]
}, {
  "name": "ColorBrewer PuBuGn-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f6eff7", "#bdc9e1", "#67a9cf", "#02818a"]
}, {
  "name": "ColorBrewer PuBuGn-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f6eff7", "#bdc9e1", "#67a9cf", "#1c9099", "#016c59"]
}, {
  "name": "ColorBrewer PuBuGn-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f6eff7", "#d0d1e6", "#a6bddb", "#67a9cf", "#1c9099", "#016c59"]
}, {
  "name": "ColorBrewer PuBuGn-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f6eff7", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016450"]
}, {
  "name": "ColorBrewer PuBuGn-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016450"]
}, {
  "name": "ColorBrewer PuBuGn-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"]
}, {
  "name": "ColorBrewer PuBu-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ece7f2", "#a6bddb", "#2b8cbe"]
}, {
  "name": "ColorBrewer PuBu-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#bdc9e1", "#74a9cf", "#0570b0"]
}, {
  "name": "ColorBrewer PuBu-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#bdc9e1", "#74a9cf", "#2b8cbe", "#045a8d"]
}, {
  "name": "ColorBrewer PuBu-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#d0d1e6", "#a6bddb", "#74a9cf", "#2b8cbe", "#045a8d"]
}, {
  "name": "ColorBrewer PuBu-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#034e7b"]
}, {
  "name": "ColorBrewer PuBu-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#034e7b"]
}, {
  "name": "ColorBrewer PuBu-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"]
}, {
  "name": "ColorBrewer BuPu-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#e0ecf4", "#9ebcda", "#8856a7"]
}, {
  "name": "ColorBrewer BuPu-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#b3cde3", "#8c96c6", "#88419d"]
}, {
  "name": "ColorBrewer BuPu-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#b3cde3", "#8c96c6", "#8856a7", "#810f7c"]
}, {
  "name": "ColorBrewer BuPu-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8856a7", "#810f7c"]
}, {
  "name": "ColorBrewer BuPu-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#6e016b"]
}, {
  "name": "ColorBrewer BuPu-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#6e016b"]
}, {
  "name": "ColorBrewer BuPu-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"]
}, {
  "name": "ColorBrewer RdPu-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fde0dd", "#fa9fb5", "#c51b8a"]
}, {
  "name": "ColorBrewer RdPu-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"]
}, {
  "name": "ColorBrewer RdPu-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#feebe2", "#fbb4b9", "#f768a1", "#c51b8a", "#7a0177"]
}, {
  "name": "ColorBrewer RdPu-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#c51b8a", "#7a0177"]
}, {
  "name": "ColorBrewer RdPu-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"]
}, {
  "name": "ColorBrewer RdPu-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"]
}, {
  "name": "ColorBrewer RdPu-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"]
}, {
  "name": "ColorBrewer PuRd-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#e7e1ef", "#c994c7", "#dd1c77"]
}, {
  "name": "ColorBrewer PuRd-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#d7b5d8", "#df65b0", "#ce1256"]
}, {
  "name": "ColorBrewer PuRd-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#d7b5d8", "#df65b0", "#dd1c77", "#980043"]
}, {
  "name": "ColorBrewer PuRd-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#dd1c77", "#980043"]
}, {
  "name": "ColorBrewer PuRd-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#91003f"]
}, {
  "name": "ColorBrewer PuRd-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#91003f"]
}, {
  "name": "ColorBrewer PuRd-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"]
}, {
  "name": "ColorBrewer OrRd-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fee8c8", "#fdbb84", "#e34a33"]
}, {
  "name": "ColorBrewer OrRd-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fef0d9", "#fdcc8a", "#fc8d59", "#d7301f"]
}, {
  "name": "ColorBrewer OrRd-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fef0d9", "#fdcc8a", "#fc8d59", "#e34a33", "#b30000"]
}, {
  "name": "ColorBrewer OrRd-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000"]
}, {
  "name": "ColorBrewer OrRd-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"]
}, {
  "name": "ColorBrewer OrRd-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"]
}, {
  "name": "ColorBrewer OrRd-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]
}, {
  "name": "ColorBrewer YlOrRd-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffeda0", "#feb24c", "#f03b20"]
}, {
  "name": "ColorBrewer YlOrRd-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffb2", "#fecc5c", "#fd8d3c", "#e31a1c"]
}, {
  "name": "ColorBrewer YlOrRd-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffb2", "#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"]
}, {
  "name": "ColorBrewer YlOrRd-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"]
}, {
  "name": "ColorBrewer YlOrRd-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"]
}, {
  "name": "ColorBrewer YlOrRd-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"]
}, {
  "name": "ColorBrewer YlOrRd-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]
}, {
  "name": "ColorBrewer YlOrBr-3",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#fff7bc", "#fec44f", "#d95f0e"]
}, {
  "name": "ColorBrewer YlOrBr-4",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffd4", "#fed98e", "#fe9929", "#cc4c02"]
}, {
  "name": "ColorBrewer YlOrBr-5",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffd4", "#fed98e", "#fe9929", "#d95f0e", "#993404"]
}, {
  "name": "ColorBrewer YlOrBr-6",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#d95f0e", "#993404"]
}, {
  "name": "ColorBrewer YlOrBr-7",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#8c2d04"]
}, {
  "name": "ColorBrewer YlOrBr-8",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#8c2d04"]
}, {
  "name": "ColorBrewer YlOrBr-9",
  "type": "sequential",
  "category": "ColorBrewer",
  "colors": ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"]
}, {
  "name": "ColorBrewer Purples-3",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#efedf5", "#bcbddc", "#756bb1"]
}, {
  "name": "ColorBrewer Purples-4",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#6a51a3"]
}, {
  "name": "ColorBrewer Purples-5",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f"]
}, {
  "name": "ColorBrewer Purples-6",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]
}, {
  "name": "ColorBrewer Purples-7",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#4a1486"]
}, {
  "name": "ColorBrewer Purples-8",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#4a1486"]
}, {
  "name": "ColorBrewer Purples-9",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"]
}, {
  "name": "ColorBrewer Blues-3",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#deebf7", "#9ecae1", "#3182bd"]
}, {
  "name": "ColorBrewer Blues-4",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#eff3ff", "#bdd7e7", "#6baed6", "#2171b5"]
}, {
  "name": "ColorBrewer Blues-5",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"]
}, {
  "name": "ColorBrewer Blues-6",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"]
}, {
  "name": "ColorBrewer Blues-7",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"]
}, {
  "name": "ColorBrewer Blues-8",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"]
}, {
  "name": "ColorBrewer Blues-9",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]
}, {
  "name": "ColorBrewer Greens-3",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#e5f5e0", "#a1d99b", "#31a354"]
}, {
  "name": "ColorBrewer Greens-4",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#edf8e9", "#bae4b3", "#74c476", "#238b45"]
}, {
  "name": "ColorBrewer Greens-5",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]
}, {
  "name": "ColorBrewer Greens-6",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#31a354", "#006d2c"]
}, {
  "name": "ColorBrewer Greens-7",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"]
}, {
  "name": "ColorBrewer Greens-8",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"]
}, {
  "name": "ColorBrewer Greens-9",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"]
}, {
  "name": "ColorBrewer Oranges-3",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fee6ce", "#fdae6b", "#e6550d"]
}, {
  "name": "ColorBrewer Oranges-4",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#feedde", "#fdbe85", "#fd8d3c", "#d94701"]
}, {
  "name": "ColorBrewer Oranges-5",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#feedde", "#fdbe85", "#fd8d3c", "#e6550d", "#a63603"]
}, {
  "name": "ColorBrewer Oranges-6",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c", "#e6550d", "#a63603"]
}, {
  "name": "ColorBrewer Oranges-7",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"]
}, {
  "name": "ColorBrewer Oranges-8",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"]
}, {
  "name": "ColorBrewer Oranges-9",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"]
}, {
  "name": "ColorBrewer Reds-3",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fee0d2", "#fc9272", "#de2d26"]
}, {
  "name": "ColorBrewer Reds-4",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fee5d9", "#fcae91", "#fb6a4a", "#cb181d"]
}, {
  "name": "ColorBrewer Reds-5",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]
}, {
  "name": "ColorBrewer Reds-6",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"]
}, {
  "name": "ColorBrewer Reds-7",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"]
}, {
  "name": "ColorBrewer Reds-8",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"]
}, {
  "name": "ColorBrewer Reds-9",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"]
}, {
  "name": "ColorBrewer Greys-3",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f0f0f0", "#bdbdbd", "#636363"]
}, {
  "name": "ColorBrewer Greys-4",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7f7f7", "#cccccc", "#969696", "#525252"]
}, {
  "name": "ColorBrewer Greys-5",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7f7f7", "#cccccc", "#969696", "#636363", "#252525"]
}, {
  "name": "ColorBrewer Greys-6",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7f7f7", "#d9d9d9", "#bdbdbd", "#969696", "#636363", "#252525"]
}, {
  "name": "ColorBrewer Greys-7",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#f7f7f7", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525"]
}, {
  "name": "ColorBrewer Greys-8",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525"]
}, {
  "name": "ColorBrewer Greys-9",
  "type": "singlehue",
  "category": "ColorBrewer",
  "colors": ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"]
}, {
  "name": "ColorBrewer PuOr-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#f1a340", "#f7f7f7", "#998ec3"]
}, {
  "name": "ColorBrewer PuOr-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#e66101", "#fdb863", "#b2abd2", "#5e3c99"]
}, {
  "name": "ColorBrewer PuOr-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#e66101", "#fdb863", "#f7f7f7", "#b2abd2", "#5e3c99"]
}, {
  "name": "ColorBrewer PuOr-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b35806", "#f1a340", "#fee0b6", "#d8daeb", "#998ec3", "#542788"]
}, {
  "name": "ColorBrewer PuOr-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b35806", "#f1a340", "#fee0b6", "#f7f7f7", "#d8daeb", "#998ec3", "#542788"]
}, {
  "name": "ColorBrewer PuOr-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b35806", "#e08214", "#fdb863", "#fee0b6", "#d8daeb", "#b2abd2", "#8073ac", "#542788"]
}, {
  "name": "ColorBrewer PuOr-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788"]
}, {
  "name": "ColorBrewer PuOr-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"]
}, {
  "name": "ColorBrewer PuOr-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"]
}, {
  "name": "ColorBrewer BrBG-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d8b365", "#f5f5f5", "#5ab4ac"]
}, {
  "name": "ColorBrewer BrBG-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#a6611a", "#dfc27d", "#80cdc1", "#018571"]
}, {
  "name": "ColorBrewer BrBG-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571"]
}, {
  "name": "ColorBrewer BrBG-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#8c510a", "#d8b365", "#f6e8c3", "#c7eae5", "#5ab4ac", "#01665e"]
}, {
  "name": "ColorBrewer BrBG-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#8c510a", "#d8b365", "#f6e8c3", "#f5f5f5", "#c7eae5", "#5ab4ac", "#01665e"]
}, {
  "name": "ColorBrewer BrBG-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#c7eae5", "#80cdc1", "#35978f", "#01665e"]
}, {
  "name": "ColorBrewer BrBG-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e"]
}, {
  "name": "ColorBrewer BrBG-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"]
}, {
  "name": "ColorBrewer BrBG-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"]
}, {
  "name": "ColorBrewer PRGn-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#af8dc3", "#f7f7f7", "#7fbf7b"]
}, {
  "name": "ColorBrewer PRGn-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#7b3294", "#c2a5cf", "#a6dba0", "#008837"]
}, {
  "name": "ColorBrewer PRGn-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#7b3294", "#c2a5cf", "#f7f7f7", "#a6dba0", "#008837"]
}, {
  "name": "ColorBrewer PRGn-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#762a83", "#af8dc3", "#e7d4e8", "#d9f0d3", "#7fbf7b", "#1b7837"]
}, {
  "name": "ColorBrewer PRGn-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#762a83", "#af8dc3", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#7fbf7b", "#1b7837"]
}, {
  "name": "ColorBrewer PRGn-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837"]
}, {
  "name": "ColorBrewer PRGn-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837"]
}, {
  "name": "ColorBrewer PRGn-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]
}, {
  "name": "ColorBrewer PRGn-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]
}, {
  "name": "ColorBrewer PiYG-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#e9a3c9", "#f7f7f7", "#a1d76a"]
}, {
  "name": "ColorBrewer PiYG-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d01c8b", "#f1b6da", "#b8e186", "#4dac26"]
}, {
  "name": "ColorBrewer PiYG-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d01c8b", "#f1b6da", "#f7f7f7", "#b8e186", "#4dac26"]
}, {
  "name": "ColorBrewer PiYG-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#c51b7d", "#e9a3c9", "#fde0ef", "#e6f5d0", "#a1d76a", "#4d9221"]
}, {
  "name": "ColorBrewer PiYG-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#c51b7d", "#e9a3c9", "#fde0ef", "#f7f7f7", "#e6f5d0", "#a1d76a", "#4d9221"]
}, {
  "name": "ColorBrewer PiYG-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"]
}, {
  "name": "ColorBrewer PiYG-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"]
}, {
  "name": "ColorBrewer PiYG-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]
}, {
  "name": "ColorBrewer PiYG-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]
}, {
  "name": "ColorBrewer RdBu-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#ef8a62", "#f7f7f7", "#67a9cf"]
}, {
  "name": "ColorBrewer RdBu-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#ca0020", "#f4a582", "#92c5de", "#0571b0"]
}, {
  "name": "ColorBrewer RdBu-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"]
}, {
  "name": "ColorBrewer RdBu-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#ef8a62", "#fddbc7", "#d1e5f0", "#67a9cf", "#2166ac"]
}, {
  "name": "ColorBrewer RdBu-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#ef8a62", "#fddbc7", "#f7f7f7", "#d1e5f0", "#67a9cf", "#2166ac"]
}, {
  "name": "ColorBrewer RdBu-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac"]
}, {
  "name": "ColorBrewer RdBu-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac"]
}, {
  "name": "ColorBrewer RdBu-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"]
}, {
  "name": "ColorBrewer RdBu-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"]
}, {
  "name": "ColorBrewer RdGy-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#ef8a62", "#ffffff", "#999999"]
}, {
  "name": "ColorBrewer RdGy-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#ca0020", "#f4a582", "#bababa", "#404040"]
}, {
  "name": "ColorBrewer RdGy-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#ca0020", "#f4a582", "#ffffff", "#bababa", "#404040"]
}, {
  "name": "ColorBrewer RdGy-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#ef8a62", "#fddbc7", "#e0e0e0", "#999999", "#4d4d4d"]
}, {
  "name": "ColorBrewer RdGy-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#ef8a62", "#fddbc7", "#ffffff", "#e0e0e0", "#999999", "#4d4d4d"]
}, {
  "name": "ColorBrewer RdGy-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#e0e0e0", "#bababa", "#878787", "#4d4d4d"]
}, {
  "name": "ColorBrewer RdGy-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d"]
}, {
  "name": "ColorBrewer RdGy-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"]
}, {
  "name": "ColorBrewer RdGy-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"]
}, {
  "name": "ColorBrewer RdYlBu-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#fc8d59", "#ffffbf", "#91bfdb"]
}, {
  "name": "ColorBrewer RdYlBu-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d7191c", "#fdae61", "#abd9e9", "#2c7bb6"]
}, {
  "name": "ColorBrewer RdYlBu-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"]
}, {
  "name": "ColorBrewer RdYlBu-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"]
}, {
  "name": "ColorBrewer RdYlBu-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#fc8d59", "#fee090", "#ffffbf", "#e0f3f8", "#91bfdb", "#4575b4"]
}, {
  "name": "ColorBrewer RdYlBu-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"]
}, {
  "name": "ColorBrewer RdYlBu-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"]
}, {
  "name": "ColorBrewer RdYlBu-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]
}, {
  "name": "ColorBrewer RdYlBu-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]
}, {
  "name": "ColorBrewer Spectral-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#fc8d59", "#ffffbf", "#99d594"]
}, {
  "name": "ColorBrewer Spectral-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d7191c", "#fdae61", "#abdda4", "#2b83ba"]
}, {
  "name": "ColorBrewer Spectral-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d7191c", "#fdae61", "#ffffbf", "#abdda4", "#2b83ba"]
}, {
  "name": "ColorBrewer Spectral-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d53e4f", "#fc8d59", "#fee08b", "#e6f598", "#99d594", "#3288bd"]
}, {
  "name": "ColorBrewer Spectral-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d53e4f", "#fc8d59", "#fee08b", "#ffffbf", "#e6f598", "#99d594", "#3288bd"]
}, {
  "name": "ColorBrewer Spectral-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"]
}, {
  "name": "ColorBrewer Spectral-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"]
}, {
  "name": "ColorBrewer Spectral-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
}, {
  "name": "ColorBrewer Spectral-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
}, {
  "name": "ColorBrewer RdYlGn-3",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#fc8d59", "#ffffbf", "#91cf60"]
}, {
  "name": "ColorBrewer RdYlGn-4",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d7191c", "#fdae61", "#a6d96a", "#1a9641"]
}, {
  "name": "ColorBrewer RdYlGn-5",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d7191c", "#fdae61", "#ffffbf", "#a6d96a", "#1a9641"]
}, {
  "name": "ColorBrewer RdYlGn-6",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#fc8d59", "#fee08b", "#d9ef8b", "#91cf60", "#1a9850"]
}, {
  "name": "ColorBrewer RdYlGn-7",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#fc8d59", "#fee08b", "#ffffbf", "#d9ef8b", "#91cf60", "#1a9850"]
}, {
  "name": "ColorBrewer RdYlGn-8",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"]
}, {
  "name": "ColorBrewer RdYlGn-9",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"]
}, {
  "name": "ColorBrewer RdYlGn-10",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
}, {
  "name": "ColorBrewer RdYlGn-11",
  "type": "diverging",
  "category": "ColorBrewer",
  "colors": ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
}, {
  "name": "ColorBrewer Accent-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#7fc97f", "#beaed4", "#fdc086"]
}, {
  "name": "ColorBrewer Accent-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#7fc97f", "#beaed4", "#fdc086", "#ffff99"]
}, {
  "name": "ColorBrewer Accent-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"]
}, {
  "name": "ColorBrewer Accent-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f"]
}, {
  "name": "ColorBrewer Accent-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17"]
}, {
  "name": "ColorBrewer Accent-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"]
}, {
  "name": "ColorBrewer Dark2-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#1b9e77", "#d95f02", "#7570b3"]
}, {
  "name": "ColorBrewer Dark2-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a"]
}, {
  "name": "ColorBrewer Dark2-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e"]
}, {
  "name": "ColorBrewer Dark2-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"]
}, {
  "name": "ColorBrewer Dark2-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"]
}, {
  "name": "ColorBrewer Dark2-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
}, {
  "name": "ColorBrewer Paired-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a"]
}, {
  "name": "ColorBrewer Paired-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c"]
}, {
  "name": "ColorBrewer Paired-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99"]
}, {
  "name": "ColorBrewer Paired-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c"]
}, {
  "name": "ColorBrewer Paired-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f"]
}, {
  "name": "ColorBrewer Paired-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00"]
}, {
  "name": "ColorBrewer Paired-9",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6"]
}, {
  "name": "ColorBrewer Paired-10",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a"]
}, {
  "name": "ColorBrewer Paired-11",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99"]
}, {
  "name": "ColorBrewer Paired-12",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]
}, {
  "name": "ColorBrewer Pastel1-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5"]
}, {
  "name": "ColorBrewer Pastel1-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4"]
}, {
  "name": "ColorBrewer Pastel1-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6"]
}, {
  "name": "ColorBrewer Pastel1-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc"]
}, {
  "name": "ColorBrewer Pastel1-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd"]
}, {
  "name": "ColorBrewer Pastel1-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec"]
}, {
  "name": "ColorBrewer Pastel1-9",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
}, {
  "name": "ColorBrewer Pastel2-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#b3e2cd", "#fdcdac", "#cbd5e8"]
}, {
  "name": "ColorBrewer Pastel2-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4"]
}, {
  "name": "ColorBrewer Pastel2-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9"]
}, {
  "name": "ColorBrewer Pastel2-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae"]
}, {
  "name": "ColorBrewer Pastel2-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc"]
}, {
  "name": "ColorBrewer Pastel2-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"]
}, {
  "name": "ColorBrewer Set1-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a"]
}, {
  "name": "ColorBrewer Set1-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"]
}, {
  "name": "ColorBrewer Set1-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]
}, {
  "name": "ColorBrewer Set1-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"]
}, {
  "name": "ColorBrewer Set1-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628"]
}, {
  "name": "ColorBrewer Set1-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf"]
}, {
  "name": "ColorBrewer Set1-9",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"]
}, {
  "name": "ColorBrewer Set2-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#66c2a5", "#fc8d62", "#8da0cb"]
}, {
  "name": "ColorBrewer Set2-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3"]
}, {
  "name": "ColorBrewer Set2-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"]
}, {
  "name": "ColorBrewer Set2-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f"]
}, {
  "name": "ColorBrewer Set2-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"]
}, {
  "name": "ColorBrewer Set2-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]
}, {
  "name": "ColorBrewer Set3-3",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada"]
}, {
  "name": "ColorBrewer Set3-4",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072"]
}, {
  "name": "ColorBrewer Set3-5",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3"]
}, {
  "name": "ColorBrewer Set3-6",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462"]
}, {
  "name": "ColorBrewer Set3-7",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69"]
}, {
  "name": "ColorBrewer Set3-8",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5"]
}, {
  "name": "ColorBrewer Set3-9",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9"]
}, {
  "name": "ColorBrewer Set3-10",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd"]
}, {
  "name": "ColorBrewer Set3-11",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5"]
}, {
  "name": "ColorBrewer Set3-12",
  "type": "qualitative",
  "category": "ColorBrewer",
  "colors": ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"]
}];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5bda2051-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CusSelect.vue?vue&type=template&id=66d81634&scoped=true&
var CusSelectvue_type_template_id_66d81634_scoped_true_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(function (){this$1.show=false}),expression:"()=>{this.show=false}"}],staticClass:"dropdown-select"},[_c('div',{staticClass:"dropdown-input",on:{"click":_vm.showPanel}},[_c('span',{staticClass:"dropdown-label"},[_vm._v(_vm._s(_vm.cl))])]),(_vm.show)?_c('div',{staticClass:"dropdown-panel"},[_c('div',{staticClass:"item-selector"},_vm._l((_vm.types),function(t){return _c('div',{key:t,staticClass:"list_item",on:{"click":function($event){return _vm.chooseType(t)}}},[_c('span',{staticClass:"dropdown-label"},[_vm._v(_vm._s(t))])])}),0)]):_vm._e()])}
var CusSelectvue_type_template_id_66d81634_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CusSelect.vue?vue&type=template&id=66d81634&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./src/components/domUtil.js


var nodeList = [];
var ctx = '@@clickoutsideContext';
var startClick;
var seed = 0;

var on = function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

on(document, 'mousedown', function (e) {
  return startClick = e;
});
on(document, 'mouseup', function (e) {
  nodeList.forEach(function (node) {
    return node[ctx].documentHandler(e, startClick);
  });
});

function createDocumentHandler(el, binding, vnode) {
  return function () {
    var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */


var Clickoutside = {
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }

    delete el[ctx];
  }
};
var isDragging = false;
function draggable(element, options) {
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(event);
    }
  };

  var upFn = function upFn(event) {
    document.removeEventListener('mousemove', moveFn);
    document.removeEventListener('mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };

  element.addEventListener('mousedown', function (event) {
    if (isDragging) return;

    document.onselectstart = function () {
      return false;
    };

    document.ondragstart = function () {
      return false;
    };

    document.addEventListener('mousemove', moveFn);
    document.addEventListener('mouseup', upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CusSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CusSelectvue_type_script_lang_js_ = ({
  directives: {
    Clickoutside: Clickoutside
  },
  name: "CusSelect",
  props: ['types', 'clazz'],
  data: function data() {
    return {
      cl: this.clazz,
      show: false
    };
  },
  methods: {
    chooseType: function chooseType(t) {
      this.cl = t;
      this.$emit('change', this.cl);
      this.show = false;
    },
    showPanel: function showPanel() {
      this.show = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/CusSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CusSelectvue_type_script_lang_js_ = (CusSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CusSelect.vue?vue&type=style&index=0&id=66d81634&lang=scss&scoped=true&
var CusSelectvue_type_style_index_0_id_66d81634_lang_scss_scoped_true_ = __webpack_require__("661a");

// CONCATENATED MODULE: ./src/components/CusSelect.vue






/* normalize component */

var CusSelect_component = normalizeComponent(
  components_CusSelectvue_type_script_lang_js_,
  CusSelectvue_type_template_id_66d81634_scoped_true_render,
  CusSelectvue_type_template_id_66d81634_scoped_true_staticRenderFns,
  false,
  null,
  "66d81634",
  null
  
)

/* harmony default export */ var CusSelect = (CusSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5bda2051-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/paletteEdit.vue?vue&type=template&id=5b525de1&scoped=true&
var paletteEditvue_type_template_id_5b525de1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showPicker)?_c('color-picker',{ref:"picker",attrs:{"color":_vm.curColor},on:{"change":_vm.changeColor}}):_vm._e(),_c('draggable',{attrs:{"tag":"div","handle":".drag"},model:{value:(_vm.editColors),callback:function ($$v) {_vm.editColors=$$v},expression:"editColors"}},_vm._l((_vm.editColors),function(c){return _c('div',{key:c.id,staticClass:"palette-item"},[_c('svg',{staticClass:"anchor drag",staticStyle:{"fill":"#fff"},attrs:{"viewBox":"0 0 64 64","width":"20px","height":"20px"}},[_c('rect',{attrs:{"x":"35.01","y":"48.31","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"35.01","y":"35.43","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"35.01","y":"22.55","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"35.01","y":"9.67","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"22.13","y":"48.31","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"22.13","y":"35.43","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"22.13","y":"22.55","width":"6.44","height":"6.44"}}),_c('rect',{attrs:{"x":"22.13","y":"9.67","width":"6.44","height":"6.44"}})]),_c('div',{staticClass:"color-bg"},[_c('div',{staticClass:"color-block",style:('background-color:'+c.color+';opacity:'+c.alpha),on:{"click":function($event){return _vm.showPickerPanel(c)}}})]),_c('div',{staticClass:"color-edit"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(c.color),expression:"c.color"}],staticClass:"color-input",attrs:{"spellcheck":"false","type":"text","id":"input-layer-label"},domProps:{"value":(c.color)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(c, "color", $event.target.value)}}})]),_c('svg',{staticClass:"delBtn",staticStyle:{"fill":"#ccc"},attrs:{"viewBox":"0 0 64 64","width":"16px","height":"16px"},on:{"click":function($event){return _vm.delColor(c)}}},[_c('path',{attrs:{"d":"M51.4,13.9v1.6c0,0.9-0.7,1.6-1.6,1.6H13.6c-0.9,0-1.6-0.7-1.6-1.6v-1.6c0-0.9,0.7-1.6,1.6-1.6h9\n                   c0.9,0,1.6-0.7,1.6-1.6C24.3,9.7,25.1,9,26,9h11.5c0.9,0,1.6,0.7,1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h9C50.7,12.3,51.4,13,51.4,13.9z"}}),_c('path',{attrs:{"d":"M40.8,50.1l0.8-25.4h-3.3l-0.8,25.4H40.8z M30.1,50.1h3.3V24.7h-3.3V50.1z M26,50.1l-0.8-25.4h-3.3l0.8,25.4H26\nz M44.9,55H18.5c-0.9,0-1.6-0.7-1.6-1.6l-1.5-31.2c0-0.9,0.7-1.7,1.6-1.7h29.4c0.9,0,1.7,0.8,1.6,1.7l-1.5,31.2C46.5,54.3,45.8,55,44.9,55z"}})])])}),0),_c('div',{staticClass:"button",on:{"click":_vm.addColor}},[_vm._v("+ Add Step")]),_c('div',{staticClass:"line-split"}),_c('div',{staticClass:"edit-footer"},[_c('div',{staticClass:"button confirm",on:{"click":_vm.confirm}},[_vm._v("Confirm")]),_c('div',{staticClass:"button cancel",on:{"click":_vm.cancel}},[_vm._v("Cancel")])])],1)}
var paletteEditvue_type_template_id_5b525de1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/paletteEdit.vue?vue&type=template&id=5b525de1&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.umd.js
var vuedraggable_umd = __webpack_require__("b76a");
var vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5bda2051-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorPicker.vue?vue&type=template&id=3ffa2358&scoped=true&
var ColorPickervue_type_template_id_3ffa2358_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"colorPicker",staticClass:"color-picker"},[_c('div',{staticClass:"color-picker-up"},[_c('div',{ref:"panelBg",staticClass:"color-panel",style:({background:_vm.background}),on:{"click":_vm.bgClick}},[_c('div',{staticClass:"panel-bg-white"}),_c('div',{staticClass:"panel-bg-black"}),_c('div',{ref:"panelTh",staticClass:"panel-thumb",style:(_vm.thumbPosition)})]),_c('div',{staticClass:"color-sidebar"},[_c('div',{ref:"sideBarBg",staticClass:"side-bar-bg",on:{"mousedown":_vm.barSideClick}}),_c('div',{ref:"sideBarTh",staticClass:"side-bar-thumb",style:(_vm.stackPosition)})])]),_c('div',{staticClass:"color-opacity"},[_c('div',{ref:"opacityBar",staticClass:"color-opacity-bar",style:(_vm.backgroundOpacity),on:{"mousedown":_vm.barOpClick}}),_c('div',{ref:"opacityBarTh",staticClass:"color-opacity-thumb",style:(_vm.opPosition)})]),_c('div',{staticClass:"flexbox-fix",staticStyle:{"display":"flex","padding-top":"4px"}},[_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.colorToHex),expression:"colorToHex"}],staticStyle:{"max-width":"50px"},attrs:{"spellcheck":"false"},domProps:{"value":(_vm.colorToHex)},on:{"input":function($event){if($event.target.composing){ return; }_vm.colorToHex=$event.target.value}}}),_c('span',[_vm._v("hex")])]),_c('div',[_c('input',{attrs:{"spellcheck":"false","type":"number"},domProps:{"value":this.showColor.r},on:{"change":function($event){return _vm.changeInput($event,'r')}}}),_c('span',[_vm._v("r")])]),_c('div',[_c('input',{attrs:{"spellcheck":"false","type":"number"},domProps:{"value":this.showColor.g},on:{"change":function($event){return _vm.changeInput($event,'g')}}}),_c('span',[_vm._v("g")])]),_c('div',[_c('input',{attrs:{"spellcheck":"false","type":"number"},domProps:{"value":this.showColor.b},on:{"change":function($event){return _vm.changeInput($event,'b')}}}),_c('span',[_vm._v("b")])]),_c('div',[_c('input',{staticStyle:{"max-width":"15px"},attrs:{"spellcheck":"false","type":"number"},domProps:{"value":this.showColor.a},on:{"change":function($event){return _vm.changeInput($event,'a')}}}),_c('span',[_vm._v("a")])])]),_c('div',{staticStyle:{"display":"flex","justify-content":"flex-end","align-items":"center"}},[_c('div',{staticClass:"color-confirm",on:{"click":_vm.emitVal}},[_vm._v("save")])])])}
var ColorPickervue_type_template_id_3ffa2358_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ColorPicker.vue?vue&type=template&id=3ffa2358&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./src/components/utils.js







function guid() {
  /**
   * @return {string}
   */
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}
function rgb2cmyk(r, g, b) {
  var computedC = 0;
  var computedM = 0;
  var computedY = 0;
  var computedK = 0; // BLACK

  if (r == 0 && g == 0 && b == 0) {
    computedK = 1;
    return [0, 0, 0, 100];
  }

  computedC = 1 - r / 255;
  computedM = 1 - g / 255;
  computedY = 1 - b / 255;
  var minCMY = Math.min(computedC, Math.min(computedM, computedY));
  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  computedK = minCMY;
  return [Math.round(computedC * 100), Math.round(computedM * 100), Math.round(computedY * 100), Math.round(computedK * 100)];
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1).toUpperCase();
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgbaToArr(rgba) {
  if (typeof rgba === 'string') {
    rgba = rgba.replace(/\s+/g, "");
    rgba = (/rgba?\((.*?)\)/.exec(rgba) || ['', '0,0,0,1'])[1].split(',');
    return {
      r: Number(rgba[0]) || 0,
      g: Number(rgba[1]) || 0,
      b: Number(rgba[2]) || 0,
      a: Number(rgba[3] ? rgba[3] : 1) // 避免为0的情况

    };
  } else {
    return rgba;
  }
}
function rgbToArr(rgb) {
  if (typeof rgb === 'string') {
    rgb = rgb.replace(/\s+/g, "");
    rgb = (/rgb?\((.*?)\)/.exec(rgb) || ['', '0,0,0'])[1].split(',');
    return {
      r: Number(rgb[0]) || 0,
      g: Number(rgb[1]) || 0,
      b: Number(rgb[2]) || 0
    };
  } else {
    return rgb;
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorPicker.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ColorPickervue_type_script_lang_js_ = ({
  name: "ColorPicker",
  props: ['color'],
  data: function data() {
    return {
      show: true,
      stackPosition: {
        top: "0px"
      },
      opBar: {},
      sideBar: {},
      opPosition: {
        left: "0px"
      },
      thumbPosition: {
        left: "0px",
        top: '0px'
      },
      bgColor: {
        r: null,
        g: null,
        b: null
      },
      showColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }
    };
  },
  watch: {
    color: {
      handler: function handler(val) {
        if (val) {
          Object.assign(this.showColor, val);
        } else {
          Object.assign(this.showColor, {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          });
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.color) {
        Object.assign(_this.showColor, _this.color);
      }

      _this.calcInfo();

      if (_this.showColor) {
        _this.calcBg();
      }

      var dragSideConfig = {
        drag: function drag(event) {
          _this.handleSideDrag(event);
        },
        end: function end(event) {
          _this.handleSideDrag(event);
        }
      };
      var dragOpConfig = {
        drag: function drag(event) {
          _this.handleOpDrag(event);
        },
        end: function end(event) {
          _this.handleOpDrag(event);
        }
      };
      var dragPanelConfig = {
        drag: function drag(event) {
          _this.handlePanelDrag(event);
        },
        end: function end(event) {
          _this.handlePanelDrag(event);
        }
      };
      draggable(_this.$refs.sideBarTh, dragSideConfig);
      draggable(_this.$refs.opacityBarTh, dragOpConfig);
      draggable(_this.$refs.panelTh, dragPanelConfig);
    });
  },
  computed: {
    background: function background() {
      var _this$bgColor = this.bgColor,
          r = _this$bgColor.r,
          g = _this$bgColor.g,
          b = _this$bgColor.b;
      return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    },
    backgroundOpacity: function backgroundOpacity() {
      var _this$showColor = this.showColor,
          r = _this$showColor.r,
          g = _this$showColor.g,
          b = _this$showColor.b;
      var start = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",0)");
      var end = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",1)");
      return {
        background: "linear-gradient(to right, ".concat(start, " 0%, ").concat(end, " 100%)")
      };
    },
    colorToHex: {
      get: function get() {
        var _this$showColor2 = this.showColor,
            r = _this$showColor2.r,
            g = _this$showColor2.g,
            b = _this$showColor2.b;
        return rgbToHex(r, g, b);
      },
      set: function set(v) {
        var s = hexToRgb(v);
        Object.assign(this.showColor, s);
        this.calcBg();
      }
    }
  },
  methods: {
    emitVal: function emitVal() {
      this.$emit('change', this.showColor);
    },
    changeInput: function changeInput($event, key) {
      this.$set(this.showColor, key, $event.target.valueAsNumber);
      this.calcBg();
    },
    calcInfo: function calcInfo() {
      var _this$$refs$opacityBa = this.$refs.opacityBar.getBoundingClientRect(),
          l = _this$$refs$opacityBa.left,
          w = _this$$refs$opacityBa.width;

      var _this$$refs$sideBarBg = this.$refs.sideBarBg.getBoundingClientRect(),
          t = _this$$refs$sideBarBg.top,
          h = _this$$refs$sideBarBg.height;

      var _this$$refs$panelBg$g = this.$refs.panelBg.getBoundingClientRect(),
          left = _this$$refs$panelBg$g.left,
          top = _this$$refs$panelBg$g.top,
          width = _this$$refs$panelBg$g.width,
          height = _this$$refs$panelBg$g.height;

      this.opBar = {
        l: l,
        w: w,
        el: this.$refs.opacityBar
      };
      this.sideBar = {
        t: t,
        h: h,
        el: this.$refs.sideBarBg
      };
      this.panel = {
        t: top,
        h: height,
        l: left,
        w: width,
        el: this.$refs.panelBg
      };
    },
    calcBg: function calcBg() {
      var _this2 = this;

      var _this$showColor3 = this.showColor,
          r = _this$showColor3.r,
          g = _this$showColor3.g,
          b = _this$showColor3.b;
      var newColor = [{
        name: "r",
        value: r
      }, {
        name: "g",
        value: g
      }, {
        name: "b",
        value: b
      }];
      newColor.sort(function (a, b) {
        return b.value - a.value;
      });
      var max = newColor[0].value;
      var mid = newColor[1].value;
      var min = newColor[2].value; // 计算点像右延长至边界的点的色标

      newColor[1].value = (min - mid) * max / (min - max);
      newColor[2].value = 0;
      newColor[0].value = 255;
      newColor[1].value = parseInt(255 * newColor[1].value / max);
      newColor.forEach(function (e) {
        _this2.bgColor[e.name] = e.value;
      });
      this.calcPosition();
    },
    calcPosition: function calcPosition() {
      this.opPosition.left = this.opBar.w * this.showColor.a + "px";
      var _this$bgColor2 = this.bgColor,
          r = _this$bgColor2.r,
          g = _this$bgColor2.g,
          b = _this$bgColor2.b;
      var height = this.sideBar.h;
      var top = 0;
      var total = height / 6;
      if (r === 255 && b === 0) top = g / 255 * total;
      if (g === 255 && b === 0) top = (r / 255 + 1) * total;
      if (g === 255 && r === 0) top = (b / 255 + 2) * total;
      if (b === 255 && r === 0) top = (g / 255 + 3) * total;
      if (b === 255 && g === 0) top = (r / 255 + 4) * total;
      if (r === 255 && g === 0) top = (b / 255 + 5) * total;
      this.stackPosition.top = top + "px";
      var max = Math.max(this.showColor.r, this.showColor.g, this.showColor.b);
      var min = Math.min(this.showColor.r, this.showColor.g, this.showColor.b);
      if (max === 0) max = 1;
      var x = min / max * this.panel.w;
      var y = this.panel.h - max / 255 * this.panel.h;
      this.thumbPosition.left = this.panel.w - x + "px";
      this.thumbPosition.top = y + "px";
    },
    barOpClick: function barOpClick($event) {
      this.opPosition.left = $event.offsetX + "px";
      this.showColor.a = Number(($event.offsetX / this.opBar.w).toFixed(2));
      this.handleOpDrag($event);
    },
    handleOpDrag: function handleOpDrag(r) {
      var thumbLeft = r.pageX - this.opBar.l;

      if (thumbLeft >= this.opBar.w) {
        thumbLeft = this.opBar.w;
        this.showColor.a = 1;
      } else if (thumbLeft <= 0) {
        thumbLeft = 0;
        this.showColor.a = 0;
      } else {
        this.showColor.a = Number((thumbLeft / this.opBar.w).toFixed(2));
      }

      this.opPosition.left = thumbLeft + "px";
    },
    barSideClick: function barSideClick($event) {
      var height = this.sideBar.h;
      var top = $event.offsetY;
      this.changeBgBySide(top, height); // 点击背景后，滑块移动到指针处，在未松开鼠标时依然可拖动

      this.handleSideDrag($event);
    },
    changeShowColor: function changeShowColor() {
      var _this$panel = this.panel,
          w = _this$panel.w,
          h = _this$panel.h;
      var _this$thumbPosition = this.thumbPosition,
          left = _this$thumbPosition.left,
          top = _this$thumbPosition.top;
      left = parseInt(left.substr(0, left.length - 2));
      top = parseInt(top.substr(0, top.length - 2));
      var x = w - left;
      var y = top;
      this.calcWidthColor(x, y, w, h);
    },
    handleSideDrag: function handleSideDrag(r) {
      var top = r.pageY - this.sideBar.t;
      if (top >= this.sideBar.h) top = this.sideBar.h;
      if (top <= 0) top = 0;
      this.changeBgBySide(top, this.sideBar.h);
      this.changeShowColor();
    },
    bgClick: function bgClick($event) {
      // 防止滑块触发背景点击事件
      if ($event.target.className === "panel-thumb") return;
      var offsetX = $event.offsetX,
          offsetY = $event.offsetY;
      var w = this.panel.w; // 基于点击的位置给滑块定位

      this.thumbPosition = {
        left: offsetX + "px",
        top: offsetY + "px"
      }; // 因为是基于右上角给推断颜色，所以将颜色的原点设在右上角
      // 所以此处x需要用宽度减去滑块的left

      var x = w - offsetX;
      var y = offsetY;
      this.calcWidthColor(x, y); // 点击背景后，滑块移动到指针处，在未松开鼠标时依然可拖动

      this.handlePanelDrag($event);
    },
    handlePanelDrag: function handlePanelDrag(res) {
      var pageX = res.pageX,
          pageY = res.pageY;
      var left = pageX - this.panel.l;
      var top = pageY - this.panel.t;
      if (left <= 0) left = 0;
      if (left >= this.panel.w) left = this.panel.w;
      if (top <= 0) top = 0;
      if (top >= this.panel.h) top = this.panel.h;
      this.thumbPosition = {
        left: left + "px",
        top: top + "px"
      };
      var x = this.panel.w - left;
      var y = top;
      this.calcWidthColor(x, y);
    },
    getValue: function getValue(top, total, index) {
      return parseInt((top - total * index) / total * 255);
    },
    setColor: function setColor(r, g, b) {
      this.bgColor.r = r;
      this.bgColor.g = g;
      this.bgColor.b = b;
    },
    changeBgBySide: function changeBgBySide(top, h) {
      // 修改前先将滑块的位置改变
      this.stackPosition.top = top + "px"; // 侧栏一共分为六个区域，每块区域的长度

      var total = h / 6;

      if (top <= h * 1 / 6) {
        var g = this.getValue(top, total, 0);
        this.setColor(255, g, 0);
      } else if (top <= h * 2 / 6) {
        var r = this.getValue(top, total, 1);
        this.setColor(255 - r, 255, 0);
      } else if (top <= h * 3 / 6) {
        var b = this.getValue(top, total, 2);
        this.setColor(0, 255, b);
      } else if (top <= h * 4 / 6) {
        var _g = this.getValue(top, total, 3);

        this.setColor(0, 255 - _g, 255);
      } else if (top < h * 5 / 6) {
        var _r = this.getValue(top, total, 4);

        this.setColor(_r, 0, 255);
      } else if (top <= h * 6 / 6) {
        var _b = this.getValue(top, total, 5);

        this.setColor(255, 0, 255 - _b);
      }
    },
    calcWidthColor: function calcWidthColor(x, y) {
      var _this$panel2 = this.panel,
          w = _this$panel2.w,
          h = _this$panel2.h;
      var newColor = JSON.parse(JSON.stringify(this.bgColor));
      delete newColor.a;

      for (var key in newColor) {
        // hue => 色相、三原色
        var hue = newColor[key];
        newColor[key] = ((255 - hue) * x + hue * w) / w;
      }

      this.calcHeightColor(x, y, w, h, newColor);
    },
    // 通过右边界交点计算原点的坐标
    calcHeightColor: function calcHeightColor(x, y, w, h, color) {
      for (var key in color) {
        // hue => 色相、三原色
        var hue = color[key];
        this.showColor[key] = parseInt((h - y) * hue / h);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/ColorPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ColorPickervue_type_script_lang_js_ = (ColorPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ColorPicker.vue?vue&type=style&index=0&id=3ffa2358&lang=scss&scoped=true&
var ColorPickervue_type_style_index_0_id_3ffa2358_lang_scss_scoped_true_ = __webpack_require__("c327");

// CONCATENATED MODULE: ./src/components/ColorPicker.vue






/* normalize component */

var ColorPicker_component = normalizeComponent(
  components_ColorPickervue_type_script_lang_js_,
  ColorPickervue_type_template_id_3ffa2358_scoped_true_render,
  ColorPickervue_type_template_id_3ffa2358_scoped_true_staticRenderFns,
  false,
  null,
  "3ffa2358",
  null
  
)

/* harmony default export */ var ColorPicker = (ColorPicker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/paletteEdit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var paletteEditvue_type_script_lang_js_ = ({
  name: "paletteEdit",
  props: ['palette'],
  components: {
    draggable: vuedraggable_umd_default.a,
    colorPicker: ColorPicker
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.palette && _this.palette.colors.length > 0) {
        _this.init();
      }
    });
  },
  data: function data() {
    return {
      editColors: [],
      showPicker: false,
      curColor: ''
    };
  },
  watch: {
    colors: {
      handler: function handler(cSet) {
        if (cSet && cSet.colors.length > 0) {
          this.init();
        }
      }
    }
  },
  methods: {
    init: function init() {
      for (var i = 0; i < this.palette.colors.length; i++) {
        this.editColors.push({
          id: guid(),
          color: this.palette.colors[i],
          alpha: this.palette.alphas[i]
        });
      }
    },
    addColor: function addColor() {
      this.showPicker = false;
      this.curColor = null;

      if (this.editColors.length === 0) {
        this.editColors.push({
          id: guid(),
          color: '#FFFFFF',
          alpha: 1
        });
        return;
      }

      var newColor = JSON.parse(JSON.stringify(this.editColors[this.editColors.length - 1]));
      newColor.id = guid();
      this.editColors.push(newColor);
    },
    delColor: function delColor(color) {
      this.showPicker = false;
      this.curColor = null;

      for (var i = 0; i < this.editColors.length; i++) {
        if (this.editColors[i].id === color.id) {
          this.editColors.splice(i, 1);
        }
      }
    },
    confirm: function confirm() {
      var palettes = {
        "name": this.palette.name,
        "type": this.palette.type,
        "category": this.palette.category,
        colors: [],
        alphas: []
      };

      for (var i = 0; i < this.editColors.length; i++) {
        palettes.colors.push(this.editColors[i].color);
        palettes.alphas.push(this.editColors[i].alpha);
      }

      this.$emit('change', palettes);
    },
    cancel: function cancel() {
      this.$emit('change', null);
    },
    showPickerPanel: function showPickerPanel(c) {
      this.showPicker = false;
      this.curColor = null;

      var _hexToRgb = hexToRgb(c.color),
          r = _hexToRgb.r,
          g = _hexToRgb.g,
          b = _hexToRgb.b;

      this.curColor = {
        id: c.id,
        r: r,
        g: g,
        b: b,
        a: c.alpha
      };
      this.showPicker = true;
    },
    changeColor: function changeColor(color) {
      for (var i = 0; i < this.editColors.length; i++) {
        if (this.editColors[i].id === this.curColor.id) {
          var newColor = {
            color: rgbToHex(color.r, color.g, color.b),
            alpha: color.a
          };
          this.$set(this.editColors, i, newColor);
        }
      }

      this.showPicker = false;
      this.curColor = null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/paletteEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_paletteEditvue_type_script_lang_js_ = (paletteEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/paletteEdit.vue?vue&type=style&index=0&id=5b525de1&lang=scss&scoped=true&
var paletteEditvue_type_style_index_0_id_5b525de1_lang_scss_scoped_true_ = __webpack_require__("72e6");

// CONCATENATED MODULE: ./src/components/paletteEdit.vue






/* normalize component */

var paletteEdit_component = normalizeComponent(
  components_paletteEditvue_type_script_lang_js_,
  paletteEditvue_type_template_id_5b525de1_scoped_true_render,
  paletteEditvue_type_template_id_5b525de1_scoped_true_staticRenderFns,
  false,
  null,
  "5b525de1",
  null
  
)

/* harmony default export */ var paletteEdit = (paletteEdit_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorRangeSelector.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var ColorRangeSelectorvue_type_script_lang_js_ = ({
  name: "ColorRangeSelector",
  directives: {
    Clickoutside: Clickoutside
  },
  components: {
    PaletteEdit: paletteEdit,
    CusSelect: CusSelect,
    ColorPalette: ColorPalette
  },
  props: ['steps', 'value', 'mode'],
  data: function data() {
    return {
      currentType: 'sequential',
      selectPalette: null,
      showDrop: false,
      showCus: false,
      reverse: false,
      modes: 'HEX',
      step: 3
    };
  },
  mounted: function mounted() {
    if (this.steps && !isNaN(this.steps)) {
      this.step = parseInt(this.steps);
    }

    if (this.mode) {
      this.modes = this.mode;
    }

    document.querySelector('.selector-input').addEventListener('click', this.showDropdown);

    if (!this.init()) {
      this.selectPalette = this.matchColorSets[0];
    }
  },
  watch: {
    value: {
      handler: function handler(val) {
        if (val) {
          this.init();
        }
      },
      deep: true
    }
  },
  computed: {
    dropWidth: function dropWidth() {
      return {
        width: this.$refs.dom ? this.$refs.dom.offsetWidth + "px" : '100%'
      };
    },
    types: function types() {
      var t = new Set();
      colorScheme.forEach(function (item) {
        t.add(item.type);
      });
      return Array.from(t);
    },
    matchColorSets: function matchColorSets() {
      var _this = this;

      var sets = [];
      var cloneSets = JSON.parse(JSON.stringify(colorScheme));
      cloneSets.forEach(function (item) {
        if (_this.currentType !== '' && item.type !== _this.currentType) {
          return;
        }

        if (_this.step === item.colors.length) {
          item.alphas = new Array(item.colors.length).fill(1);

          if (_this.reverse) {
            item.colors.reverse();
          }

          if (_this.selectPalette && item.name === _this.selectPalette.name) {
            if (JSON.stringify(_this.selectPalette) !== JSON.stringify(item)) {
              _this.selectPalette = JSON.parse(JSON.stringify(item));
            }
          }

          sets.push(item);
        }
      });
      return sets;
    }
  },
  methods: {
    changeStep: function changeStep(e) {
      this.step = e;
    },
    init: function init() {
      if (this.value && this.value.length > 0) {
        this.selectPalette = {
          name: 'custom',
          type: 'custom',
          category: 'custom',
          colors: [],
          alphas: []
        };

        for (var i = 0; i < this.value.length; i++) {
          if (this.value[i].indexOf('#') !== -1) {
            this.selectPalette.colors.push(this.value[i]);
            this.selectPalette.alphas.push(1);
          } else if (this.value[i].indexOf('rgba(') !== -1) {
            var rgba = rgbaToArr(this.value[i]);
            this.selectPalette.colors.push(rgbToHex(rgba.r, rgba.g, rgba.b));
            this.selectPalette.alphas.push(rgba.a);
          } else if (this.value[i].indexOf('rgb(') !== -1) {
            var _rgba = rgbToArr(this.value[i]);

            this.selectPalette.colors.push(rgbToHex(_rgba.r, _rgba.g, _rgba.b));
            this.selectPalette.alphas.push(1);
          }
        }

        return true;
      }

      return false;
    },
    emitVal: function emitVal() {
      if (!this.selectPalette || this.selectPalette.colors.length === 0) {
        return;
      }

      var tc = [];

      if (!this.modes) {
        this.modes = 'HEX';
      }

      switch (this.modes.toUpperCase()) {
        default:
        case "HEX":
          this.$emit('change', JSON.parse(JSON.stringify(this.selectPalette.colors)));
          break;

        case "RGB":
          for (var i = 0; i < this.selectPalette.colors.length; i++) {
            var rgb = hexToRgb(this.selectPalette.colors[i]);
            tc.push("rgb(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ")"));
          }

          this.$emit('change', tc);
          break;

        case "RGBA":
          for (var _i = 0; _i < this.selectPalette.colors.length; _i++) {
            var _rgb = hexToRgb(this.selectPalette.colors[_i]);

            tc.push("rgba(".concat(_rgb.r, ",").concat(_rgb.g, ",").concat(_rgb.b, ",").concat(this.selectPalette.alphas[_i], ")"));
          }

          this.$emit('change', tc);
          break;
      }
    },
    choosePalette: function choosePalette(e) {
      this.$set(this, 'selectPalette', e);
    },
    chooseType: function chooseType(type) {
      this.currentType = type;
      this.showCus = false;
    },
    showDropdown: function showDropdown() {
      this.showDrop = true;
    },
    closeDropdown: function closeDropdown() {
      if (!this.showDrop) {
        return;
      }

      this.emitVal();
      this.showDrop = false;
    },
    showCustom: function showCustom() {
      this.showCus = !this.showCus;
    },
    reverseColor: function reverseColor() {
      this.reverse = !this.reverse;
    },
    editChange: function editChange(palette) {
      this.showCus = false;

      if (palette && palette.colors.length > 0) {
        palette.name = "custom";
        this.selectPalette = palette;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/ColorRangeSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ColorRangeSelectorvue_type_script_lang_js_ = (ColorRangeSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ColorRangeSelector.vue?vue&type=style&index=0&id=00029efc&lang=scss&scoped=true&
var ColorRangeSelectorvue_type_style_index_0_id_00029efc_lang_scss_scoped_true_ = __webpack_require__("0778");

// CONCATENATED MODULE: ./src/components/ColorRangeSelector.vue






/* normalize component */

var ColorRangeSelector_component = normalizeComponent(
  components_ColorRangeSelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "00029efc",
  null
  
)

/* harmony default export */ var ColorRangeSelector = (ColorRangeSelector_component.exports);
// CONCATENATED MODULE: ./index.js


ColorRangeSelector.install = function (Vue) {
  Vue.component('ColorRangeSelector', ColorRangeSelector);
};

/* harmony default export */ var index = (ColorRangeSelector);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ }),

/***/ "fb4a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8935");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2f06d70e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });