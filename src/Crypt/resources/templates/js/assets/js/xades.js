var XAdES = (function (exports) {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  var ELEMENT = "element";
  var ATTRIBUTE = "attribute";
  var CONTENT = "content";
  var MAX = 1e9;

  function assign(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    var res = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];

      for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
          continue;
        }

        res[prop] = obj[prop];
      }
    }

    return res;
  }

  function XmlElement(params) {
    return function (target) {
      var t = target;
      t.localName = params.localName || t.name;
      t.namespaceURI = params.namespaceURI || t.namespaceURI || null;
      t.prefix = params.prefix || t.prefix || null;
      t.parser = params.parser || t.parser;

      if (t.target !== t) {
        t.items = assign({}, t.items);
      }

      t.target = target;
    };
  }

  function XmlChildElement() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (target, propertyKey) {
      var t = target.constructor;
      var key = propertyKey;

      if (!t.items) {
        t.items = {};
      }

      if (t.target !== t) {
        t.items = assign({}, t.items);
      }

      t.target = target;

      if (params.parser) {
        t.items[key] = {
          parser: params.parser,
          required: params.required || false,
          maxOccurs: params.maxOccurs || MAX,
          minOccurs: params.minOccurs === void 0 ? 0 : params.minOccurs,
          noRoot: params.noRoot || false
        };
      } else {
        t.items[key] = {
          namespaceURI: params.namespaceURI || null,
          required: params.required || false,
          prefix: params.prefix || null,
          defaultValue: params.defaultValue,
          converter: params.converter
        };
      }

      params.localName = params.localName || params.parser && params.parser.localName || key;
      t.items[key].namespaceURI = params.namespaceURI || params.parser && params.parser.namespaceURI || null;
      t.items[key].prefix = params.prefix || params.parser && params.parser.prefix || null;
      t.items[key].localName = params.localName;
      t.items[key].type = ELEMENT;
      defineProperty(target, key, params);
    };
  }

  function XmlAttribute() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      required: false,
      namespaceURI: null
    };
    return function (target, propertyKey) {
      var t = target.constructor;
      var key = propertyKey;

      if (!params.localName) {
        params.localName = propertyKey;
      }

      if (!t.items) {
        t.items = {};
      }

      if (t.target !== t) {
        t.items = assign({}, t.items);
      }

      t.target = target;
      t.items[propertyKey] = params;
      t.items[propertyKey].type = ATTRIBUTE;
      defineProperty(target, key, params);
    };
  }

  function XmlContent() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      required: false
    };
    return function (target, propertyKey) {
      var t = target.constructor;
      var key = propertyKey;

      if (!t.items) {
        t.items = {};
      }

      if (t.target !== t) {
        t.items = assign({}, t.items);
      }

      t.target = target;
      t.items[propertyKey] = params;
      t.items[propertyKey].type = CONTENT;
      defineProperty(target, key, params);
    };
  }

  function defineProperty(target, key, params) {
    var key2 = "_".concat(key);
    var opt = {
      set: function set(v) {
        if (this[key2] !== v) {
          this.element = null;
          this[key2] = v;
        }
      },
      get: function get() {
        if (this[key2] === void 0) {
          var defaultValue = params.defaultValue;

          if (params.parser) {
            defaultValue = new params.parser();
            defaultValue.localName = params.localName;
          }

          this[key2] = defaultValue;
        }

        return this[key2];
      }
    };
    Object.defineProperty(target, key2, {
      writable: true,
      enumerable: false
    });
    Object.defineProperty(target, key, opt);
  }

  var Collection = function () {
    function Collection(items) {
      _classCallCheck(this, Collection);

      this.items = new Array();

      if (items) {
        this.items = items;
      }
    }

    _createClass(Collection, [{
      key: "Item",
      value: function Item(index) {
        return this.items[index] || null;
      }
    }, {
      key: "Add",
      value: function Add(item) {
        this.items.push(item);
      }
    }, {
      key: "Pop",
      value: function Pop() {
        return this.items.pop();
      }
    }, {
      key: "RemoveAt",
      value: function RemoveAt(index) {
        this.items = this.items.filter(function (item, index2) {
          return index2 !== index;
        });
      }
    }, {
      key: "Clear",
      value: function Clear() {
        this.items = new Array();
      }
    }, {
      key: "GetIterator",
      value: function GetIterator() {
        return this.items;
      }
    }, {
      key: "ForEach",
      value: function ForEach(cb) {
        this.GetIterator().forEach(cb);
      }
    }, {
      key: "Map",
      value: function Map(cb) {
        return new Collection(this.GetIterator().map(cb));
      }
    }, {
      key: "Filter",
      value: function Filter(cb) {
        return new Collection(this.GetIterator().filter(cb));
      }
    }, {
      key: "Sort",
      value: function Sort(cb) {
        return new Collection(this.GetIterator().sort(cb));
      }
    }, {
      key: "Every",
      value: function Every(cb) {
        return this.GetIterator().every(cb);
      }
    }, {
      key: "Some",
      value: function Some(cb) {
        return this.GetIterator().some(cb);
      }
    }, {
      key: "IsEmpty",
      value: function IsEmpty() {
        return this.Count === 0;
      }
    }, {
      key: "Count",
      get: function get() {
        return this.items.length;
      }
    }]);

    return Collection;
  }();

  function printf(text) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var msg = text;
    var regFind = /[^%](%\d+)/g;
    var match = null;
    var matches = [];

    while (match = regFind.exec(msg)) {
      matches.push({
        arg: match[1],
        index: match.index
      });
    }

    for (var i = matches.length - 1; i >= 0; i--) {
      var item = matches[i];
      var arg = item.arg.substring(1);
      var index = item.index + 1;
      msg = msg.substring(0, index) + arguments[+arg] + msg.substring(index + 1 + arg.length);
    }

    msg = msg.replace("%%", "%");
    return msg;
  }

  function padNum(num, size) {
    var s = num + "";

    while (s.length < size) {
      s = "0" + s;
    }

    return s;
  }

  var XmlError = function XmlError(code) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    _classCallCheck(this, XmlError);

    this.prefix = "XMLJS";
    this.code = code;
    this.name = this.constructor.name;
    arguments[0] = xes[code];
    var message = printf.apply(this, arguments);
    this.message = "".concat(this.prefix).concat(padNum(code, 4), ": ").concat(message);
    this.stack = new Error(this.message).stack;
  };

  var XE;

  (function (XE) {
    XE[XE["NONE"] = 0] = "NONE";
    XE[XE["NULL_REFERENCE"] = 1] = "NULL_REFERENCE";
    XE[XE["NULL_PARAM"] = 2] = "NULL_PARAM";
    XE[XE["DECORATOR_NULL_PARAM"] = 3] = "DECORATOR_NULL_PARAM";
    XE[XE["COLLECTION_LIMIT"] = 4] = "COLLECTION_LIMIT";
    XE[XE["METHOD_NOT_IMPLEMENTED"] = 5] = "METHOD_NOT_IMPLEMENTED";
    XE[XE["METHOD_NOT_SUPPORTED"] = 6] = "METHOD_NOT_SUPPORTED";
    XE[XE["PARAM_REQUIRED"] = 7] = "PARAM_REQUIRED";
    XE[XE["CONVERTER_UNSUPPORTED"] = 8] = "CONVERTER_UNSUPPORTED";
    XE[XE["ELEMENT_MALFORMED"] = 9] = "ELEMENT_MALFORMED";
    XE[XE["ELEMENT_MISSING"] = 10] = "ELEMENT_MISSING";
    XE[XE["ATTRIBUTE_MISSING"] = 11] = "ATTRIBUTE_MISSING";
    XE[XE["CONTENT_MISSING"] = 12] = "CONTENT_MISSING";
    XE[XE["CRYPTOGRAPHIC"] = 13] = "CRYPTOGRAPHIC";
    XE[XE["CRYPTOGRAPHIC_NO_MODULE"] = 14] = "CRYPTOGRAPHIC_NO_MODULE";
    XE[XE["CRYPTOGRAPHIC_UNKNOWN_TRANSFORM"] = 15] = "CRYPTOGRAPHIC_UNKNOWN_TRANSFORM";
    XE[XE["ALGORITHM_NOT_SUPPORTED"] = 16] = "ALGORITHM_NOT_SUPPORTED";
    XE[XE["ALGORITHM_WRONG_NAME"] = 17] = "ALGORITHM_WRONG_NAME";
    XE[XE["XML_EXCEPTION"] = 18] = "XML_EXCEPTION";
  })(XE || (XE = {}));

  var xes = {};
  xes[XE.NONE] = "No description";
  xes[XE.NULL_REFERENCE] = "Null reference";
  xes[XE.NULL_PARAM] = "'%1' has empty '%2' object";
  xes[XE.DECORATOR_NULL_PARAM] = "Decorator '%1' has empty '%2' parameter";
  xes[XE.COLLECTION_LIMIT] = "Collection of '%1' in element '%2' has wrong amount of items";
  xes[XE.METHOD_NOT_IMPLEMENTED] = "Method is not implemented";
  xes[XE.METHOD_NOT_SUPPORTED] = "Method is not supported";
  xes[XE.PARAM_REQUIRED] = "Required parameter is missing '%1'";
  xes[XE.CONVERTER_UNSUPPORTED] = "Converter is not supported";
  xes[XE.ELEMENT_MALFORMED] = "Malformed element '%1'";
  xes[XE.ELEMENT_MISSING] = "Element '%1' is missing in '%2'";
  xes[XE.ATTRIBUTE_MISSING] = "Attribute '%1' is missing in '%2'";
  xes[XE.CONTENT_MISSING] = "Content is missing in '%1'";
  xes[XE.CRYPTOGRAPHIC] = "Cryptographic error: %1";
  xes[XE.CRYPTOGRAPHIC_NO_MODULE] = "WebCrypto module is not found";
  xes[XE.CRYPTOGRAPHIC_UNKNOWN_TRANSFORM] = "Unknown transform %1";
  xes[XE.ALGORITHM_NOT_SUPPORTED] = "Algorithm is not supported '%1'";
  xes[XE.ALGORITHM_WRONG_NAME] = "Algorithm wrong name in use '%1'";
  xes[XE.XML_EXCEPTION] = "XML exception: %1";

  var Convert = function () {
    function Convert() {
      _classCallCheck(this, Convert);
    }

    _createClass(Convert, null, [{
      key: "ToString",
      value: function ToString(buffer) {
        var enc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";
        var buf = new Uint8Array(buffer);

        switch (enc.toLowerCase()) {
          case "utf8":
            return this.ToUtf8String(buf);

          case "binary":
            return this.ToBinary(buf);

          case "hex":
            return this.ToHex(buf);

          case "base64":
            return this.ToBase64(buf);

          case "base64url":
            return this.ToBase64Url(buf);

          default:
            throw new XmlError(XE.CONVERTER_UNSUPPORTED);
        }
      }
    }, {
      key: "FromString",
      value: function FromString(str) {
        var enc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";

        switch (enc.toLowerCase()) {
          case "utf8":
            return this.FromUtf8String(str);

          case "binary":
            return this.FromBinary(str);

          case "hex":
            return this.FromHex(str);

          case "base64":
            return this.FromBase64(str);

          case "base64url":
            return this.FromBase64Url(str);

          default:
            throw new XmlError(XE.CONVERTER_UNSUPPORTED);
        }
      }
    }, {
      key: "ToBase64",
      value: function ToBase64(buf) {
        if (typeof btoa !== "undefined") {
          var binary = this.ToString(buf, "binary");
          return btoa(binary);
        } else if (typeof Buffer !== "undefined") {
          return Buffer.from(buf).toString("base64");
        } else {
          throw new XmlError(XE.CONVERTER_UNSUPPORTED);
        }
      }
    }, {
      key: "FromBase64",
      value: function FromBase64(base64Text) {
        base64Text = base64Text.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "").replace(/\s/g, "");

        if (typeof atob !== "undefined") {
          return this.FromBinary(atob(base64Text));
        } else if (typeof Buffer !== "undefined") {
          return new Uint8Array(Buffer.from(base64Text, "base64"));
        } else {
          throw new XmlError(XE.CONVERTER_UNSUPPORTED);
        }
      }
    }, {
      key: "FromBase64Url",
      value: function FromBase64Url(base64url) {
        return this.FromBase64(this.Base64Padding(base64url.replace(/\-/g, "+").replace(/\_/g, "/")));
      }
    }, {
      key: "ToBase64Url",
      value: function ToBase64Url(data) {
        return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
      }
    }, {
      key: "FromUtf8String",
      value: function FromUtf8String(text) {
        var s = unescape(encodeURIComponent(text));
        var uintArray = new Uint8Array(s.length);

        for (var i = 0; i < s.length; i++) {
          uintArray[i] = s.charCodeAt(i);
        }

        return uintArray;
      }
    }, {
      key: "ToUtf8String",
      value: function ToUtf8String(buffer) {
        var encodedString = String.fromCharCode.apply(null, buffer);
        var decodedString = decodeURIComponent(escape(encodedString));
        return decodedString;
      }
    }, {
      key: "FromBinary",
      value: function FromBinary(text) {
        var stringLength = text.length;
        var resultView = new Uint8Array(stringLength);

        for (var i = 0; i < stringLength; i++) {
          resultView[i] = text.charCodeAt(i);
        }

        return resultView;
      }
    }, {
      key: "ToBinary",
      value: function ToBinary(buffer) {
        var resultString = "";

        for (var i = 0; i < buffer.length; i++) {
          resultString = resultString + String.fromCharCode(buffer[i]);
        }

        return resultString;
      }
    }, {
      key: "ToHex",
      value: function ToHex(buffer) {
        var splitter = "";
        var res = [];

        for (var i = 0; i < buffer.length; i++) {
          var char = buffer[i].toString(16);
          res.push(char.length === 1 ? "0" + char : char);
        }

        return res.join(splitter);
      }
    }, {
      key: "FromHex",
      value: function FromHex(hexString) {
        var res = new Uint8Array(hexString.length / 2);

        for (var i = 0; i < hexString.length; i = i + 2) {
          var c = hexString.slice(i, i + 2);
          res[i / 2] = parseInt(c, 16);
        }

        return res;
      }
    }, {
      key: "ToDateTime",
      value: function ToDateTime(dateTime) {
        return new Date(dateTime);
      }
    }, {
      key: "FromDateTime",
      value: function FromDateTime(dateTime) {
        var str = dateTime.toISOString();
        return str;
      }
    }, {
      key: "Base64Padding",
      value: function Base64Padding(base64) {
        var padCount = 4 - base64.length % 4;

        if (padCount < 4) {
          for (var i = 0; i < padCount; i++) {
            base64 += "=";
          }
        }

        return base64;
      }
    }]);

    return Convert;
  }();

  var APPLICATION_XML = "application/xml";
  var XmlNodeType;

  (function (XmlNodeType) {
    XmlNodeType[XmlNodeType["None"] = 0] = "None";
    XmlNodeType[XmlNodeType["Element"] = 1] = "Element";
    XmlNodeType[XmlNodeType["Attribute"] = 2] = "Attribute";
    XmlNodeType[XmlNodeType["Text"] = 3] = "Text";
    XmlNodeType[XmlNodeType["CDATA"] = 4] = "CDATA";
    XmlNodeType[XmlNodeType["EntityReference"] = 5] = "EntityReference";
    XmlNodeType[XmlNodeType["Entity"] = 6] = "Entity";
    XmlNodeType[XmlNodeType["ProcessingInstruction"] = 7] = "ProcessingInstruction";
    XmlNodeType[XmlNodeType["Comment"] = 8] = "Comment";
    XmlNodeType[XmlNodeType["Document"] = 9] = "Document";
    XmlNodeType[XmlNodeType["DocumentType"] = 10] = "DocumentType";
    XmlNodeType[XmlNodeType["DocumentFragment"] = 11] = "DocumentFragment";
    XmlNodeType[XmlNodeType["Notation"] = 12] = "Notation";
    XmlNodeType[XmlNodeType["Whitespace"] = 13] = "Whitespace";
    XmlNodeType[XmlNodeType["SignificantWhitespace"] = 14] = "SignificantWhitespace";
    XmlNodeType[XmlNodeType["EndElement"] = 15] = "EndElement";
    XmlNodeType[XmlNodeType["EndEntity"] = 16] = "EndEntity";
    XmlNodeType[XmlNodeType["XmlDeclaration"] = 17] = "XmlDeclaration";
  })(XmlNodeType || (XmlNodeType = {}));

  var xpath = function xpath(node, xPath) {
    throw new Error("Not implemented");
  };

  var sWindow;

  if (typeof self === "undefined") {
    sWindow = global;

    var xmldom = require("xmldom-alpha");

    xpath = require("xpath.js");
    sWindow.XMLSerializer = xmldom.XMLSerializer;
    sWindow.DOMParser = xmldom.DOMParser;
    sWindow.DOMImplementation = xmldom.DOMImplementation;
    sWindow.document = new DOMImplementation().createDocument("http://www.w3.org/1999/xhtml", "html", null);
  } else {
    sWindow = self;
  }

  function SelectNodesEx(node, xPath) {
    var doc = node.ownerDocument == null ? node : node.ownerDocument;
    var nsResolver = document.createNSResolver(node.ownerDocument == null ? node.documentElement : node.ownerDocument.documentElement);
    var personIterator = doc.evaluate(xPath, node, nsResolver, XPathResult.ANY_TYPE, null);
    var ns = [];
    var n;

    while (n = personIterator.iterateNext()) {
      ns.push(n);
    }

    return ns;
  }

  var Select = typeof self !== "undefined" ? SelectNodesEx : xpath;

  function Parse(xmlString) {
    xmlString = xmlString.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    return new DOMParser().parseFromString(xmlString, APPLICATION_XML);
  }

  function SelectSingleNode(node, path) {
    var ns = Select(node, path);

    if (ns && ns.length > 0) {
      return ns[0];
    }

    return null;
  }

  function _SelectNamespaces(node) {
    var selectedNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (node && node.nodeType === XmlNodeType.Element) {
      var el = node;

      if (el.namespaceURI && el.namespaceURI !== "http://www.w3.org/XML/1998/namespace" && !selectedNodes[el.prefix || ""]) {
        selectedNodes[el.prefix ? el.prefix : ""] = node.namespaceURI;
      }

      for (var i = 0; i < node.childNodes.length; i++) {
        var childNode = node.childNodes.item(i);

        if (childNode && childNode.nodeType === XmlNodeType.Element) {
          _SelectNamespaces(childNode, selectedNodes);
        }
      }
    }
  }

  function SelectNamespaces(node) {
    var attrs = {};

    _SelectNamespaces(node, attrs);

    return attrs;
  }

  function assign$1(target) {
    for (var _len4 = arguments.length, sources = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      sources[_key4 - 1] = arguments[_key4];
    }

    var res = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];

      for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
          continue;
        }

        res[prop] = obj[prop];
      }
    }

    return res;
  }

  function isNodeType(obj, type) {
    return obj && obj.nodeType === type;
  }

  function isElement(obj) {
    return isNodeType(obj, XmlNodeType.Element);
  }

  function isDocument(obj) {
    return isNodeType(obj, XmlNodeType.Document);
  }

  var XmlBase64Converter = {
    get: function get(value) {
      if (value) {
        return Convert.ToBase64(value);
      }

      return void 0;
    },
    set: function set(value) {
      return Convert.FromBase64(value);
    }
  };
  var XmlNumberConverter = {
    get: function get(value) {
      if (value) {
        return value.toString();
      }

      return "0";
    },
    set: function set(value) {
      return Number(value);
    }
  };
  var DEFAULT_ROOT_NAME = "xml_root";

  var XmlObject = function () {
    function XmlObject() {
      _classCallCheck(this, XmlObject);

      this.prefix = this.GetStatic().prefix || null;
      this.localName = this.GetStatic().localName;
      this.namespaceURI = this.GetStatic().namespaceURI;
    }

    _createClass(XmlObject, [{
      key: "HasChanged",
      value: function HasChanged() {
        var self = this.GetStatic();

        if (self.items) {
          for (var key in self.items) {
            if (!self.items.hasOwnProperty(key)) {
              continue;
            }

            var item = self.items[key];
            var value = this[key];

            if (item.parser && value && value.HasChanged()) {
              return true;
            }
          }
        }

        return this.element === null;
      }
    }, {
      key: "GetXml",
      value: function GetXml(hard) {
        if (!(hard || this.HasChanged())) {
          return this.element || null;
        }

        var thisAny = this;
        var doc = this.CreateDocument();
        var el = this.CreateElement();
        var self = this.GetStatic();
        var localName = this.localName;

        if (self.items) {
          for (var key in self.items) {
            if (!self.items.hasOwnProperty(key)) {
              continue;
            }

            var parser = thisAny[key];
            var selfItem = self.items[key];

            switch (selfItem.type) {
              case CONTENT:
                {
                  var schema = selfItem;
                  var value = schema.converter ? schema.converter.get(parser) : parser;

                  if (schema.required && (value === null || value === void 0)) {
                    throw new XmlError(XE.CONTENT_MISSING, localName);
                  }

                  if (schema.defaultValue !== parser || schema.required) {
                    el.textContent = value;
                  }

                  break;
                }

              case ATTRIBUTE:
                {
                  var _schema = selfItem;

                  var _value2 = _schema.converter ? _schema.converter.get(parser) : parser;

                  if (_schema.required && (_value2 === null || _value2 === void 0)) {
                    throw new XmlError(XE.ATTRIBUTE_MISSING, _schema.localName, localName);
                  }

                  if (_schema.defaultValue !== parser || _schema.required) {
                    if (!_schema.namespaceURI) {
                      el.setAttribute(_schema.localName, _value2);
                    } else {
                      el.setAttributeNS(_schema.namespaceURI, _schema.localName, _value2);
                    }
                  }

                  break;
                }

              case ELEMENT:
                {
                  var _schema2 = selfItem;
                  var node = null;

                  if (_schema2.parser) {
                    if (_schema2.required && !parser || _schema2.minOccurs && !parser.Count) {
                      throw new XmlError(XE.ELEMENT_MISSING, parser.localName, localName);
                    }

                    if (parser) {
                      node = parser.GetXml(parser.element === void 0 && (_schema2.required || parser.Count));
                    }
                  } else {
                    var _value3 = _schema2.converter ? _schema2.converter.get(parser) : parser;

                    if (_schema2.required && _value3 === void 0) {
                      throw new XmlError(XE.ELEMENT_MISSING, _schema2.localName, localName);
                    }

                    if (parser !== _schema2.defaultValue || _schema2.required) {
                      if (!_schema2.namespaceURI) {
                        node = doc.createElement("".concat(_schema2.prefix ? _schema2.prefix + ":" : "").concat(_schema2.localName));
                      } else {
                        node = doc.createElementNS(_schema2.namespaceURI, "".concat(_schema2.prefix ? _schema2.prefix + ":" : "").concat(_schema2.localName));
                      }

                      node.textContent = _value3;
                    }
                  }

                  if (node) {
                    if (_schema2.noRoot) {
                      var els = [];

                      for (var i = 0; i < node.childNodes.length; i++) {
                        var colNode = node.childNodes.item(i);

                        if (isElement(colNode)) {
                          els.push(colNode);
                        }
                      }

                      if (els.length < _schema2.minOccurs || els.length > _schema2.maxOccurs) {
                        throw new XmlError(XE.COLLECTION_LIMIT, parser.localName, self.localName);
                      }

                      els.forEach(function (e) {
                        return el.appendChild(e.cloneNode(true));
                      });
                    } else if (node.childNodes.length < _schema2.minOccurs || node.childNodes.length > _schema2.maxOccurs) {
                      throw new XmlError(XE.COLLECTION_LIMIT, parser.localName, self.localName);
                    } else {
                      el.appendChild(node);
                    }
                  }

                  break;
                }
            }
          }
        }

        this.OnGetXml(el);
        this.element = el;
        return el;
      }
    }, {
      key: "LoadXml",
      value: function LoadXml(param) {
        var element;
        var thisAny = this;

        if (typeof param === "string") {
          var doc = Parse(param);
          element = doc.documentElement;
        } else {
          element = param;
        }

        if (!element) {
          throw new XmlError(XE.PARAM_REQUIRED, "element");
        }

        var self = this.GetStatic();
        var localName = this.localName;

        if (!(element.localName === localName && element.namespaceURI == this.NamespaceURI)) {
          throw new XmlError(XE.ELEMENT_MALFORMED, localName);
        }

        if (self.items) {
          for (var key in self.items) {
            if (!self.items.hasOwnProperty(key)) {
              continue;
            }

            var selfItem = self.items[key];

            switch (selfItem.type) {
              case CONTENT:
                {
                  var schema = selfItem;

                  if (schema.required && !element.textContent) {
                    throw new XmlError(XE.CONTENT_MISSING, localName);
                  }

                  if (!element.textContent) {
                    thisAny[key] = schema.defaultValue;
                  } else {
                    var value = schema.converter ? schema.converter.set(element.textContent) : element.textContent;
                    thisAny[key] = value;
                  }

                  break;
                }

              case ATTRIBUTE:
                {
                  var _schema3 = selfItem;
                  var hasAttribute = void 0;
                  var getAttribute = void 0;

                  if (!_schema3.localName) {
                    throw new XmlError(XE.PARAM_REQUIRED, "localName");
                  }

                  if (_schema3.namespaceURI) {
                    hasAttribute = element.hasAttributeNS.bind(element, _schema3.namespaceURI, _schema3.localName);
                    getAttribute = element.getAttributeNS.bind(element, _schema3.namespaceURI, _schema3.localName);
                  } else {
                    hasAttribute = element.hasAttribute.bind(element, _schema3.localName);
                    getAttribute = element.getAttribute.bind(element, _schema3.localName);
                  }

                  if (_schema3.required && !hasAttribute()) {
                    throw new XmlError(XE.ATTRIBUTE_MISSING, _schema3.localName, localName);
                  }

                  if (!hasAttribute()) {
                    thisAny[key] = _schema3.defaultValue;
                  } else {
                    var _value4 = _schema3.converter ? _schema3.converter.set(getAttribute()) : getAttribute();

                    thisAny[key] = _value4;
                  }

                  break;
                }

              case ELEMENT:
                {
                  var _schema4 = selfItem;

                  if (_schema4.noRoot) {
                    if (!_schema4.parser) {
                      throw new XmlError(XE.XML_EXCEPTION, "Schema for '".concat(_schema4.localName, "' with flag noRoot must have 'parser'"));
                    }

                    var col = new _schema4.parser();

                    if (!(col instanceof XmlCollection)) {
                      throw new XmlError(XE.XML_EXCEPTION, "Schema for '".concat(_schema4.localName, "' with flag noRoot must have 'parser' like instance of XmlCollection"));
                    }

                    col.OnLoadXml(element);
                    delete col.element;

                    if (col.Count < _schema4.minOccurs || col.Count > _schema4.maxOccurs) {
                      throw new XmlError(XE.COLLECTION_LIMIT, _schema4.parser.localName, localName);
                    }

                    thisAny[key] = col;
                    continue;
                  }

                  var foundElement = null;

                  for (var i = 0; i < element.childNodes.length; i++) {
                    var node = element.childNodes.item(i);

                    if (!isElement(node)) {
                      continue;
                    }

                    var el = node;

                    if (el.localName === _schema4.localName && el.namespaceURI == _schema4.namespaceURI) {
                      foundElement = el;
                      break;
                    }
                  }

                  if (_schema4.required && !foundElement) {
                    throw new XmlError(XE.ELEMENT_MISSING, _schema4.parser ? _schema4.parser.localName : _schema4.localName, localName);
                  }

                  if (!_schema4.parser) {
                    if (!foundElement) {
                      thisAny[key] = _schema4.defaultValue;
                    } else {
                      var _value5 = _schema4.converter ? _schema4.converter.set(foundElement.textContent) : foundElement.textContent;

                      thisAny[key] = _value5;
                    }
                  } else {
                    if (foundElement) {
                      var _value6 = new _schema4.parser();

                      _value6.localName = _schema4.localName;
                      _value6.namespaceURI = _schema4.namespaceURI;
                      thisAny[key] = _value6;

                      _value6.LoadXml(foundElement);
                    }
                  }

                  break;
                }
            }
          }
        }

        this.OnLoadXml(element);
        this.prefix = element.prefix || "";
        this.element = element;
      }
    }, {
      key: "toString",
      value: function toString() {
        var xml = this.GetXml();
        return xml ? new XMLSerializer().serializeToString(xml) : "";
      }
    }, {
      key: "GetElement",
      value: function GetElement(name) {
        var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!this.element) {
          throw new XmlError(XE.NULL_PARAM, this.localName);
        }

        return XmlObject.GetElement(this.element, name, required);
      }
    }, {
      key: "GetChildren",
      value: function GetChildren(localName, nameSpace) {
        if (!this.element) {
          throw new XmlError(XE.NULL_PARAM, this.localName);
        }

        return XmlObject.GetChildren(this.element, localName, nameSpace || this.NamespaceURI || undefined);
      }
    }, {
      key: "GetChild",
      value: function GetChild(localName) {
        var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!this.element) {
          throw new XmlError(XE.NULL_PARAM, this.localName);
        }

        return XmlObject.GetChild(this.element, localName, this.NamespaceURI || undefined, required);
      }
    }, {
      key: "GetFirstChild",
      value: function GetFirstChild(localName, namespace) {
        if (!this.element) {
          throw new XmlError(XE.NULL_PARAM, this.localName);
        }

        return XmlObject.GetFirstChild(this.element, localName, namespace);
      }
    }, {
      key: "GetAttribute",
      value: function GetAttribute(name, defaultValue) {
        var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (!this.element) {
          throw new XmlError(XE.NULL_PARAM, this.localName);
        }

        return XmlObject.GetAttribute(this.element, name, defaultValue, required);
      }
    }, {
      key: "IsEmpty",
      value: function IsEmpty() {
        return this.Element === void 0;
      }
    }, {
      key: "OnLoadXml",
      value: function OnLoadXml(element) {}
    }, {
      key: "GetStatic",
      value: function GetStatic() {
        return this.constructor;
      }
    }, {
      key: "GetPrefix",
      value: function GetPrefix() {
        return this.Prefix ? this.prefix + ":" : "";
      }
    }, {
      key: "OnGetXml",
      value: function OnGetXml(element) {}
    }, {
      key: "CreateElement",
      value: function CreateElement(document, localName) {
        var namespaceUri = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        if (!document) {
          document = this.CreateDocument();
        }

        localName = localName || this.localName;
        namespaceUri = namespaceUri || this.NamespaceURI;
        prefix = prefix || this.prefix;
        var xn = document.createElementNS(this.NamespaceURI, (prefix ? "".concat(prefix, ":") : "") + localName);
        document.importNode(xn, true);
        return xn;
      }
    }, {
      key: "CreateDocument",
      value: function CreateDocument() {
        return XmlObject.CreateDocument(this.localName, this.NamespaceURI, this.Prefix);
      }
    }, {
      key: "Element",
      get: function get() {
        return this.element;
      }
    }, {
      key: "Prefix",
      get: function get() {
        return this.prefix;
      },
      set: function set(value) {
        this.prefix = value;
      }
    }, {
      key: "LocalName",
      get: function get() {
        return this.localName;
      }
    }, {
      key: "NamespaceURI",
      get: function get() {
        return this.namespaceURI || null;
      }
    }], [{
      key: "LoadXml",
      value: function LoadXml(param) {
        var xml = new this();
        xml.LoadXml(param);
        return xml;
      }
    }, {
      key: "GetElement",
      value: function GetElement(element, name) {
        var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var xmlNodeList = element.getElementsByTagName(name);

        if (required && xmlNodeList.length === 0) {
          throw new XmlError(XE.ELEMENT_MISSING, name, element.localName);
        }

        return xmlNodeList[0] || null;
      }
    }, {
      key: "GetAttribute",
      value: function GetAttribute(element, attrName, defaultValue) {
        var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        if (element.hasAttribute(attrName)) {
          return element.getAttribute(attrName);
        } else {
          if (required) {
            throw new XmlError(XE.ATTRIBUTE_MISSING, attrName, element.localName);
          }

          return defaultValue;
        }
      }
    }, {
      key: "GetElementById",
      value: function GetElementById(node, idValue) {
        if (node == null || idValue == null) {
          return null;
        }

        var xel = null;

        if (isDocument(node)) {
          xel = node.getElementById(idValue);
        }

        if (xel == null) {
          xel = SelectSingleNode(node, "//*[@Id='".concat(idValue, "']"));

          if (xel == null) {
            xel = SelectSingleNode(node, "//*[@ID='".concat(idValue, "']"));

            if (xel == null) {
              xel = SelectSingleNode(node, "//*[@id='".concat(idValue, "']"));
            }
          }
        }

        return xel;
      }
    }, {
      key: "CreateDocument",
      value: function CreateDocument() {
        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ROOT_NAME;
        var namespaceUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var namePrefix = "";
        var nsPrefix = "";
        var namespaceUri2 = "";

        if (prefix) {
          namePrefix = prefix + ":";
          nsPrefix = ":" + prefix;
        }

        if (namespaceUri) {
          namespaceUri2 = " xmlns".concat(nsPrefix, "=\"").concat(namespaceUri, "\"");
        }

        var name = "".concat(namePrefix).concat(root);
        var doc = new DOMParser().parseFromString("<".concat(name).concat(namespaceUri2, "></").concat(name, ">"), APPLICATION_XML);
        return doc;
      }
    }, {
      key: "GetChildren",
      value: function GetChildren(node, localName, nameSpace) {
        node = isDocument(node) ? node.documentElement : node;
        var res = [];

        for (var i = 0; i < node.childNodes.length; i++) {
          var child = node.childNodes[i];

          if (isElement(child) && child.localName === localName && (child.namespaceURI === nameSpace || !nameSpace)) {
            res.push(child);
          }
        }

        return res;
      }
    }, {
      key: "GetFirstChild",
      value: function GetFirstChild(node, localName, nameSpace) {
        node = isDocument(node) ? node.documentElement : node;

        for (var i = 0; i < node.childNodes.length; i++) {
          var child = node.childNodes[i];

          if (isElement(child) && child.localName === localName && (child.namespaceURI === nameSpace || !nameSpace)) {
            return child;
          }
        }

        return null;
      }
    }, {
      key: "GetChild",
      value: function GetChild(node, localName, nameSpace) {
        var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        for (var i = 0; i < node.childNodes.length; i++) {
          var child = node.childNodes[i];

          if (isElement(child) && child.localName === localName && (child.namespaceURI === nameSpace || !nameSpace)) {
            return child;
          }
        }

        if (required) {
          throw new XmlError(XE.ELEMENT_MISSING, localName, node.localName);
        }

        return null;
      }
    }]);

    return XmlObject;
  }();

  var XmlCollection = function (_XmlObject) {
    _inherits(XmlCollection, _XmlObject);

    function XmlCollection() {
      var _this2;

      _classCallCheck(this, XmlCollection);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(XmlCollection).apply(this, arguments));
      _this2.MaxOccurs = Number.MAX_VALUE;
      _this2.MinOccurs = 0;
      _this2.items = [];
      return _this2;
    }

    _createClass(XmlCollection, [{
      key: "HasChanged",
      value: function HasChanged() {
        var res = _get(_getPrototypeOf(XmlCollection.prototype), "HasChanged", this).call(this);

        var changed = this.Some(function (item) {
          return item.HasChanged();
        });
        return res || changed;
      }
    }, {
      key: "Item",
      value: function Item(index) {
        return this.items[index] || null;
      }
    }, {
      key: "Add",
      value: function Add(item) {
        this.items.push(item);
        this.element = null;
      }
    }, {
      key: "Pop",
      value: function Pop() {
        this.element = null;
        return this.items.pop();
      }
    }, {
      key: "RemoveAt",
      value: function RemoveAt(index) {
        this.items = this.items.filter(function (item, index2) {
          return index2 !== index;
        });
        this.element = null;
      }
    }, {
      key: "Clear",
      value: function Clear() {
        this.items = new Array();
        this.element = null;
      }
    }, {
      key: "GetIterator",
      value: function GetIterator() {
        return this.items;
      }
    }, {
      key: "ForEach",
      value: function ForEach(cb) {
        this.GetIterator().forEach(cb);
      }
    }, {
      key: "Map",
      value: function Map(cb) {
        return new Collection(this.GetIterator().map(cb));
      }
    }, {
      key: "Filter",
      value: function Filter(cb) {
        return new Collection(this.GetIterator().filter(cb));
      }
    }, {
      key: "Sort",
      value: function Sort(cb) {
        return new Collection(this.GetIterator().sort(cb));
      }
    }, {
      key: "Every",
      value: function Every(cb) {
        return this.GetIterator().every(cb);
      }
    }, {
      key: "Some",
      value: function Some(cb) {
        return this.GetIterator().some(cb);
      }
    }, {
      key: "IsEmpty",
      value: function IsEmpty() {
        return this.Count === 0;
      }
    }, {
      key: "OnGetXml",
      value: function OnGetXml(element) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.GetIterator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            var el = item.GetXml();

            if (el) {
              element.appendChild(el);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: "OnLoadXml",
      value: function OnLoadXml(element) {
        var self = this.GetStatic();

        if (!self.parser) {
          throw new XmlError(XE.XML_EXCEPTION, "".concat(self.localName, " doesn't have required 'parser' in @XmlElement"));
        }

        for (var i = 0; i < element.childNodes.length; i++) {
          var node = element.childNodes.item(i);

          if (!(isElement(node) && node.localName === self.parser.localName && node.namespaceURI == self.namespaceURI)) {
            continue;
          }

          var el = node;
          var item = new self.parser();
          item.LoadXml(el);
          this.Add(item);
        }
      }
    }, {
      key: "Count",
      get: function get() {
        return this.items.length;
      }
    }]);

    return XmlCollection;
  }(XmlObject);

  var NamespaceManager = function (_Collection) {
    _inherits(NamespaceManager, _Collection);

    function NamespaceManager() {
      _classCallCheck(this, NamespaceManager);

      return _possibleConstructorReturn(this, _getPrototypeOf(NamespaceManager).apply(this, arguments));
    }

    _createClass(NamespaceManager, [{
      key: "Add",
      value: function Add(item) {
        item.prefix = item.prefix || "";
        item.namespace = item.namespace || "";

        _get(_getPrototypeOf(NamespaceManager.prototype), "Add", this).call(this, item);
      }
    }, {
      key: "GetPrefix",
      value: function GetPrefix(prefix) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.Count - 1;
        var lim = this.Count - 1;
        prefix = prefix || "";

        if (start > lim) {
          start = lim;
        }

        for (var i = start; i >= 0; i--) {
          var item = this.items[i];

          if (item.prefix === prefix) {
            return item;
          }
        }

        return null;
      }
    }, {
      key: "GetNamespace",
      value: function GetNamespace(namespaceUrl) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.Count - 1;
        var lim = this.Count - 1;
        namespaceUrl = namespaceUrl || "";

        if (start > lim) {
          start = lim;
        }

        for (var i = start; i >= 0; i--) {
          var item = this.items[i];

          if (item.namespace === namespaceUrl) {
            return item;
          }
        }

        return null;
      }
    }]);

    return NamespaceManager;
  }(Collection);

  var XmlXades = {
    DefaultPrefix: "xades",
    NamespaceURI: "http://uri.etsi.org/01903/v1.3.2#",
    SignedPropertiesType: "http://uri.etsi.org/01903/v1.3.2#SignedProperties",
    ElementNames: {
      Any: "Any",
      ByName: "ByName",
      ByKey: "ByKey",
      AttrAuthoritiesCertValues: "AttrAuthoritiesCertValues",
      AttributeRevocationValues: "AttributeRevocationValues",
      AttributeCertificateRefs: "AttributeCertificateRefs",
      AttributeRevocationRefs: "AttributeRevocationRefs",
      QualifyingProperties: "QualifyingProperties",
      QualifyingPropertiesReference: "QualifyingPropertiesReference",
      SignedProperties: "SignedProperties",
      SignedSignatureProperties: "SignedSignatureProperties",
      SignedDataObjectProperties: "SignedDataObjectProperties",
      UnsignedProperties: "UnsignedProperties",
      UnsignedSignatureProperties: "UnsignedSignatureProperties",
      UnsignedDataObjectProperties: "UnsignedDataObjectProperties",
      UnsignedDataObjectProperty: "UnsignedDataObjectProperty",
      SigningTime: "SigningTime",
      SigningCertificate: "SigningCertificate",
      SignaturePolicyIdentifier: "SignaturePolicyIdentifier",
      SignatureProductionPlace: "SignatureProductionPlace",
      SignerRole: "SignerRole",
      Cert: "Cert",
      CertDigest: "CertDigest",
      IssuerSerial: "IssuerSerial",
      DataObjectFormat: "DataObjectFormat",
      CommitmentTypeIndication: "CommitmentTypeIndication",
      AllDataObjectsTimeStamp: "AllDataObjectsTimeStamp",
      IndividualDataObjectsTimeStamp: "IndividualDataObjectsTimeStamp",
      HashDataInfo: "HashDataInfo",
      EncapsulatedTimeStamp: "EncapsulatedTimeStamp",
      XMLTimeStamp: "XMLTimeStamp",
      XAdESTimeStamp: "XAdESTimeStamp",
      OtherTimeStamp: "OtherTimeStamp",
      Description: "Description",
      ObjectIdentifier: "ObjectIdentifier",
      MimeType: "MimeType",
      Encoding: "Encoding",
      Identifier: "Identifier",
      DocumentationReferences: "DocumentationReferences",
      DocumentationReference: "DocumentationReference",
      CommitmentTypeId: "CommitmentTypeId",
      ObjectReference: "ObjectReference",
      CommitmentTypeQualifiers: "CommitmentTypeQualifiers",
      AllSignedDataObjects: "AllSignedDataObjects",
      CommitmentTypeQualifier: "CommitmentTypeQualifier",
      SignaturePolicyId: "SignaturePolicyId",
      SignaturePolicyImplied: "SignaturePolicyImplied",
      SigPolicyId: "SigPolicyId",
      SigPolicyHash: "SigPolicyHash",
      SigPolicyQualifier: "SigPolicyQualifier",
      SigPolicyQualifiers: "SigPolicyQualifiers",
      SPURI: "SPURI",
      SPUserNotice: "SPUserNotice",
      NoticeRef: "NoticeRef",
      ExplicitText: "ExplicitText",
      ClaimedRoles: "ClaimedRoles",
      ClaimedRole: "ClaimedRole",
      CertifiedRoles: "CertifiedRoles",
      CertifiedRole: "CertifiedRole",
      Organization: "Organization",
      NoticeNumbers: "NoticeNumbers",
      Int: "int",
      City: "City",
      PostalCode: "PostalCode",
      StateOrProvince: "StateOrProvince",
      CountryName: "CountryName",
      CounterSignature: "CounterSignature",
      SignatureTimeStamp: "SignatureTimeStamp",
      CompleteCertificateRefs: "CompleteCertificateRefs",
      CompleteRevocationRefs: "CompleteRevocationRefs",
      SigAndRefsTimeStamp: "SigAndRefsTimeStamp",
      RefsOnlyTimeStamp: "RefsOnlyTimeStamp",
      CertificateValues: "CertificateValues",
      RevocationValues: "RevocationValues",
      ArchiveTimeStamp: "ArchiveTimeStamp",
      CertRefs: "CertRefs",
      CRLRefs: "CRLRefs",
      CRLRef: "CRLRef",
      OCSPRefs: "OCSPRefs",
      OtherRefs: "OtherRefs",
      OtherRef: "OtherRef",
      DigestAlgAndValue: "DigestAlgAndValue",
      CRLIdentifier: "CRLIdentifier",
      Issuer: "Issuer",
      IssueTime: "IssueTime",
      Number: "Number",
      OCSPRef: "OCSPRef",
      OCSPIdentifier: "OCSPIdentifier",
      ResponderID: "ResponderID",
      ProducedAt: "ProducedAt",
      EncapsulatedX509Certificate: "EncapsulatedX509Certificate",
      OtherCertificate: "OtherCertificate",
      CRLValues: "CRLValues",
      OCSPValues: "OCSPValues",
      OtherValues: "OtherValues",
      OtherValue: "OtherValue",
      EncapsulatedCRLValue: "EncapsulatedCRLValue",
      EncapsulatedOCSPValue: "EncapsulatedOCSPValue",
      ReferenceInfo: "ReferenceInfo",
      Include: "Include"
    },
    AttributeNames: {
      Id: "Id",
      Encoding: "Encoding",
      Target: "Target",
      ObjectReference: "ObjectReference",
      Qualifier: "Qualifier",
      Uri: "uri",
      URI: "URI",
      ReferencedData: "referencedData"
    }
  };

  var XadesObject = function (_XmlObject2) {
    _inherits(XadesObject, _XmlObject2);

    function XadesObject() {
      _classCallCheck(this, XadesObject);

      return _possibleConstructorReturn(this, _getPrototypeOf(XadesObject).apply(this, arguments));
    }

    return XadesObject;
  }(XmlObject);

  XadesObject = __decorate([XmlElement({
    localName: "xades",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], XadesObject);

  var XadesCollection = function (_XmlCollection) {
    _inherits(XadesCollection, _XmlCollection);

    function XadesCollection() {
      _classCallCheck(this, XadesCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(XadesCollection).apply(this, arguments));
    }

    return XadesCollection;
  }(XmlCollection);

  XadesCollection = __decorate([XmlElement({
    localName: "xades_collection",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], XadesCollection);

  var Any = function (_XadesObject) {
    _inherits(Any, _XadesObject);

    function Any() {
      _classCallCheck(this, Any);

      return _possibleConstructorReturn(this, _getPrototypeOf(Any).apply(this, arguments));
    }

    return Any;
  }(XadesObject);

  __decorate([XmlContent()], Any.prototype, "Value", void 0);

  Any = __decorate([XmlElement({
    localName: XmlXades.ElementNames.Any
  })], Any);

  var AnyCollection = function (_XadesCollection) {
    _inherits(AnyCollection, _XadesCollection);

    function AnyCollection() {
      _classCallCheck(this, AnyCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnyCollection).apply(this, arguments));
    }

    return AnyCollection;
  }(XadesCollection);

  AnyCollection = __decorate([XmlElement({
    localName: XmlXades.ElementNames.Any
  })], AnyCollection);
  var XmlEncodingConverter = {
    get: function get(value) {
      switch (value) {
        case "der":
        case "ber":
        case "cer":
        case "per":
        case "xer":
          return "http://uri.etsi.org/01903/v1.2.2#".concat(value.toUpperCase());
      }

      return void 0;
    },
    set: function set(value) {
      var regexp = /#(\w+)$/;
      var res = regexp.exec(value);

      if (res) {
        return res[1].toLowerCase();
      }

      return null;
    }
  };

  var EncapsulatedPKIData = function (_XadesObject2) {
    _inherits(EncapsulatedPKIData, _XadesObject2);

    function EncapsulatedPKIData() {
      _classCallCheck(this, EncapsulatedPKIData);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedPKIData).apply(this, arguments));
    }

    return EncapsulatedPKIData;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], EncapsulatedPKIData.prototype, "Id", void 0);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Encoding,
    defaultValue: null,
    converter: XmlEncodingConverter
  })], EncapsulatedPKIData.prototype, "Encoding", void 0);

  __decorate([XmlContent({
    required: true,
    converter: XmlBase64Converter
  })], EncapsulatedPKIData.prototype, "Value", void 0);

  EncapsulatedPKIData = __decorate([XmlElement({
    localName: "EncapsulatedPKIData"
  })], EncapsulatedPKIData);

  var OtherCertificate = function (_Any) {
    _inherits(OtherCertificate, _Any);

    function OtherCertificate() {
      _classCallCheck(this, OtherCertificate);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherCertificate).apply(this, arguments));
    }

    return OtherCertificate;
  }(Any);

  OtherCertificate = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OtherCertificate
  })], OtherCertificate);

  var OtherCertificateCollection = function (_XadesCollection2) {
    _inherits(OtherCertificateCollection, _XadesCollection2);

    function OtherCertificateCollection() {
      _classCallCheck(this, OtherCertificateCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherCertificateCollection).apply(this, arguments));
    }

    return OtherCertificateCollection;
  }(XadesCollection);

  OtherCertificateCollection = __decorate([XmlElement({
    localName: "OtherCertificateCollection",
    parser: OtherCertificate
  })], OtherCertificateCollection);

  var EncapsulatedX509Certificate = function (_EncapsulatedPKIData) {
    _inherits(EncapsulatedX509Certificate, _EncapsulatedPKIData);

    function EncapsulatedX509Certificate() {
      _classCallCheck(this, EncapsulatedX509Certificate);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedX509Certificate).apply(this, arguments));
    }

    return EncapsulatedX509Certificate;
  }(EncapsulatedPKIData);

  EncapsulatedX509Certificate = __decorate([XmlElement({
    localName: XmlXades.ElementNames.EncapsulatedX509Certificate
  })], EncapsulatedX509Certificate);

  var EncapsulatedX509CertificateCollection = function (_XadesCollection3) {
    _inherits(EncapsulatedX509CertificateCollection, _XadesCollection3);

    function EncapsulatedX509CertificateCollection() {
      _classCallCheck(this, EncapsulatedX509CertificateCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedX509CertificateCollection).apply(this, arguments));
    }

    return EncapsulatedX509CertificateCollection;
  }(XadesCollection);

  EncapsulatedX509CertificateCollection = __decorate([XmlElement({
    localName: "EncapsulatedX509CertificateCollection",
    parser: EncapsulatedX509Certificate
  })], EncapsulatedX509CertificateCollection);

  var CertificateValues = function (_XadesObject3) {
    _inherits(CertificateValues, _XadesObject3);

    function CertificateValues() {
      _classCallCheck(this, CertificateValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(CertificateValues).apply(this, arguments));
    }

    return CertificateValues;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], CertificateValues.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: EncapsulatedX509CertificateCollection,
    noRoot: true
  })], CertificateValues.prototype, "EncapsulatedX509Certificates", void 0);

  __decorate([XmlChildElement({
    parser: OtherCertificateCollection,
    noRoot: true
  })], CertificateValues.prototype, "OtherCertificates", void 0);

  CertificateValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CertificateValues
  })], CertificateValues);

  var Identifier = function (_XadesObject4) {
    _inherits(Identifier, _XadesObject4);

    function Identifier() {
      _classCallCheck(this, Identifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(Identifier).apply(this, arguments));
    }

    return Identifier;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Qualifier
  })], Identifier.prototype, "Qualifier", void 0);

  __decorate([XmlContent({
    defaultValue: "",
    required: true
  })], Identifier.prototype, "Value", void 0);

  Identifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.Identifier
  })], Identifier);

  var DocumentationReference = function (_XadesObject5) {
    _inherits(DocumentationReference, _XadesObject5);

    function DocumentationReference() {
      _classCallCheck(this, DocumentationReference);

      return _possibleConstructorReturn(this, _getPrototypeOf(DocumentationReference).apply(this, arguments));
    }

    _createClass(DocumentationReference, [{
      key: "OnLoadXml",
      value: function OnLoadXml(e) {
        if (e.textContent) {
          this.Uri = e.textContent;
        }
      }
    }, {
      key: "OnGetXml",
      value: function OnGetXml(e) {
        if (this.Uri) {
          e.textContent = this.Uri;
        }
      }
    }]);

    return DocumentationReference;
  }(XadesObject);

  __decorate([XmlContent({
    defaultValue: "",
    required: true
  })], DocumentationReference.prototype, "Uri", void 0);

  DocumentationReference = __decorate([XmlElement({
    localName: XmlXades.ElementNames.DocumentationReference
  })], DocumentationReference);

  var DocumentationReferences = function (_XadesCollection4) {
    _inherits(DocumentationReferences, _XadesCollection4);

    function DocumentationReferences() {
      _classCallCheck(this, DocumentationReferences);

      return _possibleConstructorReturn(this, _getPrototypeOf(DocumentationReferences).apply(this, arguments));
    }

    return DocumentationReferences;
  }(XadesCollection);

  DocumentationReferences = __decorate([XmlElement({
    localName: XmlXades.ElementNames.DocumentationReferences,
    parser: DocumentationReference
  })], DocumentationReferences);

  var ObjectIdentifier = function (_XadesObject6) {
    _inherits(ObjectIdentifier, _XadesObject6);

    function ObjectIdentifier() {
      _classCallCheck(this, ObjectIdentifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(ObjectIdentifier).apply(this, arguments));
    }

    return ObjectIdentifier;
  }(XadesObject);

  __decorate([XmlChildElement({
    parser: Identifier,
    required: true
  })], ObjectIdentifier.prototype, "Identifier", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.Description,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    defaultValue: ""
  })], ObjectIdentifier.prototype, "Description", void 0);

  __decorate([XmlChildElement({
    parser: DocumentationReferences
  })], ObjectIdentifier.prototype, "DocumentationReferences", void 0);

  ObjectIdentifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.ObjectIdentifier
  })], ObjectIdentifier);

  var CommitmentTypeQualifier = function (_Any2) {
    _inherits(CommitmentTypeQualifier, _Any2);

    function CommitmentTypeQualifier() {
      _classCallCheck(this, CommitmentTypeQualifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(CommitmentTypeQualifier).apply(this, arguments));
    }

    return CommitmentTypeQualifier;
  }(Any);

  CommitmentTypeQualifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CommitmentTypeQualifier
  })], CommitmentTypeQualifier);

  var CommitmentTypeQualifiers = function (_XadesCollection5) {
    _inherits(CommitmentTypeQualifiers, _XadesCollection5);

    function CommitmentTypeQualifiers() {
      _classCallCheck(this, CommitmentTypeQualifiers);

      return _possibleConstructorReturn(this, _getPrototypeOf(CommitmentTypeQualifiers).apply(this, arguments));
    }

    return CommitmentTypeQualifiers;
  }(XadesCollection);

  CommitmentTypeQualifiers = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CommitmentTypeQualifiers,
    parser: CommitmentTypeQualifier
  })], CommitmentTypeQualifiers);

  var ObjectReference = function (_XadesObject7) {
    _inherits(ObjectReference, _XadesObject7);

    function ObjectReference() {
      _classCallCheck(this, ObjectReference);

      return _possibleConstructorReturn(this, _getPrototypeOf(ObjectReference).apply(this, arguments));
    }

    return ObjectReference;
  }(XadesObject);

  __decorate([XmlContent({
    required: true
  })], ObjectReference.prototype, "Value", void 0);

  ObjectReference = __decorate([XmlElement({
    localName: XmlXades.ElementNames.ObjectReference
  })], ObjectReference);

  var ObjectReferenceCollection = function (_XadesCollection6) {
    _inherits(ObjectReferenceCollection, _XadesCollection6);

    function ObjectReferenceCollection() {
      _classCallCheck(this, ObjectReferenceCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(ObjectReferenceCollection).apply(this, arguments));
    }

    return ObjectReferenceCollection;
  }(XadesCollection);

  ObjectReferenceCollection = __decorate([XmlElement({
    localName: "ObjectReferences",
    parser: ObjectReference
  })], ObjectReferenceCollection);
  var XmlAllSignedDataObjectsConverter = {
    set: function set(value) {
      return true;
    },
    get: function get(value) {
      return void 0;
    }
  };

  var CommitmentTypeIndication = function (_XadesObject8) {
    _inherits(CommitmentTypeIndication, _XadesObject8);

    function CommitmentTypeIndication() {
      _classCallCheck(this, CommitmentTypeIndication);

      return _possibleConstructorReturn(this, _getPrototypeOf(CommitmentTypeIndication).apply(this, arguments));
    }

    return CommitmentTypeIndication;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.CommitmentTypeId,
    required: true,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    parser: ObjectIdentifier
  })], CommitmentTypeIndication.prototype, "CommitmentTypeId", void 0);

  __decorate([XmlChildElement({
    parser: ObjectReferenceCollection,
    noRoot: true
  })], CommitmentTypeIndication.prototype, "ObjectReference", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.AllSignedDataObjects,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    converter: XmlAllSignedDataObjectsConverter,
    defaultValue: false
  })], CommitmentTypeIndication.prototype, "AllSignedDataObjects", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.CommitmentTypeQualifiers,
    parser: CommitmentTypeQualifier
  })], CommitmentTypeIndication.prototype, "CommitmentTypeQualifiers", void 0);

  CommitmentTypeIndication = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CommitmentTypeIndication
  })], CommitmentTypeIndication);

  function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  function getUTCDate(date) {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  }

  function getParametersValue(parameters, name, defaultValue) {
    if (parameters instanceof Object === false) return defaultValue;
    if (name in parameters) return parameters[name];
    return defaultValue;
  }

  function bufferToHexCodes(inputBuffer) {
    var inputOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var inputLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : inputBuffer.byteLength - inputOffset;
    var insertSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var result = "";
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = new Uint8Array(inputBuffer, inputOffset, inputLength)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        var str = item.toString(16).toUpperCase();
        if (str.length === 1) result += "0";
        result += str;
        if (insertSpace) result += " ";
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return result.trim();
  }

  function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
    if (inputBuffer instanceof ArrayBuffer === false) {
      baseBlock.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"";
      return false;
    }

    if (inputBuffer.byteLength === 0) {
      baseBlock.error = "Wrong parameter: inputBuffer has zero length";
      return false;
    }

    if (inputOffset < 0) {
      baseBlock.error = "Wrong parameter: inputOffset less than zero";
      return false;
    }

    if (inputLength < 0) {
      baseBlock.error = "Wrong parameter: inputLength less than zero";
      return false;
    }

    if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
      baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
      return false;
    }

    return true;
  }

  function utilFromBase(inputBuffer, inputBase) {
    var result = 0;
    if (inputBuffer.length === 1) return inputBuffer[0];

    for (var i = inputBuffer.length - 1; i >= 0; i--) {
      result += inputBuffer[inputBuffer.length - 1 - i] * Math.pow(2, inputBase * i);
    }

    return result;
  }

  function utilToBase(value, base) {
    var reserved = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    var internalReserved = reserved;
    var internalValue = value;
    var result = 0;
    var biggest = Math.pow(2, base);

    for (var i = 1; i < 8; i++) {
      if (value < biggest) {
        var retBuf = void 0;

        if (internalReserved < 0) {
          retBuf = new ArrayBuffer(i);
          result = i;
        } else {
          if (internalReserved < i) return new ArrayBuffer(0);
          retBuf = new ArrayBuffer(internalReserved);
          result = internalReserved;
        }

        var retView = new Uint8Array(retBuf);

        for (var j = i - 1; j >= 0; j--) {
          var basis = Math.pow(2, j * base);
          retView[result - j - 1] = Math.floor(internalValue / basis);
          internalValue -= retView[result - j - 1] * basis;
        }

        return retBuf;
      }

      biggest *= Math.pow(2, base);
    }

    return new ArrayBuffer(0);
  }

  function utilConcatBuf() {
    var outputLength = 0;
    var prevLength = 0;

    for (var _len5 = arguments.length, buffers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      buffers[_key5] = arguments[_key5];
    }

    for (var _i = 0, _buffers = buffers; _i < _buffers.length; _i++) {
      var buffer = _buffers[_i];
      outputLength += buffer.byteLength;
    }

    var retBuf = new ArrayBuffer(outputLength);
    var retView = new Uint8Array(retBuf);

    for (var _i2 = 0, _buffers2 = buffers; _i2 < _buffers2.length; _i2++) {
      var _buffer = _buffers2[_i2];
      retView.set(new Uint8Array(_buffer), prevLength);
      prevLength += _buffer.byteLength;
    }

    return retBuf;
  }

  function utilConcatView() {
    var outputLength = 0;
    var prevLength = 0;

    for (var _len6 = arguments.length, views = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      views[_key6] = arguments[_key6];
    }

    for (var _i3 = 0, _views = views; _i3 < _views.length; _i3++) {
      var view = _views[_i3];
      outputLength += view.length;
    }

    var retBuf = new ArrayBuffer(outputLength);
    var retView = new Uint8Array(retBuf);

    for (var _i4 = 0, _views2 = views; _i4 < _views2.length; _i4++) {
      var _view2 = _views2[_i4];
      retView.set(_view2, prevLength);
      prevLength += _view2.length;
    }

    return retView;
  }

  function utilDecodeTC() {
    var buf = new Uint8Array(this.valueHex);

    if (this.valueHex.byteLength >= 2) {
      var condition1 = buf[0] === 0xFF && buf[1] & 0x80;
      var condition2 = buf[0] === 0x00 && (buf[1] & 0x80) === 0x00;
      if (condition1 || condition2) this.warnings.push("Needlessly long format");
    }

    var bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    var bigIntView = new Uint8Array(bigIntBuffer);

    for (var i = 0; i < this.valueHex.byteLength; i++) {
      bigIntView[i] = 0;
    }

    bigIntView[0] = buf[0] & 0x80;
    var bigInt = utilFromBase(bigIntView, 8);
    var smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    var smallIntView = new Uint8Array(smallIntBuffer);

    for (var j = 0; j < this.valueHex.byteLength; j++) {
      smallIntView[j] = buf[j];
    }

    smallIntView[0] &= 0x7F;
    var smallInt = utilFromBase(smallIntView, 8);
    return smallInt - bigInt;
  }

  function utilEncodeTC(value) {
    var modValue = value < 0 ? value * -1 : value;
    var bigInt = 128;

    for (var i = 1; i < 8; i++) {
      if (modValue <= bigInt) {
        if (value < 0) {
          var smallInt = bigInt - modValue;

          var _retBuf = utilToBase(smallInt, 8, i);

          var _retView = new Uint8Array(_retBuf);

          _retView[0] |= 0x80;
          return _retBuf;
        }

        var retBuf = utilToBase(modValue, 8, i);
        var retView = new Uint8Array(retBuf);

        if (retView[0] & 0x80) {
          var tempBuf = retBuf.slice(0);
          var tempView = new Uint8Array(tempBuf);
          retBuf = new ArrayBuffer(retBuf.byteLength + 1);
          retView = new Uint8Array(retBuf);

          for (var k = 0; k < tempBuf.byteLength; k++) {
            retView[k + 1] = tempView[k];
          }

          retView[0] = 0x00;
        }

        return retBuf;
      }

      bigInt *= Math.pow(2, 8);
    }

    return new ArrayBuffer(0);
  }

  function isEqualBuffer(inputBuffer1, inputBuffer2) {
    if (inputBuffer1.byteLength !== inputBuffer2.byteLength) return false;
    var view1 = new Uint8Array(inputBuffer1);
    var view2 = new Uint8Array(inputBuffer2);

    for (var i = 0; i < view1.length; i++) {
      if (view1[i] !== view2[i]) return false;
    }

    return true;
  }

  function padNumber(inputNumber, fullLength) {
    var str = inputNumber.toString(10);
    if (fullLength < str.length) return "";
    var dif = fullLength - str.length;
    var padding = new Array(dif);

    for (var i = 0; i < dif; i++) {
      padding[i] = "0";
    }

    var paddingString = padding.join("");
    return paddingString.concat(str);
  }

  var base64Template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var base64UrlTemplate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

  function toBase64(input) {
    var useUrlTemplate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var skipPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var skipLeadingZeros = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var i = 0;
    var flag1 = 0;
    var flag2 = 0;
    var output = "";
    var template = useUrlTemplate ? base64UrlTemplate : base64Template;

    if (skipLeadingZeros) {
      var nonZeroPosition = 0;

      for (var _i5 = 0; _i5 < input.length; _i5++) {
        if (input.charCodeAt(_i5) !== 0) {
          nonZeroPosition = _i5;
          break;
        }
      }

      input = input.slice(nonZeroPosition);
    }

    while (i < input.length) {
      var chr1 = input.charCodeAt(i++);
      if (i >= input.length) flag1 = 1;
      var chr2 = input.charCodeAt(i++);
      if (i >= input.length) flag2 = 1;
      var chr3 = input.charCodeAt(i++);
      var enc1 = chr1 >> 2;
      var enc2 = (chr1 & 0x03) << 4 | chr2 >> 4;
      var enc3 = (chr2 & 0x0F) << 2 | chr3 >> 6;
      var enc4 = chr3 & 0x3F;

      if (flag1 === 1) {
        enc3 = enc4 = 64;
      } else {
        if (flag2 === 1) {
          enc4 = 64;
        }
      }

      if (skipPadding) {
        if (enc3 === 64) output += "".concat(template.charAt(enc1)).concat(template.charAt(enc2));else {
          if (enc4 === 64) output += "".concat(template.charAt(enc1)).concat(template.charAt(enc2)).concat(template.charAt(enc3));else output += "".concat(template.charAt(enc1)).concat(template.charAt(enc2)).concat(template.charAt(enc3)).concat(template.charAt(enc4));
        }
      } else output += "".concat(template.charAt(enc1)).concat(template.charAt(enc2)).concat(template.charAt(enc3)).concat(template.charAt(enc4));
    }

    return output;
  }

  function fromBase64(input) {
    var useUrlTemplate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cutTailZeros = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var template = useUrlTemplate ? base64UrlTemplate : base64Template;

    function indexof(toSearch) {
      for (var _i6 = 0; _i6 < 64; _i6++) {
        if (template.charAt(_i6) === toSearch) return _i6;
      }

      return 64;
    }

    function test(incoming) {
      return incoming === 64 ? 0x00 : incoming;
    }

    var i = 0;
    var output = "";

    while (i < input.length) {
      var enc1 = indexof(input.charAt(i++));
      var enc2 = i >= input.length ? 0x00 : indexof(input.charAt(i++));
      var enc3 = i >= input.length ? 0x00 : indexof(input.charAt(i++));
      var enc4 = i >= input.length ? 0x00 : indexof(input.charAt(i++));
      var chr1 = test(enc1) << 2 | test(enc2) >> 4;
      var chr2 = (test(enc2) & 0x0F) << 4 | test(enc3) >> 2;
      var chr3 = (test(enc3) & 0x03) << 6 | test(enc4);
      output += String.fromCharCode(chr1);
      if (enc3 !== 64) output += String.fromCharCode(chr2);
      if (enc4 !== 64) output += String.fromCharCode(chr3);
    }

    if (cutTailZeros) {
      var outputLength = output.length;
      var nonZeroStart = -1;

      for (var _i7 = outputLength - 1; _i7 >= 0; _i7--) {
        if (output.charCodeAt(_i7) !== 0) {
          nonZeroStart = _i7;
          break;
        }
      }

      if (nonZeroStart !== -1) output = output.slice(0, nonZeroStart + 1);else output = "";
    }

    return output;
  }

  function arrayBufferToString(buffer) {
    var resultString = "";
    var view = new Uint8Array(buffer);
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = view[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var element = _step3.value;
        resultString += String.fromCharCode(element);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return resultString;
  }

  function stringToArrayBuffer(str) {
    var stringLength = str.length;
    var resultBuffer = new ArrayBuffer(stringLength);
    var resultView = new Uint8Array(resultBuffer);

    for (var i = 0; i < stringLength; i++) {
      resultView[i] = str.charCodeAt(i);
    }

    return resultBuffer;
  }

  var log2 = Math.log(2);

  function nearestPowerOf2(length) {
    var base = Math.log(length) / log2;
    var floor = Math.floor(base);
    var round = Math.round(base);
    return floor === round ? floor : round;
  }

  function clearProps(object, propsArray) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = propsArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var prop = _step4.value;
        delete object[prop];
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  var utils = Object.freeze({
    __proto__: null,
    getUTCDate: getUTCDate,
    getParametersValue: getParametersValue,
    bufferToHexCodes: bufferToHexCodes,
    checkBufferParams: checkBufferParams,
    utilFromBase: utilFromBase,
    utilToBase: utilToBase,
    utilConcatBuf: utilConcatBuf,
    utilConcatView: utilConcatView,
    utilDecodeTC: utilDecodeTC,
    utilEncodeTC: utilEncodeTC,
    isEqualBuffer: isEqualBuffer,
    padNumber: padNumber,
    toBase64: toBase64,
    fromBase64: fromBase64,
    arrayBufferToString: arrayBufferToString,
    stringToArrayBuffer: stringToArrayBuffer,
    nearestPowerOf2: nearestPowerOf2,
    clearProps: clearProps
  });
  var asn1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromBER = fromBER;
    exports.compareSchema = compareSchema;
    exports.verifySchema = verifySchema;
    exports.fromJSON = fromJSON;
    exports.RawData = exports.Repeated = exports.Any = exports.Choice = exports.TIME = exports.Duration = exports.DateTime = exports.TimeOfDay = exports.DATE = exports.GeneralizedTime = exports.UTCTime = exports.CharacterString = exports.GeneralString = exports.VisibleString = exports.GraphicString = exports.IA5String = exports.VideotexString = exports.TeletexString = exports.PrintableString = exports.NumericString = exports.UniversalString = exports.BmpString = exports.RelativeObjectIdentifier = exports.Utf8String = exports.ObjectIdentifier = exports.Enumerated = exports.Integer = exports.BitString = exports.OctetString = exports.Null = exports.Set = exports.Sequence = exports.Boolean = exports.EndOfContent = exports.Constructed = exports.Primitive = exports.BaseBlock = exports.ValueBlock = exports.HexBlock = void 0;
    var powers2 = [new Uint8Array([1])];
    var digitsString = "0123456789";

    var LocalBaseBlock = function () {
      function LocalBaseBlock() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBaseBlock);

        this.blockLength = (0, utils.getParametersValue)(parameters, "blockLength", 0);
        this.error = (0, utils.getParametersValue)(parameters, "error", "");
        this.warnings = (0, utils.getParametersValue)(parameters, "warnings", []);
        if ("valueBeforeDecode" in parameters) this.valueBeforeDecode = parameters.valueBeforeDecode.slice(0);else this.valueBeforeDecode = new ArrayBuffer(0);
      }

      _createClass(LocalBaseBlock, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            blockName: this.constructor.blockName(),
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: (0, utils.bufferToHexCodes)(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
          };
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "baseBlock";
        }
      }]);

      return LocalBaseBlock;
    }();

    var HexBlock = function HexBlock(BaseClass) {
      return function (_BaseClass) {
        _inherits(LocalHexBlockMixin, _BaseClass);

        function LocalHexBlockMixin() {
          var _this3;

          var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, LocalHexBlockMixin);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(LocalHexBlockMixin).call(this, parameters));
          _this3.isHexOnly = (0, utils.getParametersValue)(parameters, "isHexOnly", false);
          if ("valueHex" in parameters) _this3.valueHex = parameters.valueHex.slice(0);else _this3.valueHex = new ArrayBuffer(0);
          return _this3;
        }

        _createClass(LocalHexBlockMixin, [{
          key: "fromBER",
          value: function fromBER(inputBuffer, inputOffset, inputLength) {
            if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
            var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

            if (intBuffer.length === 0) {
              this.warnings.push("Zero buffer length");
              return inputOffset;
            }

            this.valueHex = inputBuffer.slice(inputOffset, inputOffset + inputLength);
            this.blockLength = inputLength;
            return inputOffset + inputLength;
          }
        }, {
          key: "toBER",
          value: function toBER() {
            var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.isHexOnly !== true) {
              this.error = "Flag \"isHexOnly\" is not set, abort";
              return new ArrayBuffer(0);
            }

            if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
            return this.valueHex.slice(0);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var object = {};

            try {
              object = _get(_getPrototypeOf(LocalHexBlockMixin.prototype), "toJSON", this).call(this);
            } catch (ex) {}

            object.blockName = this.constructor.blockName();
            object.isHexOnly = this.isHexOnly;
            object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
            return object;
          }
        }], [{
          key: "blockName",
          value: function blockName() {
            return "hexBlock";
          }
        }]);

        return LocalHexBlockMixin;
      }(BaseClass);
    };

    exports.HexBlock = HexBlock;

    var LocalIdentificationBlock = function (_HexBlock) {
      _inherits(LocalIdentificationBlock, _HexBlock);

      function LocalIdentificationBlock() {
        var _this4;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalIdentificationBlock);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(LocalIdentificationBlock).call(this));

        if ("idBlock" in parameters) {
          _this4.isHexOnly = (0, utils.getParametersValue)(parameters.idBlock, "isHexOnly", false);
          _this4.valueHex = (0, utils.getParametersValue)(parameters.idBlock, "valueHex", new ArrayBuffer(0));
          _this4.tagClass = (0, utils.getParametersValue)(parameters.idBlock, "tagClass", -1);
          _this4.tagNumber = (0, utils.getParametersValue)(parameters.idBlock, "tagNumber", -1);
          _this4.isConstructed = (0, utils.getParametersValue)(parameters.idBlock, "isConstructed", false);
        } else {
          _this4.tagClass = -1;
          _this4.tagNumber = -1;
          _this4.isConstructed = false;
        }

        return _this4;
      }

      _createClass(LocalIdentificationBlock, [{
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var firstOctet = 0;
          var retBuf;
          var retView;

          switch (this.tagClass) {
            case 1:
              firstOctet |= 0x00;
              break;

            case 2:
              firstOctet |= 0x40;
              break;

            case 3:
              firstOctet |= 0x80;
              break;

            case 4:
              firstOctet |= 0xC0;
              break;

            default:
              this.error = "Unknown tag class";
              return new ArrayBuffer(0);
          }

          if (this.isConstructed) firstOctet |= 0x20;

          if (this.tagNumber < 31 && !this.isHexOnly) {
            retBuf = new ArrayBuffer(1);
            retView = new Uint8Array(retBuf);

            if (!sizeOnly) {
              var number = this.tagNumber;
              number &= 0x1F;
              firstOctet |= number;
              retView[0] = firstOctet;
            }

            return retBuf;
          }

          if (this.isHexOnly === false) {
            var encodedBuf = (0, utils.utilToBase)(this.tagNumber, 7);
            var encodedView = new Uint8Array(encodedBuf);
            var size = encodedBuf.byteLength;
            retBuf = new ArrayBuffer(size + 1);
            retView = new Uint8Array(retBuf);
            retView[0] = firstOctet | 0x1F;

            if (!sizeOnly) {
              for (var i = 0; i < size - 1; i++) {
                retView[i + 1] = encodedView[i] | 0x80;
              }

              retView[size] = encodedView[size - 1];
            }

            return retBuf;
          }

          retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
          retView = new Uint8Array(retBuf);
          retView[0] = firstOctet | 0x1F;

          if (sizeOnly === false) {
            var curView = new Uint8Array(this.valueHex);

            for (var _i8 = 0; _i8 < curView.length - 1; _i8++) {
              retView[_i8 + 1] = curView[_i8] | 0x80;
            }

            retView[this.valueHex.byteLength] = curView[curView.length - 1];
          }

          return retBuf;
        }
      }, {
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
          }

          var tagClassMask = intBuffer[0] & 0xC0;

          switch (tagClassMask) {
            case 0x00:
              this.tagClass = 1;
              break;

            case 0x40:
              this.tagClass = 2;
              break;

            case 0x80:
              this.tagClass = 3;
              break;

            case 0xC0:
              this.tagClass = 4;
              break;

            default:
              this.error = "Unknown tag class";
              return -1;
          }

          this.isConstructed = (intBuffer[0] & 0x20) === 0x20;
          this.isHexOnly = false;
          var tagNumberMask = intBuffer[0] & 0x1F;

          if (tagNumberMask !== 0x1F) {
            this.tagNumber = tagNumberMask;
            this.blockLength = 1;
          } else {
              var count = 1;
              this.valueHex = new ArrayBuffer(255);
              var tagNumberBufferMaxLength = 255;
              var intTagNumberBuffer = new Uint8Array(this.valueHex);

              while (intBuffer[count] & 0x80) {
                intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
                count++;

                if (count >= intBuffer.length) {
                  this.error = "End of input reached before message was fully decoded";
                  return -1;
                }

                if (count === tagNumberBufferMaxLength) {
                  tagNumberBufferMaxLength += 255;

                  var _tempBuffer = new ArrayBuffer(tagNumberBufferMaxLength);

                  var _tempBufferView = new Uint8Array(_tempBuffer);

                  for (var i = 0; i < intTagNumberBuffer.length; i++) {
                    _tempBufferView[i] = intTagNumberBuffer[i];
                  }

                  this.valueHex = new ArrayBuffer(tagNumberBufferMaxLength);
                  intTagNumberBuffer = new Uint8Array(this.valueHex);
                }
              }

              this.blockLength = count + 1;
              intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
              var tempBuffer = new ArrayBuffer(count);
              var tempBufferView = new Uint8Array(tempBuffer);

              for (var _i9 = 0; _i9 < count; _i9++) {
                tempBufferView[_i9] = intTagNumberBuffer[_i9];
              }

              this.valueHex = new ArrayBuffer(count);
              intTagNumberBuffer = new Uint8Array(this.valueHex);
              intTagNumberBuffer.set(tempBufferView);
              if (this.blockLength <= 9) this.tagNumber = (0, utils.utilFromBase)(intTagNumberBuffer, 7);else {
                this.isHexOnly = true;
                this.warnings.push("Tag too long, represented as hex-coded");
              }
            }

          if (this.tagClass === 1 && this.isConstructed) {
            switch (this.tagNumber) {
              case 1:
              case 2:
              case 5:
              case 6:
              case 9:
              case 13:
              case 14:
              case 23:
              case 24:
              case 31:
              case 32:
              case 33:
              case 34:
                this.error = "Constructed encoding used for primitive type";
                return -1;
            }
          }

          return inputOffset + this.blockLength;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalIdentificationBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.blockName = this.constructor.blockName();
          object.tagClass = this.tagClass;
          object.tagNumber = this.tagNumber;
          object.isConstructed = this.isConstructed;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "identificationBlock";
        }
      }]);

      return LocalIdentificationBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalLengthBlock = function (_LocalBaseBlock) {
      _inherits(LocalLengthBlock, _LocalBaseBlock);

      function LocalLengthBlock() {
        var _this5;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalLengthBlock);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(LocalLengthBlock).call(this));

        if ("lenBlock" in parameters) {
          _this5.isIndefiniteForm = (0, utils.getParametersValue)(parameters.lenBlock, "isIndefiniteForm", false);
          _this5.longFormUsed = (0, utils.getParametersValue)(parameters.lenBlock, "longFormUsed", false);
          _this5.length = (0, utils.getParametersValue)(parameters.lenBlock, "length", 0);
        } else {
          _this5.isIndefiniteForm = false;
          _this5.longFormUsed = false;
          _this5.length = 0;
        }

        return _this5;
      }

      _createClass(LocalLengthBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
          }

          if (intBuffer[0] === 0xFF) {
            this.error = "Length block 0xFF is reserved by standard";
            return -1;
          }

          this.isIndefiniteForm = intBuffer[0] === 0x80;

          if (this.isIndefiniteForm === true) {
            this.blockLength = 1;
            return inputOffset + this.blockLength;
          }

          this.longFormUsed = !!(intBuffer[0] & 0x80);

          if (this.longFormUsed === false) {
            this.length = intBuffer[0];
            this.blockLength = 1;
            return inputOffset + this.blockLength;
          }

          var count = intBuffer[0] & 0x7F;

          if (count > 8) {
              this.error = "Too big integer";
              return -1;
            }

          if (count + 1 > intBuffer.length) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          }

          var lengthBufferView = new Uint8Array(count);

          for (var i = 0; i < count; i++) {
            lengthBufferView[i] = intBuffer[i + 1];
          }

          if (lengthBufferView[count - 1] === 0x00) this.warnings.push("Needlessly long encoded length");
          this.length = (0, utils.utilFromBase)(lengthBufferView, 8);
          if (this.longFormUsed && this.length <= 127) this.warnings.push("Unneccesary usage of long length form");
          this.blockLength = count + 1;
          return inputOffset + this.blockLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var retView;
          if (this.length > 127) this.longFormUsed = true;

          if (this.isIndefiniteForm) {
            retBuf = new ArrayBuffer(1);

            if (sizeOnly === false) {
              retView = new Uint8Array(retBuf);
              retView[0] = 0x80;
            }

            return retBuf;
          }

          if (this.longFormUsed === true) {
            var encodedBuf = (0, utils.utilToBase)(this.length, 8);

            if (encodedBuf.byteLength > 127) {
              this.error = "Too big length";
              return new ArrayBuffer(0);
            }

            retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
            if (sizeOnly === true) return retBuf;
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            retView[0] = encodedBuf.byteLength | 0x80;

            for (var i = 0; i < encodedBuf.byteLength; i++) {
              retView[i + 1] = encodedView[i];
            }

            return retBuf;
          }

          retBuf = new ArrayBuffer(1);

          if (sizeOnly === false) {
            retView = new Uint8Array(retBuf);
            retView[0] = this.length;
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalLengthBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.blockName = this.constructor.blockName();
          object.isIndefiniteForm = this.isIndefiniteForm;
          object.longFormUsed = this.longFormUsed;
          object.length = this.length;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "lengthBlock";
        }
      }]);

      return LocalLengthBlock;
    }(LocalBaseBlock);

    var ValueBlock = function (_LocalBaseBlock2) {
      _inherits(ValueBlock, _LocalBaseBlock2);

      function ValueBlock() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ValueBlock);

        return _possibleConstructorReturn(this, _getPrototypeOf(ValueBlock).call(this, parameters));
      }

      _createClass(ValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        }
      }, {
        key: "toBER",
        value: function toBER() {
          throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "valueBlock";
        }
      }]);

      return ValueBlock;
    }(LocalBaseBlock);

    exports.ValueBlock = ValueBlock;

    var BaseBlock = function (_LocalBaseBlock3) {
      _inherits(BaseBlock, _LocalBaseBlock3);

      function BaseBlock() {
        var _this6;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var valueBlockType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ValueBlock;

        _classCallCheck(this, BaseBlock);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(BaseBlock).call(this, parameters));
        if ("name" in parameters) _this6.name = parameters.name;
        if ("optional" in parameters) _this6.optional = parameters.optional;
        if ("primitiveSchema" in parameters) _this6.primitiveSchema = parameters.primitiveSchema;
        _this6.idBlock = new LocalIdentificationBlock(parameters);
        _this6.lenBlock = new LocalLengthBlock(parameters);
        _this6.valueBlock = new valueBlockType(parameters);
        return _this6;
      }

      _createClass(BaseBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var idBlockBuf = this.idBlock.toBER(sizeOnly);
          var valueBlockSizeBuf = this.valueBlock.toBER(true);
          this.lenBlock.length = valueBlockSizeBuf.byteLength;
          var lenBlockBuf = this.lenBlock.toBER(sizeOnly);
          retBuf = (0, utils.utilConcatBuf)(idBlockBuf, lenBlockBuf);
          var valueBlockBuf;
          if (sizeOnly === false) valueBlockBuf = this.valueBlock.toBER(sizeOnly);else valueBlockBuf = new ArrayBuffer(this.lenBlock.length);
          retBuf = (0, utils.utilConcatBuf)(retBuf, valueBlockBuf);

          if (this.lenBlock.isIndefiniteForm === true) {
            var indefBuf = new ArrayBuffer(2);

            if (sizeOnly === false) {
              var indefView = new Uint8Array(indefBuf);
              indefView[0] = 0x00;
              indefView[1] = 0x00;
            }

            retBuf = (0, utils.utilConcatBuf)(retBuf, indefBuf);
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(BaseBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.idBlock = this.idBlock.toJSON();
          object.lenBlock = this.lenBlock.toJSON();
          object.valueBlock = this.valueBlock.toJSON();
          if ("name" in this) object.name = this.name;
          if ("optional" in this) object.optional = this.optional;
          if ("primitiveSchema" in this) object.primitiveSchema = this.primitiveSchema.toJSON();
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BaseBlock";
        }
      }]);

      return BaseBlock;
    }(LocalBaseBlock);

    exports.BaseBlock = BaseBlock;

    var LocalPrimitiveValueBlock = function (_ValueBlock) {
      _inherits(LocalPrimitiveValueBlock, _ValueBlock);

      function LocalPrimitiveValueBlock() {
        var _this7;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalPrimitiveValueBlock);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(LocalPrimitiveValueBlock).call(this, parameters));
        if ("valueHex" in parameters) _this7.valueHex = parameters.valueHex.slice(0);else _this7.valueHex = new ArrayBuffer(0);
        _this7.isHexOnly = (0, utils.getParametersValue)(parameters, "isHexOnly", true);
        return _this7;
      }

      _createClass(LocalPrimitiveValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
          }

          this.valueHex = new ArrayBuffer(intBuffer.length);
          var valueHexView = new Uint8Array(this.valueHex);

          for (var i = 0; i < intBuffer.length; i++) {
            valueHexView[i] = intBuffer[i];
          }

          this.blockLength = inputLength;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.valueHex.slice(0);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalPrimitiveValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          object.isHexOnly = this.isHexOnly;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "PrimitiveValueBlock";
        }
      }]);

      return LocalPrimitiveValueBlock;
    }(ValueBlock);

    var Primitive = function (_BaseBlock) {
      _inherits(Primitive, _BaseBlock);

      function Primitive() {
        var _this8;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Primitive);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Primitive).call(this, parameters, LocalPrimitiveValueBlock));
        _this8.idBlock.isConstructed = false;
        return _this8;
      }

      _createClass(Primitive, null, [{
        key: "blockName",
        value: function blockName() {
          return "PRIMITIVE";
        }
      }]);

      return Primitive;
    }(BaseBlock);

    exports.Primitive = Primitive;

    var LocalConstructedValueBlock = function (_ValueBlock2) {
      _inherits(LocalConstructedValueBlock, _ValueBlock2);

      function LocalConstructedValueBlock() {
        var _this9;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalConstructedValueBlock);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(LocalConstructedValueBlock).call(this, parameters));
        _this9.value = (0, utils.getParametersValue)(parameters, "value", []);
        _this9.isIndefiniteForm = (0, utils.getParametersValue)(parameters, "isIndefiniteForm", false);
        return _this9;
      }

      _createClass(LocalConstructedValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var initialOffset = inputOffset;
          var initialLength = inputLength;
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
          }

          function checkLen(indefiniteLength, length) {
            if (indefiniteLength === true) return 1;
            return length;
          }

          var currentOffset = inputOffset;

          while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
            var returnObject = LocalFromBER(inputBuffer, currentOffset, inputLength);

            if (returnObject.offset === -1) {
              this.error = returnObject.result.error;
              this.warnings.concat(returnObject.result.warnings);
              return -1;
            }

            currentOffset = returnObject.offset;
            this.blockLength += returnObject.result.blockLength;
            inputLength -= returnObject.result.blockLength;
            this.value.push(returnObject.result);
            if (this.isIndefiniteForm === true && returnObject.result.constructor.blockName() === EndOfContent.blockName()) break;
          }

          if (this.isIndefiniteForm === true) {
            if (this.value[this.value.length - 1].constructor.blockName() === EndOfContent.blockName()) this.value.pop();else this.warnings.push("No EndOfContent block encoded");
          }

          this.valueBeforeDecode = inputBuffer.slice(initialOffset, initialOffset + initialLength);
          return currentOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(0);

          for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);
            retBuf = (0, utils.utilConcatBuf)(retBuf, valueBuf);
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalConstructedValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.isIndefiniteForm = this.isIndefiniteForm;
          object.value = [];

          for (var i = 0; i < this.value.length; i++) {
            object.value.push(this.value[i].toJSON());
          }

          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "ConstructedValueBlock";
        }
      }]);

      return LocalConstructedValueBlock;
    }(ValueBlock);

    var Constructed = function (_BaseBlock2) {
      _inherits(Constructed, _BaseBlock2);

      function Constructed() {
        var _this10;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Constructed);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Constructed).call(this, parameters, LocalConstructedValueBlock));
        _this10.idBlock.isConstructed = true;
        return _this10;
      }

      _createClass(Constructed, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "CONSTRUCTED";
        }
      }]);

      return Constructed;
    }(BaseBlock);

    exports.Constructed = Constructed;

    var LocalEndOfContentValueBlock = function (_ValueBlock3) {
      _inherits(LocalEndOfContentValueBlock, _ValueBlock3);

      function LocalEndOfContentValueBlock() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalEndOfContentValueBlock);

        return _possibleConstructorReturn(this, _getPrototypeOf(LocalEndOfContentValueBlock).call(this, parameters));
      }

      _createClass(LocalEndOfContentValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          return inputOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return new ArrayBuffer(0);
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "EndOfContentValueBlock";
        }
      }]);

      return LocalEndOfContentValueBlock;
    }(ValueBlock);

    var EndOfContent = function (_BaseBlock3) {
      _inherits(EndOfContent, _BaseBlock3);

      function EndOfContent() {
        var _this11;

        var paramaters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, EndOfContent);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(EndOfContent).call(this, paramaters, LocalEndOfContentValueBlock));
        _this11.idBlock.tagClass = 1;
        _this11.idBlock.tagNumber = 0;
        return _this11;
      }

      _createClass(EndOfContent, null, [{
        key: "blockName",
        value: function blockName() {
          return "EndOfContent";
        }
      }]);

      return EndOfContent;
    }(BaseBlock);

    exports.EndOfContent = EndOfContent;

    var LocalBooleanValueBlock = function (_ValueBlock4) {
      _inherits(LocalBooleanValueBlock, _ValueBlock4);

      function LocalBooleanValueBlock() {
        var _this12;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBooleanValueBlock);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(LocalBooleanValueBlock).call(this, parameters));
        _this12.value = (0, utils.getParametersValue)(parameters, "value", false);
        _this12.isHexOnly = (0, utils.getParametersValue)(parameters, "isHexOnly", false);
        if ("valueHex" in parameters) _this12.valueHex = parameters.valueHex.slice(0);else {
          _this12.valueHex = new ArrayBuffer(1);

          if (_this12.value === true) {
            var view = new Uint8Array(_this12.valueHex);
            view[0] = 0xFF;
          }
        }
        return _this12;
      }

      _createClass(LocalBooleanValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          if (inputLength > 1) this.warnings.push("Boolean value encoded in more then 1 octet");
          this.isHexOnly = true;
          this.valueHex = new ArrayBuffer(intBuffer.length);
          var view = new Uint8Array(this.valueHex);

          for (var i = 0; i < intBuffer.length; i++) {
            view[i] = intBuffer[i];
          }

          if (utils.utilDecodeTC.call(this) !== 0) this.value = true;else this.value = false;
          this.blockLength = inputLength;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.valueHex;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalBooleanValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          object.isHexOnly = this.isHexOnly;
          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BooleanValueBlock";
        }
      }]);

      return LocalBooleanValueBlock;
    }(ValueBlock);

    var Boolean = function (_BaseBlock4) {
      _inherits(Boolean, _BaseBlock4);

      function Boolean() {
        var _this13;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Boolean);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Boolean).call(this, parameters, LocalBooleanValueBlock));
        _this13.idBlock.tagClass = 1;
        _this13.idBlock.tagNumber = 1;
        return _this13;
      }

      _createClass(Boolean, null, [{
        key: "blockName",
        value: function blockName() {
          return "Boolean";
        }
      }]);

      return Boolean;
    }(BaseBlock);

    exports.Boolean = Boolean;

    var Sequence = function (_Constructed) {
      _inherits(Sequence, _Constructed);

      function Sequence() {
        var _this14;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Sequence);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Sequence).call(this, parameters));
        _this14.idBlock.tagClass = 1;
        _this14.idBlock.tagNumber = 16;
        return _this14;
      }

      _createClass(Sequence, null, [{
        key: "blockName",
        value: function blockName() {
          return "Sequence";
        }
      }]);

      return Sequence;
    }(Constructed);

    exports.Sequence = Sequence;

    var Set = function (_Constructed2) {
      _inherits(Set, _Constructed2);

      function Set() {
        var _this15;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Set);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Set).call(this, parameters));
        _this15.idBlock.tagClass = 1;
        _this15.idBlock.tagNumber = 17;
        return _this15;
      }

      _createClass(Set, null, [{
        key: "blockName",
        value: function blockName() {
          return "Set";
        }
      }]);

      return Set;
    }(Constructed);

    exports.Set = Set;

    var Null = function (_BaseBlock5) {
      _inherits(Null, _BaseBlock5);

      function Null() {
        var _this16;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Null);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Null).call(this, parameters, LocalBaseBlock));
        _this16.idBlock.tagClass = 1;
        _this16.idBlock.tagNumber = 5;
        return _this16;
      }

      _createClass(Null, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (this.lenBlock.length > 0) this.warnings.push("Non-zero length of value block for Null type");
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          this.blockLength += inputLength;

          if (inputOffset + inputLength > inputBuffer.byteLength) {
            this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
            return -1;
          }

          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(2);
          if (sizeOnly === true) return retBuf;
          var retView = new Uint8Array(retBuf);
          retView[0] = 0x05;
          retView[1] = 0x00;
          return retBuf;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Null";
        }
      }]);

      return Null;
    }(BaseBlock);

    exports.Null = Null;

    var LocalOctetStringValueBlock = function (_HexBlock2) {
      _inherits(LocalOctetStringValueBlock, _HexBlock2);

      function LocalOctetStringValueBlock() {
        var _this17;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalOctetStringValueBlock);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(LocalOctetStringValueBlock).call(this, parameters));
        _this17.isConstructed = (0, utils.getParametersValue)(parameters, "isConstructed", false);
        return _this17;
      }

      _createClass(LocalOctetStringValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = 0;

          if (this.isConstructed === true) {
            this.isHexOnly = false;
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1) return resultOffset;

            for (var i = 0; i < this.value.length; i++) {
              var currentBlockName = this.value[i].constructor.blockName();

              if (currentBlockName === EndOfContent.blockName()) {
                if (this.isIndefiniteForm === true) break;else {
                  this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
                  return -1;
                }
              }

              if (currentBlockName !== OctetString.blockName()) {
                this.error = "OCTET STRING may consists of OCTET STRINGs only";
                return -1;
              }
            }
          } else {
            this.isHexOnly = true;
            resultOffset = _get(_getPrototypeOf(LocalOctetStringValueBlock.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);
            this.blockLength = inputLength;
          }

          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          if (this.isConstructed === true) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
          var retBuf = new ArrayBuffer(this.valueHex.byteLength);
          if (sizeOnly === true) return retBuf;
          if (this.valueHex.byteLength === 0) return retBuf;
          retBuf = this.valueHex.slice(0);
          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalOctetStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.isConstructed = this.isConstructed;
          object.isHexOnly = this.isHexOnly;
          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "OctetStringValueBlock";
        }
      }]);

      return LocalOctetStringValueBlock;
    }(HexBlock(LocalConstructedValueBlock));

    var OctetString = function (_BaseBlock6) {
      _inherits(OctetString, _BaseBlock6);

      function OctetString() {
        var _this18;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OctetString);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(OctetString).call(this, parameters, LocalOctetStringValueBlock));
        _this18.idBlock.tagClass = 1;
        _this18.idBlock.tagNumber = 4;
        return _this18;
      }

      _createClass(OctetString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          this.valueBlock.isConstructed = this.idBlock.isConstructed;
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;

          if (inputLength === 0) {
            if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
            if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
            return inputOffset;
          }

          return _get(_getPrototypeOf(OctetString.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);
        }
      }, {
        key: "isEqual",
        value: function isEqual(octetString) {
          if (octetString instanceof OctetString === false) return false;
          if (JSON.stringify(this) !== JSON.stringify(octetString)) return false;
          return true;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "OctetString";
        }
      }]);

      return OctetString;
    }(BaseBlock);

    exports.OctetString = OctetString;

    var LocalBitStringValueBlock = function (_HexBlock3) {
      _inherits(LocalBitStringValueBlock, _HexBlock3);

      function LocalBitStringValueBlock() {
        var _this19;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBitStringValueBlock);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(LocalBitStringValueBlock).call(this, parameters));
        _this19.unusedBits = (0, utils.getParametersValue)(parameters, "unusedBits", 0);
        _this19.isConstructed = (0, utils.getParametersValue)(parameters, "isConstructed", false);
        _this19.blockLength = _this19.valueHex.byteLength;
        return _this19;
      }

      _createClass(LocalBitStringValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          var resultOffset = -1;

          if (this.isConstructed === true) {
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1) return resultOffset;

            for (var i = 0; i < this.value.length; i++) {
              var currentBlockName = this.value[i].constructor.blockName();

              if (currentBlockName === EndOfContent.blockName()) {
                if (this.isIndefiniteForm === true) break;else {
                  this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
                  return -1;
                }
              }

              if (currentBlockName !== BitString.blockName()) {
                this.error = "BIT STRING may consists of BIT STRINGs only";
                return -1;
              }

              if (this.unusedBits > 0 && this.value[i].valueBlock.unusedBits > 0) {
                this.error = "Usign of \"unused bits\" inside constructive BIT STRING allowed for least one only";
                return -1;
              }

              this.unusedBits = this.value[i].valueBlock.unusedBits;

              if (this.unusedBits > 7) {
                this.error = "Unused bits for BitString must be in range 0-7";
                return -1;
              }
            }

            return resultOffset;
          }

          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          this.unusedBits = intBuffer[0];

          if (this.unusedBits > 7) {
            this.error = "Unused bits for BitString must be in range 0-7";
            return -1;
          }

          this.valueHex = new ArrayBuffer(intBuffer.length - 1);
          var view = new Uint8Array(this.valueHex);

          for (var _i10 = 0; _i10 < inputLength - 1; _i10++) {
            view[_i10] = intBuffer[_i10 + 1];
          }

          this.blockLength = intBuffer.length;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          if (this.isConstructed === true) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
          if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength + 1);
          if (this.valueHex.byteLength === 0) return new ArrayBuffer(0);
          var curView = new Uint8Array(this.valueHex);
          var retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
          var retView = new Uint8Array(retBuf);
          retView[0] = this.unusedBits;

          for (var i = 0; i < this.valueHex.byteLength; i++) {
            retView[i + 1] = curView[i];
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalBitStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.unusedBits = this.unusedBits;
          object.isConstructed = this.isConstructed;
          object.isHexOnly = this.isHexOnly;
          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BitStringValueBlock";
        }
      }]);

      return LocalBitStringValueBlock;
    }(HexBlock(LocalConstructedValueBlock));

    var BitString = function (_BaseBlock7) {
      _inherits(BitString, _BaseBlock7);

      function BitString() {
        var _this20;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BitString);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(BitString).call(this, parameters, LocalBitStringValueBlock));
        _this20.idBlock.tagClass = 1;
        _this20.idBlock.tagNumber = 3;
        return _this20;
      }

      _createClass(BitString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          this.valueBlock.isConstructed = this.idBlock.isConstructed;
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
          return _get(_getPrototypeOf(BitString.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);
        }
      }, {
        key: "isEqual",
        value: function isEqual(bitString) {
          if (bitString instanceof BitString === false) return false;
          if (JSON.stringify(this) !== JSON.stringify(bitString)) return false;
          return true;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BitString";
        }
      }]);

      return BitString;
    }(BaseBlock);

    exports.BitString = BitString;

    var LocalIntegerValueBlock = function (_HexBlock4) {
      _inherits(LocalIntegerValueBlock, _HexBlock4);

      function LocalIntegerValueBlock() {
        var _this21;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalIntegerValueBlock);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(LocalIntegerValueBlock).call(this, parameters));
        if ("value" in parameters) _this21.valueDec = parameters.value;
        return _this21;
      }

      _createClass(LocalIntegerValueBlock, [{
        key: "fromDER",
        value: function fromDER(inputBuffer, inputOffset, inputLength) {
          var expectedLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var offset = this.fromBER(inputBuffer, inputOffset, inputLength);
          if (offset === -1) return offset;
          var view = new Uint8Array(this._valueHex);

          if (view[0] === 0x00 && (view[1] & 0x80) !== 0) {
            var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength - 1);
            var updatedView = new Uint8Array(updatedValueHex);
            updatedView.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));
            this._valueHex = updatedValueHex.slice(0);
          } else {
            if (expectedLength !== 0) {
              if (this._valueHex.byteLength < expectedLength) {
                if (expectedLength - this._valueHex.byteLength > 1) expectedLength = this._valueHex.byteLength + 1;

                var _updatedValueHex = new ArrayBuffer(expectedLength);

                var _updatedView = new Uint8Array(_updatedValueHex);

                _updatedView.set(view, expectedLength - this._valueHex.byteLength);

                this._valueHex = _updatedValueHex.slice(0);
              }
            }
          }

          return offset;
        }
      }, {
        key: "toDER",
        value: function toDER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var view = new Uint8Array(this._valueHex);

          switch (true) {
            case (view[0] & 0x80) !== 0:
              {
                var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength + 1);
                var updatedView = new Uint8Array(updatedValueHex);
                updatedView[0] = 0x00;
                updatedView.set(view, 1);
                this._valueHex = updatedValueHex.slice(0);
              }
              break;

            case view[0] === 0x00 && (view[1] & 0x80) === 0:
              {
                var _updatedValueHex2 = new ArrayBuffer(this._valueHex.byteLength - 1);

                var _updatedView2 = new Uint8Array(_updatedValueHex2);

                _updatedView2.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));

                this._valueHex = _updatedValueHex2.slice(0);
              }
              break;
          }

          return this.toBER(sizeOnly);
        }
      }, {
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = _get(_getPrototypeOf(LocalIntegerValueBlock.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);

          if (resultOffset === -1) return resultOffset;
          this.blockLength = inputLength;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.valueHex.slice(0);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalIntegerValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueDec = this.valueDec;
          return object;
        }
      }, {
        key: "toString",
        value: function toString() {
          function viewAdd(first, second) {
            var c = new Uint8Array([0]);
            var firstView = new Uint8Array(first);
            var secondView = new Uint8Array(second);
            var firstViewCopy = firstView.slice(0);
            var firstViewCopyLength = firstViewCopy.length - 1;
            var secondViewCopy = secondView.slice(0);
            var secondViewCopyLength = secondViewCopy.length - 1;
            var value = 0;
            var max = secondViewCopyLength < firstViewCopyLength ? firstViewCopyLength : secondViewCopyLength;
            var counter = 0;

            for (var i = max; i >= 0; i--, counter++) {
              switch (true) {
                case counter < secondViewCopy.length:
                  value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
                  break;

                default:
                  value = firstViewCopy[firstViewCopyLength - counter] + c[0];
              }

              c[0] = value / 10;

              switch (true) {
                case counter >= firstViewCopy.length:
                  firstViewCopy = (0, utils.utilConcatView)(new Uint8Array([value % 10]), firstViewCopy);
                  break;

                default:
                  firstViewCopy[firstViewCopyLength - counter] = value % 10;
              }
            }

            if (c[0] > 0) firstViewCopy = (0, utils.utilConcatView)(c, firstViewCopy);
            return firstViewCopy.slice(0);
          }

          function power2(n) {
            if (n >= powers2.length) {
              for (var p = powers2.length; p <= n; p++) {
                var c = new Uint8Array([0]);

                var _digits = powers2[p - 1].slice(0);

                for (var i = _digits.length - 1; i >= 0; i--) {
                  var newValue = new Uint8Array([(_digits[i] << 1) + c[0]]);
                  c[0] = newValue[0] / 10;
                  _digits[i] = newValue[0] % 10;
                }

                if (c[0] > 0) _digits = (0, utils.utilConcatView)(c, _digits);
                powers2.push(_digits);
              }
            }

            return powers2[n];
          }

          function viewSub(first, second) {
            var b = 0;
            var firstView = new Uint8Array(first);
            var secondView = new Uint8Array(second);
            var firstViewCopy = firstView.slice(0);
            var firstViewCopyLength = firstViewCopy.length - 1;
            var secondViewCopy = secondView.slice(0);
            var secondViewCopyLength = secondViewCopy.length - 1;
            var value;
            var counter = 0;

            for (var i = secondViewCopyLength; i >= 0; i--, counter++) {
              value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;

              switch (true) {
                case value < 0:
                  b = 1;
                  firstViewCopy[firstViewCopyLength - counter] = value + 10;
                  break;

                default:
                  b = 0;
                  firstViewCopy[firstViewCopyLength - counter] = value;
              }
            }

            if (b > 0) {
              for (var _i11 = firstViewCopyLength - secondViewCopyLength + 1; _i11 >= 0; _i11--, counter++) {
                value = firstViewCopy[firstViewCopyLength - counter] - b;

                if (value < 0) {
                  b = 1;
                  firstViewCopy[firstViewCopyLength - counter] = value + 10;
                } else {
                  b = 0;
                  firstViewCopy[firstViewCopyLength - counter] = value;
                  break;
                }
              }
            }

            return firstViewCopy.slice();
          }

          var firstBit = this._valueHex.byteLength * 8 - 1;
          var digits = new Uint8Array(this._valueHex.byteLength * 8 / 3);
          var bitNumber = 0;
          var currentByte;
          var asn1View = new Uint8Array(this._valueHex);
          var result = "";
          var flag = false;

          for (var byteNumber = this._valueHex.byteLength - 1; byteNumber >= 0; byteNumber--) {
            currentByte = asn1View[byteNumber];

            for (var i = 0; i < 8; i++) {
              if ((currentByte & 1) === 1) {
                switch (bitNumber) {
                  case firstBit:
                    digits = viewSub(power2(bitNumber), digits);
                    result = "-";
                    break;

                  default:
                    digits = viewAdd(digits, power2(bitNumber));
                }
              }

              bitNumber++;
              currentByte >>= 1;
            }
          }

          for (var _i12 = 0; _i12 < digits.length; _i12++) {
            if (digits[_i12]) flag = true;
            if (flag) result += digitsString.charAt(digits[_i12]);
          }

          if (flag === false) result += digitsString.charAt(0);
          return result;
        }
      }, {
        key: "valueHex",
        set: function set(_value) {
          this._valueHex = _value.slice(0);

          if (_value.byteLength >= 4) {
            this.warnings.push("Too big Integer for decoding, hex only");
            this.isHexOnly = true;
            this._valueDec = 0;
          } else {
            this.isHexOnly = false;
            if (_value.byteLength > 0) this._valueDec = utils.utilDecodeTC.call(this);
          }
        },
        get: function get() {
          return this._valueHex;
        }
      }, {
        key: "valueDec",
        set: function set(_value) {
          this._valueDec = _value;
          this.isHexOnly = false;
          this._valueHex = (0, utils.utilEncodeTC)(_value);
        },
        get: function get() {
          return this._valueDec;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "IntegerValueBlock";
        }
      }]);

      return LocalIntegerValueBlock;
    }(HexBlock(ValueBlock));

    var Integer = function (_BaseBlock8) {
      _inherits(Integer, _BaseBlock8);

      function Integer() {
        var _this22;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Integer);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(Integer).call(this, parameters, LocalIntegerValueBlock));
        _this22.idBlock.tagClass = 1;
        _this22.idBlock.tagNumber = 2;
        return _this22;
      }

      _createClass(Integer, [{
        key: "isEqual",
        value: function isEqual(otherValue) {
          if (otherValue instanceof Integer) {
            if (this.valueBlock.isHexOnly && otherValue.valueBlock.isHexOnly) return (0, utils.isEqualBuffer)(this.valueBlock.valueHex, otherValue.valueBlock.valueHex);
            if (this.valueBlock.isHexOnly === otherValue.valueBlock.isHexOnly) return this.valueBlock.valueDec === otherValue.valueBlock.valueDec;
            return false;
          }

          if (otherValue instanceof ArrayBuffer) return (0, utils.isEqualBuffer)(this.valueBlock.valueHex, otherValue);
          return false;
        }
      }, {
        key: "convertToDER",
        value: function convertToDER() {
          var integer = new Integer({
            valueHex: this.valueBlock.valueHex
          });
          integer.valueBlock.toDER();
          return integer;
        }
      }, {
        key: "convertFromDER",
        value: function convertFromDER() {
          var expectedLength = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength;
          var integer = new Integer({
            valueHex: this.valueBlock.valueHex
          });
          integer.valueBlock.fromDER(integer.valueBlock.valueHex, 0, integer.valueBlock.valueHex.byteLength, expectedLength);
          return integer;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Integer";
        }
      }]);

      return Integer;
    }(BaseBlock);

    exports.Integer = Integer;

    var Enumerated = function (_Integer) {
      _inherits(Enumerated, _Integer);

      function Enumerated() {
        var _this23;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Enumerated);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(Enumerated).call(this, parameters));
        _this23.idBlock.tagClass = 1;
        _this23.idBlock.tagNumber = 10;
        return _this23;
      }

      _createClass(Enumerated, null, [{
        key: "blockName",
        value: function blockName() {
          return "Enumerated";
        }
      }]);

      return Enumerated;
    }(Integer);

    exports.Enumerated = Enumerated;

    var LocalSidValueBlock = function (_HexBlock5) {
      _inherits(LocalSidValueBlock, _HexBlock5);

      function LocalSidValueBlock() {
        var _this24;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalSidValueBlock);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(LocalSidValueBlock).call(this, parameters));
        _this24.valueDec = (0, utils.getParametersValue)(parameters, "valueDec", -1);
        _this24.isFirstSid = (0, utils.getParametersValue)(parameters, "isFirstSid", false);
        return _this24;
      }

      _createClass(LocalSidValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          this.valueHex = new ArrayBuffer(inputLength);
          var view = new Uint8Array(this.valueHex);

          for (var i = 0; i < inputLength; i++) {
            view[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00) break;
          }

          var tempValueHex = new ArrayBuffer(this.blockLength);
          var tempView = new Uint8Array(tempValueHex);

          for (var _i13 = 0; _i13 < this.blockLength; _i13++) {
            tempView[_i13] = view[_i13];
          }

          this.valueHex = tempValueHex.slice(0);
          view = new Uint8Array(this.valueHex);

          if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          }

          if (view[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
          if (this.blockLength <= 8) this.valueDec = (0, utils.utilFromBase)(view, 7);else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
          }
          return inputOffset + this.blockLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var retView;

          if (this.isHexOnly) {
            if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
            var curView = new Uint8Array(this.valueHex);
            retBuf = new ArrayBuffer(this.blockLength);
            retView = new Uint8Array(retBuf);

            for (var i = 0; i < this.blockLength - 1; i++) {
              retView[i] = curView[i] | 0x80;
            }

            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retBuf;
          }

          var encodedBuf = (0, utils.utilToBase)(this.valueDec, 7);

          if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return new ArrayBuffer(0);
          }

          retBuf = new ArrayBuffer(encodedBuf.byteLength);

          if (sizeOnly === false) {
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);

            for (var _i14 = 0; _i14 < encodedBuf.byteLength - 1; _i14++) {
              retView[_i14] = encodedView[_i14] | 0x80;
            }

            retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
          }

          return retBuf;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          if (this.isHexOnly === true) result = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);else {
            if (this.isFirstSid) {
              var sidValue = this.valueDec;
              if (this.valueDec <= 39) result = "0.";else {
                if (this.valueDec <= 79) {
                  result = "1.";
                  sidValue -= 40;
                } else {
                  result = "2.";
                  sidValue -= 80;
                }
              }
              result += sidValue.toString();
            } else result = this.valueDec.toString();
          }
          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalSidValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueDec = this.valueDec;
          object.isFirstSid = this.isFirstSid;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "sidBlock";
        }
      }]);

      return LocalSidValueBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalObjectIdentifierValueBlock = function (_ValueBlock5) {
      _inherits(LocalObjectIdentifierValueBlock, _ValueBlock5);

      function LocalObjectIdentifierValueBlock() {
        var _this25;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalObjectIdentifierValueBlock);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(LocalObjectIdentifierValueBlock).call(this, parameters));

        _this25.fromString((0, utils.getParametersValue)(parameters, "value", ""));

        return _this25;
      }

      _createClass(LocalObjectIdentifierValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = inputOffset;

          while (inputLength > 0) {
            var sidBlock = new LocalSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);

            if (resultOffset === -1) {
              this.blockLength = 0;
              this.error = sidBlock.error;
              return resultOffset;
            }

            if (this.value.length === 0) sidBlock.isFirstSid = true;
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
          }

          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(0);

          for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);

            if (valueBuf.byteLength === 0) {
              this.error = this.value[i].error;
              return new ArrayBuffer(0);
            }

            retBuf = (0, utils.utilConcatBuf)(retBuf, valueBuf);
          }

          return retBuf;
        }
      }, {
        key: "fromString",
        value: function fromString(string) {
          this.value = [];
          var pos1 = 0;
          var pos2 = 0;
          var sid = "";
          var flag = false;

          do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1) sid = string.substr(pos1);else sid = string.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;

            if (flag) {
              var sidBlock = this.value[0];
              var plus = 0;

              switch (sidBlock.valueDec) {
                case 0:
                  break;

                case 1:
                  plus = 40;
                  break;

                case 2:
                  plus = 80;
                  break;

                default:
                  this.value = [];
                  return false;
              }

              var parsedSID = parseInt(sid, 10);
              if (isNaN(parsedSID)) return true;
              sidBlock.valueDec = parsedSID + plus;
              flag = false;
            } else {
              var _sidBlock = new LocalSidValueBlock();

              _sidBlock.valueDec = parseInt(sid, 10);
              if (isNaN(_sidBlock.valueDec)) return true;

              if (this.value.length === 0) {
                _sidBlock.isFirstSid = true;
                flag = true;
              }

              this.value.push(_sidBlock);
            }
          } while (pos2 !== -1);

          return true;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          var isHexOnly = false;

          for (var i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            var sidStr = this.value[i].toString();
            if (i !== 0) result = "".concat(result, ".");

            if (isHexOnly) {
              sidStr = "{".concat(sidStr, "}");
              if (this.value[i].isFirstSid) result = "2.{".concat(sidStr, " - 80}");else result += sidStr;
            } else result += sidStr;
          }

          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalObjectIdentifierValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.toString();
          object.sidArray = [];

          for (var i = 0; i < this.value.length; i++) {
            object.sidArray.push(this.value[i].toJSON());
          }

          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "ObjectIdentifierValueBlock";
        }
      }]);

      return LocalObjectIdentifierValueBlock;
    }(ValueBlock);

    var ObjectIdentifier = function (_BaseBlock9) {
      _inherits(ObjectIdentifier, _BaseBlock9);

      function ObjectIdentifier() {
        var _this26;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ObjectIdentifier);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(ObjectIdentifier).call(this, parameters, LocalObjectIdentifierValueBlock));
        _this26.idBlock.tagClass = 1;
        _this26.idBlock.tagNumber = 6;
        return _this26;
      }

      _createClass(ObjectIdentifier, null, [{
        key: "blockName",
        value: function blockName() {
          return "ObjectIdentifier";
        }
      }]);

      return ObjectIdentifier;
    }(BaseBlock);

    exports.ObjectIdentifier = ObjectIdentifier;

    var LocalUtf8StringValueBlock = function (_HexBlock6) {
      _inherits(LocalUtf8StringValueBlock, _HexBlock6);

      function LocalUtf8StringValueBlock() {
        var _this27;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalUtf8StringValueBlock);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(LocalUtf8StringValueBlock).call(this, parameters));
        _this27.isHexOnly = true;
        _this27.value = "";
        return _this27;
      }

      _createClass(LocalUtf8StringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalUtf8StringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Utf8StringValueBlock";
        }
      }]);

      return LocalUtf8StringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var Utf8String = function (_BaseBlock10) {
      _inherits(Utf8String, _BaseBlock10);

      function Utf8String() {
        var _this28;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Utf8String);

        _this28 = _possibleConstructorReturn(this, _getPrototypeOf(Utf8String).call(this, parameters, LocalUtf8StringValueBlock));
        if ("value" in parameters) _this28.fromString(parameters.value);
        _this28.idBlock.tagClass = 1;
        _this28.idBlock.tagNumber = 12;
        return _this28;
      }

      _createClass(Utf8String, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));

          try {
            this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
          } catch (ex) {
            this.warnings.push("Error during \"decodeURIComponent\": ".concat(ex, ", using raw string"));
          }
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var str = unescape(encodeURIComponent(inputString));
          var strLen = str.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLen);
          var view = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLen; i++) {
            view[i] = str.charCodeAt(i);
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Utf8String";
        }
      }]);

      return Utf8String;
    }(BaseBlock);

    exports.Utf8String = Utf8String;

    var LocalRelativeSidValueBlock = function (_HexBlock7) {
      _inherits(LocalRelativeSidValueBlock, _HexBlock7);

      function LocalRelativeSidValueBlock() {
        var _this29;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalRelativeSidValueBlock);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(LocalRelativeSidValueBlock).call(this, parameters));
        _this29.valueDec = (0, utils.getParametersValue)(parameters, "valueDec", -1);
        return _this29;
      }

      _createClass(LocalRelativeSidValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          this.valueHex = new ArrayBuffer(inputLength);
          var view = new Uint8Array(this.valueHex);

          for (var i = 0; i < inputLength; i++) {
            view[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00) break;
          }

          var tempValueHex = new ArrayBuffer(this.blockLength);
          var tempView = new Uint8Array(tempValueHex);

          for (var _i15 = 0; _i15 < this.blockLength; _i15++) {
            tempView[_i15] = view[_i15];
          }

          this.valueHex = tempValueHex.slice(0);
          view = new Uint8Array(this.valueHex);

          if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          }

          if (view[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
          if (this.blockLength <= 8) this.valueDec = (0, utils.utilFromBase)(view, 7);else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
          }
          return inputOffset + this.blockLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var retView;

          if (this.isHexOnly) {
            if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
            var curView = new Uint8Array(this.valueHex);
            retBuf = new ArrayBuffer(this.blockLength);
            retView = new Uint8Array(retBuf);

            for (var i = 0; i < this.blockLength - 1; i++) {
              retView[i] = curView[i] | 0x80;
            }

            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retBuf;
          }

          var encodedBuf = (0, utils.utilToBase)(this.valueDec, 7);

          if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return new ArrayBuffer(0);
          }

          retBuf = new ArrayBuffer(encodedBuf.byteLength);

          if (sizeOnly === false) {
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);

            for (var _i16 = 0; _i16 < encodedBuf.byteLength - 1; _i16++) {
              retView[_i16] = encodedView[_i16] | 0x80;
            }

            retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
          }

          return retBuf;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          if (this.isHexOnly === true) result = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);else {
            result = this.valueDec.toString();
          }
          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalRelativeSidValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueDec = this.valueDec;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "relativeSidBlock";
        }
      }]);

      return LocalRelativeSidValueBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalRelativeObjectIdentifierValueBlock = function (_ValueBlock6) {
      _inherits(LocalRelativeObjectIdentifierValueBlock, _ValueBlock6);

      function LocalRelativeObjectIdentifierValueBlock() {
        var _this30;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalRelativeObjectIdentifierValueBlock);

        _this30 = _possibleConstructorReturn(this, _getPrototypeOf(LocalRelativeObjectIdentifierValueBlock).call(this, parameters));

        _this30.fromString((0, utils.getParametersValue)(parameters, "value", ""));

        return _this30;
      }

      _createClass(LocalRelativeObjectIdentifierValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = inputOffset;

          while (inputLength > 0) {
            var sidBlock = new LocalRelativeSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);

            if (resultOffset === -1) {
              this.blockLength = 0;
              this.error = sidBlock.error;
              return resultOffset;
            }

            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
          }

          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(0);

          for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);

            if (valueBuf.byteLength === 0) {
              this.error = this.value[i].error;
              return new ArrayBuffer(0);
            }

            retBuf = (0, utils.utilConcatBuf)(retBuf, valueBuf);
          }

          return retBuf;
        }
      }, {
        key: "fromString",
        value: function fromString(string) {
          this.value = [];
          var pos1 = 0;
          var pos2 = 0;
          var sid = "";

          do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1) sid = string.substr(pos1);else sid = string.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;
            var sidBlock = new LocalRelativeSidValueBlock();
            sidBlock.valueDec = parseInt(sid, 10);
            if (isNaN(sidBlock.valueDec)) return true;
            this.value.push(sidBlock);
          } while (pos2 !== -1);

          return true;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          var isHexOnly = false;

          for (var i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            var sidStr = this.value[i].toString();
            if (i !== 0) result = "".concat(result, ".");

            if (isHexOnly) {
              sidStr = "{".concat(sidStr, "}");
              result += sidStr;
            } else result += sidStr;
          }

          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalRelativeObjectIdentifierValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.toString();
          object.sidArray = [];

          for (var i = 0; i < this.value.length; i++) {
            object.sidArray.push(this.value[i].toJSON());
          }

          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "RelativeObjectIdentifierValueBlock";
        }
      }]);

      return LocalRelativeObjectIdentifierValueBlock;
    }(ValueBlock);

    var RelativeObjectIdentifier = function (_BaseBlock11) {
      _inherits(RelativeObjectIdentifier, _BaseBlock11);

      function RelativeObjectIdentifier() {
        var _this31;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, RelativeObjectIdentifier);

        _this31 = _possibleConstructorReturn(this, _getPrototypeOf(RelativeObjectIdentifier).call(this, parameters, LocalRelativeObjectIdentifierValueBlock));
        _this31.idBlock.tagClass = 1;
        _this31.idBlock.tagNumber = 13;
        return _this31;
      }

      _createClass(RelativeObjectIdentifier, null, [{
        key: "blockName",
        value: function blockName() {
          return "RelativeObjectIdentifier";
        }
      }]);

      return RelativeObjectIdentifier;
    }(BaseBlock);

    exports.RelativeObjectIdentifier = RelativeObjectIdentifier;

    var LocalBmpStringValueBlock = function (_HexBlock8) {
      _inherits(LocalBmpStringValueBlock, _HexBlock8);

      function LocalBmpStringValueBlock() {
        var _this32;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBmpStringValueBlock);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(LocalBmpStringValueBlock).call(this, parameters));
        _this32.isHexOnly = true;
        _this32.value = "";
        return _this32;
      }

      _createClass(LocalBmpStringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalBmpStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BmpStringValueBlock";
        }
      }]);

      return LocalBmpStringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var BmpString = function (_BaseBlock12) {
      _inherits(BmpString, _BaseBlock12);

      function BmpString() {
        var _this33;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BmpString);

        _this33 = _possibleConstructorReturn(this, _getPrototypeOf(BmpString).call(this, parameters, LocalBmpStringValueBlock));
        if ("value" in parameters) _this33.fromString(parameters.value);
        _this33.idBlock.tagClass = 1;
        _this33.idBlock.tagNumber = 30;
        return _this33;
      }

      _createClass(BmpString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          var copyBuffer = inputBuffer.slice(0);
          var valueView = new Uint8Array(copyBuffer);

          for (var i = 0; i < valueView.length; i += 2) {
            var temp = valueView[i];
            valueView[i] = valueView[i + 1];
            valueView[i + 1] = temp;
          }

          this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(copyBuffer));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var strLength = inputString.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLength * 2);
          var valueHexView = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLength; i++) {
            var codeBuf = (0, utils.utilToBase)(inputString.charCodeAt(i), 8);
            var codeView = new Uint8Array(codeBuf);
            if (codeView.length > 2) continue;
            var dif = 2 - codeView.length;

            for (var j = codeView.length - 1; j >= 0; j--) {
              valueHexView[i * 2 + j + dif] = codeView[j];
            }
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BmpString";
        }
      }]);

      return BmpString;
    }(BaseBlock);

    exports.BmpString = BmpString;

    var LocalUniversalStringValueBlock = function (_HexBlock9) {
      _inherits(LocalUniversalStringValueBlock, _HexBlock9);

      function LocalUniversalStringValueBlock() {
        var _this34;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalUniversalStringValueBlock);

        _this34 = _possibleConstructorReturn(this, _getPrototypeOf(LocalUniversalStringValueBlock).call(this, parameters));
        _this34.isHexOnly = true;
        _this34.value = "";
        return _this34;
      }

      _createClass(LocalUniversalStringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalUniversalStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "UniversalStringValueBlock";
        }
      }]);

      return LocalUniversalStringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var UniversalString = function (_BaseBlock13) {
      _inherits(UniversalString, _BaseBlock13);

      function UniversalString() {
        var _this35;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, UniversalString);

        _this35 = _possibleConstructorReturn(this, _getPrototypeOf(UniversalString).call(this, parameters, LocalUniversalStringValueBlock));
        if ("value" in parameters) _this35.fromString(parameters.value);
        _this35.idBlock.tagClass = 1;
        _this35.idBlock.tagNumber = 28;
        return _this35;
      }

      _createClass(UniversalString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          var copyBuffer = inputBuffer.slice(0);
          var valueView = new Uint8Array(copyBuffer);

          for (var i = 0; i < valueView.length; i += 4) {
            valueView[i] = valueView[i + 3];
            valueView[i + 1] = valueView[i + 2];
            valueView[i + 2] = 0x00;
            valueView[i + 3] = 0x00;
          }

          this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var strLength = inputString.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLength * 4);
          var valueHexView = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLength; i++) {
            var codeBuf = (0, utils.utilToBase)(inputString.charCodeAt(i), 8);
            var codeView = new Uint8Array(codeBuf);
            if (codeView.length > 4) continue;
            var dif = 4 - codeView.length;

            for (var j = codeView.length - 1; j >= 0; j--) {
              valueHexView[i * 4 + j + dif] = codeView[j];
            }
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "UniversalString";
        }
      }]);

      return UniversalString;
    }(BaseBlock);

    exports.UniversalString = UniversalString;

    var LocalSimpleStringValueBlock = function (_HexBlock10) {
      _inherits(LocalSimpleStringValueBlock, _HexBlock10);

      function LocalSimpleStringValueBlock() {
        var _this36;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalSimpleStringValueBlock);

        _this36 = _possibleConstructorReturn(this, _getPrototypeOf(LocalSimpleStringValueBlock).call(this, parameters));
        _this36.value = "";
        _this36.isHexOnly = true;
        return _this36;
      }

      _createClass(LocalSimpleStringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalSimpleStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "SimpleStringValueBlock";
        }
      }]);

      return LocalSimpleStringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalSimpleStringBlock = function (_BaseBlock14) {
      _inherits(LocalSimpleStringBlock, _BaseBlock14);

      function LocalSimpleStringBlock() {
        var _this37;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalSimpleStringBlock);

        _this37 = _possibleConstructorReturn(this, _getPrototypeOf(LocalSimpleStringBlock).call(this, parameters, LocalSimpleStringValueBlock));
        if ("value" in parameters) _this37.fromString(parameters.value);
        return _this37;
      }

      _createClass(LocalSimpleStringBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var strLen = inputString.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLen);
          var view = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLen; i++) {
            view[i] = inputString.charCodeAt(i);
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "SIMPLESTRING";
        }
      }]);

      return LocalSimpleStringBlock;
    }(BaseBlock);

    var NumericString = function (_LocalSimpleStringBlo) {
      _inherits(NumericString, _LocalSimpleStringBlo);

      function NumericString() {
        var _this38;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, NumericString);

        _this38 = _possibleConstructorReturn(this, _getPrototypeOf(NumericString).call(this, parameters));
        _this38.idBlock.tagClass = 1;
        _this38.idBlock.tagNumber = 18;
        return _this38;
      }

      _createClass(NumericString, null, [{
        key: "blockName",
        value: function blockName() {
          return "NumericString";
        }
      }]);

      return NumericString;
    }(LocalSimpleStringBlock);

    exports.NumericString = NumericString;

    var PrintableString = function (_LocalSimpleStringBlo2) {
      _inherits(PrintableString, _LocalSimpleStringBlo2);

      function PrintableString() {
        var _this39;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PrintableString);

        _this39 = _possibleConstructorReturn(this, _getPrototypeOf(PrintableString).call(this, parameters));
        _this39.idBlock.tagClass = 1;
        _this39.idBlock.tagNumber = 19;
        return _this39;
      }

      _createClass(PrintableString, null, [{
        key: "blockName",
        value: function blockName() {
          return "PrintableString";
        }
      }]);

      return PrintableString;
    }(LocalSimpleStringBlock);

    exports.PrintableString = PrintableString;

    var TeletexString = function (_LocalSimpleStringBlo3) {
      _inherits(TeletexString, _LocalSimpleStringBlo3);

      function TeletexString() {
        var _this40;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TeletexString);

        _this40 = _possibleConstructorReturn(this, _getPrototypeOf(TeletexString).call(this, parameters));
        _this40.idBlock.tagClass = 1;
        _this40.idBlock.tagNumber = 20;
        return _this40;
      }

      _createClass(TeletexString, null, [{
        key: "blockName",
        value: function blockName() {
          return "TeletexString";
        }
      }]);

      return TeletexString;
    }(LocalSimpleStringBlock);

    exports.TeletexString = TeletexString;

    var VideotexString = function (_LocalSimpleStringBlo4) {
      _inherits(VideotexString, _LocalSimpleStringBlo4);

      function VideotexString() {
        var _this41;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, VideotexString);

        _this41 = _possibleConstructorReturn(this, _getPrototypeOf(VideotexString).call(this, parameters));
        _this41.idBlock.tagClass = 1;
        _this41.idBlock.tagNumber = 21;
        return _this41;
      }

      _createClass(VideotexString, null, [{
        key: "blockName",
        value: function blockName() {
          return "VideotexString";
        }
      }]);

      return VideotexString;
    }(LocalSimpleStringBlock);

    exports.VideotexString = VideotexString;

    var IA5String = function (_LocalSimpleStringBlo5) {
      _inherits(IA5String, _LocalSimpleStringBlo5);

      function IA5String() {
        var _this42;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, IA5String);

        _this42 = _possibleConstructorReturn(this, _getPrototypeOf(IA5String).call(this, parameters));
        _this42.idBlock.tagClass = 1;
        _this42.idBlock.tagNumber = 22;
        return _this42;
      }

      _createClass(IA5String, null, [{
        key: "blockName",
        value: function blockName() {
          return "IA5String";
        }
      }]);

      return IA5String;
    }(LocalSimpleStringBlock);

    exports.IA5String = IA5String;

    var GraphicString = function (_LocalSimpleStringBlo6) {
      _inherits(GraphicString, _LocalSimpleStringBlo6);

      function GraphicString() {
        var _this43;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, GraphicString);

        _this43 = _possibleConstructorReturn(this, _getPrototypeOf(GraphicString).call(this, parameters));
        _this43.idBlock.tagClass = 1;
        _this43.idBlock.tagNumber = 25;
        return _this43;
      }

      _createClass(GraphicString, null, [{
        key: "blockName",
        value: function blockName() {
          return "GraphicString";
        }
      }]);

      return GraphicString;
    }(LocalSimpleStringBlock);

    exports.GraphicString = GraphicString;

    var VisibleString = function (_LocalSimpleStringBlo7) {
      _inherits(VisibleString, _LocalSimpleStringBlo7);

      function VisibleString() {
        var _this44;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, VisibleString);

        _this44 = _possibleConstructorReturn(this, _getPrototypeOf(VisibleString).call(this, parameters));
        _this44.idBlock.tagClass = 1;
        _this44.idBlock.tagNumber = 26;
        return _this44;
      }

      _createClass(VisibleString, null, [{
        key: "blockName",
        value: function blockName() {
          return "VisibleString";
        }
      }]);

      return VisibleString;
    }(LocalSimpleStringBlock);

    exports.VisibleString = VisibleString;

    var GeneralString = function (_LocalSimpleStringBlo8) {
      _inherits(GeneralString, _LocalSimpleStringBlo8);

      function GeneralString() {
        var _this45;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, GeneralString);

        _this45 = _possibleConstructorReturn(this, _getPrototypeOf(GeneralString).call(this, parameters));
        _this45.idBlock.tagClass = 1;
        _this45.idBlock.tagNumber = 27;
        return _this45;
      }

      _createClass(GeneralString, null, [{
        key: "blockName",
        value: function blockName() {
          return "GeneralString";
        }
      }]);

      return GeneralString;
    }(LocalSimpleStringBlock);

    exports.GeneralString = GeneralString;

    var CharacterString = function (_LocalSimpleStringBlo9) {
      _inherits(CharacterString, _LocalSimpleStringBlo9);

      function CharacterString() {
        var _this46;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CharacterString);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(CharacterString).call(this, parameters));
        _this46.idBlock.tagClass = 1;
        _this46.idBlock.tagNumber = 29;
        return _this46;
      }

      _createClass(CharacterString, null, [{
        key: "blockName",
        value: function blockName() {
          return "CharacterString";
        }
      }]);

      return CharacterString;
    }(LocalSimpleStringBlock);

    exports.CharacterString = CharacterString;

    var UTCTime = function (_VisibleString) {
      _inherits(UTCTime, _VisibleString);

      function UTCTime() {
        var _this47;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, UTCTime);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(UTCTime).call(this, parameters));
        _this47.year = 0;
        _this47.month = 0;
        _this47.day = 0;
        _this47.hour = 0;
        _this47.minute = 0;
        _this47.second = 0;

        if ("value" in parameters) {
          _this47.fromString(parameters.value);

          _this47.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
          var view = new Uint8Array(_this47.valueBlock.valueHex);

          for (var i = 0; i < parameters.value.length; i++) {
            view[i] = parameters.value.charCodeAt(i);
          }
        }

        if ("valueDate" in parameters) {
          _this47.fromDate(parameters.valueDate);

          _this47.valueBlock.valueHex = _this47.toBuffer();
        }

        _this47.idBlock.tagClass = 1;
        _this47.idBlock.tagNumber = 23;
        return _this47;
      }

      _createClass(UTCTime, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
        }
      }, {
        key: "toBuffer",
        value: function toBuffer() {
          var str = this.toString();
          var buffer = new ArrayBuffer(str.length);
          var view = new Uint8Array(buffer);

          for (var i = 0; i < str.length; i++) {
            view[i] = str.charCodeAt(i);
          }

          return buffer;
        }
      }, {
        key: "fromDate",
        value: function fromDate(inputDate) {
          this.year = inputDate.getUTCFullYear();
          this.month = inputDate.getUTCMonth() + 1;
          this.day = inputDate.getUTCDate();
          this.hour = inputDate.getUTCHours();
          this.minute = inputDate.getUTCMinutes();
          this.second = inputDate.getUTCSeconds();
        }
      }, {
        key: "toDate",
        value: function toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
          var parserArray = parser.exec(inputString);

          if (parserArray === null) {
            this.error = "Wrong input string for convertion";
            return;
          }

          var year = parseInt(parserArray[1], 10);
          if (year >= 50) this.year = 1900 + year;else this.year = 2000 + year;
          this.month = parseInt(parserArray[2], 10);
          this.day = parseInt(parserArray[3], 10);
          this.hour = parseInt(parserArray[4], 10);
          this.minute = parseInt(parserArray[5], 10);
          this.second = parseInt(parserArray[6], 10);
        }
      }, {
        key: "toString",
        value: function toString() {
          var outputArray = new Array(7);
          outputArray[0] = (0, utils.padNumber)(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
          outputArray[1] = (0, utils.padNumber)(this.month, 2);
          outputArray[2] = (0, utils.padNumber)(this.day, 2);
          outputArray[3] = (0, utils.padNumber)(this.hour, 2);
          outputArray[4] = (0, utils.padNumber)(this.minute, 2);
          outputArray[5] = (0, utils.padNumber)(this.second, 2);
          outputArray[6] = "Z";
          return outputArray.join("");
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(UTCTime.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.year = this.year;
          object.month = this.month;
          object.day = this.day;
          object.hour = this.hour;
          object.minute = this.minute;
          object.second = this.second;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "UTCTime";
        }
      }]);

      return UTCTime;
    }(VisibleString);

    exports.UTCTime = UTCTime;

    var GeneralizedTime = function (_VisibleString2) {
      _inherits(GeneralizedTime, _VisibleString2);

      function GeneralizedTime() {
        var _this48;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, GeneralizedTime);

        _this48 = _possibleConstructorReturn(this, _getPrototypeOf(GeneralizedTime).call(this, parameters));
        _this48.year = 0;
        _this48.month = 0;
        _this48.day = 0;
        _this48.hour = 0;
        _this48.minute = 0;
        _this48.second = 0;
        _this48.millisecond = 0;

        if ("value" in parameters) {
          _this48.fromString(parameters.value);

          _this48.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
          var view = new Uint8Array(_this48.valueBlock.valueHex);

          for (var i = 0; i < parameters.value.length; i++) {
            view[i] = parameters.value.charCodeAt(i);
          }
        }

        if ("valueDate" in parameters) {
          _this48.fromDate(parameters.valueDate);

          _this48.valueBlock.valueHex = _this48.toBuffer();
        }

        _this48.idBlock.tagClass = 1;
        _this48.idBlock.tagNumber = 24;
        return _this48;
      }

      _createClass(GeneralizedTime, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
        }
      }, {
        key: "toBuffer",
        value: function toBuffer() {
          var str = this.toString();
          var buffer = new ArrayBuffer(str.length);
          var view = new Uint8Array(buffer);

          for (var i = 0; i < str.length; i++) {
            view[i] = str.charCodeAt(i);
          }

          return buffer;
        }
      }, {
        key: "fromDate",
        value: function fromDate(inputDate) {
          this.year = inputDate.getUTCFullYear();
          this.month = inputDate.getUTCMonth() + 1;
          this.day = inputDate.getUTCDate();
          this.hour = inputDate.getUTCHours();
          this.minute = inputDate.getUTCMinutes();
          this.second = inputDate.getUTCSeconds();
          this.millisecond = inputDate.getUTCMilliseconds();
        }
      }, {
        key: "toDate",
        value: function toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var isUTC = false;
          var timeString = "";
          var dateTimeString = "";
          var fractionPart = 0;
          var parser;
          var hourDifference = 0;
          var minuteDifference = 0;

          if (inputString[inputString.length - 1] === "Z") {
            timeString = inputString.substr(0, inputString.length - 1);
            isUTC = true;
          } else {
              var number = new Number(inputString[inputString.length - 1]);
              if (isNaN(number.valueOf())) throw new Error("Wrong input string for convertion");
              timeString = inputString;
            }

          if (isUTC) {
            if (timeString.indexOf("+") !== -1) throw new Error("Wrong input string for convertion");
            if (timeString.indexOf("-") !== -1) throw new Error("Wrong input string for convertion");
          } else {
              var multiplier = 1;
              var differencePosition = timeString.indexOf("+");
              var differenceString = "";

              if (differencePosition === -1) {
                differencePosition = timeString.indexOf("-");
                multiplier = -1;
              }

              if (differencePosition !== -1) {
                differenceString = timeString.substr(differencePosition + 1);
                timeString = timeString.substr(0, differencePosition);
                if (differenceString.length !== 2 && differenceString.length !== 4) throw new Error("Wrong input string for convertion");

                var _number = new Number(differenceString.substr(0, 2));

                if (isNaN(_number.valueOf())) throw new Error("Wrong input string for convertion");
                hourDifference = multiplier * _number;

                if (differenceString.length === 4) {
                  _number = new Number(differenceString.substr(2, 2));
                  if (isNaN(_number.valueOf())) throw new Error("Wrong input string for convertion");
                  minuteDifference = multiplier * _number;
                }
              }
            }

          var fractionPointPosition = timeString.indexOf(".");
          if (fractionPointPosition === -1) fractionPointPosition = timeString.indexOf(",");

          if (fractionPointPosition !== -1) {
            var fractionPartCheck = new Number("0".concat(timeString.substr(fractionPointPosition)));
            if (isNaN(fractionPartCheck.valueOf())) throw new Error("Wrong input string for convertion");
            fractionPart = fractionPartCheck.valueOf();
            dateTimeString = timeString.substr(0, fractionPointPosition);
          } else dateTimeString = timeString;

          switch (true) {
            case dateTimeString.length === 8:
              parser = /(\d{4})(\d{2})(\d{2})/ig;
              if (fractionPointPosition !== -1) throw new Error("Wrong input string for convertion");
              break;

            case dateTimeString.length === 10:
              parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;

              if (fractionPointPosition !== -1) {
                var fractionResult = 60 * fractionPart;
                this.minute = Math.floor(fractionResult);
                fractionResult = 60 * (fractionResult - this.minute);
                this.second = Math.floor(fractionResult);
                fractionResult = 1000 * (fractionResult - this.second);
                this.millisecond = Math.floor(fractionResult);
              }

              break;

            case dateTimeString.length === 12:
              parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;

              if (fractionPointPosition !== -1) {
                var _fractionResult = 60 * fractionPart;

                this.second = Math.floor(_fractionResult);
                _fractionResult = 1000 * (_fractionResult - this.second);
                this.millisecond = Math.floor(_fractionResult);
              }

              break;

            case dateTimeString.length === 14:
              parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;

              if (fractionPointPosition !== -1) {
                var _fractionResult2 = 1000 * fractionPart;

                this.millisecond = Math.floor(_fractionResult2);
              }

              break;

            default:
              throw new Error("Wrong input string for convertion");
          }

          var parserArray = parser.exec(dateTimeString);
          if (parserArray === null) throw new Error("Wrong input string for convertion");

          for (var j = 1; j < parserArray.length; j++) {
            switch (j) {
              case 1:
                this.year = parseInt(parserArray[j], 10);
                break;

              case 2:
                this.month = parseInt(parserArray[j], 10);
                break;

              case 3:
                this.day = parseInt(parserArray[j], 10);
                break;

              case 4:
                this.hour = parseInt(parserArray[j], 10) + hourDifference;
                break;

              case 5:
                this.minute = parseInt(parserArray[j], 10) + minuteDifference;
                break;

              case 6:
                this.second = parseInt(parserArray[j], 10);
                break;

              default:
                throw new Error("Wrong input string for convertion");
            }
          }

          if (isUTC === false) {
            var tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            this.year = tempDate.getUTCFullYear();
            this.month = tempDate.getUTCMonth();
            this.day = tempDate.getUTCDay();
            this.hour = tempDate.getUTCHours();
            this.minute = tempDate.getUTCMinutes();
            this.second = tempDate.getUTCSeconds();
            this.millisecond = tempDate.getUTCMilliseconds();
          }
        }
      }, {
        key: "toString",
        value: function toString() {
          var outputArray = [];
          outputArray.push((0, utils.padNumber)(this.year, 4));
          outputArray.push((0, utils.padNumber)(this.month, 2));
          outputArray.push((0, utils.padNumber)(this.day, 2));
          outputArray.push((0, utils.padNumber)(this.hour, 2));
          outputArray.push((0, utils.padNumber)(this.minute, 2));
          outputArray.push((0, utils.padNumber)(this.second, 2));

          if (this.millisecond !== 0) {
            outputArray.push(".");
            outputArray.push((0, utils.padNumber)(this.millisecond, 3));
          }

          outputArray.push("Z");
          return outputArray.join("");
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(GeneralizedTime.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.year = this.year;
          object.month = this.month;
          object.day = this.day;
          object.hour = this.hour;
          object.minute = this.minute;
          object.second = this.second;
          object.millisecond = this.millisecond;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "GeneralizedTime";
        }
      }]);

      return GeneralizedTime;
    }(VisibleString);

    exports.GeneralizedTime = GeneralizedTime;

    var DATE = function (_Utf8String) {
      _inherits(DATE, _Utf8String);

      function DATE() {
        var _this49;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, DATE);

        _this49 = _possibleConstructorReturn(this, _getPrototypeOf(DATE).call(this, parameters));
        _this49.idBlock.tagClass = 1;
        _this49.idBlock.tagNumber = 31;
        return _this49;
      }

      _createClass(DATE, null, [{
        key: "blockName",
        value: function blockName() {
          return "DATE";
        }
      }]);

      return DATE;
    }(Utf8String);

    exports.DATE = DATE;

    var TimeOfDay = function (_Utf8String2) {
      _inherits(TimeOfDay, _Utf8String2);

      function TimeOfDay() {
        var _this50;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TimeOfDay);

        _this50 = _possibleConstructorReturn(this, _getPrototypeOf(TimeOfDay).call(this, parameters));
        _this50.idBlock.tagClass = 1;
        _this50.idBlock.tagNumber = 32;
        return _this50;
      }

      _createClass(TimeOfDay, null, [{
        key: "blockName",
        value: function blockName() {
          return "TimeOfDay";
        }
      }]);

      return TimeOfDay;
    }(Utf8String);

    exports.TimeOfDay = TimeOfDay;

    var DateTime = function (_Utf8String3) {
      _inherits(DateTime, _Utf8String3);

      function DateTime() {
        var _this51;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, DateTime);

        _this51 = _possibleConstructorReturn(this, _getPrototypeOf(DateTime).call(this, parameters));
        _this51.idBlock.tagClass = 1;
        _this51.idBlock.tagNumber = 33;
        return _this51;
      }

      _createClass(DateTime, null, [{
        key: "blockName",
        value: function blockName() {
          return "DateTime";
        }
      }]);

      return DateTime;
    }(Utf8String);

    exports.DateTime = DateTime;

    var Duration = function (_Utf8String4) {
      _inherits(Duration, _Utf8String4);

      function Duration() {
        var _this52;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Duration);

        _this52 = _possibleConstructorReturn(this, _getPrototypeOf(Duration).call(this, parameters));
        _this52.idBlock.tagClass = 1;
        _this52.idBlock.tagNumber = 34;
        return _this52;
      }

      _createClass(Duration, null, [{
        key: "blockName",
        value: function blockName() {
          return "Duration";
        }
      }]);

      return Duration;
    }(Utf8String);

    exports.Duration = Duration;

    var TIME = function (_Utf8String5) {
      _inherits(TIME, _Utf8String5);

      function TIME() {
        var _this53;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TIME);

        _this53 = _possibleConstructorReturn(this, _getPrototypeOf(TIME).call(this, parameters));
        _this53.idBlock.tagClass = 1;
        _this53.idBlock.tagNumber = 14;
        return _this53;
      }

      _createClass(TIME, null, [{
        key: "blockName",
        value: function blockName() {
          return "TIME";
        }
      }]);

      return TIME;
    }(Utf8String);

    exports.TIME = TIME;

    var Choice = function Choice() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Choice);

      this.value = (0, utils.getParametersValue)(parameters, "value", []);
      this.optional = (0, utils.getParametersValue)(parameters, "optional", false);
    };

    exports.Choice = Choice;

    var Any = function Any() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Any);

      this.name = (0, utils.getParametersValue)(parameters, "name", "");
      this.optional = (0, utils.getParametersValue)(parameters, "optional", false);
    };

    exports.Any = Any;

    var Repeated = function Repeated() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Repeated);

      this.name = (0, utils.getParametersValue)(parameters, "name", "");
      this.optional = (0, utils.getParametersValue)(parameters, "optional", false);
      this.value = (0, utils.getParametersValue)(parameters, "value", new Any());
      this.local = (0, utils.getParametersValue)(parameters, "local", false);
    };

    exports.Repeated = Repeated;

    var RawData = function () {
      function RawData() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, RawData);

        this.data = (0, utils.getParametersValue)(parameters, "data", new ArrayBuffer(0));
      }

      _createClass(RawData, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          this.data = inputBuffer.slice(inputOffset, inputLength);
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.data;
        }
      }]);

      return RawData;
    }();

    exports.RawData = RawData;

    function LocalFromBER(inputBuffer, inputOffset, inputLength) {
      var incomingOffset = inputOffset;

      function localChangeType(inputObject, newType) {
        if (inputObject instanceof newType) return inputObject;
        var newObject = new newType();
        newObject.idBlock = inputObject.idBlock;
        newObject.lenBlock = inputObject.lenBlock;
        newObject.warnings = inputObject.warnings;
        newObject.valueBeforeDecode = inputObject.valueBeforeDecode.slice(0);
        return newObject;
      }

      var returnObject = new BaseBlock({}, Object);
      var baseBlock = new LocalBaseBlock();

      if ((0, utils.checkBufferParams)(baseBlock, inputBuffer, inputOffset, inputLength) === false) {
        returnObject.error = baseBlock.error;
        return {
          offset: -1,
          result: returnObject
        };
      }

      var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

      if (intBuffer.length === 0) {
        this.error = "Zero buffer length";
        return {
          offset: -1,
          result: returnObject
        };
      }

      var resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
      returnObject.warnings.concat(returnObject.idBlock.warnings);

      if (resultOffset === -1) {
        returnObject.error = returnObject.idBlock.error;
        return {
          offset: -1,
          result: returnObject
        };
      }

      inputOffset = resultOffset;
      inputLength -= returnObject.idBlock.blockLength;
      resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
      returnObject.warnings.concat(returnObject.lenBlock.warnings);

      if (resultOffset === -1) {
        returnObject.error = returnObject.lenBlock.error;
        return {
          offset: -1,
          result: returnObject
        };
      }

      inputOffset = resultOffset;
      inputLength -= returnObject.lenBlock.blockLength;

      if (returnObject.idBlock.isConstructed === false && returnObject.lenBlock.isIndefiniteForm === true) {
        returnObject.error = "Indefinite length form used for primitive encoding form";
        return {
          offset: -1,
          result: returnObject
        };
      }

      var newASN1Type = BaseBlock;

      switch (returnObject.idBlock.tagClass) {
        case 1:
          if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
            returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
            return {
              offset: -1,
              result: returnObject
            };
          }

          switch (returnObject.idBlock.tagNumber) {
            case 0:
              if (returnObject.idBlock.isConstructed === true && returnObject.lenBlock.length > 0) {
                returnObject.error = "Type [UNIVERSAL 0] is reserved";
                return {
                  offset: -1,
                  result: returnObject
                };
              }

              newASN1Type = EndOfContent;
              break;

            case 1:
              newASN1Type = Boolean;
              break;

            case 2:
              newASN1Type = Integer;
              break;

            case 3:
              newASN1Type = BitString;
              break;

            case 4:
              newASN1Type = OctetString;
              break;

            case 5:
              newASN1Type = Null;
              break;

            case 6:
              newASN1Type = ObjectIdentifier;
              break;

            case 10:
              newASN1Type = Enumerated;
              break;

            case 12:
              newASN1Type = Utf8String;
              break;

            case 13:
              newASN1Type = RelativeObjectIdentifier;
              break;

            case 14:
              newASN1Type = TIME;
              break;

            case 15:
              returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
              return {
                offset: -1,
                result: returnObject
              };

            case 16:
              newASN1Type = Sequence;
              break;

            case 17:
              newASN1Type = Set;
              break;

            case 18:
              newASN1Type = NumericString;
              break;

            case 19:
              newASN1Type = PrintableString;
              break;

            case 20:
              newASN1Type = TeletexString;
              break;

            case 21:
              newASN1Type = VideotexString;
              break;

            case 22:
              newASN1Type = IA5String;
              break;

            case 23:
              newASN1Type = UTCTime;
              break;

            case 24:
              newASN1Type = GeneralizedTime;
              break;

            case 25:
              newASN1Type = GraphicString;
              break;

            case 26:
              newASN1Type = VisibleString;
              break;

            case 27:
              newASN1Type = GeneralString;
              break;

            case 28:
              newASN1Type = UniversalString;
              break;

            case 29:
              newASN1Type = CharacterString;
              break;

            case 30:
              newASN1Type = BmpString;
              break;

            case 31:
              newASN1Type = DATE;
              break;

            case 32:
              newASN1Type = TimeOfDay;
              break;

            case 33:
              newASN1Type = DateTime;
              break;

            case 34:
              newASN1Type = Duration;
              break;

            default:
              {
                var newObject;
                if (returnObject.idBlock.isConstructed === true) newObject = new Constructed();else newObject = new Primitive();
                newObject.idBlock = returnObject.idBlock;
                newObject.lenBlock = returnObject.lenBlock;
                newObject.warnings = returnObject.warnings;
                returnObject = newObject;
                resultOffset = returnObject.fromBER(inputBuffer, inputOffset, inputLength);
              }
          }

          break;

        case 2:
        case 3:
        case 4:
        default:
          {
            if (returnObject.idBlock.isConstructed === true) newASN1Type = Constructed;else newASN1Type = Primitive;
          }
      }

      returnObject = localChangeType(returnObject, newASN1Type);
      resultOffset = returnObject.fromBER(inputBuffer, inputOffset, returnObject.lenBlock.isIndefiniteForm === true ? inputLength : returnObject.lenBlock.length);
      returnObject.valueBeforeDecode = inputBuffer.slice(incomingOffset, incomingOffset + returnObject.blockLength);
      return {
        offset: resultOffset,
        result: returnObject
      };
    }

    function fromBER(inputBuffer) {
      if (inputBuffer.byteLength === 0) {
        var result = new BaseBlock({}, Object);
        result.error = "Input buffer has zero length";
        return {
          offset: -1,
          result: result
        };
      }

      return LocalFromBER(inputBuffer, 0, inputBuffer.byteLength);
    }

    function compareSchema(root, inputData, inputSchema) {
      if (inputSchema instanceof Choice) {
        for (var j = 0; j < inputSchema.value.length; j++) {
          var result = compareSchema(root, inputData, inputSchema.value[j]);

          if (result.verified === true) {
            return {
              verified: true,
              result: root
            };
          }
        }

        {
          var _result = {
            verified: false,
            result: {
              error: "Wrong values for Choice type"
            }
          };
          if (inputSchema.hasOwnProperty("name")) _result.name = inputSchema.name;
          return _result;
        }
      }

      if (inputSchema instanceof Any) {
        if (inputSchema.hasOwnProperty("name")) root[inputSchema.name] = inputData;
        return {
          verified: true,
          result: root
        };
      }

      if (root instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong root object"
          }
        };
      }

      if (inputData instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 data"
          }
        };
      }

      if (inputSchema instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if ("idBlock" in inputSchema === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if ("fromBER" in inputSchema.idBlock === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if ("toBER" in inputSchema.idBlock === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      var encodedId = inputSchema.idBlock.toBER(false);

      if (encodedId.byteLength === 0) {
        return {
          verified: false,
          result: {
            error: "Error encoding idBlock for ASN.1 schema"
          }
        };
      }

      var decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);

      if (decodedOffset === -1) {
        return {
          verified: false,
          result: {
            error: "Error decoding idBlock for ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.hasOwnProperty("tagClass") === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
        return {
          verified: false,
          result: root
        };
      }

      if (inputSchema.idBlock.hasOwnProperty("tagNumber") === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
        return {
          verified: false,
          result: root
        };
      }

      if (inputSchema.idBlock.hasOwnProperty("isConstructed") === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
        return {
          verified: false,
          result: root
        };
      }

      if ("isHexOnly" in inputSchema.idBlock === false) {
          return {
            verified: false,
            result: {
              error: "Wrong ASN.1 schema"
            }
          };
        }

      if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
        return {
          verified: false,
          result: root
        };
      }

      if (inputSchema.idBlock.isHexOnly === true) {
        if ("valueHex" in inputSchema.idBlock === false) {
            return {
              verified: false,
              result: {
                error: "Wrong ASN.1 schema"
              }
            };
          }

        var schemaView = new Uint8Array(inputSchema.idBlock.valueHex);
        var asn1View = new Uint8Array(inputData.idBlock.valueHex);

        if (schemaView.length !== asn1View.length) {
          return {
            verified: false,
            result: root
          };
        }

        for (var i = 0; i < schemaView.length; i++) {
          if (schemaView[i] !== asn1View[1]) {
            return {
              verified: false,
              result: root
            };
          }
        }
      }

      if (inputSchema.hasOwnProperty("name")) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
        if (inputSchema.name !== "") root[inputSchema.name] = inputData;
      }

      if (inputSchema.idBlock.isConstructed === true) {
        var admission = 0;
        var _result2 = {
          verified: false
        };
        var maxLength = inputSchema.valueBlock.value.length;

        if (maxLength > 0) {
          if (inputSchema.valueBlock.value[0] instanceof Repeated) maxLength = inputData.valueBlock.value.length;
        }

        if (maxLength === 0) {
          return {
            verified: true,
            result: root
          };
        }

        if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
          var _optional = true;

          for (var _i17 = 0; _i17 < inputSchema.valueBlock.value.length; _i17++) {
            _optional = _optional && (inputSchema.valueBlock.value[_i17].optional || false);
          }

          if (_optional === true) {
            return {
              verified: true,
              result: root
            };
          }

          if (inputSchema.hasOwnProperty("name")) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
            if (inputSchema.name !== "") delete root[inputSchema.name];
          }

          root.error = "Inconsistent object length";
          return {
            verified: false,
            result: root
          };
        }

        for (var _i18 = 0; _i18 < maxLength; _i18++) {
          if (_i18 - admission >= inputData.valueBlock.value.length) {
            if (inputSchema.valueBlock.value[_i18].optional === false) {
              var _result3 = {
                verified: false,
                result: root
              };
              root.error = "Inconsistent length between ASN.1 data and schema";

              if (inputSchema.hasOwnProperty("name")) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

                if (inputSchema.name !== "") {
                  delete root[inputSchema.name];
                  _result3.name = inputSchema.name;
                }
              }

              return _result3;
            }
          } else {
              if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                _result2 = compareSchema(root, inputData.valueBlock.value[_i18], inputSchema.valueBlock.value[0].value);

                if (_result2.verified === false) {
                  if (inputSchema.valueBlock.value[0].optional === true) admission++;else {
                    if (inputSchema.hasOwnProperty("name")) {
                      inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                      if (inputSchema.name !== "") delete root[inputSchema.name];
                    }

                    return _result2;
                  }
                }

                if ("name" in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
                  var arrayRoot = {};
                  if ("local" in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local === true) arrayRoot = inputData;else arrayRoot = root;
                  if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined") arrayRoot[inputSchema.valueBlock.value[0].name] = [];
                  arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[_i18]);
                }
              } else {
                  _result2 = compareSchema(root, inputData.valueBlock.value[_i18 - admission], inputSchema.valueBlock.value[_i18]);

                  if (_result2.verified === false) {
                    if (inputSchema.valueBlock.value[_i18].optional === true) admission++;else {
                      if (inputSchema.hasOwnProperty("name")) {
                        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                        if (inputSchema.name !== "") delete root[inputSchema.name];
                      }

                      return _result2;
                    }
                  }
                }
            }
        }

        if (_result2.verified === false) {
            var _result4 = {
              verified: false,
              result: root
            };

            if (inputSchema.hasOwnProperty("name")) {
              inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

              if (inputSchema.name !== "") {
                delete root[inputSchema.name];
                _result4.name = inputSchema.name;
              }
            }

            return _result4;
          }

        return {
          verified: true,
          result: root
        };
      }

      if ("primitiveSchema" in inputSchema && "valueHex" in inputData.valueBlock) {
        var _asn = fromBER(inputData.valueBlock.valueHex);

        if (_asn.offset === -1) {
          var _result5 = {
            verified: false,
            result: _asn.result
          };

          if (inputSchema.hasOwnProperty("name")) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

            if (inputSchema.name !== "") {
              delete root[inputSchema.name];
              _result5.name = inputSchema.name;
            }
          }

          return _result5;
        }

        return compareSchema(root, _asn.result, inputSchema.primitiveSchema);
      }

      return {
        verified: true,
        result: root
      };
    }

    function verifySchema(inputBuffer, inputSchema) {
      if (inputSchema instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema type"
          }
        };
      }

      var asn1 = fromBER(inputBuffer);

      if (asn1.offset === -1) {
        return {
          verified: false,
          result: asn1.result
        };
      }

      return compareSchema(asn1.result, asn1.result, inputSchema);
    }

    function fromJSON(json) {}
  });
  unwrapExports(asn1);
  var asn1_1 = asn1.fromBER;
  var asn1_2 = asn1.compareSchema;
  var asn1_3 = asn1.verifySchema;
  var asn1_4 = asn1.fromJSON;
  var asn1_5 = asn1.RawData;
  var asn1_6 = asn1.Repeated;
  var asn1_7 = asn1.Any;
  var asn1_8 = asn1.Choice;
  var asn1_9 = asn1.TIME;
  var asn1_10 = asn1.Duration;
  var asn1_11 = asn1.DateTime;
  var asn1_12 = asn1.TimeOfDay;
  var asn1_13 = asn1.DATE;
  var asn1_14 = asn1.GeneralizedTime;
  var asn1_15 = asn1.UTCTime;
  var asn1_16 = asn1.CharacterString;
  var asn1_17 = asn1.GeneralString;
  var asn1_18 = asn1.VisibleString;
  var asn1_19 = asn1.GraphicString;
  var asn1_20 = asn1.IA5String;
  var asn1_21 = asn1.VideotexString;
  var asn1_22 = asn1.TeletexString;
  var asn1_23 = asn1.PrintableString;
  var asn1_24 = asn1.NumericString;
  var asn1_25 = asn1.UniversalString;
  var asn1_26 = asn1.BmpString;
  var asn1_27 = asn1.RelativeObjectIdentifier;
  var asn1_28 = asn1.Utf8String;
  var asn1_29 = asn1.ObjectIdentifier;
  var asn1_30 = asn1.Enumerated;
  var asn1_31 = asn1.Integer;
  var asn1_32 = asn1.BitString;
  var asn1_33 = asn1.OctetString;
  var asn1_34 = asn1.Null;
  var asn1_35 = asn1.Set;
  var asn1_36 = asn1.Sequence;
  var asn1_37 = asn1.Boolean;
  var asn1_38 = asn1.EndOfContent;
  var asn1_39 = asn1.Constructed;
  var asn1_40 = asn1.Primitive;
  var asn1_41 = asn1.BaseBlock;
  var asn1_42 = asn1.ValueBlock;
  var asn1_43 = asn1.HexBlock;

  var AlgorithmIdentifier = function () {
    function AlgorithmIdentifier() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AlgorithmIdentifier);

      this.algorithmId = getParametersValue(parameters, "algorithmId", AlgorithmIdentifier.defaultValues("algorithmId"));
      if ("algorithmParams" in parameters) this.algorithmParams = getParametersValue(parameters, "algorithmParams", AlgorithmIdentifier.defaultValues("algorithmParams"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(AlgorithmIdentifier, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["algorithm", "params"]);
        var asn1 = asn1_2(schema, schema, AlgorithmIdentifier.schema({
          names: {
            algorithmIdentifier: "algorithm",
            algorithmParams: "params"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AlgorithmIdentifier");
        this.algorithmId = asn1.result.algorithm.valueBlock.toString();
        if ("params" in asn1.result) this.algorithmParams = asn1.result.params;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(new asn1_29({
          value: this.algorithmId
        }));
        if ("algorithmParams" in this && this.algorithmParams instanceof asn1_7 === false) outputArray.push(this.algorithmParams);
        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          algorithmId: this.algorithmId
        };
        if ("algorithmParams" in this && this.algorithmParams instanceof asn1_7 === false) object.algorithmParams = this.algorithmParams.toJSON();
        return object;
      }
    }, {
      key: "isEqual",
      value: function isEqual(algorithmIdentifier) {
        if (algorithmIdentifier instanceof AlgorithmIdentifier === false) return false;
        if (this.algorithmId !== algorithmIdentifier.algorithmId) return false;

        if ("algorithmParams" in this) {
          if ("algorithmParams" in algorithmIdentifier) return JSON.stringify(this.algorithmParams) === JSON.stringify(algorithmIdentifier.algorithmParams);
          return false;
        }

        if ("algorithmParams" in algorithmIdentifier) return false;
        return true;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "algorithmId":
            return "";

          case "algorithmParams":
            return new asn1_7();

          default:
            throw new Error("Invalid member name for AlgorithmIdentifier class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "algorithmId":
            return memberValue === "";

          case "algorithmParams":
            return memberValue instanceof asn1_7;

          default:
            throw new Error("Invalid member name for AlgorithmIdentifier class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          optional: names.optional || false,
          value: [new asn1_29({
            name: names.algorithmIdentifier || ""
          }), new asn1_7({
            name: names.algorithmParams || "",
            optional: true
          })]
        });
      }
    }]);

    return AlgorithmIdentifier;
  }();

  var ECPublicKey = function () {
    function ECPublicKey() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ECPublicKey);

      this.x = getParametersValue(parameters, "x", ECPublicKey.defaultValues("x"));
      this.y = getParametersValue(parameters, "y", ECPublicKey.defaultValues("y"));
      this.namedCurve = getParametersValue(parameters, "namedCurve", ECPublicKey.defaultValues("namedCurve"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(ECPublicKey, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        if (schema instanceof ArrayBuffer === false) throw new Error("Object's schema was not verified against input data for ECPublicKey");
        var view = new Uint8Array(schema);
        if (view[0] !== 0x04) throw new Error("Object's schema was not verified against input data for ECPublicKey");
        var coordinateLength;

        switch (this.namedCurve) {
          case "1.2.840.10045.3.1.7":
            coordinateLength = 32;
            break;

          case "1.3.132.0.34":
            coordinateLength = 48;
            break;

          case "1.3.132.0.35":
            coordinateLength = 66;
            break;

          default:
            throw new Error("Incorrect curve OID: ".concat(this.namedCurve));
        }

        if (schema.byteLength !== coordinateLength * 2 + 1) throw new Error("Object's schema was not verified against input data for ECPublicKey");
        this.x = schema.slice(1, coordinateLength + 1);
        this.y = schema.slice(1 + coordinateLength, coordinateLength * 2 + 1);
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_5({
          data: utilConcatBuf(new Uint8Array([0x04]).buffer, this.x, this.y)
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var crvName = "";

        switch (this.namedCurve) {
          case "1.2.840.10045.3.1.7":
            crvName = "P-256";
            break;

          case "1.3.132.0.34":
            crvName = "P-384";
            break;

          case "1.3.132.0.35":
            crvName = "P-521";
            break;
        }

        return {
          crv: crvName,
          x: toBase64(arrayBufferToString(this.x), true, true, false),
          y: toBase64(arrayBufferToString(this.y), true, true, false)
        };
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        var coodinateLength = 0;

        if ("crv" in json) {
          switch (json.crv.toUpperCase()) {
            case "P-256":
              this.namedCurve = "1.2.840.10045.3.1.7";
              coodinateLength = 32;
              break;

            case "P-384":
              this.namedCurve = "1.3.132.0.34";
              coodinateLength = 48;
              break;

            case "P-521":
              this.namedCurve = "1.3.132.0.35";
              coodinateLength = 66;
              break;
          }
        } else throw new Error("Absent mandatory parameter \"crv\"");

        if ("x" in json) {
          var convertBuffer = stringToArrayBuffer(fromBase64(json.x, true));

          if (convertBuffer.byteLength < coodinateLength) {
            this.x = new ArrayBuffer(coodinateLength);
            var view = new Uint8Array(this.x);
            var convertBufferView = new Uint8Array(convertBuffer);
            view.set(convertBufferView, 1);
          } else this.x = convertBuffer.slice(0, coodinateLength);
        } else throw new Error("Absent mandatory parameter \"x\"");

        if ("y" in json) {
          var _convertBuffer = stringToArrayBuffer(fromBase64(json.y, true));

          if (_convertBuffer.byteLength < coodinateLength) {
            this.y = new ArrayBuffer(coodinateLength);

            var _view3 = new Uint8Array(this.y);

            var _convertBufferView = new Uint8Array(_convertBuffer);

            _view3.set(_convertBufferView, 1);
          } else this.y = _convertBuffer.slice(0, coodinateLength);
        } else throw new Error("Absent mandatory parameter \"y\"");
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "x":
          case "y":
            return new ArrayBuffer(0);

          case "namedCurve":
            return "";

          default:
            throw new Error("Invalid member name for ECCPublicKey class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "x":
          case "y":
            return isEqualBuffer(memberValue, ECPublicKey.defaultValues(memberName));

          case "namedCurve":
            return memberValue === "";

          default:
            throw new Error("Invalid member name for ECCPublicKey class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        return new asn1_5();
      }
    }]);

    return ECPublicKey;
  }();

  var RSAPublicKey = function () {
    function RSAPublicKey() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, RSAPublicKey);

      this.modulus = getParametersValue(parameters, "modulus", RSAPublicKey.defaultValues("modulus"));
      this.publicExponent = getParametersValue(parameters, "publicExponent", RSAPublicKey.defaultValues("publicExponent"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(RSAPublicKey, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["modulus", "publicExponent"]);
        var asn1 = asn1_2(schema, schema, RSAPublicKey.schema({
          names: {
            modulus: "modulus",
            publicExponent: "publicExponent"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RSAPublicKey");
        this.modulus = asn1.result.modulus.convertFromDER(256);
        this.publicExponent = asn1.result.publicExponent;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [this.modulus.convertToDER(), this.publicExponent]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          n: toBase64(arrayBufferToString(this.modulus.valueBlock.valueHex), true, true, true),
          e: toBase64(arrayBufferToString(this.publicExponent.valueBlock.valueHex), true, true, true)
        };
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        if ("n" in json) {
          var array = stringToArrayBuffer(fromBase64(json.n, true));
          this.modulus = new asn1_31({
            valueHex: array.slice(0, Math.pow(2, nearestPowerOf2(array.byteLength)))
          });
        } else throw new Error("Absent mandatory parameter \"n\"");

        if ("e" in json) this.publicExponent = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.e, true)).slice(0, 3)
        });else throw new Error("Absent mandatory parameter \"e\"");
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "modulus":
            return new asn1_31();

          case "publicExponent":
            return new asn1_31();

          default:
            throw new Error("Invalid member name for RSAPublicKey class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_31({
            name: names.modulus || ""
          }), new asn1_31({
            name: names.publicExponent || ""
          })]
        });
      }
    }]);

    return RSAPublicKey;
  }();

  var PublicKeyInfo = function () {
    function PublicKeyInfo() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PublicKeyInfo);

      this.algorithm = getParametersValue(parameters, "algorithm", PublicKeyInfo.defaultValues("algorithm"));
      this.subjectPublicKey = getParametersValue(parameters, "subjectPublicKey", PublicKeyInfo.defaultValues("subjectPublicKey"));
      if ("parsedKey" in parameters) this.parsedKey = getParametersValue(parameters, "parsedKey", PublicKeyInfo.defaultValues("parsedKey"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(PublicKeyInfo, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["algorithm", "subjectPublicKey"]);
        var asn1 = asn1_2(schema, schema, PublicKeyInfo.schema({
          names: {
            algorithm: {
              names: {
                blockName: "algorithm"
              }
            },
            subjectPublicKey: "subjectPublicKey"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PublicKeyInfo");
        this.algorithm = new AlgorithmIdentifier({
          schema: asn1.result.algorithm
        });
        this.subjectPublicKey = asn1.result.subjectPublicKey;

        switch (this.algorithm.algorithmId) {
          case "1.2.840.10045.2.1":
            if ("algorithmParams" in this.algorithm) {
              if (this.algorithm.algorithmParams.constructor.blockName() === asn1_29.blockName()) {
                try {
                  this.parsedKey = new ECPublicKey({
                    namedCurve: this.algorithm.algorithmParams.valueBlock.toString(),
                    schema: this.subjectPublicKey.valueBlock.valueHex
                  });
                } catch (ex) {}
              }
            }

            break;

          case "1.2.840.113549.1.1.1":
            {
              var publicKeyASN1 = asn1_1(this.subjectPublicKey.valueBlock.valueHex);

              if (publicKeyASN1.offset !== -1) {
                try {
                  this.parsedKey = new RSAPublicKey({
                    schema: publicKeyASN1.result
                  });
                } catch (ex) {}
              }
            }
            break;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [this.algorithm.toSchema(), this.subjectPublicKey]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if ("parsedKey" in this === false) {
          return {
            algorithm: this.algorithm.toJSON(),
            subjectPublicKey: this.subjectPublicKey.toJSON()
          };
        }

        var jwk = {};

        switch (this.algorithm.algorithmId) {
          case "1.2.840.10045.2.1":
            jwk.kty = "EC";
            break;

          case "1.2.840.113549.1.1.1":
            jwk.kty = "RSA";
            break;
        }

        var publicKeyJWK = this.parsedKey.toJSON();

        for (var _i19 = 0, _Object$keys = Object.keys(publicKeyJWK); _i19 < _Object$keys.length; _i19++) {
          var key = _Object$keys[_i19];
          jwk[key] = publicKeyJWK[key];
        }

        return jwk;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        if ("kty" in json) {
          switch (json.kty.toUpperCase()) {
            case "EC":
              this.parsedKey = new ECPublicKey({
                json: json
              });
              this.algorithm = new AlgorithmIdentifier({
                algorithmId: "1.2.840.10045.2.1",
                algorithmParams: new asn1_29({
                  value: this.parsedKey.namedCurve
                })
              });
              break;

            case "RSA":
              this.parsedKey = new RSAPublicKey({
                json: json
              });
              this.algorithm = new AlgorithmIdentifier({
                algorithmId: "1.2.840.113549.1.1.1",
                algorithmParams: new asn1_34()
              });
              break;

            default:
              throw new Error("Invalid value for \"kty\" parameter: ".concat(json.kty));
          }

          this.subjectPublicKey = new asn1_32({
            valueHex: this.parsedKey.toSchema().toBER(false)
          });
        }
      }
    }, {
      key: "importKey",
      value: function importKey(publicKey) {
        var sequence = Promise.resolve();

        var _this = this;

        if (typeof publicKey === "undefined") return Promise.reject("Need to provide publicKey input parameter");
        var crypto = getCrypto();
        if (typeof crypto === "undefined") return Promise.reject("Unable to create WebCrypto object");
        sequence = sequence.then(function () {
          return crypto.exportKey("spki", publicKey);
        });
        sequence = sequence.then(function (exportedKey) {
          var asn1 = asn1_1(exportedKey);

          try {
            _this.fromSchema(asn1.result);
          } catch (exception) {
            return Promise.reject("Error during initializing object from schema");
          }

          return undefined;
        }, function (error) {
          return Promise.reject("Error during exporting public key: ".concat(error));
        });
        return sequence;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "algorithm":
            return new AlgorithmIdentifier();

          case "subjectPublicKey":
            return new asn1_32();

          default:
            throw new Error("Invalid member name for PublicKeyInfo class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [AlgorithmIdentifier.schema(names.algorithm || {}), new asn1_32({
            name: names.subjectPublicKey || ""
          })]
        });
      }
    }]);

    return PublicKeyInfo;
  }();

  var Attribute = function () {
    function Attribute() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Attribute);

      this.type = getParametersValue(parameters, "type", Attribute.defaultValues("type"));
      this.values = getParametersValue(parameters, "values", Attribute.defaultValues("values"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(Attribute, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["type", "values"]);
        var asn1 = asn1_2(schema, schema, Attribute.schema({
          names: {
            type: "type",
            values: "values"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Attribute");
        this.type = asn1.result.type.valueBlock.toString();
        this.values = asn1.result.values;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [new asn1_29({
            value: this.type
          }), new asn1_35({
            value: this.values
          })]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: this.type,
          values: Array.from(this.values, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "type":
            return "";

          case "values":
            return [];

          default:
            throw new Error("Invalid member name for Attribute class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "type":
            return memberValue === "";

          case "values":
            return memberValue.length === 0;

          default:
            throw new Error("Invalid member name for Attribute class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.type || ""
          }), new asn1_35({
            name: names.setName || "",
            value: [new asn1_6({
              name: names.values || "",
              value: new asn1_7()
            })]
          })]
        });
      }
    }]);

    return Attribute;
  }();

  var ECPrivateKey = function () {
    function ECPrivateKey() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ECPrivateKey);

      this.version = getParametersValue(parameters, "version", ECPrivateKey.defaultValues("version"));
      this.privateKey = getParametersValue(parameters, "privateKey", ECPrivateKey.defaultValues("privateKey"));
      if ("namedCurve" in parameters) this.namedCurve = getParametersValue(parameters, "namedCurve", ECPrivateKey.defaultValues("namedCurve"));
      if ("publicKey" in parameters) this.publicKey = getParametersValue(parameters, "publicKey", ECPrivateKey.defaultValues("publicKey"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(ECPrivateKey, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["version", "privateKey", "namedCurve", "publicKey"]);
        var asn1 = asn1_2(schema, schema, ECPrivateKey.schema({
          names: {
            version: "version",
            privateKey: "privateKey",
            namedCurve: "namedCurve",
            publicKey: "publicKey"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for ECPrivateKey");
        this.version = asn1.result.version.valueBlock.valueDec;
        this.privateKey = asn1.result.privateKey;
        if ("namedCurve" in asn1.result) this.namedCurve = asn1.result.namedCurve.valueBlock.toString();

        if ("publicKey" in asn1.result) {
          var publicKeyData = {
            schema: asn1.result.publicKey.valueBlock.valueHex
          };
          if ("namedCurve" in this) publicKeyData.namedCurve = this.namedCurve;
          this.publicKey = new ECPublicKey(publicKeyData);
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [new asn1_31({
          value: this.version
        }), this.privateKey];

        if ("namedCurve" in this) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_29({
              value: this.namedCurve
            })]
          }));
        }

        if ("publicKey" in this) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [new asn1_32({
              valueHex: this.publicKey.toSchema().toBER(false)
            })]
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if ("namedCurve" in this === false || ECPrivateKey.compareWithDefault("namedCurve", this.namedCurve)) throw new Error("Not enough information for making JSON: absent \"namedCurve\" value");
        var crvName = "";

        switch (this.namedCurve) {
          case "1.2.840.10045.3.1.7":
            crvName = "P-256";
            break;

          case "1.3.132.0.34":
            crvName = "P-384";
            break;

          case "1.3.132.0.35":
            crvName = "P-521";
            break;
        }

        var privateKeyJSON = {
          crv: crvName,
          d: toBase64(arrayBufferToString(this.privateKey.valueBlock.valueHex), true, true, false)
        };

        if ("publicKey" in this) {
          var publicKeyJSON = this.publicKey.toJSON();
          privateKeyJSON.x = publicKeyJSON.x;
          privateKeyJSON.y = publicKeyJSON.y;
        }

        return privateKeyJSON;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        var coodinateLength = 0;

        if ("crv" in json) {
          switch (json.crv.toUpperCase()) {
            case "P-256":
              this.namedCurve = "1.2.840.10045.3.1.7";
              coodinateLength = 32;
              break;

            case "P-384":
              this.namedCurve = "1.3.132.0.34";
              coodinateLength = 48;
              break;

            case "P-521":
              this.namedCurve = "1.3.132.0.35";
              coodinateLength = 66;
              break;
          }
        } else throw new Error("Absent mandatory parameter \"crv\"");

        if ("d" in json) {
          var convertBuffer = stringToArrayBuffer(fromBase64(json.d, true));

          if (convertBuffer.byteLength < coodinateLength) {
            var buffer = new ArrayBuffer(coodinateLength);
            var view = new Uint8Array(buffer);
            var convertBufferView = new Uint8Array(convertBuffer);
            view.set(convertBufferView, 1);
            this.privateKey = new asn1_33({
              valueHex: buffer
            });
          } else this.privateKey = new asn1_33({
            valueHex: convertBuffer.slice(0, coodinateLength)
          });
        } else throw new Error("Absent mandatory parameter \"d\"");

        if ("x" in json && "y" in json) this.publicKey = new ECPublicKey({
          json: json
        });
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "version":
            return 1;

          case "privateKey":
            return new asn1_33();

          case "namedCurve":
            return "";

          case "publicKey":
            return new ECPublicKey();

          default:
            throw new Error("Invalid member name for ECCPrivateKey class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "version":
            return memberValue === ECPrivateKey.defaultValues(memberName);

          case "privateKey":
            return memberValue.isEqual(ECPrivateKey.defaultValues(memberName));

          case "namedCurve":
            return memberValue === "";

          case "publicKey":
            return ECPublicKey.compareWithDefault("namedCurve", memberValue.namedCurve) && ECPublicKey.compareWithDefault("x", memberValue.x) && ECPublicKey.compareWithDefault("y", memberValue.y);

          default:
            throw new Error("Invalid member name for ECCPrivateKey class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_31({
            name: names.version || ""
          }), new asn1_33({
            name: names.privateKey || ""
          }), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_29({
              name: names.namedCurve || ""
            })]
          }), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [new asn1_32({
              name: names.publicKey || ""
            })]
          })]
        });
      }
    }]);

    return ECPrivateKey;
  }();

  var OtherPrimeInfo = function () {
    function OtherPrimeInfo() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, OtherPrimeInfo);

      this.prime = getParametersValue(parameters, "prime", OtherPrimeInfo.defaultValues("prime"));
      this.exponent = getParametersValue(parameters, "exponent", OtherPrimeInfo.defaultValues("exponent"));
      this.coefficient = getParametersValue(parameters, "coefficient", OtherPrimeInfo.defaultValues("coefficient"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(OtherPrimeInfo, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["prime", "exponent", "coefficient"]);
        var asn1 = asn1_2(schema, schema, OtherPrimeInfo.schema({
          names: {
            prime: "prime",
            exponent: "exponent",
            coefficient: "coefficient"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for OtherPrimeInfo");
        this.prime = asn1.result.prime.convertFromDER();
        this.exponent = asn1.result.exponent.convertFromDER();
        this.coefficient = asn1.result.coefficient.convertFromDER();
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [this.prime.convertToDER(), this.exponent.convertToDER(), this.coefficient.convertToDER()]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          r: toBase64(arrayBufferToString(this.prime.valueBlock.valueHex), true, true),
          d: toBase64(arrayBufferToString(this.exponent.valueBlock.valueHex), true, true),
          t: toBase64(arrayBufferToString(this.coefficient.valueBlock.valueHex), true, true)
        };
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        if ("r" in json) this.prime = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.r, true))
        });else throw new Error("Absent mandatory parameter \"r\"");
        if ("d" in json) this.exponent = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.d, true))
        });else throw new Error("Absent mandatory parameter \"d\"");
        if ("t" in json) this.coefficient = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.t, true))
        });else throw new Error("Absent mandatory parameter \"t\"");
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "prime":
            return new asn1_31();

          case "exponent":
            return new asn1_31();

          case "coefficient":
            return new asn1_31();

          default:
            throw new Error("Invalid member name for OtherPrimeInfo class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_31({
            name: names.prime || ""
          }), new asn1_31({
            name: names.exponent || ""
          }), new asn1_31({
            name: names.coefficient || ""
          })]
        });
      }
    }]);

    return OtherPrimeInfo;
  }();

  var RSAPrivateKey = function () {
    function RSAPrivateKey() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, RSAPrivateKey);

      this.version = getParametersValue(parameters, "version", RSAPrivateKey.defaultValues("version"));
      this.modulus = getParametersValue(parameters, "modulus", RSAPrivateKey.defaultValues("modulus"));
      this.publicExponent = getParametersValue(parameters, "publicExponent", RSAPrivateKey.defaultValues("publicExponent"));
      this.privateExponent = getParametersValue(parameters, "privateExponent", RSAPrivateKey.defaultValues("privateExponent"));
      this.prime1 = getParametersValue(parameters, "prime1", RSAPrivateKey.defaultValues("prime1"));
      this.prime2 = getParametersValue(parameters, "prime2", RSAPrivateKey.defaultValues("prime2"));
      this.exponent1 = getParametersValue(parameters, "exponent1", RSAPrivateKey.defaultValues("exponent1"));
      this.exponent2 = getParametersValue(parameters, "exponent2", RSAPrivateKey.defaultValues("exponent2"));
      this.coefficient = getParametersValue(parameters, "coefficient", RSAPrivateKey.defaultValues("coefficient"));
      if ("otherPrimeInfos" in parameters) this.otherPrimeInfos = getParametersValue(parameters, "otherPrimeInfos", RSAPrivateKey.defaultValues("otherPrimeInfos"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(RSAPrivateKey, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["version", "modulus", "publicExponent", "privateExponent", "prime1", "prime2", "exponent1", "exponent2", "coefficient", "otherPrimeInfos"]);
        var asn1 = asn1_2(schema, schema, RSAPrivateKey.schema({
          names: {
            version: "version",
            modulus: "modulus",
            publicExponent: "publicExponent",
            privateExponent: "privateExponent",
            prime1: "prime1",
            prime2: "prime2",
            exponent1: "exponent1",
            exponent2: "exponent2",
            coefficient: "coefficient",
            otherPrimeInfo: {
              names: {
                blockName: "otherPrimeInfos"
              }
            }
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RSAPrivateKey");
        this.version = asn1.result.version.valueBlock.valueDec;
        this.modulus = asn1.result.modulus.convertFromDER(256);
        this.publicExponent = asn1.result.publicExponent;
        this.privateExponent = asn1.result.privateExponent.convertFromDER(256);
        this.prime1 = asn1.result.prime1.convertFromDER(128);
        this.prime2 = asn1.result.prime2.convertFromDER(128);
        this.exponent1 = asn1.result.exponent1.convertFromDER(128);
        this.exponent2 = asn1.result.exponent2.convertFromDER(128);
        this.coefficient = asn1.result.coefficient.convertFromDER(128);
        if ("otherPrimeInfos" in asn1.result) this.otherPrimeInfos = Array.from(asn1.result.otherPrimeInfos, function (element) {
          return new OtherPrimeInfo({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(new asn1_31({
          value: this.version
        }));
        outputArray.push(this.modulus.convertToDER());
        outputArray.push(this.publicExponent);
        outputArray.push(this.privateExponent.convertToDER());
        outputArray.push(this.prime1.convertToDER());
        outputArray.push(this.prime2.convertToDER());
        outputArray.push(this.exponent1.convertToDER());
        outputArray.push(this.exponent2.convertToDER());
        outputArray.push(this.coefficient.convertToDER());

        if ("otherPrimeInfos" in this) {
          outputArray.push(new asn1_36({
            value: Array.from(this.otherPrimeInfos, function (element) {
              return element.toSchema();
            })
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var jwk = {
          n: toBase64(arrayBufferToString(this.modulus.valueBlock.valueHex), true, true, true),
          e: toBase64(arrayBufferToString(this.publicExponent.valueBlock.valueHex), true, true, true),
          d: toBase64(arrayBufferToString(this.privateExponent.valueBlock.valueHex), true, true, true),
          p: toBase64(arrayBufferToString(this.prime1.valueBlock.valueHex), true, true, true),
          q: toBase64(arrayBufferToString(this.prime2.valueBlock.valueHex), true, true, true),
          dp: toBase64(arrayBufferToString(this.exponent1.valueBlock.valueHex), true, true, true),
          dq: toBase64(arrayBufferToString(this.exponent2.valueBlock.valueHex), true, true, true),
          qi: toBase64(arrayBufferToString(this.coefficient.valueBlock.valueHex), true, true, true)
        };
        if ("otherPrimeInfos" in this) jwk.oth = Array.from(this.otherPrimeInfos, function (element) {
          return element.toJSON();
        });
        return jwk;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        if ("n" in json) this.modulus = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.n, true, true))
        });else throw new Error("Absent mandatory parameter \"n\"");
        if ("e" in json) this.publicExponent = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.e, true, true))
        });else throw new Error("Absent mandatory parameter \"e\"");
        if ("d" in json) this.privateExponent = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.d, true, true))
        });else throw new Error("Absent mandatory parameter \"d\"");
        if ("p" in json) this.prime1 = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.p, true, true))
        });else throw new Error("Absent mandatory parameter \"p\"");
        if ("q" in json) this.prime2 = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.q, true, true))
        });else throw new Error("Absent mandatory parameter \"q\"");
        if ("dp" in json) this.exponent1 = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.dp, true, true))
        });else throw new Error("Absent mandatory parameter \"dp\"");
        if ("dq" in json) this.exponent2 = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.dq, true, true))
        });else throw new Error("Absent mandatory parameter \"dq\"");
        if ("qi" in json) this.coefficient = new asn1_31({
          valueHex: stringToArrayBuffer(fromBase64(json.qi, true, true))
        });else throw new Error("Absent mandatory parameter \"qi\"");
        if ("oth" in json) this.otherPrimeInfos = Array.from(json.oth, function (element) {
          return new OtherPrimeInfo({
            json: element
          });
        });
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "version":
            return 0;

          case "modulus":
            return new asn1_31();

          case "publicExponent":
            return new asn1_31();

          case "privateExponent":
            return new asn1_31();

          case "prime1":
            return new asn1_31();

          case "prime2":
            return new asn1_31();

          case "exponent1":
            return new asn1_31();

          case "exponent2":
            return new asn1_31();

          case "coefficient":
            return new asn1_31();

          case "otherPrimeInfos":
            return [];

          default:
            throw new Error("Invalid member name for RSAPrivateKey class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_31({
            name: names.version || ""
          }), new asn1_31({
            name: names.modulus || ""
          }), new asn1_31({
            name: names.publicExponent || ""
          }), new asn1_31({
            name: names.privateExponent || ""
          }), new asn1_31({
            name: names.prime1 || ""
          }), new asn1_31({
            name: names.prime2 || ""
          }), new asn1_31({
            name: names.exponent1 || ""
          }), new asn1_31({
            name: names.exponent2 || ""
          }), new asn1_31({
            name: names.coefficient || ""
          }), new asn1_36({
            optional: true,
            value: [new asn1_6({
              name: names.otherPrimeInfosName || "",
              value: OtherPrimeInfo.schema(names.otherPrimeInfo || {})
            })]
          })]
        });
      }
    }]);

    return RSAPrivateKey;
  }();

  var PrivateKeyInfo = function () {
    function PrivateKeyInfo() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PrivateKeyInfo);

      this.version = getParametersValue(parameters, "version", PrivateKeyInfo.defaultValues("version"));
      this.privateKeyAlgorithm = getParametersValue(parameters, "privateKeyAlgorithm", PrivateKeyInfo.defaultValues("privateKeyAlgorithm"));
      this.privateKey = getParametersValue(parameters, "privateKey", PrivateKeyInfo.defaultValues("privateKey"));
      if ("attributes" in parameters) this.attributes = getParametersValue(parameters, "attributes", PrivateKeyInfo.defaultValues("attributes"));
      if ("parsedKey" in parameters) this.parsedKey = getParametersValue(parameters, "parsedKey", PrivateKeyInfo.defaultValues("parsedKey"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("json" in parameters) this.fromJSON(parameters.json);
    }

    _createClass(PrivateKeyInfo, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["version", "privateKeyAlgorithm", "privateKey", "attributes"]);
        var asn1 = asn1_2(schema, schema, PrivateKeyInfo.schema({
          names: {
            version: "version",
            privateKeyAlgorithm: {
              names: {
                blockName: "privateKeyAlgorithm"
              }
            },
            privateKey: "privateKey",
            attributes: "attributes"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PrivateKeyInfo");
        this.version = asn1.result.version.valueBlock.valueDec;
        this.privateKeyAlgorithm = new AlgorithmIdentifier({
          schema: asn1.result.privateKeyAlgorithm
        });
        this.privateKey = asn1.result.privateKey;
        if ("attributes" in asn1.result) this.attributes = Array.from(asn1.result.attributes, function (element) {
          return new Attribute({
            schema: element
          });
        });

        switch (this.privateKeyAlgorithm.algorithmId) {
          case "1.2.840.113549.1.1.1":
            {
              var privateKeyASN1 = asn1_1(this.privateKey.valueBlock.valueHex);
              if (privateKeyASN1.offset !== -1) this.parsedKey = new RSAPrivateKey({
                schema: privateKeyASN1.result
              });
            }
            break;

          case "1.2.840.10045.2.1":
            if ("algorithmParams" in this.privateKeyAlgorithm) {
              if (this.privateKeyAlgorithm.algorithmParams instanceof asn1_29) {
                var _privateKeyASN = asn1_1(this.privateKey.valueBlock.valueHex);

                if (_privateKeyASN.offset !== -1) {
                  this.parsedKey = new ECPrivateKey({
                    namedCurve: this.privateKeyAlgorithm.algorithmParams.valueBlock.toString(),
                    schema: _privateKeyASN.result
                  });
                }
              }
            }

            break;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [new asn1_31({
          value: this.version
        }), this.privateKeyAlgorithm.toSchema(), this.privateKey];

        if ("attributes" in this) {
          outputArray.push(new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: Array.from(this.attributes, function (element) {
              return element.toSchema();
            })
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if ("parsedKey" in this === false) {
          var object = {
            version: this.version,
            privateKeyAlgorithm: this.privateKeyAlgorithm.toJSON(),
            privateKey: this.privateKey.toJSON()
          };
          if ("attributes" in this) object.attributes = Array.from(this.attributes, function (element) {
            return element.toJSON();
          });
          return object;
        }

        var jwk = {};

        switch (this.privateKeyAlgorithm.algorithmId) {
          case "1.2.840.10045.2.1":
            jwk.kty = "EC";
            break;

          case "1.2.840.113549.1.1.1":
            jwk.kty = "RSA";
            break;
        }

        var publicKeyJWK = this.parsedKey.toJSON();

        for (var _i20 = 0, _Object$keys2 = Object.keys(publicKeyJWK); _i20 < _Object$keys2.length; _i20++) {
          var key = _Object$keys2[_i20];
          jwk[key] = publicKeyJWK[key];
        }

        return jwk;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        if ("kty" in json) {
          switch (json.kty.toUpperCase()) {
            case "EC":
              this.parsedKey = new ECPrivateKey({
                json: json
              });
              this.privateKeyAlgorithm = new AlgorithmIdentifier({
                algorithmId: "1.2.840.10045.2.1",
                algorithmParams: new asn1_29({
                  value: this.parsedKey.namedCurve
                })
              });
              break;

            case "RSA":
              this.parsedKey = new RSAPrivateKey({
                json: json
              });
              this.privateKeyAlgorithm = new AlgorithmIdentifier({
                algorithmId: "1.2.840.113549.1.1.1",
                algorithmParams: new asn1_34()
              });
              break;

            default:
              throw new Error("Invalid value for \"kty\" parameter: ".concat(json.kty));
          }

          this.privateKey = new asn1_33({
            valueHex: this.parsedKey.toSchema().toBER(false)
          });
        }
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "version":
            return 0;

          case "privateKeyAlgorithm":
            return new AlgorithmIdentifier();

          case "privateKey":
            return new asn1_33();

          case "attributes":
            return [];

          case "parsedKey":
            return {};

          default:
            throw new Error("Invalid member name for PrivateKeyInfo class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_31({
            name: names.version || ""
          }), AlgorithmIdentifier.schema(names.privateKeyAlgorithm || {}), new asn1_33({
            name: names.privateKey || ""
          }), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_6({
              name: names.attributes || "",
              value: Attribute.schema()
            })]
          })]
        });
      }
    }]);

    return PrivateKeyInfo;
  }();

  var EncryptedContentInfo = function () {
    function EncryptedContentInfo() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, EncryptedContentInfo);

      this.contentType = getParametersValue(parameters, "contentType", EncryptedContentInfo.defaultValues("contentType"));
      this.contentEncryptionAlgorithm = getParametersValue(parameters, "contentEncryptionAlgorithm", EncryptedContentInfo.defaultValues("contentEncryptionAlgorithm"));

      if ("encryptedContent" in parameters) {
        this.encryptedContent = parameters.encryptedContent;

        if (this.encryptedContent.idBlock.tagClass === 1 && this.encryptedContent.idBlock.tagNumber === 4) {
          if (this.encryptedContent.idBlock.isConstructed === false) {
            var constrString = new asn1_33({
              idBlock: {
                isConstructed: true
              },
              isConstructed: true
            });
            var offset = 0;
            var length = this.encryptedContent.valueBlock.valueHex.byteLength;

            while (length > 0) {
              var pieceView = new Uint8Array(this.encryptedContent.valueBlock.valueHex, offset, offset + 1024 > this.encryptedContent.valueBlock.valueHex.byteLength ? this.encryptedContent.valueBlock.valueHex.byteLength - offset : 1024);

              var _array = new ArrayBuffer(pieceView.length);

              var _view = new Uint8Array(_array);

              for (var i = 0; i < _view.length; i++) {
                _view[i] = pieceView[i];
              }

              constrString.valueBlock.value.push(new asn1_33({
                valueHex: _array
              }));
              length -= pieceView.length;
              offset += pieceView.length;
            }

            this.encryptedContent = constrString;
          }
        }
      }

      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(EncryptedContentInfo, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["contentType", "contentEncryptionAlgorithm", "encryptedContent"]);
        var asn1 = asn1_2(schema, schema, EncryptedContentInfo.schema({
          names: {
            contentType: "contentType",
            contentEncryptionAlgorithm: {
              names: {
                blockName: "contentEncryptionAlgorithm"
              }
            },
            encryptedContent: "encryptedContent"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for EncryptedContentInfo");
        this.contentType = asn1.result.contentType.valueBlock.toString();
        this.contentEncryptionAlgorithm = new AlgorithmIdentifier({
          schema: asn1.result.contentEncryptionAlgorithm
        });

        if ("encryptedContent" in asn1.result) {
          this.encryptedContent = asn1.result.encryptedContent;
          this.encryptedContent.idBlock.tagClass = 1;
          this.encryptedContent.idBlock.tagNumber = 4;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var sequenceLengthBlock = {
          isIndefiniteForm: false
        };
        var outputArray = [];
        outputArray.push(new asn1_29({
          value: this.contentType
        }));
        outputArray.push(this.contentEncryptionAlgorithm.toSchema());

        if ("encryptedContent" in this) {
          sequenceLengthBlock.isIndefiniteForm = this.encryptedContent.idBlock.isConstructed;
          var encryptedValue = this.encryptedContent;
          encryptedValue.idBlock.tagClass = 3;
          encryptedValue.idBlock.tagNumber = 0;
          encryptedValue.lenBlock.isIndefiniteForm = this.encryptedContent.idBlock.isConstructed;
          outputArray.push(encryptedValue);
        }

        return new asn1_36({
          lenBlock: sequenceLengthBlock,
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var _object = {
          contentType: this.contentType,
          contentEncryptionAlgorithm: this.contentEncryptionAlgorithm.toJSON()
        };
        if ("encryptedContent" in this) _object.encryptedContent = this.encryptedContent.toJSON();
        return _object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "contentType":
            return "";

          case "contentEncryptionAlgorithm":
            return new AlgorithmIdentifier();

          case "encryptedContent":
            return new asn1_33();

          default:
            throw new Error("Invalid member name for EncryptedContentInfo class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "contentType":
            return memberValue === "";

          case "contentEncryptionAlgorithm":
            return memberValue.algorithmId === "" && "algorithmParams" in memberValue === false;

          case "encryptedContent":
            return memberValue.isEqual(EncryptedContentInfo.defaultValues(memberName));

          default:
            throw new Error("Invalid member name for EncryptedContentInfo class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.contentType || ""
          }), AlgorithmIdentifier.schema(names.contentEncryptionAlgorithm || {}), new asn1_8({
            value: [new asn1_39({
              name: names.encryptedContent || "",
              idBlock: {
                tagClass: 3,
                tagNumber: 0
              },
              value: [new asn1_6({
                value: new asn1_33()
              })]
            }), new asn1_40({
              name: names.encryptedContent || "",
              idBlock: {
                tagClass: 3,
                tagNumber: 0
              }
            })]
          })]
        });
      }
    }]);

    return EncryptedContentInfo;
  }();

  var RSASSAPSSParams = function () {
    function RSASSAPSSParams() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, RSASSAPSSParams);

      this.hashAlgorithm = getParametersValue(parameters, "hashAlgorithm", RSASSAPSSParams.defaultValues("hashAlgorithm"));
      this.maskGenAlgorithm = getParametersValue(parameters, "maskGenAlgorithm", RSASSAPSSParams.defaultValues("maskGenAlgorithm"));
      this.saltLength = getParametersValue(parameters, "saltLength", RSASSAPSSParams.defaultValues("saltLength"));
      this.trailerField = getParametersValue(parameters, "trailerField", RSASSAPSSParams.defaultValues("trailerField"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(RSASSAPSSParams, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["hashAlgorithm", "maskGenAlgorithm", "saltLength", "trailerField"]);
        var asn1 = asn1_2(schema, schema, RSASSAPSSParams.schema({
          names: {
            hashAlgorithm: {
              names: {
                blockName: "hashAlgorithm"
              }
            },
            maskGenAlgorithm: {
              names: {
                blockName: "maskGenAlgorithm"
              }
            },
            saltLength: "saltLength",
            trailerField: "trailerField"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RSASSAPSSParams");
        if ("hashAlgorithm" in asn1.result) this.hashAlgorithm = new AlgorithmIdentifier({
          schema: asn1.result.hashAlgorithm
        });
        if ("maskGenAlgorithm" in asn1.result) this.maskGenAlgorithm = new AlgorithmIdentifier({
          schema: asn1.result.maskGenAlgorithm
        });
        if ("saltLength" in asn1.result) this.saltLength = asn1.result.saltLength.valueBlock.valueDec;
        if ("trailerField" in asn1.result) this.trailerField = asn1.result.trailerField.valueBlock.valueDec;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if (!this.hashAlgorithm.isEqual(RSASSAPSSParams.defaultValues("hashAlgorithm"))) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [this.hashAlgorithm.toSchema()]
          }));
        }

        if (!this.maskGenAlgorithm.isEqual(RSASSAPSSParams.defaultValues("maskGenAlgorithm"))) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [this.maskGenAlgorithm.toSchema()]
          }));
        }

        if (this.saltLength !== RSASSAPSSParams.defaultValues("saltLength")) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            value: [new asn1_31({
              value: this.saltLength
            })]
          }));
        }

        if (this.trailerField !== RSASSAPSSParams.defaultValues("trailerField")) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 3
            },
            value: [new asn1_31({
              value: this.trailerField
            })]
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};
        if (!this.hashAlgorithm.isEqual(RSASSAPSSParams.defaultValues("hashAlgorithm"))) object.hashAlgorithm = this.hashAlgorithm.toJSON();
        if (!this.maskGenAlgorithm.isEqual(RSASSAPSSParams.defaultValues("maskGenAlgorithm"))) object.maskGenAlgorithm = this.maskGenAlgorithm.toJSON();
        if (this.saltLength !== RSASSAPSSParams.defaultValues("saltLength")) object.saltLength = this.saltLength;
        if (this.trailerField !== RSASSAPSSParams.defaultValues("trailerField")) object.trailerField = this.trailerField;
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "hashAlgorithm":
            return new AlgorithmIdentifier({
              algorithmId: "1.3.14.3.2.26",
              algorithmParams: new asn1_34()
            });

          case "maskGenAlgorithm":
            return new AlgorithmIdentifier({
              algorithmId: "1.2.840.113549.1.1.8",
              algorithmParams: new AlgorithmIdentifier({
                algorithmId: "1.3.14.3.2.26",
                algorithmParams: new asn1_34()
              }).toSchema()
            });

          case "saltLength":
            return 20;

          case "trailerField":
            return 1;

          default:
            throw new Error("Invalid member name for RSASSAPSSParams class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            optional: true,
            value: [AlgorithmIdentifier.schema(names.hashAlgorithm || {})]
          }), new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            optional: true,
            value: [AlgorithmIdentifier.schema(names.maskGenAlgorithm || {})]
          }), new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            optional: true,
            value: [new asn1_31({
              name: names.saltLength || ""
            })]
          }), new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 3
            },
            optional: true,
            value: [new asn1_31({
              name: names.trailerField || ""
            })]
          })]
        });
      }
    }]);

    return RSASSAPSSParams;
  }();

  var PBKDF2Params = function () {
    function PBKDF2Params() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PBKDF2Params);

      this.salt = getParametersValue(parameters, "salt", PBKDF2Params.defaultValues("salt"));
      this.iterationCount = getParametersValue(parameters, "iterationCount", PBKDF2Params.defaultValues("iterationCount"));
      if ("keyLength" in parameters) this.keyLength = getParametersValue(parameters, "keyLength", PBKDF2Params.defaultValues("keyLength"));
      if ("prf" in parameters) this.prf = getParametersValue(parameters, "prf", PBKDF2Params.defaultValues("prf"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PBKDF2Params, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["salt", "iterationCount", "keyLength", "prf"]);
        var asn1 = asn1_2(schema, schema, PBKDF2Params.schema({
          names: {
            saltPrimitive: "salt",
            saltConstructed: {
              names: {
                blockName: "salt"
              }
            },
            iterationCount: "iterationCount",
            keyLength: "keyLength",
            prf: {
              names: {
                blockName: "prf",
                optional: true
              }
            }
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PBKDF2Params");
        this.salt = asn1.result.salt;
        this.iterationCount = asn1.result.iterationCount.valueBlock.valueDec;
        if ("keyLength" in asn1.result) this.keyLength = asn1.result.keyLength.valueBlock.valueDec;
        if ("prf" in asn1.result) this.prf = new AlgorithmIdentifier({
          schema: asn1.result.prf
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(this.salt);
        outputArray.push(new asn1_31({
          value: this.iterationCount
        }));

        if ("keyLength" in this) {
          if (PBKDF2Params.defaultValues("keyLength") !== this.keyLength) outputArray.push(new asn1_31({
            value: this.keyLength
          }));
        }

        if ("prf" in this) {
          if (PBKDF2Params.defaultValues("prf").isEqual(this.prf) === false) outputArray.push(this.prf.toSchema());
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var _object = {
          salt: this.salt.toJSON(),
          iterationCount: this.iterationCount
        };

        if ("keyLength" in this) {
          if (PBKDF2Params.defaultValues("keyLength") !== this.keyLength) _object.keyLength = this.keyLength;
        }

        if ("prf" in this) {
          if (PBKDF2Params.defaultValues("prf").isEqual(this.prf) === false) _object.prf = this.prf.toJSON();
        }

        return _object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "salt":
            return {};

          case "iterationCount":
            return -1;

          case "keyLength":
            return 0;

          case "prf":
            return new AlgorithmIdentifier({
              algorithmId: "1.3.14.3.2.26",
              algorithmParams: new asn1_34()
            });

          default:
            throw new Error("Invalid member name for PBKDF2Params class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_8({
            value: [new asn1_33({
              name: names.saltPrimitive || ""
            }), AlgorithmIdentifier.schema(names.saltConstructed || {})]
          }), new asn1_31({
            name: names.iterationCount || ""
          }), new asn1_31({
            name: names.keyLength || "",
            optional: true
          }), AlgorithmIdentifier.schema(names.prf || {
            names: {
              optional: true
            }
          })]
        });
      }
    }]);

    return PBKDF2Params;
  }();

  var PBES2Params = function () {
    function PBES2Params() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PBES2Params);

      this.keyDerivationFunc = getParametersValue(parameters, "keyDerivationFunc", PBES2Params.defaultValues("keyDerivationFunc"));
      this.encryptionScheme = getParametersValue(parameters, "encryptionScheme", PBES2Params.defaultValues("encryptionScheme"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PBES2Params, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["keyDerivationFunc", "encryptionScheme"]);
        var asn1 = asn1_2(schema, schema, PBES2Params.schema({
          names: {
            keyDerivationFunc: {
              names: {
                blockName: "keyDerivationFunc"
              }
            },
            encryptionScheme: {
              names: {
                blockName: "encryptionScheme"
              }
            }
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PBES2Params");
        this.keyDerivationFunc = new AlgorithmIdentifier({
          schema: asn1.result.keyDerivationFunc
        });
        this.encryptionScheme = new AlgorithmIdentifier({
          schema: asn1.result.encryptionScheme
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [this.keyDerivationFunc.toSchema(), this.encryptionScheme.toSchema()]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          keyDerivationFunc: this.keyDerivationFunc.toJSON(),
          encryptionScheme: this.encryptionScheme.toJSON()
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "keyDerivationFunc":
            return new AlgorithmIdentifier();

          case "encryptionScheme":
            return new AlgorithmIdentifier();

          default:
            throw new Error("Invalid member name for PBES2Params class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [AlgorithmIdentifier.schema(names.keyDerivationFunc || {}), AlgorithmIdentifier.schema(names.encryptionScheme || {})]
        });
      }
    }]);

    return PBES2Params;
  }();

  function makePKCS12B2Key(cryptoEngine, hashAlgorithm, keyLength, password, salt, iterationCount) {
    var u;
    var v;
    var result = [];

    switch (hashAlgorithm.toUpperCase()) {
      case "SHA-1":
        u = 20;
        v = 64;
        break;

      case "SHA-256":
        u = 32;
        v = 64;
        break;

      case "SHA-384":
        u = 48;
        v = 128;
        break;

      case "SHA-512":
        u = 64;
        v = 128;
        break;

      default:
        throw new Error("Unsupported hashing algorithm");
    }

    var passwordViewInitial = new Uint8Array(password);
    var passwordTransformed = new ArrayBuffer(password.byteLength * 2 + 2);
    var passwordTransformedView = new Uint8Array(passwordTransformed);

    for (var i = 0; i < passwordViewInitial.length; i++) {
      passwordTransformedView[i * 2] = 0x00;
      passwordTransformedView[i * 2 + 1] = passwordViewInitial[i];
    }

    passwordTransformedView[passwordTransformedView.length - 2] = 0x00;
    passwordTransformedView[passwordTransformedView.length - 1] = 0x00;
    password = passwordTransformed.slice(0);
    var D = new ArrayBuffer(v);
    var dView = new Uint8Array(D);

    for (var _i21 = 0; _i21 < D.byteLength; _i21++) {
      dView[_i21] = 3;
    }

    var saltLength = salt.byteLength;
    var sLen = v * Math.ceil(saltLength / v);
    var S = new ArrayBuffer(sLen);
    var sView = new Uint8Array(S);
    var saltView = new Uint8Array(salt);

    for (var _i22 = 0; _i22 < sLen; _i22++) {
      sView[_i22] = saltView[_i22 % saltLength];
    }

    var passwordLength = password.byteLength;
    var pLen = v * Math.ceil(passwordLength / v);
    var P = new ArrayBuffer(pLen);
    var pView = new Uint8Array(P);
    var passwordView = new Uint8Array(password);

    for (var _i23 = 0; _i23 < pLen; _i23++) {
      pView[_i23] = passwordView[_i23 % passwordLength];
    }

    var sPlusPLength = S.byteLength + P.byteLength;
    var I = new ArrayBuffer(sPlusPLength);
    var iView = new Uint8Array(I);
    iView.set(sView);
    iView.set(pView, sView.length);
    var c = Math.ceil((keyLength >> 3) / u);
    var internalSequence = Promise.resolve(I);

    for (var _i24 = 0; _i24 <= c; _i24++) {
      internalSequence = internalSequence.then(function (_I) {
        var dAndI = new ArrayBuffer(D.byteLength + _I.byteLength);
        var dAndIView = new Uint8Array(dAndI);
        dAndIView.set(dView);
        dAndIView.set(iView, dView.length);
        return dAndI;
      });

      for (var j = 0; j < iterationCount; j++) {
        internalSequence = internalSequence.then(function (roundBuffer) {
          return cryptoEngine.digest({
            name: hashAlgorithm
          }, new Uint8Array(roundBuffer));
        });
      }

      internalSequence = internalSequence.then(function (roundBuffer) {
        var B = new ArrayBuffer(v);
        var bView = new Uint8Array(B);

        for (var _j = 0; _j < B.byteLength; _j++) {
          bView[_j] = roundBuffer[_j % roundBuffer.length];
        }

        var k = Math.ceil(saltLength / v) + Math.ceil(passwordLength / v);
        var iRound = [];
        var sliceStart = 0;
        var sliceLength = v;

        for (var _j2 = 0; _j2 < k; _j2++) {
          var chunk = Array.from(new Uint8Array(I.slice(sliceStart, sliceStart + sliceLength)));
          sliceStart += v;
          if (sliceStart + v > I.byteLength) sliceLength = I.byteLength - sliceStart;
          var x = 0x1ff;

          for (var l = B.byteLength - 1; l >= 0; l--) {
            x >>= 8;
            x += bView[l] + chunk[l];
            chunk[l] = x & 0xff;
          }

          iRound.push.apply(iRound, _toConsumableArray(chunk));
        }

        I = new ArrayBuffer(iRound.length);
        iView = new Uint8Array(I);
        iView.set(iRound);
        result.push.apply(result, _toConsumableArray(new Uint8Array(roundBuffer)));
        return I;
      });
    }

    internalSequence = internalSequence.then(function () {
      var resultBuffer = new ArrayBuffer(keyLength >> 3);
      var resultView = new Uint8Array(resultBuffer);
      resultView.set(new Uint8Array(result).slice(0, keyLength >> 3));
      return resultBuffer;
    });
    return internalSequence;
  }

  var CryptoEngine = function () {
    function CryptoEngine() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CryptoEngine);

      this.crypto = getParametersValue(parameters, "crypto", {});
      this.subtle = getParametersValue(parameters, "subtle", {});
      this.name = getParametersValue(parameters, "name", "");
    }

    _createClass(CryptoEngine, [{
      key: "importKey",
      value: function importKey(format, keyData, algorithm, extractable, keyUsages) {
        var _this54 = this;

        var jwk = {};
        if (keyData instanceof Uint8Array) keyData = keyData.buffer;

        switch (format.toLowerCase()) {
          case "raw":
            return this.subtle.importKey("raw", keyData, algorithm, extractable, keyUsages);

          case "spki":
            {
              var _asn2 = asn1_1(keyData);

              if (_asn2.offset === -1) return Promise.reject("Incorrect keyData");
              var publicKeyInfo = new PublicKeyInfo();

              try {
                publicKeyInfo.fromSchema(_asn2.result);
              } catch (ex) {
                return Promise.reject("Incorrect keyData");
              }

              switch (algorithm.name.toUpperCase()) {
                case "RSA-PSS":
                  {
                    switch (algorithm.hash.name.toUpperCase()) {
                      case "SHA-1":
                        jwk.alg = "PS1";
                        break;

                      case "SHA-256":
                        jwk.alg = "PS256";
                        break;

                      case "SHA-384":
                        jwk.alg = "PS384";
                        break;

                      case "SHA-512":
                        jwk.alg = "PS512";
                        break;

                      default:
                        return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                    }
                  }

                case "RSASSA-PKCS1-V1_5":
                  {
                    keyUsages = ["verify"];
                    jwk.kty = "RSA";
                    jwk.ext = extractable;
                    jwk.key_ops = keyUsages;
                    if (publicKeyInfo.algorithm.algorithmId !== "1.2.840.113549.1.1.1") return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId));

                    if ("alg" in jwk === false) {
                      switch (algorithm.hash.name.toUpperCase()) {
                        case "SHA-1":
                          jwk.alg = "RS1";
                          break;

                        case "SHA-256":
                          jwk.alg = "RS256";
                          break;

                        case "SHA-384":
                          jwk.alg = "RS384";
                          break;

                        case "SHA-512":
                          jwk.alg = "RS512";
                          break;

                        default:
                          return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId));
                      }
                    }

                    var publicKeyJSON = publicKeyInfo.toJSON();

                    for (var _i25 = 0, _Object$keys3 = Object.keys(publicKeyJSON); _i25 < _Object$keys3.length; _i25++) {
                      var key = _Object$keys3[_i25];
                      jwk[key] = publicKeyJSON[key];
                    }
                  }
                  break;

                case "ECDSA":
                  keyUsages = ["verify"];

                case "ECDH":
                  {
                    jwk = {
                      kty: "EC",
                      ext: extractable,
                      key_ops: keyUsages
                    };
                    if (publicKeyInfo.algorithm.algorithmId !== "1.2.840.10045.2.1") return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId));

                    var _publicKeyJSON = publicKeyInfo.toJSON();

                    for (var _i26 = 0, _Object$keys4 = Object.keys(_publicKeyJSON); _i26 < _Object$keys4.length; _i26++) {
                      var _key7 = _Object$keys4[_i26];
                      jwk[_key7] = _publicKeyJSON[_key7];
                    }
                  }
                  break;

                case "RSA-OAEP":
                  {
                    jwk.kty = "RSA";
                    jwk.ext = extractable;
                    jwk.key_ops = keyUsages;
                    if (this.name.toLowerCase() === "safari") jwk.alg = "RSA-OAEP";else {
                      switch (algorithm.hash.name.toUpperCase()) {
                        case "SHA-1":
                          jwk.alg = "RSA-OAEP";
                          break;

                        case "SHA-256":
                          jwk.alg = "RSA-OAEP-256";
                          break;

                        case "SHA-384":
                          jwk.alg = "RSA-OAEP-384";
                          break;

                        case "SHA-512":
                          jwk.alg = "RSA-OAEP-512";
                          break;

                        default:
                          return Promise.reject("Incorrect public key algorithm: ".concat(publicKeyInfo.algorithm.algorithmId));
                      }
                    }

                    var _publicKeyJSON2 = publicKeyInfo.toJSON();

                    for (var _i27 = 0, _Object$keys5 = Object.keys(_publicKeyJSON2); _i27 < _Object$keys5.length; _i27++) {
                      var _key8 = _Object$keys5[_i27];
                      jwk[_key8] = _publicKeyJSON2[_key8];
                    }
                  }
                  break;

                default:
                  return Promise.reject("Incorrect algorithm name: ".concat(algorithm.name.toUpperCase()));
              }
            }
            break;

          case "pkcs8":
            {
              var privateKeyInfo = new PrivateKeyInfo();

              var _asn3 = asn1_1(keyData);

              if (_asn3.offset === -1) return Promise.reject("Incorrect keyData");

              try {
                privateKeyInfo.fromSchema(_asn3.result);
              } catch (ex) {
                return Promise.reject("Incorrect keyData");
              }

              if ("parsedKey" in privateKeyInfo === false) return Promise.reject("Incorrect keyData");

              switch (algorithm.name.toUpperCase()) {
                case "RSA-PSS":
                  {
                    switch (algorithm.hash.name.toUpperCase()) {
                      case "SHA-1":
                        jwk.alg = "PS1";
                        break;

                      case "SHA-256":
                        jwk.alg = "PS256";
                        break;

                      case "SHA-384":
                        jwk.alg = "PS384";
                        break;

                      case "SHA-512":
                        jwk.alg = "PS512";
                        break;

                      default:
                        return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                    }
                  }

                case "RSASSA-PKCS1-V1_5":
                  {
                    keyUsages = ["sign"];
                    jwk.kty = "RSA";
                    jwk.ext = extractable;
                    jwk.key_ops = keyUsages;
                    if (privateKeyInfo.privateKeyAlgorithm.algorithmId !== "1.2.840.113549.1.1.1") return Promise.reject("Incorrect private key algorithm: ".concat(privateKeyInfo.privateKeyAlgorithm.algorithmId));

                    if ("alg" in jwk === false) {
                      switch (algorithm.hash.name.toUpperCase()) {
                        case "SHA-1":
                          jwk.alg = "RS1";
                          break;

                        case "SHA-256":
                          jwk.alg = "RS256";
                          break;

                        case "SHA-384":
                          jwk.alg = "RS384";
                          break;

                        case "SHA-512":
                          jwk.alg = "RS512";
                          break;

                        default:
                          return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                      }
                    }

                    var privateKeyJSON = privateKeyInfo.toJSON();

                    for (var _i28 = 0, _Object$keys6 = Object.keys(privateKeyJSON); _i28 < _Object$keys6.length; _i28++) {
                      var _key9 = _Object$keys6[_i28];
                      jwk[_key9] = privateKeyJSON[_key9];
                    }
                  }
                  break;

                case "ECDSA":
                  keyUsages = ["sign"];

                case "ECDH":
                  {
                    jwk = {
                      kty: "EC",
                      ext: extractable,
                      key_ops: keyUsages
                    };
                    if (privateKeyInfo.privateKeyAlgorithm.algorithmId !== "1.2.840.10045.2.1") return Promise.reject("Incorrect algorithm: ".concat(privateKeyInfo.privateKeyAlgorithm.algorithmId));

                    var _privateKeyJSON = privateKeyInfo.toJSON();

                    for (var _i29 = 0, _Object$keys7 = Object.keys(_privateKeyJSON); _i29 < _Object$keys7.length; _i29++) {
                      var _key10 = _Object$keys7[_i29];
                      jwk[_key10] = _privateKeyJSON[_key10];
                    }
                  }
                  break;

                case "RSA-OAEP":
                  {
                    jwk.kty = "RSA";
                    jwk.ext = extractable;
                    jwk.key_ops = keyUsages;
                    if (this.name.toLowerCase() === "safari") jwk.alg = "RSA-OAEP";else {
                      switch (algorithm.hash.name.toUpperCase()) {
                        case "SHA-1":
                          jwk.alg = "RSA-OAEP";
                          break;

                        case "SHA-256":
                          jwk.alg = "RSA-OAEP-256";
                          break;

                        case "SHA-384":
                          jwk.alg = "RSA-OAEP-384";
                          break;

                        case "SHA-512":
                          jwk.alg = "RSA-OAEP-512";
                          break;

                        default:
                          return Promise.reject("Incorrect hash algorithm: ".concat(algorithm.hash.name.toUpperCase()));
                      }
                    }

                    var _privateKeyJSON2 = privateKeyInfo.toJSON();

                    for (var _i30 = 0, _Object$keys8 = Object.keys(_privateKeyJSON2); _i30 < _Object$keys8.length; _i30++) {
                      var _key11 = _Object$keys8[_i30];
                      jwk[_key11] = _privateKeyJSON2[_key11];
                    }
                  }
                  break;

                default:
                  return Promise.reject("Incorrect algorithm name: ".concat(algorithm.name.toUpperCase()));
              }
            }
            break;

          case "jwk":
            jwk = keyData;
            break;

          default:
            return Promise.reject("Incorrect format: ".concat(format));
        }

        if (this.name.toLowerCase() === "safari") {
          return Promise.resolve().then(function () {
            return _this54.subtle.importKey("jwk", stringToArrayBuffer(JSON.stringify(jwk)), algorithm, extractable, keyUsages);
          }).then(function (result) {
            return result;
          }, function () {
            return _this54.subtle.importKey("jwk", jwk, algorithm, extractable, keyUsages);
          });
        }

        return this.subtle.importKey("jwk", jwk, algorithm, extractable, keyUsages);
      }
    }, {
      key: "exportKey",
      value: function exportKey(format, key) {
        var sequence = this.subtle.exportKey("jwk", key);

        if (this.name.toLowerCase() === "safari") {
          sequence = sequence.then(function (result) {
            if (result instanceof ArrayBuffer) return JSON.parse(arrayBufferToString(result));
            return result;
          });
        }

        switch (format.toLowerCase()) {
          case "raw":
            return this.subtle.exportKey("raw", key);

          case "spki":
            sequence = sequence.then(function (result) {
              var publicKeyInfo = new PublicKeyInfo();

              try {
                publicKeyInfo.fromJSON(result);
              } catch (ex) {
                return Promise.reject("Incorrect key data");
              }

              return publicKeyInfo.toSchema().toBER(false);
            });
            break;

          case "pkcs8":
            sequence = sequence.then(function (result) {
              var privateKeyInfo = new PrivateKeyInfo();

              try {
                privateKeyInfo.fromJSON(result);
              } catch (ex) {
                return Promise.reject("Incorrect key data");
              }

              return privateKeyInfo.toSchema().toBER(false);
            });
            break;

          case "jwk":
            break;

          default:
            return Promise.reject("Incorrect format: ".concat(format));
        }

        return sequence;
      }
    }, {
      key: "convert",
      value: function convert(inputFormat, outputFormat, keyData, algorithm, extractable, keyUsages) {
        var _this55 = this;

        switch (inputFormat.toLowerCase()) {
          case "raw":
            switch (outputFormat.toLowerCase()) {
              case "raw":
                return Promise.resolve(keyData);

              case "spki":
                return Promise.resolve().then(function () {
                  return _this55.importKey("raw", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("spki", result);
                });

              case "pkcs8":
                return Promise.resolve().then(function () {
                  return _this55.importKey("raw", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("pkcs8", result);
                });

              case "jwk":
                return Promise.resolve().then(function () {
                  return _this55.importKey("raw", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("jwk", result);
                });

              default:
                return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
            }

          case "spki":
            switch (outputFormat.toLowerCase()) {
              case "raw":
                return Promise.resolve().then(function () {
                  return _this55.importKey("spki", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("raw", result);
                });

              case "spki":
                return Promise.resolve(keyData);

              case "pkcs8":
                return Promise.reject("Impossible to convert between SPKI/PKCS8");

              case "jwk":
                return Promise.resolve().then(function () {
                  return _this55.importKey("spki", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("jwk", result);
                });

              default:
                return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
            }

          case "pkcs8":
            switch (outputFormat.toLowerCase()) {
              case "raw":
                return Promise.resolve().then(function () {
                  return _this55.importKey("pkcs8", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("raw", result);
                });

              case "spki":
                return Promise.reject("Impossible to convert between SPKI/PKCS8");

              case "pkcs8":
                return Promise.resolve(keyData);

              case "jwk":
                return Promise.resolve().then(function () {
                  return _this55.importKey("pkcs8", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("jwk", result);
                });

              default:
                return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
            }

          case "jwk":
            switch (outputFormat.toLowerCase()) {
              case "raw":
                return Promise.resolve().then(function () {
                  return _this55.importKey("jwk", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("raw", result);
                });

              case "spki":
                return Promise.resolve().then(function () {
                  return _this55.importKey("jwk", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("spki", result);
                });

              case "pkcs8":
                return Promise.resolve().then(function () {
                  return _this55.importKey("jwk", keyData, algorithm, extractable, keyUsages);
                }).then(function (result) {
                  return _this55.exportKey("pkcs8", result);
                });

              case "jwk":
                return Promise.resolve(keyData);

              default:
                return Promise.reject("Incorrect outputFormat: ".concat(outputFormat));
            }

          default:
            return Promise.reject("Incorrect inputFormat: ".concat(inputFormat));
        }
      }
    }, {
      key: "encrypt",
      value: function encrypt() {
        var _this$subtle;

        return (_this$subtle = this.subtle).encrypt.apply(_this$subtle, arguments);
      }
    }, {
      key: "decrypt",
      value: function decrypt() {
        var _this$subtle2;

        return (_this$subtle2 = this.subtle).decrypt.apply(_this$subtle2, arguments);
      }
    }, {
      key: "sign",
      value: function sign() {
        var _this$subtle3;

        return (_this$subtle3 = this.subtle).sign.apply(_this$subtle3, arguments);
      }
    }, {
      key: "verify",
      value: function verify() {
        var _this$subtle4;

        return (_this$subtle4 = this.subtle).verify.apply(_this$subtle4, arguments);
      }
    }, {
      key: "digest",
      value: function digest() {
        var _this$subtle5;

        return (_this$subtle5 = this.subtle).digest.apply(_this$subtle5, arguments);
      }
    }, {
      key: "generateKey",
      value: function generateKey() {
        var _this$subtle6;

        return (_this$subtle6 = this.subtle).generateKey.apply(_this$subtle6, arguments);
      }
    }, {
      key: "deriveKey",
      value: function deriveKey() {
        var _this$subtle7;

        return (_this$subtle7 = this.subtle).deriveKey.apply(_this$subtle7, arguments);
      }
    }, {
      key: "deriveBits",
      value: function deriveBits() {
        var _this$subtle8;

        return (_this$subtle8 = this.subtle).deriveBits.apply(_this$subtle8, arguments);
      }
    }, {
      key: "wrapKey",
      value: function wrapKey() {
        var _this$subtle9;

        return (_this$subtle9 = this.subtle).wrapKey.apply(_this$subtle9, arguments);
      }
    }, {
      key: "unwrapKey",
      value: function unwrapKey() {
        var _this$subtle10;

        return (_this$subtle10 = this.subtle).unwrapKey.apply(_this$subtle10, arguments);
      }
    }, {
      key: "getRandomValues",
      value: function getRandomValues(view) {
        if ("getRandomValues" in this.crypto === false) throw new Error("No support for getRandomValues");
        return this.crypto.getRandomValues(view);
      }
    }, {
      key: "getAlgorithmByOID",
      value: function getAlgorithmByOID(oid) {
        switch (oid) {
          case "1.2.840.113549.1.1.1":
          case "1.2.840.113549.1.1.5":
            return {
              name: "RSASSA-PKCS1-v1_5",
              hash: {
                name: "SHA-1"
              }
            };

          case "1.2.840.113549.1.1.11":
            return {
              name: "RSASSA-PKCS1-v1_5",
              hash: {
                name: "SHA-256"
              }
            };

          case "1.2.840.113549.1.1.12":
            return {
              name: "RSASSA-PKCS1-v1_5",
              hash: {
                name: "SHA-384"
              }
            };

          case "1.2.840.113549.1.1.13":
            return {
              name: "RSASSA-PKCS1-v1_5",
              hash: {
                name: "SHA-512"
              }
            };

          case "1.2.840.113549.1.1.10":
            return {
              name: "RSA-PSS"
            };

          case "1.2.840.113549.1.1.7":
            return {
              name: "RSA-OAEP"
            };

          case "1.2.840.10045.2.1":
          case "1.2.840.10045.4.1":
            return {
              name: "ECDSA",
              hash: {
                name: "SHA-1"
              }
            };

          case "1.2.840.10045.4.3.2":
            return {
              name: "ECDSA",
              hash: {
                name: "SHA-256"
              }
            };

          case "1.2.840.10045.4.3.3":
            return {
              name: "ECDSA",
              hash: {
                name: "SHA-384"
              }
            };

          case "1.2.840.10045.4.3.4":
            return {
              name: "ECDSA",
              hash: {
                name: "SHA-512"
              }
            };

          case "1.3.133.16.840.63.0.2":
            return {
              name: "ECDH",
              kdf: "SHA-1"
            };

          case "1.3.132.1.11.1":
            return {
              name: "ECDH",
              kdf: "SHA-256"
            };

          case "1.3.132.1.11.2":
            return {
              name: "ECDH",
              kdf: "SHA-384"
            };

          case "1.3.132.1.11.3":
            return {
              name: "ECDH",
              kdf: "SHA-512"
            };

          case "2.16.840.1.101.3.4.1.2":
            return {
              name: "AES-CBC",
              length: 128
            };

          case "2.16.840.1.101.3.4.1.22":
            return {
              name: "AES-CBC",
              length: 192
            };

          case "2.16.840.1.101.3.4.1.42":
            return {
              name: "AES-CBC",
              length: 256
            };

          case "2.16.840.1.101.3.4.1.6":
            return {
              name: "AES-GCM",
              length: 128
            };

          case "2.16.840.1.101.3.4.1.26":
            return {
              name: "AES-GCM",
              length: 192
            };

          case "2.16.840.1.101.3.4.1.46":
            return {
              name: "AES-GCM",
              length: 256
            };

          case "2.16.840.1.101.3.4.1.4":
            return {
              name: "AES-CFB",
              length: 128
            };

          case "2.16.840.1.101.3.4.1.24":
            return {
              name: "AES-CFB",
              length: 192
            };

          case "2.16.840.1.101.3.4.1.44":
            return {
              name: "AES-CFB",
              length: 256
            };

          case "2.16.840.1.101.3.4.1.5":
            return {
              name: "AES-KW",
              length: 128
            };

          case "2.16.840.1.101.3.4.1.25":
            return {
              name: "AES-KW",
              length: 192
            };

          case "2.16.840.1.101.3.4.1.45":
            return {
              name: "AES-KW",
              length: 256
            };

          case "1.2.840.113549.2.7":
            return {
              name: "HMAC",
              hash: {
                name: "SHA-1"
              }
            };

          case "1.2.840.113549.2.9":
            return {
              name: "HMAC",
              hash: {
                name: "SHA-256"
              }
            };

          case "1.2.840.113549.2.10":
            return {
              name: "HMAC",
              hash: {
                name: "SHA-384"
              }
            };

          case "1.2.840.113549.2.11":
            return {
              name: "HMAC",
              hash: {
                name: "SHA-512"
              }
            };

          case "1.2.840.113549.1.9.16.3.5":
            return {
              name: "DH"
            };

          case "1.3.14.3.2.26":
            return {
              name: "SHA-1"
            };

          case "2.16.840.1.101.3.4.2.1":
            return {
              name: "SHA-256"
            };

          case "2.16.840.1.101.3.4.2.2":
            return {
              name: "SHA-384"
            };

          case "2.16.840.1.101.3.4.2.3":
            return {
              name: "SHA-512"
            };

          case "1.2.840.113549.1.5.12":
            return {
              name: "PBKDF2"
            };

          case "1.2.840.10045.3.1.7":
            return {
              name: "P-256"
            };

          case "1.3.132.0.34":
            return {
              name: "P-384"
            };

          case "1.3.132.0.35":
            return {
              name: "P-521"
            };
        }

        return {};
      }
    }, {
      key: "getOIDByAlgorithm",
      value: function getOIDByAlgorithm(algorithm) {
        var result = "";

        switch (algorithm.name.toUpperCase()) {
          case "RSASSA-PKCS1-V1_5":
            switch (algorithm.hash.name.toUpperCase()) {
              case "SHA-1":
                result = "1.2.840.113549.1.1.5";
                break;

              case "SHA-256":
                result = "1.2.840.113549.1.1.11";
                break;

              case "SHA-384":
                result = "1.2.840.113549.1.1.12";
                break;

              case "SHA-512":
                result = "1.2.840.113549.1.1.13";
                break;
            }

            break;

          case "RSA-PSS":
            result = "1.2.840.113549.1.1.10";
            break;

          case "RSA-OAEP":
            result = "1.2.840.113549.1.1.7";
            break;

          case "ECDSA":
            switch (algorithm.hash.name.toUpperCase()) {
              case "SHA-1":
                result = "1.2.840.10045.4.1";
                break;

              case "SHA-256":
                result = "1.2.840.10045.4.3.2";
                break;

              case "SHA-384":
                result = "1.2.840.10045.4.3.3";
                break;

              case "SHA-512":
                result = "1.2.840.10045.4.3.4";
                break;
            }

            break;

          case "ECDH":
            switch (algorithm.kdf.toUpperCase()) {
              case "SHA-1":
                result = "1.3.133.16.840.63.0.2";
                break;

              case "SHA-256":
                result = "1.3.132.1.11.1";
                break;

              case "SHA-384":
                result = "1.3.132.1.11.2";
                break;

              case "SHA-512":
                result = "1.3.132.1.11.3";
                break;
            }

            break;

          case "AES-CTR":
            break;

          case "AES-CBC":
            switch (algorithm.length) {
              case 128:
                result = "2.16.840.1.101.3.4.1.2";
                break;

              case 192:
                result = "2.16.840.1.101.3.4.1.22";
                break;

              case 256:
                result = "2.16.840.1.101.3.4.1.42";
                break;
            }

            break;

          case "AES-CMAC":
            break;

          case "AES-GCM":
            switch (algorithm.length) {
              case 128:
                result = "2.16.840.1.101.3.4.1.6";
                break;

              case 192:
                result = "2.16.840.1.101.3.4.1.26";
                break;

              case 256:
                result = "2.16.840.1.101.3.4.1.46";
                break;
            }

            break;

          case "AES-CFB":
            switch (algorithm.length) {
              case 128:
                result = "2.16.840.1.101.3.4.1.4";
                break;

              case 192:
                result = "2.16.840.1.101.3.4.1.24";
                break;

              case 256:
                result = "2.16.840.1.101.3.4.1.44";
                break;
            }

            break;

          case "AES-KW":
            switch (algorithm.length) {
              case 128:
                result = "2.16.840.1.101.3.4.1.5";
                break;

              case 192:
                result = "2.16.840.1.101.3.4.1.25";
                break;

              case 256:
                result = "2.16.840.1.101.3.4.1.45";
                break;
            }

            break;

          case "HMAC":
            switch (algorithm.hash.name.toUpperCase()) {
              case "SHA-1":
                result = "1.2.840.113549.2.7";
                break;

              case "SHA-256":
                result = "1.2.840.113549.2.9";
                break;

              case "SHA-384":
                result = "1.2.840.113549.2.10";
                break;

              case "SHA-512":
                result = "1.2.840.113549.2.11";
                break;
            }

            break;

          case "DH":
            result = "1.2.840.113549.1.9.16.3.5";
            break;

          case "SHA-1":
            result = "1.3.14.3.2.26";
            break;

          case "SHA-256":
            result = "2.16.840.1.101.3.4.2.1";
            break;

          case "SHA-384":
            result = "2.16.840.1.101.3.4.2.2";
            break;

          case "SHA-512":
            result = "2.16.840.1.101.3.4.2.3";
            break;

          case "CONCAT":
            break;

          case "HKDF":
            break;

          case "PBKDF2":
            result = "1.2.840.113549.1.5.12";
            break;

          case "P-256":
            result = "1.2.840.10045.3.1.7";
            break;

          case "P-384":
            result = "1.3.132.0.34";
            break;

          case "P-521":
            result = "1.3.132.0.35";
            break;
        }

        return result;
      }
    }, {
      key: "getAlgorithmParameters",
      value: function getAlgorithmParameters(algorithmName, operation) {
        var result = {
          algorithm: {},
          usages: []
        };

        switch (algorithmName.toUpperCase()) {
          case "RSASSA-PKCS1-V1_5":
            switch (operation.toLowerCase()) {
              case "generatekey":
                result = {
                  algorithm: {
                    name: "RSASSA-PKCS1-v1_5",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    hash: {
                      name: "SHA-256"
                    }
                  },
                  usages: ["sign", "verify"]
                };
                break;

              case "verify":
              case "sign":
              case "importkey":
                result = {
                  algorithm: {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: {
                      name: "SHA-256"
                    }
                  },
                  usages: ["verify"]
                };
                break;

              case "exportkey":
              default:
                return {
                  algorithm: {
                    name: "RSASSA-PKCS1-v1_5"
                  },
                  usages: []
                };
            }

            break;

          case "RSA-PSS":
            switch (operation.toLowerCase()) {
              case "sign":
              case "verify":
                result = {
                  algorithm: {
                    name: "RSA-PSS",
                    hash: {
                      name: "SHA-1"
                    },
                    saltLength: 20
                  },
                  usages: ["sign", "verify"]
                };
                break;

              case "generatekey":
                result = {
                  algorithm: {
                    name: "RSA-PSS",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    hash: {
                      name: "SHA-1"
                    }
                  },
                  usages: ["sign", "verify"]
                };
                break;

              case "importkey":
                result = {
                  algorithm: {
                    name: "RSA-PSS",
                    hash: {
                      name: "SHA-1"
                    }
                  },
                  usages: ["verify"]
                };
                break;

              case "exportkey":
              default:
                return {
                  algorithm: {
                    name: "RSA-PSS"
                  },
                  usages: []
                };
            }

            break;

          case "RSA-OAEP":
            switch (operation.toLowerCase()) {
              case "encrypt":
              case "decrypt":
                result = {
                  algorithm: {
                    name: "RSA-OAEP"
                  },
                  usages: ["encrypt", "decrypt"]
                };
                break;

              case "generatekey":
                result = {
                  algorithm: {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    hash: {
                      name: "SHA-256"
                    }
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              case "importkey":
                result = {
                  algorithm: {
                    name: "RSA-OAEP",
                    hash: {
                      name: "SHA-256"
                    }
                  },
                  usages: ["encrypt"]
                };
                break;

              case "exportkey":
              default:
                return {
                  algorithm: {
                    name: "RSA-OAEP"
                  },
                  usages: []
                };
            }

            break;

          case "ECDSA":
            switch (operation.toLowerCase()) {
              case "generatekey":
                result = {
                  algorithm: {
                    name: "ECDSA",
                    namedCurve: "P-256"
                  },
                  usages: ["sign", "verify"]
                };
                break;

              case "importkey":
                result = {
                  algorithm: {
                    name: "ECDSA",
                    namedCurve: "P-256"
                  },
                  usages: ["verify"]
                };
                break;

              case "verify":
              case "sign":
                result = {
                  algorithm: {
                    name: "ECDSA",
                    hash: {
                      name: "SHA-256"
                    }
                  },
                  usages: ["sign"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "ECDSA"
                  },
                  usages: []
                };
            }

            break;

          case "ECDH":
            switch (operation.toLowerCase()) {
              case "exportkey":
              case "importkey":
              case "generatekey":
                result = {
                  algorithm: {
                    name: "ECDH",
                    namedCurve: "P-256"
                  },
                  usages: ["deriveKey", "deriveBits"]
                };
                break;

              case "derivekey":
              case "derivebits":
                result = {
                  algorithm: {
                    name: "ECDH",
                    namedCurve: "P-256",
                    public: []
                  },
                  usages: ["encrypt", "decrypt"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "ECDH"
                  },
                  usages: []
                };
            }

            break;

          case "AES-CTR":
            switch (operation.toLowerCase()) {
              case "importkey":
              case "exportkey":
              case "generatekey":
                result = {
                  algorithm: {
                    name: "AES-CTR",
                    length: 256
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              case "decrypt":
              case "encrypt":
                result = {
                  algorithm: {
                    name: "AES-CTR",
                    counter: new Uint8Array(16),
                    length: 10
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "AES-CTR"
                  },
                  usages: []
                };
            }

            break;

          case "AES-CBC":
            switch (operation.toLowerCase()) {
              case "importkey":
              case "exportkey":
              case "generatekey":
                result = {
                  algorithm: {
                    name: "AES-CBC",
                    length: 256
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              case "decrypt":
              case "encrypt":
                result = {
                  algorithm: {
                    name: "AES-CBC",
                    iv: this.getRandomValues(new Uint8Array(16))
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "AES-CBC"
                  },
                  usages: []
                };
            }

            break;

          case "AES-GCM":
            switch (operation.toLowerCase()) {
              case "importkey":
              case "exportkey":
              case "generatekey":
                result = {
                  algorithm: {
                    name: "AES-GCM",
                    length: 256
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              case "decrypt":
              case "encrypt":
                result = {
                  algorithm: {
                    name: "AES-GCM",
                    iv: this.getRandomValues(new Uint8Array(16))
                  },
                  usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "AES-GCM"
                  },
                  usages: []
                };
            }

            break;

          case "AES-KW":
            switch (operation.toLowerCase()) {
              case "importkey":
              case "exportkey":
              case "generatekey":
              case "wrapkey":
              case "unwrapkey":
                result = {
                  algorithm: {
                    name: "AES-KW",
                    length: 256
                  },
                  usages: ["wrapKey", "unwrapKey"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "AES-KW"
                  },
                  usages: []
                };
            }

            break;

          case "HMAC":
            switch (operation.toLowerCase()) {
              case "sign":
              case "verify":
                result = {
                  algorithm: {
                    name: "HMAC"
                  },
                  usages: ["sign", "verify"]
                };
                break;

              case "importkey":
              case "exportkey":
              case "generatekey":
                result = {
                  algorithm: {
                    name: "HMAC",
                    length: 32,
                    hash: {
                      name: "SHA-256"
                    }
                  },
                  usages: ["sign", "verify"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "HMAC"
                  },
                  usages: []
                };
            }

            break;

          case "HKDF":
            switch (operation.toLowerCase()) {
              case "derivekey":
                result = {
                  algorithm: {
                    name: "HKDF",
                    hash: "SHA-256",
                    salt: new Uint8Array([]),
                    info: new Uint8Array([])
                  },
                  usages: ["encrypt", "decrypt"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "HKDF"
                  },
                  usages: []
                };
            }

            break;

          case "PBKDF2":
            switch (operation.toLowerCase()) {
              case "derivekey":
                result = {
                  algorithm: {
                    name: "PBKDF2",
                    hash: {
                      name: "SHA-256"
                    },
                    salt: new Uint8Array([]),
                    iterations: 10000
                  },
                  usages: ["encrypt", "decrypt"]
                };
                break;

              default:
                return {
                  algorithm: {
                    name: "PBKDF2"
                  },
                  usages: []
                };
            }

            break;
        }

        return result;
      }
    }, {
      key: "getHashAlgorithm",
      value: function getHashAlgorithm(signatureAlgorithm) {
        var result = "";

        switch (signatureAlgorithm.algorithmId) {
          case "1.2.840.10045.4.1":
          case "1.2.840.113549.1.1.5":
            result = "SHA-1";
            break;

          case "1.2.840.10045.4.3.2":
          case "1.2.840.113549.1.1.11":
            result = "SHA-256";
            break;

          case "1.2.840.10045.4.3.3":
          case "1.2.840.113549.1.1.12":
            result = "SHA-384";
            break;

          case "1.2.840.10045.4.3.4":
          case "1.2.840.113549.1.1.13":
            result = "SHA-512";
            break;

          case "1.2.840.113549.1.1.10":
            {
              try {
                var params = new RSASSAPSSParams({
                  schema: signatureAlgorithm.algorithmParams
                });

                if ("hashAlgorithm" in params) {
                  var algorithm = this.getAlgorithmByOID(params.hashAlgorithm.algorithmId);
                  if ("name" in algorithm === false) return "";
                  result = algorithm.name;
                } else result = "SHA-1";
              } catch (ex) {}
            }
            break;
        }

        return result;
      }
    }, {
      key: "encryptEncryptedContentInfo",
      value: function encryptEncryptedContentInfo(parameters) {
        var _this56 = this;

        if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
        if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
        if ("contentEncryptionAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentEncryptionAlgorithm\"");
        if ("hmacHashAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"hmacHashAlgorithm\"");
        if ("iterationCount" in parameters === false) return Promise.reject("Absent mandatory parameter \"iterationCount\"");
        if ("contentToEncrypt" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentToEncrypt\"");
        if ("contentType" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentType\"");
        var contentEncryptionOID = this.getOIDByAlgorithm(parameters.contentEncryptionAlgorithm);
        if (contentEncryptionOID === "") return Promise.reject("Wrong \"contentEncryptionAlgorithm\" value");
        var pbkdf2OID = this.getOIDByAlgorithm({
          name: "PBKDF2"
        });
        if (pbkdf2OID === "") return Promise.reject("Can not find OID for PBKDF2");
        var hmacOID = this.getOIDByAlgorithm({
          name: "HMAC",
          hash: {
            name: parameters.hmacHashAlgorithm
          }
        });
        if (hmacOID === "") return Promise.reject("Incorrect value for \"hmacHashAlgorithm\": ".concat(parameters.hmacHashAlgorithm));
        var sequence = Promise.resolve();
        var ivBuffer = new ArrayBuffer(16);
        var ivView = new Uint8Array(ivBuffer);
        this.getRandomValues(ivView);
        var saltBuffer = new ArrayBuffer(64);
        var saltView = new Uint8Array(saltBuffer);
        this.getRandomValues(saltView);
        var contentView = new Uint8Array(parameters.contentToEncrypt);
        var pbkdf2Params = new PBKDF2Params({
          salt: new asn1_33({
            valueHex: saltBuffer
          }),
          iterationCount: parameters.iterationCount,
          prf: new AlgorithmIdentifier({
            algorithmId: hmacOID,
            algorithmParams: new asn1_34()
          })
        });
        sequence = sequence.then(function () {
          var passwordView = new Uint8Array(parameters.password);
          return _this56.importKey("raw", passwordView, "PBKDF2", false, ["deriveKey"]);
        }, function (error) {
          return Promise.reject(error);
        });
        sequence = sequence.then(function (result) {
          return _this56.deriveKey({
            name: "PBKDF2",
            hash: {
              name: parameters.hmacHashAlgorithm
            },
            salt: saltView,
            iterations: parameters.iterationCount
          }, result, parameters.contentEncryptionAlgorithm, false, ["encrypt"]);
        }, function (error) {
          return Promise.reject(error);
        });
        sequence = sequence.then(function (result) {
          return _this56.encrypt({
            name: parameters.contentEncryptionAlgorithm.name,
            iv: ivView
          }, result, contentView);
        }, function (error) {
          return Promise.reject(error);
        });
        sequence = sequence.then(function (result) {
          var pbes2Parameters = new PBES2Params({
            keyDerivationFunc: new AlgorithmIdentifier({
              algorithmId: pbkdf2OID,
              algorithmParams: pbkdf2Params.toSchema()
            }),
            encryptionScheme: new AlgorithmIdentifier({
              algorithmId: contentEncryptionOID,
              algorithmParams: new asn1_33({
                valueHex: ivBuffer
              })
            })
          });
          return new EncryptedContentInfo({
            contentType: parameters.contentType,
            contentEncryptionAlgorithm: new AlgorithmIdentifier({
              algorithmId: "1.2.840.113549.1.5.13",
              algorithmParams: pbes2Parameters.toSchema()
            }),
            encryptedContent: new asn1_33({
              valueHex: result
            })
          });
        }, function (error) {
          return Promise.reject(error);
        });
        return sequence;
      }
    }, {
      key: "decryptEncryptedContentInfo",
      value: function decryptEncryptedContentInfo(parameters) {
        var _this57 = this;

        if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
        if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
        if ("encryptedContentInfo" in parameters === false) return Promise.reject("Absent mandatory parameter \"encryptedContentInfo\"");
        if (parameters.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId !== "1.2.840.113549.1.5.13") return Promise.reject("Unknown \"contentEncryptionAlgorithm\": ".concat(parameters.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId));
        var sequence = Promise.resolve();
        var pbes2Parameters;

        try {
          pbes2Parameters = new PBES2Params({
            schema: parameters.encryptedContentInfo.contentEncryptionAlgorithm.algorithmParams
          });
        } catch (ex) {
          return Promise.reject("Incorrectly encoded \"pbes2Parameters\"");
        }

        var pbkdf2Params;

        try {
          pbkdf2Params = new PBKDF2Params({
            schema: pbes2Parameters.keyDerivationFunc.algorithmParams
          });
        } catch (ex) {
          return Promise.reject("Incorrectly encoded \"pbkdf2Params\"");
        }

        var contentEncryptionAlgorithm = this.getAlgorithmByOID(pbes2Parameters.encryptionScheme.algorithmId);
        if ("name" in contentEncryptionAlgorithm === false) return Promise.reject("Incorrect OID for \"contentEncryptionAlgorithm\": ".concat(pbes2Parameters.encryptionScheme.algorithmId));
        var ivBuffer = pbes2Parameters.encryptionScheme.algorithmParams.valueBlock.valueHex;
        var ivView = new Uint8Array(ivBuffer);
        var saltBuffer = pbkdf2Params.salt.valueBlock.valueHex;
        var saltView = new Uint8Array(saltBuffer);
        var iterationCount = pbkdf2Params.iterationCount;
        var hmacHashAlgorithm = "SHA-1";

        if ("prf" in pbkdf2Params) {
          var algorithm = this.getAlgorithmByOID(pbkdf2Params.prf.algorithmId);
          if ("name" in algorithm === false) return Promise.reject("Incorrect OID for HMAC hash algorithm");
          hmacHashAlgorithm = algorithm.hash.name;
        }

        sequence = sequence.then(function () {
          return _this57.importKey("raw", parameters.password, "PBKDF2", false, ["deriveKey"]);
        }, function (error) {
          return Promise.reject(error);
        });
        sequence = sequence.then(function (result) {
          return _this57.deriveKey({
            name: "PBKDF2",
            hash: {
              name: hmacHashAlgorithm
            },
            salt: saltView,
            iterations: iterationCount
          }, result, contentEncryptionAlgorithm, false, ["decrypt"]);
        }, function (error) {
          return Promise.reject(error);
        });
        sequence = sequence.then(function (result) {
          var dataBuffer = new ArrayBuffer(0);
          if (parameters.encryptedContentInfo.encryptedContent.idBlock.isConstructed === false) dataBuffer = parameters.encryptedContentInfo.encryptedContent.valueBlock.valueHex;else {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = parameters.encryptedContentInfo.encryptedContent.valueBlock.value[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var content = _step5.value;
                dataBuffer = utilConcatBuf(dataBuffer, content.valueBlock.valueHex);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
          return _this57.decrypt({
            name: contentEncryptionAlgorithm.name,
            iv: ivView
          }, result, dataBuffer);
        }, function (error) {
          return Promise.reject(error);
        });
        return sequence;
      }
    }, {
      key: "stampDataWithPassword",
      value: function stampDataWithPassword(parameters) {
        var _this58 = this;

        if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
        if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
        if ("hashAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"hashAlgorithm\"");
        if ("salt" in parameters === false) return Promise.reject("Absent mandatory parameter \"iterationCount\"");
        if ("iterationCount" in parameters === false) return Promise.reject("Absent mandatory parameter \"salt\"");
        if ("contentToStamp" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentToStamp\"");
        var length;

        switch (parameters.hashAlgorithm.toLowerCase()) {
          case "sha-1":
            length = 160;
            break;

          case "sha-256":
            length = 256;
            break;

          case "sha-384":
            length = 384;
            break;

          case "sha-512":
            length = 512;
            break;

          default:
            return Promise.reject("Incorrect \"parameters.hashAlgorithm\" parameter: ".concat(parameters.hashAlgorithm));
        }

        var sequence = Promise.resolve();
        var hmacAlgorithm = {
          name: "HMAC",
          length: length,
          hash: {
            name: parameters.hashAlgorithm
          }
        };
        sequence = sequence.then(function () {
          return makePKCS12B2Key(_this58, parameters.hashAlgorithm, length, parameters.password, parameters.salt, parameters.iterationCount);
        });
        sequence = sequence.then(function (result) {
          return _this58.importKey("raw", new Uint8Array(result), hmacAlgorithm, false, ["sign"]);
        });
        sequence = sequence.then(function (result) {
          return _this58.sign(hmacAlgorithm, result, new Uint8Array(parameters.contentToStamp));
        }, function (error) {
          return Promise.reject(error);
        });
        return sequence;
      }
    }, {
      key: "verifyDataStampedWithPassword",
      value: function verifyDataStampedWithPassword(parameters) {
        var _this59 = this;

        if (parameters instanceof Object === false) return Promise.reject("Parameters must have type \"Object\"");
        if ("password" in parameters === false) return Promise.reject("Absent mandatory parameter \"password\"");
        if ("hashAlgorithm" in parameters === false) return Promise.reject("Absent mandatory parameter \"hashAlgorithm\"");
        if ("salt" in parameters === false) return Promise.reject("Absent mandatory parameter \"iterationCount\"");
        if ("iterationCount" in parameters === false) return Promise.reject("Absent mandatory parameter \"salt\"");
        if ("contentToVerify" in parameters === false) return Promise.reject("Absent mandatory parameter \"contentToVerify\"");
        if ("signatureToVerify" in parameters === false) return Promise.reject("Absent mandatory parameter \"signatureToVerify\"");
        var length;

        switch (parameters.hashAlgorithm.toLowerCase()) {
          case "sha-1":
            length = 160;
            break;

          case "sha-256":
            length = 256;
            break;

          case "sha-384":
            length = 384;
            break;

          case "sha-512":
            length = 512;
            break;

          default:
            return Promise.reject("Incorrect \"parameters.hashAlgorithm\" parameter: ".concat(parameters.hashAlgorithm));
        }

        var sequence = Promise.resolve();
        var hmacAlgorithm = {
          name: "HMAC",
          length: length,
          hash: {
            name: parameters.hashAlgorithm
          }
        };
        sequence = sequence.then(function () {
          return makePKCS12B2Key(_this59, parameters.hashAlgorithm, length, parameters.password, parameters.salt, parameters.iterationCount);
        });
        sequence = sequence.then(function (result) {
          return _this59.importKey("raw", new Uint8Array(result), hmacAlgorithm, false, ["verify"]);
        });
        sequence = sequence.then(function (result) {
          return _this59.verify(hmacAlgorithm, result, new Uint8Array(parameters.signatureToVerify), new Uint8Array(parameters.contentToVerify));
        }, function (error) {
          return Promise.reject(error);
        });
        return sequence;
      }
    }, {
      key: "getSignatureParameters",
      value: function getSignatureParameters(privateKey) {
        var hashAlgorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "SHA-1";
        var oid = this.getOIDByAlgorithm({
          name: hashAlgorithm
        });
        if (oid === "") return Promise.reject("Unsupported hash algorithm: ".concat(hashAlgorithm));
        var signatureAlgorithm = new AlgorithmIdentifier();
        var parameters = this.getAlgorithmParameters(privateKey.algorithm.name, "sign");
        parameters.algorithm.hash.name = hashAlgorithm;

        switch (privateKey.algorithm.name.toUpperCase()) {
          case "RSASSA-PKCS1-V1_5":
          case "ECDSA":
            signatureAlgorithm.algorithmId = this.getOIDByAlgorithm(parameters.algorithm);
            break;

          case "RSA-PSS":
            {
              switch (hashAlgorithm.toUpperCase()) {
                case "SHA-256":
                  parameters.algorithm.saltLength = 32;
                  break;

                case "SHA-384":
                  parameters.algorithm.saltLength = 48;
                  break;

                case "SHA-512":
                  parameters.algorithm.saltLength = 64;
                  break;
              }

              var paramsObject = {};

              if (hashAlgorithm.toUpperCase() !== "SHA-1") {
                var hashAlgorithmOID = this.getOIDByAlgorithm({
                  name: hashAlgorithm
                });
                if (hashAlgorithmOID === "") return Promise.reject("Unsupported hash algorithm: ".concat(hashAlgorithm));
                paramsObject.hashAlgorithm = new AlgorithmIdentifier({
                  algorithmId: hashAlgorithmOID,
                  algorithmParams: new asn1_34()
                });
                paramsObject.maskGenAlgorithm = new AlgorithmIdentifier({
                  algorithmId: "1.2.840.113549.1.1.8",
                  algorithmParams: paramsObject.hashAlgorithm.toSchema()
                });
              }

              if (parameters.algorithm.saltLength !== 20) paramsObject.saltLength = parameters.algorithm.saltLength;
              var pssParameters = new RSASSAPSSParams(paramsObject);
              signatureAlgorithm.algorithmId = "1.2.840.113549.1.1.10";
              signatureAlgorithm.algorithmParams = pssParameters.toSchema();
            }
            break;

          default:
            return Promise.reject("Unsupported signature algorithm: ".concat(privateKey.algorithm.name));
        }

        return Promise.resolve().then(function () {
          return {
            signatureAlgorithm: signatureAlgorithm,
            parameters: parameters
          };
        });
      }
    }, {
      key: "signWithPrivateKey",
      value: function signWithPrivateKey(data, privateKey, parameters) {
        return this.sign(parameters.algorithm, privateKey, new Uint8Array(data)).then(function (result) {
          if (parameters.algorithm.name === "ECDSA") result = createCMSECDSASignature(result);
          return result;
        }, function (error) {
          return Promise.reject("Signing error: ".concat(error));
        });
      }
    }, {
      key: "fillPublicKeyParameters",
      value: function fillPublicKeyParameters(publicKeyInfo, signatureAlgorithm) {
        var parameters = {};
        var shaAlgorithm = this.getHashAlgorithm(signatureAlgorithm);
        if (shaAlgorithm === "") return Promise.reject("Unsupported signature algorithm: ".concat(signatureAlgorithm.algorithmId));
        var algorithmId;
        if (signatureAlgorithm.algorithmId === "1.2.840.113549.1.1.10") algorithmId = signatureAlgorithm.algorithmId;else algorithmId = publicKeyInfo.algorithm.algorithmId;
        var algorithmObject = this.getAlgorithmByOID(algorithmId);
        if ("name" in algorithmObject === "") return Promise.reject("Unsupported public key algorithm: ".concat(signatureAlgorithm.algorithmId));
        parameters.algorithm = this.getAlgorithmParameters(algorithmObject.name, "importkey");
        if ("hash" in parameters.algorithm.algorithm) parameters.algorithm.algorithm.hash.name = shaAlgorithm;

        if (algorithmObject.name === "ECDSA") {
          var algorithmParamsChecked = false;

          if ("algorithmParams" in publicKeyInfo.algorithm === true) {
            if ("idBlock" in publicKeyInfo.algorithm.algorithmParams) {
              if (publicKeyInfo.algorithm.algorithmParams.idBlock.tagClass === 1 && publicKeyInfo.algorithm.algorithmParams.idBlock.tagNumber === 6) algorithmParamsChecked = true;
            }
          }

          if (algorithmParamsChecked === false) return Promise.reject("Incorrect type for ECDSA public key parameters");
          var curveObject = this.getAlgorithmByOID(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString());
          if ("name" in curveObject === false) return Promise.reject("Unsupported named curve algorithm: ".concat(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString()));
          parameters.algorithm.algorithm.namedCurve = curveObject.name;
        }

        return parameters;
      }
    }, {
      key: "getPublicKey",
      value: function getPublicKey(publicKeyInfo, signatureAlgorithm) {
        var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (parameters === null) parameters = this.fillPublicKeyParameters(publicKeyInfo, signatureAlgorithm);
        var publicKeyInfoSchema = publicKeyInfo.toSchema();
        var publicKeyInfoBuffer = publicKeyInfoSchema.toBER(false);
        var publicKeyInfoView = new Uint8Array(publicKeyInfoBuffer);
        return this.importKey("spki", publicKeyInfoView, parameters.algorithm.algorithm, true, parameters.algorithm.usages);
      }
    }, {
      key: "verifyWithPublicKey",
      value: function verifyWithPublicKey(data, signature, publicKeyInfo, signatureAlgorithm) {
        var _this60 = this;

        var shaAlgorithm = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var sequence = Promise.resolve();

        if (shaAlgorithm === null) {
          shaAlgorithm = this.getHashAlgorithm(signatureAlgorithm);
          if (shaAlgorithm === "") return Promise.reject("Unsupported signature algorithm: ".concat(signatureAlgorithm.algorithmId));
          sequence = sequence.then(function () {
            return _this60.getPublicKey(publicKeyInfo, signatureAlgorithm);
          });
        } else {
          var parameters = {};
          var algorithmId;
          if (signatureAlgorithm.algorithmId === "1.2.840.113549.1.1.10") algorithmId = signatureAlgorithm.algorithmId;else algorithmId = publicKeyInfo.algorithm.algorithmId;
          var algorithmObject = this.getAlgorithmByOID(algorithmId);
          if ("name" in algorithmObject === "") return Promise.reject("Unsupported public key algorithm: ".concat(signatureAlgorithm.algorithmId));
          parameters.algorithm = this.getAlgorithmParameters(algorithmObject.name, "importkey");
          if ("hash" in parameters.algorithm.algorithm) parameters.algorithm.algorithm.hash.name = shaAlgorithm;

          if (algorithmObject.name === "ECDSA") {
            var algorithmParamsChecked = false;

            if ("algorithmParams" in publicKeyInfo.algorithm === true) {
              if ("idBlock" in publicKeyInfo.algorithm.algorithmParams) {
                if (publicKeyInfo.algorithm.algorithmParams.idBlock.tagClass === 1 && publicKeyInfo.algorithm.algorithmParams.idBlock.tagNumber === 6) algorithmParamsChecked = true;
              }
            }

            if (algorithmParamsChecked === false) return Promise.reject("Incorrect type for ECDSA public key parameters");
            var curveObject = this.getAlgorithmByOID(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString());
            if ("name" in curveObject === false) return Promise.reject("Unsupported named curve algorithm: ".concat(publicKeyInfo.algorithm.algorithmParams.valueBlock.toString()));
            parameters.algorithm.algorithm.namedCurve = curveObject.name;
          }

          sequence = sequence.then(function () {
            return _this60.getPublicKey(publicKeyInfo, null, parameters);
          });
        }

        sequence = sequence.then(function (publicKey) {
          var algorithm = _this60.getAlgorithmParameters(publicKey.algorithm.name, "verify");

          if ("hash" in algorithm.algorithm) algorithm.algorithm.hash.name = shaAlgorithm;
          var signatureValue = signature.valueBlock.valueHex;

          if (publicKey.algorithm.name === "ECDSA") {
            var _asn4 = asn1_1(signatureValue);

            signatureValue = createECDSASignatureFromCMS(_asn4.result);
          }

          if (publicKey.algorithm.name === "RSA-PSS") {
            var pssParameters;

            try {
              pssParameters = new RSASSAPSSParams({
                schema: signatureAlgorithm.algorithmParams
              });
            } catch (ex) {
              return Promise.reject(ex);
            }

            if ("saltLength" in pssParameters) algorithm.algorithm.saltLength = pssParameters.saltLength;else algorithm.algorithm.saltLength = 20;
            var hashAlgo = "SHA-1";

            if ("hashAlgorithm" in pssParameters) {
              var hashAlgorithm = _this60.getAlgorithmByOID(pssParameters.hashAlgorithm.algorithmId);

              if ("name" in hashAlgorithm === false) return Promise.reject("Unrecognized hash algorithm: ".concat(pssParameters.hashAlgorithm.algorithmId));
              hashAlgo = hashAlgorithm.name;
            }

            algorithm.algorithm.hash.name = hashAlgo;
          }

          return _this60.verify(algorithm.algorithm, publicKey, new Uint8Array(signatureValue), new Uint8Array(data));
        });
        return sequence;
      }
    }]);

    return CryptoEngine;
  }();

  var engine = {
    name: "none",
    crypto: null,
    subtle: null
  };

  function _setEngine(name, crypto, subtle) {
    if (typeof process !== "undefined" && "pid" in process && typeof global !== "undefined" && typeof window === "undefined") {
      if (typeof global[process.pid] === "undefined") {
        global[process.pid] = {};
      } else {
        if (_typeof(global[process.pid]) !== "object") {
          throw new Error("Name global.".concat(process.pid, " already exists and it is not an object"));
        }
      }

      if (typeof global[process.pid].pkijs === "undefined") {
        global[process.pid].pkijs = {};
      } else {
        if (_typeof(global[process.pid].pkijs) !== "object") {
          throw new Error("Name global.".concat(process.pid, ".pkijs already exists and it is not an object"));
        }
      }

      global[process.pid].pkijs.engine = {
        name: name,
        crypto: crypto,
        subtle: subtle
      };
    } else {
        engine = {
          name: name,
          crypto: crypto,
          subtle: subtle
        };
      }
  }

  function getEngine() {
    if (typeof process !== "undefined" && "pid" in process && typeof global !== "undefined" && typeof window === "undefined") {
      var _engine;

      try {
        _engine = global[process.pid].pkijs.engine;
      } catch (ex) {
        throw new Error("Please call \"setEngine\" before call to \"getEngine\"");
      }

      return _engine;
    }

    return engine;
  }

  (function initCryptoEngine() {
    if (typeof self !== "undefined") {
      if ("crypto" in self) {
        var engineName = "webcrypto";
        var cryptoObject = self.crypto;
        var subtleObject;

        if ("webkitSubtle" in self.crypto) {
          try {
            subtleObject = self.crypto.webkitSubtle;
          } catch (ex) {
            subtleObject = self.crypto.subtle;
          }

          engineName = "safari";
        }

        if ("subtle" in self.crypto) subtleObject = self.crypto.subtle;

        if (typeof subtleObject === "undefined") {
          engine = {
            name: engineName,
            crypto: cryptoObject,
            subtle: null
          };
        } else {
          engine = {
            name: engineName,
            crypto: cryptoObject,
            subtle: new CryptoEngine({
              name: engineName,
              crypto: self.crypto,
              subtle: subtleObject
            })
          };
        }
      }
    }

    _setEngine(engine.name, engine.crypto, engine.subtle);
  })();

  function getCrypto() {
    var _engine = getEngine();

    if (_engine.subtle !== null) return _engine.subtle;
    return undefined;
  }

  function createCMSECDSASignature(signatureBuffer) {
    if (signatureBuffer.byteLength % 2 !== 0) return new ArrayBuffer(0);
    var length = signatureBuffer.byteLength / 2;
    var rBuffer = new ArrayBuffer(length);
    var rView = new Uint8Array(rBuffer);
    rView.set(new Uint8Array(signatureBuffer, 0, length));
    var rInteger = new asn1_31({
      valueHex: rBuffer
    });
    var sBuffer = new ArrayBuffer(length);
    var sView = new Uint8Array(sBuffer);
    sView.set(new Uint8Array(signatureBuffer, length, length));
    var sInteger = new asn1_31({
      valueHex: sBuffer
    });
    return new asn1_36({
      value: [rInteger.convertToDER(), sInteger.convertToDER()]
    }).toBER(false);
  }

  function stringPrep(inputString) {
    var isSpace = false;
    var cuttedResult = "";
    var result = inputString.trim();

    for (var i = 0; i < result.length; i++) {
      if (result.charCodeAt(i) === 32) {
        if (isSpace === false) isSpace = true;
      } else {
        if (isSpace) {
          cuttedResult += " ";
          isSpace = false;
        }

        cuttedResult += result[i];
      }
    }

    return cuttedResult.toLowerCase();
  }

  function createECDSASignatureFromCMS(cmsSignature) {
    if (cmsSignature instanceof asn1_36 === false) return new ArrayBuffer(0);
    if (cmsSignature.valueBlock.value.length !== 2) return new ArrayBuffer(0);
    if (cmsSignature.valueBlock.value[0] instanceof asn1_31 === false) return new ArrayBuffer(0);
    if (cmsSignature.valueBlock.value[1] instanceof asn1_31 === false) return new ArrayBuffer(0);
    var rValue = cmsSignature.valueBlock.value[0].convertFromDER();
    var sValue = cmsSignature.valueBlock.value[1].convertFromDER();

    switch (true) {
      case rValue.valueBlock.valueHex.byteLength < sValue.valueBlock.valueHex.byteLength:
        {
          if (sValue.valueBlock.valueHex.byteLength - rValue.valueBlock.valueHex.byteLength !== 1) throw new Error("Incorrect DER integer decoding");
          var correctedLength = sValue.valueBlock.valueHex.byteLength;
          var rValueView = new Uint8Array(rValue.valueBlock.valueHex);
          var rValueBufferCorrected = new ArrayBuffer(correctedLength);
          var rValueViewCorrected = new Uint8Array(rValueBufferCorrected);
          rValueViewCorrected.set(rValueView, 1);
          rValueViewCorrected[0] = 0x00;
          return utilConcatBuf(rValueBufferCorrected, sValue.valueBlock.valueHex);
        }

      case rValue.valueBlock.valueHex.byteLength > sValue.valueBlock.valueHex.byteLength:
        {
          if (rValue.valueBlock.valueHex.byteLength - sValue.valueBlock.valueHex.byteLength !== 1) throw new Error("Incorrect DER integer decoding");
          var _correctedLength = rValue.valueBlock.valueHex.byteLength;
          var sValueView = new Uint8Array(sValue.valueBlock.valueHex);
          var sValueBufferCorrected = new ArrayBuffer(_correctedLength);
          var sValueViewCorrected = new Uint8Array(sValueBufferCorrected);
          sValueViewCorrected.set(sValueView, 1);
          sValueViewCorrected[0] = 0x00;
          return utilConcatBuf(rValue.valueBlock.valueHex, sValueBufferCorrected);
        }

      default:
        {
          if (rValue.valueBlock.valueHex.byteLength % 2) {
            var _correctedLength2 = rValue.valueBlock.valueHex.byteLength + 1;

            var _rValueView = new Uint8Array(rValue.valueBlock.valueHex);

            var _rValueBufferCorrected = new ArrayBuffer(_correctedLength2);

            var _rValueViewCorrected = new Uint8Array(_rValueBufferCorrected);

            _rValueViewCorrected.set(_rValueView, 1);

            _rValueViewCorrected[0] = 0x00;

            var _sValueView = new Uint8Array(sValue.valueBlock.valueHex);

            var _sValueBufferCorrected = new ArrayBuffer(_correctedLength2);

            var _sValueViewCorrected = new Uint8Array(_sValueBufferCorrected);

            _sValueViewCorrected.set(_sValueView, 1);

            _sValueViewCorrected[0] = 0x00;
            return utilConcatBuf(_rValueBufferCorrected, _sValueBufferCorrected);
          }
        }
    }

    return utilConcatBuf(rValue.valueBlock.valueHex, sValue.valueBlock.valueHex);
  }

  var AttributeTypeAndValue = function () {
    function AttributeTypeAndValue() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AttributeTypeAndValue);

      this.type = getParametersValue(parameters, "type", AttributeTypeAndValue.defaultValues("type"));
      this.value = getParametersValue(parameters, "value", AttributeTypeAndValue.defaultValues("value"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(AttributeTypeAndValue, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["type", "typeValue"]);
        var asn1 = asn1_2(schema, schema, AttributeTypeAndValue.schema({
          names: {
            type: "type",
            value: "typeValue"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AttributeTypeAndValue");
        this.type = asn1.result.type.valueBlock.toString();
        this.value = asn1.result.typeValue;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [new asn1_29({
            value: this.type
          }), this.value]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var _object = {
          type: this.type
        };
        if (Object.keys(this.value).length !== 0) _object.value = this.value.toJSON();else _object.value = this.value;
        return _object;
      }
    }, {
      key: "isEqual",
      value: function isEqual(compareTo) {
        var stringBlockNames = [asn1_28.blockName(), asn1_26.blockName(), asn1_25.blockName(), asn1_24.blockName(), asn1_23.blockName(), asn1_22.blockName(), asn1_21.blockName(), asn1_20.blockName(), asn1_19.blockName(), asn1_18.blockName(), asn1_17.blockName(), asn1_16.blockName()];

        if (compareTo.constructor.blockName() === AttributeTypeAndValue.blockName()) {
          if (this.type !== compareTo.type) return false;
          var isString = false;
          var thisName = this.value.constructor.blockName();

          if (thisName === compareTo.value.constructor.blockName()) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = stringBlockNames[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var name = _step6.value;

                if (thisName === name) {
                  isString = true;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }

          if (isString) {
            var value1 = stringPrep(this.value.valueBlock.value);
            var value2 = stringPrep(compareTo.value.valueBlock.value);
            if (value1.localeCompare(value2) !== 0) return false;
          } else {
              if (isEqualBuffer(this.value.valueBeforeDecode, compareTo.value.valueBeforeDecode) === false) return false;
            }

          return true;
        }

        if (compareTo instanceof ArrayBuffer) return isEqualBuffer(this.value.valueBeforeDecode, compareTo);
        return false;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "type":
            return "";

          case "value":
            return {};

          default:
            throw new Error("Invalid member name for AttributeTypeAndValue class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.type || ""
          }), new asn1_7({
            name: names.value || ""
          })]
        });
      }
    }, {
      key: "blockName",
      value: function blockName() {
        return "AttributeTypeAndValue";
      }
    }]);

    return AttributeTypeAndValue;
  }();

  var RelativeDistinguishedNames = function () {
    function RelativeDistinguishedNames() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, RelativeDistinguishedNames);

      this.typesAndValues = getParametersValue(parameters, "typesAndValues", RelativeDistinguishedNames.defaultValues("typesAndValues"));
      this.valueBeforeDecode = getParametersValue(parameters, "valueBeforeDecode", RelativeDistinguishedNames.defaultValues("valueBeforeDecode"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(RelativeDistinguishedNames, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["RDN", "typesAndValues"]);
        var asn1 = asn1_2(schema, schema, RelativeDistinguishedNames.schema({
          names: {
            blockName: "RDN",
            repeatedSet: "typesAndValues"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RelativeDistinguishedNames");
        if ("typesAndValues" in asn1.result) this.typesAndValues = Array.from(asn1.result.typesAndValues, function (element) {
            return new AttributeTypeAndValue({
              schema: element
            });
          });
        this.valueBeforeDecode = asn1.result.RDN.valueBeforeDecode;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        if (this.valueBeforeDecode.byteLength === 0) {
            return new asn1_36({
              value: [new asn1_35({
                value: Array.from(this.typesAndValues, function (element) {
                  return element.toSchema();
                })
              })]
            });
          }

        var asn1 = asn1_1(this.valueBeforeDecode);
        return asn1.result;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          typesAndValues: Array.from(this.typesAndValues, function (element) {
            return element.toJSON();
          })
        };
      }
    }, {
      key: "isEqual",
      value: function isEqual(compareTo) {
        if (compareTo instanceof RelativeDistinguishedNames) {
          if (this.typesAndValues.length !== compareTo.typesAndValues.length) return false;
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this.typesAndValues.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                  index = _step7$value[0],
                  typeAndValue = _step7$value[1];

              if (typeAndValue.isEqual(compareTo.typesAndValues[index]) === false) return false;
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          return true;
        }

        if (compareTo instanceof ArrayBuffer) return isEqualBuffer(this.valueBeforeDecode, compareTo);
        return false;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "typesAndValues":
            return [];

          case "valueBeforeDecode":
            return new ArrayBuffer(0);

          default:
            throw new Error("Invalid member name for RelativeDistinguishedNames class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "typesAndValues":
            return memberValue.length === 0;

          case "valueBeforeDecode":
            return memberValue.byteLength === 0;

          default:
            throw new Error("Invalid member name for RelativeDistinguishedNames class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.repeatedSequence || "",
            value: new asn1_35({
              value: [new asn1_6({
                name: names.repeatedSet || "",
                value: AttributeTypeAndValue.schema(names.typeAndValue || {})
              })]
            })
          })]
        });
      }
    }]);

    return RelativeDistinguishedNames;
  }();

  function builtInStandardAttributes() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var names = getParametersValue(parameters, "names", {});
    return new asn1_36({
      optional: optional,
      value: [new asn1_39({
        optional: true,
        idBlock: {
          tagClass: 2,
          tagNumber: 1
        },
        name: names.country_name || "",
        value: [new asn1_8({
          value: [new asn1_24(), new asn1_23()]
        })]
      }), new asn1_39({
        optional: true,
        idBlock: {
          tagClass: 2,
          tagNumber: 2
        },
        name: names.administration_domain_name || "",
        value: [new asn1_8({
          value: [new asn1_24(), new asn1_23()]
        })]
      }), new asn1_40({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 0
        },
        name: names.network_address || "",
        isHexOnly: true
      }), new asn1_40({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 1
        },
        name: names.terminal_identifier || "",
        isHexOnly: true
      }), new asn1_39({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 2
        },
        name: names.private_domain_name || "",
        value: [new asn1_8({
          value: [new asn1_24(), new asn1_23()]
        })]
      }), new asn1_40({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 3
        },
        name: names.organization_name || "",
        isHexOnly: true
      }), new asn1_40({
        optional: true,
        name: names.numeric_user_identifier || "",
        idBlock: {
          tagClass: 3,
          tagNumber: 4
        },
        isHexOnly: true
      }), new asn1_39({
        optional: true,
        name: names.personal_name || "",
        idBlock: {
          tagClass: 3,
          tagNumber: 5
        },
        value: [new asn1_40({
          idBlock: {
            tagClass: 3,
            tagNumber: 0
          },
          isHexOnly: true
        }), new asn1_40({
          optional: true,
          idBlock: {
            tagClass: 3,
            tagNumber: 1
          },
          isHexOnly: true
        }), new asn1_40({
          optional: true,
          idBlock: {
            tagClass: 3,
            tagNumber: 2
          },
          isHexOnly: true
        }), new asn1_40({
          optional: true,
          idBlock: {
            tagClass: 3,
            tagNumber: 3
          },
          isHexOnly: true
        })]
      }), new asn1_39({
        optional: true,
        name: names.organizational_unit_names || "",
        idBlock: {
          tagClass: 3,
          tagNumber: 6
        },
        value: [new asn1_6({
          value: new asn1_23()
        })]
      })]
    });
  }

  function builtInDomainDefinedAttributes() {
    var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return new asn1_36({
      optional: optional,
      value: [new asn1_23(), new asn1_23()]
    });
  }

  function extensionAttributes() {
    var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return new asn1_35({
      optional: optional,
      value: [new asn1_40({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 0
        },
        isHexOnly: true
      }), new asn1_39({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 1
        },
        value: [new asn1_7()]
      })]
    });
  }

  var GeneralName = function () {
    function GeneralName() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GeneralName);

      this.type = getParametersValue(parameters, "type", GeneralName.defaultValues("type"));
      this.value = getParametersValue(parameters, "value", GeneralName.defaultValues("value"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(GeneralName, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["blockName", "otherName", "rfc822Name", "dNSName", "x400Address", "directoryName", "ediPartyName", "uniformResourceIdentifier", "iPAddress", "registeredID"]);
        var asn1 = asn1_2(schema, schema, GeneralName.schema({
          names: {
            blockName: "blockName",
            otherName: "otherName",
            rfc822Name: "rfc822Name",
            dNSName: "dNSName",
            x400Address: "x400Address",
            directoryName: {
              names: {
                blockName: "directoryName"
              }
            },
            ediPartyName: "ediPartyName",
            uniformResourceIdentifier: "uniformResourceIdentifier",
            iPAddress: "iPAddress",
            registeredID: "registeredID"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for GeneralName");
        this.type = asn1.result.blockName.idBlock.tagNumber;

        switch (this.type) {
          case 0:
            this.value = asn1.result.blockName;
            break;

          case 1:
          case 2:
          case 6:
            {
              var value = asn1.result.blockName;
              value.idBlock.tagClass = 1;
              value.idBlock.tagNumber = 22;
              var valueBER = value.toBER(false);
              this.value = asn1_1(valueBER).result.valueBlock.value;
            }
            break;

          case 3:
            this.value = asn1.result.blockName;
            break;

          case 4:
            this.value = new RelativeDistinguishedNames({
              schema: asn1.result.directoryName
            });
            break;

          case 5:
            this.value = asn1.result.ediPartyName;
            break;

          case 7:
            this.value = new asn1_33({
              valueHex: asn1.result.blockName.valueBlock.valueHex
            });
            break;

          case 8:
            {
              var _value7 = asn1.result.blockName;
              _value7.idBlock.tagClass = 1;
              _value7.idBlock.tagNumber = 6;

              var _valueBER = _value7.toBER(false);

              this.value = asn1_1(_valueBER).result.valueBlock.toString();
            }
            break;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        switch (this.type) {
          case 0:
          case 3:
          case 5:
            return new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: this.type
              },
              value: [this.value]
            });

          case 1:
          case 2:
          case 6:
            {
              var value = new asn1_20({
                value: this.value
              });
              value.idBlock.tagClass = 3;
              value.idBlock.tagNumber = this.type;
              return value;
            }

          case 4:
            return new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: 4
              },
              value: [this.value.toSchema()]
            });

          case 7:
            {
              var _value8 = this.value;
              _value8.idBlock.tagClass = 3;
              _value8.idBlock.tagNumber = this.type;
              return _value8;
            }

          case 8:
            {
              var _value9 = new asn1_29({
                value: this.value
              });

              _value9.idBlock.tagClass = 3;
              _value9.idBlock.tagNumber = this.type;
              return _value9;
            }

          default:
            return GeneralName.schema();
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var _object = {
          type: this.type,
          value: ""
        };
        if (typeof this.value === "string") _object.value = this.value;else {
          try {
            _object.value = this.value.toJSON();
          } catch (ex) {}
        }
        return _object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "type":
            return 9;

          case "value":
            return {};

          default:
            throw new Error("Invalid member name for GeneralName class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "type":
            return memberValue === GeneralName.defaultValues(memberName);

          case "value":
            return Object.keys(memberValue).length === 0;

          default:
            throw new Error("Invalid member name for GeneralName class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_8({
          value: [new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            name: names.blockName || "",
            value: [new asn1_29(), new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: 0
              },
              value: [new asn1_7()]
            })]
          }), new asn1_40({
            name: names.blockName || "",
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            }
          }), new asn1_40({
            name: names.blockName || "",
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            }
          }), new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 3
            },
            name: names.blockName || "",
            value: [builtInStandardAttributes(names.builtInStandardAttributes || {}, false), builtInDomainDefinedAttributes(true), extensionAttributes(true)]
          }), new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 4
            },
            name: names.blockName || "",
            value: [RelativeDistinguishedNames.schema(names.directoryName || {})]
          }), new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 5
            },
            name: names.blockName || "",
            value: [new asn1_39({
              optional: true,
              idBlock: {
                tagClass: 3,
                tagNumber: 0
              },
              value: [new asn1_8({
                value: [new asn1_22(), new asn1_23(), new asn1_25(), new asn1_28(), new asn1_26()]
              })]
            }), new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: 1
              },
              value: [new asn1_8({
                value: [new asn1_22(), new asn1_23(), new asn1_25(), new asn1_28(), new asn1_26()]
              })]
            })]
          }), new asn1_40({
            name: names.blockName || "",
            idBlock: {
              tagClass: 3,
              tagNumber: 6
            }
          }), new asn1_40({
            name: names.blockName || "",
            idBlock: {
              tagClass: 3,
              tagNumber: 7
            }
          }), new asn1_40({
            name: names.blockName || "",
            idBlock: {
              tagClass: 3,
              tagNumber: 8
            }
          })]
        });
      }
    }]);

    return GeneralName;
  }();

  var AccessDescription = function () {
    function AccessDescription() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AccessDescription);

      this.accessMethod = getParametersValue(parameters, "accessMethod", AccessDescription.defaultValues("accessMethod"));
      this.accessLocation = getParametersValue(parameters, "accessLocation", AccessDescription.defaultValues("accessLocation"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(AccessDescription, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["accessMethod", "accessLocation"]);
        var asn1 = asn1_2(schema, schema, AccessDescription.schema({
          names: {
            accessMethod: "accessMethod",
            accessLocation: {
              names: {
                blockName: "accessLocation"
              }
            }
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AccessDescription");
        this.accessMethod = asn1.result.accessMethod.valueBlock.toString();
        this.accessLocation = new GeneralName({
          schema: asn1.result.accessLocation
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [new asn1_29({
            value: this.accessMethod
          }), this.accessLocation.toSchema()]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          accessMethod: this.accessMethod,
          accessLocation: this.accessLocation.toJSON()
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "accessMethod":
            return "";

          case "accessLocation":
            return new GeneralName();

          default:
            throw new Error("Invalid member name for AccessDescription class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.accessMethod || ""
          }), GeneralName.schema(names.accessLocation || {})]
        });
      }
    }]);

    return AccessDescription;
  }();

  var AltName = function () {
    function AltName() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AltName);

      this.altNames = getParametersValue(parameters, "altNames", AltName.defaultValues("altNames"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(AltName, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["altNames"]);
        var asn1 = asn1_2(schema, schema, AltName.schema({
          names: {
            altNames: "altNames"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AltName");
        if ("altNames" in asn1.result) this.altNames = Array.from(asn1.result.altNames, function (element) {
          return new GeneralName({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.altNames, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          altNames: Array.from(this.altNames, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "altNames":
            return [];

          default:
            throw new Error("Invalid member name for AltName class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.altNames || "",
            value: GeneralName.schema()
          })]
        });
      }
    }]);

    return AltName;
  }();

  var Time = function () {
    function Time() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Time);

      this.type = getParametersValue(parameters, "type", Time.defaultValues("type"));
      this.value = getParametersValue(parameters, "value", Time.defaultValues("value"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(Time, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["utcTimeName", "generalTimeName"]);
        var asn1 = asn1_2(schema, schema, Time.schema({
          names: {
            utcTimeName: "utcTimeName",
            generalTimeName: "generalTimeName"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Time");

        if ("utcTimeName" in asn1.result) {
          this.type = 0;
          this.value = asn1.result.utcTimeName.toDate();
        }

        if ("generalTimeName" in asn1.result) {
          this.type = 1;
          this.value = asn1.result.generalTimeName.toDate();
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var result = {};
        if (this.type === 0) result = new asn1_15({
          valueDate: this.value
        });
        if (this.type === 1) result = new asn1_14({
          valueDate: this.value
        });
        return result;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: this.type,
          value: this.value
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "type":
            return 0;

          case "value":
            return new Date(0, 0, 0);

          default:
            throw new Error("Invalid member name for Time class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var names = getParametersValue(parameters, "names", {});
        return new asn1_8({
          optional: optional,
          value: [new asn1_15({
            name: names.utcTimeName || ""
          }), new asn1_14({
            name: names.generalTimeName || ""
          })]
        });
      }
    }]);

    return Time;
  }();

  var SubjectDirectoryAttributes = function () {
    function SubjectDirectoryAttributes() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SubjectDirectoryAttributes);

      this.attributes = getParametersValue(parameters, "attributes", SubjectDirectoryAttributes.defaultValues("attributes"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(SubjectDirectoryAttributes, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["attributes"]);
        var asn1 = asn1_2(schema, schema, SubjectDirectoryAttributes.schema({
          names: {
            attributes: "attributes"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for SubjectDirectoryAttributes");
        this.attributes = Array.from(asn1.result.attributes, function (element) {
          return new Attribute({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.attributes, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          attributes: Array.from(this.attributes, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "attributes":
            return [];

          default:
            throw new Error("Invalid member name for SubjectDirectoryAttributes class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.attributes || "",
            value: Attribute.schema()
          })]
        });
      }
    }]);

    return SubjectDirectoryAttributes;
  }();

  var PrivateKeyUsagePeriod = function () {
    function PrivateKeyUsagePeriod() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PrivateKeyUsagePeriod);

      if ("notBefore" in parameters) this.notBefore = getParametersValue(parameters, "notBefore", PrivateKeyUsagePeriod.defaultValues("notBefore"));
      if ("notAfter" in parameters) this.notAfter = getParametersValue(parameters, "notAfter", PrivateKeyUsagePeriod.defaultValues("notAfter"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PrivateKeyUsagePeriod, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["notBefore", "notAfter"]);
        var asn1 = asn1_2(schema, schema, PrivateKeyUsagePeriod.schema({
          names: {
            notBefore: "notBefore",
            notAfter: "notAfter"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PrivateKeyUsagePeriod");

        if ("notBefore" in asn1.result) {
          var localNotBefore = new asn1_14();
          localNotBefore.fromBuffer(asn1.result.notBefore.valueBlock.valueHex);
          this.notBefore = localNotBefore.toDate();
        }

        if ("notAfter" in asn1.result) {
          var localNotAfter = new asn1_14({
            valueHex: asn1.result.notAfter.valueBlock.valueHex
          });
          localNotAfter.fromBuffer(asn1.result.notAfter.valueBlock.valueHex);
          this.notAfter = localNotAfter.toDate();
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if ("notBefore" in this) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            valueHex: new asn1_14({
              valueDate: this.notBefore
            }).valueBlock.valueHex
          }));
        }

        if ("notAfter" in this) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            valueHex: new asn1_14({
              valueDate: this.notAfter
            }).valueBlock.valueHex
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};
        if ("notBefore" in this) object.notBefore = this.notBefore;
        if ("notAfter" in this) object.notAfter = this.notAfter;
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "notBefore":
            return new Date();

          case "notAfter":
            return new Date();

          default:
            throw new Error("Invalid member name for PrivateKeyUsagePeriod class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_40({
            name: names.notBefore || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            }
          }), new asn1_40({
            name: names.notAfter || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            }
          })]
        });
      }
    }]);

    return PrivateKeyUsagePeriod;
  }();

  var BasicConstraints = function () {
    function BasicConstraints() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BasicConstraints);

      this.cA = getParametersValue(parameters, "cA", false);
      if ("pathLenConstraint" in parameters) this.pathLenConstraint = getParametersValue(parameters, "pathLenConstraint", 0);
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(BasicConstraints, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["cA", "pathLenConstraint"]);
        var asn1 = asn1_2(schema, schema, BasicConstraints.schema({
          names: {
            cA: "cA",
            pathLenConstraint: "pathLenConstraint"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for BasicConstraints");
        if ("cA" in asn1.result) this.cA = asn1.result.cA.valueBlock.value;

        if ("pathLenConstraint" in asn1.result) {
          if (asn1.result.pathLenConstraint.valueBlock.isHexOnly) this.pathLenConstraint = asn1.result.pathLenConstraint;else this.pathLenConstraint = asn1.result.pathLenConstraint.valueBlock.valueDec;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        if (this.cA !== BasicConstraints.defaultValues("cA")) outputArray.push(new asn1_37({
          value: this.cA
        }));

        if ("pathLenConstraint" in this) {
          if (this.pathLenConstraint instanceof asn1_31) outputArray.push(this.pathLenConstraint);else outputArray.push(new asn1_31({
            value: this.pathLenConstraint
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};
        if (this.cA !== BasicConstraints.defaultValues("cA")) object.cA = this.cA;

        if ("pathLenConstraint" in this) {
          if (this.pathLenConstraint instanceof asn1_31) object.pathLenConstraint = this.pathLenConstraint.toJSON();else object.pathLenConstraint = this.pathLenConstraint;
        }

        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "cA":
            return false;

          default:
            throw new Error("Invalid member name for BasicConstraints class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_37({
            optional: true,
            name: names.cA || ""
          }), new asn1_31({
            optional: true,
            name: names.pathLenConstraint || ""
          })]
        });
      }
    }]);

    return BasicConstraints;
  }();

  var IssuingDistributionPoint = function () {
    function IssuingDistributionPoint() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, IssuingDistributionPoint);

      if ("distributionPoint" in parameters) this.distributionPoint = getParametersValue(parameters, "distributionPoint", IssuingDistributionPoint.defaultValues("distributionPoint"));
      this.onlyContainsUserCerts = getParametersValue(parameters, "onlyContainsUserCerts", IssuingDistributionPoint.defaultValues("onlyContainsUserCerts"));
      this.onlyContainsCACerts = getParametersValue(parameters, "onlyContainsCACerts", IssuingDistributionPoint.defaultValues("onlyContainsCACerts"));
      if ("onlySomeReasons" in parameters) this.onlySomeReasons = getParametersValue(parameters, "onlySomeReasons", IssuingDistributionPoint.defaultValues("onlySomeReasons"));
      this.indirectCRL = getParametersValue(parameters, "indirectCRL", IssuingDistributionPoint.defaultValues("indirectCRL"));
      this.onlyContainsAttributeCerts = getParametersValue(parameters, "onlyContainsAttributeCerts", IssuingDistributionPoint.defaultValues("onlyContainsAttributeCerts"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(IssuingDistributionPoint, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["distributionPoint", "distributionPointNames", "onlyContainsUserCerts", "onlyContainsCACerts", "onlySomeReasons", "indirectCRL", "onlyContainsAttributeCerts"]);
        var asn1 = asn1_2(schema, schema, IssuingDistributionPoint.schema({
          names: {
            distributionPoint: "distributionPoint",
            distributionPointNames: "distributionPointNames",
            onlyContainsUserCerts: "onlyContainsUserCerts",
            onlyContainsCACerts: "onlyContainsCACerts",
            onlySomeReasons: "onlySomeReasons",
            indirectCRL: "indirectCRL",
            onlyContainsAttributeCerts: "onlyContainsAttributeCerts"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for IssuingDistributionPoint");

        if ("distributionPoint" in asn1.result) {
          switch (true) {
            case asn1.result.distributionPoint.idBlock.tagNumber === 0:
              this.distributionPoint = Array.from(asn1.result.distributionPointNames, function (element) {
                return new GeneralName({
                  schema: element
                });
              });
              break;

            case asn1.result.distributionPoint.idBlock.tagNumber === 1:
              {
                this.distributionPoint = new RelativeDistinguishedNames({
                  schema: new asn1_36({
                    value: asn1.result.distributionPoint.valueBlock.value
                  })
                });
              }
              break;

            default:
              throw new Error("Unknown tagNumber for distributionPoint: {$asn1.result.distributionPoint.idBlock.tagNumber}");
          }
        }

        if ("onlyContainsUserCerts" in asn1.result) {
          var view = new Uint8Array(asn1.result.onlyContainsUserCerts.valueBlock.valueHex);
          this.onlyContainsUserCerts = view[0] !== 0x00;
        }

        if ("onlyContainsCACerts" in asn1.result) {
          var _view4 = new Uint8Array(asn1.result.onlyContainsCACerts.valueBlock.valueHex);

          this.onlyContainsCACerts = _view4[0] !== 0x00;
        }

        if ("onlySomeReasons" in asn1.result) {
          var _view5 = new Uint8Array(asn1.result.onlySomeReasons.valueBlock.valueHex);

          this.onlySomeReasons = _view5[0];
        }

        if ("indirectCRL" in asn1.result) {
          var _view6 = new Uint8Array(asn1.result.indirectCRL.valueBlock.valueHex);

          this.indirectCRL = _view6[0] !== 0x00;
        }

        if ("onlyContainsAttributeCerts" in asn1.result) {
          var _view7 = new Uint8Array(asn1.result.onlyContainsAttributeCerts.valueBlock.valueHex);

          this.onlyContainsAttributeCerts = _view7[0] !== 0x00;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if ("distributionPoint" in this) {
          var value;

          if (this.distributionPoint instanceof Array) {
            value = new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: 0
              },
              value: Array.from(this.distributionPoint, function (element) {
                return element.toSchema();
              })
            });
          } else {
            value = this.distributionPoint.toSchema();
            value.idBlock.tagClass = 3;
            value.idBlock.tagNumber = 1;
          }

          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [value]
          }));
        }

        if (this.onlyContainsUserCerts !== IssuingDistributionPoint.defaultValues("onlyContainsUserCerts")) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            valueHex: new Uint8Array([0xFF]).buffer
          }));
        }

        if (this.onlyContainsCACerts !== IssuingDistributionPoint.defaultValues("onlyContainsCACerts")) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            valueHex: new Uint8Array([0xFF]).buffer
          }));
        }

        if ("onlySomeReasons" in this) {
          var buffer = new ArrayBuffer(1);
          var view = new Uint8Array(buffer);
          view[0] = this.onlySomeReasons;
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 3
            },
            valueHex: buffer
          }));
        }

        if (this.indirectCRL !== IssuingDistributionPoint.defaultValues("indirectCRL")) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 4
            },
            valueHex: new Uint8Array([0xFF]).buffer
          }));
        }

        if (this.onlyContainsAttributeCerts !== IssuingDistributionPoint.defaultValues("onlyContainsAttributeCerts")) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 5
            },
            valueHex: new Uint8Array([0xFF]).buffer
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};

        if ("distributionPoint" in this) {
          if (this.distributionPoint instanceof Array) object.distributionPoint = Array.from(this.distributionPoint, function (element) {
            return element.toJSON();
          });else object.distributionPoint = this.distributionPoint.toJSON();
        }

        if (this.onlyContainsUserCerts !== IssuingDistributionPoint.defaultValues("onlyContainsUserCerts")) object.onlyContainsUserCerts = this.onlyContainsUserCerts;
        if (this.onlyContainsCACerts !== IssuingDistributionPoint.defaultValues("onlyContainsCACerts")) object.onlyContainsCACerts = this.onlyContainsCACerts;
        if ("onlySomeReasons" in this) object.onlySomeReasons = this.onlySomeReasons;
        if (this.indirectCRL !== IssuingDistributionPoint.defaultValues("indirectCRL")) object.indirectCRL = this.indirectCRL;
        if (this.onlyContainsAttributeCerts !== IssuingDistributionPoint.defaultValues("onlyContainsAttributeCerts")) object.onlyContainsAttributeCerts = this.onlyContainsAttributeCerts;
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "distributionPoint":
            return [];

          case "onlyContainsUserCerts":
            return false;

          case "onlyContainsCACerts":
            return false;

          case "onlySomeReasons":
            return 0;

          case "indirectCRL":
            return false;

          case "onlyContainsAttributeCerts":
            return false;

          default:
            throw new Error("Invalid member name for IssuingDistributionPoint class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_8({
              value: [new asn1_39({
                name: names.distributionPoint || "",
                idBlock: {
                  tagClass: 3,
                  tagNumber: 0
                },
                value: [new asn1_6({
                  name: names.distributionPointNames || "",
                  value: GeneralName.schema()
                })]
              }), new asn1_39({
                name: names.distributionPoint || "",
                idBlock: {
                  tagClass: 3,
                  tagNumber: 1
                },
                value: RelativeDistinguishedNames.schema().valueBlock.value
              })]
            })]
          }), new asn1_40({
            name: names.onlyContainsUserCerts || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            }
          }), new asn1_40({
            name: names.onlyContainsCACerts || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            }
          }), new asn1_40({
            name: names.onlySomeReasons || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 3
            }
          }), new asn1_40({
            name: names.indirectCRL || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 4
            }
          }), new asn1_40({
            name: names.onlyContainsAttributeCerts || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 5
            }
          })]
        });
      }
    }]);

    return IssuingDistributionPoint;
  }();

  var GeneralNames = function () {
    function GeneralNames() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GeneralNames);

      this.names = getParametersValue(parameters, "names", GeneralNames.defaultValues("names"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(GeneralNames, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["names", "generalNames"]);
        var asn1 = asn1_2(schema, schema, GeneralNames.schema({
          names: {
            blockName: "names",
            generalNames: "generalNames"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for GeneralNames");
        this.names = Array.from(asn1.result.generalNames, function (element) {
          return new GeneralName({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.names, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          names: Array.from(this.names, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "names":
            return [];

          default:
            throw new Error("Invalid member name for GeneralNames class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          optional: optional,
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.generalNames || "",
            value: GeneralName.schema()
          })]
        });
      }
    }]);

    return GeneralNames;
  }();

  var GeneralSubtree = function () {
    function GeneralSubtree() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GeneralSubtree);

      this.base = getParametersValue(parameters, "base", GeneralSubtree.defaultValues("base"));
      this.minimum = getParametersValue(parameters, "minimum", GeneralSubtree.defaultValues("minimum"));
      if ("maximum" in parameters) this.maximum = getParametersValue(parameters, "maximum", GeneralSubtree.defaultValues("maximum"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(GeneralSubtree, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["base", "minimum", "maximum"]);
        var asn1 = asn1_2(schema, schema, GeneralSubtree.schema({
          names: {
            base: {
              names: {
                blockName: "base"
              }
            },
            minimum: "minimum",
            maximum: "maximum"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for GeneralSubtree");
        this.base = new GeneralName({
          schema: asn1.result.base
        });

        if ("minimum" in asn1.result) {
          if (asn1.result.minimum.valueBlock.isHexOnly) this.minimum = asn1.result.minimum;else this.minimum = asn1.result.minimum.valueBlock.valueDec;
        }

        if ("maximum" in asn1.result) {
          if (asn1.result.maximum.valueBlock.isHexOnly) this.maximum = asn1.result.maximum;else this.maximum = asn1.result.maximum.valueBlock.valueDec;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(this.base.toSchema());

        if (this.minimum !== 0) {
          var valueMinimum = 0;
          if (this.minimum instanceof asn1_31) valueMinimum = this.minimum;else valueMinimum = new asn1_31({
            value: this.minimum
          });
          outputArray.push(new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [valueMinimum]
          }));
        }

        if ("maximum" in this) {
          var valueMaximum = 0;
          if (this.maximum instanceof asn1_31) valueMaximum = this.maximum;else valueMaximum = new asn1_31({
            value: this.maximum
          });
          outputArray.push(new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [valueMaximum]
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          base: this.base.toJSON()
        };

        if (this.minimum !== 0) {
          if (typeof this.minimum === "number") object.minimum = this.minimum;else object.minimum = this.minimum.toJSON();
        }

        if ("maximum" in this) {
          if (typeof this.maximum === "number") object.maximum = this.maximum;else object.maximum = this.maximum.toJSON();
        }

        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "base":
            return new GeneralName();

          case "minimum":
            return 0;

          case "maximum":
            return 0;

          default:
            throw new Error("Invalid member name for GeneralSubtree class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [GeneralName.schema(names.base || {}), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_31({
              name: names.minimum || ""
            })]
          }), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [new asn1_31({
              name: names.maximum || ""
            })]
          })]
        });
      }
    }]);

    return GeneralSubtree;
  }();

  var NameConstraints = function () {
    function NameConstraints() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NameConstraints);

      if ("permittedSubtrees" in parameters) this.permittedSubtrees = getParametersValue(parameters, "permittedSubtrees", NameConstraints.defaultValues("permittedSubtrees"));
      if ("excludedSubtrees" in parameters) this.excludedSubtrees = getParametersValue(parameters, "excludedSubtrees", NameConstraints.defaultValues("excludedSubtrees"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(NameConstraints, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["permittedSubtrees", "excludedSubtrees"]);
        var asn1 = asn1_2(schema, schema, NameConstraints.schema({
          names: {
            permittedSubtrees: "permittedSubtrees",
            excludedSubtrees: "excludedSubtrees"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for NameConstraints");
        if ("permittedSubtrees" in asn1.result) this.permittedSubtrees = Array.from(asn1.result.permittedSubtrees, function (element) {
          return new GeneralSubtree({
            schema: element
          });
        });
        if ("excludedSubtrees" in asn1.result) this.excludedSubtrees = Array.from(asn1.result.excludedSubtrees, function (element) {
          return new GeneralSubtree({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if ("permittedSubtrees" in this) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: Array.from(this.permittedSubtrees, function (element) {
              return element.toSchema();
            })
          }));
        }

        if ("excludedSubtrees" in this) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: Array.from(this.excludedSubtrees, function (element) {
              return element.toSchema();
            })
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};
        if ("permittedSubtrees" in this) object.permittedSubtrees = Array.from(this.permittedSubtrees, function (element) {
          return element.toJSON();
        });
        if ("excludedSubtrees" in this) object.excludedSubtrees = Array.from(this.excludedSubtrees, function (element) {
          return element.toJSON();
        });
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "permittedSubtrees":
            return [];

          case "excludedSubtrees":
            return [];

          default:
            throw new Error("Invalid member name for NameConstraints class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_6({
              name: names.permittedSubtrees || "",
              value: GeneralSubtree.schema()
            })]
          }), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [new asn1_6({
              name: names.excludedSubtrees || "",
              value: GeneralSubtree.schema()
            })]
          })]
        });
      }
    }]);

    return NameConstraints;
  }();

  var DistributionPoint = function () {
    function DistributionPoint() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DistributionPoint);

      if ("distributionPoint" in parameters) this.distributionPoint = getParametersValue(parameters, "distributionPoint", DistributionPoint.defaultValues("distributionPoint"));
      if ("reasons" in parameters) this.reasons = getParametersValue(parameters, "reasons", DistributionPoint.defaultValues("reasons"));
      if ("cRLIssuer" in parameters) this.cRLIssuer = getParametersValue(parameters, "cRLIssuer", DistributionPoint.defaultValues("cRLIssuer"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(DistributionPoint, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["distributionPoint", "distributionPointNames", "reasons", "cRLIssuer", "cRLIssuerNames"]);
        var asn1 = asn1_2(schema, schema, DistributionPoint.schema({
          names: {
            distributionPoint: "distributionPoint",
            distributionPointNames: "distributionPointNames",
            reasons: "reasons",
            cRLIssuer: "cRLIssuer",
            cRLIssuerNames: "cRLIssuerNames"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for DistributionPoint");

        if ("distributionPoint" in asn1.result) {
          if (asn1.result.distributionPoint.idBlock.tagNumber === 0) this.distributionPoint = Array.from(asn1.result.distributionPointNames, function (element) {
              return new GeneralName({
                schema: element
              });
            });

          if (asn1.result.distributionPoint.idBlock.tagNumber === 1) {
              this.distributionPoint = new RelativeDistinguishedNames({
                schema: new asn1_36({
                  value: asn1.result.distributionPoint.valueBlock.value
                })
              });
            }
        }

        if ("reasons" in asn1.result) this.reasons = new asn1_32({
          valueHex: asn1.result.reasons.valueBlock.valueHex
        });
        if ("cRLIssuer" in asn1.result) this.cRLIssuer = Array.from(asn1.result.cRLIssuerNames, function (element) {
          return new GeneralName({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if ("distributionPoint" in this) {
          var internalValue;

          if (this.distributionPoint instanceof Array) {
            internalValue = new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: 0
              },
              value: Array.from(this.distributionPoint, function (element) {
                return element.toSchema();
              })
            });
          } else {
            internalValue = new asn1_39({
              idBlock: {
                tagClass: 3,
                tagNumber: 1
              },
              value: [this.distributionPoint.toSchema()]
            });
          }

          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [internalValue]
          }));
        }

        if ("reasons" in this) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            valueHex: this.reasons.valueBlock.valueHex
          }));
        }

        if ("cRLIssuer" in this) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            value: Array.from(this.cRLIssuer, function (element) {
              return element.toSchema();
            })
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};

        if ("distributionPoint" in this) {
          if (this.distributionPoint instanceof Array) object.distributionPoint = Array.from(this.distributionPoint, function (element) {
            return element.toJSON();
          });else object.distributionPoint = this.distributionPoint.toJSON();
        }

        if ("reasons" in this) object.reasons = this.reasons.toJSON();
        if ("cRLIssuer" in this) object.cRLIssuer = Array.from(this.cRLIssuer, function (element) {
          return element.toJSON();
        });
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "distributionPoint":
            return [];

          case "reasons":
            return new asn1_32();

          case "cRLIssuer":
            return [];

          default:
            throw new Error("Invalid member name for DistributionPoint class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_8({
              value: [new asn1_39({
                name: names.distributionPoint || "",
                optional: true,
                idBlock: {
                  tagClass: 3,
                  tagNumber: 0
                },
                value: [new asn1_6({
                  name: names.distributionPointNames || "",
                  value: GeneralName.schema()
                })]
              }), new asn1_39({
                name: names.distributionPoint || "",
                optional: true,
                idBlock: {
                  tagClass: 3,
                  tagNumber: 1
                },
                value: RelativeDistinguishedNames.schema().valueBlock.value
              })]
            })]
          }), new asn1_40({
            name: names.reasons || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            }
          }), new asn1_39({
            name: names.cRLIssuer || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            value: [new asn1_6({
              name: names.cRLIssuerNames || "",
              value: GeneralName.schema()
            })]
          })]
        });
      }
    }]);

    return DistributionPoint;
  }();

  var CRLDistributionPoints = function () {
    function CRLDistributionPoints() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CRLDistributionPoints);

      this.distributionPoints = getParametersValue(parameters, "distributionPoints", CRLDistributionPoints.defaultValues("distributionPoints"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(CRLDistributionPoints, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["distributionPoints"]);
        var asn1 = asn1_2(schema, schema, CRLDistributionPoints.schema({
          names: {
            distributionPoints: "distributionPoints"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CRLDistributionPoints");
        this.distributionPoints = Array.from(asn1.result.distributionPoints, function (element) {
          return new DistributionPoint({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.distributionPoints, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          distributionPoints: Array.from(this.distributionPoints, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "distributionPoints":
            return [];

          default:
            throw new Error("Invalid member name for CRLDistributionPoints class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.distributionPoints || "",
            value: DistributionPoint.schema()
          })]
        });
      }
    }]);

    return CRLDistributionPoints;
  }();

  var PolicyQualifierInfo = function () {
    function PolicyQualifierInfo() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PolicyQualifierInfo);

      this.policyQualifierId = getParametersValue(parameters, "policyQualifierId", PolicyQualifierInfo.defaultValues("policyQualifierId"));
      this.qualifier = getParametersValue(parameters, "qualifier", PolicyQualifierInfo.defaultValues("qualifier"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PolicyQualifierInfo, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["policyQualifierId", "qualifier"]);
        var asn1 = asn1_2(schema, schema, PolicyQualifierInfo.schema({
          names: {
            policyQualifierId: "policyQualifierId",
            qualifier: "qualifier"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyQualifierInfo");
        this.policyQualifierId = asn1.result.policyQualifierId.valueBlock.toString();
        this.qualifier = asn1.result.qualifier;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [new asn1_29({
            value: this.policyQualifierId
          }), this.qualifier]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          policyQualifierId: this.policyQualifierId,
          qualifier: this.qualifier.toJSON()
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "policyQualifierId":
            return "";

          case "qualifier":
            return new asn1_7();

          default:
            throw new Error("Invalid member name for PolicyQualifierInfo class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.policyQualifierId || ""
          }), new asn1_7({
            name: names.qualifier || ""
          })]
        });
      }
    }]);

    return PolicyQualifierInfo;
  }();

  var PolicyInformation = function () {
    function PolicyInformation() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PolicyInformation);

      this.policyIdentifier = getParametersValue(parameters, "policyIdentifier", PolicyInformation.defaultValues("policyIdentifier"));
      if ("policyQualifiers" in parameters) this.policyQualifiers = getParametersValue(parameters, "policyQualifiers", PolicyInformation.defaultValues("policyQualifiers"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PolicyInformation, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["policyIdentifier", "policyQualifiers"]);
        var asn1 = asn1_2(schema, schema, PolicyInformation.schema({
          names: {
            policyIdentifier: "policyIdentifier",
            policyQualifiers: "policyQualifiers"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyInformation");
        this.policyIdentifier = asn1.result.policyIdentifier.valueBlock.toString();
        if ("policyQualifiers" in asn1.result) this.policyQualifiers = Array.from(asn1.result.policyQualifiers, function (element) {
          return new PolicyQualifierInfo({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(new asn1_29({
          value: this.policyIdentifier
        }));

        if ("policyQualifiers" in this) {
          outputArray.push(new asn1_36({
            value: Array.from(this.policyQualifiers, function (element) {
              return element.toSchema();
            })
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          policyIdentifier: this.policyIdentifier
        };
        if ("policyQualifiers" in this) object.policyQualifiers = Array.from(this.policyQualifiers, function (element) {
          return element.toJSON();
        });
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "policyIdentifier":
            return "";

          case "policyQualifiers":
            return [];

          default:
            throw new Error("Invalid member name for PolicyInformation class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.policyIdentifier || ""
          }), new asn1_36({
            optional: true,
            value: [new asn1_6({
              name: names.policyQualifiers || "",
              value: PolicyQualifierInfo.schema()
            })]
          })]
        });
      }
    }]);

    return PolicyInformation;
  }();

  var CertificatePolicies = function () {
    function CertificatePolicies() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CertificatePolicies);

      this.certificatePolicies = getParametersValue(parameters, "certificatePolicies", CertificatePolicies.defaultValues("certificatePolicies"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(CertificatePolicies, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["certificatePolicies"]);
        var asn1 = asn1_2(schema, schema, CertificatePolicies.schema({
          names: {
            certificatePolicies: "certificatePolicies"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CertificatePolicies");
        this.certificatePolicies = Array.from(asn1.result.certificatePolicies, function (element) {
          return new PolicyInformation({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.certificatePolicies, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          certificatePolicies: Array.from(this.certificatePolicies, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "certificatePolicies":
            return [];

          default:
            throw new Error("Invalid member name for CertificatePolicies class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.certificatePolicies || "",
            value: PolicyInformation.schema()
          })]
        });
      }
    }]);

    return CertificatePolicies;
  }();

  var PolicyMapping = function () {
    function PolicyMapping() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PolicyMapping);

      this.issuerDomainPolicy = getParametersValue(parameters, "issuerDomainPolicy", PolicyMapping.defaultValues("issuerDomainPolicy"));
      this.subjectDomainPolicy = getParametersValue(parameters, "subjectDomainPolicy", PolicyMapping.defaultValues("subjectDomainPolicy"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PolicyMapping, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["issuerDomainPolicy", "subjectDomainPolicy"]);
        var asn1 = asn1_2(schema, schema, PolicyMapping.schema({
          names: {
            issuerDomainPolicy: "issuerDomainPolicy",
            subjectDomainPolicy: "subjectDomainPolicy"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyMapping");
        this.issuerDomainPolicy = asn1.result.issuerDomainPolicy.valueBlock.toString();
        this.subjectDomainPolicy = asn1.result.subjectDomainPolicy.valueBlock.toString();
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: [new asn1_29({
            value: this.issuerDomainPolicy
          }), new asn1_29({
            value: this.subjectDomainPolicy
          })]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          issuerDomainPolicy: this.issuerDomainPolicy,
          subjectDomainPolicy: this.subjectDomainPolicy
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "issuerDomainPolicy":
            return "";

          case "subjectDomainPolicy":
            return "";

          default:
            throw new Error("Invalid member name for PolicyMapping class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.issuerDomainPolicy || ""
          }), new asn1_29({
            name: names.subjectDomainPolicy || ""
          })]
        });
      }
    }]);

    return PolicyMapping;
  }();

  var PolicyMappings = function () {
    function PolicyMappings() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PolicyMappings);

      this.mappings = getParametersValue(parameters, "mappings", PolicyMappings.defaultValues("mappings"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PolicyMappings, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["mappings"]);
        var asn1 = asn1_2(schema, schema, PolicyMappings.schema({
          names: {
            mappings: "mappings"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyMappings");
        this.mappings = Array.from(asn1.result.mappings, function (element) {
          return new PolicyMapping({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.mappings, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          mappings: Array.from(this.mappings, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "mappings":
            return [];

          default:
            throw new Error("Invalid member name for PolicyMappings class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.mappings || "",
            value: PolicyMapping.schema()
          })]
        });
      }
    }]);

    return PolicyMappings;
  }();

  var AuthorityKeyIdentifier = function () {
    function AuthorityKeyIdentifier() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AuthorityKeyIdentifier);

      if ("keyIdentifier" in parameters) this.keyIdentifier = getParametersValue(parameters, "keyIdentifier", AuthorityKeyIdentifier.defaultValues("keyIdentifier"));
      if ("authorityCertIssuer" in parameters) this.authorityCertIssuer = getParametersValue(parameters, "authorityCertIssuer", AuthorityKeyIdentifier.defaultValues("authorityCertIssuer"));
      if ("authorityCertSerialNumber" in parameters) this.authorityCertSerialNumber = getParametersValue(parameters, "authorityCertSerialNumber", AuthorityKeyIdentifier.defaultValues("authorityCertSerialNumber"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(AuthorityKeyIdentifier, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["keyIdentifier", "authorityCertIssuer", "authorityCertSerialNumber"]);
        var asn1 = asn1_2(schema, schema, AuthorityKeyIdentifier.schema({
          names: {
            keyIdentifier: "keyIdentifier",
            authorityCertIssuer: "authorityCertIssuer",
            authorityCertSerialNumber: "authorityCertSerialNumber"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for AuthorityKeyIdentifier");
        if ("keyIdentifier" in asn1.result) this.keyIdentifier = new asn1_33({
          valueHex: asn1.result.keyIdentifier.valueBlock.valueHex
        });
        if ("authorityCertIssuer" in asn1.result) this.authorityCertIssuer = Array.from(asn1.result.authorityCertIssuer, function (element) {
          return new GeneralName({
            schema: element
          });
        });
        if ("authorityCertSerialNumber" in asn1.result) this.authorityCertSerialNumber = new asn1_31({
          valueHex: asn1.result.authorityCertSerialNumber.valueBlock.valueHex
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if ("keyIdentifier" in this) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            valueHex: this.keyIdentifier.valueBlock.valueHex
          }));
        }

        if ("authorityCertIssuer" in this) {
          outputArray.push(new asn1_39({
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: Array.from(this.authorityCertIssuer, function (element) {
              return element.toSchema();
            })
          }));
        }

        if ("authorityCertSerialNumber" in this) {
          outputArray.push(new asn1_40({
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            valueHex: this.authorityCertSerialNumber.valueBlock.valueHex
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};
        if ("keyIdentifier" in this) object.keyIdentifier = this.keyIdentifier.toJSON();
        if ("authorityCertIssuer" in this) object.authorityCertIssuer = Array.from(this.authorityCertIssuer, function (element) {
          return element.toJSON();
        });
        if ("authorityCertSerialNumber" in this) object.authorityCertSerialNumber = this.authorityCertSerialNumber.toJSON();
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "keyIdentifier":
            return new asn1_33();

          case "authorityCertIssuer":
            return [];

          case "authorityCertSerialNumber":
            return new asn1_31();

          default:
            throw new Error("Invalid member name for AuthorityKeyIdentifier class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_40({
            name: names.keyIdentifier || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            }
          }), new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            value: [new asn1_6({
              name: names.authorityCertIssuer || "",
              value: GeneralName.schema()
            })]
          }), new asn1_40({
            name: names.authorityCertSerialNumber || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            }
          })]
        });
      }
    }]);

    return AuthorityKeyIdentifier;
  }();

  var PolicyConstraints = function () {
    function PolicyConstraints() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PolicyConstraints);

      if ("requireExplicitPolicy" in parameters) this.requireExplicitPolicy = getParametersValue(parameters, "requireExplicitPolicy", PolicyConstraints.defaultValues("requireExplicitPolicy"));
      if ("inhibitPolicyMapping" in parameters) this.inhibitPolicyMapping = getParametersValue(parameters, "inhibitPolicyMapping", PolicyConstraints.defaultValues("inhibitPolicyMapping"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(PolicyConstraints, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["requireExplicitPolicy", "inhibitPolicyMapping"]);
        var asn1 = asn1_2(schema, schema, PolicyConstraints.schema({
          names: {
            requireExplicitPolicy: "requireExplicitPolicy",
            inhibitPolicyMapping: "inhibitPolicyMapping"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for PolicyConstraints");

        if ("requireExplicitPolicy" in asn1.result) {
          var field1 = asn1.result.requireExplicitPolicy;
          field1.idBlock.tagClass = 1;
          field1.idBlock.tagNumber = 2;
          var ber1 = field1.toBER(false);
          var int1 = asn1_1(ber1);
          this.requireExplicitPolicy = int1.result.valueBlock.valueDec;
        }

        if ("inhibitPolicyMapping" in asn1.result) {
          var field2 = asn1.result.inhibitPolicyMapping;
          field2.idBlock.tagClass = 1;
          field2.idBlock.tagNumber = 2;
          var ber2 = field2.toBER(false);
          var int2 = asn1_1(ber2);
          this.inhibitPolicyMapping = int2.result.valueBlock.valueDec;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];

        if ("requireExplicitPolicy" in this) {
          var int1 = new asn1_31({
            value: this.requireExplicitPolicy
          });
          int1.idBlock.tagClass = 3;
          int1.idBlock.tagNumber = 0;
          outputArray.push(int1);
        }

        if ("inhibitPolicyMapping" in this) {
          var int2 = new asn1_31({
            value: this.inhibitPolicyMapping
          });
          int2.idBlock.tagClass = 3;
          int2.idBlock.tagNumber = 1;
          outputArray.push(int2);
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {};
        if ("requireExplicitPolicy" in this) object.requireExplicitPolicy = this.requireExplicitPolicy;
        if ("inhibitPolicyMapping" in this) object.inhibitPolicyMapping = this.inhibitPolicyMapping;
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "requireExplicitPolicy":
            return 0;

          case "inhibitPolicyMapping":
            return 0;

          default:
            throw new Error("Invalid member name for PolicyConstraints class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_40({
            name: names.requireExplicitPolicy || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            }
          }), new asn1_40({
            name: names.inhibitPolicyMapping || "",
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            }
          })]
        });
      }
    }]);

    return PolicyConstraints;
  }();

  var ExtKeyUsage = function () {
    function ExtKeyUsage() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ExtKeyUsage);

      this.keyPurposes = getParametersValue(parameters, "keyPurposes", ExtKeyUsage.defaultValues("keyPurposes"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(ExtKeyUsage, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["keyPurposes"]);
        var asn1 = asn1_2(schema, schema, ExtKeyUsage.schema({
          names: {
            keyPurposes: "keyPurposes"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for ExtKeyUsage");
        this.keyPurposes = Array.from(asn1.result.keyPurposes, function (element) {
          return element.valueBlock.toString();
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.keyPurposes, function (element) {
            return new asn1_29({
              value: element
            });
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          keyPurposes: Array.from(this.keyPurposes)
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "keyPurposes":
            return [];

          default:
            throw new Error("Invalid member name for ExtKeyUsage class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.keyPurposes || "",
            value: new asn1_29()
          })]
        });
      }
    }]);

    return ExtKeyUsage;
  }();

  var InfoAccess = function () {
    function InfoAccess() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, InfoAccess);

      this.accessDescriptions = getParametersValue(parameters, "accessDescriptions", InfoAccess.defaultValues("accessDescriptions"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(InfoAccess, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["accessDescriptions"]);
        var asn1 = asn1_2(schema, schema, InfoAccess.schema({
          names: {
            accessDescriptions: "accessDescriptions"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for InfoAccess");
        this.accessDescriptions = Array.from(asn1.result.accessDescriptions, function (element) {
          return new AccessDescription({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.accessDescriptions, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          accessDescriptions: Array.from(this.accessDescriptions, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "accessDescriptions":
            return [];

          default:
            throw new Error("Invalid member name for InfoAccess class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.accessDescriptions || "",
            value: AccessDescription.schema()
          })]
        });
      }
    }]);

    return InfoAccess;
  }();

  var ByteStream = function () {
    function ByteStream() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ByteStream);

      this.clear();

      for (var _i31 = 0, _Object$keys9 = Object.keys(parameters); _i31 < _Object$keys9.length; _i31++) {
        var key = _Object$keys9[_i31];

        switch (key) {
          case "length":
            this.length = parameters.length;
            break;

          case "stub":
            for (var i = 0; i < this._view.length; i++) {
              this._view[i] = parameters.stub;
            }

            break;

          case "view":
            this.fromUint8Array(parameters.view);
            break;

          case "buffer":
            this.fromArrayBuffer(parameters.buffer);
            break;

          case "string":
            this.fromString(parameters.string);
            break;

          case "hexstring":
            this.fromHexString(parameters.hexstring);
            break;
        }
      }
    }

    _createClass(ByteStream, [{
      key: "clear",
      value: function clear() {
        this._buffer = new ArrayBuffer(0);
        this._view = new Uint8Array(this._buffer);
      }
    }, {
      key: "fromArrayBuffer",
      value: function fromArrayBuffer(array) {
        this.buffer = array;
      }
    }, {
      key: "fromUint8Array",
      value: function fromUint8Array(array) {
        this._buffer = new ArrayBuffer(array.length);
        this._view = new Uint8Array(this._buffer);

        this._view.set(array);
      }
    }, {
      key: "fromString",
      value: function fromString(string) {
        var stringLength = string.length;
        this.length = stringLength;

        for (var i = 0; i < stringLength; i++) {
          this.view[i] = string.charCodeAt(i);
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.view.length - start;
        var result = "";

        if (start >= this.view.length || start < 0) {
          start = 0;
        }

        if (length >= this.view.length || length < 0) {
          length = this.view.length - start;
        }

        for (var i = start; i < start + length; i++) {
          result += String.fromCharCode(this.view[i]);
        }

        return result;
      }
    }, {
      key: "fromHexString",
      value: function fromHexString(hexString) {
        var stringLength = hexString.length;
        this.buffer = new ArrayBuffer(stringLength >> 1);
        this.view = new Uint8Array(this.buffer);
        var hexMap = new Map();
        hexMap.set("0", 0x00);
        hexMap.set("1", 0x01);
        hexMap.set("2", 0x02);
        hexMap.set("3", 0x03);
        hexMap.set("4", 0x04);
        hexMap.set("5", 0x05);
        hexMap.set("6", 0x06);
        hexMap.set("7", 0x07);
        hexMap.set("8", 0x08);
        hexMap.set("9", 0x09);
        hexMap.set("A", 0x0A);
        hexMap.set("a", 0x0A);
        hexMap.set("B", 0x0B);
        hexMap.set("b", 0x0B);
        hexMap.set("C", 0x0C);
        hexMap.set("c", 0x0C);
        hexMap.set("D", 0x0D);
        hexMap.set("d", 0x0D);
        hexMap.set("E", 0x0E);
        hexMap.set("e", 0x0E);
        hexMap.set("F", 0x0F);
        hexMap.set("f", 0x0F);
        var j = 0;
        var temp = 0x00;

        for (var i = 0; i < stringLength; i++) {
          if (!(i % 2)) {
            temp = hexMap.get(hexString.charAt(i)) << 4;
          } else {
            temp |= hexMap.get(hexString.charAt(i));
            this.view[j] = temp;
            j++;
          }
        }
      }
    }, {
      key: "toHexString",
      value: function toHexString() {
        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.view.length - start;
        var result = "";

        if (start >= this.view.length || start < 0) {
          start = 0;
        }

        if (length >= this.view.length || length < 0) {
          length = this.view.length - start;
        }

        for (var i = start; i < start + length; i++) {
          var str = this.view[i].toString(16).toUpperCase();
          result = result + (str.length == 1 ? "0" : "") + str;
        }

        return result;
      }
    }, {
      key: "copy",
      value: function copy() {
        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._buffer.byteLength - start;
        if (start === 0 && this._buffer.byteLength === 0) return new ByteStream();
        if (start < 0 || start > this._buffer.byteLength - 1) throw new Error("Wrong start position: ".concat(start));
        var stream = new ByteStream();
        stream._buffer = this._buffer.slice(start, start + length);
        stream._view = new Uint8Array(stream._buffer);
        return stream;
      }
    }, {
      key: "slice",
      value: function slice() {
        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._buffer.byteLength;
        if (start === 0 && this._buffer.byteLength === 0) return new ByteStream();
        if (start < 0 || start > this._buffer.byteLength - 1) throw new Error("Wrong start position: ".concat(start));
        var stream = new ByteStream();
        stream._buffer = this._buffer.slice(start, end);
        stream._view = new Uint8Array(stream._buffer);
        return stream;
      }
    }, {
      key: "realloc",
      value: function realloc(size) {
        var buffer = new ArrayBuffer(size);
        var view = new Uint8Array(buffer);
        if (size > this._view.length) view.set(this._view);else {
          view.set(new Uint8Array(this._buffer, 0, size));
        }
        this._buffer = buffer.slice(0);
        this._view = new Uint8Array(this._buffer);
      }
    }, {
      key: "append",
      value: function append(stream) {
        var initialSize = this._buffer.byteLength;
        var streamViewLength = stream._buffer.byteLength;

        var copyView = stream._view.slice();

        this.realloc(initialSize + streamViewLength);

        this._view.set(copyView, initialSize);
      }
    }, {
      key: "insert",
      value: function insert(stream) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._buffer.byteLength - start;
        if (start > this._buffer.byteLength - 1) return false;

        if (length > this._buffer.byteLength - start) {
          length = this._buffer.byteLength - start;
        }

        if (length > stream._buffer.byteLength) {
          length = stream._buffer.byteLength;
        }

        if (length == stream._buffer.byteLength) this._view.set(stream._view, start);else {
          this._view.set(stream._view.slice(0, length), start);
        }
        return true;
      }
    }, {
      key: "isEqual",
      value: function isEqual(stream) {
        if (this._buffer.byteLength != stream._buffer.byteLength) return false;

        for (var i = 0; i < stream._buffer.byteLength; i++) {
          if (this.view[i] != stream.view[i]) return false;
        }

        return true;
      }
    }, {
      key: "isEqualView",
      value: function isEqualView(view) {
        if (view.length != this.view.length) return false;

        for (var i = 0; i < view.length; i++) {
          if (this.view[i] != view[i]) return false;
        }

        return true;
      }
    }, {
      key: "findPattern",
      value: function findPattern(pattern) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var backward = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (start == null) {
          start = backward ? this.buffer.byteLength : 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (backward) {
          if (length == null) {
            length = start;
          }

          if (length > start) {
            length = start;
          }
        } else {
          if (length == null) {
            length = this.buffer.byteLength - start;
          }

          if (length > this.buffer.byteLength - start) {
            length = this.buffer.byteLength - start;
          }
        }

        var patternLength = pattern.buffer.byteLength;
        if (patternLength > length) return -1;
        var patternArray = [];

        for (var i = 0; i < patternLength; i++) {
          patternArray.push(pattern.view[i]);
        }

        for (var _i32 = 0; _i32 <= length - patternLength; _i32++) {
          var equal = true;
          var equalStart = backward ? start - patternLength - _i32 : start + _i32;

          for (var j = 0; j < patternLength; j++) {
            if (this.view[j + equalStart] != patternArray[j]) {
              equal = false;
              break;
            }
          }

          if (equal) {
            return backward ? start - patternLength - _i32 : start + patternLength + _i32;
          }
        }

        return -1;
      }
    }, {
      key: "findFirstIn",
      value: function findFirstIn(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var backward = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (start == null) {
          start = backward ? this.buffer.byteLength : 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (backward) {
          if (length == null) {
            length = start;
          }

          if (length > start) {
            length = start;
          }
        } else {
          if (length == null) {
            length = this.buffer.byteLength - start;
          }

          if (length > this.buffer.byteLength - start) {
            length = this.buffer.byteLength - start;
          }
        }

        var result = {
          id: -1,
          position: backward ? 0 : start + length,
          length: 0
        };

        for (var i = 0; i < patterns.length; i++) {
          var position = this.findPattern(patterns[i], start, length, backward);

          if (position != -1) {
            var valid = false;
            var patternLength = patterns[i].length;

            if (backward) {
              if (position - patternLength >= result.position - result.length) valid = true;
            } else {
              if (position - patternLength <= result.position - result.length) valid = true;
            }

            if (valid) {
              result.position = position;
              result.id = i;
              result.length = patternLength;
            }
          }
        }

        return result;
      }
    }, {
      key: "findAllIn",
      value: function findAllIn(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.buffer.byteLength - start;
        var result = [];

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength - 1) return result;

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        var patternFound = {
          id: -1,
          position: start
        };

        do {
          var position = patternFound.position;
          patternFound = this.findFirstIn(patterns, patternFound.position, length);

          if (patternFound.id == -1) {
            break;
          }

          length -= patternFound.position - position;
          result.push({
            id: patternFound.id,
            position: patternFound.position
          });
        } while (true);

        return result;
      }
    }, {
      key: "findAllPatternIn",
      value: function findAllPatternIn(pattern) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.buffer.byteLength - start;

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        var result = [];
        var patternLength = pattern.buffer.byteLength;
        if (patternLength > length) return -1;
        var patternArray = Array.from(pattern.view);

        for (var i = 0; i <= length - patternLength; i++) {
          var equal = true;
          var equalStart = start + i;

          for (var j = 0; j < patternLength; j++) {
            if (this.view[j + equalStart] != patternArray[j]) {
              equal = false;
              break;
            }
          }

          if (equal) {
            result.push(start + patternLength + i);
            i += patternLength - 1;
          }
        }

        return result;
      }
    }, {
      key: "findFirstNotIn",
      value: function findFirstNotIn(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var backward = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (start == null) {
          start = backward ? this.buffer.byteLength : 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (backward) {
          if (length == null) {
            length = start;
          }

          if (length > start) {
            length = start;
          }
        } else {
          if (length == null) {
            length = this.buffer.byteLength - start;
          }

          if (length > this.buffer.byteLength - start) {
            length = this.buffer.byteLength - start;
          }
        }

        var result = {
          left: {
            id: -1,
            position: start
          },
          right: {
            id: -1,
            position: 0
          },
          value: new ByteStream()
        };
        var currentLength = length;

        while (currentLength > 0) {
          result.right = this.findFirstIn(patterns, backward ? start - length + currentLength : start + length - currentLength, currentLength, backward);

          if (result.right.id == -1) {
            length = currentLength;

            if (backward) {
              start -= length;
            } else {
              start = result.left.position;
            }

            result.value = new ByteStream();
            result.value._buffer = this._buffer.slice(start, start + length);
            result.value._view = new Uint8Array(result.value._buffer);
            break;
          }

          if (result.right.position != (backward ? result.left.position - patterns[result.right.id].buffer.byteLength : result.left.position + patterns[result.right.id].buffer.byteLength)) {
            if (backward) {
              start = result.right.position + patterns[result.right.id].buffer.byteLength;
              length = result.left.position - result.right.position - patterns[result.right.id].buffer.byteLength;
            } else {
              start = result.left.position;
              length = result.right.position - result.left.position - patterns[result.right.id].buffer.byteLength;
            }

            result.value = new ByteStream();
            result.value._buffer = this._buffer.slice(start, start + length);
            result.value._view = new Uint8Array(result.value._buffer);
            break;
          }

          result.left = result.right;
          currentLength -= patterns[result.right.id]._buffer.byteLength;
        }

        if (backward) {
          var temp = result.right;
          result.right = result.left;
          result.left = temp;
        }

        return result;
      }
    }, {
      key: "findAllNotIn",
      value: function findAllNotIn(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var result = [];

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength - 1) return result;

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        var patternFound = {
          left: {
            id: -1,
            position: start
          },
          right: {
            id: -1,
            position: start
          },
          value: new ByteStream()
        };

        do {
          var position = patternFound.right.position;
          patternFound = this.findFirstNotIn(patterns, patternFound.right.position, length);
          length -= patternFound.right.position - position;
          result.push({
            left: {
              id: patternFound.left.id,
              position: patternFound.left.position
            },
            right: {
              id: patternFound.right.id,
              position: patternFound.right.position
            },
            value: patternFound.value
          });
        } while (patternFound.right.id != -1);

        return result;
      }
    }, {
      key: "findFirstSequence",
      value: function findFirstSequence(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var backward = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (start == null) {
          start = backward ? this.buffer.byteLength : 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (backward) {
          if (length == null) {
            length = start;
          }

          if (length > start) {
            length = start;
          }
        } else {
          if (length == null) {
            length = this.buffer.byteLength - start;
          }

          if (length > this.buffer.byteLength - start) {
            length = this.buffer.byteLength - start;
          }
        }

        var firstIn = this.skipNotPatterns(patterns, start, length, backward);

        if (firstIn == -1) {
          return {
            position: -1,
            value: new ByteStream()
          };
        }

        var firstNotIn = this.skipPatterns(patterns, firstIn, length - (backward ? start - firstIn : firstIn - start), backward);

        if (backward) {
          start = firstNotIn;
          length = firstIn - firstNotIn;
        } else {
          start = firstIn;
          length = firstNotIn - firstIn;
        }

        var value = new ByteStream();
        value._buffer = this._buffer.slice(start, start + length);
        value._view = new Uint8Array(value._buffer);
        return {
          position: firstNotIn,
          value: value
        };
      }
    }, {
      key: "findAllSequences",
      value: function findAllSequences(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var result = [];

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength - 1) return result;

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        var patternFound = {
          position: start,
          value: new ByteStream()
        };

        do {
          var position = patternFound.position;
          patternFound = this.findFirstSequence(patterns, patternFound.position, length);

          if (patternFound.position != -1) {
            length -= patternFound.position - position;
            result.push({
              position: patternFound.position,
              value: patternFound.value
            });
          }
        } while (patternFound.position != -1);

        return result;
      }
    }, {
      key: "findPairedPatterns",
      value: function findPairedPatterns(leftPattern, rightPattern) {
        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var result = [];
        if (leftPattern.isEqual(rightPattern)) return result;

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength - 1) return result;

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        var currentPositionLeft = 0;
        var leftPatterns = this.findAllPatternIn(leftPattern, start, length);
        if (leftPatterns.length == 0) return result;
        var rightPatterns = this.findAllPatternIn(rightPattern, start, length);
        if (rightPatterns.length == 0) return result;

        while (currentPositionLeft < leftPatterns.length) {
          if (rightPatterns.length == 0) {
            break;
          }

          if (leftPatterns[0] == rightPatterns[0]) {
            result.push({
              left: leftPatterns[0],
              right: rightPatterns[0]
            });
            leftPatterns.splice(0, 1);
            rightPatterns.splice(0, 1);
            continue;
          }

          if (leftPatterns[currentPositionLeft] > rightPatterns[0]) {
            break;
          }

          while (leftPatterns[currentPositionLeft] < rightPatterns[0]) {
            currentPositionLeft++;

            if (currentPositionLeft >= leftPatterns.length) {
              break;
            }
          }

          result.push({
            left: leftPatterns[currentPositionLeft - 1],
            right: rightPatterns[0]
          });
          leftPatterns.splice(currentPositionLeft - 1, 1);
          rightPatterns.splice(0, 1);
          currentPositionLeft = 0;
        }

        result.sort(function (a, b) {
          return a.left - b.left;
        });
        return result;
      }
    }, {
      key: "findPairedArrays",
      value: function findPairedArrays(inputLeftPatterns, inputRightPatterns) {
        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var result = [];

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength - 1) return result;

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        var currentPositionLeft = 0;
        var leftPatterns = this.findAllIn(inputLeftPatterns, start, length);
        if (leftPatterns.length == 0) return result;
        var rightPatterns = this.findAllIn(inputRightPatterns, start, length);
        if (rightPatterns.length == 0) return result;

        while (currentPositionLeft < leftPatterns.length) {
          if (rightPatterns.length == 0) {
            break;
          }

          if (leftPatterns[0].position == rightPatterns[0].position) {
            result.push({
              left: leftPatterns[0],
              right: rightPatterns[0]
            });
            leftPatterns.splice(0, 1);
            rightPatterns.splice(0, 1);
            continue;
          }

          if (leftPatterns[currentPositionLeft].position > rightPatterns[0].position) {
            break;
          }

          while (leftPatterns[currentPositionLeft].position < rightPatterns[0].position) {
            currentPositionLeft++;

            if (currentPositionLeft >= leftPatterns.length) {
              break;
            }
          }

          result.push({
            left: leftPatterns[currentPositionLeft - 1],
            right: rightPatterns[0]
          });
          leftPatterns.splice(currentPositionLeft - 1, 1);
          rightPatterns.splice(0, 1);
          currentPositionLeft = 0;
        }

        result.sort(function (a, b) {
          return a.left.position - b.left.position;
        });
        return result;
      }
    }, {
      key: "replacePattern",
      value: function replacePattern(searchPattern, _replacePattern) {
        var _output$searchPattern;

        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var findAllResult = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var result;
        var i;
        var output = {
          status: -1,
          searchPatternPositions: [],
          replacePatternPositions: []
        };

        if (start == null) {
          start = 0;
        }

        if (start > this.buffer.byteLength - 1) return false;

        if (length == null) {
          length = this.buffer.byteLength - start;
        }

        if (length > this.buffer.byteLength - start) {
          length = this.buffer.byteLength - start;
        }

        if (findAllResult == null) {
          result = this.findAllIn([searchPattern], start, length);
          if (result.length == 0) return output;
        } else result = findAllResult;

        (_output$searchPattern = output.searchPatternPositions).push.apply(_output$searchPattern, _toConsumableArray(Array.from(result, function (element) {
          return element.position;
        })));

        var patternDifference = searchPattern.buffer.byteLength - _replacePattern.buffer.byteLength;
        var changedBuffer = new ArrayBuffer(this.view.length - result.length * patternDifference);
        var changedView = new Uint8Array(changedBuffer);
        changedView.set(new Uint8Array(this.buffer, 0, start));

        for (i = 0; i < result.length; i++) {
          var currentPosition = i == 0 ? start : result[i - 1].position;
          changedView.set(new Uint8Array(this.buffer, currentPosition, result[i].position - searchPattern.buffer.byteLength - currentPosition), currentPosition - i * patternDifference);
          changedView.set(_replacePattern.view, result[i].position - searchPattern.buffer.byteLength - i * patternDifference);
          output.replacePatternPositions.push(result[i].position - searchPattern.buffer.byteLength - i * patternDifference);
        }

        i--;
        changedView.set(new Uint8Array(this.buffer, result[i].position, this.buffer.byteLength - result[i].position), result[i].position - searchPattern.buffer.byteLength + _replacePattern.buffer.byteLength - i * patternDifference);
        this.buffer = changedBuffer;
        this.view = new Uint8Array(this.buffer);
        output.status = 1;
        return output;
      }
    }, {
      key: "skipPatterns",
      value: function skipPatterns(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var backward = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (start == null) {
          start = backward ? this.buffer.byteLength : 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (backward) {
          if (length == null) {
            length = start;
          }

          if (length > start) {
            length = start;
          }
        } else {
          if (length == null) {
            length = this.buffer.byteLength - start;
          }

          if (length > this.buffer.byteLength - start) {
            length = this.buffer.byteLength - start;
          }
        }

        var result = start;

        for (var k = 0; k < patterns.length; k++) {
          var patternLength = patterns[k].buffer.byteLength;
          var equalStart = backward ? result - patternLength : result;
          var equal = true;

          for (var j = 0; j < patternLength; j++) {
            if (this.view[j + equalStart] != patterns[k].view[j]) {
              equal = false;
              break;
            }
          }

          if (equal) {
            k = -1;

            if (backward) {
              result -= patternLength;
              if (result <= 0) return result;
            } else {
              result += patternLength;
              if (result >= start + length) return result;
            }
          }
        }

        return result;
      }
    }, {
      key: "skipNotPatterns",
      value: function skipNotPatterns(patterns) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var backward = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (start == null) {
          start = backward ? this.buffer.byteLength : 0;
        }

        if (start > this.buffer.byteLength) {
          start = this.buffer.byteLength;
        }

        if (backward) {
          if (length == null) {
            length = start;
          }

          if (length > start) {
            length = start;
          }
        } else {
          if (length == null) {
            length = this.buffer.byteLength - start;
          }

          if (length > this.buffer.byteLength - start) {
            length = this.buffer.byteLength - start;
          }
        }

        var result = -1;

        for (var i = 0; i < length; i++) {
          for (var k = 0; k < patterns.length; k++) {
            var patternLength = patterns[k].buffer.byteLength;
            var equalStart = backward ? start - i - patternLength : start + i;
            var equal = true;

            for (var j = 0; j < patternLength; j++) {
              if (this.view[j + equalStart] != patterns[k].view[j]) {
                equal = false;
                break;
              }
            }

            if (equal) {
              result = backward ? start - i : start + i;
              break;
            }
          }

          if (result != -1) {
            break;
          }
        }

        return result;
      }
    }, {
      key: "buffer",
      set: function set(value) {
        this._buffer = value.slice(0);
        this._view = new Uint8Array(this._buffer);
      },
      get: function get() {
        return this._buffer;
      }
    }, {
      key: "view",
      set: function set(value) {
        this._buffer = new ArrayBuffer(value.length);
        this._view = new Uint8Array(this._buffer);

        this._view.set(value);
      },
      get: function get() {
        return this._view;
      }
    }, {
      key: "length",
      get: function get() {
        return this._buffer.byteLength;
      },
      set: function set(value) {
        this._buffer = new ArrayBuffer(value);
        this._view = new Uint8Array(this._buffer);
      }
    }]);

    return ByteStream;
  }();

  var SeqStream = function () {
    function SeqStream() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SeqStream);

      this.stream = new ByteStream();
      this._length = 0;
      this.backward = false;
      this._start = 0;
      this.appendBlock = 0;
      this.prevLength = 0;
      this.prevStart = 0;

      for (var _i33 = 0, _Object$keys10 = Object.keys(parameters); _i33 < _Object$keys10.length; _i33++) {
        var key = _Object$keys10[_i33];

        switch (key) {
          case "stream":
            this.stream = parameters.stream;
            break;

          case "backward":
            this.backward = parameters.backward;
            this._start = this.stream.buffer.byteLength;
            break;

          case "length":
            this._length = parameters.length;
            break;

          case "start":
            this._start = parameters.start;
            break;

          case "appendBlock":
            this.appendBlock = parameters.appendBlock;
            break;

          case "view":
            this.stream = new ByteStream({
              view: parameters.view
            });
            break;

          case "buffer":
            this.stream = new ByteStream({
              buffer: parameters.buffer
            });
            break;

          case "string":
            this.stream = new ByteStream({
              string: parameters.string
            });
            break;

          case "hexstring":
            this.stream = new ByteStream({
              hexstring: parameters.hexstring
            });
            break;
        }
      }
    }

    _createClass(SeqStream, [{
      key: "resetPosition",
      value: function resetPosition() {
        this._start = this.prevStart;
        this._length = this.prevLength;
      }
    }, {
      key: "findPattern",
      value: function findPattern(pattern) {
        var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (gap == null || gap > this.length) {
          gap = this.length;
        }

        var result = this.stream.findPattern(pattern, this.start, this.length, this.backward);
        if (result == -1) return result;

        if (this.backward) {
          if (result < this.start - pattern.buffer.byteLength - gap) return -1;
        } else {
          if (result > this.start + pattern.buffer.byteLength + gap) return -1;
        }

        this.start = result;
        return result;
      }
    }, {
      key: "findFirstIn",
      value: function findFirstIn(patterns) {
        var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (gap == null || gap > this.length) {
          gap = this.length;
        }

        var result = this.stream.findFirstIn(patterns, this.start, this.length, this.backward);
        if (result.id == -1) return result;

        if (this.backward) {
          if (result.position < this.start - patterns[result.id].buffer.byteLength - gap) {
            return {
              id: -1,
              position: this.backward ? 0 : this.start + this.length
            };
          }
        } else {
          if (result.position > this.start + patterns[result.id].buffer.byteLength + gap) {
            return {
              id: -1,
              position: this.backward ? 0 : this.start + this.length
            };
          }
        }

        this.start = result.position;
        return result;
      }
    }, {
      key: "findAllIn",
      value: function findAllIn(patterns) {
        var start = this.backward ? this.start - this.length : this.start;
        return this.stream.findAllIn(patterns, start, this.length);
      }
    }, {
      key: "findFirstNotIn",
      value: function findFirstNotIn(patterns) {
        var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (gap == null || gap > this._length) {
          gap = this._length;
        }

        var result = this._stream.findFirstNotIn(patterns, this._start, this._length, this.backward);

        if (result.left.id == -1 && result.right.id == -1) return result;

        if (this.backward) {
          if (result.right.id != -1) {
            if (result.right.position < this._start - patterns[result.right.id]._buffer.byteLength - gap) {
              return {
                left: {
                  id: -1,
                  position: this._start
                },
                right: {
                  id: -1,
                  position: 0
                },
                value: new ByteStream()
              };
            }
          }
        } else {
          if (result.left.id != -1) {
            if (result.left.position > this._start + patterns[result.left.id]._buffer.byteLength + gap) {
              return {
                left: {
                  id: -1,
                  position: this._start
                },
                right: {
                  id: -1,
                  position: 0
                },
                value: new ByteStream()
              };
            }
          }
        }

        if (this.backward) {
          if (result.left.id == -1) this.start = 0;else this.start = result.left.position;
        } else {
          if (result.right.id == -1) this.start = this._start + this._length;else this.start = result.right.position;
        }

        return result;
      }
    }, {
      key: "findAllNotIn",
      value: function findAllNotIn(patterns) {
        var start = this.backward ? this._start - this._length : this._start;
        return this._stream.findAllNotIn(patterns, start, this._length);
      }
    }, {
      key: "findFirstSequence",
      value: function findFirstSequence(patterns) {
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var gap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (length == null || length > this._length) {
          length = this._length;
        }

        if (gap == null || gap > length) {
          gap = length;
        }

        var result = this._stream.findFirstSequence(patterns, this._start, length, this.backward);

        if (result.value.buffer.byteLength == 0) return result;

        if (this.backward) {
          if (result.position < this._start - result.value._buffer.byteLength - gap) {
            return {
              position: -1,
              value: new ByteStream()
            };
          }
        } else {
          if (result.position > this._start + result.value._buffer.byteLength + gap) {
            return {
              position: -1,
              value: new ByteStream()
            };
          }
        }

        this.start = result.position;
        return result;
      }
    }, {
      key: "findAllSequences",
      value: function findAllSequences(patterns) {
        var start = this.backward ? this.start - this.length : this.start;
        return this.stream.findAllSequences(patterns, start, this.length);
      }
    }, {
      key: "findPairedPatterns",
      value: function findPairedPatterns(leftPattern, rightPattern) {
        var gap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (gap == null || gap > this.length) {
          gap = this.length;
        }

        var start = this.backward ? this.start - this.length : this.start;
        var result = this.stream.findPairedPatterns(leftPattern, rightPattern, start, this.length);

        if (result.length) {
          if (this.backward) {
            if (result[0].right < this.start - rightPattern.buffer.byteLength - gap) return [];
          } else {
            if (result[0].left > this.start + leftPattern.buffer.byteLength + gap) return [];
          }
        }

        return result;
      }
    }, {
      key: "findPairedArrays",
      value: function findPairedArrays(leftPatterns, rightPatterns) {
        var gap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (gap == null || gap > this.length) {
          gap = this.length;
        }

        var start = this.backward ? this.start - this.length : this.start;
        var result = this.stream.findPairedArrays(leftPatterns, rightPatterns, start, this.length);

        if (result.length) {
          if (this.backward) {
            if (result[0].right.position < this.start - rightPatterns[result[0].right.id].buffer.byteLength - gap) return [];
          } else {
            if (result[0].left.position > this.start + leftPatterns[result[0].left.id].buffer.byteLength + gap) return [];
          }
        }

        return result;
      }
    }, {
      key: "replacePattern",
      value: function replacePattern(searchPattern, _replacePattern2) {
        var start = this.backward ? this.start - this.length : this.start;
        return this.stream.replacePattern(searchPattern, _replacePattern2, start, this.length);
      }
    }, {
      key: "skipPatterns",
      value: function skipPatterns(patterns) {
        var result = this.stream.skipPatterns(patterns, this.start, this.length, this.backward);
        this.start = result;
        return result;
      }
    }, {
      key: "skipNotPatterns",
      value: function skipNotPatterns(patterns) {
        var result = this.stream.skipNotPatterns(patterns, this.start, this.length, this.backward);
        if (result == -1) return -1;
        this.start = result;
        return result;
      }
    }, {
      key: "append",
      value: function append(stream) {
        if (this._start + stream._buffer.byteLength > this._stream._buffer.byteLength) {
          if (stream._buffer.byteLength > this.appendBlock) {
            this.appendBlock = stream._buffer.byteLength + 1000;
          }

          this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
        }

        this._stream._view.set(stream._view, this._start);

        this._length += stream._buffer.byteLength * 2;
        this.start = this._start + stream._buffer.byteLength;
        this.prevLength -= stream._buffer.byteLength * 2;
      }
    }, {
      key: "appendView",
      value: function appendView(view) {
        if (this._start + view.length > this._stream._buffer.byteLength) {
          if (view.length > this.appendBlock) {
            this.appendBlock = view.length + 1000;
          }

          this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
        }

        this._stream._view.set(view, this._start);

        this._length += view.length * 2;
        this.start = this._start + view.length;
        this.prevLength -= view.length * 2;
      }
    }, {
      key: "appendChar",
      value: function appendChar(char) {
        if (this._start + 1 > this._stream._buffer.byteLength) {
          if (1 > this.appendBlock) {
            this.appendBlock = 1000;
          }

          this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
        }

        this._stream._view[this._start] = char;
        this._length += 2;
        this.start = this._start + 1;
        this.prevLength -= 2;
      }
    }, {
      key: "appendUint16",
      value: function appendUint16(number) {
        if (this._start + 2 > this._stream._buffer.byteLength) {
          if (2 > this.appendBlock) {
            this.appendBlock = 1000;
          }

          this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
        }

        var value = new Uint16Array([number]);
        var view = new Uint8Array(value.buffer);
        this._stream._view[this._start] = view[1];
        this._stream._view[this._start + 1] = view[0];
        this._length += 4;
        this.start = this._start + 2;
        this.prevLength -= 4;
      }
    }, {
      key: "appendUint24",
      value: function appendUint24(number) {
        if (this._start + 3 > this._stream._buffer.byteLength) {
          if (3 > this.appendBlock) {
            this.appendBlock = 1000;
          }

          this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
        }

        var value = new Uint32Array([number]);
        var view = new Uint8Array(value.buffer);
        this._stream._view[this._start] = view[2];
        this._stream._view[this._start + 1] = view[1];
        this._stream._view[this._start + 2] = view[0];
        this._length += 6;
        this.start = this._start + 3;
        this.prevLength -= 6;
      }
    }, {
      key: "appendUint32",
      value: function appendUint32(number) {
        if (this._start + 4 > this._stream._buffer.byteLength) {
          if (4 > this.appendBlock) {
            this.appendBlock = 1000;
          }

          this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock);
        }

        var value = new Uint32Array([number]);
        var view = new Uint8Array(value.buffer);
        this._stream._view[this._start] = view[3];
        this._stream._view[this._start + 1] = view[2];
        this._stream._view[this._start + 2] = view[1];
        this._stream._view[this._start + 3] = view[0];
        this._length += 8;
        this.start = this._start + 4;
        this.prevLength -= 8;
      }
    }, {
      key: "getBlock",
      value: function getBlock(size) {
        var changeLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (this._length <= 0) return [];

        if (this._length < size) {
          size = this._length;
        }

        var result;

        if (this.backward) {
          var buffer = this._stream._buffer.slice(this._length - size, this._length);

          var view = new Uint8Array(buffer);
          result = new Array(size);

          for (var i = 0; i < size; i++) {
            result[size - 1 - i] = view[i];
          }
        } else {
          var _buffer2 = this._stream._buffer.slice(this._start, this._start + size);

          result = Array.from(new Uint8Array(_buffer2));
        }

        if (changeLength) {
          this.start += this.backward ? -1 * size : size;
        }

        return result;
      }
    }, {
      key: "getUint16",
      value: function getUint16() {
        var changeLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var block = this.getBlock(2, changeLength);
        if (block.length < 2) return 0;
        var value = new Uint16Array(1);
        var view = new Uint8Array(value.buffer);
        view[0] = block[1];
        view[1] = block[0];
        return value[0];
      }
    }, {
      key: "getInt16",
      value: function getInt16() {
        var changeLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var block = this.getBlock(2, changeLength);
        if (block.length < 2) return 0;
        var value = new Int16Array(1);
        var view = new Uint8Array(value.buffer);
        view[0] = block[1];
        view[1] = block[0];
        return value[0];
      }
    }, {
      key: "getUint24",
      value: function getUint24() {
        var changeLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var block = this.getBlock(3, changeLength);
        if (block.length < 3) return 0;
        var value = new Uint32Array(1);
        var view = new Uint8Array(value.buffer);

        for (var i = 3; i >= 1; i--) {
          view[3 - i] = block[i - 1];
        }

        return value[0];
      }
    }, {
      key: "getUint32",
      value: function getUint32() {
        var changeLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var block = this.getBlock(4, changeLength);
        if (block.length < 4) return 0;
        var value = new Uint32Array(1);
        var view = new Uint8Array(value.buffer);

        for (var i = 3; i >= 0; i--) {
          view[3 - i] = block[i];
        }

        return value[0];
      }
    }, {
      key: "getInt32",
      value: function getInt32() {
        var changeLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var block = this.getBlock(4, changeLength);
        if (block.length < 4) return 0;
        var value = new Int32Array(1);
        var view = new Uint8Array(value.buffer);

        for (var i = 3; i >= 0; i--) {
          view[3 - i] = block[i];
        }

        return value[0];
      }
    }, {
      key: "stream",
      set: function set(value) {
        this._stream = value;
        this.prevLength = this._length;
        this._length = value._buffer.byteLength;
        this.prevStart = this._start;
        this._start = 0;
      },
      get: function get() {
        return this._stream;
      }
    }, {
      key: "length",
      set: function set(value) {
        this.prevLength = this._length;
        this._length = value;
      },
      get: function get() {
        if (this.appendBlock) return this.start;
        return this._length;
      }
    }, {
      key: "start",
      set: function set(value) {
        if (value > this.stream.buffer.byteLength) return;
        this.prevStart = this._start;
        this.prevLength = this._length;
        this._length -= this.backward ? this._start - value : value - this._start;
        this._start = value;
      },
      get: function get() {
        return this._start;
      }
    }, {
      key: "buffer",
      get: function get() {
        return this._stream._buffer.slice(0, this._length);
      }
    }]);

    return SeqStream;
  }();

  var SignedCertificateTimestamp = function () {
    function SignedCertificateTimestamp() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SignedCertificateTimestamp);

      this.version = getParametersValue(parameters, "version", SignedCertificateTimestamp.defaultValues("version"));
      this.logID = getParametersValue(parameters, "logID", SignedCertificateTimestamp.defaultValues("logID"));
      this.timestamp = getParametersValue(parameters, "timestamp", SignedCertificateTimestamp.defaultValues("timestamp"));
      this.extensions = getParametersValue(parameters, "extensions", SignedCertificateTimestamp.defaultValues("extensions"));
      this.hashAlgorithm = getParametersValue(parameters, "hashAlgorithm", SignedCertificateTimestamp.defaultValues("hashAlgorithm"));
      this.signatureAlgorithm = getParametersValue(parameters, "signatureAlgorithm", SignedCertificateTimestamp.defaultValues("signatureAlgorithm"));
      this.signature = getParametersValue(parameters, "signature", SignedCertificateTimestamp.defaultValues("signature"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
      if ("stream" in parameters) this.fromStream(parameters.stream);
    }

    _createClass(SignedCertificateTimestamp, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        if (schema instanceof asn1_5 === false) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestamp");
        var seqStream = new SeqStream({
          stream: new ByteStream({
            buffer: schema.data
          })
        });
        this.fromStream(seqStream);
      }
    }, {
      key: "fromStream",
      value: function fromStream(stream) {
        var blockLength = stream.getUint16();
        this.version = stream.getBlock(1)[0];

        if (this.version === 0) {
          this.logID = new Uint8Array(stream.getBlock(32)).buffer.slice(0);
          this.timestamp = new Date(utilFromBase(new Uint8Array(stream.getBlock(8)), 8));
          var extensionsLength = stream.getUint16();
          this.extensions = new Uint8Array(stream.getBlock(extensionsLength)).buffer.slice(0);

          switch (stream.getBlock(1)[0]) {
            case 0:
              this.hashAlgorithm = "none";
              break;

            case 1:
              this.hashAlgorithm = "md5";
              break;

            case 2:
              this.hashAlgorithm = "sha1";
              break;

            case 3:
              this.hashAlgorithm = "sha224";
              break;

            case 4:
              this.hashAlgorithm = "sha256";
              break;

            case 5:
              this.hashAlgorithm = "sha384";
              break;

            case 6:
              this.hashAlgorithm = "sha512";
              break;

            default:
              throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
          }

          switch (stream.getBlock(1)[0]) {
            case 0:
              this.signatureAlgorithm = "anonymous";
              break;

            case 1:
              this.signatureAlgorithm = "rsa";
              break;

            case 2:
              this.signatureAlgorithm = "dsa";
              break;

            case 3:
              this.signatureAlgorithm = "ecdsa";
              break;

            default:
              throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
          }

          var signatureLength = stream.getUint16();
          var signatureData = new Uint8Array(stream.getBlock(signatureLength)).buffer.slice(0);

          var _asn5 = asn1_1(signatureData);

          if (_asn5.offset === -1) throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
          this.signature = _asn5.result;
          if (blockLength !== 47 + extensionsLength + signatureLength) throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var stream = this.toStream();
        return new asn1_5({
          data: stream.stream.buffer
        });
      }
    }, {
      key: "toStream",
      value: function toStream() {
        var stream = new SeqStream();
        stream.appendUint16(47 + this.extensions.byteLength + this.signature.valueBeforeDecode.byteLength);
        stream.appendChar(this.version);
        stream.appendView(new Uint8Array(this.logID));
        var timeBuffer = new ArrayBuffer(8);
        var timeView = new Uint8Array(timeBuffer);
        var baseArray = utilToBase(this.timestamp.valueOf(), 8);
        timeView.set(new Uint8Array(baseArray), 8 - baseArray.byteLength);
        stream.appendView(timeView);
        stream.appendUint16(this.extensions.byteLength);
        if (this.extensions.byteLength) stream.appendView(new Uint8Array(this.extensions));

        var _hashAlgorithm;

        switch (this.hashAlgorithm.toLowerCase()) {
          case "none":
            _hashAlgorithm = 0;
            break;

          case "md5":
            _hashAlgorithm = 1;
            break;

          case "sha1":
            _hashAlgorithm = 2;
            break;

          case "sha224":
            _hashAlgorithm = 3;
            break;

          case "sha256":
            _hashAlgorithm = 4;
            break;

          case "sha384":
            _hashAlgorithm = 5;
            break;

          case "sha512":
            _hashAlgorithm = 6;
            break;

          default:
            throw new Error("Incorrect data for hashAlgorithm: ".concat(this.hashAlgorithm));
        }

        stream.appendChar(_hashAlgorithm);

        var _signatureAlgorithm;

        switch (this.signatureAlgorithm.toLowerCase()) {
          case "anonymous":
            _signatureAlgorithm = 0;
            break;

          case "rsa":
            _signatureAlgorithm = 1;
            break;

          case "dsa":
            _signatureAlgorithm = 2;
            break;

          case "ecdsa":
            _signatureAlgorithm = 3;
            break;

          default:
            throw new Error("Incorrect data for signatureAlgorithm: ".concat(this.signatureAlgorithm));
        }

        stream.appendChar(_signatureAlgorithm);

        var _signature = this.signature.toBER(false);

        stream.appendUint16(_signature.byteLength);
        stream.appendView(new Uint8Array(_signature));
        return stream;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          version: this.version,
          logID: bufferToHexCodes(this.logID),
          timestamp: this.timestamp,
          extensions: bufferToHexCodes(this.extensions),
          hashAlgorithm: this.hashAlgorithm,
          signatureAlgorithm: this.signatureAlgorithm,
          signature: this.signature.toJSON()
        };
      }
    }, {
      key: "verify",
      value: function () {
        var _verify = _asyncToGenerator(regeneratorRuntime.mark(function _callee(logs, data) {
          var dataType,
              logId,
              publicKeyBase64,
              publicKeyInfo,
              stream,
              _iteratorNormalCompletion8,
              _didIteratorError8,
              _iteratorError8,
              _iterator8,
              _step8,
              log,
              asn1,
              timeBuffer,
              timeView,
              baseArray,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  dataType = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
                  logId = toBase64(arrayBufferToString(this.logID));
                  publicKeyBase64 = null;
                  stream = new SeqStream();
                  _iteratorNormalCompletion8 = true;
                  _didIteratorError8 = false;
                  _iteratorError8 = undefined;
                  _context.prev = 7;
                  _iterator8 = logs[Symbol.iterator]();

                case 9:
                  if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                    _context.next = 17;
                    break;
                  }

                  log = _step8.value;

                  if (!(log.log_id === logId)) {
                    _context.next = 14;
                    break;
                  }

                  publicKeyBase64 = log.key;
                  return _context.abrupt("break", 17);

                case 14:
                  _iteratorNormalCompletion8 = true;
                  _context.next = 9;
                  break;

                case 17:
                  _context.next = 23;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](7);
                  _didIteratorError8 = true;
                  _iteratorError8 = _context.t0;

                case 23:
                  _context.prev = 23;
                  _context.prev = 24;

                  if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                    _iterator8.return();
                  }

                case 26:
                  _context.prev = 26;

                  if (!_didIteratorError8) {
                    _context.next = 29;
                    break;
                  }

                  throw _iteratorError8;

                case 29:
                  return _context.finish(26);

                case 30:
                  return _context.finish(23);

                case 31:
                  if (!(publicKeyBase64 === null)) {
                    _context.next = 33;
                    break;
                  }

                  throw new Error("Public key not found for CT with logId: ".concat(logId));

                case 33:
                  asn1 = asn1_1(stringToArrayBuffer(fromBase64(publicKeyBase64)));

                  if (!(asn1.offset === -1)) {
                    _context.next = 36;
                    break;
                  }

                  throw new Error("Incorrect key value for CT Log with logId: ".concat(logId));

                case 36:
                  publicKeyInfo = new PublicKeyInfo({
                    schema: asn1.result
                  });
                  stream.appendChar(0x00);
                  stream.appendChar(0x00);
                  timeBuffer = new ArrayBuffer(8);
                  timeView = new Uint8Array(timeBuffer);
                  baseArray = utilToBase(this.timestamp.valueOf(), 8);
                  timeView.set(new Uint8Array(baseArray), 8 - baseArray.byteLength);
                  stream.appendView(timeView);
                  stream.appendUint16(dataType);
                  if (dataType === 0) stream.appendUint24(data.byteLength);
                  stream.appendView(new Uint8Array(data));
                  stream.appendUint16(this.extensions.byteLength);
                  if (this.extensions.byteLength !== 0) stream.appendView(new Uint8Array(this.extensions));
                  return _context.abrupt("return", getEngine().subtle.verifyWithPublicKey(stream._stream._buffer.slice(0, stream._length), {
                    valueBlock: {
                      valueHex: this.signature.toBER(false)
                    }
                  }, publicKeyInfo, {
                    algorithmId: ""
                  }, "SHA-256"));

                case 50:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[7, 19, 23, 31], [24,, 26, 30]]);
        }));

        function verify(_x, _x2) {
          return _verify.apply(this, arguments);
        }

        return verify;
      }()
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "version":
            return 0;

          case "logID":
          case "extensions":
            return new ArrayBuffer(0);

          case "timestamp":
            return new Date(0);

          case "hashAlgorithm":
          case "signatureAlgorithm":
            return "";

          case "signature":
            return new asn1_7();

          default:
            throw new Error("Invalid member name for SignedCertificateTimestamp class: ".concat(memberName));
        }
      }
    }]);

    return SignedCertificateTimestamp;
  }();

  var SignedCertificateTimestampList = function () {
    function SignedCertificateTimestampList() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SignedCertificateTimestampList);

      this.timestamps = getParametersValue(parameters, "timestamps", SignedCertificateTimestampList.defaultValues("timestamps"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(SignedCertificateTimestampList, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        if (schema instanceof asn1_33 === false) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestampList");
        var seqStream = new SeqStream({
          stream: new ByteStream({
            buffer: schema.valueBlock.valueHex
          })
        });
        var dataLength = seqStream.getUint16();
        if (dataLength !== seqStream.length) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestampList");

        while (seqStream.length) {
          this.timestamps.push(new SignedCertificateTimestamp({
            stream: seqStream
          }));
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var stream = new SeqStream();
        var overallLength = 0;
        var timestampsData = [];
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this.timestamps[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var timestamp = _step9.value;
            var timestampStream = timestamp.toStream();
            timestampsData.push(timestampStream);
            overallLength += timestampStream.stream.buffer.byteLength;
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        stream.appendUint16(overallLength);

        for (var _i34 = 0, _timestampsData = timestampsData; _i34 < _timestampsData.length; _i34++) {
          var _timestamp = _timestampsData[_i34];
          stream.appendView(_timestamp.stream.view);
        }

        return new asn1_33({
          valueHex: stream.stream.buffer.slice(0)
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          timestamps: Array.from(this.timestamps, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "timestamps":
            return [];

          default:
            throw new Error("Invalid member name for SignedCertificateTimestampList class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "timestamps":
            return memberValue.length === 0;

          default:
            throw new Error("Invalid member name for SignedCertificateTimestampList class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        if ("optional" in names === false) names.optional = false;
        return new asn1_33({
          name: names.blockName || "SignedCertificateTimestampList",
          optional: names.optional
        });
      }
    }]);

    return SignedCertificateTimestampList;
  }();

  var CertificateTemplate = function () {
    function CertificateTemplate() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CertificateTemplate);

      this.templateID = getParametersValue(parameters, "templateID", CertificateTemplate.defaultValues("templateID"));
      if ("templateMajorVersion" in parameters) this.templateMajorVersion = getParametersValue(parameters, "templateMajorVersion", CertificateTemplate.defaultValues("templateMajorVersion"));
      if ("templateMinorVersion" in parameters) this.templateMinorVersion = getParametersValue(parameters, "templateMinorVersion", CertificateTemplate.defaultValues("templateMinorVersion"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(CertificateTemplate, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["templateID", "templateMajorVersion", "templateMinorVersion"]);
        var asn1 = asn1_2(schema, schema, CertificateTemplate.schema({
          names: {
            templateID: "templateID",
            templateMajorVersion: "templateMajorVersion",
            templateMinorVersion: "templateMinorVersion"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CertificateTemplate");
        this.templateID = asn1.result.templateID.valueBlock.toString();
        if ("templateMajorVersion" in asn1.result) this.templateMajorVersion = asn1.result.templateMajorVersion.valueBlock.valueDec;
        if ("templateMinorVersion" in asn1.result) this.templateMinorVersion = asn1.result.templateMinorVersion.valueBlock.valueDec;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(new asn1_29({
          value: this.templateID
        }));
        if ("templateMajorVersion" in this) outputArray.push(new asn1_31({
          value: this.templateMajorVersion
        }));
        if ("templateMinorVersion" in this) outputArray.push(new asn1_31({
          value: this.templateMinorVersion
        }));
        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          extnID: this.templateID
        };
        if ("templateMajorVersion" in this) object.templateMajorVersion = this.templateMajorVersion;
        if ("templateMinorVersion" in this) object.templateMinorVersion = this.templateMinorVersion;
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "templateID":
            return "";

          case "templateMajorVersion":
          case "templateMinorVersion":
            return 0;

          default:
            throw new Error("Invalid member name for CertificateTemplate class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.templateID || ""
          }), new asn1_31({
            name: names.templateMajorVersion || "",
            optional: true
          }), new asn1_31({
            name: names.templateMinorVersion || "",
            optional: true
          })]
        });
      }
    }]);

    return CertificateTemplate;
  }();

  var CAVersion = function () {
    function CAVersion() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CAVersion);

      this.certificateIndex = getParametersValue(parameters, "certificateIndex", CAVersion.defaultValues("certificateIndex"));
      this.keyIndex = getParametersValue(parameters, "keyIndex", CAVersion.defaultValues("keyIndex"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(CAVersion, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        if (schema.constructor.blockName() !== asn1_31.blockName()) throw new Error("Object's schema was not verified against input data for CAVersion");
        var value = schema.valueBlock.valueHex.slice(0);
        var valueView = new Uint8Array(value);

        switch (true) {
          case value.byteLength < 4:
            {
              var tempValue = new ArrayBuffer(4);
              var tempValueView = new Uint8Array(tempValue);
              tempValueView.set(valueView, 4 - value.byteLength);
              value = tempValue.slice(0);
            }
            break;

          case value.byteLength > 4:
            {
              var _tempValue = new ArrayBuffer(4);

              var _tempValueView = new Uint8Array(_tempValue);

              _tempValueView.set(valueView.slice(0, 4));

              value = _tempValue.slice(0);
            }
            break;
        }

        var keyIndexBuffer = value.slice(0, 2);
        var keyIndexView8 = new Uint8Array(keyIndexBuffer);
        var temp = keyIndexView8[0];
        keyIndexView8[0] = keyIndexView8[1];
        keyIndexView8[1] = temp;
        var keyIndexView16 = new Uint16Array(keyIndexBuffer);
        this.keyIndex = keyIndexView16[0];
        var certificateIndexBuffer = value.slice(2);
        var certificateIndexView8 = new Uint8Array(certificateIndexBuffer);
        temp = certificateIndexView8[0];
        certificateIndexView8[0] = certificateIndexView8[1];
        certificateIndexView8[1] = temp;
        var certificateIndexView16 = new Uint16Array(certificateIndexBuffer);
        this.certificateIndex = certificateIndexView16[0];
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var certificateIndexBuffer = new ArrayBuffer(2);
        var certificateIndexView = new Uint16Array(certificateIndexBuffer);
        certificateIndexView[0] = this.certificateIndex;
        var certificateIndexView8 = new Uint8Array(certificateIndexBuffer);
        var temp = certificateIndexView8[0];
        certificateIndexView8[0] = certificateIndexView8[1];
        certificateIndexView8[1] = temp;
        var keyIndexBuffer = new ArrayBuffer(2);
        var keyIndexView = new Uint16Array(keyIndexBuffer);
        keyIndexView[0] = this.keyIndex;
        var keyIndexView8 = new Uint8Array(keyIndexBuffer);
        temp = keyIndexView8[0];
        keyIndexView8[0] = keyIndexView8[1];
        keyIndexView8[1] = temp;
        return new asn1_31({
          valueHex: utilConcatBuf(keyIndexBuffer, certificateIndexBuffer)
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          certificateIndex: this.certificateIndex,
          keyIndex: this.keyIndex
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "certificateIndex":
          case "keyIndex":
            return 0;

          default:
            throw new Error("Invalid member name for CAVersion class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        return new asn1_31();
      }
    }]);

    return CAVersion;
  }();

  var QCStatement = function () {
    function QCStatement() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, QCStatement);

      this.id = getParametersValue(parameters, "id", QCStatement.defaultValues("id"));

      if ("type" in parameters) {
        this.type = getParametersValue(parameters, "type", QCStatement.defaultValues("type"));
      }

      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(QCStatement, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["id", "type"]);
        var asn1 = asn1_2(schema, schema, QCStatement.schema({
          names: {
            id: "id",
            type: "type"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for QCStatement");
        this.id = asn1.result.id.valueBlock.toString();
        if ("type" in asn1.result) this.type = asn1.result.type;
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var value = [new asn1_29({
          value: this.id
        })];
        if ("type" in this) value.push(this.type);
        return new asn1_36({
          value: value
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          id: this.id
        };
        if ("type" in this) object.type = this.type.toJSON();
        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "id":
            return "";

          case "type":
            return new asn1_34();

          default:
            throw new Error("Invalid member name for QCStatement class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "id":
            return memberValue === "";

          case "type":
            return memberValue instanceof asn1_34;

          default:
            throw new Error("Invalid member name for QCStatement class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.id || ""
          }), new asn1_7({
            name: names.type || "",
            optional: true
          })]
        });
      }
    }]);

    return QCStatement;
  }();

  var QCStatements = function () {
    function QCStatements() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, QCStatements);

      this.values = getParametersValue(parameters, "values", QCStatements.defaultValues("values"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(QCStatements, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["values"]);
        var asn1 = asn1_2(schema, schema, QCStatements.schema({
          names: {
            values: "values"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for QCStatements");
        this.values = Array.from(asn1.result.values, function (element) {
          return new QCStatement({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.values, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          extensions: Array.from(this.values, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "values":
            return [];

          default:
            throw new Error("Invalid member name for QCStatements class: ".concat(memberName));
        }
      }
    }, {
      key: "compareWithDefault",
      value: function compareWithDefault(memberName, memberValue) {
        switch (memberName) {
          case "values":
            return memberValue.length === 0;

          default:
            throw new Error("Invalid member name for QCStatements class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.values || "",
            value: QCStatement.schema(names.value || {})
          })]
        });
      }
    }]);

    return QCStatements;
  }();

  var Extension = function () {
    function Extension() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Extension);

      this.extnID = getParametersValue(parameters, "extnID", Extension.defaultValues("extnID"));
      this.critical = getParametersValue(parameters, "critical", Extension.defaultValues("critical"));
      if ("extnValue" in parameters) this.extnValue = new asn1_33({
        valueHex: parameters.extnValue
      });else this.extnValue = Extension.defaultValues("extnValue");
      if ("parsedValue" in parameters) this.parsedValue = getParametersValue(parameters, "parsedValue", Extension.defaultValues("parsedValue"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(Extension, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["extnID", "critical", "extnValue"]);
        var asn1 = asn1_2(schema, schema, Extension.schema({
          names: {
            extnID: "extnID",
            critical: "critical",
            extnValue: "extnValue"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Extension");
        this.extnID = asn1.result.extnID.valueBlock.toString();
        if ("critical" in asn1.result) this.critical = asn1.result.critical.valueBlock.value;
        this.extnValue = asn1.result.extnValue;
        asn1 = asn1_1(this.extnValue.valueBlock.valueHex);
        if (asn1.offset === -1) return;

        switch (this.extnID) {
          case "2.5.29.9":
            try {
              this.parsedValue = new SubjectDirectoryAttributes({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new SubjectDirectoryAttributes();
              this.parsedValue.parsingError = "Incorrectly formated SubjectDirectoryAttributes";
            }

            break;

          case "2.5.29.14":
            this.parsedValue = asn1.result;
            break;

          case "2.5.29.15":
            this.parsedValue = asn1.result;
            break;

          case "2.5.29.16":
            try {
              this.parsedValue = new PrivateKeyUsagePeriod({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new PrivateKeyUsagePeriod();
              this.parsedValue.parsingError = "Incorrectly formated PrivateKeyUsagePeriod";
            }

            break;

          case "2.5.29.17":
          case "2.5.29.18":
            try {
              this.parsedValue = new AltName({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new AltName();
              this.parsedValue.parsingError = "Incorrectly formated AltName";
            }

            break;

          case "2.5.29.19":
            try {
              this.parsedValue = new BasicConstraints({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new BasicConstraints();
              this.parsedValue.parsingError = "Incorrectly formated BasicConstraints";
            }

            break;

          case "2.5.29.20":
          case "2.5.29.27":
            this.parsedValue = asn1.result;
            break;

          case "2.5.29.21":
            this.parsedValue = asn1.result;
            break;

          case "2.5.29.24":
            this.parsedValue = asn1.result;
            break;

          case "2.5.29.28":
            try {
              this.parsedValue = new IssuingDistributionPoint({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new IssuingDistributionPoint();
              this.parsedValue.parsingError = "Incorrectly formated IssuingDistributionPoint";
            }

            break;

          case "2.5.29.29":
            try {
              this.parsedValue = new GeneralNames({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new GeneralNames();
              this.parsedValue.parsingError = "Incorrectly formated GeneralNames";
            }

            break;

          case "2.5.29.30":
            try {
              this.parsedValue = new NameConstraints({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new NameConstraints();
              this.parsedValue.parsingError = "Incorrectly formated NameConstraints";
            }

            break;

          case "2.5.29.31":
          case "2.5.29.46":
            try {
              this.parsedValue = new CRLDistributionPoints({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new CRLDistributionPoints();
              this.parsedValue.parsingError = "Incorrectly formated CRLDistributionPoints";
            }

            break;

          case "2.5.29.32":
          case "1.3.6.1.4.1.311.21.10":
            try {
              this.parsedValue = new CertificatePolicies({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new CertificatePolicies();
              this.parsedValue.parsingError = "Incorrectly formated CertificatePolicies";
            }

            break;

          case "2.5.29.33":
            try {
              this.parsedValue = new PolicyMappings({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new PolicyMappings();
              this.parsedValue.parsingError = "Incorrectly formated CertificatePolicies";
            }

            break;

          case "2.5.29.35":
            try {
              this.parsedValue = new AuthorityKeyIdentifier({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new AuthorityKeyIdentifier();
              this.parsedValue.parsingError = "Incorrectly formated AuthorityKeyIdentifier";
            }

            break;

          case "2.5.29.36":
            try {
              this.parsedValue = new PolicyConstraints({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new PolicyConstraints();
              this.parsedValue.parsingError = "Incorrectly formated PolicyConstraints";
            }

            break;

          case "2.5.29.37":
            try {
              this.parsedValue = new ExtKeyUsage({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new ExtKeyUsage();
              this.parsedValue.parsingError = "Incorrectly formated ExtKeyUsage";
            }

            break;

          case "2.5.29.54":
            this.parsedValue = asn1.result;
            break;

          case "1.3.6.1.5.5.7.1.1":
          case "1.3.6.1.5.5.7.1.11":
            try {
              this.parsedValue = new InfoAccess({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new InfoAccess();
              this.parsedValue.parsingError = "Incorrectly formated InfoAccess";
            }

            break;

          case "1.3.6.1.4.1.11129.2.4.2":
            try {
              this.parsedValue = new SignedCertificateTimestampList({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new SignedCertificateTimestampList();
              this.parsedValue.parsingError = "Incorrectly formated SignedCertificateTimestampList";
            }

            break;

          case "1.3.6.1.4.1.311.20.2":
            this.parsedValue = asn1.result;
            break;

          case "1.3.6.1.4.1.311.21.2":
            this.parsedValue = asn1.result;
            break;

          case "1.3.6.1.4.1.311.21.7":
            try {
              this.parsedValue = new CertificateTemplate({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new CertificateTemplate();
              this.parsedValue.parsingError = "Incorrectly formated CertificateTemplate";
            }

            break;

          case "1.3.6.1.4.1.311.21.1":
            try {
              this.parsedValue = new CAVersion({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new CAVersion();
              this.parsedValue.parsingError = "Incorrectly formated CAVersion";
            }

            break;

          case "1.3.6.1.5.5.7.1.3":
            try {
              this.parsedValue = new QCStatements({
                schema: asn1.result
              });
            } catch (ex) {
              this.parsedValue = new QCStatements();
              this.parsedValue.parsingError = "Incorrectly formated QCStatements";
            }

            break;
        }
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var outputArray = [];
        outputArray.push(new asn1_29({
          value: this.extnID
        }));
        if (this.critical !== Extension.defaultValues("critical")) outputArray.push(new asn1_37({
          value: this.critical
        }));
        outputArray.push(this.extnValue);
        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          extnID: this.extnID,
          extnValue: this.extnValue.toJSON()
        };
        if (this.critical !== Extension.defaultValues("critical")) object.critical = this.critical;

        if ("parsedValue" in this) {
          if ("toJSON" in this.parsedValue) object.parsedValue = this.parsedValue.toJSON();
        }

        return object;
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "extnID":
            return "";

          case "critical":
            return false;

          case "extnValue":
            return new asn1_33();

          case "parsedValue":
            return {};

          default:
            throw new Error("Invalid member name for Extension class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [new asn1_29({
            name: names.extnID || ""
          }), new asn1_37({
            name: names.critical || "",
            optional: true
          }), new asn1_33({
            name: names.extnValue || ""
          })]
        });
      }
    }]);

    return Extension;
  }();

  var Extensions = function () {
    function Extensions() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Extensions);

      this.extensions = getParametersValue(parameters, "extensions", Extensions.defaultValues("extensions"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(Extensions, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["extensions"]);
        var asn1 = asn1_2(schema, schema, Extensions.schema({
          names: {
            extensions: "extensions"
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Extensions");
        this.extensions = Array.from(asn1.result.extensions, function (element) {
          return new Extension({
            schema: element
          });
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        return new asn1_36({
          value: Array.from(this.extensions, function (element) {
            return element.toSchema();
          })
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          extensions: Array.from(this.extensions, function (element) {
            return element.toJSON();
          })
        };
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "extensions":
            return [];

          default:
            throw new Error("Invalid member name for Extensions class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          optional: optional,
          name: names.blockName || "",
          value: [new asn1_6({
            name: names.extensions || "",
            value: Extension.schema(names.extension || {})
          })]
        });
      }
    }]);

    return Extensions;
  }();

  function tbsCertificate() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var names = getParametersValue(parameters, "names", {});
    return new asn1_36({
      name: names.blockName || "tbsCertificate",
      value: [new asn1_39({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 0
        },
        value: [new asn1_31({
          name: names.tbsCertificateVersion || "tbsCertificate.version"
        })]
      }), new asn1_31({
        name: names.tbsCertificateSerialNumber || "tbsCertificate.serialNumber"
      }), AlgorithmIdentifier.schema(names.signature || {
        names: {
          blockName: "tbsCertificate.signature"
        }
      }), RelativeDistinguishedNames.schema(names.issuer || {
        names: {
          blockName: "tbsCertificate.issuer"
        }
      }), new asn1_36({
        name: names.tbsCertificateValidity || "tbsCertificate.validity",
        value: [Time.schema(names.notBefore || {
          names: {
            utcTimeName: "tbsCertificate.notBefore",
            generalTimeName: "tbsCertificate.notBefore"
          }
        }), Time.schema(names.notAfter || {
          names: {
            utcTimeName: "tbsCertificate.notAfter",
            generalTimeName: "tbsCertificate.notAfter"
          }
        })]
      }), RelativeDistinguishedNames.schema(names.subject || {
        names: {
          blockName: "tbsCertificate.subject"
        }
      }), PublicKeyInfo.schema(names.subjectPublicKeyInfo || {
        names: {
          blockName: "tbsCertificate.subjectPublicKeyInfo"
        }
      }), new asn1_40({
        name: names.tbsCertificateIssuerUniqueID || "tbsCertificate.issuerUniqueID",
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 1
        }
      }), new asn1_40({
        name: names.tbsCertificateSubjectUniqueID || "tbsCertificate.subjectUniqueID",
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 2
        }
      }), new asn1_39({
        optional: true,
        idBlock: {
          tagClass: 3,
          tagNumber: 3
        },
        value: [Extensions.schema(names.extensions || {
          names: {
            blockName: "tbsCertificate.extensions"
          }
        })]
      })]
    });
  }

  var Certificate = function () {
    function Certificate() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Certificate);

      this.tbs = getParametersValue(parameters, "tbs", Certificate.defaultValues("tbs"));
      this.version = getParametersValue(parameters, "version", Certificate.defaultValues("version"));
      this.serialNumber = getParametersValue(parameters, "serialNumber", Certificate.defaultValues("serialNumber"));
      this.signature = getParametersValue(parameters, "signature", Certificate.defaultValues("signature"));
      this.issuer = getParametersValue(parameters, "issuer", Certificate.defaultValues("issuer"));
      this.notBefore = getParametersValue(parameters, "notBefore", Certificate.defaultValues("notBefore"));
      this.notAfter = getParametersValue(parameters, "notAfter", Certificate.defaultValues("notAfter"));
      this.subject = getParametersValue(parameters, "subject", Certificate.defaultValues("subject"));
      this.subjectPublicKeyInfo = getParametersValue(parameters, "subjectPublicKeyInfo", Certificate.defaultValues("subjectPublicKeyInfo"));
      if ("issuerUniqueID" in parameters) this.issuerUniqueID = getParametersValue(parameters, "issuerUniqueID", Certificate.defaultValues("issuerUniqueID"));
      if ("subjectUniqueID" in parameters) this.subjectUniqueID = getParametersValue(parameters, "subjectUniqueID", Certificate.defaultValues("subjectUniqueID"));
      if ("extensions" in parameters) this.extensions = getParametersValue(parameters, "extensions", Certificate.defaultValues("extensions"));
      this.signatureAlgorithm = getParametersValue(parameters, "signatureAlgorithm", Certificate.defaultValues("signatureAlgorithm"));
      this.signatureValue = getParametersValue(parameters, "signatureValue", Certificate.defaultValues("signatureValue"));
      if ("schema" in parameters) this.fromSchema(parameters.schema);
    }

    _createClass(Certificate, [{
      key: "fromSchema",
      value: function fromSchema(schema) {
        clearProps(schema, ["tbsCertificate", "tbsCertificate.extensions", "tbsCertificate.version", "tbsCertificate.serialNumber", "tbsCertificate.signature", "tbsCertificate.issuer", "tbsCertificate.notBefore", "tbsCertificate.notAfter", "tbsCertificate.subject", "tbsCertificate.subjectPublicKeyInfo", "tbsCertificate.issuerUniqueID", "tbsCertificate.subjectUniqueID", "signatureAlgorithm", "signatureValue"]);
        var asn1 = asn1_2(schema, schema, Certificate.schema({
          names: {
            tbsCertificate: {
              names: {
                extensions: {
                  names: {
                    extensions: "tbsCertificate.extensions"
                  }
                }
              }
            }
          }
        }));
        if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for Certificate");
        this.tbs = asn1.result.tbsCertificate.valueBeforeDecode;
        if ("tbsCertificate.version" in asn1.result) this.version = asn1.result["tbsCertificate.version"].valueBlock.valueDec;
        this.serialNumber = asn1.result["tbsCertificate.serialNumber"];
        this.signature = new AlgorithmIdentifier({
          schema: asn1.result["tbsCertificate.signature"]
        });
        this.issuer = new RelativeDistinguishedNames({
          schema: asn1.result["tbsCertificate.issuer"]
        });
        this.notBefore = new Time({
          schema: asn1.result["tbsCertificate.notBefore"]
        });
        this.notAfter = new Time({
          schema: asn1.result["tbsCertificate.notAfter"]
        });
        this.subject = new RelativeDistinguishedNames({
          schema: asn1.result["tbsCertificate.subject"]
        });
        this.subjectPublicKeyInfo = new PublicKeyInfo({
          schema: asn1.result["tbsCertificate.subjectPublicKeyInfo"]
        });
        if ("tbsCertificate.issuerUniqueID" in asn1.result) this.issuerUniqueID = asn1.result["tbsCertificate.issuerUniqueID"].valueBlock.valueHex;
        if ("tbsCertificate.subjectUniqueID" in asn1.result) this.subjectUniqueID = asn1.result["tbsCertificate.subjectUniqueID"].valueBlock.valueHex;
        if ("tbsCertificate.extensions" in asn1.result) this.extensions = Array.from(asn1.result["tbsCertificate.extensions"], function (element) {
          return new Extension({
            schema: element
          });
        });
        this.signatureAlgorithm = new AlgorithmIdentifier({
          schema: asn1.result.signatureAlgorithm
        });
        this.signatureValue = asn1.result.signatureValue;
      }
    }, {
      key: "encodeTBS",
      value: function encodeTBS() {
        var outputArray = [];

        if ("version" in this && this.version !== Certificate.defaultValues("version")) {
          outputArray.push(new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 0
            },
            value: [new asn1_31({
              value: this.version
            })]
          }));
        }

        outputArray.push(this.serialNumber);
        outputArray.push(this.signature.toSchema());
        outputArray.push(this.issuer.toSchema());
        outputArray.push(new asn1_36({
          value: [this.notBefore.toSchema(), this.notAfter.toSchema()]
        }));
        outputArray.push(this.subject.toSchema());
        outputArray.push(this.subjectPublicKeyInfo.toSchema());

        if ("issuerUniqueID" in this) {
          outputArray.push(new asn1_40({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 1
            },
            valueHex: this.issuerUniqueID
          }));
        }

        if ("subjectUniqueID" in this) {
          outputArray.push(new asn1_40({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 2
            },
            valueHex: this.subjectUniqueID
          }));
        }

        if ("extensions" in this) {
          outputArray.push(new asn1_39({
            optional: true,
            idBlock: {
              tagClass: 3,
              tagNumber: 3
            },
            value: [new asn1_36({
              value: Array.from(this.extensions, function (element) {
                return element.toSchema();
              })
            })]
          }));
        }

        return new asn1_36({
          value: outputArray
        });
      }
    }, {
      key: "toSchema",
      value: function toSchema() {
        var encodeFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var tbsSchema = {};

        if (encodeFlag === false) {
          if (this.tbs.length === 0) return Certificate.schema().value[0];
          tbsSchema = asn1_1(this.tbs).result;
        } else tbsSchema = this.encodeTBS();

        return new asn1_36({
          value: [tbsSchema, this.signatureAlgorithm.toSchema(), this.signatureValue]
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var object = {
          tbs: bufferToHexCodes(this.tbs, 0, this.tbs.byteLength),
          serialNumber: this.serialNumber.toJSON(),
          signature: this.signature.toJSON(),
          issuer: this.issuer.toJSON(),
          notBefore: this.notBefore.toJSON(),
          notAfter: this.notAfter.toJSON(),
          subject: this.subject.toJSON(),
          subjectPublicKeyInfo: this.subjectPublicKeyInfo.toJSON(),
          signatureAlgorithm: this.signatureAlgorithm.toJSON(),
          signatureValue: this.signatureValue.toJSON()
        };
        if ("version" in this && this.version !== Certificate.defaultValues("version")) object.version = this.version;
        if ("issuerUniqueID" in this) object.issuerUniqueID = bufferToHexCodes(this.issuerUniqueID, 0, this.issuerUniqueID.byteLength);
        if ("subjectUniqueID" in this) object.subjectUniqueID = bufferToHexCodes(this.subjectUniqueID, 0, this.subjectUniqueID.byteLength);
        if ("extensions" in this) object.extensions = Array.from(this.extensions, function (element) {
          return element.toJSON();
        });
        return object;
      }
    }, {
      key: "getPublicKey",
      value: function getPublicKey() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return getEngine().subtle.getPublicKey(this.subjectPublicKeyInfo, this.signatureAlgorithm, parameters);
      }
    }, {
      key: "getKeyHash",
      value: function getKeyHash() {
        var hashAlgorithm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHA-1";
        var crypto = getCrypto();
        if (typeof crypto === "undefined") return Promise.reject("Unable to create WebCrypto object");
        return crypto.digest({
          name: hashAlgorithm
        }, new Uint8Array(this.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex));
      }
    }, {
      key: "sign",
      value: function sign(privateKey) {
        var _this61 = this;

        var hashAlgorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "SHA-1";
        if (typeof privateKey === "undefined") return Promise.reject("Need to provide a private key for signing");
        var sequence = Promise.resolve();
        var parameters;
        var engine = getEngine();
        sequence = sequence.then(function () {
          return engine.subtle.getSignatureParameters(privateKey, hashAlgorithm);
        });
        sequence = sequence.then(function (result) {
          parameters = result.parameters;
          _this61.signature = result.signatureAlgorithm;
          _this61.signatureAlgorithm = result.signatureAlgorithm;
        });
        sequence = sequence.then(function () {
          _this61.tbs = _this61.encodeTBS().toBER(false);
        });
        sequence = sequence.then(function () {
          return engine.subtle.signWithPrivateKey(_this61.tbs, privateKey, parameters);
        });
        sequence = sequence.then(function (result) {
          _this61.signatureValue = new asn1_32({
            valueHex: result
          });
        });
        return sequence;
      }
    }, {
      key: "verify",
      value: function verify() {
        var issuerCertificate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var subjectPublicKeyInfo = {};
        if (issuerCertificate !== null) subjectPublicKeyInfo = issuerCertificate.subjectPublicKeyInfo;else {
          if (this.issuer.isEqual(this.subject)) subjectPublicKeyInfo = this.subjectPublicKeyInfo;
        }
        if (subjectPublicKeyInfo instanceof PublicKeyInfo === false) return Promise.reject("Please provide issuer certificate as a parameter");
        return getEngine().subtle.verifyWithPublicKey(this.tbs, this.signatureValue, subjectPublicKeyInfo, this.signatureAlgorithm);
      }
    }], [{
      key: "defaultValues",
      value: function defaultValues(memberName) {
        switch (memberName) {
          case "tbs":
            return new ArrayBuffer(0);

          case "version":
            return 0;

          case "serialNumber":
            return new asn1_31();

          case "signature":
            return new AlgorithmIdentifier();

          case "issuer":
            return new RelativeDistinguishedNames();

          case "notBefore":
            return new Time();

          case "notAfter":
            return new Time();

          case "subject":
            return new RelativeDistinguishedNames();

          case "subjectPublicKeyInfo":
            return new PublicKeyInfo();

          case "issuerUniqueID":
            return new ArrayBuffer(0);

          case "subjectUniqueID":
            return new ArrayBuffer(0);

          case "extensions":
            return [];

          case "signatureAlgorithm":
            return new AlgorithmIdentifier();

          case "signatureValue":
            return new asn1_32();

          default:
            throw new Error("Invalid member name for Certificate class: ".concat(memberName));
        }
      }
    }, {
      key: "schema",
      value: function schema() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var names = getParametersValue(parameters, "names", {});
        return new asn1_36({
          name: names.blockName || "",
          value: [tbsCertificate(names.tbsCertificate), AlgorithmIdentifier.schema(names.signatureAlgorithm || {
            names: {
              blockName: "signatureAlgorithm"
            }
          }), new asn1_32({
            name: names.signatureValue || "signatureValue"
          })]
        });
      }
    }]);

    return Certificate;
  }();

  var asn1$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromBER = fromBER;
    exports.compareSchema = compareSchema;
    exports.verifySchema = verifySchema;
    exports.fromJSON = fromJSON;
    exports.RawData = exports.Repeated = exports.Any = exports.Choice = exports.TIME = exports.Duration = exports.DateTime = exports.TimeOfDay = exports.DATE = exports.GeneralizedTime = exports.UTCTime = exports.CharacterString = exports.GeneralString = exports.VisibleString = exports.GraphicString = exports.IA5String = exports.VideotexString = exports.TeletexString = exports.PrintableString = exports.NumericString = exports.UniversalString = exports.BmpString = exports.RelativeObjectIdentifier = exports.Utf8String = exports.ObjectIdentifier = exports.Enumerated = exports.Integer = exports.BitString = exports.OctetString = exports.Null = exports.Set = exports.Sequence = exports.Boolean = exports.EndOfContent = exports.Constructed = exports.Primitive = exports.BaseBlock = exports.ValueBlock = exports.HexBlock = void 0;
    var powers2 = [new Uint8Array([1])];
    var digitsString = "0123456789";

    var LocalBaseBlock = function () {
      function LocalBaseBlock() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBaseBlock);

        this.blockLength = (0, utils.getParametersValue)(parameters, "blockLength", 0);
        this.error = (0, utils.getParametersValue)(parameters, "error", "");
        this.warnings = (0, utils.getParametersValue)(parameters, "warnings", []);
        if ("valueBeforeDecode" in parameters) this.valueBeforeDecode = parameters.valueBeforeDecode.slice(0);else this.valueBeforeDecode = new ArrayBuffer(0);
      }

      _createClass(LocalBaseBlock, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            blockName: this.constructor.blockName(),
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: (0, utils.bufferToHexCodes)(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
          };
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "baseBlock";
        }
      }]);

      return LocalBaseBlock;
    }();

    var HexBlock = function HexBlock(BaseClass) {
      return function (_BaseClass2) {
        _inherits(LocalHexBlockMixin, _BaseClass2);

        function LocalHexBlockMixin() {
          var _this62;

          var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, LocalHexBlockMixin);

          _this62 = _possibleConstructorReturn(this, _getPrototypeOf(LocalHexBlockMixin).call(this, parameters));
          _this62.isHexOnly = (0, utils.getParametersValue)(parameters, "isHexOnly", false);
          if ("valueHex" in parameters) _this62.valueHex = parameters.valueHex.slice(0);else _this62.valueHex = new ArrayBuffer(0);
          return _this62;
        }

        _createClass(LocalHexBlockMixin, [{
          key: "fromBER",
          value: function fromBER(inputBuffer, inputOffset, inputLength) {
            if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
            var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

            if (intBuffer.length === 0) {
              this.warnings.push("Zero buffer length");
              return inputOffset;
            }

            this.valueHex = inputBuffer.slice(inputOffset, inputOffset + inputLength);
            this.blockLength = inputLength;
            return inputOffset + inputLength;
          }
        }, {
          key: "toBER",
          value: function toBER() {
            var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.isHexOnly !== true) {
              this.error = "Flag \"isHexOnly\" is not set, abort";
              return new ArrayBuffer(0);
            }

            if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
            return this.valueHex.slice(0);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var object = {};

            try {
              object = _get(_getPrototypeOf(LocalHexBlockMixin.prototype), "toJSON", this).call(this);
            } catch (ex) {}

            object.blockName = this.constructor.blockName();
            object.isHexOnly = this.isHexOnly;
            object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
            return object;
          }
        }], [{
          key: "blockName",
          value: function blockName() {
            return "hexBlock";
          }
        }]);

        return LocalHexBlockMixin;
      }(BaseClass);
    };

    exports.HexBlock = HexBlock;

    var LocalIdentificationBlock = function (_HexBlock11) {
      _inherits(LocalIdentificationBlock, _HexBlock11);

      function LocalIdentificationBlock() {
        var _this63;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalIdentificationBlock);

        _this63 = _possibleConstructorReturn(this, _getPrototypeOf(LocalIdentificationBlock).call(this));

        if ("idBlock" in parameters) {
          _this63.isHexOnly = (0, utils.getParametersValue)(parameters.idBlock, "isHexOnly", false);
          _this63.valueHex = (0, utils.getParametersValue)(parameters.idBlock, "valueHex", new ArrayBuffer(0));
          _this63.tagClass = (0, utils.getParametersValue)(parameters.idBlock, "tagClass", -1);
          _this63.tagNumber = (0, utils.getParametersValue)(parameters.idBlock, "tagNumber", -1);
          _this63.isConstructed = (0, utils.getParametersValue)(parameters.idBlock, "isConstructed", false);
        } else {
          _this63.tagClass = -1;
          _this63.tagNumber = -1;
          _this63.isConstructed = false;
        }

        return _this63;
      }

      _createClass(LocalIdentificationBlock, [{
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var firstOctet = 0;
          var retBuf;
          var retView;

          switch (this.tagClass) {
            case 1:
              firstOctet |= 0x00;
              break;

            case 2:
              firstOctet |= 0x40;
              break;

            case 3:
              firstOctet |= 0x80;
              break;

            case 4:
              firstOctet |= 0xC0;
              break;

            default:
              this.error = "Unknown tag class";
              return new ArrayBuffer(0);
          }

          if (this.isConstructed) firstOctet |= 0x20;

          if (this.tagNumber < 31 && !this.isHexOnly) {
            retBuf = new ArrayBuffer(1);
            retView = new Uint8Array(retBuf);

            if (!sizeOnly) {
              var number = this.tagNumber;
              number &= 0x1F;
              firstOctet |= number;
              retView[0] = firstOctet;
            }

            return retBuf;
          }

          if (this.isHexOnly === false) {
            var encodedBuf = (0, utils.utilToBase)(this.tagNumber, 7);
            var encodedView = new Uint8Array(encodedBuf);
            var size = encodedBuf.byteLength;
            retBuf = new ArrayBuffer(size + 1);
            retView = new Uint8Array(retBuf);
            retView[0] = firstOctet | 0x1F;

            if (!sizeOnly) {
              for (var i = 0; i < size - 1; i++) {
                retView[i + 1] = encodedView[i] | 0x80;
              }

              retView[size] = encodedView[size - 1];
            }

            return retBuf;
          }

          retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
          retView = new Uint8Array(retBuf);
          retView[0] = firstOctet | 0x1F;

          if (sizeOnly === false) {
            var curView = new Uint8Array(this.valueHex);

            for (var _i35 = 0; _i35 < curView.length - 1; _i35++) {
              retView[_i35 + 1] = curView[_i35] | 0x80;
            }

            retView[this.valueHex.byteLength] = curView[curView.length - 1];
          }

          return retBuf;
        }
      }, {
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
          }

          var tagClassMask = intBuffer[0] & 0xC0;

          switch (tagClassMask) {
            case 0x00:
              this.tagClass = 1;
              break;

            case 0x40:
              this.tagClass = 2;
              break;

            case 0x80:
              this.tagClass = 3;
              break;

            case 0xC0:
              this.tagClass = 4;
              break;

            default:
              this.error = "Unknown tag class";
              return -1;
          }

          this.isConstructed = (intBuffer[0] & 0x20) === 0x20;
          this.isHexOnly = false;
          var tagNumberMask = intBuffer[0] & 0x1F;

          if (tagNumberMask !== 0x1F) {
            this.tagNumber = tagNumberMask;
            this.blockLength = 1;
          } else {
              var count = 1;
              this.valueHex = new ArrayBuffer(255);
              var tagNumberBufferMaxLength = 255;
              var intTagNumberBuffer = new Uint8Array(this.valueHex);

              while (intBuffer[count] & 0x80) {
                intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
                count++;

                if (count >= intBuffer.length) {
                  this.error = "End of input reached before message was fully decoded";
                  return -1;
                }

                if (count === tagNumberBufferMaxLength) {
                  tagNumberBufferMaxLength += 255;

                  var _tempBuffer2 = new ArrayBuffer(tagNumberBufferMaxLength);

                  var _tempBufferView2 = new Uint8Array(_tempBuffer2);

                  for (var i = 0; i < intTagNumberBuffer.length; i++) {
                    _tempBufferView2[i] = intTagNumberBuffer[i];
                  }

                  this.valueHex = new ArrayBuffer(tagNumberBufferMaxLength);
                  intTagNumberBuffer = new Uint8Array(this.valueHex);
                }
              }

              this.blockLength = count + 1;
              intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
              var tempBuffer = new ArrayBuffer(count);
              var tempBufferView = new Uint8Array(tempBuffer);

              for (var _i36 = 0; _i36 < count; _i36++) {
                tempBufferView[_i36] = intTagNumberBuffer[_i36];
              }

              this.valueHex = new ArrayBuffer(count);
              intTagNumberBuffer = new Uint8Array(this.valueHex);
              intTagNumberBuffer.set(tempBufferView);
              if (this.blockLength <= 9) this.tagNumber = (0, utils.utilFromBase)(intTagNumberBuffer, 7);else {
                this.isHexOnly = true;
                this.warnings.push("Tag too long, represented as hex-coded");
              }
            }

          if (this.tagClass === 1 && this.isConstructed) {
            switch (this.tagNumber) {
              case 1:
              case 2:
              case 5:
              case 6:
              case 9:
              case 13:
              case 14:
              case 23:
              case 24:
              case 31:
              case 32:
              case 33:
              case 34:
                this.error = "Constructed encoding used for primitive type";
                return -1;
            }
          }

          return inputOffset + this.blockLength;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalIdentificationBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.blockName = this.constructor.blockName();
          object.tagClass = this.tagClass;
          object.tagNumber = this.tagNumber;
          object.isConstructed = this.isConstructed;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "identificationBlock";
        }
      }]);

      return LocalIdentificationBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalLengthBlock = function (_LocalBaseBlock4) {
      _inherits(LocalLengthBlock, _LocalBaseBlock4);

      function LocalLengthBlock() {
        var _this64;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalLengthBlock);

        _this64 = _possibleConstructorReturn(this, _getPrototypeOf(LocalLengthBlock).call(this));

        if ("lenBlock" in parameters) {
          _this64.isIndefiniteForm = (0, utils.getParametersValue)(parameters.lenBlock, "isIndefiniteForm", false);
          _this64.longFormUsed = (0, utils.getParametersValue)(parameters.lenBlock, "longFormUsed", false);
          _this64.length = (0, utils.getParametersValue)(parameters.lenBlock, "length", 0);
        } else {
          _this64.isIndefiniteForm = false;
          _this64.longFormUsed = false;
          _this64.length = 0;
        }

        return _this64;
      }

      _createClass(LocalLengthBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
          }

          if (intBuffer[0] === 0xFF) {
            this.error = "Length block 0xFF is reserved by standard";
            return -1;
          }

          this.isIndefiniteForm = intBuffer[0] === 0x80;

          if (this.isIndefiniteForm === true) {
            this.blockLength = 1;
            return inputOffset + this.blockLength;
          }

          this.longFormUsed = !!(intBuffer[0] & 0x80);

          if (this.longFormUsed === false) {
            this.length = intBuffer[0];
            this.blockLength = 1;
            return inputOffset + this.blockLength;
          }

          var count = intBuffer[0] & 0x7F;

          if (count > 8) {
              this.error = "Too big integer";
              return -1;
            }

          if (count + 1 > intBuffer.length) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          }

          var lengthBufferView = new Uint8Array(count);

          for (var i = 0; i < count; i++) {
            lengthBufferView[i] = intBuffer[i + 1];
          }

          if (lengthBufferView[count - 1] === 0x00) this.warnings.push("Needlessly long encoded length");
          this.length = (0, utils.utilFromBase)(lengthBufferView, 8);
          if (this.longFormUsed && this.length <= 127) this.warnings.push("Unneccesary usage of long length form");
          this.blockLength = count + 1;
          return inputOffset + this.blockLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var retView;
          if (this.length > 127) this.longFormUsed = true;

          if (this.isIndefiniteForm) {
            retBuf = new ArrayBuffer(1);

            if (sizeOnly === false) {
              retView = new Uint8Array(retBuf);
              retView[0] = 0x80;
            }

            return retBuf;
          }

          if (this.longFormUsed === true) {
            var encodedBuf = (0, utils.utilToBase)(this.length, 8);

            if (encodedBuf.byteLength > 127) {
              this.error = "Too big length";
              return new ArrayBuffer(0);
            }

            retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
            if (sizeOnly === true) return retBuf;
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            retView[0] = encodedBuf.byteLength | 0x80;

            for (var i = 0; i < encodedBuf.byteLength; i++) {
              retView[i + 1] = encodedView[i];
            }

            return retBuf;
          }

          retBuf = new ArrayBuffer(1);

          if (sizeOnly === false) {
            retView = new Uint8Array(retBuf);
            retView[0] = this.length;
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalLengthBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.blockName = this.constructor.blockName();
          object.isIndefiniteForm = this.isIndefiniteForm;
          object.longFormUsed = this.longFormUsed;
          object.length = this.length;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "lengthBlock";
        }
      }]);

      return LocalLengthBlock;
    }(LocalBaseBlock);

    var ValueBlock = function (_LocalBaseBlock5) {
      _inherits(ValueBlock, _LocalBaseBlock5);

      function ValueBlock() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ValueBlock);

        return _possibleConstructorReturn(this, _getPrototypeOf(ValueBlock).call(this, parameters));
      }

      _createClass(ValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        }
      }, {
        key: "toBER",
        value: function toBER() {
          throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "valueBlock";
        }
      }]);

      return ValueBlock;
    }(LocalBaseBlock);

    exports.ValueBlock = ValueBlock;

    var BaseBlock = function (_LocalBaseBlock6) {
      _inherits(BaseBlock, _LocalBaseBlock6);

      function BaseBlock() {
        var _this65;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var valueBlockType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ValueBlock;

        _classCallCheck(this, BaseBlock);

        _this65 = _possibleConstructorReturn(this, _getPrototypeOf(BaseBlock).call(this, parameters));
        if ("name" in parameters) _this65.name = parameters.name;
        if ("optional" in parameters) _this65.optional = parameters.optional;
        if ("primitiveSchema" in parameters) _this65.primitiveSchema = parameters.primitiveSchema;
        _this65.idBlock = new LocalIdentificationBlock(parameters);
        _this65.lenBlock = new LocalLengthBlock(parameters);
        _this65.valueBlock = new valueBlockType(parameters);
        return _this65;
      }

      _createClass(BaseBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var idBlockBuf = this.idBlock.toBER(sizeOnly);
          var valueBlockSizeBuf = this.valueBlock.toBER(true);
          this.lenBlock.length = valueBlockSizeBuf.byteLength;
          var lenBlockBuf = this.lenBlock.toBER(sizeOnly);
          retBuf = (0, utils.utilConcatBuf)(idBlockBuf, lenBlockBuf);
          var valueBlockBuf;
          if (sizeOnly === false) valueBlockBuf = this.valueBlock.toBER(sizeOnly);else valueBlockBuf = new ArrayBuffer(this.lenBlock.length);
          retBuf = (0, utils.utilConcatBuf)(retBuf, valueBlockBuf);

          if (this.lenBlock.isIndefiniteForm === true) {
            var indefBuf = new ArrayBuffer(2);

            if (sizeOnly === false) {
              var indefView = new Uint8Array(indefBuf);
              indefView[0] = 0x00;
              indefView[1] = 0x00;
            }

            retBuf = (0, utils.utilConcatBuf)(retBuf, indefBuf);
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(BaseBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.idBlock = this.idBlock.toJSON();
          object.lenBlock = this.lenBlock.toJSON();
          object.valueBlock = this.valueBlock.toJSON();
          if ("name" in this) object.name = this.name;
          if ("optional" in this) object.optional = this.optional;
          if ("primitiveSchema" in this) object.primitiveSchema = this.primitiveSchema.toJSON();
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BaseBlock";
        }
      }]);

      return BaseBlock;
    }(LocalBaseBlock);

    exports.BaseBlock = BaseBlock;

    var LocalPrimitiveValueBlock = function (_ValueBlock7) {
      _inherits(LocalPrimitiveValueBlock, _ValueBlock7);

      function LocalPrimitiveValueBlock() {
        var _this66;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalPrimitiveValueBlock);

        _this66 = _possibleConstructorReturn(this, _getPrototypeOf(LocalPrimitiveValueBlock).call(this, parameters));
        if ("valueHex" in parameters) _this66.valueHex = parameters.valueHex.slice(0);else _this66.valueHex = new ArrayBuffer(0);
        _this66.isHexOnly = (0, utils.getParametersValue)(parameters, "isHexOnly", true);
        return _this66;
      }

      _createClass(LocalPrimitiveValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
          }

          this.valueHex = new ArrayBuffer(intBuffer.length);
          var valueHexView = new Uint8Array(this.valueHex);

          for (var i = 0; i < intBuffer.length; i++) {
            valueHexView[i] = intBuffer[i];
          }

          this.blockLength = inputLength;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.valueHex.slice(0);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalPrimitiveValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          object.isHexOnly = this.isHexOnly;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "PrimitiveValueBlock";
        }
      }]);

      return LocalPrimitiveValueBlock;
    }(ValueBlock);

    var Primitive = function (_BaseBlock15) {
      _inherits(Primitive, _BaseBlock15);

      function Primitive() {
        var _this67;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Primitive);

        _this67 = _possibleConstructorReturn(this, _getPrototypeOf(Primitive).call(this, parameters, LocalPrimitiveValueBlock));
        _this67.idBlock.isConstructed = false;
        return _this67;
      }

      _createClass(Primitive, null, [{
        key: "blockName",
        value: function blockName() {
          return "PRIMITIVE";
        }
      }]);

      return Primitive;
    }(BaseBlock);

    exports.Primitive = Primitive;

    var LocalConstructedValueBlock = function (_ValueBlock8) {
      _inherits(LocalConstructedValueBlock, _ValueBlock8);

      function LocalConstructedValueBlock() {
        var _this68;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalConstructedValueBlock);

        _this68 = _possibleConstructorReturn(this, _getPrototypeOf(LocalConstructedValueBlock).call(this, parameters));
        _this68.value = (0, utils.getParametersValue)(parameters, "value", []);
        _this68.isIndefiniteForm = (0, utils.getParametersValue)(parameters, "isIndefiniteForm", false);
        return _this68;
      }

      _createClass(LocalConstructedValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var initialOffset = inputOffset;
          var initialLength = inputLength;
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

          if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
          }

          function checkLen(indefiniteLength, length) {
            if (indefiniteLength === true) return 1;
            return length;
          }

          var currentOffset = inputOffset;

          while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
            var returnObject = LocalFromBER(inputBuffer, currentOffset, inputLength);

            if (returnObject.offset === -1) {
              this.error = returnObject.result.error;
              this.warnings.concat(returnObject.result.warnings);
              return -1;
            }

            currentOffset = returnObject.offset;
            this.blockLength += returnObject.result.blockLength;
            inputLength -= returnObject.result.blockLength;
            this.value.push(returnObject.result);
            if (this.isIndefiniteForm === true && returnObject.result.constructor.blockName() === EndOfContent.blockName()) break;
          }

          if (this.isIndefiniteForm === true) {
            if (this.value[this.value.length - 1].constructor.blockName() === EndOfContent.blockName()) this.value.pop();else this.warnings.push("No EndOfContent block encoded");
          }

          this.valueBeforeDecode = inputBuffer.slice(initialOffset, initialOffset + initialLength);
          return currentOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(0);

          for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);
            retBuf = (0, utils.utilConcatBuf)(retBuf, valueBuf);
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalConstructedValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.isIndefiniteForm = this.isIndefiniteForm;
          object.value = [];

          for (var i = 0; i < this.value.length; i++) {
            object.value.push(this.value[i].toJSON());
          }

          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "ConstructedValueBlock";
        }
      }]);

      return LocalConstructedValueBlock;
    }(ValueBlock);

    var Constructed = function (_BaseBlock16) {
      _inherits(Constructed, _BaseBlock16);

      function Constructed() {
        var _this69;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Constructed);

        _this69 = _possibleConstructorReturn(this, _getPrototypeOf(Constructed).call(this, parameters, LocalConstructedValueBlock));
        _this69.idBlock.isConstructed = true;
        return _this69;
      }

      _createClass(Constructed, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "CONSTRUCTED";
        }
      }]);

      return Constructed;
    }(BaseBlock);

    exports.Constructed = Constructed;

    var LocalEndOfContentValueBlock = function (_ValueBlock9) {
      _inherits(LocalEndOfContentValueBlock, _ValueBlock9);

      function LocalEndOfContentValueBlock() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalEndOfContentValueBlock);

        return _possibleConstructorReturn(this, _getPrototypeOf(LocalEndOfContentValueBlock).call(this, parameters));
      }

      _createClass(LocalEndOfContentValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          return inputOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return new ArrayBuffer(0);
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "EndOfContentValueBlock";
        }
      }]);

      return LocalEndOfContentValueBlock;
    }(ValueBlock);

    var EndOfContent = function (_BaseBlock17) {
      _inherits(EndOfContent, _BaseBlock17);

      function EndOfContent() {
        var _this70;

        var paramaters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, EndOfContent);

        _this70 = _possibleConstructorReturn(this, _getPrototypeOf(EndOfContent).call(this, paramaters, LocalEndOfContentValueBlock));
        _this70.idBlock.tagClass = 1;
        _this70.idBlock.tagNumber = 0;
        return _this70;
      }

      _createClass(EndOfContent, null, [{
        key: "blockName",
        value: function blockName() {
          return "EndOfContent";
        }
      }]);

      return EndOfContent;
    }(BaseBlock);

    exports.EndOfContent = EndOfContent;

    var LocalBooleanValueBlock = function (_ValueBlock10) {
      _inherits(LocalBooleanValueBlock, _ValueBlock10);

      function LocalBooleanValueBlock() {
        var _this71;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBooleanValueBlock);

        _this71 = _possibleConstructorReturn(this, _getPrototypeOf(LocalBooleanValueBlock).call(this, parameters));
        _this71.value = (0, utils.getParametersValue)(parameters, "value", false);
        _this71.isHexOnly = (0, utils.getParametersValue)(parameters, "isHexOnly", false);
        if ("valueHex" in parameters) _this71.valueHex = parameters.valueHex.slice(0);else {
          _this71.valueHex = new ArrayBuffer(1);

          if (_this71.value === true) {
            var view = new Uint8Array(_this71.valueHex);
            view[0] = 0xFF;
          }
        }
        return _this71;
      }

      _createClass(LocalBooleanValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          if (inputLength > 1) this.warnings.push("Boolean value encoded in more then 1 octet");
          this.isHexOnly = true;
          this.valueHex = new ArrayBuffer(intBuffer.length);
          var view = new Uint8Array(this.valueHex);

          for (var i = 0; i < intBuffer.length; i++) {
            view[i] = intBuffer[i];
          }

          if (utils.utilDecodeTC.call(this) !== 0) this.value = true;else this.value = false;
          this.blockLength = inputLength;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.valueHex;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalBooleanValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          object.isHexOnly = this.isHexOnly;
          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BooleanValueBlock";
        }
      }]);

      return LocalBooleanValueBlock;
    }(ValueBlock);

    var Boolean = function (_BaseBlock18) {
      _inherits(Boolean, _BaseBlock18);

      function Boolean() {
        var _this72;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Boolean);

        _this72 = _possibleConstructorReturn(this, _getPrototypeOf(Boolean).call(this, parameters, LocalBooleanValueBlock));
        _this72.idBlock.tagClass = 1;
        _this72.idBlock.tagNumber = 1;
        return _this72;
      }

      _createClass(Boolean, null, [{
        key: "blockName",
        value: function blockName() {
          return "Boolean";
        }
      }]);

      return Boolean;
    }(BaseBlock);

    exports.Boolean = Boolean;

    var Sequence = function (_Constructed3) {
      _inherits(Sequence, _Constructed3);

      function Sequence() {
        var _this73;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Sequence);

        _this73 = _possibleConstructorReturn(this, _getPrototypeOf(Sequence).call(this, parameters));
        _this73.idBlock.tagClass = 1;
        _this73.idBlock.tagNumber = 16;
        return _this73;
      }

      _createClass(Sequence, null, [{
        key: "blockName",
        value: function blockName() {
          return "Sequence";
        }
      }]);

      return Sequence;
    }(Constructed);

    exports.Sequence = Sequence;

    var Set = function (_Constructed4) {
      _inherits(Set, _Constructed4);

      function Set() {
        var _this74;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Set);

        _this74 = _possibleConstructorReturn(this, _getPrototypeOf(Set).call(this, parameters));
        _this74.idBlock.tagClass = 1;
        _this74.idBlock.tagNumber = 17;
        return _this74;
      }

      _createClass(Set, null, [{
        key: "blockName",
        value: function blockName() {
          return "Set";
        }
      }]);

      return Set;
    }(Constructed);

    exports.Set = Set;

    var Null = function (_BaseBlock19) {
      _inherits(Null, _BaseBlock19);

      function Null() {
        var _this75;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Null);

        _this75 = _possibleConstructorReturn(this, _getPrototypeOf(Null).call(this, parameters, LocalBaseBlock));
        _this75.idBlock.tagClass = 1;
        _this75.idBlock.tagNumber = 5;
        return _this75;
      }

      _createClass(Null, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (this.lenBlock.length > 0) this.warnings.push("Non-zero length of value block for Null type");
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          this.blockLength += inputLength;

          if (inputOffset + inputLength > inputBuffer.byteLength) {
            this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
            return -1;
          }

          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(2);
          if (sizeOnly === true) return retBuf;
          var retView = new Uint8Array(retBuf);
          retView[0] = 0x05;
          retView[1] = 0x00;
          return retBuf;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Null";
        }
      }]);

      return Null;
    }(BaseBlock);

    exports.Null = Null;

    var LocalOctetStringValueBlock = function (_HexBlock12) {
      _inherits(LocalOctetStringValueBlock, _HexBlock12);

      function LocalOctetStringValueBlock() {
        var _this76;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalOctetStringValueBlock);

        _this76 = _possibleConstructorReturn(this, _getPrototypeOf(LocalOctetStringValueBlock).call(this, parameters));
        _this76.isConstructed = (0, utils.getParametersValue)(parameters, "isConstructed", false);
        return _this76;
      }

      _createClass(LocalOctetStringValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = 0;

          if (this.isConstructed === true) {
            this.isHexOnly = false;
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1) return resultOffset;

            for (var i = 0; i < this.value.length; i++) {
              var currentBlockName = this.value[i].constructor.blockName();

              if (currentBlockName === EndOfContent.blockName()) {
                if (this.isIndefiniteForm === true) break;else {
                  this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
                  return -1;
                }
              }

              if (currentBlockName !== OctetString.blockName()) {
                this.error = "OCTET STRING may consists of OCTET STRINGs only";
                return -1;
              }
            }
          } else {
            this.isHexOnly = true;
            resultOffset = _get(_getPrototypeOf(LocalOctetStringValueBlock.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);
            this.blockLength = inputLength;
          }

          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          if (this.isConstructed === true) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
          var retBuf = new ArrayBuffer(this.valueHex.byteLength);
          if (sizeOnly === true) return retBuf;
          if (this.valueHex.byteLength === 0) return retBuf;
          retBuf = this.valueHex.slice(0);
          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalOctetStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.isConstructed = this.isConstructed;
          object.isHexOnly = this.isHexOnly;
          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "OctetStringValueBlock";
        }
      }]);

      return LocalOctetStringValueBlock;
    }(HexBlock(LocalConstructedValueBlock));

    var OctetString = function (_BaseBlock20) {
      _inherits(OctetString, _BaseBlock20);

      function OctetString() {
        var _this77;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OctetString);

        _this77 = _possibleConstructorReturn(this, _getPrototypeOf(OctetString).call(this, parameters, LocalOctetStringValueBlock));
        _this77.idBlock.tagClass = 1;
        _this77.idBlock.tagNumber = 4;
        return _this77;
      }

      _createClass(OctetString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          this.valueBlock.isConstructed = this.idBlock.isConstructed;
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;

          if (inputLength === 0) {
            if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
            if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
            return inputOffset;
          }

          return _get(_getPrototypeOf(OctetString.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);
        }
      }, {
        key: "isEqual",
        value: function isEqual(octetString) {
          if (octetString instanceof OctetString === false) return false;
          if (JSON.stringify(this) !== JSON.stringify(octetString)) return false;
          return true;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "OctetString";
        }
      }]);

      return OctetString;
    }(BaseBlock);

    exports.OctetString = OctetString;

    var LocalBitStringValueBlock = function (_HexBlock13) {
      _inherits(LocalBitStringValueBlock, _HexBlock13);

      function LocalBitStringValueBlock() {
        var _this78;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBitStringValueBlock);

        _this78 = _possibleConstructorReturn(this, _getPrototypeOf(LocalBitStringValueBlock).call(this, parameters));
        _this78.unusedBits = (0, utils.getParametersValue)(parameters, "unusedBits", 0);
        _this78.isConstructed = (0, utils.getParametersValue)(parameters, "isConstructed", false);
        _this78.blockLength = _this78.valueHex.byteLength;
        return _this78;
      }

      _createClass(LocalBitStringValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          var resultOffset = -1;

          if (this.isConstructed === true) {
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1) return resultOffset;

            for (var i = 0; i < this.value.length; i++) {
              var currentBlockName = this.value[i].constructor.blockName();

              if (currentBlockName === EndOfContent.blockName()) {
                if (this.isIndefiniteForm === true) break;else {
                  this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
                  return -1;
                }
              }

              if (currentBlockName !== BitString.blockName()) {
                this.error = "BIT STRING may consists of BIT STRINGs only";
                return -1;
              }

              if (this.unusedBits > 0 && this.value[i].valueBlock.unusedBits > 0) {
                this.error = "Usign of \"unused bits\" inside constructive BIT STRING allowed for least one only";
                return -1;
              }

              this.unusedBits = this.value[i].valueBlock.unusedBits;

              if (this.unusedBits > 7) {
                this.error = "Unused bits for BitString must be in range 0-7";
                return -1;
              }
            }

            return resultOffset;
          }

          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          this.unusedBits = intBuffer[0];

          if (this.unusedBits > 7) {
            this.error = "Unused bits for BitString must be in range 0-7";
            return -1;
          }

          this.valueHex = new ArrayBuffer(intBuffer.length - 1);
          var view = new Uint8Array(this.valueHex);

          for (var _i37 = 0; _i37 < inputLength - 1; _i37++) {
            view[_i37] = intBuffer[_i37 + 1];
          }

          this.blockLength = intBuffer.length;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          if (this.isConstructed === true) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
          if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength + 1);
          if (this.valueHex.byteLength === 0) return new ArrayBuffer(0);
          var curView = new Uint8Array(this.valueHex);
          var retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
          var retView = new Uint8Array(retBuf);
          retView[0] = this.unusedBits;

          for (var i = 0; i < this.valueHex.byteLength; i++) {
            retView[i + 1] = curView[i];
          }

          return retBuf;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalBitStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.unusedBits = this.unusedBits;
          object.isConstructed = this.isConstructed;
          object.isHexOnly = this.isHexOnly;
          object.valueHex = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BitStringValueBlock";
        }
      }]);

      return LocalBitStringValueBlock;
    }(HexBlock(LocalConstructedValueBlock));

    var BitString = function (_BaseBlock21) {
      _inherits(BitString, _BaseBlock21);

      function BitString() {
        var _this79;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BitString);

        _this79 = _possibleConstructorReturn(this, _getPrototypeOf(BitString).call(this, parameters, LocalBitStringValueBlock));
        _this79.idBlock.tagClass = 1;
        _this79.idBlock.tagNumber = 3;
        return _this79;
      }

      _createClass(BitString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          this.valueBlock.isConstructed = this.idBlock.isConstructed;
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
          return _get(_getPrototypeOf(BitString.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);
        }
      }, {
        key: "isEqual",
        value: function isEqual(bitString) {
          if (bitString instanceof BitString === false) return false;
          if (JSON.stringify(this) !== JSON.stringify(bitString)) return false;
          return true;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BitString";
        }
      }]);

      return BitString;
    }(BaseBlock);

    exports.BitString = BitString;

    var LocalIntegerValueBlock = function (_HexBlock14) {
      _inherits(LocalIntegerValueBlock, _HexBlock14);

      function LocalIntegerValueBlock() {
        var _this80;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalIntegerValueBlock);

        _this80 = _possibleConstructorReturn(this, _getPrototypeOf(LocalIntegerValueBlock).call(this, parameters));
        if ("value" in parameters) _this80.valueDec = parameters.value;
        return _this80;
      }

      _createClass(LocalIntegerValueBlock, [{
        key: "fromDER",
        value: function fromDER(inputBuffer, inputOffset, inputLength) {
          var expectedLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var offset = this.fromBER(inputBuffer, inputOffset, inputLength);
          if (offset === -1) return offset;
          var view = new Uint8Array(this._valueHex);

          if (view[0] === 0x00 && (view[1] & 0x80) !== 0) {
            var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength - 1);
            var updatedView = new Uint8Array(updatedValueHex);
            updatedView.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));
            this._valueHex = updatedValueHex.slice(0);
          } else {
            if (expectedLength !== 0) {
              if (this._valueHex.byteLength < expectedLength) {
                if (expectedLength - this._valueHex.byteLength > 1) expectedLength = this._valueHex.byteLength + 1;

                var _updatedValueHex3 = new ArrayBuffer(expectedLength);

                var _updatedView3 = new Uint8Array(_updatedValueHex3);

                _updatedView3.set(view, expectedLength - this._valueHex.byteLength);

                this._valueHex = _updatedValueHex3.slice(0);
              }
            }
          }

          return offset;
        }
      }, {
        key: "toDER",
        value: function toDER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var view = new Uint8Array(this._valueHex);

          switch (true) {
            case (view[0] & 0x80) !== 0:
              {
                var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength + 1);
                var updatedView = new Uint8Array(updatedValueHex);
                updatedView[0] = 0x00;
                updatedView.set(view, 1);
                this._valueHex = updatedValueHex.slice(0);
              }
              break;

            case view[0] === 0x00 && (view[1] & 0x80) === 0:
              {
                var _updatedValueHex4 = new ArrayBuffer(this._valueHex.byteLength - 1);

                var _updatedView4 = new Uint8Array(_updatedValueHex4);

                _updatedView4.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));

                this._valueHex = _updatedValueHex4.slice(0);
              }
              break;
          }

          return this.toBER(sizeOnly);
        }
      }, {
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = _get(_getPrototypeOf(LocalIntegerValueBlock.prototype), "fromBER", this).call(this, inputBuffer, inputOffset, inputLength);

          if (resultOffset === -1) return resultOffset;
          this.blockLength = inputLength;
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.valueHex.slice(0);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalIntegerValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueDec = this.valueDec;
          return object;
        }
      }, {
        key: "toString",
        value: function toString() {
          function viewAdd(first, second) {
            var c = new Uint8Array([0]);
            var firstView = new Uint8Array(first);
            var secondView = new Uint8Array(second);
            var firstViewCopy = firstView.slice(0);
            var firstViewCopyLength = firstViewCopy.length - 1;
            var secondViewCopy = secondView.slice(0);
            var secondViewCopyLength = secondViewCopy.length - 1;
            var value = 0;
            var max = secondViewCopyLength < firstViewCopyLength ? firstViewCopyLength : secondViewCopyLength;
            var counter = 0;

            for (var i = max; i >= 0; i--, counter++) {
              switch (true) {
                case counter < secondViewCopy.length:
                  value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
                  break;

                default:
                  value = firstViewCopy[firstViewCopyLength - counter] + c[0];
              }

              c[0] = value / 10;

              switch (true) {
                case counter >= firstViewCopy.length:
                  firstViewCopy = (0, utils.utilConcatView)(new Uint8Array([value % 10]), firstViewCopy);
                  break;

                default:
                  firstViewCopy[firstViewCopyLength - counter] = value % 10;
              }
            }

            if (c[0] > 0) firstViewCopy = (0, utils.utilConcatView)(c, firstViewCopy);
            return firstViewCopy.slice(0);
          }

          function power2(n) {
            if (n >= powers2.length) {
              for (var p = powers2.length; p <= n; p++) {
                var c = new Uint8Array([0]);

                var _digits2 = powers2[p - 1].slice(0);

                for (var i = _digits2.length - 1; i >= 0; i--) {
                  var newValue = new Uint8Array([(_digits2[i] << 1) + c[0]]);
                  c[0] = newValue[0] / 10;
                  _digits2[i] = newValue[0] % 10;
                }

                if (c[0] > 0) _digits2 = (0, utils.utilConcatView)(c, _digits2);
                powers2.push(_digits2);
              }
            }

            return powers2[n];
          }

          function viewSub(first, second) {
            var b = 0;
            var firstView = new Uint8Array(first);
            var secondView = new Uint8Array(second);
            var firstViewCopy = firstView.slice(0);
            var firstViewCopyLength = firstViewCopy.length - 1;
            var secondViewCopy = secondView.slice(0);
            var secondViewCopyLength = secondViewCopy.length - 1;
            var value;
            var counter = 0;

            for (var i = secondViewCopyLength; i >= 0; i--, counter++) {
              value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;

              switch (true) {
                case value < 0:
                  b = 1;
                  firstViewCopy[firstViewCopyLength - counter] = value + 10;
                  break;

                default:
                  b = 0;
                  firstViewCopy[firstViewCopyLength - counter] = value;
              }
            }

            if (b > 0) {
              for (var _i38 = firstViewCopyLength - secondViewCopyLength + 1; _i38 >= 0; _i38--, counter++) {
                value = firstViewCopy[firstViewCopyLength - counter] - b;

                if (value < 0) {
                  b = 1;
                  firstViewCopy[firstViewCopyLength - counter] = value + 10;
                } else {
                  b = 0;
                  firstViewCopy[firstViewCopyLength - counter] = value;
                  break;
                }
              }
            }

            return firstViewCopy.slice();
          }

          var firstBit = this._valueHex.byteLength * 8 - 1;
          var digits = new Uint8Array(this._valueHex.byteLength * 8 / 3);
          var bitNumber = 0;
          var currentByte;
          var asn1View = new Uint8Array(this._valueHex);
          var result = "";
          var flag = false;

          for (var byteNumber = this._valueHex.byteLength - 1; byteNumber >= 0; byteNumber--) {
            currentByte = asn1View[byteNumber];

            for (var i = 0; i < 8; i++) {
              if ((currentByte & 1) === 1) {
                switch (bitNumber) {
                  case firstBit:
                    digits = viewSub(power2(bitNumber), digits);
                    result = "-";
                    break;

                  default:
                    digits = viewAdd(digits, power2(bitNumber));
                }
              }

              bitNumber++;
              currentByte >>= 1;
            }
          }

          for (var _i39 = 0; _i39 < digits.length; _i39++) {
            if (digits[_i39]) flag = true;
            if (flag) result += digitsString.charAt(digits[_i39]);
          }

          if (flag === false) result += digitsString.charAt(0);
          return result;
        }
      }, {
        key: "valueHex",
        set: function set(_value) {
          this._valueHex = _value.slice(0);

          if (_value.byteLength >= 4) {
            this.warnings.push("Too big Integer for decoding, hex only");
            this.isHexOnly = true;
            this._valueDec = 0;
          } else {
            this.isHexOnly = false;
            if (_value.byteLength > 0) this._valueDec = utils.utilDecodeTC.call(this);
          }
        },
        get: function get() {
          return this._valueHex;
        }
      }, {
        key: "valueDec",
        set: function set(_value) {
          this._valueDec = _value;
          this.isHexOnly = false;
          this._valueHex = (0, utils.utilEncodeTC)(_value);
        },
        get: function get() {
          return this._valueDec;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "IntegerValueBlock";
        }
      }]);

      return LocalIntegerValueBlock;
    }(HexBlock(ValueBlock));

    var Integer = function (_BaseBlock22) {
      _inherits(Integer, _BaseBlock22);

      function Integer() {
        var _this81;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Integer);

        _this81 = _possibleConstructorReturn(this, _getPrototypeOf(Integer).call(this, parameters, LocalIntegerValueBlock));
        _this81.idBlock.tagClass = 1;
        _this81.idBlock.tagNumber = 2;
        return _this81;
      }

      _createClass(Integer, [{
        key: "isEqual",
        value: function isEqual(otherValue) {
          if (otherValue instanceof Integer) {
            if (this.valueBlock.isHexOnly && otherValue.valueBlock.isHexOnly) return (0, utils.isEqualBuffer)(this.valueBlock.valueHex, otherValue.valueBlock.valueHex);
            if (this.valueBlock.isHexOnly === otherValue.valueBlock.isHexOnly) return this.valueBlock.valueDec === otherValue.valueBlock.valueDec;
            return false;
          }

          if (otherValue instanceof ArrayBuffer) return (0, utils.isEqualBuffer)(this.valueBlock.valueHex, otherValue);
          return false;
        }
      }, {
        key: "convertToDER",
        value: function convertToDER() {
          var integer = new Integer({
            valueHex: this.valueBlock.valueHex
          });
          integer.valueBlock.toDER();
          return integer;
        }
      }, {
        key: "convertFromDER",
        value: function convertFromDER() {
          var expectedLength = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength;
          var integer = new Integer({
            valueHex: this.valueBlock.valueHex
          });
          integer.valueBlock.fromDER(integer.valueBlock.valueHex, 0, integer.valueBlock.valueHex.byteLength, expectedLength);
          return integer;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Integer";
        }
      }]);

      return Integer;
    }(BaseBlock);

    exports.Integer = Integer;

    var Enumerated = function (_Integer2) {
      _inherits(Enumerated, _Integer2);

      function Enumerated() {
        var _this82;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Enumerated);

        _this82 = _possibleConstructorReturn(this, _getPrototypeOf(Enumerated).call(this, parameters));
        _this82.idBlock.tagClass = 1;
        _this82.idBlock.tagNumber = 10;
        return _this82;
      }

      _createClass(Enumerated, null, [{
        key: "blockName",
        value: function blockName() {
          return "Enumerated";
        }
      }]);

      return Enumerated;
    }(Integer);

    exports.Enumerated = Enumerated;

    var LocalSidValueBlock = function (_HexBlock15) {
      _inherits(LocalSidValueBlock, _HexBlock15);

      function LocalSidValueBlock() {
        var _this83;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalSidValueBlock);

        _this83 = _possibleConstructorReturn(this, _getPrototypeOf(LocalSidValueBlock).call(this, parameters));
        _this83.valueDec = (0, utils.getParametersValue)(parameters, "valueDec", -1);
        _this83.isFirstSid = (0, utils.getParametersValue)(parameters, "isFirstSid", false);
        return _this83;
      }

      _createClass(LocalSidValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          this.valueHex = new ArrayBuffer(inputLength);
          var view = new Uint8Array(this.valueHex);

          for (var i = 0; i < inputLength; i++) {
            view[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00) break;
          }

          var tempValueHex = new ArrayBuffer(this.blockLength);
          var tempView = new Uint8Array(tempValueHex);

          for (var _i40 = 0; _i40 < this.blockLength; _i40++) {
            tempView[_i40] = view[_i40];
          }

          this.valueHex = tempValueHex.slice(0);
          view = new Uint8Array(this.valueHex);

          if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          }

          if (view[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
          if (this.blockLength <= 8) this.valueDec = (0, utils.utilFromBase)(view, 7);else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
          }
          return inputOffset + this.blockLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var retView;

          if (this.isHexOnly) {
            if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
            var curView = new Uint8Array(this.valueHex);
            retBuf = new ArrayBuffer(this.blockLength);
            retView = new Uint8Array(retBuf);

            for (var i = 0; i < this.blockLength - 1; i++) {
              retView[i] = curView[i] | 0x80;
            }

            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retBuf;
          }

          var encodedBuf = (0, utils.utilToBase)(this.valueDec, 7);

          if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return new ArrayBuffer(0);
          }

          retBuf = new ArrayBuffer(encodedBuf.byteLength);

          if (sizeOnly === false) {
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);

            for (var _i41 = 0; _i41 < encodedBuf.byteLength - 1; _i41++) {
              retView[_i41] = encodedView[_i41] | 0x80;
            }

            retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
          }

          return retBuf;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          if (this.isHexOnly === true) result = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);else {
            if (this.isFirstSid) {
              var sidValue = this.valueDec;
              if (this.valueDec <= 39) result = "0.";else {
                if (this.valueDec <= 79) {
                  result = "1.";
                  sidValue -= 40;
                } else {
                  result = "2.";
                  sidValue -= 80;
                }
              }
              result += sidValue.toString();
            } else result = this.valueDec.toString();
          }
          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalSidValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueDec = this.valueDec;
          object.isFirstSid = this.isFirstSid;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "sidBlock";
        }
      }]);

      return LocalSidValueBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalObjectIdentifierValueBlock = function (_ValueBlock11) {
      _inherits(LocalObjectIdentifierValueBlock, _ValueBlock11);

      function LocalObjectIdentifierValueBlock() {
        var _this84;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalObjectIdentifierValueBlock);

        _this84 = _possibleConstructorReturn(this, _getPrototypeOf(LocalObjectIdentifierValueBlock).call(this, parameters));

        _this84.fromString((0, utils.getParametersValue)(parameters, "value", ""));

        return _this84;
      }

      _createClass(LocalObjectIdentifierValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = inputOffset;

          while (inputLength > 0) {
            var sidBlock = new LocalSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);

            if (resultOffset === -1) {
              this.blockLength = 0;
              this.error = sidBlock.error;
              return resultOffset;
            }

            if (this.value.length === 0) sidBlock.isFirstSid = true;
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
          }

          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(0);

          for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);

            if (valueBuf.byteLength === 0) {
              this.error = this.value[i].error;
              return new ArrayBuffer(0);
            }

            retBuf = (0, utils.utilConcatBuf)(retBuf, valueBuf);
          }

          return retBuf;
        }
      }, {
        key: "fromString",
        value: function fromString(string) {
          this.value = [];
          var pos1 = 0;
          var pos2 = 0;
          var sid = "";
          var flag = false;

          do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1) sid = string.substr(pos1);else sid = string.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;

            if (flag) {
              var sidBlock = this.value[0];
              var plus = 0;

              switch (sidBlock.valueDec) {
                case 0:
                  break;

                case 1:
                  plus = 40;
                  break;

                case 2:
                  plus = 80;
                  break;

                default:
                  this.value = [];
                  return false;
              }

              var parsedSID = parseInt(sid, 10);
              if (isNaN(parsedSID)) return true;
              sidBlock.valueDec = parsedSID + plus;
              flag = false;
            } else {
              var _sidBlock2 = new LocalSidValueBlock();

              _sidBlock2.valueDec = parseInt(sid, 10);
              if (isNaN(_sidBlock2.valueDec)) return true;

              if (this.value.length === 0) {
                _sidBlock2.isFirstSid = true;
                flag = true;
              }

              this.value.push(_sidBlock2);
            }
          } while (pos2 !== -1);

          return true;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          var isHexOnly = false;

          for (var i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            var sidStr = this.value[i].toString();
            if (i !== 0) result = "".concat(result, ".");

            if (isHexOnly) {
              sidStr = "{".concat(sidStr, "}");
              if (this.value[i].isFirstSid) result = "2.{".concat(sidStr, " - 80}");else result += sidStr;
            } else result += sidStr;
          }

          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalObjectIdentifierValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.toString();
          object.sidArray = [];

          for (var i = 0; i < this.value.length; i++) {
            object.sidArray.push(this.value[i].toJSON());
          }

          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "ObjectIdentifierValueBlock";
        }
      }]);

      return LocalObjectIdentifierValueBlock;
    }(ValueBlock);

    var ObjectIdentifier = function (_BaseBlock23) {
      _inherits(ObjectIdentifier, _BaseBlock23);

      function ObjectIdentifier() {
        var _this85;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ObjectIdentifier);

        _this85 = _possibleConstructorReturn(this, _getPrototypeOf(ObjectIdentifier).call(this, parameters, LocalObjectIdentifierValueBlock));
        _this85.idBlock.tagClass = 1;
        _this85.idBlock.tagNumber = 6;
        return _this85;
      }

      _createClass(ObjectIdentifier, null, [{
        key: "blockName",
        value: function blockName() {
          return "ObjectIdentifier";
        }
      }]);

      return ObjectIdentifier;
    }(BaseBlock);

    exports.ObjectIdentifier = ObjectIdentifier;

    var LocalUtf8StringValueBlock = function (_HexBlock16) {
      _inherits(LocalUtf8StringValueBlock, _HexBlock16);

      function LocalUtf8StringValueBlock() {
        var _this86;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalUtf8StringValueBlock);

        _this86 = _possibleConstructorReturn(this, _getPrototypeOf(LocalUtf8StringValueBlock).call(this, parameters));
        _this86.isHexOnly = true;
        _this86.value = "";
        return _this86;
      }

      _createClass(LocalUtf8StringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalUtf8StringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Utf8StringValueBlock";
        }
      }]);

      return LocalUtf8StringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var Utf8String = function (_BaseBlock24) {
      _inherits(Utf8String, _BaseBlock24);

      function Utf8String() {
        var _this87;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Utf8String);

        _this87 = _possibleConstructorReturn(this, _getPrototypeOf(Utf8String).call(this, parameters, LocalUtf8StringValueBlock));
        if ("value" in parameters) _this87.fromString(parameters.value);
        _this87.idBlock.tagClass = 1;
        _this87.idBlock.tagNumber = 12;
        return _this87;
      }

      _createClass(Utf8String, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));

          try {
            this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
          } catch (ex) {
            this.warnings.push("Error during \"decodeURIComponent\": ".concat(ex, ", using raw string"));
          }
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var str = unescape(encodeURIComponent(inputString));
          var strLen = str.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLen);
          var view = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLen; i++) {
            view[i] = str.charCodeAt(i);
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "Utf8String";
        }
      }]);

      return Utf8String;
    }(BaseBlock);

    exports.Utf8String = Utf8String;

    var LocalRelativeSidValueBlock = function (_HexBlock17) {
      _inherits(LocalRelativeSidValueBlock, _HexBlock17);

      function LocalRelativeSidValueBlock() {
        var _this88;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalRelativeSidValueBlock);

        _this88 = _possibleConstructorReturn(this, _getPrototypeOf(LocalRelativeSidValueBlock).call(this, parameters));
        _this88.valueDec = (0, utils.getParametersValue)(parameters, "valueDec", -1);
        return _this88;
      }

      _createClass(LocalRelativeSidValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          if (inputLength === 0) return inputOffset;
          if ((0, utils.checkBufferParams)(this, inputBuffer, inputOffset, inputLength) === false) return -1;
          var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
          this.valueHex = new ArrayBuffer(inputLength);
          var view = new Uint8Array(this.valueHex);

          for (var i = 0; i < inputLength; i++) {
            view[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00) break;
          }

          var tempValueHex = new ArrayBuffer(this.blockLength);
          var tempView = new Uint8Array(tempValueHex);

          for (var _i42 = 0; _i42 < this.blockLength; _i42++) {
            tempView[_i42] = view[_i42];
          }

          this.valueHex = tempValueHex.slice(0);
          view = new Uint8Array(this.valueHex);

          if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
          }

          if (view[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
          if (this.blockLength <= 8) this.valueDec = (0, utils.utilFromBase)(view, 7);else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
          }
          return inputOffset + this.blockLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf;
          var retView;

          if (this.isHexOnly) {
            if (sizeOnly === true) return new ArrayBuffer(this.valueHex.byteLength);
            var curView = new Uint8Array(this.valueHex);
            retBuf = new ArrayBuffer(this.blockLength);
            retView = new Uint8Array(retBuf);

            for (var i = 0; i < this.blockLength - 1; i++) {
              retView[i] = curView[i] | 0x80;
            }

            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retBuf;
          }

          var encodedBuf = (0, utils.utilToBase)(this.valueDec, 7);

          if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return new ArrayBuffer(0);
          }

          retBuf = new ArrayBuffer(encodedBuf.byteLength);

          if (sizeOnly === false) {
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);

            for (var _i43 = 0; _i43 < encodedBuf.byteLength - 1; _i43++) {
              retView[_i43] = encodedView[_i43] | 0x80;
            }

            retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
          }

          return retBuf;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          if (this.isHexOnly === true) result = (0, utils.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);else {
            result = this.valueDec.toString();
          }
          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalRelativeSidValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.valueDec = this.valueDec;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "relativeSidBlock";
        }
      }]);

      return LocalRelativeSidValueBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalRelativeObjectIdentifierValueBlock = function (_ValueBlock12) {
      _inherits(LocalRelativeObjectIdentifierValueBlock, _ValueBlock12);

      function LocalRelativeObjectIdentifierValueBlock() {
        var _this89;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalRelativeObjectIdentifierValueBlock);

        _this89 = _possibleConstructorReturn(this, _getPrototypeOf(LocalRelativeObjectIdentifierValueBlock).call(this, parameters));

        _this89.fromString((0, utils.getParametersValue)(parameters, "value", ""));

        return _this89;
      }

      _createClass(LocalRelativeObjectIdentifierValueBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = inputOffset;

          while (inputLength > 0) {
            var sidBlock = new LocalRelativeSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);

            if (resultOffset === -1) {
              this.blockLength = 0;
              this.error = sidBlock.error;
              return resultOffset;
            }

            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
          }

          return resultOffset;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          var sizeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var retBuf = new ArrayBuffer(0);

          for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);

            if (valueBuf.byteLength === 0) {
              this.error = this.value[i].error;
              return new ArrayBuffer(0);
            }

            retBuf = (0, utils.utilConcatBuf)(retBuf, valueBuf);
          }

          return retBuf;
        }
      }, {
        key: "fromString",
        value: function fromString(string) {
          this.value = [];
          var pos1 = 0;
          var pos2 = 0;
          var sid = "";

          do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1) sid = string.substr(pos1);else sid = string.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;
            var sidBlock = new LocalRelativeSidValueBlock();
            sidBlock.valueDec = parseInt(sid, 10);
            if (isNaN(sidBlock.valueDec)) return true;
            this.value.push(sidBlock);
          } while (pos2 !== -1);

          return true;
        }
      }, {
        key: "toString",
        value: function toString() {
          var result = "";
          var isHexOnly = false;

          for (var i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            var sidStr = this.value[i].toString();
            if (i !== 0) result = "".concat(result, ".");

            if (isHexOnly) {
              sidStr = "{".concat(sidStr, "}");
              result += sidStr;
            } else result += sidStr;
          }

          return result;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalRelativeObjectIdentifierValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.toString();
          object.sidArray = [];

          for (var i = 0; i < this.value.length; i++) {
            object.sidArray.push(this.value[i].toJSON());
          }

          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "RelativeObjectIdentifierValueBlock";
        }
      }]);

      return LocalRelativeObjectIdentifierValueBlock;
    }(ValueBlock);

    var RelativeObjectIdentifier = function (_BaseBlock25) {
      _inherits(RelativeObjectIdentifier, _BaseBlock25);

      function RelativeObjectIdentifier() {
        var _this90;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, RelativeObjectIdentifier);

        _this90 = _possibleConstructorReturn(this, _getPrototypeOf(RelativeObjectIdentifier).call(this, parameters, LocalRelativeObjectIdentifierValueBlock));
        _this90.idBlock.tagClass = 1;
        _this90.idBlock.tagNumber = 13;
        return _this90;
      }

      _createClass(RelativeObjectIdentifier, null, [{
        key: "blockName",
        value: function blockName() {
          return "RelativeObjectIdentifier";
        }
      }]);

      return RelativeObjectIdentifier;
    }(BaseBlock);

    exports.RelativeObjectIdentifier = RelativeObjectIdentifier;

    var LocalBmpStringValueBlock = function (_HexBlock18) {
      _inherits(LocalBmpStringValueBlock, _HexBlock18);

      function LocalBmpStringValueBlock() {
        var _this91;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalBmpStringValueBlock);

        _this91 = _possibleConstructorReturn(this, _getPrototypeOf(LocalBmpStringValueBlock).call(this, parameters));
        _this91.isHexOnly = true;
        _this91.value = "";
        return _this91;
      }

      _createClass(LocalBmpStringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalBmpStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BmpStringValueBlock";
        }
      }]);

      return LocalBmpStringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var BmpString = function (_BaseBlock26) {
      _inherits(BmpString, _BaseBlock26);

      function BmpString() {
        var _this92;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BmpString);

        _this92 = _possibleConstructorReturn(this, _getPrototypeOf(BmpString).call(this, parameters, LocalBmpStringValueBlock));
        if ("value" in parameters) _this92.fromString(parameters.value);
        _this92.idBlock.tagClass = 1;
        _this92.idBlock.tagNumber = 30;
        return _this92;
      }

      _createClass(BmpString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          var copyBuffer = inputBuffer.slice(0);
          var valueView = new Uint8Array(copyBuffer);

          for (var i = 0; i < valueView.length; i += 2) {
            var temp = valueView[i];
            valueView[i] = valueView[i + 1];
            valueView[i + 1] = temp;
          }

          this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(copyBuffer));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var strLength = inputString.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLength * 2);
          var valueHexView = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLength; i++) {
            var codeBuf = (0, utils.utilToBase)(inputString.charCodeAt(i), 8);
            var codeView = new Uint8Array(codeBuf);
            if (codeView.length > 2) continue;
            var dif = 2 - codeView.length;

            for (var j = codeView.length - 1; j >= 0; j--) {
              valueHexView[i * 2 + j + dif] = codeView[j];
            }
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "BmpString";
        }
      }]);

      return BmpString;
    }(BaseBlock);

    exports.BmpString = BmpString;

    var LocalUniversalStringValueBlock = function (_HexBlock19) {
      _inherits(LocalUniversalStringValueBlock, _HexBlock19);

      function LocalUniversalStringValueBlock() {
        var _this93;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalUniversalStringValueBlock);

        _this93 = _possibleConstructorReturn(this, _getPrototypeOf(LocalUniversalStringValueBlock).call(this, parameters));
        _this93.isHexOnly = true;
        _this93.value = "";
        return _this93;
      }

      _createClass(LocalUniversalStringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalUniversalStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "UniversalStringValueBlock";
        }
      }]);

      return LocalUniversalStringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var UniversalString = function (_BaseBlock27) {
      _inherits(UniversalString, _BaseBlock27);

      function UniversalString() {
        var _this94;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, UniversalString);

        _this94 = _possibleConstructorReturn(this, _getPrototypeOf(UniversalString).call(this, parameters, LocalUniversalStringValueBlock));
        if ("value" in parameters) _this94.fromString(parameters.value);
        _this94.idBlock.tagClass = 1;
        _this94.idBlock.tagNumber = 28;
        return _this94;
      }

      _createClass(UniversalString, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          var copyBuffer = inputBuffer.slice(0);
          var valueView = new Uint8Array(copyBuffer);

          for (var i = 0; i < valueView.length; i += 4) {
            valueView[i] = valueView[i + 3];
            valueView[i + 1] = valueView[i + 2];
            valueView[i + 2] = 0x00;
            valueView[i + 3] = 0x00;
          }

          this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var strLength = inputString.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLength * 4);
          var valueHexView = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLength; i++) {
            var codeBuf = (0, utils.utilToBase)(inputString.charCodeAt(i), 8);
            var codeView = new Uint8Array(codeBuf);
            if (codeView.length > 4) continue;
            var dif = 4 - codeView.length;

            for (var j = codeView.length - 1; j >= 0; j--) {
              valueHexView[i * 4 + j + dif] = codeView[j];
            }
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "UniversalString";
        }
      }]);

      return UniversalString;
    }(BaseBlock);

    exports.UniversalString = UniversalString;

    var LocalSimpleStringValueBlock = function (_HexBlock20) {
      _inherits(LocalSimpleStringValueBlock, _HexBlock20);

      function LocalSimpleStringValueBlock() {
        var _this95;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalSimpleStringValueBlock);

        _this95 = _possibleConstructorReturn(this, _getPrototypeOf(LocalSimpleStringValueBlock).call(this, parameters));
        _this95.value = "";
        _this95.isHexOnly = true;
        return _this95;
      }

      _createClass(LocalSimpleStringValueBlock, [{
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(LocalSimpleStringValueBlock.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.value = this.value;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "SimpleStringValueBlock";
        }
      }]);

      return LocalSimpleStringValueBlock;
    }(HexBlock(LocalBaseBlock));

    var LocalSimpleStringBlock = function (_BaseBlock28) {
      _inherits(LocalSimpleStringBlock, _BaseBlock28);

      function LocalSimpleStringBlock() {
        var _this96;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LocalSimpleStringBlock);

        _this96 = _possibleConstructorReturn(this, _getPrototypeOf(LocalSimpleStringBlock).call(this, parameters, LocalSimpleStringValueBlock));
        if ("value" in parameters) _this96.fromString(parameters.value);
        return _this96;
      }

      _createClass(LocalSimpleStringBlock, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var strLen = inputString.length;
          this.valueBlock.valueHex = new ArrayBuffer(strLen);
          var view = new Uint8Array(this.valueBlock.valueHex);

          for (var i = 0; i < strLen; i++) {
            view[i] = inputString.charCodeAt(i);
          }

          this.valueBlock.value = inputString;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "SIMPLESTRING";
        }
      }]);

      return LocalSimpleStringBlock;
    }(BaseBlock);

    var NumericString = function (_LocalSimpleStringBlo10) {
      _inherits(NumericString, _LocalSimpleStringBlo10);

      function NumericString() {
        var _this97;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, NumericString);

        _this97 = _possibleConstructorReturn(this, _getPrototypeOf(NumericString).call(this, parameters));
        _this97.idBlock.tagClass = 1;
        _this97.idBlock.tagNumber = 18;
        return _this97;
      }

      _createClass(NumericString, null, [{
        key: "blockName",
        value: function blockName() {
          return "NumericString";
        }
      }]);

      return NumericString;
    }(LocalSimpleStringBlock);

    exports.NumericString = NumericString;

    var PrintableString = function (_LocalSimpleStringBlo11) {
      _inherits(PrintableString, _LocalSimpleStringBlo11);

      function PrintableString() {
        var _this98;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PrintableString);

        _this98 = _possibleConstructorReturn(this, _getPrototypeOf(PrintableString).call(this, parameters));
        _this98.idBlock.tagClass = 1;
        _this98.idBlock.tagNumber = 19;
        return _this98;
      }

      _createClass(PrintableString, null, [{
        key: "blockName",
        value: function blockName() {
          return "PrintableString";
        }
      }]);

      return PrintableString;
    }(LocalSimpleStringBlock);

    exports.PrintableString = PrintableString;

    var TeletexString = function (_LocalSimpleStringBlo12) {
      _inherits(TeletexString, _LocalSimpleStringBlo12);

      function TeletexString() {
        var _this99;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TeletexString);

        _this99 = _possibleConstructorReturn(this, _getPrototypeOf(TeletexString).call(this, parameters));
        _this99.idBlock.tagClass = 1;
        _this99.idBlock.tagNumber = 20;
        return _this99;
      }

      _createClass(TeletexString, null, [{
        key: "blockName",
        value: function blockName() {
          return "TeletexString";
        }
      }]);

      return TeletexString;
    }(LocalSimpleStringBlock);

    exports.TeletexString = TeletexString;

    var VideotexString = function (_LocalSimpleStringBlo13) {
      _inherits(VideotexString, _LocalSimpleStringBlo13);

      function VideotexString() {
        var _this100;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, VideotexString);

        _this100 = _possibleConstructorReturn(this, _getPrototypeOf(VideotexString).call(this, parameters));
        _this100.idBlock.tagClass = 1;
        _this100.idBlock.tagNumber = 21;
        return _this100;
      }

      _createClass(VideotexString, null, [{
        key: "blockName",
        value: function blockName() {
          return "VideotexString";
        }
      }]);

      return VideotexString;
    }(LocalSimpleStringBlock);

    exports.VideotexString = VideotexString;

    var IA5String = function (_LocalSimpleStringBlo14) {
      _inherits(IA5String, _LocalSimpleStringBlo14);

      function IA5String() {
        var _this101;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, IA5String);

        _this101 = _possibleConstructorReturn(this, _getPrototypeOf(IA5String).call(this, parameters));
        _this101.idBlock.tagClass = 1;
        _this101.idBlock.tagNumber = 22;
        return _this101;
      }

      _createClass(IA5String, null, [{
        key: "blockName",
        value: function blockName() {
          return "IA5String";
        }
      }]);

      return IA5String;
    }(LocalSimpleStringBlock);

    exports.IA5String = IA5String;

    var GraphicString = function (_LocalSimpleStringBlo15) {
      _inherits(GraphicString, _LocalSimpleStringBlo15);

      function GraphicString() {
        var _this102;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, GraphicString);

        _this102 = _possibleConstructorReturn(this, _getPrototypeOf(GraphicString).call(this, parameters));
        _this102.idBlock.tagClass = 1;
        _this102.idBlock.tagNumber = 25;
        return _this102;
      }

      _createClass(GraphicString, null, [{
        key: "blockName",
        value: function blockName() {
          return "GraphicString";
        }
      }]);

      return GraphicString;
    }(LocalSimpleStringBlock);

    exports.GraphicString = GraphicString;

    var VisibleString = function (_LocalSimpleStringBlo16) {
      _inherits(VisibleString, _LocalSimpleStringBlo16);

      function VisibleString() {
        var _this103;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, VisibleString);

        _this103 = _possibleConstructorReturn(this, _getPrototypeOf(VisibleString).call(this, parameters));
        _this103.idBlock.tagClass = 1;
        _this103.idBlock.tagNumber = 26;
        return _this103;
      }

      _createClass(VisibleString, null, [{
        key: "blockName",
        value: function blockName() {
          return "VisibleString";
        }
      }]);

      return VisibleString;
    }(LocalSimpleStringBlock);

    exports.VisibleString = VisibleString;

    var GeneralString = function (_LocalSimpleStringBlo17) {
      _inherits(GeneralString, _LocalSimpleStringBlo17);

      function GeneralString() {
        var _this104;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, GeneralString);

        _this104 = _possibleConstructorReturn(this, _getPrototypeOf(GeneralString).call(this, parameters));
        _this104.idBlock.tagClass = 1;
        _this104.idBlock.tagNumber = 27;
        return _this104;
      }

      _createClass(GeneralString, null, [{
        key: "blockName",
        value: function blockName() {
          return "GeneralString";
        }
      }]);

      return GeneralString;
    }(LocalSimpleStringBlock);

    exports.GeneralString = GeneralString;

    var CharacterString = function (_LocalSimpleStringBlo18) {
      _inherits(CharacterString, _LocalSimpleStringBlo18);

      function CharacterString() {
        var _this105;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CharacterString);

        _this105 = _possibleConstructorReturn(this, _getPrototypeOf(CharacterString).call(this, parameters));
        _this105.idBlock.tagClass = 1;
        _this105.idBlock.tagNumber = 29;
        return _this105;
      }

      _createClass(CharacterString, null, [{
        key: "blockName",
        value: function blockName() {
          return "CharacterString";
        }
      }]);

      return CharacterString;
    }(LocalSimpleStringBlock);

    exports.CharacterString = CharacterString;

    var UTCTime = function (_VisibleString3) {
      _inherits(UTCTime, _VisibleString3);

      function UTCTime() {
        var _this106;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, UTCTime);

        _this106 = _possibleConstructorReturn(this, _getPrototypeOf(UTCTime).call(this, parameters));
        _this106.year = 0;
        _this106.month = 0;
        _this106.day = 0;
        _this106.hour = 0;
        _this106.minute = 0;
        _this106.second = 0;

        if ("value" in parameters) {
          _this106.fromString(parameters.value);

          _this106.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
          var view = new Uint8Array(_this106.valueBlock.valueHex);

          for (var i = 0; i < parameters.value.length; i++) {
            view[i] = parameters.value.charCodeAt(i);
          }
        }

        if ("valueDate" in parameters) {
          _this106.fromDate(parameters.valueDate);

          _this106.valueBlock.valueHex = _this106.toBuffer();
        }

        _this106.idBlock.tagClass = 1;
        _this106.idBlock.tagNumber = 23;
        return _this106;
      }

      _createClass(UTCTime, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
        }
      }, {
        key: "toBuffer",
        value: function toBuffer() {
          var str = this.toString();
          var buffer = new ArrayBuffer(str.length);
          var view = new Uint8Array(buffer);

          for (var i = 0; i < str.length; i++) {
            view[i] = str.charCodeAt(i);
          }

          return buffer;
        }
      }, {
        key: "fromDate",
        value: function fromDate(inputDate) {
          this.year = inputDate.getUTCFullYear();
          this.month = inputDate.getUTCMonth() + 1;
          this.day = inputDate.getUTCDate();
          this.hour = inputDate.getUTCHours();
          this.minute = inputDate.getUTCMinutes();
          this.second = inputDate.getUTCSeconds();
        }
      }, {
        key: "toDate",
        value: function toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
          var parserArray = parser.exec(inputString);

          if (parserArray === null) {
            this.error = "Wrong input string for convertion";
            return;
          }

          var year = parseInt(parserArray[1], 10);
          if (year >= 50) this.year = 1900 + year;else this.year = 2000 + year;
          this.month = parseInt(parserArray[2], 10);
          this.day = parseInt(parserArray[3], 10);
          this.hour = parseInt(parserArray[4], 10);
          this.minute = parseInt(parserArray[5], 10);
          this.second = parseInt(parserArray[6], 10);
        }
      }, {
        key: "toString",
        value: function toString() {
          var outputArray = new Array(7);
          outputArray[0] = (0, utils.padNumber)(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
          outputArray[1] = (0, utils.padNumber)(this.month, 2);
          outputArray[2] = (0, utils.padNumber)(this.day, 2);
          outputArray[3] = (0, utils.padNumber)(this.hour, 2);
          outputArray[4] = (0, utils.padNumber)(this.minute, 2);
          outputArray[5] = (0, utils.padNumber)(this.second, 2);
          outputArray[6] = "Z";
          return outputArray.join("");
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(UTCTime.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.year = this.year;
          object.month = this.month;
          object.day = this.day;
          object.hour = this.hour;
          object.minute = this.minute;
          object.second = this.second;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "UTCTime";
        }
      }]);

      return UTCTime;
    }(VisibleString);

    exports.UTCTime = UTCTime;

    var GeneralizedTime = function (_VisibleString4) {
      _inherits(GeneralizedTime, _VisibleString4);

      function GeneralizedTime() {
        var _this107;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, GeneralizedTime);

        _this107 = _possibleConstructorReturn(this, _getPrototypeOf(GeneralizedTime).call(this, parameters));
        _this107.year = 0;
        _this107.month = 0;
        _this107.day = 0;
        _this107.hour = 0;
        _this107.minute = 0;
        _this107.second = 0;
        _this107.millisecond = 0;

        if ("value" in parameters) {
          _this107.fromString(parameters.value);

          _this107.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
          var view = new Uint8Array(_this107.valueBlock.valueHex);

          for (var i = 0; i < parameters.value.length; i++) {
            view[i] = parameters.value.charCodeAt(i);
          }
        }

        if ("valueDate" in parameters) {
          _this107.fromDate(parameters.valueDate);

          _this107.valueBlock.valueHex = _this107.toBuffer();
        }

        _this107.idBlock.tagClass = 1;
        _this107.idBlock.tagNumber = 24;
        return _this107;
      }

      _createClass(GeneralizedTime, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm === true ? inputLength : this.lenBlock.length);

          if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
          }

          this.fromBuffer(this.valueBlock.valueHex);
          if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
          if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
          if (this.valueBlock.error.length === 0) this.blockLength += this.valueBlock.blockLength;
          return resultOffset;
        }
      }, {
        key: "fromBuffer",
        value: function fromBuffer(inputBuffer) {
          this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
        }
      }, {
        key: "toBuffer",
        value: function toBuffer() {
          var str = this.toString();
          var buffer = new ArrayBuffer(str.length);
          var view = new Uint8Array(buffer);

          for (var i = 0; i < str.length; i++) {
            view[i] = str.charCodeAt(i);
          }

          return buffer;
        }
      }, {
        key: "fromDate",
        value: function fromDate(inputDate) {
          this.year = inputDate.getUTCFullYear();
          this.month = inputDate.getUTCMonth() + 1;
          this.day = inputDate.getUTCDate();
          this.hour = inputDate.getUTCHours();
          this.minute = inputDate.getUTCMinutes();
          this.second = inputDate.getUTCSeconds();
          this.millisecond = inputDate.getUTCMilliseconds();
        }
      }, {
        key: "toDate",
        value: function toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
        }
      }, {
        key: "fromString",
        value: function fromString(inputString) {
          var isUTC = false;
          var timeString = "";
          var dateTimeString = "";
          var fractionPart = 0;
          var parser;
          var hourDifference = 0;
          var minuteDifference = 0;

          if (inputString[inputString.length - 1] === "Z") {
            timeString = inputString.substr(0, inputString.length - 1);
            isUTC = true;
          } else {
              var number = new Number(inputString[inputString.length - 1]);
              if (isNaN(number.valueOf())) throw new Error("Wrong input string for convertion");
              timeString = inputString;
            }

          if (isUTC) {
            if (timeString.indexOf("+") !== -1) throw new Error("Wrong input string for convertion");
            if (timeString.indexOf("-") !== -1) throw new Error("Wrong input string for convertion");
          } else {
              var multiplier = 1;
              var differencePosition = timeString.indexOf("+");
              var differenceString = "";

              if (differencePosition === -1) {
                differencePosition = timeString.indexOf("-");
                multiplier = -1;
              }

              if (differencePosition !== -1) {
                differenceString = timeString.substr(differencePosition + 1);
                timeString = timeString.substr(0, differencePosition);
                if (differenceString.length !== 2 && differenceString.length !== 4) throw new Error("Wrong input string for convertion");

                var _number2 = new Number(differenceString.substr(0, 2));

                if (isNaN(_number2.valueOf())) throw new Error("Wrong input string for convertion");
                hourDifference = multiplier * _number2;

                if (differenceString.length === 4) {
                  _number2 = new Number(differenceString.substr(2, 2));
                  if (isNaN(_number2.valueOf())) throw new Error("Wrong input string for convertion");
                  minuteDifference = multiplier * _number2;
                }
              }
            }

          var fractionPointPosition = timeString.indexOf(".");
          if (fractionPointPosition === -1) fractionPointPosition = timeString.indexOf(",");

          if (fractionPointPosition !== -1) {
            var fractionPartCheck = new Number("0".concat(timeString.substr(fractionPointPosition)));
            if (isNaN(fractionPartCheck.valueOf())) throw new Error("Wrong input string for convertion");
            fractionPart = fractionPartCheck.valueOf();
            dateTimeString = timeString.substr(0, fractionPointPosition);
          } else dateTimeString = timeString;

          switch (true) {
            case dateTimeString.length === 8:
              parser = /(\d{4})(\d{2})(\d{2})/ig;
              if (fractionPointPosition !== -1) throw new Error("Wrong input string for convertion");
              break;

            case dateTimeString.length === 10:
              parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;

              if (fractionPointPosition !== -1) {
                var fractionResult = 60 * fractionPart;
                this.minute = Math.floor(fractionResult);
                fractionResult = 60 * (fractionResult - this.minute);
                this.second = Math.floor(fractionResult);
                fractionResult = 1000 * (fractionResult - this.second);
                this.millisecond = Math.floor(fractionResult);
              }

              break;

            case dateTimeString.length === 12:
              parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;

              if (fractionPointPosition !== -1) {
                var _fractionResult3 = 60 * fractionPart;

                this.second = Math.floor(_fractionResult3);
                _fractionResult3 = 1000 * (_fractionResult3 - this.second);
                this.millisecond = Math.floor(_fractionResult3);
              }

              break;

            case dateTimeString.length === 14:
              parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;

              if (fractionPointPosition !== -1) {
                var _fractionResult4 = 1000 * fractionPart;

                this.millisecond = Math.floor(_fractionResult4);
              }

              break;

            default:
              throw new Error("Wrong input string for convertion");
          }

          var parserArray = parser.exec(dateTimeString);
          if (parserArray === null) throw new Error("Wrong input string for convertion");

          for (var j = 1; j < parserArray.length; j++) {
            switch (j) {
              case 1:
                this.year = parseInt(parserArray[j], 10);
                break;

              case 2:
                this.month = parseInt(parserArray[j], 10);
                break;

              case 3:
                this.day = parseInt(parserArray[j], 10);
                break;

              case 4:
                this.hour = parseInt(parserArray[j], 10) + hourDifference;
                break;

              case 5:
                this.minute = parseInt(parserArray[j], 10) + minuteDifference;
                break;

              case 6:
                this.second = parseInt(parserArray[j], 10);
                break;

              default:
                throw new Error("Wrong input string for convertion");
            }
          }

          if (isUTC === false) {
            var tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            this.year = tempDate.getUTCFullYear();
            this.month = tempDate.getUTCMonth();
            this.day = tempDate.getUTCDay();
            this.hour = tempDate.getUTCHours();
            this.minute = tempDate.getUTCMinutes();
            this.second = tempDate.getUTCSeconds();
            this.millisecond = tempDate.getUTCMilliseconds();
          }
        }
      }, {
        key: "toString",
        value: function toString() {
          var outputArray = [];
          outputArray.push((0, utils.padNumber)(this.year, 4));
          outputArray.push((0, utils.padNumber)(this.month, 2));
          outputArray.push((0, utils.padNumber)(this.day, 2));
          outputArray.push((0, utils.padNumber)(this.hour, 2));
          outputArray.push((0, utils.padNumber)(this.minute, 2));
          outputArray.push((0, utils.padNumber)(this.second, 2));

          if (this.millisecond !== 0) {
            outputArray.push(".");
            outputArray.push((0, utils.padNumber)(this.millisecond, 3));
          }

          outputArray.push("Z");
          return outputArray.join("");
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var object = {};

          try {
            object = _get(_getPrototypeOf(GeneralizedTime.prototype), "toJSON", this).call(this);
          } catch (ex) {}

          object.year = this.year;
          object.month = this.month;
          object.day = this.day;
          object.hour = this.hour;
          object.minute = this.minute;
          object.second = this.second;
          object.millisecond = this.millisecond;
          return object;
        }
      }], [{
        key: "blockName",
        value: function blockName() {
          return "GeneralizedTime";
        }
      }]);

      return GeneralizedTime;
    }(VisibleString);

    exports.GeneralizedTime = GeneralizedTime;

    var DATE = function (_Utf8String6) {
      _inherits(DATE, _Utf8String6);

      function DATE() {
        var _this108;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, DATE);

        _this108 = _possibleConstructorReturn(this, _getPrototypeOf(DATE).call(this, parameters));
        _this108.idBlock.tagClass = 1;
        _this108.idBlock.tagNumber = 31;
        return _this108;
      }

      _createClass(DATE, null, [{
        key: "blockName",
        value: function blockName() {
          return "DATE";
        }
      }]);

      return DATE;
    }(Utf8String);

    exports.DATE = DATE;

    var TimeOfDay = function (_Utf8String7) {
      _inherits(TimeOfDay, _Utf8String7);

      function TimeOfDay() {
        var _this109;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TimeOfDay);

        _this109 = _possibleConstructorReturn(this, _getPrototypeOf(TimeOfDay).call(this, parameters));
        _this109.idBlock.tagClass = 1;
        _this109.idBlock.tagNumber = 32;
        return _this109;
      }

      _createClass(TimeOfDay, null, [{
        key: "blockName",
        value: function blockName() {
          return "TimeOfDay";
        }
      }]);

      return TimeOfDay;
    }(Utf8String);

    exports.TimeOfDay = TimeOfDay;

    var DateTime = function (_Utf8String8) {
      _inherits(DateTime, _Utf8String8);

      function DateTime() {
        var _this110;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, DateTime);

        _this110 = _possibleConstructorReturn(this, _getPrototypeOf(DateTime).call(this, parameters));
        _this110.idBlock.tagClass = 1;
        _this110.idBlock.tagNumber = 33;
        return _this110;
      }

      _createClass(DateTime, null, [{
        key: "blockName",
        value: function blockName() {
          return "DateTime";
        }
      }]);

      return DateTime;
    }(Utf8String);

    exports.DateTime = DateTime;

    var Duration = function (_Utf8String9) {
      _inherits(Duration, _Utf8String9);

      function Duration() {
        var _this111;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Duration);

        _this111 = _possibleConstructorReturn(this, _getPrototypeOf(Duration).call(this, parameters));
        _this111.idBlock.tagClass = 1;
        _this111.idBlock.tagNumber = 34;
        return _this111;
      }

      _createClass(Duration, null, [{
        key: "blockName",
        value: function blockName() {
          return "Duration";
        }
      }]);

      return Duration;
    }(Utf8String);

    exports.Duration = Duration;

    var TIME = function (_Utf8String10) {
      _inherits(TIME, _Utf8String10);

      function TIME() {
        var _this112;

        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TIME);

        _this112 = _possibleConstructorReturn(this, _getPrototypeOf(TIME).call(this, parameters));
        _this112.idBlock.tagClass = 1;
        _this112.idBlock.tagNumber = 14;
        return _this112;
      }

      _createClass(TIME, null, [{
        key: "blockName",
        value: function blockName() {
          return "TIME";
        }
      }]);

      return TIME;
    }(Utf8String);

    exports.TIME = TIME;

    var Choice = function Choice() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Choice);

      this.value = (0, utils.getParametersValue)(parameters, "value", []);
      this.optional = (0, utils.getParametersValue)(parameters, "optional", false);
    };

    exports.Choice = Choice;

    var Any = function Any() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Any);

      this.name = (0, utils.getParametersValue)(parameters, "name", "");
      this.optional = (0, utils.getParametersValue)(parameters, "optional", false);
    };

    exports.Any = Any;

    var Repeated = function Repeated() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Repeated);

      this.name = (0, utils.getParametersValue)(parameters, "name", "");
      this.optional = (0, utils.getParametersValue)(parameters, "optional", false);
      this.value = (0, utils.getParametersValue)(parameters, "value", new Any());
      this.local = (0, utils.getParametersValue)(parameters, "local", false);
    };

    exports.Repeated = Repeated;

    var RawData = function () {
      function RawData() {
        var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, RawData);

        this.data = (0, utils.getParametersValue)(parameters, "data", new ArrayBuffer(0));
      }

      _createClass(RawData, [{
        key: "fromBER",
        value: function fromBER(inputBuffer, inputOffset, inputLength) {
          this.data = inputBuffer.slice(inputOffset, inputLength);
          return inputOffset + inputLength;
        }
      }, {
        key: "toBER",
        value: function toBER() {
          return this.data;
        }
      }]);

      return RawData;
    }();

    exports.RawData = RawData;

    function LocalFromBER(inputBuffer, inputOffset, inputLength) {
      var incomingOffset = inputOffset;

      function localChangeType(inputObject, newType) {
        if (inputObject instanceof newType) return inputObject;
        var newObject = new newType();
        newObject.idBlock = inputObject.idBlock;
        newObject.lenBlock = inputObject.lenBlock;
        newObject.warnings = inputObject.warnings;
        newObject.valueBeforeDecode = inputObject.valueBeforeDecode.slice(0);
        return newObject;
      }

      var returnObject = new BaseBlock({}, Object);
      var baseBlock = new LocalBaseBlock();

      if ((0, utils.checkBufferParams)(baseBlock, inputBuffer, inputOffset, inputLength) === false) {
        returnObject.error = baseBlock.error;
        return {
          offset: -1,
          result: returnObject
        };
      }

      var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);

      if (intBuffer.length === 0) {
        this.error = "Zero buffer length";
        return {
          offset: -1,
          result: returnObject
        };
      }

      var resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
      returnObject.warnings.concat(returnObject.idBlock.warnings);

      if (resultOffset === -1) {
        returnObject.error = returnObject.idBlock.error;
        return {
          offset: -1,
          result: returnObject
        };
      }

      inputOffset = resultOffset;
      inputLength -= returnObject.idBlock.blockLength;
      resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
      returnObject.warnings.concat(returnObject.lenBlock.warnings);

      if (resultOffset === -1) {
        returnObject.error = returnObject.lenBlock.error;
        return {
          offset: -1,
          result: returnObject
        };
      }

      inputOffset = resultOffset;
      inputLength -= returnObject.lenBlock.blockLength;

      if (returnObject.idBlock.isConstructed === false && returnObject.lenBlock.isIndefiniteForm === true) {
        returnObject.error = "Indefinite length form used for primitive encoding form";
        return {
          offset: -1,
          result: returnObject
        };
      }

      var newASN1Type = BaseBlock;

      switch (returnObject.idBlock.tagClass) {
        case 1:
          if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
            returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
            return {
              offset: -1,
              result: returnObject
            };
          }

          switch (returnObject.idBlock.tagNumber) {
            case 0:
              if (returnObject.idBlock.isConstructed === true && returnObject.lenBlock.length > 0) {
                returnObject.error = "Type [UNIVERSAL 0] is reserved";
                return {
                  offset: -1,
                  result: returnObject
                };
              }

              newASN1Type = EndOfContent;
              break;

            case 1:
              newASN1Type = Boolean;
              break;

            case 2:
              newASN1Type = Integer;
              break;

            case 3:
              newASN1Type = BitString;
              break;

            case 4:
              newASN1Type = OctetString;
              break;

            case 5:
              newASN1Type = Null;
              break;

            case 6:
              newASN1Type = ObjectIdentifier;
              break;

            case 10:
              newASN1Type = Enumerated;
              break;

            case 12:
              newASN1Type = Utf8String;
              break;

            case 13:
              newASN1Type = RelativeObjectIdentifier;
              break;

            case 14:
              newASN1Type = TIME;
              break;

            case 15:
              returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
              return {
                offset: -1,
                result: returnObject
              };

            case 16:
              newASN1Type = Sequence;
              break;

            case 17:
              newASN1Type = Set;
              break;

            case 18:
              newASN1Type = NumericString;
              break;

            case 19:
              newASN1Type = PrintableString;
              break;

            case 20:
              newASN1Type = TeletexString;
              break;

            case 21:
              newASN1Type = VideotexString;
              break;

            case 22:
              newASN1Type = IA5String;
              break;

            case 23:
              newASN1Type = UTCTime;
              break;

            case 24:
              newASN1Type = GeneralizedTime;
              break;

            case 25:
              newASN1Type = GraphicString;
              break;

            case 26:
              newASN1Type = VisibleString;
              break;

            case 27:
              newASN1Type = GeneralString;
              break;

            case 28:
              newASN1Type = UniversalString;
              break;

            case 29:
              newASN1Type = CharacterString;
              break;

            case 30:
              newASN1Type = BmpString;
              break;

            case 31:
              newASN1Type = DATE;
              break;

            case 32:
              newASN1Type = TimeOfDay;
              break;

            case 33:
              newASN1Type = DateTime;
              break;

            case 34:
              newASN1Type = Duration;
              break;

            default:
              {
                var newObject;
                if (returnObject.idBlock.isConstructed === true) newObject = new Constructed();else newObject = new Primitive();
                newObject.idBlock = returnObject.idBlock;
                newObject.lenBlock = returnObject.lenBlock;
                newObject.warnings = returnObject.warnings;
                returnObject = newObject;
                resultOffset = returnObject.fromBER(inputBuffer, inputOffset, inputLength);
              }
          }

          break;

        case 2:
        case 3:
        case 4:
        default:
          {
            if (returnObject.idBlock.isConstructed === true) newASN1Type = Constructed;else newASN1Type = Primitive;
          }
      }

      returnObject = localChangeType(returnObject, newASN1Type);
      resultOffset = returnObject.fromBER(inputBuffer, inputOffset, returnObject.lenBlock.isIndefiniteForm === true ? inputLength : returnObject.lenBlock.length);
      returnObject.valueBeforeDecode = inputBuffer.slice(incomingOffset, incomingOffset + returnObject.blockLength);
      return {
        offset: resultOffset,
        result: returnObject
      };
    }

    function fromBER(inputBuffer) {
      if (inputBuffer.byteLength === 0) {
        var result = new BaseBlock({}, Object);
        result.error = "Input buffer has zero length";
        return {
          offset: -1,
          result: result
        };
      }

      return LocalFromBER(inputBuffer, 0, inputBuffer.byteLength);
    }

    function compareSchema(root, inputData, inputSchema) {
      if (inputSchema instanceof Choice) {
        for (var j = 0; j < inputSchema.value.length; j++) {
          var result = compareSchema(root, inputData, inputSchema.value[j]);

          if (result.verified === true) {
            return {
              verified: true,
              result: root
            };
          }
        }

        {
          var _result = {
            verified: false,
            result: {
              error: "Wrong values for Choice type"
            }
          };
          if (inputSchema.hasOwnProperty("name")) _result.name = inputSchema.name;
          return _result;
        }
      }

      if (inputSchema instanceof Any) {
        if (inputSchema.hasOwnProperty("name")) root[inputSchema.name] = inputData;
        return {
          verified: true,
          result: root
        };
      }

      if (root instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong root object"
          }
        };
      }

      if (inputData instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 data"
          }
        };
      }

      if (inputSchema instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if ("idBlock" in inputSchema === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if ("fromBER" in inputSchema.idBlock === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if ("toBER" in inputSchema.idBlock === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      var encodedId = inputSchema.idBlock.toBER(false);

      if (encodedId.byteLength === 0) {
        return {
          verified: false,
          result: {
            error: "Error encoding idBlock for ASN.1 schema"
          }
        };
      }

      var decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);

      if (decodedOffset === -1) {
        return {
          verified: false,
          result: {
            error: "Error decoding idBlock for ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.hasOwnProperty("tagClass") === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
        return {
          verified: false,
          result: root
        };
      }

      if (inputSchema.idBlock.hasOwnProperty("tagNumber") === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
        return {
          verified: false,
          result: root
        };
      }

      if (inputSchema.idBlock.hasOwnProperty("isConstructed") === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
      }

      if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
        return {
          verified: false,
          result: root
        };
      }

      if ("isHexOnly" in inputSchema.idBlock === false) {
          return {
            verified: false,
            result: {
              error: "Wrong ASN.1 schema"
            }
          };
        }

      if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
        return {
          verified: false,
          result: root
        };
      }

      if (inputSchema.idBlock.isHexOnly === true) {
        if ("valueHex" in inputSchema.idBlock === false) {
            return {
              verified: false,
              result: {
                error: "Wrong ASN.1 schema"
              }
            };
          }

        var schemaView = new Uint8Array(inputSchema.idBlock.valueHex);
        var asn1View = new Uint8Array(inputData.idBlock.valueHex);

        if (schemaView.length !== asn1View.length) {
          return {
            verified: false,
            result: root
          };
        }

        for (var i = 0; i < schemaView.length; i++) {
          if (schemaView[i] !== asn1View[1]) {
            return {
              verified: false,
              result: root
            };
          }
        }
      }

      if (inputSchema.hasOwnProperty("name")) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
        if (inputSchema.name !== "") root[inputSchema.name] = inputData;
      }

      if (inputSchema.idBlock.isConstructed === true) {
        var admission = 0;
        var _result6 = {
          verified: false
        };
        var maxLength = inputSchema.valueBlock.value.length;

        if (maxLength > 0) {
          if (inputSchema.valueBlock.value[0] instanceof Repeated) maxLength = inputData.valueBlock.value.length;
        }

        if (maxLength === 0) {
          return {
            verified: true,
            result: root
          };
        }

        if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
          var _optional = true;

          for (var _i44 = 0; _i44 < inputSchema.valueBlock.value.length; _i44++) {
            _optional = _optional && (inputSchema.valueBlock.value[_i44].optional || false);
          }

          if (_optional === true) {
            return {
              verified: true,
              result: root
            };
          }

          if (inputSchema.hasOwnProperty("name")) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
            if (inputSchema.name !== "") delete root[inputSchema.name];
          }

          root.error = "Inconsistent object length";
          return {
            verified: false,
            result: root
          };
        }

        for (var _i45 = 0; _i45 < maxLength; _i45++) {
          if (_i45 - admission >= inputData.valueBlock.value.length) {
            if (inputSchema.valueBlock.value[_i45].optional === false) {
              var _result7 = {
                verified: false,
                result: root
              };
              root.error = "Inconsistent length between ASN.1 data and schema";

              if (inputSchema.hasOwnProperty("name")) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

                if (inputSchema.name !== "") {
                  delete root[inputSchema.name];
                  _result7.name = inputSchema.name;
                }
              }

              return _result7;
            }
          } else {
              if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                _result6 = compareSchema(root, inputData.valueBlock.value[_i45], inputSchema.valueBlock.value[0].value);

                if (_result6.verified === false) {
                  if (inputSchema.valueBlock.value[0].optional === true) admission++;else {
                    if (inputSchema.hasOwnProperty("name")) {
                      inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                      if (inputSchema.name !== "") delete root[inputSchema.name];
                    }

                    return _result6;
                  }
                }

                if ("name" in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
                  var arrayRoot = {};
                  if ("local" in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local === true) arrayRoot = inputData;else arrayRoot = root;
                  if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined") arrayRoot[inputSchema.valueBlock.value[0].name] = [];
                  arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[_i45]);
                }
              } else {
                  _result6 = compareSchema(root, inputData.valueBlock.value[_i45 - admission], inputSchema.valueBlock.value[_i45]);

                  if (_result6.verified === false) {
                    if (inputSchema.valueBlock.value[_i45].optional === true) admission++;else {
                      if (inputSchema.hasOwnProperty("name")) {
                        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                        if (inputSchema.name !== "") delete root[inputSchema.name];
                      }

                      return _result6;
                    }
                  }
                }
            }
        }

        if (_result6.verified === false) {
            var _result8 = {
              verified: false,
              result: root
            };

            if (inputSchema.hasOwnProperty("name")) {
              inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

              if (inputSchema.name !== "") {
                delete root[inputSchema.name];
                _result8.name = inputSchema.name;
              }
            }

            return _result8;
          }

        return {
          verified: true,
          result: root
        };
      }

      if ("primitiveSchema" in inputSchema && "valueHex" in inputData.valueBlock) {
        var _asn6 = fromBER(inputData.valueBlock.valueHex);

        if (_asn6.offset === -1) {
          var _result9 = {
            verified: false,
            result: _asn6.result
          };

          if (inputSchema.hasOwnProperty("name")) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");

            if (inputSchema.name !== "") {
              delete root[inputSchema.name];
              _result9.name = inputSchema.name;
            }
          }

          return _result9;
        }

        return compareSchema(root, _asn6.result, inputSchema.primitiveSchema);
      }

      return {
        verified: true,
        result: root
      };
    }

    function verifySchema(inputBuffer, inputSchema) {
      if (inputSchema instanceof Object === false) {
        return {
          verified: false,
          result: {
            error: "Wrong ASN.1 schema type"
          }
        };
      }

      var asn1 = fromBER(inputBuffer);

      if (asn1.offset === -1) {
        return {
          verified: false,
          result: asn1.result
        };
      }

      return compareSchema(asn1.result, asn1.result, inputSchema);
    }

    function fromJSON(json) {}
  });
  unwrapExports(asn1$1);
  var asn1_1$1 = asn1$1.fromBER;
  var asn1_2$1 = asn1$1.compareSchema;
  var asn1_3$1 = asn1$1.verifySchema;
  var asn1_4$1 = asn1$1.fromJSON;
  var asn1_5$1 = asn1$1.RawData;
  var asn1_6$1 = asn1$1.Repeated;
  var asn1_7$1 = asn1$1.Any;
  var asn1_8$1 = asn1$1.Choice;
  var asn1_9$1 = asn1$1.TIME;
  var asn1_10$1 = asn1$1.Duration;
  var asn1_11$1 = asn1$1.DateTime;
  var asn1_12$1 = asn1$1.TimeOfDay;
  var asn1_13$1 = asn1$1.DATE;
  var asn1_14$1 = asn1$1.GeneralizedTime;
  var asn1_15$1 = asn1$1.UTCTime;
  var asn1_16$1 = asn1$1.CharacterString;
  var asn1_17$1 = asn1$1.GeneralString;
  var asn1_18$1 = asn1$1.VisibleString;
  var asn1_19$1 = asn1$1.GraphicString;
  var asn1_20$1 = asn1$1.IA5String;
  var asn1_21$1 = asn1$1.VideotexString;
  var asn1_22$1 = asn1$1.TeletexString;
  var asn1_23$1 = asn1$1.PrintableString;
  var asn1_24$1 = asn1$1.NumericString;
  var asn1_25$1 = asn1$1.UniversalString;
  var asn1_26$1 = asn1$1.BmpString;
  var asn1_27$1 = asn1$1.RelativeObjectIdentifier;
  var asn1_28$1 = asn1$1.Utf8String;
  var asn1_29$1 = asn1$1.ObjectIdentifier;
  var asn1_30$1 = asn1$1.Enumerated;
  var asn1_31$1 = asn1$1.Integer;
  var asn1_32$1 = asn1$1.BitString;
  var asn1_33$1 = asn1$1.OctetString;
  var asn1_34$1 = asn1$1.Null;
  var asn1_35$1 = asn1$1.Set;
  var asn1_36$1 = asn1$1.Sequence;
  var asn1_37$1 = asn1$1.Boolean;
  var asn1_38$1 = asn1$1.EndOfContent;
  var asn1_39$1 = asn1$1.Constructed;
  var asn1_40$1 = asn1$1.Primitive;
  var asn1_41$1 = asn1$1.BaseBlock;
  var asn1_42$1 = asn1$1.ValueBlock;
  var asn1_43$1 = asn1$1.HexBlock;
  var engineCrypto = null;

  var Application = function () {
    function Application() {
      _classCallCheck(this, Application);
    }

    _createClass(Application, null, [{
      key: "setEngine",
      value: function setEngine(name, crypto) {
        engineCrypto = {
          getRandomValues: crypto.getRandomValues.bind(crypto),
          subtle: crypto.subtle,
          name: name
        };

        _setEngine(name, new CryptoEngine({
          name: name,
          crypto: crypto,
          subtle: crypto.subtle
        }), new CryptoEngine({
          name: name,
          crypto: crypto,
          subtle: crypto.subtle
        }));
      }
    }, {
      key: "isNodePlugin",
      value: function isNodePlugin() {
        return typeof self === "undefined" && typeof window === "undefined";
      }
    }, {
      key: "crypto",
      get: function get() {
        if (!engineCrypto) {
          throw new XmlError(XE.CRYPTOGRAPHIC_NO_MODULE);
        }

        return engineCrypto;
      }
    }]);

    return Application;
  }();

  function init() {
    if (!Application.isNodePlugin()) {
      Application.setEngine("W3 WebCrypto module", self.crypto);
    }
  }

  init();

  var XmlAlgorithm = function () {
    function XmlAlgorithm() {
      _classCallCheck(this, XmlAlgorithm);
    }

    _createClass(XmlAlgorithm, [{
      key: "getAlgorithmName",
      value: function getAlgorithmName() {
        return this.namespaceURI;
      }
    }]);

    return XmlAlgorithm;
  }();

  var HashAlgorithm = function (_XmlAlgorithm) {
    _inherits(HashAlgorithm, _XmlAlgorithm);

    function HashAlgorithm() {
      _classCallCheck(this, HashAlgorithm);

      return _possibleConstructorReturn(this, _getPrototypeOf(HashAlgorithm).apply(this, arguments));
    }

    _createClass(HashAlgorithm, [{
      key: "Digest",
      value: function () {
        var _Digest = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(xml) {
          var buf, txt, hash;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (typeof xml === "string") {
                    buf = Convert.FromString(xml, "utf8");
                  } else if (ArrayBuffer.isView(xml)) {
                    buf = new Uint8Array(xml.buffer);
                  } else if (xml instanceof ArrayBuffer) {
                    buf = new Uint8Array(xml);
                  } else {
                    txt = new XMLSerializer().serializeToString(xml);
                    buf = Convert.FromString(txt, "utf8");
                  }

                  _context2.next = 3;
                  return Application.crypto.subtle.digest(this.algorithm, buf);

                case 3:
                  hash = _context2.sent;
                  return _context2.abrupt("return", new Uint8Array(hash));

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function Digest(_x3) {
          return _Digest.apply(this, arguments);
        }

        return Digest;
      }()
    }]);

    return HashAlgorithm;
  }(XmlAlgorithm);

  var SignatureAlgorithm = function (_XmlAlgorithm2) {
    _inherits(SignatureAlgorithm, _XmlAlgorithm2);

    function SignatureAlgorithm() {
      _classCallCheck(this, SignatureAlgorithm);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignatureAlgorithm).apply(this, arguments));
    }

    _createClass(SignatureAlgorithm, [{
      key: "Sign",
      value: function () {
        var _Sign = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(signedInfo, signingKey, algorithm) {
          var info;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  info = Convert.FromString(signedInfo, "utf8");
                  return _context3.abrupt("return", Application.crypto.subtle.sign(algorithm, signingKey, info));

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function Sign(_x4, _x5, _x6) {
          return _Sign.apply(this, arguments);
        }

        return Sign;
      }()
    }, {
      key: "Verify",
      value: function () {
        var _Verify = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(signedInfo, key, signatureValue, algorithm) {
          var info;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  info = Convert.FromString(signedInfo, "utf8");
                  return _context4.abrupt("return", Application.crypto.subtle.verify(algorithm || this.algorithm, key, signatureValue, info));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function Verify(_x7, _x8, _x9, _x10) {
          return _Verify.apply(this, arguments);
        }

        return Verify;
      }()
    }]);

    return SignatureAlgorithm;
  }(XmlAlgorithm);

  var SHA1 = "SHA-1";
  var SHA256 = "SHA-256";
  var SHA384 = "SHA-384";
  var SHA512 = "SHA-512";
  var SHA1_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#sha1";
  var SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmlenc#sha256";
  var SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#sha384";
  var SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmlenc#sha512";

  var Sha1 = function (_HashAlgorithm) {
    _inherits(Sha1, _HashAlgorithm);

    function Sha1() {
      var _this113;

      _classCallCheck(this, Sha1);

      _this113 = _possibleConstructorReturn(this, _getPrototypeOf(Sha1).apply(this, arguments));
      _this113.algorithm = {
        name: SHA1
      };
      _this113.namespaceURI = SHA1_NAMESPACE;
      return _this113;
    }

    return Sha1;
  }(HashAlgorithm);

  var Sha256 = function (_HashAlgorithm2) {
    _inherits(Sha256, _HashAlgorithm2);

    function Sha256() {
      var _this114;

      _classCallCheck(this, Sha256);

      _this114 = _possibleConstructorReturn(this, _getPrototypeOf(Sha256).apply(this, arguments));
      _this114.algorithm = {
        name: SHA256
      };
      _this114.namespaceURI = SHA256_NAMESPACE;
      return _this114;
    }

    return Sha256;
  }(HashAlgorithm);

  var Sha384 = function (_HashAlgorithm3) {
    _inherits(Sha384, _HashAlgorithm3);

    function Sha384() {
      var _this115;

      _classCallCheck(this, Sha384);

      _this115 = _possibleConstructorReturn(this, _getPrototypeOf(Sha384).apply(this, arguments));
      _this115.algorithm = {
        name: SHA384
      };
      _this115.namespaceURI = SHA384_NAMESPACE;
      return _this115;
    }

    return Sha384;
  }(HashAlgorithm);

  var Sha512 = function (_HashAlgorithm4) {
    _inherits(Sha512, _HashAlgorithm4);

    function Sha512() {
      var _this116;

      _classCallCheck(this, Sha512);

      _this116 = _possibleConstructorReturn(this, _getPrototypeOf(Sha512).apply(this, arguments));
      _this116.algorithm = {
        name: SHA512
      };
      _this116.namespaceURI = SHA512_NAMESPACE;
      return _this116;
    }

    return Sha512;
  }(HashAlgorithm);

  var ECDSA = "ECDSA";
  var ECDSA_SHA1_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1";
  var ECDSA_SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256";
  var ECDSA_SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha384";
  var ECDSA_SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512";

  var EcdsaSha1 = function (_SignatureAlgorithm) {
    _inherits(EcdsaSha1, _SignatureAlgorithm);

    function EcdsaSha1() {
      var _this117;

      _classCallCheck(this, EcdsaSha1);

      _this117 = _possibleConstructorReturn(this, _getPrototypeOf(EcdsaSha1).apply(this, arguments));
      _this117.algorithm = {
        name: ECDSA,
        hash: {
          name: SHA1
        }
      };
      _this117.namespaceURI = ECDSA_SHA1_NAMESPACE;
      return _this117;
    }

    return EcdsaSha1;
  }(SignatureAlgorithm);

  var EcdsaSha256 = function (_SignatureAlgorithm2) {
    _inherits(EcdsaSha256, _SignatureAlgorithm2);

    function EcdsaSha256() {
      var _this118;

      _classCallCheck(this, EcdsaSha256);

      _this118 = _possibleConstructorReturn(this, _getPrototypeOf(EcdsaSha256).apply(this, arguments));
      _this118.algorithm = {
        name: ECDSA,
        hash: {
          name: SHA256
        }
      };
      _this118.namespaceURI = ECDSA_SHA256_NAMESPACE;
      return _this118;
    }

    return EcdsaSha256;
  }(SignatureAlgorithm);

  var EcdsaSha384 = function (_SignatureAlgorithm3) {
    _inherits(EcdsaSha384, _SignatureAlgorithm3);

    function EcdsaSha384() {
      var _this119;

      _classCallCheck(this, EcdsaSha384);

      _this119 = _possibleConstructorReturn(this, _getPrototypeOf(EcdsaSha384).apply(this, arguments));
      _this119.algorithm = {
        name: ECDSA,
        hash: {
          name: SHA384
        }
      };
      _this119.namespaceURI = ECDSA_SHA384_NAMESPACE;
      return _this119;
    }

    return EcdsaSha384;
  }(SignatureAlgorithm);

  var EcdsaSha512 = function (_SignatureAlgorithm4) {
    _inherits(EcdsaSha512, _SignatureAlgorithm4);

    function EcdsaSha512() {
      var _this120;

      _classCallCheck(this, EcdsaSha512);

      _this120 = _possibleConstructorReturn(this, _getPrototypeOf(EcdsaSha512).apply(this, arguments));
      _this120.algorithm = {
        name: ECDSA,
        hash: {
          name: SHA512
        }
      };
      _this120.namespaceURI = ECDSA_SHA512_NAMESPACE;
      return _this120;
    }

    return EcdsaSha512;
  }(SignatureAlgorithm);

  var HMAC = "HMAC";
  var HMAC_SHA1_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#hmac-sha1";
  var HMAC_SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#hmac-sha256";
  var HMAC_SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#hmac-sha384";
  var HMAC_SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#hmac-sha512";

  var HmacSha1 = function (_SignatureAlgorithm5) {
    _inherits(HmacSha1, _SignatureAlgorithm5);

    function HmacSha1() {
      var _this121;

      _classCallCheck(this, HmacSha1);

      _this121 = _possibleConstructorReturn(this, _getPrototypeOf(HmacSha1).apply(this, arguments));
      _this121.algorithm = {
        name: HMAC,
        hash: {
          name: SHA1
        }
      };
      _this121.namespaceURI = HMAC_SHA1_NAMESPACE;
      return _this121;
    }

    return HmacSha1;
  }(SignatureAlgorithm);

  var HmacSha256 = function (_SignatureAlgorithm6) {
    _inherits(HmacSha256, _SignatureAlgorithm6);

    function HmacSha256() {
      var _this122;

      _classCallCheck(this, HmacSha256);

      _this122 = _possibleConstructorReturn(this, _getPrototypeOf(HmacSha256).apply(this, arguments));
      _this122.algorithm = {
        name: HMAC,
        hash: {
          name: SHA256
        }
      };
      _this122.namespaceURI = HMAC_SHA256_NAMESPACE;
      return _this122;
    }

    return HmacSha256;
  }(SignatureAlgorithm);

  var HmacSha384 = function (_SignatureAlgorithm7) {
    _inherits(HmacSha384, _SignatureAlgorithm7);

    function HmacSha384() {
      var _this123;

      _classCallCheck(this, HmacSha384);

      _this123 = _possibleConstructorReturn(this, _getPrototypeOf(HmacSha384).apply(this, arguments));
      _this123.algorithm = {
        name: HMAC,
        hash: {
          name: SHA384
        }
      };
      _this123.namespaceURI = HMAC_SHA384_NAMESPACE;
      return _this123;
    }

    return HmacSha384;
  }(SignatureAlgorithm);

  var HmacSha512 = function (_SignatureAlgorithm8) {
    _inherits(HmacSha512, _SignatureAlgorithm8);

    function HmacSha512() {
      var _this124;

      _classCallCheck(this, HmacSha512);

      _this124 = _possibleConstructorReturn(this, _getPrototypeOf(HmacSha512).apply(this, arguments));
      _this124.algorithm = {
        name: HMAC,
        hash: {
          name: SHA512
        }
      };
      _this124.namespaceURI = HMAC_SHA512_NAMESPACE;
      return _this124;
    }

    return HmacSha512;
  }(SignatureAlgorithm);

  var RSA_PKCS1 = "RSASSA-PKCS1-v1_5";
  var RSA_PKCS1_SHA1_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#rsa-sha1";
  var RSA_PKCS1_SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256";
  var RSA_PKCS1_SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha384";
  var RSA_PKCS1_SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512";

  var RsaPkcs1Sha1 = function (_SignatureAlgorithm9) {
    _inherits(RsaPkcs1Sha1, _SignatureAlgorithm9);

    function RsaPkcs1Sha1() {
      var _this125;

      _classCallCheck(this, RsaPkcs1Sha1);

      _this125 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPkcs1Sha1).apply(this, arguments));
      _this125.algorithm = {
        name: RSA_PKCS1,
        hash: {
          name: SHA1
        }
      };
      _this125.namespaceURI = RSA_PKCS1_SHA1_NAMESPACE;
      return _this125;
    }

    return RsaPkcs1Sha1;
  }(SignatureAlgorithm);

  var RsaPkcs1Sha256 = function (_SignatureAlgorithm10) {
    _inherits(RsaPkcs1Sha256, _SignatureAlgorithm10);

    function RsaPkcs1Sha256() {
      var _this126;

      _classCallCheck(this, RsaPkcs1Sha256);

      _this126 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPkcs1Sha256).apply(this, arguments));
      _this126.algorithm = {
        name: RSA_PKCS1,
        hash: {
          name: SHA256
        }
      };
      _this126.namespaceURI = RSA_PKCS1_SHA256_NAMESPACE;
      return _this126;
    }

    return RsaPkcs1Sha256;
  }(SignatureAlgorithm);

  var RsaPkcs1Sha384 = function (_SignatureAlgorithm11) {
    _inherits(RsaPkcs1Sha384, _SignatureAlgorithm11);

    function RsaPkcs1Sha384() {
      var _this127;

      _classCallCheck(this, RsaPkcs1Sha384);

      _this127 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPkcs1Sha384).apply(this, arguments));
      _this127.algorithm = {
        name: RSA_PKCS1,
        hash: {
          name: SHA384
        }
      };
      _this127.namespaceURI = RSA_PKCS1_SHA384_NAMESPACE;
      return _this127;
    }

    return RsaPkcs1Sha384;
  }(SignatureAlgorithm);

  var RsaPkcs1Sha512 = function (_SignatureAlgorithm12) {
    _inherits(RsaPkcs1Sha512, _SignatureAlgorithm12);

    function RsaPkcs1Sha512() {
      var _this128;

      _classCallCheck(this, RsaPkcs1Sha512);

      _this128 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPkcs1Sha512).apply(this, arguments));
      _this128.algorithm = {
        name: RSA_PKCS1,
        hash: {
          name: SHA512
        }
      };
      _this128.namespaceURI = RSA_PKCS1_SHA512_NAMESPACE;
      return _this128;
    }

    return RsaPkcs1Sha512;
  }(SignatureAlgorithm);

  var RSA_PSS = "RSA-PSS";
  var RSA_PSS_WITH_PARAMS_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#rsa-pss";

  var RsaPssBase = function (_SignatureAlgorithm13) {
    _inherits(RsaPssBase, _SignatureAlgorithm13);

    function RsaPssBase(saltLength) {
      var _this129;

      _classCallCheck(this, RsaPssBase);

      _this129 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssBase).call(this));
      _this129.algorithm = {
        name: RSA_PSS,
        hash: {
          name: SHA1
        }
      };
      _this129.namespaceURI = RSA_PSS_WITH_PARAMS_NAMESPACE;

      if (saltLength) {
        _this129.algorithm.saltLength = saltLength;
      }

      return _this129;
    }

    return RsaPssBase;
  }(SignatureAlgorithm);

  var RsaPssSha1 = function (_RsaPssBase) {
    _inherits(RsaPssSha1, _RsaPssBase);

    function RsaPssSha1(saltLength) {
      var _this130;

      _classCallCheck(this, RsaPssSha1);

      _this130 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssSha1).call(this, saltLength));
      _this130.algorithm.hash.name = SHA1;
      return _this130;
    }

    return RsaPssSha1;
  }(RsaPssBase);

  var RsaPssSha256 = function (_RsaPssBase2) {
    _inherits(RsaPssSha256, _RsaPssBase2);

    function RsaPssSha256(saltLength) {
      var _this131;

      _classCallCheck(this, RsaPssSha256);

      _this131 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssSha256).call(this, saltLength));
      _this131.algorithm.hash.name = SHA256;
      return _this131;
    }

    return RsaPssSha256;
  }(RsaPssBase);

  var RsaPssSha384 = function (_RsaPssBase3) {
    _inherits(RsaPssSha384, _RsaPssBase3);

    function RsaPssSha384(saltLength) {
      var _this132;

      _classCallCheck(this, RsaPssSha384);

      _this132 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssSha384).call(this, saltLength));
      _this132.algorithm.hash.name = SHA384;
      return _this132;
    }

    return RsaPssSha384;
  }(RsaPssBase);

  var RsaPssSha512 = function (_RsaPssBase4) {
    _inherits(RsaPssSha512, _RsaPssBase4);

    function RsaPssSha512(saltLength) {
      var _this133;

      _classCallCheck(this, RsaPssSha512);

      _this133 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssSha512).call(this, saltLength));
      _this133.algorithm.hash.name = SHA512;
      return _this133;
    }

    return RsaPssSha512;
  }(RsaPssBase);

  var RSA_PSS_SHA1_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha1-rsa-MGF1";
  var RSA_PSS_SHA256_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha256-rsa-MGF1";
  var RSA_PSS_SHA384_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha384-rsa-MGF1";
  var RSA_PSS_SHA512_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha512-rsa-MGF1";

  var RsaPssWithoutParamsBase = function (_SignatureAlgorithm14) {
    _inherits(RsaPssWithoutParamsBase, _SignatureAlgorithm14);

    function RsaPssWithoutParamsBase() {
      var _this134;

      _classCallCheck(this, RsaPssWithoutParamsBase);

      _this134 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssWithoutParamsBase).call(this));
      _this134.algorithm = {
        name: RSA_PSS,
        hash: {
          name: SHA1
        }
      };
      _this134.namespaceURI = RSA_PSS_SHA1_NAMESPACE;
      return _this134;
    }

    return RsaPssWithoutParamsBase;
  }(SignatureAlgorithm);

  var RsaPssWithoutParamsSha1 = function (_RsaPssWithoutParamsB) {
    _inherits(RsaPssWithoutParamsSha1, _RsaPssWithoutParamsB);

    function RsaPssWithoutParamsSha1() {
      var _this135;

      _classCallCheck(this, RsaPssWithoutParamsSha1);

      _this135 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssWithoutParamsSha1).call(this));
      _this135.algorithm.hash.name = SHA1;
      _this135.algorithm.saltLength = 20;
      return _this135;
    }

    return RsaPssWithoutParamsSha1;
  }(RsaPssWithoutParamsBase);

  var RsaPssWithoutParamsSha256 = function (_RsaPssWithoutParamsB2) {
    _inherits(RsaPssWithoutParamsSha256, _RsaPssWithoutParamsB2);

    function RsaPssWithoutParamsSha256() {
      var _this136;

      _classCallCheck(this, RsaPssWithoutParamsSha256);

      _this136 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssWithoutParamsSha256).call(this));
      _this136.algorithm.hash.name = SHA256;
      _this136.algorithm.saltLength = 32;
      return _this136;
    }

    return RsaPssWithoutParamsSha256;
  }(RsaPssWithoutParamsBase);

  var RsaPssWithoutParamsSha384 = function (_RsaPssWithoutParamsB3) {
    _inherits(RsaPssWithoutParamsSha384, _RsaPssWithoutParamsB3);

    function RsaPssWithoutParamsSha384() {
      var _this137;

      _classCallCheck(this, RsaPssWithoutParamsSha384);

      _this137 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssWithoutParamsSha384).call(this));
      _this137.algorithm.hash.name = SHA384;
      _this137.algorithm.saltLength = 48;
      return _this137;
    }

    return RsaPssWithoutParamsSha384;
  }(RsaPssWithoutParamsBase);

  var RsaPssWithoutParamsSha512 = function (_RsaPssWithoutParamsB4) {
    _inherits(RsaPssWithoutParamsSha512, _RsaPssWithoutParamsB4);

    function RsaPssWithoutParamsSha512() {
      var _this138;

      _classCallCheck(this, RsaPssWithoutParamsSha512);

      _this138 = _possibleConstructorReturn(this, _getPrototypeOf(RsaPssWithoutParamsSha512).call(this));
      _this138.algorithm.hash.name = SHA512;
      _this138.algorithm.saltLength = 64;
      return _this138;
    }

    return RsaPssWithoutParamsSha512;
  }(RsaPssWithoutParamsBase);

  var XmlCanonicalizerState;

  (function (XmlCanonicalizerState) {
    XmlCanonicalizerState[XmlCanonicalizerState["BeforeDocElement"] = 0] = "BeforeDocElement";
    XmlCanonicalizerState[XmlCanonicalizerState["InsideDocElement"] = 1] = "InsideDocElement";
    XmlCanonicalizerState[XmlCanonicalizerState["AfterDocElement"] = 2] = "AfterDocElement";
  })(XmlCanonicalizerState || (XmlCanonicalizerState = {}));

  var XmlCanonicalizer = function () {
    function XmlCanonicalizer(withComments, excC14N) {
      var propagatedNamespaces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new NamespaceManager();

      _classCallCheck(this, XmlCanonicalizer);

      this.propagatedNamespaces = new NamespaceManager();
      this.result = [];
      this.visibleNamespaces = new NamespaceManager();
      this.inclusiveNamespacesPrefixList = [];
      this.state = XmlCanonicalizerState.BeforeDocElement;
      this.withComments = withComments;
      this.exclusive = excC14N;
      this.propagatedNamespaces = propagatedNamespaces;
    }

    _createClass(XmlCanonicalizer, [{
      key: "Canonicalize",
      value: function Canonicalize(node) {
        if (!node) {
          throw new XmlError(XE.CRYPTOGRAPHIC, "Parameter 1 is not Node");
        }

        var node2;

        if (node.nodeType === XmlNodeType.Document) {
          this.document = node;
          node2 = this.document.documentElement;
        } else {
          if (!node.ownerDocument) {
            throw new Error("Cannot get owner document");
          }

          this.document = node.ownerDocument;
          node2 = node;
        }

        this.WriteNode(node2);
        var res = this.result.join("");
        return res;
      }
    }, {
      key: "WriteNode",
      value: function WriteNode(node) {
        switch (node.nodeType) {
          case XmlNodeType.Document:
          case XmlNodeType.DocumentFragment:
            this.WriteDocumentNode(node);
            break;

          case XmlNodeType.Element:
            this.WriteElementNode(node);
            break;

          case XmlNodeType.CDATA:
          case XmlNodeType.SignificantWhitespace:
          case XmlNodeType.Text:
            this.WriteTextNode(node);
            break;

          case XmlNodeType.Whitespace:
            if (this.state === XmlCanonicalizerState.InsideDocElement) {
              this.WriteTextNode(node);
            }

            break;

          case XmlNodeType.Comment:
            this.WriteCommentNode(node);
            break;

          case XmlNodeType.ProcessingInstruction:
            this.WriteProcessingInstructionNode(node);
            break;

          case XmlNodeType.EntityReference:
            for (var i = 0; i < node.childNodes.length; i++) {
              this.WriteNode(node.childNodes[i]);
            }

            break;

          case XmlNodeType.Attribute:
            throw new XmlError(XE.CRYPTOGRAPHIC, "Attribute node is impossible here");

          case XmlNodeType.EndElement:
            throw new XmlError(XE.CRYPTOGRAPHIC, "Attribute node is impossible here");

          case XmlNodeType.EndEntity:
            throw new XmlError(XE.CRYPTOGRAPHIC, "Attribute node is impossible here");

          case XmlNodeType.DocumentType:
          case XmlNodeType.Entity:
          case XmlNodeType.Notation:
          case XmlNodeType.XmlDeclaration:
            break;
        }
      }
    }, {
      key: "WriteDocumentNode",
      value: function WriteDocumentNode(node) {
        this.state = XmlCanonicalizerState.BeforeDocElement;

        for (var child = node.firstChild; child != null; child = child.nextSibling) {
          this.WriteNode(child);
        }
      }
    }, {
      key: "WriteCommentNode",
      value: function WriteCommentNode(node) {
        if (this.withComments) {
          if (this.state === XmlCanonicalizerState.AfterDocElement) {
            this.result.push(String.fromCharCode(10) + "<!--");
          } else {
            this.result.push("<!--");
          }

          this.result.push(this.NormalizeString(node.nodeValue, XmlNodeType.Comment));

          if (this.state === XmlCanonicalizerState.BeforeDocElement) {
            this.result.push("-->" + String.fromCharCode(10));
          } else {
            this.result.push("-->");
          }
        }
      }
    }, {
      key: "WriteTextNode",
      value: function WriteTextNode(node) {
        this.result.push(this.NormalizeString(node.nodeValue, node.nodeType));
      }
    }, {
      key: "WriteProcessingInstructionNode",
      value: function WriteProcessingInstructionNode(node) {
        if (this.state === XmlCanonicalizerState.AfterDocElement) {
          this.result.push("\n<?");
        } else {
          this.result.push("<?");
        }

        this.result.push(node.nodeName);

        if (node.nodeValue) {
          this.result.push(" ");
          this.result.push(this.NormalizeString(node.nodeValue, XmlNodeType.ProcessingInstruction));
        }

        if (this.state === XmlCanonicalizerState.BeforeDocElement) {
          this.result.push("?>\n");
        } else {
          this.result.push("?>");
        }
      }
    }, {
      key: "WriteElementNode",
      value: function WriteElementNode(node) {
        if (this.state === XmlCanonicalizerState.BeforeDocElement) {
          this.state = XmlCanonicalizerState.InsideDocElement;
        }

        this.result.push("<");
        this.result.push(node.nodeName);
        var visibleNamespacesCount = this.WriteNamespacesAxis(node);
        this.WriteAttributesAxis(node);
        this.result.push(">");

        for (var n = node.firstChild; n != null; n = n.nextSibling) {
          this.WriteNode(n);
        }

        this.result.push("</");
        this.result.push(node.nodeName);
        this.result.push(">");

        if (this.state === XmlCanonicalizerState.BeforeDocElement) {
          this.state = XmlCanonicalizerState.AfterDocElement;
        }

        while (visibleNamespacesCount--) {
          this.visibleNamespaces.Pop();
        }
      }
    }, {
      key: "WriteNamespacesAxis",
      value: function WriteNamespacesAxis(node) {
        var _this139 = this;

        var list = [];
        var visibleNamespacesCount = 0;

        for (var i = 0; i < node.attributes.length; i++) {
          var attribute = node.attributes[i];

          if (!IsNamespaceNode(attribute)) {
            if (attribute.prefix && !this.IsNamespaceRendered(attribute.prefix, attribute.namespaceURI)) {
              var ns = {
                prefix: attribute.prefix,
                namespace: attribute.namespaceURI
              };
              list.push(ns);
              this.visibleNamespaces.Add(ns);
              visibleNamespacesCount++;
            }

            continue;
          }

          if (attribute.localName === "xmlns" && !attribute.prefix && !attribute.nodeValue) {
            var _ns = {
              prefix: attribute.prefix,
              namespace: attribute.nodeValue
            };
            list.push(_ns);
            this.visibleNamespaces.Add(_ns);
            visibleNamespacesCount++;
          }

          var prefix = null;
          var matches = void 0;

          if (matches = /xmlns:([\w\.]+)/.exec(attribute.nodeName)) {
            prefix = matches[1];
          }

          var printable = true;

          if (this.exclusive && !this.IsNamespaceInclusive(node, prefix)) {
            var used = IsNamespaceUsed(node, prefix);

            if (used > 1) {
              printable = false;
            } else if (used === 0) {
              continue;
            }
          }

          if (this.IsNamespaceRendered(prefix, attribute.nodeValue)) {
            continue;
          }

          if (printable) {
            var _ns2 = {
              prefix: prefix,
              namespace: attribute.nodeValue
            };
            list.push(_ns2);
            this.visibleNamespaces.Add(_ns2);
            visibleNamespacesCount++;
          }
        }

        if (!this.IsNamespaceRendered(node.prefix, node.namespaceURI) && node.namespaceURI !== "http://www.w3.org/2000/xmlns/") {
          var _ns3 = {
            prefix: node.prefix,
            namespace: node.namespaceURI
          };
          list.push(_ns3);
          this.visibleNamespaces.Add(_ns3);
          visibleNamespacesCount++;
        }

        list.sort(XmlDsigC14NTransformNamespacesComparer);
        var prevPrefix = null;
        list.forEach(function (n) {
          if (n.prefix === prevPrefix) {
            return;
          }

          prevPrefix = n.prefix;

          _this139.result.push(" xmlns");

          if (n.prefix) {
            _this139.result.push(":" + n.prefix);
          }

          _this139.result.push("=\"");

          _this139.result.push(n.namespace);

          _this139.result.push("\"");
        });
        return visibleNamespacesCount;
      }
    }, {
      key: "WriteAttributesAxis",
      value: function WriteAttributesAxis(node) {
        var _this140 = this;

        var list = [];

        for (var i = 0; i < node.attributes.length; i++) {
          var attribute = node.attributes[i];

          if (!IsNamespaceNode(attribute)) {
            list.push(attribute);
          }
        }

        list.sort(XmlDsigC14NTransformAttributesComparer);
        list.forEach(function (attribute) {
          if (attribute != null) {
            _this140.result.push(" ");

            _this140.result.push(attribute.nodeName);

            _this140.result.push("=\"");

            _this140.result.push(_this140.NormalizeString(attribute.nodeValue, XmlNodeType.Attribute));

            _this140.result.push("\"");
          }
        });
      }
    }, {
      key: "NormalizeString",
      value: function NormalizeString(input, type) {
        var sb = [];

        if (input) {
          for (var i = 0; i < input.length; i++) {
            var ch = input[i];

            if (ch === "<" && (type === XmlNodeType.Attribute || this.IsTextNode(type))) {
              sb.push("&lt;");
            } else if (ch === ">" && this.IsTextNode(type)) {
              sb.push("&gt;");
            } else if (ch === "&" && (type === XmlNodeType.Attribute || this.IsTextNode(type))) {
              sb.push("&amp;");
            } else if (ch === "\"" && type === XmlNodeType.Attribute) {
              sb.push("&quot;");
            } else if (ch === "\t" && type === XmlNodeType.Attribute) {
              sb.push("&#x9;");
            } else if (ch === "\n" && type === XmlNodeType.Attribute) {
              sb.push("&#xA;");
            } else if (ch === "\r") {
              sb.push("&#xD;");
            } else {
              sb.push(ch);
            }
          }
        }

        return sb.join("");
      }
    }, {
      key: "IsTextNode",
      value: function IsTextNode(type) {
        switch (type) {
          case XmlNodeType.Text:
          case XmlNodeType.CDATA:
          case XmlNodeType.SignificantWhitespace:
          case XmlNodeType.Whitespace:
            return true;
        }

        return false;
      }
    }, {
      key: "IsNamespaceInclusive",
      value: function IsNamespaceInclusive(node, prefix) {
        var prefix2 = prefix || null;

        if (node.prefix === prefix2) {
          return false;
        }

        return this.inclusiveNamespacesPrefixList.indexOf(prefix2 || "") !== -1;
      }
    }, {
      key: "IsNamespaceRendered",
      value: function IsNamespaceRendered(prefix, uri) {
        prefix = prefix || "";
        uri = uri || "";

        if (!prefix && !uri) {
          return true;
        }

        if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace") {
          return true;
        }

        var ns = this.visibleNamespaces.GetPrefix(prefix);

        if (ns) {
          return ns.namespace === uri;
        }

        return false;
      }
    }, {
      key: "InclusiveNamespacesPrefixList",
      get: function get() {
        return this.inclusiveNamespacesPrefixList.join(" ");
      },
      set: function set(value) {
        this.inclusiveNamespacesPrefixList = value.split(" ");
      }
    }]);

    return XmlCanonicalizer;
  }();

  function XmlDsigC14NTransformNamespacesComparer(x, y) {
    if (x == y) {
      return 0;
    } else if (!x) {
      return -1;
    } else if (!y) {
      return 1;
    } else if (!x.prefix) {
      return -1;
    } else if (!y.prefix) {
      return 1;
    }

    return x.prefix.localeCompare(y.prefix);
  }

  function XmlDsigC14NTransformAttributesComparer(x, y) {
    if (!x.namespaceURI && y.namespaceURI) {
      return -1;
    }

    if (!y.namespaceURI && x.namespaceURI) {
      return 1;
    }

    var left = x.namespaceURI + x.localName;
    var right = y.namespaceURI + y.localName;

    if (left === right) {
      return 0;
    } else if (left < right) {
      return -1;
    } else {
      return 1;
    }
  }

  function IsNamespaceUsed(node, prefix) {
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var prefix2 = prefix || null;

    if (node.prefix === prefix2) {
      return ++result;
    }

    if (node.attributes) {
      for (var i = 0; i < node.attributes.length; i++) {
        var attr = node.attributes[i];

        if (!IsNamespaceNode(attr) && prefix && node.attributes[i].prefix === prefix) {
          return ++result;
        }
      }
    }

    for (var n = node.firstChild; !!n; n = n.nextSibling) {
      if (n.nodeType === XmlNodeType.Element) {
        var el = n;
        var res = IsNamespaceUsed(el, prefix, result);

        if (n.nodeType === XmlNodeType.Element && res) {
          return ++result + res;
        }
      }
    }

    return result;
  }

  function IsNamespaceNode(node) {
    var reg = /xmlns:/;

    if (node !== null && node.nodeType === XmlNodeType.Attribute && (node.nodeName === "xmlns" || reg.test(node.nodeName))) {
      return true;
    }

    return false;
  }

  var XmlSignature = {
    DefaultCanonMethod: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
    DefaultDigestMethod: "http://www.w3.org/2001/04/xmlenc#sha256",
    DefaultPrefix: "ds",
    ElementNames: {
      CanonicalizationMethod: "CanonicalizationMethod",
      DigestMethod: "DigestMethod",
      DigestValue: "DigestValue",
      DSAKeyValue: "DSAKeyValue",
      DomainParameters: "DomainParameters",
      EncryptedKey: "EncryptedKey",
      HMACOutputLength: "HMACOutputLength",
      RSAPSSParams: "RSAPSSParams",
      MaskGenerationFunction: "MaskGenerationFunction",
      SaltLength: "SaltLength",
      KeyInfo: "KeyInfo",
      KeyName: "KeyName",
      KeyValue: "KeyValue",
      Modulus: "Modulus",
      Exponent: "Exponent",
      Manifest: "Manifest",
      Object: "Object",
      Reference: "Reference",
      RetrievalMethod: "RetrievalMethod",
      RSAKeyValue: "RSAKeyValue",
      ECDSAKeyValue: "ECDSAKeyValue",
      NamedCurve: "NamedCurve",
      PublicKey: "PublicKey",
      Signature: "Signature",
      SignatureMethod: "SignatureMethod",
      SignatureValue: "SignatureValue",
      SignedInfo: "SignedInfo",
      Transform: "Transform",
      Transforms: "Transforms",
      X509Data: "X509Data",
      PGPData: "PGPData",
      SPKIData: "SPKIData",
      SPKIexp: "SPKIexp",
      MgmtData: "MgmtData",
      X509IssuerSerial: "X509IssuerSerial",
      X509IssuerName: "X509IssuerName",
      X509SerialNumber: "X509SerialNumber",
      X509SKI: "X509SKI",
      X509SubjectName: "X509SubjectName",
      X509Certificate: "X509Certificate",
      X509CRL: "X509CRL",
      XPath: "XPath",
      X: "X",
      Y: "Y"
    },
    AttributeNames: {
      Algorithm: "Algorithm",
      Encoding: "Encoding",
      Id: "Id",
      MimeType: "MimeType",
      Type: "Type",
      URI: "URI"
    },
    AlgorithmNamespaces: {
      XmlDsigBase64Transform: "http://www.w3.org/2000/09/xmldsig#base64",
      XmlDsigC14NTransform: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
      XmlDsigC14NWithCommentsTransform: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments",
      XmlDsigEnvelopedSignatureTransform: "http://www.w3.org/2000/09/xmldsig#enveloped-signature",
      XmlDsigXPathTransform: "http://www.w3.org/TR/1999/REC-xpath-19991116",
      XmlDsigXsltTransform: "http://www.w3.org/TR/1999/REC-xslt-19991116",
      XmlDsigExcC14NTransform: "http://www.w3.org/2001/10/xml-exc-c14n#",
      XmlDsigExcC14NWithCommentsTransform: "http://www.w3.org/2001/10/xml-exc-c14n#WithComments",
      XmlDecryptionTransform: "http://www.w3.org/2002/07/decrypt#XML",
      XmlLicenseTransform: "urn:mpeg:mpeg21:2003:01-REL-R-NS:licenseTransform"
    },
    Uri: {
      Manifest: "http://www.w3.org/2000/09/xmldsig#Manifest"
    },
    NamespaceURI: "http://www.w3.org/2000/09/xmldsig#",
    NamespaceURIMore: "http://www.w3.org/2007/05/xmldsig-more#",
    NamespaceURIPss: "http://www.example.org/xmldsig-pss/#"
  };

  var XmlSignatureObject = function (_XmlObject3) {
    _inherits(XmlSignatureObject, _XmlObject3);

    function XmlSignatureObject() {
      _classCallCheck(this, XmlSignatureObject);

      return _possibleConstructorReturn(this, _getPrototypeOf(XmlSignatureObject).apply(this, arguments));
    }

    return XmlSignatureObject;
  }(XmlObject);

  XmlSignatureObject = __decorate([XmlElement({
    localName: "xmldsig",
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix
  })], XmlSignatureObject);

  var XmlSignatureCollection = function (_XmlCollection2) {
    _inherits(XmlSignatureCollection, _XmlCollection2);

    function XmlSignatureCollection() {
      _classCallCheck(this, XmlSignatureCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(XmlSignatureCollection).apply(this, arguments));
    }

    return XmlSignatureCollection;
  }(XmlCollection);

  XmlSignatureCollection = __decorate([XmlElement({
    localName: "xmldsig_collection",
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix
  })], XmlSignatureCollection);

  var KeyInfoClause = function (_XmlSignatureObject) {
    _inherits(KeyInfoClause, _XmlSignatureObject);

    function KeyInfoClause() {
      _classCallCheck(this, KeyInfoClause);

      return _possibleConstructorReturn(this, _getPrototypeOf(KeyInfoClause).apply(this, arguments));
    }

    return KeyInfoClause;
  }(XmlSignatureObject);

  var CanonicalizationMethod = function (_XmlSignatureObject2) {
    _inherits(CanonicalizationMethod, _XmlSignatureObject2);

    function CanonicalizationMethod() {
      _classCallCheck(this, CanonicalizationMethod);

      return _possibleConstructorReturn(this, _getPrototypeOf(CanonicalizationMethod).apply(this, arguments));
    }

    return CanonicalizationMethod;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Algorithm,
    required: true,
    defaultValue: XmlSignature.DefaultCanonMethod
  })], CanonicalizationMethod.prototype, "Algorithm", void 0);

  CanonicalizationMethod = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.CanonicalizationMethod
  })], CanonicalizationMethod);

  var DataObject = function (_XmlSignatureObject3) {
    _inherits(DataObject, _XmlSignatureObject3);

    function DataObject() {
      _classCallCheck(this, DataObject);

      return _possibleConstructorReturn(this, _getPrototypeOf(DataObject).apply(this, arguments));
    }

    return DataObject;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Id,
    defaultValue: ""
  })], DataObject.prototype, "Id", void 0);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.MimeType,
    defaultValue: ""
  })], DataObject.prototype, "MimeType", void 0);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Encoding,
    defaultValue: ""
  })], DataObject.prototype, "Encoding", void 0);

  DataObject = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.Object
  })], DataObject);

  var DataObjects = function (_XmlSignatureCollecti) {
    _inherits(DataObjects, _XmlSignatureCollecti);

    function DataObjects() {
      _classCallCheck(this, DataObjects);

      return _possibleConstructorReturn(this, _getPrototypeOf(DataObjects).apply(this, arguments));
    }

    return DataObjects;
  }(XmlSignatureCollection);

  DataObjects = __decorate([XmlElement({
    localName: "xmldsig_objects",
    parser: DataObject
  })], DataObjects);

  var DigestMethod = function (_XmlSignatureObject4) {
    _inherits(DigestMethod, _XmlSignatureObject4);

    function DigestMethod() {
      _classCallCheck(this, DigestMethod);

      return _possibleConstructorReturn(this, _getPrototypeOf(DigestMethod).apply(this, arguments));
    }

    return DigestMethod;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Algorithm,
    required: true,
    defaultValue: XmlSignature.DefaultDigestMethod
  })], DigestMethod.prototype, "Algorithm", void 0);

  DigestMethod = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.DigestMethod
  })], DigestMethod);

  var KeyInfo = function (_XmlSignatureCollecti2) {
    _inherits(KeyInfo, _XmlSignatureCollecti2);

    function KeyInfo() {
      _classCallCheck(this, KeyInfo);

      return _possibleConstructorReturn(this, _getPrototypeOf(KeyInfo).apply(this, arguments));
    }

    _createClass(KeyInfo, [{
      key: "OnLoadXml",
      value: function OnLoadXml(element) {
        var _this141 = this;

        var _loop = function _loop(i) {
          var node = element.childNodes.item(i);

          if (node.nodeType !== XmlNodeType.Element) {
            return "continue";
          }

          var KeyInfoClass = null;

          switch (node.localName) {
            case XmlSignature.ElementNames.KeyValue:
              KeyInfoClass = KeyValue;
              break;

            case XmlSignature.ElementNames.X509Data:
              KeyInfoClass = KeyInfoX509Data;
              break;

            case XmlSignature.ElementNames.SPKIData:
              KeyInfoClass = SPKIData;
              break;
          }

          if (KeyInfoClass) {
            var item = new KeyInfoClass();
            item.LoadXml(node);

            if (item instanceof KeyValue) {
              var keyValue = null;
              [RsaKeyValue, EcdsaKeyValue].some(function (KeyClass) {
                try {
                  var k = new KeyClass();

                  for (var j = 0; j < node.childNodes.length; j++) {
                    var nodeKey = node.childNodes.item(j);

                    if (nodeKey.nodeType !== XmlNodeType.Element) {
                      continue;
                    }

                    k.LoadXml(nodeKey);
                    keyValue = k;
                    return true;
                  }
                } catch (e) {}

                return false;
              });

              if (keyValue) {
                item.Value = keyValue;
              } else {
                throw new XmlError(XE.CRYPTOGRAPHIC, "Unsupported KeyValue in use");
              }

              item.GetXml();
            }

            _this141.Add(item);
          }
        };

        for (var i = 0; i < element.childNodes.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }
      }
    }]);

    return KeyInfo;
  }(XmlSignatureCollection);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Id,
    defaultValue: ""
  })], KeyInfo.prototype, "Id", void 0);

  KeyInfo = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.KeyInfo
  })], KeyInfo);

  var Transform = function (_XmlSignatureObject5) {
    _inherits(Transform, _XmlSignatureObject5);

    function Transform() {
      var _this142;

      _classCallCheck(this, Transform);

      _this142 = _possibleConstructorReturn(this, _getPrototypeOf(Transform).apply(this, arguments));
      _this142.innerXml = null;
      return _this142;
    }

    _createClass(Transform, [{
      key: "GetOutput",
      value: function GetOutput() {
        throw new XmlError(XE.METHOD_NOT_IMPLEMENTED);
      }
    }, {
      key: "LoadInnerXml",
      value: function LoadInnerXml(node) {
        if (!node) {
          throw new XmlError(XE.PARAM_REQUIRED, "node");
        }

        this.innerXml = node;
      }
    }, {
      key: "GetInnerXml",
      value: function GetInnerXml() {
        return this.innerXml;
      }
    }]);

    return Transform;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Algorithm,
    defaultValue: ""
  })], Transform.prototype, "Algorithm", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.XPath,
    defaultValue: ""
  })], Transform.prototype, "XPath", void 0);

  Transform = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.Transform
  })], Transform);

  var XmlDsigBase64Transform = function (_Transform) {
    _inherits(XmlDsigBase64Transform, _Transform);

    function XmlDsigBase64Transform() {
      var _this143;

      _classCallCheck(this, XmlDsigBase64Transform);

      _this143 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigBase64Transform).apply(this, arguments));
      _this143.Algorithm = XmlSignature.AlgorithmNamespaces.XmlDsigBase64Transform;
      return _this143;
    }

    _createClass(XmlDsigBase64Transform, [{
      key: "GetOutput",
      value: function GetOutput() {
        if (!this.innerXml) {
          throw new XmlError(XE.PARAM_REQUIRED, "innerXml");
        }

        return Convert.FromString(this.innerXml.textContent || "", "base64");
      }
    }]);

    return XmlDsigBase64Transform;
  }(Transform);

  var XmlDsigC14NTransform = function (_Transform2) {
    _inherits(XmlDsigC14NTransform, _Transform2);

    function XmlDsigC14NTransform() {
      var _this144;

      _classCallCheck(this, XmlDsigC14NTransform);

      _this144 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigC14NTransform).apply(this, arguments));
      _this144.Algorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
      _this144.xmlCanonicalizer = new XmlCanonicalizer(false, false);
      return _this144;
    }

    _createClass(XmlDsigC14NTransform, [{
      key: "GetOutput",
      value: function GetOutput() {
        if (!this.innerXml) {
          throw new XmlError(XE.PARAM_REQUIRED, "innerXml");
        }

        return this.xmlCanonicalizer.Canonicalize(this.innerXml);
      }
    }]);

    return XmlDsigC14NTransform;
  }(Transform);

  var XmlDsigC14NWithCommentsTransform = function (_XmlDsigC14NTransform) {
    _inherits(XmlDsigC14NWithCommentsTransform, _XmlDsigC14NTransform);

    function XmlDsigC14NWithCommentsTransform() {
      var _this145;

      _classCallCheck(this, XmlDsigC14NWithCommentsTransform);

      _this145 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigC14NWithCommentsTransform).apply(this, arguments));
      _this145.Algorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments";
      _this145.xmlCanonicalizer = new XmlCanonicalizer(true, false);
      return _this145;
    }

    return XmlDsigC14NWithCommentsTransform;
  }(XmlDsigC14NTransform);

  var XmlDsigEnvelopedSignatureTransform = function (_Transform3) {
    _inherits(XmlDsigEnvelopedSignatureTransform, _Transform3);

    function XmlDsigEnvelopedSignatureTransform() {
      var _this146;

      _classCallCheck(this, XmlDsigEnvelopedSignatureTransform);

      _this146 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigEnvelopedSignatureTransform).apply(this, arguments));
      _this146.Algorithm = "http://www.w3.org/2000/09/xmldsig#enveloped-signature";
      return _this146;
    }

    _createClass(XmlDsigEnvelopedSignatureTransform, [{
      key: "GetOutput",
      value: function GetOutput() {
        var _a;

        if (!this.innerXml) {
          throw new XmlError(XE.PARAM_REQUIRED, "innerXml");
        }

        var child = this.innerXml.firstChild;
        var signatures = [];

        while (child) {
          if (isElement(child) && child.localName === XmlSignature.ElementNames.Signature && child.namespaceURI === XmlSignature.NamespaceURI) {
            signatures.push(child);
          }

          child = child.nextSibling;
        }

        for (var _i46 = 0, _signatures = signatures; _i46 < _signatures.length; _i46++) {
          var signature = _signatures[_i46];
          (_a = signature.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(signature);
        }

        return this.innerXml;
      }
    }]);

    return XmlDsigEnvelopedSignatureTransform;
  }(Transform);

  var XmlDsigExcC14NTransform = function (_Transform4) {
    _inherits(XmlDsigExcC14NTransform, _Transform4);

    function XmlDsigExcC14NTransform() {
      var _this147;

      _classCallCheck(this, XmlDsigExcC14NTransform);

      _this147 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigExcC14NTransform).apply(this, arguments));
      _this147.Algorithm = "http://www.w3.org/2001/10/xml-exc-c14n#";
      _this147.xmlCanonicalizer = new XmlCanonicalizer(false, true);
      return _this147;
    }

    _createClass(XmlDsigExcC14NTransform, [{
      key: "GetOutput",
      value: function GetOutput() {
        if (!this.innerXml) {
          throw new XmlError(XE.PARAM_REQUIRED, "innerXml");
        }

        return this.xmlCanonicalizer.Canonicalize(this.innerXml);
      }
    }, {
      key: "InclusiveNamespacesPrefixList",
      get: function get() {
        return this.xmlCanonicalizer.InclusiveNamespacesPrefixList;
      },
      set: function set(value) {
        this.xmlCanonicalizer.InclusiveNamespacesPrefixList = value;
      }
    }]);

    return XmlDsigExcC14NTransform;
  }(Transform);

  var XmlDsigExcC14NWithCommentsTransform = function (_XmlDsigExcC14NTransf) {
    _inherits(XmlDsigExcC14NWithCommentsTransform, _XmlDsigExcC14NTransf);

    function XmlDsigExcC14NWithCommentsTransform() {
      var _this148;

      _classCallCheck(this, XmlDsigExcC14NWithCommentsTransform);

      _this148 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigExcC14NWithCommentsTransform).apply(this, arguments));
      _this148.Algorithm = "http://www.w3.org/2001/10/xml-exc-c14n#WithComments";
      _this148.xmlCanonicalizer = new XmlCanonicalizer(true, true);
      return _this148;
    }

    return XmlDsigExcC14NWithCommentsTransform;
  }(XmlDsigExcC14NTransform);

  var XmlDsigXPathTransform = function (_Transform5) {
    _inherits(XmlDsigXPathTransform, _Transform5);

    function XmlDsigXPathTransform() {
      var _this149;

      _classCallCheck(this, XmlDsigXPathTransform);

      _this149 = _possibleConstructorReturn(this, _getPrototypeOf(XmlDsigXPathTransform).apply(this, arguments));
      _this149.Algorithm = XmlSignature.AlgorithmNamespaces.XmlDsigXPathTransform;
      return _this149;
    }

    _createClass(XmlDsigXPathTransform, [{
      key: "GetOutput",
      value: function GetOutput() {
        if (!this.innerXml) {
          throw new XmlError(XE.PARAM_REQUIRED, "innerXml");
        }

        this.Filter(this.innerXml.ownerDocument || this.innerXml, this.XPath);
      }
    }, {
      key: "Filter",
      value: function Filter(node, xpath) {
        var _this150 = this;

        var childNodes = node.childNodes;
        var nodes = [];

        for (var i = 0; childNodes && i < childNodes.length; i++) {
          var child = childNodes.item(i);
          nodes.push(child);
        }

        nodes.forEach(function (child) {
          if (_this150.Evaluate(child, xpath)) {
            if (child.parentNode) {
              child.parentNode.removeChild(child);
            }
          } else {
            _this150.Filter(child, xpath);
          }
        });
      }
    }, {
      key: "GetEvaluator",
      value: function GetEvaluator(node) {
        if (typeof self !== "undefined") {
          return node.ownerDocument == null ? node : node.ownerDocument;
        } else {
          return require("xpath");
        }
      }
    }, {
      key: "Evaluate",
      value: function Evaluate(node, xpath) {
        try {
          var evaluator = this.GetEvaluator(node);
          var nsResolver = evaluator.createNSResolver(this.GetXml().firstChild);
          var xPath = "boolean(".concat(xpath, ")");
          var xpathResult = evaluator.evaluate(xPath, node, nsResolver, (typeof self === "undefined" ? require("xpath") : self).XPathResult.ANY_TYPE, null);
          return !xpathResult.booleanValue;
        } catch (e) {
          return false;
        }
      }
    }]);

    return XmlDsigXPathTransform;
  }(Transform);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.XPath,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    required: true
  })], XmlDsigXPathTransform.prototype, "XPath", void 0);

  var Transforms = function (_XmlSignatureCollecti3) {
    _inherits(Transforms, _XmlSignatureCollecti3);

    function Transforms() {
      _classCallCheck(this, Transforms);

      return _possibleConstructorReturn(this, _getPrototypeOf(Transforms).apply(this, arguments));
    }

    _createClass(Transforms, [{
      key: "OnLoadXml",
      value: function OnLoadXml(element) {
        _get(_getPrototypeOf(Transforms.prototype), "OnLoadXml", this).call(this, element);

        this.items = this.GetIterator().map(function (item) {
          switch (item.Algorithm) {
            case XmlSignature.AlgorithmNamespaces.XmlDsigEnvelopedSignatureTransform:
              return ChangeTransform(item, XmlDsigEnvelopedSignatureTransform);

            case XmlSignature.AlgorithmNamespaces.XmlDsigC14NTransform:
              return ChangeTransform(item, XmlDsigC14NTransform);

            case XmlSignature.AlgorithmNamespaces.XmlDsigC14NWithCommentsTransform:
              return ChangeTransform(item, XmlDsigC14NWithCommentsTransform);

            case XmlSignature.AlgorithmNamespaces.XmlDsigExcC14NTransform:
              return ChangeTransform(item, XmlDsigExcC14NTransform);

            case XmlSignature.AlgorithmNamespaces.XmlDsigExcC14NWithCommentsTransform:
              return ChangeTransform(item, XmlDsigExcC14NWithCommentsTransform);

            case XmlSignature.AlgorithmNamespaces.XmlDsigBase64Transform:
              return ChangeTransform(item, XmlDsigBase64Transform);

            case XmlSignature.AlgorithmNamespaces.XmlDsigXPathTransform:
              return ChangeTransform(item, XmlDsigXPathTransform);

            default:
              throw new XmlError(XE.CRYPTOGRAPHIC_UNKNOWN_TRANSFORM, item.Algorithm);
          }
        });
      }
    }]);

    return Transforms;
  }(XmlSignatureCollection);

  Transforms = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.Transforms,
    parser: Transform
  })], Transforms);

  function ChangeTransform(t1, t2) {
    var t = new t2();
    t.LoadXml(t1.Element);
    return t;
  }

  var Reference = function (_XmlSignatureObject6) {
    _inherits(Reference, _XmlSignatureObject6);

    function Reference(uri) {
      var _this151;

      _classCallCheck(this, Reference);

      _this151 = _possibleConstructorReturn(this, _getPrototypeOf(Reference).call(this));

      if (uri) {
        _this151.Uri = uri;
      }

      return _this151;
    }

    return Reference;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    defaultValue: ""
  })], Reference.prototype, "Id", void 0);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.URI
  })], Reference.prototype, "Uri", void 0);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Type,
    defaultValue: ""
  })], Reference.prototype, "Type", void 0);

  __decorate([XmlChildElement({
    parser: Transforms
  })], Reference.prototype, "Transforms", void 0);

  __decorate([XmlChildElement({
    required: true,
    parser: DigestMethod
  })], Reference.prototype, "DigestMethod", void 0);

  __decorate([XmlChildElement({
    required: true,
    localName: XmlSignature.ElementNames.DigestValue,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    converter: XmlBase64Converter
  })], Reference.prototype, "DigestValue", void 0);

  Reference = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.Reference
  })], Reference);

  var References = function (_XmlSignatureCollecti4) {
    _inherits(References, _XmlSignatureCollecti4);

    function References() {
      _classCallCheck(this, References);

      return _possibleConstructorReturn(this, _getPrototypeOf(References).apply(this, arguments));
    }

    return References;
  }(XmlSignatureCollection);

  References = __decorate([XmlElement({
    localName: "References",
    parser: Reference
  })], References);

  var SignatureMethodOther = function (_XmlSignatureCollecti5) {
    _inherits(SignatureMethodOther, _XmlSignatureCollecti5);

    function SignatureMethodOther() {
      _classCallCheck(this, SignatureMethodOther);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignatureMethodOther).apply(this, arguments));
    }

    _createClass(SignatureMethodOther, [{
      key: "OnLoadXml",
      value: function OnLoadXml(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
          var node = element.childNodes.item(i);

          if (node.nodeType !== XmlNodeType.Element || node.nodeName === XmlSignature.ElementNames.HMACOutputLength) {
            continue;
          }

          var ParserClass = void 0;

          switch (node.localName) {
            case XmlSignature.ElementNames.RSAPSSParams:
              ParserClass = PssAlgorithmParams;
              break;
          }

          if (ParserClass) {
            var _xml = new ParserClass();

            _xml.LoadXml(node);

            this.Add(_xml);
          }
        }
      }
    }]);

    return SignatureMethodOther;
  }(XmlSignatureCollection);

  SignatureMethodOther = __decorate([XmlElement({
    localName: "Other"
  })], SignatureMethodOther);

  var SignatureMethod = function (_XmlSignatureObject7) {
    _inherits(SignatureMethod, _XmlSignatureObject7);

    function SignatureMethod() {
      _classCallCheck(this, SignatureMethod);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignatureMethod).apply(this, arguments));
    }

    return SignatureMethod;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Algorithm,
    required: true,
    defaultValue: ""
  })], SignatureMethod.prototype, "Algorithm", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.HMACOutputLength,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    converter: XmlNumberConverter
  })], SignatureMethod.prototype, "HMACOutputLength", void 0);

  __decorate([XmlChildElement({
    parser: SignatureMethodOther,
    noRoot: true,
    minOccurs: 0
  })], SignatureMethod.prototype, "Any", void 0);

  SignatureMethod = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.SignatureMethod
  })], SignatureMethod);

  var SignedInfo = function (_XmlSignatureObject8) {
    _inherits(SignedInfo, _XmlSignatureObject8);

    function SignedInfo() {
      _classCallCheck(this, SignedInfo);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignedInfo).apply(this, arguments));
    }

    return SignedInfo;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Id,
    defaultValue: ""
  })], SignedInfo.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: CanonicalizationMethod,
    required: true
  })], SignedInfo.prototype, "CanonicalizationMethod", void 0);

  __decorate([XmlChildElement({
    parser: SignatureMethod,
    required: true
  })], SignedInfo.prototype, "SignatureMethod", void 0);

  __decorate([XmlChildElement({
    parser: References,
    minOccurs: 1,
    noRoot: true
  })], SignedInfo.prototype, "References", void 0);

  SignedInfo = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.SignedInfo
  })], SignedInfo);

  var Signature = function (_XmlSignatureObject9) {
    _inherits(Signature, _XmlSignatureObject9);

    function Signature() {
      _classCallCheck(this, Signature);

      return _possibleConstructorReturn(this, _getPrototypeOf(Signature).apply(this, arguments));
    }

    return Signature;
  }(XmlSignatureObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Id,
    defaultValue: ""
  })], Signature.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: SignedInfo,
    required: true
  })], Signature.prototype, "SignedInfo", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.SignatureValue,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    required: true,
    converter: XmlBase64Converter,
    defaultValue: null
  })], Signature.prototype, "SignatureValue", void 0);

  __decorate([XmlChildElement({
    parser: KeyInfo
  })], Signature.prototype, "KeyInfo", void 0);

  __decorate([XmlChildElement({
    parser: DataObjects,
    noRoot: true
  })], Signature.prototype, "ObjectList", void 0);

  Signature = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.Signature
  })], Signature);
  var NAMESPACE_URI = "http://www.w3.org/2001/04/xmldsig-more#";
  var PREFIX = "ecdsa";

  var EcdsaPublicKey = function (_XmlObject4) {
    _inherits(EcdsaPublicKey, _XmlObject4);

    function EcdsaPublicKey() {
      _classCallCheck(this, EcdsaPublicKey);

      return _possibleConstructorReturn(this, _getPrototypeOf(EcdsaPublicKey).apply(this, arguments));
    }

    return EcdsaPublicKey;
  }(XmlObject);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.X,
    namespaceURI: NAMESPACE_URI,
    prefix: PREFIX,
    required: true,
    converter: XmlBase64Converter
  })], EcdsaPublicKey.prototype, "X", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.Y,
    namespaceURI: NAMESPACE_URI,
    prefix: PREFIX,
    required: true,
    converter: XmlBase64Converter
  })], EcdsaPublicKey.prototype, "Y", void 0);

  EcdsaPublicKey = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.PublicKey,
    namespaceURI: NAMESPACE_URI,
    prefix: PREFIX
  })], EcdsaPublicKey);

  var NamedCurve = function (_XmlObject5) {
    _inherits(NamedCurve, _XmlObject5);

    function NamedCurve() {
      _classCallCheck(this, NamedCurve);

      return _possibleConstructorReturn(this, _getPrototypeOf(NamedCurve).apply(this, arguments));
    }

    return NamedCurve;
  }(XmlObject);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.URI,
    required: true
  })], NamedCurve.prototype, "Uri", void 0);

  NamedCurve = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.NamedCurve,
    namespaceURI: NAMESPACE_URI,
    prefix: PREFIX
  })], NamedCurve);

  var DomainParameters = function (_XmlObject6) {
    _inherits(DomainParameters, _XmlObject6);

    function DomainParameters() {
      _classCallCheck(this, DomainParameters);

      return _possibleConstructorReturn(this, _getPrototypeOf(DomainParameters).apply(this, arguments));
    }

    return DomainParameters;
  }(XmlObject);

  __decorate([XmlChildElement({
    parser: NamedCurve
  })], DomainParameters.prototype, "NamedCurve", void 0);

  DomainParameters = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.DomainParameters,
    namespaceURI: NAMESPACE_URI,
    prefix: PREFIX
  })], DomainParameters);

  var EcdsaKeyValue = function (_KeyInfoClause) {
    _inherits(EcdsaKeyValue, _KeyInfoClause);

    function EcdsaKeyValue() {
      var _this152;

      _classCallCheck(this, EcdsaKeyValue);

      _this152 = _possibleConstructorReturn(this, _getPrototypeOf(EcdsaKeyValue).apply(this, arguments));
      _this152.name = XmlSignature.ElementNames.ECDSAKeyValue;
      _this152.key = null;
      _this152.jwk = null;
      _this152.keyUsage = null;
      return _this152;
    }

    _createClass(EcdsaKeyValue, [{
      key: "importKey",
      value: function () {
        var _importKey = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(key) {
          var jwk;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(key.algorithm.name.toUpperCase() !== "ECDSA")) {
                    _context5.next = 2;
                    break;
                  }

                  throw new XmlError(XE.ALGORITHM_WRONG_NAME, key.algorithm.name);

                case 2:
                  _context5.next = 4;
                  return Application.crypto.subtle.exportKey("jwk", key);

                case 4:
                  jwk = _context5.sent;
                  this.key = key;
                  this.jwk = jwk;
                  this.PublicKey = new EcdsaPublicKey();
                  this.PublicKey.X = Convert.FromString(jwk.x, "base64url");
                  this.PublicKey.Y = Convert.FromString(jwk.y, "base64url");

                  if (!this.DomainParameters) {
                    this.DomainParameters = new DomainParameters();
                  }

                  if (!this.DomainParameters.NamedCurve) {
                    this.DomainParameters.NamedCurve = new NamedCurve();
                  }

                  this.DomainParameters.NamedCurve.Uri = GetNamedCurveOid(jwk.crv);
                  this.keyUsage = key.usages;
                  return _context5.abrupt("return", this);

                case 15:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function importKey(_x11) {
          return _importKey.apply(this, arguments);
        }

        return importKey;
      }()
    }, {
      key: "exportKey",
      value: function () {
        var _exportKey = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(alg) {
          var x, y, crv, jwk, key;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!this.key) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return", this.key);

                case 2:
                  x = Convert.ToBase64Url(this.PublicKey.X);
                  y = Convert.ToBase64Url(this.PublicKey.Y);
                  crv = GetNamedCurveFromOid(this.DomainParameters.NamedCurve.Uri);
                  jwk = {
                    kty: "EC",
                    crv: crv,
                    x: x,
                    y: y,
                    ext: true
                  };
                  this.keyUsage = ["verify"];
                  _context6.next = 9;
                  return Application.crypto.subtle.importKey("jwk", jwk, {
                    name: "ECDSA",
                    namedCurve: crv
                  }, true, this.keyUsage);

                case 9:
                  key = _context6.sent;
                  this.key = key;
                  return _context6.abrupt("return", this.key);

                case 12:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function exportKey(_x12) {
          return _exportKey.apply(this, arguments);
        }

        return exportKey;
      }()
    }, {
      key: "NamedCurve",
      get: function get() {
        return GetNamedCurveOid(this.DomainParameters.NamedCurve.Uri);
      }
    }]);

    return EcdsaKeyValue;
  }(KeyInfoClause);

  __decorate([XmlChildElement({
    parser: DomainParameters
  })], EcdsaKeyValue.prototype, "DomainParameters", void 0);

  __decorate([XmlChildElement({
    parser: EcdsaPublicKey,
    required: true
  })], EcdsaKeyValue.prototype, "PublicKey", void 0);

  EcdsaKeyValue = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.ECDSAKeyValue,
    namespaceURI: NAMESPACE_URI,
    prefix: PREFIX
  })], EcdsaKeyValue);

  function GetNamedCurveOid(namedCurve) {
    switch (namedCurve) {
      case "P-256":
        return "urn:oid:1.2.840.10045.3.1.7";

      case "P-384":
        return "urn:oid:1.3.132.0.34";

      case "P-521":
        return "urn:oid:1.3.132.0.35";
    }

    throw new XmlError(XE.CRYPTOGRAPHIC, "Unknown NamedCurve");
  }

  function GetNamedCurveFromOid(oid) {
    switch (oid) {
      case "urn:oid:1.2.840.10045.3.1.7":
        return "P-256";

      case "urn:oid:1.3.132.0.34":
        return "P-384";

      case "urn:oid:1.3.132.0.35":
        return "P-521";
    }

    throw new XmlError(XE.CRYPTOGRAPHIC, "Unknown NamedCurve OID");
  }

  var PssAlgorithmParams_1;

  var RsaKeyValue = function (_KeyInfoClause2) {
    _inherits(RsaKeyValue, _KeyInfoClause2);

    function RsaKeyValue() {
      var _this153;

      _classCallCheck(this, RsaKeyValue);

      _this153 = _possibleConstructorReturn(this, _getPrototypeOf(RsaKeyValue).apply(this, arguments));
      _this153.key = null;
      _this153.jwk = null;
      _this153.keyUsage = [];
      return _this153;
    }

    _createClass(RsaKeyValue, [{
      key: "importKey",
      value: function () {
        var _importKey2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(key) {
          var algName, jwk;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  algName = key.algorithm.name.toUpperCase();

                  if (!(algName !== RSA_PKCS1.toUpperCase() && algName !== RSA_PSS.toUpperCase())) {
                    _context7.next = 3;
                    break;
                  }

                  throw new XmlError(XE.ALGORITHM_WRONG_NAME, key.algorithm.name);

                case 3:
                  this.key = key;
                  _context7.next = 6;
                  return Application.crypto.subtle.exportKey("jwk", key);

                case 6:
                  jwk = _context7.sent;
                  this.jwk = jwk;
                  this.Modulus = Convert.FromBase64Url(jwk.n);
                  this.Exponent = Convert.FromBase64Url(jwk.e);
                  this.keyUsage = key.usages;
                  return _context7.abrupt("return", this);

                case 12:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function importKey(_x13) {
          return _importKey2.apply(this, arguments);
        }

        return importKey;
      }()
    }, {
      key: "exportKey",
      value: function () {
        var _exportKey2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(alg) {
          var modulus, exponent, algJwk, jwk;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (!this.key) {
                    _context8.next = 2;
                    break;
                  }

                  return _context8.abrupt("return", this.key);

                case 2:
                  if (this.Modulus) {
                    _context8.next = 4;
                    break;
                  }

                  throw new XmlError(XE.CRYPTOGRAPHIC, "RsaKeyValue has no Modulus");

                case 4:
                  modulus = Convert.ToBase64Url(this.Modulus);

                  if (this.Exponent) {
                    _context8.next = 7;
                    break;
                  }

                  throw new XmlError(XE.CRYPTOGRAPHIC, "RsaKeyValue has no Exponent");

                case 7:
                  exponent = Convert.ToBase64Url(this.Exponent);
                  _context8.t0 = alg.name.toUpperCase();
                  _context8.next = _context8.t0 === RSA_PKCS1.toUpperCase() ? 11 : _context8.t0 === RSA_PSS.toUpperCase() ? 13 : 15;
                  break;

                case 11:
                  algJwk = "R";
                  return _context8.abrupt("break", 16);

                case 13:
                  algJwk = "P";
                  return _context8.abrupt("break", 16);

                case 15:
                  throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, alg.name);

                case 16:
                  _context8.t1 = alg.hash.name.toUpperCase();
                  _context8.next = _context8.t1 === SHA1 ? 19 : _context8.t1 === SHA256 ? 21 : _context8.t1 === SHA384 ? 23 : _context8.t1 === SHA512 ? 25 : 27;
                  break;

                case 19:
                  algJwk += "S1";
                  return _context8.abrupt("break", 27);

                case 21:
                  algJwk += "S256";
                  return _context8.abrupt("break", 27);

                case 23:
                  algJwk += "S384";
                  return _context8.abrupt("break", 27);

                case 25:
                  algJwk += "S512";
                  return _context8.abrupt("break", 27);

                case 27:
                  jwk = {
                    kty: "RSA",
                    alg: algJwk,
                    n: modulus,
                    e: exponent,
                    ext: true
                  };
                  return _context8.abrupt("return", Application.crypto.subtle.importKey("jwk", jwk, alg, true, this.keyUsage));

                case 29:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function exportKey(_x14) {
          return _exportKey2.apply(this, arguments);
        }

        return exportKey;
      }()
    }, {
      key: "LoadXml",
      value: function LoadXml(node) {
        _get(_getPrototypeOf(RsaKeyValue.prototype), "LoadXml", this).call(this, node);

        this.keyUsage = ["verify"];
      }
    }]);

    return RsaKeyValue;
  }(KeyInfoClause);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.Modulus,
    prefix: XmlSignature.DefaultPrefix,
    namespaceURI: XmlSignature.NamespaceURI,
    required: true,
    converter: XmlBase64Converter
  })], RsaKeyValue.prototype, "Modulus", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.Exponent,
    prefix: XmlSignature.DefaultPrefix,
    namespaceURI: XmlSignature.NamespaceURI,
    required: true,
    converter: XmlBase64Converter
  })], RsaKeyValue.prototype, "Exponent", void 0);

  RsaKeyValue = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.RSAKeyValue
  })], RsaKeyValue);
  var NAMESPACE_URI$1 = "http://www.w3.org/2007/05/xmldsig-more#";
  var PREFIX$1 = "pss";

  var MaskGenerationFunction = function (_XmlObject7) {
    _inherits(MaskGenerationFunction, _XmlObject7);

    function MaskGenerationFunction() {
      _classCallCheck(this, MaskGenerationFunction);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskGenerationFunction).apply(this, arguments));
    }

    return MaskGenerationFunction;
  }(XmlObject);

  __decorate([XmlChildElement({
    parser: DigestMethod
  })], MaskGenerationFunction.prototype, "DigestMethod", void 0);

  __decorate([XmlAttribute({
    localName: XmlSignature.AttributeNames.Algorithm,
    defaultValue: "http://www.w3.org/2007/05/xmldsig-more#MGF1"
  })], MaskGenerationFunction.prototype, "Algorithm", void 0);

  MaskGenerationFunction = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.MaskGenerationFunction,
    prefix: PREFIX$1,
    namespaceURI: NAMESPACE_URI$1
  })], MaskGenerationFunction);

  var PssAlgorithmParams = PssAlgorithmParams_1 = function (_XmlObject8) {
    _inherits(PssAlgorithmParams, _XmlObject8);

    function PssAlgorithmParams(algorithm) {
      var _this154;

      _classCallCheck(this, PssAlgorithmParams);

      _this154 = _possibleConstructorReturn(this, _getPrototypeOf(PssAlgorithmParams).call(this));

      if (algorithm) {
        _this154.FromAlgorithm(algorithm);
      }

      return _this154;
    }

    _createClass(PssAlgorithmParams, [{
      key: "FromAlgorithm",
      value: function FromAlgorithm(algorithm) {
        this.DigestMethod = new DigestMethod();
        var digest = CryptoConfig.GetHashAlgorithm(algorithm.hash);
        this.DigestMethod.Algorithm = digest.namespaceURI;

        if (algorithm.saltLength) {
          this.SaltLength = algorithm.saltLength;
        }
      }
    }], [{
      key: "FromAlgorithm",
      value: function FromAlgorithm(algorithm) {
        return new PssAlgorithmParams_1(algorithm);
      }
    }]);

    return PssAlgorithmParams;
  }(XmlObject);

  __decorate([XmlChildElement({
    parser: DigestMethod
  })], PssAlgorithmParams.prototype, "DigestMethod", void 0);

  __decorate([XmlChildElement({
    parser: MaskGenerationFunction
  })], PssAlgorithmParams.prototype, "MGF", void 0);

  __decorate([XmlChildElement({
    converter: XmlNumberConverter,
    prefix: PREFIX$1,
    namespaceURI: NAMESPACE_URI$1
  })], PssAlgorithmParams.prototype, "SaltLength", void 0);

  __decorate([XmlChildElement({
    converter: XmlNumberConverter
  })], PssAlgorithmParams.prototype, "TrailerField", void 0);

  PssAlgorithmParams = PssAlgorithmParams_1 = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.RSAPSSParams,
    prefix: PREFIX$1,
    namespaceURI: NAMESPACE_URI$1
  })], PssAlgorithmParams);

  var KeyValue = function (_KeyInfoClause3) {
    _inherits(KeyValue, _KeyInfoClause3);

    function KeyValue(value) {
      var _this155;

      _classCallCheck(this, KeyValue);

      _this155 = _possibleConstructorReturn(this, _getPrototypeOf(KeyValue).call(this));

      if (value) {
        _this155.Value = value;
      }

      return _this155;
    }

    _createClass(KeyValue, [{
      key: "importKey",
      value: function () {
        var _importKey3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(key) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.t0 = key.algorithm.name.toUpperCase();
                  _context9.next = _context9.t0 === RSA_PSS.toUpperCase() ? 3 : _context9.t0 === RSA_PKCS1.toUpperCase() ? 3 : _context9.t0 === ECDSA.toUpperCase() ? 7 : 11;
                  break;

                case 3:
                  this.Value = new RsaKeyValue();
                  _context9.next = 6;
                  return this.Value.importKey(key);

                case 6:
                  return _context9.abrupt("break", 12);

                case 7:
                  this.Value = new EcdsaKeyValue();
                  _context9.next = 10;
                  return this.Value.importKey(key);

                case 10:
                  return _context9.abrupt("break", 12);

                case 11:
                  throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, key.algorithm.name);

                case 12:
                  return _context9.abrupt("return", this);

                case 13:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        function importKey(_x15) {
          return _importKey3.apply(this, arguments);
        }

        return importKey;
      }()
    }, {
      key: "exportKey",
      value: function () {
        var _exportKey3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(alg) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (this.Value) {
                    _context10.next = 2;
                    break;
                  }

                  throw new XmlError(XE.NULL_REFERENCE);

                case 2:
                  return _context10.abrupt("return", this.Value.exportKey(alg));

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        function exportKey(_x16) {
          return _exportKey3.apply(this, arguments);
        }

        return exportKey;
      }()
    }, {
      key: "OnGetXml",
      value: function OnGetXml(element) {
        if (!this.Value) {
          throw new XmlError(XE.CRYPTOGRAPHIC, "KeyValue has empty value");
        }

        var node = this.Value.GetXml();

        if (node) {
          element.appendChild(node);
        }
      }
    }, {
      key: "Value",
      set: function set(v) {
        this.element = null;
        this.value = v;
      },
      get: function get() {
        return this.value;
      }
    }]);

    return KeyValue;
  }(KeyInfoClause);

  KeyValue = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.KeyValue
  })], KeyValue);
  var OID = {
    "2.5.4.3": {
      short: "CN",
      long: "CommonName"
    },
    "2.5.4.6": {
      short: "C",
      long: "Country"
    },
    "2.5.4.5": {
      long: "DeviceSerialNumber"
    },
    "0.9.2342.19200300.100.1.25": {
      short: "DC",
      long: "DomainComponent"
    },
    "1.2.840.113549.1.9.1": {
      short: "E",
      long: "EMail"
    },
    "2.5.4.42": {
      short: "G",
      long: "GivenName"
    },
    "2.5.4.43": {
      short: "I",
      long: "Initials"
    },
    "2.5.4.7": {
      short: "L",
      long: "Locality"
    },
    "2.5.4.10": {
      short: "O",
      long: "Organization"
    },
    "2.5.4.11": {
      short: "OU",
      long: "OrganizationUnit"
    },
    "2.5.4.8": {
      short: "ST",
      long: "State"
    },
    "2.5.4.9": {
      short: "Street",
      long: "StreetAddress"
    },
    "2.5.4.4": {
      short: "SN",
      long: "SurName"
    },
    "2.5.4.12": {
      short: "T",
      long: "Title"
    },
    "1.2.840.113549.1.9.8": {
      long: "UnstructuredAddress"
    },
    "1.2.840.113549.1.9.2": {
      long: "UnstructuredName"
    }
  };

  var X509Certificate = function () {
    function X509Certificate(rawData) {
      _classCallCheck(this, X509Certificate);

      this.publicKey = null;

      if (rawData) {
        var buf = new Uint8Array(rawData);
        this.LoadRaw(buf);
        this.raw = buf;
      }
    }

    _createClass(X509Certificate, [{
      key: "Thumbprint",
      value: function () {
        var _Thumbprint = _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var algName,
              _args11 = arguments;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  algName = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : "SHA-1";
                  return _context11.abrupt("return", Application.crypto.subtle.digest(algName, this.raw));

                case 2:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        function Thumbprint() {
          return _Thumbprint.apply(this, arguments);
        }

        return Thumbprint;
      }()
    }, {
      key: "GetRaw",
      value: function GetRaw() {
        return this.raw;
      }
    }, {
      key: "exportKey",
      value: function () {
        var _exportKey4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(algorithm) {
          var alg, key;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  alg = {
                    algorithm: algorithm,
                    usages: ["verify"]
                  };

                  if (alg.algorithm.name.toUpperCase() === ECDSA) {
                    alg.algorithm.namedCurve = this.simpl.subjectPublicKeyInfo.toJSON().crv;
                  }

                  if (this.isHashedAlgorithm(alg.algorithm)) {
                    if (typeof alg.algorithm.hash === "string") {
                      alg.algorithm.hash = {
                        name: alg.algorithm.hash
                      };
                    }
                  }

                  _context12.next = 5;
                  return this.simpl.getPublicKey({
                    algorithm: alg
                  });

                case 5:
                  key = _context12.sent;
                  this.publicKey = key;
                  return _context12.abrupt("return", key);

                case 8:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        function exportKey(_x17) {
          return _exportKey4.apply(this, arguments);
        }

        return exportKey;
      }()
    }, {
      key: "NameToString",
      value: function NameToString(name) {
        var splitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";
        var res = [];
        name.typesAndValues.forEach(function (typeAndValue) {
          var type = typeAndValue.type;
          var oid = OID[type.toString()];
          var name2 = oid ? oid.short : null;
          res.push("".concat(name2 ? name2 : type, "=").concat(typeAndValue.value.valueBlock.value));
        });
        return res.join(splitter + " ");
      }
    }, {
      key: "LoadRaw",
      value: function LoadRaw(rawData) {
        this.raw = new Uint8Array(rawData);
        var asn1 = asn1_1$1(this.raw.buffer);
        this.simpl = new Certificate({
          schema: asn1.result
        });
      }
    }, {
      key: "isHashedAlgorithm",
      value: function isHashedAlgorithm(alg) {
        return !!alg["hash"];
      }
    }, {
      key: "SerialNumber",
      get: function get() {
        return this.simpl.serialNumber.valueBlock.toString();
      }
    }, {
      key: "Issuer",
      get: function get() {
        return this.NameToString(this.simpl.issuer);
      }
    }, {
      key: "Subject",
      get: function get() {
        return this.NameToString(this.simpl.subject);
      }
    }, {
      key: "PublicKey",
      get: function get() {
        return this.publicKey;
      }
    }]);

    return X509Certificate;
  }();

  var X509IssuerSerial = function (_XmlSignatureObject10) {
    _inherits(X509IssuerSerial, _XmlSignatureObject10);

    function X509IssuerSerial() {
      _classCallCheck(this, X509IssuerSerial);

      return _possibleConstructorReturn(this, _getPrototypeOf(X509IssuerSerial).apply(this, arguments));
    }

    return X509IssuerSerial;
  }(XmlSignatureObject);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.X509IssuerName,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    required: true
  })], X509IssuerSerial.prototype, "X509IssuerName", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.X509SerialNumber,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    required: true
  })], X509IssuerSerial.prototype, "X509SerialNumber", void 0);

  X509IssuerSerial = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.X509IssuerSerial
  })], X509IssuerSerial);
  var X509IncludeOption;

  (function (X509IncludeOption) {
    X509IncludeOption[X509IncludeOption["None"] = 0] = "None";
    X509IncludeOption[X509IncludeOption["EndCertOnly"] = 1] = "EndCertOnly";
    X509IncludeOption[X509IncludeOption["ExcludeRoot"] = 2] = "ExcludeRoot";
    X509IncludeOption[X509IncludeOption["WholeChain"] = 3] = "WholeChain";
  })(X509IncludeOption || (X509IncludeOption = {}));

  var KeyInfoX509Data = function (_KeyInfoClause4) {
    _inherits(KeyInfoX509Data, _KeyInfoClause4);

    function KeyInfoX509Data(cert) {
      var _this156;

      var includeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : X509IncludeOption.None;

      _classCallCheck(this, KeyInfoX509Data);

      _this156 = _possibleConstructorReturn(this, _getPrototypeOf(KeyInfoX509Data).call(this));
      _this156.x509crl = null;
      _this156.SubjectKeyIdList = [];
      _this156.key = null;

      if (cert) {
        if (cert instanceof Uint8Array) {
          _this156.AddCertificate(new X509Certificate(cert));
        } else if (cert instanceof X509Certificate) {
          switch (includeOptions) {
            case X509IncludeOption.None:
            case X509IncludeOption.EndCertOnly:
              _this156.AddCertificate(cert);

              break;

            case X509IncludeOption.ExcludeRoot:
              _this156.AddCertificatesChainFrom(cert, false);

              break;

            case X509IncludeOption.WholeChain:
              _this156.AddCertificatesChainFrom(cert, true);

              break;
          }
        }
      }

      return _this156;
    }

    _createClass(KeyInfoX509Data, [{
      key: "importKey",
      value: function () {
        var _importKey4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(key) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  throw new XmlError(XE.METHOD_NOT_SUPPORTED);

                case 1:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        function importKey(_x18) {
          return _importKey4.apply(this, arguments);
        }

        return importKey;
      }()
    }, {
      key: "exportKey",
      value: function () {
        var _exportKey5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(alg) {
          var key;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  if (this.Certificates.length) {
                    _context14.next = 2;
                    break;
                  }

                  throw new XmlError(XE.NULL_REFERENCE);

                case 2:
                  _context14.next = 4;
                  return this.Certificates[0].exportKey(alg);

                case 4:
                  key = _context14.sent;
                  this.key = key;
                  return _context14.abrupt("return", key);

                case 7:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        function exportKey(_x19) {
          return _exportKey5.apply(this, arguments);
        }

        return exportKey;
      }()
    }, {
      key: "AddCertificate",
      value: function AddCertificate(certificate) {
        if (!certificate) {
          throw new XmlError(XE.PARAM_REQUIRED, "certificate");
        }

        if (!this.X509CertificateList) {
          this.X509CertificateList = [];
        }

        this.X509CertificateList.push(certificate);
      }
    }, {
      key: "AddIssuerSerial",
      value: function AddIssuerSerial(issuerName, serialNumber) {
        if (issuerName == null) {
          throw new XmlError(XE.PARAM_REQUIRED, "issuerName");
        }

        if (this.IssuerSerialList == null) {
          this.IssuerSerialList = [];
        }

        var xis = {
          issuerName: issuerName,
          serialNumber: serialNumber
        };
        this.IssuerSerialList.push(xis);
      }
    }, {
      key: "AddSubjectKeyId",
      value: function AddSubjectKeyId(subjectKeyId) {
        if (this.SubjectKeyIdList) {
          this.SubjectKeyIdList = [];
        }

        if (typeof subjectKeyId === "string") {
          if (subjectKeyId != null) {
            var id;
            id = Convert.FromBase64(subjectKeyId);
            this.SubjectKeyIdList.push(id);
          }
        } else {
          this.SubjectKeyIdList.push(subjectKeyId);
        }
      }
    }, {
      key: "AddSubjectName",
      value: function AddSubjectName(subjectName) {
        if (this.SubjectNameList == null) {
          this.SubjectNameList = [];
        }

        this.SubjectNameList.push(subjectName);
      }
    }, {
      key: "GetXml",
      value: function GetXml() {
        var doc = this.CreateDocument();
        var xel = this.CreateElement(doc);
        var prefix = this.GetPrefix();

        if (this.IssuerSerialList != null && this.IssuerSerialList.length > 0) {
          this.IssuerSerialList.forEach(function (iser) {
            var isl = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509IssuerSerial);
            var xin = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509IssuerName);
            xin.textContent = iser.issuerName;
            isl.appendChild(xin);
            var xsn = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509SerialNumber);
            xsn.textContent = iser.serialNumber;
            isl.appendChild(xsn);
            xel.appendChild(isl);
          });
        }

        if (this.SubjectKeyIdList != null && this.SubjectKeyIdList.length > 0) {
          this.SubjectKeyIdList.forEach(function (skid) {
            var ski = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509SKI);
            ski.textContent = Convert.ToBase64(skid);
            xel.appendChild(ski);
          });
        }

        if (this.SubjectNameList != null && this.SubjectNameList.length > 0) {
          this.SubjectNameList.forEach(function (subject) {
            var sn = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509SubjectName);
            sn.textContent = subject;
            xel.appendChild(sn);
          });
        }

        if (this.X509CertificateList != null && this.X509CertificateList.length > 0) {
          this.X509CertificateList.forEach(function (x509) {
            var cert = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509Certificate);
            cert.textContent = Convert.ToBase64(x509.GetRaw());
            xel.appendChild(cert);
          });
        }

        if (this.x509crl != null) {
          var crl = doc.createElementNS(XmlSignature.NamespaceURI, prefix + XmlSignature.ElementNames.X509CRL);
          crl.textContent = Convert.ToBase64(this.x509crl);
          xel.appendChild(crl);
        }

        return xel;
      }
    }, {
      key: "LoadXml",
      value: function LoadXml(element) {
        var _this157 = this;

        _get(_getPrototypeOf(KeyInfoX509Data.prototype), "LoadXml", this).call(this, element);

        if (this.IssuerSerialList) {
          this.IssuerSerialList = [];
        }

        if (this.SubjectKeyIdList) {
          this.SubjectKeyIdList = [];
        }

        if (this.SubjectNameList) {
          this.SubjectNameList = [];
        }

        if (this.X509CertificateList) {
          this.X509CertificateList = [];
        }

        this.x509crl = null;
        var xnl = this.GetChildren(XmlSignature.ElementNames.X509IssuerSerial);

        if (xnl) {
          xnl.forEach(function (xel) {
            var issuer = XmlSignatureObject.GetChild(xel, XmlSignature.ElementNames.X509IssuerName, XmlSignature.NamespaceURI, true);
            var serial = XmlSignatureObject.GetChild(xel, XmlSignature.ElementNames.X509SerialNumber, XmlSignature.NamespaceURI, true);

            if (issuer && issuer.textContent && serial && serial.textContent) {
              _this157.AddIssuerSerial(issuer.textContent, serial.textContent);
            }
          });
        }

        xnl = this.GetChildren(XmlSignature.ElementNames.X509SKI);

        if (xnl) {
          xnl.forEach(function (xel) {
            if (xel.textContent) {
              var skid = Convert.FromBase64(xel.textContent);

              _this157.AddSubjectKeyId(skid);
            }
          });
        }

        xnl = this.GetChildren(XmlSignature.ElementNames.X509SubjectName);

        if (xnl != null) {
          xnl.forEach(function (xel) {
            if (xel.textContent) {
              _this157.AddSubjectName(xel.textContent);
            }
          });
        }

        xnl = this.GetChildren(XmlSignature.ElementNames.X509Certificate);

        if (xnl) {
          xnl.forEach(function (xel) {
            if (xel.textContent) {
              var cert = Convert.FromBase64(xel.textContent);

              _this157.AddCertificate(new X509Certificate(cert));
            }
          });
        }

        var x509el = this.GetChild(XmlSignature.ElementNames.X509CRL, false);

        if (x509el && x509el.textContent) {
          this.x509crl = Convert.FromBase64(x509el.textContent);
        }
      }
    }, {
      key: "AddCertificatesChainFrom",
      value: function AddCertificatesChainFrom(cert, root) {
        throw new XmlError(XE.METHOD_NOT_IMPLEMENTED);
      }
    }, {
      key: "Key",
      get: function get() {
        return this.key;
      }
    }, {
      key: "Certificates",
      get: function get() {
        return this.X509CertificateList;
      }
    }, {
      key: "CRL",
      get: function get() {
        return this.x509crl;
      },
      set: function set(value) {
        this.x509crl = value;
      }
    }, {
      key: "IssuerSerials",
      get: function get() {
        return this.IssuerSerialList;
      }
    }, {
      key: "SubjectKeyIds",
      get: function get() {
        return this.SubjectKeyIdList;
      }
    }, {
      key: "SubjectNames",
      get: function get() {
        return this.SubjectNameList;
      }
    }]);

    return KeyInfoX509Data;
  }(KeyInfoClause);

  KeyInfoX509Data = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.X509Data
  })], KeyInfoX509Data);

  var SPKIData = function (_KeyInfoClause5) {
    _inherits(SPKIData, _KeyInfoClause5);

    function SPKIData() {
      _classCallCheck(this, SPKIData);

      return _possibleConstructorReturn(this, _getPrototypeOf(SPKIData).apply(this, arguments));
    }

    _createClass(SPKIData, [{
      key: "importKey",
      value: function () {
        var _importKey5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(key) {
          var spki;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return Application.crypto.subtle.exportKey("spki", key);

                case 2:
                  spki = _context15.sent;
                  this.SPKIexp = new Uint8Array(spki);
                  this.Key = key;
                  return _context15.abrupt("return", this);

                case 6:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        function importKey(_x20) {
          return _importKey5.apply(this, arguments);
        }

        return importKey;
      }()
    }, {
      key: "exportKey",
      value: function () {
        var _exportKey6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(alg) {
          var key;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return Application.crypto.subtle.importKey("spki", this.SPKIexp, alg, true, ["verify"]);

                case 2:
                  key = _context16.sent;
                  this.Key = key;
                  return _context16.abrupt("return", key);

                case 5:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        function exportKey(_x21) {
          return _exportKey6.apply(this, arguments);
        }

        return exportKey;
      }()
    }]);

    return SPKIData;
  }(KeyInfoClause);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.SPKIexp,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    required: true,
    converter: XmlBase64Converter
  })], SPKIData.prototype, "SPKIexp", void 0);

  SPKIData = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.SPKIData
  })], SPKIData);
  var SignatureAlgorithms = {};
  SignatureAlgorithms[RSA_PKCS1_SHA1_NAMESPACE] = RsaPkcs1Sha1;
  SignatureAlgorithms[RSA_PKCS1_SHA256_NAMESPACE] = RsaPkcs1Sha256;
  SignatureAlgorithms[RSA_PKCS1_SHA384_NAMESPACE] = RsaPkcs1Sha384;
  SignatureAlgorithms[RSA_PKCS1_SHA512_NAMESPACE] = RsaPkcs1Sha512;
  SignatureAlgorithms[ECDSA_SHA1_NAMESPACE] = EcdsaSha1;
  SignatureAlgorithms[ECDSA_SHA256_NAMESPACE] = EcdsaSha256;
  SignatureAlgorithms[ECDSA_SHA384_NAMESPACE] = EcdsaSha384;
  SignatureAlgorithms[ECDSA_SHA512_NAMESPACE] = EcdsaSha512;
  SignatureAlgorithms[HMAC_SHA1_NAMESPACE] = HmacSha1;
  SignatureAlgorithms[HMAC_SHA256_NAMESPACE] = HmacSha256;
  SignatureAlgorithms[HMAC_SHA384_NAMESPACE] = HmacSha384;
  SignatureAlgorithms[HMAC_SHA512_NAMESPACE] = HmacSha512;
  SignatureAlgorithms[RSA_PSS_SHA1_NAMESPACE] = RsaPssWithoutParamsSha1;
  SignatureAlgorithms[RSA_PSS_SHA256_NAMESPACE] = RsaPssWithoutParamsSha256;
  SignatureAlgorithms[RSA_PSS_SHA384_NAMESPACE] = RsaPssWithoutParamsSha384;
  SignatureAlgorithms[RSA_PSS_SHA512_NAMESPACE] = RsaPssWithoutParamsSha512;
  var HashAlgorithms = {};
  HashAlgorithms[SHA1_NAMESPACE] = Sha1;
  HashAlgorithms[SHA256_NAMESPACE] = Sha256;
  HashAlgorithms[SHA384_NAMESPACE] = Sha384;
  HashAlgorithms[SHA512_NAMESPACE] = Sha512;

  var CryptoConfig = function () {
    function CryptoConfig() {
      _classCallCheck(this, CryptoConfig);
    }

    _createClass(CryptoConfig, null, [{
      key: "CreateFromName",
      value: function CreateFromName(name) {
        var transform;

        switch (name) {
          case XmlSignature.AlgorithmNamespaces.XmlDsigBase64Transform:
            transform = new XmlDsigBase64Transform();
            break;

          case XmlSignature.AlgorithmNamespaces.XmlDsigC14NTransform:
            transform = new XmlDsigC14NTransform();
            break;

          case XmlSignature.AlgorithmNamespaces.XmlDsigC14NWithCommentsTransform:
            transform = new XmlDsigC14NWithCommentsTransform();
            break;

          case XmlSignature.AlgorithmNamespaces.XmlDsigEnvelopedSignatureTransform:
            transform = new XmlDsigEnvelopedSignatureTransform();
            break;

          case XmlSignature.AlgorithmNamespaces.XmlDsigXPathTransform:
            throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);

          case XmlSignature.AlgorithmNamespaces.XmlDsigXsltTransform:
            throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);

          case XmlSignature.AlgorithmNamespaces.XmlDsigExcC14NTransform:
            transform = new XmlDsigExcC14NTransform();
            break;

          case XmlSignature.AlgorithmNamespaces.XmlDsigExcC14NWithCommentsTransform:
            transform = new XmlDsigExcC14NWithCommentsTransform();
            break;

          case XmlSignature.AlgorithmNamespaces.XmlDecryptionTransform:
            throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);

          default:
            throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);
        }

        return transform;
      }
    }, {
      key: "CreateSignatureAlgorithm",
      value: function CreateSignatureAlgorithm(method) {
        var alg = SignatureAlgorithms[method.Algorithm] || null;

        if (alg) {
          return new alg();
        } else if (method.Algorithm === RSA_PSS_WITH_PARAMS_NAMESPACE) {
          var pssParams;
          method.Any.Some(function (item) {
            if (item instanceof PssAlgorithmParams) {
              pssParams = item;
            }

            return !!pssParams;
          });

          if (pssParams) {
            switch (pssParams.DigestMethod.Algorithm) {
              case SHA1_NAMESPACE:
                return new RsaPssSha1(pssParams.SaltLength);

              case SHA256_NAMESPACE:
                return new RsaPssSha256(pssParams.SaltLength);

              case SHA384_NAMESPACE:
                return new RsaPssSha384(pssParams.SaltLength);

              case SHA512_NAMESPACE:
                return new RsaPssSha512(pssParams.SaltLength);
            }
          }

          throw new XmlError(XE.CRYPTOGRAPHIC, "Cannot get params for RSA-PSS algoriithm");
        }

        throw new Error("signature algorithm '".concat(method.Algorithm, "' is not supported"));
      }
    }, {
      key: "CreateHashAlgorithm",
      value: function CreateHashAlgorithm(namespace) {
        var alg = HashAlgorithms[namespace];

        if (alg) {
          return new alg();
        } else {
          throw new Error("hash algorithm '" + namespace + "' is not supported");
        }
      }
    }, {
      key: "GetHashAlgorithm",
      value: function GetHashAlgorithm(algorithm) {
        var alg = typeof algorithm === "string" ? {
          name: algorithm
        } : algorithm;

        switch (alg.name.toUpperCase()) {
          case SHA1:
            return new Sha1();

          case SHA256:
            return new Sha256();

          case SHA384:
            return new Sha384();

          case SHA512:
            return new Sha512();

          default:
            throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, alg.name);
        }
      }
    }, {
      key: "GetSignatureAlgorithm",
      value: function GetSignatureAlgorithm(algorithm) {
        if (typeof algorithm.hash === "string") {
          algorithm.hash = {
            name: algorithm.hash
          };
        }

        var hashName = algorithm.hash.name;

        if (!hashName) {
          throw new Error("Signing algorithm doesn't have name for hash");
        }

        var alg;

        switch (algorithm.name.toUpperCase()) {
          case RSA_PKCS1.toUpperCase():
            switch (hashName.toUpperCase()) {
              case SHA1:
                alg = new RsaPkcs1Sha1();
                break;

              case SHA256:
                alg = new RsaPkcs1Sha256();
                break;

              case SHA384:
                alg = new RsaPkcs1Sha384();
                break;

              case SHA512:
                alg = new RsaPkcs1Sha512();
                break;

              default:
                throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, "".concat(algorithm.name, ":").concat(hashName));
            }

            break;

          case RSA_PSS.toUpperCase():
            var saltLength = algorithm.saltLength;

            switch (hashName.toUpperCase()) {
              case SHA1:
                alg = saltLength ? new RsaPssSha1(saltLength) : new RsaPssWithoutParamsSha1();
                break;

              case SHA256:
                alg = saltLength ? new RsaPssSha256(saltLength) : new RsaPssWithoutParamsSha256();
                break;

              case SHA384:
                alg = saltLength ? new RsaPssSha384(saltLength) : new RsaPssWithoutParamsSha384();
                break;

              case SHA512:
                alg = saltLength ? new RsaPssSha512(saltLength) : new RsaPssWithoutParamsSha512();
                break;

              default:
                throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, "".concat(algorithm.name, ":").concat(hashName));
            }

            algorithm.saltLength = alg.algorithm.saltLength;
            break;

          case ECDSA:
            switch (hashName.toUpperCase()) {
              case SHA1:
                alg = new EcdsaSha1();
                break;

              case SHA256:
                alg = new EcdsaSha256();
                break;

              case SHA384:
                alg = new EcdsaSha384();
                break;

              case SHA512:
                alg = new EcdsaSha512();
                break;

              default:
                throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, "".concat(algorithm.name, ":").concat(hashName));
            }

            break;

          case HMAC:
            switch (hashName.toUpperCase()) {
              case SHA1:
                alg = new HmacSha1();
                break;

              case SHA256:
                alg = new HmacSha256();
                break;

              case SHA384:
                alg = new HmacSha384();
                break;

              case SHA512:
                alg = new HmacSha512();
                break;

              default:
                throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, "".concat(algorithm.name, ":").concat(hashName));
            }

            break;

          default:
            throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, algorithm.name);
        }

        return alg;
      }
    }]);

    return CryptoConfig;
  }();

  var SignedXml = function () {
    function SignedXml(node) {
      _classCallCheck(this, SignedXml);

      this.signature = new Signature();

      if (node && node.nodeType === XmlNodeType.Document) {
        this.document = node;
      } else if (node && node.nodeType === XmlNodeType.Element) {
        var xmlText = new XMLSerializer().serializeToString(node);
        this.document = new DOMParser().parseFromString(xmlText, APPLICATION_XML);
      }
    }

    _createClass(SignedXml, [{
      key: "Sign",
      value: function () {
        var _Sign2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(algorithm, key, data, options) {
          var alg, signedInfo, signingAlg, alg2, params, outputLength, hmacAlg, si, signature;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  data = data.cloneNode(true);
                  signingAlg = assign$1({}, algorithm);

                  if (key.algorithm["hash"]) {
                    signingAlg.hash = key.algorithm["hash"];
                  }

                  alg = CryptoConfig.GetSignatureAlgorithm(signingAlg);
                  _context17.next = 6;
                  return this.ApplySignOptions(this.XmlSignature, algorithm, key, options);

                case 6:
                  signedInfo = this.XmlSignature.SignedInfo;
                  _context17.next = 9;
                  return this.DigestReferences(data.documentElement);

                case 9:
                  signedInfo.SignatureMethod.Algorithm = alg.namespaceURI;

                  if (!(alg instanceof RsaPssBase)) {
                    _context17.next = 17;
                    break;
                  }

                  alg2 = assign$1({}, key.algorithm, signingAlg);

                  if (typeof alg2.hash === "string") {
                    alg2.hash = {
                      name: alg2.hash
                    };
                  }

                  params = new PssAlgorithmParams(alg2);
                  this.XmlSignature.SignedInfo.SignatureMethod.Any.Add(params);
                  _context17.next = 32;
                  break;

                case 17:
                  if (!(HMAC.toUpperCase() === algorithm.name.toUpperCase())) {
                    _context17.next = 32;
                    break;
                  }

                  outputLength = 0;
                  hmacAlg = key.algorithm;
                  _context17.t0 = hmacAlg.hash.name.toUpperCase();
                  _context17.next = _context17.t0 === SHA1 ? 23 : _context17.t0 === SHA256 ? 25 : _context17.t0 === SHA384 ? 27 : _context17.t0 === SHA512 ? 29 : 31;
                  break;

                case 23:
                  outputLength = hmacAlg.length || 160;
                  return _context17.abrupt("break", 31);

                case 25:
                  outputLength = hmacAlg.length || 256;
                  return _context17.abrupt("break", 31);

                case 27:
                  outputLength = hmacAlg.length || 384;
                  return _context17.abrupt("break", 31);

                case 29:
                  outputLength = hmacAlg.length || 512;
                  return _context17.abrupt("break", 31);

                case 31:
                  this.XmlSignature.SignedInfo.SignatureMethod.HMACOutputLength = outputLength;

                case 32:
                  si = this.TransformSignedInfo(data);
                  _context17.next = 35;
                  return alg.Sign(si, key, signingAlg);

                case 35:
                  signature = _context17.sent;
                  this.Key = key;
                  this.XmlSignature.SignatureValue = new Uint8Array(signature);
                  this.document = data;
                  return _context17.abrupt("return", this.XmlSignature);

                case 40:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17, this);
        }));

        function Sign(_x22, _x23, _x24, _x25) {
          return _Sign2.apply(this, arguments);
        }

        return Sign;
      }()
    }, {
      key: "Verify",
      value: function () {
        var _Verify2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(key) {
          var xml, res, keys;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  xml = this.document;

                  if (xml && xml.documentElement) {
                    _context18.next = 3;
                    break;
                  }

                  throw new XmlError(XE.NULL_PARAM, "SignedXml", "document");

                case 3:
                  _context18.next = 5;
                  return this.ValidateReferences(xml.documentElement);

                case 5:
                  res = _context18.sent;

                  if (!res) {
                    _context18.next = 18;
                    break;
                  }

                  if (!key) {
                    _context18.next = 11;
                    break;
                  }

                  _context18.t0 = [key];
                  _context18.next = 14;
                  break;

                case 11:
                  _context18.next = 13;
                  return this.GetPublicKeys();

                case 13:
                  _context18.t0 = _context18.sent;

                case 14:
                  keys = _context18.t0;
                  return _context18.abrupt("return", this.ValidateSignatureValue(keys));

                case 18:
                  return _context18.abrupt("return", false);

                case 19:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18, this);
        }));

        function Verify(_x26) {
          return _Verify2.apply(this, arguments);
        }

        return Verify;
      }()
    }, {
      key: "GetXml",
      value: function GetXml() {
        return this.signature.GetXml();
      }
    }, {
      key: "LoadXml",
      value: function LoadXml(value) {
        this.signature = Signature.LoadXml(value);
      }
    }, {
      key: "toString",
      value: function toString() {
        var signature = this.XmlSignature;
        var enveloped = signature.SignedInfo.References && signature.SignedInfo.References.Some(function (r) {
          return r.Transforms && r.Transforms.Some(function (t) {
            return t instanceof XmlDsigEnvelopedSignatureTransform;
          });
        });

        if (enveloped) {
          var doc = this.document.documentElement.cloneNode(true);
          var node = this.XmlSignature.GetXml();

          if (!node) {
            throw new XmlError(XE.XML_EXCEPTION, "Cannot get Xml element from Signature");
          }

          var sig = node.cloneNode(true);
          doc.appendChild(sig);
          return new XMLSerializer().serializeToString(doc);
        }

        return this.XmlSignature.toString();
      }
    }, {
      key: "GetPublicKeys",
      value: function () {
        var _GetPublicKeys = _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          var keys, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, kic, alg, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, cert, key, _key12;

          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  keys = [];
                  _iteratorNormalCompletion10 = true;
                  _didIteratorError10 = false;
                  _iteratorError10 = undefined;
                  _context19.prev = 4;
                  _iterator10 = this.XmlSignature.KeyInfo.GetIterator()[Symbol.iterator]();

                case 6:
                  if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                    _context19.next = 47;
                    break;
                  }

                  kic = _step10.value;
                  alg = CryptoConfig.CreateSignatureAlgorithm(this.XmlSignature.SignedInfo.SignatureMethod);

                  if (!(kic instanceof KeyInfoX509Data)) {
                    _context19.next = 40;
                    break;
                  }

                  _iteratorNormalCompletion11 = true;
                  _didIteratorError11 = false;
                  _iteratorError11 = undefined;
                  _context19.prev = 13;
                  _iterator11 = kic.Certificates[Symbol.iterator]();

                case 15:
                  if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
                    _context19.next = 24;
                    break;
                  }

                  cert = _step11.value;
                  _context19.next = 19;
                  return cert.exportKey(alg.algorithm);

                case 19:
                  key = _context19.sent;
                  keys.push(key);

                case 21:
                  _iteratorNormalCompletion11 = true;
                  _context19.next = 15;
                  break;

                case 24:
                  _context19.next = 30;
                  break;

                case 26:
                  _context19.prev = 26;
                  _context19.t0 = _context19["catch"](13);
                  _didIteratorError11 = true;
                  _iteratorError11 = _context19.t0;

                case 30:
                  _context19.prev = 30;
                  _context19.prev = 31;

                  if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                    _iterator11.return();
                  }

                case 33:
                  _context19.prev = 33;

                  if (!_didIteratorError11) {
                    _context19.next = 36;
                    break;
                  }

                  throw _iteratorError11;

                case 36:
                  return _context19.finish(33);

                case 37:
                  return _context19.finish(30);

                case 38:
                  _context19.next = 44;
                  break;

                case 40:
                  _context19.next = 42;
                  return kic.exportKey(alg.algorithm);

                case 42:
                  _key12 = _context19.sent;
                  keys.push(_key12);

                case 44:
                  _iteratorNormalCompletion10 = true;
                  _context19.next = 6;
                  break;

                case 47:
                  _context19.next = 53;
                  break;

                case 49:
                  _context19.prev = 49;
                  _context19.t1 = _context19["catch"](4);
                  _didIteratorError10 = true;
                  _iteratorError10 = _context19.t1;

                case 53:
                  _context19.prev = 53;
                  _context19.prev = 54;

                  if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                    _iterator10.return();
                  }

                case 56:
                  _context19.prev = 56;

                  if (!_didIteratorError10) {
                    _context19.next = 59;
                    break;
                  }

                  throw _iteratorError10;

                case 59:
                  return _context19.finish(56);

                case 60:
                  return _context19.finish(53);

                case 61:
                  return _context19.abrupt("return", keys);

                case 62:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19, this, [[4, 49, 53, 61], [13, 26, 30, 38], [31,, 33, 37], [54,, 56, 60]]);
        }));

        function GetPublicKeys() {
          return _GetPublicKeys.apply(this, arguments);
        }

        return GetPublicKeys;
      }()
    }, {
      key: "GetSignatureNamespaces",
      value: function GetSignatureNamespaces() {
        var namespaces = {};

        if (this.XmlSignature.NamespaceURI) {
          namespaces[this.XmlSignature.Prefix || ""] = this.XmlSignature.NamespaceURI;
        }

        return namespaces;
      }
    }, {
      key: "CopyNamespaces",
      value: function CopyNamespaces(src, dst, ignoreDefault) {
        this.InjectNamespaces(SelectRootNamespaces(src), dst, ignoreDefault);
      }
    }, {
      key: "InjectNamespaces",
      value: function InjectNamespaces(namespaces, target, ignoreDefault) {
        for (var i in namespaces) {
          var uri = namespaces[i];

          if (ignoreDefault && i === "") {
            continue;
          }

          target.setAttribute("xmlns" + (i ? ":" + i : ""), uri);
        }
      }
    }, {
      key: "DigestReference",
      value: function () {
        var _DigestReference = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(doc, reference, checkHmac) {
          var objectName, uri, found, xmlSignatureObjects, _i47, _xmlSignatureObjects, xmlSignatureObject, _el, parent, el, canonOutput, excC14N, digest;

          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  if (!reference.Uri) {
                    _context20.next = 25;
                    break;
                  }

                  if (!reference.Uri.indexOf("#xpointer")) {
                    uri = reference.Uri;
                    uri = uri.substring(9).replace(/[\r\n\t\s]/g, "");

                    if (uri.length < 2 || uri[0] !== "(" || uri[uri.length - 1] !== ")") {
                      uri = "";
                    } else {
                      uri = uri.substring(1, uri.length - 1);
                    }

                    if (uri.length > 6 && uri.indexOf("id(") === 0 && uri[uri.length - 1] === ")") {
                      objectName = uri.substring(4, uri.length - 2);
                    }
                  } else if (reference.Uri[0] === "#") {
                    objectName = reference.Uri.substring(1);
                  }

                  if (!objectName) {
                    _context20.next = 25;
                    break;
                  }

                  found = null;
                  xmlSignatureObjects = [this.XmlSignature.KeyInfo.GetXml()];
                  this.XmlSignature.ObjectList.ForEach(function (object) {
                    xmlSignatureObjects.push(object.GetXml());
                  });
                  _i47 = 0, _xmlSignatureObjects = xmlSignatureObjects;

                case 7:
                  if (!(_i47 < _xmlSignatureObjects.length)) {
                    _context20.next = 22;
                    break;
                  }

                  xmlSignatureObject = _xmlSignatureObjects[_i47];

                  if (!xmlSignatureObject) {
                    _context20.next = 19;
                    break;
                  }

                  found = findById(xmlSignatureObject, objectName);

                  if (!found) {
                    _context20.next = 19;
                    break;
                  }

                  _el = found.cloneNode(true);
                  this.CopyNamespaces(doc, _el, false);

                  if (this.Parent) {
                    parent = this.Parent instanceof XmlObject ? this.Parent.GetXml() : this.Parent;
                    this.CopyNamespaces(parent, _el, true);
                  }

                  this.CopyNamespaces(found, _el, false);
                  this.InjectNamespaces(this.GetSignatureNamespaces(), _el, true);
                  doc = _el;
                  return _context20.abrupt("break", 22);

                case 19:
                  _i47++;
                  _context20.next = 7;
                  break;

                case 22:
                  if (!found && doc) {
                    found = XmlObject.GetElementById(doc, objectName);

                    if (found) {
                      el = found.cloneNode(true);
                      this.CopyNamespaces(found, el, false);
                      this.CopyNamespaces(doc, el, false);
                      doc = el;
                    }
                  }

                  if (!(found == null)) {
                    _context20.next = 25;
                    break;
                  }

                  throw new XmlError(XE.CRYPTOGRAPHIC, "Cannot get object by reference: ".concat(objectName));

                case 25:
                  canonOutput = null;

                  if (!(reference.Transforms && reference.Transforms.Count)) {
                    _context20.next = 30;
                    break;
                  }

                  canonOutput = this.ApplyTransforms(reference.Transforms, doc);
                  _context20.next = 39;
                  break;

                case 30:
                  if (!(reference.Uri && reference.Uri[0] !== "#")) {
                    _context20.next = 36;
                    break;
                  }

                  if (doc.ownerDocument) {
                    _context20.next = 33;
                    break;
                  }

                  throw new Error("Cannot get ownerDocument from XML document");

                case 33:
                  canonOutput = new XMLSerializer().serializeToString(doc.ownerDocument);
                  _context20.next = 39;
                  break;

                case 36:
                  excC14N = new XmlDsigC14NTransform();
                  excC14N.LoadInnerXml(doc);
                  canonOutput = excC14N.GetOutput();

                case 39:
                  if (reference.DigestMethod.Algorithm) {
                    _context20.next = 41;
                    break;
                  }

                  throw new XmlError(XE.NULL_PARAM, "Reference", "DigestMethod");

                case 41:
                  digest = CryptoConfig.CreateHashAlgorithm(reference.DigestMethod.Algorithm);
                  return _context20.abrupt("return", digest.Digest(canonOutput));

                case 43:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20, this);
        }));

        function DigestReference(_x27, _x28, _x29) {
          return _DigestReference.apply(this, arguments);
        }

        return DigestReference;
      }()
    }, {
      key: "DigestReferences",
      value: function () {
        var _DigestReferences = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(data) {
          var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, ref, hash;

          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _iteratorNormalCompletion12 = true;
                  _didIteratorError12 = false;
                  _iteratorError12 = undefined;
                  _context21.prev = 3;
                  _iterator12 = this.XmlSignature.SignedInfo.References.GetIterator()[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
                    _context21.next = 15;
                    break;
                  }

                  ref = _step12.value;

                  if (!ref.DigestMethod.Algorithm) {
                    ref.DigestMethod.Algorithm = new Sha256().namespaceURI;
                  }

                  _context21.next = 10;
                  return this.DigestReference(data, ref, false);

                case 10:
                  hash = _context21.sent;
                  ref.DigestValue = hash;

                case 12:
                  _iteratorNormalCompletion12 = true;
                  _context21.next = 5;
                  break;

                case 15:
                  _context21.next = 21;
                  break;

                case 17:
                  _context21.prev = 17;
                  _context21.t0 = _context21["catch"](3);
                  _didIteratorError12 = true;
                  _iteratorError12 = _context21.t0;

                case 21:
                  _context21.prev = 21;
                  _context21.prev = 22;

                  if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                    _iterator12.return();
                  }

                case 24:
                  _context21.prev = 24;

                  if (!_didIteratorError12) {
                    _context21.next = 27;
                    break;
                  }

                  throw _iteratorError12;

                case 27:
                  return _context21.finish(24);

                case 28:
                  return _context21.finish(21);

                case 29:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21, this, [[3, 17, 21, 29], [22,, 24, 28]]);
        }));

        function DigestReferences(_x30) {
          return _DigestReferences.apply(this, arguments);
        }

        return DigestReferences;
      }()
    }, {
      key: "TransformSignedInfo",
      value: function TransformSignedInfo(data) {
        var t = CryptoConfig.CreateFromName(this.XmlSignature.SignedInfo.CanonicalizationMethod.Algorithm);
        var xml = this.XmlSignature.SignedInfo.GetXml();

        if (!xml) {
          throw new XmlError(XE.XML_EXCEPTION, "Cannot get Xml element from SignedInfo");
        }

        var node = xml.cloneNode(true);
        this.CopyNamespaces(xml, node, false);

        if (data) {
          if (data.nodeType === XmlNodeType.Document) {
            this.CopyNamespaces(data.documentElement, node, false);
          } else {
            this.CopyNamespaces(data, node, false);
          }
        }

        if (this.Parent) {
          var parentXml = this.Parent instanceof XmlObject ? this.Parent.GetXml() : this.Parent;

          if (parentXml) {
            this.CopyNamespaces(parentXml, node, false);
          }
        }

        var childNamespaces = SelectNamespaces(xml);

        for (var i in childNamespaces) {
          var uri = childNamespaces[i];

          if (i === node.prefix) {
            continue;
          }

          node.setAttribute("xmlns" + (i ? ":" + i : ""), uri);
        }

        t.LoadInnerXml(node);
        var res = t.GetOutput();
        return res;
      }
    }, {
      key: "ResolveTransform",
      value: function ResolveTransform(transform) {
        switch (transform) {
          case "enveloped":
            return new XmlDsigEnvelopedSignatureTransform();

          case "c14n":
            return new XmlDsigC14NTransform();

          case "c14n-com":
            return new XmlDsigC14NWithCommentsTransform();

          case "exc-c14n":
            return new XmlDsigExcC14NTransform();

          case "exc-c14n-com":
            return new XmlDsigExcC14NWithCommentsTransform();

          case "base64":
            return new XmlDsigBase64Transform();

          case "xpath":
            return new XmlDsigXPathTransform();

          default:
            throw new XmlError(XE.CRYPTOGRAPHIC_UNKNOWN_TRANSFORM, transform);
        }
      }
    }, {
      key: "ApplyTransforms",
      value: function ApplyTransforms(transforms, input) {
        var output = null;
        transforms.Sort(function (a, b) {
          var c14nTransforms = [XmlDsigC14NTransform, XmlDsigC14NWithCommentsTransform, XmlDsigExcC14NTransform, XmlDsigExcC14NWithCommentsTransform];

          if (c14nTransforms.some(function (t) {
            return a instanceof t;
          })) {
            return 1;
          }

          if (c14nTransforms.some(function (t) {
            return b instanceof t;
          })) {
            return -1;
          }

          return 0;
        }).ForEach(function (transform) {
          transform.LoadInnerXml(input);

          if (transform instanceof XmlDsigXPathTransform) {
            transform.GetOutput();
          } else {
            output = transform.GetOutput();
          }
        });

        if (transforms.Count === 1 && transforms.Item(0) instanceof XmlDsigEnvelopedSignatureTransform) {
          var c14n = new XmlDsigC14NTransform();
          c14n.LoadInnerXml(input);
          output = c14n.GetOutput();
        }

        return output;
      }
    }, {
      key: "ApplySignOptions",
      value: function () {
        var _ApplySignOptions = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(signature, algorithm, key) {
          var _this158 = this;

          var options,
              keyInfo,
              keyValue,
              _keyInfo,
              reference,
              _args22 = arguments;

          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  options = _args22.length > 3 && _args22[3] !== undefined ? _args22[3] : {};

                  if (options.id) {
                    this.XmlSignature.Id = options.id;
                  }

                  if (!(options.keyValue && key.algorithm.name.toUpperCase() !== HMAC)) {
                    _context22.next = 9;
                    break;
                  }

                  if (!signature.KeyInfo) {
                    signature.KeyInfo = new KeyInfo();
                  }

                  keyInfo = signature.KeyInfo;
                  keyValue = new KeyValue();
                  keyInfo.Add(keyValue);
                  _context22.next = 9;
                  return keyValue.importKey(options.keyValue);

                case 9:
                  if (options.x509) {
                    if (!signature.KeyInfo) {
                      signature.KeyInfo = new KeyInfo();
                    }

                    _keyInfo = signature.KeyInfo;
                    options.x509.forEach(function (x509) {
                      var raw = Convert.FromBase64(x509);
                      var x509Data = new KeyInfoX509Data(raw);

                      _keyInfo.Add(x509Data);
                    });
                  }

                  if (options.references) {
                    options.references.forEach(function (item) {
                      var reference = new Reference();

                      if (item.id) {
                        reference.Id = item.id;
                      }

                      if (item.uri !== null && item.uri !== undefined) {
                        reference.Uri = item.uri;
                      }

                      if (item.type) {
                        reference.Type = item.type;
                      }

                      var digestAlgorithm = CryptoConfig.GetHashAlgorithm(item.hash);
                      reference.DigestMethod.Algorithm = digestAlgorithm.namespaceURI;

                      if (item.transforms && item.transforms.length) {
                        var transforms = new Transforms();
                        item.transforms.forEach(function (transform) {
                          transforms.Add(_this158.ResolveTransform(transform));
                        });
                        reference.Transforms = transforms;
                      }

                      if (!signature.SignedInfo.References) {
                        signature.SignedInfo.References = new References();
                      }

                      signature.SignedInfo.References.Add(reference);
                    });
                  }

                  if (!signature.SignedInfo.References.Count) {
                    reference = new Reference();
                    signature.SignedInfo.References.Add(reference);
                  }

                case 12:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22, this);
        }));

        function ApplySignOptions(_x31, _x32, _x33) {
          return _ApplySignOptions.apply(this, arguments);
        }

        return ApplySignOptions;
      }()
    }, {
      key: "ValidateReferences",
      value: function () {
        var _ValidateReferences = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(doc) {
          var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, ref, digest, b64Digest, b64DigestValue, errText;

          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  _iteratorNormalCompletion13 = true;
                  _didIteratorError13 = false;
                  _iteratorError13 = undefined;
                  _context23.prev = 3;
                  _iterator13 = this.XmlSignature.SignedInfo.References.GetIterator()[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                    _context23.next = 18;
                    break;
                  }

                  ref = _step13.value;
                  _context23.next = 9;
                  return this.DigestReference(doc, ref, false);

                case 9:
                  digest = _context23.sent;
                  b64Digest = Convert.ToBase64(digest);
                  b64DigestValue = Convert.ToString(ref.DigestValue, "base64");

                  if (!(b64Digest !== b64DigestValue)) {
                    _context23.next = 15;
                    break;
                  }

                  errText = "Invalid digest for uri '".concat(ref.Uri, "'. Calculated digest is ").concat(b64Digest, " but the xml to validate supplies digest ").concat(b64DigestValue);
                  throw new XmlError(XE.CRYPTOGRAPHIC, errText);

                case 15:
                  _iteratorNormalCompletion13 = true;
                  _context23.next = 5;
                  break;

                case 18:
                  _context23.next = 24;
                  break;

                case 20:
                  _context23.prev = 20;
                  _context23.t0 = _context23["catch"](3);
                  _didIteratorError13 = true;
                  _iteratorError13 = _context23.t0;

                case 24:
                  _context23.prev = 24;
                  _context23.prev = 25;

                  if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                    _iterator13.return();
                  }

                case 27:
                  _context23.prev = 27;

                  if (!_didIteratorError13) {
                    _context23.next = 30;
                    break;
                  }

                  throw _iteratorError13;

                case 30:
                  return _context23.finish(27);

                case 31:
                  return _context23.finish(24);

                case 32:
                  return _context23.abrupt("return", true);

                case 33:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23, this, [[3, 20, 24, 32], [25,, 27, 31]]);
        }));

        function ValidateReferences(_x34) {
          return _ValidateReferences.apply(this, arguments);
        }

        return ValidateReferences;
      }()
    }, {
      key: "ValidateSignatureValue",
      value: function () {
        var _ValidateSignatureValue = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(keys) {
          var signer, signedInfoCanon, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, key, ok;

          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  signedInfoCanon = this.TransformSignedInfo(this.document);
                  signer = CryptoConfig.CreateSignatureAlgorithm(this.XmlSignature.SignedInfo.SignatureMethod);
                  _iteratorNormalCompletion14 = true;
                  _didIteratorError14 = false;
                  _iteratorError14 = undefined;
                  _context24.prev = 5;
                  _iterator14 = keys[Symbol.iterator]();

                case 7:
                  if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
                    _context24.next = 17;
                    break;
                  }

                  key = _step14.value;
                  _context24.next = 11;
                  return signer.Verify(signedInfoCanon, key, this.Signature);

                case 11:
                  ok = _context24.sent;

                  if (!ok) {
                    _context24.next = 14;
                    break;
                  }

                  return _context24.abrupt("return", true);

                case 14:
                  _iteratorNormalCompletion14 = true;
                  _context24.next = 7;
                  break;

                case 17:
                  _context24.next = 23;
                  break;

                case 19:
                  _context24.prev = 19;
                  _context24.t0 = _context24["catch"](5);
                  _didIteratorError14 = true;
                  _iteratorError14 = _context24.t0;

                case 23:
                  _context24.prev = 23;
                  _context24.prev = 24;

                  if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                    _iterator14.return();
                  }

                case 26:
                  _context24.prev = 26;

                  if (!_didIteratorError14) {
                    _context24.next = 29;
                    break;
                  }

                  throw _iteratorError14;

                case 29:
                  return _context24.finish(26);

                case 30:
                  return _context24.finish(23);

                case 31:
                  return _context24.abrupt("return", false);

                case 32:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24, this, [[5, 19, 23, 31], [24,, 26, 30]]);
        }));

        function ValidateSignatureValue(_x35) {
          return _ValidateSignatureValue.apply(this, arguments);
        }

        return ValidateSignatureValue;
      }()
    }, {
      key: "XmlSignature",
      get: function get() {
        return this.signature;
      }
    }, {
      key: "Signature",
      get: function get() {
        return this.XmlSignature.SignatureValue;
      }
    }]);

    return SignedXml;
  }();

  function findById(element, id) {
    if (element.nodeType !== XmlNodeType.Element) {
      return null;
    }

    if (element.hasAttribute("Id") && element.getAttribute("Id") === id) {
      return element;
    }

    if (element.childNodes && element.childNodes.length) {
      for (var i = 0; i < element.childNodes.length; i++) {
        var el = findById(element.childNodes[i], id);

        if (el) {
          return el;
        }
      }
    }

    return null;
  }

  function addNamespace(selectedNodes, name, namespace) {
    if (!(name in selectedNodes)) {
      selectedNodes[name] = namespace;
    }
  }

  function _SelectRootNamespaces(node) {
    var selectedNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (node && node.nodeType === XmlNodeType.Element) {
      var el = node;

      if (el.namespaceURI && el.namespaceURI !== "http://www.w3.org/XML/1998/namespace") {
        addNamespace(selectedNodes, el.prefix ? el.prefix : "", node.namespaceURI);
      }

      for (var i = 0; i < el.attributes.length; i++) {
        var attr = el.attributes.item(i);

        if (attr && attr.prefix === "xmlns") {
          addNamespace(selectedNodes, attr.localName ? attr.localName : "", attr.value);
        }
      }

      if (node.parentNode) {
        _SelectRootNamespaces(node.parentNode, selectedNodes);
      }
    }
  }

  function SelectRootNamespaces(node) {
    var attrs = {};

    _SelectRootNamespaces(node, attrs);

    return attrs;
  }

  var DigestAlgAndValueType = function (_XadesObject9) {
    _inherits(DigestAlgAndValueType, _XadesObject9);

    function DigestAlgAndValueType() {
      _classCallCheck(this, DigestAlgAndValueType);

      return _possibleConstructorReturn(this, _getPrototypeOf(DigestAlgAndValueType).apply(this, arguments));
    }

    return DigestAlgAndValueType;
  }(XadesObject);

  __decorate([XmlChildElement({
    parser: DigestMethod,
    required: true
  })], DigestAlgAndValueType.prototype, "DigestMethod", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.DigestValue,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    converter: XmlBase64Converter,
    required: true
  })], DigestAlgAndValueType.prototype, "DigestValue", void 0);

  DigestAlgAndValueType = __decorate([XmlElement({
    localName: XmlXades.ElementNames.DigestAlgAndValue
  })], DigestAlgAndValueType);

  var IssuerSerial = function (_X509IssuerSerial) {
    _inherits(IssuerSerial, _X509IssuerSerial);

    function IssuerSerial() {
      _classCallCheck(this, IssuerSerial);

      return _possibleConstructorReturn(this, _getPrototypeOf(IssuerSerial).apply(this, arguments));
    }

    return IssuerSerial;
  }(X509IssuerSerial);

  IssuerSerial = __decorate([XmlElement({
    localName: XmlXades.ElementNames.IssuerSerial,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], IssuerSerial);

  var Cert = function (_XadesObject10) {
    _inherits(Cert, _XadesObject10);

    function Cert() {
      _classCallCheck(this, Cert);

      return _possibleConstructorReturn(this, _getPrototypeOf(Cert).apply(this, arguments));
    }

    return Cert;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.CertDigest,
    parser: DigestAlgAndValueType,
    required: true
  })], Cert.prototype, "CertDigest", void 0);

  __decorate([XmlChildElement({
    parser: IssuerSerial,
    required: true
  })], Cert.prototype, "IssuerSerial", void 0);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.URI
  })], Cert.prototype, "Uri", void 0);

  Cert = __decorate([XmlElement({
    localName: XmlXades.ElementNames.Cert
  })], Cert);

  var CertIDList = function (_XadesCollection7) {
    _inherits(CertIDList, _XadesCollection7);

    function CertIDList() {
      _classCallCheck(this, CertIDList);

      return _possibleConstructorReturn(this, _getPrototypeOf(CertIDList).apply(this, arguments));
    }

    return CertIDList;
  }(XadesCollection);

  CertIDList = __decorate([XmlElement({
    localName: "CertIDList",
    parser: Cert
  })], CertIDList);

  var SigningCertificate = function (_CertIDList) {
    _inherits(SigningCertificate, _CertIDList);

    function SigningCertificate() {
      _classCallCheck(this, SigningCertificate);

      return _possibleConstructorReturn(this, _getPrototypeOf(SigningCertificate).apply(this, arguments));
    }

    return SigningCertificate;
  }(CertIDList);

  SigningCertificate = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SigningCertificate
  })], SigningCertificate);

  var CompleteCertificateRefs = function (_XadesObject11) {
    _inherits(CompleteCertificateRefs, _XadesObject11);

    function CompleteCertificateRefs() {
      _classCallCheck(this, CompleteCertificateRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(CompleteCertificateRefs).apply(this, arguments));
    }

    return CompleteCertificateRefs;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], CompleteCertificateRefs.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.CertRefs,
    parser: CertIDList,
    required: true
  })], CompleteCertificateRefs.prototype, "CertRefs", void 0);

  CompleteCertificateRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CompleteCertificateRefs
  })], CompleteCertificateRefs);
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g;

  function dateFormat(date, mask, utc, gmt) {
    if (arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    }

    date = date || new Date();

    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    if (isNaN(date)) {
      throw TypeError("Invalid date");
    }

    mask = String(masks[mask] || mask || masks.default);
    var maskSlice = mask.slice(0, 4);

    if (maskSlice === "UTC:" || maskSlice === "GMT:") {
      mask = mask.slice(4);
      utc = true;

      if (maskSlice === "GMT:") {
        gmt = true;
      }
    }

    var _ = utc ? "getUTC" : "get";

    var d = date[_ + "Date"]();

    var D = date[_ + "Day"]();

    var m = date[_ + "Month"]();

    var y = date[_ + "FullYear"]();

    var H = date[_ + "Hours"]();

    var M = date[_ + "Minutes"]();

    var s = date[_ + "Seconds"]();

    var L = date[_ + "Milliseconds"]();

    var o = utc ? 0 : date.getTimezoneOffset();
    var W = getWeek(date);
    var N = getDayOfWeek(date);
    var flags = {
      d: d,
      dd: pad(d),
      ddd: i18n.dayNames[D],
      dddd: i18n.dayNames[D + 7],
      m: m + 1,
      mm: pad(m + 1),
      mmm: i18n.monthNames[m],
      mmmm: i18n.monthNames[m + 12],
      yy: String(y).slice(2),
      yyyy: y,
      h: H % 12 || 12,
      hh: pad(H % 12 || 12),
      H: H,
      HH: pad(H),
      M: M,
      MM: pad(M),
      s: s,
      ss: pad(s),
      l: pad(L, 3),
      L: pad(Math.round(L / 10)),
      t: H < 12 ? i18n.timeNames[0] : i18n.timeNames[1],
      tt: H < 12 ? i18n.timeNames[2] : i18n.timeNames[3],
      T: H < 12 ? i18n.timeNames[4] : i18n.timeNames[5],
      TT: H < 12 ? i18n.timeNames[6] : i18n.timeNames[7],
      Z: gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
      o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
      W: W,
      N: N
    };
    return mask.replace(token, function (match) {
      if (match in flags) {
        return flags[match];
      }

      return match.slice(1, match.length - 1);
    });
  }

  var masks = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
  };
  var i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
  };

  function pad(val) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    val = String(val);

    while (val.length < len) {
      val = "0" + val;
    }

    return val;
  }

  function getWeek(date) {
    var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
    var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
    firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
    var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
    targetThursday.setHours(targetThursday.getHours() - ds);
    var weekDiff = (targetThursday.getTime() - firstThursday.getTime()) / (86400000 * 7);
    return 1 + Math.floor(weekDiff);
  }

  function getDayOfWeek(date) {
    var dow = date.getDay();

    if (dow === 0) {
      dow = 7;
    }

    return dow;
  }

  function kindOf(val) {
    if (val === null) {
      return "null";
    }

    if (val === undefined) {
      return "undefined";
    }

    if (_typeof(val) !== "object") {
      return _typeof(val);
    }

    if (Array.isArray(val)) {
      return "array";
    }

    return {}.toString.call(val).slice(8, -1).toLowerCase();
  }

  var XadesDateTime = function (_XadesObject12) {
    _inherits(XadesDateTime, _XadesObject12);

    function XadesDateTime() {
      _classCallCheck(this, XadesDateTime);

      return _possibleConstructorReturn(this, _getPrototypeOf(XadesDateTime).apply(this, arguments));
    }

    _createClass(XadesDateTime, [{
      key: "OnLoadXml",
      value: function OnLoadXml(e) {
        if (e.textContent) {
          this.Value = new Date(e.textContent);
        }
      }
    }, {
      key: "OnGetXml",
      value: function OnGetXml(e) {
        if (this.Format) {
          e.textContent = dateFormat(this.Value, this.Format);
        } else {
          e.textContent = this.Value.toISOString();
        }
      }
    }]);

    return XadesDateTime;
  }(XadesObject);

  __decorate([XmlContent({
    defaultValue: new Date(),
    required: true
  })], XadesDateTime.prototype, "Value", void 0);

  XadesDateTime = __decorate([XmlElement({
    localName: "XadesDateTime",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], XadesDateTime);

  var OtherRef = function (_Any3) {
    _inherits(OtherRef, _Any3);

    function OtherRef() {
      _classCallCheck(this, OtherRef);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherRef).apply(this, arguments));
    }

    return OtherRef;
  }(Any);

  OtherRef = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OtherRef
  })], OtherRef);

  var OtherRefs = function (_XadesCollection8) {
    _inherits(OtherRefs, _XadesCollection8);

    function OtherRefs() {
      _classCallCheck(this, OtherRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherRefs).apply(this, arguments));
    }

    return OtherRefs;
  }(XadesCollection);

  OtherRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OtherRefs
  })], OtherRefs);

  var ResponderID = function (_XadesObject13) {
    _inherits(ResponderID, _XadesObject13);

    function ResponderID() {
      _classCallCheck(this, ResponderID);

      return _possibleConstructorReturn(this, _getPrototypeOf(ResponderID).apply(this, arguments));
    }

    return ResponderID;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.ByName,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    required: true
  })], ResponderID.prototype, "ByName", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.ByKey,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    converter: XmlBase64Converter,
    required: true
  })], ResponderID.prototype, "ByKey", void 0);

  ResponderID = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OCSPIdentifier
  })], ResponderID);

  var OCSPIdentifier = function (_XadesObject14) {
    _inherits(OCSPIdentifier, _XadesObject14);

    function OCSPIdentifier() {
      _classCallCheck(this, OCSPIdentifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(OCSPIdentifier).apply(this, arguments));
    }

    return OCSPIdentifier;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.URI,
    defaultValue: ""
  })], OCSPIdentifier.prototype, "URI", void 0);

  __decorate([XmlChildElement({
    parser: ResponderID,
    required: true
  })], OCSPIdentifier.prototype, "ResponderID", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.IssueTime,
    parser: XadesDateTime,
    required: true
  })], OCSPIdentifier.prototype, "ProducedAt", void 0);

  OCSPIdentifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OCSPIdentifier
  })], OCSPIdentifier);

  var OCSPRef = function (_XadesObject15) {
    _inherits(OCSPRef, _XadesObject15);

    function OCSPRef() {
      _classCallCheck(this, OCSPRef);

      return _possibleConstructorReturn(this, _getPrototypeOf(OCSPRef).apply(this, arguments));
    }

    return OCSPRef;
  }(XadesObject);

  __decorate([XmlChildElement({
    parser: OCSPIdentifier
  })], OCSPRef.prototype, "OCSPIdentifier", void 0);

  __decorate([XmlChildElement({
    parser: DigestAlgAndValueType,
    required: true
  })], OCSPRef.prototype, "DigestAlgAndValue", void 0);

  OCSPRef = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OCSPRef
  })], OCSPRef);

  var OCSPRefs = function (_XadesCollection9) {
    _inherits(OCSPRefs, _XadesCollection9);

    function OCSPRefs() {
      _classCallCheck(this, OCSPRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(OCSPRefs).apply(this, arguments));
    }

    return OCSPRefs;
  }(XadesCollection);

  OCSPRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OCSPRefs
  })], OCSPRefs);

  var CRLIdentifier = function (_XadesObject16) {
    _inherits(CRLIdentifier, _XadesObject16);

    function CRLIdentifier() {
      _classCallCheck(this, CRLIdentifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(CRLIdentifier).apply(this, arguments));
    }

    return CRLIdentifier;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.URI,
    defaultValue: ""
  })], CRLIdentifier.prototype, "URI", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.Issuer,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    required: true
  })], CRLIdentifier.prototype, "Issuer", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.IssueTime,
    parser: XadesDateTime,
    required: true
  })], CRLIdentifier.prototype, "IssueTime", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.Number,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    converter: XmlNumberConverter
  })], CRLIdentifier.prototype, "Number", void 0);

  CRLIdentifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CRLIdentifier
  })], CRLIdentifier);

  var CRLRef = function (_XadesObject17) {
    _inherits(CRLRef, _XadesObject17);

    function CRLRef() {
      _classCallCheck(this, CRLRef);

      return _possibleConstructorReturn(this, _getPrototypeOf(CRLRef).apply(this, arguments));
    }

    return CRLRef;
  }(XadesObject);

  __decorate([XmlChildElement({
    parser: DigestAlgAndValueType,
    required: true
  })], CRLRef.prototype, "DigestAlgAndValue", void 0);

  __decorate([XmlChildElement({
    parser: CRLIdentifier
  })], CRLRef.prototype, "CRLIdentifier", void 0);

  CRLRef = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CRLRef
  })], CRLRef);

  var CRLRefs = function (_XadesCollection10) {
    _inherits(CRLRefs, _XadesCollection10);

    function CRLRefs() {
      _classCallCheck(this, CRLRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(CRLRefs).apply(this, arguments));
    }

    return CRLRefs;
  }(XadesCollection);

  CRLRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CRLRefs
  })], CRLRefs);

  var CompleteRevocationRefs = function (_XadesObject18) {
    _inherits(CompleteRevocationRefs, _XadesObject18);

    function CompleteRevocationRefs() {
      _classCallCheck(this, CompleteRevocationRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(CompleteRevocationRefs).apply(this, arguments));
    }

    return CompleteRevocationRefs;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], CompleteRevocationRefs.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: CRLRefs
  })], CompleteRevocationRefs.prototype, "CRLRefs", void 0);

  __decorate([XmlChildElement({
    parser: OCSPRefs
  })], CompleteRevocationRefs.prototype, "OCSPRefs", void 0);

  __decorate([XmlChildElement({
    parser: OtherRefs
  })], CompleteRevocationRefs.prototype, "OtherRefs", void 0);

  CompleteRevocationRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CompleteRevocationRefs
  })], CompleteRevocationRefs);

  var CounterSignature = function (_XadesObject19) {
    _inherits(CounterSignature, _XadesObject19);

    function CounterSignature() {
      _classCallCheck(this, CounterSignature);

      return _possibleConstructorReturn(this, _getPrototypeOf(CounterSignature).apply(this, arguments));
    }

    return CounterSignature;
  }(XadesObject);

  __decorate([XmlChildElement({
    parser: Signature,
    required: true
  })], CounterSignature.prototype, "Signature", void 0);

  CounterSignature = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CounterSignature
  })], CounterSignature);

  var DataObjectFormat = function (_XadesObject20) {
    _inherits(DataObjectFormat, _XadesObject20);

    function DataObjectFormat() {
      _classCallCheck(this, DataObjectFormat);

      return _possibleConstructorReturn(this, _getPrototypeOf(DataObjectFormat).apply(this, arguments));
    }

    return DataObjectFormat;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.ObjectReference,
    required: true
  })], DataObjectFormat.prototype, "ObjectReference", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.Description,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], DataObjectFormat.prototype, "Description", void 0);

  __decorate([XmlChildElement({
    parser: ObjectIdentifier
  })], DataObjectFormat.prototype, "ObjectIdentifier", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.MimeType,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], DataObjectFormat.prototype, "MimeType", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.Encoding,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], DataObjectFormat.prototype, "Encoding", void 0);

  DataObjectFormat = __decorate([XmlElement({
    localName: XmlXades.ElementNames.DataObjectFormat
  })], DataObjectFormat);

  var Include = function (_XadesObject21) {
    _inherits(Include, _XadesObject21);

    function Include() {
      _classCallCheck(this, Include);

      return _possibleConstructorReturn(this, _getPrototypeOf(Include).apply(this, arguments));
    }

    return Include;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.URI,
    defaultValue: "",
    required: true
  })], Include.prototype, "Uri", void 0);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.ReferencedData,
    defaultValue: false
  })], Include.prototype, "ReferencedData", void 0);

  Include = __decorate([XmlElement({
    localName: XmlXades.ElementNames.Include
  })], Include);

  var ReferenceInfo = function (_XadesObject22) {
    _inherits(ReferenceInfo, _XadesObject22);

    function ReferenceInfo() {
      _classCallCheck(this, ReferenceInfo);

      return _possibleConstructorReturn(this, _getPrototypeOf(ReferenceInfo).apply(this, arguments));
    }

    return ReferenceInfo;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.URI,
    defaultValue: ""
  })], ReferenceInfo.prototype, "Uri", void 0);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], ReferenceInfo.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.DigestMethod,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    required: true
  })], ReferenceInfo.prototype, "DigestMethod", void 0);

  __decorate([XmlChildElement({
    localName: XmlSignature.ElementNames.DigestMethod,
    namespaceURI: XmlSignature.NamespaceURI,
    prefix: XmlSignature.DefaultPrefix,
    converter: XmlBase64Converter,
    required: true
  })], ReferenceInfo.prototype, "DigestValue", void 0);

  ReferenceInfo = __decorate([XmlElement({
    localName: XmlXades.ElementNames.ReferenceInfo
  })], ReferenceInfo);

  var ReferenceInfos = function (_XadesCollection11) {
    _inherits(ReferenceInfos, _XadesCollection11);

    function ReferenceInfos() {
      _classCallCheck(this, ReferenceInfos);

      return _possibleConstructorReturn(this, _getPrototypeOf(ReferenceInfos).apply(this, arguments));
    }

    return ReferenceInfos;
  }(XadesCollection);

  ReferenceInfos = __decorate([XmlElement({
    localName: "ReferenceInfos",
    parser: ReferenceInfo
  })], ReferenceInfos);

  var EncapsulatedTimeStamp = function (_EncapsulatedPKIData2) {
    _inherits(EncapsulatedTimeStamp, _EncapsulatedPKIData2);

    function EncapsulatedTimeStamp() {
      _classCallCheck(this, EncapsulatedTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedTimeStamp).apply(this, arguments));
    }

    return EncapsulatedTimeStamp;
  }(EncapsulatedPKIData);

  EncapsulatedTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.EncapsulatedTimeStamp
  })], EncapsulatedTimeStamp);

  var EncapsulatedTimeStampCollection = function (_XadesCollection12) {
    _inherits(EncapsulatedTimeStampCollection, _XadesCollection12);

    function EncapsulatedTimeStampCollection() {
      _classCallCheck(this, EncapsulatedTimeStampCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedTimeStampCollection).apply(this, arguments));
    }

    return EncapsulatedTimeStampCollection;
  }(XadesCollection);

  EncapsulatedTimeStampCollection = __decorate([XmlElement({
    localName: "EncapsulatedPKIDatas",
    parser: EncapsulatedTimeStamp
  })], EncapsulatedTimeStampCollection);

  var XMLTimeStamp = function (_Any4) {
    _inherits(XMLTimeStamp, _Any4);

    function XMLTimeStamp() {
      _classCallCheck(this, XMLTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(XMLTimeStamp).apply(this, arguments));
    }

    return XMLTimeStamp;
  }(Any);

  XMLTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.XMLTimeStamp
  })], XMLTimeStamp);

  var XMLTimeStampCollection = function (_XadesCollection13) {
    _inherits(XMLTimeStampCollection, _XadesCollection13);

    function XMLTimeStampCollection() {
      _classCallCheck(this, XMLTimeStampCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(XMLTimeStampCollection).apply(this, arguments));
    }

    return XMLTimeStampCollection;
  }(XadesCollection);

  XMLTimeStampCollection = __decorate([XmlElement({
    localName: "XMLTimeStampCollection",
    parser: XMLTimeStamp
  })], XMLTimeStampCollection);

  var GenericTimeStamp = function (_XadesObject23) {
    _inherits(GenericTimeStamp, _XadesObject23);

    function GenericTimeStamp() {
      _classCallCheck(this, GenericTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(GenericTimeStamp).apply(this, arguments));
    }

    return GenericTimeStamp;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], GenericTimeStamp.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: Include
  })], GenericTimeStamp.prototype, "Include", void 0);

  __decorate([XmlChildElement({
    parser: ReferenceInfos,
    noRoot: true
  })], GenericTimeStamp.prototype, "ReferenceInfo", void 0);

  __decorate([XmlChildElement({
    parser: CanonicalizationMethod
  })], GenericTimeStamp.prototype, "CanonicalizationMethod", void 0);

  __decorate([XmlChildElement({
    parser: EncapsulatedTimeStampCollection,
    noRoot: true
  })], GenericTimeStamp.prototype, "EncapsulatedTimeStamp", void 0);

  __decorate([XmlChildElement({
    parser: XMLTimeStampCollection,
    noRoot: true
  })], GenericTimeStamp.prototype, "XMLTimeStamp", void 0);

  GenericTimeStamp = __decorate([XmlElement({
    localName: "GenericTimeStamp"
  })], GenericTimeStamp);

  var OtherTimeStamp = function (_XadesObject24) {
    _inherits(OtherTimeStamp, _XadesObject24);

    function OtherTimeStamp() {
      _classCallCheck(this, OtherTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherTimeStamp).apply(this, arguments));
    }

    return OtherTimeStamp;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], OtherTimeStamp.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: ReferenceInfos,
    noRoot: true
  })], OtherTimeStamp.prototype, "ReferenceInfo", void 0);

  __decorate([XmlChildElement({
    parser: CanonicalizationMethod
  })], OtherTimeStamp.prototype, "CanonicalizationMethod", void 0);

  __decorate([XmlChildElement({
    parser: EncapsulatedTimeStampCollection,
    noRoot: true
  })], OtherTimeStamp.prototype, "EncapsulatedTimeStamp", void 0);

  __decorate([XmlChildElement({
    parser: XMLTimeStampCollection,
    noRoot: true
  })], OtherTimeStamp.prototype, "XMLTimeStamp", void 0);

  OtherTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OtherTimeStamp
  })], OtherTimeStamp);

  var XAdESTimeStamp = function (_XadesObject25) {
    _inherits(XAdESTimeStamp, _XadesObject25);

    function XAdESTimeStamp() {
      _classCallCheck(this, XAdESTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(XAdESTimeStamp).apply(this, arguments));
    }

    return XAdESTimeStamp;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], XAdESTimeStamp.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: Include
  })], XAdESTimeStamp.prototype, "Include", void 0);

  __decorate([XmlChildElement({
    parser: CanonicalizationMethod
  })], XAdESTimeStamp.prototype, "CanonicalizationMethod", void 0);

  __decorate([XmlChildElement({
    parser: EncapsulatedTimeStampCollection,
    noRoot: true
  })], XAdESTimeStamp.prototype, "EncapsulatedTimeStamp", void 0);

  __decorate([XmlChildElement({
    parser: XMLTimeStampCollection,
    noRoot: true
  })], XAdESTimeStamp.prototype, "XMLTimeStamp", void 0);

  XAdESTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.XAdESTimeStamp
  })], XAdESTimeStamp);

  var IndividualDataObjectsTimeStamp = function (_XAdESTimeStamp) {
    _inherits(IndividualDataObjectsTimeStamp, _XAdESTimeStamp);

    function IndividualDataObjectsTimeStamp() {
      _classCallCheck(this, IndividualDataObjectsTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(IndividualDataObjectsTimeStamp).apply(this, arguments));
    }

    return IndividualDataObjectsTimeStamp;
  }(XAdESTimeStamp);

  IndividualDataObjectsTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.IndividualDataObjectsTimeStamp
  })], IndividualDataObjectsTimeStamp);

  var IndividualDataObjectsTimeStampCollection = function (_XadesCollection14) {
    _inherits(IndividualDataObjectsTimeStampCollection, _XadesCollection14);

    function IndividualDataObjectsTimeStampCollection() {
      _classCallCheck(this, IndividualDataObjectsTimeStampCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(IndividualDataObjectsTimeStampCollection).apply(this, arguments));
    }

    return IndividualDataObjectsTimeStampCollection;
  }(XadesCollection);

  IndividualDataObjectsTimeStampCollection = __decorate([XmlElement({
    localName: "IndividualDataObjectsTimeStampCollection",
    parser: IndividualDataObjectsTimeStamp
  })], IndividualDataObjectsTimeStampCollection);

  var AllDataObjectsTimeStamp = function (_XAdESTimeStamp2) {
    _inherits(AllDataObjectsTimeStamp, _XAdESTimeStamp2);

    function AllDataObjectsTimeStamp() {
      _classCallCheck(this, AllDataObjectsTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(AllDataObjectsTimeStamp).apply(this, arguments));
    }

    return AllDataObjectsTimeStamp;
  }(XAdESTimeStamp);

  AllDataObjectsTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.AllDataObjectsTimeStamp
  })], AllDataObjectsTimeStamp);

  var DataObjectFormatCollection = function (_XadesCollection15) {
    _inherits(DataObjectFormatCollection, _XadesCollection15);

    function DataObjectFormatCollection() {
      _classCallCheck(this, DataObjectFormatCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(DataObjectFormatCollection).apply(this, arguments));
    }

    return DataObjectFormatCollection;
  }(XadesCollection);

  DataObjectFormatCollection = __decorate([XmlElement({
    localName: "DataObjectFormatCollection",
    parser: DataObjectFormat
  })], DataObjectFormatCollection);

  var CommitmentTypeIndicationCollection = function (_XadesCollection16) {
    _inherits(CommitmentTypeIndicationCollection, _XadesCollection16);

    function CommitmentTypeIndicationCollection() {
      _classCallCheck(this, CommitmentTypeIndicationCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(CommitmentTypeIndicationCollection).apply(this, arguments));
    }

    return CommitmentTypeIndicationCollection;
  }(XadesCollection);

  CommitmentTypeIndicationCollection = __decorate([XmlElement({
    localName: "CommitmentTypeIndicationCollection",
    parser: CommitmentTypeIndication
  })], CommitmentTypeIndicationCollection);

  var AllDataObjectsTimeStampCollection = function (_XadesCollection17) {
    _inherits(AllDataObjectsTimeStampCollection, _XadesCollection17);

    function AllDataObjectsTimeStampCollection() {
      _classCallCheck(this, AllDataObjectsTimeStampCollection);

      return _possibleConstructorReturn(this, _getPrototypeOf(AllDataObjectsTimeStampCollection).apply(this, arguments));
    }

    return AllDataObjectsTimeStampCollection;
  }(XadesCollection);

  AllDataObjectsTimeStampCollection = __decorate([XmlElement({
    localName: "AllDataObjectsTimeStampCollection",
    parser: AllDataObjectsTimeStamp
  })], AllDataObjectsTimeStampCollection);

  var SignedDataObjectProperties = function (_XadesObject26) {
    _inherits(SignedDataObjectProperties, _XadesObject26);

    function SignedDataObjectProperties() {
      _classCallCheck(this, SignedDataObjectProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignedDataObjectProperties).apply(this, arguments));
    }

    return SignedDataObjectProperties;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], SignedDataObjectProperties.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: DataObjectFormatCollection,
    noRoot: true
  })], SignedDataObjectProperties.prototype, "DataObjectFormats", void 0);

  __decorate([XmlChildElement({
    parser: CommitmentTypeIndicationCollection,
    noRoot: true
  })], SignedDataObjectProperties.prototype, "CommitmentTypeIndications", void 0);

  __decorate([XmlChildElement({
    parser: AllDataObjectsTimeStampCollection,
    noRoot: true
  })], SignedDataObjectProperties.prototype, "AllDataObjectsTimeStamps", void 0);

  __decorate([XmlChildElement({
    parser: IndividualDataObjectsTimeStampCollection,
    noRoot: true
  })], SignedDataObjectProperties.prototype, "IndividualDataObjectsTimeStamps", void 0);

  SignedDataObjectProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignedDataObjectProperties
  })], SignedDataObjectProperties);

  var SigPolicyId = function (_ObjectIdentifier) {
    _inherits(SigPolicyId, _ObjectIdentifier);

    function SigPolicyId() {
      _classCallCheck(this, SigPolicyId);

      return _possibleConstructorReturn(this, _getPrototypeOf(SigPolicyId).apply(this, arguments));
    }

    return SigPolicyId;
  }(ObjectIdentifier);

  SigPolicyId = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SigPolicyId
  })], SigPolicyId);

  var SigPolicyHash = function (_DigestAlgAndValueTyp) {
    _inherits(SigPolicyHash, _DigestAlgAndValueTyp);

    function SigPolicyHash() {
      _classCallCheck(this, SigPolicyHash);

      return _possibleConstructorReturn(this, _getPrototypeOf(SigPolicyHash).apply(this, arguments));
    }

    return SigPolicyHash;
  }(DigestAlgAndValueType);

  SigPolicyHash = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SigPolicyHash
  })], SigPolicyHash);

  var SigPolicyQualifier = function (_AnyCollection) {
    _inherits(SigPolicyQualifier, _AnyCollection);

    function SigPolicyQualifier() {
      _classCallCheck(this, SigPolicyQualifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(SigPolicyQualifier).apply(this, arguments));
    }

    return SigPolicyQualifier;
  }(AnyCollection);

  SigPolicyQualifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SigPolicyQualifier
  })], SigPolicyQualifier);

  var Integer = function (_XadesObject27) {
    _inherits(Integer, _XadesObject27);

    function Integer() {
      _classCallCheck(this, Integer);

      return _possibleConstructorReturn(this, _getPrototypeOf(Integer).apply(this, arguments));
    }

    return Integer;
  }(XadesObject);

  __decorate([XmlContent({
    converter: XmlNumberConverter,
    required: true
  })], Integer.prototype, "Value", void 0);

  Integer = __decorate([XmlElement({
    localName: "int"
  })], Integer);

  var IntegerList = function (_XadesCollection18) {
    _inherits(IntegerList, _XadesCollection18);

    function IntegerList() {
      _classCallCheck(this, IntegerList);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegerList).apply(this, arguments));
    }

    return IntegerList;
  }(XadesCollection);

  IntegerList = __decorate([XmlElement({
    localName: "IntegerList",
    parser: Integer
  })], IntegerList);

  var NoticeReference = function (_XadesObject28) {
    _inherits(NoticeReference, _XadesObject28);

    function NoticeReference() {
      _classCallCheck(this, NoticeReference);

      return _possibleConstructorReturn(this, _getPrototypeOf(NoticeReference).apply(this, arguments));
    }

    return NoticeReference;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.Organization,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    required: true
  })], NoticeReference.prototype, "Organization", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.NoticeNumbers,
    parser: IntegerList,
    required: true
  })], NoticeReference.prototype, "NoticeNumbers", void 0);

  NoticeReference = __decorate([XmlElement({
    localName: XmlXades.ElementNames.NoticeRef
  })], NoticeReference);

  var SPUserNotice = function (_XadesObject29) {
    _inherits(SPUserNotice, _XadesObject29);

    function SPUserNotice() {
      _classCallCheck(this, SPUserNotice);

      return _possibleConstructorReturn(this, _getPrototypeOf(SPUserNotice).apply(this, arguments));
    }

    return SPUserNotice;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.NoticeRef,
    parser: NoticeReference
  })], SPUserNotice.prototype, "NoticeRef", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.ExplicitText,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], SPUserNotice.prototype, "ExplicitText", void 0);

  SPUserNotice = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SPUserNotice
  })], SPUserNotice);

  var SPURI = function (_XadesObject30) {
    _inherits(SPURI, _XadesObject30);

    function SPURI() {
      _classCallCheck(this, SPURI);

      return _possibleConstructorReturn(this, _getPrototypeOf(SPURI).apply(this, arguments));
    }

    return SPURI;
  }(XadesObject);

  __decorate([XmlContent()], SPURI.prototype, "Value", void 0);

  SPURI = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SPURI
  })], SPURI);

  var SigPolicyQualifiers = function (_XadesCollection19) {
    _inherits(SigPolicyQualifiers, _XadesCollection19);

    function SigPolicyQualifiers() {
      _classCallCheck(this, SigPolicyQualifiers);

      return _possibleConstructorReturn(this, _getPrototypeOf(SigPolicyQualifiers).apply(this, arguments));
    }

    return SigPolicyQualifiers;
  }(XadesCollection);

  SigPolicyQualifiers = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SigPolicyQualifiers,
    parser: SigPolicyQualifier
  })], SigPolicyQualifiers);

  var SignaturePolicyId = function (_XadesObject31) {
    _inherits(SignaturePolicyId, _XadesObject31);

    function SignaturePolicyId() {
      _classCallCheck(this, SignaturePolicyId);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignaturePolicyId).apply(this, arguments));
    }

    return SignaturePolicyId;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.SigPolicyId,
    parser: SigPolicyId,
    required: true
  })], SignaturePolicyId.prototype, "SigPolicyId", void 0);

  __decorate([XmlChildElement({
    parser: Transforms
  })], SignaturePolicyId.prototype, "Transforms", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.SigPolicyHash,
    parser: SigPolicyHash,
    required: true
  })], SignaturePolicyId.prototype, "SigPolicyHash", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.SigPolicyQualifiers,
    parser: SigPolicyQualifiers
  })], SignaturePolicyId.prototype, "SigPolicyQualifiers", void 0);

  SignaturePolicyId = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignaturePolicyId
  })], SignaturePolicyId);
  var XmlSignaturePolicyImpliedConverter = {
    set: function set(value) {
      return true;
    },
    get: function get(value) {
      return "";
    }
  };

  var SignaturePolicyIdentifier = function (_XadesObject32) {
    _inherits(SignaturePolicyIdentifier, _XadesObject32);

    function SignaturePolicyIdentifier() {
      _classCallCheck(this, SignaturePolicyIdentifier);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignaturePolicyIdentifier).apply(this, arguments));
    }

    return SignaturePolicyIdentifier;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.SignaturePolicyId,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    parser: SignaturePolicyId
  })], SignaturePolicyIdentifier.prototype, "SignaturePolicyId", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.SignaturePolicyImplied,
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
    converter: XmlSignaturePolicyImpliedConverter,
    defaultValue: false
  })], SignaturePolicyIdentifier.prototype, "SignaturePolicyImplied", void 0);

  SignaturePolicyIdentifier = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignaturePolicyIdentifier
  })], SignaturePolicyIdentifier);

  var SignatureProductionPlace = function (_XadesObject33) {
    _inherits(SignatureProductionPlace, _XadesObject33);

    function SignatureProductionPlace() {
      _classCallCheck(this, SignatureProductionPlace);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignatureProductionPlace).apply(this, arguments));
    }

    return SignatureProductionPlace;
  }(XadesObject);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.City,
    defaultValue: "",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], SignatureProductionPlace.prototype, "City", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.StateOrProvince,
    defaultValue: "",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], SignatureProductionPlace.prototype, "StateOrProvince", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.PostalCode,
    defaultValue: "",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], SignatureProductionPlace.prototype, "PostalCode", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.CountryName,
    defaultValue: "",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix
  })], SignatureProductionPlace.prototype, "CountryName", void 0);

  SignatureProductionPlace = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignatureProductionPlace
  })], SignatureProductionPlace);

  var ClaimedRole = function (_Any5) {
    _inherits(ClaimedRole, _Any5);

    function ClaimedRole() {
      _classCallCheck(this, ClaimedRole);

      return _possibleConstructorReturn(this, _getPrototypeOf(ClaimedRole).apply(this, arguments));
    }

    return ClaimedRole;
  }(Any);

  ClaimedRole = __decorate([XmlElement({
    localName: XmlXades.ElementNames.ClaimedRole
  })], ClaimedRole);

  var ClaimedRoles = function (_XadesCollection20) {
    _inherits(ClaimedRoles, _XadesCollection20);

    function ClaimedRoles() {
      _classCallCheck(this, ClaimedRoles);

      return _possibleConstructorReturn(this, _getPrototypeOf(ClaimedRoles).apply(this, arguments));
    }

    return ClaimedRoles;
  }(XadesCollection);

  ClaimedRoles = __decorate([XmlElement({
    localName: XmlXades.ElementNames.ClaimedRoles,
    parser: ClaimedRole
  })], ClaimedRoles);

  var CertifiedRole = function (_EncapsulatedPKIData3) {
    _inherits(CertifiedRole, _EncapsulatedPKIData3);

    function CertifiedRole() {
      _classCallCheck(this, CertifiedRole);

      return _possibleConstructorReturn(this, _getPrototypeOf(CertifiedRole).apply(this, arguments));
    }

    return CertifiedRole;
  }(EncapsulatedPKIData);

  CertifiedRole = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CertifiedRole
  })], CertifiedRole);

  var CertifiedRoles = function (_XadesCollection21) {
    _inherits(CertifiedRoles, _XadesCollection21);

    function CertifiedRoles() {
      _classCallCheck(this, CertifiedRoles);

      return _possibleConstructorReturn(this, _getPrototypeOf(CertifiedRoles).apply(this, arguments));
    }

    return CertifiedRoles;
  }(XadesCollection);

  CertifiedRoles = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CertifiedRoles,
    parser: CertifiedRole
  })], CertifiedRoles);

  var SignerRole = function (_XadesObject34) {
    _inherits(SignerRole, _XadesObject34);

    function SignerRole() {
      _classCallCheck(this, SignerRole);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignerRole).apply(this, arguments));
    }

    return SignerRole;
  }(XadesObject);

  __decorate([XmlChildElement({
    parser: ClaimedRoles
  })], SignerRole.prototype, "ClaimedRoles", void 0);

  __decorate([XmlChildElement({
    parser: CertifiedRoles
  })], SignerRole.prototype, "CertifiedRoles", void 0);

  SignerRole = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignerRole
  })], SignerRole);

  var SignedSignatureProperties = function (_XadesObject35) {
    _inherits(SignedSignatureProperties, _XadesObject35);

    function SignedSignatureProperties() {
      _classCallCheck(this, SignedSignatureProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignedSignatureProperties).apply(this, arguments));
    }

    return SignedSignatureProperties;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], SignedSignatureProperties.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    localName: XmlXades.ElementNames.SigningTime,
    parser: XadesDateTime
  })], SignedSignatureProperties.prototype, "SigningTime", void 0);

  __decorate([XmlChildElement({
    parser: SigningCertificate
  })], SignedSignatureProperties.prototype, "SigningCertificate", void 0);

  __decorate([XmlChildElement({
    parser: SignaturePolicyIdentifier
  })], SignedSignatureProperties.prototype, "SignaturePolicyIdentifier", void 0);

  __decorate([XmlChildElement({
    parser: SignatureProductionPlace
  })], SignedSignatureProperties.prototype, "SignatureProductionPlace", void 0);

  __decorate([XmlChildElement({
    parser: SignerRole
  })], SignedSignatureProperties.prototype, "SignerRole", void 0);

  SignedSignatureProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignedSignatureProperties
  })], SignedSignatureProperties);

  var SignedProperties = function (_XadesObject36) {
    _inherits(SignedProperties, _XadesObject36);

    function SignedProperties() {
      _classCallCheck(this, SignedProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignedProperties).apply(this, arguments));
    }

    return SignedProperties;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], SignedProperties.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: SignedSignatureProperties
  })], SignedProperties.prototype, "SignedSignatureProperties", void 0);

  __decorate([XmlChildElement({
    parser: SignedDataObjectProperties
  })], SignedProperties.prototype, "SignedDataObjectProperties", void 0);

  SignedProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignedProperties
  })], SignedProperties);

  var UnsignedDataObjectProperty = function (_Any6) {
    _inherits(UnsignedDataObjectProperty, _Any6);

    function UnsignedDataObjectProperty() {
      _classCallCheck(this, UnsignedDataObjectProperty);

      return _possibleConstructorReturn(this, _getPrototypeOf(UnsignedDataObjectProperty).apply(this, arguments));
    }

    return UnsignedDataObjectProperty;
  }(Any);

  UnsignedDataObjectProperty = __decorate([XmlElement({
    localName: XmlXades.ElementNames.UnsignedDataObjectProperty
  })], UnsignedDataObjectProperty);

  var UnsignedDataObjectProperties = function (_XadesCollection22) {
    _inherits(UnsignedDataObjectProperties, _XadesCollection22);

    function UnsignedDataObjectProperties() {
      _classCallCheck(this, UnsignedDataObjectProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(UnsignedDataObjectProperties).apply(this, arguments));
    }

    return UnsignedDataObjectProperties;
  }(XadesCollection);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], UnsignedDataObjectProperties.prototype, "Id", void 0);

  UnsignedDataObjectProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.UnsignedSignatureProperties,
    parser: UnsignedDataObjectProperty
  })], UnsignedDataObjectProperties);

  var OtherValue = function (_EncapsulatedPKIData4) {
    _inherits(OtherValue, _EncapsulatedPKIData4);

    function OtherValue() {
      _classCallCheck(this, OtherValue);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherValue).apply(this, arguments));
    }

    return OtherValue;
  }(EncapsulatedPKIData);

  OtherValue = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OtherValue
  })], OtherValue);

  var OtherValues = function (_XadesCollection23) {
    _inherits(OtherValues, _XadesCollection23);

    function OtherValues() {
      _classCallCheck(this, OtherValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(OtherValues).apply(this, arguments));
    }

    return OtherValues;
  }(XadesCollection);

  OtherValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OCSPValues,
    parser: OtherValue
  })], OtherValues);

  var EncapsulatedOCSPValue = function (_EncapsulatedPKIData5) {
    _inherits(EncapsulatedOCSPValue, _EncapsulatedPKIData5);

    function EncapsulatedOCSPValue() {
      _classCallCheck(this, EncapsulatedOCSPValue);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedOCSPValue).apply(this, arguments));
    }

    return EncapsulatedOCSPValue;
  }(EncapsulatedPKIData);

  EncapsulatedOCSPValue = __decorate([XmlElement({
    localName: XmlXades.ElementNames.EncapsulatedOCSPValue
  })], EncapsulatedOCSPValue);

  var OCSPValues = function (_XadesCollection24) {
    _inherits(OCSPValues, _XadesCollection24);

    function OCSPValues() {
      _classCallCheck(this, OCSPValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(OCSPValues).apply(this, arguments));
    }

    return OCSPValues;
  }(XadesCollection);

  OCSPValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.OCSPValues
  })], OCSPValues);

  var EncapsulatedCRLValue = function (_EncapsulatedPKIData6) {
    _inherits(EncapsulatedCRLValue, _EncapsulatedPKIData6);

    function EncapsulatedCRLValue() {
      _classCallCheck(this, EncapsulatedCRLValue);

      return _possibleConstructorReturn(this, _getPrototypeOf(EncapsulatedCRLValue).apply(this, arguments));
    }

    return EncapsulatedCRLValue;
  }(EncapsulatedPKIData);

  EncapsulatedCRLValue = __decorate([XmlElement({
    localName: XmlXades.ElementNames.EncapsulatedCRLValue
  })], EncapsulatedCRLValue);

  var CRLValues = function (_XadesCollection25) {
    _inherits(CRLValues, _XadesCollection25);

    function CRLValues() {
      _classCallCheck(this, CRLValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(CRLValues).apply(this, arguments));
    }

    return CRLValues;
  }(XadesCollection);

  CRLValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.CRLValues,
    parser: EncapsulatedCRLValue
  })], CRLValues);

  var RevocationValues = function (_XadesObject37) {
    _inherits(RevocationValues, _XadesObject37);

    function RevocationValues() {
      _classCallCheck(this, RevocationValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(RevocationValues).apply(this, arguments));
    }

    return RevocationValues;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], RevocationValues.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: CRLValues
  })], RevocationValues.prototype, "CRLValues", void 0);

  __decorate([XmlChildElement({
    parser: OCSPValues
  })], RevocationValues.prototype, "OCSPValues", void 0);

  __decorate([XmlChildElement({
    parser: OtherValues
  })], RevocationValues.prototype, "OtherValues", void 0);

  RevocationValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.RevocationValues
  })], RevocationValues);

  var SignatureTimeStamp = function (_XAdESTimeStamp3) {
    _inherits(SignatureTimeStamp, _XAdESTimeStamp3);

    function SignatureTimeStamp() {
      _classCallCheck(this, SignatureTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(SignatureTimeStamp).apply(this, arguments));
    }

    return SignatureTimeStamp;
  }(XAdESTimeStamp);

  SignatureTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SignatureTimeStamp
  })], SignatureTimeStamp);

  var SigAndRefsTimeStamp = function (_XAdESTimeStamp4) {
    _inherits(SigAndRefsTimeStamp, _XAdESTimeStamp4);

    function SigAndRefsTimeStamp() {
      _classCallCheck(this, SigAndRefsTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(SigAndRefsTimeStamp).apply(this, arguments));
    }

    return SigAndRefsTimeStamp;
  }(XAdESTimeStamp);

  SigAndRefsTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.SigAndRefsTimeStamp
  })], SigAndRefsTimeStamp);

  var RefsOnlyTimeStamp = function (_XAdESTimeStamp5) {
    _inherits(RefsOnlyTimeStamp, _XAdESTimeStamp5);

    function RefsOnlyTimeStamp() {
      _classCallCheck(this, RefsOnlyTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(RefsOnlyTimeStamp).apply(this, arguments));
    }

    return RefsOnlyTimeStamp;
  }(XAdESTimeStamp);

  RefsOnlyTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.RefsOnlyTimeStamp
  })], RefsOnlyTimeStamp);

  var ArchiveTimeStamp = function (_XAdESTimeStamp6) {
    _inherits(ArchiveTimeStamp, _XAdESTimeStamp6);

    function ArchiveTimeStamp() {
      _classCallCheck(this, ArchiveTimeStamp);

      return _possibleConstructorReturn(this, _getPrototypeOf(ArchiveTimeStamp).apply(this, arguments));
    }

    return ArchiveTimeStamp;
  }(XAdESTimeStamp);

  ArchiveTimeStamp = __decorate([XmlElement({
    localName: XmlXades.ElementNames.ArchiveTimeStamp
  })], ArchiveTimeStamp);

  var AttributeCertificateRefs = function (_CompleteCertificateR) {
    _inherits(AttributeCertificateRefs, _CompleteCertificateR);

    function AttributeCertificateRefs() {
      _classCallCheck(this, AttributeCertificateRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(AttributeCertificateRefs).apply(this, arguments));
    }

    return AttributeCertificateRefs;
  }(CompleteCertificateRefs);

  AttributeCertificateRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.AttributeCertificateRefs
  })], AttributeCertificateRefs);

  var AttributeRevocationRefs = function (_CompleteRevocationRe) {
    _inherits(AttributeRevocationRefs, _CompleteRevocationRe);

    function AttributeRevocationRefs() {
      _classCallCheck(this, AttributeRevocationRefs);

      return _possibleConstructorReturn(this, _getPrototypeOf(AttributeRevocationRefs).apply(this, arguments));
    }

    return AttributeRevocationRefs;
  }(CompleteRevocationRefs);

  AttributeRevocationRefs = __decorate([XmlElement({
    localName: XmlXades.ElementNames.AttributeRevocationRefs
  })], AttributeRevocationRefs);

  var AttrAuthoritiesCertValues = function (_CertificateValues) {
    _inherits(AttrAuthoritiesCertValues, _CertificateValues);

    function AttrAuthoritiesCertValues() {
      _classCallCheck(this, AttrAuthoritiesCertValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(AttrAuthoritiesCertValues).apply(this, arguments));
    }

    return AttrAuthoritiesCertValues;
  }(CertificateValues);

  AttrAuthoritiesCertValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.AttrAuthoritiesCertValues
  })], AttrAuthoritiesCertValues);

  var AttributeRevocationValues = function (_RevocationValues) {
    _inherits(AttributeRevocationValues, _RevocationValues);

    function AttributeRevocationValues() {
      _classCallCheck(this, AttributeRevocationValues);

      return _possibleConstructorReturn(this, _getPrototypeOf(AttributeRevocationValues).apply(this, arguments));
    }

    return AttributeRevocationValues;
  }(RevocationValues);

  AttributeRevocationValues = __decorate([XmlElement({
    localName: XmlXades.ElementNames.AttributeRevocationValues
  })], AttributeRevocationValues);

  var UnsignedSignatureProperty = function (_XadesObject38) {
    _inherits(UnsignedSignatureProperty, _XadesObject38);

    function UnsignedSignatureProperty() {
      _classCallCheck(this, UnsignedSignatureProperty);

      return _possibleConstructorReturn(this, _getPrototypeOf(UnsignedSignatureProperty).apply(this, arguments));
    }

    return UnsignedSignatureProperty;
  }(XadesObject);

  UnsignedSignatureProperty = __decorate([XmlElement({
    localName: "UnsignedSignatureProperty"
  })], UnsignedSignatureProperty);

  var UnsignedSignatureProperties = function (_XadesCollection26) {
    _inherits(UnsignedSignatureProperties, _XadesCollection26);

    function UnsignedSignatureProperties() {
      _classCallCheck(this, UnsignedSignatureProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(UnsignedSignatureProperties).apply(this, arguments));
    }

    _createClass(UnsignedSignatureProperties, [{
      key: "OnLoadXml",
      value: function OnLoadXml(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
          var node = element.childNodes.item(i);

          if (node.nodeType !== XmlNodeType.Element) {
            continue;
          }

          var XmlClass = void 0;

          switch (node.localName) {
            case XmlXades.ElementNames.CounterSignature:
              XmlClass = CounterSignature;
              break;

            case XmlXades.ElementNames.SignatureTimeStamp:
              XmlClass = SignatureTimeStamp;
              break;

            case XmlXades.ElementNames.CompleteCertificateRefs:
              XmlClass = CompleteCertificateRefs;
              break;

            case XmlXades.ElementNames.CompleteRevocationRefs:
              XmlClass = CompleteRevocationRefs;
              break;

            case XmlXades.ElementNames.AttributeCertificateRefs:
              XmlClass = AttributeCertificateRefs;
              break;

            case XmlXades.ElementNames.AttributeRevocationRefs:
              XmlClass = AttributeRevocationRefs;
              break;

            case XmlXades.ElementNames.SigAndRefsTimeStamp:
              XmlClass = SigAndRefsTimeStamp;
              break;

            case XmlXades.ElementNames.RefsOnlyTimeStamp:
              XmlClass = RefsOnlyTimeStamp;
              break;

            case XmlXades.ElementNames.CertificateValues:
              XmlClass = CertificateValues;
              break;

            case XmlXades.ElementNames.RevocationValues:
              XmlClass = RevocationValues;
              break;

            case XmlXades.ElementNames.AttrAuthoritiesCertValues:
              XmlClass = AttrAuthoritiesCertValues;
              break;

            case XmlXades.ElementNames.AttributeRevocationValues:
              XmlClass = AttributeRevocationValues;
              break;

            case XmlXades.ElementNames.ArchiveTimeStamp:
              XmlClass = ArchiveTimeStamp;
              break;
          }

          if (XmlClass) {
            var item = XmlClass.LoadXml(node);
            this.Add(item);
          }
        }
      }
    }]);

    return UnsignedSignatureProperties;
  }(XadesCollection);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], UnsignedSignatureProperties.prototype, "Id", void 0);

  UnsignedSignatureProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.UnsignedSignatureProperties,
    parser: UnsignedSignatureProperty
  })], UnsignedSignatureProperties);

  var UnsignedProperties = function (_XadesObject39) {
    _inherits(UnsignedProperties, _XadesObject39);

    function UnsignedProperties() {
      _classCallCheck(this, UnsignedProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(UnsignedProperties).apply(this, arguments));
    }

    return UnsignedProperties;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], UnsignedProperties.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: UnsignedSignatureProperties
  })], UnsignedProperties.prototype, "UnsignedSignatureProperties", void 0);

  __decorate([XmlChildElement({
    parser: UnsignedDataObjectProperties
  })], UnsignedProperties.prototype, "UnsignedDataObjectProperties", void 0);

  UnsignedProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.UnsignedProperties
  })], UnsignedProperties);

  var QualifyingProperties = function (_XadesObject40) {
    _inherits(QualifyingProperties, _XadesObject40);

    function QualifyingProperties() {
      _classCallCheck(this, QualifyingProperties);

      return _possibleConstructorReturn(this, _getPrototypeOf(QualifyingProperties).apply(this, arguments));
    }

    return QualifyingProperties;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Target,
    required: true
  })], QualifyingProperties.prototype, "Target", void 0);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], QualifyingProperties.prototype, "Id", void 0);

  __decorate([XmlChildElement({
    parser: SignedProperties
  })], QualifyingProperties.prototype, "SignedProperties", void 0);

  __decorate([XmlChildElement({
    parser: UnsignedProperties
  })], QualifyingProperties.prototype, "UnsignedProperties", void 0);

  QualifyingProperties = __decorate([XmlElement({
    localName: XmlXades.ElementNames.QualifyingProperties
  })], QualifyingProperties);

  var QualifyingPropertiesReference = function (_XadesObject41) {
    _inherits(QualifyingPropertiesReference, _XadesObject41);

    function QualifyingPropertiesReference() {
      _classCallCheck(this, QualifyingPropertiesReference);

      return _possibleConstructorReturn(this, _getPrototypeOf(QualifyingPropertiesReference).apply(this, arguments));
    }

    return QualifyingPropertiesReference;
  }(XadesObject);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.URI,
    required: true
  })], QualifyingPropertiesReference.prototype, "Uri", void 0);

  __decorate([XmlAttribute({
    localName: XmlXades.AttributeNames.Id,
    defaultValue: ""
  })], QualifyingPropertiesReference.prototype, "Id", void 0);

  QualifyingPropertiesReference = __decorate([XmlElement({
    localName: XmlXades.ElementNames.QualifyingPropertiesReference
  })], QualifyingPropertiesReference);

  var DataObject$1 = function (_DataObject) {
    _inherits(DataObject$1, _DataObject);

    function DataObject$1() {
      _classCallCheck(this, DataObject$1);

      return _possibleConstructorReturn(this, _getPrototypeOf(DataObject$1).apply(this, arguments));
    }

    return DataObject$1;
  }(DataObject);

  __decorate([XmlChildElement({
    parser: QualifyingProperties
  })], DataObject$1.prototype, "QualifyingProperties", void 0);

  DataObject$1 = __decorate([XmlElement({
    localName: XmlSignature.ElementNames.Object
  })], DataObject$1);
  var xadesXml = Object.freeze({
    __proto__: null,

    get Any() {
      return Any;
    },

    get AnyCollection() {
      return AnyCollection;
    },

    get OtherCertificate() {
      return OtherCertificate;
    },

    get OtherCertificateCollection() {
      return OtherCertificateCollection;
    },

    get EncapsulatedX509Certificate() {
      return EncapsulatedX509Certificate;
    },

    get EncapsulatedX509CertificateCollection() {
      return EncapsulatedX509CertificateCollection;
    },

    get CertificateValues() {
      return CertificateValues;
    },

    get CommitmentTypeQualifier() {
      return CommitmentTypeQualifier;
    },

    get CommitmentTypeQualifiers() {
      return CommitmentTypeQualifiers;
    },

    get ObjectReference() {
      return ObjectReference;
    },

    get ObjectReferenceCollection() {
      return ObjectReferenceCollection;
    },

    get CommitmentTypeIndication() {
      return CommitmentTypeIndication;
    },

    get CompleteCertificateRefs() {
      return CompleteCertificateRefs;
    },

    get OtherRef() {
      return OtherRef;
    },

    get OtherRefs() {
      return OtherRefs;
    },

    get ResponderID() {
      return ResponderID;
    },

    get OCSPIdentifier() {
      return OCSPIdentifier;
    },

    get OCSPRef() {
      return OCSPRef;
    },

    get OCSPRefs() {
      return OCSPRefs;
    },

    get CRLIdentifier() {
      return CRLIdentifier;
    },

    get CRLRef() {
      return CRLRef;
    },

    get CRLRefs() {
      return CRLRefs;
    },

    get CompleteRevocationRefs() {
      return CompleteRevocationRefs;
    },

    get CounterSignature() {
      return CounterSignature;
    },

    get DataObjectFormat() {
      return DataObjectFormat;
    },

    get XadesDateTime() {
      return XadesDateTime;
    },

    get EncapsulatedPKIData() {
      return EncapsulatedPKIData;
    },

    get Include() {
      return Include;
    },

    get ReferenceInfo() {
      return ReferenceInfo;
    },

    get ReferenceInfos() {
      return ReferenceInfos;
    },

    get EncapsulatedTimeStamp() {
      return EncapsulatedTimeStamp;
    },

    get EncapsulatedTimeStampCollection() {
      return EncapsulatedTimeStampCollection;
    },

    get XMLTimeStamp() {
      return XMLTimeStamp;
    },

    get XMLTimeStampCollection() {
      return XMLTimeStampCollection;
    },

    get GenericTimeStamp() {
      return GenericTimeStamp;
    },

    get Identifier() {
      return Identifier;
    },

    get DocumentationReference() {
      return DocumentationReference;
    },

    get DocumentationReferences() {
      return DocumentationReferences;
    },

    get ObjectIdentifier() {
      return ObjectIdentifier;
    },

    get OtherTimeStamp() {
      return OtherTimeStamp;
    },

    get QualifyingProperties() {
      return QualifyingProperties;
    },

    get QualifyingPropertiesReference() {
      return QualifyingPropertiesReference;
    },

    get OtherValue() {
      return OtherValue;
    },

    get OtherValues() {
      return OtherValues;
    },

    get EncapsulatedOCSPValue() {
      return EncapsulatedOCSPValue;
    },

    get OCSPValues() {
      return OCSPValues;
    },

    get EncapsulatedCRLValue() {
      return EncapsulatedCRLValue;
    },

    get CRLValues() {
      return CRLValues;
    },

    get RevocationValues() {
      return RevocationValues;
    },

    get SigPolicyId() {
      return SigPolicyId;
    },

    get SigPolicyHash() {
      return SigPolicyHash;
    },

    get SigPolicyQualifier() {
      return SigPolicyQualifier;
    },

    get Integer() {
      return Integer;
    },

    get IntegerList() {
      return IntegerList;
    },

    get NoticeReference() {
      return NoticeReference;
    },

    get SPUserNotice() {
      return SPUserNotice;
    },

    get SPURI() {
      return SPURI;
    },

    get SigPolicyQualifiers() {
      return SigPolicyQualifiers;
    },

    get SignaturePolicyId() {
      return SignaturePolicyId;
    },

    get SignaturePolicyIdentifier() {
      return SignaturePolicyIdentifier;
    },

    get SignatureProductionPlace() {
      return SignatureProductionPlace;
    },

    get IndividualDataObjectsTimeStamp() {
      return IndividualDataObjectsTimeStamp;
    },

    get IndividualDataObjectsTimeStampCollection() {
      return IndividualDataObjectsTimeStampCollection;
    },

    get AllDataObjectsTimeStamp() {
      return AllDataObjectsTimeStamp;
    },

    get DataObjectFormatCollection() {
      return DataObjectFormatCollection;
    },

    get CommitmentTypeIndicationCollection() {
      return CommitmentTypeIndicationCollection;
    },

    get AllDataObjectsTimeStampCollection() {
      return AllDataObjectsTimeStampCollection;
    },

    get SignedDataObjectProperties() {
      return SignedDataObjectProperties;
    },

    get SignedProperties() {
      return SignedProperties;
    },

    get SignedSignatureProperties() {
      return SignedSignatureProperties;
    },

    get ClaimedRole() {
      return ClaimedRole;
    },

    get ClaimedRoles() {
      return ClaimedRoles;
    },

    get CertifiedRole() {
      return CertifiedRole;
    },

    get CertifiedRoles() {
      return CertifiedRoles;
    },

    get SignerRole() {
      return SignerRole;
    },

    get DigestAlgAndValueType() {
      return DigestAlgAndValueType;
    },

    get IssuerSerial() {
      return IssuerSerial;
    },

    get Cert() {
      return Cert;
    },

    get CertIDList() {
      return CertIDList;
    },

    get SigningCertificate() {
      return SigningCertificate;
    },

    get UnsignedDataObjectProperty() {
      return UnsignedDataObjectProperty;
    },

    get UnsignedDataObjectProperties() {
      return UnsignedDataObjectProperties;
    },

    get UnsignedProperties() {
      return UnsignedProperties;
    },

    get SignatureTimeStamp() {
      return SignatureTimeStamp;
    },

    get SigAndRefsTimeStamp() {
      return SigAndRefsTimeStamp;
    },

    get RefsOnlyTimeStamp() {
      return RefsOnlyTimeStamp;
    },

    get ArchiveTimeStamp() {
      return ArchiveTimeStamp;
    },

    get AttributeCertificateRefs() {
      return AttributeCertificateRefs;
    },

    get AttributeRevocationRefs() {
      return AttributeRevocationRefs;
    },

    get AttrAuthoritiesCertValues() {
      return AttrAuthoritiesCertValues;
    },

    get AttributeRevocationValues() {
      return AttributeRevocationValues;
    },

    get UnsignedSignatureProperty() {
      return UnsignedSignatureProperty;
    },

    get UnsignedSignatureProperties() {
      return UnsignedSignatureProperties;
    },

    get XAdESTimeStamp() {
      return XAdESTimeStamp;
    },

    get DataObject() {
      return DataObject$1;
    },

    XmlXades: XmlXades
  });
  var XADES_REFERENCE_TYPE = "http://uri.etsi.org/01903#SignedProperties";

  var SignedXml$1 = function (_SignedXml) {
    _inherits(SignedXml$1, _SignedXml);

    function SignedXml$1(node) {
      var _this159;

      _classCallCheck(this, SignedXml$1);

      _this159 = _possibleConstructorReturn(this, _getPrototypeOf(SignedXml$1).call(this, node));
      _this159.properties = null;

      _this159.CreateQualifyingProperties();

      return _this159;
    }

    _createClass(SignedXml$1, [{
      key: "LoadXml",
      value: function LoadXml(value, useContainer) {
        _get(_getPrototypeOf(SignedXml$1.prototype), "LoadXml", this).call(this, value);

        var properties = null;
        this.XmlSignature.ObjectList.Some(function (item) {
          if (item.Element) {
            for (var i = 0; i < item.Element.childNodes.length; i++) {
              var node = item.Element.childNodes.item(i);

              if (node.nodeType === XmlNodeType.Element && node.localName === XmlXades.ElementNames.QualifyingProperties) {
                properties = QualifyingProperties.LoadXml(node);
                return true;
              }
            }
          }

          return false;
        });
        this.properties = properties;
      }
    }, {
      key: "Sign",
      value: function () {
        var _Sign3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(algorithm, key, data, options) {
          var _args25 = arguments;
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  return _context25.abrupt("return", _get(_getPrototypeOf(SignedXml$1.prototype), "Sign", this).apply(this, _args25));

                case 1:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25, this);
        }));

        function Sign(_x36, _x37, _x38, _x39) {
          return _Sign3.apply(this, arguments);
        }

        return Sign;
      }()
    }, {
      key: "CreateQualifyingProperties",
      value: function CreateQualifyingProperties() {
        if (this.Properties) {
          throw new XmlError(XE.XML_EXCEPTION, "Cannot create QualifyingProperties cause current signature has got one. You must create CounterSignature");
        }

        var rnd = Application.crypto.getRandomValues(new Uint8Array(6));
        var id = Convert.ToHex(rnd);
        this.XmlSignature.Id = "id-".concat(id);
        var dataObject = new DataObject$1();
        dataObject.QualifyingProperties.Target = "#".concat(this.XmlSignature.Id);
        dataObject.QualifyingProperties.SignedProperties.Id = "xades-".concat(this.XmlSignature.Id);
        this.properties = dataObject.QualifyingProperties;
        this.XmlSignature.ObjectList.Add(dataObject);
      }
    }, {
      key: "ApplySignOptions",
      value: function () {
        var _ApplySignOptions2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26(signature, algorithm, key, options) {
          var sigProps, signingAlg, xadesRefHash, xadesRef;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return _get(_getPrototypeOf(SignedXml$1.prototype), "ApplySignOptions", this).call(this, signature, algorithm, key, options);

                case 2:
                  if (!this.Properties) {
                    _context26.next = 19;
                    break;
                  }

                  sigProps = this.Properties.SignedProperties.SignedSignatureProperties;
                  sigProps.SigningTime.Value = new Date();

                  if (options.signingTime) {
                    if (options.signingTime.value) {
                      sigProps.SigningTime.Value = options.signingTime.value;
                    }

                    if (options.signingTime.format) {
                      sigProps.SigningTime.Format = options.signingTime.format;
                    }
                  }

                  signingAlg = assign$1({}, algorithm, key.algorithm);
                  xadesRefHash = signingAlg.hash;
                  xadesRef = new Reference();
                  xadesRef.Type = XADES_REFERENCE_TYPE;
                  xadesRef.Uri = "#".concat(this.Properties.SignedProperties.Id);
                  xadesRef.DigestMethod.Algorithm = CryptoConfig.GetHashAlgorithm(xadesRefHash).namespaceURI;
                  signature.SignedInfo.References.Add(xadesRef);
                  _context26.next = 15;
                  return this.ApplySigningCertificate(options.signingCertificate);

                case 15:
                  _context26.next = 17;
                  return this.ApplySignaturePolicyIdentifier(options.policy);

                case 17:
                  this.ApplySignatureProductionPlace(options.productionPlace);
                  this.ApplySignerRoles(options.signerRole);

                case 19:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26, this);
        }));

        function ApplySignOptions(_x40, _x41, _x42, _x43) {
          return _ApplySignOptions2.apply(this, arguments);
        }

        return ApplySignOptions;
      }()
    }, {
      key: "ApplySigningCertificate",
      value: function () {
        var _ApplySigningCertificate = _asyncToGenerator(regeneratorRuntime.mark(function _callee27(base64string) {
          var raw, cert, ssp, signingCertificate, alg;
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  if (!(this.Properties && base64string)) {
                    _context27.next = 17;
                    break;
                  }

                  raw = Convert.FromBase64(base64string);
                  cert = new X509Certificate(raw);
                  ssp = this.Properties.SignedProperties.SignedSignatureProperties;

                  if (!ssp.SigningCertificate.Count) {
                    _context27.next = 6;
                    break;
                  }

                  throw new XmlError(XE.XML_EXCEPTION, "Signature can contain only one SigningCertificate");

                case 6:
                  signingCertificate = new Cert();
                  signingCertificate.IssuerSerial.X509IssuerName = cert.Issuer;
                  signingCertificate.IssuerSerial.X509SerialNumber = cert.SerialNumber;
                  alg = CryptoConfig.GetHashAlgorithm("SHA-256");
                  signingCertificate.CertDigest.DigestMethod.Algorithm = alg.namespaceURI;
                  _context27.t0 = Uint8Array;
                  _context27.next = 14;
                  return cert.Thumbprint(alg.algorithm.name);

                case 14:
                  _context27.t1 = _context27.sent;
                  signingCertificate.CertDigest.DigestValue = new _context27.t0(_context27.t1);
                  this.Properties.SignedProperties.SignedSignatureProperties.SigningCertificate.Add(signingCertificate);

                case 17:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27, this);
        }));

        function ApplySigningCertificate(_x44) {
          return _ApplySigningCertificate.apply(this, arguments);
        }

        return ApplySigningCertificate;
      }()
    }, {
      key: "ApplySignaturePolicyIdentifier",
      value: function () {
        var _ApplySignaturePolicyIdentifier = _asyncToGenerator(regeneratorRuntime.mark(function _callee28(options) {
          var _this160 = this;

          var ssp, policyId, digestAlgorithm, identifierDoc, identifierContent, c14n;
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  if (!this.Properties) {
                    _context28.next = 29;
                    break;
                  }

                  ssp = this.Properties.SignedProperties.SignedSignatureProperties;

                  if (!(options && _typeof(options) === "object")) {
                    _context28.next = 28;
                    break;
                  }

                  policyId = new SignaturePolicyId();
                  policyId.SigPolicyId = new SigPolicyId();
                  policyId.SigPolicyId.Identifier = new Identifier();
                  policyId.SigPolicyId.Identifier.Qualifier = options.identifier.qualifier;
                  policyId.SigPolicyId.Identifier.Value = options.identifier.value;

                  if (options.identifier.description) {
                    policyId.SigPolicyId.Description = options.identifier.description;
                  }

                  if (options.identifier.references) {
                    policyId.SigPolicyId.DocumentationReferences = new DocumentationReferences();
                    options.identifier.references.forEach(function (referenceValue) {
                      var reference = new DocumentationReference();
                      reference.Uri = referenceValue;
                      policyId.SigPolicyId.DocumentationReferences.Add(reference);
                    });
                  }

                  if (options.transforms && options.transforms.length) {
                    policyId.Transforms = new Transforms();
                    options.transforms.forEach(function (transform) {
                      policyId.Transforms.Add(_this160.ResolveTransform(transform));
                    });
                  }

                  policyId.SigPolicyHash = new SigPolicyHash();
                  policyId.SigPolicyHash.DigestMethod = new DigestMethod();
                  digestAlgorithm = CryptoConfig.GetHashAlgorithm(options.hash);
                  policyId.SigPolicyHash.DigestMethod.Algorithm = digestAlgorithm.namespaceURI;
                  identifierDoc = policyId.SigPolicyId.Identifier.GetXml().cloneNode(true);
                  this.CopyNamespaces(identifierDoc, identifierDoc, true);
                  this.InjectNamespaces(this.GetSignatureNamespaces(), identifierDoc, true);
                  identifierContent = null;

                  if (policyId.Transforms && policyId.Transforms.Count) {
                    identifierContent = this.ApplyTransforms(policyId.Transforms, identifierDoc);
                  } else {
                    c14n = new XmlDsigC14NTransform();
                    c14n.LoadInnerXml(identifierDoc);
                    identifierContent = c14n.GetOutput();
                  }

                  _context28.next = 22;
                  return digestAlgorithm.Digest(identifierContent);

                case 22:
                  policyId.SigPolicyHash.DigestValue = _context28.sent;

                  if (options.qualifiers) {
                    policyId.SigPolicyQualifiers = new SigPolicyQualifiers();
                    options.qualifiers.forEach(function (qualifierValue) {
                      var container = new SigPolicyQualifier();

                      if (typeof qualifierValue === "string") {
                        var qualifier = new SPURI();
                        qualifier.Value = qualifierValue;
                        container.Add(qualifier);
                      } else {
                        var _qualifier = new SPUserNotice();

                        if (qualifierValue.explicitText) {
                          _qualifier.ExplicitText = qualifierValue.explicitText;
                        }

                        if (qualifierValue.noticeRef) {
                          _qualifier.NoticeRef = new NoticeReference();
                          _qualifier.NoticeRef.Organization = qualifierValue.noticeRef.organization;
                          _qualifier.NoticeRef.NoticeNumbers = new IntegerList();

                          if (qualifierValue.noticeRef.noticeNumbers) {
                            qualifierValue.noticeRef.noticeNumbers.forEach(function (numberValue) {
                              var noticeNumber = new Integer();
                              noticeNumber.Value = numberValue;

                              _qualifier.NoticeRef.NoticeNumbers.Add(noticeNumber);
                            });
                          }
                        }

                        container.Add(_qualifier);
                      }

                      policyId.SigPolicyQualifiers.Add(container);
                    });
                  }

                  ssp.SignaturePolicyIdentifier.SignaturePolicyId = policyId;
                  ssp.SignaturePolicyIdentifier.SignaturePolicyImplied = false;
                  _context28.next = 29;
                  break;

                case 28:
                  if (options) {
                    ssp.SignaturePolicyIdentifier.SignaturePolicyImplied = true;
                  }

                case 29:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28, this);
        }));

        function ApplySignaturePolicyIdentifier(_x45) {
          return _ApplySignaturePolicyIdentifier.apply(this, arguments);
        }

        return ApplySignaturePolicyIdentifier;
      }()
    }, {
      key: "ApplySignatureProductionPlace",
      value: function ApplySignatureProductionPlace(options) {
        if (this.Properties && options) {
          var ssp = this.Properties.SignedProperties.SignedSignatureProperties;

          if (options.city) {
            ssp.SignatureProductionPlace.City = options.city;
          }

          if (options.code) {
            ssp.SignatureProductionPlace.PostalCode = options.code;
          }

          if (options.country) {
            ssp.SignatureProductionPlace.CountryName = options.country;
          }

          if (options.state) {
            ssp.SignatureProductionPlace.StateOrProvince = options.state;
          }
        }
      }
    }, {
      key: "ApplySignerRoles",
      value: function ApplySignerRoles(options) {
        if (this.Properties && options) {
          var ssp = this.Properties.SignedProperties.SignedSignatureProperties;

          if (options.claimed) {
            options.claimed.forEach(function (role) {
              var claimedRole = new ClaimedRole();
              claimedRole.Value = role;
              ssp.SignerRole.ClaimedRoles.Add(claimedRole);
            });
          }

          if (options.certified) {
            options.certified.forEach(function (role) {
              var certifiedRole = new CertifiedRole();
              certifiedRole.Encoding = "der";
              certifiedRole.Value = Convert.FromBase64(role);
              ssp.SignerRole.CertifiedRoles.Add(certifiedRole);
            });
          }
        }
      }
    }, {
      key: "VerifySigningCertificate",
      value: function () {
        var _VerifySigningCertificate = _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
          var x509, ssp, alg, signingCertificate, b64CertDigest, keyInfos, i, item, certs, j, cert, hash, b64Hash;
          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  x509 = null;

                  if (!(this.XmlSignature && this.Properties)) {
                    _context29.next = 34;
                    break;
                  }

                  ssp = this.Properties.SignedProperties.SignedSignatureProperties;

                  if (!(ssp.SigningCertificate.Count !== 1)) {
                    _context29.next = 5;
                    break;
                  }

                  throw new XmlError(XE.XML_EXCEPTION, "Signature has got wrong amount of SigningCertificate, MUST be one");

                case 5:
                  alg = CryptoConfig.GetHashAlgorithm("SHA-256");
                  signingCertificate = ssp.SigningCertificate.Item(0);
                  b64CertDigest = Convert.ToBase64(signingCertificate.CertDigest.DigestValue);
                  keyInfos = this.XmlSignature.KeyInfo;
                  i = 0;

                case 10:
                  if (!(i < keyInfos.Count, !x509)) {
                    _context29.next = 32;
                    break;
                  }

                  item = keyInfos.Item(i);

                  if (!(item instanceof KeyInfoX509Data)) {
                    _context29.next = 29;
                    break;
                  }

                  certs = item.Certificates;
                  j = 0;

                case 15:
                  if (!(j < certs.length, !x509)) {
                    _context29.next = 29;
                    break;
                  }

                  cert = certs[j];

                  if (cert) {
                    _context29.next = 19;
                    break;
                  }

                  return _context29.abrupt("continue", 26);

                case 19:
                  _context29.t0 = Uint8Array;
                  _context29.next = 22;
                  return cert.Thumbprint(alg.algorithm);

                case 22:
                  _context29.t1 = _context29.sent;
                  hash = new _context29.t0(_context29.t1);
                  b64Hash = Convert.ToBase64(hash);

                  if (b64Hash === b64CertDigest) {
                    x509 = cert;
                  }

                case 26:
                  j++;
                  _context29.next = 15;
                  break;

                case 29:
                  i++;
                  _context29.next = 10;
                  break;

                case 32:
                  if (x509 && x509.Issuer === signingCertificate.IssuerSerial.X509IssuerName && x509.SerialNumber === signingCertificate.IssuerSerial.X509SerialNumber) {
                    _context29.next = 34;
                    break;
                  }

                  throw new XmlError(XE.XML_EXCEPTION, "SigningCertificate not found");

                case 34:
                  return _context29.abrupt("return", x509);

                case 35:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29, this);
        }));

        function VerifySigningCertificate() {
          return _VerifySigningCertificate.apply(this, arguments);
        }

        return VerifySigningCertificate;
      }()
    }, {
      key: "Properties",
      get: function get() {
        return this.properties;
      }
    }, {
      key: "SignedProperties",
      get: function get() {
        if (!this.Properties) {
          throw new XmlError(XE.XML_EXCEPTION, "Properties is empty");
        }

        return this.Properties.SignedProperties;
      }
    }, {
      key: "UnsignedProperties",
      get: function get() {
        if (!this.Properties) {
          throw new XmlError(XE.XML_EXCEPTION, "Properties is empty");
        }

        return this.Properties.UnsignedProperties;
      }
    }]);

    return SignedXml$1;
  }(SignedXml);

  var xml = xadesXml;

  exports.Application = Application;
  exports.Convert = Convert;
  exports.Parse = Parse;
  exports.Select = Select;
  exports.SignedXml = SignedXml$1;
  exports.xml = xml;

  return exports;

}({}));
