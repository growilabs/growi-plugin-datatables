var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jquery = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function(module) {
  (function(global2, factory2) {
    {
      module.exports = global2.document ? factory2(global2, true) : function(w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory2(w);
      };
    }
  })(typeof window !== "undefined" ? window : commonjsGlobal, function(window2, noGlobal) {
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction2 = function isFunction3(obj) {
      return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow2(obj) {
      return obj != null && obj === obj.window;
    };
    var document2 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc) {
      doc = doc || document2;
      var i, val, script = doc.createElement("script");
      script.text = code;
      if (node) {
        for (i in preservedScriptAttributes) {
          val = node[i] || node.getAttribute && node.getAttribute(i);
          if (val) {
            script.setAttribute(i, val);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
      return new jQuery2.fn.init(selector, context);
    };
    jQuery2.fn = jQuery2.prototype = {
      jquery: version,
      constructor: jQuery2,
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      pushStack: function(elems) {
        var ret = jQuery2.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      each: function(callback) {
        return jQuery2.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery2.map(this, function(elem, i) {
          return callback.call(elem, i, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery2.grep(this, function(_elem, i) {
          return (i + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery2.grep(this, function(_elem, i) {
          return i % 2;
        }));
      },
      eq: function(i) {
        var len = this.length, j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push,
      sort: arr.sort,
      splice: arr.splice
    };
    jQuery2.extend = jQuery2.fn.extend = function() {
      var options, name2, src, copy, copyIsArray, clone2, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (typeof target !== "object" && !isFunction2(target)) {
        target = {};
      }
      if (i === length) {
        target = this;
        i--;
      }
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name2 in options) {
            copy = options[name2];
            if (name2 === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name2];
              if (copyIsArray && !Array.isArray(src)) {
                clone2 = [];
              } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                clone2 = {};
              } else {
                clone2 = src;
              }
              copyIsArray = false;
              target[name2] = jQuery2.extend(deep, clone2, copy);
            } else if (copy !== void 0) {
              target[name2] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery2.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name2;
        for (name2 in obj) {
          return false;
        }
        return true;
      },
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length, i = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      text: function(elem) {
        var node, ret = "", i = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i++]) {
            ret += jQuery2.text(node);
          }
        }
        if (nodeType === 1 || nodeType === 11) {
          return elem.textContent;
        }
        if (nodeType === 9) {
          return elem.documentElement.textContent;
        }
        if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      },
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery2.merge(
              ret,
              typeof arr2 === "string" ? [arr2] : arr2
            );
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i) {
        return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
      },
      isXMLDoc: function(elem) {
        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i = first.length;
        for (; j < len; j++) {
          first[i++] = second[j];
        }
        first.length = i;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
        for (; i < length; i++) {
          callbackInverse = !callback(elems[i], i);
          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
          }
        }
        return matches;
      },
      map: function(elems, callback, arg) {
        var length, value, i = 0, ret = [];
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i < length; i++) {
            value = callback(elems[i], i, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i in elems) {
            value = callback(elems[i], i, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      guid: 1,
      support
    });
    if (typeof Symbol === "function") {
      jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery2.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name2) {
        class2type["[object " + name2 + "]"] = name2.toLowerCase();
      }
    );
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length, type = toType(obj);
      if (isFunction2(obj) || isWindow(obj)) {
        return false;
      }
      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name2) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name2.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
    jQuery2.contains = function(a, b) {
      var bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    };
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "\uFFFD";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery2.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document2, pushNative = push;
    (function() {
      var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
        ID: new RegExp("^#(" + identifier + ")"),
        CLASS: new RegExp("^\\.(" + identifier + ")"),
        TAG: new RegExp("^(" + identifier + "|[*])"),
        ATTR: new RegExp("^" + attributes),
        PSEUDO: new RegExp("^" + pseudos),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + booleans + ")$", "i"),
        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
        var high = "0x" + escape.slice(1) - 65536;
        if (nonHex) {
          return nonHex;
        }
        return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }, unloadHandler = function() {
        setDocument();
      }, inDisabledFieldset = addCombinator(
        function(elem) {
          return elem.disabled === true && nodeName(elem, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
      function safeActiveElement() {
        try {
          return document3.activeElement;
        } catch (err) {
        }
      }
      try {
        push2.apply(
          arr = slice.call(preferredDoc.childNodes),
          preferredDoc.childNodes
        );
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push2 = {
          apply: function(target, els) {
            pushNative.apply(target, slice.call(els));
          },
          call: function(target) {
            pushNative.apply(target, slice.call(arguments, 1));
          }
        };
      }
      function find(selector, context, results, seed) {
        var m2, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
        results = results || [];
        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        }
        if (!seed) {
          setDocument(context);
          context = context || document3;
          if (documentIsHTML) {
            if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
              if (m2 = match[1]) {
                if (nodeType === 9) {
                  if (elem = context.getElementById(m2)) {
                    if (elem.id === m2) {
                      push2.call(results, elem);
                      return results;
                    }
                  } else {
                    return results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                    push2.call(results, elem);
                    return results;
                  }
                }
              } else if (match[2]) {
                push2.apply(results, context.getElementsByTagName(selector));
                return results;
              } else if ((m2 = match[3]) && context.getElementsByClassName) {
                push2.apply(results, context.getElementsByClassName(m2));
                return results;
              }
            }
            if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              newSelector = selector;
              newContext = context;
              if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                if (newContext != context || !support.scope) {
                  if (nid = context.getAttribute("id")) {
                    nid = jQuery2.escapeSelector(nid);
                  } else {
                    context.setAttribute("id", nid = expando);
                  }
                }
                groups = tokenize(selector);
                i2 = groups.length;
                while (i2--) {
                  groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                }
                newSelector = groups.join(",");
              }
              try {
                push2.apply(
                  results,
                  newContext.querySelectorAll(newSelector)
                );
                return results;
              } catch (qsaError) {
                nonnativeSelectorCache(selector, true);
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + " "] = value;
        }
        return cache;
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var el = document3.createElement("fieldset");
        try {
          return !!fn(el);
        } catch (e) {
          return false;
        } finally {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
          el = null;
        }
      }
      function createInputPseudo(type) {
        return function(elem) {
          return nodeName(elem, "input") && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function(elem) {
          return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
        };
      }
      function createDisabledPseudo(disabled) {
        return function(elem) {
          if ("form" in elem) {
            if (elem.parentNode && elem.disabled === false) {
              if ("label" in elem) {
                if ("label" in elem.parentNode) {
                  return elem.parentNode.disabled === disabled;
                } else {
                  return elem.disabled === disabled;
                }
              }
              return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
            }
            return elem.disabled === disabled;
          } else if ("label" in elem) {
            return elem.disabled === disabled;
          }
          return false;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(argument) {
          argument = +argument;
          return markFunction(function(seed, matches2) {
            var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
            while (i2--) {
              if (seed[j = matchIndexes[i2]]) {
                seed[j] = !(matches2[j] = seed[j]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      }
      function setDocument(node) {
        var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
        if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
          return document3;
        }
        document3 = doc;
        documentElement2 = document3.documentElement;
        documentIsHTML = !jQuery2.isXMLDoc(document3);
        matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
        if (documentElement2.msMatchesSelector && preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
          subWindow.addEventListener("unload", unloadHandler);
        }
        support.getById = assert(function(el) {
          documentElement2.appendChild(el).id = jQuery2.expando;
          return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
        });
        support.disconnectedMatch = assert(function(el) {
          return matches.call(el, "*");
        });
        support.scope = assert(function() {
          return document3.querySelectorAll(":scope");
        });
        support.cssHas = assert(function() {
          try {
            document3.querySelector(":has(*,:jqfake)");
            return false;
          } catch (e) {
            return true;
          }
        });
        if (support.getById) {
          Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
          Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var elem = context.getElementById(id);
              return elem ? [elem] : [];
            }
          };
        } else {
          Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node2 && node2.value === attrId;
            };
          };
          Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var node2, i2, elems, elem = context.getElementById(id);
              if (elem) {
                node2 = elem.getAttributeNode("id");
                if (node2 && node2.value === id) {
                  return [elem];
                }
                elems = context.getElementsByName(id);
                i2 = 0;
                while (elem = elems[i2++]) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                }
              }
              return [];
            }
          };
        }
        Expr.find.TAG = function(tag2, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag2);
          } else {
            return context.querySelectorAll(tag2);
          }
        };
        Expr.find.CLASS = function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyQSA = [];
        assert(function(el) {
          var input;
          documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          input = document3.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          documentElement2.appendChild(el).disabled = true;
          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          input = document3.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);
          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
          }
        });
        if (!support.cssHas) {
          rbuggyQSA.push(":has");
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var compare2 = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (compare2) {
            return compare2;
          }
          compare2 = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
          if (compare2 & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare2) {
            if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
              return -1;
            }
            if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
          }
          return compare2 & 4 ? -1 : 1;
        };
        return document3;
      }
      find.matches = function(expr, elements) {
        return find(expr, null, null, elements);
      };
      find.matchesSelector = function(elem, expr) {
        setDocument(elem);
        if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
            nonnativeSelectorCache(expr, true);
          }
        }
        return find(expr, document3, null, [elem]).length > 0;
      };
      find.contains = function(context, elem) {
        if ((context.ownerDocument || context) != document3) {
          setDocument(context);
        }
        return jQuery2.contains(context, elem);
      };
      find.attr = function(elem, name2) {
        if ((elem.ownerDocument || elem) != document3) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name2.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name2.toLowerCase()) ? fn(elem, name2, !documentIsHTML) : void 0;
        if (val !== void 0) {
          return val;
        }
        return elem.getAttribute(name2);
      };
      find.error = function(msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      jQuery2.uniqueSort = function(results) {
        var elem, duplicates = [], j = 0, i2 = 0;
        hasDuplicate = !support.sortStable;
        sortInput = !support.sortStable && slice.call(results, 0);
        sort.call(results, sortOrder);
        if (hasDuplicate) {
          while (elem = results[i2++]) {
            if (elem === results[i2]) {
              j = duplicates.push(i2);
            }
          }
          while (j--) {
            splice.call(results, duplicates[j], 1);
          }
        }
        sortInput = null;
        return results;
      };
      jQuery2.fn.uniqueSort = function() {
        return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
      };
      Expr = jQuery2.expr = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(match) {
            match[1] = match[1].replace(runescape, funescape);
            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }
            return match.slice(0, 4);
          },
          CHILD: function(match) {
            match[1] = match[1].toLowerCase();
            if (match[1].slice(0, 3) === "nth") {
              if (!match[3]) {
                find.error(match[0]);
              }
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +(match[7] + match[8] || match[3] === "odd");
            } else if (match[3]) {
              find.error(match[0]);
            }
            return match;
          },
          PSEUDO: function(match) {
            var excess, unquoted = !match[6] && match[2];
            if (matchExpr.CHILD.test(match[0])) {
              return null;
            }
            if (match[3]) {
              match[2] = match[4] || match[5] || "";
            } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }
            return match.slice(0, 3);
          }
        },
        filter: {
          TAG: function(nodeNameSelector) {
            var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function() {
              return true;
            } : function(elem) {
              return nodeName(elem, expectedNodeName);
            };
          },
          CLASS: function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
              return pattern.test(
                typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
              );
            });
          },
          ATTR: function(name2, operator, check) {
            return function(elem) {
              var result = find.attr(elem, name2);
              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }
              result += "";
              if (operator === "=") {
                return result === check;
              }
              if (operator === "!=") {
                return result !== check;
              }
              if (operator === "^=") {
                return check && result.indexOf(check) === 0;
              }
              if (operator === "*=") {
                return check && result.indexOf(check) > -1;
              }
              if (operator === "$=") {
                return check && result.slice(-check.length) === check;
              }
              if (operator === "~=") {
                return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
              }
              if (operator === "|=") {
                return result === check || result.slice(0, check.length + 1) === check + "-";
              }
              return false;
            };
          },
          CHILD: function(type, what, _argument, first, last) {
            var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
            return first === 1 && last === 0 ? function(elem) {
              return !!elem.parentNode;
            } : function(elem, _context, xml) {
              var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name2 = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
              if (parent) {
                if (simple) {
                  while (dir2) {
                    node = elem;
                    while (node = node[dir2]) {
                      if (ofType ? nodeName(node, name2) : node.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir2 = type === "only" && !start && "nextSibling";
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  outerCache = parent[expando] || (parent[expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      outerCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  }
                  if (diff === false) {
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? nodeName(node, name2) : node.nodeType === 1) && ++diff) {
                        if (useCache) {
                          outerCache = node[expando] || (node[expando] = {});
                          outerCache[type] = [dirruns, diff];
                        }
                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          PSEUDO: function(pseudo, argument) {
            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
            if (fn[expando]) {
              return fn(argument);
            }
            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                var idx, matched = fn(seed, argument), i2 = matched.length;
                while (i2--) {
                  idx = indexOf.call(seed, matched[i2]);
                  seed[idx] = !(matches2[idx] = matched[i2]);
                }
              }) : function(elem) {
                return fn(elem, 0, args);
              };
            }
            return fn;
          }
        },
        pseudos: {
          not: markFunction(function(selector) {
            var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
            return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
              var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
              while (i2--) {
                if (elem = unmatched[i2]) {
                  seed[i2] = !(matches2[i2] = elem);
                }
              }
            }) : function(elem, _context, xml) {
              input[0] = elem;
              matcher(input, null, xml, results);
              input[0] = null;
              return !results.pop();
            };
          }),
          has: markFunction(function(selector) {
            return function(elem) {
              return find(selector, elem).length > 0;
            };
          }),
          contains: markFunction(function(text) {
            text = text.replace(runescape, funescape);
            return function(elem) {
              return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
            };
          }),
          lang: markFunction(function(lang) {
            if (!ridentifier.test(lang || "")) {
              find.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          target: function(elem) {
            var hash = window2.location && window2.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          root: function(elem) {
            return elem === documentElement2;
          },
          focus: function(elem) {
            return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          enabled: createDisabledPseudo(false),
          disabled: createDisabledPseudo(true),
          checked: function(elem) {
            return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
          },
          selected: function(elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          empty: function(elem) {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function(elem) {
            return !Expr.pseudos.empty(elem);
          },
          header: function(elem) {
            return rheader.test(elem.nodeName);
          },
          input: function(elem) {
            return rinputs.test(elem.nodeName);
          },
          button: function(elem) {
            return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
          },
          text: function(elem) {
            var attr;
            return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
          },
          first: createPositionalPseudo(function() {
            return [0];
          }),
          last: createPositionalPseudo(function(_matchIndexes, length) {
            return [length - 1];
          }),
          eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),
          even: createPositionalPseudo(function(matchIndexes, length) {
            var i2 = 0;
            for (; i2 < length; i2 += 2) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          }),
          odd: createPositionalPseudo(function(matchIndexes, length) {
            var i2 = 1;
            for (; i2 < length; i2 += 2) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          }),
          lt: createPositionalPseudo(function(matchIndexes, length, argument) {
            var i2;
            if (argument < 0) {
              i2 = argument + length;
            } else if (argument > length) {
              i2 = length;
            } else {
              i2 = argument;
            }
            for (; --i2 >= 0; ) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          }),
          gt: createPositionalPseudo(function(matchIndexes, length, argument) {
            var i2 = argument < 0 ? argument + length : argument;
            for (; ++i2 < length; ) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          })
        }
      };
      Expr.pseudos.nth = Expr.pseudos.eq;
      for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
        Expr.pseudos[i] = createInputPseudo(i);
      }
      for (i in { submit: true, reset: true }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      function setFilters() {
      }
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();
      function tokenize(selector, parseOnly) {
        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match = rleadingCombinator.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: match[0].replace(rtrimCSS, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        if (parseOnly) {
          return soFar.length;
        }
        return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
      }
      function toSelector(tokens) {
        var i2 = 0, len = tokens.length, selector = "";
        for (; i2 < len; i2++) {
          selector += tokens[i2].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
        return combinator.first ? function(elem, context, xml) {
          while (elem = elem[dir2]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
          return false;
        } : function(elem, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                if (skip && nodeName(elem, skip)) {
                  elem = elem[dir2] || elem;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i2 = matchers.length;
          while (i2--) {
            if (!matchers[i2](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        var i2 = 0, len = contexts.length;
        for (; i2 < len; i2++) {
          find(selector, contexts[i2], results);
        }
        return results;
      }
      function condense(unmatched, map, filter, context, xml) {
        var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
        for (; i2 < len; i2++) {
          if (elem = unmatched[i2]) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i2);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function(seed, results, context, xml) {
          var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
            selector || "*",
            context.nodeType ? [context] : context,
            []
          ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
          if (matcher) {
            matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
            matcher(matcherIn, matcherOut, context, xml);
          } else {
            matcherOut = matcherIn;
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i2 = temp.length;
            while (i2--) {
              if (elem = temp[i2]) {
                matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i2 = matcherOut.length;
                while (i2--) {
                  if (elem = matcherOut[i2]) {
                    temp.push(matcherIn[i2] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i2 = matcherOut.length;
              while (i2--) {
                if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(
              matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
            );
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push2.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function(elem, context, xml) {
          var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          checkContext = null;
          return ret;
        }];
        for (; i2 < len; i2++) {
          if (matcher = Expr.relative[tokens[i2].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
            if (matcher[expando]) {
              j = ++i2;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(
                i2 > 1 && elementMatcher(matchers),
                i2 > 1 && toSelector(
                  tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                ).replace(rtrimCSS, "$1"),
                matcher,
                i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                j < len && matcherFromTokens(tokens = tokens.slice(j)),
                j < len && toSelector(tokens)
              );
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
          var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
          if (outermost) {
            outermostContext = context == document3 || context || outermost;
          }
          for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
            if (byElement && elem) {
              j = 0;
              if (!context && elem.ownerDocument != document3) {
                setDocument(elem);
                xml = !documentIsHTML;
              }
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document3, xml)) {
                  push2.call(results, elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i2;
          if (bySet && i2 !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i2--) {
                  if (!(unmatched[i2] || setMatched[i2])) {
                    setMatched[i2] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push2.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              jQuery2.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      function compile(selector, match) {
        var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
        if (!cached) {
          if (!match) {
            match = tokenize(selector);
          }
          i2 = match.length;
          while (i2--) {
            cached = matcherFromTokens(match[i2]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(
            selector,
            matcherFromGroupMatchers(elementMatchers, setMatchers)
          );
          cached.selector = selector;
        }
        return cached;
      }
      function select(selector, context, results, seed) {
        var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
        results = results || [];
        if (match.length === 1) {
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find.ID(
              token.matches[0].replace(runescape, funescape),
              context
            ) || [])[0];
            if (!context) {
              return results;
            } else if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          while (i2--) {
            token = tokens[i2];
            if (Expr.relative[type = token.type]) {
              break;
            }
            if (find2 = Expr.find[type]) {
              if (seed = find2(
                token.matches[0].replace(runescape, funescape),
                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
              )) {
                tokens.splice(i2, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push2.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
        (compiled || compile(selector, match))(
          seed,
          context,
          !documentIsHTML,
          results,
          !context || rsibling.test(selector) && testContext(context.parentNode) || context
        );
        return results;
      }
      support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
      setDocument();
      support.sortDetached = assert(function(el) {
        return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
      });
      jQuery2.find = find;
      jQuery2.expr[":"] = jQuery2.expr.pseudos;
      jQuery2.unique = jQuery2.uniqueSort;
      find.compile = compile;
      find.select = select;
      find.setDocument = setDocument;
      find.tokenize = tokenize;
      find.escape = jQuery2.escapeSelector;
      find.getText = jQuery2.text;
      find.isXML = jQuery2.isXMLDoc;
      find.selectors = jQuery2.expr;
      find.support = jQuery2.support;
      find.uniqueSort = jQuery2.uniqueSort;
    })();
    var dir = function(elem, dir2, until) {
      var matched = [], truncate2 = until !== void 0;
      while ((elem = elem[dir2]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate2 && jQuery2(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    var siblings = function(n3, elem) {
      var matched = [];
      for (; n3; n3 = n3.nextSibling) {
        if (n3.nodeType === 1 && n3 !== elem) {
          matched.push(n3);
        }
      }
      return matched;
    };
    var rneedsContext = jQuery2.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(elements, qualifier, not) {
      if (isFunction2(qualifier)) {
        return jQuery2.grep(elements, function(elem, i) {
          return !!qualifier.call(elem, i, elem) !== not;
        });
      }
      if (qualifier.nodeType) {
        return jQuery2.grep(elements, function(elem) {
          return elem === qualifier !== not;
        });
      }
      if (typeof qualifier !== "string") {
        return jQuery2.grep(elements, function(elem) {
          return indexOf.call(qualifier, elem) > -1 !== not;
        });
      }
      return jQuery2.filter(qualifier, elements, not);
    }
    jQuery2.filter = function(expr, elems, not) {
      var elem = elems[0];
      if (not) {
        expr = ":not(" + expr + ")";
      }
      if (elems.length === 1 && elem.nodeType === 1) {
        return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
      }
      return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
        return elem2.nodeType === 1;
      }));
    };
    jQuery2.fn.extend({
      find: function(selector) {
        var i, ret, len = this.length, self2 = this;
        if (typeof selector !== "string") {
          return this.pushStack(jQuery2(selector).filter(function() {
            for (i = 0; i < len; i++) {
              if (jQuery2.contains(self2[i], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        for (i = 0; i < len; i++) {
          jQuery2.find(selector, self2[i], ret);
        }
        return len > 1 ? jQuery2.uniqueSort(ret) : ret;
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function(selector) {
        return !!winnow(
          this,
          typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
          false
        ).length;
      }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery2.fn.init = function(selector, context, root) {
      var match, elem;
      if (!selector) {
        return this;
      }
      root = root || rootjQuery;
      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery2 ? context[0] : context;
            jQuery2.merge(this, jQuery2.parseHTML(
              match[1],
              context && context.nodeType ? context.ownerDocument || context : document2,
              true
            ));
            if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
              for (match in context) {
                if (isFunction2(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document2.getElementById(match[2]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || root).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction2(selector)) {
        return root.ready !== void 0 ? root.ready(selector) : selector(jQuery2);
      }
      return jQuery2.makeArray(selector, this);
    };
    init2.prototype = jQuery2.fn;
    rootjQuery = jQuery2(document2);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery2.fn.extend({
      has: function(target) {
        var targets = jQuery2(target, this), l2 = targets.length;
        return this.filter(function() {
          var i = 0;
          for (; i < l2; i++) {
            if (jQuery2.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest: function(selectors, context) {
        var cur, i = 0, l2 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
        if (!rneedsContext.test(selectors)) {
          for (; i < l2; i++) {
            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
              }
            }
          }
        }
        return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
      },
      index: function(elem) {
        if (!elem) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }
        if (typeof elem === "string") {
          return indexOf.call(jQuery2(elem), this[0]);
        }
        return indexOf.call(
          this,
          elem.jquery ? elem[0] : elem
        );
      },
      add: function(selector, context) {
        return this.pushStack(
          jQuery2.uniqueSort(
            jQuery2.merge(this.get(), jQuery2(selector, context))
          )
        );
      },
      addBack: function(selector) {
        return this.add(
          selector == null ? this.prevObject : this.prevObject.filter(selector)
        );
      }
    });
    function sibling(cur, dir2) {
      while ((cur = cur[dir2]) && cur.nodeType !== 1) {
      }
      return cur;
    }
    jQuery2.each({
      parent: function(elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil: function(elem, _i, until) {
        return dir(elem, "parentNode", until);
      },
      next: function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev: function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll: function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll: function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil: function(elem, _i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil: function(elem, _i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings: function(elem) {
        return siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function(elem) {
        return siblings(elem.firstChild);
      },
      contents: function(elem) {
        if (elem.contentDocument != null && getProto(elem.contentDocument)) {
          return elem.contentDocument;
        }
        if (nodeName(elem, "template")) {
          elem = elem.content || elem;
        }
        return jQuery2.merge([], elem.childNodes);
      }
    }, function(name2, fn) {
      jQuery2.fn[name2] = function(until, selector) {
        var matched = jQuery2.map(this, fn, until);
        if (name2.slice(-5) !== "Until") {
          selector = until;
        }
        if (selector && typeof selector === "string") {
          matched = jQuery2.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name2]) {
            jQuery2.uniqueSort(matched);
          }
          if (rparentsprev.test(name2)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    function createOptions(options) {
      var object = {};
      jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery2.Callbacks = function(options) {
      options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
        locked = locked || options.once;
        fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = "";
          }
        }
      }, self2 = {
        add: function() {
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add2(args) {
              jQuery2.each(args, function(_, arg) {
                if (isFunction2(arg)) {
                  if (!options.unique || !self2.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  add2(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        remove: function() {
          jQuery2.each(arguments, function(_, arg) {
            var index;
            while ((index = jQuery2.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        has: function(fn) {
          return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
        },
        empty: function() {
          if (list) {
            list = [];
          }
          return this;
        },
        disable: function() {
          locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function() {
          return !list;
        },
        lock: function() {
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function() {
          return !!locked;
        },
        fireWith: function(context, args) {
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        fire: function() {
          self2.fireWith(this, arguments);
          return this;
        },
        fired: function() {
          return !!fired;
        }
      };
      return self2;
    };
    function Identity(v) {
      return v;
    }
    function Thrower(ex) {
      throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
      var method;
      try {
        if (value && isFunction2(method = value.promise)) {
          method.call(value).done(resolve).fail(reject);
        } else if (value && isFunction2(method = value.then)) {
          method.call(value, resolve, reject);
        } else {
          resolve.apply(void 0, [value].slice(noValue));
        }
      } catch (value2) {
        reject.apply(void 0, [value2]);
      }
    }
    jQuery2.extend({
      Deferred: function(func) {
        var tuples = [
          [
            "notify",
            "progress",
            jQuery2.Callbacks("memory"),
            jQuery2.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            jQuery2.Callbacks("once memory"),
            jQuery2.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            jQuery2.Callbacks("once memory"),
            jQuery2.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], state = "pending", promise = {
          state: function() {
            return state;
          },
          always: function() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          "catch": function(fn) {
            return promise.then(null, fn);
          },
          pipe: function() {
            var fns = arguments;
            return jQuery2.Deferred(function(newDefer) {
              jQuery2.each(tuples, function(_i, tuple) {
                var fn = isFunction2(fns[tuple[4]]) && fns[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && isFunction2(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](
                      this,
                      fn ? [returned] : arguments
                    );
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred2, handler, special) {
              return function() {
                var that = this, args = arguments, mightThrow = function() {
                  var returned, then;
                  if (depth < maxDepth) {
                    return;
                  }
                  returned = handler.apply(that, args);
                  if (returned === deferred2.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                  if (isFunction2(then)) {
                    if (special) {
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity, special),
                        resolve(maxDepth, deferred2, Thrower, special)
                      );
                    } else {
                      maxDepth++;
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity, special),
                        resolve(maxDepth, deferred2, Thrower, special),
                        resolve(
                          maxDepth,
                          deferred2,
                          Identity,
                          deferred2.notifyWith
                        )
                      );
                    }
                  } else {
                    if (handler !== Identity) {
                      that = void 0;
                      args = [returned];
                    }
                    (special || deferred2.resolveWith)(that, args);
                  }
                }, process = special ? mightThrow : function() {
                  try {
                    mightThrow();
                  } catch (e) {
                    if (jQuery2.Deferred.exceptionHook) {
                      jQuery2.Deferred.exceptionHook(
                        e,
                        process.error
                      );
                    }
                    if (depth + 1 >= maxDepth) {
                      if (handler !== Thrower) {
                        that = void 0;
                        args = [e];
                      }
                      deferred2.rejectWith(that, args);
                    }
                  }
                };
                if (depth) {
                  process();
                } else {
                  if (jQuery2.Deferred.getErrorHook) {
                    process.error = jQuery2.Deferred.getErrorHook();
                  } else if (jQuery2.Deferred.getStackHook) {
                    process.error = jQuery2.Deferred.getStackHook();
                  }
                  window2.setTimeout(process);
                }
              };
            }
            return jQuery2.Deferred(function(newDefer) {
              tuples[0][3].add(
                resolve(
                  0,
                  newDefer,
                  isFunction2(onProgress) ? onProgress : Identity,
                  newDefer.notifyWith
                )
              );
              tuples[1][3].add(
                resolve(
                  0,
                  newDefer,
                  isFunction2(onFulfilled) ? onFulfilled : Identity
                )
              );
              tuples[2][3].add(
                resolve(
                  0,
                  newDefer,
                  isFunction2(onRejected) ? onRejected : Thrower
                )
              );
            }).promise();
          },
          promise: function(obj) {
            return obj != null ? jQuery2.extend(obj, promise) : promise;
          }
        }, deferred = {};
        jQuery2.each(tuples, function(i, tuple) {
          var list = tuple[2], stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(
              function() {
                state = stateString;
              },
              tuples[3 - i][2].disable,
              tuples[3 - i][3].disable,
              tuples[0][2].lock,
              tuples[0][3].lock
            );
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
            return this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        });
        promise.promise(deferred);
        if (func) {
          func.call(deferred, deferred);
        }
        return deferred;
      },
      when: function(singleValue) {
        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
          return function(value) {
            resolveContexts[i2] = this;
            resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
        if (remaining <= 1) {
          adoptValue(
            singleValue,
            primary.done(updateFunc(i)).resolve,
            primary.reject,
            !remaining
          );
          if (primary.state() === "pending" || isFunction2(resolveValues[i] && resolveValues[i].then)) {
            return primary.then();
          }
        }
        while (i--) {
          adoptValue(resolveValues[i], updateFunc(i), primary.reject);
        }
        return primary.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery2.Deferred.exceptionHook = function(error, asyncError) {
      if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
        window2.console.warn(
          "jQuery.Deferred exception: " + error.message,
          error.stack,
          asyncError
        );
      }
    };
    jQuery2.readyException = function(error) {
      window2.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery2.Deferred();
    jQuery2.fn.ready = function(fn) {
      readyList.then(fn).catch(function(error) {
        jQuery2.readyException(error);
      });
      return this;
    };
    jQuery2.extend({
      isReady: false,
      readyWait: 1,
      ready: function(wait) {
        if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
          return;
        }
        jQuery2.isReady = true;
        if (wait !== true && --jQuery2.readyWait > 0) {
          return;
        }
        readyList.resolveWith(document2, [jQuery2]);
      }
    });
    jQuery2.ready.then = readyList.then;
    function completed() {
      document2.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
      jQuery2.ready();
    }
    if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
      window2.setTimeout(jQuery2.ready);
    } else {
      document2.addEventListener("DOMContentLoaded", completed);
      window2.addEventListener("load", completed);
    }
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0, len = elems.length, bulk = key == null;
      if (toType(key) === "object") {
        chainable = true;
        for (i in key) {
          access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else if (value !== void 0) {
        chainable = true;
        if (!isFunction2(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function(elem, _key, value2) {
              return bulk.call(jQuery2(elem), value2);
            };
          }
        }
        if (fn) {
          for (; i < len; i++) {
            fn(
              elems[i],
              key,
              raw ? value : value.call(elems[i], i, fn(elems[i], key))
            );
          }
        }
      }
      if (chainable) {
        return elems;
      }
      if (bulk) {
        return fn.call(elems);
      }
      return len ? fn(elems[0], key) : emptyGet;
    };
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    function fcamelCase(_all, letter) {
      return letter.toUpperCase();
    }
    function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
      this.expando = jQuery2.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
      cache: function(owner) {
        var value = owner[this.expando];
        if (!value) {
          value = {};
          if (acceptData(owner)) {
            if (owner.nodeType) {
              owner[this.expando] = value;
            } else {
              Object.defineProperty(owner, this.expando, {
                value,
                configurable: true
              });
            }
          }
        }
        return value;
      },
      set: function(owner, data, value) {
        var prop, cache = this.cache(owner);
        if (typeof data === "string") {
          cache[camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get: function(owner, key) {
        return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
      },
      access: function(owner, key, value) {
        if (key === void 0 || key && typeof key === "string" && value === void 0) {
          return this.get(owner, key);
        }
        this.set(owner, key, value);
        return value !== void 0 ? value : key;
      },
      remove: function(owner, key) {
        var i, cache = owner[this.expando];
        if (cache === void 0) {
          return;
        }
        if (key !== void 0) {
          if (Array.isArray(key)) {
            key = key.map(camelCase);
          } else {
            key = camelCase(key);
            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
          }
          i = key.length;
          while (i--) {
            delete cache[key[i]];
          }
        }
        if (key === void 0 || jQuery2.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = void 0;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function(owner) {
        var cache = owner[this.expando];
        return cache !== void 0 && !jQuery2.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
      if (data === "true") {
        return true;
      }
      if (data === "false") {
        return false;
      }
      if (data === "null") {
        return null;
      }
      if (data === +data + "") {
        return +data;
      }
      if (rbrace.test(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    function dataAttr(elem, key, data) {
      var name2;
      if (data === void 0 && elem.nodeType === 1) {
        name2 = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name2);
        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e) {
          }
          dataUser.set(elem, key, data);
        } else {
          data = void 0;
        }
      }
      return data;
    }
    jQuery2.extend({
      hasData: function(elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
      },
      data: function(elem, name2, data) {
        return dataUser.access(elem, name2, data);
      },
      removeData: function(elem, name2) {
        dataUser.remove(elem, name2);
      },
      _data: function(elem, name2, data) {
        return dataPriv.access(elem, name2, data);
      },
      _removeData: function(elem, name2) {
        dataPriv.remove(elem, name2);
      }
    });
    jQuery2.fn.extend({
      data: function(key, value) {
        var i, name2, data, elem = this[0], attrs = elem && elem.attributes;
        if (key === void 0) {
          if (this.length) {
            data = dataUser.get(elem);
            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
              i = attrs.length;
              while (i--) {
                if (attrs[i]) {
                  name2 = attrs[i].name;
                  if (name2.indexOf("data-") === 0) {
                    name2 = camelCase(name2.slice(5));
                    dataAttr(elem, name2, data[name2]);
                  }
                }
              }
              dataPriv.set(elem, "hasDataAttrs", true);
            }
          }
          return data;
        }
        if (typeof key === "object") {
          return this.each(function() {
            dataUser.set(this, key);
          });
        }
        return access(this, function(value2) {
          var data2;
          if (elem && value2 === void 0) {
            data2 = dataUser.get(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            data2 = dataAttr(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            return;
          }
          this.each(function() {
            dataUser.set(this, key, value2);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function(key) {
        return this.each(function() {
          dataUser.remove(this, key);
        });
      }
    });
    jQuery2.extend({
      queue: function(elem, type, data) {
        var queue;
        if (elem) {
          type = (type || "fx") + "queue";
          queue = dataPriv.get(elem, type);
          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
            } else {
              queue.push(data);
            }
          }
          return queue || [];
        }
      },
      dequeue: function(elem, type) {
        type = type || "fx";
        var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
          jQuery2.dequeue(elem, type);
        };
        if (fn === "inprogress") {
          fn = queue.shift();
          startLength--;
        }
        if (fn) {
          if (type === "fx") {
            queue.unshift("inprogress");
          }
          delete hooks.stop;
          fn.call(elem, next, hooks);
        }
        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      _queueHooks: function(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty: jQuery2.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery2.fn.extend({
      queue: function(type, data) {
        var setter = 2;
        if (typeof type !== "string") {
          data = type;
          type = "fx";
          setter--;
        }
        if (arguments.length < setter) {
          return jQuery2.queue(this[0], type);
        }
        return data === void 0 ? this : this.each(function() {
          var queue = jQuery2.queue(this, type, data);
          jQuery2._queueHooks(this, type);
          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery2.dequeue(this, type);
          }
        });
      },
      dequeue: function(type) {
        return this.each(function() {
          jQuery2.dequeue(this, type);
        });
      },
      clearQueue: function(type) {
        return this.queue(type || "fx", []);
      },
      promise: function(type, obj) {
        var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if (typeof type !== "string") {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        while (i--) {
          tmp = dataPriv.get(elements[i], type + "queueHooks");
          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }
        resolve();
        return defer.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document2.documentElement;
    var isAttached = function(elem) {
      return jQuery2.contains(elem.ownerDocument, elem);
    }, composed = { composed: true };
    if (documentElement.getRootNode) {
      isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
      };
    }
    var isHiddenWithinTree = function(elem, el) {
      elem = el || elem;
      return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery2.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery2.css(elem, prop, "");
      }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        while (maxIterations--) {
          jQuery2.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery2.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;
        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
        if (tween) {
          tween.unit = unit;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }
      return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
      var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
      if (display) {
        return display;
      }
      temp = doc.body.appendChild(doc.createElement(nodeName2));
      display = jQuery2.css(temp, "display");
      temp.parentNode.removeChild(temp);
      if (display === "none") {
        display = "block";
      }
      defaultDisplayMap[nodeName2] = display;
      return display;
    }
    function showHide(elements, show) {
      var display, elem, values = [], index = 0, length = elements.length;
      for (; index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
          continue;
        }
        display = elem.style.display;
        if (show) {
          if (display === "none") {
            values[index] = dataPriv.get(elem, "display") || null;
            if (!values[index]) {
              elem.style.display = "";
            }
          }
          if (elem.style.display === "" && isHiddenWithinTree(elem)) {
            values[index] = getDefaultDisplay(elem);
          }
        } else {
          if (display !== "none") {
            values[index] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
      for (index = 0; index < length; index++) {
        if (values[index] != null) {
          elements[index].style.display = values[index];
        }
      }
      return elements;
    }
    jQuery2.fn.extend({
      show: function() {
        return showHide(this, true);
      },
      hide: function() {
        return showHide(this);
      },
      toggle: function(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }
        return this.each(function() {
          if (isHiddenWithinTree(this)) {
            jQuery2(this).show();
          } else {
            jQuery2(this).hide();
          }
        });
      }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var fragment = document2.createDocumentFragment(), div2 = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      div2.appendChild(input);
      support.checkClone = div2.cloneNode(true).cloneNode(true).lastChild.checked;
      div2.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div2.cloneNode(true).lastChild.defaultValue;
      div2.innerHTML = "<option></option>";
      support.option = !!div2.lastChild;
    })();
    var wrapMap = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    if (!support.option) {
      wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    function getAll(context, tag2) {
      var ret;
      if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag2 || "*");
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag2 || "*");
      } else {
        ret = [];
      }
      if (tag2 === void 0 || tag2 && nodeName(context, tag2)) {
        return jQuery2.merge([context], ret);
      }
      return ret;
    }
    function setGlobalEval(elems, refElements) {
      var i = 0, l2 = elems.length;
      for (; i < l2; i++) {
        dataPriv.set(
          elems[i],
          "globalEval",
          !refElements || dataPriv.get(refElements[i], "globalEval")
        );
      }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem, tmp, tag2, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l2 = elems.length;
      for (; i < l2; i++) {
        elem = elems[i];
        if (elem || elem === 0) {
          if (toType(elem) === "object") {
            jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag2 = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag2] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            jQuery2.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i = 0;
      while (elem = nodes[i++]) {
        if (selection && jQuery2.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
          continue;
        }
        attached = isAttached(elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (attached) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function on(elem, types, selector, data, fn, one) {
      var origFn, type;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = void 0;
        }
        for (type in types) {
          on(elem, type, selector, data, types[type], one);
        }
        return elem;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = void 0;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = void 0;
        } else {
          fn = data;
          data = selector;
          selector = void 0;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem;
      }
      if (one === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery2().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
      }
      return elem.each(function() {
        jQuery2.event.add(this, types, fn, data, selector);
      });
    }
    jQuery2.event = {
      global: {},
      add: function(elem, types, handler, data, selector) {
        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
        if (!acceptData(elem)) {
          return;
        }
        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery2.find.matchesSelector(documentElement, selector);
        }
        if (!handler.guid) {
          handler.guid = jQuery2.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = /* @__PURE__ */ Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function(e) {
            return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
          };
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            continue;
          }
          special = jQuery2.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          special = jQuery2.event.special[type] || {};
          handleObj = jQuery2.extend({
            type,
            origType,
            data,
            handler,
            guid: handler.guid,
            selector,
            needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn);
          if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
              if (elem.addEventListener) {
                elem.addEventListener(type, eventHandle);
              }
            }
          }
          if (special.add) {
            special.add.call(elem, handleObj);
            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          }
          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          }
          jQuery2.event.global[type] = true;
        }
      },
      remove: function(elem, types, handler, selector, mappedTypes) {
        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
        if (!elemData || !(events = elemData.events)) {
          return;
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            for (type in events) {
              jQuery2.event.remove(elem, type + types[t], handler, selector, true);
            }
            continue;
          }
          special = jQuery2.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          handlers = events[type] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
          origCount = j = handlers.length;
          while (j--) {
            handleObj = handlers[j];
            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j, 1);
              if (handleObj.selector) {
                handlers.delegateCount--;
              }
              if (special.remove) {
                special.remove.call(elem, handleObj);
              }
            }
          }
          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
              jQuery2.removeEvent(elem, type, elemData.handle);
            }
            delete events[type];
          }
        }
        if (jQuery2.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      },
      dispatch: function(nativeEvent) {
        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
        args[0] = event;
        for (i = 1; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        event.delegateTarget = this;
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        }
        handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
        i = 0;
        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j = 0;
          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if (ret !== void 0) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }
        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }
        return event.result;
      },
      handlers: function(event, handlers) {
        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
        if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};
              for (i = 0; i < delegateCount; i++) {
                handleObj = handlers[i];
                sel = handleObj.selector + " ";
                if (matchedSelectors[sel] === void 0) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                }
                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }
              if (matchedHandlers.length) {
                handlerQueue.push({ elem: cur, handlers: matchedHandlers });
              }
            }
          }
        }
        cur = this;
        if (delegateCount < handlers.length) {
          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }
        return handlerQueue;
      },
      addProp: function(name2, hook) {
        Object.defineProperty(jQuery2.Event.prototype, name2, {
          enumerable: true,
          configurable: true,
          get: isFunction2(hook) ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name2];
            }
          },
          set: function(value) {
            Object.defineProperty(this, name2, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
            });
          }
        });
      },
      fix: function(originalEvent) {
        return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click", true);
            }
            return false;
          },
          trigger: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            }
            return true;
          },
          _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            if (event.result !== void 0 && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    function leverageNative(el, type, isSetup) {
      if (!isSetup) {
        if (dataPriv.get(el, type) === void 0) {
          jQuery2.event.add(el, type, returnTrue);
        }
        return;
      }
      dataPriv.set(el, type, false);
      jQuery2.event.add(el, type, {
        namespace: false,
        handler: function(event) {
          var result, saved = dataPriv.get(this, type);
          if (event.isTrigger & 1 && this[type]) {
            if (!saved) {
              saved = slice.call(arguments);
              dataPriv.set(this, type, saved);
              this[type]();
              result = dataPriv.get(this, type);
              dataPriv.set(this, type, false);
              if (saved !== result) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return result;
              }
            } else if ((jQuery2.event.special[type] || {}).delegateType) {
              event.stopPropagation();
            }
          } else if (saved) {
            dataPriv.set(this, type, jQuery2.event.trigger(
              saved[0],
              saved.slice(1),
              this
            ));
            event.stopPropagation();
            event.isImmediatePropagationStopped = returnTrue;
          }
        }
      });
    }
    jQuery2.removeEvent = function(elem, type, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle);
      }
    };
    jQuery2.Event = function(src, props) {
      if (!(this instanceof jQuery2.Event)) {
        return new jQuery2.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery2.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery2.expando] = true;
    };
    jQuery2.Event.prototype = {
      constructor: jQuery2.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery2.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, jQuery2.event.addProp);
    jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
      function focusMappedHandler(nativeEvent) {
        if (document2.documentMode) {
          var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
          event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
          event.isSimulated = true;
          handle(nativeEvent);
          if (event.target === event.currentTarget) {
            handle(event);
          }
        } else {
          jQuery2.event.simulate(
            delegateType,
            nativeEvent.target,
            jQuery2.event.fix(nativeEvent)
          );
        }
      }
      jQuery2.event.special[type] = {
        setup: function() {
          var attaches;
          leverageNative(this, type, true);
          if (document2.documentMode) {
            attaches = dataPriv.get(this, delegateType);
            if (!attaches) {
              this.addEventListener(delegateType, focusMappedHandler);
            }
            dataPriv.set(this, delegateType, (attaches || 0) + 1);
          } else {
            return false;
          }
        },
        trigger: function() {
          leverageNative(this, type);
          return true;
        },
        teardown: function() {
          var attaches;
          if (document2.documentMode) {
            attaches = dataPriv.get(this, delegateType) - 1;
            if (!attaches) {
              this.removeEventListener(delegateType, focusMappedHandler);
              dataPriv.remove(this, delegateType);
            } else {
              dataPriv.set(this, delegateType, attaches);
            }
          } else {
            return false;
          }
        },
        _default: function(event) {
          return dataPriv.get(event.target, type);
        },
        delegateType
      };
      jQuery2.event.special[delegateType] = {
        setup: function() {
          var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
          if (!attaches) {
            if (document2.documentMode) {
              this.addEventListener(delegateType, focusMappedHandler);
            } else {
              doc.addEventListener(type, focusMappedHandler, true);
            }
          }
          dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
          if (!attaches) {
            if (document2.documentMode) {
              this.removeEventListener(delegateType, focusMappedHandler);
            } else {
              doc.removeEventListener(type, focusMappedHandler, true);
            }
            dataPriv.remove(dataHolder, delegateType);
          } else {
            dataPriv.set(dataHolder, delegateType, attaches);
          }
        }
      };
    });
    jQuery2.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery2.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
          if (!related || related !== target && !jQuery2.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        }
      };
    });
    jQuery2.fn.extend({
      on: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn);
      },
      one: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn, 1);
      },
      off: function(types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) {
          handleObj = types.handleObj;
          jQuery2(types.delegateTarget).off(
            handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
            handleObj.selector,
            handleObj.handler
          );
          return this;
        }
        if (typeof types === "object") {
          for (type in types) {
            this.off(type, selector, types[type]);
          }
          return this;
        }
        if (selector === false || typeof selector === "function") {
          fn = selector;
          selector = void 0;
        }
        if (fn === false) {
          fn = returnFalse;
        }
        return this.each(function() {
          jQuery2.event.remove(this, types, fn, selector);
        });
      }
    });
    var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function manipulationTarget(elem, content) {
      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery2(elem).children("tbody")[0] || elem;
      }
      return elem;
    }
    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }
    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }
      return elem;
    }
    function cloneCopyEvent(src, dest) {
      var i, l2, type, pdataOld, udataOld, udataCur, events;
      if (dest.nodeType !== 1) {
        return;
      }
      if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.get(src);
        events = pdataOld.events;
        if (events) {
          dataPriv.remove(dest, "handle events");
          for (type in events) {
            for (i = 0, l2 = events[type].length; i < l2; i++) {
              jQuery2.event.add(dest, type, events[type][i]);
            }
          }
        }
      }
      if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery2.extend({}, udataOld);
        dataUser.set(dest, udataCur);
      }
    }
    function fixInput(src, dest) {
      var nodeName2 = dest.nodeName.toLowerCase();
      if (nodeName2 === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked;
      } else if (nodeName2 === "input" || nodeName2 === "textarea") {
        dest.defaultValue = src.defaultValue;
      }
    }
    function domManip(collection, args, callback, ignored) {
      args = flat(args);
      var fragment, first, scripts, hasScripts, node, doc, i = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], valueIsFunction = isFunction2(value);
      if (valueIsFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
        return collection.each(function(index) {
          var self2 = collection.eq(index);
          if (valueIsFunction) {
            args[0] = value.call(this, index, self2.html());
          }
          domManip(self2, args, callback, ignored);
        });
      }
      if (l2) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first || ignored) {
          scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i < l2; i++) {
            node = fragment;
            if (i !== iNoClone) {
              node = jQuery2.clone(node, true, true);
              if (hasScripts) {
                jQuery2.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(collection[i], node, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery2.map(scripts, restoreScript);
            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];
              if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                if (node.src && (node.type || "").toLowerCase() !== "module") {
                  if (jQuery2._evalUrl && !node.noModule) {
                    jQuery2._evalUrl(node.src, {
                      nonce: node.nonce || node.getAttribute("nonce")
                    }, doc);
                  }
                } else {
                  DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                }
              }
            }
          }
        }
      }
      return collection;
    }
    function remove(elem, selector, keepData) {
      var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
      for (; (node = nodes[i]) != null; i++) {
        if (!keepData && node.nodeType === 1) {
          jQuery2.cleanData(getAll(node));
        }
        if (node.parentNode) {
          if (keepData && isAttached(node)) {
            setGlobalEval(getAll(node, "script"));
          }
          node.parentNode.removeChild(node);
        }
      }
      return elem;
    }
    jQuery2.extend({
      htmlPrefilter: function(html) {
        return html;
      },
      clone: function(elem, dataAndEvents, deepDataAndEvents) {
        var i, l2, srcElements, destElements, clone2 = elem.cloneNode(true), inPage = isAttached(elem);
        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
          destElements = getAll(clone2);
          srcElements = getAll(elem);
          for (i = 0, l2 = srcElements.length; i < l2; i++) {
            fixInput(srcElements[i], destElements[i]);
          }
        }
        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone2);
            for (i = 0, l2 = srcElements.length; i < l2; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone2);
          }
        }
        destElements = getAll(clone2, "script");
        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }
        return clone2;
      },
      cleanData: function(elems) {
        var data, elem, type, special = jQuery2.event.special, i = 0;
        for (; (elem = elems[i]) !== void 0; i++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery2.event.remove(elem, type);
                  } else {
                    jQuery2.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = void 0;
            }
            if (elem[dataUser.expando]) {
              elem[dataUser.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery2.fn.extend({
      detach: function(selector) {
        return remove(this, selector, true);
      },
      remove: function(selector) {
        return remove(this, selector);
      },
      text: function(value) {
        return access(this, function(value2) {
          return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value2;
            }
          });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty: function() {
        var elem, i = 0;
        for (; (elem = this[i]) != null; i++) {
          if (elem.nodeType === 1) {
            jQuery2.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function() {
          return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function(value) {
        return access(this, function(value2) {
          var elem = this[0] || {}, i = 0, l2 = this.length;
          if (value2 === void 0 && elem.nodeType === 1) {
            return elem.innerHTML;
          }
          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
            value2 = jQuery2.htmlPrefilter(value2);
            try {
              for (; i < l2; i++) {
                elem = this[i] || {};
                if (elem.nodeType === 1) {
                  jQuery2.cleanData(getAll(elem, false));
                  elem.innerHTML = value2;
                }
              }
              elem = 0;
            } catch (e) {
            }
          }
          if (elem) {
            this.empty().append(value2);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function() {
        var ignored = [];
        return domManip(this, arguments, function(elem) {
          var parent = this.parentNode;
          if (jQuery2.inArray(this, ignored) < 0) {
            jQuery2.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem, this);
            }
          }
        }, ignored);
      }
    });
    jQuery2.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name2, original) {
      jQuery2.fn[name2] = function(selector) {
        var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
        for (; i <= last; i++) {
          elems = i === last ? this : this.clone(true);
          jQuery2(insert[i])[original](elems);
          push.apply(ret, elems.get());
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
      var view = elem.ownerDocument.defaultView;
      if (!view || !view.opener) {
        view = window2;
      }
      return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
      var ret, name2, old = {};
      for (name2 in options) {
        old[name2] = elem.style[name2];
        elem.style[name2] = options[name2];
      }
      ret = callback.call(elem);
      for (name2 in options) {
        elem.style[name2] = old[name2];
      }
      return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
      function computeStyleTests() {
        if (!div2) {
          return;
        }
        container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        div2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div2);
        var divStyle = window2.getComputedStyle(div2);
        pixelPositionVal = divStyle.top !== "1%";
        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
        div2.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
        div2.style.position = "absolute";
        scrollboxSizeVal = roundPixelMeasures(div2.offsetWidth / 3) === 12;
        documentElement.removeChild(container);
        div2 = null;
      }
      function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
      }
      var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div2 = document2.createElement("div");
      if (!div2.style) {
        return;
      }
      div2.style.backgroundClip = "content-box";
      div2.cloneNode(true).style.backgroundClip = "";
      support.clearCloneStyle = div2.style.backgroundClip === "content-box";
      jQuery2.extend(support, {
        boxSizingReliable: function() {
          computeStyleTests();
          return boxSizingReliableVal;
        },
        pixelBoxStyles: function() {
          computeStyleTests();
          return pixelBoxStylesVal;
        },
        pixelPosition: function() {
          computeStyleTests();
          return pixelPositionVal;
        },
        reliableMarginLeft: function() {
          computeStyleTests();
          return reliableMarginLeftVal;
        },
        scrollboxSize: function() {
          computeStyleTests();
          return scrollboxSizeVal;
        },
        reliableTrDimensions: function() {
          var table, tr, trChild, trStyle;
          if (reliableTrDimensionsVal == null) {
            table = document2.createElement("table");
            tr = document2.createElement("tr");
            trChild = document2.createElement("div");
            table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
            tr.style.cssText = "box-sizing:content-box;border:1px solid";
            tr.style.height = "1px";
            trChild.style.height = "9px";
            trChild.style.display = "block";
            documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
            trStyle = window2.getComputedStyle(tr);
            reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
            documentElement.removeChild(table);
          }
          return reliableTrDimensionsVal;
        }
      });
    })();
    function curCSS(elem, name2, computed) {
      var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name2), style = elem.style;
      computed = computed || getStyles(elem);
      if (computed) {
        ret = computed.getPropertyValue(name2) || computed[name2];
        if (isCustomProp && ret) {
          ret = ret.replace(rtrimCSS, "$1") || void 0;
        }
        if (ret === "" && !isAttached(elem)) {
          ret = jQuery2.style(elem, name2);
        }
        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name2)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret !== void 0 ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get: function() {
          if (conditionFn()) {
            delete this.get;
            return;
          }
          return (this.get = hookFn).apply(this, arguments);
        }
      };
    }
    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
    function vendorPropName(name2) {
      var capName = name2[0].toUpperCase() + name2.slice(1), i = cssPrefixes.length;
      while (i--) {
        name2 = cssPrefixes[i] + capName;
        if (name2 in emptyStyle) {
          return name2;
        }
      }
    }
    function finalPropName(name2) {
      var final = jQuery2.cssProps[name2] || vendorProps[name2];
      if (final) {
        return final;
      }
      if (name2 in emptyStyle) {
        return name2;
      }
      return vendorProps[name2] = vendorPropName(name2) || name2;
    }
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
      var matches = rcssNum.exec(value);
      return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
      var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i < 4; i += 2) {
        if (box === "margin") {
          marginDelta += jQuery2.css(elem, box + cssExpand[i], true, styles);
        }
        if (!isBorderBox) {
          delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
          if (box !== "padding") {
            delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          } else {
            extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        } else {
          if (box === "content") {
            delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
          }
          if (box !== "margin") {
            delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      }
      if (!isBorderBox && computedVal >= 0) {
        delta += Math.max(0, Math.ceil(
          elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
        )) || 0;
      }
      return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
      var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }
        val = "auto";
      }
      if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
        isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
        valueIsBorderBox = offsetProp in elem;
        if (valueIsBorderBox) {
          val = elem[offsetProp];
        }
      }
      val = parseFloat(val) || 0;
      return val + boxModelAdjustment(
        elem,
        dimension,
        extra || (isBorderBox ? "border" : "content"),
        valueIsBorderBox,
        styles,
        val
      ) + "px";
    }
    jQuery2.extend({
      cssHooks: {
        opacity: {
          get: function(elem, computed) {
            if (computed) {
              var ret = curCSS(elem, "opacity");
              return ret === "" ? "1" : ret;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageSlice: true,
        columnCount: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        scale: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeMiterlimit: true,
        strokeOpacity: true
      },
      cssProps: {},
      style: function(elem, name2, value, extra) {
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
          return;
        }
        var ret, type, hooks, origName = camelCase(name2), isCustomProp = rcustomProp.test(name2), style = elem.style;
        if (!isCustomProp) {
          name2 = finalPropName(origName);
        }
        hooks = jQuery2.cssHooks[name2] || jQuery2.cssHooks[origName];
        if (value !== void 0) {
          type = typeof value;
          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name2, ret);
            type = "number";
          }
          if (value == null || value !== value) {
            return;
          }
          if (type === "number" && !isCustomProp) {
            value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
          }
          if (!support.clearCloneStyle && value === "" && name2.indexOf("background") === 0) {
            style[name2] = "inherit";
          }
          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
            if (isCustomProp) {
              style.setProperty(name2, value);
            } else {
              style[name2] = value;
            }
          }
        } else {
          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
            return ret;
          }
          return style[name2];
        }
      },
      css: function(elem, name2, extra, styles) {
        var val, num, hooks, origName = camelCase(name2), isCustomProp = rcustomProp.test(name2);
        if (!isCustomProp) {
          name2 = finalPropName(origName);
        }
        hooks = jQuery2.cssHooks[name2] || jQuery2.cssHooks[origName];
        if (hooks && "get" in hooks) {
          val = hooks.get(elem, true, extra);
        }
        if (val === void 0) {
          val = curCSS(elem, name2, styles);
        }
        if (val === "normal" && name2 in cssNormalTransform) {
          val = cssNormalTransform[name2];
        }
        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }
        return val;
      }
    });
    jQuery2.each(["height", "width"], function(_i, dimension) {
      jQuery2.cssHooks[dimension] = {
        get: function(elem, computed, extra) {
          if (computed) {
            return rdisplayswap.test(jQuery2.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, dimension, extra);
            }) : getWidthOrHeight(elem, dimension, extra);
          }
        },
        set: function(elem, value, extra) {
          var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
            elem,
            dimension,
            extra,
            isBorderBox,
            styles
          ) : 0;
          if (isBorderBox && scrollboxSizeBuggy) {
            subtract -= Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
            );
          }
          if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
            elem.style[dimension] = value;
            value = jQuery2.css(elem, dimension);
          }
          return setPositiveNumber(elem, value, subtract);
        }
      };
    });
    jQuery2.cssHooks.marginLeft = addGetHookIf(
      support.reliableMarginLeft,
      function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      }
    );
    jQuery2.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix, suffix) {
      jQuery2.cssHooks[prefix + suffix] = {
        expand: function(value) {
          var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
          }
          return expanded;
        }
      };
      if (prefix !== "margin") {
        jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    });
    jQuery2.fn.extend({
      css: function(name2, value) {
        return access(this, function(elem, name3, value2) {
          var styles, len, map = {}, i = 0;
          if (Array.isArray(name3)) {
            styles = getStyles(elem);
            len = name3.length;
            for (; i < len; i++) {
              map[name3[i]] = jQuery2.css(elem, name3[i], false, styles);
            }
            return map;
          }
          return value2 !== void 0 ? jQuery2.style(elem, name3, value2) : jQuery2.css(elem, name3);
        }, name2, value, arguments.length > 1);
      }
    });
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery2.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function(elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery2.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = eased = jQuery2.easing[this.easing](
            percent,
            this.options.duration * percent,
            0,
            1,
            this.options.duration
          );
        } else {
          this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }
        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          }
          result = jQuery2.css(tween.elem, tween.prop, "");
          return !result || result === "auto" ? 0 : result;
        },
        set: function(tween) {
          if (jQuery2.fx.step[tween.prop]) {
            jQuery2.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery2.easing = {
      linear: function(p2) {
        return p2;
      },
      swing: function(p2) {
        return 0.5 - Math.cos(p2 * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery2.fx = Tween.prototype.init;
    jQuery2.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
      if (inProgress) {
        if (document2.hidden === false && window2.requestAnimationFrame) {
          window2.requestAnimationFrame(schedule);
        } else {
          window2.setTimeout(schedule, jQuery2.fx.interval);
        }
        jQuery2.fx.tick();
      }
    }
    function createFxNow() {
      window2.setTimeout(function() {
        fxNow = void 0;
      });
      return fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which, i = 0, attrs = { height: type };
      includeWidth = includeWidth ? 1 : 0;
      for (; i < 4; i += 2 - includeWidth) {
        which = cssExpand[i];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }
      if (includeWidth) {
        attrs.opacity = attrs.width = type;
      }
      return attrs;
    }
    function createTween(value, prop, animation) {
      var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
      for (; index < length; index++) {
        if (tween = collection[index].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
      if (!opts.queue) {
        hooks = jQuery2._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery2.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle = toggle || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== void 0) {
              hidden = true;
            } else {
              continue;
            }
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
        }
      }
      propTween = !jQuery2.isEmptyObject(props);
      if (!propTween && jQuery2.isEmptyObject(orig)) {
        return;
      }
      if (isBox && elem.nodeType === 1) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery2.css(elem, "display");
        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery2.css(elem, "display");
            showHide([elem]);
          }
        }
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery2.css(elem, "float") === "none") {
            if (!propTween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }
            style.display = "inline-block";
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      propTween = false;
      for (prop in orig) {
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
          }
          if (toggle) {
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem]);
            }
            dataPriv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery2.style(elem, prop, orig[prop]);
            }
          });
        }
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;
          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }
    function propFilter(props, specialEasing) {
      var index, name2, easing, value, hooks;
      for (index in props) {
        name2 = camelCase(index);
        easing = specialEasing[name2];
        value = props[index];
        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index] = value[0];
        }
        if (index !== name2) {
          props[name2] = value;
          delete props[index];
        }
        hooks = jQuery2.cssHooks[name2];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name2];
          for (index in value) {
            if (!(index in props)) {
              props[index] = value[index];
              specialEasing[index] = easing;
            }
          }
        } else {
          specialEasing[name2] = easing;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
        for (; index2 < length2; index2++) {
          animation.tweens[index2].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length2) {
          return remaining;
        }
        if (!length2) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }
        deferred.resolveWith(elem, [animation]);
        return false;
      }, animation = deferred.promise({
        elem,
        props: jQuery2.extend({}, properties),
        opts: jQuery2.extend(true, {
          specialEasing: {},
          easing: jQuery2.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = jQuery2.Tween(
            elem,
            animation.opts,
            prop,
            end,
            animation.opts.specialEasing[prop] || animation.opts.easing
          );
          animation.tweens.push(tween);
          return tween;
        },
        stop: function(gotoEnd) {
          var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
          if (isFunction2(result.stop)) {
            jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }
          return result;
        }
      }
      jQuery2.map(props, createTween, animation);
      if (isFunction2(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
      }
      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery2.fx.timer(
        jQuery2.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        })
      );
      return animation;
    }
    jQuery2.Animation = jQuery2.extend(Animation, {
      tweeners: {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function(props, callback) {
        if (isFunction2(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }
        var prop, index = 0, length = props.length;
        for (; index < length; index++) {
          prop = props[index];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery2.speed = function(speed, easing, fn) {
      var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
        complete: fn || !fn && easing || isFunction2(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !isFunction2(easing) && easing
      };
      if (jQuery2.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery2.fx.speeds) {
            opt.duration = jQuery2.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery2.fx.speeds._default;
          }
        }
      }
      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      }
      opt.old = opt.complete;
      opt.complete = function() {
        if (isFunction2(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery2.dequeue(this, opt.queue);
        }
      };
      return opt;
    };
    jQuery2.fn.extend({
      fadeTo: function(speed, to, easing, callback) {
        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
      },
      animate: function(prop, speed, easing, callback) {
        var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
          var anim = Animation(this, jQuery2.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        doAnimation.finish = doAnimation;
        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        if (typeof type !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type;
          type = void 0;
        }
        if (clearQueue) {
          this.queue(type || "fx", []);
        }
        return this.each(function() {
          var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }
          for (index = timers.length; index--; ) {
            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
              timers[index].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index, 1);
            }
          }
          if (dequeue || !gotoEnd) {
            jQuery2.dequeue(this, type);
          }
        });
      },
      finish: function(type) {
        if (type !== false) {
          type = type || "fx";
        }
        return this.each(function() {
          var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
          data.finish = true;
          jQuery2.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          for (index = timers.length; index--; ) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          for (index = 0; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery2.each(["toggle", "show", "hide"], function(_i, name2) {
      var cssFn = jQuery2.fn[name2];
      jQuery2.fn[name2] = function(speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name2, true), speed, easing, callback);
      };
    });
    jQuery2.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(name2, props) {
      jQuery2.fn[name2] = function(speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery2.timers = [];
    jQuery2.fx.tick = function() {
      var timer, i = 0, timers = jQuery2.timers;
      fxNow = Date.now();
      for (; i < timers.length; i++) {
        timer = timers[i];
        if (!timer() && timers[i] === timer) {
          timers.splice(i--, 1);
        }
      }
      if (!timers.length) {
        jQuery2.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery2.fx.timer = function(timer) {
      jQuery2.timers.push(timer);
      jQuery2.fx.start();
    };
    jQuery2.fx.interval = 13;
    jQuery2.fx.start = function() {
      if (inProgress) {
        return;
      }
      inProgress = true;
      schedule();
    };
    jQuery2.fx.stop = function() {
      inProgress = null;
    };
    jQuery2.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    jQuery2.fn.delay = function(time, type) {
      time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function(next, hooks) {
        var timeout = window2.setTimeout(next, time);
        hooks.stop = function() {
          window2.clearTimeout(timeout);
        };
      });
    };
    (function() {
      var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
      input.type = "checkbox";
      support.checkOn = input.value !== "";
      support.optSelected = opt.selected;
      input = document2.createElement("input");
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery2.expr.attrHandle;
    jQuery2.fn.extend({
      attr: function(name2, value) {
        return access(this, jQuery2.attr, name2, value, arguments.length > 1);
      },
      removeAttr: function(name2) {
        return this.each(function() {
          jQuery2.removeAttr(this, name2);
        });
      }
    });
    jQuery2.extend({
      attr: function(elem, name2, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (typeof elem.getAttribute === "undefined") {
          return jQuery2.prop(elem, name2, value);
        }
        if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
          hooks = jQuery2.attrHooks[name2.toLowerCase()] || (jQuery2.expr.match.bool.test(name2) ? boolHook : void 0);
        }
        if (value !== void 0) {
          if (value === null) {
            jQuery2.removeAttr(elem, name2);
            return;
          }
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name2)) !== void 0) {
            return ret;
          }
          elem.setAttribute(name2, value + "");
          return value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name2)) !== null) {
          return ret;
        }
        ret = jQuery2.find.attr(elem, name2);
        return ret == null ? void 0 : ret;
      },
      attrHooks: {
        type: {
          set: function(elem, value) {
            if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
              var val = elem.value;
              elem.setAttribute("type", value);
              if (val) {
                elem.value = val;
              }
              return value;
            }
          }
        }
      },
      removeAttr: function(elem, value) {
        var name2, i = 0, attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && elem.nodeType === 1) {
          while (name2 = attrNames[i++]) {
            elem.removeAttribute(name2);
          }
        }
      }
    });
    boolHook = {
      set: function(elem, value, name2) {
        if (value === false) {
          jQuery2.removeAttr(elem, name2);
        } else {
          elem.setAttribute(name2, name2);
        }
        return name2;
      }
    };
    jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name2) {
      var getter = attrHandle[name2] || jQuery2.find.attr;
      attrHandle[name2] = function(elem, name3, isXML) {
        var ret, handle, lowercaseName = name3.toLowerCase();
        if (!isXML) {
          handle = attrHandle[lowercaseName];
          attrHandle[lowercaseName] = ret;
          ret = getter(elem, name3, isXML) != null ? lowercaseName : null;
          attrHandle[lowercaseName] = handle;
        }
        return ret;
      };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery2.fn.extend({
      prop: function(name2, value) {
        return access(this, jQuery2.prop, name2, value, arguments.length > 1);
      },
      removeProp: function(name2) {
        return this.each(function() {
          delete this[jQuery2.propFix[name2] || name2];
        });
      }
    });
    jQuery2.extend({
      prop: function(elem, name2, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
          name2 = jQuery2.propFix[name2] || name2;
          hooks = jQuery2.propHooks[name2];
        }
        if (value !== void 0) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name2)) !== void 0) {
            return ret;
          }
          return elem[name2] = value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name2)) !== null) {
          return ret;
        }
        return elem[name2];
      },
      propHooks: {
        tabIndex: {
          get: function(elem) {
            var tabindex = jQuery2.find.attr(elem, "tabindex");
            if (tabindex) {
              return parseInt(tabindex, 10);
            }
            if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
              return 0;
            }
            return -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    });
    if (!support.optSelected) {
      jQuery2.propHooks.selected = {
        get: function(elem) {
          var parent = elem.parentNode;
          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
          return null;
        },
        set: function(elem) {
          var parent = elem.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery2.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      jQuery2.propFix[this.toLowerCase()] = this;
    });
    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }
    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }
      return [];
    }
    jQuery2.fn.extend({
      addClass: function(value) {
        var classNames, cur, curValue, className, i, finalValue;
        if (isFunction2(value)) {
          return this.each(function(j) {
            jQuery2(this).addClass(value.call(this, j, getClass(this)));
          });
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (cur.indexOf(" " + className + " ") < 0) {
                  cur += className + " ";
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      removeClass: function(value) {
        var classNames, cur, curValue, className, i, finalValue;
        if (isFunction2(value)) {
          return this.each(function(j) {
            jQuery2(this).removeClass(value.call(this, j, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                while (cur.indexOf(" " + className + " ") > -1) {
                  cur = cur.replace(" " + className + " ", " ");
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      toggleClass: function(value, stateVal) {
        var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
        if (isFunction2(value)) {
          return this.each(function(i2) {
            jQuery2(this).toggleClass(
              value.call(this, i2, getClass(this), stateVal),
              stateVal
            );
          });
        }
        if (typeof stateVal === "boolean" && isValidValue) {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }
        classNames = classesToArray(value);
        return this.each(function() {
          if (isValidValue) {
            self2 = jQuery2(this);
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];
              if (self2.hasClass(className)) {
                self2.removeClass(className);
              } else {
                self2.addClass(className);
              }
            }
          } else if (value === void 0 || type === "boolean") {
            className = getClass(this);
            if (className) {
              dataPriv.set(this, "__className__", className);
            }
            if (this.setAttribute) {
              this.setAttribute(
                "class",
                className || value === false ? "" : dataPriv.get(this, "__className__") || ""
              );
            }
          }
        });
      },
      hasClass: function(selector) {
        var className, elem, i = 0;
        className = " " + selector + " ";
        while (elem = this[i++]) {
          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var rreturn = /\r/g;
    jQuery2.fn.extend({
      val: function(value) {
        var hooks, ret, valueIsFunction, elem = this[0];
        if (!arguments.length) {
          if (elem) {
            hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
              return ret;
            }
            ret = elem.value;
            if (typeof ret === "string") {
              return ret.replace(rreturn, "");
            }
            return ret == null ? "" : ret;
          }
          return;
        }
        valueIsFunction = isFunction2(value);
        return this.each(function(i) {
          var val;
          if (this.nodeType !== 1) {
            return;
          }
          if (valueIsFunction) {
            val = value.call(this, i, jQuery2(this).val());
          } else {
            val = value;
          }
          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery2.map(val, function(value2) {
              return value2 == null ? "" : value2 + "";
            });
          }
          hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
            this.value = val;
          }
        });
      }
    });
    jQuery2.extend({
      valHooks: {
        option: {
          get: function(elem) {
            var val = jQuery2.find.attr(elem, "value");
            return val != null ? val : stripAndCollapse(jQuery2.text(elem));
          }
        },
        select: {
          get: function(elem) {
            var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
            if (index < 0) {
              i = max2;
            } else {
              i = one ? index : 0;
            }
            for (; i < max2; i++) {
              option = options[i];
              if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                value = jQuery2(option).val();
                if (one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set: function(elem, value) {
            var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
            while (i--) {
              option = options[i];
              if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                optionSet = true;
              }
            }
            if (!optionSet) {
              elem.selectedIndex = -1;
            }
            return values;
          }
        }
      }
    });
    jQuery2.each(["radio", "checkbox"], function() {
      jQuery2.valHooks[this] = {
        set: function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        jQuery2.valHooks[this].get = function(elem) {
          return elem.getAttribute("value") === null ? "on" : elem.value;
        };
      }
    });
    var location2 = window2.location;
    var nonce = { guid: Date.now() };
    var rquery = /\?/;
    jQuery2.parseXML = function(data) {
      var xml, parserErrorElem;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        xml = new window2.DOMParser().parseFromString(data, "text/xml");
      } catch (e) {
      }
      parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
      if (!xml || parserErrorElem) {
        jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
          return el.textContent;
        }).join("\n") : data));
      }
      return xml;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
      e.stopPropagation();
    };
    jQuery2.extend(jQuery2.event, {
      trigger: function(event, data, elem, onlyHandlers) {
        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem = elem || document2;
        if (elem.nodeType === 3 || elem.nodeType === 8) {
          return;
        }
        if (rfocusMorph.test(type + jQuery2.event.triggered)) {
          return;
        }
        if (type.indexOf(".") > -1) {
          namespaces = type.split(".");
          type = namespaces.shift();
          namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;
        event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        event.result = void 0;
        if (!event.target) {
          event.target = elem;
        }
        data = data == null ? [event] : jQuery2.makeArray(data, [event]);
        special = jQuery2.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
          return;
        }
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document2)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
          }
        }
        i = 0;
        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i > 1 ? bubbleType : special.bindType || type;
          handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, data);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        event.type = type;
        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
            if (ontype && isFunction2(elem[type]) && !isWindow(elem)) {
              tmp = elem[ontype];
              if (tmp) {
                elem[ontype] = null;
              }
              jQuery2.event.triggered = type;
              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type, stopPropagationCallback);
              }
              elem[type]();
              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type, stopPropagationCallback);
              }
              jQuery2.event.triggered = void 0;
              if (tmp) {
                elem[ontype] = tmp;
              }
            }
          }
        }
        return event.result;
      },
      simulate: function(type, elem, event) {
        var e = jQuery2.extend(
          new jQuery2.Event(),
          event,
          {
            type,
            isSimulated: true
          }
        );
        jQuery2.event.trigger(e, null, elem);
      }
    });
    jQuery2.fn.extend({
      trigger: function(type, data) {
        return this.each(function() {
          jQuery2.event.trigger(type, data, this);
        });
      },
      triggerHandler: function(type, data) {
        var elem = this[0];
        if (elem) {
          return jQuery2.event.trigger(type, data, elem, true);
        }
      }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add2) {
      var name2;
      if (Array.isArray(obj)) {
        jQuery2.each(obj, function(i, v) {
          if (traditional || rbracket.test(prefix)) {
            add2(prefix, v);
          } else {
            buildParams(
              prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
              v,
              traditional,
              add2
            );
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        for (name2 in obj) {
          buildParams(prefix + "[" + name2 + "]", obj[name2], traditional, add2);
        }
      } else {
        add2(prefix, obj);
      }
    }
    jQuery2.param = function(a, traditional) {
      var prefix, s = [], add2 = function(key, valueOrFunction) {
        var value = isFunction2(valueOrFunction) ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };
      if (a == null) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
        jQuery2.each(a, function() {
          add2(this.name, this.value);
        });
      } else {
        for (prefix in a) {
          buildParams(prefix, a[prefix], traditional, add2);
        }
      }
      return s.join("&");
    };
    jQuery2.fn.extend({
      serialize: function() {
        return jQuery2.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery2.prop(this, "elements");
          return elements ? jQuery2.makeArray(elements) : this;
        }).filter(function() {
          var type = this.type;
          return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
        }).map(function(_i, elem) {
          var val = jQuery2(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery2.map(val, function(val2) {
              return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
            });
          }
          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
      }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
    originAnchor.href = location2.href;
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
        if (isFunction2(func)) {
          while (dataType = dataTypes[i++]) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = structure === transports;
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
      for (key in src) {
        if (src[key] !== void 0) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        }
      }
      if (deep) {
        jQuery2.extend(true, target, deep);
      }
      return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === void 0) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            firstDataType = type;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      current = dataTypes.shift();
      while (current) {
        if (s.responseFields[current]) {
          jqXHR[s.responseFields[current]] = response;
        }
        if (!prev && isSuccess && s.dataFilter) {
          response = s.dataFilter(response, s.dataType);
        }
        prev = current;
        current = dataTypes.shift();
        if (current) {
          if (current === "*") {
            current = prev;
          } else if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s.throws) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: response };
    }
    jQuery2.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location2.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location2.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": jQuery2.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      ajax: function(url, options) {
        if (typeof url === "object") {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
          readyState: 0,
          getResponseHeader: function(key) {
            var match;
            if (completed2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = responseHeaders[key.toLowerCase() + " "];
            }
            return match == null ? null : match.join(", ");
          },
          getAllResponseHeaders: function() {
            return completed2 ? responseHeadersString : null;
          },
          setRequestHeader: function(name2, value) {
            if (completed2 == null) {
              name2 = requestHeadersNames[name2.toLowerCase()] = requestHeadersNames[name2.toLowerCase()] || name2;
              requestHeaders[name2] = value;
            }
            return this;
          },
          overrideMimeType: function(type) {
            if (completed2 == null) {
              s.mimeType = type;
            }
            return this;
          },
          statusCode: function(map) {
            var code;
            if (map) {
              if (completed2) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (code in map) {
                  statusCode[code] = [statusCode[code], map[code]];
                }
              }
            }
            return this;
          },
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };
        deferred.promise(jqXHR);
        s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
        s.type = options.method || options.type || s.method || s.type;
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
        if (s.crossDomain == null) {
          urlAnchor = document2.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery2.param(s.data, s.traditional);
        }
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        if (completed2) {
          return jqXHR;
        }
        fireGlobals = jQuery2.event && s.global;
        if (fireGlobals && jQuery2.active++ === 0) {
          jQuery2.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        s.hasContent = !rnoContent.test(s.type);
        cacheURL = s.url.replace(rhash, "");
        if (!s.hasContent) {
          uncached = s.url.slice(cacheURL.length);
          if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
            delete s.data;
          }
          if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
          }
          s.url = cacheURL + uncached;
        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s.data = s.data.replace(r20, "+");
        }
        if (s.ifModified) {
          if (jQuery2.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
          }
          if (jQuery2.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader(
          "Accept",
          s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
        );
        for (i in s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        if (!transport) {
          done(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          }
          if (completed2) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            timeoutTimer = window2.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed2 = false;
            transport.send(requestHeaders, done);
          } catch (e) {
            if (completed2) {
              throw e;
            }
            done(-1, e);
          }
        }
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          if (completed2) {
            return;
          }
          completed2 = true;
          if (timeoutTimer) {
            window2.clearTimeout(timeoutTimer);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          isSuccess = status >= 200 && status < 300 || status === 304;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
            s.converters["text script"] = function() {
            };
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery2.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery2.etag[cacheURL] = modified;
              }
            }
            if (status === 204 || s.type === "HEAD") {
              statusText = "nocontent";
            } else if (status === 304) {
              statusText = "notmodified";
            } else {
              statusText = response.state;
              success = response.data;
              error = response.error;
              isSuccess = !error;
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (fireGlobals) {
            globalEventContext.trigger(
              isSuccess ? "ajaxSuccess" : "ajaxError",
              [jqXHR, s, isSuccess ? success : error]
            );
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery2.active) {
              jQuery2.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
      },
      getJSON: function(url, data, callback) {
        return jQuery2.get(url, data, callback, "json");
      },
      getScript: function(url, callback) {
        return jQuery2.get(url, void 0, callback, "script");
      }
    });
    jQuery2.each(["get", "post"], function(_i, method) {
      jQuery2[method] = function(url, data, callback, type) {
        if (isFunction2(data)) {
          type = type || callback;
          callback = data;
          data = void 0;
        }
        return jQuery2.ajax(jQuery2.extend({
          url,
          type: method,
          dataType: type,
          data,
          success: callback
        }, jQuery2.isPlainObject(url) && url));
      };
    });
    jQuery2.ajaxPrefilter(function(s) {
      var i;
      for (i in s.headers) {
        if (i.toLowerCase() === "content-type") {
          s.contentType = s.headers[i] || "";
        }
      }
    });
    jQuery2._evalUrl = function(url, options, doc) {
      return jQuery2.ajax({
        url,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(response) {
          jQuery2.globalEval(response, options, doc);
        }
      });
    };
    jQuery2.fn.extend({
      wrapAll: function(html) {
        var wrap;
        if (this[0]) {
          if (isFunction2(html)) {
            html = html.call(this[0]);
          }
          wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }
          wrap.map(function() {
            var elem = this;
            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }
            return elem;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(html) {
        if (isFunction2(html)) {
          return this.each(function(i) {
            jQuery2(this).wrapInner(html.call(this, i));
          });
        }
        return this.each(function() {
          var self2 = jQuery2(this), contents = self2.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            self2.append(html);
          }
        });
      },
      wrap: function(html) {
        var htmlIsFunction = isFunction2(html);
        return this.each(function(i) {
          jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
        });
      },
      unwrap: function(selector) {
        this.parent(selector).not("body").each(function() {
          jQuery2(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    jQuery2.expr.pseudos.hidden = function(elem) {
      return !jQuery2.expr.pseudos.visible(elem);
    };
    jQuery2.expr.pseudos.visible = function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery2.ajaxSettings.xhr = function() {
      try {
        return new window2.XMLHttpRequest();
      } catch (e) {
      }
    };
    var xhrSuccessStatus = {
      0: 200,
      1223: 204
    }, xhrSupported = jQuery2.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery2.ajaxTransport(function(options) {
      var callback, errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send: function(headers, complete) {
            var i, xhr = options.xhr();
            xhr.open(
              options.type,
              options.url,
              options.async,
              options.username,
              options.password
            );
            if (options.xhrFields) {
              for (i in options.xhrFields) {
                xhr[i] = options.xhrFields[i];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            for (i in headers) {
              xhr.setRequestHeader(i, headers[i]);
            }
            callback = function(type) {
              return function() {
                if (callback) {
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                  if (type === "abort") {
                    xhr.abort();
                  } else if (type === "error") {
                    if (typeof xhr.status !== "number") {
                      complete(0, "error");
                    } else {
                      complete(
                        xhr.status,
                        xhr.statusText
                      );
                    }
                  } else {
                    complete(
                      xhrSuccessStatus[xhr.status] || xhr.status,
                      xhr.statusText,
                      (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                      xhr.getAllResponseHeaders()
                    );
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
            if (xhr.onabort !== void 0) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  window2.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (e) {
              if (callback) {
                throw e;
              }
            }
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery2.ajaxPrefilter(function(s) {
      if (s.crossDomain) {
        s.contents.script = false;
      }
    });
    jQuery2.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(text) {
          jQuery2.globalEval(text);
          return text;
        }
      }
    });
    jQuery2.ajaxPrefilter("script", function(s) {
      if (s.cache === void 0) {
        s.cache = false;
      }
      if (s.crossDomain) {
        s.type = "GET";
      }
    });
    jQuery2.ajaxTransport("script", function(s) {
      if (s.crossDomain || s.scriptAttrs) {
        var script, callback;
        return {
          send: function(_, complete) {
            script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
              script.remove();
              callback = null;
              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            });
            document2.head.appendChild(script[0]);
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery2.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
        this[callback] = true;
        return callback;
      }
    });
    jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
      if (jsonProp || s.dataTypes[0] === "jsonp") {
        callbackName = s.jsonpCallback = isFunction2(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
        if (jsonProp) {
          s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
          s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        }
        s.converters["script json"] = function() {
          if (!responseContainer) {
            jQuery2.error(callbackName + " was not called");
          }
          return responseContainer[0];
        };
        s.dataTypes[0] = "json";
        overwritten = window2[callbackName];
        window2[callbackName] = function() {
          responseContainer = arguments;
        };
        jqXHR.always(function() {
          if (overwritten === void 0) {
            jQuery2(window2).removeProp(callbackName);
          } else {
            window2[callbackName] = overwritten;
          }
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && isFunction2(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = void 0;
        });
        return "script";
      }
    });
    support.createHTMLDocument = function() {
      var body = document2.implementation.createHTMLDocument("").body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
    }();
    jQuery2.parseHTML = function(data, context, keepScripts) {
      if (typeof data !== "string") {
        return [];
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      var base, parsed, scripts;
      if (!context) {
        if (support.createHTMLDocument) {
          context = document2.implementation.createHTMLDocument("");
          base = context.createElement("base");
          base.href = document2.location.href;
          context.head.appendChild(base);
        } else {
          context = document2;
        }
      }
      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = buildFragment([data], context, scripts);
      if (scripts && scripts.length) {
        jQuery2(scripts).remove();
      }
      return jQuery2.merge([], parsed.childNodes);
    };
    jQuery2.fn.load = function(url, params, callback) {
      var selector, type, response, self2 = this, off = url.indexOf(" ");
      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      }
      if (isFunction2(params)) {
        callback = params;
        params = void 0;
      } else if (params && typeof params === "object") {
        type = "POST";
      }
      if (self2.length > 0) {
        jQuery2.ajax({
          url,
          type: type || "GET",
          dataType: "html",
          data: params
        }).done(function(responseText) {
          response = arguments;
          self2.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(jqXHR, status) {
          self2.each(function() {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }
      return this;
    };
    jQuery2.expr.pseudos.animated = function(elem) {
      return jQuery2.grep(jQuery2.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery2.offset = {
      setOffset: function(elem, options, i) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
        if (position === "static") {
          elem.style.position = "relative";
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery2.css(elem, "top");
        curCSSLeft = jQuery2.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }
        if (isFunction2(options)) {
          options = options.call(elem, i, jQuery2.extend({}, curOffset));
        }
        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(elem, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery2.fn.extend({
      offset: function(options) {
        if (arguments.length) {
          return options === void 0 ? this : this.each(function(i) {
            jQuery2.offset.setOffset(this, options, i);
          });
        }
        var rect, win, elem = this[0];
        if (!elem) {
          return;
        }
        if (!elem.getClientRects().length) {
          return { top: 0, left: 0 };
        }
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      position: function() {
        if (!this[0]) {
          return;
        }
        var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
        if (jQuery2.css(elem, "position") === "fixed") {
          offset = elem.getBoundingClientRect();
        } else {
          offset = this.offset();
          doc = elem.ownerDocument;
          offsetParent = elem.offsetParent || doc.documentElement;
          while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.parentNode;
          }
          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
            parentOffset = jQuery2(offsetParent).offset();
            parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
          }
        }
        return {
          top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
          left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
        };
      },
      offsetParent: function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || documentElement;
        });
      }
    });
    jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top = "pageYOffset" === prop;
      jQuery2.fn[method] = function(val) {
        return access(this, function(elem, method2, val2) {
          var win;
          if (isWindow(elem)) {
            win = elem;
          } else if (elem.nodeType === 9) {
            win = elem.defaultView;
          }
          if (val2 === void 0) {
            return win ? win[prop] : elem[method2];
          }
          if (win) {
            win.scrollTo(
              !top ? val2 : win.pageXOffset,
              top ? val2 : win.pageYOffset
            );
          } else {
            elem[method2] = val2;
          }
        }, method, val, arguments.length);
      };
    });
    jQuery2.each(["top", "left"], function(_i, prop) {
      jQuery2.cssHooks[prop] = addGetHookIf(
        support.pixelPosition,
        function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
          }
        }
      );
    });
    jQuery2.each({ Height: "height", Width: "width" }, function(name2, type) {
      jQuery2.each({
        padding: "inner" + name2,
        content: type,
        "": "outer" + name2
      }, function(defaultExtra, funcName) {
        jQuery2.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem, type2, value2) {
            var doc;
            if (isWindow(elem)) {
              return funcName.indexOf("outer") === 0 ? elem["inner" + name2] : elem.document.documentElement["client" + name2];
            }
            if (elem.nodeType === 9) {
              doc = elem.documentElement;
              return Math.max(
                elem.body["scroll" + name2],
                doc["scroll" + name2],
                elem.body["offset" + name2],
                doc["offset" + name2],
                doc["client" + name2]
              );
            }
            return value2 === void 0 ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery2.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(_i, type) {
      jQuery2.fn[type] = function(fn) {
        return this.on(type, fn);
      };
    });
    jQuery2.fn.extend({
      bind: function(types, data, fn) {
        return this.on(types, null, data, fn);
      },
      unbind: function(types, fn) {
        return this.off(types, null, fn);
      },
      delegate: function(selector, types, data, fn) {
        return this.on(types, selector, data, fn);
      },
      undelegate: function(selector, types, fn) {
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
      },
      hover: function(fnOver, fnOut) {
        return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
      }
    });
    jQuery2.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(_i, name2) {
        jQuery2.fn[name2] = function(data, fn) {
          return arguments.length > 0 ? this.on(name2, null, data, fn) : this.trigger(name2);
        };
      }
    );
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    jQuery2.proxy = function(fn, context) {
      var tmp, args, proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!isFunction2(fn)) {
        return void 0;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
      return proxy;
    };
    jQuery2.holdReady = function(hold) {
      if (hold) {
        jQuery2.readyWait++;
      } else {
        jQuery2.ready(true);
      }
    };
    jQuery2.isArray = Array.isArray;
    jQuery2.parseJSON = JSON.parse;
    jQuery2.nodeName = nodeName;
    jQuery2.isFunction = isFunction2;
    jQuery2.isWindow = isWindow;
    jQuery2.camelCase = camelCase;
    jQuery2.type = toType;
    jQuery2.now = Date.now;
    jQuery2.isNumeric = function(obj) {
      var type = jQuery2.type(obj);
      return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    };
    jQuery2.trim = function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    var _jQuery = window2.jQuery, _$ = window2.$;
    jQuery2.noConflict = function(deep) {
      if (window2.$ === jQuery2) {
        window2.$ = _$;
      }
      if (deep && window2.jQuery === jQuery2) {
        window2.jQuery = _jQuery;
      }
      return jQuery2;
    };
    if (typeof noGlobal === "undefined") {
      window2.jQuery = window2.$ = jQuery2;
    }
    return jQuery2;
  });
})(jquery);
const jQuery = jquery.exports;
/*! DataTables 2.0.3
 * © SpryMedia Ltd - datatables.net/license
 */
var $$9 = jQuery;
var DataTable$1 = function(selector, options) {
  if (DataTable$1.factory(selector, options)) {
    return DataTable$1;
  }
  if (this instanceof DataTable$1) {
    return $$9(selector).DataTable(options);
  } else {
    options = selector;
  }
  var _that = this;
  var emptyInit = options === void 0;
  var len = this.length;
  if (emptyInit) {
    options = {};
  }
  this.api = function() {
    return new _Api(this);
  };
  this.each(function() {
    var o = {};
    var oInit = len > 1 ? _fnExtend(o, options, true) : options;
    var i = 0, iLen;
    var sId = this.getAttribute("id");
    var bInitHandedOff = false;
    var defaults = DataTable$1.defaults;
    var $this = $$9(this);
    if (this.nodeName.toLowerCase() != "table") {
      _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    $$9(this).trigger("options.dt", oInit);
    _fnCompatOpts(defaults);
    _fnCompatCols(defaults.column);
    _fnCamelToHungarian(defaults, defaults, true);
    _fnCamelToHungarian(defaults.column, defaults.column, true);
    _fnCamelToHungarian(defaults, $$9.extend(oInit, $this.data()), true);
    var allSettings = DataTable$1.settings;
    for (i = 0, iLen = allSettings.length; i < iLen; i++) {
      var s = allSettings[i];
      if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
        var bRetrieve = oInit.bRetrieve !== void 0 ? oInit.bRetrieve : defaults.bRetrieve;
        var bDestroy = oInit.bDestroy !== void 0 ? oInit.bDestroy : defaults.bDestroy;
        if (emptyInit || bRetrieve) {
          return s.oInstance;
        } else if (bDestroy) {
          new DataTable$1.Api(s).destroy();
          break;
        } else {
          _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (s.sTableId == this.id) {
        allSettings.splice(i, 1);
        break;
      }
    }
    if (sId === null || sId === "") {
      sId = "DataTables_Table_" + DataTable$1.ext._unique++;
      this.id = sId;
    }
    var oSettings = $$9.extend(true, {}, DataTable$1.models.oSettings, {
      "sDestroyWidth": $this[0].style.width,
      "sInstance": sId,
      "sTableId": sId,
      colgroup: $$9("<colgroup>").prependTo(this),
      fastData: function(row, column, type) {
        return _fnGetCellData(oSettings, row, column, type);
      }
    });
    oSettings.nTable = this;
    oSettings.oInit = oInit;
    allSettings.push(oSettings);
    oSettings.api = new _Api(oSettings);
    oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
    _fnCompatOpts(oInit);
    if (oInit.aLengthMenu && !oInit.iDisplayLength) {
      oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $$9.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0];
    }
    oInit = _fnExtend($$9.extend(true, {}, defaults), oInit);
    _fnMap(oSettings.oFeatures, oInit, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]);
    _fnMap(oSettings, oInit, [
      "ajax",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "iStateDuration",
      "bSortCellsTop",
      "iTabIndex",
      "sDom",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      "caption",
      "layout",
      ["iCookieDuration", "iStateDuration"],
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]);
    _fnMap(oSettings.oScroll, oInit, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]);
    _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
    _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
    _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
    _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
    _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
    _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
    _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
    _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
    _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
    _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
    _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
    oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
    _fnBrowserDetect(oSettings);
    var oClasses = oSettings.oClasses;
    $$9.extend(oClasses, DataTable$1.ext.classes, oInit.oClasses);
    $this.addClass(oClasses.table);
    if (!oSettings.oFeatures.bPaginate) {
      oInit.iDisplayStart = 0;
    }
    if (oSettings.iInitDisplayStart === void 0) {
      oSettings.iInitDisplayStart = oInit.iDisplayStart;
      oSettings._iDisplayStart = oInit.iDisplayStart;
    }
    var oLanguage = oSettings.oLanguage;
    $$9.extend(true, oLanguage, oInit.oLanguage);
    if (oLanguage.sUrl) {
      $$9.ajax({
        dataType: "json",
        url: oLanguage.sUrl,
        success: function(json) {
          _fnCamelToHungarian(defaults.oLanguage, json);
          $$9.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
          _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
          _fnInitialise(oSettings);
        },
        error: function() {
          _fnLog(oSettings, 0, "i18n file loading error", 21);
          _fnInitialise(oSettings);
        }
      });
      bInitHandedOff = true;
    } else {
      _fnCallbackFire(oSettings, null, "i18n", [oSettings]);
    }
    var columnsInit = [];
    var thead = this.getElementsByTagName("thead");
    var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
    if (oInit.aoColumns) {
      columnsInit = oInit.aoColumns;
    } else if (initHeaderLayout.length) {
      for (i = 0, iLen = initHeaderLayout[0].length; i < iLen; i++) {
        columnsInit.push(null);
      }
    }
    for (i = 0, iLen = columnsInit.length; i < iLen; i++) {
      _fnAddColumn(oSettings);
    }
    _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
      _fnColumnOptions(oSettings, iCol, oDef);
    });
    var rowOne = $this.children("tbody").find("tr").eq(0);
    if (rowOne.length) {
      var a = function(cell, name2) {
        return cell.getAttribute("data-" + name2) !== null ? name2 : null;
      };
      $$9(rowOne[0]).children("th, td").each(function(i2, cell) {
        var col = oSettings.aoColumns[i2];
        if (!col) {
          _fnLog(oSettings, 0, "Incorrect column count", 18);
        }
        if (col.mData === i2) {
          var sort = a(cell, "sort") || a(cell, "order");
          var filter = a(cell, "filter") || a(cell, "search");
          if (sort !== null || filter !== null) {
            col.mData = {
              _: i2 + ".display",
              sort: sort !== null ? i2 + ".@data-" + sort : void 0,
              type: sort !== null ? i2 + ".@data-" + sort : void 0,
              filter: filter !== null ? i2 + ".@data-" + filter : void 0
            };
            col._isArrayHost = true;
            _fnColumnOptions(oSettings, i2);
          }
        }
      });
    }
    var features = oSettings.oFeatures;
    var loadedInit = function() {
      if (oInit.aaSorting === void 0) {
        var sorting = oSettings.aaSorting;
        for (i = 0, iLen = sorting.length; i < iLen; i++) {
          sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
        }
      }
      _fnSortingClasses(oSettings);
      _fnCallbackReg(oSettings, "aoDrawCallback", function() {
        if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
          _fnSortingClasses(oSettings);
        }
      });
      var caption = $this.children("caption");
      if (oSettings.caption) {
        if (caption.length === 0) {
          caption = $$9("<caption/>").appendTo($this);
        }
        caption.html(oSettings.caption);
      }
      if (caption.length) {
        caption[0]._captionSide = caption.css("caption-side");
        oSettings.captionNode = caption[0];
      }
      if (thead.length === 0) {
        thead = $$9("<thead/>").appendTo($this);
      }
      oSettings.nTHead = thead[0];
      $$9("tr", thead).addClass(oClasses.thead.row);
      var tbody = $this.children("tbody");
      if (tbody.length === 0) {
        tbody = $$9("<tbody/>").insertAfter(thead);
      }
      oSettings.nTBody = tbody[0];
      var tfoot = $this.children("tfoot");
      if (tfoot.length === 0) {
        tfoot = $$9("<tfoot/>").appendTo($this);
      }
      oSettings.nTFoot = tfoot[0];
      $$9("tr", tfoot).addClass(oClasses.tfoot.row);
      if (oInit.aaData) {
        for (i = 0; i < oInit.aaData.length; i++) {
          _fnAddData(oSettings, oInit.aaData[i]);
        }
      } else if (_fnDataSource(oSettings) == "dom") {
        _fnAddTr(oSettings, $$9(oSettings.nTBody).children("tr"));
      }
      oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
      oSettings.bInitialised = true;
      if (bInitHandedOff === false) {
        _fnInitialise(oSettings);
      }
    };
    _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
    if (oInit.bStateSave) {
      features.bStateSave = true;
      _fnLoadState(oSettings, oInit, loadedInit);
    } else {
      loadedInit();
    }
  });
  _that = null;
  return this;
};
DataTable$1.ext = _ext = {
  buttons: {},
  classes: {},
  builder: "-source-",
  errMode: "alert",
  feature: [],
  features: {},
  search: [],
  selector: {
    cell: [],
    column: [],
    row: []
  },
  legacy: {
    ajax: null
  },
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  order: {},
  type: {
    className: {},
    detect: [],
    render: {},
    search: {},
    order: {}
  },
  _unique: 0,
  fnVersionCheck: DataTable$1.fnVersionCheck,
  iApiIndex: 0,
  sVersion: DataTable$1.version
};
$$9.extend(_ext, {
  afnFiltering: _ext.search,
  aTypes: _ext.type.detect,
  ofnSearch: _ext.type.search,
  oSort: _ext.type.order,
  afnSortData: _ext.order,
  aoFeatures: _ext.feature,
  oStdClasses: _ext.classes,
  oPagination: _ext.pager
});
$$9.extend(DataTable$1.ext.classes, {
  container: "dt-container",
  empty: {
    row: "dt-empty"
  },
  info: {
    container: "dt-info"
  },
  length: {
    container: "dt-length",
    select: "dt-input"
  },
  order: {
    canAsc: "dt-orderable-asc",
    canDesc: "dt-orderable-desc",
    isAsc: "dt-ordering-asc",
    isDesc: "dt-ordering-desc",
    none: "dt-orderable-none",
    position: "sorting_"
  },
  processing: {
    container: "dt-processing"
  },
  scrolling: {
    body: "dt-scroll-body",
    container: "dt-scroll",
    footer: {
      self: "dt-scroll-foot",
      inner: "dt-scroll-footInner"
    },
    header: {
      self: "dt-scroll-head",
      inner: "dt-scroll-headInner"
    }
  },
  search: {
    container: "dt-search",
    input: "dt-input"
  },
  table: "dataTable",
  tbody: {
    cell: "",
    row: ""
  },
  thead: {
    cell: "",
    row: ""
  },
  tfoot: {
    cell: "",
    row: ""
  },
  paging: {
    active: "current",
    button: "dt-paging-button",
    container: "dt-paging",
    disabled: "disabled"
  }
});
var _ext;
var _Api;
var _api_register;
var _api_registerPlural;
var _re_dic = {};
var _re_new_lines = /[\r\n\u2028]/g;
var _re_html = /<.*?>/g;
var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
var _empty = function(d) {
  return !d || d === true || d === "-" ? true : false;
};
var _intVal = function(s) {
  var integer = parseInt(s, 10);
  return !isNaN(integer) && isFinite(s) ? integer : null;
};
var _numToDecimal = function(num, decimalPoint) {
  if (!_re_dic[decimalPoint]) {
    _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
  }
  return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
};
var _isNumber = function(d, decimalPoint, formatted) {
  var type = typeof d;
  var strType = type === "string";
  if (type === "number" || type === "bigint") {
    return true;
  }
  if (_empty(d)) {
    return true;
  }
  if (decimalPoint && strType) {
    d = _numToDecimal(d, decimalPoint);
  }
  if (formatted && strType) {
    d = d.replace(_re_formatted_numeric, "");
  }
  return !isNaN(parseFloat(d)) && isFinite(d);
};
var _isHtml = function(d) {
  return _empty(d) || typeof d === "string";
};
var _htmlNumeric = function(d, decimalPoint, formatted) {
  if (_empty(d)) {
    return true;
  }
  if (typeof d === "string" && d.match(/<(input|select)/i)) {
    return null;
  }
  var html = _isHtml(d);
  return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted) ? true : null;
};
var _pluck = function(a, prop, prop2) {
  var out = [];
  var i = 0, ien = a.length;
  if (prop2 !== void 0) {
    for (; i < ien; i++) {
      if (a[i] && a[i][prop]) {
        out.push(a[i][prop][prop2]);
      }
    }
  } else {
    for (; i < ien; i++) {
      if (a[i]) {
        out.push(a[i][prop]);
      }
    }
  }
  return out;
};
var _pluck_order = function(a, order, prop, prop2) {
  var out = [];
  var i = 0, ien = order.length;
  if (prop2 !== void 0) {
    for (; i < ien; i++) {
      if (a[order[i]][prop]) {
        out.push(a[order[i]][prop][prop2]);
      }
    }
  } else {
    for (; i < ien; i++) {
      if (a[order[i]]) {
        out.push(a[order[i]][prop]);
      }
    }
  }
  return out;
};
var _range = function(len, start) {
  var out = [];
  var end;
  if (start === void 0) {
    start = 0;
    end = len;
  } else {
    end = start;
    start = len;
  }
  for (var i = start; i < end; i++) {
    out.push(i);
  }
  return out;
};
var _removeEmpty = function(a) {
  var out = [];
  for (var i = 0, ien = a.length; i < ien; i++) {
    if (a[i]) {
      out.push(a[i]);
    }
  }
  return out;
};
var _stripHtml = function(d) {
  return d.replace(_re_html, "").replace(/<script/i, "");
};
var _escapeHtml = function(d) {
  if (Array.isArray(d)) {
    d = d.join(",");
  }
  return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
};
var _normalize = function(str, both) {
  if (typeof str !== "string") {
    return str;
  }
  var res = str.normalize("NFD");
  return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res;
};
var _areAllUnique = function(src) {
  if (src.length < 2) {
    return true;
  }
  var sorted = src.slice().sort();
  var last = sorted[0];
  for (var i = 1, ien = sorted.length; i < ien; i++) {
    if (sorted[i] === last) {
      return false;
    }
    last = sorted[i];
  }
  return true;
};
var _unique = function(src) {
  if (Array.from && Set) {
    return Array.from(new Set(src));
  }
  if (_areAllUnique(src)) {
    return src.slice();
  }
  var out = [], val, i, ien = src.length, j, k2 = 0;
  again:
    for (i = 0; i < ien; i++) {
      val = src[i];
      for (j = 0; j < k2; j++) {
        if (out[j] === val) {
          continue again;
        }
      }
      out.push(val);
      k2++;
    }
  return out;
};
var _flatten = function(out, val) {
  if (Array.isArray(val)) {
    for (var i = 0; i < val.length; i++) {
      _flatten(out, val[i]);
    }
  } else {
    out.push(val);
  }
  return out;
};
function _addClass(el, name2) {
  if (name2) {
    name2.split(" ").forEach(function(n3) {
      if (n3) {
        el.classList.add(n3);
      }
    });
  }
}
DataTable$1.util = {
  diacritics: function(mixed, both) {
    var type = typeof mixed;
    if (type !== "function") {
      return _normalize(mixed, both);
    }
    _normalize = mixed;
  },
  debounce: function(fn, timeout) {
    var timer;
    return function() {
      var that = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(that, args);
      }, timeout || 250);
    };
  },
  throttle: function(fn, freq) {
    var frequency = freq !== void 0 ? freq : 200, last, timer;
    return function() {
      var that = this, now = +new Date(), args = arguments;
      if (last && now < last + frequency) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          last = void 0;
          fn.apply(that, args);
        }, frequency);
      } else {
        last = now;
        fn.apply(that, args);
      }
    };
  },
  escapeRegex: function(val) {
    return val.replace(_re_escape_regex, "\\$1");
  },
  set: function(source) {
    if ($$9.isPlainObject(source)) {
      return DataTable$1.util.set(source._);
    } else if (source === null) {
      return function() {
      };
    } else if (typeof source === "function") {
      return function(data, val, meta) {
        source(data, "set", val, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var setData = function(data, val, src) {
        var a = _fnSplitObjNotation(src), b;
        var aLast = a[a.length - 1];
        var arrayNotation, funcNotation, o, innerSrc;
        for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
          if (a[i] === "__proto__" || a[i] === "constructor") {
            throw new Error("Cannot set prototype values");
          }
          arrayNotation = a[i].match(__reArray);
          funcNotation = a[i].match(__reFn);
          if (arrayNotation) {
            a[i] = a[i].replace(__reArray, "");
            data[a[i]] = [];
            b = a.slice();
            b.splice(0, i + 1);
            innerSrc = b.join(".");
            if (Array.isArray(val)) {
              for (var j = 0, jLen = val.length; j < jLen; j++) {
                o = {};
                setData(o, val[j], innerSrc);
                data[a[i]].push(o);
              }
            } else {
              data[a[i]] = val;
            }
            return;
          } else if (funcNotation) {
            a[i] = a[i].replace(__reFn, "");
            data = data[a[i]](val);
          }
          if (data[a[i]] === null || data[a[i]] === void 0) {
            data[a[i]] = {};
          }
          data = data[a[i]];
        }
        if (aLast.match(__reFn)) {
          data = data[aLast.replace(__reFn, "")](val);
        } else {
          data[aLast.replace(__reArray, "")] = val;
        }
      };
      return function(data, val) {
        return setData(data, val, source);
      };
    } else {
      return function(data, val) {
        data[source] = val;
      };
    }
  },
  get: function(source) {
    if ($$9.isPlainObject(source)) {
      var o = {};
      $$9.each(source, function(key, val) {
        if (val) {
          o[key] = DataTable$1.util.get(val);
        }
      });
      return function(data, type, row, meta) {
        var t = o[type] || o._;
        return t !== void 0 ? t(data, type, row, meta) : data;
      };
    } else if (source === null) {
      return function(data) {
        return data;
      };
    } else if (typeof source === "function") {
      return function(data, type, row, meta) {
        return source(data, type, row, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var fetchData = function(data, type, src) {
        var arrayNotation, funcNotation, out, innerSrc;
        if (src !== "") {
          var a = _fnSplitObjNotation(src);
          for (var i = 0, iLen = a.length; i < iLen; i++) {
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);
            if (arrayNotation) {
              a[i] = a[i].replace(__reArray, "");
              if (a[i] !== "") {
                data = data[a[i]];
              }
              out = [];
              a.splice(0, i + 1);
              innerSrc = a.join(".");
              if (Array.isArray(data)) {
                for (var j = 0, jLen = data.length; j < jLen; j++) {
                  out.push(fetchData(data[j], type, innerSrc));
                }
              }
              var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
              data = join === "" ? out : out.join(join);
              break;
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, "");
              data = data[a[i]]();
              continue;
            }
            if (data === null || data[a[i]] === null) {
              return null;
            } else if (data === void 0 || data[a[i]] === void 0) {
              return void 0;
            }
            data = data[a[i]];
          }
        }
        return data;
      };
      return function(data, type) {
        return fetchData(data, type, source);
      };
    } else {
      return function(data) {
        return data[source];
      };
    }
  },
  stripHtml: function(mixed) {
    var type = typeof mixed;
    if (type === "function") {
      _stripHtml = mixed;
      return;
    } else if (type === "string") {
      return _stripHtml(mixed);
    }
    return mixed;
  },
  escapeHtml: function(mixed) {
    var type = typeof mixed;
    if (type === "function") {
      _escapeHtml = mixed;
      return;
    } else if (type === "string" || Array.isArray(mixed)) {
      return _escapeHtml(mixed);
    }
    return mixed;
  },
  unique: _unique
};
function _fnHungarianMap(o) {
  var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
  $$9.each(o, function(key) {
    match = key.match(/^([^A-Z]+?)([A-Z])/);
    if (match && hungarian.indexOf(match[1] + " ") !== -1) {
      newKey = key.replace(match[0], match[2].toLowerCase());
      map[newKey] = key;
      if (match[1] === "o") {
        _fnHungarianMap(o[key]);
      }
    }
  });
  o._hungarianMap = map;
}
function _fnCamelToHungarian(src, user, force) {
  if (!src._hungarianMap) {
    _fnHungarianMap(src);
  }
  var hungarianKey;
  $$9.each(user, function(key) {
    hungarianKey = src._hungarianMap[key];
    if (hungarianKey !== void 0 && (force || user[hungarianKey] === void 0)) {
      if (hungarianKey.charAt(0) === "o") {
        if (!user[hungarianKey]) {
          user[hungarianKey] = {};
        }
        $$9.extend(true, user[hungarianKey], user[key]);
        _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
      } else {
        user[hungarianKey] = user[key];
      }
    }
  });
}
var _fnCompatMap = function(o, knew, old) {
  if (o[knew] !== void 0) {
    o[old] = o[knew];
  }
};
function _fnCompatOpts(init2) {
  _fnCompatMap(init2, "ordering", "bSort");
  _fnCompatMap(init2, "orderMulti", "bSortMulti");
  _fnCompatMap(init2, "orderClasses", "bSortClasses");
  _fnCompatMap(init2, "orderCellsTop", "bSortCellsTop");
  _fnCompatMap(init2, "order", "aaSorting");
  _fnCompatMap(init2, "orderFixed", "aaSortingFixed");
  _fnCompatMap(init2, "paging", "bPaginate");
  _fnCompatMap(init2, "pagingType", "sPaginationType");
  _fnCompatMap(init2, "pageLength", "iDisplayLength");
  _fnCompatMap(init2, "searching", "bFilter");
  if (typeof init2.sScrollX === "boolean") {
    init2.sScrollX = init2.sScrollX ? "100%" : "";
  }
  if (typeof init2.scrollX === "boolean") {
    init2.scrollX = init2.scrollX ? "100%" : "";
  }
  var searchCols = init2.aoSearchCols;
  if (searchCols) {
    for (var i = 0, ien = searchCols.length; i < ien; i++) {
      if (searchCols[i]) {
        _fnCamelToHungarian(DataTable$1.models.oSearch, searchCols[i]);
      }
    }
  }
  if (init2.serverSide && !init2.searchDelay) {
    init2.searchDelay = 400;
  }
}
function _fnCompatCols(init2) {
  _fnCompatMap(init2, "orderable", "bSortable");
  _fnCompatMap(init2, "orderData", "aDataSort");
  _fnCompatMap(init2, "orderSequence", "asSorting");
  _fnCompatMap(init2, "orderDataType", "sortDataType");
  var dataSort = init2.aDataSort;
  if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
    init2.aDataSort = [dataSort];
  }
}
function _fnBrowserDetect(settings) {
  if (!DataTable$1.__browser) {
    var browser = {};
    DataTable$1.__browser = browser;
    var n3 = $$9("<div/>").css({
      position: "fixed",
      top: 0,
      left: -1 * window.pageXOffset,
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append(
      $$9("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(
        $$9("<div/>").css({
          width: "100%",
          height: 10
        })
      )
    ).appendTo("body");
    var outer = n3.children();
    var inner = outer.children();
    browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
    browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
    n3.remove();
  }
  $$9.extend(settings.oBrowser, DataTable$1.__browser);
  settings.oScroll.iBarWidth = DataTable$1.__browser.barWidth;
}
function _fnAddColumn(oSettings) {
  var oDefaults = DataTable$1.defaults.column;
  var iCol = oSettings.aoColumns.length;
  var oCol = $$9.extend({}, DataTable$1.models.oColumn, oDefaults, {
    "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
    "mData": oDefaults.mData ? oDefaults.mData : iCol,
    idx: iCol,
    searchFixed: {},
    colEl: $$9("<col>")
  });
  oSettings.aoColumns.push(oCol);
  var searchCols = oSettings.aoPreSearchCols;
  searchCols[iCol] = $$9.extend({}, DataTable$1.models.oSearch, searchCols[iCol]);
}
function _fnColumnOptions(oSettings, iCol, oOptions) {
  var oCol = oSettings.aoColumns[iCol];
  if (oOptions !== void 0 && oOptions !== null) {
    _fnCompatCols(oOptions);
    _fnCamelToHungarian(DataTable$1.defaults.column, oOptions, true);
    if (oOptions.mDataProp !== void 0 && !oOptions.mData) {
      oOptions.mData = oOptions.mDataProp;
    }
    if (oOptions.sType) {
      oCol._sManualType = oOptions.sType;
    }
    if (oOptions.className && !oOptions.sClass) {
      oOptions.sClass = oOptions.className;
    }
    var origClass = oCol.sClass;
    $$9.extend(oCol, oOptions);
    _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
    if (origClass !== oCol.sClass) {
      oCol.sClass = origClass + " " + oCol.sClass;
    }
    if (oOptions.iDataSort !== void 0) {
      oCol.aDataSort = [oOptions.iDataSort];
    }
    _fnMap(oCol, oOptions, "aDataSort");
  }
  var mDataSrc = oCol.mData;
  var mData = _fnGetObjectDataFn(mDataSrc);
  if (oCol.mRender && Array.isArray(oCol.mRender)) {
    var copy = oCol.mRender.slice();
    var name2 = copy.shift();
    oCol.mRender = DataTable$1.render[name2].apply(window, copy);
  }
  oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
  var attrTest = function(src) {
    return typeof src === "string" && src.indexOf("@") !== -1;
  };
  oCol._bAttrSrc = $$9.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
  oCol._setter = null;
  oCol.fnGetData = function(rowData, type, meta) {
    var innerData = mData(rowData, type, void 0, meta);
    return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData;
  };
  oCol.fnSetData = function(rowData, val, meta) {
    return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
  };
  if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
    oSettings._rowReadObject = true;
  }
  if (!oSettings.oFeatures.bSort) {
    oCol.bSortable = false;
  }
}
function _fnAdjustColumnSizing(settings) {
  _fnCalculateColumnWidths(settings);
  _fnColumnSizes(settings);
  var scroll = settings.oScroll;
  if (scroll.sY !== "" || scroll.sX !== "") {
    _fnScrollDraw(settings);
  }
  _fnCallbackFire(settings, null, "column-sizing", [settings]);
}
function _fnColumnSizes(settings) {
  var cols = settings.aoColumns;
  for (var i = 0; i < cols.length; i++) {
    var width = _fnColumnsSumWidth(settings, [i], false, false);
    cols[i].colEl.css("width", width);
  }
}
function _fnVisibleToColumnIndex(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
}
function _fnColumnIndexToVisible(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  var iPos = aiVis.indexOf(iMatch);
  return iPos !== -1 ? iPos : null;
}
function _fnVisbleColumns(settings) {
  var layout = settings.aoHeader;
  var columns = settings.aoColumns;
  var vis = 0;
  if (layout.length) {
    for (var i = 0, ien = layout[0].length; i < ien; i++) {
      if (columns[i].bVisible && $$9(layout[0][i].cell).css("display") !== "none") {
        vis++;
      }
    }
  }
  return vis;
}
function _fnGetColumns(oSettings, sParam) {
  var a = [];
  oSettings.aoColumns.map(function(val, i) {
    if (val[sParam]) {
      a.push(i);
    }
  });
  return a;
}
function _fnColumnTypes(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var types = DataTable$1.ext.type.detect;
  var i, ien, j, jen, k2, ken;
  var col, detectedType, cache;
  for (i = 0, ien = columns.length; i < ien; i++) {
    col = columns[i];
    cache = [];
    if (!col.sType && col._sManualType) {
      col.sType = col._sManualType;
    } else if (!col.sType) {
      for (j = 0, jen = types.length; j < jen; j++) {
        for (k2 = 0, ken = data.length; k2 < ken; k2++) {
          if (!data[k2]) {
            continue;
          }
          if (cache[k2] === void 0) {
            cache[k2] = _fnGetCellData(settings, k2, i, "type");
          }
          detectedType = types[j](cache[k2], settings);
          if (!detectedType && j !== types.length - 2) {
            break;
          }
          if (detectedType === "html" && !_empty(cache[k2])) {
            break;
          }
        }
        if (detectedType) {
          col.sType = detectedType;
          break;
        }
      }
      if (!col.sType) {
        col.sType = "string";
      }
    }
    var autoClass = _ext.type.className[col.sType];
    if (autoClass) {
      _columnAutoClass(settings.aoHeader, i, autoClass);
      _columnAutoClass(settings.aoFooter, i, autoClass);
    }
    var renderer = _ext.type.render[col.sType];
    if (renderer && !col._render) {
      col._render = DataTable$1.util.get(renderer);
      _columnAutoRender(settings, i);
    }
  }
}
function _columnAutoRender(settings, colIdx) {
  var data = settings.aoData;
  for (var i = 0; i < data.length; i++) {
    if (data[i].nTr) {
      var display = _fnGetCellData(settings, i, colIdx, "display");
      data[i].displayData[colIdx] = display;
      _fnWriteCell(data[i].anCells[colIdx], display);
    }
  }
}
function _columnAutoClass(container, colIdx, className) {
  container.forEach(function(row) {
    if (row[colIdx] && row[colIdx].unique) {
      _addClass(row[colIdx].cell, className);
    }
  });
}
function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn) {
  var i, iLen, j, jLen, k2, kLen, def;
  var columns = oSettings.aoColumns;
  if (aoCols) {
    for (i = 0, iLen = aoCols.length; i < iLen; i++) {
      if (aoCols[i] && aoCols[i].name) {
        columns[i].sName = aoCols[i].name;
      }
    }
  }
  if (aoColDefs) {
    for (i = aoColDefs.length - 1; i >= 0; i--) {
      def = aoColDefs[i];
      var aTargets = def.target !== void 0 ? def.target : def.targets !== void 0 ? def.targets : def.aTargets;
      if (!Array.isArray(aTargets)) {
        aTargets = [aTargets];
      }
      for (j = 0, jLen = aTargets.length; j < jLen; j++) {
        var target = aTargets[j];
        if (typeof target === "number" && target >= 0) {
          while (columns.length <= target) {
            _fnAddColumn(oSettings);
          }
          fn(target, def);
        } else if (typeof target === "number" && target < 0) {
          fn(columns.length + target, def);
        } else if (typeof target === "string") {
          for (k2 = 0, kLen = columns.length; k2 < kLen; k2++) {
            if (target === "_all") {
              fn(k2, def);
            } else if (target.indexOf(":name") !== -1) {
              if (columns[k2].sName === target.replace(":name", "")) {
                fn(k2, def);
              }
            } else {
              headerLayout.forEach(function(row) {
                if (row[k2]) {
                  var cell = $$9(row[k2].cell);
                  if (target.match(/^[a-z][\w-]*$/i)) {
                    target = "." + target;
                  }
                  if (cell.is(target)) {
                    fn(k2, def);
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  if (aoCols) {
    for (i = 0, iLen = aoCols.length; i < iLen; i++) {
      fn(i, aoCols[i]);
    }
  }
}
function _fnColumnsSumWidth(settings, targets, original, incVisible) {
  if (!Array.isArray(targets)) {
    targets = _fnColumnsFromHeader(targets);
  }
  var sum2 = 0;
  var unit;
  var columns = settings.aoColumns;
  for (var i = 0, ien = targets.length; i < ien; i++) {
    var column = columns[targets[i]];
    var definedWidth = original ? column.sWidthOrig : column.sWidth;
    if (!incVisible && column.bVisible === false) {
      continue;
    }
    if (definedWidth === null || definedWidth === void 0) {
      return null;
    } else if (typeof definedWidth === "number") {
      unit = "px";
      sum2 += definedWidth;
    } else {
      var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
      if (matched) {
        sum2 += matched[1] * 1;
        unit = matched.length === 3 ? matched[2] : "px";
      }
    }
  }
  return sum2 + unit;
}
function _fnColumnsFromHeader(cell) {
  var attr = $$9(cell).closest("[data-dt-column]").attr("data-dt-column");
  if (!attr) {
    return [];
  }
  return attr.split(",").map(function(val) {
    return val * 1;
  });
}
function _fnAddData(settings, dataIn, tr, tds) {
  var rowIdx = settings.aoData.length;
  var rowModel = $$9.extend(true, {}, DataTable$1.models.oRow, {
    src: tr ? "dom" : "data",
    idx: rowIdx
  });
  rowModel._aData = dataIn;
  settings.aoData.push(rowModel);
  var columns = settings.aoColumns;
  for (var i = 0, iLen = columns.length; i < iLen; i++) {
    columns[i].sType = null;
  }
  settings.aiDisplayMaster.push(rowIdx);
  var id = settings.rowIdFn(dataIn);
  if (id !== void 0) {
    settings.aIds[id] = rowModel;
  }
  if (tr || !settings.oFeatures.bDeferRender) {
    _fnCreateTr(settings, rowIdx, tr, tds);
  }
  return rowIdx;
}
function _fnAddTr(settings, trs) {
  var row;
  if (!(trs instanceof $$9)) {
    trs = $$9(trs);
  }
  return trs.map(function(i, el) {
    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
  });
}
function _fnGetCellData(settings, rowIdx, colIdx, type) {
  if (type === "search") {
    type = "filter";
  } else if (type === "order") {
    type = "sort";
  }
  var draw = settings.iDraw;
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  var defaultContent = col.sDefaultContent;
  var cellData = col.fnGetData(rowData, type, {
    settings,
    row: rowIdx,
    col: colIdx
  });
  if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
    cellData = cellData.innerHTML;
  }
  if (cellData === void 0) {
    if (settings.iDrawError != draw && defaultContent === null) {
      _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
      settings.iDrawError = draw;
    }
    return defaultContent;
  }
  if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== void 0) {
    cellData = defaultContent;
  } else if (typeof cellData === "function") {
    return cellData.call(rowData);
  }
  if (cellData === null && type === "display") {
    return "";
  }
  if (type === "filter") {
    var fomatters = DataTable$1.ext.type.search;
    if (fomatters[col.sType]) {
      cellData = fomatters[col.sType](cellData);
    }
  }
  return cellData;
}
function _fnSetCellData(settings, rowIdx, colIdx, val) {
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  col.fnSetData(rowData, val, {
    settings,
    row: rowIdx,
    col: colIdx
  });
}
function _fnWriteCell(td, val) {
  if (val && typeof val === "object" && val.nodeName) {
    $$9(td).empty().append(val);
  } else {
    td.innerHTML = val;
  }
}
var __reArray = /\[.*?\]$/;
var __reFn = /\(\)$/;
function _fnSplitObjNotation(str) {
  var parts = str.match(/(\\.|[^.])+/g) || [""];
  return parts.map(function(s) {
    return s.replace(/\\\./g, ".");
  });
}
var _fnGetObjectDataFn = DataTable$1.util.get;
var _fnSetObjectDataFn = DataTable$1.util.set;
function _fnGetDataMaster(settings) {
  return _pluck(settings.aoData, "_aData");
}
function _fnClearTable(settings) {
  settings.aoData.length = 0;
  settings.aiDisplayMaster.length = 0;
  settings.aiDisplay.length = 0;
  settings.aIds = {};
}
function _fnInvalidate(settings, rowIdx, src, colIdx) {
  var row = settings.aoData[rowIdx];
  var i, ien;
  row._aSortData = null;
  row._aFilterData = null;
  row.displayData = null;
  if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
    row._aData = _fnGetRowElements(
      settings,
      row,
      colIdx,
      colIdx === void 0 ? void 0 : row._aData
    ).data;
  } else {
    var cells = row.anCells;
    var display = _fnGetRowDisplay(settings, rowIdx);
    if (cells) {
      if (colIdx !== void 0) {
        _fnWriteCell(cells[colIdx], display[colIdx]);
      } else {
        for (i = 0, ien = cells.length; i < ien; i++) {
          _fnWriteCell(cells[i], display[i]);
        }
      }
    }
  }
  var cols = settings.aoColumns;
  if (colIdx !== void 0) {
    cols[colIdx].sType = null;
    cols[colIdx].maxLenString = null;
  } else {
    for (i = 0, ien = cols.length; i < ien; i++) {
      cols[i].sType = null;
      cols[i].maxLenString = null;
    }
    _fnRowAttributes(settings, row);
  }
}
function _fnGetRowElements(settings, row, colIdx, d) {
  var tds = [], td = row.firstChild, name2, col, i = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
  d = d !== void 0 ? d : objectRead ? {} : [];
  var attr = function(str, td2) {
    if (typeof str === "string") {
      var idx = str.indexOf("@");
      if (idx !== -1) {
        var attr2 = str.substring(idx + 1);
        var setter = _fnSetObjectDataFn(str);
        setter(d, td2.getAttribute(attr2));
      }
    }
  };
  var cellProcess = function(cell) {
    if (colIdx === void 0 || colIdx === i) {
      col = columns[i];
      contents = cell.innerHTML.trim();
      if (col && col._bAttrSrc) {
        var setter = _fnSetObjectDataFn(col.mData._);
        setter(d, contents);
        attr(col.mData.sort, cell);
        attr(col.mData.type, cell);
        attr(col.mData.filter, cell);
      } else {
        if (objectRead) {
          if (!col._setter) {
            col._setter = _fnSetObjectDataFn(col.mData);
          }
          col._setter(d, contents);
        } else {
          d[i] = contents;
        }
      }
    }
    i++;
  };
  if (td) {
    while (td) {
      name2 = td.nodeName.toUpperCase();
      if (name2 == "TD" || name2 == "TH") {
        cellProcess(td);
        tds.push(td);
      }
      td = td.nextSibling;
    }
  } else {
    tds = row.anCells;
    for (var j = 0, jen = tds.length; j < jen; j++) {
      cellProcess(tds[j]);
    }
  }
  var rowNode = row.firstChild ? row : row.nTr;
  if (rowNode) {
    var id = rowNode.getAttribute("id");
    if (id) {
      _fnSetObjectDataFn(settings.rowId)(d, id);
    }
  }
  return {
    data: d,
    cells: tds
  };
}
function _fnGetRowDisplay(settings, rowIdx) {
  let rowModal = settings.aoData[rowIdx];
  let columns = settings.aoColumns;
  if (!rowModal.displayData) {
    rowModal.displayData = [];
    for (var colIdx = 0, len = columns.length; colIdx < len; colIdx++) {
      rowModal.displayData.push(
        _fnGetCellData(settings, rowIdx, colIdx, "display")
      );
    }
  }
  return rowModal.displayData;
}
function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
  var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i, iLen, create2, trClass = oSettings.oClasses.tbody.row;
  if (row.nTr === null) {
    nTr = nTrIn || document.createElement("tr");
    row.nTr = nTr;
    row.anCells = cells;
    _addClass(nTr, trClass);
    nTr._DT_RowIndex = iRow;
    _fnRowAttributes(oSettings, row);
    for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      oCol = oSettings.aoColumns[i];
      create2 = nTrIn && anTds[i] ? false : true;
      nTd = create2 ? document.createElement(oCol.sCellType) : anTds[i];
      if (!nTd) {
        _fnLog(oSettings, 0, "Incorrect column count", 18);
      }
      nTd._DT_CellIndex = {
        row: iRow,
        column: i
      };
      cells.push(nTd);
      var display = _fnGetRowDisplay(oSettings, iRow);
      if (create2 || (oCol.mRender || oCol.mData !== i) && (!$$9.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) {
        _fnWriteCell(nTd, display[i]);
      }
      if (oCol.bVisible && create2) {
        nTr.appendChild(nTd);
      } else if (!oCol.bVisible && !create2) {
        nTd.parentNode.removeChild(nTd);
      }
      if (oCol.fnCreatedCell) {
        oCol.fnCreatedCell.call(
          oSettings.oInstance,
          nTd,
          _fnGetCellData(oSettings, iRow, i),
          rowData,
          iRow,
          i
        );
      }
    }
    _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells]);
  } else {
    _addClass(row.nTr, trClass);
  }
}
function _fnRowAttributes(settings, row) {
  var tr = row.nTr;
  var data = row._aData;
  if (tr) {
    var id = settings.rowIdFn(data);
    if (id) {
      tr.id = id;
    }
    if (data.DT_RowClass) {
      var a = data.DT_RowClass.split(" ");
      row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
      $$9(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
    }
    if (data.DT_RowAttr) {
      $$9(tr).attr(data.DT_RowAttr);
    }
    if (data.DT_RowData) {
      $$9(tr).data(data.DT_RowData);
    }
  }
}
function _fnBuildHead(settings, side) {
  var classes = settings.oClasses;
  var columns = settings.aoColumns;
  var i, ien, row;
  var target = side === "header" ? settings.nTHead : settings.nTFoot;
  var titleProp = side === "header" ? "sTitle" : side;
  if (!target) {
    return;
  }
  if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
    row = $$9("tr", target);
    if (!row.length) {
      row = $$9("<tr/>").appendTo(target);
    }
    if (row.length === 1) {
      var cells = $$9("td, th", row);
      for (i = cells.length, ien = columns.length; i < ien; i++) {
        $$9("<th/>").html(columns[i][titleProp] || "").appendTo(row);
      }
    }
  }
  var detected = _fnDetectHeader(settings, target, true);
  if (side === "header") {
    settings.aoHeader = detected;
  } else {
    settings.aoFooter = detected;
  }
  $$9(target).children("tr").attr("role", "row");
  $$9(target).children("tr").children("th, td").each(function() {
    _fnRenderer(settings, side)(
      settings,
      $$9(this),
      classes
    );
  });
}
function _fnHeaderLayout(settings, source, incColumns) {
  var row, column, cell;
  var local = [];
  var structure = [];
  var columns = settings.aoColumns;
  var columnCount = columns.length;
  var rowspan, colspan;
  if (!source) {
    return;
  }
  if (!incColumns) {
    incColumns = _range(columnCount).filter(function(idx) {
      return columns[idx].bVisible;
    });
  }
  for (row = 0; row < source.length; row++) {
    local[row] = source[row].slice().filter(function(cell2, i) {
      return incColumns.includes(i);
    });
    structure.push([]);
  }
  for (row = 0; row < local.length; row++) {
    for (column = 0; column < local[row].length; column++) {
      rowspan = 1;
      colspan = 1;
      if (structure[row][column] === void 0) {
        cell = local[row][column].cell;
        while (local[row + rowspan] !== void 0 && local[row][column].cell == local[row + rowspan][column].cell) {
          structure[row + rowspan][column] = null;
          rowspan++;
        }
        while (local[row][column + colspan] !== void 0 && local[row][column].cell == local[row][column + colspan].cell) {
          for (var k2 = 0; k2 < rowspan; k2++) {
            structure[row + k2][column + colspan] = null;
          }
          colspan++;
        }
        var titleSpan = $$9("span.dt-column-title", cell);
        structure[row][column] = {
          cell,
          colspan,
          rowspan,
          title: titleSpan.length ? titleSpan.html() : $$9(cell).html()
        };
      }
    }
  }
  return structure;
}
function _fnDrawHead(settings, source) {
  var layout = _fnHeaderLayout(settings, source);
  var tr, n3;
  for (var row = 0; row < source.length; row++) {
    tr = source[row].row;
    if (tr) {
      while (n3 = tr.firstChild) {
        tr.removeChild(n3);
      }
    }
    for (var column = 0; column < layout[row].length; column++) {
      var point = layout[row][column];
      if (point) {
        $$9(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan);
      }
    }
  }
}
function _fnDraw(oSettings, ajaxComplete) {
  _fnStart(oSettings);
  var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
  if (aPreDraw.indexOf(false) !== -1) {
    _fnProcessingDisplay(oSettings, false);
    return;
  }
  var anRows = [];
  var iRowCount = 0;
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var aiDisplay = oSettings.aiDisplay;
  var iDisplayStart = oSettings._iDisplayStart;
  var iDisplayEnd = oSettings.fnDisplayEnd();
  var columns = oSettings.aoColumns;
  var body = $$9(oSettings.nTBody);
  oSettings.bDrawing = true;
  if (!bServerSide) {
    oSettings.iDraw++;
  } else if (!oSettings.bDestroying && !ajaxComplete) {
    if (oSettings.iDraw === 0) {
      body.empty().append(_emptyRow(oSettings));
    }
    _fnAjaxUpdate(oSettings);
    return;
  }
  if (aiDisplay.length !== 0) {
    var iStart = bServerSide ? 0 : iDisplayStart;
    var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
    for (var j = iStart; j < iEnd; j++) {
      var iDataIndex = aiDisplay[j];
      var aoData = oSettings.aoData[iDataIndex];
      if (aoData.nTr === null) {
        _fnCreateTr(oSettings, iDataIndex);
      }
      var nRow = aoData.nTr;
      for (var i = 0; i < columns.length; i++) {
        var col = columns[i];
        var td = aoData.anCells[i];
        _addClass(td, _ext.type.className[col.sType]);
        _addClass(td, col.sClass);
        _addClass(td, oSettings.oClasses.tbody.cell);
      }
      _fnCallbackFire(
        oSettings,
        "aoRowCallback",
        null,
        [nRow, aoData._aData, iRowCount, j, iDataIndex]
      );
      anRows.push(nRow);
      iRowCount++;
    }
  } else {
    anRows[0] = _emptyRow(oSettings);
  }
  _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
    $$9(oSettings.nTHead).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
    $$9(oSettings.nTFoot).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  if (body[0].replaceChildren) {
    body[0].replaceChildren.apply(body[0], anRows);
  } else {
    body.children().detach();
    body.append($$9(anRows));
  }
  $$9(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $$9("tr", oSettings.nTFoot).length === 0);
  _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
  oSettings.bSorted = false;
  oSettings.bFiltered = false;
  oSettings.bDrawing = false;
}
function _fnReDraw(settings, holdPosition, recompute) {
  var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
  if (recompute === void 0 || recompute === true) {
    if (sort) {
      _fnSort(settings);
    }
    if (filter) {
      _fnFilterComplete(settings, settings.oPreviousSearch);
    } else {
      settings.aiDisplay = settings.aiDisplayMaster.slice();
    }
  }
  if (holdPosition !== true) {
    settings._iDisplayStart = 0;
  }
  settings._drawHold = holdPosition;
  _fnDraw(settings);
  settings._drawHold = false;
}
function _emptyRow(settings) {
  var oLang = settings.oLanguage;
  var zero = oLang.sZeroRecords;
  var dataSrc = _fnDataSource(settings);
  if (settings.iDraw < 1 && dataSrc === "ssp" || settings.iDraw <= 1 && dataSrc === "ajax") {
    zero = oLang.sLoadingRecords;
  } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
    zero = oLang.sEmptyTable;
  }
  return $$9("<tr/>").append($$9("<td />", {
    "colSpan": _fnVisbleColumns(settings),
    "class": settings.oClasses.empty.row
  }).html(zero))[0];
}
function _layoutArray(settings, layout, side) {
  var groups = {};
  $$9.each(layout, function(pos, val) {
    if (val === null) {
      return;
    }
    var splitPos = pos.replace(/([A-Z])/g, " $1").split(" ");
    if (!groups[splitPos[0]]) {
      groups[splitPos[0]] = {};
    }
    var align = splitPos.length === 1 ? "full" : splitPos[1].toLowerCase();
    var group = groups[splitPos[0]];
    var groupRun = function(contents, innerVal) {
      if ($$9.isPlainObject(innerVal)) {
        Object.keys(innerVal).map(function(key) {
          contents.push({
            feature: key,
            opts: innerVal[key]
          });
        });
      } else {
        contents.push(innerVal);
      }
    };
    if (!group[align] || !group[align].contents) {
      group[align] = { contents: [] };
    }
    if (Array.isArray(val)) {
      for (var i2 = 0; i2 < val.length; i2++) {
        groupRun(group[align].contents, val[i2]);
      }
    } else {
      groupRun(group[align].contents, val);
    }
    if (!Array.isArray(group[align].contents)) {
      group[align].contents = [group[align].contents];
    }
  });
  var filtered = Object.keys(groups).map(function(pos) {
    if (pos.indexOf(side) !== 0) {
      return null;
    }
    return {
      name: pos,
      val: groups[pos]
    };
  }).filter(function(item) {
    return item !== null;
  });
  filtered.sort(function(a, b) {
    var order1 = a.name.replace(/[^0-9]/g, "") * 1;
    var order2 = b.name.replace(/[^0-9]/g, "") * 1;
    return order2 - order1;
  });
  if (side === "bottom") {
    filtered.reverse();
  }
  var rows = [];
  for (var i = 0, ien = filtered.length; i < ien; i++) {
    if (filtered[i].val.full) {
      rows.push({ full: filtered[i].val.full });
      _layoutResolve(settings, rows[rows.length - 1]);
      delete filtered[i].val.full;
    }
    if (Object.keys(filtered[i].val).length) {
      rows.push(filtered[i].val);
      _layoutResolve(settings, rows[rows.length - 1]);
    }
  }
  return rows;
}
function _layoutResolve(settings, row) {
  var getFeature = function(feature, opts) {
    if (!_ext.features[feature]) {
      _fnLog(settings, 0, "Unknown feature: " + feature);
    }
    return _ext.features[feature].apply(this, [settings, opts]);
  };
  var resolve = function(item) {
    var line = row[item].contents;
    for (var i = 0, ien = line.length; i < ien; i++) {
      if (!line[i]) {
        continue;
      } else if (typeof line[i] === "string") {
        line[i] = getFeature(line[i], null);
      } else if ($$9.isPlainObject(line[i])) {
        line[i] = getFeature(line[i].feature, line[i].opts);
      } else if (typeof line[i].node === "function") {
        line[i] = line[i].node(settings);
      } else if (typeof line[i] === "function") {
        var inst = line[i](settings);
        line[i] = typeof inst.node === "function" ? inst.node() : inst;
      }
    }
  };
  $$9.each(row, function(key) {
    resolve(key);
  });
}
function _fnAddOptionsHtml(settings) {
  var classes = settings.oClasses;
  var table = $$9(settings.nTable);
  var insert = $$9("<div/>").attr({
    id: settings.sTableId + "_wrapper",
    "class": classes.container
  }).insertBefore(table);
  settings.nTableWrapper = insert[0];
  if (settings.sDom) {
    _fnLayoutDom(settings, settings.sDom, insert);
  } else {
    var top = _layoutArray(settings, settings.layout, "top");
    var bottom = _layoutArray(settings, settings.layout, "bottom");
    var renderer = _fnRenderer(settings, "layout");
    top.forEach(function(item) {
      renderer(settings, insert, item);
    });
    renderer(settings, insert, {
      full: {
        table: true,
        contents: [_fnFeatureHtmlTable(settings)]
      }
    });
    bottom.forEach(function(item) {
      renderer(settings, insert, item);
    });
  }
  _processingHtml(settings);
}
function _fnLayoutDom(settings, dom, insert) {
  var parts = dom.match(/(".*?")|('.*?')|./g);
  var featureNode, option, newNode, next, attr;
  for (var i = 0; i < parts.length; i++) {
    featureNode = null;
    option = parts[i];
    if (option == "<") {
      newNode = $$9("<div/>");
      next = parts[i + 1];
      if (next[0] == "'" || next[0] == '"') {
        attr = next.replace(/['"]/g, "");
        var id = "", className;
        if (attr.indexOf(".") != -1) {
          var split = attr.split(".");
          id = split[0];
          className = split[1];
        } else if (attr[0] == "#") {
          id = attr;
        } else {
          className = attr;
        }
        newNode.attr("id", id.substring(1)).addClass(className);
        i++;
      }
      insert.append(newNode);
      insert = newNode;
    } else if (option == ">") {
      insert = insert.parent();
    } else if (option == "t") {
      featureNode = _fnFeatureHtmlTable(settings);
    } else {
      DataTable$1.ext.feature.forEach(function(feature) {
        if (option == feature.cFeature) {
          featureNode = feature.fnInit(settings);
        }
      });
    }
    if (featureNode) {
      insert.append(featureNode);
    }
  }
}
function _fnDetectHeader(settings, thead, write) {
  var columns = settings.aoColumns;
  var rows = $$9(thead).children("tr");
  var row, cell;
  var i, k2, l2, iLen, shifted, column, colspan, rowspan;
  var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
  var layout = [];
  var unique;
  var shift = function(a, i2, j) {
    var k3 = a[i2];
    while (k3[j]) {
      j++;
    }
    return j;
  };
  for (i = 0, iLen = rows.length; i < iLen; i++) {
    layout.push([]);
  }
  for (i = 0, iLen = rows.length; i < iLen; i++) {
    row = rows[i];
    column = 0;
    cell = row.firstChild;
    while (cell) {
      if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
        var cols = [];
        colspan = cell.getAttribute("colspan") * 1;
        rowspan = cell.getAttribute("rowspan") * 1;
        colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
        rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
        shifted = shift(layout, i, column);
        unique = colspan === 1 ? true : false;
        if (write) {
          if (unique) {
            _fnColumnOptions(settings, shifted, $$9(cell).data());
            var columnDef = columns[shifted];
            var width = cell.getAttribute("width") || null;
            var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
            if (t) {
              width = t[1];
            }
            columnDef.sWidthOrig = columnDef.sWidth || width;
            if (isHeader) {
              if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                cell.innerHTML = columnDef.sTitle;
              }
              if (!columnDef.sTitle && unique) {
                columnDef.sTitle = cell.innerHTML.replace(/<.*?>/g, "");
                columnDef.autoTitle = true;
              }
            } else {
              if (columnDef.footer) {
                cell.innerHTML = columnDef.footer;
              }
            }
            if (!columnDef.ariaTitle) {
              columnDef.ariaTitle = $$9(cell).attr("aria-label") || columnDef.sTitle;
            }
            if (columnDef.className) {
              $$9(cell).addClass(columnDef.className);
            }
          }
          if ($$9("span.dt-column-title", cell).length === 0) {
            $$9("<span>").addClass("dt-column-title").append(cell.childNodes).appendTo(cell);
          }
          if (isHeader && $$9("span.dt-column-order", cell).length === 0) {
            $$9("<span>").addClass("dt-column-order").appendTo(cell);
          }
        }
        for (l2 = 0; l2 < colspan; l2++) {
          for (k2 = 0; k2 < rowspan; k2++) {
            layout[i + k2][shifted + l2] = {
              cell,
              unique
            };
            layout[i + k2].row = row;
          }
          cols.push(shifted + l2);
        }
        cell.setAttribute("data-dt-column", _unique(cols).join(","));
      }
      cell = cell.nextSibling;
    }
  }
  return layout;
}
function _fnStart(oSettings) {
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var iInitDisplayStart = oSettings.iInitDisplayStart;
  if (iInitDisplayStart !== void 0 && iInitDisplayStart !== -1) {
    oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
    oSettings.iInitDisplayStart = -1;
  }
}
function _fnBuildAjax(oSettings, data, fn) {
  var ajaxData;
  var ajax = oSettings.ajax;
  var instance = oSettings.oInstance;
  var callback = function(json) {
    var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
    if (json === null || typeof status === "number" && status == 204) {
      json = {};
      _fnAjaxDataSrc(oSettings, json, []);
    }
    var error = json.error || json.sError;
    if (error) {
      _fnLog(oSettings, 0, error);
    }
    oSettings.json = json;
    _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
    fn(json);
  };
  if ($$9.isPlainObject(ajax) && ajax.data) {
    ajaxData = ajax.data;
    var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : ajaxData;
    data = typeof ajaxData === "function" && newData ? newData : $$9.extend(true, data, newData);
    delete ajax.data;
  }
  var baseAjax = {
    "url": typeof ajax === "string" ? ajax : "",
    "data": data,
    "success": callback,
    "dataType": "json",
    "cache": false,
    "type": oSettings.sServerMethod,
    "error": function(xhr, error) {
      var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
      if (ret.indexOf(true) === -1) {
        if (error == "parsererror") {
          _fnLog(oSettings, 0, "Invalid JSON response", 1);
        } else if (xhr.readyState === 4) {
          _fnLog(oSettings, 0, "Ajax error", 7);
        }
      }
      _fnProcessingDisplay(oSettings, false);
    }
  };
  if ($$9.isPlainObject(ajax)) {
    $$9.extend(baseAjax, ajax);
  }
  oSettings.oAjaxData = data;
  _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data, baseAjax], true);
  if (typeof ajax === "function") {
    oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
  } else if (ajax.url === "") {
    var empty = {};
    DataTable$1.util.set(ajax.dataSrc)(empty, []);
    callback(empty);
  } else {
    oSettings.jqXHR = $$9.ajax(baseAjax);
    if (ajaxData) {
      ajax.data = ajaxData;
    }
  }
}
function _fnAjaxUpdate(settings) {
  settings.iDraw++;
  _fnProcessingDisplay(settings, true);
  _fnBuildAjax(
    settings,
    _fnAjaxParameters(settings),
    function(json) {
      _fnAjaxUpdateDraw(settings, json);
    }
  );
}
function _fnAjaxParameters(settings) {
  var columns = settings.aoColumns, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, colData = function(idx, prop) {
    return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop];
  };
  return {
    draw: settings.iDraw,
    columns: columns.map(function(column, i) {
      return {
        data: colData(i, "mData"),
        name: column.sName,
        searchable: column.bSearchable,
        orderable: column.bSortable,
        search: {
          value: preColSearch[i].search,
          regex: preColSearch[i].regex,
          fixed: Object.keys(column.searchFixed).map(function(name2) {
            return {
              name: name2,
              term: column.searchFixed[name2].toString()
            };
          })
        }
      };
    }),
    order: _fnSortFlatten(settings).map(function(val) {
      return {
        column: val.col,
        dir: val.dir,
        name: colData(val.col, "sName")
      };
    }),
    start: settings._iDisplayStart,
    length: features.bPaginate ? settings._iDisplayLength : -1,
    search: {
      value: preSearch.search,
      regex: preSearch.regex,
      fixed: Object.keys(settings.searchFixed).map(function(name2) {
        return {
          name: name2,
          term: settings.searchFixed[name2].toString()
        };
      })
    }
  };
}
function _fnAjaxUpdateDraw(settings, json) {
  var data = _fnAjaxDataSrc(settings, json);
  var draw = _fnAjaxDataSrcParam(settings, "draw", json);
  var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
  var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
  if (draw !== void 0) {
    if (draw * 1 < settings.iDraw) {
      return;
    }
    settings.iDraw = draw * 1;
  }
  if (!data) {
    data = [];
  }
  _fnClearTable(settings);
  settings._iRecordsTotal = parseInt(recordsTotal, 10);
  settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
  for (var i = 0, ien = data.length; i < ien; i++) {
    _fnAddData(settings, data[i]);
  }
  settings.aiDisplay = settings.aiDisplayMaster.slice();
  _fnDraw(settings, true);
  _fnInitComplete(settings);
  _fnProcessingDisplay(settings, false);
}
function _fnAjaxDataSrc(settings, json, write) {
  var dataProp = "data";
  if ($$9.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== void 0) {
    var dataSrc = settings.ajax.dataSrc;
    if (typeof dataSrc === "string" || typeof dataSrc === "function") {
      dataProp = dataSrc;
    } else if (dataSrc.data !== void 0) {
      dataProp = dataSrc.data;
    }
  }
  if (!write) {
    if (dataProp === "data") {
      return json.aaData || json[dataProp];
    }
    return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json;
  }
  _fnSetObjectDataFn(dataProp)(json, write);
}
function _fnAjaxDataSrcParam(settings, param, json) {
  var dataSrc = $$9.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
  if (dataSrc && dataSrc[param]) {
    return _fnGetObjectDataFn(dataSrc[param])(json);
  }
  var old = "";
  if (param === "draw") {
    old = "sEcho";
  } else if (param === "recordsTotal") {
    old = "iTotalRecords";
  } else if (param === "recordsFiltered") {
    old = "iTotalDisplayRecords";
  }
  return json[old] !== void 0 ? json[old] : json[param];
}
function _fnFilterComplete(settings, input) {
  var columnsSearch = settings.aoPreSearchCols;
  _fnColumnTypes(settings);
  if (_fnDataSource(settings) != "ssp") {
    _fnFilterData(settings);
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnFilter(settings.aiDisplay, settings, input.search, input);
    $$9.each(settings.searchFixed, function(name2, term) {
      _fnFilter(settings.aiDisplay, settings, term, {});
    });
    for (var i = 0; i < columnsSearch.length; i++) {
      var col = columnsSearch[i];
      _fnFilter(
        settings.aiDisplay,
        settings,
        col.search,
        col,
        i
      );
      $$9.each(settings.aoColumns[i].searchFixed, function(name2, term) {
        _fnFilter(settings.aiDisplay, settings, term, {}, i);
      });
    }
    _fnFilterCustom(settings);
  }
  settings.bFiltered = true;
  _fnCallbackFire(settings, null, "search", [settings]);
}
function _fnFilterCustom(settings) {
  var filters = DataTable$1.ext.search;
  var displayRows = settings.aiDisplay;
  var row, rowIdx;
  for (var i = 0, ien = filters.length; i < ien; i++) {
    var rows = [];
    for (var j = 0, jen = displayRows.length; j < jen; j++) {
      rowIdx = displayRows[j];
      row = settings.aoData[rowIdx];
      if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
        rows.push(rowIdx);
      }
    }
    displayRows.length = 0;
    displayRows.push.apply(displayRows, rows);
  }
}
function _fnFilter(searchRows, settings, input, options, column) {
  if (input === "") {
    return;
  }
  var i = 0;
  var searchFunc = typeof input === "function" ? input : null;
  var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
  while (i < searchRows.length) {
    var row = settings.aoData[searchRows[i]];
    var data = column === void 0 ? row._sFilterRow : row._aFilterData[column];
    if (searchFunc && !searchFunc(data, row._aData, searchRows[i], column) || rpSearch && !rpSearch.test(data)) {
      searchRows.splice(i, 1);
      i--;
    }
    i++;
  }
}
function _fnFilterCreateSearch(search, inOpts) {
  var not = [];
  var options = $$9.extend({}, {
    boundary: false,
    caseInsensitive: true,
    exact: false,
    regex: false,
    smart: true
  }, inOpts);
  if (typeof search !== "string") {
    search = search.toString();
  }
  search = _normalize(search);
  if (options.exact) {
    return new RegExp(
      "^" + _fnEscapeRegex(search) + "$",
      options.caseInsensitive ? "i" : ""
    );
  }
  search = options.regex ? search : _fnEscapeRegex(search);
  if (options.smart) {
    var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
    var a = parts.map(function(word) {
      var negative = false;
      var m2;
      if (word.charAt(0) === "!") {
        negative = true;
        word = word.substring(1);
      }
      if (word.charAt(0) === '"') {
        m2 = word.match(/^"(.*)"$/);
        word = m2 ? m2[1] : word;
      } else if (word.charAt(0) === "\u201C") {
        m2 = word.match(/^\u201C(.*)\u201D$/);
        word = m2 ? m2[1] : word;
      }
      if (negative) {
        if (word.length > 1) {
          not.push("(?!" + word + ")");
        }
        word = "";
      }
      return word.replace('"', "");
    });
    var match = not.length ? not.join("") : "";
    var boundary = options.boundary ? "\\b" : "";
    search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$";
  }
  return new RegExp(search, options.caseInsensitive ? "i" : "");
}
var _fnEscapeRegex = DataTable$1.util.escapeRegex;
var __filter_div = $$9("<div>")[0];
var __filter_div_textContent = __filter_div.textContent !== void 0;
function _fnFilterData(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var column;
  var j, jen, filterData, cellData, row;
  var wasInvalidated = false;
  for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
    if (!data[rowIdx]) {
      continue;
    }
    row = data[rowIdx];
    if (!row._aFilterData) {
      filterData = [];
      for (j = 0, jen = columns.length; j < jen; j++) {
        column = columns[j];
        if (column.bSearchable) {
          cellData = _fnGetCellData(settings, rowIdx, j, "filter");
          if (cellData === null) {
            cellData = "";
          }
          if (typeof cellData !== "string" && cellData.toString) {
            cellData = cellData.toString();
          }
        } else {
          cellData = "";
        }
        if (cellData.indexOf && cellData.indexOf("&") !== -1) {
          __filter_div.innerHTML = cellData;
          cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
        }
        if (cellData.replace) {
          cellData = cellData.replace(/[\r\n\u2028]/g, "");
        }
        filterData.push(cellData);
      }
      row._aFilterData = filterData;
      row._sFilterRow = filterData.join("  ");
      wasInvalidated = true;
    }
  }
  return wasInvalidated;
}
function _fnInitialise(settings) {
  var i, iAjaxStart = settings.iInitDisplayStart;
  if (!settings.bInitialised) {
    setTimeout(function() {
      _fnInitialise(settings);
    }, 200);
    return;
  }
  _fnBuildHead(settings, "header");
  _fnBuildHead(settings, "footer");
  _fnDrawHead(settings, settings.aoHeader);
  _fnDrawHead(settings, settings.aoFooter);
  _fnAddOptionsHtml(settings);
  _fnSortInit(settings);
  _colGroup(settings);
  _fnProcessingDisplay(settings, true);
  _fnCallbackFire(settings, null, "preInit", [settings], true);
  _fnReDraw(settings);
  var dataSrc = _fnDataSource(settings);
  if (dataSrc != "ssp") {
    if (dataSrc == "ajax") {
      _fnBuildAjax(settings, {}, function(json) {
        var aData = _fnAjaxDataSrc(settings, json);
        for (i = 0; i < aData.length; i++) {
          _fnAddData(settings, aData[i]);
        }
        settings.iInitDisplayStart = iAjaxStart;
        _fnReDraw(settings);
        _fnProcessingDisplay(settings, false);
        _fnInitComplete(settings);
      });
    } else {
      _fnInitComplete(settings);
      _fnProcessingDisplay(settings, false);
    }
  }
}
function _fnInitComplete(settings) {
  if (settings._bInitComplete) {
    return;
  }
  var args = [settings, settings.json];
  settings._bInitComplete = true;
  _fnAdjustColumnSizing(settings);
  _fnCallbackFire(settings, null, "plugin-init", args, true);
  _fnCallbackFire(settings, "aoInitComplete", "init", args, true);
}
function _fnLengthChange(settings, val) {
  var len = parseInt(val, 10);
  settings._iDisplayLength = len;
  _fnLengthOverflow(settings);
  _fnCallbackFire(settings, null, "length", [settings, len]);
}
function _fnPageChange(settings, action, redraw) {
  var start = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
  if (records === 0 || len === -1) {
    start = 0;
  } else if (typeof action === "number") {
    start = action * len;
    if (start > records) {
      start = 0;
    }
  } else if (action == "first") {
    start = 0;
  } else if (action == "previous") {
    start = len >= 0 ? start - len : 0;
    if (start < 0) {
      start = 0;
    }
  } else if (action == "next") {
    if (start + len < records) {
      start += len;
    }
  } else if (action == "last") {
    start = Math.floor((records - 1) / len) * len;
  } else if (action === "ellipsis") {
    return;
  } else {
    _fnLog(settings, 0, "Unknown paging action: " + action, 5);
  }
  var changed = settings._iDisplayStart !== start;
  settings._iDisplayStart = start;
  _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
  if (changed && redraw) {
    _fnDraw(settings);
  }
  return changed;
}
function _processingHtml(settings) {
  var table = settings.nTable;
  if (settings.oFeatures.bProcessing) {
    var n3 = $$9("<div/>", {
      "id": settings.sTableId + "_processing",
      "class": settings.oClasses.processing.container,
      "role": "status"
    }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(table);
    $$9(table).on("processing.dt.DT", function(e, s, show) {
      n3.css("display", show ? "block" : "none");
    });
  }
}
function _fnProcessingDisplay(settings, show) {
  _fnCallbackFire(settings, null, "processing", [settings, show]);
}
function _fnFeatureHtmlTable(settings) {
  var table = $$9(settings.nTable);
  var scroll = settings.oScroll;
  if (scroll.sX === "" && scroll.sY === "") {
    return settings.nTable;
  }
  var scrollX = scroll.sX;
  var scrollY = scroll.sY;
  var classes = settings.oClasses.scrolling;
  var caption = settings.captionNode;
  var captionSide = caption ? caption._captionSide : null;
  var headerClone = $$9(table[0].cloneNode(false));
  var footerClone = $$9(table[0].cloneNode(false));
  var footer = table.children("tfoot");
  var _div = "<div/>";
  var size2 = function(s) {
    return !s ? null : _fnStringToCss(s);
  };
  if (!footer.length) {
    footer = null;
  }
  var scroller = $$9(_div, { "class": classes.container }).append(
    $$9(_div, { "class": classes.header.self }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: scrollX ? size2(scrollX) : "100%"
    }).append(
      $$9(_div, { "class": classes.header.inner }).css({
        "box-sizing": "content-box",
        width: scroll.sXInner || "100%"
      }).append(
        headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(
          table.children("thead")
        )
      )
    )
  ).append(
    $$9(_div, { "class": classes.body }).css({
      position: "relative",
      overflow: "auto",
      width: size2(scrollX)
    }).append(table)
  );
  if (footer) {
    scroller.append(
      $$9(_div, { "class": classes.footer.self }).css({
        overflow: "hidden",
        border: 0,
        width: scrollX ? size2(scrollX) : "100%"
      }).append(
        $$9(_div, { "class": classes.footer.inner }).append(
          footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(
            table.children("tfoot")
          )
        )
      )
    );
  }
  var children = scroller.children();
  var scrollHead = children[0];
  var scrollBody = children[1];
  var scrollFoot = footer ? children[2] : null;
  $$9(scrollBody).on("scroll.DT", function() {
    var scrollLeft = this.scrollLeft;
    scrollHead.scrollLeft = scrollLeft;
    if (footer) {
      scrollFoot.scrollLeft = scrollLeft;
    }
  });
  $$9("th, td", scrollHead).on("focus", function() {
    var scrollLeft = scrollHead.scrollLeft;
    scrollBody.scrollLeft = scrollLeft;
    if (footer) {
      scrollBody.scrollLeft = scrollLeft;
    }
  });
  $$9(scrollBody).css("max-height", scrollY);
  if (!scroll.bCollapse) {
    $$9(scrollBody).css("height", scrollY);
  }
  settings.nScrollHead = scrollHead;
  settings.nScrollBody = scrollBody;
  settings.nScrollFoot = scrollFoot;
  settings.aoDrawCallback.push(_fnScrollDraw);
  return scroller[0];
}
function _fnScrollDraw(settings) {
  var scroll = settings.oScroll, barWidth = scroll.iBarWidth, divHeader = $$9(settings.nScrollHead), divHeaderInner = divHeader.children("div"), divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $$9(divBodyEl), divFooter = $$9(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $$9(settings.nTHead), table = $$9(settings.nTable), footer = settings.nTFoot && $$9("th, td", settings.nTFoot).length ? $$9(settings.nTFoot) : null, browser = settings.oBrowser, headerCopy, footerCopy;
  var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
  if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== void 0) {
    settings.scrollBarVis = scrollBarVis;
    _fnAdjustColumnSizing(settings);
    return;
  } else {
    settings.scrollBarVis = scrollBarVis;
  }
  table.children("thead, tfoot").remove();
  headerCopy = header.clone().prependTo(table);
  headerCopy.find("th, td").removeAttr("tabindex");
  headerCopy.find("[id]").removeAttr("id");
  if (footer) {
    footerCopy = footer.clone().prependTo(table);
    footerCopy.find("[id]").removeAttr("id");
  }
  if (settings.aiDisplay.length) {
    var colSizes = table.find("tbody tr").eq(0).find("th, td").map(function() {
      return $$9(this).outerWidth();
    });
    $$9("col", settings.colgroup).each(function(i) {
      var colWidth = this.style.width.replace("px", "");
      if (colWidth !== colSizes[i]) {
        this.style.width = colSizes[i] + "px";
      }
    });
  }
  divHeaderTable.find("colgroup").remove();
  divHeaderTable.append(settings.colgroup.clone());
  if (footer) {
    divFooterTable.find("colgroup").remove();
    divFooterTable.append(settings.colgroup.clone());
  }
  $$9("th, td", headerCopy).each(function() {
    $$9(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  });
  if (footer) {
    $$9("th, td", footerCopy).each(function() {
      $$9(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
    });
  }
  var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
  var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
  var outerWidth = table.outerWidth();
  divHeaderTable.css("width", _fnStringToCss(outerWidth));
  divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  if (footer) {
    divFooterTable.css("width", _fnStringToCss(outerWidth));
    divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  }
  table.children("colgroup").prependTo(table);
  divBody.trigger("scroll");
  if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
    divBodyEl.scrollTop = 0;
  }
}
function _fnCalculateColumnWidths(settings) {
  if (!settings.oFeatures.bAutoWidth) {
    return;
  }
  var table = settings.nTable, columns = settings.aoColumns, scroll = settings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, visibleColumns = _fnGetColumns(settings, "bVisible"), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, i, column, columnIdx;
  var styleWidth = table.style.width;
  if (styleWidth && styleWidth.indexOf("%") !== -1) {
    tableWidthAttr = styleWidth;
  }
  _fnCallbackFire(
    settings,
    null,
    "column-calc",
    { visible: visibleColumns },
    false
  );
  var tmpTable = $$9(table.cloneNode()).css("visibility", "hidden").removeAttr("id");
  tmpTable.append("<tbody>");
  var tr = $$9("<tr/>").appendTo(tmpTable.find("tbody"));
  tmpTable.append($$9(settings.nTHead).clone()).append($$9(settings.nTFoot).clone());
  tmpTable.find("tfoot th, tfoot td").css("width", "");
  tmpTable.find("thead th, thead td").each(function() {
    var width = _fnColumnsSumWidth(settings, this, true, false);
    if (width) {
      this.style.width = width;
      if (scrollX) {
        $$9(this).append($$9("<div/>").css({
          width,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }
    } else {
      this.style.width = "";
    }
  });
  for (i = 0; i < visibleColumns.length; i++) {
    columnIdx = visibleColumns[i];
    column = columns[columnIdx];
    var longest = _fnGetMaxLenString(settings, columnIdx);
    var autoClass = _ext.type.className[column.sType];
    var text = longest + column.sContentPadding;
    var insert = longest.indexOf("<") === -1 ? document.createTextNode(text) : text;
    $$9("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr);
  }
  $$9("[name]", tmpTable).removeAttr("name");
  var holder = $$9("<div/>").css(
    scrollX || scrollY ? {
      position: "absolute",
      top: 0,
      left: 0,
      height: 1,
      right: 0,
      overflow: "hidden"
    } : {}
  ).append(tmpTable).appendTo(tableContainer);
  if (scrollX && scrollXInner) {
    tmpTable.width(scrollXInner);
  } else if (scrollX) {
    tmpTable.css("width", "auto");
    tmpTable.removeAttr("width");
    if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) {
      tmpTable.width(tableContainer.clientWidth);
    }
  } else if (scrollY) {
    tmpTable.width(tableContainer.clientWidth);
  } else if (tableWidthAttr) {
    tmpTable.width(tableWidthAttr);
  }
  var total = 0;
  var bodyCells = tmpTable.find("tbody tr").eq(0).children();
  for (i = 0; i < visibleColumns.length; i++) {
    var bounding = bodyCells[i].getBoundingClientRect().width;
    total += bounding;
    columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding);
  }
  table.style.width = _fnStringToCss(total);
  holder.remove();
  if (tableWidthAttr) {
    table.style.width = _fnStringToCss(tableWidthAttr);
  }
  if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
    var bindResize = function() {
      $$9(window).on("resize.DT-" + settings.sInstance, DataTable$1.util.throttle(function() {
        if (!settings.bDestroying) {
          _fnAdjustColumnSizing(settings);
        }
      }));
    };
    bindResize();
    settings._reszEvt = true;
  }
}
function _fnGetMaxLenString(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  if (!column.maxLenString) {
    var s, max2 = "", maxLen = -1;
    for (var i = 0, ien = settings.aiDisplayMaster.length; i < ien; i++) {
      var rowIdx = settings.aiDisplayMaster[i];
      var data = _fnGetRowDisplay(settings, rowIdx)[colIdx];
      var cellString = data && typeof data === "object" && data.nodeType ? data.innerHTML : data + "";
      cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
      s = _stripHtml(cellString).replace(/&nbsp;/g, " ");
      if (s.length > maxLen) {
        max2 = cellString;
        maxLen = s.length;
      }
    }
    column.maxLenString = max2;
  }
  return column.maxLenString;
}
function _fnStringToCss(s) {
  if (s === null) {
    return "0px";
  }
  if (typeof s == "number") {
    return s < 0 ? "0px" : s + "px";
  }
  return s.match(/\d$/) ? s + "px" : s;
}
function _colGroup(settings) {
  var cols = settings.aoColumns;
  settings.colgroup.empty();
  for (i = 0; i < cols.length; i++) {
    if (cols[i].bVisible) {
      settings.colgroup.append(cols[i].colEl);
    }
  }
}
function _fnSortInit(settings) {
  var target = settings.nTHead;
  var headerRows = target.querySelectorAll("tr");
  var legacyTop = settings.bSortCellsTop;
  var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
  if (legacyTop === true) {
    target = headerRows[0];
  } else if (legacyTop === false) {
    target = headerRows[headerRows.length - 1];
  }
  _fnSortAttachListener(
    settings,
    target,
    target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector
  );
  var order = [];
  _fnSortResolve(settings, order, settings.aaSorting);
  settings.aaSorting = order;
}
function _fnSortAttachListener(settings, node, selector, column, callback) {
  _fnBindAction(node, selector, function(e) {
    var run = false;
    var columns = column === void 0 ? _fnColumnsFromHeader(e.target) : [column];
    if (columns.length) {
      for (var i = 0, ien = columns.length; i < ien; i++) {
        var ret = _fnSortAdd(settings, columns[i], i, e.shiftKey);
        if (ret !== false) {
          run = true;
        }
        if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
          break;
        }
      }
      if (run) {
        _fnProcessingDisplay(settings, true);
        setTimeout(function() {
          _fnSort(settings);
          _fnSortDisplay(settings, settings.aiDisplay);
          _fnProcessingDisplay(settings, false);
          _fnReDraw(settings, false, false);
          if (callback) {
            callback();
          }
        }, 0);
      }
    }
  });
}
function _fnSortDisplay(settings, display) {
  var master = settings.aiDisplayMaster;
  var masterMap = {};
  var map = {};
  var i;
  for (i = 0; i < master.length; i++) {
    masterMap[master[i]] = i;
  }
  for (i = 0; i < display.length; i++) {
    map[display[i]] = masterMap[display[i]];
  }
  display.sort(function(a, b) {
    return map[a] - map[b];
  });
}
function _fnSortResolve(settings, nestedSort, sort) {
  var push = function(a) {
    if ($$9.isPlainObject(a)) {
      if (a.idx !== void 0) {
        nestedSort.push([a.idx, a.dir]);
      } else if (a.name) {
        var cols = _pluck(settings.aoColumns, "sName");
        var idx = cols.indexOf(a.name);
        if (idx !== -1) {
          nestedSort.push([idx, a.dir]);
        }
      }
    } else {
      nestedSort.push(a);
    }
  };
  if ($$9.isPlainObject(sort)) {
    push(sort);
  } else if (sort.length && typeof sort[0] === "number") {
    push(sort);
  } else if (sort.length) {
    for (var z = 0; z < sort.length; z++) {
      push(sort[z]);
    }
  }
}
function _fnSortFlatten(settings) {
  var i, k2, kLen, aSort = [], extSort = DataTable$1.ext.type.order, aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $$9.isPlainObject(fixed), nestedSort = [];
  if (!settings.oFeatures.bSort) {
    return aSort;
  }
  if (Array.isArray(fixed)) {
    _fnSortResolve(settings, nestedSort, fixed);
  }
  if (fixedObj && fixed.pre) {
    _fnSortResolve(settings, nestedSort, fixed.pre);
  }
  _fnSortResolve(settings, nestedSort, settings.aaSorting);
  if (fixedObj && fixed.post) {
    _fnSortResolve(settings, nestedSort, fixed.post);
  }
  for (i = 0; i < nestedSort.length; i++) {
    srcCol = nestedSort[i][0];
    if (aoColumns[srcCol]) {
      aDataSort = aoColumns[srcCol].aDataSort;
      for (k2 = 0, kLen = aDataSort.length; k2 < kLen; k2++) {
        iCol = aDataSort[k2];
        sType = aoColumns[iCol].sType || "string";
        if (nestedSort[i]._idx === void 0) {
          nestedSort[i]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i][1]);
        }
        if (nestedSort[i][1]) {
          aSort.push({
            src: srcCol,
            col: iCol,
            dir: nestedSort[i][1],
            index: nestedSort[i]._idx,
            type: sType,
            formatter: extSort[sType + "-pre"],
            sorter: extSort[sType + "-" + nestedSort[i][1]]
          });
        }
      }
    }
  }
  return aSort;
}
function _fnSort(oSettings, col, dir) {
  var i, ien, iLen, aiOrig = [], extSort = DataTable$1.ext.type.order, aoData = oSettings.aoData, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
  _fnColumnTypes(oSettings);
  if (col !== void 0) {
    var srcCol = oSettings.aoColumns[col];
    aSort = [{
      src: col,
      col,
      dir,
      index: 0,
      type: srcCol.sType,
      formatter: extSort[srcCol.sType + "-pre"],
      sorter: extSort[srcCol.sType + "-" + dir]
    }];
    displayMaster = displayMaster.slice();
  } else {
    aSort = _fnSortFlatten(oSettings);
  }
  for (i = 0, ien = aSort.length; i < ien; i++) {
    sortCol = aSort[i];
    _fnSortData(oSettings, sortCol.col);
  }
  if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
    for (i = 0, iLen = displayMaster.length; i < iLen; i++) {
      aiOrig[i] = i;
    }
    if (aSort.length && aSort[0].dir === "desc") {
      aiOrig.reverse();
    }
    displayMaster.sort(function(a, b) {
      var x, y, k2, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
      for (k2 = 0; k2 < len; k2++) {
        sort = aSort[k2];
        x = dataA[sort.col];
        y = dataB[sort.col];
        if (sort.sorter) {
          test = sort.sorter(x, y);
          if (test !== 0) {
            return test;
          }
        } else {
          test = x < y ? -1 : x > y ? 1 : 0;
          if (test !== 0) {
            return sort.dir === "asc" ? test : -test;
          }
        }
      }
      x = aiOrig[a];
      y = aiOrig[b];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else if (aSort.length === 0) {
    displayMaster.sort(function(x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  if (col === void 0) {
    oSettings.bSorted = true;
    _fnCallbackFire(oSettings, null, "order", [oSettings, aSort]);
  }
  return displayMaster;
}
function _fnSortAdd(settings, colIdx, addIndex, shift) {
  var col = settings.aoColumns[colIdx];
  var sorting = settings.aaSorting;
  var asSorting = col.asSorting;
  var nextSortIdx;
  var next = function(a, overflow) {
    var idx = a._idx;
    if (idx === void 0) {
      idx = asSorting.indexOf(a[1]);
    }
    return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
  };
  if (!col.bSortable) {
    return false;
  }
  if (typeof sorting[0] === "number") {
    sorting = settings.aaSorting = [sorting];
  }
  if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
    var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
    if (sortIdx !== -1) {
      nextSortIdx = next(sorting[sortIdx], true);
      if (nextSortIdx === null && sorting.length === 1) {
        nextSortIdx = 0;
      }
      if (nextSortIdx === null) {
        sorting.splice(sortIdx, 1);
      } else {
        sorting[sortIdx][1] = asSorting[nextSortIdx];
        sorting[sortIdx]._idx = nextSortIdx;
      }
    } else if (shift) {
      sorting.push([colIdx, asSorting[0], 0]);
      sorting[sorting.length - 1]._idx = 0;
    } else {
      sorting.push([colIdx, sorting[0][1], 0]);
      sorting[sorting.length - 1]._idx = 0;
    }
  } else if (sorting.length && sorting[0][0] == colIdx) {
    nextSortIdx = next(sorting[0]);
    sorting.length = 1;
    sorting[0][1] = asSorting[nextSortIdx];
    sorting[0]._idx = nextSortIdx;
  } else {
    sorting.length = 0;
    sorting.push([colIdx, asSorting[0]]);
    sorting[0]._idx = 0;
  }
}
function _fnSortingClasses(settings) {
  var oldSort = settings.aLastSort;
  var sortClass = settings.oClasses.order.position;
  var sort = _fnSortFlatten(settings);
  var features = settings.oFeatures;
  var i, ien, colIdx;
  if (features.bSort && features.bSortClasses) {
    for (i = 0, ien = oldSort.length; i < ien; i++) {
      colIdx = oldSort[i].src;
      $$9(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
    }
    for (i = 0, ien = sort.length; i < ien; i++) {
      colIdx = sort[i].src;
      $$9(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
    }
  }
  settings.aLastSort = sort;
}
function _fnSortData(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  var customSort = DataTable$1.ext.order[column.sSortDataType];
  var customData;
  if (customSort) {
    customData = customSort.call(
      settings.oInstance,
      settings,
      colIdx,
      _fnColumnIndexToVisible(settings, colIdx)
    );
  }
  var row, cellData;
  var formatter = DataTable$1.ext.type.order[column.sType + "-pre"];
  var data = settings.aoData;
  for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
    if (!data[rowIdx]) {
      continue;
    }
    row = data[rowIdx];
    if (!row._aSortData) {
      row._aSortData = [];
    }
    if (!row._aSortData[colIdx] || customSort) {
      cellData = customSort ? customData[rowIdx] : _fnGetCellData(settings, rowIdx, colIdx, "sort");
      row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData;
    }
  }
}
function _fnSaveState(settings) {
  if (settings._bLoadingState) {
    return;
  }
  var state = {
    time: +new Date(),
    start: settings._iDisplayStart,
    length: settings._iDisplayLength,
    order: $$9.extend(true, [], settings.aaSorting),
    search: $$9.extend({}, settings.oPreviousSearch),
    columns: settings.aoColumns.map(function(col, i) {
      return {
        visible: col.bVisible,
        search: $$9.extend({}, settings.aoPreSearchCols[i])
      };
    })
  };
  settings.oSavedState = state;
  _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
  if (settings.oFeatures.bStateSave && !settings.bDestroying) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
  }
}
function _fnLoadState(settings, init2, callback) {
  if (!settings.oFeatures.bStateSave) {
    callback();
    return;
  }
  var loaded = function(state2) {
    _fnImplementState(settings, state2, callback);
  };
  var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
  if (state !== void 0) {
    _fnImplementState(settings, state, callback);
  }
  return true;
}
function _fnImplementState(settings, s, callback) {
  var i, ien;
  var columns = settings.aoColumns;
  settings._bLoadingState = true;
  var api = settings._bInitComplete ? new DataTable$1.Api(settings) : null;
  if (!s || !s.time) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var duration = settings.iStateDuration;
  if (duration > 0 && s.time < +new Date() - duration * 1e3) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
  if (abStateLoad.indexOf(false) !== -1) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  if (s.columns && columns.length !== s.columns.length) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  settings.oLoadedState = $$9.extend(true, {}, s);
  _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
  if (s.length !== void 0) {
    if (api) {
      api.page.len(s.length);
    } else {
      settings._iDisplayLength = s.length;
    }
  }
  if (s.start !== void 0) {
    if (api === null) {
      settings._iDisplayStart = s.start;
      settings.iInitDisplayStart = s.start;
    } else {
      _fnPageChange(settings, s.start / settings._iDisplayLength);
    }
  }
  if (s.order !== void 0) {
    settings.aaSorting = [];
    $$9.each(s.order, function(i2, col2) {
      settings.aaSorting.push(
        col2[0] >= columns.length ? [0, col2[1]] : col2
      );
    });
  }
  if (s.search !== void 0) {
    $$9.extend(settings.oPreviousSearch, s.search);
  }
  if (s.columns) {
    for (i = 0, ien = s.columns.length; i < ien; i++) {
      var col = s.columns[i];
      if (col.visible !== void 0) {
        if (api) {
          api.column(i).visible(col.visible, false);
        } else {
          columns[i].bVisible = col.visible;
        }
      }
      if (col.search !== void 0) {
        $$9.extend(settings.aoPreSearchCols[i], col.search);
      }
    }
    if (api) {
      api.columns.adjust();
    }
  }
  settings._bLoadingState = false;
  _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
  callback();
}
function _fnLog(settings, level, msg, tn) {
  msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
  if (tn) {
    msg += ". For more information about this error, please see https://datatables.net/tn/" + tn;
  }
  if (!level) {
    var ext = DataTable$1.ext;
    var type = ext.sErrMode || ext.errMode;
    if (settings) {
      _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true);
    }
    if (type == "alert") {
      alert(msg);
    } else if (type == "throw") {
      throw new Error(msg);
    } else if (typeof type == "function") {
      type(settings, tn, msg);
    }
  } else if (window.console && console.log) {
    console.log(msg);
  }
}
function _fnMap(ret, src, name2, mappedName) {
  if (Array.isArray(name2)) {
    $$9.each(name2, function(i, val) {
      if (Array.isArray(val)) {
        _fnMap(ret, src, val[0], val[1]);
      } else {
        _fnMap(ret, src, val);
      }
    });
    return;
  }
  if (mappedName === void 0) {
    mappedName = name2;
  }
  if (src[name2] !== void 0) {
    ret[mappedName] = src[name2];
  }
}
function _fnExtend(out, extender, breakRefs) {
  var val;
  for (var prop in extender) {
    if (Object.prototype.hasOwnProperty.call(extender, prop)) {
      val = extender[prop];
      if ($$9.isPlainObject(val)) {
        if (!$$9.isPlainObject(out[prop])) {
          out[prop] = {};
        }
        $$9.extend(true, out[prop], val);
      } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
        out[prop] = val.slice();
      } else {
        out[prop] = val;
      }
    }
  }
  return out;
}
function _fnBindAction(n3, selector, fn) {
  $$9(n3).on("click.DT", selector, function(e) {
    fn(e);
  }).on("keypress.DT", selector, function(e) {
    if (e.which === 13) {
      e.preventDefault();
      fn(e);
    }
  }).on("selectstart.DT", selector, function() {
    return false;
  });
}
function _fnCallbackReg(settings, store, fn) {
  if (fn) {
    settings[store].push(fn);
  }
}
function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
  var ret = [];
  if (callbackArr) {
    ret = settings[callbackArr].slice().reverse().map(function(val) {
      return val.apply(settings.oInstance, args);
    });
  }
  if (eventName !== null) {
    var e = $$9.Event(eventName + ".dt");
    var table = $$9(settings.nTable);
    e.dt = settings.api;
    table[bubbles ? "trigger" : "triggerHandler"](e, args);
    if (bubbles && table.parents("body").length === 0) {
      $$9("body").trigger(e, args);
    }
    ret.push(e.result);
  }
  return ret;
}
function _fnLengthOverflow(settings) {
  var start = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
  if (start >= end) {
    start = end - len;
  }
  start -= start % len;
  if (len === -1 || start < 0) {
    start = 0;
  }
  settings._iDisplayStart = start;
}
function _fnRenderer(settings, type) {
  var renderer = settings.renderer;
  var host = DataTable$1.ext.renderer[type];
  if ($$9.isPlainObject(renderer) && renderer[type]) {
    return host[renderer[type]] || host._;
  } else if (typeof renderer === "string") {
    return host[renderer] || host._;
  }
  return host._;
}
function _fnDataSource(settings) {
  if (settings.oFeatures.bServerSide) {
    return "ssp";
  } else if (settings.ajax) {
    return "ajax";
  }
  return "dom";
}
function _fnMacros(settings, str, entries) {
  var formatter = settings.fnFormatNumber, start = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), max2 = settings.fnRecordsTotal(), all = len === -1;
  return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max2)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max2)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis));
}
var __apiStruct = [];
var __arrayProto = Array.prototype;
var _toSettings = function(mixed) {
  var idx, jq;
  var settings = DataTable$1.settings;
  var tables = _pluck(settings, "nTable");
  if (!mixed) {
    return [];
  } else if (mixed.nTable && mixed.oFeatures) {
    return [mixed];
  } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
    idx = tables.indexOf(mixed);
    return idx !== -1 ? [settings[idx]] : null;
  } else if (mixed && typeof mixed.settings === "function") {
    return mixed.settings().toArray();
  } else if (typeof mixed === "string") {
    jq = $$9(mixed).get();
  } else if (mixed instanceof $$9) {
    jq = mixed.get();
  }
  if (jq) {
    return settings.filter(function(v, idx2) {
      return jq.includes(tables[idx2]);
    });
  }
};
_Api = function(context, data) {
  if (!(this instanceof _Api)) {
    return new _Api(context, data);
  }
  var settings = [];
  var ctxSettings = function(o) {
    var a = _toSettings(o);
    if (a) {
      settings.push.apply(settings, a);
    }
  };
  if (Array.isArray(context)) {
    for (var i = 0, ien = context.length; i < ien; i++) {
      ctxSettings(context[i]);
    }
  } else {
    ctxSettings(context);
  }
  this.context = settings.length > 1 ? _unique(settings) : settings;
  if (data) {
    this.push.apply(this, data);
  }
  this.selector = {
    rows: null,
    cols: null,
    opts: null
  };
  _Api.extend(this, this, __apiStruct);
};
DataTable$1.Api = _Api;
$$9.extend(_Api.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  context: [],
  count: function() {
    return this.flatten().length;
  },
  each: function(fn) {
    for (var i = 0, ien = this.length; i < ien; i++) {
      fn.call(this, this[i], i, this);
    }
    return this;
  },
  eq: function(idx) {
    var ctx = this.context;
    return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
  },
  filter: function(fn) {
    var a = __arrayProto.filter.call(this, fn, this);
    return new _Api(this.context, a);
  },
  flatten: function() {
    var a = [];
    return new _Api(this.context, a.concat.apply(a, this.toArray()));
  },
  get: function(idx) {
    return this[idx];
  },
  join: __arrayProto.join,
  includes: function(find) {
    return this.indexOf(find) === -1 ? false : true;
  },
  indexOf: __arrayProto.indexOf,
  iterator: function(flatten2, type, fn, alwaysNew) {
    var a = [], ret, i, ien, j, jen, context = this.context, rows, items, item, selector = this.selector;
    if (typeof flatten2 === "string") {
      alwaysNew = fn;
      fn = type;
      type = flatten2;
      flatten2 = false;
    }
    for (i = 0, ien = context.length; i < ien; i++) {
      var apiInst = new _Api(context[i]);
      if (type === "table") {
        ret = fn.call(apiInst, context[i], i);
        if (ret !== void 0) {
          a.push(ret);
        }
      } else if (type === "columns" || type === "rows") {
        ret = fn.call(apiInst, context[i], this[i], i);
        if (ret !== void 0) {
          a.push(ret);
        }
      } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
        items = this[i];
        if (type === "column-rows") {
          rows = _selector_row_indexes(context[i], selector.opts);
        }
        for (j = 0, jen = items.length; j < jen; j++) {
          item = items[j];
          if (type === "cell") {
            ret = fn.call(apiInst, context[i], item.row, item.column, i, j);
          } else {
            ret = fn.call(apiInst, context[i], item, i, j, rows);
          }
          if (ret !== void 0) {
            a.push(ret);
          }
        }
      }
    }
    if (a.length || alwaysNew) {
      var api = new _Api(context, flatten2 ? a.concat.apply([], a) : a);
      var apiSelector = api.selector;
      apiSelector.rows = selector.rows;
      apiSelector.cols = selector.cols;
      apiSelector.opts = selector.opts;
      return api;
    }
    return this;
  },
  lastIndexOf: __arrayProto.lastIndexOf,
  length: 0,
  map: function(fn) {
    var a = __arrayProto.map.call(this, fn, this);
    return new _Api(this.context, a);
  },
  pluck: function(prop) {
    var fn = DataTable$1.util.get(prop);
    return this.map(function(el) {
      return fn(el);
    });
  },
  pop: __arrayProto.pop,
  push: __arrayProto.push,
  reduce: __arrayProto.reduce,
  reduceRight: __arrayProto.reduceRight,
  reverse: __arrayProto.reverse,
  selector: null,
  shift: __arrayProto.shift,
  slice: function() {
    return new _Api(this.context, this);
  },
  sort: __arrayProto.sort,
  splice: __arrayProto.splice,
  toArray: function() {
    return __arrayProto.slice.call(this);
  },
  to$: function() {
    return $$9(this);
  },
  toJQuery: function() {
    return $$9(this);
  },
  unique: function() {
    return new _Api(this.context, _unique(this.toArray()));
  },
  unshift: __arrayProto.unshift
});
function _api_scope(scope, fn, struc) {
  return function() {
    var ret = fn.apply(scope || this, arguments);
    _Api.extend(ret, ret, struc.methodExt);
    return ret;
  };
}
function _api_find(src, name2) {
  for (var i = 0, ien = src.length; i < ien; i++) {
    if (src[i].name === name2) {
      return src[i];
    }
  }
  return null;
}
window.__apiStruct = __apiStruct;
_Api.extend = function(scope, obj, ext) {
  if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
    return;
  }
  var i, ien, struct;
  for (i = 0, ien = ext.length; i < ien; i++) {
    struct = ext[i];
    obj[struct.name] = struct.type === "function" ? _api_scope(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
    obj[struct.name].__dt_wrapper = true;
    _Api.extend(scope, obj[struct.name], struct.propExt);
  }
};
_Api.register = _api_register = function(name2, val) {
  if (Array.isArray(name2)) {
    for (var j = 0, jen = name2.length; j < jen; j++) {
      _Api.register(name2[j], val);
    }
    return;
  }
  var i, ien, heir = name2.split("."), struct = __apiStruct, key, method;
  for (i = 0, ien = heir.length; i < ien; i++) {
    method = heir[i].indexOf("()") !== -1;
    key = method ? heir[i].replace("()", "") : heir[i];
    var src = _api_find(struct, key);
    if (!src) {
      src = {
        name: key,
        val: {},
        methodExt: [],
        propExt: [],
        type: "object"
      };
      struct.push(src);
    }
    if (i === ien - 1) {
      src.val = val;
      src.type = typeof val === "function" ? "function" : $$9.isPlainObject(val) ? "object" : "other";
    } else {
      struct = method ? src.methodExt : src.propExt;
    }
  }
};
_Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
  _Api.register(pluralName, val);
  _Api.register(singularName, function() {
    var ret = val.apply(this, arguments);
    if (ret === this) {
      return this;
    } else if (ret instanceof _Api) {
      return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : ret[0] : void 0;
    }
    return ret;
  });
};
var __table_selector = function(selector, a) {
  if (Array.isArray(selector)) {
    var result = [];
    selector.forEach(function(sel) {
      var inner = __table_selector(sel, a);
      result.push.apply(result, inner);
    });
    return result.filter(function(item) {
      return item;
    });
  }
  if (typeof selector === "number") {
    return [a[selector]];
  }
  var nodes = a.map(function(el) {
    return el.nTable;
  });
  return $$9(nodes).filter(selector).map(function() {
    var idx = nodes.indexOf(this);
    return a[idx];
  }).toArray();
};
_api_register("tables()", function(selector) {
  return selector !== void 0 && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
});
_api_register("table()", function(selector) {
  var tables = this.tables(selector);
  var ctx = tables.context;
  return ctx.length ? new _Api(ctx[0]) : tables;
});
[
  ["nodes", "node", "nTable"],
  ["body", "body", "nTBody"],
  ["header", "header", "nTHead"],
  ["footer", "footer", "nTFoot"]
].forEach(function(item) {
  _api_registerPlural(
    "tables()." + item[0] + "()",
    "table()." + item[1] + "()",
    function() {
      return this.iterator("table", function(ctx) {
        return ctx[item[2]];
      }, 1);
    }
  );
});
[
  ["header", "aoHeader"],
  ["footer", "aoFooter"]
].forEach(function(item) {
  _api_register("table()." + item[0] + ".structure()", function(selector) {
    var indexes = this.columns(selector).indexes().flatten();
    var ctx = this.context[0];
    return _fnHeaderLayout(ctx, ctx[item[1]], indexes);
  });
});
_api_registerPlural("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTableWrapper;
  }, 1);
});
_api_register("tables().every()", function(fn) {
  var that = this;
  return this.iterator("table", function(s, i) {
    fn.call(that.table(i), i);
  });
});
_api_register("caption()", function(value, side) {
  var context = this.context;
  if (value === void 0) {
    var caption = context[0].captionNode;
    return caption && context.length ? caption.innerHTML : null;
  }
  return this.iterator("table", function(ctx) {
    var table = $$9(ctx.nTable);
    var caption2 = $$9(ctx.captionNode);
    var container = $$9(ctx.nTableWrapper);
    if (!caption2.length) {
      caption2 = $$9("<caption/>").html(value);
      ctx.captionNode = caption2[0];
      if (!side) {
        table.prepend(caption2);
        side = caption2.css("caption-side");
      }
    }
    caption2.html(value);
    if (side) {
      caption2.css("caption-side", side);
      caption2[0]._captionSide = side;
    }
    if (container.find("div.dataTables_scroll").length) {
      var selector = side === "top" ? "Head" : "Foot";
      container.find("div.dataTables_scroll" + selector + " table").prepend(caption2);
    } else {
      table.prepend(caption2);
    }
  }, 1);
});
_api_register("caption.node()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].captionNode : null;
});
_api_register("draw()", function(paging) {
  return this.iterator("table", function(settings) {
    if (paging === "page") {
      _fnDraw(settings);
    } else {
      if (typeof paging === "string") {
        paging = paging === "full-hold" ? false : true;
      }
      _fnReDraw(settings, paging === false);
    }
  });
});
_api_register("page()", function(action) {
  if (action === void 0) {
    return this.page.info().page;
  }
  return this.iterator("table", function(settings) {
    _fnPageChange(settings, action);
  });
});
_api_register("page.info()", function() {
  if (this.context.length === 0) {
    return void 0;
  }
  var settings = this.context[0], start = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
  return {
    "page": all ? 0 : Math.floor(start / len),
    "pages": all ? 1 : Math.ceil(visRecords / len),
    "start": start,
    "end": settings.fnDisplayEnd(),
    "length": len,
    "recordsTotal": settings.fnRecordsTotal(),
    "recordsDisplay": visRecords,
    "serverSide": _fnDataSource(settings) === "ssp"
  };
});
_api_register("page.len()", function(len) {
  if (len === void 0) {
    return this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0;
  }
  return this.iterator("table", function(settings) {
    _fnLengthChange(settings, len);
  });
});
var __reload = function(settings, holdPosition, callback) {
  if (callback) {
    var api = new _Api(settings);
    api.one("draw", function() {
      callback(api.ajax.json());
    });
  }
  if (_fnDataSource(settings) == "ssp") {
    _fnReDraw(settings, holdPosition);
  } else {
    _fnProcessingDisplay(settings, true);
    var xhr = settings.jqXHR;
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }
    _fnBuildAjax(settings, {}, function(json) {
      _fnClearTable(settings);
      var data = _fnAjaxDataSrc(settings, json);
      for (var i = 0, ien = data.length; i < ien; i++) {
        _fnAddData(settings, data[i]);
      }
      _fnReDraw(settings, holdPosition);
      _fnInitComplete(settings);
      _fnProcessingDisplay(settings, false);
    });
  }
};
_api_register("ajax.json()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].json;
  }
});
_api_register("ajax.params()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].oAjaxData;
  }
});
_api_register("ajax.reload()", function(callback, resetPaging) {
  return this.iterator("table", function(settings) {
    __reload(settings, resetPaging === false, callback);
  });
});
_api_register("ajax.url()", function(url) {
  var ctx = this.context;
  if (url === void 0) {
    if (ctx.length === 0) {
      return void 0;
    }
    ctx = ctx[0];
    return $$9.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax;
  }
  return this.iterator("table", function(settings) {
    if ($$9.isPlainObject(settings.ajax)) {
      settings.ajax.url = url;
    } else {
      settings.ajax = url;
    }
  });
});
_api_register("ajax.url().load()", function(callback, resetPaging) {
  return this.iterator("table", function(ctx) {
    __reload(ctx, resetPaging === false, callback);
  });
});
var _selector_run = function(type, selector, selectFn, settings, opts) {
  var out = [], res, a, i, ien, j, jen, selectorType = typeof selector;
  if (!selector || selectorType === "string" || selectorType === "function" || selector.length === void 0) {
    selector = [selector];
  }
  for (i = 0, ien = selector.length; i < ien; i++) {
    a = selector[i] && selector[i].split && !selector[i].match(/[[(:]/) ? selector[i].split(",") : [selector[i]];
    for (j = 0, jen = a.length; j < jen; j++) {
      res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
      res = res.filter(function(item) {
        return item !== null && item !== void 0;
      });
      if (res && res.length) {
        out = out.concat(res);
      }
    }
  }
  var ext = _ext.selector[type];
  if (ext.length) {
    for (i = 0, ien = ext.length; i < ien; i++) {
      out = ext[i](settings, opts, out);
    }
  }
  return _unique(out);
};
var _selector_opts = function(opts) {
  if (!opts) {
    opts = {};
  }
  if (opts.filter && opts.search === void 0) {
    opts.search = opts.filter;
  }
  return $$9.extend({
    search: "none",
    order: "current",
    page: "all"
  }, opts);
};
var _selector_first = function(old) {
  let inst = new _Api(old.context[0]);
  if (old.length) {
    inst.push(old[0]);
  }
  inst.selector = old.selector;
  if (inst.length && inst[0].length > 1) {
    inst[0].splice(1);
  }
  return inst;
};
var _selector_row_indexes = function(settings, opts) {
  var i, ien, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
  var search = opts.search, order = opts.order, page = opts.page;
  if (_fnDataSource(settings) == "ssp") {
    return search === "removed" ? [] : _range(0, displayMaster.length);
  } else if (page == "current") {
    for (i = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i < ien; i++) {
      a.push(displayFiltered[i]);
    }
  } else if (order == "current" || order == "applied") {
    if (search == "none") {
      a = displayMaster.slice();
    } else if (search == "applied") {
      a = displayFiltered.slice();
    } else if (search == "removed") {
      var displayFilteredMap = {};
      for (i = 0, ien = displayFiltered.length; i < ien; i++) {
        displayFilteredMap[displayFiltered[i]] = null;
      }
      displayMaster.forEach(function(item) {
        if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
          a.push(item);
        }
      });
    }
  } else if (order == "index" || order == "original") {
    for (i = 0, ien = settings.aoData.length; i < ien; i++) {
      if (!settings.aoData[i]) {
        continue;
      }
      if (search == "none") {
        a.push(i);
      } else {
        tmp = displayFiltered.indexOf(i);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(i);
        }
      }
    }
  } else if (typeof order === "number") {
    var ordered = _fnSort(settings, order, "asc");
    if (search === "none") {
      a = ordered;
    } else {
      for (i = 0; i < ordered.length; i++) {
        tmp = displayFiltered.indexOf(ordered[i]);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(ordered[i]);
        }
      }
    }
  }
  return a;
};
var __row_selector = function(settings, selector, opts) {
  var rows;
  var run = function(sel) {
    var selInt = _intVal(sel);
    var aoData = settings.aoData;
    if (selInt !== null && !opts) {
      return [selInt];
    }
    if (!rows) {
      rows = _selector_row_indexes(settings, opts);
    }
    if (selInt !== null && rows.indexOf(selInt) !== -1) {
      return [selInt];
    } else if (sel === null || sel === void 0 || sel === "") {
      return rows;
    }
    if (typeof sel === "function") {
      return rows.map(function(idx) {
        var row = aoData[idx];
        return sel(idx, row._aData, row.nTr) ? idx : null;
      });
    }
    if (sel.nodeName) {
      var rowIdx = sel._DT_RowIndex;
      var cellIdx = sel._DT_CellIndex;
      if (rowIdx !== void 0) {
        return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
      } else if (cellIdx) {
        return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
      } else {
        var host = $$9(sel).closest("*[data-dt-row]");
        return host.length ? [host.data("dt-row")] : [];
      }
    }
    if (typeof sel === "string" && sel.charAt(0) === "#") {
      var rowObj = settings.aIds[sel.replace(/^#/, "")];
      if (rowObj !== void 0) {
        return [rowObj.idx];
      }
    }
    var nodes = _removeEmpty(
      _pluck_order(settings.aoData, rows, "nTr")
    );
    return $$9(nodes).filter(sel).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  };
  var matched = _selector_run("row", selector, run, settings, opts);
  if (opts.order === "current" || opts.order === "applied") {
    _fnSortDisplay(settings, matched);
  }
  return matched;
};
_api_register("rows()", function(selector, opts) {
  if (selector === void 0) {
    selector = "";
  } else if ($$9.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __row_selector(settings, selector, opts);
  }, 1);
  inst.selector.rows = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_register("rows().nodes()", function() {
  return this.iterator("row", function(settings, row) {
    return settings.aoData[row].nTr || void 0;
  }, 1);
});
_api_register("rows().data()", function() {
  return this.iterator(true, "rows", function(settings, rows) {
    return _pluck_order(settings.aoData, rows, "_aData");
  }, 1);
});
_api_registerPlural("rows().cache()", "row().cache()", function(type) {
  return this.iterator("row", function(settings, row) {
    var r = settings.aoData[row];
    return type === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
_api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
  return this.iterator("row", function(settings, row) {
    _fnInvalidate(settings, row, src);
  });
});
_api_registerPlural("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(settings, row) {
    return row;
  }, 1);
});
_api_registerPlural("rows().ids()", "row().id()", function(hash) {
  var a = [];
  var context = this.context;
  for (var i = 0, ien = context.length; i < ien; i++) {
    for (var j = 0, jen = this[i].length; j < jen; j++) {
      var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
      a.push((hash === true ? "#" : "") + id);
    }
  }
  return new _Api(context, a);
});
_api_registerPlural("rows().remove()", "row().remove()", function() {
  this.iterator("row", function(settings, row) {
    var data = settings.aoData;
    var rowData = data[row];
    var idx = settings.aiDisplayMaster.indexOf(row);
    if (idx !== -1) {
      settings.aiDisplayMaster.splice(idx, 1);
    }
    idx = settings.aiDisplay.indexOf(row);
    if (idx !== -1) {
      settings.aiDisplay.splice(idx, 1);
    }
    if (settings._iRecordsDisplay > 0) {
      settings._iRecordsDisplay--;
    }
    _fnLengthOverflow(settings);
    var id = settings.rowIdFn(rowData._aData);
    if (id !== void 0) {
      delete settings.aIds[id];
    }
    data[row] = null;
  });
  return this;
});
_api_register("rows.add()", function(rows) {
  var newRows = this.iterator("table", function(settings) {
    var row, i, ien;
    var out = [];
    for (i = 0, ien = rows.length; i < ien; i++) {
      row = rows[i];
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        out.push(_fnAddTr(settings, row)[0]);
      } else {
        out.push(_fnAddData(settings, row));
      }
    }
    return out;
  }, 1);
  var modRows = this.rows(-1);
  modRows.pop();
  modRows.push.apply(modRows, newRows);
  return modRows;
});
_api_register("row()", function(selector, opts) {
  return _selector_first(this.rows(selector, opts));
});
_api_register("row().data()", function(data) {
  var ctx = this.context;
  if (data === void 0) {
    return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : void 0;
  }
  var row = ctx[0].aoData[this[0]];
  row._aData = data;
  if (Array.isArray(data) && row.nTr && row.nTr.id) {
    _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
  }
  _fnInvalidate(ctx[0], this[0], "data");
  return this;
});
_api_register("row().node()", function() {
  var ctx = this.context;
  return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]].nTr || null : null;
});
_api_register("row.add()", function(row) {
  if (row instanceof $$9 && row.length) {
    row = row[0];
  }
  var rows = this.iterator("table", function(settings) {
    if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
      return _fnAddTr(settings, row)[0];
    }
    return _fnAddData(settings, row);
  });
  return this.row(rows[0]);
});
$$9(document).on("plugin-init.dt", function(e, context) {
  var api = new _Api(context);
  api.on("stateSaveParams.DT", function(e2, settings, d) {
    var idFn = settings.rowIdFn;
    var rows = settings.aiDisplayMaster;
    var ids = [];
    for (var i = 0; i < rows.length; i++) {
      var rowIdx = rows[i];
      var data = settings.aoData[rowIdx];
      if (data._detailsShow) {
        ids.push("#" + idFn(data._aData));
      }
    }
    d.childRows = ids;
  });
  api.on("stateLoaded.DT", function(e2, settings, state) {
    __details_state_load(api, state);
  });
  __details_state_load(api, api.state.loaded());
});
var __details_state_load = function(api, state) {
  if (state && state.childRows) {
    api.rows(state.childRows.map(function(id) {
      return id.replace(/:/g, "\\:");
    })).every(function() {
      _fnCallbackFire(api.settings()[0], null, "requestChild", [this]);
    });
  }
};
var __details_add = function(ctx, row, data, klass) {
  var rows = [];
  var addRow = function(r, k2) {
    if (Array.isArray(r) || r instanceof $$9) {
      for (var i = 0, ien = r.length; i < ien; i++) {
        addRow(r[i], k2);
      }
      return;
    }
    if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
      r.setAttribute("data-dt-row", row.idx);
      rows.push(r);
    } else {
      var created = $$9("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k2);
      $$9("td", created).addClass(k2).html(r)[0].colSpan = _fnVisbleColumns(ctx);
      rows.push(created[0]);
    }
  };
  addRow(data, klass);
  if (row._details) {
    row._details.detach();
  }
  row._details = $$9(rows);
  if (row._detailsShow) {
    row._details.insertAfter(row.nTr);
  }
};
var __details_state = DataTable$1.util.throttle(
  function(ctx) {
    _fnSaveState(ctx[0]);
  },
  500
);
var __details_remove = function(api, idx) {
  var ctx = api.context;
  if (ctx.length) {
    var row = ctx[0].aoData[idx !== void 0 ? idx : api[0]];
    if (row && row._details) {
      row._details.remove();
      row._detailsShow = void 0;
      row._details = void 0;
      $$9(row.nTr).removeClass("dt-hasChild");
      __details_state(ctx);
    }
  }
};
var __details_display = function(api, show) {
  var ctx = api.context;
  if (ctx.length && api.length) {
    var row = ctx[0].aoData[api[0]];
    if (row._details) {
      row._detailsShow = show;
      if (show) {
        row._details.insertAfter(row.nTr);
        $$9(row.nTr).addClass("dt-hasChild");
      } else {
        row._details.detach();
        $$9(row.nTr).removeClass("dt-hasChild");
      }
      _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
      __details_events(ctx[0]);
      __details_state(ctx);
    }
  }
};
var __details_events = function(settings) {
  var api = new _Api(settings);
  var namespace = ".dt.DT_details";
  var drawEvent = "draw" + namespace;
  var colvisEvent = "column-sizing" + namespace;
  var destroyEvent = "destroy" + namespace;
  var data = settings.aoData;
  api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
  if (_pluck(data, "_details").length > 0) {
    api.on(drawEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      api.rows({ page: "current" }).eq(0).each(function(idx) {
        var row = data[idx];
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      });
    });
    api.on(colvisEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      var row, visible = _fnVisbleColumns(ctx);
      for (var i = 0, ien = data.length; i < ien; i++) {
        row = data[i];
        if (row && row._details) {
          row._details.each(function() {
            var el = $$9(this).children("td");
            if (el.length == 1) {
              el.attr("colspan", visible);
            }
          });
        }
      }
    });
    api.on(destroyEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      for (var i = 0, ien = data.length; i < ien; i++) {
        if (data[i] && data[i]._details) {
          __details_remove(api, i);
        }
      }
    });
  }
};
var _emp = "";
var _child_obj = _emp + "row().child";
var _child_mth = _child_obj + "()";
_api_register(_child_mth, function(data, klass) {
  var ctx = this.context;
  if (data === void 0) {
    return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : void 0;
  } else if (data === true) {
    this.child.show();
  } else if (data === false) {
    __details_remove(this);
  } else if (ctx.length && this.length) {
    __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
  }
  return this;
});
_api_register([
  _child_obj + ".show()",
  _child_mth + ".show()"
], function() {
  __details_display(this, true);
  return this;
});
_api_register([
  _child_obj + ".hide()",
  _child_mth + ".hide()"
], function() {
  __details_display(this, false);
  return this;
});
_api_register([
  _child_obj + ".remove()",
  _child_mth + ".remove()"
], function() {
  __details_remove(this);
  return this;
});
_api_register(_child_obj + ".isShown()", function() {
  var ctx = this.context;
  if (ctx.length && this.length) {
    return ctx[0].aoData[this[0]]._detailsShow || false;
  }
  return false;
});
var __re_column_selector = /^([^:]+):(name|title|visIdx|visible)$/;
var __columnData = function(settings, column, r1, r2, rows, type) {
  var a = [];
  for (var row = 0, ien = rows.length; row < ien; row++) {
    a.push(_fnGetCellData(settings, rows[row], column, type));
  }
  return a;
};
var __column_selector = function(settings, selector, opts) {
  var columns = settings.aoColumns, names = _pluck(columns, "sName"), titles = _pluck(columns, "sTitle"), cells = DataTable$1.util.get("[].[].cell")(settings.aoHeader), nodes = _unique(_flatten([], cells));
  var run = function(s) {
    var selInt = _intVal(s);
    if (s === "") {
      return _range(columns.length);
    }
    if (selInt !== null) {
      return [
        selInt >= 0 ? selInt : columns.length + selInt
      ];
    }
    if (typeof s === "function") {
      var rows = _selector_row_indexes(settings, opts);
      return columns.map(function(col, idx2) {
        return s(
          idx2,
          __columnData(settings, idx2, 0, 0, rows)
        ) ? idx2 : null;
      });
    }
    var match = typeof s === "string" ? s.match(__re_column_selector) : "";
    if (match) {
      switch (match[2]) {
        case "visIdx":
        case "visible":
          var idx = parseInt(match[1], 10);
          if (idx < 0) {
            var visColumns = columns.map(function(col, i) {
              return col.bVisible ? i : null;
            });
            return [visColumns[visColumns.length + idx]];
          }
          return [_fnVisibleToColumnIndex(settings, idx)];
        case "name":
          return names.map(function(name2, i) {
            return name2 === match[1] ? i : null;
          });
        case "title":
          return titles.map(function(title, i) {
            return title === match[1] ? i : null;
          });
        default:
          return [];
      }
    }
    if (s.nodeName && s._DT_CellIndex) {
      return [s._DT_CellIndex.column];
    }
    var jqResult = $$9(nodes).filter(s).map(function() {
      return _fnColumnsFromHeader(this);
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    var host = $$9(s).closest("*[data-dt-column]");
    return host.length ? [host.data("dt-column")] : [];
  };
  return _selector_run("column", selector, run, settings, opts);
};
var __setColumnVis = function(settings, column, vis) {
  var cols = settings.aoColumns, col = cols[column], data = settings.aoData, cells, i, ien, tr;
  if (vis === void 0) {
    return col.bVisible;
  }
  if (col.bVisible === vis) {
    return false;
  }
  if (vis) {
    var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
    for (i = 0, ien = data.length; i < ien; i++) {
      if (data[i]) {
        tr = data[i].nTr;
        cells = data[i].anCells;
        if (tr) {
          tr.insertBefore(cells[column], cells[insertBefore] || null);
        }
      }
    }
  } else {
    $$9(_pluck(settings.aoData, "anCells", column)).detach();
  }
  col.bVisible = vis;
  _colGroup(settings);
  return true;
};
_api_register("columns()", function(selector, opts) {
  if (selector === void 0) {
    selector = "";
  } else if ($$9.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __column_selector(settings, selector, opts);
  }, 1);
  inst.selector.cols = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_registerPlural("columns().header()", "column().header()", function(row) {
  return this.iterator("column", function(settings, column) {
    var header = settings.aoHeader;
    var target = row !== void 0 ? row : settings.bSortCellsTop ? 0 : header.length - 1;
    return header[target][column].cell;
  }, 1);
});
_api_registerPlural("columns().footer()", "column().footer()", function(row) {
  return this.iterator("column", function(settings, column) {
    var footer = settings.aoFooter;
    if (!footer.length) {
      return null;
    }
    return settings.aoFooter[row !== void 0 ? row : 0][column].cell;
  }, 1);
});
_api_registerPlural("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", __columnData, 1);
});
_api_registerPlural("columns().render()", "column().render()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return __columnData(settings, column, i, j, rows, type);
  }, 1);
});
_api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].mData;
  }, 1);
});
_api_registerPlural("columns().cache()", "column().cache()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(
      settings.aoData,
      rows,
      type === "search" ? "_aFilterData" : "_aSortData",
      column
    );
  }, 1);
});
_api_registerPlural("columns().init()", "column().init()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column];
  }, 1);
});
_api_registerPlural("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(settings.aoData, rows, "anCells", column);
  }, 1);
});
_api_registerPlural("columns().titles()", "column().title()", function(title, row) {
  return this.iterator("column", function(settings, column) {
    if (typeof title === "number") {
      row = title;
      title = void 0;
    }
    var span = $$9("span.dt-column-title", this.column(column).header(row));
    if (title !== void 0) {
      span.html(title);
      return this;
    }
    return span.html();
  }, 1);
});
_api_registerPlural("columns().types()", "column().type()", function() {
  return this.iterator("column", function(settings, column) {
    var type = settings.aoColumns[column].sType;
    if (!type) {
      _fnColumnTypes(settings);
    }
    return type;
  }, 1);
});
_api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
  var that = this;
  var changed = [];
  var ret = this.iterator("column", function(settings, column) {
    if (vis === void 0) {
      return settings.aoColumns[column].bVisible;
    }
    if (__setColumnVis(settings, column, vis)) {
      changed.push(column);
    }
  });
  if (vis !== void 0) {
    this.iterator("table", function(settings) {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      if (!settings.aiDisplay.length) {
        $$9(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
      }
      _fnSaveState(settings);
      that.iterator("column", function(settings2, column) {
        if (changed.includes(column)) {
          _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
        }
      });
      if (changed.length && (calc === void 0 || calc)) {
        that.columns.adjust();
      }
    });
  }
  return ret;
});
_api_registerPlural("columns().widths()", "column().width()", function() {
  var columns = this.columns(":visible").count();
  var row = $$9("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
  $$9(this.table().body()).append(row);
  var widths = row.children().map(function() {
    return $$9(this).outerWidth();
  });
  row.remove();
  return this.iterator("column", function(settings, column) {
    var visIdx = _fnColumnIndexToVisible(settings, column);
    return visIdx !== null ? widths[visIdx] : 0;
  }, 1);
});
_api_registerPlural("columns().indexes()", "column().index()", function(type) {
  return this.iterator("column", function(settings, column) {
    return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
  }, 1);
});
_api_register("columns.adjust()", function() {
  return this.iterator("table", function(settings) {
    _fnAdjustColumnSizing(settings);
  }, 1);
});
_api_register("column.index()", function(type, idx) {
  if (this.context.length !== 0) {
    var ctx = this.context[0];
    if (type === "fromVisible" || type === "toData") {
      return _fnVisibleToColumnIndex(ctx, idx);
    } else if (type === "fromData" || type === "toVisible") {
      return _fnColumnIndexToVisible(ctx, idx);
    }
  }
});
_api_register("column()", function(selector, opts) {
  return _selector_first(this.columns(selector, opts));
});
var __cell_selector = function(settings, selector, opts) {
  var data = settings.aoData;
  var rows = _selector_row_indexes(settings, opts);
  var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
  var allCells = $$9(_flatten([], cells));
  var row;
  var columns = settings.aoColumns.length;
  var a, i, ien, j, o, host;
  var run = function(s) {
    var fnSelector = typeof s === "function";
    if (s === null || s === void 0 || fnSelector) {
      a = [];
      for (i = 0, ien = rows.length; i < ien; i++) {
        row = rows[i];
        for (j = 0; j < columns; j++) {
          o = {
            row,
            column: j
          };
          if (fnSelector) {
            host = data[row];
            if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
              a.push(o);
            }
          } else {
            a.push(o);
          }
        }
      }
      return a;
    }
    if ($$9.isPlainObject(s)) {
      return s.column !== void 0 && s.row !== void 0 && rows.indexOf(s.row) !== -1 ? [s] : [];
    }
    var jqResult = allCells.filter(s).map(function(i2, el) {
      return {
        row: el._DT_CellIndex.row,
        column: el._DT_CellIndex.column
      };
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    host = $$9(s).closest("*[data-dt-row]");
    return host.length ? [{
      row: host.data("dt-row"),
      column: host.data("dt-column")
    }] : [];
  };
  return _selector_run("cell", selector, run, settings, opts);
};
_api_register("cells()", function(rowSelector, columnSelector, opts) {
  if ($$9.isPlainObject(rowSelector)) {
    if (rowSelector.row === void 0) {
      opts = rowSelector;
      rowSelector = null;
    } else {
      opts = columnSelector;
      columnSelector = null;
    }
  }
  if ($$9.isPlainObject(columnSelector)) {
    opts = columnSelector;
    columnSelector = null;
  }
  if (columnSelector === null || columnSelector === void 0) {
    return this.iterator("table", function(settings) {
      return __cell_selector(settings, rowSelector, _selector_opts(opts));
    });
  }
  var internalOpts = opts ? {
    page: opts.page,
    order: opts.order,
    search: opts.search
  } : {};
  var columns = this.columns(columnSelector, internalOpts);
  var rows = this.rows(rowSelector, internalOpts);
  var i, ien, j, jen;
  var cellsNoOpts = this.iterator("table", function(settings, idx) {
    var a = [];
    for (i = 0, ien = rows[idx].length; i < ien; i++) {
      for (j = 0, jen = columns[idx].length; j < jen; j++) {
        a.push({
          row: rows[idx][i],
          column: columns[idx][j]
        });
      }
    }
    return a;
  }, 1);
  var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
  $$9.extend(cells.selector, {
    cols: columnSelector,
    rows: rowSelector,
    opts
  });
  return cells;
});
_api_registerPlural("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(settings, row, column) {
    var data = settings.aoData[row];
    return data && data.anCells ? data.anCells[column] : void 0;
  }, 1);
});
_api_register("cells().data()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column);
  }, 1);
});
_api_registerPlural("cells().cache()", "cell().cache()", function(type) {
  type = type === "search" ? "_aFilterData" : "_aSortData";
  return this.iterator("cell", function(settings, row, column) {
    return settings.aoData[row][type][column];
  }, 1);
});
_api_registerPlural("cells().render()", "cell().render()", function(type) {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column, type);
  }, 1);
});
_api_registerPlural("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return {
      row,
      column,
      columnVisible: _fnColumnIndexToVisible(settings, column)
    };
  }, 1);
});
_api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
  return this.iterator("cell", function(settings, row, column) {
    _fnInvalidate(settings, row, src, column);
  });
});
_api_register("cell()", function(rowSelector, columnSelector, opts) {
  return _selector_first(this.cells(rowSelector, columnSelector, opts));
});
_api_register("cell().data()", function(data) {
  var ctx = this.context;
  var cell = this[0];
  if (data === void 0) {
    return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : void 0;
  }
  _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
  _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
  return this;
});
_api_register("order()", function(order, dir) {
  var ctx = this.context;
  var args = Array.prototype.slice.call(arguments);
  if (order === void 0) {
    return ctx.length !== 0 ? ctx[0].aaSorting : void 0;
  }
  if (typeof order === "number") {
    order = [[order, dir]];
  } else if (args.length > 1) {
    order = args;
  }
  return this.iterator("table", function(settings) {
    settings.aaSorting = Array.isArray(order) ? order.slice() : order;
  });
});
_api_register("order.listener()", function(node, column, callback) {
  return this.iterator("table", function(settings) {
    _fnSortAttachListener(settings, node, {}, column, callback);
  });
});
_api_register("order.fixed()", function(set) {
  if (!set) {
    var ctx = this.context;
    var fixed = ctx.length ? ctx[0].aaSortingFixed : void 0;
    return Array.isArray(fixed) ? { pre: fixed } : fixed;
  }
  return this.iterator("table", function(settings) {
    settings.aaSortingFixed = $$9.extend(true, {}, set);
  });
});
_api_register([
  "columns().order()",
  "column().order()"
], function(dir) {
  var that = this;
  if (!dir) {
    return this.iterator("column", function(settings, idx) {
      var sort = _fnSortFlatten(settings);
      for (var i = 0, ien = sort.length; i < ien; i++) {
        if (sort[i].col === idx) {
          return sort[i].dir;
        }
      }
      return null;
    }, 1);
  } else {
    return this.iterator("table", function(settings, i) {
      settings.aaSorting = that[i].map(function(col) {
        return [col, dir];
      });
    });
  }
});
_api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
  return this.iterator("column", function(settings, idx) {
    var col = settings.aoColumns[idx];
    return directions ? col.asSorting : col.bSortable;
  }, 1);
});
_api_register("processing()", function(show) {
  return this.iterator("table", function(ctx) {
    _fnProcessingDisplay(ctx, show);
  });
});
_api_register("search()", function(input, regex, smart, caseInsen) {
  var ctx = this.context;
  if (input === void 0) {
    return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : void 0;
  }
  return this.iterator("table", function(settings) {
    if (!settings.oFeatures.bFilter) {
      return;
    }
    if (typeof regex === "object") {
      _fnFilterComplete(settings, $$9.extend(settings.oPreviousSearch, regex, {
        search: input
      }));
    } else {
      _fnFilterComplete(settings, $$9.extend(settings.oPreviousSearch, {
        search: input,
        regex: regex === null ? false : regex,
        smart: smart === null ? true : smart,
        caseInsensitive: caseInsen === null ? true : caseInsen
      }));
    }
  });
});
_api_register("search.fixed()", function(name2, search) {
  var ret = this.iterator(true, "table", function(settings) {
    var fixed = settings.searchFixed;
    if (!name2) {
      return Object.keys(fixed);
    } else if (search === void 0) {
      return fixed[name2];
    } else if (search === null) {
      delete fixed[name2];
    } else {
      fixed[name2] = search;
    }
    return this;
  });
  return name2 !== void 0 && search === void 0 ? ret[0] : ret;
});
_api_registerPlural(
  "columns().search()",
  "column().search()",
  function(input, regex, smart, caseInsen) {
    return this.iterator("column", function(settings, column) {
      var preSearch = settings.aoPreSearchCols;
      if (input === void 0) {
        return preSearch[column].search;
      }
      if (!settings.oFeatures.bFilter) {
        return;
      }
      if (typeof regex === "object") {
        $$9.extend(preSearch[column], regex, {
          search: input
        });
      } else {
        $$9.extend(preSearch[column], {
          search: input,
          regex: regex === null ? false : regex,
          smart: smart === null ? true : smart,
          caseInsensitive: caseInsen === null ? true : caseInsen
        });
      }
      _fnFilterComplete(settings, settings.oPreviousSearch);
    });
  }
);
_api_register(
  [
    "columns().search.fixed()",
    "column().search.fixed()"
  ],
  function(name2, search) {
    var ret = this.iterator(true, "column", function(settings, colIdx) {
      var fixed = settings.aoColumns[colIdx].searchFixed;
      if (!name2) {
        return Object.keys(fixed);
      } else if (search === void 0) {
        return fixed[name2];
      } else if (search === null) {
        delete fixed[name2];
      } else {
        fixed[name2] = search;
      }
      return this;
    });
    return name2 !== void 0 && search === void 0 ? ret[0] : ret;
  }
);
_api_register("state()", function(set, ignoreTime) {
  if (!set) {
    return this.context.length ? this.context[0].oSavedState : null;
  }
  var setMutate = $$9.extend(true, {}, set);
  return this.iterator("table", function(settings) {
    if (ignoreTime !== false) {
      setMutate.time = +new Date() + 100;
    }
    _fnImplementState(settings, setMutate, function() {
    });
  });
});
_api_register("state.clear()", function() {
  return this.iterator("table", function(settings) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
  });
});
_api_register("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
_api_register("state.save()", function() {
  return this.iterator("table", function(settings) {
    _fnSaveState(settings);
  });
});
DataTable$1.use = function(module, type) {
  if (type === "lib" || module.fn) {
    $$9 = module;
  } else if (type == "win" || module.document) {
    window = module;
    document = module.document;
  } else if (type === "datetime" || module.type === "DateTime") {
    DataTable$1.DateTime = module;
  }
};
DataTable$1.factory = function(root, jq) {
  var is = false;
  if (root && root.document) {
    window = root;
    document = root.document;
  }
  if (jq && jq.fn && jq.fn.jquery) {
    $$9 = jq;
    is = true;
  }
  return is;
};
DataTable$1.versionCheck = function(version, version2) {
  var aThis = version2 ? version2.split(".") : DataTable$1.version.split(".");
  var aThat = version.split(".");
  var iThis, iThat;
  for (var i = 0, iLen = aThat.length; i < iLen; i++) {
    iThis = parseInt(aThis[i], 10) || 0;
    iThat = parseInt(aThat[i], 10) || 0;
    if (iThis === iThat) {
      continue;
    }
    return iThis > iThat;
  }
  return true;
};
DataTable$1.isDataTable = function(table) {
  var t = $$9(table).get(0);
  var is = false;
  if (table instanceof DataTable$1.Api) {
    return true;
  }
  $$9.each(DataTable$1.settings, function(i, o) {
    var head = o.nScrollHead ? $$9("table", o.nScrollHead)[0] : null;
    var foot = o.nScrollFoot ? $$9("table", o.nScrollFoot)[0] : null;
    if (o.nTable === t || head === t || foot === t) {
      is = true;
    }
  });
  return is;
};
DataTable$1.tables = function(visible) {
  var api = false;
  if ($$9.isPlainObject(visible)) {
    api = visible.api;
    visible = visible.visible;
  }
  var a = DataTable$1.settings.filter(function(o) {
    return !visible || visible && $$9(o.nTable).is(":visible") ? true : false;
  }).map(function(o) {
    return o.nTable;
  });
  return api ? new _Api(a) : a;
};
DataTable$1.camelToHungarian = _fnCamelToHungarian;
_api_register("$()", function(selector, opts) {
  var rows = this.rows(opts).nodes(), jqRows = $$9(rows);
  return $$9([].concat(
    jqRows.filter(selector).toArray(),
    jqRows.find(selector).toArray()
  ));
});
$$9.each(["on", "one", "off"], function(i, key) {
  _api_register(key + "()", function() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = args[0].split(/\s/).map(function(e) {
      return !e.match(/\.dt\b/) ? e + ".dt" : e;
    }).join(" ");
    var inst = $$9(this.tables().nodes());
    inst[key].apply(inst, args);
    return this;
  });
});
_api_register("clear()", function() {
  return this.iterator("table", function(settings) {
    _fnClearTable(settings);
  });
});
_api_register("error()", function(msg) {
  return this.iterator("table", function(settings) {
    _fnLog(settings, 0, msg);
  });
});
_api_register("settings()", function() {
  return new _Api(this.context, this.context);
});
_api_register("init()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].oInit : null;
});
_api_register("data()", function() {
  return this.iterator("table", function(settings) {
    return _pluck(settings.aoData, "_aData");
  }).flatten();
});
_api_register("trigger()", function(name2, args, bubbles) {
  return this.iterator("table", function(settings) {
    return _fnCallbackFire(settings, null, name2, args, bubbles);
  }).flatten();
});
_api_register("ready()", function(fn) {
  var ctx = this.context;
  if (!fn) {
    return ctx.length ? ctx[0]._bInitComplete || false : null;
  }
  return this.tables().every(function() {
    if (this.context[0]._bInitComplete) {
      fn.call(this);
    } else {
      this.on("init", function() {
        fn.call(this);
      });
    }
  });
});
_api_register("destroy()", function(remove) {
  remove = remove || false;
  return this.iterator("table", function(settings) {
    var classes = settings.oClasses;
    var table = settings.nTable;
    var tbody = settings.nTBody;
    var thead = settings.nTHead;
    var tfoot = settings.nTFoot;
    var jqTable = $$9(table);
    var jqTbody = $$9(tbody);
    var jqWrapper = $$9(settings.nTableWrapper);
    var rows = settings.aoData.map(function(r) {
      return r ? r.nTr : null;
    });
    var orderClasses = classes.order;
    settings.bDestroying = true;
    _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
    if (!remove) {
      new _Api(settings).columns().visible(true);
    }
    jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
    $$9(window).off(".DT-" + settings.sInstance);
    if (table != thead.parentNode) {
      jqTable.children("thead").detach();
      jqTable.append(thead);
    }
    if (tfoot && table != tfoot.parentNode) {
      jqTable.children("tfoot").detach();
      jqTable.append(tfoot);
    }
    settings.colgroup.remove();
    settings.aaSorting = [];
    settings.aaSortingFixed = [];
    _fnSortingClasses(settings);
    $$9("th, td", thead).removeClass(
      orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc
    ).css("width", "");
    jqTbody.children().detach();
    jqTbody.append(rows);
    var orig = settings.nTableWrapper.parentNode;
    var insertBefore = settings.nTableWrapper.nextSibling;
    var removedMethod = remove ? "remove" : "detach";
    jqTable[removedMethod]();
    jqWrapper[removedMethod]();
    if (!remove && orig) {
      orig.insertBefore(table, insertBefore);
      jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table);
    }
    var idx = DataTable$1.settings.indexOf(settings);
    if (idx !== -1) {
      DataTable$1.settings.splice(idx, 1);
    }
  });
});
$$9.each(["column", "row", "cell"], function(i, type) {
  _api_register(type + "s().every()", function(fn) {
    var opts = this.selector.opts;
    var api = this;
    var inst;
    var counter = 0;
    return this.iterator("every", function(settings, selectedIdx, tableIdx) {
      inst = api[type](selectedIdx, opts);
      if (type === "cell") {
        fn.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter);
      } else {
        fn.call(inst, selectedIdx, tableIdx, counter);
      }
      counter++;
    });
  });
});
_api_register("i18n()", function(token, def, plural) {
  var ctx = this.context[0];
  var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
  if (resolved === void 0) {
    resolved = def;
  }
  if ($$9.isPlainObject(resolved)) {
    resolved = plural !== void 0 && resolved[plural] !== void 0 ? resolved[plural] : resolved._;
  }
  return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
});
DataTable$1.version = "2.0.3";
DataTable$1.settings = [];
DataTable$1.models = {};
DataTable$1.models.oSearch = {
  "caseInsensitive": true,
  "search": "",
  "regex": false,
  "smart": true,
  "return": false
};
DataTable$1.models.oRow = {
  "nTr": null,
  "anCells": null,
  "_aData": [],
  "_aSortData": null,
  "_aFilterData": null,
  "_sFilterRow": null,
  "src": null,
  "idx": -1,
  displayData: null
};
DataTable$1.models.oColumn = {
  "idx": null,
  "aDataSort": null,
  "asSorting": null,
  "bSearchable": null,
  "bSortable": null,
  "bVisible": null,
  "_sManualType": null,
  "_bAttrSrc": false,
  "fnCreatedCell": null,
  "fnGetData": null,
  "fnSetData": null,
  "mData": null,
  "mRender": null,
  "sClass": null,
  "sContentPadding": null,
  "sDefaultContent": null,
  "sName": null,
  "sSortDataType": "std",
  "sSortingClass": null,
  "sTitle": null,
  "sType": null,
  "sWidth": null,
  "sWidthOrig": null,
  maxLenString: null,
  searchFixed: null
};
DataTable$1.defaults = {
  "aaData": null,
  "aaSorting": [[0, "asc"]],
  "aaSortingFixed": [],
  "ajax": null,
  "aLengthMenu": [10, 25, 50, 100],
  "aoColumns": null,
  "aoColumnDefs": null,
  "aoSearchCols": [],
  "bAutoWidth": true,
  "bDeferRender": true,
  "bDestroy": false,
  "bFilter": true,
  "bInfo": true,
  "bLengthChange": true,
  "bPaginate": true,
  "bProcessing": false,
  "bRetrieve": false,
  "bScrollCollapse": false,
  "bServerSide": false,
  "bSort": true,
  "bSortMulti": true,
  "bSortCellsTop": null,
  "bSortClasses": true,
  "bStateSave": false,
  "fnCreatedRow": null,
  "fnDrawCallback": null,
  "fnFooterCallback": null,
  "fnFormatNumber": function(toFormat) {
    return toFormat.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      this.oLanguage.sThousands
    );
  },
  "fnHeaderCallback": null,
  "fnInfoCallback": null,
  "fnInitComplete": null,
  "fnPreDrawCallback": null,
  "fnRowCallback": null,
  "fnStateLoadCallback": function(settings) {
    try {
      return JSON.parse(
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
          "DataTables_" + settings.sInstance + "_" + location.pathname
        )
      );
    } catch (e) {
      return {};
    }
  },
  "fnStateLoadParams": null,
  "fnStateLoaded": null,
  "fnStateSaveCallback": function(settings, data) {
    try {
      (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
        "DataTables_" + settings.sInstance + "_" + location.pathname,
        JSON.stringify(data)
      );
    } catch (e) {
    }
  },
  "fnStateSaveParams": null,
  "iStateDuration": 7200,
  "iDisplayLength": 10,
  "iDisplayStart": 0,
  "iTabIndex": 0,
  "oClasses": {},
  "oLanguage": {
    "oAria": {
      "orderable": ": Activate to sort",
      "orderableReverse": ": Activate to invert sorting",
      "orderableRemove": ": Activate to remove sorting",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous"
      }
    },
    "oPaginate": {
      "sFirst": "\xAB",
      "sLast": "\xBB",
      "sNext": "\u203A",
      "sPrevious": "\u2039"
    },
    entries: {
      _: "entries",
      1: "entry"
    },
    "sEmptyTable": "No data available in table",
    "sInfo": "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
    "sInfoEmpty": "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
    "sInfoFiltered": "(filtered from _MAX_ total _ENTRIES-MAX_)",
    "sInfoPostFix": "",
    "sDecimal": "",
    "sThousands": ",",
    "sLengthMenu": "_MENU_ _ENTRIES_ per page",
    "sLoadingRecords": "Loading...",
    "sProcessing": "",
    "sSearch": "Search:",
    "sSearchPlaceholder": "",
    "sUrl": "",
    "sZeroRecords": "No matching records found"
  },
  "oSearch": $$9.extend({}, DataTable$1.models.oSearch),
  layout: {
    topStart: "pageLength",
    topEnd: "search",
    bottomStart: "info",
    bottomEnd: "paging"
  },
  "sDom": null,
  "searchDelay": null,
  "sPaginationType": "full_numbers",
  "sScrollX": "",
  "sScrollXInner": "",
  "sScrollY": "",
  "sServerMethod": "GET",
  "renderer": null,
  "rowId": "DT_RowId",
  "caption": null
};
_fnHungarianMap(DataTable$1.defaults);
DataTable$1.defaults.column = {
  "aDataSort": null,
  "iDataSort": -1,
  ariaTitle: "",
  "asSorting": ["asc", "desc", ""],
  "bSearchable": true,
  "bSortable": true,
  "bVisible": true,
  "fnCreatedCell": null,
  "mData": null,
  "mRender": null,
  "sCellType": "td",
  "sClass": "",
  "sContentPadding": "",
  "sDefaultContent": null,
  "sName": "",
  "sSortDataType": "std",
  "sTitle": null,
  "sType": null,
  "sWidth": null
};
_fnHungarianMap(DataTable$1.defaults.column);
DataTable$1.models.oSettings = {
  "oFeatures": {
    "bAutoWidth": null,
    "bDeferRender": null,
    "bFilter": null,
    "bInfo": true,
    "bLengthChange": true,
    "bPaginate": null,
    "bProcessing": null,
    "bServerSide": null,
    "bSort": null,
    "bSortMulti": null,
    "bSortClasses": null,
    "bStateSave": null
  },
  "oScroll": {
    "bCollapse": null,
    "iBarWidth": 0,
    "sX": null,
    "sXInner": null,
    "sY": null
  },
  "oLanguage": {
    "fnInfoCallback": null
  },
  "oBrowser": {
    "bScrollbarLeft": false,
    "barWidth": 0
  },
  "ajax": null,
  "aanFeatures": [],
  "aoData": [],
  "aiDisplay": [],
  "aiDisplayMaster": [],
  "aIds": {},
  "aoColumns": [],
  "aoHeader": [],
  "aoFooter": [],
  "oPreviousSearch": {},
  searchFixed: {},
  "aoPreSearchCols": [],
  "aaSorting": null,
  "aaSortingFixed": [],
  "sDestroyWidth": 0,
  "aoRowCallback": [],
  "aoHeaderCallback": [],
  "aoFooterCallback": [],
  "aoDrawCallback": [],
  "aoRowCreatedCallback": [],
  "aoPreDrawCallback": [],
  "aoInitComplete": [],
  "aoStateSaveParams": [],
  "aoStateLoadParams": [],
  "aoStateLoaded": [],
  "sTableId": "",
  "nTable": null,
  "nTHead": null,
  "nTFoot": null,
  "nTBody": null,
  "nTableWrapper": null,
  "bInitialised": false,
  "aoOpenRows": [],
  "sDom": null,
  "searchDelay": null,
  "sPaginationType": "two_button",
  pagingControls: 0,
  "iStateDuration": 0,
  "aoStateSave": [],
  "aoStateLoad": [],
  "oSavedState": null,
  "oLoadedState": null,
  "bAjaxDataGet": true,
  "jqXHR": null,
  "json": void 0,
  "oAjaxData": void 0,
  "sServerMethod": null,
  "fnFormatNumber": null,
  "aLengthMenu": null,
  "iDraw": 0,
  "bDrawing": false,
  "iDrawError": -1,
  "_iDisplayLength": 10,
  "_iDisplayStart": 0,
  "_iRecordsTotal": 0,
  "_iRecordsDisplay": 0,
  "oClasses": {},
  "bFiltered": false,
  "bSorted": false,
  "bSortCellsTop": null,
  "oInit": null,
  "aoDestroyCallback": [],
  "fnRecordsTotal": function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  "fnRecordsDisplay": function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  "fnDisplayEnd": function() {
    var len = this._iDisplayLength, start = this._iDisplayStart, calc = start + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
    if (features.bServerSide) {
      return paginate === false || len === -1 ? start + records : Math.min(start + len, this._iRecordsDisplay);
    } else {
      return !paginate || calc > records || len === -1 ? records : calc;
    }
  },
  "oInstance": null,
  "sInstance": null,
  "iTabIndex": 0,
  "nScrollHead": null,
  "nScrollFoot": null,
  "aLastSort": [],
  "oPlugins": {},
  "rowIdFn": null,
  "rowId": null,
  caption: "",
  captionNode: null,
  colgroup: null
};
DataTable$1.ext = _ext = {
  buttons: {},
  classes: {},
  builder: "-source-",
  errMode: "alert",
  feature: [],
  features: {},
  search: [],
  selector: {
    cell: [],
    column: [],
    row: []
  },
  legacy: {
    ajax: null
  },
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  order: {},
  type: {
    className: {},
    detect: [],
    render: {},
    search: {},
    order: {}
  },
  _unique: 0,
  fnVersionCheck: DataTable$1.fnVersionCheck,
  iApiIndex: 0,
  sVersion: DataTable$1.version
};
$$9.extend(_ext, {
  afnFiltering: _ext.search,
  aTypes: _ext.type.detect,
  ofnSearch: _ext.type.search,
  oSort: _ext.type.order,
  afnSortData: _ext.order,
  aoFeatures: _ext.feature,
  oStdClasses: _ext.classes,
  oPagination: _ext.pager
});
$$9.extend(DataTable$1.ext.classes, {
  container: "dt-container",
  empty: {
    row: "dt-empty"
  },
  info: {
    container: "dt-info"
  },
  length: {
    container: "dt-length",
    select: "dt-input"
  },
  order: {
    canAsc: "dt-orderable-asc",
    canDesc: "dt-orderable-desc",
    isAsc: "dt-ordering-asc",
    isDesc: "dt-ordering-desc",
    none: "dt-orderable-none",
    position: "sorting_"
  },
  processing: {
    container: "dt-processing"
  },
  scrolling: {
    body: "dt-scroll-body",
    container: "dt-scroll",
    footer: {
      self: "dt-scroll-foot",
      inner: "dt-scroll-footInner"
    },
    header: {
      self: "dt-scroll-head",
      inner: "dt-scroll-headInner"
    }
  },
  search: {
    container: "dt-search",
    input: "dt-input"
  },
  table: "dataTable",
  tbody: {
    cell: "",
    row: ""
  },
  thead: {
    cell: "",
    row: ""
  },
  tfoot: {
    cell: "",
    row: ""
  },
  paging: {
    active: "current",
    button: "dt-paging-button",
    container: "dt-paging",
    disabled: "disabled"
  }
});
var extPagination = DataTable$1.ext.pager;
$$9.extend(extPagination, {
  simple: function() {
    return ["previous", "next"];
  },
  full: function() {
    return ["first", "previous", "next", "last"];
  },
  numbers: function() {
    return ["numbers"];
  },
  simple_numbers: function() {
    return ["previous", "numbers", "next"];
  },
  full_numbers: function() {
    return ["first", "previous", "numbers", "next", "last"];
  },
  first_last: function() {
    return ["first", "last"];
  },
  first_last_numbers: function() {
    return ["first", "numbers", "last"];
  },
  _numbers: _pagingNumbers,
  numbers_length: 7
});
$$9.extend(true, DataTable$1.ext.renderer, {
  pagingButton: {
    _: function(settings, buttonType, content, active, disabled) {
      var classes = settings.oClasses.paging;
      var btnClasses = [classes.button];
      var btn;
      if (active) {
        btnClasses.push(classes.active);
      }
      if (disabled) {
        btnClasses.push(classes.disabled);
      }
      if (buttonType === "ellipsis") {
        btn = $$9('<span class="ellipsis"></span>').html(content)[0];
      } else {
        btn = $$9("<button>", {
          class: btnClasses.join(" "),
          role: "link",
          type: "button"
        }).html(content);
      }
      return {
        display: btn,
        clicker: btn
      };
    }
  },
  pagingContainer: {
    _: function(settings, buttons) {
      return buttons;
    }
  }
});
var _filterString = function(stripHtml, normalize) {
  return function(str) {
    if (_empty(str) || typeof str !== "string") {
      return str;
    }
    str = str.replace(_re_new_lines, " ");
    if (stripHtml) {
      str = _stripHtml(str);
    }
    if (normalize) {
      str = _normalize(str, false);
    }
    return str;
  };
};
function __mldFnName(name2) {
  return name2.replace(/[\W]/g, "_");
}
function __mld(dt, momentFn, luxonFn, dateFn, arg1) {
  if (window.moment) {
    return dt[momentFn](arg1);
  } else if (window.luxon) {
    return dt[luxonFn](arg1);
  }
  return dateFn ? dt[dateFn](arg1) : dt;
}
var __mlWarning = false;
function __mldObj(d, format2, locale) {
  var dt;
  if (window.moment) {
    dt = window.moment.utc(d, format2, locale, true);
    if (!dt.isValid()) {
      return null;
    }
  } else if (window.luxon) {
    dt = format2 && typeof d === "string" ? window.luxon.DateTime.fromFormat(d, format2) : window.luxon.DateTime.fromISO(d);
    if (!dt.isValid) {
      return null;
    }
    dt.setLocale(locale);
  } else if (!format2) {
    dt = new Date(d);
  } else {
    if (!__mlWarning) {
      alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
    }
    __mlWarning = true;
  }
  return dt;
}
function __mlHelper(localeString) {
  return function(from, to, locale, def) {
    if (arguments.length === 0) {
      locale = "en";
      to = null;
      from = null;
    } else if (arguments.length === 1) {
      locale = "en";
      to = from;
      from = null;
    } else if (arguments.length === 2) {
      locale = to;
      to = from;
      from = null;
    }
    var typeName = "datetime" + (to ? "-" + __mldFnName(to) : "");
    if (!DataTable$1.ext.type.order[typeName]) {
      DataTable$1.type(typeName, {
        detect: function(d) {
          return d === typeName ? typeName : false;
        },
        order: {
          pre: function(d) {
            return d.valueOf();
          }
        },
        className: "dt-right"
      });
    }
    return function(d, type) {
      if (d === null || d === void 0) {
        if (def === "--now") {
          var local = new Date();
          d = new Date(Date.UTC(
            local.getFullYear(),
            local.getMonth(),
            local.getDate(),
            local.getHours(),
            local.getMinutes(),
            local.getSeconds()
          ));
        } else {
          d = "";
        }
      }
      if (type === "type") {
        return typeName;
      }
      if (d === "") {
        return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
      }
      if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
        return d;
      }
      var dt = __mldObj(d, from, locale);
      if (dt === null) {
        return d;
      }
      if (type === "sort") {
        return dt;
      }
      var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
      return type === "display" ? _escapeHtml(formatted) : formatted;
    };
  };
}
var __thousands = ",";
var __decimal = ".";
if (window.Intl !== void 0) {
  try {
    var num = new Intl.NumberFormat().formatToParts(100000.1);
    for (var i = 0; i < num.length; i++) {
      if (num[i].type === "group") {
        __thousands = num[i].value;
      } else if (num[i].type === "decimal") {
        __decimal = num[i].value;
      }
    }
  } catch (e) {
  }
}
DataTable$1.datetime = function(format2, locale) {
  var typeName = "datetime-detect-" + __mldFnName(format2);
  if (!locale) {
    locale = "en";
  }
  if (!DataTable$1.ext.type.order[typeName]) {
    DataTable$1.type(typeName, {
      detect: function(d) {
        var dt = __mldObj(d, format2, locale);
        return d === "" || dt ? typeName : false;
      },
      order: {
        pre: function(d) {
          return __mldObj(d, format2, locale) || 0;
        }
      },
      className: "dt-right"
    });
  }
};
DataTable$1.render = {
  date: __mlHelper("toLocaleDateString"),
  datetime: __mlHelper("toLocaleString"),
  time: __mlHelper("toLocaleTimeString"),
  number: function(thousands, decimal, precision, prefix, postfix) {
    if (thousands === null || thousands === void 0) {
      thousands = __thousands;
    }
    if (decimal === null || decimal === void 0) {
      decimal = __decimal;
    }
    return {
      display: function(d) {
        if (typeof d !== "number" && typeof d !== "string") {
          return d;
        }
        if (d === "" || d === null) {
          return d;
        }
        var negative = d < 0 ? "-" : "";
        var flo = parseFloat(d);
        var abs2 = Math.abs(flo);
        if (abs2 >= 1e11 || abs2 < 1e-4 && abs2 !== 0) {
          var exp2 = flo.toExponential(precision).split(/e\+?/);
          return exp2[0] + " x 10<sup>" + exp2[1] + "</sup>";
        }
        if (isNaN(flo)) {
          return _escapeHtml(d);
        }
        flo = flo.toFixed(precision);
        d = Math.abs(flo);
        var intPart = parseInt(d, 10);
        var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
        if (intPart === 0 && parseFloat(floatPart) === 0) {
          negative = "";
        }
        return negative + (prefix || "") + intPart.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          thousands
        ) + floatPart + (postfix || "");
      }
    };
  },
  text: function() {
    return {
      display: _escapeHtml,
      filter: _escapeHtml
    };
  }
};
var _extTypes = DataTable$1.ext.type;
DataTable$1.type = function(name2, prop, val) {
  if (!prop) {
    return {
      className: _extTypes.className[name2],
      detect: _extTypes.detect.find(function(fn) {
        return fn.name === name2;
      }),
      order: {
        pre: _extTypes.order[name2 + "-pre"],
        asc: _extTypes.order[name2 + "-asc"],
        desc: _extTypes.order[name2 + "-desc"]
      },
      render: _extTypes.render[name2],
      search: _extTypes.search[name2]
    };
  }
  var setProp = function(prop2, propVal) {
    _extTypes[prop2][name2] = propVal;
  };
  var setDetect = function(fn) {
    var cb = function(d, s) {
      var ret = fn(d, s);
      return ret === true ? name2 : ret;
    };
    Object.defineProperty(cb, "name", { value: name2 });
    var idx = _extTypes.detect.findIndex(function(fn2) {
      return fn2.name === name2;
    });
    if (idx === -1) {
      _extTypes.detect.unshift(cb);
    } else {
      _extTypes.detect.splice(idx, 1, cb);
    }
  };
  var setOrder = function(obj) {
    _extTypes.order[name2 + "-pre"] = obj.pre;
    _extTypes.order[name2 + "-asc"] = obj.asc;
    _extTypes.order[name2 + "-desc"] = obj.desc;
  };
  if (val === void 0) {
    val = prop;
    prop = null;
  }
  if (prop === "className") {
    setProp("className", val);
  } else if (prop === "detect") {
    setDetect(val);
  } else if (prop === "order") {
    setOrder(val);
  } else if (prop === "render") {
    setProp("render", val);
  } else if (prop === "search") {
    setProp("search", val);
  } else if (!prop) {
    if (val.className) {
      setProp("className", val.className);
    }
    if (val.detect !== void 0) {
      setDetect(val.detect);
    }
    if (val.order) {
      setOrder(val.order);
    }
    if (val.render !== void 0) {
      setProp("render", val.render);
    }
    if (val.search !== void 0) {
      setProp("search", val.search);
    }
  }
};
DataTable$1.types = function() {
  return _extTypes.detect.map(function(fn) {
    return fn.name;
  });
};
DataTable$1.type("string", {
  detect: function() {
    return "string";
  },
  order: {
    pre: function(a) {
      return _empty(a) ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
    }
  },
  search: _filterString(false, true)
});
DataTable$1.type("html", {
  detect: function(d) {
    return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1 ? "html" : null;
  },
  order: {
    pre: function(a) {
      return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + "";
    }
  },
  search: _filterString(true, true)
});
DataTable$1.type("date", {
  className: "dt-type-date",
  detect: function(d) {
    if (d && !(d instanceof Date) && !_re_date.test(d)) {
      return null;
    }
    var parsed = Date.parse(d);
    return parsed !== null && !isNaN(parsed) || _empty(d) ? "date" : null;
  },
  order: {
    pre: function(d) {
      var ts = Date.parse(d);
      return isNaN(ts) ? -Infinity : ts;
    }
  }
});
DataTable$1.type("html-num-fmt", {
  className: "dt-type-numeric",
  detect: function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _htmlNumeric(d, decimal, true) ? "html-num-fmt" : null;
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html, _re_formatted_numeric);
    }
  },
  search: _filterString(true, true)
});
DataTable$1.type("html-num", {
  className: "dt-type-numeric",
  detect: function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _htmlNumeric(d, decimal) ? "html-num" : null;
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html);
    }
  },
  search: _filterString(true, true)
});
DataTable$1.type("num-fmt", {
  className: "dt-type-numeric",
  detect: function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _isNumber(d, decimal, true) ? "num-fmt" : null;
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_formatted_numeric);
    }
  }
});
DataTable$1.type("num", {
  className: "dt-type-numeric",
  detect: function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _isNumber(d, decimal) ? "num" : null;
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp);
    }
  }
});
var __numericReplace = function(d, decimalPlace, re1, re2) {
  if (d !== 0 && (!d || d === "-")) {
    return -Infinity;
  }
  var type = typeof d;
  if (type === "number" || type === "bigint") {
    return d;
  }
  if (decimalPlace) {
    d = _numToDecimal(d, decimalPlace);
  }
  if (d.replace) {
    if (re1) {
      d = d.replace(re1, "");
    }
    if (re2) {
      d = d.replace(re2, "");
    }
  }
  return d * 1;
};
$$9.extend(true, DataTable$1.ext.renderer, {
  footer: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.tfoot.cell);
    }
  },
  header: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.thead.cell);
      if (!settings.oFeatures.bSort) {
        cell.addClass(classes.order.none);
      }
      var legacyTop = settings.bSortCellsTop;
      var headerRows = cell.closest("thead").find("tr");
      var rowIdx = cell.parent().index();
      if (cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || legacyTop === true && rowIdx !== 0 || legacyTop === false && rowIdx !== headerRows.length - 1) {
        return;
      }
      $$9(settings.nTable).on("order.dt.DT", function(e, ctx, sorting) {
        if (settings !== ctx) {
          return;
        }
        var orderClasses = classes.order;
        var columns = ctx.api.columns(cell);
        var col = settings.aoColumns[columns.flatten()[0]];
        var orderable = columns.orderable().includes(true);
        var ariaType = "";
        var indexes = columns.indexes();
        var sortDirs = columns.orderable(true).flatten();
        var orderedColumns = "," + sorting.map(function(val) {
          return val.col;
        }).join(",") + ",";
        cell.removeClass(
          orderClasses.isAsc + " " + orderClasses.isDesc
        ).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, orderable && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, orderable && sortDirs.includes("desc"));
        var sortIdx = orderedColumns.indexOf("," + indexes.toArray().join(",") + ",");
        if (sortIdx !== -1) {
          var orderDirs = columns.order();
          cell.addClass(
            orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : ""
          );
        }
        if (sortIdx === 0) {
          var firstSort = sorting[0];
          var sortOrder = col.asSorting;
          cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
          ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse";
        } else {
          cell.removeAttr("aria-sort");
        }
        cell.attr(
          "aria-label",
          orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle
        );
        if (orderable) {
          cell.find(".dt-column-title").attr("role", "button");
          cell.attr("tabindex", 0);
        }
      });
    }
  },
  layout: {
    _: function(settings, container, items) {
      var row = $$9("<div/>").addClass("dt-layout-row").appendTo(container);
      $$9.each(items, function(key, val) {
        var klass = !val.table ? "dt-" + key + " " : "";
        if (val.table) {
          row.addClass("dt-layout-table");
        }
        $$9("<div/>").attr({
          id: val.id || null,
          "class": "dt-layout-cell " + klass + (val.className || "")
        }).append(val.contents).appendTo(row);
      });
    }
  }
});
DataTable$1.feature = {};
DataTable$1.feature.register = function(name2, cb, legacy) {
  DataTable$1.ext.features[name2] = cb;
  if (legacy) {
    _ext.feature.push({
      cFeature: legacy,
      fnInit: cb
    });
  }
};
DataTable$1.feature.register("info", function(settings, opts) {
  if (!settings.oFeatures.bInfo) {
    return null;
  }
  var lang = settings.oLanguage, tid = settings.sTableId, n3 = $$9("<div/>", {
    "class": settings.oClasses.info.container
  });
  opts = $$9.extend({
    callback: lang.fnInfoCallback,
    empty: lang.sInfoEmpty,
    postfix: lang.sInfoPostFix,
    search: lang.sInfoFiltered,
    text: lang.sInfo
  }, opts);
  settings.aoDrawCallback.push(function(s) {
    _fnUpdateInfo(s, opts, n3);
  });
  if (!$$9("#" + tid + "_info", settings.nWrapper).length) {
    n3.attr({
      "aria-live": "polite",
      id: tid + "_info",
      role: "status"
    });
    $$9(settings.nTable).attr("aria-describedby", tid + "_info");
  }
  return n3;
}, "i");
function _fnUpdateInfo(settings, opts, node) {
  var start = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max2 = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? opts.text : opts.empty;
  if (total !== max2) {
    out += " " + opts.search;
  }
  out += opts.postfix;
  out = _fnMacros(settings, out);
  if (opts.callback) {
    out = opts.callback.call(
      settings.oInstance,
      settings,
      start,
      end,
      max2,
      total,
      out
    );
  }
  node.html(out);
  _fnCallbackFire(settings, null, "info", [settings, node[0], out]);
}
var __searchCounter = 0;
DataTable$1.feature.register("search", function(settings, opts) {
  if (!settings.oFeatures.bFilter) {
    return null;
  }
  var classes = settings.oClasses.search;
  var tableId = settings.sTableId;
  var language = settings.oLanguage;
  var previousSearch = settings.oPreviousSearch;
  var input = '<input type="search" class="' + classes.input + '"/>';
  opts = $$9.extend({
    placeholder: language.sSearchPlaceholder,
    text: language.sSearch
  }, opts);
  if (opts.text.indexOf("_INPUT_") === -1) {
    opts.text += "_INPUT_";
  }
  opts.text = _fnMacros(settings, opts.text);
  var end = opts.text.match(/_INPUT_$/);
  var start = opts.text.match(/^_INPUT_/);
  var removed = opts.text.replace(/_INPUT_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start) {
    str = "_INPUT_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_INPUT_";
  }
  var filter = $$9("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
  filter.find("label").attr("for", "dt-search-" + __searchCounter);
  filter.find("input").attr("id", "dt-search-" + __searchCounter);
  __searchCounter++;
  var searchFn = function(event) {
    var val = this.value;
    if (previousSearch.return && event.key !== "Enter") {
      return;
    }
    if (val != previousSearch.search) {
      previousSearch.search = val;
      _fnFilterComplete(settings, previousSearch);
      settings._iDisplayStart = 0;
      _fnDraw(settings);
    }
  };
  var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
  var jqFilter = $$9("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on(
    "keyup.DT search.DT input.DT paste.DT cut.DT",
    searchDelay ? DataTable$1.util.debounce(searchFn, searchDelay) : searchFn
  ).on("mouseup.DT", function(e) {
    setTimeout(function() {
      searchFn.call(jqFilter[0], e);
    }, 10);
  }).on("keypress.DT", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  }).attr("aria-controls", tableId);
  $$9(settings.nTable).on("search.dt.DT", function(ev, s) {
    if (settings === s && jqFilter[0] !== document.activeElement) {
      jqFilter.val(
        typeof previousSearch.search !== "function" ? previousSearch.search : ""
      );
    }
  });
  return filter;
}, "f");
DataTable$1.feature.register("paging", function(settings, opts) {
  if (!settings.oFeatures.bPaginate) {
    return null;
  }
  opts = $$9.extend({
    numbers: DataTable$1.ext.pager.numbers_length,
    type: settings.sPaginationType
  }, opts);
  var host = $$9("<div/>").addClass(settings.oClasses.paging.container + " paging_" + opts.type);
  var draw = function() {
    _pagingDraw(settings, host, opts);
  };
  settings.aoDrawCallback.push(draw);
  $$9(settings.nTable).on("column-sizing.dt.DT", draw);
  return host;
}, "p");
function _pagingDraw(settings, host, opts) {
  if (!settings._bInitComplete) {
    return;
  }
  var plugin = DataTable$1.ext.pager[opts.type], aria = settings.oLanguage.oAria.paginate || {}, start = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = plugin().map(function(val) {
    return val === "numbers" ? _pagingNumbers(page, pages, opts.numbers) : val;
  }).flat();
  var buttonEls = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var btnInfo = _pagingButtonInfo(settings, button, page, pages);
    var btn = _fnRenderer(settings, "pagingButton")(
      settings,
      button,
      btnInfo.display,
      btnInfo.active,
      btnInfo.disabled
    );
    $$9(btn.clicker).attr({
      "aria-controls": settings.sTableId,
      "aria-disabled": btnInfo.disabled ? "true" : null,
      "aria-current": btnInfo.active ? "page" : null,
      "aria-label": aria[button],
      "data-dt-idx": button,
      "tabIndex": btnInfo.disabled ? -1 : settings.iTabIndex
    });
    if (typeof button !== "number") {
      $$9(btn.clicker).addClass(button);
    }
    _fnBindAction(
      btn.clicker,
      { action: button },
      function(e) {
        e.preventDefault();
        _fnPageChange(settings, e.data.action, true);
      }
    );
    buttonEls.push(btn.display);
  }
  var wrapped = _fnRenderer(settings, "pagingContainer")(
    settings,
    buttonEls
  );
  var activeEl = host.find(document.activeElement).data("dt-idx");
  host.empty().append(wrapped);
  if (activeEl !== void 0) {
    host.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
  }
  if (buttonEls.length && opts.numbers > 1 && $$9(host).height() >= $$9(buttonEls[0]).outerHeight() * 2 - 10) {
    _pagingDraw(settings, host, $$9.extend({}, opts, { numbers: opts.numbers - 2 }));
  }
}
function _pagingButtonInfo(settings, button, page, pages) {
  var lang = settings.oLanguage.oPaginate;
  var o = {
    display: "",
    active: false,
    disabled: false
  };
  switch (button) {
    case "ellipsis":
      o.display = "&#x2026;";
      o.disabled = true;
      break;
    case "first":
      o.display = lang.sFirst;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "previous":
      o.display = lang.sPrevious;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "next":
      o.display = lang.sNext;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    case "last":
      o.display = lang.sLast;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    default:
      if (typeof button === "number") {
        o.display = settings.fnFormatNumber(button + 1);
        if (page === button) {
          o.active = true;
        }
      }
      break;
  }
  return o;
}
function _pagingNumbers(page, pages, buttons) {
  var numbers = [], half = Math.floor(buttons / 2);
  if (pages <= buttons) {
    numbers = _range(0, pages);
  } else if (buttons === 1) {
    numbers = [page];
  } else if (buttons === 3) {
    if (page <= 1) {
      numbers = [0, 1, "ellipsis"];
    } else if (page >= pages - 2) {
      numbers = _range(pages - 2, pages);
      numbers.unshift("ellipsis");
    } else {
      numbers = ["ellipsis", page, "ellipsis"];
    }
  } else if (page <= half) {
    numbers = _range(0, buttons - 2);
    numbers.push("ellipsis", pages - 1);
  } else if (page >= pages - 1 - half) {
    numbers = _range(pages - (buttons - 2), pages);
    numbers.unshift(0, "ellipsis");
  } else {
    numbers = _range(page - half + 2, page + half - 1);
    numbers.push("ellipsis", pages - 1);
    numbers.unshift(0, "ellipsis");
  }
  return numbers;
}
var __lengthCounter = 0;
DataTable$1.feature.register("pageLength", function(settings, opts) {
  var features = settings.oFeatures;
  if (!features.bPaginate || !features.bLengthChange) {
    return null;
  }
  opts = $$9.extend({
    menu: settings.aLengthMenu,
    text: settings.oLanguage.sLengthMenu
  }, opts);
  var classes = settings.oClasses.length, tableId = settings.sTableId, menu = opts.menu, lengths = [], language = [], i;
  if (Array.isArray(menu[0])) {
    lengths = menu[0];
    language = menu[1];
  } else {
    for (i = 0; i < menu.length; i++) {
      if ($$9.isPlainObject(menu[i])) {
        lengths.push(menu[i].value);
        language.push(menu[i].label);
      } else {
        lengths.push(menu[i]);
        language.push(menu[i]);
      }
    }
  }
  var end = opts.text.match(/_MENU_$/);
  var start = opts.text.match(/^_MENU_/);
  var removed = opts.text.replace(/_MENU_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start) {
    str = "_MENU_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_MENU_";
  }
  var div2 = $$9("<div/>").addClass(classes.container).append(
    str.replace("_MENU_", "<span></span>")
  );
  var textNodes = [];
  div2.find("label")[0].childNodes.forEach(function(el) {
    if (el.nodeType === Node.TEXT_NODE) {
      textNodes.push({
        el,
        text: el.textContent
      });
    }
  });
  var updateEntries = function(len) {
    textNodes.forEach(function(node) {
      node.el.textContent = _fnMacros(settings, node.text, len);
    });
  };
  var select = $$9("<select/>", {
    "name": tableId + "_length",
    "aria-controls": tableId,
    "class": classes.select
  });
  for (i = 0; i < lengths.length; i++) {
    select[0][i] = new Option(
      typeof language[i] === "number" ? settings.fnFormatNumber(language[i]) : language[i],
      lengths[i]
    );
  }
  div2.find("label").attr("for", "dt-length-" + __lengthCounter);
  select.attr("id", "dt-length-" + __lengthCounter);
  __lengthCounter++;
  div2.find("span").replaceWith(select);
  $$9("select", div2).val(settings._iDisplayLength).on("change.DT", function() {
    _fnLengthChange(settings, $$9(this).val());
    _fnDraw(settings);
  });
  $$9(settings.nTable).on("length.dt.DT", function(e, s, len) {
    if (settings === s) {
      $$9("select", div2).val(len);
      updateEntries(len);
    }
  });
  updateEntries(settings._iDisplayLength);
  return div2;
}, "l");
$$9.fn.dataTable = DataTable$1;
DataTable$1.$ = $$9;
$$9.fn.dataTableSettings = DataTable$1.settings;
$$9.fn.dataTableExt = DataTable$1.ext;
$$9.fn.DataTable = function(opts) {
  return $$9(this).dataTable(opts).api();
};
$$9.each(DataTable$1, function(prop, val) {
  $$9.fn.DataTable[prop] = val;
});
/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */
let $$8 = jQuery;
$$8.extend(true, DataTable$1.defaults, {
  renderer: "bootstrap"
});
$$8.extend(true, DataTable$1.ext.classes, {
  container: "dt-container dt-bootstrap5",
  search: {
    input: "form-control form-control-sm"
  },
  length: {
    select: "form-select form-select-sm"
  },
  processing: {
    container: "dt-processing card"
  }
});
DataTable$1.ext.renderer.pagingButton.bootstrap = function(settings, buttonType, content, active, disabled) {
  var btnClasses = ["dt-paging-button", "page-item"];
  if (active) {
    btnClasses.push("active");
  }
  if (disabled) {
    btnClasses.push("disabled");
  }
  var li = $$8("<li>").addClass(btnClasses.join(" "));
  var a = $$8("<a>", {
    "href": disabled ? null : "#",
    "class": "page-link"
  }).html(content).appendTo(li);
  return {
    display: li,
    clicker: a
  };
};
DataTable$1.ext.renderer.pagingContainer.bootstrap = function(settings, buttonEls) {
  return $$8("<ul/>").addClass("pagination").append(buttonEls);
};
DataTable$1.ext.renderer.layout.bootstrap = function(settings, container, items) {
  var row = $$8("<div/>", {
    "class": items.full ? "row mt-2 justify-content-md-center" : "row mt-2 justify-content-between"
  }).appendTo(container);
  $$8.each(items, function(key, val) {
    var klass;
    if (val.table) {
      klass = "col-12";
    } else if (key === "start") {
      klass = "col-md-auto me-auto";
    } else if (key === "end") {
      klass = "col-md-auto ms-auto";
    } else {
      klass = "col-md";
    }
    $$8("<div/>", {
      id: val.id || null,
      "class": klass + " " + (val.className || "")
    }).append(val.contents).appendTo(row);
  });
};
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
/*! © SpryMedia Ltd - datatables.net/license */
DataTable$1.Api.register("order.neutral()", function() {
  return this.iterator("table", function(s) {
    s.aaSorting.length = 0;
    s.aiDisplay.sort(function(a, b) {
      return a - b;
    });
    s.aiDisplayMaster.sort(function(a, b) {
      return a - b;
    });
  });
});
/*! © SpryMedia Ltd - datatables.net/license */
DataTable$1.type("natural", {
  order: {
    asc: function(a, b) {
      return a.localeCompare(b, navigator.languages[0] || navigator.language, {
        numeric: true,
        ignorePunctuation: true
      });
    },
    desc: function(a, b) {
      return a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) * -1;
    }
  },
  className: "natural-sort"
});
DataTable$1.type("natural-nohtml", {
  order: {
    asc: function(a, b) {
      a = DataTable$1.util.stripHtml(a);
      b = DataTable$1.util.stripHtml(b);
      return a.localeCompare(b, navigator.languages[0] || navigator.language, {
        numeric: true,
        ignorePunctuation: true
      });
    },
    desc: function(a, b) {
      a = DataTable$1.util.stripHtml(a);
      b = DataTable$1.util.stripHtml(b);
      return a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) * -1;
    }
  },
  className: "natural-sort"
});
DataTable$1.type("natural-ci", {
  order: {
    asc: function(a, b) {
      a = a.toString().toLowerCase();
      b = b.toString().toLowerCase();
      return a.localeCompare(b, navigator.languages[0] || navigator.language, {
        numeric: true,
        ignorePunctuation: true
      });
    },
    desc: function(a, b) {
      a = a.toString().toLowerCase();
      b = b.toString().toLowerCase();
      return a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) * -1;
    }
  },
  className: "natural-sort"
});
/*! Buttons for DataTables 3.0.1
 * © SpryMedia Ltd - datatables.net/license
 */
let $$7 = jQuery;
var _instCounter = 0;
var _buttonCounter = 0;
var _dtButtons = DataTable$1.ext.buttons;
var _entityDecoder = null;
function _fadeIn(el, duration, fn) {
  if ($$7.fn.animate) {
    el.stop().fadeIn(duration, fn);
  } else {
    el.css("display", "block");
    if (fn) {
      fn.call(el);
    }
  }
}
function _fadeOut(el, duration, fn) {
  if ($$7.fn.animate) {
    el.stop().fadeOut(duration, fn);
  } else {
    el.css("display", "none");
    if (fn) {
      fn.call(el);
    }
  }
}
var Buttons = function(dt, config3) {
  if (!DataTable$1.versionCheck("2")) {
    throw "Warning: Buttons requires DataTables 2 or newer";
  }
  if (!(this instanceof Buttons)) {
    return function(settings) {
      return new Buttons(settings, dt).container();
    };
  }
  if (typeof config3 === "undefined") {
    config3 = {};
  }
  if (config3 === true) {
    config3 = {};
  }
  if (Array.isArray(config3)) {
    config3 = { buttons: config3 };
  }
  this.c = $$7.extend(true, {}, Buttons.defaults, config3);
  if (config3.buttons) {
    this.c.buttons = config3.buttons;
  }
  this.s = {
    dt: new DataTable$1.Api(dt),
    buttons: [],
    listenKeys: "",
    namespace: "dtb" + _instCounter++
  };
  this.dom = {
    container: $$7("<" + this.c.dom.container.tag + "/>").addClass(
      this.c.dom.container.className
    )
  };
  this._constructor();
};
$$7.extend(Buttons.prototype, {
  action: function(node, action) {
    var button = this._nodeToButton(node);
    if (action === void 0) {
      return button.conf.action;
    }
    button.conf.action = action;
    return this;
  },
  active: function(node, flag) {
    var button = this._nodeToButton(node);
    var klass = this.c.dom.button.active;
    var jqNode = $$7(button.node);
    if (button.inCollection && this.c.dom.collection.button && this.c.dom.collection.button.active !== void 0) {
      klass = this.c.dom.collection.button.active;
    }
    if (flag === void 0) {
      return jqNode.hasClass(klass);
    }
    jqNode.toggleClass(klass, flag === void 0 ? true : flag);
    return this;
  },
  add: function(config3, idx, draw) {
    var buttons = this.s.buttons;
    if (typeof idx === "string") {
      var split = idx.split("-");
      var base = this.s;
      for (var i = 0, ien = split.length - 1; i < ien; i++) {
        base = base.buttons[split[i] * 1];
      }
      buttons = base.buttons;
      idx = split[split.length - 1] * 1;
    }
    this._expandButton(
      buttons,
      config3,
      config3 !== void 0 ? config3.split : void 0,
      (config3 === void 0 || config3.split === void 0 || config3.split.length === 0) && base !== void 0,
      false,
      idx
    );
    if (draw === void 0 || draw === true) {
      this._draw();
    }
    return this;
  },
  collectionRebuild: function(node, newButtons) {
    var button = this._nodeToButton(node);
    if (newButtons !== void 0) {
      var i;
      for (i = button.buttons.length - 1; i >= 0; i--) {
        this.remove(button.buttons[i].node);
      }
      if (button.conf.prefixButtons) {
        newButtons.unshift.apply(newButtons, button.conf.prefixButtons);
      }
      if (button.conf.postfixButtons) {
        newButtons.push.apply(newButtons, button.conf.postfixButtons);
      }
      for (i = 0; i < newButtons.length; i++) {
        var newBtn = newButtons[i];
        this._expandButton(
          button.buttons,
          newBtn,
          newBtn !== void 0 && newBtn.config !== void 0 && newBtn.config.split !== void 0,
          true,
          newBtn.parentConf !== void 0 && newBtn.parentConf.split !== void 0,
          null,
          newBtn.parentConf
        );
      }
    }
    this._draw(button.collection, button.buttons);
  },
  container: function() {
    return this.dom.container;
  },
  disable: function(node) {
    var button = this._nodeToButton(node);
    $$7(button.node).addClass(this.c.dom.button.disabled).prop("disabled", true);
    return this;
  },
  destroy: function() {
    $$7("body").off("keyup." + this.s.namespace);
    var buttons = this.s.buttons.slice();
    var i, ien;
    for (i = 0, ien = buttons.length; i < ien; i++) {
      this.remove(buttons[i].node);
    }
    this.dom.container.remove();
    var buttonInsts = this.s.dt.settings()[0];
    for (i = 0, ien = buttonInsts.length; i < ien; i++) {
      if (buttonInsts.inst === this) {
        buttonInsts.splice(i, 1);
        break;
      }
    }
    return this;
  },
  enable: function(node, flag) {
    if (flag === false) {
      return this.disable(node);
    }
    var button = this._nodeToButton(node);
    $$7(button.node).removeClass(this.c.dom.button.disabled).prop("disabled", false);
    return this;
  },
  index: function(node, nested, buttons) {
    if (!nested) {
      nested = "";
      buttons = this.s.buttons;
    }
    for (var i = 0, ien = buttons.length; i < ien; i++) {
      var inner = buttons[i].buttons;
      if (buttons[i].node === node) {
        return nested + i;
      }
      if (inner && inner.length) {
        var match = this.index(node, i + "-", inner);
        if (match !== null) {
          return match;
        }
      }
    }
    return null;
  },
  name: function() {
    return this.c.name;
  },
  node: function(node) {
    if (!node) {
      return this.dom.container;
    }
    var button = this._nodeToButton(node);
    return $$7(button.node);
  },
  processing: function(node, flag) {
    var dt = this.s.dt;
    var button = this._nodeToButton(node);
    if (flag === void 0) {
      return $$7(button.node).hasClass("processing");
    }
    $$7(button.node).toggleClass("processing", flag);
    $$7(dt.table().node()).triggerHandler("buttons-processing.dt", [
      flag,
      dt.button(node),
      dt,
      $$7(node),
      button.conf
    ]);
    return this;
  },
  remove: function(node) {
    var button = this._nodeToButton(node);
    var host = this._nodeToHost(node);
    var dt = this.s.dt;
    if (button.buttons.length) {
      for (var i = button.buttons.length - 1; i >= 0; i--) {
        this.remove(button.buttons[i].node);
      }
    }
    button.conf.destroying = true;
    if (button.conf.destroy) {
      button.conf.destroy.call(dt.button(node), dt, $$7(node), button.conf);
    }
    this._removeKey(button.conf);
    $$7(button.node).remove();
    var idx = $$7.inArray(button, host);
    host.splice(idx, 1);
    return this;
  },
  text: function(node, label) {
    var button = this._nodeToButton(node);
    var textNode = button.textNode;
    var dt = this.s.dt;
    var jqNode = $$7(button.node);
    var text = function(opt) {
      return typeof opt === "function" ? opt(dt, jqNode, button.conf) : opt;
    };
    if (label === void 0) {
      return text(button.conf.text);
    }
    button.conf.text = label;
    textNode.html(text(label));
    return this;
  },
  _constructor: function() {
    var that = this;
    var dt = this.s.dt;
    var dtSettings = dt.settings()[0];
    var buttons = this.c.buttons;
    if (!dtSettings._buttons) {
      dtSettings._buttons = [];
    }
    dtSettings._buttons.push({
      inst: this,
      name: this.c.name
    });
    for (var i = 0, ien = buttons.length; i < ien; i++) {
      this.add(buttons[i]);
    }
    dt.on("destroy", function(e, settings) {
      if (settings === dtSettings) {
        that.destroy();
      }
    });
    $$7("body").on("keyup." + this.s.namespace, function(e) {
      if (!document.activeElement || document.activeElement === document.body) {
        var character = String.fromCharCode(e.keyCode).toLowerCase();
        if (that.s.listenKeys.toLowerCase().indexOf(character) !== -1) {
          that._keypress(character, e);
        }
      }
    });
  },
  _addKey: function(conf) {
    if (conf.key) {
      this.s.listenKeys += $$7.isPlainObject(conf.key) ? conf.key.key : conf.key;
    }
  },
  _draw: function(container, buttons) {
    if (!container) {
      container = this.dom.container;
      buttons = this.s.buttons;
    }
    container.children().detach();
    for (var i = 0, ien = buttons.length; i < ien; i++) {
      container.append(buttons[i].inserter);
      container.append(" ");
      if (buttons[i].buttons && buttons[i].buttons.length) {
        this._draw(buttons[i].collection, buttons[i].buttons);
      }
    }
  },
  _expandButton: function(attachTo, button, split, inCollection, inSplit, attachPoint, parentConf) {
    var dt = this.s.dt;
    var isSplit = false;
    var domCollection = this.c.dom.collection;
    var buttons = !Array.isArray(button) ? [button] : button;
    if (button === void 0) {
      buttons = !Array.isArray(split) ? [split] : split;
    }
    for (var i = 0, ien = buttons.length; i < ien; i++) {
      var conf = this._resolveExtends(buttons[i]);
      if (!conf) {
        continue;
      }
      isSplit = conf.config && conf.config.split ? true : false;
      if (Array.isArray(conf)) {
        this._expandButton(
          attachTo,
          conf,
          built !== void 0 && built.conf !== void 0 ? built.conf.split : void 0,
          inCollection,
          parentConf !== void 0 && parentConf.split !== void 0,
          attachPoint,
          parentConf
        );
        continue;
      }
      var built = this._buildButton(
        conf,
        inCollection,
        conf.split !== void 0 || conf.config !== void 0 && conf.config.split !== void 0,
        inSplit
      );
      if (!built) {
        continue;
      }
      if (attachPoint !== void 0 && attachPoint !== null) {
        attachTo.splice(attachPoint, 0, built);
        attachPoint++;
      } else {
        attachTo.push(built);
      }
      if (built.conf.buttons) {
        built.collection = $$7(
          "<" + domCollection.container.content.tag + "/>"
        );
        built.conf._collection = built.collection;
        $$7(built.node).append(domCollection.action.dropHtml);
        this._expandButton(
          built.buttons,
          built.conf.buttons,
          built.conf.split,
          !isSplit,
          isSplit,
          attachPoint,
          built.conf
        );
      }
      if (built.conf.split) {
        built.collection = $$7("<" + domCollection.container.tag + "/>");
        built.conf._collection = built.collection;
        for (var j = 0; j < built.conf.split.length; j++) {
          var item = built.conf.split[j];
          if (typeof item === "object") {
            item.parent = parentConf;
            if (item.collectionLayout === void 0) {
              item.collectionLayout = built.conf.collectionLayout;
            }
            if (item.dropup === void 0) {
              item.dropup = built.conf.dropup;
            }
            if (item.fade === void 0) {
              item.fade = built.conf.fade;
            }
          }
        }
        this._expandButton(
          built.buttons,
          built.conf.buttons,
          built.conf.split,
          !isSplit,
          isSplit,
          attachPoint,
          built.conf
        );
      }
      built.conf.parent = parentConf;
      if (conf.init) {
        conf.init.call(dt.button(built.node), dt, $$7(built.node), conf);
      }
    }
  },
  _buildButton: function(config3, inCollection, isSplit, inSplit) {
    var that = this;
    var configDom = this.c.dom;
    var textNode;
    var dt = this.s.dt;
    var text = function(opt) {
      return typeof opt === "function" ? opt(dt, button, config3) : opt;
    };
    var dom = $$7.extend(true, {}, configDom.button);
    if (inCollection && isSplit && configDom.collection.split) {
      $$7.extend(true, dom, configDom.collection.split.action);
    } else if (inSplit || inCollection) {
      $$7.extend(true, dom, configDom.collection.button);
    } else if (isSplit) {
      $$7.extend(true, dom, configDom.split.button);
    }
    if (config3.spacer) {
      var spacer = $$7("<" + dom.spacer.tag + "/>").addClass(
        "dt-button-spacer " + config3.style + " " + dom.spacer.className
      ).html(text(config3.text));
      return {
        conf: config3,
        node: spacer,
        inserter: spacer,
        buttons: [],
        inCollection,
        isSplit,
        collection: null,
        textNode: spacer
      };
    }
    if (config3.available && !config3.available(dt, config3) && !config3.html) {
      return false;
    }
    var button;
    if (!config3.html) {
      var run = function(e, dt2, button2, config4, done) {
        config4.action.call(dt2.button(button2), e, dt2, button2, config4, done);
        $$7(dt2.table().node()).triggerHandler("buttons-action.dt", [
          dt2.button(button2),
          dt2,
          button2,
          config4
        ]);
      };
      var action = function(e, dt2, button2, config4) {
        if (config4.async) {
          that.processing(button2[0], true);
          setTimeout(function() {
            run(e, dt2, button2, config4, function() {
              that.processing(button2[0], false);
            });
          }, config4.async);
        } else {
          run(e, dt2, button2, config4, function() {
          });
        }
      };
      var tag2 = config3.tag || dom.tag;
      var clickBlurs = config3.clickBlurs === void 0 ? true : config3.clickBlurs;
      button = $$7("<" + tag2 + "/>").addClass(dom.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(e) {
        e.preventDefault();
        if (!button.hasClass(dom.disabled) && config3.action) {
          action(e, dt, button, config3);
        }
        if (clickBlurs) {
          button.trigger("blur");
        }
      }).on("keypress.dtb", function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          if (!button.hasClass(dom.disabled) && config3.action) {
            action(e, dt, button, config3);
          }
        }
      });
      if (tag2.toLowerCase() === "a") {
        button.attr("href", "#");
      }
      if (tag2.toLowerCase() === "button") {
        button.attr("type", "button");
      }
      if (dom.liner.tag) {
        var liner = $$7("<" + dom.liner.tag + "/>").html(text(config3.text)).addClass(dom.liner.className);
        if (dom.liner.tag.toLowerCase() === "a") {
          liner.attr("href", "#");
        }
        button.append(liner);
        textNode = liner;
      } else {
        button.html(text(config3.text));
        textNode = button;
      }
      if (config3.enabled === false) {
        button.addClass(dom.disabled);
      }
      if (config3.className) {
        button.addClass(config3.className);
      }
      if (config3.titleAttr) {
        button.attr("title", text(config3.titleAttr));
      }
      if (config3.attr) {
        button.attr(config3.attr);
      }
      if (!config3.namespace) {
        config3.namespace = ".dt-button-" + _buttonCounter++;
      }
      if (config3.config !== void 0 && config3.config.split) {
        config3.split = config3.config.split;
      }
    } else {
      button = $$7(config3.html);
    }
    var buttonContainer = this.c.dom.buttonContainer;
    var inserter;
    if (buttonContainer && buttonContainer.tag) {
      inserter = $$7("<" + buttonContainer.tag + "/>").addClass(buttonContainer.className).append(button);
    } else {
      inserter = button;
    }
    this._addKey(config3);
    if (this.c.buttonCreated) {
      inserter = this.c.buttonCreated(config3, inserter);
    }
    var splitDiv;
    if (isSplit) {
      var dropdownConf = inCollection ? $$7.extend(true, this.c.dom.split, this.c.dom.collection.split) : this.c.dom.split;
      var wrapperConf = dropdownConf.wrapper;
      splitDiv = $$7("<" + wrapperConf.tag + "/>").addClass(wrapperConf.className).append(button);
      var dropButtonConfig = $$7.extend(config3, {
        align: dropdownConf.dropdown.align,
        attr: {
          "aria-haspopup": "dialog",
          "aria-expanded": false
        },
        className: dropdownConf.dropdown.className,
        closeButton: false,
        splitAlignClass: dropdownConf.dropdown.splitAlignClass,
        text: dropdownConf.dropdown.text
      });
      this._addKey(dropButtonConfig);
      var splitAction = function(e, dt2, button2, config4) {
        _dtButtons.split.action.call(
          dt2.button(splitDiv),
          e,
          dt2,
          button2,
          config4
        );
        $$7(dt2.table().node()).triggerHandler("buttons-action.dt", [
          dt2.button(button2),
          dt2,
          button2,
          config4
        ]);
        button2.attr("aria-expanded", true);
      };
      var dropButton = $$7(
        '<button class="' + dropdownConf.dropdown.className + ' dt-button"></button>'
      ).html(dropdownConf.dropdown.dropHtml).on("click.dtb", function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!dropButton.hasClass(dom.disabled)) {
          splitAction(e, dt, dropButton, dropButtonConfig);
        }
        if (clickBlurs) {
          dropButton.trigger("blur");
        }
      }).on("keypress.dtb", function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          if (!dropButton.hasClass(dom.disabled)) {
            splitAction(e, dt, dropButton, dropButtonConfig);
          }
        }
      });
      if (config3.split.length === 0) {
        dropButton.addClass("dtb-hide-drop");
      }
      splitDiv.append(dropButton).attr(dropButtonConfig.attr);
    }
    return {
      conf: config3,
      node: isSplit ? splitDiv.get(0) : button.get(0),
      inserter: isSplit ? splitDiv : inserter,
      buttons: [],
      inCollection,
      isSplit,
      inSplit,
      collection: null,
      textNode
    };
  },
  _nodeToButton: function(node, buttons) {
    if (!buttons) {
      buttons = this.s.buttons;
    }
    for (var i = 0, ien = buttons.length; i < ien; i++) {
      if (buttons[i].node === node) {
        return buttons[i];
      }
      if (buttons[i].buttons.length) {
        var ret = this._nodeToButton(node, buttons[i].buttons);
        if (ret) {
          return ret;
        }
      }
    }
  },
  _nodeToHost: function(node, buttons) {
    if (!buttons) {
      buttons = this.s.buttons;
    }
    for (var i = 0, ien = buttons.length; i < ien; i++) {
      if (buttons[i].node === node) {
        return buttons;
      }
      if (buttons[i].buttons.length) {
        var ret = this._nodeToHost(node, buttons[i].buttons);
        if (ret) {
          return ret;
        }
      }
    }
  },
  _keypress: function(character, e) {
    if (e._buttonsHandled) {
      return;
    }
    var run = function(conf, node) {
      if (!conf.key) {
        return;
      }
      if (conf.key === character) {
        e._buttonsHandled = true;
        $$7(node).click();
      } else if ($$7.isPlainObject(conf.key)) {
        if (conf.key.key !== character) {
          return;
        }
        if (conf.key.shiftKey && !e.shiftKey) {
          return;
        }
        if (conf.key.altKey && !e.altKey) {
          return;
        }
        if (conf.key.ctrlKey && !e.ctrlKey) {
          return;
        }
        if (conf.key.metaKey && !e.metaKey) {
          return;
        }
        e._buttonsHandled = true;
        $$7(node).click();
      }
    };
    var recurse = function(a) {
      for (var i = 0, ien = a.length; i < ien; i++) {
        run(a[i].conf, a[i].node);
        if (a[i].buttons.length) {
          recurse(a[i].buttons);
        }
      }
    };
    recurse(this.s.buttons);
  },
  _removeKey: function(conf) {
    if (conf.key) {
      var character = $$7.isPlainObject(conf.key) ? conf.key.key : conf.key;
      var a = this.s.listenKeys.split("");
      var idx = $$7.inArray(character, a);
      a.splice(idx, 1);
      this.s.listenKeys = a.join("");
    }
  },
  _resolveExtends: function(conf) {
    var that = this;
    var dt = this.s.dt;
    var i, ien;
    var toConfObject = function(base) {
      var loop = 0;
      while (!$$7.isPlainObject(base) && !Array.isArray(base)) {
        if (base === void 0) {
          return;
        }
        if (typeof base === "function") {
          base = base.call(that, dt, conf);
          if (!base) {
            return false;
          }
        } else if (typeof base === "string") {
          if (!_dtButtons[base]) {
            return { html: base };
          }
          base = _dtButtons[base];
        }
        loop++;
        if (loop > 30) {
          throw "Buttons: Too many iterations";
        }
      }
      return Array.isArray(base) ? base : $$7.extend({}, base);
    };
    conf = toConfObject(conf);
    while (conf && conf.extend) {
      if (!_dtButtons[conf.extend]) {
        throw "Cannot extend unknown button type: " + conf.extend;
      }
      var objArray = toConfObject(_dtButtons[conf.extend]);
      if (Array.isArray(objArray)) {
        return objArray;
      } else if (!objArray) {
        return false;
      }
      var originalClassName = objArray.className;
      if (conf.config !== void 0 && objArray.config !== void 0) {
        conf.config = $$7.extend({}, objArray.config, conf.config);
      }
      conf = $$7.extend({}, objArray, conf);
      if (originalClassName && conf.className !== originalClassName) {
        conf.className = originalClassName + " " + conf.className;
      }
      conf.extend = objArray.extend;
    }
    var postfixButtons = conf.postfixButtons;
    if (postfixButtons) {
      if (!conf.buttons) {
        conf.buttons = [];
      }
      for (i = 0, ien = postfixButtons.length; i < ien; i++) {
        conf.buttons.push(postfixButtons[i]);
      }
    }
    var prefixButtons = conf.prefixButtons;
    if (prefixButtons) {
      if (!conf.buttons) {
        conf.buttons = [];
      }
      for (i = 0, ien = prefixButtons.length; i < ien; i++) {
        conf.buttons.splice(i, 0, prefixButtons[i]);
      }
    }
    return conf;
  },
  _popover: function(content, hostButton, inOpts) {
    var dt = hostButton;
    var c = this.c;
    var closed = false;
    var options = $$7.extend(
      {
        align: "button-left",
        autoClose: false,
        background: true,
        backgroundClassName: "dt-button-background",
        closeButton: true,
        containerClassName: c.dom.collection.container.className,
        contentClassName: c.dom.collection.container.content.className,
        collectionLayout: "",
        collectionTitle: "",
        dropup: false,
        fade: 400,
        popoverTitle: "",
        rightAlignClassName: "dt-button-right",
        tag: c.dom.collection.container.tag
      },
      inOpts
    );
    var containerSelector = options.tag + "." + options.containerClassName.replace(/ /g, ".");
    var hostNode = hostButton.node();
    var close = function() {
      closed = true;
      _fadeOut($$7(containerSelector), options.fade, function() {
        $$7(this).detach();
      });
      $$7(
        dt.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
      ).attr("aria-expanded", "false");
      $$7("div.dt-button-background").off("click.dtb-collection");
      Buttons.background(
        false,
        options.backgroundClassName,
        options.fade,
        hostNode
      );
      $$7(window).off("resize.resize.dtb-collection");
      $$7("body").off(".dtb-collection");
      dt.off("buttons-action.b-internal");
      dt.off("destroy");
    };
    if (content === false) {
      close();
      return;
    }
    var existingExpanded = $$7(
      dt.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
    );
    if (existingExpanded.length) {
      if (hostNode.closest(containerSelector).length) {
        hostNode = existingExpanded.eq(0);
      }
      close();
    }
    var cnt = $$7(".dt-button", content).length;
    var mod2 = "";
    if (cnt === 3) {
      mod2 = "dtb-b3";
    } else if (cnt === 2) {
      mod2 = "dtb-b2";
    } else if (cnt === 1) {
      mod2 = "dtb-b1";
    }
    var display = $$7("<" + options.tag + "/>").addClass(options.containerClassName).addClass(options.collectionLayout).addClass(options.splitAlignClass).addClass(mod2).css("display", "none").attr({
      "aria-modal": true,
      role: "dialog"
    });
    content = $$7(content).addClass(options.contentClassName).attr("role", "menu").appendTo(display);
    hostNode.attr("aria-expanded", "true");
    if (hostNode.parents("body")[0] !== document.body) {
      hostNode = document.body.lastChild;
    }
    if (options.popoverTitle) {
      display.prepend(
        '<div class="dt-button-collection-title">' + options.popoverTitle + "</div>"
      );
    } else if (options.collectionTitle) {
      display.prepend(
        '<div class="dt-button-collection-title">' + options.collectionTitle + "</div>"
      );
    }
    if (options.closeButton) {
      display.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable");
    }
    _fadeIn(display.insertAfter(hostNode), options.fade);
    var tableContainer = $$7(hostButton.table().container());
    var position = display.css("position");
    if (options.span === "container" || options.align === "dt-container") {
      hostNode = hostNode.parent();
      display.css("width", tableContainer.width());
    }
    if (position === "absolute") {
      var offsetParent = $$7(hostNode[0].offsetParent);
      var buttonPosition = hostNode.position();
      var buttonOffset = hostNode.offset();
      var tableSizes = offsetParent.offset();
      var containerPosition = offsetParent.position();
      var computed = window.getComputedStyle(offsetParent[0]);
      tableSizes.height = offsetParent.outerHeight();
      tableSizes.width = offsetParent.width() + parseFloat(computed.paddingLeft);
      tableSizes.right = tableSizes.left + tableSizes.width;
      tableSizes.bottom = tableSizes.top + tableSizes.height;
      var top = buttonPosition.top + hostNode.outerHeight();
      var left = buttonPosition.left;
      display.css({
        top,
        left
      });
      computed = window.getComputedStyle(display[0]);
      var popoverSizes = display.offset();
      popoverSizes.height = display.outerHeight();
      popoverSizes.width = display.outerWidth();
      popoverSizes.right = popoverSizes.left + popoverSizes.width;
      popoverSizes.bottom = popoverSizes.top + popoverSizes.height;
      popoverSizes.marginTop = parseFloat(computed.marginTop);
      popoverSizes.marginBottom = parseFloat(computed.marginBottom);
      if (options.dropup) {
        top = buttonPosition.top - popoverSizes.height - popoverSizes.marginTop - popoverSizes.marginBottom;
      }
      if (options.align === "button-right" || display.hasClass(options.rightAlignClassName)) {
        left = buttonPosition.left - popoverSizes.width + hostNode.outerWidth();
      }
      if (options.align === "dt-container" || options.align === "container") {
        if (left < buttonPosition.left) {
          left = -buttonPosition.left;
        }
      }
      if (containerPosition.left + left + popoverSizes.width > $$7(window).width()) {
        left = $$7(window).width() - popoverSizes.width - containerPosition.left;
      }
      if (buttonOffset.left + left < 0) {
        left = -buttonOffset.left;
      }
      if (containerPosition.top + top + popoverSizes.height > $$7(window).height() + $$7(window).scrollTop()) {
        top = buttonPosition.top - popoverSizes.height - popoverSizes.marginTop - popoverSizes.marginBottom;
      }
      if (containerPosition.top + top < $$7(window).scrollTop()) {
        top = buttonPosition.top + hostNode.outerHeight();
      }
      display.css({
        top,
        left
      });
    } else {
      var place = function() {
        var half = $$7(window).height() / 2;
        var top2 = display.height() / 2;
        if (top2 > half) {
          top2 = half;
        }
        display.css("marginTop", top2 * -1);
      };
      place();
      $$7(window).on("resize.dtb-collection", function() {
        place();
      });
    }
    if (options.background) {
      Buttons.background(
        true,
        options.backgroundClassName,
        options.fade,
        options.backgroundHost || hostNode
      );
    }
    $$7("div.dt-button-background").on(
      "click.dtb-collection",
      function() {
      }
    );
    if (options.autoClose) {
      setTimeout(function() {
        dt.on("buttons-action.b-internal", function(e, btn, dt2, node) {
          if (node[0] === hostNode[0]) {
            return;
          }
          close();
        });
      }, 0);
    }
    $$7(display).trigger("buttons-popover.dt");
    dt.on("destroy", close);
    setTimeout(function() {
      closed = false;
      $$7("body").on("click.dtb-collection", function(e) {
        if (closed) {
          return;
        }
        var back = $$7.fn.addBack ? "addBack" : "andSelf";
        var parent = $$7(e.target).parent()[0];
        if (!$$7(e.target).parents()[back]().filter(content).length && !$$7(parent).hasClass("dt-buttons") || $$7(e.target).hasClass("dt-button-background")) {
          close();
        }
      }).on("keyup.dtb-collection", function(e) {
        if (e.keyCode === 27) {
          close();
        }
      }).on("keydown.dtb-collection", function(e) {
        var elements = $$7("a, button", content);
        var active = document.activeElement;
        if (e.keyCode !== 9) {
          return;
        }
        if (elements.index(active) === -1) {
          elements.first().focus();
          e.preventDefault();
        } else if (e.shiftKey) {
          if (active === elements[0]) {
            elements.last().focus();
            e.preventDefault();
          }
        } else {
          if (active === elements.last()[0]) {
            elements.first().focus();
            e.preventDefault();
          }
        }
      });
    }, 0);
  }
});
Buttons.background = function(show, className, fade, insertPoint) {
  if (fade === void 0) {
    fade = 400;
  }
  if (!insertPoint) {
    insertPoint = document.body;
  }
  if (show) {
    _fadeIn(
      $$7("<div/>").addClass(className).css("display", "none").insertAfter(insertPoint),
      fade
    );
  } else {
    _fadeOut($$7("div." + className), fade, function() {
      $$7(this).removeClass(className).remove();
    });
  }
};
Buttons.instanceSelector = function(group, buttons) {
  if (group === void 0 || group === null) {
    return $$7.map(buttons, function(v) {
      return v.inst;
    });
  }
  var ret = [];
  var names = $$7.map(buttons, function(v) {
    return v.name;
  });
  var process = function(input) {
    if (Array.isArray(input)) {
      for (var i = 0, ien = input.length; i < ien; i++) {
        process(input[i]);
      }
      return;
    }
    if (typeof input === "string") {
      if (input.indexOf(",") !== -1) {
        process(input.split(","));
      } else {
        var idx = $$7.inArray(input.trim(), names);
        if (idx !== -1) {
          ret.push(buttons[idx].inst);
        }
      }
    } else if (typeof input === "number") {
      ret.push(buttons[input].inst);
    } else if (typeof input === "object") {
      ret.push(input);
    }
  };
  process(group);
  return ret;
};
Buttons.buttonSelector = function(insts, selector) {
  var ret = [];
  var nodeBuilder = function(a, buttons, baseIdx) {
    var button;
    var idx;
    for (var i2 = 0, ien2 = buttons.length; i2 < ien2; i2++) {
      button = buttons[i2];
      if (button) {
        idx = baseIdx !== void 0 ? baseIdx + i2 : i2 + "";
        a.push({
          node: button.node,
          name: button.conf.name,
          idx
        });
        if (button.buttons) {
          nodeBuilder(a, button.buttons, idx + "-");
        }
      }
    }
  };
  var run = function(selector2, inst2) {
    var i2, ien2;
    var buttons = [];
    nodeBuilder(buttons, inst2.s.buttons);
    var nodes = $$7.map(buttons, function(v) {
      return v.node;
    });
    if (Array.isArray(selector2) || selector2 instanceof $$7) {
      for (i2 = 0, ien2 = selector2.length; i2 < ien2; i2++) {
        run(selector2[i2], inst2);
      }
      return;
    }
    if (selector2 === null || selector2 === void 0 || selector2 === "*") {
      for (i2 = 0, ien2 = buttons.length; i2 < ien2; i2++) {
        ret.push({
          inst: inst2,
          node: buttons[i2].node
        });
      }
    } else if (typeof selector2 === "number") {
      if (inst2.s.buttons[selector2]) {
        ret.push({
          inst: inst2,
          node: inst2.s.buttons[selector2].node
        });
      }
    } else if (typeof selector2 === "string") {
      if (selector2.indexOf(",") !== -1) {
        var a = selector2.split(",");
        for (i2 = 0, ien2 = a.length; i2 < ien2; i2++) {
          run(a[i2].trim(), inst2);
        }
      } else if (selector2.match(/^\d+(\-\d+)*$/)) {
        var indexes = $$7.map(buttons, function(v) {
          return v.idx;
        });
        ret.push({
          inst: inst2,
          node: buttons[$$7.inArray(selector2, indexes)].node
        });
      } else if (selector2.indexOf(":name") !== -1) {
        var name2 = selector2.replace(":name", "");
        for (i2 = 0, ien2 = buttons.length; i2 < ien2; i2++) {
          if (buttons[i2].name === name2) {
            ret.push({
              inst: inst2,
              node: buttons[i2].node
            });
          }
        }
      } else {
        $$7(nodes).filter(selector2).each(function() {
          ret.push({
            inst: inst2,
            node: this
          });
        });
      }
    } else if (typeof selector2 === "object" && selector2.nodeName) {
      var idx = $$7.inArray(selector2, nodes);
      if (idx !== -1) {
        ret.push({
          inst: inst2,
          node: nodes[idx]
        });
      }
    }
  };
  for (var i = 0, ien = insts.length; i < ien; i++) {
    var inst = insts[i];
    run(selector, inst);
  }
  return ret;
};
Buttons.stripData = function(str, config3) {
  if (typeof str !== "string") {
    return str;
  }
  str = str.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  str = str.replace(/<!\-\-.*?\-\->/g, "");
  if (!config3 || config3.stripHtml) {
    str = str.replace(/<[^>]*>/g, "");
  }
  if (!config3 || config3.trim) {
    str = str.replace(/^\s+|\s+$/g, "");
  }
  if (!config3 || config3.stripNewlines) {
    str = str.replace(/\n/g, " ");
  }
  if (!config3 || config3.decodeEntities) {
    if (_entityDecoder) {
      str = _entityDecoder(str);
    } else {
      _exportTextarea.innerHTML = str;
      str = _exportTextarea.value;
    }
  }
  return str;
};
Buttons.entityDecoder = function(fn) {
  _entityDecoder = fn;
};
Buttons.defaults = {
  buttons: ["copy", "excel", "csv", "pdf", "print"],
  name: "main",
  tabIndex: 0,
  dom: {
    container: {
      tag: "div",
      className: "dt-buttons"
    },
    collection: {
      action: {
        dropHtml: '<span class="dt-button-down-arrow">&#x25BC;</span>'
      },
      container: {
        className: "dt-button-collection",
        content: {
          className: "",
          tag: "div"
        },
        tag: "div"
      }
    },
    button: {
      tag: "button",
      className: "dt-button",
      active: "dt-button-active",
      disabled: "disabled",
      spacer: {
        className: "dt-button-spacer",
        tag: "span"
      },
      liner: {
        tag: "span",
        className: ""
      }
    },
    split: {
      action: {
        className: "dt-button-split-drop-button dt-button",
        tag: "button"
      },
      dropdown: {
        align: "split-right",
        className: "dt-button-split-drop",
        dropHtml: '<span class="dt-button-down-arrow">&#x25BC;</span>',
        splitAlignClass: "dt-button-split-left",
        tag: "button"
      },
      wrapper: {
        className: "dt-button-split",
        tag: "div"
      }
    }
  }
};
Buttons.version = "3.0.1";
$$7.extend(_dtButtons, {
  collection: {
    text: function(dt) {
      return dt.i18n("buttons.collection", "Collection");
    },
    className: "buttons-collection",
    closeButton: false,
    init: function(dt, button) {
      button.attr("aria-expanded", false);
    },
    action: function(e, dt, button, config3) {
      if (config3._collection.parents("body").length) {
        this.popover(false, config3);
      } else {
        this.popover(config3._collection, config3);
      }
      if (e.type === "keypress") {
        $$7("a, button", config3._collection).eq(0).focus();
      }
    },
    attr: {
      "aria-haspopup": "dialog"
    }
  },
  split: {
    text: function(dt) {
      return dt.i18n("buttons.split", "Split");
    },
    className: "buttons-split",
    closeButton: false,
    init: function(dt, button) {
      return button.attr("aria-expanded", false);
    },
    action: function(e, dt, button, config3) {
      this.popover(config3._collection, config3);
    },
    attr: {
      "aria-haspopup": "dialog"
    }
  },
  copy: function() {
    if (_dtButtons.copyHtml5) {
      return "copyHtml5";
    }
  },
  csv: function(dt, conf) {
    if (_dtButtons.csvHtml5 && _dtButtons.csvHtml5.available(dt, conf)) {
      return "csvHtml5";
    }
  },
  excel: function(dt, conf) {
    if (_dtButtons.excelHtml5 && _dtButtons.excelHtml5.available(dt, conf)) {
      return "excelHtml5";
    }
  },
  pdf: function(dt, conf) {
    if (_dtButtons.pdfHtml5 && _dtButtons.pdfHtml5.available(dt, conf)) {
      return "pdfHtml5";
    }
  },
  pageLength: function(dt) {
    var lengthMenu = dt.settings()[0].aLengthMenu;
    var vals = [];
    var lang = [];
    var text = function(dt2) {
      return dt2.i18n(
        "buttons.pageLength",
        {
          "-1": "Show all rows",
          _: "Show %d rows"
        },
        dt2.page.len()
      );
    };
    if (Array.isArray(lengthMenu[0])) {
      vals = lengthMenu[0];
      lang = lengthMenu[1];
    } else {
      for (var i = 0; i < lengthMenu.length; i++) {
        var option = lengthMenu[i];
        if ($$7.isPlainObject(option)) {
          vals.push(option.value);
          lang.push(option.label);
        } else {
          vals.push(option);
          lang.push(option);
        }
      }
    }
    return {
      extend: "collection",
      text,
      className: "buttons-page-length",
      autoClose: true,
      buttons: $$7.map(vals, function(val, i2) {
        return {
          text: lang[i2],
          className: "button-page-length",
          action: function(e, dt2) {
            dt2.page.len(val).draw();
          },
          init: function(dt2, node, conf) {
            var that = this;
            var fn = function() {
              that.active(dt2.page.len() === val);
            };
            dt2.on("length.dt" + conf.namespace, fn);
            fn();
          },
          destroy: function(dt2, node, conf) {
            dt2.off("length.dt" + conf.namespace);
          }
        };
      }),
      init: function(dt2, node, conf) {
        var that = this;
        dt2.on("length.dt" + conf.namespace, function() {
          that.text(conf.text);
        });
      },
      destroy: function(dt2, node, conf) {
        dt2.off("length.dt" + conf.namespace);
      }
    };
  },
  spacer: {
    style: "empty",
    spacer: true,
    text: function(dt) {
      return dt.i18n("buttons.spacer", "");
    }
  }
});
DataTable$1.Api.register("buttons()", function(group, selector) {
  if (selector === void 0) {
    selector = group;
    group = void 0;
  }
  this.selector.buttonGroup = group;
  var res = this.iterator(
    true,
    "table",
    function(ctx) {
      if (ctx._buttons) {
        return Buttons.buttonSelector(
          Buttons.instanceSelector(group, ctx._buttons),
          selector
        );
      }
    },
    true
  );
  res._groupSelector = group;
  return res;
});
DataTable$1.Api.register("button()", function(group, selector) {
  var buttons = this.buttons(group, selector);
  if (buttons.length > 1) {
    buttons.splice(1, buttons.length);
  }
  return buttons;
});
DataTable$1.Api.registerPlural(
  "buttons().active()",
  "button().active()",
  function(flag) {
    if (flag === void 0) {
      return this.map(function(set) {
        return set.inst.active(set.node);
      });
    }
    return this.each(function(set) {
      set.inst.active(set.node, flag);
    });
  }
);
DataTable$1.Api.registerPlural(
  "buttons().action()",
  "button().action()",
  function(action) {
    if (action === void 0) {
      return this.map(function(set) {
        return set.inst.action(set.node);
      });
    }
    return this.each(function(set) {
      set.inst.action(set.node, action);
    });
  }
);
DataTable$1.Api.registerPlural(
  "buttons().collectionRebuild()",
  "button().collectionRebuild()",
  function(buttons) {
    return this.each(function(set) {
      for (var i = 0; i < buttons.length; i++) {
        if (typeof buttons[i] === "object") {
          buttons[i].parentConf = set;
        }
      }
      set.inst.collectionRebuild(set.node, buttons);
    });
  }
);
DataTable$1.Api.register(
  ["buttons().enable()", "button().enable()"],
  function(flag) {
    return this.each(function(set) {
      set.inst.enable(set.node, flag);
    });
  }
);
DataTable$1.Api.register(
  ["buttons().disable()", "button().disable()"],
  function() {
    return this.each(function(set) {
      set.inst.disable(set.node);
    });
  }
);
DataTable$1.Api.register("button().index()", function() {
  var idx = null;
  this.each(function(set) {
    var res = set.inst.index(set.node);
    if (res !== null) {
      idx = res;
    }
  });
  return idx;
});
DataTable$1.Api.registerPlural(
  "buttons().nodes()",
  "button().node()",
  function() {
    var jq = $$7();
    $$7(
      this.each(function(set) {
        jq = jq.add(set.inst.node(set.node));
      })
    );
    return jq;
  }
);
DataTable$1.Api.registerPlural(
  "buttons().processing()",
  "button().processing()",
  function(flag) {
    if (flag === void 0) {
      return this.map(function(set) {
        return set.inst.processing(set.node);
      });
    }
    return this.each(function(set) {
      set.inst.processing(set.node, flag);
    });
  }
);
DataTable$1.Api.registerPlural(
  "buttons().text()",
  "button().text()",
  function(label) {
    if (label === void 0) {
      return this.map(function(set) {
        return set.inst.text(set.node);
      });
    }
    return this.each(function(set) {
      set.inst.text(set.node, label);
    });
  }
);
DataTable$1.Api.registerPlural(
  "buttons().trigger()",
  "button().trigger()",
  function() {
    return this.each(function(set) {
      set.inst.node(set.node).trigger("click");
    });
  }
);
DataTable$1.Api.register("button().popover()", function(content, options) {
  return this.map(function(set) {
    return set.inst._popover(content, this.button(this[0].node), options);
  });
});
DataTable$1.Api.register("buttons().containers()", function() {
  var jq = $$7();
  var groupSelector = this._groupSelector;
  this.iterator(true, "table", function(ctx) {
    if (ctx._buttons) {
      var insts = Buttons.instanceSelector(groupSelector, ctx._buttons);
      for (var i = 0, ien = insts.length; i < ien; i++) {
        jq = jq.add(insts[i].container());
      }
    }
  });
  return jq;
});
DataTable$1.Api.register("buttons().container()", function() {
  return this.containers().eq(0);
});
DataTable$1.Api.register("button().add()", function(idx, conf, draw) {
  var ctx = this.context;
  if (ctx.length) {
    var inst = Buttons.instanceSelector(
      this._groupSelector,
      ctx[0]._buttons
    );
    if (inst.length) {
      inst[0].add(conf, idx, draw);
    }
  }
  return this.button(this._groupSelector, idx);
});
DataTable$1.Api.register("buttons().destroy()", function() {
  this.pluck("inst").unique().each(function(inst) {
    inst.destroy();
  });
  return this;
});
DataTable$1.Api.registerPlural(
  "buttons().remove()",
  "buttons().remove()",
  function() {
    this.each(function(set) {
      set.inst.remove(set.node);
    });
    return this;
  }
);
var _infoTimer;
DataTable$1.Api.register("buttons.info()", function(title, message, time) {
  var that = this;
  if (title === false) {
    this.off("destroy.btn-info");
    _fadeOut($$7("#datatables_buttons_info"), 400, function() {
      $$7(this).remove();
    });
    clearTimeout(_infoTimer);
    _infoTimer = null;
    return this;
  }
  if (_infoTimer) {
    clearTimeout(_infoTimer);
  }
  if ($$7("#datatables_buttons_info").length) {
    $$7("#datatables_buttons_info").remove();
  }
  title = title ? "<h2>" + title + "</h2>" : "";
  _fadeIn(
    $$7('<div id="datatables_buttons_info" class="dt-button-info"/>').html(title).append(
      $$7("<div/>")[typeof message === "string" ? "html" : "append"](
        message
      )
    ).css("display", "none").appendTo("body")
  );
  if (time !== void 0 && time !== 0) {
    _infoTimer = setTimeout(function() {
      that.buttons.info(false);
    }, time);
  }
  this.on("destroy.btn-info", function() {
    that.buttons.info(false);
  });
  return this;
});
DataTable$1.Api.register("buttons.exportData()", function(options) {
  if (this.context.length) {
    return _exportData$1(new DataTable$1.Api(this.context[0]), options);
  }
});
DataTable$1.Api.register("buttons.exportInfo()", function(conf) {
  if (!conf) {
    conf = {};
  }
  return {
    filename: _filename(conf, this),
    title: _title(conf, this),
    messageTop: _message(this, conf, conf.message || conf.messageTop, "top"),
    messageBottom: _message(this, conf, conf.messageBottom, "bottom")
  };
});
var _filename = function(config3, dt) {
  var filename = config3.filename === "*" && config3.title !== "*" && config3.title !== void 0 && config3.title !== null && config3.title !== "" ? config3.title : config3.filename;
  if (typeof filename === "function") {
    filename = filename(config3, dt);
  }
  if (filename === void 0 || filename === null) {
    return null;
  }
  if (filename.indexOf("*") !== -1) {
    filename = filename.replace("*", $$7("head > title").text()).trim();
  }
  filename = filename.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
  var extension = _stringOrFunction(config3.extension, config3, dt);
  if (!extension) {
    extension = "";
  }
  return filename + extension;
};
var _stringOrFunction = function(option, config3, dt) {
  if (option === null || option === void 0) {
    return null;
  } else if (typeof option === "function") {
    return option(config3, dt);
  }
  return option;
};
var _title = function(config3, dt) {
  var title = _stringOrFunction(config3.title, config3, dt);
  return title === null ? null : title.indexOf("*") !== -1 ? title.replace("*", $$7("head > title").text() || "Exported data") : title;
};
var _message = function(dt, config3, option, position) {
  var message = _stringOrFunction(option, config3, dt);
  if (message === null) {
    return null;
  }
  var caption = $$7("caption", dt.table().container()).eq(0);
  if (message === "*") {
    var side = caption.css("caption-side");
    if (side !== position) {
      return null;
    }
    return caption.length ? caption.text() : "";
  }
  return message;
};
var _exportTextarea = $$7("<textarea/>")[0];
var _exportData$1 = function(dt, inOpts) {
  var config3 = $$7.extend(
    true,
    {},
    {
      rows: null,
      columns: "",
      modifier: {
        search: "applied",
        order: "applied"
      },
      orthogonal: "display",
      stripHtml: true,
      stripNewlines: true,
      decodeEntities: true,
      trim: true,
      format: {
        header: function(d) {
          return Buttons.stripData(d, config3);
        },
        footer: function(d) {
          return Buttons.stripData(d, config3);
        },
        body: function(d) {
          return Buttons.stripData(d, config3);
        }
      },
      customizeData: null
    },
    inOpts
  );
  var header = dt.columns(config3.columns).indexes().map(function(idx) {
    var col = dt.column(idx);
    return config3.format.header(col.title(), idx, col.header());
  }).toArray();
  var footer = dt.table().footer() ? dt.columns(config3.columns).indexes().map(function(idx) {
    var el = dt.column(idx).footer();
    var val = "";
    if (el) {
      var inner = $$7(".dt-column-title", el);
      val = inner.length ? inner.html() : $$7(el).html();
    }
    return config3.format.footer(val, idx, el);
  }).toArray() : null;
  var modifier = $$7.extend({}, config3.modifier);
  if (dt.select && typeof dt.select.info === "function" && modifier.selected === void 0) {
    if (dt.rows(config3.rows, $$7.extend({ selected: true }, modifier)).any()) {
      $$7.extend(modifier, { selected: true });
    }
  }
  var rowIndexes = dt.rows(config3.rows, modifier).indexes().toArray();
  var selectedCells = dt.cells(rowIndexes, config3.columns, {
    order: modifier.order
  });
  var cells = selectedCells.render(config3.orthogonal).toArray();
  var cellNodes = selectedCells.nodes().toArray();
  var cellIndexes = selectedCells.indexes().toArray();
  var columns = dt.columns(config3.columns).count();
  var rows = columns > 0 ? cells.length / columns : 0;
  var body = [];
  var cellCounter = 0;
  for (var i = 0, ien = rows; i < ien; i++) {
    var row = [columns];
    for (var j = 0; j < columns; j++) {
      row[j] = config3.format.body(
        cells[cellCounter],
        cellIndexes[cellCounter].row,
        cellIndexes[cellCounter].column,
        cellNodes[cellCounter]
      );
      cellCounter++;
    }
    body[i] = row;
  }
  var data = {
    header,
    headerStructure: _headerFormatter(
      config3.format.header,
      dt.table().header.structure(config3.columns)
    ),
    footer,
    footerStructure: _headerFormatter(
      config3.format.footer,
      dt.table().footer.structure(config3.columns)
    ),
    body
  };
  if (config3.customizeData) {
    config3.customizeData(data);
  }
  return data;
};
function _headerFormatter(formatter, struct) {
  for (var i = 0; i < struct.length; i++) {
    for (var j = 0; j < struct[i].length; j++) {
      var item = struct[i][j];
      if (item) {
        item.title = formatter(
          item.title,
          j,
          item.cell
        );
      }
    }
  }
  return struct;
}
$$7.fn.dataTable.Buttons = Buttons;
$$7.fn.DataTable.Buttons = Buttons;
$$7(document).on("init.dt plugin-init.dt", function(e, settings) {
  if (e.namespace !== "dt") {
    return;
  }
  var opts = settings.oInit.buttons || DataTable$1.defaults.buttons;
  if (opts && !settings._buttons) {
    new Buttons(settings, opts).container();
  }
});
function _init(settings, options) {
  var api = new DataTable$1.Api(settings);
  var opts = options ? options : api.init().buttons || DataTable$1.defaults.buttons;
  return new Buttons(api, opts).container();
}
DataTable$1.ext.feature.push({
  fnInit: _init,
  cFeature: "B"
});
if (DataTable$1.feature) {
  DataTable$1.feature.register("buttons", _init);
}
/*! Bootstrap integration for DataTables' Buttons
 * © SpryMedia Ltd - datatables.net/license
 */
let $$6 = jQuery;
$$6.extend(true, DataTable$1.Buttons.defaults, {
  dom: {
    container: {
      className: "dt-buttons btn-group flex-wrap"
    },
    button: {
      className: "btn btn-secondary",
      active: "active"
    },
    collection: {
      action: {
        dropHtml: ""
      },
      container: {
        tag: "div",
        className: "dropdown-menu dt-button-collection"
      },
      closeButton: false,
      button: {
        tag: "a",
        className: "dt-button dropdown-item",
        active: "dt-button-active",
        disabled: "disabled",
        spacer: {
          className: "dropdown-divider",
          tag: "hr"
        }
      }
    },
    split: {
      action: {
        tag: "a",
        className: "btn btn-secondary dt-button-split-drop-button",
        closeButton: false
      },
      dropdown: {
        tag: "button",
        dropHtml: "",
        className: "btn btn-secondary dt-button-split-drop dropdown-toggle dropdown-toggle-split",
        closeButton: false,
        align: "split-left",
        splitAlignClass: "dt-button-split-left"
      },
      wrapper: {
        tag: "div",
        className: "dt-button-split btn-group",
        closeButton: false
      }
    }
  },
  buttonCreated: function(config3, button) {
    return config3.buttons ? $$6('<div class="btn-group"/>').append(button) : button;
  }
});
DataTable$1.ext.buttons.collection.className += " dropdown-toggle";
DataTable$1.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
/*!
 * Column visibility buttons for Buttons and DataTables.
 * © SpryMedia Ltd - datatables.net/license
 */
let $$5 = jQuery;
$$5.extend(DataTable$1.ext.buttons, {
  colvis: function(dt, conf) {
    var node = null;
    var buttonConf = {
      extend: "collection",
      init: function(dt2, n3) {
        node = n3;
      },
      text: function(dt2) {
        return dt2.i18n("buttons.colvis", "Column visibility");
      },
      className: "buttons-colvis",
      closeButton: false,
      buttons: [
        {
          extend: "columnsToggle",
          columns: conf.columns,
          columnText: conf.columnText
        }
      ]
    };
    dt.on("column-reorder.dt" + conf.namespace, function() {
      dt.button(null, dt.button(null, node).node()).collectionRebuild([
        {
          extend: "columnsToggle",
          columns: conf.columns,
          columnText: conf.columnText
        }
      ]);
    });
    return buttonConf;
  },
  columnsToggle: function(dt, conf) {
    var columns = dt.columns(conf.columns).indexes().map(function(idx) {
      return {
        extend: "columnToggle",
        columns: idx,
        columnText: conf.columnText
      };
    }).toArray();
    return columns;
  },
  columnToggle: function(dt, conf) {
    return {
      extend: "columnVisibility",
      columns: conf.columns,
      columnText: conf.columnText
    };
  },
  columnsVisibility: function(dt, conf) {
    var columns = dt.columns(conf.columns).indexes().map(function(idx) {
      return {
        extend: "columnVisibility",
        columns: idx,
        visibility: conf.visibility,
        columnText: conf.columnText
      };
    }).toArray();
    return columns;
  },
  columnVisibility: {
    columns: void 0,
    text: function(dt, button, conf) {
      return conf._columnText(dt, conf);
    },
    className: "buttons-columnVisibility",
    action: function(e, dt, button, conf) {
      var col = dt.columns(conf.columns);
      var curr = col.visible();
      col.visible(
        conf.visibility !== void 0 ? conf.visibility : !(curr.length ? curr[0] : false)
      );
    },
    init: function(dt, button, conf) {
      var that = this;
      button.attr("data-cv-idx", conf.columns);
      dt.on("column-visibility.dt" + conf.namespace, function(e, settings) {
        if (!settings.bDestroying && settings.nTable == dt.settings()[0].nTable) {
          that.active(dt.column(conf.columns).visible());
        }
      }).on("column-reorder.dt" + conf.namespace, function() {
        if (conf.destroying) {
          return;
        }
        if (dt.columns(conf.columns).count() !== 1) {
          return;
        }
        that.text(conf._columnText(dt, conf));
        that.active(dt.column(conf.columns).visible());
      });
      this.active(dt.column(conf.columns).visible());
    },
    destroy: function(dt, button, conf) {
      dt.off("column-visibility.dt" + conf.namespace).off(
        "column-reorder.dt" + conf.namespace
      );
    },
    _columnText: function(dt, conf) {
      if (typeof conf.text === "string") {
        return conf.text;
      }
      var idx = dt.column(conf.columns).index();
      var title = dt.settings()[0].aoColumns[idx].sTitle;
      if (!title) {
        title = dt.column(idx).header().innerHTML;
      }
      title = title.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select>/g, "").replace(/<!\-\-.*?\-\->/g, "").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, "");
      return conf.columnText ? conf.columnText(dt, idx, title) : title;
    }
  },
  colvisRestore: {
    className: "buttons-colvisRestore",
    text: function(dt) {
      return dt.i18n("buttons.colvisRestore", "Restore visibility");
    },
    init: function(dt, button, conf) {
      dt.columns().every(function() {
        var init2 = this.init();
        if (init2.__visOriginal === void 0) {
          init2.__visOriginal = this.visible();
        }
      });
    },
    action: function(e, dt, button, conf) {
      dt.columns().every(function(i) {
        var init2 = this.init();
        this.visible(init2.__visOriginal);
      });
    }
  },
  colvisGroup: {
    className: "buttons-colvisGroup",
    action: function(e, dt, button, conf) {
      dt.columns(conf.show).visible(true, false);
      dt.columns(conf.hide).visible(false, false);
      dt.columns.adjust();
    },
    show: [],
    hide: []
  }
});
/*!
 * HTML5 export buttons for Buttons and DataTables.
 * © SpryMedia Ltd - datatables.net/license
 *
 * FileSaver.js (1.3.3) - MIT license
 * Copyright © 2016 Eli Grey - http://eligrey.com
 */
let $$4 = jQuery;
var useJszip;
var usePdfmake;
function _jsZip() {
  return useJszip || window.JSZip;
}
function _pdfMake() {
  return usePdfmake || window.pdfMake;
}
DataTable$1.Buttons.pdfMake = function(_) {
  if (!_) {
    return _pdfMake();
  }
  usePdfmake = _;
};
DataTable$1.Buttons.jszip = function(_) {
  if (!_) {
    return _jsZip();
  }
  useJszip = _;
};
var _saveAs = function(view) {
  if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
    return;
  }
  var doc = view.document, get_URL = function() {
    return view.URL || view.webkitURL || view;
  }, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"), can_use_save_link = "download" in save_link, click = function(node) {
    var event = new MouseEvent("click");
    node.dispatchEvent(event);
  }, is_safari = /constructor/i.test(view.HTMLElement) || view.safari, is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent), throw_outside = function(ex) {
    (view.setImmediate || view.setTimeout)(function() {
      throw ex;
    }, 0);
  }, force_saveable_type = "application/octet-stream", arbitrary_revoke_timeout = 1e3 * 40, revoke = function(file) {
    var revoker = function() {
      if (typeof file === "string") {
        get_URL().revokeObjectURL(file);
      } else {
        file.remove();
      }
    };
    setTimeout(revoker, arbitrary_revoke_timeout);
  }, dispatch = function(filesaver, event_types, event) {
    event_types = [].concat(event_types);
    var i = event_types.length;
    while (i--) {
      var listener = filesaver["on" + event_types[i]];
      if (typeof listener === "function") {
        try {
          listener.call(filesaver, event || filesaver);
        } catch (ex) {
          throw_outside(ex);
        }
      }
    }
  }, auto_bom = function(blob) {
    if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
      blob.type
    )) {
      return new Blob([String.fromCharCode(65279), blob], {
        type: blob.type
      });
    }
    return blob;
  }, FileSaver = function(blob, name2, no_auto_bom) {
    if (!no_auto_bom) {
      blob = auto_bom(blob);
    }
    var filesaver = this, type = blob.type, force = type === force_saveable_type, object_url, dispatch_all = function() {
      dispatch(
        filesaver,
        "writestart progress write writeend".split(" ")
      );
    }, fs_error = function() {
      if ((is_chrome_ios || force && is_safari) && view.FileReader) {
        var reader = new FileReader();
        reader.onloadend = function() {
          var url = is_chrome_ios ? reader.result : reader.result.replace(
            /^data:[^;]*;/,
            "data:attachment/file;"
          );
          var popup = view.open(url, "_blank");
          if (!popup)
            view.location.href = url;
          url = void 0;
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
        };
        reader.readAsDataURL(blob);
        filesaver.readyState = filesaver.INIT;
        return;
      }
      if (!object_url) {
        object_url = get_URL().createObjectURL(blob);
      }
      if (force) {
        view.location.href = object_url;
      } else {
        var opened = view.open(object_url, "_blank");
        if (!opened) {
          view.location.href = object_url;
        }
      }
      filesaver.readyState = filesaver.DONE;
      dispatch_all();
      revoke(object_url);
    };
    filesaver.readyState = filesaver.INIT;
    if (can_use_save_link) {
      object_url = get_URL().createObjectURL(blob);
      setTimeout(function() {
        save_link.href = object_url;
        save_link.download = name2;
        click(save_link);
        dispatch_all();
        revoke(object_url);
        filesaver.readyState = filesaver.DONE;
      });
      return;
    }
    fs_error();
  }, FS_proto = FileSaver.prototype, saveAs = function(blob, name2, no_auto_bom) {
    return new FileSaver(
      blob,
      name2 || blob.name || "download",
      no_auto_bom
    );
  };
  if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
    return function(blob, name2, no_auto_bom) {
      name2 = name2 || blob.name || "download";
      if (!no_auto_bom) {
        blob = auto_bom(blob);
      }
      return navigator.msSaveOrOpenBlob(blob, name2);
    };
  }
  FS_proto.abort = function() {
  };
  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;
  FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
  return saveAs;
}(
  typeof self !== "undefined" && self || typeof window !== "undefined" && window || globalThis.content
);
DataTable$1.fileSave = _saveAs;
var _sheetname = function(config3) {
  var sheetName = "Sheet1";
  if (config3.sheetName) {
    sheetName = config3.sheetName.replace(/[\[\]\*\/\\\?\:]/g, "");
  }
  return sheetName;
};
var _newLine = function(config3) {
  return config3.newline ? config3.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n";
};
var _exportData = function(dt, config3) {
  var newLine = _newLine(config3);
  var data = dt.buttons.exportData(config3.exportOptions);
  var boundary = config3.fieldBoundary;
  var separator = config3.fieldSeparator;
  var reBoundary = new RegExp(boundary, "g");
  var escapeChar = config3.escapeChar !== void 0 ? config3.escapeChar : "\\";
  var join = function(a) {
    var s = "";
    for (var i2 = 0, ien2 = a.length; i2 < ien2; i2++) {
      if (i2 > 0) {
        s += separator;
      }
      s += boundary ? boundary + ("" + a[i2]).replace(reBoundary, escapeChar + boundary) + boundary : a[i2];
    }
    return s;
  };
  var header = "";
  var footer = "";
  var body = [];
  if (config3.header) {
    header = data.headerStructure.map(function(row) {
      return join(
        row.map(function(cell) {
          return cell ? cell.title : "";
        })
      );
    }).join(newLine) + newLine;
  }
  if (config3.footer && data.footer) {
    footer = data.footerStructure.map(function(row) {
      return join(
        row.map(function(cell) {
          return cell ? cell.title : "";
        })
      );
    }).join(newLine) + newLine;
  }
  for (var i = 0, ien = data.body.length; i < ien; i++) {
    body.push(join(data.body[i]));
  }
  return {
    str: header + body.join(newLine) + newLine + footer,
    rows: body.length
  };
};
var _isDuffSafari = function() {
  var safari = navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1 && navigator.userAgent.indexOf("Opera") === -1;
  if (!safari) {
    return false;
  }
  var version = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
  if (version && version.length > 1 && version[1] * 1 < 603.1) {
    return true;
  }
  return false;
};
function createCellPos(n3) {
  var ordA = "A".charCodeAt(0);
  var ordZ = "Z".charCodeAt(0);
  var len = ordZ - ordA + 1;
  var s = "";
  while (n3 >= 0) {
    s = String.fromCharCode(n3 % len + ordA) + s;
    n3 = Math.floor(n3 / len) - 1;
  }
  return s;
}
try {
  var _serialiser = new XMLSerializer();
  var _ieExcel;
} catch (t) {
}
function _addToZip(zip, obj) {
  if (_ieExcel === void 0) {
    _ieExcel = _serialiser.serializeToString(
      new window.DOMParser().parseFromString(
        excelStrings["xl/worksheets/sheet1.xml"],
        "text/xml"
      )
    ).indexOf("xmlns:r") === -1;
  }
  $$4.each(obj, function(name2, val) {
    if ($$4.isPlainObject(val)) {
      var newDir = zip.folder(name2);
      _addToZip(newDir, val);
    } else {
      if (_ieExcel) {
        var worksheet = val.childNodes[0];
        var i, ien;
        var attrs = [];
        for (i = worksheet.attributes.length - 1; i >= 0; i--) {
          var attrName = worksheet.attributes[i].nodeName;
          var attrValue = worksheet.attributes[i].nodeValue;
          if (attrName.indexOf(":") !== -1) {
            attrs.push({ name: attrName, value: attrValue });
            worksheet.removeAttribute(attrName);
          }
        }
        for (i = 0, ien = attrs.length; i < ien; i++) {
          var attr = val.createAttribute(
            attrs[i].name.replace(":", "_dt_b_namespace_token_")
          );
          attr.value = attrs[i].value;
          worksheet.setAttributeNode(attr);
        }
      }
      var str = _serialiser.serializeToString(val);
      if (_ieExcel) {
        if (str.indexOf("<?xml") === -1) {
          str = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + str;
        }
        str = str.replace(/_dt_b_namespace_token_/g, ":");
        str = str.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "");
      }
      str = str.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
      zip.file(name2, str);
    }
  });
}
function _createNode(doc, nodeName, opts) {
  var tempNode = doc.createElement(nodeName);
  if (opts) {
    if (opts.attr) {
      $$4(tempNode).attr(opts.attr);
    }
    if (opts.children) {
      $$4.each(opts.children, function(key, value) {
        tempNode.appendChild(value);
      });
    }
    if (opts.text !== null && opts.text !== void 0) {
      tempNode.appendChild(doc.createTextNode(opts.text));
    }
  }
  return tempNode;
}
function _excelColWidth(data, col) {
  var max2 = data.header[col].length;
  var len, lineSplit, str;
  if (data.footer && data.footer[col] && data.footer[col].length > max2) {
    max2 = data.footer[col].length;
  }
  for (var i = 0, ien = data.body.length; i < ien; i++) {
    var point = data.body[i][col];
    str = point !== null && point !== void 0 ? point.toString() : "";
    if (str.indexOf("\n") !== -1) {
      lineSplit = str.split("\n");
      lineSplit.sort(function(a, b) {
        return b.length - a.length;
      });
      len = lineSplit[0].length;
    } else {
      len = str.length;
    }
    if (len > max2) {
      max2 = len;
    }
    if (max2 > 40) {
      return 54;
    }
  }
  max2 *= 1.35;
  return max2 > 6 ? max2 : 6;
}
var excelStrings = {
  "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
  "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
  "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
  "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
  "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
  "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="[$$-409]#,##0.00;-[$$-409]#,##0.00"/><numFmt numFmtId="165" formatCode="&quot;\xA3&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$\u20AC-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
};
var _excelSpecials = [
  {
    match: /^\-?\d+\.\d%$/,
    style: 60,
    fmt: function(d) {
      return d / 100;
    }
  },
  {
    match: /^\-?\d+\.?\d*%$/,
    style: 56,
    fmt: function(d) {
      return d / 100;
    }
  },
  { match: /^\-?\$[\d,]+.?\d*$/, style: 57 },
  { match: /^\-?£[\d,]+.?\d*$/, style: 58 },
  { match: /^\-?€[\d,]+.?\d*$/, style: 59 },
  { match: /^\-?\d+$/, style: 65 },
  { match: /^\-?\d+\.\d{2}$/, style: 66 },
  {
    match: /^\([\d,]+\)$/,
    style: 61,
    fmt: function(d) {
      return -1 * d.replace(/[\(\)]/g, "");
    }
  },
  {
    match: /^\([\d,]+\.\d{2}\)$/,
    style: 62,
    fmt: function(d) {
      return -1 * d.replace(/[\(\)]/g, "");
    }
  },
  { match: /^\-?[\d,]+$/, style: 63 },
  { match: /^\-?[\d,]+\.\d{2}$/, style: 64 },
  {
    match: /^[\d]{4}\-[01][\d]\-[0123][\d]$/,
    style: 67,
    fmt: function(d) {
      return Math.round(25569 + Date.parse(d) / (86400 * 1e3));
    }
  }
];
var _excelMergeCells = function(rels, row, column, rowspan, colspan) {
  var mergeCells = $$4("mergeCells", rels);
  mergeCells[0].appendChild(
    _createNode(rels, "mergeCell", {
      attr: {
        ref: createCellPos(column) + row + ":" + createCellPos(column + colspan - 1) + (row + rowspan - 1)
      }
    })
  );
  mergeCells.attr("count", parseFloat(mergeCells.attr("count")) + 1);
};
DataTable$1.ext.buttons.copyHtml5 = {
  className: "buttons-copy buttons-html5",
  text: function(dt) {
    return dt.i18n("buttons.copy", "Copy");
  },
  action: function(e, dt, button, config3, cb) {
    var exportData = _exportData(dt, config3);
    var info2 = dt.buttons.exportInfo(config3);
    var newline = _newLine(config3);
    var output = exportData.str;
    var hiddenDiv = $$4("<div/>").css({
      height: 1,
      width: 1,
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0
    });
    if (info2.title) {
      output = info2.title + newline + newline + output;
    }
    if (info2.messageTop) {
      output = info2.messageTop + newline + newline + output;
    }
    if (info2.messageBottom) {
      output = output + newline + newline + info2.messageBottom;
    }
    if (config3.customize) {
      output = config3.customize(output, config3, dt);
    }
    var textarea = $$4("<textarea readonly/>").val(output).appendTo(hiddenDiv);
    if (document.queryCommandSupported("copy")) {
      hiddenDiv.appendTo(dt.table().container());
      textarea[0].focus();
      textarea[0].select();
      try {
        var successful = document.execCommand("copy");
        hiddenDiv.remove();
        if (successful) {
          dt.buttons.info(
            dt.i18n("buttons.copyTitle", "Copy to clipboard"),
            dt.i18n(
              "buttons.copySuccess",
              {
                1: "Copied one row to clipboard",
                _: "Copied %d rows to clipboard"
              },
              exportData.rows
            ),
            2e3
          );
          cb();
          return;
        }
      } catch (t) {
      }
    }
    var message = $$4(
      "<span>" + dt.i18n(
        "buttons.copyKeys",
        "Press <i>ctrl</i> or <i>\u2318</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape."
      ) + "</span>"
    ).append(hiddenDiv);
    dt.buttons.info(
      dt.i18n("buttons.copyTitle", "Copy to clipboard"),
      message,
      0
    );
    textarea[0].focus();
    textarea[0].select();
    var container = $$4(message).closest(".dt-button-info");
    var close = function() {
      container.off("click.buttons-copy");
      $$4(document).off(".buttons-copy");
      dt.buttons.info(false);
    };
    container.on("click.buttons-copy", close);
    $$4(document).on("keydown.buttons-copy", function(e2) {
      if (e2.keyCode === 27) {
        close();
        cb();
      }
    }).on("copy.buttons-copy cut.buttons-copy", function() {
      close();
      cb();
    });
  },
  async: 100,
  exportOptions: {},
  fieldSeparator: "	",
  fieldBoundary: "",
  header: true,
  footer: true,
  title: "*",
  messageTop: "*",
  messageBottom: "*"
};
DataTable$1.ext.buttons.csvHtml5 = {
  bom: false,
  className: "buttons-csv buttons-html5",
  available: function() {
    return window.FileReader !== void 0 && window.Blob;
  },
  text: function(dt) {
    return dt.i18n("buttons.csv", "CSV");
  },
  action: function(e, dt, button, config3, cb) {
    var output = _exportData(dt, config3).str;
    var info2 = dt.buttons.exportInfo(config3);
    var charset = config3.charset;
    if (config3.customize) {
      output = config3.customize(output, config3, dt);
    }
    if (charset !== false) {
      if (!charset) {
        charset = document.characterSet || document.charset;
      }
      if (charset) {
        charset = ";charset=" + charset;
      }
    } else {
      charset = "";
    }
    if (config3.bom) {
      output = String.fromCharCode(65279) + output;
    }
    _saveAs(
      new Blob([output], { type: "text/csv" + charset }),
      info2.filename,
      true
    );
    cb();
  },
  async: 100,
  filename: "*",
  extension: ".csv",
  exportOptions: {},
  fieldSeparator: ",",
  fieldBoundary: '"',
  escapeChar: '"',
  charset: null,
  header: true,
  footer: true
};
DataTable$1.ext.buttons.excelHtml5 = {
  className: "buttons-excel buttons-html5",
  available: function() {
    return window.FileReader !== void 0 && _jsZip() !== void 0 && !_isDuffSafari() && _serialiser;
  },
  text: function(dt) {
    return dt.i18n("buttons.excel", "Excel");
  },
  action: function(e, dt, button, config3, cb) {
    var rowPos = 0;
    var dataStartRow, dataEndRow;
    var getXml = function(type) {
      var str = excelStrings[type];
      return $$4.parseXML(str);
    };
    var rels = getXml("xl/worksheets/sheet1.xml");
    var relsGet = rels.getElementsByTagName("sheetData")[0];
    var xlsx = {
      _rels: {
        ".rels": getXml("_rels/.rels")
      },
      xl: {
        _rels: {
          "workbook.xml.rels": getXml("xl/_rels/workbook.xml.rels")
        },
        "workbook.xml": getXml("xl/workbook.xml"),
        "styles.xml": getXml("xl/styles.xml"),
        worksheets: {
          "sheet1.xml": rels
        }
      },
      "[Content_Types].xml": getXml("[Content_Types].xml")
    };
    var data = dt.buttons.exportData(config3.exportOptions);
    var currentRow, rowNode;
    var addRow = function(row) {
      currentRow = rowPos + 1;
      rowNode = _createNode(rels, "row", { attr: { r: currentRow } });
      for (var i2 = 0, ien2 = row.length; i2 < ien2; i2++) {
        var cellId = createCellPos(i2) + "" + currentRow;
        var cell = null;
        if (row[i2] === null || row[i2] === void 0 || row[i2] === "") {
          if (config3.createEmptyCells === true) {
            row[i2] = "";
          } else {
            continue;
          }
        }
        var originalContent = row[i2];
        row[i2] = typeof row[i2].trim === "function" ? row[i2].trim() : row[i2];
        for (var j = 0, jen = _excelSpecials.length; j < jen; j++) {
          var special = _excelSpecials[j];
          if (row[i2].match && !row[i2].match(/^0\d+/) && row[i2].match(special.match)) {
            var val = row[i2].replace(/[^\d\.\-]/g, "");
            if (special.fmt) {
              val = special.fmt(val);
            }
            cell = _createNode(rels, "c", {
              attr: {
                r: cellId,
                s: special.style
              },
              children: [_createNode(rels, "v", { text: val })]
            });
            break;
          }
        }
        if (!cell) {
          if (typeof row[i2] === "number" || row[i2].match && row[i2].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/) && !row[i2].match(/^0\d+/)) {
            cell = _createNode(rels, "c", {
              attr: {
                t: "n",
                r: cellId
              },
              children: [_createNode(rels, "v", { text: row[i2] })]
            });
          } else {
            var text = !originalContent.replace ? originalContent : originalContent.replace(
              /[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,
              ""
            );
            cell = _createNode(rels, "c", {
              attr: {
                t: "inlineStr",
                r: cellId
              },
              children: {
                row: _createNode(rels, "is", {
                  children: {
                    row: _createNode(rels, "t", {
                      text,
                      attr: {
                        "xml:space": "preserve"
                      }
                    })
                  }
                })
              }
            });
          }
        }
        rowNode.appendChild(cell);
      }
      relsGet.appendChild(rowNode);
      rowPos++;
    };
    var addHeader = function(structure) {
      structure.forEach(function(row) {
        addRow(
          row.map(function(cell) {
            return cell ? cell.title : "";
          })
        );
        $$4("row:last c", rels).attr("s", "2");
        row.forEach(function(cell, columnCounter) {
          if (cell && (cell.colSpan > 1 || cell.rowSpan > 1)) {
            _excelMergeCells(
              rels,
              rowPos,
              columnCounter,
              cell.rowSpan,
              cell.colSpan
            );
          }
        });
      });
    };
    if (config3.customizeData) {
      config3.customizeData(data);
    }
    var exportInfo = dt.buttons.exportInfo(config3);
    if (exportInfo.title) {
      addRow([exportInfo.title]);
      _excelMergeCells(rels, rowPos, 0, 1, data.header.length);
      $$4("row:last c", rels).attr("s", "51");
    }
    if (exportInfo.messageTop) {
      addRow([exportInfo.messageTop]);
      _excelMergeCells(rels, rowPos, 0, 1, data.header.length);
    }
    if (config3.header) {
      addHeader(data.headerStructure);
    }
    dataStartRow = rowPos;
    for (var n3 = 0, ie = data.body.length; n3 < ie; n3++) {
      addRow(data.body[n3]);
    }
    dataEndRow = rowPos;
    if (config3.footer && data.footer) {
      addHeader(data.footerStructure);
    }
    if (exportInfo.messageBottom) {
      addRow([exportInfo.messageBottom]);
      _excelMergeCells(rels, rowPos, 0, 1, data.header.length);
    }
    var cols = _createNode(rels, "cols");
    $$4("worksheet", rels).prepend(cols);
    for (var i = 0, ien = data.header.length; i < ien; i++) {
      cols.appendChild(
        _createNode(rels, "col", {
          attr: {
            min: i + 1,
            max: i + 1,
            width: _excelColWidth(data, i),
            customWidth: 1
          }
        })
      );
    }
    var workbook = xlsx.xl["workbook.xml"];
    $$4("sheets sheet", workbook).attr("name", _sheetname(config3));
    if (config3.autoFilter) {
      $$4("mergeCells", rels).before(
        _createNode(rels, "autoFilter", {
          attr: {
            ref: "A" + dataStartRow + ":" + createCellPos(data.header.length - 1) + dataEndRow
          }
        })
      );
      $$4("definedNames", workbook).append(
        _createNode(workbook, "definedName", {
          attr: {
            name: "_xlnm._FilterDatabase",
            localSheetId: "0",
            hidden: 1
          },
          text: _sheetname(config3) + "!$A$" + dataStartRow + ":" + createCellPos(data.header.length - 1) + dataEndRow
        })
      );
    }
    if (config3.customize) {
      config3.customize(xlsx, config3, dt);
    }
    if ($$4("mergeCells", rels).children().length === 0) {
      $$4("mergeCells", rels).remove();
    }
    var jszip = _jsZip();
    var zip = new jszip();
    var zipConfig = {
      compression: "DEFLATE",
      type: "blob",
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    };
    _addToZip(zip, xlsx);
    var filename = exportInfo.filename;
    if (filename > 175) {
      filename = filename.substr(0, 175);
    }
    if (zip.generateAsync) {
      zip.generateAsync(zipConfig).then(function(blob) {
        _saveAs(blob, filename);
        cb();
      });
    } else {
      _saveAs(zip.generate(zipConfig), filename);
      cb();
    }
  },
  async: 100,
  filename: "*",
  extension: ".xlsx",
  exportOptions: {},
  header: true,
  footer: true,
  title: "*",
  messageTop: "*",
  messageBottom: "*",
  createEmptyCells: false,
  autoFilter: false,
  sheetName: ""
};
DataTable$1.ext.buttons.pdfHtml5 = {
  className: "buttons-pdf buttons-html5",
  available: function() {
    return window.FileReader !== void 0 && _pdfMake();
  },
  text: function(dt) {
    return dt.i18n("buttons.pdf", "PDF");
  },
  action: function(e, dt, button, config3, cb) {
    var data = dt.buttons.exportData(config3.exportOptions);
    var info2 = dt.buttons.exportInfo(config3);
    var rows = [];
    if (config3.header) {
      data.headerStructure.forEach(function(row) {
        rows.push(
          row.map(function(cell) {
            return cell ? {
              text: cell.title,
              colSpan: cell.colspan,
              rowSpan: cell.rowspan,
              style: "tableHeader"
            } : {};
          })
        );
      });
    }
    for (var i = 0, ien = data.body.length; i < ien; i++) {
      rows.push(
        data.body[i].map(function(d) {
          return {
            text: d === null || d === void 0 ? "" : typeof d === "string" ? d : d.toString()
          };
        })
      );
    }
    if (config3.footer) {
      data.footerStructure.forEach(function(row) {
        rows.push(
          row.map(function(cell) {
            return cell ? {
              text: cell.title,
              colSpan: cell.colspan,
              rowSpan: cell.rowspan,
              style: "tableHeader"
            } : {};
          })
        );
      });
    }
    var doc = {
      pageSize: config3.pageSize,
      pageOrientation: config3.orientation,
      content: [
        {
          style: "table",
          table: {
            headerRows: data.headerStructure.length,
            footerRows: data.footerStructure.length,
            body: rows
          },
          layout: {
            hLineWidth: function(i2, node) {
              if (i2 === 0 || i2 === node.table.body.length) {
                return 0;
              }
              return 0.5;
            },
            vLineWidth: function() {
              return 0;
            },
            hLineColor: function(i2, node) {
              return i2 === node.table.headerRows || i2 === node.table.body.length - node.table.footerRows ? "#333" : "#ddd";
            },
            fillColor: function(rowIndex) {
              if (rowIndex < data.headerStructure.length) {
                return "#fff";
              }
              return rowIndex % 2 === 0 ? "#f3f3f3" : null;
            },
            paddingTop: function() {
              return 5;
            },
            paddingBottom: function() {
              return 5;
            }
          }
        }
      ],
      styles: {
        tableHeader: {
          bold: true,
          fontSize: 11,
          alignment: "center"
        },
        tableFooter: {
          bold: true,
          fontSize: 11
        },
        table: {
          margin: [0, 5, 0, 5]
        },
        title: {
          alignment: "center",
          fontSize: 13
        },
        message: {}
      },
      defaultStyle: {
        fontSize: 10
      }
    };
    if (info2.messageTop) {
      doc.content.unshift({
        text: info2.messageTop,
        style: "message",
        margin: [0, 0, 0, 12]
      });
    }
    if (info2.messageBottom) {
      doc.content.push({
        text: info2.messageBottom,
        style: "message",
        margin: [0, 0, 0, 12]
      });
    }
    if (info2.title) {
      doc.content.unshift({
        text: info2.title,
        style: "title",
        margin: [0, 0, 0, 12]
      });
    }
    if (config3.customize) {
      config3.customize(doc, config3, dt);
    }
    var pdf = _pdfMake().createPdf(doc);
    if (config3.download === "open" && !_isDuffSafari()) {
      pdf.open();
    } else {
      pdf.download(info2.filename);
    }
    cb();
  },
  async: 100,
  title: "*",
  filename: "*",
  extension: ".pdf",
  exportOptions: {},
  orientation: "portrait",
  pageSize: navigator.language === "en-US" || navigator.language === "en-CA" ? "LETTER" : "A4",
  header: true,
  footer: true,
  messageTop: "*",
  messageBottom: "*",
  customize: null,
  download: "download"
};
/*!
 * Print button for Buttons and DataTables.
 * © SpryMedia Ltd - datatables.net/license
 */
let $$3 = jQuery;
var _link = document.createElement("a");
var _styleToAbs = function(el) {
  var clone2 = $$3(el).clone()[0];
  if (clone2.nodeName.toLowerCase() === "link") {
    clone2.href = _relToAbs(clone2.href);
  }
  return clone2.outerHTML;
};
var _relToAbs = function(href) {
  _link.href = href;
  var linkHost = _link.host;
  if (linkHost.indexOf("/") === -1 && _link.pathname.indexOf("/") !== 0) {
    linkHost += "/";
  }
  return _link.protocol + "//" + linkHost + _link.pathname + _link.search;
};
DataTable$1.ext.buttons.print = {
  className: "buttons-print",
  text: function(dt) {
    return dt.i18n("buttons.print", "Print");
  },
  action: function(e, dt, button, config3, cb) {
    var data = dt.buttons.exportData(
      $$3.extend({ decodeEntities: false }, config3.exportOptions)
    );
    var exportInfo = dt.buttons.exportInfo(config3);
    var columnClasses = dt.columns(config3.exportOptions.columns).nodes().map(function(n3) {
      return n3.className;
    }).toArray();
    var addRow = function(d, tag2) {
      var str = "<tr>";
      for (var i2 = 0, ien2 = d.length; i2 < ien2; i2++) {
        var dataOut = d[i2] === null || d[i2] === void 0 ? "" : d[i2];
        var classAttr = columnClasses[i2] ? 'class="' + columnClasses[i2] + '"' : "";
        str += "<" + tag2 + " " + classAttr + ">" + dataOut + "</" + tag2 + ">";
      }
      return str + "</tr>";
    };
    var html = '<table class="' + dt.table().node().className + '">';
    if (config3.header) {
      var headerRows = data.headerStructure.map(function(row) {
        return "<tr>" + row.map(function(cell) {
          return cell ? '<th colspan="' + cell.colspan + '" rowspan="' + cell.rowspan + '">' + cell.title + "</th>" : "";
        }).join("") + "</tr>";
      });
      html += "<thead>" + headerRows.join("") + "</thead>";
    }
    html += "<tbody>";
    for (var i = 0, ien = data.body.length; i < ien; i++) {
      html += addRow(data.body[i], "td");
    }
    html += "</tbody>";
    if (config3.footer && data.footer) {
      var footerRows = data.footerStructure.map(function(row) {
        return "<tr>" + row.map(function(cell) {
          return cell ? '<th colspan="' + cell.colspan + '" rowspan="' + cell.rowspan + '">' + cell.title + "</th>" : "";
        }).join("") + "</tr>";
      });
      html += "<tfoot>" + footerRows.join("") + "</tfoot>";
    }
    html += "</table>";
    var win = window.open("", "");
    if (!win) {
      dt.buttons.info(
        dt.i18n("buttons.printErrorTitle", "Unable to open print view"),
        dt.i18n(
          "buttons.printErrorMsg",
          "Please allow popups in your browser for this site to be able to view the print view."
        ),
        5e3
      );
      return;
    }
    win.document.close();
    var head = "<title>" + exportInfo.title + "</title>";
    $$3("style, link").each(function() {
      head += _styleToAbs(this);
    });
    try {
      win.document.head.innerHTML = head;
    } catch (e2) {
      $$3(win.document.head).html(head);
    }
    win.document.body.innerHTML = "<h1>" + exportInfo.title + "</h1><div>" + (exportInfo.messageTop || "") + "</div>" + html + "<div>" + (exportInfo.messageBottom || "") + "</div>";
    $$3(win.document.body).addClass("dt-print-view");
    $$3("img", win.document.body).each(function(i2, img) {
      img.setAttribute("src", _relToAbs(img.getAttribute("src")));
    });
    if (config3.customize) {
      config3.customize(win, config3, dt);
    }
    var autoPrint = function() {
      if (config3.autoPrint) {
        win.print();
        win.close();
      }
    };
    win.setTimeout(autoPrint, 1e3);
    cb();
  },
  async: 100,
  title: "*",
  messageTop: "*",
  messageBottom: "*",
  exportOptions: {},
  header: true,
  footer: true,
  autoPrint: true,
  customize: null
};
/*! Select for DataTables 2.0.0
 * © SpryMedia Ltd - datatables.net/license/mit
 */
let $$2 = jQuery;
DataTable$1.select = {};
DataTable$1.select.version = "2.0.0";
DataTable$1.select.init = function(dt) {
  var ctx = dt.settings()[0];
  if (!DataTable$1.versionCheck("2")) {
    throw "Warning: Select requires DataTables 2 or newer";
  }
  if (ctx._select) {
    return;
  }
  var savedSelected = dt.state.loaded();
  var selectAndSave = function(e, settings, data) {
    if (data === null || data.select === void 0) {
      return;
    }
    if (dt.rows({ selected: true }).any()) {
      dt.rows().deselect();
    }
    if (data.select.rows !== void 0) {
      dt.rows(data.select.rows).select();
    }
    if (dt.columns({ selected: true }).any()) {
      dt.columns().deselect();
    }
    if (data.select.columns !== void 0) {
      dt.columns(data.select.columns).select();
    }
    if (dt.cells({ selected: true }).any()) {
      dt.cells().deselect();
    }
    if (data.select.cells !== void 0) {
      for (var i = 0; i < data.select.cells.length; i++) {
        dt.cell(data.select.cells[i].row, data.select.cells[i].column).select();
      }
    }
    dt.state.save();
  };
  dt.on("stateSaveParams", function(e, settings, data) {
    data.select = {};
    data.select.rows = dt.rows({ selected: true }).ids(true).toArray();
    data.select.columns = dt.columns({ selected: true })[0];
    data.select.cells = dt.cells({ selected: true })[0].map(function(coords) {
      return { row: dt.row(coords.row).id(true), column: coords.column };
    });
  }).on("stateLoadParams", selectAndSave).one("init", function() {
    selectAndSave(void 0, void 0, savedSelected);
  });
  var init2 = ctx.oInit.select;
  var defaults = DataTable$1.defaults.select;
  var opts = init2 === void 0 ? defaults : init2;
  var items = "row";
  var style = "api";
  var blurable = false;
  var toggleable = true;
  var info2 = true;
  var selector = "td, th";
  var className = "selected";
  var headerCheckbox = true;
  var setStyle = false;
  ctx._select = {
    infoEls: []
  };
  if (opts === true) {
    style = "os";
    setStyle = true;
  } else if (typeof opts === "string") {
    style = opts;
    setStyle = true;
  } else if ($$2.isPlainObject(opts)) {
    if (opts.blurable !== void 0) {
      blurable = opts.blurable;
    }
    if (opts.toggleable !== void 0) {
      toggleable = opts.toggleable;
    }
    if (opts.info !== void 0) {
      info2 = opts.info;
    }
    if (opts.items !== void 0) {
      items = opts.items;
    }
    if (opts.style !== void 0) {
      style = opts.style;
      setStyle = true;
    } else {
      style = "os";
      setStyle = true;
    }
    if (opts.selector !== void 0) {
      selector = opts.selector;
    }
    if (opts.className !== void 0) {
      className = opts.className;
    }
    if (opts.headerCheckbox !== void 0) {
      headerCheckbox = opts.headerCheckbox;
    }
  }
  dt.select.selector(selector);
  dt.select.items(items);
  dt.select.style(style);
  dt.select.blurable(blurable);
  dt.select.toggleable(toggleable);
  dt.select.info(info2);
  ctx._select.className = className;
  if (!setStyle && $$2(dt.table().node()).hasClass("selectable")) {
    dt.select.style("os");
  }
  if (headerCheckbox) {
    initCheckboxHeader(dt);
    dt.on("init", function() {
      initCheckboxHeader(dt);
    });
  }
};
function cellRange(dt, idx, last) {
  var indexes;
  var columnIndexes;
  var rowIndexes;
  var selectColumns = function(start, end) {
    if (start > end) {
      var tmp = end;
      end = start;
      start = tmp;
    }
    var record = false;
    return dt.columns(":visible").indexes().filter(function(i) {
      if (i === start) {
        record = true;
      }
      if (i === end) {
        record = false;
        return true;
      }
      return record;
    });
  };
  var selectRows = function(start, end) {
    var indexes2 = dt.rows({ search: "applied" }).indexes();
    if (indexes2.indexOf(start) > indexes2.indexOf(end)) {
      var tmp = end;
      end = start;
      start = tmp;
    }
    var record = false;
    return indexes2.filter(function(i) {
      if (i === start) {
        record = true;
      }
      if (i === end) {
        record = false;
        return true;
      }
      return record;
    });
  };
  if (!dt.cells({ selected: true }).any() && !last) {
    columnIndexes = selectColumns(0, idx.column);
    rowIndexes = selectRows(0, idx.row);
  } else {
    columnIndexes = selectColumns(last.column, idx.column);
    rowIndexes = selectRows(last.row, idx.row);
  }
  indexes = dt.cells(rowIndexes, columnIndexes).flatten();
  if (!dt.cells(idx, { selected: true }).any()) {
    dt.cells(indexes).select();
  } else {
    dt.cells(indexes).deselect();
  }
}
function disableMouseSelection(dt) {
  var ctx = dt.settings()[0];
  var selector = ctx._select.selector;
  $$2(dt.table().container()).off("mousedown.dtSelect", selector).off("mouseup.dtSelect", selector).off("click.dtSelect", selector);
  $$2("body").off("click.dtSelect" + _safeId(dt.table().node()));
}
function enableMouseSelection(dt) {
  var container = $$2(dt.table().container());
  var ctx = dt.settings()[0];
  var selector = ctx._select.selector;
  var matchSelection;
  container.on("mousedown.dtSelect", selector, function(e) {
    if (e.shiftKey || e.metaKey || e.ctrlKey) {
      container.css("-moz-user-select", "none").one("selectstart.dtSelect", selector, function() {
        return false;
      });
    }
    if (window.getSelection) {
      matchSelection = window.getSelection();
    }
  }).on("mouseup.dtSelect", selector, function() {
    container.css("-moz-user-select", "");
  }).on("click.dtSelect", selector, function(e) {
    var items = dt.select.items();
    var idx;
    if (matchSelection) {
      var selection = window.getSelection();
      if (!selection.anchorNode || $$2(selection.anchorNode).closest("table")[0] === dt.table().node()) {
        if (selection !== matchSelection) {
          return;
        }
      }
    }
    var ctx2 = dt.settings()[0];
    var container2 = dt.table().container();
    if ($$2(e.target).closest("div.dt-container")[0] != container2) {
      return;
    }
    var cell = dt.cell($$2(e.target).closest("td, th"));
    if (!cell.any()) {
      return;
    }
    var event = $$2.Event("user-select.dt");
    eventTrigger(dt, event, [items, cell, e]);
    if (event.isDefaultPrevented()) {
      return;
    }
    var cellIndex = cell.index();
    if (items === "row") {
      idx = cellIndex.row;
      typeSelect(e, dt, ctx2, "row", idx);
    } else if (items === "column") {
      idx = cell.index().column;
      typeSelect(e, dt, ctx2, "column", idx);
    } else if (items === "cell") {
      idx = cell.index();
      typeSelect(e, dt, ctx2, "cell", idx);
    }
    ctx2._select_lastCell = cellIndex;
  });
  $$2("body").on("click.dtSelect" + _safeId(dt.table().node()), function(e) {
    if (ctx._select.blurable) {
      if ($$2(e.target).parents().filter(dt.table().container()).length) {
        return;
      }
      if ($$2(e.target).parents("html").length === 0) {
        return;
      }
      if ($$2(e.target).parents("div.DTE").length) {
        return;
      }
      var event = $$2.Event("select-blur.dt");
      eventTrigger(dt, event, [e.target, e]);
      if (event.isDefaultPrevented()) {
        return;
      }
      clear(ctx, true);
    }
  });
}
function eventTrigger(api, type, args, any) {
  if (any && !api.flatten().length) {
    return;
  }
  if (typeof type === "string") {
    type = type + ".dt";
  }
  args.unshift(api);
  $$2(api.table().node()).trigger(type, args);
}
function info(api, node) {
  if (api.select.style() === "api" || api.select.info() === false) {
    return;
  }
  var rows = api.rows({ selected: true }).flatten().length;
  var columns = api.columns({ selected: true }).flatten().length;
  var cells = api.cells({ selected: true }).flatten().length;
  var add2 = function(el2, name2, num) {
    el2.append(
      $$2('<span class="select-item"/>').append(
        api.i18n(
          "select." + name2 + "s",
          { _: "%d " + name2 + "s selected", 0: "", 1: "1 " + name2 + " selected" },
          num
        )
      )
    );
  };
  var el = $$2(node);
  var output = $$2('<span class="select-info"/>');
  add2(output, "row", rows);
  add2(output, "column", columns);
  add2(output, "cell", cells);
  var existing = el.children("span.select-info");
  if (existing.length) {
    existing.remove();
  }
  if (output.text() !== "") {
    el.append(output);
  }
}
function initCheckboxHeader(dt) {
  dt.columns(".dt-select").every(function() {
    var header = this.header();
    if (!$$2("input", header).length) {
      var input = $$2("<input>").attr({
        class: "dt-select-checkbox",
        type: "checkbox",
        "aria-label": dt.i18n("select.aria.headerCheckbox") || "Select all rows"
      }).appendTo(header).on("change", function() {
        if (this.checked) {
          dt.rows({ search: "applied" }).select();
        } else {
          dt.rows({ selected: true }).deselect();
        }
      }).on("click", function(e) {
        e.stopPropagation();
      });
      dt.on("draw select deselect", function(e, pass, type) {
        if (type === "row" || !type) {
          var count = dt.rows({ selected: true }).count();
          var search = dt.rows({ search: "applied", selected: true }).count();
          var available = dt.rows({ search: "applied" }).count();
          if (search && search <= count && search === available) {
            input.prop("checked", true).prop("indeterminate", false);
          } else if (search === 0 && count === 0) {
            input.prop("checked", false).prop("indeterminate", false);
          } else {
            input.prop("checked", false).prop("indeterminate", true);
          }
        }
      });
    }
  });
}
function init(ctx) {
  var api = new DataTable$1.Api(ctx);
  ctx._select_init = true;
  ctx.aoRowCreatedCallback.push(
    function(row, data, index) {
      var i, ien;
      var d = ctx.aoData[index];
      if (d._select_selected) {
        $$2(row).addClass(ctx._select.className);
      }
      for (i = 0, ien = ctx.aoColumns.length; i < ien; i++) {
        if (ctx.aoColumns[i]._select_selected || d._selected_cells && d._selected_cells[i]) {
          $$2(d.anCells[i]).addClass(ctx._select.className);
        }
      }
    }
  );
  api.on("preXhr.dt.dtSelect", function(e, settings) {
    if (settings !== api.settings()[0]) {
      return;
    }
    var rows = api.rows({ selected: true }).ids(true).filter(function(d) {
      return d !== void 0;
    });
    var cells = api.cells({ selected: true }).eq(0).map(function(cellIdx) {
      var id = api.row(cellIdx.row).id(true);
      return id ? { row: id, column: cellIdx.column } : void 0;
    }).filter(function(d) {
      return d !== void 0;
    });
    api.one("draw.dt.dtSelect", function() {
      api.rows(rows).select();
      if (cells.any()) {
        cells.each(function(id) {
          api.cells(id.row, id.column).select();
        });
      }
    });
  });
  api.on("info.dt", function(e, ctx2, node) {
    if (!ctx2._select.infoEls.includes(node)) {
      ctx2._select.infoEls.push(node);
    }
    info(api, node);
  });
  api.on("select.dtSelect.dt deselect.dtSelect.dt", function() {
    ctx._select.infoEls.forEach(function(el) {
      info(api, el);
    });
    api.state.save();
  });
  api.on("destroy.dtSelect", function() {
    $$2(api.rows({ selected: true }).nodes()).removeClass(api.settings()[0]._select.className);
    disableMouseSelection(api);
    api.off(".dtSelect");
    $$2("body").off(".dtSelect" + _safeId(api.table().node()));
  });
}
function rowColumnRange(dt, type, idx, last) {
  var indexes = dt[type + "s"]({ search: "applied" }).indexes();
  var idx1 = indexes.indexOf(last);
  var idx2 = indexes.indexOf(idx);
  if (!dt[type + "s"]({ selected: true }).any() && idx1 === -1) {
    indexes.splice(indexes.indexOf(idx) + 1, indexes.length);
  } else {
    if (idx1 > idx2) {
      var tmp = idx2;
      idx2 = idx1;
      idx1 = tmp;
    }
    indexes.splice(idx2 + 1, indexes.length);
    indexes.splice(0, idx1);
  }
  if (!dt[type](idx, { selected: true }).any()) {
    dt[type + "s"](indexes).select();
  } else {
    indexes.splice(indexes.indexOf(idx), 1);
    dt[type + "s"](indexes).deselect();
  }
}
function clear(ctx, force) {
  if (force || ctx._select.style === "single") {
    var api = new DataTable$1.Api(ctx);
    api.rows({ selected: true }).deselect();
    api.columns({ selected: true }).deselect();
    api.cells({ selected: true }).deselect();
  }
}
function typeSelect(e, dt, ctx, type, idx) {
  var style = dt.select.style();
  var toggleable = dt.select.toggleable();
  var isSelected = dt[type](idx, { selected: true }).any();
  if (isSelected && !toggleable) {
    return;
  }
  if (style === "os") {
    if (e.ctrlKey || e.metaKey) {
      dt[type](idx).select(!isSelected);
    } else if (e.shiftKey) {
      if (type === "cell") {
        cellRange(dt, idx, ctx._select_lastCell || null);
      } else {
        rowColumnRange(
          dt,
          type,
          idx,
          ctx._select_lastCell ? ctx._select_lastCell[type] : null
        );
      }
    } else {
      var selected = dt[type + "s"]({ selected: true });
      if (isSelected && selected.flatten().length === 1) {
        dt[type](idx).deselect();
      } else {
        selected.deselect();
        dt[type](idx).select();
      }
    }
  } else if (style == "multi+shift") {
    if (e.shiftKey) {
      if (type === "cell") {
        cellRange(dt, idx, ctx._select_lastCell || null);
      } else {
        rowColumnRange(
          dt,
          type,
          idx,
          ctx._select_lastCell ? ctx._select_lastCell[type] : null
        );
      }
    } else {
      dt[type](idx).select(!isSelected);
    }
  } else {
    dt[type](idx).select(!isSelected);
  }
}
function _safeId(node) {
  return node.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
}
$$2.each(
  [
    { type: "row", prop: "aoData" },
    { type: "column", prop: "aoColumns" }
  ],
  function(i, o) {
    DataTable$1.ext.selector[o.type].push(function(settings, opts, indexes) {
      var selected = opts.selected;
      var data;
      var out = [];
      if (selected !== true && selected !== false) {
        return indexes;
      }
      for (var i2 = 0, ien = indexes.length; i2 < ien; i2++) {
        data = settings[o.prop][indexes[i2]];
        if (data && (selected === true && data._select_selected === true || selected === false && !data._select_selected)) {
          out.push(indexes[i2]);
        }
      }
      return out;
    });
  }
);
DataTable$1.ext.selector.cell.push(function(settings, opts, cells) {
  var selected = opts.selected;
  var rowData;
  var out = [];
  if (selected === void 0) {
    return cells;
  }
  for (var i = 0, ien = cells.length; i < ien; i++) {
    rowData = settings.aoData[cells[i].row];
    if (rowData && (selected === true && rowData._selected_cells && rowData._selected_cells[cells[i].column] === true || selected === false && (!rowData._selected_cells || !rowData._selected_cells[cells[i].column]))) {
      out.push(cells[i]);
    }
  }
  return out;
});
var apiRegister = DataTable$1.Api.register;
var apiRegisterPlural = DataTable$1.Api.registerPlural;
apiRegister("select()", function() {
  return this.iterator("table", function(ctx) {
    DataTable$1.select.init(new DataTable$1.Api(ctx));
  });
});
apiRegister("select.blurable()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.blurable;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.blurable = flag;
  });
});
apiRegister("select.toggleable()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.toggleable;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.toggleable = flag;
  });
});
apiRegister("select.info()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.info;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.info = flag;
  });
});
apiRegister("select.items()", function(items) {
  if (items === void 0) {
    return this.context[0]._select.items;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.items = items;
    eventTrigger(new DataTable$1.Api(ctx), "selectItems", [items]);
  });
});
apiRegister("select.style()", function(style) {
  if (style === void 0) {
    return this.context[0]._select.style;
  }
  return this.iterator("table", function(ctx) {
    if (!ctx._select) {
      DataTable$1.select.init(new DataTable$1.Api(ctx));
    }
    if (!ctx._select_init) {
      init(ctx);
    }
    ctx._select.style = style;
    var dt = new DataTable$1.Api(ctx);
    disableMouseSelection(dt);
    if (style !== "api") {
      enableMouseSelection(dt);
    }
    eventTrigger(new DataTable$1.Api(ctx), "selectStyle", [style]);
  });
});
apiRegister("select.selector()", function(selector) {
  if (selector === void 0) {
    return this.context[0]._select.selector;
  }
  return this.iterator("table", function(ctx) {
    disableMouseSelection(new DataTable$1.Api(ctx));
    ctx._select.selector = selector;
    if (ctx._select.style !== "api") {
      enableMouseSelection(new DataTable$1.Api(ctx));
    }
  });
});
apiRegister("select.last()", function(set) {
  let ctx = this.context[0];
  if (set) {
    ctx._select_lastCell = set;
    return this;
  }
  return ctx._select_lastCell;
});
apiRegisterPlural("rows().select()", "row().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("row", function(ctx, idx) {
    clear(ctx);
    var dtData = ctx.aoData[idx];
    var dtColumns = ctx.aoColumns;
    $$2(dtData.nTr).addClass(ctx._select.className);
    dtData._select_selected = true;
    for (var i = 0; i < dtColumns.length; i++) {
      var col = dtColumns[i];
      if (col.sType === "select-checkbox") {
        $$2("input.dt-select-checkbox", dtData.anCells[i]).prop("checked", true);
        dtData._aSortData[i] = null;
      }
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "select", ["row", api[i]], true);
  });
  return this;
});
apiRegister("row().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoData[this[0]] && ctx.aoData[this[0]]._select_selected) {
    return true;
  }
  return false;
});
apiRegisterPlural("columns().select()", "column().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("column", function(ctx, idx) {
    clear(ctx);
    ctx.aoColumns[idx]._select_selected = true;
    var column = new DataTable$1.Api(ctx).column(idx);
    $$2(column.header()).addClass(ctx._select.className);
    $$2(column.footer()).addClass(ctx._select.className);
    column.nodes().to$().addClass(ctx._select.className);
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "select", ["column", api[i]], true);
  });
  return this;
});
apiRegister("column().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoColumns[this[0]] && ctx.aoColumns[this[0]]._select_selected) {
    return true;
  }
  return false;
});
apiRegisterPlural("cells().select()", "cell().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("cell", function(ctx, rowIdx, colIdx) {
    clear(ctx);
    var data = ctx.aoData[rowIdx];
    if (data._selected_cells === void 0) {
      data._selected_cells = [];
    }
    data._selected_cells[colIdx] = true;
    if (data.anCells) {
      $$2(data.anCells[colIdx]).addClass(ctx._select.className);
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "select", ["cell", api.cells(api[i]).indexes().toArray()], true);
  });
  return this;
});
apiRegister("cell().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length) {
    var row = ctx.aoData[this[0][0].row];
    if (row && row._selected_cells && row._selected_cells[this[0][0].column]) {
      return true;
    }
  }
  return false;
});
apiRegisterPlural("rows().deselect()", "row().deselect()", function() {
  var api = this;
  this.iterator("row", function(ctx, idx) {
    var dtData = ctx.aoData[idx];
    var dtColumns = ctx.aoColumns;
    $$2(dtData.nTr).removeClass(ctx._select.className);
    dtData._select_selected = false;
    ctx._select_lastCell = null;
    for (var i = 0; i < dtColumns.length; i++) {
      var col = dtColumns[i];
      if (col.sType === "select-checkbox") {
        $$2("input.dt-select-checkbox", dtData.anCells[i]).prop("checked", false);
        dtData._aSortData[i] = null;
      }
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "deselect", ["row", api[i]], true);
  });
  return this;
});
apiRegisterPlural("columns().deselect()", "column().deselect()", function() {
  var api = this;
  this.iterator("column", function(ctx, idx) {
    ctx.aoColumns[idx]._select_selected = false;
    var api2 = new DataTable$1.Api(ctx);
    var column = api2.column(idx);
    $$2(column.header()).removeClass(ctx._select.className);
    $$2(column.footer()).removeClass(ctx._select.className);
    api2.cells(null, idx).indexes().each(function(cellIdx) {
      var data = ctx.aoData[cellIdx.row];
      var cellSelected = data._selected_cells;
      if (data.anCells && (!cellSelected || !cellSelected[cellIdx.column])) {
        $$2(data.anCells[cellIdx.column]).removeClass(ctx._select.className);
      }
    });
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "deselect", ["column", api[i]], true);
  });
  return this;
});
apiRegisterPlural("cells().deselect()", "cell().deselect()", function() {
  var api = this;
  this.iterator("cell", function(ctx, rowIdx, colIdx) {
    var data = ctx.aoData[rowIdx];
    if (data._selected_cells !== void 0) {
      data._selected_cells[colIdx] = false;
    }
    if (data.anCells && !ctx.aoColumns[colIdx]._select_selected) {
      $$2(data.anCells[colIdx]).removeClass(ctx._select.className);
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "deselect", ["cell", api[i]], true);
  });
  return this;
});
function i18n(label, def) {
  return function(dt) {
    return dt.i18n("buttons." + label, def);
  };
}
function namespacedEvents(config3) {
  var unique = config3._eventNamespace;
  return "draw.dt.DT" + unique + " select.dt.DT" + unique + " deselect.dt.DT" + unique;
}
function enabled(dt, config3) {
  if (config3.limitTo.indexOf("rows") !== -1 && dt.rows({ selected: true }).any()) {
    return true;
  }
  if (config3.limitTo.indexOf("columns") !== -1 && dt.columns({ selected: true }).any()) {
    return true;
  }
  if (config3.limitTo.indexOf("cells") !== -1 && dt.cells({ selected: true }).any()) {
    return true;
  }
  return false;
}
var _buttonNamespace = 0;
$$2.extend(DataTable$1.ext.buttons, {
  selected: {
    text: i18n("selected", "Selected"),
    className: "buttons-selected",
    limitTo: ["rows", "columns", "cells"],
    init: function(dt, node, config3) {
      var that = this;
      config3._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config3), function() {
        that.enable(enabled(dt, config3));
      });
      this.disable();
    },
    destroy: function(dt, node, config3) {
      dt.off(config3._eventNamespace);
    }
  },
  selectedSingle: {
    text: i18n("selectedSingle", "Selected single"),
    className: "buttons-selected-single",
    init: function(dt, node, config3) {
      var that = this;
      config3._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config3), function() {
        var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
        that.enable(count === 1);
      });
      this.disable();
    },
    destroy: function(dt, node, config3) {
      dt.off(config3._eventNamespace);
    }
  },
  selectAll: {
    text: i18n("selectAll", "Select all"),
    className: "buttons-select-all",
    action: function(e, dt, node, config3) {
      var items = this.select.items();
      var mod2 = config3.selectorModifier;
      if (mod2) {
        if (typeof mod2 === "function") {
          mod2 = mod2.call(dt, e, dt, node, config3);
        }
        this[items + "s"](mod2).select();
      } else {
        this[items + "s"]().select();
      }
    }
  },
  selectNone: {
    text: i18n("selectNone", "Deselect all"),
    className: "buttons-select-none",
    action: function() {
      clear(this.settings()[0], true);
    },
    init: function(dt, node, config3) {
      var that = this;
      config3._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config3), function() {
        var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
        that.enable(count > 0);
      });
      this.disable();
    },
    destroy: function(dt, node, config3) {
      dt.off(config3._eventNamespace);
    }
  },
  showSelected: {
    text: i18n("showSelected", "Show only selected"),
    className: "buttons-show-selected",
    action: function(e, dt) {
      if (dt.search.fixed("dt-select")) {
        dt.search.fixed("dt-select", null);
        this.active(false);
      } else {
        var dataSrc = dt.settings()[0].aoData;
        dt.search.fixed("dt-select", function(text, data, idx) {
          return dataSrc[idx]._select_selected;
        });
        this.active(true);
      }
      dt.draw();
    }
  }
});
$$2.each(["Row", "Column", "Cell"], function(i, item) {
  var lc = item.toLowerCase();
  DataTable$1.ext.buttons["select" + item + "s"] = {
    text: i18n("select" + item + "s", "Select " + lc + "s"),
    className: "buttons-select-" + lc + "s",
    action: function() {
      this.select.items(lc);
    },
    init: function(dt) {
      var that = this;
      dt.on("selectItems.dt.DT", function(e, ctx, items) {
        that.active(items === lc);
      });
    }
  };
});
DataTable$1.type("select-checkbox", {
  className: "dt-select",
  detect: function(data) {
    return data === "select-checkbox" ? data : false;
  },
  order: {
    pre: function(d) {
      return d === "X" ? -1 : 0;
    }
  }
});
$$2.extend(true, DataTable$1.defaults.oLanguage, {
  select: {
    aria: {
      rowCheckbox: "Select row"
    }
  }
});
DataTable$1.render.select = function(valueProp, nameProp) {
  var valueFn = valueProp ? DataTable$1.util.get(valueProp) : null;
  var nameFn = nameProp ? DataTable$1.util.get(nameProp) : null;
  return function(data, type, row, meta) {
    var dtRow = meta.settings.aoData[meta.row];
    var selected = dtRow._select_selected;
    var ariaLabel = meta.settings.oLanguage.select.aria.rowCheckbox;
    if (type === "display") {
      return $$2("<input>").attr({
        "aria-label": ariaLabel,
        class: "dt-select-checkbox",
        name: nameFn ? nameFn(row) : null,
        type: "checkbox",
        value: valueFn ? valueFn(row) : null,
        checked: selected
      })[0];
    } else if (type === "type") {
      return "select-checkbox";
    } else if (type === "filter") {
      return "";
    }
    return selected ? "X" : "";
  };
};
DataTable$1.ext.order["select-checkbox"] = function(settings, col) {
  return this.api().column(col, { order: "index" }).nodes().map(function(td) {
    if (settings._select.items === "row") {
      return $$2(td).parent().hasClass(settings._select.className);
    } else if (settings._select.items === "cell") {
      return $$2(td).hasClass(settings._select.className);
    }
    return false;
  });
};
$$2.fn.DataTable.select = DataTable$1.select;
$$2(document).on("preInit.dt.dtSelect", function(e, ctx) {
  if (e.namespace !== "dt") {
    return;
  }
  DataTable$1.select.init(new DataTable$1.Api(ctx));
});
/*! SearchPanes 2.3.0
 * © SpryMedia Ltd - datatables.net/license
 */
let $$1 = jQuery;
(function() {
  var $$52;
  var dataTable$2;
  function setJQuery$4(jq) {
    $$52 = jq;
    dataTable$2 = jq.fn.dataTable;
  }
  var SearchPane = function() {
    function SearchPane2(paneSettings, opts, index, panesContainer, panes) {
      var _this = this;
      if (panes === void 0) {
        panes = null;
      }
      if (!dataTable$2 || !dataTable$2.versionCheck || !dataTable$2.versionCheck("1.10.0")) {
        throw new Error("SearchPane requires DataTables 1.10 or newer");
      }
      if (!dataTable$2.select) {
        throw new Error("SearchPane requires Select");
      }
      var table = new dataTable$2.Api(paneSettings);
      this.classes = $$52.extend(true, {}, SearchPane2.classes);
      this.c = $$52.extend(true, {}, SearchPane2.defaults, opts, panes);
      if (opts && opts.hideCount && opts.viewCount === void 0) {
        this.c.viewCount = !this.c.hideCount;
      }
      var rowLength = table.columns().eq(0).toArray().length;
      this.s = {
        colExists: index < rowLength,
        colOpts: void 0,
        customPaneSettings: panes,
        displayed: false,
        dt: table,
        dtPane: void 0,
        firstSet: true,
        index,
        indexes: [],
        listSet: false,
        name: void 0,
        rowData: {
          arrayFilter: [],
          arrayOriginal: [],
          bins: {},
          binsOriginal: {},
          filterMap: /* @__PURE__ */ new Map(),
          totalOptions: 0
        },
        scrollTop: 0,
        searchFunction: void 0,
        selections: [],
        serverSelect: [],
        serverSelecting: false,
        tableLength: null,
        updating: false
      };
      this.s.colOpts = this.s.colExists ? this._getOptions() : this._getBonusOptions();
      this.dom = {
        buttonGroup: $$52("<div/>").addClass(this.classes.buttonGroup),
        clear: $$52('<button type="button">&#215;</button>').attr("disabled", "true").addClass(this.classes.disabledButton).addClass(this.classes.paneButton).addClass(this.classes.clearButton).html(this.s.dt.i18n("searchPanes.clearPane", this.c.i18n.clearPane)),
        collapseButton: $$52('<button type="button"><span class="' + this.classes.caret + '">&#x5e;</span></button>').addClass(this.classes.paneButton).addClass(this.classes.collapseButton),
        container: $$52("<div/>").addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(this.c.layout.split("-")[1], 10) < 10 ? this.c.layout : this.c.layout.split("-")[0] + "-9")).addClass(this.s.customPaneSettings && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : ""),
        countButton: $$52('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton),
        dtP: $$52('<table width="100%"><thead><tr><th>' + (this.s.colExists ? $$52(this.s.dt.column(this.s.index).header()).text() : this.s.customPaneSettings.header || "Custom Pane") + "</th><th/></tr></thead></table>"),
        lower: $$52("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
        nameButton: $$52('<button type="button"><span></span></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton),
        panesContainer: $$52(panesContainer),
        searchBox: $$52("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search),
        searchButton: $$52('<button type="button"><span></span></button>').addClass(this.classes.searchIcon).addClass(this.classes.paneButton),
        searchCont: $$52("<div/>").addClass(this.classes.searchCont),
        searchLabelCont: $$52("<div/>").addClass(this.classes.searchLabelCont),
        topRow: $$52("<div/>").addClass(this.classes.topRow),
        upper: $$52("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch)
      };
      if (this.s.colOpts.name) {
        this.s.name = this.s.colOpts.name;
      } else if (this.s.customPaneSettings && this.s.customPaneSettings.name) {
        this.s.name = this.s.customPaneSettings.name;
      } else {
        this.s.name = this.s.colExists ? $$52(this.s.dt.column(this.s.index).header()).text() : this.s.customPaneSettings.header || "Custom Pane";
      }
      var tableNode = this.s.dt.table(0).node();
      this.s.searchFunction = function(settings, searchData, dataIndex) {
        if (_this.s.selections.length === 0) {
          return true;
        }
        if (settings.nTable !== tableNode) {
          return true;
        }
        var filter = null;
        if (_this.s.colExists) {
          filter = searchData[_this.s.index];
          if (_this.s.colOpts.orthogonal.filter !== "filter") {
            filter = _this.s.rowData.filterMap.get(dataIndex);
            if (filter instanceof $$52.fn.dataTable.Api) {
              filter = filter.toArray();
            }
          }
        }
        return _this._search(filter, dataIndex);
      };
      $$52.fn.dataTable.ext.search.push(this.s.searchFunction);
      if (this.c.clear) {
        this.dom.clear.on("click.dtsp", function() {
          var searches = _this.dom.container.find("." + _this.classes.search.replace(/\s+/g, "."));
          searches.each(function() {
            $$52(this).val("").trigger("input");
          });
          _this.clearPane();
        });
      }
      this.s.dt.on("draw.dtsp", function() {
        return _this.adjustTopRow();
      });
      this.s.dt.on("buttons-action.dtsp", function() {
        return _this.adjustTopRow();
      });
      this.s.dt.on("column-reorder.dtsp", function(e, settings, details) {
        _this.s.index = details.mapping[_this.s.index];
      });
      return this;
    }
    SearchPane2.prototype.addRow = function(display, filter, sort, type, className, total, shown) {
      if (!total) {
        total = this.s.rowData.bins[filter] ? this.s.rowData.bins[filter] : 0;
      }
      if (!shown) {
        shown = this._getShown(filter);
      }
      var index;
      for (var _i = 0, _a = this.s.indexes; _i < _a.length; _i++) {
        var entry = _a[_i];
        if (entry.filter === filter) {
          index = entry.index;
        }
      }
      if (index === void 0) {
        index = this.s.indexes.length;
        this.s.indexes.push({ filter, index });
      }
      return this.s.dtPane.row.add({
        className,
        display: display !== "" ? display : this.emptyMessage(),
        filter,
        index,
        shown,
        sort,
        total,
        type
      });
    };
    SearchPane2.prototype.adjustTopRow = function() {
      var subContainers = this.dom.container.find("." + this.classes.subRowsContainer.replace(/\s+/g, "."));
      var subRow1 = this.dom.container.find("." + this.classes.subRow1.replace(/\s+/g, "."));
      var subRow2 = this.dom.container.find("." + this.classes.subRow2.replace(/\s+/g, "."));
      var topRow = this.dom.container.find("." + this.classes.topRow.replace(/\s+/g, "."));
      if (($$52(subContainers[0]).width() < 252 || $$52(topRow[0]).width() < 252) && $$52(subContainers[0]).width() !== 0) {
        $$52(subContainers[0]).addClass(this.classes.narrow);
        $$52(subRow1[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch);
        $$52(subRow2[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton);
      } else {
        $$52(subContainers[0]).removeClass(this.classes.narrow);
        $$52(subRow1[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch);
        $$52(subRow2[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton);
      }
    };
    SearchPane2.prototype.clearData = function() {
      this.s.rowData = {
        arrayFilter: [],
        arrayOriginal: [],
        bins: {},
        binsOriginal: {},
        filterMap: /* @__PURE__ */ new Map(),
        totalOptions: 0
      };
    };
    SearchPane2.prototype.clearPane = function() {
      this.s.dtPane.rows({ selected: true }).deselect();
      this.updateTable();
      return this;
    };
    SearchPane2.prototype.collapse = function() {
      var _this = this;
      if (!this.s.displayed || (!this.c.collapse && this.s.colOpts.collapse !== true || this.s.colOpts.collapse === false)) {
        return;
      }
      $$52(this.s.dtPane.table().container()).addClass(this.classes.hidden);
      this.dom.topRow.addClass(this.classes.bordered);
      this.dom.nameButton.addClass(this.classes.disabledButton);
      this.dom.countButton.addClass(this.classes.disabledButton);
      this.dom.searchButton.addClass(this.classes.disabledButton);
      this.dom.collapseButton.addClass(this.classes.rotated);
      this.dom.topRow.one("click.dtsp", function() {
        return _this.show();
      });
      this.dom.topRow.trigger("collapse.dtsps");
    };
    SearchPane2.prototype.destroy = function() {
      if (this.s.dtPane) {
        this.s.dtPane.off(".dtsp");
      }
      this.s.dt.off(".dtsp");
      this.dom.clear.off(".dtsp");
      this.dom.nameButton.off(".dtsp");
      this.dom.countButton.off(".dtsp");
      this.dom.searchButton.off(".dtsp");
      this.dom.collapseButton.off(".dtsp");
      $$52(this.s.dt.table().node()).off(".dtsp");
      this.dom.container.detach();
      var searchIdx = $$52.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
      while (searchIdx !== -1) {
        $$52.fn.dataTable.ext.search.splice(searchIdx, 1);
        searchIdx = $$52.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
      }
      if (this.s.dtPane) {
        this.s.dtPane.destroy();
      }
      this.s.listSet = false;
    };
    SearchPane2.prototype.emptyMessage = function() {
      var def = this.c.i18n.emptyMessage;
      if (this.c.emptyMessage) {
        def = this.c.emptyMessage;
      }
      if (this.s.colOpts.emptyMessage !== false && this.s.colOpts.emptyMessage !== null) {
        def = this.s.colOpts.emptyMessage;
      }
      return this.s.dt.i18n("searchPanes.emptyMessage", def);
    };
    SearchPane2.prototype.getPaneCount = function() {
      return this.s.dtPane ? this.s.dtPane.rows({ selected: true }).data().toArray().length : 0;
    };
    SearchPane2.prototype.rebuildPane = function(dataIn, maintainSelection) {
      if (dataIn === void 0) {
        dataIn = null;
      }
      if (maintainSelection === void 0) {
        maintainSelection = false;
      }
      this.clearData();
      var selectedRows = [];
      this.s.serverSelect = [];
      var prevEl = null;
      if (this.s.dtPane) {
        if (maintainSelection) {
          if (!this.s.dt.page.info().serverSide) {
            selectedRows = this.s.dtPane.rows({ selected: true }).data().toArray();
          } else {
            this.s.serverSelect = this.s.dtPane.rows({ selected: true }).data().toArray();
          }
        }
        this.s.dtPane.clear().destroy();
        prevEl = this.dom.container.prev();
        this.destroy();
        this.s.dtPane = void 0;
        $$52.fn.dataTable.ext.search.push(this.s.searchFunction);
      }
      this.dom.container.removeClass(this.classes.hidden);
      this.s.displayed = false;
      this._buildPane(!this.s.dt.page.info().serverSide ? selectedRows : this.s.serverSelect, dataIn, prevEl);
      return this;
    };
    SearchPane2.prototype.resize = function(layout) {
      this.c.layout = layout;
      this.dom.container.removeClass().addClass(this.classes.show).addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout + (parseInt(layout.split("-")[1], 10) < 10 ? layout : layout.split("-")[0] + "-9")).addClass(this.s.customPaneSettings !== null && this.s.customPaneSettings.className ? this.s.customPaneSettings.className : "");
      this.adjustTopRow();
    };
    SearchPane2.prototype.setListeners = function() {
      var _this = this;
      if (!this.s.dtPane) {
        return;
      }
      this.s.dtPane.off("select.dtsp").on("select.dtsp", function() {
        clearTimeout(_this.s.deselectTimeout);
        _this._updateSelection(!_this.s.updating);
        _this.dom.clear.removeClass(_this.classes.disabledButton).removeAttr("disabled");
      });
      this.s.dtPane.off("deselect.dtsp").on("deselect.dtsp", function() {
        _this.s.deselectTimeout = setTimeout(function() {
          _this._updateSelection(true);
          if (_this.s.dtPane.rows({ selected: true }).data().toArray().length === 0) {
            _this.dom.clear.addClass(_this.classes.disabledButton).attr("disabled", "true");
          }
        }, 50);
      });
      if (this.s.firstSet) {
        this.s.firstSet = false;
        this.s.dt.on("stateSaveParams.dtsp", function(e, settings, data) {
          if ($$52.isEmptyObject(data)) {
            _this.s.dtPane.state.clear();
            return;
          }
          var bins;
          var order;
          var selected = [];
          var collapsed;
          var searchTerm;
          var arrayFilter;
          if (_this.s.dtPane) {
            selected = _this.s.dtPane.rows({ selected: true }).data().map(function(item) {
              return item.filter !== null ? item.filter.toString() : null;
            }).toArray();
            searchTerm = _this.dom.searchBox.val();
            order = _this.s.dtPane.order();
            bins = _this.s.rowData.binsOriginal;
            arrayFilter = _this.s.rowData.arrayOriginal;
            collapsed = _this.dom.collapseButton.hasClass(_this.classes.rotated);
          }
          if (data.searchPanes === void 0) {
            data.searchPanes = {};
          }
          if (data.searchPanes.panes === void 0) {
            data.searchPanes.panes = [];
          }
          for (var i = 0; i < data.searchPanes.panes.length; i++) {
            if (data.searchPanes.panes[i].id === _this.s.index) {
              data.searchPanes.panes.splice(i, 1);
              i--;
            }
          }
          data.searchPanes.panes.push({
            arrayFilter,
            bins,
            collapsed,
            id: _this.s.index,
            order,
            searchTerm,
            selected
          });
        });
      }
      this.s.dtPane.off("user-select.dtsp").on("user-select.dtsp", function(e, _dt, type, cell, originalEvent) {
        originalEvent.stopPropagation();
      });
      this.s.dtPane.off("draw.dtsp").on("draw.dtsp", function() {
        return _this.adjustTopRow();
      });
      this.dom.nameButton.off("click.dtsp").on("click.dtsp", function() {
        var currentOrder = _this.s.dtPane.order()[0][1];
        _this.s.dtPane.order([0, currentOrder === "asc" ? "desc" : "asc"]).draw();
        _this.s.dt.state.save();
      });
      this.dom.countButton.off("click.dtsp").on("click.dtsp", function() {
        var currentOrder = _this.s.dtPane.order()[0][1];
        _this.s.dtPane.order([1, currentOrder === "asc" ? "desc" : "asc"]).draw();
        _this.s.dt.state.save();
      });
      this.dom.collapseButton.off("click.dtsp").on("click.dtsp", function(e) {
        e.stopPropagation();
        var container = $$52(_this.s.dtPane.table().container());
        container.toggleClass(_this.classes.hidden);
        _this.dom.topRow.toggleClass(_this.classes.bordered);
        _this.dom.nameButton.toggleClass(_this.classes.disabledButton);
        _this.dom.countButton.toggleClass(_this.classes.disabledButton);
        _this.dom.searchButton.toggleClass(_this.classes.disabledButton);
        _this.dom.collapseButton.toggleClass(_this.classes.rotated);
        if (container.hasClass(_this.classes.hidden)) {
          _this.dom.topRow.on("click.dtsp", function() {
            return _this.dom.collapseButton.click();
          });
        } else {
          _this.dom.topRow.off("click.dtsp");
        }
        _this.s.dt.state.save();
        _this.dom.topRow.trigger("collapse.dtsps");
      });
      this.dom.clear.off("click.dtsp").on("click.dtsp", function() {
        var searches = _this.dom.container.find("." + _this.classes.search.replace(/ /g, "."));
        searches.each(function() {
          $$52(this).val("").trigger("input");
        });
        _this.clearPane();
      });
      this.dom.searchButton.off("click.dtsp").on("click.dtsp", function() {
        return _this.dom.searchBox.focus();
      });
      this.dom.searchBox.off("click.dtsp").on("input.dtsp", function() {
        var searchval = _this.dom.searchBox.val();
        _this.s.dtPane.search(searchval).draw();
        if (typeof searchval === "string" && (searchval.length > 0 || searchval.length === 0 && _this.s.dtPane.rows({ selected: true }).data().toArray().length > 0)) {
          _this.dom.clear.removeClass(_this.classes.disabledButton).removeAttr("disabled");
        } else {
          _this.dom.clear.addClass(_this.classes.disabledButton).attr("disabled", "true");
        }
        _this.s.dt.state.save();
      });
      this.s.dtPane.select.style(this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.select && this.s.colOpts.dtOpts.select.style ? this.s.colOpts.dtOpts.select.style : this.c.dtOpts && this.c.dtOpts.select && this.c.dtOpts.select.style ? this.c.dtOpts.select.style : "os");
    };
    SearchPane2.prototype._serverPopulate = function(dataIn) {
      if (dataIn.tableLength) {
        this.s.tableLength = dataIn.tableLength;
        this.s.rowData.totalOptions = this.s.tableLength;
      } else if (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) {
        this.s.tableLength = this.s.dt.rows()[0].length;
        this.s.rowData.totalOptions = this.s.tableLength;
      }
      var colTitle = this.s.dt.column(this.s.index).dataSrc();
      if (dataIn.searchPanes.options[colTitle]) {
        for (var _i = 0, _a = dataIn.searchPanes.options[colTitle]; _i < _a.length; _i++) {
          var dataPoint = _a[_i];
          this.s.rowData.arrayFilter.push({
            display: dataPoint.label,
            filter: dataPoint.value,
            sort: dataPoint.label,
            type: dataPoint.label
          });
          this.s.rowData.bins[dataPoint.value] = dataPoint.total;
        }
      }
      var binLength = Object.keys(this.s.rowData.bins).length;
      var uniqueRatio = this._uniqueRatio(binLength, this.s.tableLength);
      if (this.s.displayed === false && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? uniqueRatio > this.c.threshold : uniqueRatio > this.s.colOpts.threshold) || this.s.colOpts.show !== true && binLength <= 1)) {
        this.dom.container.addClass(this.classes.hidden);
        this.s.displayed = false;
        return;
      }
      this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter;
      this.s.rowData.binsOriginal = this.s.rowData.bins;
      this.s.displayed = true;
    };
    SearchPane2.prototype.show = function() {
      if (!this.s.displayed) {
        return;
      }
      this.dom.topRow.removeClass(this.classes.bordered);
      this.dom.nameButton.removeClass(this.classes.disabledButton);
      this.dom.countButton.removeClass(this.classes.disabledButton);
      this.dom.searchButton.removeClass(this.classes.disabledButton);
      this.dom.collapseButton.removeClass(this.classes.rotated);
      $$52(this.s.dtPane.table().container()).removeClass(this.classes.hidden);
      this.dom.topRow.trigger("collapse.dtsps");
    };
    SearchPane2.prototype._uniqueRatio = function(bins, rowCount) {
      if (rowCount > 0 && (this.s.rowData.totalOptions > 0 && !this.s.dt.page.info().serverSide || this.s.dt.page.info().serverSide && this.s.tableLength > 0)) {
        return bins / this.s.rowData.totalOptions;
      }
      return 1;
    };
    SearchPane2.prototype.updateTable = function() {
      var selectedRows = this.s.dtPane.rows({ selected: true }).data().toArray().map(function(el) {
        return el.filter;
      });
      this.s.selections = selectedRows;
      this._searchExtras();
    };
    SearchPane2.prototype._getComparisonRows = function() {
      var options = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
      if (options === void 0) {
        return;
      }
      var allRows = this.s.dt.rows();
      var tableValsTotal = allRows.data().toArray();
      var rows = [];
      this.s.dtPane.clear();
      this.s.indexes = [];
      for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
        var comp = options_1[_i];
        var insert = comp.label !== "" ? comp.label : this.emptyMessage();
        var comparisonObj = {
          className: comp.className,
          display: insert,
          filter: typeof comp.value === "function" ? comp.value : [],
          sort: comp.order !== void 0 ? comp.order : insert,
          total: 0,
          type: insert
        };
        if (typeof comp.value === "function") {
          for (var i = 0; i < tableValsTotal.length; i++) {
            if (comp.value.call(this.s.dt, tableValsTotal[i], allRows[0][i])) {
              comparisonObj.total++;
            }
          }
          if (typeof comparisonObj.filter !== "function") {
            comparisonObj.filter.push(comp.filter);
          }
        }
        rows.push(this.addRow(comparisonObj.display, comparisonObj.filter, comparisonObj.sort, comparisonObj.type, comparisonObj.className, comparisonObj.total));
      }
      return rows;
    };
    SearchPane2.prototype._getMessage = function(row) {
      return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, row.total);
    };
    SearchPane2.prototype._getShown = function(filter) {
      return void 0;
    };
    SearchPane2.prototype._getPaneConfig = function() {
      var _this = this;
      var haveScroller = dataTable$2.Scroller;
      var langOpts = this.s.dt.settings()[0].oLanguage;
      langOpts.url = void 0;
      langOpts.sUrl = void 0;
      return {
        columnDefs: [
          {
            className: "dtsp-nameColumn",
            data: "display",
            render: function(data, type, row) {
              if (type === "sort") {
                return row.sort;
              } else if (type === "type") {
                return row.type;
              }
              var message = _this._getMessage(row);
              var pill = '<span class="' + _this.classes.pill + '">' + message + "</span>";
              if (!_this.c.viewCount || !_this.s.colOpts.viewCount) {
                pill = "";
              }
              if (type === "filter") {
                return typeof data === "string" && data.match(/<[^>]*>/) !== null ? data.replace(/<[^>]*>/g, "") : data;
              }
              return '<div class="' + _this.classes.nameCont + '"><span title="' + (typeof data === "string" && data.match(/<[^>]*>/) !== null ? data.replace(/<[^>]*>/g, "") : data) + '" class="' + _this.classes.name + '">' + data + "</span>" + pill + "</div>";
            },
            targets: 0,
            type: this.s.dt.settings()[0].aoColumns[this.s.index] ? this.s.dt.settings()[0].aoColumns[this.s.index]._sManualType : null
          },
          {
            className: "dtsp-countColumn " + this.classes.badgePill,
            data: "total",
            searchable: false,
            targets: 1,
            visible: false
          }
        ],
        deferRender: true,
        info: false,
        language: langOpts,
        paging: haveScroller ? true : false,
        scrollX: false,
        scrollY: "200px",
        scroller: haveScroller ? true : false,
        select: true,
        stateSave: this.s.dt.settings()[0].oFeatures.bStateSave ? true : false
      };
    };
    SearchPane2.prototype._makeSelection = function() {
      this.updateTable();
      this.s.updating = true;
      this.s.dt.draw();
      this.s.updating = false;
    };
    SearchPane2.prototype._populatePaneArray = function(rowIdx, arrayFilter, settings, bins) {
      if (bins === void 0) {
        bins = this.s.rowData.bins;
      }
      var fastData = settings.fastData;
      if (typeof this.s.colOpts.orthogonal === "string") {
        var rendered = fastData(rowIdx, this.s.index, this.s.colOpts.orthogonal);
        this.s.rowData.filterMap.set(rowIdx, rendered);
        this._addOption(rendered, rendered, rendered, rendered, arrayFilter, bins);
        this.s.rowData.totalOptions++;
      } else {
        var filter = fastData(rowIdx, this.s.index, this.s.colOpts.orthogonal.search);
        if (filter === null) {
          filter = "";
        }
        if (typeof filter === "string") {
          filter = filter.replace(/<[^>]*>/g, "");
        }
        this.s.rowData.filterMap.set(rowIdx, filter);
        if (!bins[filter]) {
          bins[filter] = 1;
          this._addOption(filter, fastData(rowIdx, this.s.index, this.s.colOpts.orthogonal.display), fastData(rowIdx, this.s.index, this.s.colOpts.orthogonal.sort), fastData(rowIdx, this.s.index, this.s.colOpts.orthogonal.type), arrayFilter, bins);
          this.s.rowData.totalOptions++;
        } else {
          bins[filter]++;
          this.s.rowData.totalOptions++;
        }
      }
    };
    SearchPane2.prototype._reloadSelect = function(loadedFilter) {
      if (loadedFilter === void 0) {
        return;
      }
      var idx;
      for (var i = 0; i < loadedFilter.searchPanes.panes.length; i++) {
        if (loadedFilter.searchPanes.panes[i].id === this.s.index) {
          idx = i;
          break;
        }
      }
      if (idx) {
        var table = this.s.dtPane;
        var rows = table.rows({ order: "index" }).data().map(function(item) {
          return item.filter !== null ? item.filter.toString() : null;
        }).toArray();
        for (var _i = 0, _a = loadedFilter.searchPanes.panes[idx].selected; _i < _a.length; _i++) {
          var filter = _a[_i];
          var id = -1;
          if (filter !== null) {
            id = rows.indexOf(filter.toString());
          }
          if (id > -1) {
            this.s.serverSelecting = true;
            table.row(id).select();
            this.s.serverSelecting = false;
          }
        }
      }
    };
    SearchPane2.prototype._updateSelection = function(notUpdating) {
      var _this = this;
      var processing = function(state) {
        if (DataTable$1.versionCheck("2")) {
          _this.s.dt.processing(state);
        } else {
          var settings = _this.s.dt.settings()[0];
          var oApi = settings.oApi;
          oApi._fnProcessingDisplay(settings, false);
        }
      };
      var run = function() {
        _this.s.scrollTop = $$52(_this.s.dtPane.table().node()).parent()[0].scrollTop;
        if (_this.s.dt.page.info().serverSide && !_this.s.updating) {
          if (!_this.s.serverSelecting) {
            _this.s.serverSelect = _this.s.dtPane.rows({ selected: true }).data().toArray();
            _this.s.dt.draw(false);
          }
        } else if (notUpdating) {
          _this._makeSelection();
        }
        processing(false);
      };
      processing(true);
      setTimeout(run, 1);
    };
    SearchPane2.prototype._addOption = function(filter, display, sort, type, arrayFilter, bins) {
      if (Array.isArray(filter) || filter instanceof dataTable$2.Api) {
        if (filter instanceof dataTable$2.Api) {
          filter = filter.toArray();
          display = display.toArray();
        }
        if (filter.length === display.length) {
          for (var i = 0; i < filter.length; i++) {
            if (!bins[filter[i]]) {
              bins[filter[i]] = 1;
              arrayFilter.push({
                display: display[i],
                filter: filter[i],
                sort: sort[i],
                type: type[i]
              });
            } else {
              bins[filter[i]]++;
            }
            this.s.rowData.totalOptions++;
          }
          return;
        }
        throw new Error("display and filter not the same length");
      } else if (typeof this.s.colOpts.orthogonal === "string") {
        if (!bins[filter]) {
          bins[filter] = 1;
          arrayFilter.push({
            display,
            filter,
            sort,
            type
          });
          this.s.rowData.totalOptions++;
        } else {
          bins[filter]++;
          this.s.rowData.totalOptions++;
        }
      } else {
        arrayFilter.push({
          display,
          filter,
          sort,
          type
        });
      }
    };
    SearchPane2.prototype._buildPane = function(selectedRows, dataIn, prevEl) {
      var _this = this;
      if (selectedRows === void 0) {
        selectedRows = [];
      }
      if (dataIn === void 0) {
        dataIn = null;
      }
      if (prevEl === void 0) {
        prevEl = null;
      }
      this.s.selections = [];
      var loadedFilter = this.s.dt.state.loaded();
      var row;
      if (this.s.listSet) {
        loadedFilter = this.s.dt.state();
      }
      if (this.s.colExists) {
        var idx = -1;
        if (loadedFilter && loadedFilter.searchPanes && loadedFilter.searchPanes.panes) {
          for (var i = 0; i < loadedFilter.searchPanes.panes.length; i++) {
            if (loadedFilter.searchPanes.panes[i].id === this.s.index) {
              idx = i;
              break;
            }
          }
        }
        if ((this.s.colOpts.show === false || this.s.colOpts.show !== void 0 && this.s.colOpts.show !== true) && idx === -1) {
          this.dom.container.addClass(this.classes.hidden);
          this.s.displayed = false;
          return false;
        } else if (this.s.colOpts.show === true || idx !== -1) {
          this.s.displayed = true;
        }
        if (!this.s.dt.page.info().serverSide && (!dataIn || !dataIn.searchPanes || !dataIn.searchPanes.options)) {
          if (this.s.rowData.arrayFilter.length === 0) {
            this.s.rowData.totalOptions = 0;
            this._populatePane();
            this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter;
            this.s.rowData.binsOriginal = this.s.rowData.bins;
          }
          var binLength = Object.keys(this.s.rowData.binsOriginal).length;
          var uniqueRatio = this._uniqueRatio(binLength, this.s.dt.rows()[0].length);
          if (this.s.displayed === false && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? uniqueRatio > this.c.threshold : uniqueRatio > this.s.colOpts.threshold) || this.s.colOpts.show !== true && binLength <= 1)) {
            this.dom.container.addClass(this.classes.hidden);
            this.s.displayed = false;
            return;
          }
          this.dom.container.addClass(this.classes.show);
          this.s.displayed = true;
        } else if (dataIn && dataIn.searchPanes && dataIn.searchPanes.options) {
          this._serverPopulate(dataIn);
        }
      } else {
        this.s.displayed = true;
      }
      this._displayPane();
      if (!this.s.listSet) {
        this.dom.dtP.on("stateLoadParams.dtsp", function(e, settings, data) {
          if ($$52.isEmptyObject(_this.s.dt.state.loaded())) {
            $$52.each(data, function(index) {
              delete data[index];
            });
          }
        });
      }
      if (prevEl !== null && this.dom.panesContainer.has(prevEl).length > 0) {
        this.dom.container.insertAfter(prevEl);
      } else {
        this.dom.panesContainer.prepend(this.dom.container);
      }
      var errMode = $$52.fn.dataTable.ext.errMode;
      $$52.fn.dataTable.ext.errMode = "none";
      this.dom.dtP.on("init.dt", function(e, s) {
        var dt = _this.dom.dtP.DataTable();
        var style = dt.select.style();
        dt.select.style(style);
      });
      this.s.dtPane = this.dom.dtP.DataTable($$52.extend(true, this._getPaneConfig(), this.c.dtOpts, this.s.colOpts ? this.s.colOpts.dtOpts : {}, this.s.colOpts.options || !this.s.colExists ? {
        createdRow: function(row2, data) {
          $$52(row2).addClass(data.className);
        }
      } : void 0, this.s.customPaneSettings !== null && this.s.customPaneSettings.dtOpts ? this.s.customPaneSettings.dtOpts : {}, $$52.fn.dataTable.versionCheck("2") ? {
        layout: {
          bottomStart: null,
          bottomEnd: null,
          topStart: null,
          topEnd: null
        }
      } : { dom: "t" }));
      this.dom.dtP.addClass(this.classes.table);
      var headerText = "Custom Pane";
      if (this.s.customPaneSettings && this.s.customPaneSettings.header) {
        headerText = this.s.customPaneSettings.header;
      } else if (this.s.colOpts.header) {
        headerText = this.s.colOpts.header;
      } else if (this.s.colExists) {
        headerText = $$52.fn.dataTable.versionCheck("2") ? this.s.dt.column(this.s.index).title() : this.s.dt.settings()[0].aoColumns[this.s.index].sTitle;
      }
      headerText = this._escapeHTML(headerText);
      this.dom.searchBox.attr("placeholder", headerText);
      $$52.fn.dataTable.ext.errMode = errMode;
      if (this.s.colExists) {
        for (var j = 0, jen = this.s.rowData.arrayFilter.length; j < jen; j++) {
          if (this.s.dt.page.info().serverSide) {
            row = this.addRow(this.s.rowData.arrayFilter[j].display, this.s.rowData.arrayFilter[j].filter, this.s.rowData.arrayFilter[j].sort, this.s.rowData.arrayFilter[j].type);
            for (var _i = 0, _a = this.s.serverSelect; _i < _a.length; _i++) {
              var option = _a[_i];
              if (option.filter === this.s.rowData.arrayFilter[j].filter) {
                this.s.serverSelecting = true;
                row.select();
                this.s.serverSelecting = false;
              }
            }
          } else if (!this.s.dt.page.info().serverSide && this.s.rowData.arrayFilter[j]) {
            this.addRow(this.s.rowData.arrayFilter[j].display, this.s.rowData.arrayFilter[j].filter, this.s.rowData.arrayFilter[j].sort, this.s.rowData.arrayFilter[j].type);
          } else if (!this.s.dt.page.info().serverSide) {
            this.addRow("", "", "", "");
          }
        }
      }
      if (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) {
        this._getComparisonRows();
      }
      this.s.dtPane.draw();
      this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
      this.adjustTopRow();
      this.setListeners();
      this.s.listSet = true;
      for (var _b = 0, selectedRows_1 = selectedRows; _b < selectedRows_1.length; _b++) {
        var selection = selectedRows_1[_b];
        if (selection) {
          for (var _c = 0, _d = this.s.dtPane.rows().indexes().toArray(); _c < _d.length; _c++) {
            row = _d[_c];
            if (this.s.dtPane.row(row).data() && selection.filter === this.s.dtPane.row(row).data().filter) {
              if (this.s.dt.page.info().serverSide) {
                this.s.serverSelecting = true;
                this.s.dtPane.row(row).select();
                this.s.serverSelecting = false;
              } else {
                this.s.dtPane.row(row).select();
              }
            }
          }
        }
      }
      if (this.s.dt.page.info().serverSide) {
        this.s.dtPane.search(this.dom.searchBox.val()).draw();
      }
      if ((this.c.initCollapsed && this.s.colOpts.initCollapsed !== false || this.s.colOpts.initCollapsed) && (this.c.collapse && this.s.colOpts.collapse !== false || this.s.colOpts.collapse)) {
        if (this.s.dtPane.settings()[0]._bInitComplete) {
          this.collapse();
        } else {
          this.s.dtPane.one("init", function() {
            return _this.collapse();
          });
        }
      }
      if (loadedFilter && loadedFilter.searchPanes && loadedFilter.searchPanes.panes && (!dataIn || dataIn.draw === 1)) {
        this._reloadSelect(loadedFilter);
        for (var _e = 0, _f = loadedFilter.searchPanes.panes; _e < _f.length; _e++) {
          var pane = _f[_e];
          if (pane.id === this.s.index) {
            if (pane.searchTerm && pane.searchTerm.length > 0) {
              this.dom.searchBox.val(pane.searchTerm).trigger("input");
            }
            if (pane.order) {
              this.s.dtPane.order(pane.order).draw();
            }
            if (pane.collapsed) {
              this.collapse();
            } else {
              this.show();
            }
          }
        }
      }
      return true;
    };
    SearchPane2.prototype._displayPane = function() {
      this.dom.dtP.empty();
      this.dom.topRow.empty().addClass(this.classes.topRow);
      if (parseInt(this.c.layout.split("-")[1], 10) > 3) {
        this.dom.container.addClass(this.classes.smallGap);
      }
      this.dom.topRow.addClass(this.classes.subRowsContainer).append(this.dom.upper.append(this.dom.searchCont)).append(this.dom.lower.append(this.dom.buttonGroup));
      if (this.c.dtOpts.searching === false || this.s.colOpts.dtOpts && this.s.colOpts.dtOpts.searching === false || (!this.c.controls || !this.s.colOpts.controls) || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching) {
        this.dom.searchBox.removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton).attr("disabled", "true");
      }
      this.dom.searchBox.appendTo(this.dom.searchCont);
      this._searchContSetup();
      if (this.c.clear && this.c.controls && this.s.colOpts.controls) {
        this.dom.clear.appendTo(this.dom.buttonGroup);
      }
      if (this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls) {
        this.dom.nameButton.appendTo(this.dom.buttonGroup);
      }
      if (this.c.viewCount && this.s.colOpts.viewCount && this.c.orderable && this.s.colOpts.orderable && this.c.controls && this.s.colOpts.controls) {
        this.dom.countButton.appendTo(this.dom.buttonGroup);
      }
      if ((this.c.collapse && this.s.colOpts.collapse !== false || this.s.colOpts.collapse) && this.c.controls && this.s.colOpts.controls) {
        this.dom.collapseButton.appendTo(this.dom.buttonGroup);
      }
      this.dom.container.prepend(this.dom.topRow).append(this.dom.dtP).show();
    };
    SearchPane2.prototype._escapeHTML = function(txt) {
      return txt.toString().replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
    };
    SearchPane2.prototype._getBonusOptions = function() {
      var defaultMutator = {
        threshold: null
      };
      return $$52.extend(true, {}, SearchPane2.defaults, defaultMutator, this.c ? this.c : {});
    };
    SearchPane2.prototype._getOptions = function() {
      var table = this.s.dt;
      var defaultMutator = {
        collapse: null,
        emptyMessage: false,
        initCollapsed: null,
        threshold: null
      };
      var columnOptions = table.settings()[0].aoColumns[this.s.index].searchPanes;
      var colOpts = $$52.extend(true, {}, SearchPane2.defaults, defaultMutator, columnOptions);
      if (columnOptions && columnOptions.hideCount && columnOptions.viewCount === void 0) {
        colOpts.viewCount = !columnOptions.hideCount;
      }
      return colOpts;
    };
    SearchPane2.prototype._populatePane = function() {
      this.s.rowData.arrayFilter = [];
      this.s.rowData.bins = {};
      var settings = this.s.dt.context[0];
      if (!this.s.dt.page.info().serverSide) {
        for (var _i = 0, _a = this.s.dt.rows().indexes().toArray(); _i < _a.length; _i++) {
          var index = _a[_i];
          this._populatePaneArray(index, this.s.rowData.arrayFilter, settings);
        }
      }
    };
    SearchPane2.prototype._search = function(filter, dataIndex) {
      var colOpts = this.s.colOpts;
      var table = this.s.dt;
      for (var _i = 0, _a = this.s.selections; _i < _a.length; _i++) {
        var colSelect = _a[_i];
        if (typeof colSelect === "string" && typeof filter === "string") {
          colSelect = this._escapeHTML(colSelect);
        }
        if (Array.isArray(filter)) {
          if (colOpts.combiner === "and") {
            if (!filter.includes(colSelect)) {
              return false;
            }
          } else if (filter.includes(colSelect)) {
            return true;
          }
        } else if (typeof colSelect === "function") {
          if (colSelect.call(table, table.row(dataIndex).data(), dataIndex)) {
            if (colOpts.combiner === "or") {
              return true;
            }
          } else if (colOpts.combiner === "and") {
            return false;
          }
        } else if (filter === colSelect || !(typeof filter === "string" && filter.length === 0) && filter == colSelect || colSelect === null && typeof filter === "string" && filter === "") {
          return true;
        }
      }
      if (colOpts.combiner === "and") {
        return true;
      }
      return false;
    };
    SearchPane2.prototype._searchContSetup = function() {
      if (this.c.controls && this.s.colOpts.controls) {
        this.dom.searchButton.appendTo(this.dom.searchLabelCont);
      }
      if (!(this.c.dtOpts.searching === false || this.s.colOpts.dtOpts.searching === false || this.s.customPaneSettings && this.s.customPaneSettings.dtOpts && this.s.customPaneSettings.dtOpts.searching !== void 0 && !this.s.customPaneSettings.dtOpts.searching)) {
        this.dom.searchLabelCont.appendTo(this.dom.searchCont);
      }
    };
    SearchPane2.prototype._searchExtras = function() {
      var updating = this.s.updating;
      this.s.updating = true;
      var filters = this.s.dtPane.rows({ selected: true }).data().pluck("filter").toArray();
      var nullIndex = filters.indexOf(this.emptyMessage());
      var container = $$52(this.s.dtPane.table().container());
      if (nullIndex > -1) {
        filters[nullIndex] = "";
      }
      if (filters.length > 0) {
        container.addClass(this.classes.selected);
      } else if (filters.length === 0) {
        container.removeClass(this.classes.selected);
      }
      this.s.updating = updating;
    };
    SearchPane2.version = "2.1.2";
    SearchPane2.classes = {
      bordered: "dtsp-bordered",
      buttonGroup: "dtsp-buttonGroup",
      buttonSub: "dtsp-buttonSub",
      caret: "dtsp-caret",
      clear: "dtsp-clear",
      clearAll: "dtsp-clearAll",
      clearButton: "clearButton",
      collapseAll: "dtsp-collapseAll",
      collapseButton: "dtsp-collapseButton",
      container: "dtsp-searchPane",
      countButton: "dtsp-countButton",
      disabledButton: "dtsp-disabledButton",
      hidden: "dtsp-hidden",
      hide: "dtsp-hide",
      layout: "dtsp-",
      name: "dtsp-name",
      nameButton: "dtsp-nameButton",
      nameCont: "dtsp-nameCont",
      narrow: "dtsp-narrow",
      paneButton: "dtsp-paneButton",
      paneInputButton: "dtsp-paneInputButton",
      pill: "dtsp-pill",
      rotated: "dtsp-rotated",
      search: "dtsp-search",
      searchCont: "dtsp-searchCont",
      searchIcon: "dtsp-searchIcon",
      searchLabelCont: "dtsp-searchButtonCont",
      selected: "dtsp-selected",
      smallGap: "dtsp-smallGap",
      subRow1: "dtsp-subRow1",
      subRow2: "dtsp-subRow2",
      subRowsContainer: "dtsp-subRowsContainer",
      title: "dtsp-title",
      topRow: "dtsp-topRow"
    };
    SearchPane2.defaults = {
      clear: true,
      collapse: true,
      combiner: "or",
      container: function(dt) {
        return dt.table().container();
      },
      controls: true,
      dtOpts: {},
      emptyMessage: null,
      hideCount: false,
      i18n: {
        clearPane: "&times;",
        count: "{total}",
        emptyMessage: "<em>No data</em>"
      },
      initCollapsed: false,
      layout: "auto",
      name: void 0,
      orderable: true,
      orthogonal: {
        display: "display",
        filter: "filter",
        hideCount: false,
        search: "filter",
        show: void 0,
        sort: "sort",
        threshold: 0.6,
        type: "type",
        viewCount: true
      },
      preSelect: [],
      threshold: 0.6,
      viewCount: true
    };
    return SearchPane2;
  }();
  var __extends$4 = window && window.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var SearchPaneST = function(_super) {
    __extends$4(SearchPaneST2, _super);
    function SearchPaneST2(paneSettings, opts, index, panesContainer, panes) {
      return _super.call(this, paneSettings, opts, index, panesContainer, panes) || this;
    }
    SearchPaneST2.prototype._emptyPane = function() {
      var dt = this.s.dtPane;
      if (DataTable$1.versionCheck("2")) {
        var last = dt.select.last();
        var selectedIndex_1;
        if (last && dt.row(last.row).any()) {
          selectedIndex_1 = dt.row(last.row).data().index;
        }
        dt.rows().remove();
        return function() {
          if (selectedIndex_1 !== void 0) {
            var idx = dt.row(function(i, data) {
              return data.index === selectedIndex_1;
            }).index();
            dt.select.last({ row: idx, column: 0 });
          }
        };
      }
      dt.rows().remove();
      return function() {
      };
    };
    SearchPaneST2.prototype._serverPopulate = function(dataIn) {
      var selection, row, data;
      this.s.rowData.binsShown = {};
      this.s.rowData.arrayFilter = [];
      if (dataIn.tableLength !== void 0) {
        this.s.tableLength = dataIn.tableLength;
        this.s.rowData.totalOptions = this.s.tableLength;
      } else if (this.s.tableLength === null || this.s.dt.rows()[0].length > this.s.tableLength) {
        this.s.tableLength = this.s.dt.rows()[0].length;
        this.s.rowData.totalOptions = this.s.tableLength;
      }
      var colTitle = this.s.dt.column(this.s.index).dataSrc();
      if (dataIn.searchPanes.options[colTitle] !== void 0) {
        for (var _i = 0, _a = dataIn.searchPanes.options[colTitle]; _i < _a.length; _i++) {
          var dataPoint = _a[_i];
          this.s.rowData.arrayFilter.push({
            display: dataPoint.label,
            filter: dataPoint.value,
            shown: +dataPoint.count,
            sort: dataPoint.label,
            total: +dataPoint.total,
            type: dataPoint.label
          });
          this.s.rowData.binsShown[dataPoint.value] = +dataPoint.count;
          this.s.rowData.bins[dataPoint.value] = +dataPoint.total;
        }
      }
      var binLength = Object.keys(this.s.rowData.bins).length;
      var uniqueRatio = this._uniqueRatio(binLength, this.s.tableLength);
      if (!this.s.colOpts.show && this.s.displayed === false && ((this.s.colOpts.show === void 0 && this.s.colOpts.threshold === null ? uniqueRatio > this.c.threshold : uniqueRatio > this.s.colOpts.threshold) || this.s.colOpts.show !== true && binLength <= 1)) {
        this.dom.container.addClass(this.classes.hidden);
        this.s.displayed = false;
        return;
      }
      this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter;
      this.s.rowData.binsOriginal = this.s.rowData.bins;
      this.s.displayed = true;
      if (this.s.dtPane) {
        var selected = this.s.serverSelect;
        var reselect = this._emptyPane();
        for (var _b = 0, _c = this.s.rowData.arrayFilter; _b < _c.length; _b++) {
          data = _c[_b];
          if (this._shouldAddRow(data)) {
            row = this.addRow(data.display, data.filter, data.sort, data.type);
            for (var i = 0; i < selected.length; i++) {
              selection = selected[i];
              if (selection.filter === data.filter) {
                this.s.serverSelecting = true;
                row.select();
                this.s.serverSelecting = false;
                selected.splice(i, 1);
                this.s.selections.push(data.filter);
                break;
              }
            }
          }
        }
        for (var _d = 0, selected_1 = selected; _d < selected_1.length; _d++) {
          selection = selected_1[_d];
          for (var _e = 0, _f = this.s.rowData.arrayOriginal; _e < _f.length; _e++) {
            data = _f[_e];
            if (data.filter === selection.filter) {
              row = this.addRow(data.display, data.filter, data.sort, data.type);
              this.s.serverSelecting = true;
              row.select();
              this.s.serverSelecting = false;
              this.s.selections.push(data.filter);
            }
          }
        }
        this.s.serverSelect = this.s.dtPane.rows({ selected: true }).data().toArray();
        this.s.dtPane.draw();
        reselect();
      }
    };
    SearchPaneST2.prototype.updateRows = function() {
      if (!this.s.dt.page.info().serverSide) {
        this.s.rowData.binsShown = {};
        for (var _i = 0, _a = this.s.dt.rows({ search: "applied" }).indexes().toArray(); _i < _a.length; _i++) {
          var index = _a[_i];
          this._updateShown(index, this.s.dt.settings()[0], this.s.rowData.binsShown);
        }
      }
      var _loop_1 = function(row2) {
        row2.shown = typeof this_1.s.rowData.binsShown[row2.filter] === "number" ? this_1.s.rowData.binsShown[row2.filter] : 0;
        this_1.s.dtPane.row(function(idx, data) {
          return data && data.index === row2.index;
        }).data(row2);
      };
      var this_1 = this;
      for (var _b = 0, _c = this.s.dtPane.rows().data().toArray(); _b < _c.length; _b++) {
        var row = _c[_b];
        _loop_1(row);
      }
      this.s.dtPane.draw();
      this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
    };
    SearchPaneST2.prototype._makeSelection = function() {
      return;
    };
    SearchPaneST2.prototype._reloadSelect = function() {
      return;
    };
    SearchPaneST2.prototype._shouldAddRow = function(data) {
      return true;
    };
    SearchPaneST2.prototype._updateSelection = function() {
      if (this.s.dt.page.info().serverSide && !this.s.updating && !this.s.serverSelecting) {
        this.s.serverSelect = this.s.dtPane.rows({ selected: true }).data().toArray();
      }
    };
    SearchPaneST2.prototype._updateShown = function(rowIdx, settings, bins) {
      if (bins === void 0) {
        bins = this.s.rowData.binsShown;
      }
      var orth = typeof this.s.colOpts.orthogonal === "string" ? this.s.colOpts.orthogonal : this.s.colOpts.orthogonal.search;
      var fastData = this.s.dt.settings()[0].fastData;
      var filter = fastData(rowIdx, this.s.index, orth);
      var add2 = function(f3) {
        if (!bins[f3]) {
          bins[f3] = 1;
        } else {
          bins[f3]++;
        }
      };
      if (Array.isArray(filter)) {
        for (var _i = 0, filter_1 = filter; _i < filter_1.length; _i++) {
          var f2 = filter_1[_i];
          add2(f2);
        }
      } else {
        add2(filter);
      }
    };
    return SearchPaneST2;
  }(SearchPane);
  var __extends$3 = window && window.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var $$42;
  function setJQuery$3(jq) {
    $$42 = jq;
  }
  var SearchPaneViewTotal = function(_super) {
    __extends$3(SearchPaneViewTotal2, _super);
    function SearchPaneViewTotal2(paneSettings, opts, index, panesContainer, panes) {
      var _this = this;
      var override = {
        i18n: {
          countFiltered: "{shown} ({total})"
        }
      };
      _this = _super.call(this, paneSettings, $$42.extend(override, opts), index, panesContainer, panes) || this;
      return _this;
    }
    SearchPaneViewTotal2.prototype._getMessage = function(row) {
      var countMessage = this.s.dt.i18n("searchPanes.count", this.c.i18n.count);
      var filteredMessage = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
      return (this.s.filteringActive ? filteredMessage : countMessage).replace(/{total}/g, row.total).replace(/{shown}/g, row.shown);
    };
    SearchPaneViewTotal2.prototype._getShown = function(filter) {
      return this.s.rowData.binsShown && this.s.rowData.binsShown[filter] ? this.s.rowData.binsShown[filter] : 0;
    };
    return SearchPaneViewTotal2;
  }(SearchPaneST);
  var __extends$2 = window && window.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var $$32;
  function setJQuery$2(jq) {
    $$32 = jq;
  }
  var SearchPaneCascade = function(_super) {
    __extends$2(SearchPaneCascade2, _super);
    function SearchPaneCascade2(paneSettings, opts, index, panesContainer, panes) {
      var _this = this;
      var override = {
        i18n: {
          count: "{shown}"
        }
      };
      _this = _super.call(this, paneSettings, $$32.extend(override, opts), index, panesContainer, panes) || this;
      return _this;
    }
    SearchPaneCascade2.prototype.updateRows = function() {
      var selected = this.s.dtPane.rows({ selected: true }).data().toArray();
      var selection;
      if (this.s.colOpts.options || this.s.customPaneSettings && this.s.customPaneSettings.options) {
        this._getComparisonRows();
        var rows = this.s.dtPane.rows().toArray()[0];
        for (var i = 0; i < rows.length; i++) {
          var row = this.s.dtPane.row(rows[i]);
          var rowData = row.data();
          if (rowData === void 0) {
            continue;
          }
          if (rowData.shown === 0) {
            row.remove();
            rows = this.s.dtPane.rows().toArray()[0];
            i--;
            continue;
          }
          for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
            selection = selected_1[_i];
            if (rowData.filter === selection.filter) {
              row.select();
              selected.splice(i, 1);
              this.s.selections.push(rowData.filter);
              break;
            }
          }
        }
      } else {
        if (!this.s.dt.page.info().serverSide) {
          this._activePopulatePane();
          this.s.rowData.binsShown = {};
          for (var _a = 0, _b = this.s.dt.rows({ search: "applied" }).indexes().toArray(); _a < _b.length; _a++) {
            var index = _b[_a];
            this._updateShown(index, this.s.dt.settings()[0], this.s.rowData.binsShown);
          }
        }
        this.s.dtPane.rows().remove();
        for (var _c = 0, _d = this.s.rowData.arrayFilter; _c < _d.length; _c++) {
          var data = _d[_c];
          if (data.shown === 0) {
            continue;
          }
          var newRow = this.addRow(data.display, data.filter, data.sort, data.type, void 0);
          for (var j = 0; j < selected.length; j++) {
            var selectedRow = selected[j];
            if (selectedRow.filter === data.filter) {
              newRow.select();
              selected.splice(j, 1);
              this.s.selections.push(data.filter);
              break;
            }
          }
        }
        for (var _e = 0, selected_2 = selected; _e < selected_2.length; _e++) {
          selection = selected_2[_e];
          for (var _f = 0, _g = this.s.rowData.arrayOriginal; _f < _g.length; _f++) {
            var origData = _g[_f];
            if (origData.filter === selection.filter) {
              var addedRow = this.addRow(origData.display, origData.filter, origData.sort, origData.type, void 0);
              addedRow.select();
              this.s.selections.push(origData.filter);
            }
          }
        }
      }
      this.s.dtPane.draw();
      this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
      if (!this.s.dt.page.info().serverSide) {
        this.s.dt.draw(false);
      }
    };
    SearchPaneCascade2.prototype._activePopulatePane = function() {
      this.s.rowData.arrayFilter = [];
      this.s.rowData.bins = {};
      var settings = this.s.dt.settings()[0];
      if (!this.s.dt.page.info().serverSide) {
        for (var _i = 0, _a = this.s.dt.rows({ search: "applied" }).indexes().toArray(); _i < _a.length; _i++) {
          var index = _a[_i];
          this._populatePaneArray(index, this.s.rowData.arrayFilter, settings);
        }
      }
    };
    SearchPaneCascade2.prototype._getComparisonRows = function() {
      var options = this.s.colOpts.options ? this.s.colOpts.options : this.s.customPaneSettings && this.s.customPaneSettings.options ? this.s.customPaneSettings.options : void 0;
      if (options === void 0) {
        return;
      }
      var allRows = this.s.dt.rows();
      var shownRows = this.s.dt.rows({ search: "applied" });
      var tableValsTotal = allRows.data().toArray();
      var tableValsShown = shownRows.data().toArray();
      var rows = [];
      this.s.dtPane.clear();
      this.s.indexes = [];
      for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
        var comp = options_1[_i];
        var insert = comp.label !== "" ? comp.label : this.emptyMessage();
        var comparisonObj = {
          className: comp.className,
          display: insert,
          filter: typeof comp.value === "function" ? comp.value : [],
          shown: 0,
          sort: insert,
          total: 0,
          type: insert
        };
        if (typeof comp.value === "function") {
          for (var i = 0; i < tableValsTotal.length; i++) {
            if (comp.value.call(this.s.dt, tableValsTotal[i], allRows[0][i])) {
              comparisonObj.total++;
            }
          }
          for (var j = 0; j < tableValsShown.length; j++) {
            if (comp.value.call(this.s.dt, tableValsShown[j], shownRows[0][j])) {
              comparisonObj.shown++;
            }
          }
          if (typeof comparisonObj.filter !== "function") {
            comparisonObj.filter.push(comp.filter);
          }
        }
        rows.push(this.addRow(comparisonObj.display, comparisonObj.filter, comparisonObj.sort, comparisonObj.type, comparisonObj.className, comparisonObj.total, comparisonObj.shown));
      }
      return rows;
    };
    SearchPaneCascade2.prototype._getMessage = function(row) {
      return this.s.dt.i18n("searchPanes.count", this.c.i18n.count).replace(/{total}/g, row.total).replace(/{shown}/g, row.shown);
    };
    SearchPaneCascade2.prototype._getShown = function(filter) {
      return this.s.rowData.binsShown && this.s.rowData.binsShown[filter] ? this.s.rowData.binsShown[filter] : 0;
    };
    SearchPaneCascade2.prototype._shouldAddRow = function(data) {
      return data.shown > 0;
    };
    return SearchPaneCascade2;
  }(SearchPaneST);
  var __extends$1 = window && window.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var $$22;
  function setJQuery$1(jq) {
    $$22 = jq;
  }
  var SearchPaneCascadeViewTotal = function(_super) {
    __extends$1(SearchPaneCascadeViewTotal2, _super);
    function SearchPaneCascadeViewTotal2(paneSettings, opts, index, panesContainer, panes) {
      var _this = this;
      var override = {
        i18n: {
          count: "{total}",
          countFiltered: "{shown} ({total})"
        }
      };
      _this = _super.call(this, paneSettings, $$22.extend(override, opts), index, panesContainer, panes) || this;
      return _this;
    }
    SearchPaneCascadeViewTotal2.prototype._activePopulatePane = function() {
      this.s.rowData.arrayFilter = [];
      this.s.rowData.binsShown = {};
      var settings = this.s.dt.settings()[0];
      if (!this.s.dt.page.info().serverSide) {
        for (var _i = 0, _a = this.s.dt.rows({ search: "applied" }).indexes().toArray(); _i < _a.length; _i++) {
          var index = _a[_i];
          this._populatePaneArray(index, this.s.rowData.arrayFilter, settings, this.s.rowData.binsShown);
        }
      }
    };
    SearchPaneCascadeViewTotal2.prototype._getMessage = function(row) {
      var countMessage = this.s.dt.i18n("searchPanes.count", this.c.i18n.count);
      var filteredMessage = this.s.dt.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered);
      return (this.s.filteringActive ? filteredMessage : countMessage).replace(/{total}/g, row.total).replace(/{shown}/g, row.shown);
    };
    return SearchPaneCascadeViewTotal2;
  }(SearchPaneCascade);
  var $$1$1;
  var dataTable$1;
  function setJQuery(jq) {
    $$1$1 = jq;
    dataTable$1 = jq.fn.dataTable;
  }
  var SearchPanes = function() {
    function SearchPanes2(paneSettings, opts, fromPreInit, paneClass) {
      var _this = this;
      if (fromPreInit === void 0) {
        fromPreInit = false;
      }
      if (paneClass === void 0) {
        paneClass = SearchPane;
      }
      if (!dataTable$1 || !dataTable$1.versionCheck || !dataTable$1.versionCheck("1.10.0")) {
        throw new Error("SearchPane requires DataTables 1.10 or newer");
      }
      if (!dataTable$1.select) {
        throw new Error("SearchPane requires Select");
      }
      var table = new dataTable$1.Api(paneSettings);
      this.classes = $$1$1.extend(true, {}, SearchPanes2.classes);
      this.c = $$1$1.extend(true, {}, SearchPanes2.defaults, opts);
      this.dom = {
        clearAll: $$1$1('<button type="button"/>').addClass(this.classes.clearAll).html(table.i18n("searchPanes.clearMessage", this.c.i18n.clearMessage)),
        collapseAll: $$1$1('<button type="button"/>').addClass(this.classes.collapseAll).html(table.i18n("searchPanes.collapseMessage", this.c.i18n.collapseMessage)),
        container: $$1$1("<div/>").addClass(this.classes.panes).html(table.i18n("searchPanes.loadMessage", this.c.i18n.loadMessage)),
        emptyMessage: $$1$1("<div/>").addClass(this.classes.emptyMessage),
        panes: $$1$1("<div/>").addClass(this.classes.container),
        showAll: $$1$1('<button type="button"/>').addClass(this.classes.showAll).addClass(this.classes.disabledButton).attr("disabled", "true").html(table.i18n("searchPanes.showMessage", this.c.i18n.showMessage)),
        title: $$1$1("<div/>").addClass(this.classes.title),
        titleRow: $$1$1("<div/>").addClass(this.classes.titleRow)
      };
      this.s = {
        colOpts: [],
        dt: table,
        filterCount: 0,
        minPaneWidth: 260,
        page: 0,
        paging: false,
        pagingST: false,
        paneClass,
        panes: [],
        selectionList: [],
        serverData: {},
        stateRead: false,
        updating: false
      };
      if (table.settings()[0]._searchPanes) {
        return;
      }
      $$1$1(document).on("draw.dt", function(e) {
        if (_this.dom.container.find(e.target).length) {
          _this._updateFilterCount();
        }
      });
      this._getState();
      if (this.s.dt.page.info().serverSide) {
        var hostSettings = this.s.dt.settings()[0];
        this.s.dt.on("preXhr.dtsps", function(e, settings, data) {
          if (hostSettings !== settings) {
            return;
          }
          if (data.searchPanes === void 0) {
            data.searchPanes = {};
          }
          if (data.searchPanes_null === void 0) {
            data.searchPanes_null = {};
          }
          var src;
          for (var _i = 0, _a = _this.s.selectionList; _i < _a.length; _i++) {
            var selection = _a[_i];
            src = _this.s.dt.column(selection.column).dataSrc();
            if (data.searchPanes[src] === void 0) {
              data.searchPanes[src] = {};
            }
            if (data.searchPanes_null[src] === void 0) {
              data.searchPanes_null[src] = {};
            }
            for (var i = 0; i < selection.rows.length; i++) {
              data.searchPanes[src][i] = selection.rows[i];
              if (data.searchPanes[src][i] === null) {
                data.searchPanes_null[src][i] = true;
              } else {
                data.searchPanes_null[src][i] = false;
              }
            }
          }
          if (_this.s.selectionList.length > 0) {
            data.searchPanesLast = src;
          }
          data.searchPanes_options = {
            cascade: _this.c.cascadePanes,
            viewCount: _this.c.viewCount,
            viewTotal: _this.c.viewTotal
          };
        });
      }
      this._setXHR();
      table.settings()[0]._searchPanes = this;
      if (this.s.dt.settings()[0]._bInitComplete || fromPreInit) {
        this._paneDeclare(table, paneSettings, opts);
      } else {
        table.one("preInit.dtsps", function() {
          _this._paneDeclare(table, paneSettings, opts);
        });
      }
      return this;
    }
    SearchPanes2.prototype.clearSelections = function() {
      var pane;
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        pane = _a[_i];
        if (pane.s.dtPane) {
          pane.s.scrollTop = pane.s.dtPane.table().node().parentNode.scrollTop;
        }
      }
      var searches = this.dom.container.find("." + this.classes.search.replace(/\s+/g, "."));
      searches.each(function() {
        $$1$1(this).val("").trigger("input");
      });
      this.s.selectionList = [];
      var returnArray = [];
      for (var _b = 0, _c = this.s.panes; _b < _c.length; _b++) {
        pane = _c[_b];
        if (pane.s.dtPane) {
          returnArray.push(pane.clearPane());
        }
      }
      return returnArray;
    };
    SearchPanes2.prototype.getNode = function() {
      return this.dom.container;
    };
    SearchPanes2.prototype.rebuild = function(targetIdx, maintainSelection) {
      if (targetIdx === void 0) {
        targetIdx = false;
      }
      if (maintainSelection === void 0) {
        maintainSelection = false;
      }
      this.dom.emptyMessage.detach();
      if (targetIdx === false) {
        this.dom.panes.empty();
      }
      var returnArray = [];
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (targetIdx === false || pane.s.index === targetIdx) {
          pane.clearData();
          pane.rebuildPane(this.s.dt.page.info().serverSide ? this.s.serverData : void 0, maintainSelection);
          this.dom.panes.append(pane.dom.container);
          returnArray.push(pane);
        }
      }
      this._updateSelection();
      this._updateFilterCount();
      this._attachPaneContainer();
      this._initSelectionListeners(false);
      this.s.dt.draw(!maintainSelection);
      this.resizePanes();
      return returnArray.length === 1 ? returnArray[0] : returnArray;
    };
    SearchPanes2.prototype.resizePanes = function() {
      var pane;
      if (this.c.layout === "auto") {
        var contWidth = $$1$1(this.s.dt.searchPanes.container()).width();
        var target = Math.floor(contWidth / this.s.minPaneWidth);
        var highest_1 = 1;
        var highestmod_1 = 0;
        var dispIndex = [];
        for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
          pane = _a[_i];
          if (pane.s.displayed) {
            dispIndex.push(pane.s.index);
          }
        }
        var displayCount = dispIndex.length;
        if (target === displayCount) {
          highest_1 = target;
        } else {
          for (var ppr = target; ppr > 1; ppr--) {
            var rem = displayCount % ppr;
            if (rem === 0) {
              highest_1 = ppr;
              highestmod_1 = 0;
              break;
            } else if (rem > highestmod_1) {
              highest_1 = ppr;
              highestmod_1 = rem;
            }
          }
        }
        var widerIndexes_1 = highestmod_1 !== 0 ? dispIndex.slice(dispIndex.length - highestmod_1, dispIndex.length) : [];
        this.s.panes.forEach(function(pane2) {
          if (pane2.s.displayed) {
            pane2.resize("columns-" + (!widerIndexes_1.includes(pane2.s.index) ? highest_1 : highestmod_1));
          }
        });
      } else {
        for (var _b = 0, _c = this.s.panes; _b < _c.length; _b++) {
          pane = _c[_b];
          pane.adjustTopRow();
        }
      }
      return this;
    };
    SearchPanes2.prototype._initSelectionListeners = function(isPreselect) {
      return;
    };
    SearchPanes2.prototype._serverTotals = function() {
      return;
    };
    SearchPanes2.prototype._setXHR = function() {
      var _this = this;
      var hostSettings = this.s.dt.settings()[0];
      var run = function(json) {
        if (json && json.searchPanes && json.searchPanes.options) {
          _this.s.serverData = json;
          _this.s.serverData.tableLength = json.recordsTotal;
          _this._serverTotals();
        }
      };
      this.s.dt.on("xhr.dtsps", function(e, settings, json) {
        if (hostSettings === settings) {
          run(json);
        }
      });
      run(this.s.dt.ajax.json());
    };
    SearchPanes2.prototype._stateLoadListener = function() {
      var _this = this;
      var hostSettings = this.s.dt.settings()[0];
      this.s.dt.on("stateLoadParams.dtsps", function(e, settings, data) {
        if (data.searchPanes === void 0 || settings !== hostSettings) {
          return;
        }
        _this.clearSelections();
        _this.s.selectionList = data.searchPanes.selectionList ? data.searchPanes.selectionList : [];
        if (data.searchPanes.panes) {
          for (var _i = 0, _a = data.searchPanes.panes; _i < _a.length; _i++) {
            var loadedPane = _a[_i];
            for (var _b = 0, _c = _this.s.panes; _b < _c.length; _b++) {
              var pane = _c[_b];
              if (loadedPane.id === pane.s.index && pane.s.dtPane) {
                pane.dom.searchBox.val(loadedPane.searchTerm);
                pane.s.dtPane.order(loadedPane.order);
              }
            }
          }
        }
        _this._makeSelections(_this.s.selectionList);
      });
    };
    SearchPanes2.prototype._updateSelection = function() {
      this.s.selectionList = [];
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.dtPane) {
          var rows = pane.s.dtPane.rows({ selected: true }).data().toArray().map(function(el) {
            return el.filter;
          });
          if (rows.length) {
            this.s.selectionList.push({
              column: pane.s.index,
              rows
            });
          }
        }
      }
    };
    SearchPanes2.prototype._attach = function() {
      var _this = this;
      this.dom.titleRow.removeClass(this.classes.hide).detach().append(this.dom.title);
      if (this.c.clear) {
        this.dom.clearAll.appendTo(this.dom.titleRow).off("click.dtsps").on("click.dtsps", function() {
          return _this.clearSelections();
        });
      }
      if (this.c.collapse) {
        this.dom.showAll.appendTo(this.dom.titleRow);
        this.dom.collapseAll.appendTo(this.dom.titleRow);
        this._setCollapseListener();
      }
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        this.dom.panes.append(pane.dom.container);
      }
      this.dom.container.text("").removeClass(this.classes.hide).append(this.dom.titleRow).append(this.dom.panes);
      this.s.panes.forEach(function(pane2) {
        return pane2.setListeners();
      });
      if ($$1$1("div." + this.classes.container).length === 0) {
        this.dom.container.prependTo(this.s.dt);
      }
    };
    SearchPanes2.prototype._attachMessage = function() {
      var message;
      try {
        message = this.s.dt.i18n("searchPanes.emptyPanes", this.c.i18n.emptyPanes);
      } catch (error) {
        message = null;
      }
      if (message === null) {
        this.dom.container.addClass(this.classes.hide);
        this.dom.titleRow.removeClass(this.classes.hide);
        return;
      }
      this.dom.container.removeClass(this.classes.hide);
      this.dom.titleRow.addClass(this.classes.hide);
      this.dom.emptyMessage.html(message).appendTo(this.dom.container);
    };
    SearchPanes2.prototype._attachPaneContainer = function() {
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.displayed === true) {
          this._attach();
          return;
        }
      }
      this._attachMessage();
    };
    SearchPanes2.prototype._checkCollapse = function() {
      var disableClose = true;
      var disableShow = true;
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.displayed) {
          if (!pane.dom.collapseButton.hasClass(pane.classes.rotated)) {
            this.dom.collapseAll.removeClass(this.classes.disabledButton).removeAttr("disabled");
            disableClose = false;
          } else {
            this.dom.showAll.removeClass(this.classes.disabledButton).removeAttr("disabled");
            disableShow = false;
          }
        }
      }
      if (disableClose) {
        this.dom.collapseAll.addClass(this.classes.disabledButton).attr("disabled", "true");
      }
      if (disableShow) {
        this.dom.showAll.addClass(this.classes.disabledButton).attr("disabled", "true");
      }
    };
    SearchPanes2.prototype._checkMessage = function() {
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.displayed === true) {
          this.dom.emptyMessage.detach();
          this.dom.titleRow.removeClass(this.classes.hide);
          return;
        }
      }
      this._attachMessage();
    };
    SearchPanes2.prototype._collapseAll = function() {
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        pane.collapse();
      }
    };
    SearchPanes2.prototype._findPane = function(name2) {
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (name2 === pane.s.name) {
          return pane;
        }
      }
    };
    SearchPanes2.prototype._getState = function() {
      var loadedFilter = this.s.dt.state.loaded();
      if (loadedFilter && loadedFilter.searchPanes && loadedFilter.searchPanes.selectionList) {
        this.s.selectionList = loadedFilter.searchPanes.selectionList;
      }
    };
    SearchPanes2.prototype._makeSelections = function(selectList) {
      for (var _i = 0, selectList_1 = selectList; _i < selectList_1.length; _i++) {
        var selection = selectList_1[_i];
        var pane = void 0;
        for (var _a = 0, _b = this.s.panes; _a < _b.length; _a++) {
          var p2 = _b[_a];
          if (p2.s.index === selection.column) {
            pane = p2;
            break;
          }
        }
        if (pane && pane.s.dtPane) {
          for (var j = 0; j < pane.s.dtPane.rows().data().toArray().length; j++) {
            if (selection.rows.includes(typeof pane.s.dtPane.row(j).data().filter === "function" ? pane.s.dtPane.cell(j, 0).data() : pane.s.dtPane.row(j).data().filter)) {
              pane.s.dtPane.row(j).select();
            }
          }
          pane.updateTable();
        }
      }
    };
    SearchPanes2.prototype._paneDeclare = function(table, paneSettings, opts) {
      var _this = this;
      table.columns(this.c.columns.length > 0 ? this.c.columns : void 0).eq(0).each(function(idx) {
        _this.s.panes.push(new _this.s.paneClass(paneSettings, opts, idx, _this.dom.panes));
      });
      var colCount = table.columns().eq(0).toArray().length;
      for (var i = 0; i < this.c.panes.length; i++) {
        var id = colCount + i;
        this.s.panes.push(new this.s.paneClass(paneSettings, opts, id, this.dom.panes, this.c.panes[i]));
      }
      if (this.c.order.length > 0) {
        this.s.panes = this.c.order.map(function(name2) {
          return _this._findPane(name2);
        });
      }
      if (this.s.dt.settings()[0]._bInitComplete) {
        this._startup(table);
      } else {
        this.s.dt.settings()[0].aoInitComplete.push(function() {
          return _this._startup(table);
        });
      }
    };
    SearchPanes2.prototype._setCollapseListener = function() {
      var _this = this;
      this.dom.collapseAll.off("click.dtsps").on("click.dtsps", function() {
        _this._collapseAll();
        _this.dom.collapseAll.addClass(_this.classes.disabledButton).attr("disabled", "true");
        _this.dom.showAll.removeClass(_this.classes.disabledButton).removeAttr("disabled");
        _this.s.dt.state.save();
      });
      this.dom.showAll.off("click.dtsps").on("click.dtsps", function() {
        _this._showAll();
        _this.dom.showAll.addClass(_this.classes.disabledButton).attr("disabled", "true");
        _this.dom.collapseAll.removeClass(_this.classes.disabledButton).removeAttr("disabled");
        _this.s.dt.state.save();
      });
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        pane.dom.topRow.off("collapse.dtsps").on("collapse.dtsps", function() {
          return _this._checkCollapse();
        });
      }
      this._checkCollapse();
    };
    SearchPanes2.prototype._showAll = function() {
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        pane.show();
      }
    };
    SearchPanes2.prototype._startup = function(table) {
      var _this = this;
      this._attach();
      this.dom.panes.empty();
      var hostSettings = this.s.dt.settings()[0];
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        pane.rebuildPane(Object.keys(this.s.serverData).length > 0 ? this.s.serverData : void 0);
        this.dom.panes.append(pane.dom.container);
      }
      if (this.c.layout === "auto") {
        this.resizePanes();
      }
      var loadedFilter = this.s.dt.state.loaded();
      if (!this.s.stateRead && loadedFilter) {
        this.s.dt.page(loadedFilter.start / this.s.dt.page.len()).draw("page");
      }
      this.s.stateRead = true;
      this._checkMessage();
      table.on("preDraw.dtsps", function() {
        if (!_this.s.updating && !_this.s.paging) {
          _this._updateFilterCount();
          _this._updateSelection();
        }
        _this.s.paging = false;
      });
      $$1$1(window).on("resize.dtsps", dataTable$1.util.throttle(function() {
        return _this.resizePanes();
      }));
      this.s.dt.on("stateSaveParams.dtsps", function(e, settings, data) {
        if (settings !== hostSettings) {
          return;
        }
        if (data.searchPanes === void 0) {
          data.searchPanes = {};
        }
        data.searchPanes.selectionList = _this.s.selectionList;
      });
      this._stateLoadListener();
      table.off("page.dtsps page-nc.dtsps").on("page.dtsps page-nc.dtsps", function(e, s) {
        _this.s.paging = true;
        _this.s.pagingST = true;
        _this.s.page = _this.s.dt.page();
      });
      if (this.s.dt.page.info().serverSide) {
        table.off("preXhr.dtsps").on("preXhr.dtsps", function(e, settings, data) {
          if (settings !== hostSettings) {
            return;
          }
          if (!data.searchPanes) {
            data.searchPanes = {};
          }
          if (!data.searchPanes_null) {
            data.searchPanes_null = {};
          }
          var filterCount = 0;
          for (var _i2 = 0, _a2 = _this.s.panes; _i2 < _a2.length; _i2++) {
            var pane2 = _a2[_i2];
            var src = _this.s.dt.column(pane2.s.index).dataSrc();
            if (!data.searchPanes[src]) {
              data.searchPanes[src] = {};
            }
            if (!data.searchPanes_null[src]) {
              data.searchPanes_null[src] = {};
            }
            if (pane2.s.dtPane) {
              var rowData = pane2.s.dtPane.rows({ selected: true }).data().toArray();
              for (var i = 0; i < rowData.length; i++) {
                data.searchPanes[src][i] = rowData[i].filter;
                if (!data.searchPanes[src][i]) {
                  data.searchPanes_null[src][i] = true;
                } else {
                  data.searchPanes_null[src][i] = false;
                }
                filterCount++;
              }
            }
          }
          if (filterCount > 0) {
            if (filterCount !== _this.s.filterCount) {
              data.start = 0;
              _this.s.page = 0;
            } else {
              data.start = _this.s.page * _this.s.dt.page.len();
            }
            _this.s.dt.page(_this.s.page);
            _this.s.filterCount = filterCount;
          }
          if (_this.s.selectionList.length > 0) {
            data.searchPanesLast = _this.s.dt.column(_this.s.selectionList[_this.s.selectionList.length - 1].column).dataSrc();
          }
          data.searchPanes_options = {
            cascade: _this.c.cascadePanes,
            viewCount: _this.c.viewCount,
            viewTotal: _this.c.viewTotal
          };
        });
      } else {
        table.on("preXhr.dtsps", function() {
          return _this.s.panes.forEach(function(pane2) {
            return pane2.clearData();
          });
        });
      }
      this.s.dt.on("xhr.dtsps", function(e, settings) {
        if (settings.nTable !== _this.s.dt.table().node()) {
          return;
        }
        if (!_this.s.dt.page.info().serverSide) {
          var processing_1 = false;
          _this.s.dt.one("preDraw.dtsps", function() {
            if (processing_1) {
              return;
            }
            var page = _this.s.dt.page();
            processing_1 = true;
            _this.s.updating = true;
            _this.dom.panes.empty();
            for (var _i2 = 0, _a2 = _this.s.panes; _i2 < _a2.length; _i2++) {
              var pane2 = _a2[_i2];
              pane2.clearData();
              pane2.rebuildPane(void 0, true);
              _this.dom.panes.append(pane2.dom.container);
            }
            if (!_this.s.dt.page.info().serverSide) {
              _this.s.dt.draw();
            }
            _this.s.updating = false;
            _this._updateSelection();
            _this._checkMessage();
            _this.s.dt.one("draw.dtsps", function() {
              _this.s.updating = true;
              _this.s.dt.page(page).draw(false);
              _this.s.updating = false;
            });
          });
        }
      });
      var selectList = this.c.preSelect;
      if (loadedFilter && loadedFilter.searchPanes && loadedFilter.searchPanes.selectionList) {
        selectList = loadedFilter.searchPanes.selectionList;
      }
      this._makeSelections(selectList);
      this._updateFilterCount();
      table.on("destroy.dtsps", function(e, settings) {
        if (settings !== hostSettings) {
          return;
        }
        for (var _i2 = 0, _a2 = _this.s.panes; _i2 < _a2.length; _i2++) {
          var pane2 = _a2[_i2];
          pane2.destroy();
        }
        table.off(".dtsps");
        _this.dom.showAll.off(".dtsps");
        _this.dom.clearAll.off(".dtsps");
        _this.dom.collapseAll.off(".dtsps");
        $$1$1(table.table().node()).off(".dtsps");
        _this.dom.container.detach();
        _this.clearSelections();
      });
      if (this.c.collapse) {
        this._setCollapseListener();
      }
      if (this.c.clear) {
        this.dom.clearAll.off("click.dtsps").on("click.dtsps", function() {
          return _this.clearSelections();
        });
      }
      hostSettings._searchPanes = this;
      this.s.dt.state.save();
    };
    SearchPanes2.prototype._updateFilterCount = function() {
      var filterCount = 0;
      var tableSearch = 0;
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.dtPane) {
          filterCount += pane.getPaneCount();
          if (pane.s.dtPane.search()) {
            tableSearch++;
          }
        }
      }
      this.dom.title.html(this.s.dt.i18n("searchPanes.title", this.c.i18n.title, filterCount));
      if (this.c.filterChanged && typeof this.c.filterChanged === "function") {
        this.c.filterChanged.call(this.s.dt, filterCount);
      }
      if (filterCount === 0 && tableSearch === 0) {
        this.dom.clearAll.addClass(this.classes.disabledButton).attr("disabled", "true");
      } else {
        this.dom.clearAll.removeClass(this.classes.disabledButton).removeAttr("disabled");
      }
    };
    SearchPanes2.version = "2.3.0";
    SearchPanes2.classes = {
      clear: "dtsp-clear",
      clearAll: "dtsp-clearAll",
      collapseAll: "dtsp-collapseAll",
      container: "dtsp-searchPanes",
      disabledButton: "dtsp-disabledButton",
      emptyMessage: "dtsp-emptyMessage",
      hide: "dtsp-hidden",
      panes: "dtsp-panesContainer",
      search: "dtsp-search",
      showAll: "dtsp-showAll",
      title: "dtsp-title",
      titleRow: "dtsp-titleRow"
    };
    SearchPanes2.defaults = {
      cascadePanes: false,
      clear: true,
      collapse: true,
      columns: [],
      container: function(dt) {
        return dt.table().container();
      },
      filterChanged: void 0,
      i18n: {
        clearMessage: "Clear All",
        clearPane: "&times;",
        collapse: {
          0: "SearchPanes",
          _: "SearchPanes (%d)"
        },
        collapseMessage: "Collapse All",
        count: "{total}",
        emptyMessage: "<em>No data</em>",
        emptyPanes: "No SearchPanes",
        loadMessage: "Loading Search Panes...",
        showMessage: "Show All",
        title: "Filters Active - %d"
      },
      layout: "auto",
      order: [],
      panes: [],
      preSelect: [],
      viewCount: true,
      viewTotal: false
    };
    return SearchPanes2;
  }();
  var __extends = window && window.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (b2.hasOwnProperty(p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var SearchPanesST = function(_super) {
    __extends(SearchPanesST2, _super);
    function SearchPanesST2(paneSettings, opts, fromPreInit) {
      if (fromPreInit === void 0) {
        fromPreInit = false;
      }
      var _this = this;
      var paneClass;
      if (opts.cascadePanes && opts.viewTotal) {
        paneClass = SearchPaneCascadeViewTotal;
      } else if (opts.cascadePanes) {
        paneClass = SearchPaneCascade;
      } else if (opts.viewTotal) {
        paneClass = SearchPaneViewTotal;
      }
      _this = _super.call(this, paneSettings, opts, fromPreInit, paneClass) || this;
      var dt = _this.s.dt;
      var loadedFilter = dt.state.loaded();
      var loadFn = function() {
        return _this._initSelectionListeners(true, loadedFilter && loadedFilter.searchPanes && loadedFilter.searchPanes.selectionList ? loadedFilter.searchPanes.selectionList : _this.c.preSelect);
      };
      if (dt.settings()[0]._bInitComplete) {
        loadFn();
      } else {
        dt.off("init.dtsps").on("init.dtsps", loadFn);
      }
      return _this;
    }
    SearchPanesST2.prototype._initSelectionListeners = function(isPreselect, preSelect) {
      if (isPreselect === void 0) {
        isPreselect = true;
      }
      if (preSelect === void 0) {
        preSelect = [];
      }
      if (isPreselect) {
        this.s.selectionList = preSelect;
      }
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.displayed) {
          pane.s.dtPane.off("select.dtsp").on("select.dtsp", this._update(pane)).off("deselect.dtsp").on("deselect.dtsp", this._updateTimeout(pane));
        }
      }
      this.s.dt.off("draw.dtsps").on("draw.dtsps", this._update());
      this._updateSelectionList();
    };
    SearchPanesST2.prototype._serverTotals = function() {
      for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
        var pane = _a[_i];
        if (pane.s.colOpts.show) {
          var colTitle = this.s.dt.column(pane.s.index).dataSrc();
          var blockVT = true;
          if (this.s.serverData.searchPanes.options[colTitle]) {
            for (var _b = 0, _c = this.s.serverData.searchPanes.options[colTitle]; _b < _c.length; _b++) {
              var data = _c[_b];
              if (data.total !== data.count) {
                blockVT = false;
                break;
              }
            }
          }
          pane.s.filteringActive = !blockVT;
          pane._serverPopulate(this.s.serverData);
        }
      }
    };
    SearchPanesST2.prototype._stateLoadListener = function() {
      var _this = this;
      var stateLoadFunction = function(e, settings, data) {
        if (data.searchPanes === void 0) {
          return;
        }
        _this.s.selectionList = data.searchPanes.selectionList ? data.searchPanes.selectionList : [];
        if (data.searchPanes.panes) {
          for (var _i = 0, _a = data.searchPanes.panes; _i < _a.length; _i++) {
            var loadedPane = _a[_i];
            for (var _b = 0, _c = _this.s.panes; _b < _c.length; _b++) {
              var pane = _c[_b];
              if (loadedPane.id === pane.s.index && pane.s.dtPane) {
                pane.dom.searchBox.val(loadedPane.searchTerm);
                pane.s.dtPane.order(loadedPane.order);
              }
            }
          }
        }
        _this._updateSelectionList();
      };
      this.s.dt.off("stateLoadParams.dtsps", stateLoadFunction).on("stateLoadParams.dtsps", stateLoadFunction);
    };
    SearchPanesST2.prototype._updateSelection = function() {
      return;
    };
    SearchPanesST2.prototype._update = function(pane) {
      var _this = this;
      if (pane === void 0) {
        pane = void 0;
      }
      return function() {
        if (pane) {
          clearTimeout(pane.s.deselectTimeout);
        }
        _this._updateSelectionList(pane);
      };
    };
    SearchPanesST2.prototype._updateTimeout = function(pane) {
      var _this = this;
      if (pane === void 0) {
        pane = void 0;
      }
      return function() {
        return pane ? pane.s.deselectTimeout = setTimeout(function() {
          return _this._updateSelectionList(pane);
        }, 50) : _this._updateSelectionList();
      };
    };
    SearchPanesST2.prototype._updateSelectionList = function(paneIn) {
      if (paneIn === void 0) {
        paneIn = void 0;
      }
      if (this.s.pagingST) {
        this.s.pagingST = false;
        return;
      } else if (this.s.updating || paneIn && paneIn.s.serverSelecting) {
        return;
      }
      if (paneIn !== void 0) {
        if (this.s.dt.page.info().serverSide) {
          paneIn._updateSelection();
        }
        var rows = paneIn.s.dtPane.rows({ selected: true }).data().toArray().map(function(el) {
          return el.filter;
        });
        this.s.selectionList = this.s.selectionList.filter(function(selection) {
          return selection.column !== paneIn.s.index;
        });
        if (rows.length > 0) {
          this.s.selectionList.push({
            column: paneIn.s.index,
            rows
          });
          paneIn.dom.clear.removeClass(this.classes.disabledButton).removeAttr("disabled");
        } else {
          paneIn.dom.clear.addClass(this.classes.disabledButton).attr("disabled", "true");
        }
        if (this.s.dt.page.info().serverSide) {
          this.s.dt.draw(false);
        }
      }
      this._remakeSelections();
      this._updateFilterCount();
    };
    SearchPanesST2.prototype._remakeSelections = function() {
      var currPane;
      var pane;
      this.s.updating = true;
      if (!this.s.dt.page.info().serverSide) {
        var tmpSL = this.s.selectionList;
        var anotherFilter = false;
        this.clearSelections();
        this.s.dt.draw(false);
        if (this.s.dt.rows().toArray()[0].length > this.s.dt.rows({ search: "applied" }).toArray()[0].length) {
          anotherFilter = true;
        }
        this.s.selectionList = tmpSL;
        for (var _i = 0, _a = this.s.panes; _i < _a.length; _i++) {
          pane = _a[_i];
          if (pane.s.displayed) {
            pane.s.filteringActive = anotherFilter;
            pane.updateRows();
          }
        }
        for (var _b = 0, _c = this.s.selectionList; _b < _c.length; _b++) {
          var selection = _c[_b];
          pane = null;
          for (var _d = 0, _e = this.s.panes; _d < _e.length; _d++) {
            var paneCheck = _e[_d];
            if (paneCheck.s.index === selection.column) {
              pane = paneCheck;
              break;
            }
          }
          if (!pane.s.dtPane) {
            continue;
          }
          var ids = pane.s.dtPane.rows().indexes().toArray();
          for (var i = 0; i < selection.rows.length; i++) {
            var rowFound = false;
            for (var _f = 0, ids_1 = ids; _f < ids_1.length; _f++) {
              var id = ids_1[_f];
              var currRow = pane.s.dtPane.row(id);
              var data = currRow.data();
              if (selection.rows[i] === data.filter) {
                currRow.select();
                rowFound = true;
              }
            }
            if (!rowFound) {
              selection.rows.splice(i, 1);
              i--;
            }
          }
          pane.s.selections = selection.rows;
          if (selection.rows.length === 0) {
            continue;
          }
          this.s.dt.draw();
          var filteringActive = false;
          var filterCount = 0;
          var prevSelectedPanes = 0;
          var selectedPanes = 0;
          for (var _g = 0, _h = this.s.panes; _g < _h.length; _g++) {
            currPane = _h[_g];
            if (currPane.s.dtPane) {
              filterCount += currPane.getPaneCount();
              if (filterCount > prevSelectedPanes) {
                selectedPanes++;
                prevSelectedPanes = filterCount;
              }
            }
          }
          filteringActive = filterCount > 0;
          for (var _j = 0, _k = this.s.panes; _j < _k.length; _j++) {
            currPane = _k[_j];
            if (currPane.s.displayed) {
              if (anotherFilter || pane.s.index !== currPane.s.index || !filteringActive) {
                currPane.s.filteringActive = filteringActive || anotherFilter;
              } else if (selectedPanes === 1) {
                currPane.s.filteringActive = false;
              }
              if (currPane.s.index !== pane.s.index) {
                currPane.updateRows();
              }
            }
          }
        }
        this.s.dt.draw(false);
      } else {
        if (this.s.selectionList.length > 0) {
          pane = this.s.panes[this.s.selectionList[this.s.selectionList.length - 1].column];
        }
        for (var _l = 0, _m = this.s.panes; _l < _m.length; _l++) {
          currPane = _m[_l];
          if (currPane.s.displayed && (!pane || currPane.s.index !== pane.s.index)) {
            currPane.updateRows();
          }
        }
      }
      this.s.updating = false;
    };
    return SearchPanesST2;
  }(SearchPanes);
  /*! SearchPanes 2.3.0
   * © SpryMedia Ltd - datatables.net/license
   */
  setJQuery$4($$1);
  setJQuery($$1);
  setJQuery$3($$1);
  setJQuery$2($$1);
  setJQuery$1($$1);
  var dataTable = $$1.fn.dataTable;
  dataTable.SearchPanes = SearchPanes;
  DataTable$1.SearchPanes = SearchPanes;
  dataTable.SearchPanesST = SearchPanesST;
  DataTable$1.SearchPanesST = SearchPanesST;
  dataTable.SearchPane = SearchPane;
  DataTable$1.SearchPane = SearchPane;
  dataTable.SearchPaneViewTotal = SearchPaneViewTotal;
  DataTable$1.SearchPaneViewTotal = SearchPaneViewTotal;
  dataTable.SearchPaneCascade = SearchPaneCascade;
  DataTable$1.SearchPaneCascade = SearchPaneCascade;
  dataTable.SearchPaneCascadeViewTotal = SearchPaneCascadeViewTotal;
  DataTable$1.SearchPaneCascadeViewTotal = SearchPaneCascadeViewTotal;
  var apiRegister2 = $$1.fn.dataTable.Api.register;
  apiRegister2("searchPanes()", function() {
    return this;
  });
  apiRegister2("searchPanes.clearSelections()", function() {
    return this.iterator("table", function(ctx) {
      if (ctx._searchPanes) {
        ctx._searchPanes.clearSelections();
      }
    });
  });
  apiRegister2("searchPanes.rebuildPane()", function(targetIdx, maintainSelections) {
    return this.iterator("table", function(ctx) {
      if (ctx._searchPanes) {
        ctx._searchPanes.rebuild(targetIdx, maintainSelections);
      }
    });
  });
  apiRegister2("searchPanes.resizePanes()", function() {
    var ctx = this.context[0];
    return ctx._searchPanes ? ctx._searchPanes.resizePanes() : null;
  });
  apiRegister2("searchPanes.container()", function() {
    var ctx = this.context[0];
    return ctx._searchPanes ? ctx._searchPanes.getNode() : null;
  });
  DataTable$1.ext.buttons.searchPanesClear = {
    action: function(e, dt) {
      dt.searchPanes.clearSelections();
    },
    text: "Clear Panes"
  };
  DataTable$1.ext.buttons.searchPanes = {
    action: function(e, dt, node, config3) {
      var _this = this;
      var that = this;
      if (!config3._panes) {
        this.processing(true);
        setTimeout(function() {
          _buttonSourced(dt, node, config3);
          _this.popover(config3._panes.getNode(), {
            align: "container",
            span: "container"
          });
          config3._panes.rebuild(void 0, true);
          $$1("table.dataTable", config3._panes.getNode()).DataTable().columns.adjust();
          that.processing(false);
        }, 10);
      } else {
        this.popover(config3._panes.getNode(), {
          align: "container",
          span: "container"
        });
        config3._panes.rebuild(void 0, true);
      }
    },
    init: function(dt, node, config3) {
      dt.button(node).text(config3.text || dt.i18n("searchPanes.collapse", "SearchPanes", 0));
      if (dt.init().stateSave || config3.delayInit === false) {
        _buttonSourced(dt, node, config3);
      }
    },
    config: {},
    text: "",
    delayInit: true
  };
  function _buttonSourced(dt, node, config3) {
    var buttonOpts = $$1.extend({
      filterChanged: function(count) {
        dt.button(node).text(dt.i18n("searchPanes.collapse", dt.context[0].oLanguage.searchPanes !== void 0 ? dt.context[0].oLanguage.searchPanes.collapse : dt.context[0]._searchPanes.c.i18n.collapse, count));
      }
    }, config3.config);
    var panes = buttonOpts && (buttonOpts.cascadePanes || buttonOpts.viewTotal) ? new DataTable$1.SearchPanesST(dt, buttonOpts) : new DataTable$1.SearchPanes(dt, buttonOpts);
    dt.button(node).text(config3.text || dt.i18n("searchPanes.collapse", panes.c.i18n.collapse, 0));
    config3._panes = panes;
  }
  function _init2(settings, options, fromPre) {
    if (options === void 0) {
      options = null;
    }
    if (fromPre === void 0) {
      fromPre = false;
    }
    var api = new dataTable.Api(settings);
    var opts = options ? options : api.init().searchPanes || dataTable.defaults.searchPanes;
    var searchPanes = opts && (opts.cascadePanes || opts.viewTotal) ? new SearchPanesST(api, opts, fromPre) : new SearchPanes(api, opts, fromPre);
    var node = searchPanes.getNode();
    return node;
  }
  $$1(document).on("preInit.dt.dtsp", function(e, settings) {
    if (e.namespace !== "dt") {
      return;
    }
    if (settings.oInit.searchPanes || DataTable$1.defaults.searchPanes) {
      if (!settings._searchPanes) {
        _init2(settings, null, true);
      }
    }
  });
  DataTable$1.ext.feature.push({
    cFeature: "P",
    fnInit: _init2
  });
  if (DataTable$1.feature) {
    DataTable$1.feature.register("searchPanes", _init2);
  }
})();
/*! Bootstrap 5 integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
let $ = jQuery;
$.extend(true, DataTable$1.SearchPane.classes, {
  buttonGroup: "btn-group",
  disabledButton: "disabled",
  narrow: "col",
  pane: {
    container: "table"
  },
  paneButton: "btn btn-subtle",
  pill: "badge rounded-pill bg-secondary",
  search: "form-control search",
  table: "table table-sm table-borderless",
  topRow: "dtsp-topRow"
});
$.extend(true, DataTable$1.SearchPanes.classes, {
  clearAll: "dtsp-clearAll btn btn-subtle",
  collapseAll: "dtsp-collapseAll btn btn-subtle",
  container: "dtsp-searchPanes",
  disabledButton: "disabled",
  panes: "dtsp-panes dtsp-panesContainer",
  search: DataTable$1.SearchPane.classes.search,
  showAll: "dtsp-showAll btn btn-subtle",
  title: "dtsp-title",
  titleRow: "dtsp-titleRow"
});
const DataTable = "";
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var DEFAULT_CONFIG = {
  epsilon: 1e-12,
  matrix: "Matrix",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null
};
function isNumber(x) {
  return typeof x === "number";
}
function isBigNumber(x) {
  if (!x || typeof x !== "object" || typeof x.constructor !== "function") {
    return false;
  }
  if (x.isBigNumber === true && typeof x.constructor.prototype === "object" && x.constructor.prototype.isBigNumber === true) {
    return true;
  }
  if (typeof x.constructor.isDecimal === "function" && x.constructor.isDecimal(x) === true) {
    return true;
  }
  return false;
}
function isComplex(x) {
  return x && typeof x === "object" && Object.getPrototypeOf(x).isComplex === true || false;
}
function isFraction(x) {
  return x && typeof x === "object" && Object.getPrototypeOf(x).isFraction === true || false;
}
function isUnit(x) {
  return x && x.constructor.prototype.isUnit === true || false;
}
function isString(x) {
  return typeof x === "string";
}
var isArray = Array.isArray;
function isMatrix(x) {
  return x && x.constructor.prototype.isMatrix === true || false;
}
function isCollection(x) {
  return Array.isArray(x) || isMatrix(x);
}
function isDenseMatrix(x) {
  return x && x.isDenseMatrix && x.constructor.prototype.isMatrix === true || false;
}
function isSparseMatrix(x) {
  return x && x.isSparseMatrix && x.constructor.prototype.isMatrix === true || false;
}
function isRange(x) {
  return x && x.constructor.prototype.isRange === true || false;
}
function isIndex(x) {
  return x && x.constructor.prototype.isIndex === true || false;
}
function isBoolean(x) {
  return typeof x === "boolean";
}
function isResultSet(x) {
  return x && x.constructor.prototype.isResultSet === true || false;
}
function isHelp(x) {
  return x && x.constructor.prototype.isHelp === true || false;
}
function isFunction(x) {
  return typeof x === "function";
}
function isDate(x) {
  return x instanceof Date;
}
function isRegExp(x) {
  return x instanceof RegExp;
}
function isObject(x) {
  return !!(x && typeof x === "object" && x.constructor === Object && !isComplex(x) && !isFraction(x));
}
function isNull(x) {
  return x === null;
}
function isUndefined(x) {
  return x === void 0;
}
function isAccessorNode(x) {
  return x && x.isAccessorNode === true && x.constructor.prototype.isNode === true || false;
}
function isArrayNode(x) {
  return x && x.isArrayNode === true && x.constructor.prototype.isNode === true || false;
}
function isAssignmentNode(x) {
  return x && x.isAssignmentNode === true && x.constructor.prototype.isNode === true || false;
}
function isBlockNode(x) {
  return x && x.isBlockNode === true && x.constructor.prototype.isNode === true || false;
}
function isConditionalNode(x) {
  return x && x.isConditionalNode === true && x.constructor.prototype.isNode === true || false;
}
function isConstantNode(x) {
  return x && x.isConstantNode === true && x.constructor.prototype.isNode === true || false;
}
function isFunctionAssignmentNode(x) {
  return x && x.isFunctionAssignmentNode === true && x.constructor.prototype.isNode === true || false;
}
function isFunctionNode(x) {
  return x && x.isFunctionNode === true && x.constructor.prototype.isNode === true || false;
}
function isIndexNode(x) {
  return x && x.isIndexNode === true && x.constructor.prototype.isNode === true || false;
}
function isNode(x) {
  return x && x.isNode === true && x.constructor.prototype.isNode === true || false;
}
function isObjectNode(x) {
  return x && x.isObjectNode === true && x.constructor.prototype.isNode === true || false;
}
function isOperatorNode(x) {
  return x && x.isOperatorNode === true && x.constructor.prototype.isNode === true || false;
}
function isParenthesisNode(x) {
  return x && x.isParenthesisNode === true && x.constructor.prototype.isNode === true || false;
}
function isRangeNode(x) {
  return x && x.isRangeNode === true && x.constructor.prototype.isNode === true || false;
}
function isRelationalNode(x) {
  return x && x.isRelationalNode === true && x.constructor.prototype.isNode === true || false;
}
function isSymbolNode(x) {
  return x && x.isSymbolNode === true && x.constructor.prototype.isNode === true || false;
}
function isChain(x) {
  return x && x.constructor.prototype.isChain === true || false;
}
function typeOf(x) {
  var t = typeof x;
  if (t === "object") {
    if (x === null)
      return "null";
    if (isBigNumber(x))
      return "BigNumber";
    if (x.constructor && x.constructor.name)
      return x.constructor.name;
    return "Object";
  }
  return t;
}
function clone$2(x) {
  var type = typeof x;
  if (type === "number" || type === "string" || type === "boolean" || x === null || x === void 0) {
    return x;
  }
  if (typeof x.clone === "function") {
    return x.clone();
  }
  if (Array.isArray(x)) {
    return x.map(function(value) {
      return clone$2(value);
    });
  }
  if (x instanceof Date)
    return new Date(x.valueOf());
  if (isBigNumber(x))
    return x;
  if (isObject(x)) {
    return mapObject(x, clone$2);
  }
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(x, ")"));
}
function mapObject(object, callback) {
  var clone2 = {};
  for (var key in object) {
    if (hasOwnProperty(object, key)) {
      clone2[key] = callback(object[key]);
    }
  }
  return clone2;
}
function extend(a, b) {
  for (var prop in b) {
    if (hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }
  return a;
}
function deepStrictEqual(a, b) {
  var prop, i, len;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (i = 0, len = a.length; i < len; i++) {
      if (!deepStrictEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof a === "function") {
    return a === b;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }
    for (prop in a) {
      if (!(prop in b) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    for (prop in b) {
      if (!(prop in a)) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}
function hasOwnProperty(object, property) {
  return object && Object.hasOwnProperty.call(object, property);
}
function pickShallow(object, properties) {
  var copy = {};
  for (var i = 0; i < properties.length; i++) {
    var key = properties[i];
    var value = object[key];
    if (value !== void 0) {
      copy[key] = value;
    }
  }
  return copy;
}
var MATRIX_OPTIONS = ["Matrix", "Array"];
var NUMBER_OPTIONS = ["number", "BigNumber", "Fraction"];
var config$1 = function config(options) {
  if (options) {
    throw new Error("The global config is readonly. \nPlease create a mathjs instance if you want to change the default configuration. \nExample:\n\n  import { create, all } from 'mathjs';\n  const mathjs = create(all);\n  mathjs.config({ number: 'BigNumber' });\n");
  }
  return Object.freeze(DEFAULT_CONFIG);
};
_extends(config$1, DEFAULT_CONFIG, {
  MATRIX_OPTIONS,
  NUMBER_OPTIONS
});
function ok() {
  return true;
}
function notOk() {
  return false;
}
function undef() {
  return void 0;
}
const NOT_TYPED_FUNCTION = "Argument is not a typed-function.";
function create() {
  function isPlainObject2(x) {
    return typeof x === "object" && x !== null && x.constructor === Object;
  }
  const _types = [{
    name: "number",
    test: function(x) {
      return typeof x === "number";
    }
  }, {
    name: "string",
    test: function(x) {
      return typeof x === "string";
    }
  }, {
    name: "boolean",
    test: function(x) {
      return typeof x === "boolean";
    }
  }, {
    name: "Function",
    test: function(x) {
      return typeof x === "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function(x) {
      return x instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function(x) {
      return x instanceof RegExp;
    }
  }, {
    name: "Object",
    test: isPlainObject2
  }, {
    name: "null",
    test: function(x) {
      return x === null;
    }
  }, {
    name: "undefined",
    test: function(x) {
      return x === void 0;
    }
  }];
  const anyType = {
    name: "any",
    test: ok,
    isAny: true
  };
  let typeMap;
  let typeList;
  let nConversions = 0;
  let typed2 = {
    createCount: 0
  };
  function findType(typeName) {
    const type = typeMap.get(typeName);
    if (type) {
      return type;
    }
    let message = 'Unknown type "' + typeName + '"';
    const name2 = typeName.toLowerCase();
    let otherName;
    for (otherName of typeList) {
      if (otherName.toLowerCase() === name2) {
        message += '. Did you mean "' + otherName + '" ?';
        break;
      }
    }
    throw new TypeError(message);
  }
  function addTypes(types) {
    let beforeSpec = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const beforeIndex = beforeSpec ? findType(beforeSpec).index : typeList.length;
    const newTypes = [];
    for (let i = 0; i < types.length; ++i) {
      if (!types[i] || typeof types[i].name !== "string" || typeof types[i].test !== "function") {
        throw new TypeError("Object with properties {name: string, test: function} expected");
      }
      const typeName = types[i].name;
      if (typeMap.has(typeName)) {
        throw new TypeError('Duplicate type name "' + typeName + '"');
      }
      newTypes.push(typeName);
      typeMap.set(typeName, {
        name: typeName,
        test: types[i].test,
        isAny: types[i].isAny,
        index: beforeIndex + i,
        conversionsTo: []
      });
    }
    const affectedTypes = typeList.slice(beforeIndex);
    typeList = typeList.slice(0, beforeIndex).concat(newTypes).concat(affectedTypes);
    for (let i = beforeIndex + newTypes.length; i < typeList.length; ++i) {
      typeMap.get(typeList[i]).index = i;
    }
  }
  function clear2() {
    typeMap = /* @__PURE__ */ new Map();
    typeList = [];
    nConversions = 0;
    addTypes([anyType], false);
  }
  clear2();
  addTypes(_types);
  function clearConversions() {
    let typeName;
    for (typeName of typeList) {
      typeMap.get(typeName).conversionsTo = [];
    }
    nConversions = 0;
  }
  function findTypeNames(value) {
    const matches = typeList.filter((name2) => {
      const type = typeMap.get(name2);
      return !type.isAny && type.test(value);
    });
    if (matches.length) {
      return matches;
    }
    return ["any"];
  }
  function isTypedFunction(entity) {
    return entity && typeof entity === "function" && "_typedFunctionData" in entity;
  }
  function findSignature(fn, signature, options) {
    if (!isTypedFunction(fn)) {
      throw new TypeError(NOT_TYPED_FUNCTION);
    }
    const exact = options && options.exact;
    const stringSignature = Array.isArray(signature) ? signature.join(",") : signature;
    const params = parseSignature(stringSignature);
    const canonicalSignature = stringifyParams(params);
    if (!exact || canonicalSignature in fn.signatures) {
      const match = fn._typedFunctionData.signatureMap.get(canonicalSignature);
      if (match) {
        return match;
      }
    }
    const nParams = params.length;
    let remainingSignatures;
    if (exact) {
      remainingSignatures = [];
      let name2;
      for (name2 in fn.signatures) {
        remainingSignatures.push(fn._typedFunctionData.signatureMap.get(name2));
      }
    } else {
      remainingSignatures = fn._typedFunctionData.signatures;
    }
    for (let i = 0; i < nParams; ++i) {
      const want = params[i];
      const filteredSignatures = [];
      let possibility;
      for (possibility of remainingSignatures) {
        const have = getParamAtIndex(possibility.params, i);
        if (!have || want.restParam && !have.restParam) {
          continue;
        }
        if (!have.hasAny) {
          const haveTypes = paramTypeSet(have);
          if (want.types.some((wtype) => !haveTypes.has(wtype.name))) {
            continue;
          }
        }
        filteredSignatures.push(possibility);
      }
      remainingSignatures = filteredSignatures;
      if (remainingSignatures.length === 0)
        break;
    }
    let candidate;
    for (candidate of remainingSignatures) {
      if (candidate.params.length <= nParams) {
        return candidate;
      }
    }
    throw new TypeError("Signature not found (signature: " + (fn.name || "unnamed") + "(" + stringifyParams(params, ", ") + "))");
  }
  function find(fn, signature, options) {
    return findSignature(fn, signature, options).implementation;
  }
  function convert(value, typeName) {
    const type = findType(typeName);
    if (type.test(value)) {
      return value;
    }
    const conversions = type.conversionsTo;
    if (conversions.length === 0) {
      throw new Error("There are no conversions to " + typeName + " defined.");
    }
    for (let i = 0; i < conversions.length; i++) {
      const fromType = findType(conversions[i].from);
      if (fromType.test(value)) {
        return conversions[i].convert(value);
      }
    }
    throw new Error("Cannot convert " + value + " to " + typeName);
  }
  function stringifyParams(params) {
    let separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return params.map((p2) => p2.name).join(separator);
  }
  function parseParam(param) {
    const restParam = param.indexOf("...") === 0;
    const types = !restParam ? param : param.length > 3 ? param.slice(3) : "any";
    const typeDefs = types.split("|").map((s) => findType(s.trim()));
    let hasAny = false;
    let paramName = restParam ? "..." : "";
    const exactTypes = typeDefs.map(function(type) {
      hasAny = type.isAny || hasAny;
      paramName += type.name + "|";
      return {
        name: type.name,
        typeIndex: type.index,
        test: type.test,
        isAny: type.isAny,
        conversion: null,
        conversionIndex: -1
      };
    });
    return {
      types: exactTypes,
      name: paramName.slice(0, -1),
      hasAny,
      hasConversion: false,
      restParam
    };
  }
  function expandParam(param) {
    const typeNames = param.types.map((t) => t.name);
    const matchingConversions = availableConversions(typeNames);
    let hasAny = param.hasAny;
    let newName = param.name;
    const convertibleTypes = matchingConversions.map(function(conversion) {
      const type = findType(conversion.from);
      hasAny = type.isAny || hasAny;
      newName += "|" + conversion.from;
      return {
        name: conversion.from,
        typeIndex: type.index,
        test: type.test,
        isAny: type.isAny,
        conversion,
        conversionIndex: conversion.index
      };
    });
    return {
      types: param.types.concat(convertibleTypes),
      name: newName,
      hasAny,
      hasConversion: convertibleTypes.length > 0,
      restParam: param.restParam
    };
  }
  function paramTypeSet(param) {
    if (!param.typeSet) {
      param.typeSet = /* @__PURE__ */ new Set();
      param.types.forEach((type) => param.typeSet.add(type.name));
    }
    return param.typeSet;
  }
  function parseSignature(rawSignature) {
    const params = [];
    if (typeof rawSignature !== "string") {
      throw new TypeError("Signatures must be strings");
    }
    const signature = rawSignature.trim();
    if (signature === "") {
      return params;
    }
    const rawParams = signature.split(",");
    for (let i = 0; i < rawParams.length; ++i) {
      const parsedParam = parseParam(rawParams[i].trim());
      if (parsedParam.restParam && i !== rawParams.length - 1) {
        throw new SyntaxError('Unexpected rest parameter "' + rawParams[i] + '": only allowed for the last parameter');
      }
      if (parsedParam.types.length === 0) {
        return null;
      }
      params.push(parsedParam);
    }
    return params;
  }
  function hasRestParam(params) {
    const param = last(params);
    return param ? param.restParam : false;
  }
  function compileTest(param) {
    if (!param || param.types.length === 0) {
      return ok;
    } else if (param.types.length === 1) {
      return findType(param.types[0].name).test;
    } else if (param.types.length === 2) {
      const test0 = findType(param.types[0].name).test;
      const test1 = findType(param.types[1].name).test;
      return function or(x) {
        return test0(x) || test1(x);
      };
    } else {
      const tests = param.types.map(function(type) {
        return findType(type.name).test;
      });
      return function or(x) {
        for (let i = 0; i < tests.length; i++) {
          if (tests[i](x)) {
            return true;
          }
        }
        return false;
      };
    }
  }
  function compileTests(params) {
    let tests, test0, test1;
    if (hasRestParam(params)) {
      tests = initial(params).map(compileTest);
      const varIndex = tests.length;
      const lastTest = compileTest(last(params));
      const testRestParam = function(args) {
        for (let i = varIndex; i < args.length; i++) {
          if (!lastTest(args[i])) {
            return false;
          }
        }
        return true;
      };
      return function testArgs(args) {
        for (let i = 0; i < tests.length; i++) {
          if (!tests[i](args[i])) {
            return false;
          }
        }
        return testRestParam(args) && args.length >= varIndex + 1;
      };
    } else {
      if (params.length === 0) {
        return function testArgs(args) {
          return args.length === 0;
        };
      } else if (params.length === 1) {
        test0 = compileTest(params[0]);
        return function testArgs(args) {
          return test0(args[0]) && args.length === 1;
        };
      } else if (params.length === 2) {
        test0 = compileTest(params[0]);
        test1 = compileTest(params[1]);
        return function testArgs(args) {
          return test0(args[0]) && test1(args[1]) && args.length === 2;
        };
      } else {
        tests = params.map(compileTest);
        return function testArgs(args) {
          for (let i = 0; i < tests.length; i++) {
            if (!tests[i](args[i])) {
              return false;
            }
          }
          return args.length === tests.length;
        };
      }
    }
  }
  function getParamAtIndex(params, index) {
    return index < params.length ? params[index] : hasRestParam(params) ? last(params) : null;
  }
  function getTypeSetAtIndex(params, index) {
    const param = getParamAtIndex(params, index);
    if (!param) {
      return /* @__PURE__ */ new Set();
    }
    return paramTypeSet(param);
  }
  function isExactType(type) {
    return type.conversion === null || type.conversion === void 0;
  }
  function mergeExpectedParams(signatures, index) {
    const typeSet = /* @__PURE__ */ new Set();
    signatures.forEach((signature) => {
      const paramSet = getTypeSetAtIndex(signature.params, index);
      let name2;
      for (name2 of paramSet) {
        typeSet.add(name2);
      }
    });
    return typeSet.has("any") ? ["any"] : Array.from(typeSet);
  }
  function createError(name2, args, signatures) {
    let err, expected;
    const _name = name2 || "unnamed";
    let matchingSignatures = signatures;
    let index;
    for (index = 0; index < args.length; index++) {
      const nextMatchingDefs = [];
      matchingSignatures.forEach((signature) => {
        const param = getParamAtIndex(signature.params, index);
        const test = compileTest(param);
        if ((index < signature.params.length || hasRestParam(signature.params)) && test(args[index])) {
          nextMatchingDefs.push(signature);
        }
      });
      if (nextMatchingDefs.length === 0) {
        expected = mergeExpectedParams(matchingSignatures, index);
        if (expected.length > 0) {
          const actualTypes = findTypeNames(args[index]);
          err = new TypeError("Unexpected type of argument in function " + _name + " (expected: " + expected.join(" or ") + ", actual: " + actualTypes.join(" | ") + ", index: " + index + ")");
          err.data = {
            category: "wrongType",
            fn: _name,
            index,
            actual: actualTypes,
            expected
          };
          return err;
        }
      } else {
        matchingSignatures = nextMatchingDefs;
      }
    }
    const lengths = matchingSignatures.map(function(signature) {
      return hasRestParam(signature.params) ? Infinity : signature.params.length;
    });
    if (args.length < Math.min.apply(null, lengths)) {
      expected = mergeExpectedParams(matchingSignatures, index);
      err = new TypeError("Too few arguments in function " + _name + " (expected: " + expected.join(" or ") + ", index: " + args.length + ")");
      err.data = {
        category: "tooFewArgs",
        fn: _name,
        index: args.length,
        expected
      };
      return err;
    }
    const maxLength = Math.max.apply(null, lengths);
    if (args.length > maxLength) {
      err = new TypeError("Too many arguments in function " + _name + " (expected: " + maxLength + ", actual: " + args.length + ")");
      err.data = {
        category: "tooManyArgs",
        fn: _name,
        index: args.length,
        expectedLength: maxLength
      };
      return err;
    }
    const argTypes = [];
    for (let i = 0; i < args.length; ++i) {
      argTypes.push(findTypeNames(args[i]).join("|"));
    }
    err = new TypeError('Arguments of type "' + argTypes.join(", ") + '" do not match any of the defined signatures of function ' + _name + ".");
    err.data = {
      category: "mismatch",
      actual: argTypes
    };
    return err;
  }
  function getLowestTypeIndex(param) {
    let min2 = typeList.length + 1;
    for (let i = 0; i < param.types.length; i++) {
      if (isExactType(param.types[i])) {
        min2 = Math.min(min2, param.types[i].typeIndex);
      }
    }
    return min2;
  }
  function getLowestConversionIndex(param) {
    let min2 = nConversions + 1;
    for (let i = 0; i < param.types.length; i++) {
      if (!isExactType(param.types[i])) {
        min2 = Math.min(min2, param.types[i].conversionIndex);
      }
    }
    return min2;
  }
  function compareParams(param1, param2) {
    if (param1.hasAny) {
      if (!param2.hasAny) {
        return 1;
      }
    } else if (param2.hasAny) {
      return -1;
    }
    if (param1.restParam) {
      if (!param2.restParam) {
        return 1;
      }
    } else if (param2.restParam) {
      return -1;
    }
    if (param1.hasConversion) {
      if (!param2.hasConversion) {
        return 1;
      }
    } else if (param2.hasConversion) {
      return -1;
    }
    const typeDiff = getLowestTypeIndex(param1) - getLowestTypeIndex(param2);
    if (typeDiff < 0) {
      return -1;
    }
    if (typeDiff > 0) {
      return 1;
    }
    const convDiff = getLowestConversionIndex(param1) - getLowestConversionIndex(param2);
    if (convDiff < 0) {
      return -1;
    }
    if (convDiff > 0) {
      return 1;
    }
    return 0;
  }
  function compareSignatures(signature1, signature2) {
    const pars1 = signature1.params;
    const pars2 = signature2.params;
    const last1 = last(pars1);
    const last2 = last(pars2);
    const hasRest1 = hasRestParam(pars1);
    const hasRest2 = hasRestParam(pars2);
    if (hasRest1 && last1.hasAny) {
      if (!hasRest2 || !last2.hasAny) {
        return 1;
      }
    } else if (hasRest2 && last2.hasAny) {
      return -1;
    }
    let any1 = 0;
    let conv1 = 0;
    let par;
    for (par of pars1) {
      if (par.hasAny)
        ++any1;
      if (par.hasConversion)
        ++conv1;
    }
    let any2 = 0;
    let conv2 = 0;
    for (par of pars2) {
      if (par.hasAny)
        ++any2;
      if (par.hasConversion)
        ++conv2;
    }
    if (any1 !== any2) {
      return any1 - any2;
    }
    if (hasRest1 && last1.hasConversion) {
      if (!hasRest2 || !last2.hasConversion) {
        return 1;
      }
    } else if (hasRest2 && last2.hasConversion) {
      return -1;
    }
    if (conv1 !== conv2) {
      return conv1 - conv2;
    }
    if (hasRest1) {
      if (!hasRest2) {
        return 1;
      }
    } else if (hasRest2) {
      return -1;
    }
    const lengthCriterion = (pars1.length - pars2.length) * (hasRest1 ? -1 : 1);
    if (lengthCriterion !== 0) {
      return lengthCriterion;
    }
    const comparisons = [];
    let tc = 0;
    for (let i = 0; i < pars1.length; ++i) {
      const thisComparison = compareParams(pars1[i], pars2[i]);
      comparisons.push(thisComparison);
      tc += thisComparison;
    }
    if (tc !== 0) {
      return tc;
    }
    let c;
    for (c of comparisons) {
      if (c !== 0) {
        return c;
      }
    }
    return 0;
  }
  function availableConversions(typeNames) {
    if (typeNames.length === 0) {
      return [];
    }
    const types = typeNames.map(findType);
    if (typeNames.length > 1) {
      types.sort((t1, t2) => t1.index - t2.index);
    }
    let matches = types[0].conversionsTo;
    if (typeNames.length === 1) {
      return matches;
    }
    matches = matches.concat([]);
    const knownTypes = new Set(typeNames);
    for (let i = 1; i < types.length; ++i) {
      let newMatch;
      for (newMatch of types[i].conversionsTo) {
        if (!knownTypes.has(newMatch.from)) {
          matches.push(newMatch);
          knownTypes.add(newMatch.from);
        }
      }
    }
    return matches;
  }
  function compileArgsPreprocessing(params, fn) {
    let fnConvert = fn;
    if (params.some((p2) => p2.hasConversion)) {
      const restParam = hasRestParam(params);
      const compiledConversions = params.map(compileArgConversion);
      fnConvert = function convertArgs() {
        const args = [];
        const last2 = restParam ? arguments.length - 1 : arguments.length;
        for (let i = 0; i < last2; i++) {
          args[i] = compiledConversions[i](arguments[i]);
        }
        if (restParam) {
          args[last2] = arguments[last2].map(compiledConversions[last2]);
        }
        return fn.apply(this, args);
      };
    }
    let fnPreprocess = fnConvert;
    if (hasRestParam(params)) {
      const offset = params.length - 1;
      fnPreprocess = function preprocessRestParams() {
        return fnConvert.apply(this, slice(arguments, 0, offset).concat([slice(arguments, offset)]));
      };
    }
    return fnPreprocess;
  }
  function compileArgConversion(param) {
    let test0, test1, conversion0, conversion1;
    const tests = [];
    const conversions = [];
    param.types.forEach(function(type) {
      if (type.conversion) {
        tests.push(findType(type.conversion.from).test);
        conversions.push(type.conversion.convert);
      }
    });
    switch (conversions.length) {
      case 0:
        return function convertArg(arg) {
          return arg;
        };
      case 1:
        test0 = tests[0];
        conversion0 = conversions[0];
        return function convertArg(arg) {
          if (test0(arg)) {
            return conversion0(arg);
          }
          return arg;
        };
      case 2:
        test0 = tests[0];
        test1 = tests[1];
        conversion0 = conversions[0];
        conversion1 = conversions[1];
        return function convertArg(arg) {
          if (test0(arg)) {
            return conversion0(arg);
          }
          if (test1(arg)) {
            return conversion1(arg);
          }
          return arg;
        };
      default:
        return function convertArg(arg) {
          for (let i = 0; i < conversions.length; i++) {
            if (tests[i](arg)) {
              return conversions[i](arg);
            }
          }
          return arg;
        };
    }
  }
  function splitParams(params) {
    function _splitParams(params2, index, paramsSoFar) {
      if (index < params2.length) {
        const param = params2[index];
        let resultingParams = [];
        if (param.restParam) {
          const exactTypes = param.types.filter(isExactType);
          if (exactTypes.length < param.types.length) {
            resultingParams.push({
              types: exactTypes,
              name: "..." + exactTypes.map((t) => t.name).join("|"),
              hasAny: exactTypes.some((t) => t.isAny),
              hasConversion: false,
              restParam: true
            });
          }
          resultingParams.push(param);
        } else {
          resultingParams = param.types.map(function(type) {
            return {
              types: [type],
              name: type.name,
              hasAny: type.isAny,
              hasConversion: type.conversion,
              restParam: false
            };
          });
        }
        return flatMap(resultingParams, function(nextParam) {
          return _splitParams(params2, index + 1, paramsSoFar.concat([nextParam]));
        });
      } else {
        return [paramsSoFar];
      }
    }
    return _splitParams(params, 0, []);
  }
  function conflicting(params1, params2) {
    const ii = Math.max(params1.length, params2.length);
    for (let i = 0; i < ii; i++) {
      const typeSet1 = getTypeSetAtIndex(params1, i);
      const typeSet2 = getTypeSetAtIndex(params2, i);
      let overlap = false;
      let name2;
      for (name2 of typeSet2) {
        if (typeSet1.has(name2)) {
          overlap = true;
          break;
        }
      }
      if (!overlap) {
        return false;
      }
    }
    const len1 = params1.length;
    const len2 = params2.length;
    const restParam1 = hasRestParam(params1);
    const restParam2 = hasRestParam(params2);
    return restParam1 ? restParam2 ? len1 === len2 : len2 >= len1 : restParam2 ? len1 >= len2 : len1 === len2;
  }
  function clearResolutions(functionList) {
    return functionList.map((fn) => {
      if (isReferToSelf(fn)) {
        return referToSelf(fn.referToSelf.callback);
      }
      if (isReferTo(fn)) {
        return makeReferTo(fn.referTo.references, fn.referTo.callback);
      }
      return fn;
    });
  }
  function collectResolutions(references, functionList, signatureMap) {
    const resolvedReferences = [];
    let reference;
    for (reference of references) {
      let resolution = signatureMap[reference];
      if (typeof resolution !== "number") {
        throw new TypeError('No definition for referenced signature "' + reference + '"');
      }
      resolution = functionList[resolution];
      if (typeof resolution !== "function") {
        return false;
      }
      resolvedReferences.push(resolution);
    }
    return resolvedReferences;
  }
  function resolveReferences(functionList, signatureMap, self2) {
    const resolvedFunctions = clearResolutions(functionList);
    const isResolved = new Array(resolvedFunctions.length).fill(false);
    let leftUnresolved = true;
    while (leftUnresolved) {
      leftUnresolved = false;
      let nothingResolved = true;
      for (let i = 0; i < resolvedFunctions.length; ++i) {
        if (isResolved[i])
          continue;
        const fn = resolvedFunctions[i];
        if (isReferToSelf(fn)) {
          resolvedFunctions[i] = fn.referToSelf.callback(self2);
          resolvedFunctions[i].referToSelf = fn.referToSelf;
          isResolved[i] = true;
          nothingResolved = false;
        } else if (isReferTo(fn)) {
          const resolvedReferences = collectResolutions(fn.referTo.references, resolvedFunctions, signatureMap);
          if (resolvedReferences) {
            resolvedFunctions[i] = fn.referTo.callback.apply(this, resolvedReferences);
            resolvedFunctions[i].referTo = fn.referTo;
            isResolved[i] = true;
            nothingResolved = false;
          } else {
            leftUnresolved = true;
          }
        }
      }
      if (nothingResolved && leftUnresolved) {
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
      }
    }
    return resolvedFunctions;
  }
  function validateDeprecatedThis(signaturesMap) {
    const deprecatedThisRegex = /\bthis(\(|\.signatures\b)/;
    Object.keys(signaturesMap).forEach((signature) => {
      const fn = signaturesMap[signature];
      if (deprecatedThisRegex.test(fn.toString())) {
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
      }
    });
  }
  function createTypedFunction(name2, rawSignaturesMap) {
    typed2.createCount++;
    if (Object.keys(rawSignaturesMap).length === 0) {
      throw new SyntaxError("No signatures provided");
    }
    if (typed2.warnAgainstDeprecatedThis) {
      validateDeprecatedThis(rawSignaturesMap);
    }
    const parsedParams = [];
    const originalFunctions = [];
    const signaturesMap = {};
    const preliminarySignatures = [];
    let signature;
    for (signature in rawSignaturesMap) {
      if (!Object.prototype.hasOwnProperty.call(rawSignaturesMap, signature)) {
        continue;
      }
      const params = parseSignature(signature);
      if (!params)
        continue;
      parsedParams.forEach(function(pp) {
        if (conflicting(pp, params)) {
          throw new TypeError('Conflicting signatures "' + stringifyParams(pp) + '" and "' + stringifyParams(params) + '".');
        }
      });
      parsedParams.push(params);
      const functionIndex = originalFunctions.length;
      originalFunctions.push(rawSignaturesMap[signature]);
      const conversionParams = params.map(expandParam);
      let sp;
      for (sp of splitParams(conversionParams)) {
        const spName = stringifyParams(sp);
        preliminarySignatures.push({
          params: sp,
          name: spName,
          fn: functionIndex
        });
        if (sp.every((p2) => !p2.hasConversion)) {
          signaturesMap[spName] = functionIndex;
        }
      }
    }
    preliminarySignatures.sort(compareSignatures);
    const resolvedFunctions = resolveReferences(originalFunctions, signaturesMap, theTypedFn);
    let s;
    for (s in signaturesMap) {
      if (Object.prototype.hasOwnProperty.call(signaturesMap, s)) {
        signaturesMap[s] = resolvedFunctions[signaturesMap[s]];
      }
    }
    const signatures = [];
    const internalSignatureMap = /* @__PURE__ */ new Map();
    for (s of preliminarySignatures) {
      if (!internalSignatureMap.has(s.name)) {
        s.fn = resolvedFunctions[s.fn];
        signatures.push(s);
        internalSignatureMap.set(s.name, s);
      }
    }
    const ok0 = signatures[0] && signatures[0].params.length <= 2 && !hasRestParam(signatures[0].params);
    const ok1 = signatures[1] && signatures[1].params.length <= 2 && !hasRestParam(signatures[1].params);
    const ok2 = signatures[2] && signatures[2].params.length <= 2 && !hasRestParam(signatures[2].params);
    const ok3 = signatures[3] && signatures[3].params.length <= 2 && !hasRestParam(signatures[3].params);
    const ok4 = signatures[4] && signatures[4].params.length <= 2 && !hasRestParam(signatures[4].params);
    const ok5 = signatures[5] && signatures[5].params.length <= 2 && !hasRestParam(signatures[5].params);
    const allOk = ok0 && ok1 && ok2 && ok3 && ok4 && ok5;
    for (let i = 0; i < signatures.length; ++i) {
      signatures[i].test = compileTests(signatures[i].params);
    }
    const test00 = ok0 ? compileTest(signatures[0].params[0]) : notOk;
    const test10 = ok1 ? compileTest(signatures[1].params[0]) : notOk;
    const test20 = ok2 ? compileTest(signatures[2].params[0]) : notOk;
    const test30 = ok3 ? compileTest(signatures[3].params[0]) : notOk;
    const test40 = ok4 ? compileTest(signatures[4].params[0]) : notOk;
    const test50 = ok5 ? compileTest(signatures[5].params[0]) : notOk;
    const test01 = ok0 ? compileTest(signatures[0].params[1]) : notOk;
    const test11 = ok1 ? compileTest(signatures[1].params[1]) : notOk;
    const test21 = ok2 ? compileTest(signatures[2].params[1]) : notOk;
    const test31 = ok3 ? compileTest(signatures[3].params[1]) : notOk;
    const test41 = ok4 ? compileTest(signatures[4].params[1]) : notOk;
    const test51 = ok5 ? compileTest(signatures[5].params[1]) : notOk;
    for (let i = 0; i < signatures.length; ++i) {
      signatures[i].implementation = compileArgsPreprocessing(signatures[i].params, signatures[i].fn);
    }
    const fn0 = ok0 ? signatures[0].implementation : undef;
    const fn1 = ok1 ? signatures[1].implementation : undef;
    const fn2 = ok2 ? signatures[2].implementation : undef;
    const fn3 = ok3 ? signatures[3].implementation : undef;
    const fn4 = ok4 ? signatures[4].implementation : undef;
    const fn5 = ok5 ? signatures[5].implementation : undef;
    const len0 = ok0 ? signatures[0].params.length : -1;
    const len1 = ok1 ? signatures[1].params.length : -1;
    const len2 = ok2 ? signatures[2].params.length : -1;
    const len3 = ok3 ? signatures[3].params.length : -1;
    const len4 = ok4 ? signatures[4].params.length : -1;
    const len5 = ok5 ? signatures[5].params.length : -1;
    const iStart = allOk ? 6 : 0;
    const iEnd = signatures.length;
    const tests = signatures.map((s2) => s2.test);
    const fns = signatures.map((s2) => s2.implementation);
    const generic = function generic2() {
      for (let i = iStart; i < iEnd; i++) {
        if (tests[i](arguments)) {
          return fns[i].apply(this, arguments);
        }
      }
      return typed2.onMismatch(name2, arguments, signatures);
    };
    function theTypedFn(arg0, arg1) {
      if (arguments.length === len0 && test00(arg0) && test01(arg1)) {
        return fn0.apply(this, arguments);
      }
      if (arguments.length === len1 && test10(arg0) && test11(arg1)) {
        return fn1.apply(this, arguments);
      }
      if (arguments.length === len2 && test20(arg0) && test21(arg1)) {
        return fn2.apply(this, arguments);
      }
      if (arguments.length === len3 && test30(arg0) && test31(arg1)) {
        return fn3.apply(this, arguments);
      }
      if (arguments.length === len4 && test40(arg0) && test41(arg1)) {
        return fn4.apply(this, arguments);
      }
      if (arguments.length === len5 && test50(arg0) && test51(arg1)) {
        return fn5.apply(this, arguments);
      }
      return generic.apply(this, arguments);
    }
    try {
      Object.defineProperty(theTypedFn, "name", {
        value: name2
      });
    } catch (err) {
    }
    theTypedFn.signatures = signaturesMap;
    theTypedFn._typedFunctionData = {
      signatures,
      signatureMap: internalSignatureMap
    };
    return theTypedFn;
  }
  function _onMismatch(name2, args, signatures) {
    throw createError(name2, args, signatures);
  }
  function initial(arr) {
    return slice(arr, 0, arr.length - 1);
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function slice(arr, start, end) {
    return Array.prototype.slice.call(arr, start, end);
  }
  function findInArray(arr, test) {
    for (let i = 0; i < arr.length; i++) {
      if (test(arr[i])) {
        return arr[i];
      }
    }
    return void 0;
  }
  function flatMap(arr, callback) {
    return Array.prototype.concat.apply([], arr.map(callback));
  }
  function referTo() {
    const references = initial(arguments).map((s) => stringifyParams(parseSignature(s)));
    const callback = last(arguments);
    if (typeof callback !== "function") {
      throw new TypeError("Callback function expected as last argument");
    }
    return makeReferTo(references, callback);
  }
  function makeReferTo(references, callback) {
    return {
      referTo: {
        references,
        callback
      }
    };
  }
  function referToSelf(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback function expected as first argument");
    }
    return {
      referToSelf: {
        callback
      }
    };
  }
  function isReferTo(objectOrFn) {
    return objectOrFn && typeof objectOrFn.referTo === "object" && Array.isArray(objectOrFn.referTo.references) && typeof objectOrFn.referTo.callback === "function";
  }
  function isReferToSelf(objectOrFn) {
    return objectOrFn && typeof objectOrFn.referToSelf === "object" && typeof objectOrFn.referToSelf.callback === "function";
  }
  function checkName(nameSoFar, newName) {
    if (!nameSoFar) {
      return newName;
    }
    if (newName && newName !== nameSoFar) {
      const err = new Error("Function names do not match (expected: " + nameSoFar + ", actual: " + newName + ")");
      err.data = {
        actual: newName,
        expected: nameSoFar
      };
      throw err;
    }
    return nameSoFar;
  }
  function getObjectName(obj) {
    let name2;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && (isTypedFunction(obj[key]) || typeof obj[key].signature === "string")) {
        name2 = checkName(name2, obj[key].name);
      }
    }
    return name2;
  }
  function mergeSignatures(dest, source) {
    let key;
    for (key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (key in dest) {
          if (source[key] !== dest[key]) {
            const err = new Error('Signature "' + key + '" is defined twice');
            err.data = {
              signature: key,
              sourceFunction: source[key],
              destFunction: dest[key]
            };
            throw err;
          }
        }
        dest[key] = source[key];
      }
    }
  }
  const saveTyped = typed2;
  typed2 = function(maybeName) {
    const named = typeof maybeName === "string";
    const start = named ? 1 : 0;
    let name2 = named ? maybeName : "";
    const allSignatures = {};
    for (let i = start; i < arguments.length; ++i) {
      const item = arguments[i];
      let theseSignatures = {};
      let thisName;
      if (typeof item === "function") {
        thisName = item.name;
        if (typeof item.signature === "string") {
          theseSignatures[item.signature] = item;
        } else if (isTypedFunction(item)) {
          theseSignatures = item.signatures;
        }
      } else if (isPlainObject2(item)) {
        theseSignatures = item;
        if (!named) {
          thisName = getObjectName(item);
        }
      }
      if (Object.keys(theseSignatures).length === 0) {
        const err = new TypeError("Argument to 'typed' at index " + i + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        err.data = {
          index: i,
          argument: item
        };
        throw err;
      }
      if (!named) {
        name2 = checkName(name2, thisName);
      }
      mergeSignatures(allSignatures, theseSignatures);
    }
    return createTypedFunction(name2 || "", allSignatures);
  };
  typed2.create = create;
  typed2.createCount = saveTyped.createCount;
  typed2.onMismatch = _onMismatch;
  typed2.throwMismatchError = _onMismatch;
  typed2.createError = createError;
  typed2.clear = clear2;
  typed2.clearConversions = clearConversions;
  typed2.addTypes = addTypes;
  typed2._findType = findType;
  typed2.referTo = referTo;
  typed2.referToSelf = referToSelf;
  typed2.convert = convert;
  typed2.findSignature = findSignature;
  typed2.find = find;
  typed2.isTypedFunction = isTypedFunction;
  typed2.warnAgainstDeprecatedThis = true;
  typed2.addType = function(type, beforeObjectTest) {
    let before = "any";
    if (beforeObjectTest !== false && typeMap.has("Object")) {
      before = "Object";
    }
    typed2.addTypes([type], before);
  };
  function _validateConversion(conversion) {
    if (!conversion || typeof conversion.from !== "string" || typeof conversion.to !== "string" || typeof conversion.convert !== "function") {
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    }
    if (conversion.to === conversion.from) {
      throw new SyntaxError('Illegal to define conversion from "' + conversion.from + '" to itself.');
    }
  }
  typed2.addConversion = function(conversion) {
    _validateConversion(conversion);
    const to = findType(conversion.to);
    if (to.conversionsTo.every(function(other) {
      return other.from !== conversion.from;
    })) {
      to.conversionsTo.push({
        from: conversion.from,
        convert: conversion.convert,
        index: nConversions++
      });
    } else {
      throw new Error('There is already a conversion from "' + conversion.from + '" to "' + to.name + '"');
    }
  };
  typed2.addConversions = function(conversions) {
    conversions.forEach(typed2.addConversion);
  };
  typed2.removeConversion = function(conversion) {
    _validateConversion(conversion);
    const to = findType(conversion.to);
    const existingConversion = findInArray(to.conversionsTo, (c) => c.from === conversion.from);
    if (!existingConversion) {
      throw new Error("Attempt to remove nonexistent conversion from " + conversion.from + " to " + conversion.to);
    }
    if (existingConversion.convert !== conversion.convert) {
      throw new Error("Conversion to remove does not match existing conversion");
    }
    const index = to.conversionsTo.indexOf(existingConversion);
    to.conversionsTo.splice(index, 1);
  };
  typed2.resolve = function(tf, argList) {
    if (!isTypedFunction(tf)) {
      throw new TypeError(NOT_TYPED_FUNCTION);
    }
    const sigs = tf._typedFunctionData.signatures;
    for (let i = 0; i < sigs.length; ++i) {
      if (sigs[i].test(argList)) {
        return sigs[i];
      }
    }
    return null;
  };
  return typed2;
}
const typedFunction = create();
function isInteger$1(value) {
  if (typeof value === "boolean") {
    return true;
  }
  return isFinite(value) ? value === Math.round(value) : false;
}
function formatNumberToBase(n3, base, size2) {
  var prefixes = {
    2: "0b",
    8: "0o",
    16: "0x"
  };
  var prefix = prefixes[base];
  var suffix = "";
  if (size2) {
    if (size2 < 1) {
      throw new Error("size must be in greater than 0");
    }
    if (!isInteger$1(size2)) {
      throw new Error("size must be an integer");
    }
    if (n3 > 2 ** (size2 - 1) - 1 || n3 < -(2 ** (size2 - 1))) {
      throw new Error("Value must be in range [-2^".concat(size2 - 1, ", 2^").concat(size2 - 1, "-1]"));
    }
    if (!isInteger$1(n3)) {
      throw new Error("Value must be an integer");
    }
    if (n3 < 0) {
      n3 = n3 + 2 ** size2;
    }
    suffix = "i".concat(size2);
  }
  var sign2 = "";
  if (n3 < 0) {
    n3 = -n3;
    sign2 = "-";
  }
  return "".concat(sign2).concat(prefix).concat(n3.toString(base)).concat(suffix);
}
function format$2(value, options) {
  if (typeof options === "function") {
    return options(value);
  }
  if (value === Infinity) {
    return "Infinity";
  } else if (value === -Infinity) {
    return "-Infinity";
  } else if (isNaN(value)) {
    return "NaN";
  }
  var notation = "auto";
  var precision;
  var wordSize;
  if (options) {
    if (options.notation) {
      notation = options.notation;
    }
    if (isNumber(options)) {
      precision = options;
    } else if (isNumber(options.precision)) {
      precision = options.precision;
    }
    if (options.wordSize) {
      wordSize = options.wordSize;
      if (typeof wordSize !== "number") {
        throw new Error('Option "wordSize" must be a number');
      }
    }
  }
  switch (notation) {
    case "fixed":
      return toFixed$1(value, precision);
    case "exponential":
      return toExponential$1(value, precision);
    case "engineering":
      return toEngineering$1(value, precision);
    case "bin":
      return formatNumberToBase(value, 2, wordSize);
    case "oct":
      return formatNumberToBase(value, 8, wordSize);
    case "hex":
      return formatNumberToBase(value, 16, wordSize);
    case "auto":
      return toPrecision(value, precision, options && options).replace(/((\.\d*?)(0+))($|e)/, function() {
        var digits2 = arguments[2];
        var e = arguments[4];
        return digits2 !== "." ? digits2 + e : e;
      });
    default:
      throw new Error('Unknown notation "' + notation + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function splitNumber(value) {
  var match = String(value).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!match) {
    throw new SyntaxError("Invalid number " + value);
  }
  var sign2 = match[1];
  var digits2 = match[2];
  var exponent = parseFloat(match[4] || "0");
  var dot2 = digits2.indexOf(".");
  exponent += dot2 !== -1 ? dot2 - 1 : digits2.length - 1;
  var coefficients = digits2.replace(".", "").replace(/^0*/, function(zeros2) {
    exponent -= zeros2.length;
    return "";
  }).replace(/0*$/, "").split("").map(function(d) {
    return parseInt(d);
  });
  if (coefficients.length === 0) {
    coefficients.push(0);
    exponent++;
  }
  return {
    sign: sign2,
    coefficients,
    exponent
  };
}
function toEngineering$1(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var split = splitNumber(value);
  var rounded = roundDigits(split, precision);
  var e = rounded.exponent;
  var c = rounded.coefficients;
  var newExp = e % 3 === 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3;
  if (isNumber(precision)) {
    while (precision > c.length || e - newExp + 1 > c.length) {
      c.push(0);
    }
  } else {
    var missingZeros = Math.abs(e - newExp) - (c.length - 1);
    for (var i = 0; i < missingZeros; i++) {
      c.push(0);
    }
  }
  var expDiff = Math.abs(e - newExp);
  var decimalIdx = 1;
  while (expDiff > 0) {
    decimalIdx++;
    expDiff--;
  }
  var decimals = c.slice(decimalIdx).join("");
  var decimalVal = isNumber(precision) && decimals.length || decimals.match(/[1-9]/) ? "." + decimals : "";
  var str = c.slice(0, decimalIdx).join("") + decimalVal + "e" + (e >= 0 ? "+" : "") + newExp.toString();
  return rounded.sign + str;
}
function toFixed$1(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var splitValue = splitNumber(value);
  var rounded = typeof precision === "number" ? roundDigits(splitValue, splitValue.exponent + 1 + precision) : splitValue;
  var c = rounded.coefficients;
  var p2 = rounded.exponent + 1;
  var pp = p2 + (precision || 0);
  if (c.length < pp) {
    c = c.concat(zeros(pp - c.length));
  }
  if (p2 < 0) {
    c = zeros(-p2 + 1).concat(c);
    p2 = 1;
  }
  if (p2 < c.length) {
    c.splice(p2, 0, p2 === 0 ? "0." : ".");
  }
  return rounded.sign + c.join("");
}
function toExponential$1(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var split = splitNumber(value);
  var rounded = precision ? roundDigits(split, precision) : split;
  var c = rounded.coefficients;
  var e = rounded.exponent;
  if (c.length < precision) {
    c = c.concat(zeros(precision - c.length));
  }
  var first = c.shift();
  return rounded.sign + first + (c.length > 0 ? "." + c.join("") : "") + "e" + (e >= 0 ? "+" : "") + e;
}
function toPrecision(value, precision, options) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var lowerExp = options && options.lowerExp !== void 0 ? options.lowerExp : -3;
  var upperExp = options && options.upperExp !== void 0 ? options.upperExp : 5;
  var split = splitNumber(value);
  var rounded = precision ? roundDigits(split, precision) : split;
  if (rounded.exponent < lowerExp || rounded.exponent >= upperExp) {
    return toExponential$1(value, precision);
  } else {
    var c = rounded.coefficients;
    var e = rounded.exponent;
    if (c.length < precision) {
      c = c.concat(zeros(precision - c.length));
    }
    c = c.concat(zeros(e - c.length + 1 + (c.length < precision ? precision - c.length : 0)));
    c = zeros(-e).concat(c);
    var dot2 = e > 0 ? e : 0;
    if (dot2 < c.length - 1) {
      c.splice(dot2 + 1, 0, ".");
    }
    return rounded.sign + c.join("");
  }
}
function roundDigits(split, precision) {
  var rounded = {
    sign: split.sign,
    coefficients: split.coefficients,
    exponent: split.exponent
  };
  var c = rounded.coefficients;
  while (precision <= 0) {
    c.unshift(0);
    rounded.exponent++;
    precision++;
  }
  if (c.length > precision) {
    var removed = c.splice(precision, c.length - precision);
    if (removed[0] >= 5) {
      var i = precision - 1;
      c[i]++;
      while (c[i] === 10) {
        c.pop();
        if (i === 0) {
          c.unshift(0);
          rounded.exponent++;
          i++;
        }
        i--;
        c[i]++;
      }
    }
  }
  return rounded;
}
function zeros(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(0);
  }
  return arr;
}
function digits(value) {
  return value.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
var DBL_EPSILON = Number.EPSILON || 2220446049250313e-31;
function nearlyEqual$1(x, y, epsilon) {
  if (epsilon === null || epsilon === void 0) {
    return x === y;
  }
  if (x === y) {
    return true;
  }
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  if (isFinite(x) && isFinite(y)) {
    var diff = Math.abs(x - y);
    if (diff <= DBL_EPSILON) {
      return true;
    } else {
      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon;
    }
  }
  return false;
}
function formatBigNumberToBase(n3, base, size2) {
  var BigNumberCtor = n3.constructor;
  var big2 = new BigNumberCtor(2);
  var suffix = "";
  if (size2) {
    if (size2 < 1) {
      throw new Error("size must be in greater than 0");
    }
    if (!isInteger$1(size2)) {
      throw new Error("size must be an integer");
    }
    if (n3.greaterThan(big2.pow(size2 - 1).sub(1)) || n3.lessThan(big2.pow(size2 - 1).mul(-1))) {
      throw new Error("Value must be in range [-2^".concat(size2 - 1, ", 2^").concat(size2 - 1, "-1]"));
    }
    if (!n3.isInteger()) {
      throw new Error("Value must be an integer");
    }
    if (n3.lessThan(0)) {
      n3 = n3.add(big2.pow(size2));
    }
    suffix = "i".concat(size2);
  }
  switch (base) {
    case 2:
      return "".concat(n3.toBinary()).concat(suffix);
    case 8:
      return "".concat(n3.toOctal()).concat(suffix);
    case 16:
      return "".concat(n3.toHexadecimal()).concat(suffix);
    default:
      throw new Error("Base ".concat(base, " not supported "));
  }
}
function format$1(value, options) {
  if (typeof options === "function") {
    return options(value);
  }
  if (!value.isFinite()) {
    return value.isNaN() ? "NaN" : value.gt(0) ? "Infinity" : "-Infinity";
  }
  var notation = "auto";
  var precision;
  var wordSize;
  if (options !== void 0) {
    if (options.notation) {
      notation = options.notation;
    }
    if (typeof options === "number") {
      precision = options;
    } else if (options.precision !== void 0) {
      precision = options.precision;
    }
    if (options.wordSize) {
      wordSize = options.wordSize;
      if (typeof wordSize !== "number") {
        throw new Error('Option "wordSize" must be a number');
      }
    }
  }
  switch (notation) {
    case "fixed":
      return toFixed(value, precision);
    case "exponential":
      return toExponential(value, precision);
    case "engineering":
      return toEngineering(value, precision);
    case "bin":
      return formatBigNumberToBase(value, 2, wordSize);
    case "oct":
      return formatBigNumberToBase(value, 8, wordSize);
    case "hex":
      return formatBigNumberToBase(value, 16, wordSize);
    case "auto": {
      var lowerExp = options && options.lowerExp !== void 0 ? options.lowerExp : -3;
      var upperExp = options && options.upperExp !== void 0 ? options.upperExp : 5;
      if (value.isZero())
        return "0";
      var str;
      var rounded = value.toSignificantDigits(precision);
      var exp2 = rounded.e;
      if (exp2 >= lowerExp && exp2 < upperExp) {
        str = rounded.toFixed();
      } else {
        str = toExponential(value, precision);
      }
      return str.replace(/((\.\d*?)(0+))($|e)/, function() {
        var digits2 = arguments[2];
        var e = arguments[4];
        return digits2 !== "." ? digits2 + e : e;
      });
    }
    default:
      throw new Error('Unknown notation "' + notation + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function toEngineering(value, precision) {
  var e = value.e;
  var newExp = e % 3 === 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3;
  var valueWithoutExp = value.mul(Math.pow(10, -newExp));
  var valueStr = valueWithoutExp.toPrecision(precision);
  if (valueStr.indexOf("e") !== -1) {
    var BigNumber2 = value.constructor;
    valueStr = new BigNumber2(valueStr).toFixed();
  }
  return valueStr + "e" + (e >= 0 ? "+" : "") + newExp.toString();
}
function toExponential(value, precision) {
  if (precision !== void 0) {
    return value.toExponential(precision - 1);
  } else {
    return value.toExponential();
  }
}
function toFixed(value, precision) {
  return value.toFixed(precision);
}
function format(value, options) {
  var result = _format(value, options);
  if (options && typeof options === "object" && "truncate" in options && result.length > options.truncate) {
    return result.substring(0, options.truncate - 3) + "...";
  }
  return result;
}
function _format(value, options) {
  if (typeof value === "number") {
    return format$2(value, options);
  }
  if (isBigNumber(value)) {
    return format$1(value, options);
  }
  if (looksLikeFraction(value)) {
    if (!options || options.fraction !== "decimal") {
      return value.s * value.n + "/" + value.d;
    } else {
      return value.toString();
    }
  }
  if (Array.isArray(value)) {
    return formatArray(value, options);
  }
  if (isString(value)) {
    return stringify(value);
  }
  if (typeof value === "function") {
    return value.syntax ? String(value.syntax) : "function";
  }
  if (value && typeof value === "object") {
    if (typeof value.format === "function") {
      return value.format(options);
    } else if (value && value.toString(options) !== {}.toString()) {
      return value.toString(options);
    } else {
      var entries = Object.keys(value).map((key) => {
        return stringify(key) + ": " + format(value[key], options);
      });
      return "{" + entries.join(", ") + "}";
    }
  }
  return String(value);
}
function stringify(value) {
  var text = String(value);
  var escaped = "";
  var i = 0;
  while (i < text.length) {
    var c = text.charAt(i);
    escaped += c in controlCharacters ? controlCharacters[c] : c;
    i++;
  }
  return '"' + escaped + '"';
}
var controlCharacters = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
function formatArray(array, options) {
  if (Array.isArray(array)) {
    var str = "[";
    var len = array.length;
    for (var i = 0; i < len; i++) {
      if (i !== 0) {
        str += ", ";
      }
      str += formatArray(array[i], options);
    }
    str += "]";
    return str;
  } else {
    return format(array, options);
  }
}
function looksLikeFraction(value) {
  return value && typeof value === "object" && typeof value.s === "number" && typeof value.n === "number" && typeof value.d === "number" || false;
}
function DimensionError(actual, expected, relation) {
  if (!(this instanceof DimensionError)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  }
  this.actual = actual;
  this.expected = expected;
  this.relation = relation;
  this.message = "Dimension mismatch (" + (Array.isArray(actual) ? "[" + actual.join(", ") + "]" : actual) + " " + (this.relation || "!=") + " " + (Array.isArray(expected) ? "[" + expected.join(", ") + "]" : expected) + ")";
  this.stack = new Error().stack;
}
DimensionError.prototype = new RangeError();
DimensionError.prototype.constructor = RangeError;
DimensionError.prototype.name = "DimensionError";
DimensionError.prototype.isDimensionError = true;
function IndexError(index, min2, max2) {
  if (!(this instanceof IndexError)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  }
  this.index = index;
  if (arguments.length < 3) {
    this.min = 0;
    this.max = min2;
  } else {
    this.min = min2;
    this.max = max2;
  }
  if (this.min !== void 0 && this.index < this.min) {
    this.message = "Index out of range (" + this.index + " < " + this.min + ")";
  } else if (this.max !== void 0 && this.index >= this.max) {
    this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")";
  } else {
    this.message = "Index out of range (" + this.index + ")";
  }
  this.stack = new Error().stack;
}
IndexError.prototype = new RangeError();
IndexError.prototype.constructor = RangeError;
IndexError.prototype.name = "IndexError";
IndexError.prototype.isIndexError = true;
function arraySize(x) {
  var s = [];
  while (Array.isArray(x)) {
    s.push(x.length);
    x = x[0];
  }
  return s;
}
function _validate(array, size2, dim) {
  var i;
  var len = array.length;
  if (len !== size2[dim]) {
    throw new DimensionError(len, size2[dim]);
  }
  if (dim < size2.length - 1) {
    var dimNext = dim + 1;
    for (i = 0; i < len; i++) {
      var child = array[i];
      if (!Array.isArray(child)) {
        throw new DimensionError(size2.length - 1, size2.length, "<");
      }
      _validate(array[i], size2, dimNext);
    }
  } else {
    for (i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        throw new DimensionError(size2.length + 1, size2.length, ">");
      }
    }
  }
}
function validate(array, size2) {
  var isScalar = size2.length === 0;
  if (isScalar) {
    if (Array.isArray(array)) {
      throw new DimensionError(array.length, 0);
    }
  } else {
    _validate(array, size2, 0);
  }
}
function validateIndex(index, length) {
  if (index !== void 0) {
    if (!isNumber(index) || !isInteger$1(index)) {
      throw new TypeError("Index must be an integer (value: " + index + ")");
    }
    if (index < 0 || typeof length === "number" && index >= length) {
      throw new IndexError(index, length);
    }
  }
}
function resize(array, size2, defaultValue) {
  if (!Array.isArray(size2)) {
    throw new TypeError("Array expected");
  }
  if (size2.length === 0) {
    throw new Error("Resizing to scalar is not supported");
  }
  size2.forEach(function(value) {
    if (!isNumber(value) || !isInteger$1(value) || value < 0) {
      throw new TypeError("Invalid size, must contain positive integers (size: " + format(size2) + ")");
    }
  });
  if (isNumber(array) || isBigNumber(array)) {
    array = [array];
  }
  var _defaultValue = defaultValue !== void 0 ? defaultValue : 0;
  _resize(array, size2, 0, _defaultValue);
  return array;
}
function _resize(array, size2, dim, defaultValue) {
  var i;
  var elem;
  var oldLen = array.length;
  var newLen = size2[dim];
  var minLen = Math.min(oldLen, newLen);
  array.length = newLen;
  if (dim < size2.length - 1) {
    var dimNext = dim + 1;
    for (i = 0; i < minLen; i++) {
      elem = array[i];
      if (!Array.isArray(elem)) {
        elem = [elem];
        array[i] = elem;
      }
      _resize(elem, size2, dimNext, defaultValue);
    }
    for (i = minLen; i < newLen; i++) {
      elem = [];
      array[i] = elem;
      _resize(elem, size2, dimNext, defaultValue);
    }
  } else {
    for (i = 0; i < minLen; i++) {
      while (Array.isArray(array[i])) {
        array[i] = array[i][0];
      }
    }
    for (i = minLen; i < newLen; i++) {
      array[i] = defaultValue;
    }
  }
}
function reshape(array, sizes) {
  var flatArray = flatten(array);
  var currentLength = flatArray.length;
  if (!Array.isArray(array) || !Array.isArray(sizes)) {
    throw new TypeError("Array expected");
  }
  if (sizes.length === 0) {
    throw new DimensionError(0, currentLength, "!=");
  }
  sizes = processSizesWildcard(sizes, currentLength);
  var newLength = product(sizes);
  if (currentLength !== newLength) {
    throw new DimensionError(newLength, currentLength, "!=");
  }
  try {
    return _reshape(flatArray, sizes);
  } catch (e) {
    if (e instanceof DimensionError) {
      throw new DimensionError(newLength, currentLength, "!=");
    }
    throw e;
  }
}
function processSizesWildcard(sizes, currentLength) {
  var newLength = product(sizes);
  var processedSizes = sizes.slice();
  var WILDCARD = -1;
  var wildCardIndex = sizes.indexOf(WILDCARD);
  var isMoreThanOneWildcard = sizes.indexOf(WILDCARD, wildCardIndex + 1) >= 0;
  if (isMoreThanOneWildcard) {
    throw new Error("More than one wildcard in sizes");
  }
  var hasWildcard = wildCardIndex >= 0;
  var canReplaceWildcard = currentLength % newLength === 0;
  if (hasWildcard) {
    if (canReplaceWildcard) {
      processedSizes[wildCardIndex] = -currentLength / newLength;
    } else {
      throw new Error("Could not replace wildcard, since " + currentLength + " is no multiple of " + -newLength);
    }
  }
  return processedSizes;
}
function product(array) {
  return array.reduce((prev, curr) => prev * curr, 1);
}
function _reshape(array, sizes) {
  var tmpArray = array;
  var tmpArray2;
  for (var sizeIndex = sizes.length - 1; sizeIndex > 0; sizeIndex--) {
    var size2 = sizes[sizeIndex];
    tmpArray2 = [];
    var length = tmpArray.length / size2;
    for (var i = 0; i < length; i++) {
      tmpArray2.push(tmpArray.slice(i * size2, (i + 1) * size2));
    }
    tmpArray = tmpArray2;
  }
  return tmpArray;
}
function unsqueeze(array, dims, outer, size2) {
  var s = size2 || arraySize(array);
  if (outer) {
    for (var i = 0; i < outer; i++) {
      array = [array];
      s.unshift(1);
    }
  }
  array = _unsqueeze(array, dims, 0);
  while (s.length < dims) {
    s.push(1);
  }
  return array;
}
function _unsqueeze(array, dims, dim) {
  var i, ii;
  if (Array.isArray(array)) {
    var next = dim + 1;
    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _unsqueeze(array[i], dims, next);
    }
  } else {
    for (var d = dim; d < dims; d++) {
      array = [array];
    }
  }
  return array;
}
function flatten(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  var flat = [];
  array.forEach(function callback(value) {
    if (Array.isArray(value)) {
      value.forEach(callback);
    } else {
      flat.push(value);
    }
  });
  return flat;
}
function getArrayDataType(array, typeOf2) {
  var type;
  var length = 0;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var _isArray = Array.isArray(item);
    if (i === 0 && _isArray) {
      length = item.length;
    }
    if (_isArray && item.length !== length) {
      return void 0;
    }
    var itemType = _isArray ? getArrayDataType(item, typeOf2) : typeOf2(item);
    if (type === void 0) {
      type = itemType;
    } else if (type !== itemType) {
      return "mixed";
    } else
      ;
  }
  return type;
}
function concatRecursive(a, b, concatDim, dim) {
  if (dim < concatDim) {
    if (a.length !== b.length) {
      throw new DimensionError(a.length, b.length);
    }
    var c = [];
    for (var i = 0; i < a.length; i++) {
      c[i] = concatRecursive(a[i], b[i], concatDim, dim + 1);
    }
    return c;
  } else {
    return a.concat(b);
  }
}
function concat$1() {
  var arrays = Array.prototype.slice.call(arguments, 0, -1);
  var concatDim = Array.prototype.slice.call(arguments, -1);
  if (arrays.length === 1) {
    return arrays[0];
  }
  if (arrays.length > 1) {
    return arrays.slice(1).reduce(function(A, B) {
      return concatRecursive(A, B, concatDim, 0);
    }, arrays[0]);
  } else {
    throw new Error("Wrong number of arguments in function concat");
  }
}
function broadcastSizes() {
  for (var _len = arguments.length, sizes = new Array(_len), _key = 0; _key < _len; _key++) {
    sizes[_key] = arguments[_key];
  }
  var dimensions = sizes.map((s) => s.length);
  var N = Math.max(...dimensions);
  var sizeMax = new Array(N).fill(null);
  for (var i = 0; i < sizes.length; i++) {
    var size2 = sizes[i];
    var dim = dimensions[i];
    for (var j = 0; j < dim; j++) {
      var n3 = N - dim + j;
      if (size2[j] > sizeMax[n3]) {
        sizeMax[n3] = size2[j];
      }
    }
  }
  for (var _i = 0; _i < sizes.length; _i++) {
    checkBroadcastingRules(sizes[_i], sizeMax);
  }
  return sizeMax;
}
function checkBroadcastingRules(size2, toSize) {
  var N = toSize.length;
  var dim = size2.length;
  for (var j = 0; j < dim; j++) {
    var n3 = N - dim + j;
    if (size2[j] < toSize[n3] && size2[j] > 1 || size2[j] > toSize[n3]) {
      throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(size2, ") not possible to broadcast dimension ").concat(dim, " with size ").concat(size2[j], " to size ").concat(toSize[n3]));
    }
  }
}
function broadcastTo(array, toSize) {
  var Asize = arraySize(array);
  if (deepStrictEqual(Asize, toSize)) {
    return array;
  }
  checkBroadcastingRules(Asize, toSize);
  var broadcastedSize = broadcastSizes(Asize, toSize);
  var N = broadcastedSize.length;
  var paddedSize = [...Array(N - Asize.length).fill(1), ...Asize];
  var A = clone$1(array);
  if (Asize.length < N) {
    A = reshape(A, paddedSize);
    Asize = arraySize(A);
  }
  for (var dim = 0; dim < N; dim++) {
    if (Asize[dim] < broadcastedSize[dim]) {
      A = stretch(A, broadcastedSize[dim], dim);
      Asize = arraySize(A);
    }
  }
  return A;
}
function stretch(arrayToStretch, sizeToStretch, dimToStretch) {
  return concat$1(...Array(sizeToStretch).fill(arrayToStretch), dimToStretch);
}
function clone$1(array) {
  return _extends([], array);
}
function factory(name2, dependencies2, create2, meta) {
  function assertAndCreate(scope) {
    var deps = pickShallow(scope, dependencies2.map(stripOptionalNotation));
    assertDependencies(name2, dependencies2, scope);
    return create2(deps);
  }
  assertAndCreate.isFactory = true;
  assertAndCreate.fn = name2;
  assertAndCreate.dependencies = dependencies2.slice().sort();
  if (meta) {
    assertAndCreate.meta = meta;
  }
  return assertAndCreate;
}
function assertDependencies(name2, dependencies2, scope) {
  var allDefined = dependencies2.filter((dependency) => !isOptionalDependency(dependency)).every((dependency) => scope[dependency] !== void 0);
  if (!allDefined) {
    var missingDependencies = dependencies2.filter((dependency) => scope[dependency] === void 0);
    throw new Error('Cannot create function "'.concat(name2, '", ') + "some dependencies are missing: ".concat(missingDependencies.map((d) => '"'.concat(d, '"')).join(", "), "."));
  }
}
function isOptionalDependency(dependency) {
  return dependency && dependency[0] === "?";
}
function stripOptionalNotation(dependency) {
  return dependency && dependency[0] === "?" ? dependency.slice(1) : dependency;
}
function getSafeProperty(object, prop) {
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    return object[prop];
  }
  if (typeof object[prop] === "function" && isSafeMethod(object, prop)) {
    throw new Error('Cannot access method "' + prop + '" as a property');
  }
  throw new Error('No access to property "' + prop + '"');
}
function setSafeProperty(object, prop, value) {
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    object[prop] = value;
    return value;
  }
  throw new Error('No access to property "' + prop + '"');
}
function hasSafeProperty(object, prop) {
  return prop in object;
}
function isSafeProperty(object, prop) {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (hasOwnProperty(safeNativeProperties, prop)) {
    return true;
  }
  if (prop in Object.prototype) {
    return false;
  }
  if (prop in Function.prototype) {
    return false;
  }
  return true;
}
function isSafeMethod(object, method) {
  if (object === null || object === void 0 || typeof object[method] !== "function") {
    return false;
  }
  if (hasOwnProperty(object, method) && Object.getPrototypeOf && method in Object.getPrototypeOf(object)) {
    return false;
  }
  if (hasOwnProperty(safeNativeMethods, method)) {
    return true;
  }
  if (method in Object.prototype) {
    return false;
  }
  if (method in Function.prototype) {
    return false;
  }
  return true;
}
function isPlainObject(object) {
  return typeof object === "object" && object && object.constructor === Object;
}
var safeNativeProperties = {
  length: true,
  name: true
};
var safeNativeMethods = {
  toString: true,
  valueOf: true,
  toLocaleString: true
};
class ObjectWrappingMap {
  constructor(object) {
    this.wrappedObject = object;
  }
  keys() {
    return Object.keys(this.wrappedObject);
  }
  get(key) {
    return getSafeProperty(this.wrappedObject, key);
  }
  set(key, value) {
    setSafeProperty(this.wrappedObject, key, value);
    return this;
  }
  has(key) {
    return hasSafeProperty(this.wrappedObject, key);
  }
}
function isMap(object) {
  if (!object) {
    return false;
  }
  return object instanceof Map || object instanceof ObjectWrappingMap || typeof object.set === "function" && typeof object.get === "function" && typeof object.keys === "function" && typeof object.has === "function";
}
var _createTyped2 = function _createTyped() {
  _createTyped2 = typedFunction.create;
  return typedFunction;
};
var dependencies$R = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"];
var createTyped = /* @__PURE__ */ factory("typed", dependencies$R, function createTyped2(_ref) {
  var {
    BigNumber: BigNumber2,
    Complex: Complex2,
    DenseMatrix: DenseMatrix2,
    Fraction: Fraction2
  } = _ref;
  var typed2 = _createTyped2();
  typed2.clear();
  typed2.addTypes([
    {
      name: "number",
      test: isNumber
    },
    {
      name: "Complex",
      test: isComplex
    },
    {
      name: "BigNumber",
      test: isBigNumber
    },
    {
      name: "Fraction",
      test: isFraction
    },
    {
      name: "Unit",
      test: isUnit
    },
    {
      name: "identifier",
      test: (s) => isString && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(s)
    },
    {
      name: "string",
      test: isString
    },
    {
      name: "Chain",
      test: isChain
    },
    {
      name: "Array",
      test: isArray
    },
    {
      name: "Matrix",
      test: isMatrix
    },
    {
      name: "DenseMatrix",
      test: isDenseMatrix
    },
    {
      name: "SparseMatrix",
      test: isSparseMatrix
    },
    {
      name: "Range",
      test: isRange
    },
    {
      name: "Index",
      test: isIndex
    },
    {
      name: "boolean",
      test: isBoolean
    },
    {
      name: "ResultSet",
      test: isResultSet
    },
    {
      name: "Help",
      test: isHelp
    },
    {
      name: "function",
      test: isFunction
    },
    {
      name: "Date",
      test: isDate
    },
    {
      name: "RegExp",
      test: isRegExp
    },
    {
      name: "null",
      test: isNull
    },
    {
      name: "undefined",
      test: isUndefined
    },
    {
      name: "AccessorNode",
      test: isAccessorNode
    },
    {
      name: "ArrayNode",
      test: isArrayNode
    },
    {
      name: "AssignmentNode",
      test: isAssignmentNode
    },
    {
      name: "BlockNode",
      test: isBlockNode
    },
    {
      name: "ConditionalNode",
      test: isConditionalNode
    },
    {
      name: "ConstantNode",
      test: isConstantNode
    },
    {
      name: "FunctionNode",
      test: isFunctionNode
    },
    {
      name: "FunctionAssignmentNode",
      test: isFunctionAssignmentNode
    },
    {
      name: "IndexNode",
      test: isIndexNode
    },
    {
      name: "Node",
      test: isNode
    },
    {
      name: "ObjectNode",
      test: isObjectNode
    },
    {
      name: "OperatorNode",
      test: isOperatorNode
    },
    {
      name: "ParenthesisNode",
      test: isParenthesisNode
    },
    {
      name: "RangeNode",
      test: isRangeNode
    },
    {
      name: "RelationalNode",
      test: isRelationalNode
    },
    {
      name: "SymbolNode",
      test: isSymbolNode
    },
    {
      name: "Map",
      test: isMap
    },
    {
      name: "Object",
      test: isObject
    }
  ]);
  typed2.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function convert(x) {
      if (!BigNumber2) {
        throwNoBignumber(x);
      }
      if (digits(x) > 15) {
        throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + x + "). Use function bignumber(x) to convert to BigNumber.");
      }
      return new BigNumber2(x);
    }
  }, {
    from: "number",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex2) {
        throwNoComplex(x);
      }
      return new Complex2(x, 0);
    }
  }, {
    from: "BigNumber",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex2) {
        throwNoComplex(x);
      }
      return new Complex2(x.toNumber(), 0);
    }
  }, {
    from: "Fraction",
    to: "BigNumber",
    convert: function convert(x) {
      throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
    }
  }, {
    from: "Fraction",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex2) {
        throwNoComplex(x);
      }
      return new Complex2(x.valueOf(), 0);
    }
  }, {
    from: "number",
    to: "Fraction",
    convert: function convert(x) {
      if (!Fraction2) {
        throwNoFraction(x);
      }
      var f2 = new Fraction2(x);
      if (f2.valueOf() !== x) {
        throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + x + "). Use function fraction(x) to convert to Fraction.");
      }
      return f2;
    }
  }, {
    from: "string",
    to: "number",
    convert: function convert(x) {
      var n3 = Number(x);
      if (isNaN(n3)) {
        throw new Error('Cannot convert "' + x + '" to a number');
      }
      return n3;
    }
  }, {
    from: "string",
    to: "BigNumber",
    convert: function convert(x) {
      if (!BigNumber2) {
        throwNoBignumber(x);
      }
      try {
        return new BigNumber2(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to BigNumber');
      }
    }
  }, {
    from: "string",
    to: "Fraction",
    convert: function convert(x) {
      if (!Fraction2) {
        throwNoFraction(x);
      }
      try {
        return new Fraction2(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Fraction');
      }
    }
  }, {
    from: "string",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex2) {
        throwNoComplex(x);
      }
      try {
        return new Complex2(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Complex');
      }
    }
  }, {
    from: "boolean",
    to: "number",
    convert: function convert(x) {
      return +x;
    }
  }, {
    from: "boolean",
    to: "BigNumber",
    convert: function convert(x) {
      if (!BigNumber2) {
        throwNoBignumber(x);
      }
      return new BigNumber2(+x);
    }
  }, {
    from: "boolean",
    to: "Fraction",
    convert: function convert(x) {
      if (!Fraction2) {
        throwNoFraction(x);
      }
      return new Fraction2(+x);
    }
  }, {
    from: "boolean",
    to: "string",
    convert: function convert(x) {
      return String(x);
    }
  }, {
    from: "Array",
    to: "Matrix",
    convert: function convert(array) {
      if (!DenseMatrix2) {
        throwNoMatrix();
      }
      return new DenseMatrix2(array);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function convert(matrix2) {
      return matrix2.valueOf();
    }
  }]);
  typed2.onMismatch = (name2, args, signatures) => {
    var usualError = typed2.createError(name2, args, signatures);
    if (["wrongType", "mismatch"].includes(usualError.data.category) && args.length === 1 && isCollection(args[0]) && signatures.some((sig) => !sig.params.includes(","))) {
      var err = new TypeError("Function '".concat(name2, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(name2, ")'."));
      err.data = usualError.data;
      throw err;
    }
    throw usualError;
  };
  typed2.onMismatch = (name2, args, signatures) => {
    var usualError = typed2.createError(name2, args, signatures);
    if (["wrongType", "mismatch"].includes(usualError.data.category) && args.length === 1 && isCollection(args[0]) && signatures.some((sig) => !sig.params.includes(","))) {
      var err = new TypeError("Function '".concat(name2, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(name2, ")'."));
      err.data = usualError.data;
      throw err;
    }
    throw usualError;
  };
  return typed2;
});
function throwNoBignumber(x) {
  throw new Error("Cannot convert value ".concat(x, " into a BigNumber: no class 'BigNumber' provided"));
}
function throwNoComplex(x) {
  throw new Error("Cannot convert value ".concat(x, " into a Complex number: no class 'Complex' provided"));
}
function throwNoMatrix() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function throwNoFraction(x) {
  throw new Error("Cannot convert value ".concat(x, " into a Fraction, no class 'Fraction' provided."));
}
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var EXP_LIMIT = 9e15, MAX_DIGITS = 1e9, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -EXP_LIMIT,
  maxE: EXP_LIMIT,
  crypto: false
}, inexact, quadrant, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", precisionLimitExceeded = decimalError + "Precision limit exceeded", cryptoUnavailable = decimalError + "crypto unavailable", tag = "[object Decimal]", mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k2, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k2 = x.cmp(min2);
  return k2 < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m2, n3, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n3 = digitsToString(x.d);
    e = x.e;
    if (s = (e - n3.length + 1) % 3)
      n3 += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n3, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n3 = "5e" + e;
    } else {
      n3 = s.toExponential();
      n3 = n3.slice(0, n3.indexOf("e") + 1) + e;
    }
    r = new Ctor(n3);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide$1(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n3 = digitsToString(r.d)).slice(0, sd)) {
      n3 = n3.slice(sd - 3, sd + 1);
      if (n3 == "9999" || !rep && n3 == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n3 || !+n3.slice(1) && n3.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m2 = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m2);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n3 = NaN;
  if (d) {
    w = d.length - 1;
    n3 = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n3--;
    if (n3 < 0)
      n3 = 0;
  }
  return n3;
};
P.dividedBy = P.div = function(y) {
  return divide$1(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide$1(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k2 = this.cmp(y);
  return k2 == 1 || k2 === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k2, n3, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k2 = Math.ceil(len / 3);
    n3 = (1 / tinyPow(4, k2)).toString();
  } else {
    k2 = 16;
    n3 = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n3), new Ctor(1), true);
  var cosh2_x, i = k2, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k2, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k2 = 1.4 * Math.sqrt(len);
    k2 = k2 > 16 ? 16 : k2 | 0;
    x = x.times(1 / tinyPow(5, k2));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k2--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide$1(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k2 = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k2 !== -1) {
    return k2 === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide$1(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k2, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k2 = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k2 !== -1) {
    if (k2 === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k2, n3, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k2 = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k2; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n3 = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n3 += 2));
    px = px.times(x2);
    r = t.plus(px.div(n3 += 2));
    if (r.d[j] !== void 0)
      for (i = j; r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k2)
    r = r.times(2 << k2 - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k2, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k2 = d[0]; k2 % 10 === 0; )
        k2 /= 10;
      inf = k2 !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide$1(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k2 = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide$1(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k2 + 1, k2 + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k2 += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k2, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k2 = xe - e;
  if (k2) {
    xLTy = k2 < 0;
    if (xLTy) {
      d = xd;
      k2 = -k2;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k2 > i) {
      k2 = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k2; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k2 = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k2; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q2, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q2 = divide$1(x, y.abs(), 0, 3, 1);
    q2.s *= y.s;
  } else {
    q2 = divide$1(x, y, 0, Ctor.modulo, 1);
  }
  q2 = q2.times(y);
  external = true;
  return x.minus(q2);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k2, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k2 = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k2 - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k2;
      len = xd.length;
    }
    k2 = Math.ceil(pr / LOG_BASE);
    len = k2 > len ? k2 + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k2, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k2 = getPrecision(x.d);
    if (z && x.e + 1 > k2)
      k2 = x.e + 1;
  } else {
    k2 = NaN;
  }
  return k2;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m2, n3, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n3 = digitsToString(d);
    if ((n3.length + e) % 2 == 0)
      n3 += "0";
    s = Math.sqrt(n3);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n3 = "5e" + e;
    } else {
      n3 = s.toExponential();
      n3 = n3.slice(0, n3.indexOf("e") + 1) + e;
    }
    r = new Ctor(n3);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide$1(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n3 = digitsToString(r.d)).slice(0, sd)) {
      n3 = n3.slice(sd - 3, sd + 1);
      if (n3 == "9999" || !rep && n3 == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n3 || !+n3.slice(1) && n3.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m2 = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m2);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide$1(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k2, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k2 = xdL + i; k2 > i; ) {
      t = r[k2] + yd[i] * xd[k2 - i - 1] + carry;
      r[k2--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k2] = (r[k2] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k2, n3, n0, n12, pr, q2, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n12 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k2 = e % LOG_BASE;
  d.d[0] = mathpow(10, k2 < 0 ? LOG_BASE + k2 : k2);
  if (maxD == null) {
    maxD = e > 0 ? d : n12;
  } else {
    n3 = new Ctor(maxD);
    if (!n3.isInt() || n3.lt(n12))
      throw Error(invalidArgument + n3);
    maxD = n3.gt(d) ? e > 0 ? d : n12 : n3;
  }
  external = false;
  n3 = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q2 = divide$1(n3, d, 0, 1, 1);
    d2 = d0.plus(q2.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n12;
    n12 = n0.plus(q2.times(d2));
    n0 = d2;
    d2 = d;
    d = n3.minus(q2.times(d2));
    n3 = d2;
  }
  d2 = divide$1(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n12));
  d0 = d0.plus(d2.times(d1));
  n0.s = n12.s = x.s;
  r = divide$1(n12, d1, e, 1).minus(x).abs().cmp(divide$1(n0, d0, e, 1).minus(x).abs()) < 1 ? [n12, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide$1(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k2, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k2 = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k2, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k2 = mathpow(+x, yn);
  e = k2 == 0 || !isFinite(k2) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k2 + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k2 = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k2)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k2)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k2, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k2 = LOG_BASE - ws.length;
      if (k2)
        str += getZeroString(k2);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k2 = LOG_BASE - ws.length;
    if (k2)
      str += getZeroString(k2);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k2, r, rd;
  for (k2 = d[0]; k2 >= 10; k2 /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k2 = mathpow(10, LOG_BASE - i);
  rd = d[di] % k2 | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k2 || rm > 3 && rd + 1 == k2 / 2) && (d[di + 1] / k2 / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k2 / 2 || rd == 0) && (d[di + 1] / k2 / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k2 || !repeating && rm > 3 && rd + 1 == k2 / 2) && (d[di + 1] / k2 / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k2, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k2 = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k2)).toString();
  } else {
    k2 = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k2;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k2; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k2;
  return x;
}
var divide$1 = function() {
  function multiplyInteger(x, k2, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k2 + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare2(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k2, logBase, more, prod, prodL, q2, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
      );
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q2 = new Ctor(sign2);
    qd = q2.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k2 = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k2) && sd--; i++) {
          t = k2 * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k2 = t % yd | 0;
        }
        more = k2 || i < xL;
      } else {
        k2 = base / (yd[0] + 1) | 0;
        if (k2 > 1) {
          yd = multiplyInteger(yd, k2, base);
          xd = multiplyInteger(xd, k2, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k2 = 0;
          cmp = compare2(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k2 = rem0 / yd0 | 0;
            if (k2 > 1) {
              if (k2 >= base)
                k2 = base - 1;
              prod = multiplyInteger(yd, k2, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare2(prod, rem, prodL, remL);
              if (cmp == 1) {
                k2--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k2 == 0)
                cmp = k2 = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare2(yd, rem, yL, remL);
              if (cmp < 1) {
                k2++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k2++;
            rem = [0];
          }
          qd[i++] = k2;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q2.e = e;
      inexact = more;
    } else {
      for (i = 1, k2 = qd[0]; k2 >= 10; k2 /= 10)
        i++;
      q2.e = i + e * logBase - 1;
      finalise(q2, dp ? pr + q2.e + 1 : pr, rm, more);
    }
    return q2;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits2, i, j, k2, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits2 = 1, k2 = xd[0]; k2 >= 10; k2 /= 10)
        digits2++;
      i = sd - digits2;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits2 - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k2 = xd.length;
        if (xdi >= k2) {
          if (isTruncated) {
            for (; k2++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits2 = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k2 = xd[xdi];
          for (digits2 = 1; k2 >= 10; k2 /= 10)
            digits2++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits2;
          rd = j < 0 ? 0 : w / mathpow(10, digits2 - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits2 - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits2 - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k2 = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k2 = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits2 - j) % mathpow(10, j) | 0) * k2 : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k2;
            for (k2 = 1; j >= 10; j /= 10)
              k2++;
            if (i != k2) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k2;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k2 = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k2, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k2 = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k2 = sd - len) > 0)
      str += getZeroString(k2);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k2 = sd - e - 1) > 0)
      str = str + "." + getZeroString(k2);
  } else {
    if ((k2 = e + 1) < len)
      str = str.slice(0, k2) + "." + str.slice(k2);
    if (sd && (k2 = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k2);
    }
  }
  return str;
}
function getBase10Exponent(digits2, e) {
  var w = digits2[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits2) {
  var w = digits2.length - 1, len = w * LOG_BASE + 1;
  w = digits2[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits2[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k2) {
  var zs = "";
  for (; k2--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n3, pr) {
  var isTruncated, r = new Ctor(1), k2 = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n3 % 2) {
      r = r.times(x);
      if (truncate(r.d, k2))
        isTruncated = true;
    }
    n3 = mathfloor(n3 / 2);
    if (n3 === 0) {
      n3 = r.d.length - 1;
      if (isTruncated && r.d[n3] === 0)
        ++r.d[n3];
      break;
    }
    x = x.times(x);
    truncate(x.d, k2);
  }
  external = true;
  return r;
}
function isOdd(n3) {
  return n3.d[n3.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k2 = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k2 += 5;
  }
  guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide$1(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k2;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n3 = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n3++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide$1(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide$1(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide$1(sum2, new Ctor(n3), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide$1(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p2, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p2 = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide$1(x, divisor, len * 4);
  if (p2)
    x = x.times(Math.abs(p2) < 54 ? mathpow(2, p2) : Decimal.pow(2, p2));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k2, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k2 = 1.4 * Math.sqrt(len);
  k2 = k2 > 16 ? 16 : k2 | 0;
  x = x.times(1 / tinyPow(5, k2));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k2--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n3, x, y, isHyperbolic) {
  var j, t, u, x2, pr = Ctor.precision, k2 = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide$1(u.times(x2), new Ctor(n3++ * n3++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide$1(t.times(x2), new Ctor(n3++ * n3++), pr, 1);
    t = u.plus(y);
    if (t.d[k2] !== void 0) {
      for (j = k2; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
  }
  external = true;
  t.d.length = k2 + 1;
  return t;
}
function tinyPow(b, e) {
  var n3 = b;
  while (--e)
    n3 *= b;
  return n3;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k2, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide$1(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k2 = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k2 || i === k2 && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str = ""; i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str = "1."; i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs$1(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add$1(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide$1(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide$1(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config2(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p2, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p2 = ps[i], useDefaults)
      this[p2] = DEFAULTS[p2];
    if ((v = obj[p2]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p2] = v;
      else
        throw Error(invalidArgument + p2 + ": " + v);
    }
  }
  if (p2 = "crypto", useDefaults)
    this[p2] = DEFAULTS[p2];
  if ((v = obj[p2]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p2] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p2] = false;
      }
    } else {
      throw Error(invalidArgument + p2 + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p2, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config2;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs$1;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add$1;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max$1;
  Decimal2.min = min$1;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum$1;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p2 = ps[i++]))
          obj[p2] = this[p2];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n3, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n3 = new this(arguments[i++]);
    if (!n3.d) {
      if (n3.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n3;
    } else if (t.d) {
      t = t.plus(n3.times(n3));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max$1() {
  return maxOrMin(this, arguments, "lt");
}
function min$1() {
  return maxOrMin(this, arguments, "gt");
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k2, n3, i = 0, r = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k2 = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k2; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k2));
    for (; i < k2; ) {
      n3 = d[i];
      if (n3 >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n3 % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k2 *= 4);
    for (; i < k2; ) {
      n3 = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n3 >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n3 % 1e7);
        i += 4;
      }
    }
    i = k2 / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k2 = rd[--i];
  sd %= LOG_BASE;
  if (k2 && sd) {
    n3 = mathpow(10, LOG_BASE - sd);
    rd[i] = (k2 / n3 | 0) * n3;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k2 = 1, n3 = rd[0]; n3 >= 10; n3 /= 10)
      k2++;
    if (k2 < LOG_BASE)
      e -= LOG_BASE - k2;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum$1() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var name$R = "BigNumber";
var dependencies$Q = ["?on", "config"];
var createBigNumberClass = /* @__PURE__ */ factory(name$R, dependencies$Q, (_ref) => {
  var {
    on,
    config: config3
  } = _ref;
  var BigNumber2 = Decimal.clone({
    precision: config3.precision,
    modulo: Decimal.EUCLID
  });
  BigNumber2.prototype = Object.create(BigNumber2.prototype);
  BigNumber2.prototype.type = "BigNumber";
  BigNumber2.prototype.isBigNumber = true;
  BigNumber2.prototype.toJSON = function() {
    return {
      mathjs: "BigNumber",
      value: this.toString()
    };
  };
  BigNumber2.fromJSON = function(json) {
    return new BigNumber2(json.value);
  };
  if (on) {
    on("config", function(curr, prev) {
      if (curr.precision !== prev.precision) {
        BigNumber2.config({
          precision: curr.precision
        });
      }
    });
  }
  return BigNumber2;
}, {
  isClass: true
});
var complex = { exports: {} };
/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(module, exports) {
  (function(root) {
    var cosh2 = Math.cosh || function(x) {
      return Math.abs(x) < 1e-9 ? 1 - x : (Math.exp(x) + Math.exp(-x)) * 0.5;
    };
    var sinh2 = Math.sinh || function(x) {
      return Math.abs(x) < 1e-9 ? x : (Math.exp(x) - Math.exp(-x)) * 0.5;
    };
    var cosm1 = function(x) {
      var b = Math.PI / 4;
      if (-b > x || x > b) {
        return Math.cos(x) - 1;
      }
      var xx = x * x;
      return xx * (xx * (xx * (xx * (xx * (xx * (xx * (xx / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    };
    var hypot2 = function(x, y) {
      var a = Math.abs(x);
      var b = Math.abs(y);
      if (a < 3e3 && b < 3e3) {
        return Math.sqrt(a * a + b * b);
      }
      if (a < b) {
        a = b;
        b = x / y;
      } else {
        b = y / x;
      }
      return a * Math.sqrt(1 + b * b);
    };
    var parser_exit = function() {
      throw SyntaxError("Invalid Param");
    };
    function logHypot(a, b) {
      var _a = Math.abs(a);
      var _b = Math.abs(b);
      if (a === 0) {
        return Math.log(_b);
      }
      if (b === 0) {
        return Math.log(_a);
      }
      if (_a < 3e3 && _b < 3e3) {
        return Math.log(a * a + b * b) * 0.5;
      }
      a = a / 2;
      b = b / 2;
      return 0.5 * Math.log(a * a + b * b) + Math.LN2;
    }
    var parse = function(a, b) {
      var z = { "re": 0, "im": 0 };
      if (a === void 0 || a === null) {
        z["re"] = z["im"] = 0;
      } else if (b !== void 0) {
        z["re"] = a;
        z["im"] = b;
      } else
        switch (typeof a) {
          case "object":
            if ("im" in a && "re" in a) {
              z["re"] = a["re"];
              z["im"] = a["im"];
            } else if ("abs" in a && "arg" in a) {
              if (!Number.isFinite(a["abs"]) && Number.isFinite(a["arg"])) {
                return Complex2["INFINITY"];
              }
              z["re"] = a["abs"] * Math.cos(a["arg"]);
              z["im"] = a["abs"] * Math.sin(a["arg"]);
            } else if ("r" in a && "phi" in a) {
              if (!Number.isFinite(a["r"]) && Number.isFinite(a["phi"])) {
                return Complex2["INFINITY"];
              }
              z["re"] = a["r"] * Math.cos(a["phi"]);
              z["im"] = a["r"] * Math.sin(a["phi"]);
            } else if (a.length === 2) {
              z["re"] = a[0];
              z["im"] = a[1];
            } else {
              parser_exit();
            }
            break;
          case "string":
            z["im"] = z["re"] = 0;
            var tokens = a.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
            var plus = 1;
            var minus = 0;
            if (tokens === null) {
              parser_exit();
            }
            for (var i = 0; i < tokens.length; i++) {
              var c = tokens[i];
              if (c === " " || c === "	" || c === "\n")
                ;
              else if (c === "+") {
                plus++;
              } else if (c === "-") {
                minus++;
              } else if (c === "i" || c === "I") {
                if (plus + minus === 0) {
                  parser_exit();
                }
                if (tokens[i + 1] !== " " && !isNaN(tokens[i + 1])) {
                  z["im"] += parseFloat((minus % 2 ? "-" : "") + tokens[i + 1]);
                  i++;
                } else {
                  z["im"] += parseFloat((minus % 2 ? "-" : "") + "1");
                }
                plus = minus = 0;
              } else {
                if (plus + minus === 0 || isNaN(c)) {
                  parser_exit();
                }
                if (tokens[i + 1] === "i" || tokens[i + 1] === "I") {
                  z["im"] += parseFloat((minus % 2 ? "-" : "") + c);
                  i++;
                } else {
                  z["re"] += parseFloat((minus % 2 ? "-" : "") + c);
                }
                plus = minus = 0;
              }
            }
            if (plus + minus > 0) {
              parser_exit();
            }
            break;
          case "number":
            z["im"] = 0;
            z["re"] = a;
            break;
          default:
            parser_exit();
        }
      if (isNaN(z["re"]) || isNaN(z["im"]))
        ;
      return z;
    };
    function Complex2(a, b) {
      if (!(this instanceof Complex2)) {
        return new Complex2(a, b);
      }
      var z = parse(a, b);
      this["re"] = z["re"];
      this["im"] = z["im"];
    }
    Complex2.prototype = {
      "re": 0,
      "im": 0,
      "sign": function() {
        var abs2 = this["abs"]();
        return new Complex2(
          this["re"] / abs2,
          this["im"] / abs2
        );
      },
      "add": function(a, b) {
        var z = new Complex2(a, b);
        if (this["isInfinite"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isInfinite"]()) {
          return Complex2["INFINITY"];
        }
        return new Complex2(
          this["re"] + z["re"],
          this["im"] + z["im"]
        );
      },
      "sub": function(a, b) {
        var z = new Complex2(a, b);
        if (this["isInfinite"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isInfinite"]()) {
          return Complex2["INFINITY"];
        }
        return new Complex2(
          this["re"] - z["re"],
          this["im"] - z["im"]
        );
      },
      "mul": function(a, b) {
        var z = new Complex2(a, b);
        if (this["isInfinite"]() && z["isZero"]() || this["isZero"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isInfinite"]()) {
          return Complex2["INFINITY"];
        }
        if (z["im"] === 0 && this["im"] === 0) {
          return new Complex2(this["re"] * z["re"], 0);
        }
        return new Complex2(
          this["re"] * z["re"] - this["im"] * z["im"],
          this["re"] * z["im"] + this["im"] * z["re"]
        );
      },
      "div": function(a, b) {
        var z = new Complex2(a, b);
        if (this["isZero"]() && z["isZero"]() || this["isInfinite"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isZero"]()) {
          return Complex2["INFINITY"];
        }
        if (this["isZero"]() || z["isInfinite"]()) {
          return Complex2["ZERO"];
        }
        a = this["re"];
        b = this["im"];
        var c = z["re"];
        var d = z["im"];
        var t, x;
        if (0 === d) {
          return new Complex2(a / c, b / c);
        }
        if (Math.abs(c) < Math.abs(d)) {
          x = c / d;
          t = c * x + d;
          return new Complex2(
            (a * x + b) / t,
            (b * x - a) / t
          );
        } else {
          x = d / c;
          t = d * x + c;
          return new Complex2(
            (a + b * x) / t,
            (b - a * x) / t
          );
        }
      },
      "pow": function(a, b) {
        var z = new Complex2(a, b);
        a = this["re"];
        b = this["im"];
        if (z["isZero"]()) {
          return Complex2["ONE"];
        }
        if (z["im"] === 0) {
          if (b === 0 && a > 0) {
            return new Complex2(Math.pow(a, z["re"]), 0);
          } else if (a === 0) {
            switch ((z["re"] % 4 + 4) % 4) {
              case 0:
                return new Complex2(Math.pow(b, z["re"]), 0);
              case 1:
                return new Complex2(0, Math.pow(b, z["re"]));
              case 2:
                return new Complex2(-Math.pow(b, z["re"]), 0);
              case 3:
                return new Complex2(0, -Math.pow(b, z["re"]));
            }
          }
        }
        if (a === 0 && b === 0 && z["re"] > 0 && z["im"] >= 0) {
          return Complex2["ZERO"];
        }
        var arg = Math.atan2(b, a);
        var loh = logHypot(a, b);
        a = Math.exp(z["re"] * loh - z["im"] * arg);
        b = z["im"] * loh + z["re"] * arg;
        return new Complex2(
          a * Math.cos(b),
          a * Math.sin(b)
        );
      },
      "sqrt": function() {
        var a = this["re"];
        var b = this["im"];
        var r = this["abs"]();
        var re, im;
        if (a >= 0) {
          if (b === 0) {
            return new Complex2(Math.sqrt(a), 0);
          }
          re = 0.5 * Math.sqrt(2 * (r + a));
        } else {
          re = Math.abs(b) / Math.sqrt(2 * (r - a));
        }
        if (a <= 0) {
          im = 0.5 * Math.sqrt(2 * (r - a));
        } else {
          im = Math.abs(b) / Math.sqrt(2 * (r + a));
        }
        return new Complex2(re, b < 0 ? -im : im);
      },
      "exp": function() {
        var tmp = Math.exp(this["re"]);
        if (this["im"] === 0)
          ;
        return new Complex2(
          tmp * Math.cos(this["im"]),
          tmp * Math.sin(this["im"])
        );
      },
      "expm1": function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(
          Math.expm1(a) * Math.cos(b) + cosm1(b),
          Math.exp(a) * Math.sin(b)
        );
      },
      "log": function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(
          logHypot(a, b),
          Math.atan2(b, a)
        );
      },
      "abs": function() {
        return hypot2(this["re"], this["im"]);
      },
      "arg": function() {
        return Math.atan2(this["im"], this["re"]);
      },
      "sin": function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(
          Math.sin(a) * cosh2(b),
          Math.cos(a) * sinh2(b)
        );
      },
      "cos": function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(
          Math.cos(a) * cosh2(b),
          -Math.sin(a) * sinh2(b)
        );
      },
      "tan": function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = Math.cos(a) + cosh2(b);
        return new Complex2(
          Math.sin(a) / d,
          sinh2(b) / d
        );
      },
      "cot": function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = Math.cos(a) - cosh2(b);
        return new Complex2(
          -Math.sin(a) / d,
          sinh2(b) / d
        );
      },
      "sec": function() {
        var a = this["re"];
        var b = this["im"];
        var d = 0.5 * cosh2(2 * b) + 0.5 * Math.cos(2 * a);
        return new Complex2(
          Math.cos(a) * cosh2(b) / d,
          Math.sin(a) * sinh2(b) / d
        );
      },
      "csc": function() {
        var a = this["re"];
        var b = this["im"];
        var d = 0.5 * cosh2(2 * b) - 0.5 * Math.cos(2 * a);
        return new Complex2(
          Math.sin(a) * cosh2(b) / d,
          -Math.cos(a) * sinh2(b) / d
        );
      },
      "asin": function() {
        var a = this["re"];
        var b = this["im"];
        var t1 = new Complex2(
          b * b - a * a + 1,
          -2 * a * b
        )["sqrt"]();
        var t2 = new Complex2(
          t1["re"] - b,
          t1["im"] + a
        )["log"]();
        return new Complex2(t2["im"], -t2["re"]);
      },
      "acos": function() {
        var a = this["re"];
        var b = this["im"];
        var t1 = new Complex2(
          b * b - a * a + 1,
          -2 * a * b
        )["sqrt"]();
        var t2 = new Complex2(
          t1["re"] - b,
          t1["im"] + a
        )["log"]();
        return new Complex2(Math.PI / 2 - t2["im"], t2["re"]);
      },
      "atan": function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0) {
          if (b === 1) {
            return new Complex2(0, Infinity);
          }
          if (b === -1) {
            return new Complex2(0, -Infinity);
          }
        }
        var d = a * a + (1 - b) * (1 - b);
        var t1 = new Complex2(
          (1 - b * b - a * a) / d,
          -2 * a / d
        ).log();
        return new Complex2(-0.5 * t1["im"], 0.5 * t1["re"]);
      },
      "acot": function() {
        var a = this["re"];
        var b = this["im"];
        if (b === 0) {
          return new Complex2(Math.atan2(1, a), 0);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(
          a / d,
          -b / d
        ).atan() : new Complex2(
          a !== 0 ? a / 0 : 0,
          b !== 0 ? -b / 0 : 0
        ).atan();
      },
      "asec": function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0 && b === 0) {
          return new Complex2(0, Infinity);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(
          a / d,
          -b / d
        ).acos() : new Complex2(
          a !== 0 ? a / 0 : 0,
          b !== 0 ? -b / 0 : 0
        ).acos();
      },
      "acsc": function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0 && b === 0) {
          return new Complex2(Math.PI / 2, Infinity);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(
          a / d,
          -b / d
        ).asin() : new Complex2(
          a !== 0 ? a / 0 : 0,
          b !== 0 ? -b / 0 : 0
        ).asin();
      },
      "sinh": function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(
          sinh2(a) * Math.cos(b),
          cosh2(a) * Math.sin(b)
        );
      },
      "cosh": function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(
          cosh2(a) * Math.cos(b),
          sinh2(a) * Math.sin(b)
        );
      },
      "tanh": function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = cosh2(a) + Math.cos(b);
        return new Complex2(
          sinh2(a) / d,
          Math.sin(b) / d
        );
      },
      "coth": function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = cosh2(a) - Math.cos(b);
        return new Complex2(
          sinh2(a) / d,
          -Math.sin(b) / d
        );
      },
      "csch": function() {
        var a = this["re"];
        var b = this["im"];
        var d = Math.cos(2 * b) - cosh2(2 * a);
        return new Complex2(
          -2 * sinh2(a) * Math.cos(b) / d,
          2 * cosh2(a) * Math.sin(b) / d
        );
      },
      "sech": function() {
        var a = this["re"];
        var b = this["im"];
        var d = Math.cos(2 * b) + cosh2(2 * a);
        return new Complex2(
          2 * cosh2(a) * Math.cos(b) / d,
          -2 * sinh2(a) * Math.sin(b) / d
        );
      },
      "asinh": function() {
        var tmp = this["im"];
        this["im"] = -this["re"];
        this["re"] = tmp;
        var res = this["asin"]();
        this["re"] = -this["im"];
        this["im"] = tmp;
        tmp = res["re"];
        res["re"] = -res["im"];
        res["im"] = tmp;
        return res;
      },
      "acosh": function() {
        var res = this["acos"]();
        if (res["im"] <= 0) {
          var tmp = res["re"];
          res["re"] = -res["im"];
          res["im"] = tmp;
        } else {
          var tmp = res["im"];
          res["im"] = -res["re"];
          res["re"] = tmp;
        }
        return res;
      },
      "atanh": function() {
        var a = this["re"];
        var b = this["im"];
        var noIM = a > 1 && b === 0;
        var oneMinus = 1 - a;
        var onePlus = 1 + a;
        var d = oneMinus * oneMinus + b * b;
        var x = d !== 0 ? new Complex2(
          (onePlus * oneMinus - b * b) / d,
          (b * oneMinus + onePlus * b) / d
        ) : new Complex2(
          a !== -1 ? a / 0 : 0,
          b !== 0 ? b / 0 : 0
        );
        var temp = x["re"];
        x["re"] = logHypot(x["re"], x["im"]) / 2;
        x["im"] = Math.atan2(x["im"], temp) / 2;
        if (noIM) {
          x["im"] = -x["im"];
        }
        return x;
      },
      "acoth": function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0 && b === 0) {
          return new Complex2(0, Math.PI / 2);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(
          a / d,
          -b / d
        ).atanh() : new Complex2(
          a !== 0 ? a / 0 : 0,
          b !== 0 ? -b / 0 : 0
        ).atanh();
      },
      "acsch": function() {
        var a = this["re"];
        var b = this["im"];
        if (b === 0) {
          return new Complex2(
            a !== 0 ? Math.log(a + Math.sqrt(a * a + 1)) : Infinity,
            0
          );
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(
          a / d,
          -b / d
        ).asinh() : new Complex2(
          a !== 0 ? a / 0 : 0,
          b !== 0 ? -b / 0 : 0
        ).asinh();
      },
      "asech": function() {
        var a = this["re"];
        var b = this["im"];
        if (this["isZero"]()) {
          return Complex2["INFINITY"];
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(
          a / d,
          -b / d
        ).acosh() : new Complex2(
          a !== 0 ? a / 0 : 0,
          b !== 0 ? -b / 0 : 0
        ).acosh();
      },
      "inverse": function() {
        if (this["isZero"]()) {
          return Complex2["INFINITY"];
        }
        if (this["isInfinite"]()) {
          return Complex2["ZERO"];
        }
        var a = this["re"];
        var b = this["im"];
        var d = a * a + b * b;
        return new Complex2(a / d, -b / d);
      },
      "conjugate": function() {
        return new Complex2(this["re"], -this["im"]);
      },
      "neg": function() {
        return new Complex2(-this["re"], -this["im"]);
      },
      "ceil": function(places) {
        places = Math.pow(10, places || 0);
        return new Complex2(
          Math.ceil(this["re"] * places) / places,
          Math.ceil(this["im"] * places) / places
        );
      },
      "floor": function(places) {
        places = Math.pow(10, places || 0);
        return new Complex2(
          Math.floor(this["re"] * places) / places,
          Math.floor(this["im"] * places) / places
        );
      },
      "round": function(places) {
        places = Math.pow(10, places || 0);
        return new Complex2(
          Math.round(this["re"] * places) / places,
          Math.round(this["im"] * places) / places
        );
      },
      "equals": function(a, b) {
        var z = new Complex2(a, b);
        return Math.abs(z["re"] - this["re"]) <= Complex2["EPSILON"] && Math.abs(z["im"] - this["im"]) <= Complex2["EPSILON"];
      },
      "clone": function() {
        return new Complex2(this["re"], this["im"]);
      },
      "toString": function() {
        var a = this["re"];
        var b = this["im"];
        var ret = "";
        if (this["isNaN"]()) {
          return "NaN";
        }
        if (this["isInfinite"]()) {
          return "Infinity";
        }
        if (Math.abs(a) < Complex2["EPSILON"]) {
          a = 0;
        }
        if (Math.abs(b) < Complex2["EPSILON"]) {
          b = 0;
        }
        if (b === 0) {
          return ret + a;
        }
        if (a !== 0) {
          ret += a;
          ret += " ";
          if (b < 0) {
            b = -b;
            ret += "-";
          } else {
            ret += "+";
          }
          ret += " ";
        } else if (b < 0) {
          b = -b;
          ret += "-";
        }
        if (1 !== b) {
          ret += b;
        }
        return ret + "i";
      },
      "toVector": function() {
        return [this["re"], this["im"]];
      },
      "valueOf": function() {
        if (this["im"] === 0) {
          return this["re"];
        }
        return null;
      },
      "isNaN": function() {
        return isNaN(this["re"]) || isNaN(this["im"]);
      },
      "isZero": function() {
        return this["im"] === 0 && this["re"] === 0;
      },
      "isFinite": function() {
        return isFinite(this["re"]) && isFinite(this["im"]);
      },
      "isInfinite": function() {
        return !(this["isNaN"]() || this["isFinite"]());
      }
    };
    Complex2["ZERO"] = new Complex2(0, 0);
    Complex2["ONE"] = new Complex2(1, 0);
    Complex2["I"] = new Complex2(0, 1);
    Complex2["PI"] = new Complex2(Math.PI, 0);
    Complex2["E"] = new Complex2(Math.E, 0);
    Complex2["INFINITY"] = new Complex2(Infinity, Infinity);
    Complex2["NAN"] = new Complex2(NaN, NaN);
    Complex2["EPSILON"] = 1e-15;
    {
      Object.defineProperty(Complex2, "__esModule", { "value": true });
      Complex2["default"] = Complex2;
      Complex2["Complex"] = Complex2;
      module["exports"] = Complex2;
    }
  })();
})(complex);
const Complex$1 = /* @__PURE__ */ getDefaultExportFromCjs(complex.exports);
var name$Q = "Complex";
var dependencies$P = [];
var createComplexClass = /* @__PURE__ */ factory(name$Q, dependencies$P, () => {
  Object.defineProperty(Complex$1, "name", {
    value: "Complex"
  });
  Complex$1.prototype.constructor = Complex$1;
  Complex$1.prototype.type = "Complex";
  Complex$1.prototype.isComplex = true;
  Complex$1.prototype.toJSON = function() {
    return {
      mathjs: "Complex",
      re: this.re,
      im: this.im
    };
  };
  Complex$1.prototype.toPolar = function() {
    return {
      r: this.abs(),
      phi: this.arg()
    };
  };
  Complex$1.prototype.format = function(options) {
    var str = "";
    var im = this.im;
    var re = this.re;
    var strRe = format$2(this.re, options);
    var strIm = format$2(this.im, options);
    var precision = isNumber(options) ? options : options ? options.precision : null;
    if (precision !== null) {
      var epsilon = Math.pow(10, -precision);
      if (Math.abs(re / im) < epsilon) {
        re = 0;
      }
      if (Math.abs(im / re) < epsilon) {
        im = 0;
      }
    }
    if (im === 0) {
      str = strRe;
    } else if (re === 0) {
      if (im === 1) {
        str = "i";
      } else if (im === -1) {
        str = "-i";
      } else {
        str = strIm + "i";
      }
    } else {
      if (im < 0) {
        if (im === -1) {
          str = strRe + " - i";
        } else {
          str = strRe + " - " + strIm.substring(1) + "i";
        }
      } else {
        if (im === 1) {
          str = strRe + " + i";
        } else {
          str = strRe + " + " + strIm + "i";
        }
      }
    }
    return str;
  };
  Complex$1.fromPolar = function(args) {
    switch (arguments.length) {
      case 1: {
        var arg = arguments[0];
        if (typeof arg === "object") {
          return Complex$1(arg);
        } else {
          throw new TypeError("Input has to be an object with r and phi keys.");
        }
      }
      case 2: {
        var r = arguments[0];
        var phi = arguments[1];
        if (isNumber(r)) {
          if (isUnit(phi) && phi.hasBase("ANGLE")) {
            phi = phi.toNumber("rad");
          }
          if (isNumber(phi)) {
            return new Complex$1({
              r,
              phi
            });
          }
          throw new TypeError("Phi is not a number nor an angle unit.");
        } else {
          throw new TypeError("Radius r is not a number.");
        }
      }
      default:
        throw new SyntaxError("Wrong number of arguments in function fromPolar");
    }
  };
  Complex$1.prototype.valueOf = Complex$1.prototype.toString;
  Complex$1.fromJSON = function(json) {
    return new Complex$1(json);
  };
  Complex$1.compare = function(a, b) {
    if (a.re > b.re) {
      return 1;
    }
    if (a.re < b.re) {
      return -1;
    }
    if (a.im > b.im) {
      return 1;
    }
    if (a.im < b.im) {
      return -1;
    }
    return 0;
  };
  return Complex$1;
}, {
  isClass: true
});
var fraction$1 = { exports: {} };
/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(module, exports) {
  (function(root) {
    var MAX_CYCLE_LEN = 2e3;
    var P2 = {
      "s": 1,
      "n": 0,
      "d": 1
    };
    function assign(n3, s) {
      if (isNaN(n3 = parseInt(n3, 10))) {
        throw InvalidParameter();
      }
      return n3 * s;
    }
    function newFraction(n3, d) {
      if (d === 0) {
        throw DivisionByZero();
      }
      var f2 = Object.create(Fraction2.prototype);
      f2["s"] = n3 < 0 ? -1 : 1;
      n3 = n3 < 0 ? -n3 : n3;
      var a = gcd(n3, d);
      f2["n"] = n3 / a;
      f2["d"] = d / a;
      return f2;
    }
    function factorize(num) {
      var factors = {};
      var n3 = num;
      var i = 2;
      var s = 4;
      while (s <= n3) {
        while (n3 % i === 0) {
          n3 /= i;
          factors[i] = (factors[i] || 0) + 1;
        }
        s += 1 + 2 * i++;
      }
      if (n3 !== num) {
        if (n3 > 1)
          factors[n3] = (factors[n3] || 0) + 1;
      } else {
        factors[num] = (factors[num] || 0) + 1;
      }
      return factors;
    }
    var parse = function(p1, p2) {
      var n3 = 0, d = 1, s = 1;
      var v = 0, w = 0, x = 0, y = 1, z = 1;
      var A = 0, B = 1;
      var C = 1, D = 1;
      var N = 1e7;
      var M;
      if (p1 === void 0 || p1 === null)
        ;
      else if (p2 !== void 0) {
        n3 = p1;
        d = p2;
        s = n3 * d;
        if (n3 % 1 !== 0 || d % 1 !== 0) {
          throw NonIntegerParameter();
        }
      } else
        switch (typeof p1) {
          case "object": {
            if ("d" in p1 && "n" in p1) {
              n3 = p1["n"];
              d = p1["d"];
              if ("s" in p1)
                n3 *= p1["s"];
            } else if (0 in p1) {
              n3 = p1[0];
              if (1 in p1)
                d = p1[1];
            } else {
              throw InvalidParameter();
            }
            s = n3 * d;
            break;
          }
          case "number": {
            if (p1 < 0) {
              s = p1;
              p1 = -p1;
            }
            if (p1 % 1 === 0) {
              n3 = p1;
            } else if (p1 > 0) {
              if (p1 >= 1) {
                z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                p1 /= z;
              }
              while (B <= N && D <= N) {
                M = (A + C) / (B + D);
                if (p1 === M) {
                  if (B + D <= N) {
                    n3 = A + C;
                    d = B + D;
                  } else if (D > B) {
                    n3 = C;
                    d = D;
                  } else {
                    n3 = A;
                    d = B;
                  }
                  break;
                } else {
                  if (p1 > M) {
                    A += C;
                    B += D;
                  } else {
                    C += A;
                    D += B;
                  }
                  if (B > N) {
                    n3 = C;
                    d = D;
                  } else {
                    n3 = A;
                    d = B;
                  }
                }
              }
              n3 *= z;
            } else if (isNaN(p1) || isNaN(p2)) {
              d = n3 = NaN;
            }
            break;
          }
          case "string": {
            B = p1.match(/\d+|./g);
            if (B === null)
              throw InvalidParameter();
            if (B[A] === "-") {
              s = -1;
              A++;
            } else if (B[A] === "+") {
              A++;
            }
            if (B.length === A + 1) {
              w = assign(B[A++], s);
            } else if (B[A + 1] === "." || B[A] === ".") {
              if (B[A] !== ".") {
                v = assign(B[A++], s);
              }
              A++;
              if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                w = assign(B[A], s);
                y = Math.pow(10, B[A].length);
                A++;
              }
              if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                x = assign(B[A + 1], s);
                z = Math.pow(10, B[A + 1].length) - 1;
                A += 3;
              }
            } else if (B[A + 1] === "/" || B[A + 1] === ":") {
              w = assign(B[A], s);
              y = assign(B[A + 2], 1);
              A += 3;
            } else if (B[A + 3] === "/" && B[A + 1] === " ") {
              v = assign(B[A], s);
              w = assign(B[A + 2], s);
              y = assign(B[A + 4], 1);
              A += 5;
            }
            if (B.length <= A) {
              d = y * z;
              s = n3 = x + d * v + z * w;
              break;
            }
          }
          default:
            throw InvalidParameter();
        }
      if (d === 0) {
        throw DivisionByZero();
      }
      P2["s"] = s < 0 ? -1 : 1;
      P2["n"] = Math.abs(n3);
      P2["d"] = Math.abs(d);
    };
    function modpow(b, e, m2) {
      var r = 1;
      for (; e > 0; b = b * b % m2, e >>= 1) {
        if (e & 1) {
          r = r * b % m2;
        }
      }
      return r;
    }
    function cycleLen(n3, d) {
      for (; d % 2 === 0; d /= 2) {
      }
      for (; d % 5 === 0; d /= 5) {
      }
      if (d === 1)
        return 0;
      var rem = 10 % d;
      var t = 1;
      for (; rem !== 1; t++) {
        rem = rem * 10 % d;
        if (t > MAX_CYCLE_LEN)
          return 0;
      }
      return t;
    }
    function cycleStart(n3, d, len) {
      var rem1 = 1;
      var rem2 = modpow(10, len, d);
      for (var t = 0; t < 300; t++) {
        if (rem1 === rem2)
          return t;
        rem1 = rem1 * 10 % d;
        rem2 = rem2 * 10 % d;
      }
      return 0;
    }
    function gcd(a, b) {
      if (!a)
        return b;
      if (!b)
        return a;
      while (1) {
        a %= b;
        if (!a)
          return b;
        b %= a;
        if (!b)
          return a;
      }
    }
    function Fraction2(a, b) {
      parse(a, b);
      if (this instanceof Fraction2) {
        a = gcd(P2["d"], P2["n"]);
        this["s"] = P2["s"];
        this["n"] = P2["n"] / a;
        this["d"] = P2["d"] / a;
      } else {
        return newFraction(P2["s"] * P2["n"], P2["d"]);
      }
    }
    var DivisionByZero = function() {
      return new Error("Division by Zero");
    };
    var InvalidParameter = function() {
      return new Error("Invalid argument");
    };
    var NonIntegerParameter = function() {
      return new Error("Parameters must be integer");
    };
    Fraction2.prototype = {
      "s": 1,
      "n": 0,
      "d": 1,
      "abs": function() {
        return newFraction(this["n"], this["d"]);
      },
      "neg": function() {
        return newFraction(-this["s"] * this["n"], this["d"]);
      },
      "add": function(a, b) {
        parse(a, b);
        return newFraction(
          this["s"] * this["n"] * P2["d"] + P2["s"] * this["d"] * P2["n"],
          this["d"] * P2["d"]
        );
      },
      "sub": function(a, b) {
        parse(a, b);
        return newFraction(
          this["s"] * this["n"] * P2["d"] - P2["s"] * this["d"] * P2["n"],
          this["d"] * P2["d"]
        );
      },
      "mul": function(a, b) {
        parse(a, b);
        return newFraction(
          this["s"] * P2["s"] * this["n"] * P2["n"],
          this["d"] * P2["d"]
        );
      },
      "div": function(a, b) {
        parse(a, b);
        return newFraction(
          this["s"] * P2["s"] * this["n"] * P2["d"],
          this["d"] * P2["n"]
        );
      },
      "clone": function() {
        return newFraction(this["s"] * this["n"], this["d"]);
      },
      "mod": function(a, b) {
        if (isNaN(this["n"]) || isNaN(this["d"])) {
          return new Fraction2(NaN);
        }
        if (a === void 0) {
          return newFraction(this["s"] * this["n"] % this["d"], 1);
        }
        parse(a, b);
        if (0 === P2["n"] && 0 === this["d"]) {
          throw DivisionByZero();
        }
        return newFraction(
          this["s"] * (P2["d"] * this["n"]) % (P2["n"] * this["d"]),
          P2["d"] * this["d"]
        );
      },
      "gcd": function(a, b) {
        parse(a, b);
        return newFraction(gcd(P2["n"], this["n"]) * gcd(P2["d"], this["d"]), P2["d"] * this["d"]);
      },
      "lcm": function(a, b) {
        parse(a, b);
        if (P2["n"] === 0 && this["n"] === 0) {
          return newFraction(0, 1);
        }
        return newFraction(P2["n"] * this["n"], gcd(P2["n"], this["n"]) * gcd(P2["d"], this["d"]));
      },
      "ceil": function(places) {
        places = Math.pow(10, places || 0);
        if (isNaN(this["n"]) || isNaN(this["d"])) {
          return new Fraction2(NaN);
        }
        return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
      },
      "floor": function(places) {
        places = Math.pow(10, places || 0);
        if (isNaN(this["n"]) || isNaN(this["d"])) {
          return new Fraction2(NaN);
        }
        return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
      },
      "round": function(places) {
        places = Math.pow(10, places || 0);
        if (isNaN(this["n"]) || isNaN(this["d"])) {
          return new Fraction2(NaN);
        }
        return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
      },
      "inverse": function() {
        return newFraction(this["s"] * this["d"], this["n"]);
      },
      "pow": function(a, b) {
        parse(a, b);
        if (P2["d"] === 1) {
          if (P2["s"] < 0) {
            return newFraction(Math.pow(this["s"] * this["d"], P2["n"]), Math.pow(this["n"], P2["n"]));
          } else {
            return newFraction(Math.pow(this["s"] * this["n"], P2["n"]), Math.pow(this["d"], P2["n"]));
          }
        }
        if (this["s"] < 0)
          return null;
        var N = factorize(this["n"]);
        var D = factorize(this["d"]);
        var n3 = 1;
        var d = 1;
        for (var k2 in N) {
          if (k2 === "1")
            continue;
          if (k2 === "0") {
            n3 = 0;
            break;
          }
          N[k2] *= P2["n"];
          if (N[k2] % P2["d"] === 0) {
            N[k2] /= P2["d"];
          } else
            return null;
          n3 *= Math.pow(k2, N[k2]);
        }
        for (var k2 in D) {
          if (k2 === "1")
            continue;
          D[k2] *= P2["n"];
          if (D[k2] % P2["d"] === 0) {
            D[k2] /= P2["d"];
          } else
            return null;
          d *= Math.pow(k2, D[k2]);
        }
        if (P2["s"] < 0) {
          return newFraction(d, n3);
        }
        return newFraction(n3, d);
      },
      "equals": function(a, b) {
        parse(a, b);
        return this["s"] * this["n"] * P2["d"] === P2["s"] * P2["n"] * this["d"];
      },
      "compare": function(a, b) {
        parse(a, b);
        var t = this["s"] * this["n"] * P2["d"] - P2["s"] * P2["n"] * this["d"];
        return (0 < t) - (t < 0);
      },
      "simplify": function(eps) {
        if (isNaN(this["n"]) || isNaN(this["d"])) {
          return this;
        }
        eps = eps || 1e-3;
        var thisABS = this["abs"]();
        var cont = thisABS["toContinued"]();
        for (var i = 1; i < cont.length; i++) {
          var s = newFraction(cont[i - 1], 1);
          for (var k2 = i - 2; k2 >= 0; k2--) {
            s = s["inverse"]()["add"](cont[k2]);
          }
          if (Math.abs(s["sub"](thisABS).valueOf()) < eps) {
            return s["mul"](this["s"]);
          }
        }
        return this;
      },
      "divisible": function(a, b) {
        parse(a, b);
        return !(!(P2["n"] * this["d"]) || this["n"] * P2["d"] % (P2["n"] * this["d"]));
      },
      "valueOf": function() {
        return this["s"] * this["n"] / this["d"];
      },
      "toFraction": function(excludeWhole) {
        var whole, str = "";
        var n3 = this["n"];
        var d = this["d"];
        if (this["s"] < 0) {
          str += "-";
        }
        if (d === 1) {
          str += n3;
        } else {
          if (excludeWhole && (whole = Math.floor(n3 / d)) > 0) {
            str += whole;
            str += " ";
            n3 %= d;
          }
          str += n3;
          str += "/";
          str += d;
        }
        return str;
      },
      "toLatex": function(excludeWhole) {
        var whole, str = "";
        var n3 = this["n"];
        var d = this["d"];
        if (this["s"] < 0) {
          str += "-";
        }
        if (d === 1) {
          str += n3;
        } else {
          if (excludeWhole && (whole = Math.floor(n3 / d)) > 0) {
            str += whole;
            n3 %= d;
          }
          str += "\\frac{";
          str += n3;
          str += "}{";
          str += d;
          str += "}";
        }
        return str;
      },
      "toContinued": function() {
        var t;
        var a = this["n"];
        var b = this["d"];
        var res = [];
        if (isNaN(a) || isNaN(b)) {
          return res;
        }
        do {
          res.push(Math.floor(a / b));
          t = a % b;
          a = b;
          b = t;
        } while (a !== 1);
        return res;
      },
      "toString": function(dec) {
        var N = this["n"];
        var D = this["d"];
        if (isNaN(N) || isNaN(D)) {
          return "NaN";
        }
        dec = dec || 15;
        var cycLen = cycleLen(N, D);
        var cycOff = cycleStart(N, D, cycLen);
        var str = this["s"] < 0 ? "-" : "";
        str += N / D | 0;
        N %= D;
        N *= 10;
        if (N)
          str += ".";
        if (cycLen) {
          for (var i = cycOff; i--; ) {
            str += N / D | 0;
            N %= D;
            N *= 10;
          }
          str += "(";
          for (var i = cycLen; i--; ) {
            str += N / D | 0;
            N %= D;
            N *= 10;
          }
          str += ")";
        } else {
          for (var i = dec; N && i--; ) {
            str += N / D | 0;
            N %= D;
            N *= 10;
          }
        }
        return str;
      }
    };
    {
      Object.defineProperty(Fraction2, "__esModule", { "value": true });
      Fraction2["default"] = Fraction2;
      Fraction2["Fraction"] = Fraction2;
      module["exports"] = Fraction2;
    }
  })();
})(fraction$1);
const Fraction$1 = /* @__PURE__ */ getDefaultExportFromCjs(fraction$1.exports);
var name$P = "Fraction";
var dependencies$O = [];
var createFractionClass = /* @__PURE__ */ factory(name$P, dependencies$O, () => {
  Object.defineProperty(Fraction$1, "name", {
    value: "Fraction"
  });
  Fraction$1.prototype.constructor = Fraction$1;
  Fraction$1.prototype.type = "Fraction";
  Fraction$1.prototype.isFraction = true;
  Fraction$1.prototype.toJSON = function() {
    return {
      mathjs: "Fraction",
      n: this.s * this.n,
      d: this.d
    };
  };
  Fraction$1.fromJSON = function(json) {
    return new Fraction$1(json);
  };
  return Fraction$1;
}, {
  isClass: true
});
var name$O = "Matrix";
var dependencies$N = [];
var createMatrixClass = /* @__PURE__ */ factory(name$O, dependencies$N, () => {
  function Matrix2() {
    if (!(this instanceof Matrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
  }
  Matrix2.prototype.type = "Matrix";
  Matrix2.prototype.isMatrix = true;
  Matrix2.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  };
  Matrix2.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  };
  Matrix2.prototype.create = function(data, datatype) {
    throw new Error("Cannot invoke create on a Matrix interface");
  };
  Matrix2.prototype.subset = function(index, replacement, defaultValue) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  };
  Matrix2.prototype.get = function(index) {
    throw new Error("Cannot invoke get on a Matrix interface");
  };
  Matrix2.prototype.set = function(index, value, defaultValue) {
    throw new Error("Cannot invoke set on a Matrix interface");
  };
  Matrix2.prototype.resize = function(size2, defaultValue) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  };
  Matrix2.prototype.reshape = function(size2, defaultValue) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  };
  Matrix2.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  };
  Matrix2.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  };
  Matrix2.prototype.map = function(callback, skipZeros) {
    throw new Error("Cannot invoke map on a Matrix interface");
  };
  Matrix2.prototype.forEach = function(callback) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  };
  Matrix2.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  };
  Matrix2.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  };
  Matrix2.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  };
  Matrix2.prototype.format = function(options) {
    throw new Error("Cannot invoke format on a Matrix interface");
  };
  Matrix2.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  };
  return Matrix2;
}, {
  isClass: true
});
function maxArgumentCount(fn) {
  return Object.keys(fn.signatures || {}).reduce(function(args, signature) {
    var count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
}
var name$N = "DenseMatrix";
var dependencies$M = ["Matrix"];
var createDenseMatrixClass = /* @__PURE__ */ factory(name$N, dependencies$M, (_ref) => {
  var {
    Matrix: Matrix2
  } = _ref;
  function DenseMatrix2(data, datatype) {
    if (!(this instanceof DenseMatrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (datatype && !isString(datatype)) {
      throw new Error("Invalid datatype: " + datatype);
    }
    if (isMatrix(data)) {
      if (data.type === "DenseMatrix") {
        this._data = clone$2(data._data);
        this._size = clone$2(data._size);
        this._datatype = datatype || data._datatype;
      } else {
        this._data = data.toArray();
        this._size = data.size();
        this._datatype = datatype || data._datatype;
      }
    } else if (data && isArray(data.data) && isArray(data.size)) {
      this._data = data.data;
      this._size = data.size;
      validate(this._data, this._size);
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      this._data = preprocess(data);
      this._size = arraySize(this._data);
      validate(this._data, this._size);
      this._datatype = datatype;
    } else if (data) {
      throw new TypeError("Unsupported type of data (" + typeOf(data) + ")");
    } else {
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
    }
  }
  DenseMatrix2.prototype = new Matrix2();
  DenseMatrix2.prototype.createDenseMatrix = function(data, datatype) {
    return new DenseMatrix2(data, datatype);
  };
  Object.defineProperty(DenseMatrix2, "name", {
    value: "DenseMatrix"
  });
  DenseMatrix2.prototype.constructor = DenseMatrix2;
  DenseMatrix2.prototype.type = "DenseMatrix";
  DenseMatrix2.prototype.isDenseMatrix = true;
  DenseMatrix2.prototype.getDataType = function() {
    return getArrayDataType(this._data, typeOf);
  };
  DenseMatrix2.prototype.storage = function() {
    return "dense";
  };
  DenseMatrix2.prototype.datatype = function() {
    return this._datatype;
  };
  DenseMatrix2.prototype.create = function(data, datatype) {
    return new DenseMatrix2(data, datatype);
  };
  DenseMatrix2.prototype.subset = function(index, replacement, defaultValue) {
    switch (arguments.length) {
      case 1:
        return _get(this, index);
      case 2:
      case 3:
        return _set(this, index, replacement, defaultValue);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  DenseMatrix2.prototype.get = function(index) {
    if (!isArray(index)) {
      throw new TypeError("Array expected");
    }
    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    }
    for (var x = 0; x < index.length; x++) {
      validateIndex(index[x], this._size[x]);
    }
    var data = this._data;
    for (var i = 0, ii = index.length; i < ii; i++) {
      var indexI = index[i];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }
    return data;
  };
  DenseMatrix2.prototype.set = function(index, value, defaultValue) {
    if (!isArray(index)) {
      throw new TypeError("Array expected");
    }
    if (index.length < this._size.length) {
      throw new DimensionError(index.length, this._size.length, "<");
    }
    var i, ii, indexI;
    var size2 = index.map(function(i2) {
      return i2 + 1;
    });
    _fit(this, size2, defaultValue);
    var data = this._data;
    for (i = 0, ii = index.length - 1; i < ii; i++) {
      indexI = index[i];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }
    indexI = index[index.length - 1];
    validateIndex(indexI, data.length);
    data[indexI] = value;
    return this;
  };
  function _get(matrix2, index) {
    if (!isIndex(index)) {
      throw new TypeError("Invalid index");
    }
    var isScalar = index.isScalar();
    if (isScalar) {
      return matrix2.get(index.min());
    } else {
      var size2 = index.size();
      if (size2.length !== matrix2._size.length) {
        throw new DimensionError(size2.length, matrix2._size.length);
      }
      var min2 = index.min();
      var max2 = index.max();
      for (var i = 0, ii = matrix2._size.length; i < ii; i++) {
        validateIndex(min2[i], matrix2._size[i]);
        validateIndex(max2[i], matrix2._size[i]);
      }
      return new DenseMatrix2(_getSubmatrix(matrix2._data, index, size2.length, 0), matrix2._datatype);
    }
  }
  function _getSubmatrix(data, index, dims, dim) {
    var last = dim === dims - 1;
    var range = index.dimension(dim);
    if (last) {
      return range.map(function(i) {
        validateIndex(i, data.length);
        return data[i];
      }).valueOf();
    } else {
      return range.map(function(i) {
        validateIndex(i, data.length);
        var child = data[i];
        return _getSubmatrix(child, index, dims, dim + 1);
      }).valueOf();
    }
  }
  function _set(matrix2, index, submatrix, defaultValue) {
    if (!index || index.isIndex !== true) {
      throw new TypeError("Invalid index");
    }
    var iSize = index.size();
    var isScalar = index.isScalar();
    var sSize;
    if (isMatrix(submatrix)) {
      sSize = submatrix.size();
      submatrix = submatrix.valueOf();
    } else {
      sSize = arraySize(submatrix);
    }
    if (isScalar) {
      if (sSize.length !== 0) {
        throw new TypeError("Scalar expected");
      }
      matrix2.set(index.min(), submatrix, defaultValue);
    } else {
      if (!deepStrictEqual(sSize, iSize)) {
        try {
          if (sSize.length === 0) {
            submatrix = broadcastTo([submatrix], iSize);
          } else {
            submatrix = broadcastTo(submatrix, iSize);
          }
          sSize = arraySize(submatrix);
        } catch (_unused) {
        }
      }
      if (iSize.length < matrix2._size.length) {
        throw new DimensionError(iSize.length, matrix2._size.length, "<");
      }
      if (sSize.length < iSize.length) {
        var i = 0;
        var outer = 0;
        while (iSize[i] === 1 && sSize[i] === 1) {
          i++;
        }
        while (iSize[i] === 1) {
          outer++;
          i++;
        }
        submatrix = unsqueeze(submatrix, iSize.length, outer, sSize);
      }
      if (!deepStrictEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, ">");
      }
      var size2 = index.max().map(function(i2) {
        return i2 + 1;
      });
      _fit(matrix2, size2, defaultValue);
      var dims = iSize.length;
      var dim = 0;
      _setSubmatrix(matrix2._data, index, submatrix, dims, dim);
    }
    return matrix2;
  }
  function _setSubmatrix(data, index, submatrix, dims, dim) {
    var last = dim === dims - 1;
    var range = index.dimension(dim);
    if (last) {
      range.forEach(function(dataIndex, subIndex) {
        validateIndex(dataIndex);
        data[dataIndex] = submatrix[subIndex[0]];
      });
    } else {
      range.forEach(function(dataIndex, subIndex) {
        validateIndex(dataIndex);
        _setSubmatrix(data[dataIndex], index, submatrix[subIndex[0]], dims, dim + 1);
      });
    }
  }
  DenseMatrix2.prototype.resize = function(size2, defaultValue, copy) {
    if (!isCollection(size2)) {
      throw new TypeError("Array or Matrix expected");
    }
    var sizeArray = size2.valueOf().map((value) => {
      return Array.isArray(value) && value.length === 1 ? value[0] : value;
    });
    var m2 = copy ? this.clone() : this;
    return _resize2(m2, sizeArray, defaultValue);
  };
  function _resize2(matrix2, size2, defaultValue) {
    if (size2.length === 0) {
      var v = matrix2._data;
      while (isArray(v)) {
        v = v[0];
      }
      return v;
    }
    matrix2._size = size2.slice(0);
    matrix2._data = resize(matrix2._data, matrix2._size, defaultValue);
    return matrix2;
  }
  DenseMatrix2.prototype.reshape = function(size2, copy) {
    var m2 = copy ? this.clone() : this;
    m2._data = reshape(m2._data, size2);
    var currentLength = m2._size.reduce((length, size3) => length * size3);
    m2._size = processSizesWildcard(size2, currentLength);
    return m2;
  };
  function _fit(matrix2, size2, defaultValue) {
    var newSize = matrix2._size.slice(0);
    var changed = false;
    while (newSize.length < size2.length) {
      newSize.push(0);
      changed = true;
    }
    for (var i = 0, ii = size2.length; i < ii; i++) {
      if (size2[i] > newSize[i]) {
        newSize[i] = size2[i];
        changed = true;
      }
    }
    if (changed) {
      _resize2(matrix2, newSize, defaultValue);
    }
  }
  DenseMatrix2.prototype.clone = function() {
    var m2 = new DenseMatrix2({
      data: clone$2(this._data),
      size: clone$2(this._size),
      datatype: this._datatype
    });
    return m2;
  };
  DenseMatrix2.prototype.size = function() {
    return this._size.slice(0);
  };
  DenseMatrix2.prototype.map = function(callback) {
    var me = this;
    var args = maxArgumentCount(callback);
    var recurse = function recurse2(value, index) {
      if (isArray(value)) {
        return value.map(function(child, i) {
          return recurse2(child, index.concat(i));
        });
      } else {
        if (args === 1) {
          return callback(value);
        } else if (args === 2) {
          return callback(value, index);
        } else {
          return callback(value, index, me);
        }
      }
    };
    var data = recurse(this._data, []);
    var datatype = this._datatype !== void 0 ? getArrayDataType(data, typeOf) : void 0;
    return new DenseMatrix2(data, datatype);
  };
  DenseMatrix2.prototype.forEach = function(callback) {
    var me = this;
    var recurse = function recurse2(value, index) {
      if (isArray(value)) {
        value.forEach(function(child, i) {
          recurse2(child, index.concat(i));
        });
      } else {
        callback(value, index, me);
      }
    };
    recurse(this._data, []);
  };
  DenseMatrix2.prototype[Symbol.iterator] = function* () {
    var recurse = function* recurse2(value, index) {
      if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          yield* recurse2(value[i], index.concat(i));
        }
      } else {
        yield {
          value,
          index
        };
      }
    };
    yield* recurse(this._data, []);
  };
  DenseMatrix2.prototype.rows = function() {
    var result = [];
    var s = this.size();
    if (s.length !== 2) {
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    }
    var data = this._data;
    for (var row of data) {
      result.push(new DenseMatrix2([row], this._datatype));
    }
    return result;
  };
  DenseMatrix2.prototype.columns = function() {
    var _this = this;
    var result = [];
    var s = this.size();
    if (s.length !== 2) {
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    }
    var data = this._data;
    var _loop = function _loop2(i2) {
      var col = data.map((row) => [row[i2]]);
      result.push(new DenseMatrix2(col, _this._datatype));
    };
    for (var i = 0; i < s[1]; i++) {
      _loop(i);
    }
    return result;
  };
  DenseMatrix2.prototype.toArray = function() {
    return clone$2(this._data);
  };
  DenseMatrix2.prototype.valueOf = function() {
    return this._data;
  };
  DenseMatrix2.prototype.format = function(options) {
    return format(this._data, options);
  };
  DenseMatrix2.prototype.toString = function() {
    return format(this._data);
  };
  DenseMatrix2.prototype.toJSON = function() {
    return {
      mathjs: "DenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };
  DenseMatrix2.prototype.diagonal = function(k2) {
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = this._size[0];
    var columns = this._size[1];
    var n3 = Math.min(rows - kSub, columns - kSuper);
    var data = [];
    for (var i = 0; i < n3; i++) {
      data[i] = this._data[i + kSub][i + kSuper];
    }
    return new DenseMatrix2({
      data,
      size: [n3],
      datatype: this._datatype
    });
  };
  DenseMatrix2.diagonal = function(size2, value, k2, defaultValue) {
    if (!isArray(size2)) {
      throw new TypeError("Array expected, size parameter");
    }
    if (size2.length !== 2) {
      throw new Error("Only two dimensions matrix are supported");
    }
    size2 = size2.map(function(s) {
      if (isBigNumber(s)) {
        s = s.toNumber();
      }
      if (!isNumber(s) || !isInteger$1(s) || s < 1) {
        throw new Error("Size values must be positive integers");
      }
      return s;
    });
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = size2[0];
    var columns = size2[1];
    var n3 = Math.min(rows - kSub, columns - kSuper);
    var _value;
    if (isArray(value)) {
      if (value.length !== n3) {
        throw new Error("Invalid value array length");
      }
      _value = function _value2(i) {
        return value[i];
      };
    } else if (isMatrix(value)) {
      var ms = value.size();
      if (ms.length !== 1 || ms[0] !== n3) {
        throw new Error("Invalid matrix length");
      }
      _value = function _value2(i) {
        return value.get([i]);
      };
    } else {
      _value = function _value2() {
        return value;
      };
    }
    if (!defaultValue) {
      defaultValue = isBigNumber(_value(0)) ? _value(0).mul(0) : 0;
    }
    var data = [];
    if (size2.length > 0) {
      data = resize(data, size2, defaultValue);
      for (var d = 0; d < n3; d++) {
        data[d + kSub][d + kSuper] = _value(d);
      }
    }
    return new DenseMatrix2({
      data,
      size: [rows, columns]
    });
  };
  DenseMatrix2.fromJSON = function(json) {
    return new DenseMatrix2(json);
  };
  DenseMatrix2.prototype.swapRows = function(i, j) {
    if (!isNumber(i) || !isInteger$1(i) || !isNumber(j) || !isInteger$1(j)) {
      throw new Error("Row index must be positive integers");
    }
    if (this._size.length !== 2) {
      throw new Error("Only two dimensional matrix is supported");
    }
    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[0]);
    DenseMatrix2._swapRows(i, j, this._data);
    return this;
  };
  DenseMatrix2._swapRows = function(i, j, data) {
    var vi = data[i];
    data[i] = data[j];
    data[j] = vi;
  };
  function preprocess(data) {
    if (isMatrix(data)) {
      return preprocess(data.valueOf());
    }
    if (isArray(data)) {
      return data.map(preprocess);
    }
    return data;
  }
  return DenseMatrix2;
}, {
  isClass: true
});
function _switch(mat) {
  var I = mat.length;
  var J = mat[0].length;
  var i, j;
  var ret = [];
  for (j = 0; j < J; j++) {
    var tmp = [];
    for (i = 0; i < I; i++) {
      tmp.push(mat[i][j]);
    }
    ret.push(tmp);
  }
  return ret;
}
function containsCollections(array) {
  for (var i = 0; i < array.length; i++) {
    if (isCollection(array[i])) {
      return true;
    }
  }
  return false;
}
function deepForEach(array, callback) {
  if (isMatrix(array)) {
    array = array.valueOf();
  }
  for (var i = 0, ii = array.length; i < ii; i++) {
    var value = array[i];
    if (Array.isArray(value)) {
      deepForEach(value, callback);
    } else {
      callback(value);
    }
  }
}
function deepMap(array, callback, skipZeros) {
  if (array && typeof array.map === "function") {
    return array.map(function(x) {
      return deepMap(x, callback);
    });
  } else {
    return callback(array);
  }
}
function reduce(mat, dim, callback) {
  var size2 = Array.isArray(mat) ? arraySize(mat) : mat.size();
  if (dim < 0 || dim >= size2.length) {
    throw new IndexError(dim, size2.length);
  }
  if (isMatrix(mat)) {
    return mat.create(_reduce(mat.valueOf(), dim, callback));
  } else {
    return _reduce(mat, dim, callback);
  }
}
function _reduce(mat, dim, callback) {
  var i, ret, val, tran;
  if (dim <= 0) {
    if (!Array.isArray(mat[0])) {
      val = mat[0];
      for (i = 1; i < mat.length; i++) {
        val = callback(val, mat[i]);
      }
      return val;
    } else {
      tran = _switch(mat);
      ret = [];
      for (i = 0; i < tran.length; i++) {
        ret[i] = _reduce(tran[i], dim - 1, callback);
      }
      return ret;
    }
  } else {
    ret = [];
    for (i = 0; i < mat.length; i++) {
      ret[i] = _reduce(mat[i], dim - 1, callback);
    }
    return ret;
  }
}
var name$M = "isInteger";
var dependencies$L = ["typed"];
var createIsInteger = /* @__PURE__ */ factory(name$M, dependencies$L, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$M, {
    number: isInteger$1,
    BigNumber: function BigNumber2(x) {
      return x.isInt();
    },
    Fraction: function Fraction2(x) {
      return x.d === 1 && isFinite(x.n);
    },
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var n1$1 = "number";
var n2 = "number, number";
function absNumber(a) {
  return Math.abs(a);
}
absNumber.signature = n1$1;
function addNumber(a, b) {
  return a + b;
}
addNumber.signature = n2;
function subtractNumber(a, b) {
  return a - b;
}
subtractNumber.signature = n2;
function multiplyNumber(a, b) {
  return a * b;
}
multiplyNumber.signature = n2;
function unaryMinusNumber(x) {
  return -x;
}
unaryMinusNumber.signature = n1$1;
var n1 = "number";
function isZeroNumber(x) {
  return x === 0;
}
isZeroNumber.signature = n1;
function isNaNNumber(x) {
  return Number.isNaN(x);
}
isNaNNumber.signature = n1;
var name$L = "isNumeric";
var dependencies$K = ["typed"];
var createIsNumeric = /* @__PURE__ */ factory(name$L, dependencies$K, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$L, {
    "number | BigNumber | Fraction | boolean": () => true,
    "Complex | Unit | string | null | undefined | Node": () => false,
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$K = "isZero";
var dependencies$J = ["typed"];
var createIsZero = /* @__PURE__ */ factory(name$K, dependencies$J, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$K, {
    number: isZeroNumber,
    BigNumber: function BigNumber2(x) {
      return x.isZero();
    },
    Complex: function Complex2(x) {
      return x.re === 0 && x.im === 0;
    },
    Fraction: function Fraction2(x) {
      return x.d === 1 && x.n === 0;
    },
    Unit: typed2.referToSelf((self2) => (x) => typed2.find(self2, x.valueType())(x.value)),
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$J = "isNaN";
var dependencies$I = ["typed"];
var createIsNaN = /* @__PURE__ */ factory(name$J, dependencies$I, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$J, {
    number: isNaNNumber,
    BigNumber: function BigNumber2(x) {
      return x.isNaN();
    },
    Fraction: function Fraction2(x) {
      return false;
    },
    Complex: function Complex2(x) {
      return x.isNaN();
    },
    Unit: function Unit(x) {
      return Number.isNaN(x.value);
    },
    "Array | Matrix": function ArrayMatrix(x) {
      return deepMap(x, Number.isNaN);
    }
  });
});
function nearlyEqual(x, y, epsilon) {
  if (epsilon === null || epsilon === void 0) {
    return x.eq(y);
  }
  if (x.eq(y)) {
    return true;
  }
  if (x.isNaN() || y.isNaN()) {
    return false;
  }
  if (x.isFinite() && y.isFinite()) {
    var diff = x.minus(y).abs();
    if (diff.isZero()) {
      return true;
    } else {
      var max2 = x.constructor.max(x.abs(), y.abs());
      return diff.lte(max2.times(epsilon));
    }
  }
  return false;
}
function complexEquals(x, y, epsilon) {
  return nearlyEqual$1(x.re, y.re, epsilon) && nearlyEqual$1(x.im, y.im, epsilon);
}
var createCompareUnits = /* @__PURE__ */ factory("compareUnits", ["typed"], (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return {
    "Unit, Unit": typed2.referToSelf((self2) => (x, y) => {
      if (!x.equalBase(y)) {
        throw new Error("Cannot compare units with different base");
      }
      return typed2.find(self2, [x.valueType(), y.valueType()])(x.value, y.value);
    })
  };
});
var name$I = "equalScalar";
var dependencies$H = ["typed", "config"];
var createEqualScalar = /* @__PURE__ */ factory(name$I, dependencies$H, (_ref) => {
  var {
    typed: typed2,
    config: config3
  } = _ref;
  var compareUnits = createCompareUnits({
    typed: typed2
  });
  return typed2(name$I, {
    "boolean, boolean": function booleanBoolean(x, y) {
      return x === y;
    },
    "number, number": function numberNumber(x, y) {
      return nearlyEqual$1(x, y, config3.epsilon);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.eq(y) || nearlyEqual(x, y, config3.epsilon);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.equals(y);
    },
    "Complex, Complex": function ComplexComplex(x, y) {
      return complexEquals(x, y, config3.epsilon);
    }
  }, compareUnits);
});
factory(name$I, ["typed", "config"], (_ref2) => {
  var {
    typed: typed2,
    config: config3
  } = _ref2;
  return typed2(name$I, {
    "number, number": function numberNumber(x, y) {
      return nearlyEqual$1(x, y, config3.epsilon);
    }
  });
});
var name$H = "SparseMatrix";
var dependencies$G = ["typed", "equalScalar", "Matrix"];
var createSparseMatrixClass = /* @__PURE__ */ factory(name$H, dependencies$G, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2,
    Matrix: Matrix2
  } = _ref;
  function SparseMatrix2(data, datatype) {
    if (!(this instanceof SparseMatrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (datatype && !isString(datatype)) {
      throw new Error("Invalid datatype: " + datatype);
    }
    if (isMatrix(data)) {
      _createFromMatrix(this, data, datatype);
    } else if (data && isArray(data.index) && isArray(data.ptr) && isArray(data.size)) {
      this._values = data.values;
      this._index = data.index;
      this._ptr = data.ptr;
      this._size = data.size;
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      _createFromArray(this, data, datatype);
    } else if (data) {
      throw new TypeError("Unsupported type of data (" + typeOf(data) + ")");
    } else {
      this._values = [];
      this._index = [];
      this._ptr = [0];
      this._size = [0, 0];
      this._datatype = datatype;
    }
  }
  function _createFromMatrix(matrix2, source, datatype) {
    if (source.type === "SparseMatrix") {
      matrix2._values = source._values ? clone$2(source._values) : void 0;
      matrix2._index = clone$2(source._index);
      matrix2._ptr = clone$2(source._ptr);
      matrix2._size = clone$2(source._size);
      matrix2._datatype = datatype || source._datatype;
    } else {
      _createFromArray(matrix2, source.valueOf(), datatype || source._datatype);
    }
  }
  function _createFromArray(matrix2, data, datatype) {
    matrix2._values = [];
    matrix2._index = [];
    matrix2._ptr = [];
    matrix2._datatype = datatype;
    var rows = data.length;
    var columns = 0;
    var eq = equalScalar2;
    var zero = 0;
    if (isString(datatype)) {
      eq = typed2.find(equalScalar2, [datatype, datatype]) || equalScalar2;
      zero = typed2.convert(0, datatype);
    }
    if (rows > 0) {
      var j = 0;
      do {
        matrix2._ptr.push(matrix2._index.length);
        for (var i = 0; i < rows; i++) {
          var row = data[i];
          if (isArray(row)) {
            if (j === 0 && columns < row.length) {
              columns = row.length;
            }
            if (j < row.length) {
              var v = row[j];
              if (!eq(v, zero)) {
                matrix2._values.push(v);
                matrix2._index.push(i);
              }
            }
          } else {
            if (j === 0 && columns < 1) {
              columns = 1;
            }
            if (!eq(row, zero)) {
              matrix2._values.push(row);
              matrix2._index.push(i);
            }
          }
        }
        j++;
      } while (j < columns);
    }
    matrix2._ptr.push(matrix2._index.length);
    matrix2._size = [rows, columns];
  }
  SparseMatrix2.prototype = new Matrix2();
  SparseMatrix2.prototype.createSparseMatrix = function(data, datatype) {
    return new SparseMatrix2(data, datatype);
  };
  Object.defineProperty(SparseMatrix2, "name", {
    value: "SparseMatrix"
  });
  SparseMatrix2.prototype.constructor = SparseMatrix2;
  SparseMatrix2.prototype.type = "SparseMatrix";
  SparseMatrix2.prototype.isSparseMatrix = true;
  SparseMatrix2.prototype.getDataType = function() {
    return getArrayDataType(this._values, typeOf);
  };
  SparseMatrix2.prototype.storage = function() {
    return "sparse";
  };
  SparseMatrix2.prototype.datatype = function() {
    return this._datatype;
  };
  SparseMatrix2.prototype.create = function(data, datatype) {
    return new SparseMatrix2(data, datatype);
  };
  SparseMatrix2.prototype.density = function() {
    var rows = this._size[0];
    var columns = this._size[1];
    return rows !== 0 && columns !== 0 ? this._index.length / (rows * columns) : 0;
  };
  SparseMatrix2.prototype.subset = function(index, replacement, defaultValue) {
    if (!this._values) {
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    }
    switch (arguments.length) {
      case 1:
        return _getsubset(this, index);
      case 2:
      case 3:
        return _setsubset(this, index, replacement, defaultValue);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function _getsubset(matrix2, idx) {
    if (!isIndex(idx)) {
      throw new TypeError("Invalid index");
    }
    var isScalar = idx.isScalar();
    if (isScalar) {
      return matrix2.get(idx.min());
    }
    var size2 = idx.size();
    if (size2.length !== matrix2._size.length) {
      throw new DimensionError(size2.length, matrix2._size.length);
    }
    var i, ii, k2, kk;
    var min2 = idx.min();
    var max2 = idx.max();
    for (i = 0, ii = matrix2._size.length; i < ii; i++) {
      validateIndex(min2[i], matrix2._size[i]);
      validateIndex(max2[i], matrix2._size[i]);
    }
    var mvalues = matrix2._values;
    var mindex = matrix2._index;
    var mptr = matrix2._ptr;
    var rows = idx.dimension(0);
    var columns = idx.dimension(1);
    var w = [];
    var pv = [];
    rows.forEach(function(i2, r) {
      pv[i2] = r[0];
      w[i2] = true;
    });
    var values = mvalues ? [] : void 0;
    var index = [];
    var ptr = [];
    columns.forEach(function(j) {
      ptr.push(index.length);
      for (k2 = mptr[j], kk = mptr[j + 1]; k2 < kk; k2++) {
        i = mindex[k2];
        if (w[i] === true) {
          index.push(pv[i]);
          if (values) {
            values.push(mvalues[k2]);
          }
        }
      }
    });
    ptr.push(index.length);
    return new SparseMatrix2({
      values,
      index,
      ptr,
      size: size2,
      datatype: matrix2._datatype
    });
  }
  function _setsubset(matrix2, index, submatrix, defaultValue) {
    if (!index || index.isIndex !== true) {
      throw new TypeError("Invalid index");
    }
    var iSize = index.size();
    var isScalar = index.isScalar();
    var sSize;
    if (isMatrix(submatrix)) {
      sSize = submatrix.size();
      submatrix = submatrix.toArray();
    } else {
      sSize = arraySize(submatrix);
    }
    if (isScalar) {
      if (sSize.length !== 0) {
        throw new TypeError("Scalar expected");
      }
      matrix2.set(index.min(), submatrix, defaultValue);
    } else {
      if (iSize.length !== 1 && iSize.length !== 2) {
        throw new DimensionError(iSize.length, matrix2._size.length, "<");
      }
      if (sSize.length < iSize.length) {
        var i = 0;
        var outer = 0;
        while (iSize[i] === 1 && sSize[i] === 1) {
          i++;
        }
        while (iSize[i] === 1) {
          outer++;
          i++;
        }
        submatrix = unsqueeze(submatrix, iSize.length, outer, sSize);
      }
      if (!deepStrictEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, ">");
      }
      if (iSize.length === 1) {
        var range = index.dimension(0);
        range.forEach(function(dataIndex, subIndex) {
          validateIndex(dataIndex);
          matrix2.set([dataIndex, 0], submatrix[subIndex[0]], defaultValue);
        });
      } else {
        var firstDimensionRange = index.dimension(0);
        var secondDimensionRange = index.dimension(1);
        firstDimensionRange.forEach(function(firstDataIndex, firstSubIndex) {
          validateIndex(firstDataIndex);
          secondDimensionRange.forEach(function(secondDataIndex, secondSubIndex) {
            validateIndex(secondDataIndex);
            matrix2.set([firstDataIndex, secondDataIndex], submatrix[firstSubIndex[0]][secondSubIndex[0]], defaultValue);
          });
        });
      }
    }
    return matrix2;
  }
  SparseMatrix2.prototype.get = function(index) {
    if (!isArray(index)) {
      throw new TypeError("Array expected");
    }
    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    }
    if (!this._values) {
      throw new Error("Cannot invoke get on a Pattern only matrix");
    }
    var i = index[0];
    var j = index[1];
    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[1]);
    var k2 = _getValueIndex(i, this._ptr[j], this._ptr[j + 1], this._index);
    if (k2 < this._ptr[j + 1] && this._index[k2] === i) {
      return this._values[k2];
    }
    return 0;
  };
  SparseMatrix2.prototype.set = function(index, v, defaultValue) {
    if (!isArray(index)) {
      throw new TypeError("Array expected");
    }
    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    }
    if (!this._values) {
      throw new Error("Cannot invoke set on a Pattern only matrix");
    }
    var i = index[0];
    var j = index[1];
    var rows = this._size[0];
    var columns = this._size[1];
    var eq = equalScalar2;
    var zero = 0;
    if (isString(this._datatype)) {
      eq = typed2.find(equalScalar2, [this._datatype, this._datatype]) || equalScalar2;
      zero = typed2.convert(0, this._datatype);
    }
    if (i > rows - 1 || j > columns - 1) {
      _resize2(this, Math.max(i + 1, rows), Math.max(j + 1, columns), defaultValue);
      rows = this._size[0];
      columns = this._size[1];
    }
    validateIndex(i, rows);
    validateIndex(j, columns);
    var k2 = _getValueIndex(i, this._ptr[j], this._ptr[j + 1], this._index);
    if (k2 < this._ptr[j + 1] && this._index[k2] === i) {
      if (!eq(v, zero)) {
        this._values[k2] = v;
      } else {
        _remove(k2, j, this._values, this._index, this._ptr);
      }
    } else {
      if (!eq(v, zero)) {
        _insert(k2, i, j, v, this._values, this._index, this._ptr);
      }
    }
    return this;
  };
  function _getValueIndex(i, top, bottom, index) {
    if (bottom - top === 0) {
      return bottom;
    }
    for (var r = top; r < bottom; r++) {
      if (index[r] === i) {
        return r;
      }
    }
    return top;
  }
  function _remove(k2, j, values, index, ptr) {
    values.splice(k2, 1);
    index.splice(k2, 1);
    for (var x = j + 1; x < ptr.length; x++) {
      ptr[x]--;
    }
  }
  function _insert(k2, i, j, v, values, index, ptr) {
    values.splice(k2, 0, v);
    index.splice(k2, 0, i);
    for (var x = j + 1; x < ptr.length; x++) {
      ptr[x]++;
    }
  }
  SparseMatrix2.prototype.resize = function(size2, defaultValue, copy) {
    if (!isCollection(size2)) {
      throw new TypeError("Array or Matrix expected");
    }
    var sizeArray = size2.valueOf().map((value) => {
      return Array.isArray(value) && value.length === 1 ? value[0] : value;
    });
    if (sizeArray.length !== 2) {
      throw new Error("Only two dimensions matrix are supported");
    }
    sizeArray.forEach(function(value) {
      if (!isNumber(value) || !isInteger$1(value) || value < 0) {
        throw new TypeError("Invalid size, must contain positive integers (size: " + format(sizeArray) + ")");
      }
    });
    var m2 = copy ? this.clone() : this;
    return _resize2(m2, sizeArray[0], sizeArray[1], defaultValue);
  };
  function _resize2(matrix2, rows, columns, defaultValue) {
    var value = defaultValue || 0;
    var eq = equalScalar2;
    var zero = 0;
    if (isString(matrix2._datatype)) {
      eq = typed2.find(equalScalar2, [matrix2._datatype, matrix2._datatype]) || equalScalar2;
      zero = typed2.convert(0, matrix2._datatype);
      value = typed2.convert(value, matrix2._datatype);
    }
    var ins = !eq(value, zero);
    var r = matrix2._size[0];
    var c = matrix2._size[1];
    var i, j, k2;
    if (columns > c) {
      for (j = c; j < columns; j++) {
        matrix2._ptr[j] = matrix2._values.length;
        if (ins) {
          for (i = 0; i < r; i++) {
            matrix2._values.push(value);
            matrix2._index.push(i);
          }
        }
      }
      matrix2._ptr[columns] = matrix2._values.length;
    } else if (columns < c) {
      matrix2._ptr.splice(columns + 1, c - columns);
      matrix2._values.splice(matrix2._ptr[columns], matrix2._values.length);
      matrix2._index.splice(matrix2._ptr[columns], matrix2._index.length);
    }
    c = columns;
    if (rows > r) {
      if (ins) {
        var n3 = 0;
        for (j = 0; j < c; j++) {
          matrix2._ptr[j] = matrix2._ptr[j] + n3;
          k2 = matrix2._ptr[j + 1] + n3;
          var p2 = 0;
          for (i = r; i < rows; i++, p2++) {
            matrix2._values.splice(k2 + p2, 0, value);
            matrix2._index.splice(k2 + p2, 0, i);
            n3++;
          }
        }
        matrix2._ptr[c] = matrix2._values.length;
      }
    } else if (rows < r) {
      var d = 0;
      for (j = 0; j < c; j++) {
        matrix2._ptr[j] = matrix2._ptr[j] - d;
        var k0 = matrix2._ptr[j];
        var k1 = matrix2._ptr[j + 1] - d;
        for (k2 = k0; k2 < k1; k2++) {
          i = matrix2._index[k2];
          if (i > rows - 1) {
            matrix2._values.splice(k2, 1);
            matrix2._index.splice(k2, 1);
            d++;
          }
        }
      }
      matrix2._ptr[j] = matrix2._values.length;
    }
    matrix2._size[0] = rows;
    matrix2._size[1] = columns;
    return matrix2;
  }
  SparseMatrix2.prototype.reshape = function(sizes, copy) {
    if (!isArray(sizes)) {
      throw new TypeError("Array expected");
    }
    if (sizes.length !== 2) {
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    }
    sizes.forEach(function(value) {
      if (!isNumber(value) || !isInteger$1(value) || value <= -2 || value === 0) {
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + format(sizes) + ")");
      }
    });
    var currentLength = this._size[0] * this._size[1];
    sizes = processSizesWildcard(sizes, currentLength);
    var newLength = sizes[0] * sizes[1];
    if (currentLength !== newLength) {
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    }
    var m2 = copy ? this.clone() : this;
    if (this._size[0] === sizes[0] && this._size[1] === sizes[1]) {
      return m2;
    }
    var colIndex = [];
    for (var i = 0; i < m2._ptr.length; i++) {
      for (var j = 0; j < m2._ptr[i + 1] - m2._ptr[i]; j++) {
        colIndex.push(i);
      }
    }
    var values = m2._values.slice();
    var rowIndex = m2._index.slice();
    for (var _i = 0; _i < m2._index.length; _i++) {
      var r1 = rowIndex[_i];
      var c1 = colIndex[_i];
      var flat = r1 * m2._size[1] + c1;
      colIndex[_i] = flat % sizes[1];
      rowIndex[_i] = Math.floor(flat / sizes[1]);
    }
    m2._values.length = 0;
    m2._index.length = 0;
    m2._ptr.length = sizes[1] + 1;
    m2._size = sizes.slice();
    for (var _i2 = 0; _i2 < m2._ptr.length; _i2++) {
      m2._ptr[_i2] = 0;
    }
    for (var h = 0; h < values.length; h++) {
      var _i3 = rowIndex[h];
      var _j = colIndex[h];
      var v = values[h];
      var k2 = _getValueIndex(_i3, m2._ptr[_j], m2._ptr[_j + 1], m2._index);
      _insert(k2, _i3, _j, v, m2._values, m2._index, m2._ptr);
    }
    return m2;
  };
  SparseMatrix2.prototype.clone = function() {
    var m2 = new SparseMatrix2({
      values: this._values ? clone$2(this._values) : void 0,
      index: clone$2(this._index),
      ptr: clone$2(this._ptr),
      size: clone$2(this._size),
      datatype: this._datatype
    });
    return m2;
  };
  SparseMatrix2.prototype.size = function() {
    return this._size.slice(0);
  };
  SparseMatrix2.prototype.map = function(callback, skipZeros) {
    if (!this._values) {
      throw new Error("Cannot invoke map on a Pattern only matrix");
    }
    var me = this;
    var rows = this._size[0];
    var columns = this._size[1];
    var args = maxArgumentCount(callback);
    var invoke = function invoke2(v, i, j) {
      if (args === 1)
        return callback(v);
      if (args === 2)
        return callback(v, [i, j]);
      return callback(v, [i, j], me);
    };
    return _map(this, 0, rows - 1, 0, columns - 1, invoke, skipZeros);
  };
  function _map(matrix2, minRow, maxRow, minColumn, maxColumn, callback, skipZeros) {
    var values = [];
    var index = [];
    var ptr = [];
    var eq = equalScalar2;
    var zero = 0;
    if (isString(matrix2._datatype)) {
      eq = typed2.find(equalScalar2, [matrix2._datatype, matrix2._datatype]) || equalScalar2;
      zero = typed2.convert(0, matrix2._datatype);
    }
    var invoke = function invoke2(v, x, y) {
      v = callback(v, x, y);
      if (!eq(v, zero)) {
        values.push(v);
        index.push(x);
      }
    };
    for (var j = minColumn; j <= maxColumn; j++) {
      ptr.push(values.length);
      var k0 = matrix2._ptr[j];
      var k1 = matrix2._ptr[j + 1];
      if (skipZeros) {
        for (var k2 = k0; k2 < k1; k2++) {
          var i = matrix2._index[k2];
          if (i >= minRow && i <= maxRow) {
            invoke(matrix2._values[k2], i - minRow, j - minColumn);
          }
        }
      } else {
        var _values = {};
        for (var _k = k0; _k < k1; _k++) {
          var _i4 = matrix2._index[_k];
          _values[_i4] = matrix2._values[_k];
        }
        for (var _i5 = minRow; _i5 <= maxRow; _i5++) {
          var value = _i5 in _values ? _values[_i5] : 0;
          invoke(value, _i5 - minRow, j - minColumn);
        }
      }
    }
    ptr.push(values.length);
    return new SparseMatrix2({
      values,
      index,
      ptr,
      size: [maxRow - minRow + 1, maxColumn - minColumn + 1]
    });
  }
  SparseMatrix2.prototype.forEach = function(callback, skipZeros) {
    if (!this._values) {
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    }
    var me = this;
    var rows = this._size[0];
    var columns = this._size[1];
    for (var j = 0; j < columns; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      if (skipZeros) {
        for (var k2 = k0; k2 < k1; k2++) {
          var i = this._index[k2];
          callback(this._values[k2], [i, j], me);
        }
      } else {
        var values = {};
        for (var _k2 = k0; _k2 < k1; _k2++) {
          var _i6 = this._index[_k2];
          values[_i6] = this._values[_k2];
        }
        for (var _i7 = 0; _i7 < rows; _i7++) {
          var value = _i7 in values ? values[_i7] : 0;
          callback(value, [_i7, j], me);
        }
      }
    }
  };
  SparseMatrix2.prototype[Symbol.iterator] = function* () {
    if (!this._values) {
      throw new Error("Cannot iterate a Pattern only matrix");
    }
    var columns = this._size[1];
    for (var j = 0; j < columns; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      for (var k2 = k0; k2 < k1; k2++) {
        var i = this._index[k2];
        yield {
          value: this._values[k2],
          index: [i, j]
        };
      }
    }
  };
  SparseMatrix2.prototype.toArray = function() {
    return _toArray(this._values, this._index, this._ptr, this._size, true);
  };
  SparseMatrix2.prototype.valueOf = function() {
    return _toArray(this._values, this._index, this._ptr, this._size, false);
  };
  function _toArray(values, index, ptr, size2, copy) {
    var rows = size2[0];
    var columns = size2[1];
    var a = [];
    var i, j;
    for (i = 0; i < rows; i++) {
      a[i] = [];
      for (j = 0; j < columns; j++) {
        a[i][j] = 0;
      }
    }
    for (j = 0; j < columns; j++) {
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      for (var k2 = k0; k2 < k1; k2++) {
        i = index[k2];
        a[i][j] = values ? copy ? clone$2(values[k2]) : values[k2] : 1;
      }
    }
    return a;
  }
  SparseMatrix2.prototype.format = function(options) {
    var rows = this._size[0];
    var columns = this._size[1];
    var density = this.density();
    var str = "Sparse Matrix [" + format(rows, options) + " x " + format(columns, options) + "] density: " + format(density, options) + "\n";
    for (var j = 0; j < columns; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      for (var k2 = k0; k2 < k1; k2++) {
        var i = this._index[k2];
        str += "\n    (" + format(i, options) + ", " + format(j, options) + ") ==> " + (this._values ? format(this._values[k2], options) : "X");
      }
    }
    return str;
  };
  SparseMatrix2.prototype.toString = function() {
    return format(this.toArray());
  };
  SparseMatrix2.prototype.toJSON = function() {
    return {
      mathjs: "SparseMatrix",
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  };
  SparseMatrix2.prototype.diagonal = function(k2) {
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = this._size[0];
    var columns = this._size[1];
    var n3 = Math.min(rows - kSub, columns - kSuper);
    var values = [];
    var index = [];
    var ptr = [];
    ptr[0] = 0;
    for (var j = kSuper; j < columns && values.length < n3; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      for (var x = k0; x < k1; x++) {
        var i = this._index[x];
        if (i === j - kSuper + kSub) {
          values.push(this._values[x]);
          index[values.length - 1] = i - kSub;
          break;
        }
      }
    }
    ptr.push(values.length);
    return new SparseMatrix2({
      values,
      index,
      ptr,
      size: [n3, 1]
    });
  };
  SparseMatrix2.fromJSON = function(json) {
    return new SparseMatrix2(json);
  };
  SparseMatrix2.diagonal = function(size2, value, k2, defaultValue, datatype) {
    if (!isArray(size2)) {
      throw new TypeError("Array expected, size parameter");
    }
    if (size2.length !== 2) {
      throw new Error("Only two dimensions matrix are supported");
    }
    size2 = size2.map(function(s) {
      if (isBigNumber(s)) {
        s = s.toNumber();
      }
      if (!isNumber(s) || !isInteger$1(s) || s < 1) {
        throw new Error("Size values must be positive integers");
      }
      return s;
    });
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var eq = equalScalar2;
    var zero = 0;
    if (isString(datatype)) {
      eq = typed2.find(equalScalar2, [datatype, datatype]) || equalScalar2;
      zero = typed2.convert(0, datatype);
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = size2[0];
    var columns = size2[1];
    var n3 = Math.min(rows - kSub, columns - kSuper);
    var _value;
    if (isArray(value)) {
      if (value.length !== n3) {
        throw new Error("Invalid value array length");
      }
      _value = function _value2(i2) {
        return value[i2];
      };
    } else if (isMatrix(value)) {
      var ms = value.size();
      if (ms.length !== 1 || ms[0] !== n3) {
        throw new Error("Invalid matrix length");
      }
      _value = function _value2(i2) {
        return value.get([i2]);
      };
    } else {
      _value = function _value2() {
        return value;
      };
    }
    var values = [];
    var index = [];
    var ptr = [];
    for (var j = 0; j < columns; j++) {
      ptr.push(values.length);
      var i = j - kSuper;
      if (i >= 0 && i < n3) {
        var v = _value(i);
        if (!eq(v, zero)) {
          index.push(i + kSub);
          values.push(v);
        }
      }
    }
    ptr.push(values.length);
    return new SparseMatrix2({
      values,
      index,
      ptr,
      size: [rows, columns]
    });
  };
  SparseMatrix2.prototype.swapRows = function(i, j) {
    if (!isNumber(i) || !isInteger$1(i) || !isNumber(j) || !isInteger$1(j)) {
      throw new Error("Row index must be positive integers");
    }
    if (this._size.length !== 2) {
      throw new Error("Only two dimensional matrix is supported");
    }
    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[0]);
    SparseMatrix2._swapRows(i, j, this._size[1], this._values, this._index, this._ptr);
    return this;
  };
  SparseMatrix2._forEachRow = function(j, values, index, ptr, callback) {
    var k0 = ptr[j];
    var k1 = ptr[j + 1];
    for (var k2 = k0; k2 < k1; k2++) {
      callback(index[k2], values[k2]);
    }
  };
  SparseMatrix2._swapRows = function(x, y, columns, values, index, ptr) {
    for (var j = 0; j < columns; j++) {
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      var kx = _getValueIndex(x, k0, k1, index);
      var ky = _getValueIndex(y, k0, k1, index);
      if (kx < k1 && ky < k1 && index[kx] === x && index[ky] === y) {
        if (values) {
          var v = values[kx];
          values[kx] = values[ky];
          values[ky] = v;
        }
        continue;
      }
      if (kx < k1 && index[kx] === x && (ky >= k1 || index[ky] !== y)) {
        var vx = values ? values[kx] : void 0;
        index.splice(ky, 0, y);
        if (values) {
          values.splice(ky, 0, vx);
        }
        index.splice(ky <= kx ? kx + 1 : kx, 1);
        if (values) {
          values.splice(ky <= kx ? kx + 1 : kx, 1);
        }
        continue;
      }
      if (ky < k1 && index[ky] === y && (kx >= k1 || index[kx] !== x)) {
        var vy = values ? values[ky] : void 0;
        index.splice(kx, 0, x);
        if (values) {
          values.splice(kx, 0, vy);
        }
        index.splice(kx <= ky ? ky + 1 : ky, 1);
        if (values) {
          values.splice(kx <= ky ? ky + 1 : ky, 1);
        }
      }
    }
  };
  return SparseMatrix2;
}, {
  isClass: true
});
var name$G = "number";
var dependencies$F = ["typed"];
function getNonDecimalNumberParts(input) {
  var nonDecimalWithRadixMatch = input.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (nonDecimalWithRadixMatch) {
    var radix = {
      "0b": 2,
      "0o": 8,
      "0x": 16
    }[nonDecimalWithRadixMatch[1]];
    var integerPart = nonDecimalWithRadixMatch[2];
    var fractionalPart = nonDecimalWithRadixMatch[3];
    return {
      input,
      radix,
      integerPart,
      fractionalPart
    };
  } else {
    return null;
  }
}
function makeNumberFromNonDecimalParts(parts) {
  var n3 = parseInt(parts.integerPart, parts.radix);
  var f2 = 0;
  for (var i = 0; i < parts.fractionalPart.length; i++) {
    var digitValue = parseInt(parts.fractionalPart[i], parts.radix);
    f2 += digitValue / Math.pow(parts.radix, i + 1);
  }
  var result = n3 + f2;
  if (isNaN(result)) {
    throw new SyntaxError('String "' + parts.input + '" is not a valid number');
  }
  return result;
}
var createNumber = /* @__PURE__ */ factory(name$G, dependencies$F, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  var number2 = typed2("number", {
    "": function _() {
      return 0;
    },
    number: function number3(x) {
      return x;
    },
    string: function string(x) {
      if (x === "NaN")
        return NaN;
      var nonDecimalNumberParts = getNonDecimalNumberParts(x);
      if (nonDecimalNumberParts) {
        return makeNumberFromNonDecimalParts(nonDecimalNumberParts);
      }
      var size2 = 0;
      var wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (wordSizeSuffixMatch) {
        size2 = Number(wordSizeSuffixMatch[2]);
        x = wordSizeSuffixMatch[1];
      }
      var num = Number(x);
      if (isNaN(num)) {
        throw new SyntaxError('String "' + x + '" is not a valid number');
      }
      if (wordSizeSuffixMatch) {
        if (num > 2 ** size2 - 1) {
          throw new SyntaxError('String "'.concat(x, '" is out of range'));
        }
        if (num >= 2 ** (size2 - 1)) {
          num = num - 2 ** size2;
        }
      }
      return num;
    },
    BigNumber: function BigNumber2(x) {
      return x.toNumber();
    },
    Fraction: function Fraction2(x) {
      return x.valueOf();
    },
    Unit: typed2.referToSelf((self2) => (x) => {
      var clone2 = x.clone();
      clone2.value = self2(x.value);
      return clone2;
    }),
    null: function _null(x) {
      return 0;
    },
    "Unit, string | Unit": function UnitStringUnit(unit, valuelessUnit) {
      return unit.toNumber(valuelessUnit);
    },
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
  number2.fromJSON = function(json) {
    return parseFloat(json.value);
  };
  return number2;
});
var name$F = "bignumber";
var dependencies$E = ["typed", "BigNumber"];
var createBignumber = /* @__PURE__ */ factory(name$F, dependencies$E, (_ref) => {
  var {
    typed: typed2,
    BigNumber: BigNumber2
  } = _ref;
  return typed2("bignumber", {
    "": function _() {
      return new BigNumber2(0);
    },
    number: function number2(x) {
      return new BigNumber2(x + "");
    },
    string: function string(x) {
      var wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (wordSizeSuffixMatch) {
        var size2 = wordSizeSuffixMatch[2];
        var n3 = BigNumber2(wordSizeSuffixMatch[1]);
        var twoPowSize = new BigNumber2(2).pow(Number(size2));
        if (n3.gt(twoPowSize.sub(1))) {
          throw new SyntaxError('String "'.concat(x, '" is out of range'));
        }
        var twoPowSizeSubOne = new BigNumber2(2).pow(Number(size2) - 1);
        if (n3.gte(twoPowSizeSubOne)) {
          return n3.sub(twoPowSize);
        } else {
          return n3;
        }
      }
      return new BigNumber2(x);
    },
    BigNumber: function BigNumber3(x) {
      return x;
    },
    Unit: typed2.referToSelf((self2) => (x) => {
      var clone2 = x.clone();
      clone2.value = self2(x.value);
      return clone2;
    }),
    Fraction: function Fraction2(x) {
      return new BigNumber2(x.n).div(x.d).times(x.s);
    },
    null: function _null(x) {
      return new BigNumber2(0);
    },
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$E = "fraction";
var dependencies$D = ["typed", "Fraction"];
var createFraction = /* @__PURE__ */ factory(name$E, dependencies$D, (_ref) => {
  var {
    typed: typed2,
    Fraction: Fraction2
  } = _ref;
  return typed2("fraction", {
    number: function number2(x) {
      if (!isFinite(x) || isNaN(x)) {
        throw new Error(x + " cannot be represented as a fraction");
      }
      return new Fraction2(x);
    },
    string: function string(x) {
      return new Fraction2(x);
    },
    "number, number": function numberNumber(numerator, denominator) {
      return new Fraction2(numerator, denominator);
    },
    null: function _null(x) {
      return new Fraction2(0);
    },
    BigNumber: function BigNumber2(x) {
      return new Fraction2(x.toString());
    },
    Fraction: function Fraction3(x) {
      return x;
    },
    Unit: typed2.referToSelf((self2) => (x) => {
      var clone2 = x.clone();
      clone2.value = self2(x.value);
      return clone2;
    }),
    Object: function Object2(x) {
      return new Fraction2(x);
    },
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$D = "matrix";
var dependencies$C = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"];
var createMatrix = /* @__PURE__ */ factory(name$D, dependencies$C, (_ref) => {
  var {
    typed: typed2,
    Matrix: Matrix2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  return typed2(name$D, {
    "": function _() {
      return _create([]);
    },
    string: function string(format2) {
      return _create([], format2);
    },
    "string, string": function stringString(format2, datatype) {
      return _create([], format2, datatype);
    },
    Array: function Array2(data) {
      return _create(data);
    },
    Matrix: function Matrix3(data) {
      return _create(data, data.storage());
    },
    "Array | Matrix, string": _create,
    "Array | Matrix, string, string": _create
  });
  function _create(data, format2, datatype) {
    if (format2 === "dense" || format2 === "default" || format2 === void 0) {
      return new DenseMatrix2(data, datatype);
    }
    if (format2 === "sparse") {
      return new SparseMatrix2(data, datatype);
    }
    throw new TypeError("Unknown matrix type " + JSON.stringify(format2) + ".");
  }
});
var name$C = "unaryMinus";
var dependencies$B = ["typed"];
var createUnaryMinus = /* @__PURE__ */ factory(name$C, dependencies$B, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$C, {
    number: unaryMinusNumber,
    "Complex | BigNumber | Fraction": (x) => x.neg(),
    Unit: typed2.referToSelf((self2) => (x) => {
      var res = x.clone();
      res.value = typed2.find(self2, res.valueType())(x.value);
      return res;
    }),
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$B = "abs";
var dependencies$A = ["typed"];
var createAbs = /* @__PURE__ */ factory(name$B, dependencies$A, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$B, {
    number: absNumber,
    "Complex | BigNumber | Fraction | Unit": (x) => x.abs(),
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$A = "addScalar";
var dependencies$z = ["typed"];
var createAddScalar = /* @__PURE__ */ factory(name$A, dependencies$z, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$A, {
    "number, number": addNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.add(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.plus(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.add(y);
    },
    "Unit, Unit": typed2.referToSelf((self2) => (x, y) => {
      if (x.value === null || x.value === void 0) {
        throw new Error("Parameter x contains a unit with undefined value");
      }
      if (y.value === null || y.value === void 0) {
        throw new Error("Parameter y contains a unit with undefined value");
      }
      if (!x.equalBase(y))
        throw new Error("Units do not match");
      var res = x.clone();
      res.value = typed2.find(self2, [res.valueType(), y.valueType()])(res.value, y.value);
      res.fixPrefix = false;
      return res;
    })
  });
});
var name$z = "subtractScalar";
var dependencies$y = ["typed"];
var createSubtractScalar = /* @__PURE__ */ factory(name$z, dependencies$y, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$z, {
    "number, number": subtractNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.sub(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.minus(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.sub(y);
    },
    "Unit, Unit": typed2.referToSelf((self2) => (x, y) => {
      if (x.value === null || x.value === void 0) {
        throw new Error("Parameter x contains a unit with undefined value");
      }
      if (y.value === null || y.value === void 0) {
        throw new Error("Parameter y contains a unit with undefined value");
      }
      if (!x.equalBase(y))
        throw new Error("Units do not match");
      var res = x.clone();
      res.value = typed2.find(self2, [res.valueType(), y.valueType()])(res.value, y.value);
      res.fixPrefix = false;
      return res;
    })
  });
});
var name$y = "matAlgo11xS0s";
var dependencies$x = ["typed", "equalScalar"];
var createMatAlgo11xS0s = /* @__PURE__ */ factory(name$y, dependencies$x, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo11xS0s(s, b, callback, inverse) {
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;
    if (!avalues) {
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      b = typed2.convert(b, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    for (var j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      for (var k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var i = aindex[k2];
        var v = inverse ? cf(b, avalues[k2]) : cf(avalues[k2], b);
        if (!eq(v, zero)) {
          cindex.push(i);
          cvalues.push(v);
        }
      }
    }
    cptr[columns] = cindex.length;
    return s.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$x = "matAlgo12xSfs";
var dependencies$w = ["typed", "DenseMatrix"];
var createMatAlgo12xSfs = /* @__PURE__ */ factory(name$x, dependencies$w, (_ref) => {
  var {
    typed: typed2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return function matAlgo12xSfs(s, b, callback, inverse) {
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;
    if (!avalues) {
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      b = typed2.convert(b, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cdata = [];
    var x = [];
    var w = [];
    for (var j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var r = aindex[k2];
        x[r] = avalues[k2];
        w[r] = mark;
      }
      for (var i = 0; i < rows; i++) {
        if (j === 0) {
          cdata[i] = [];
        }
        if (w[i] === mark) {
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          cdata[i][j] = inverse ? cf(b, 0) : cf(0, b);
        }
      }
    }
    return new DenseMatrix2({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$w = "matAlgo14xDs";
var dependencies$v = ["typed"];
var createMatAlgo14xDs = /* @__PURE__ */ factory(name$w, dependencies$v, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return function matAlgo14xDs(a, b, callback, inverse) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var dt;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      b = typed2.convert(b, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cdata = asize.length > 0 ? _iterate(cf, 0, asize, asize[0], adata, b, inverse) : [];
    return a.createDenseMatrix({
      data: cdata,
      size: clone$2(asize),
      datatype: dt
    });
  };
  function _iterate(f2, level, s, n3, av, bv, inverse) {
    var cv = [];
    if (level === s.length - 1) {
      for (var i = 0; i < n3; i++) {
        cv[i] = inverse ? f2(bv, av[i]) : f2(av[i], bv);
      }
    } else {
      for (var j = 0; j < n3; j++) {
        cv[j] = _iterate(f2, level + 1, s, s[level + 1], av[j], bv, inverse);
      }
    }
    return cv;
  }
});
var name$v = "matAlgo03xDSf";
var dependencies$u = ["typed"];
var createMatAlgo03xDSf = /* @__PURE__ */ factory(name$v, dependencies$u, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return function matAlgo03xDSf(denseMatrix, sparseMatrix, callback, inverse) {
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype;
    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    if (!bvalues) {
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      zero = typed2.convert(0, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cdata = [];
    for (var z = 0; z < rows; z++) {
      cdata[z] = [];
    }
    var x = [];
    var w = [];
    for (var j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var i = bindex[k2];
        x[i] = inverse ? cf(bvalues[k2], adata[i][j]) : cf(adata[i][j], bvalues[k2]);
        w[i] = mark;
      }
      for (var y = 0; y < rows; y++) {
        if (w[y] === mark) {
          cdata[y][j] = x[y];
        } else {
          cdata[y][j] = inverse ? cf(zero, adata[y][j]) : cf(adata[y][j], zero);
        }
      }
    }
    return denseMatrix.createDenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$u = "matAlgo05xSfSf";
var dependencies$t = ["typed", "equalScalar"];
var createMatAlgo05xSfSf = /* @__PURE__ */ factory(name$u, dependencies$t, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo05xSfSf(a, b, callback) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cvalues = avalues && bvalues ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var xa = cvalues ? [] : void 0;
    var xb = cvalues ? [] : void 0;
    var wa = [];
    var wb = [];
    var i, j, k2, k1;
    for (j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      for (k2 = aptr[j], k1 = aptr[j + 1]; k2 < k1; k2++) {
        i = aindex[k2];
        cindex.push(i);
        wa[i] = mark;
        if (xa) {
          xa[i] = avalues[k2];
        }
      }
      for (k2 = bptr[j], k1 = bptr[j + 1]; k2 < k1; k2++) {
        i = bindex[k2];
        if (wa[i] !== mark) {
          cindex.push(i);
        }
        wb[i] = mark;
        if (xb) {
          xb[i] = bvalues[k2];
        }
      }
      if (cvalues) {
        k2 = cptr[j];
        while (k2 < cindex.length) {
          i = cindex[k2];
          var wai = wa[i];
          var wbi = wb[i];
          if (wai === mark || wbi === mark) {
            var va = wai === mark ? xa[i] : zero;
            var vb = wbi === mark ? xb[i] : zero;
            var vc = cf(va, vb);
            if (!eq(vc, zero)) {
              cvalues.push(vc);
              k2++;
            } else {
              cindex.splice(k2, 1);
            }
          }
        }
      }
    }
    cptr[columns] = cindex.length;
    return a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$t = "matAlgo13xDD";
var dependencies$s = ["typed"];
var createMatAlgo13xDD = /* @__PURE__ */ factory(name$t, dependencies$s, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return function matAlgo13xDD(a, b, callback) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    var csize = [];
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    for (var s = 0; s < asize.length; s++) {
      if (asize[s] !== bsize[s]) {
        throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
      }
      csize[s] = asize[s];
    }
    var dt;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      cf = typed2.find(callback, [dt, dt]);
    }
    var cdata = csize.length > 0 ? _iterate(cf, 0, csize, csize[0], adata, bdata) : [];
    return a.createDenseMatrix({
      data: cdata,
      size: csize,
      datatype: dt
    });
  };
  function _iterate(f2, level, s, n3, av, bv) {
    var cv = [];
    if (level === s.length - 1) {
      for (var i = 0; i < n3; i++) {
        cv[i] = f2(av[i], bv[i]);
      }
    } else {
      for (var j = 0; j < n3; j++) {
        cv[j] = _iterate(f2, level + 1, s, s[level + 1], av[j], bv[j]);
      }
    }
    return cv;
  }
});
var name$s = "broadcast";
var dependancies = ["concat"];
var createBroadcast = /* @__PURE__ */ factory(name$s, dependancies, (_ref) => {
  var {
    concat: concat2
  } = _ref;
  return function(A, B) {
    var N = Math.max(A._size.length, B._size.length);
    if (A._size.length === B._size.length) {
      if (A._size.every((dim2, i) => dim2 === B._size[i])) {
        return [A, B];
      }
    }
    var sizeA = _padLeft(A._size, N, 0);
    var sizeB = _padLeft(B._size, N, 0);
    var sizeMax = [];
    for (var dim = 0; dim < N; dim++) {
      sizeMax[dim] = Math.max(sizeA[dim], sizeB[dim]);
    }
    checkBroadcastingRules(sizeA, sizeMax);
    checkBroadcastingRules(sizeB, sizeMax);
    var AA = A.clone();
    var BB = B.clone();
    if (AA._size.length < N) {
      AA.reshape(_padLeft(AA._size, N, 1));
    } else if (BB._size.length < N) {
      BB.reshape(_padLeft(BB._size, N, 1));
    }
    for (var _dim = 0; _dim < N; _dim++) {
      if (AA._size[_dim] < sizeMax[_dim]) {
        AA = _stretch(AA, sizeMax[_dim], _dim);
      }
      if (BB._size[_dim] < sizeMax[_dim]) {
        BB = _stretch(BB, sizeMax[_dim], _dim);
      }
    }
    return [AA, BB];
  };
  function _padLeft(shape, N, filler) {
    return [...Array(N - shape.length).fill(filler), ...shape];
  }
  function _stretch(arrayToStretch, sizeToStretch, dimToStretch) {
    return concat2(...Array(sizeToStretch).fill(arrayToStretch), dimToStretch);
  }
});
var name$r = "matrixAlgorithmSuite";
var dependencies$r = ["typed", "matrix", "concat"];
var createMatrixAlgorithmSuite = /* @__PURE__ */ factory(name$r, dependencies$r, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  } = _ref;
  var matAlgo13xDD = createMatAlgo13xDD({
    typed: typed2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  var broadcast = createBroadcast({
    concat: concat2
  });
  return function matrixAlgorithmSuite(options) {
    var elop = options.elop;
    var SD = options.SD || options.DS;
    var matrixSignatures;
    if (elop) {
      matrixSignatures = {
        "DenseMatrix, DenseMatrix": (x, y) => matAlgo13xDD(...broadcast(x, y), elop),
        "Array, Array": (x, y) => matAlgo13xDD(...broadcast(matrix2(x), matrix2(y)), elop).valueOf(),
        "Array, DenseMatrix": (x, y) => matAlgo13xDD(...broadcast(matrix2(x), y), elop),
        "DenseMatrix, Array": (x, y) => matAlgo13xDD(...broadcast(x, matrix2(y)), elop)
      };
      if (options.SS) {
        matrixSignatures["SparseMatrix, SparseMatrix"] = (x, y) => options.SS(...broadcast(x, y), elop, false);
      }
      if (options.DS) {
        matrixSignatures["DenseMatrix, SparseMatrix"] = (x, y) => options.DS(...broadcast(x, y), elop, false);
        matrixSignatures["Array, SparseMatrix"] = (x, y) => options.DS(...broadcast(matrix2(x), y), elop, false);
      }
      if (SD) {
        matrixSignatures["SparseMatrix, DenseMatrix"] = (x, y) => SD(...broadcast(y, x), elop, true);
        matrixSignatures["SparseMatrix, Array"] = (x, y) => SD(...broadcast(matrix2(y), x), elop, true);
      }
    } else {
      matrixSignatures = {
        "DenseMatrix, DenseMatrix": typed2.referToSelf((self2) => (x, y) => {
          return matAlgo13xDD(...broadcast(x, y), self2);
        }),
        "Array, Array": typed2.referToSelf((self2) => (x, y) => {
          return matAlgo13xDD(...broadcast(matrix2(x), matrix2(y)), self2).valueOf();
        }),
        "Array, DenseMatrix": typed2.referToSelf((self2) => (x, y) => {
          return matAlgo13xDD(...broadcast(matrix2(x), y), self2);
        }),
        "DenseMatrix, Array": typed2.referToSelf((self2) => (x, y) => {
          return matAlgo13xDD(...broadcast(x, matrix2(y)), self2);
        })
      };
      if (options.SS) {
        matrixSignatures["SparseMatrix, SparseMatrix"] = typed2.referToSelf((self2) => (x, y) => {
          return options.SS(...broadcast(x, y), self2, false);
        });
      }
      if (options.DS) {
        matrixSignatures["DenseMatrix, SparseMatrix"] = typed2.referToSelf((self2) => (x, y) => {
          return options.DS(...broadcast(x, y), self2, false);
        });
        matrixSignatures["Array, SparseMatrix"] = typed2.referToSelf((self2) => (x, y) => {
          return options.DS(...broadcast(matrix2(x), y), self2, false);
        });
      }
      if (SD) {
        matrixSignatures["SparseMatrix, DenseMatrix"] = typed2.referToSelf((self2) => (x, y) => {
          return SD(...broadcast(y, x), self2, true);
        });
        matrixSignatures["SparseMatrix, Array"] = typed2.referToSelf((self2) => (x, y) => {
          return SD(...broadcast(matrix2(y), x), self2, true);
        });
      }
    }
    var scalar = options.scalar || "any";
    var Ds = options.Ds || options.Ss;
    if (Ds) {
      if (elop) {
        matrixSignatures["DenseMatrix," + scalar] = (x, y) => matAlgo14xDs(x, y, elop, false);
        matrixSignatures[scalar + ", DenseMatrix"] = (x, y) => matAlgo14xDs(y, x, elop, true);
        matrixSignatures["Array," + scalar] = (x, y) => matAlgo14xDs(matrix2(x), y, elop, false).valueOf();
        matrixSignatures[scalar + ", Array"] = (x, y) => matAlgo14xDs(matrix2(y), x, elop, true).valueOf();
      } else {
        matrixSignatures["DenseMatrix," + scalar] = typed2.referToSelf((self2) => (x, y) => {
          return matAlgo14xDs(x, y, self2, false);
        });
        matrixSignatures[scalar + ", DenseMatrix"] = typed2.referToSelf((self2) => (x, y) => {
          return matAlgo14xDs(y, x, self2, true);
        });
        matrixSignatures["Array," + scalar] = typed2.referToSelf((self2) => (x, y) => {
          return matAlgo14xDs(matrix2(x), y, self2, false).valueOf();
        });
        matrixSignatures[scalar + ", Array"] = typed2.referToSelf((self2) => (x, y) => {
          return matAlgo14xDs(matrix2(y), x, self2, true).valueOf();
        });
      }
    }
    var sS = options.sS !== void 0 ? options.sS : options.Ss;
    if (elop) {
      if (options.Ss) {
        matrixSignatures["SparseMatrix," + scalar] = (x, y) => options.Ss(x, y, elop, false);
      }
      if (sS) {
        matrixSignatures[scalar + ", SparseMatrix"] = (x, y) => sS(y, x, elop, true);
      }
    } else {
      if (options.Ss) {
        matrixSignatures["SparseMatrix," + scalar] = typed2.referToSelf((self2) => (x, y) => {
          return options.Ss(x, y, self2, false);
        });
      }
      if (sS) {
        matrixSignatures[scalar + ", SparseMatrix"] = typed2.referToSelf((self2) => (x, y) => {
          return sS(y, x, self2, true);
        });
      }
    }
    if (elop && elop.signatures) {
      extend(matrixSignatures, elop.signatures);
    }
    return matrixSignatures;
  };
});
var name$q = "matAlgo01xDSid";
var dependencies$q = ["typed"];
var createMatAlgo01xDSid = /* @__PURE__ */ factory(name$q, dependencies$q, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return function algorithm1(denseMatrix, sparseMatrix, callback, inverse) {
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype;
    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    if (!bvalues) {
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt = typeof adt === "string" && adt === bdt ? adt : void 0;
    var cf = dt ? typed2.find(callback, [dt, dt]) : callback;
    var i, j;
    var cdata = [];
    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    }
    var x = [];
    var w = [];
    for (j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i = bindex[k2];
        x[i] = inverse ? cf(bvalues[k2], adata[i][j]) : cf(adata[i][j], bvalues[k2]);
        w[i] = mark;
      }
      for (i = 0; i < rows; i++) {
        if (w[i] === mark) {
          cdata[i][j] = x[i];
        } else {
          cdata[i][j] = adata[i][j];
        }
      }
    }
    return denseMatrix.createDenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$p = "matAlgo04xSidSid";
var dependencies$p = ["typed", "equalScalar"];
var createMatAlgo04xSidSid = /* @__PURE__ */ factory(name$p, dependencies$p, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo04xSidSid(a, b, callback) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cvalues = avalues && bvalues ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var xa = avalues && bvalues ? [] : void 0;
    var xb = avalues && bvalues ? [] : void 0;
    var wa = [];
    var wb = [];
    var i, j, k2, k0, k1;
    for (j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      for (k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i = aindex[k2];
        cindex.push(i);
        wa[i] = mark;
        if (xa) {
          xa[i] = avalues[k2];
        }
      }
      for (k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i = bindex[k2];
        if (wa[i] === mark) {
          if (xa) {
            var v = cf(xa[i], bvalues[k2]);
            if (!eq(v, zero)) {
              xa[i] = v;
            } else {
              wa[i] = null;
            }
          }
        } else {
          cindex.push(i);
          wb[i] = mark;
          if (xb) {
            xb[i] = bvalues[k2];
          }
        }
      }
      if (xa && xb) {
        k2 = cptr[j];
        while (k2 < cindex.length) {
          i = cindex[k2];
          if (wa[i] === mark) {
            cvalues[k2] = xa[i];
            k2++;
          } else if (wb[i] === mark) {
            cvalues[k2] = xb[i];
            k2++;
          } else {
            cindex.splice(k2, 1);
          }
        }
      }
    }
    cptr[columns] = cindex.length;
    return a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$o = "matAlgo10xSids";
var dependencies$o = ["typed", "DenseMatrix"];
var createMatAlgo10xSids = /* @__PURE__ */ factory(name$o, dependencies$o, (_ref) => {
  var {
    typed: typed2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return function matAlgo10xSids(s, b, callback, inverse) {
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;
    if (!avalues) {
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      b = typed2.convert(b, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var cdata = [];
    var x = [];
    var w = [];
    for (var j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var r = aindex[k2];
        x[r] = avalues[k2];
        w[r] = mark;
      }
      for (var i = 0; i < rows; i++) {
        if (j === 0) {
          cdata[i] = [];
        }
        if (w[i] === mark) {
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          cdata[i][j] = b;
        }
      }
    }
    return new DenseMatrix2({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$n = "multiplyScalar";
var dependencies$n = ["typed"];
var createMultiplyScalar = /* @__PURE__ */ factory(name$n, dependencies$n, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2("multiplyScalar", {
    "number, number": multiplyNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.mul(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.times(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.mul(y);
    },
    "number | Fraction | BigNumber | Complex, Unit": (x, y) => y.multiply(x),
    "Unit, number | Fraction | BigNumber | Complex | Unit": (x, y) => x.multiply(y)
  });
});
var name$m = "multiply";
var dependencies$m = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"];
var createMultiply = /* @__PURE__ */ factory(name$m, dependencies$m, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    addScalar: addScalar2,
    multiplyScalar: multiplyScalar2,
    equalScalar: equalScalar2,
    dot: dot2
  } = _ref;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  function _validateMatrixDimensions(size1, size2) {
    switch (size1.length) {
      case 1:
        switch (size2.length) {
          case 1:
            if (size1[0] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            }
            break;
          case 2:
            if (size1[0] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + size1[0] + ") must match Matrix rows (" + size2[0] + ")");
            }
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + size2.length + " dimensions)");
        }
        break;
      case 2:
        switch (size2.length) {
          case 1:
            if (size1[1] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + size1[1] + ") must match Vector length (" + size2[0] + ")");
            }
            break;
          case 2:
            if (size1[1] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + size1[1] + ") must match Matrix B rows (" + size2[0] + ")");
            }
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + size2.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + size1.length + " dimensions)");
    }
  }
  function _multiplyVectorVector(a, b, n3) {
    if (n3 === 0) {
      throw new Error("Cannot multiply two empty vectors");
    }
    return dot2(a, b);
  }
  function _multiplyVectorMatrix(a, b) {
    if (b.storage() !== "dense") {
      throw new Error("Support for SparseMatrix not implemented");
    }
    return _multiplyVectorDenseMatrix(a, b);
  }
  function _multiplyVectorDenseMatrix(a, b) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    var alength = asize[0];
    var bcolumns = bsize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var c = [];
    for (var j = 0; j < bcolumns; j++) {
      var sum2 = mf(adata[0], bdata[0][j]);
      for (var i = 1; i < alength; i++) {
        sum2 = af(sum2, mf(adata[i], bdata[i][j]));
      }
      c[j] = sum2;
    }
    return a.createDenseMatrix({
      data: c,
      size: [bcolumns],
      datatype: dt
    });
  }
  var _multiplyMatrixVector = typed2("_multiplyMatrixVector", {
    "DenseMatrix, any": _multiplyDenseMatrixVector,
    "SparseMatrix, any": _multiplySparseMatrixVector
  });
  var _multiplyMatrixMatrix = typed2("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": _multiplyDenseMatrixDenseMatrix,
    "DenseMatrix, SparseMatrix": _multiplyDenseMatrixSparseMatrix,
    "SparseMatrix, DenseMatrix": _multiplySparseMatrixDenseMatrix,
    "SparseMatrix, SparseMatrix": _multiplySparseMatrixSparseMatrix
  });
  function _multiplyDenseMatrixVector(a, b) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b._data;
    var bdt = b._datatype;
    var arows = asize[0];
    var acolumns = asize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var c = [];
    for (var i = 0; i < arows; i++) {
      var row = adata[i];
      var sum2 = mf(row[0], bdata[0]);
      for (var j = 1; j < acolumns; j++) {
        sum2 = af(sum2, mf(row[j], bdata[j]));
      }
      c[i] = sum2;
    }
    return a.createDenseMatrix({
      data: c,
      size: [arows],
      datatype: dt
    });
  }
  function _multiplyDenseMatrixDenseMatrix(a, b) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    var arows = asize[0];
    var acolumns = asize[1];
    var bcolumns = bsize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var c = [];
    for (var i = 0; i < arows; i++) {
      var row = adata[i];
      c[i] = [];
      for (var j = 0; j < bcolumns; j++) {
        var sum2 = mf(row[0], bdata[0][j]);
        for (var x = 1; x < acolumns; x++) {
          sum2 = af(sum2, mf(row[x], bdata[x][j]));
        }
        c[i][j] = sum2;
      }
    }
    return a.createDenseMatrix({
      data: c,
      size: [arows, bcolumns],
      datatype: dt
    });
  }
  function _multiplyDenseMatrixSparseMatrix(a, b) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype;
    if (!bvalues) {
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    }
    var arows = asize[0];
    var bcolumns = bsize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    var eq = equalScalar2;
    var zero = 0;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var c = b.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });
    for (var jb = 0; jb < bcolumns; jb++) {
      cptr[jb] = cindex.length;
      var kb0 = bptr[jb];
      var kb1 = bptr[jb + 1];
      if (kb1 > kb0) {
        var last = 0;
        for (var i = 0; i < arows; i++) {
          var mark = i + 1;
          var cij = void 0;
          for (var kb = kb0; kb < kb1; kb++) {
            var ib = bindex[kb];
            if (last !== mark) {
              cij = mf(adata[i][ib], bvalues[kb]);
              last = mark;
            } else {
              cij = af(cij, mf(adata[i][ib], bvalues[kb]));
            }
          }
          if (last === mark && !eq(cij, zero)) {
            cindex.push(i);
            cvalues.push(cij);
          }
        }
      }
    }
    cptr[bcolumns] = cindex.length;
    return c;
  }
  function _multiplySparseMatrixVector(a, b) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    if (!avalues) {
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    }
    var bdata = b._data;
    var bdt = b._datatype;
    var arows = a._size[0];
    var brows = b._size[0];
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    var eq = equalScalar2;
    var zero = 0;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
    }
    var x = [];
    var w = [];
    cptr[0] = 0;
    for (var ib = 0; ib < brows; ib++) {
      var vbi = bdata[ib];
      if (!eq(vbi, zero)) {
        for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
          var ia = aindex[ka];
          if (!w[ia]) {
            w[ia] = true;
            cindex.push(ia);
            x[ia] = mf(vbi, avalues[ka]);
          } else {
            x[ia] = af(x[ia], mf(vbi, avalues[ka]));
          }
        }
      }
    }
    for (var p1 = cindex.length, p2 = 0; p2 < p1; p2++) {
      var ic = cindex[p2];
      cvalues[p2] = x[ic];
    }
    cptr[1] = cindex.length;
    return a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, 1],
      datatype: dt
    });
  }
  function _multiplySparseMatrixDenseMatrix(a, b) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    if (!avalues) {
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    }
    var bdata = b._data;
    var bdt = b._datatype;
    var arows = a._size[0];
    var brows = b._size[0];
    var bcolumns = b._size[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    var eq = equalScalar2;
    var zero = 0;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var c = a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });
    var x = [];
    var w = [];
    for (var jb = 0; jb < bcolumns; jb++) {
      cptr[jb] = cindex.length;
      var mark = jb + 1;
      for (var ib = 0; ib < brows; ib++) {
        var vbij = bdata[ib][jb];
        if (!eq(vbij, zero)) {
          for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            var ia = aindex[ka];
            if (w[ia] !== mark) {
              w[ia] = mark;
              cindex.push(ia);
              x[ia] = mf(vbij, avalues[ka]);
            } else {
              x[ia] = af(x[ia], mf(vbij, avalues[ka]));
            }
          }
        }
      }
      for (var p0 = cptr[jb], p1 = cindex.length, p2 = p0; p2 < p1; p2++) {
        var ic = cindex[p2];
        cvalues[p2] = x[ic];
      }
    }
    cptr[bcolumns] = cindex.length;
    return c;
  }
  function _multiplySparseMatrixSparseMatrix(a, b) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bdt = b._datatype;
    var arows = a._size[0];
    var bcolumns = b._size[1];
    var values = avalues && bvalues;
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var cvalues = values ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var c = a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });
    var x = values ? [] : void 0;
    var w = [];
    var ka, ka0, ka1, kb, kb0, kb1, ia, ib;
    for (var jb = 0; jb < bcolumns; jb++) {
      cptr[jb] = cindex.length;
      var mark = jb + 1;
      for (kb0 = bptr[jb], kb1 = bptr[jb + 1], kb = kb0; kb < kb1; kb++) {
        ib = bindex[kb];
        if (values) {
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            ia = aindex[ka];
            if (w[ia] !== mark) {
              w[ia] = mark;
              cindex.push(ia);
              x[ia] = mf(bvalues[kb], avalues[ka]);
            } else {
              x[ia] = af(x[ia], mf(bvalues[kb], avalues[ka]));
            }
          }
        } else {
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            ia = aindex[ka];
            if (w[ia] !== mark) {
              w[ia] = mark;
              cindex.push(ia);
            }
          }
        }
      }
      if (values) {
        for (var p0 = cptr[jb], p1 = cindex.length, p2 = p0; p2 < p1; p2++) {
          var ic = cindex[p2];
          cvalues[p2] = x[ic];
        }
      }
    }
    cptr[bcolumns] = cindex.length;
    return c;
  }
  return typed2(name$m, multiplyScalar2, {
    "Array, Array": typed2.referTo("Matrix, Matrix", (selfMM) => (x, y) => {
      _validateMatrixDimensions(arraySize(x), arraySize(y));
      var m2 = selfMM(matrix2(x), matrix2(y));
      return isMatrix(m2) ? m2.valueOf() : m2;
    }),
    "Matrix, Matrix": function MatrixMatrix(x, y) {
      var xsize = x.size();
      var ysize = y.size();
      _validateMatrixDimensions(xsize, ysize);
      if (xsize.length === 1) {
        if (ysize.length === 1) {
          return _multiplyVectorVector(x, y, xsize[0]);
        }
        return _multiplyVectorMatrix(x, y);
      }
      if (ysize.length === 1) {
        return _multiplyMatrixVector(x, y);
      }
      return _multiplyMatrixMatrix(x, y);
    },
    "Matrix, Array": typed2.referTo("Matrix,Matrix", (selfMM) => (x, y) => selfMM(x, matrix2(y))),
    "Array, Matrix": typed2.referToSelf((self2) => (x, y) => {
      return self2(matrix2(x, y.storage()), y);
    }),
    "SparseMatrix, any": function SparseMatrixAny(x, y) {
      return matAlgo11xS0s(x, y, multiplyScalar2, false);
    },
    "DenseMatrix, any": function DenseMatrixAny(x, y) {
      return matAlgo14xDs(x, y, multiplyScalar2, false);
    },
    "any, SparseMatrix": function anySparseMatrix(x, y) {
      return matAlgo11xS0s(y, x, multiplyScalar2, true);
    },
    "any, DenseMatrix": function anyDenseMatrix(x, y) {
      return matAlgo14xDs(y, x, multiplyScalar2, true);
    },
    "Array, any": function ArrayAny(x, y) {
      return matAlgo14xDs(matrix2(x), y, multiplyScalar2, false).valueOf();
    },
    "any, Array": function anyArray(x, y) {
      return matAlgo14xDs(matrix2(y), x, multiplyScalar2, true).valueOf();
    },
    "any, any": multiplyScalar2,
    "any, any, ...any": typed2.referToSelf((self2) => (x, y, rest) => {
      var result = self2(x, y);
      for (var i = 0; i < rest.length; i++) {
        result = self2(result, rest[i]);
      }
      return result;
    })
  });
});
var name$l = "matAlgo07xSSf";
var dependencies$l = ["typed", "DenseMatrix"];
var createMatAlgo07xSSf = /* @__PURE__ */ factory(name$l, dependencies$l, (_ref) => {
  var {
    typed: typed2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return function matAlgo07xSSf(a, b, callback) {
    var asize = a._size;
    var adt = a._datatype;
    var bsize = b._size;
    var bdt = b._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      zero = typed2.convert(0, dt);
      cf = typed2.find(callback, [dt, dt]);
    }
    var i, j;
    var cdata = [];
    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    }
    var xa = [];
    var xb = [];
    var wa = [];
    var wb = [];
    for (j = 0; j < columns; j++) {
      var mark = j + 1;
      _scatter(a, j, wa, xa, mark);
      _scatter(b, j, wb, xb, mark);
      for (i = 0; i < rows; i++) {
        var va = wa[i] === mark ? xa[i] : zero;
        var vb = wb[i] === mark ? xb[i] : zero;
        cdata[i][j] = cf(va, vb);
      }
    }
    return new DenseMatrix2({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
  function _scatter(m2, j, w, x, mark) {
    var values = m2._values;
    var index = m2._index;
    var ptr = m2._ptr;
    for (var k2 = ptr[j], k1 = ptr[j + 1]; k2 < k1; k2++) {
      var i = index[k2];
      w[i] = mark;
      x[i] = values[k2];
    }
  }
});
var name$k = "conj";
var dependencies$k = ["typed"];
var createConj = /* @__PURE__ */ factory(name$k, dependencies$k, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$k, {
    "number | BigNumber | Fraction": (x) => x,
    Complex: (x) => x.conjugate(),
    "Array | Matrix": typed2.referToSelf((self2) => (x) => deepMap(x, self2))
  });
});
var name$j = "concat";
var dependencies$j = ["typed", "matrix", "isInteger"];
var createConcat = /* @__PURE__ */ factory(name$j, dependencies$j, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    isInteger: isInteger2
  } = _ref;
  return typed2(name$j, {
    "...Array | Matrix | number | BigNumber": function ArrayMatrixNumberBigNumber(args) {
      var i;
      var len = args.length;
      var dim = -1;
      var prevDim;
      var asMatrix = false;
      var matrices = [];
      for (i = 0; i < len; i++) {
        var arg = args[i];
        if (isMatrix(arg)) {
          asMatrix = true;
        }
        if (isNumber(arg) || isBigNumber(arg)) {
          if (i !== len - 1) {
            throw new Error("Dimension must be specified as last argument");
          }
          prevDim = dim;
          dim = arg.valueOf();
          if (!isInteger2(dim)) {
            throw new TypeError("Integer number expected for dimension");
          }
          if (dim < 0 || i > 0 && dim > prevDim) {
            throw new IndexError(dim, prevDim + 1);
          }
        } else {
          var m2 = clone$2(arg).valueOf();
          var size2 = arraySize(m2);
          matrices[i] = m2;
          prevDim = dim;
          dim = size2.length - 1;
          if (i > 0 && dim !== prevDim) {
            throw new DimensionError(prevDim + 1, dim + 1);
          }
        }
      }
      if (matrices.length === 0) {
        throw new SyntaxError("At least one matrix expected");
      }
      var res = matrices.shift();
      while (matrices.length) {
        res = concat$1(res, matrices.shift(), dim);
      }
      return asMatrix ? matrix2(res) : res;
    },
    "...string": function string(args) {
      return args.join("");
    }
  });
});
var name$i = "identity";
var dependencies$i = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"];
var createIdentity = /* @__PURE__ */ factory(name$i, dependencies$i, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    matrix: matrix2,
    BigNumber: BigNumber2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  return typed2(name$i, {
    "": function _() {
      return config3.matrix === "Matrix" ? matrix2([]) : [];
    },
    string: function string(format2) {
      return matrix2(format2);
    },
    "number | BigNumber": function numberBigNumber(rows) {
      return _identity(rows, rows, config3.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, string": function numberBigNumberString(rows, format2) {
      return _identity(rows, rows, format2);
    },
    "number | BigNumber, number | BigNumber": function numberBigNumberNumberBigNumber(rows, cols) {
      return _identity(rows, cols, config3.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, number | BigNumber, string": function numberBigNumberNumberBigNumberString(rows, cols, format2) {
      return _identity(rows, cols, format2);
    },
    Array: function Array2(size2) {
      return _identityVector(size2);
    },
    "Array, string": function ArrayString(size2, format2) {
      return _identityVector(size2, format2);
    },
    Matrix: function Matrix2(size2) {
      return _identityVector(size2.valueOf(), size2.storage());
    },
    "Matrix, string": function MatrixString(size2, format2) {
      return _identityVector(size2.valueOf(), format2);
    }
  });
  function _identityVector(size2, format2) {
    switch (size2.length) {
      case 0:
        return format2 ? matrix2(format2) : [];
      case 1:
        return _identity(size2[0], size2[0], format2);
      case 2:
        return _identity(size2[0], size2[1], format2);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function _identity(rows, cols, format2) {
    var Big = isBigNumber(rows) || isBigNumber(cols) ? BigNumber2 : null;
    if (isBigNumber(rows))
      rows = rows.toNumber();
    if (isBigNumber(cols))
      cols = cols.toNumber();
    if (!isInteger$1(rows) || rows < 1) {
      throw new Error("Parameters in function identity must be positive integers");
    }
    if (!isInteger$1(cols) || cols < 1) {
      throw new Error("Parameters in function identity must be positive integers");
    }
    var one = Big ? new BigNumber2(1) : 1;
    var defaultValue = Big ? new Big(0) : 0;
    var size2 = [rows, cols];
    if (format2) {
      if (format2 === "sparse") {
        return SparseMatrix2.diagonal(size2, one, 0, defaultValue);
      }
      if (format2 === "dense") {
        return DenseMatrix2.diagonal(size2, one, 0, defaultValue);
      }
      throw new TypeError('Unknown matrix type "'.concat(format2, '"'));
    }
    var res = resize([], size2, defaultValue);
    var minimum = rows < cols ? rows : cols;
    for (var d = 0; d < minimum; d++) {
      res[d][d] = one;
    }
    return res;
  }
});
function noBignumber() {
  throw new Error('No "bignumber" implementation available');
}
function noFraction() {
  throw new Error('No "fraction" implementation available');
}
function noMatrix() {
  throw new Error('No "matrix" implementation available');
}
var name$h = "size";
var dependencies$h = ["typed", "config", "?matrix"];
var createSize = /* @__PURE__ */ factory(name$h, dependencies$h, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    matrix: matrix2
  } = _ref;
  return typed2(name$h, {
    Matrix: function Matrix2(x) {
      return x.create(x.size());
    },
    Array: arraySize,
    string: function string(x) {
      return config3.matrix === "Array" ? [x.length] : matrix2([x.length]);
    },
    "number | Complex | BigNumber | Unit | boolean | null": function numberComplexBigNumberUnitBooleanNull(x) {
      return config3.matrix === "Array" ? [] : matrix2 ? matrix2([]) : noMatrix();
    }
  });
});
var name$g = "mode";
var dependencies$g = ["typed", "isNaN", "isNumeric"];
var createMode = /* @__PURE__ */ factory(name$g, dependencies$g, (_ref) => {
  var {
    typed: typed2,
    isNaN: isNaN2,
    isNumeric: isNumeric2
  } = _ref;
  return typed2(name$g, {
    "Array | Matrix": _mode,
    "...": function _(args) {
      return _mode(args);
    }
  });
  function _mode(values) {
    values = flatten(values.valueOf());
    var num = values.length;
    if (num === 0) {
      throw new Error("Cannot calculate mode of an empty array");
    }
    var count = {};
    var mode2 = [];
    var max2 = 0;
    for (var i = 0; i < values.length; i++) {
      var value = values[i];
      if (isNumeric2(value) && isNaN2(value)) {
        throw new Error("Cannot calculate mode of an array containing NaN values");
      }
      if (!(value in count)) {
        count[value] = 0;
      }
      count[value]++;
      if (count[value] === max2) {
        mode2.push(value);
      } else if (count[value] > max2) {
        max2 = count[value];
        mode2 = [value];
      }
    }
    return mode2;
  }
});
function improveErrorMessage(err, fnName, value) {
  var details;
  if (String(err).indexOf("Unexpected type") !== -1) {
    details = arguments.length > 2 ? " (type: " + typeOf(value) + ", value: " + JSON.stringify(value) + ")" : " (type: " + err.data.actual + ")";
    return new TypeError("Cannot calculate " + fnName + ", unexpected type of argument" + details);
  }
  if (String(err).indexOf("complex numbers") !== -1) {
    details = arguments.length > 2 ? " (type: " + typeOf(value) + ", value: " + JSON.stringify(value) + ")" : "";
    return new TypeError("Cannot calculate " + fnName + ", no ordering relation is defined for complex numbers" + details);
  }
  return err;
}
var name$f = "numeric";
var dependencies$f = ["number", "?bignumber", "?fraction"];
var createNumeric = /* @__PURE__ */ factory(name$f, dependencies$f, (_ref) => {
  var {
    number: _number,
    bignumber: bignumber2,
    fraction: fraction2
  } = _ref;
  var validInputTypes = {
    string: true,
    number: true,
    BigNumber: true,
    Fraction: true
  };
  var validOutputTypes = {
    number: (x) => _number(x),
    BigNumber: bignumber2 ? (x) => bignumber2(x) : noBignumber,
    Fraction: fraction2 ? (x) => fraction2(x) : noFraction
  };
  return function numeric2(value) {
    var outputType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number";
    var check = arguments.length > 2 ? arguments[2] : void 0;
    if (check !== void 0) {
      throw new SyntaxError("numeric() takes one or two arguments");
    }
    var inputType = typeOf(value);
    if (!(inputType in validInputTypes)) {
      throw new TypeError("Cannot convert " + value + ' of type "' + inputType + '"; valid input types are ' + Object.keys(validInputTypes).join(", "));
    }
    if (!(outputType in validOutputTypes)) {
      throw new TypeError("Cannot convert " + value + ' to type "' + outputType + '"; valid output types are ' + Object.keys(validOutputTypes).join(", "));
    }
    if (outputType === inputType) {
      return value;
    } else {
      return validOutputTypes[outputType](value);
    }
  };
});
var name$e = "divideScalar";
var dependencies$e = ["typed", "numeric"];
var createDivideScalar = /* @__PURE__ */ factory(name$e, dependencies$e, (_ref) => {
  var {
    typed: typed2,
    numeric: numeric2
  } = _ref;
  return typed2(name$e, {
    "number, number": function numberNumber(x, y) {
      return x / y;
    },
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.div(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.div(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.div(y);
    },
    "Unit, number | Complex | Fraction | BigNumber | Unit": (x, y) => x.divide(y),
    "number | Fraction | Complex | BigNumber, Unit": (x, y) => y.divideInto(x)
  });
});
var name$d = "compare";
var dependencies$d = ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix", "concat"];
var createCompare = /* @__PURE__ */ factory(name$d, dependencies$d, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    equalScalar: equalScalar2,
    matrix: matrix2,
    BigNumber: BigNumber2,
    Fraction: Fraction2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var compareUnits = createCompareUnits({
    typed: typed2
  });
  return typed2(name$d, createCompareNumber({
    typed: typed2,
    config: config3
  }), {
    "boolean, boolean": function booleanBoolean(x, y) {
      return x === y ? 0 : x > y ? 1 : -1;
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return nearlyEqual(x, y, config3.epsilon) ? new BigNumber2(0) : new BigNumber2(x.cmp(y));
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return new Fraction2(x.compare(y));
    },
    "Complex, Complex": function ComplexComplex() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createCompareNumber = /* @__PURE__ */ factory(name$d, ["typed", "config"], (_ref2) => {
  var {
    typed: typed2,
    config: config3
  } = _ref2;
  return typed2(name$d, {
    "number, number": function numberNumber(x, y) {
      return nearlyEqual$1(x, y, config3.epsilon) ? 0 : x > y ? 1 : -1;
    }
  });
});
var name$c = "smaller";
var dependencies$c = ["typed", "config", "matrix", "DenseMatrix", "concat"];
var createSmaller = /* @__PURE__ */ factory(name$c, dependencies$c, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    matrix: matrix2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var compareUnits = createCompareUnits({
    typed: typed2
  });
  return typed2(name$c, createSmallerNumber({
    typed: typed2,
    config: config3
  }), {
    "boolean, boolean": (x, y) => x < y,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.lt(y) && !nearlyEqual(x, y, config3.epsilon);
    },
    "Fraction, Fraction": (x, y) => x.compare(y) === -1,
    "Complex, Complex": function ComplexComplex(x, y) {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createSmallerNumber = /* @__PURE__ */ factory(name$c, ["typed", "config"], (_ref2) => {
  var {
    typed: typed2,
    config: config3
  } = _ref2;
  return typed2(name$c, {
    "number, number": function numberNumber(x, y) {
      return x < y && !nearlyEqual$1(x, y, config3.epsilon);
    }
  });
});
var name$b = "larger";
var dependencies$b = ["typed", "config", "matrix", "DenseMatrix", "concat"];
var createLarger = /* @__PURE__ */ factory(name$b, dependencies$b, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    matrix: matrix2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var compareUnits = createCompareUnits({
    typed: typed2
  });
  return typed2(name$b, createLargerNumber({
    typed: typed2,
    config: config3
  }), {
    "boolean, boolean": (x, y) => x > y,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.gt(y) && !nearlyEqual(x, y, config3.epsilon);
    },
    "Fraction, Fraction": (x, y) => x.compare(y) === 1,
    "Complex, Complex": function ComplexComplex() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createLargerNumber = /* @__PURE__ */ factory(name$b, ["typed", "config"], (_ref2) => {
  var {
    typed: typed2,
    config: config3
  } = _ref2;
  return typed2(name$b, {
    "number, number": function numberNumber(x, y) {
      return x > y && !nearlyEqual$1(x, y, config3.epsilon);
    }
  });
});
var name$a = "partitionSelect";
var dependencies$a = ["typed", "isNumeric", "isNaN", "compare"];
var createPartitionSelect = /* @__PURE__ */ factory(name$a, dependencies$a, (_ref) => {
  var {
    typed: typed2,
    isNumeric: isNumeric2,
    isNaN: isNaN2,
    compare: compare2
  } = _ref;
  var asc = compare2;
  var desc = (a, b) => -compare2(a, b);
  return typed2(name$a, {
    "Array | Matrix, number": function ArrayMatrixNumber(x, k2) {
      return _partitionSelect(x, k2, asc);
    },
    "Array | Matrix, number, string": function ArrayMatrixNumberString(x, k2, compare3) {
      if (compare3 === "asc") {
        return _partitionSelect(x, k2, asc);
      } else if (compare3 === "desc") {
        return _partitionSelect(x, k2, desc);
      } else {
        throw new Error('Compare string must be "asc" or "desc"');
      }
    },
    "Array | Matrix, number, function": _partitionSelect
  });
  function _partitionSelect(x, k2, compare3) {
    if (!isInteger$1(k2) || k2 < 0) {
      throw new Error("k must be a non-negative integer");
    }
    if (isMatrix(x)) {
      var size2 = x.size();
      if (size2.length > 1) {
        throw new Error("Only one dimensional matrices supported");
      }
      return quickSelect(x.valueOf(), k2, compare3);
    }
    if (Array.isArray(x)) {
      return quickSelect(x, k2, compare3);
    }
  }
  function quickSelect(arr, k2, compare3) {
    if (k2 >= arr.length) {
      throw new Error("k out of bounds");
    }
    for (var i = 0; i < arr.length; i++) {
      if (isNumeric2(arr[i]) && isNaN2(arr[i])) {
        return arr[i];
      }
    }
    var from = 0;
    var to = arr.length - 1;
    while (from < to) {
      var r = from;
      var w = to;
      var pivot = arr[Math.floor(Math.random() * (to - from + 1)) + from];
      while (r < w) {
        if (compare3(arr[r], pivot) >= 0) {
          var tmp = arr[w];
          arr[w] = arr[r];
          arr[r] = tmp;
          --w;
        } else {
          ++r;
        }
      }
      if (compare3(arr[r], pivot) > 0) {
        --r;
      }
      if (k2 <= r) {
        to = r;
      } else {
        from = r + 1;
      }
    }
    return arr[k2];
  }
});
var name$9 = "max";
var dependencies$9 = ["typed", "config", "numeric", "larger"];
var createMax = /* @__PURE__ */ factory(name$9, dependencies$9, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    numeric: numeric2,
    larger: larger2
  } = _ref;
  return typed2(name$9, {
    "Array | Matrix": _max,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      return reduce(array, dim.valueOf(), _largest);
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function max");
      }
      return _max(args);
    }
  });
  function _largest(x, y) {
    try {
      return larger2(x, y) ? x : y;
    } catch (err) {
      throw improveErrorMessage(err, "max", y);
    }
  }
  function _max(array) {
    var res;
    deepForEach(array, function(value) {
      try {
        if (isNaN(value) && typeof value === "number") {
          res = NaN;
        } else if (res === void 0 || larger2(value, res)) {
          res = value;
        }
      } catch (err) {
        throw improveErrorMessage(err, "max", value);
      }
    });
    if (res === void 0) {
      throw new Error("Cannot calculate max of an empty array");
    }
    if (typeof res === "string") {
      res = numeric2(res, config3.number);
    }
    return res;
  }
});
var name$8 = "min";
var dependencies$8 = ["typed", "config", "numeric", "smaller"];
var createMin = /* @__PURE__ */ factory(name$8, dependencies$8, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    numeric: numeric2,
    smaller: smaller2
  } = _ref;
  return typed2(name$8, {
    "Array | Matrix": _min,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      return reduce(array, dim.valueOf(), _smallest);
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function min");
      }
      return _min(args);
    }
  });
  function _smallest(x, y) {
    try {
      return smaller2(x, y) ? x : y;
    } catch (err) {
      throw improveErrorMessage(err, "min", y);
    }
  }
  function _min(array) {
    var min2;
    deepForEach(array, function(value) {
      try {
        if (isNaN(value) && typeof value === "number") {
          min2 = NaN;
        } else if (min2 === void 0 || smaller2(value, min2)) {
          min2 = value;
        }
      } catch (err) {
        throw improveErrorMessage(err, "min", value);
      }
    });
    if (min2 === void 0) {
      throw new Error("Cannot calculate min of an empty array");
    }
    if (typeof min2 === "string") {
      min2 = numeric2(min2, config3.number);
    }
    return min2;
  }
});
var name$7 = "add";
var dependencies$7 = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"];
var createAdd = /* @__PURE__ */ factory(name$7, dependencies$7, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    addScalar: addScalar2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo04xSidSid = createMatAlgo04xSidSid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$7, {
    "any, any": addScalar2,
    "any, any, ...any": typed2.referToSelf((self2) => (x, y, rest) => {
      var result = self2(x, y);
      for (var i = 0; i < rest.length; i++) {
        result = self2(result, rest[i]);
      }
      return result;
    })
  }, matrixAlgorithmSuite({
    elop: addScalar2,
    DS: matAlgo01xDSid,
    SS: matAlgo04xSidSid,
    Ss: matAlgo10xSids
  }));
});
var name$6 = "dot";
var dependencies$6 = ["typed", "addScalar", "multiplyScalar", "conj", "size"];
var createDot = /* @__PURE__ */ factory(name$6, dependencies$6, (_ref) => {
  var {
    typed: typed2,
    addScalar: addScalar2,
    multiplyScalar: multiplyScalar2,
    conj: conj2,
    size: size2
  } = _ref;
  return typed2(name$6, {
    "Array | DenseMatrix, Array | DenseMatrix": _denseDot,
    "SparseMatrix, SparseMatrix": _sparseDot
  });
  function _validateDim(x, y) {
    var xSize = _size(x);
    var ySize = _size(y);
    var xLen, yLen;
    if (xSize.length === 1) {
      xLen = xSize[0];
    } else if (xSize.length === 2 && xSize[1] === 1) {
      xLen = xSize[0];
    } else {
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + xSize.join(", ") + ")");
    }
    if (ySize.length === 1) {
      yLen = ySize[0];
    } else if (ySize.length === 2 && ySize[1] === 1) {
      yLen = ySize[0];
    } else {
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + ySize.join(", ") + ")");
    }
    if (xLen !== yLen)
      throw new RangeError("Vectors must have equal length (" + xLen + " != " + yLen + ")");
    if (xLen === 0)
      throw new RangeError("Cannot calculate the dot product of empty vectors");
    return xLen;
  }
  function _denseDot(a, b) {
    var N = _validateDim(a, b);
    var adata = isMatrix(a) ? a._data : a;
    var adt = isMatrix(a) ? a._datatype : void 0;
    var bdata = isMatrix(b) ? b._data : b;
    var bdt = isMatrix(b) ? b._datatype : void 0;
    var aIsColumn = _size(a).length === 2;
    var bIsColumn = _size(b).length === 2;
    var add2 = addScalar2;
    var mul2 = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      var dt = adt;
      add2 = typed2.find(addScalar2, [dt, dt]);
      mul2 = typed2.find(multiplyScalar2, [dt, dt]);
    }
    if (!aIsColumn && !bIsColumn) {
      var c = mul2(conj2(adata[0]), bdata[0]);
      for (var i = 1; i < N; i++) {
        c = add2(c, mul2(conj2(adata[i]), bdata[i]));
      }
      return c;
    }
    if (!aIsColumn && bIsColumn) {
      var _c = mul2(conj2(adata[0]), bdata[0][0]);
      for (var _i = 1; _i < N; _i++) {
        _c = add2(_c, mul2(conj2(adata[_i]), bdata[_i][0]));
      }
      return _c;
    }
    if (aIsColumn && !bIsColumn) {
      var _c2 = mul2(conj2(adata[0][0]), bdata[0]);
      for (var _i2 = 1; _i2 < N; _i2++) {
        _c2 = add2(_c2, mul2(conj2(adata[_i2][0]), bdata[_i2]));
      }
      return _c2;
    }
    if (aIsColumn && bIsColumn) {
      var _c3 = mul2(conj2(adata[0][0]), bdata[0][0]);
      for (var _i3 = 1; _i3 < N; _i3++) {
        _c3 = add2(_c3, mul2(conj2(adata[_i3][0]), bdata[_i3][0]));
      }
      return _c3;
    }
  }
  function _sparseDot(x, y) {
    _validateDim(x, y);
    var xindex = x._index;
    var xvalues = x._values;
    var yindex = y._index;
    var yvalues = y._values;
    var c = 0;
    var add2 = addScalar2;
    var mul2 = multiplyScalar2;
    var i = 0;
    var j = 0;
    while (i < xindex.length && j < yindex.length) {
      var I = xindex[i];
      var J = yindex[j];
      if (I < J) {
        i++;
        continue;
      }
      if (I > J) {
        j++;
        continue;
      }
      if (I === J) {
        c = add2(c, mul2(xvalues[i], yvalues[j]));
        i++;
        j++;
      }
    }
    return c;
  }
  function _size(x) {
    return isMatrix(x) ? x.size() : size2(x);
  }
});
var name$5 = "det";
var dependencies$5 = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"];
var createDet = /* @__PURE__ */ factory(name$5, dependencies$5, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    subtractScalar: subtractScalar2,
    multiply: multiply2,
    divideScalar: divideScalar2,
    isZero: isZero2,
    unaryMinus: unaryMinus2
  } = _ref;
  return typed2(name$5, {
    any: function any(x) {
      return clone$2(x);
    },
    "Array | Matrix": function det2(x) {
      var size2;
      if (isMatrix(x)) {
        size2 = x.size();
      } else if (Array.isArray(x)) {
        x = matrix2(x);
        size2 = x.size();
      } else {
        size2 = [];
      }
      switch (size2.length) {
        case 0:
          return clone$2(x);
        case 1:
          if (size2[0] === 1) {
            return clone$2(x.valueOf()[0]);
          }
          if (size2[0] === 0) {
            return 1;
          } else {
            throw new RangeError("Matrix must be square (size: " + format(size2) + ")");
          }
        case 2: {
          var rows = size2[0];
          var cols = size2[1];
          if (rows === cols) {
            return _det(x.clone().valueOf(), rows);
          }
          if (cols === 0) {
            return 1;
          } else {
            throw new RangeError("Matrix must be square (size: " + format(size2) + ")");
          }
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + format(size2) + ")");
      }
    }
  });
  function _det(matrix3, rows, cols) {
    if (rows === 1) {
      return clone$2(matrix3[0][0]);
    } else if (rows === 2) {
      return subtractScalar2(multiply2(matrix3[0][0], matrix3[1][1]), multiply2(matrix3[1][0], matrix3[0][1]));
    } else {
      var negated = false;
      var rowIndices = new Array(rows).fill(0).map((_, i2) => i2);
      for (var k2 = 0; k2 < rows; k2++) {
        var k_ = rowIndices[k2];
        if (isZero2(matrix3[k_][k2])) {
          var _k = void 0;
          for (_k = k2 + 1; _k < rows; _k++) {
            if (!isZero2(matrix3[rowIndices[_k]][k2])) {
              k_ = rowIndices[_k];
              rowIndices[_k] = rowIndices[k2];
              rowIndices[k2] = k_;
              negated = !negated;
              break;
            }
          }
          if (_k === rows)
            return matrix3[k_][k2];
        }
        var piv = matrix3[k_][k2];
        var piv_ = k2 === 0 ? 1 : matrix3[rowIndices[k2 - 1]][k2 - 1];
        for (var i = k2 + 1; i < rows; i++) {
          var i_ = rowIndices[i];
          for (var j = k2 + 1; j < rows; j++) {
            matrix3[i_][j] = divideScalar2(subtractScalar2(multiply2(matrix3[i_][j], piv), multiply2(matrix3[i_][k2], matrix3[k_][j])), piv_);
          }
        }
      }
      var det2 = matrix3[rowIndices[rows - 1]][rows - 1];
      return negated ? unaryMinus2(det2) : det2;
    }
  }
});
var name$4 = "inv";
var dependencies$4 = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"];
var createInv = /* @__PURE__ */ factory(name$4, dependencies$4, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divideScalar: divideScalar2,
    addScalar: addScalar2,
    multiply: multiply2,
    unaryMinus: unaryMinus2,
    det: det2,
    identity: identity2,
    abs: abs2
  } = _ref;
  return typed2(name$4, {
    "Array | Matrix": function ArrayMatrix(x) {
      var size2 = isMatrix(x) ? x.size() : arraySize(x);
      switch (size2.length) {
        case 1:
          if (size2[0] === 1) {
            if (isMatrix(x)) {
              return matrix2([divideScalar2(1, x.valueOf()[0])]);
            } else {
              return [divideScalar2(1, x[0])];
            }
          } else {
            throw new RangeError("Matrix must be square (size: " + format(size2) + ")");
          }
        case 2: {
          var rows = size2[0];
          var cols = size2[1];
          if (rows === cols) {
            if (isMatrix(x)) {
              return matrix2(_inv(x.valueOf(), rows, cols), x.storage());
            } else {
              return _inv(x, rows, cols);
            }
          } else {
            throw new RangeError("Matrix must be square (size: " + format(size2) + ")");
          }
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + format(size2) + ")");
      }
    },
    any: function any(x) {
      return divideScalar2(1, x);
    }
  });
  function _inv(mat, rows, cols) {
    var r, s, f2, value, temp;
    if (rows === 1) {
      value = mat[0][0];
      if (value === 0) {
        throw Error("Cannot calculate inverse, determinant is zero");
      }
      return [[divideScalar2(1, value)]];
    } else if (rows === 2) {
      var d = det2(mat);
      if (d === 0) {
        throw Error("Cannot calculate inverse, determinant is zero");
      }
      return [[divideScalar2(mat[1][1], d), divideScalar2(unaryMinus2(mat[0][1]), d)], [divideScalar2(unaryMinus2(mat[1][0]), d), divideScalar2(mat[0][0], d)]];
    } else {
      var A = mat.concat();
      for (r = 0; r < rows; r++) {
        A[r] = A[r].concat();
      }
      var B = identity2(rows).valueOf();
      for (var c = 0; c < cols; c++) {
        var ABig = abs2(A[c][c]);
        var rBig = c;
        r = c + 1;
        while (r < rows) {
          if (abs2(A[r][c]) > ABig) {
            ABig = abs2(A[r][c]);
            rBig = r;
          }
          r++;
        }
        if (ABig === 0) {
          throw Error("Cannot calculate inverse, determinant is zero");
        }
        r = rBig;
        if (r !== c) {
          temp = A[c];
          A[c] = A[r];
          A[r] = temp;
          temp = B[c];
          B[c] = B[r];
          B[r] = temp;
        }
        var Ac = A[c];
        var Bc = B[c];
        for (r = 0; r < rows; r++) {
          var Ar = A[r];
          var Br = B[r];
          if (r !== c) {
            if (Ar[c] !== 0) {
              f2 = divideScalar2(unaryMinus2(Ar[c]), Ac[c]);
              for (s = c; s < cols; s++) {
                Ar[s] = addScalar2(Ar[s], multiply2(f2, Ac[s]));
              }
              for (s = 0; s < cols; s++) {
                Br[s] = addScalar2(Br[s], multiply2(f2, Bc[s]));
              }
            }
          } else {
            f2 = Ac[c];
            for (s = c; s < cols; s++) {
              Ar[s] = divideScalar2(Ar[s], f2);
            }
            for (s = 0; s < cols; s++) {
              Br[s] = divideScalar2(Br[s], f2);
            }
          }
        }
      }
      return B;
    }
  }
});
var name$3 = "divide";
var dependencies$3 = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"];
var createDivide = /* @__PURE__ */ factory(name$3, dependencies$3, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    multiply: multiply2,
    equalScalar: equalScalar2,
    divideScalar: divideScalar2,
    inv: inv2
  } = _ref;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  return typed2("divide", extend({
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(x, y) {
      return multiply2(x, inv2(y));
    },
    "DenseMatrix, any": function DenseMatrixAny(x, y) {
      return matAlgo14xDs(x, y, divideScalar2, false);
    },
    "SparseMatrix, any": function SparseMatrixAny(x, y) {
      return matAlgo11xS0s(x, y, divideScalar2, false);
    },
    "Array, any": function ArrayAny(x, y) {
      return matAlgo14xDs(matrix2(x), y, divideScalar2, false).valueOf();
    },
    "any, Array | Matrix": function anyArrayMatrix(x, y) {
      return multiply2(x, inv2(y));
    }
  }, divideScalar2.signatures));
});
var name$2 = "sum";
var dependencies$2 = ["typed", "config", "add", "numeric"];
var createSum = /* @__PURE__ */ factory(name$2, dependencies$2, (_ref) => {
  var {
    typed: typed2,
    config: config3,
    add: add2,
    numeric: numeric2
  } = _ref;
  return typed2(name$2, {
    "Array | Matrix": _sum,
    "Array | Matrix, number | BigNumber": _nsumDim,
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function sum");
      }
      return _sum(args);
    }
  });
  function _sum(array) {
    var sum2;
    deepForEach(array, function(value) {
      try {
        sum2 = sum2 === void 0 ? value : add2(sum2, value);
      } catch (err) {
        throw improveErrorMessage(err, "sum", value);
      }
    });
    if (sum2 === void 0) {
      sum2 = numeric2(0, config3.number);
    }
    if (typeof sum2 === "string") {
      sum2 = numeric2(sum2, config3.number);
    }
    return sum2;
  }
  function _nsumDim(array, dim) {
    try {
      var sum2 = reduce(array, dim, add2);
      return sum2;
    } catch (err) {
      throw improveErrorMessage(err, "sum");
    }
  }
});
var name$1 = "mean";
var dependencies$1 = ["typed", "add", "divide"];
var createMean = /* @__PURE__ */ factory(name$1, dependencies$1, (_ref) => {
  var {
    typed: typed2,
    add: add2,
    divide: divide2
  } = _ref;
  return typed2(name$1, {
    "Array | Matrix": _mean,
    "Array | Matrix, number | BigNumber": _nmeanDim,
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function mean");
      }
      return _mean(args);
    }
  });
  function _nmeanDim(array, dim) {
    try {
      var sum2 = reduce(array, dim, add2);
      var s = Array.isArray(array) ? arraySize(array) : array.size();
      return divide2(sum2, s[dim]);
    } catch (err) {
      throw improveErrorMessage(err, "mean");
    }
  }
  function _mean(array) {
    var sum2;
    var num = 0;
    deepForEach(array, function(value) {
      try {
        sum2 = sum2 === void 0 ? value : add2(sum2, value);
        num++;
      } catch (err) {
        throw improveErrorMessage(err, "mean", value);
      }
    });
    if (num === 0) {
      throw new Error("Cannot calculate the mean of an empty array");
    }
    return divide2(sum2, num);
  }
});
var name = "median";
var dependencies = ["typed", "add", "divide", "compare", "partitionSelect"];
var createMedian = /* @__PURE__ */ factory(name, dependencies, (_ref) => {
  var {
    typed: typed2,
    add: add2,
    divide: divide2,
    compare: compare2,
    partitionSelect: partitionSelect2
  } = _ref;
  function _median(array) {
    try {
      array = flatten(array.valueOf());
      var num = array.length;
      if (num === 0) {
        throw new Error("Cannot calculate median of an empty array");
      }
      if (num % 2 === 0) {
        var mid = num / 2 - 1;
        var right = partitionSelect2(array, mid + 1);
        var left = array[mid];
        for (var i = 0; i < mid; ++i) {
          if (compare2(array[i], left) > 0) {
            left = array[i];
          }
        }
        return middle2(left, right);
      } else {
        var m2 = partitionSelect2(array, (num - 1) / 2);
        return middle(m2);
      }
    } catch (err) {
      throw improveErrorMessage(err, "median");
    }
  }
  var middle = typed2({
    "number | BigNumber | Complex | Unit": function numberBigNumberComplexUnit(value) {
      return value;
    }
  });
  var middle2 = typed2({
    "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function numberBigNumberComplexUnitNumberBigNumberComplexUnit(left, right) {
      return divide2(add2(left, right), 2);
    }
  });
  return typed2(name, {
    "Array | Matrix": _median,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      throw new Error("median(A, dim) is not yet supported");
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function median");
      }
      return _median(args);
    }
  });
});
var BigNumber = /* @__PURE__ */ createBigNumberClass({
  config: config$1
});
var Complex = /* @__PURE__ */ createComplexClass({});
var Fraction = /* @__PURE__ */ createFractionClass({});
var Matrix = /* @__PURE__ */ createMatrixClass({});
var DenseMatrix = /* @__PURE__ */ createDenseMatrixClass({
  Matrix
});
var typed = /* @__PURE__ */ createTyped({
  BigNumber,
  Complex,
  DenseMatrix,
  Fraction
});
var abs = /* @__PURE__ */ createAbs({
  typed
});
var addScalar = /* @__PURE__ */ createAddScalar({
  typed
});
var bignumber = /* @__PURE__ */ createBignumber({
  BigNumber,
  typed
});
var conj = /* @__PURE__ */ createConj({
  typed
});
var equalScalar = /* @__PURE__ */ createEqualScalar({
  config: config$1,
  typed
});
var isInteger = /* @__PURE__ */ createIsInteger({
  typed
});
var isZero = /* @__PURE__ */ createIsZero({
  typed
});
var multiplyScalar = /* @__PURE__ */ createMultiplyScalar({
  typed
});
var number = /* @__PURE__ */ createNumber({
  typed
});
var SparseMatrix = /* @__PURE__ */ createSparseMatrixClass({
  Matrix,
  equalScalar,
  typed
});
var subtractScalar = /* @__PURE__ */ createSubtractScalar({
  typed
});
var isNaN$1 = /* @__PURE__ */ createIsNaN({
  typed
});
var unaryMinus = /* @__PURE__ */ createUnaryMinus({
  typed
});
var fraction = /* @__PURE__ */ createFraction({
  Fraction,
  typed
});
var isNumeric = /* @__PURE__ */ createIsNumeric({
  typed
});
var matrix = /* @__PURE__ */ createMatrix({
  DenseMatrix,
  Matrix,
  SparseMatrix,
  typed
});
var mode = /* @__PURE__ */ createMode({
  isNaN: isNaN$1,
  isNumeric,
  typed
});
var numeric = /* @__PURE__ */ createNumeric({
  bignumber,
  fraction,
  number
});
var size = /* @__PURE__ */ createSize({
  matrix,
  config: config$1,
  typed
});
var concat = /* @__PURE__ */ createConcat({
  isInteger,
  matrix,
  typed
});
var divideScalar = /* @__PURE__ */ createDivideScalar({
  numeric,
  typed
});
var identity = /* @__PURE__ */ createIdentity({
  BigNumber,
  DenseMatrix,
  SparseMatrix,
  config: config$1,
  matrix,
  typed
});
var smaller = /* @__PURE__ */ createSmaller({
  DenseMatrix,
  concat,
  config: config$1,
  matrix,
  typed
});
var add = /* @__PURE__ */ createAdd({
  DenseMatrix,
  SparseMatrix,
  addScalar,
  concat,
  equalScalar,
  matrix,
  typed
});
var compare = /* @__PURE__ */ createCompare({
  BigNumber,
  DenseMatrix,
  Fraction,
  concat,
  config: config$1,
  equalScalar,
  matrix,
  typed
});
var dot = /* @__PURE__ */ createDot({
  addScalar,
  conj,
  multiplyScalar,
  size,
  typed
});
var larger = /* @__PURE__ */ createLarger({
  DenseMatrix,
  concat,
  config: config$1,
  matrix,
  typed
});
var min = /* @__PURE__ */ createMin({
  config: config$1,
  numeric,
  smaller,
  typed
});
var multiply = /* @__PURE__ */ createMultiply({
  addScalar,
  dot,
  equalScalar,
  matrix,
  multiplyScalar,
  typed
});
var partitionSelect = /* @__PURE__ */ createPartitionSelect({
  compare,
  isNaN: isNaN$1,
  isNumeric,
  typed
});
var sum = /* @__PURE__ */ createSum({
  add,
  config: config$1,
  numeric,
  typed
});
var det = /* @__PURE__ */ createDet({
  divideScalar,
  isZero,
  matrix,
  multiply,
  subtractScalar,
  typed,
  unaryMinus
});
var max = /* @__PURE__ */ createMax({
  config: config$1,
  larger,
  numeric,
  typed
});
var inv = /* @__PURE__ */ createInv({
  abs,
  addScalar,
  det,
  divideScalar,
  identity,
  matrix,
  multiply,
  typed,
  unaryMinus
});
var divide = /* @__PURE__ */ createDivide({
  divideScalar,
  equalScalar,
  inv,
  matrix,
  multiply,
  typed
});
var mean = /* @__PURE__ */ createMean({
  add,
  divide,
  typed
});
var median = /* @__PURE__ */ createMedian({
  add,
  compare,
  divide,
  partitionSelect,
  typed
});
const MethodType = {
  vsum: "{vsum}",
  hsum: "{hsum}",
  vavg: "{vavg}",
  havg: "{havg}",
  vmax: "{vmax}",
  hmax: "{hmax}",
  vmin: "{vmin}",
  hmin: "{hmin}",
  vmode: "{vmode}",
  hmode: "{hmode}",
  vmedian: "{vmedian}",
  hmedian: "{hmedian}"
};
const MethodTypes = Object.values(MethodType);
const convertToNumber = (value) => {
  if (typeof value !== "string") {
    return;
  }
  if (value.trim() === "") {
    return;
  }
  const convertedValue = Number(value);
  if (!Number.isNaN(convertedValue)) {
    return convertedValue;
  }
};
const convertToCalculableValues = (values) => {
  return values.map((v) => convertToNumber(v)).filter((v) => v != null);
};
const getTargetCells = (api, cellType, pos) => {
  if (cellType === "row") {
    return api.row(pos.row).data();
  }
  if (cellType === "column") {
    return api.column(pos.column).data().toArray();
  }
};
const createCalcMethod = (cellType, calculator) => {
  return (api, pos) => {
    const targetCells = getTargetCells(api, cellType, pos);
    const calculableValues = convertToCalculableValues(targetCells);
    return calculator(calculableValues);
  };
};
const CalcMethod = {
  [MethodType.vsum]: createCalcMethod("column", sum),
  [MethodType.hsum]: createCalcMethod("row", sum),
  [MethodType.vavg]: createCalcMethod("column", mean),
  [MethodType.havg]: createCalcMethod("row", mean),
  [MethodType.vmax]: createCalcMethod("column", max),
  [MethodType.hmax]: createCalcMethod("row", max),
  [MethodType.vmin]: createCalcMethod("column", min),
  [MethodType.hmin]: createCalcMethod("row", min),
  [MethodType.vmode]: createCalcMethod("column", mode),
  [MethodType.hmode]: createCalcMethod("row", mode),
  [MethodType.vmedian]: createCalcMethod("column", median),
  [MethodType.hmedian]: createCalcMethod("row", median)
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var _global_React = React;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = _global_React, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const jsx = jsxRuntime.exports.jsx;
const wrapDataTable = (Table) => {
  return ({
    children,
    ...props
  }) => {
    const containerId = v4();
    const dtSelector = `#${containerId} table`;
    const dataTableOptions = {
      dom: '<"mb-3"<"container-fluid"<"d-flex justify-content-between"fB>>>t<"text-muted"i>lp>',
      columnDefs: [{
        type: "natural",
        orderSequence: ["asc", "desc", "pre"],
        searchPanes: {
          show: true
        },
        targets: "_all"
      }],
      order: [[0, "pre"]],
      paging: false,
      scrollCollapse: true,
      scrollY: "500px",
      select: true,
      buttons: ["colvis", "searchPanes", "spacer", "copyHtml5", "spacer", "csvHtml5", "spacer", "print"]
    };
    const getReplaceCellPositions = (api) => {
      const replaceCellPositions = [];
      const data = api.data().toArray();
      for (let row = 0; row < data.length; row++) {
        for (let column = 0; column < data[row].length; column++) {
          const value = data[row][column].trim();
          if (MethodTypes.includes(value)) {
            replaceCellPositions.push({
              row,
              column,
              methodType: value
            });
          }
        }
      }
      return replaceCellPositions;
    };
    const handleCalcMethod = (api) => {
      const calcData = getReplaceCellPositions(api);
      const calculatedData = [];
      calcData.forEach(({
        row,
        column,
        methodType
      }) => {
        const calcResult = CalcMethod[methodType](api, {
          row,
          column
        });
        calculatedData.push({
          row,
          column,
          calcResult
        });
      });
      return calculatedData;
    };
    React.useEffect(() => {
      console.log("useEffect() is executed on growi-plugin-datatables");
      if (DataTable$1.isDataTable(dtSelector))
        return;
      const api = new DataTable$1(dtSelector, dataTableOptions);
      api.on("order.dt", () => {
        const order = api.order();
        if (order.length <= 0)
          return;
        const orderSequenceWillBe = order[0][1];
        if (orderSequenceWillBe !== "pre")
          return;
        api.order.neutral().draw();
      });
      const calculatedData = handleCalcMethod(api);
      calculatedData.forEach(({
        row,
        column,
        calcResult
      }) => {
        api.cell({
          row,
          column
        }).data(calcResult);
      });
      api.order.neutral().draw();
    }, [dtSelector]);
    console.log(React.useEffect);
    return /* @__PURE__ */ jsx("div", {
      id: containerId,
      className: "position-relative",
      children: /* @__PURE__ */ jsx(Table, {
        ...props,
        children
      })
    });
  };
};
const activate = () => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }
  const {
    optionsGenerators
  } = growiFacade.markdownRenderer;
  const originalCustomViewOptions = optionsGenerators.customGenerateViewOptions;
  optionsGenerators.customGenerateViewOptions = (...args) => {
    const options = originalCustomViewOptions ? originalCustomViewOptions(...args) : optionsGenerators.generateViewOptions(...args);
    const Table = options.components.table;
    options.components.table = wrapDataTable(Table);
    return options;
  };
};
const deactivate = () => {
};
if (window.pluginActivators == null) {
  window.pluginActivators = {};
}
window.pluginActivators["growi-plugin-datatables"] = {
  activate,
  deactivate
};
