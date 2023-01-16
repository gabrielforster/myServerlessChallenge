var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/deep-object-js/src/isObject.js
var require_isObject = __commonJS({
  "node_modules/deep-object-js/src/isObject.js"(exports, module2) {
    var isObject = (obj) => {
      return typeof obj === "object" && obj === Object(obj) && !Array.isArray(obj);
    };
    module2.exports = {
      isObject
    };
  }
});

// node_modules/deep-object-js/src/get.js
var require_get = __commonJS({
  "node_modules/deep-object-js/src/get.js"(exports, module2) {
    var { isObject } = require_isObject();
    var _mountPathList = (path) => {
      if (typeof path !== "string")
        throw new Error("path is not a string");
      return path.replace(/\[(\d+)]/g, ".$1").split(".");
    };
    var get = (obj, path, def) => {
      try {
        if (!isObject(obj))
          throw new Error("object is not accepted");
        let pathList = _mountPathList(path);
        let value = pathList.every((step) => (obj = obj[step]) !== void 0) ? obj : def;
        return value;
      } catch (err) {
        return def !== void 0 ? def : void 0;
      }
    };
    module2.exports = {
      get,
      _mountPathList
    };
  }
});

// node_modules/deep-object-js/index.js
var require_deep_object_js = __commonJS({
  "node_modules/deep-object-js/index.js"(exports, module2) {
    var { get } = require_get();
    var { isObject } = require_isObject();
    module2.exports = {
      get,
      isObject
    };
  }
});

// lambdas/hello.ts
var hello_exports = {};
__export(hello_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(hello_exports);
var import_deep_object_js = __toESM(require_deep_object_js());
var handler = async (event) => {
  const name = (0, import_deep_object_js.get)(event, "pathParameters.name");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name ?? "World"}!`
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=hello.js.map
