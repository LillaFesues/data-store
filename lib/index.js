(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("normalized-db", [], factory);
	else if(typeof exports === 'object')
		exports["normalized-db"] = factory();
	else
		root["normalized-db"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("normalized-db", [], factory);
	else if(typeof exports === 'object')
		exports["normalized-db"] = factory();
	else
		root["normalized-db"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isNull(object) {
    return typeof object === 'undefined' || object === null;
}
exports.isNull = isNull;
function isObject(object) {
    return !isNull(object) && typeof object === 'object';
}
exports.isObject = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deepClone(object) {
    var ctor = object ? object.constructor : null;
    if (object === null || typeof object !== 'object' || ctor === ArrayBuffer || ctor === Blob || ctor === File) {
        return object;
    }
    if (ctor === Date || ctor === RegExp || ctor === Function || ctor === JSON ||
        ctor === String || ctor === Number || ctor === Boolean ||
        ctor === Set || ctor === Map || ctor === WeakMap || ctor === WeakSet) {
        return new ctor(object);
    }
    var result = new ctor();
    Object.keys(object)
        .forEach(function (key) { return result[key] = deepClone(object[key]); });
    return result;
}
exports.deepClone = deepClone;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(1);
var object_1 = __webpack_require__(0);
var Schema = (function () {
    function Schema(userConfig) {
        var _this = this;
        this.config = {};
        this.userConfig = deep_clone_1.deepClone(userConfig);
        this.initDefaults();
        var keys = Object.keys(this.userConfig);
        keys.filter(function (type) { return !type.startsWith('_'); })
            .forEach(function (type) { return _this.config[type] = _this.expandSchemaForType(type); });
    }
    Schema.prototype.hasType = function (type) {
        return type in this.config;
    };
    Schema.prototype.getTypes = function () {
        return Object.keys(this.config);
    };
    Schema.prototype.getConfig = function (type) {
        if (this.hasType(type)) {
            return this.config[type];
        }
        else {
            this.onNoSchemaFound(type);
        }
    };
    Schema.prototype.getTargetItem = function (type, field) {
        var config = this.getConfig(type);
        if (field in config.targets) {
            return config.targets[field];
        }
        else {
            return null;
        }
    };
    Schema.prototype.getTargetConfig = function (type, field) {
        var config = this.getConfig(type);
        if (field in config.targets) {
            return this.getConfig(config.targets[field].type);
        }
        else {
            this.onNoSchemaFound(type + '.' + field);
        }
    };
    Schema.prototype.toString = function () {
        return JSON.stringify(this.config);
    };
    Schema.prototype.initDefaults = function () {
        if (Schema.TYPE_DEFAULTS in this.userConfig) {
            if (typeof this.userConfig._defaults !== 'object') {
                throw new Error('Defaults must be an instance of `IStoreConfig`');
            }
            this.userConfig._defaults.autoKey = this.userConfig._defaults.autoKey === true;
            if (!('targets' in this.userConfig._defaults)) {
                this.userConfig._defaults.targets = {};
            }
        }
        else {
            this.userConfig._defaults = {
                autoKey: false,
                targets: {}
            };
        }
    };
    Schema.prototype.expandSchemaForType = function (type) {
        if (type in this.userConfig && this.userConfig[type] !== false) {
            var typeSchema = this.userConfig[type];
            if (type === Schema.TYPE_DEFAULTS) {
                var defaults = this.userConfig[Schema.TYPE_DEFAULTS];
                if (defaults.targets) {
                    defaults.targets = this.expandTargets(defaults.targets);
                }
                return deep_clone_1.deepClone(defaults);
            }
            else if (typeSchema === true) {
                return Object.assign(this.expandSchemaForType(Schema.TYPE_DEFAULTS), { type: type });
            }
            else if (typeof typeSchema === 'string') {
                return Object.assign(deep_clone_1.deepClone(this.expandSchemaForType(typeSchema)), { type: type });
            }
            else if (typeof typeSchema === 'object') {
                var parentSchema = this.expandSchemaForType(typeSchema.parent || Schema.TYPE_DEFAULTS);
                return this.mergeConfigs(type, typeSchema, parentSchema);
            }
            else {
                throw new Error('Schema for type \'' + type + '\' is invalid');
            }
        }
        else {
            this.onNoSchemaFound(type);
        }
    };
    Schema.prototype.mergeConfigs = function (type, typeConfig, parent) {
        var targets = Object.assign(parent.targets, typeConfig.targets);
        var autoKey = object_1.isNull(typeConfig.autoKey || null) ? parent.autoKey : typeConfig.autoKey;
        var result = {
            type: type,
            key: typeConfig.key || parent.key,
            autoKey: autoKey || false,
            targets: this.expandTargets(targets)
        };
        var lastModified = typeConfig.lastModified || parent.lastModified;
        if (lastModified) {
            result.lastModified = lastModified;
        }
        return result;
    };
    Schema.prototype.expandTargets = function (targetConfig) {
        var result = {};
        Object.keys(targetConfig).forEach(function (field) {
            var item = targetConfig[field];
            result[field] = typeof item === 'string'
                ? { type: item }
                : item;
        });
        return result;
    };
    Schema.prototype.onNoSchemaFound = function (type) {
        throw new Error('No config found for type \'' + type + '\'');
    };
    Schema.TYPE_DEFAULTS = '_defaults';
    return Schema;
}());
exports.Schema = Schema;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(0);
var StoreBuilder = (function () {
    function StoreBuilder(parent, key, lastModified, autoKey, targets) {
        this.parent = parent;
        this.key = key;
        this.lastModified = lastModified;
        this.autoKey = autoKey;
        this.targets = targets;
    }
    StoreBuilder.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    StoreBuilder.prototype.setLastModified = function (lastModified) {
        this.lastModified = lastModified;
        return this;
    };
    StoreBuilder.prototype.setAutoKey = function (autoKey) {
        this.autoKey = autoKey;
        return this;
    };
    StoreBuilder.prototype.setParent = function (parent) {
        this.parent = parent;
        return this;
    };
    StoreBuilder.prototype.hasTarget = function (field) {
        return field in this.targets;
    };
    StoreBuilder.prototype.setTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        var config = { type: type };
        if (cascadeRemoval) {
            config.cascadeRemoval = true;
        }
        if (this.targets) {
            this.targets[field] = config;
        }
        else {
            this.targets = (_a = {}, _a[field] = config, _a);
        }
        return this;
        var _a;
    };
    StoreBuilder.prototype.setArrayTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.setTarget(field, type, cascadeRemoval);
        this.targets[field].isArray = true;
        return this;
    };
    StoreBuilder.prototype.removeTarget = function (field) {
        if (this.hasTarget(field)) {
            delete this.targets[field];
        }
        return this;
    };
    Object.defineProperty(StoreBuilder.prototype, "build", {
        get: function () {
            if (this.hasConfiguration) {
                var result = {};
                if (this.key) {
                    result.key = this.key;
                }
                if (!object_1.isNull(this.autoKey)) {
                    result.autoKey = this.autoKey;
                }
                if (this.parent) {
                    result.parent = this.parent;
                }
                if (this.targets) {
                    result.targets = this.targets;
                }
                return result;
            }
            else if (this.parent) {
                return this.parent;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreBuilder.prototype, "hasConfiguration", {
        get: function () {
            return !object_1.isNull(this.key) || !object_1.isNull(this.autoKey) || this.hasTargets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreBuilder.prototype, "hasTargets", {
        get: function () {
            return !object_1.isNull(this.targets) && Object.keys(this.targets).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    return StoreBuilder;
}());
exports.StoreBuilder = StoreBuilder;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(8));
__export(__webpack_require__(11));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(1);
exports.deepClone = deep_clone_1.deepClone;
var object_1 = __webpack_require__(0);
exports.isNull = object_1.isNull;
exports.isObject = object_1.isObject;
var queue_1 = __webpack_require__(7);
exports.Queue = queue_1.Queue;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = (function () {
    function Queue(data) {
        if (data === void 0) { data = []; }
        this.data = data;
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "isEmpty", {
        get: function () {
            return this.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    Queue.prototype.clear = function () {
        this.data.splice(0, this.length);
    };
    return Queue;
}());
exports.Queue = Queue;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var depth_1 = __webpack_require__(9);
exports.Depth = depth_1.Depth;
var parent_1 = __webpack_require__(10);
exports.Parent = parent_1.Parent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Depth = (function () {
    function Depth() {
    }
    return Depth;
}());
exports.Depth = Depth;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parent = (function () {
    function Parent(key, type) {
        this.key = key;
        this.type = type;
    }
    Object.defineProperty(Parent.prototype, "isValid", {
        get: function () {
            return this.key !== null;
        },
        enumerable: true,
        configurable: true
    });
    return Parent;
}());
exports.Parent = Parent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(2);
exports.Schema = schema_1.Schema;
__export(__webpack_require__(12));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_builder_1 = __webpack_require__(13);
exports.SchemaBuilder = schema_builder_1.SchemaBuilder;
var store_builder_1 = __webpack_require__(3);
exports.StoreBuilder = store_builder_1.StoreBuilder;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(2);
var store_builder_1 = __webpack_require__(3);
var SchemaBuilder = (function () {
    function SchemaBuilder() {
        this.defaultStore = new store_builder_1.StoreBuilder();
        this.schema = (_a = {}, _a[schema_1.Schema.TYPE_DEFAULTS] = this.defaultStore, _a);
        var _a;
    }
    Object.defineProperty(SchemaBuilder.prototype, "getDefaultStore", {
        get: function () {
            return this.defaultStore;
        },
        enumerable: true,
        configurable: true
    });
    SchemaBuilder.prototype.setDefaultKey = function (key) {
        this.defaultStore.setKey(key);
        return this;
    };
    SchemaBuilder.prototype.setDefaultLastModified = function (lastModified) {
        this.defaultStore.setLastModified(lastModified);
        return this;
    };
    SchemaBuilder.prototype.setDefaultAutoKey = function (autoKey) {
        this.defaultStore.setAutoKey(autoKey);
        return this;
    };
    SchemaBuilder.prototype.setDefaultTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.defaultStore.setTarget(field, type, cascadeRemoval);
        return this;
    };
    SchemaBuilder.prototype.setDefaultArrayTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.defaultStore.setArrayTarget(field, type, cascadeRemoval);
        return this;
    };
    SchemaBuilder.prototype.hasStore = function (type) {
        return type in this.schema;
    };
    SchemaBuilder.prototype.getStore = function (type) {
        if (this.hasStore(type)) {
            return this.schema[type];
        }
        else {
            throw new Error('No prefix \'' + type + '\' is defined');
        }
    };
    SchemaBuilder.prototype.setStore = function (type, parent) {
        if (parent === void 0) { parent = null; }
        var storeBuilder = new store_builder_1.StoreBuilder(parent);
        this.schema[type] = storeBuilder;
        return storeBuilder;
    };
    SchemaBuilder.prototype.setAbstractStore = function (type, parent) {
        if (parent === void 0) { parent = null; }
        return this.setStore('_' + type, parent);
    };
    SchemaBuilder.prototype.getAbstractStore = function (type) {
        return this.getStore('_' + type);
    };
    SchemaBuilder.prototype.removeStore = function (type) {
        if (this.hasStore(type)) {
            delete this.schema[type];
        }
        return this;
    };
    Object.defineProperty(SchemaBuilder.prototype, "build", {
        get: function () {
            var _this = this;
            return Object.keys(this.schema)
                .filter(function (type) { return _this.schema[type] instanceof store_builder_1.StoreBuilder; })
                .reduce(function (result, type) {
                result[type] = _this.schema[type].build;
                return result;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    return SchemaBuilder;
}());
exports.SchemaBuilder = SchemaBuilder;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataStore = (function () {
    function DataStore(schema, implementation, useReverseReferences) {
        if (useReverseReferences === void 0) { useReverseReferences = false; }
        this.schema = schema;
        this.implementation = implementation;
        this.useReverseReferences = useReverseReferences;
    }
    DataStore.prototype.getTypes = function () {
        return Promise.resolve(this.schema.getTypes());
    };
    DataStore.prototype.getData = function () {
        return this.implementation.getData();
    };
    DataStore.prototype.getHistory = function (type, range) {
        return this.implementation.getHistory(type, range);
    };
    DataStore.prototype.clearHistory = function (type, range) {
        return this.implementation.clearHistory(type, range);
    };
    DataStore.prototype.count = function (type) {
        return this.implementation.count(type);
    };
    DataStore.prototype.isEmpty = function (type) {
        return this.implementation.isEmpty(type);
    };
    DataStore.prototype.getKeys = function (type, range) {
        return this.implementation.getKeys(type, range);
    };
    DataStore.prototype.getInvertedKeys = function (excludedKeys, type, range) {
        return this.implementation.getInvertedKeys(excludedKeys, type, range);
    };
    DataStore.prototype.hasKey = function (key, type) {
        return this.implementation.hasKey(key, type);
    };
    DataStore.prototype.getAll = function (type, depth, range) {
        return this.implementation.getAll(type, depth, range);
    };
    DataStore.prototype.getAllInverted = function (excludedKeys, type, depth, range) {
        return this.implementation.getAllInverted(excludedKeys, type, depth, range);
    };
    DataStore.prototype.getAllByKeys = function (keys, type, depth, range) {
        return this.implementation.getAllByKeys(keys, type, depth, range);
    };
    DataStore.prototype.getByKey = function (key, type, depth) {
        return this.implementation.getByKey(key, type, depth);
    };
    DataStore.prototype.getLatestKey = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.implementation.getLatestKey(type)];
            });
        });
    };
    DataStore.prototype.getOrDefault = function (key, type, defaultResult, depth) {
        if (defaultResult === void 0) { defaultResult = null; }
        return this.implementation.getOrDefault(key, type, defaultResult, depth);
    };
    DataStore.prototype.put = function (data, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.implementation.put(data, type)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    DataStore.prototype.remove = function (keys, type) {
        return this.implementation.remove(keys, type);
    };
    DataStore.prototype.getNested = function (key, type, field, depth) {
        return this.implementation.getNested(key, type, field, depth);
    };
    DataStore.prototype.getAllNested = function (key, type, field, depth, range) {
        return this.implementation.getAllNested(key, type, field, depth, range);
    };
    DataStore.prototype.getNestedFromArray = function (key, type, field, fieldKey, depth) {
        return this.implementation.getNestedFromArray(key, type, field, fieldKey, depth);
    };
    DataStore.prototype.getNestedInverted = function (key, type, field, depth, range) {
        return this.implementation.getNestedInverted(key, type, field, depth, range);
    };
    DataStore.prototype.addNested = function (key, type, item, field) {
        return this.implementation.addNested(key, type, item, field);
    };
    DataStore.prototype.removeNested = function (key, type, nestedItem, field) {
        return this.implementation.removeNested(key, type, nestedItem, field);
    };
    DataStore.prototype.getReverse = function (key, type, parentType, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var item, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.useReverseReferences) return [3, 5];
                        this.validateType(type);
                        return [4, this.getByKey(key, type, 0)];
                    case 1:
                        item = _b.sent();
                        if (!('_refs' in item && parentType in item._refs)) return [3, 3];
                        return [4, this.getAllByKeys(Array.from(item._refs[parentType]), parentType, depth, range)];
                    case 2:
                        _a = _b.sent();
                        return [3, 4];
                    case 3:
                        _a = [];
                        _b.label = 4;
                    case 4: return [2, _a];
                    case 5: throw new Error('This data prefix was not created with `useReverseReferences` set to `true` hence reverse ' +
                        'relations cannot be resolved');
                }
            });
        });
    };
    DataStore.prototype.getFirstReverse = function (key, type, parentType, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var item, it_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.useReverseReferences) return [3, 4];
                        this.validateType(type);
                        return [4, this.getByKey(key, type, 0)];
                    case 1:
                        item = _a.sent();
                        if (!('_refs' in item && parentType in item._refs)) return [3, 3];
                        it_1 = item._refs[parentType].values().next();
                        if (!!it_1.done) return [3, 3];
                        return [4, this.getByKey(it_1.value, parentType, depth)];
                    case 2: return [2, _a.sent()];
                    case 3: return [2, null];
                    case 4: throw new Error('This data prefix was not created with `useReverseReferences` set to `true` hence reverse ' +
                        'relations cannot be resolved');
                }
            });
        });
    };
    DataStore.prototype.clear = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!type) return [3, 2];
                        return [4, this.clearType(type)];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, Promise.all(this.schema.getTypes().map(function (t) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, this.clearType(t)];
                                case 1: return [2, _a.sent()];
                            }
                        }); }); }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    DataStore.prototype.clearType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.implementation.clear(type)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    DataStore.prototype.validateType = function (type) {
        if (!this.schema.hasType(type)) {
            throw new Error('Type \'' + type + '\' is not defined');
        }
    };
    return DataStore;
}());
exports.DataStore = DataStore;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(22);
var isObject_1 = __webpack_require__(23);
var isFunction_1 = __webpack_require__(7);
var tryCatch_1 = __webpack_require__(24);
var errorObject_1 = __webpack_require__(8);
var UnsubscriptionError_1 = __webpack_require__(25);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(2);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(18);
var data_store_1 = __webpack_require__(1);
var ObservedDataStore = (function (_super) {
    __extends(ObservedDataStore, _super);
    function ObservedDataStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPut = new Subject_1.Subject();
        _this.onRemoved = new Subject_1.Subject();
        _this.onCleared = new Subject_1.Subject();
        _this.onChanged = new Subject_1.Subject();
        return _this;
    }
    ObservedDataStore.prototype.put = function (data, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _super.prototype.put.call(this, data, type)];
                    case 1:
                        _a.sent();
                        this.notify('put', type, Array.isArray(data) ? data : [data]);
                        return [2];
                }
            });
        });
    };
    ObservedDataStore.prototype.remove = function (keys, type) {
        return __awaiter(this, void 0, void 0, function () {
            var removedKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _super.prototype.remove.call(this, keys, type)];
                    case 1:
                        removedKeys = _a.sent();
                        this.notify('removed', type, removedKeys);
                        return [2, removedKeys];
                }
            });
        });
    };
    ObservedDataStore.prototype.clearType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _super.prototype.clearType.call(this, type)];
                    case 1:
                        _a.sent();
                        this.notify('cleared', type);
                        return [2];
                }
            });
        });
    };
    ObservedDataStore.prototype.notify = function (action, type, data) {
        var observeResult = {
            action: action,
            type: type
        };
        if (data) {
            observeResult.data = data;
        }
        this['on' + action[0].toUpperCase() + action.substr(1)].next(observeResult);
        this.onChanged.next(observeResult);
    };
    return ObservedDataStore;
}(data_store_1.DataStore));
exports.ObservedDataStore = ObservedDataStore;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(7);
var Subscription_1 = __webpack_require__(3);
var Observer_1 = __webpack_require__(9);
var rxSubscriber_1 = __webpack_require__(4);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogHistory = (function () {
    function LogHistory() {
        this.map = new Map();
    }
    LogHistory.prototype.entries = function (key) {
        if (key) {
            return this.map.has(key) ? this.map.get(key) : [];
        }
        else {
            return this.map;
        }
    };
    LogHistory.prototype.add = function (logEntry) {
        if (this.map.has(logEntry.key)) {
            this.map.get(logEntry.key).unshift(logEntry);
        }
        else {
            this.map.set(logEntry.key, [logEntry]);
        }
    };
    return LogHistory;
}());
exports.LogHistory = LogHistory;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var denormalizer_1 = __webpack_require__(12);
var normalizer_1 = __webpack_require__(13);
var InMemoryDb = (function () {
    function InMemoryDb(schema, uniqueKeyCallback) {
        var _this = this;
        this.schema = schema;
        this.uniqueKeyCallback = uniqueKeyCallback;
        this.data = {};
        this.keys = {};
        this.freeIndices = {};
        this.normalizer = this.buildNormalizer().build;
        this.denormalizer = this.buildDenormalizer().build;
        this.schema.getTypes().forEach(function (type) { return _this.freeIndices[type] = new core_1.Queue(); });
    }
    InMemoryDb.prototype.getTypes = function () {
        return Promise.resolve(this.schema.getTypes());
    };
    InMemoryDb.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, core_1.deepClone(this.data)];
            });
        });
    };
    InMemoryDb.prototype.getHistory = function (type, range) {
        throw new Error('This data store does not implement a logging history');
    };
    InMemoryDb.prototype.clearHistory = function (type, range) {
        throw new Error('This data store does not implement a logging history');
    };
    InMemoryDb.prototype.count = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                this.validateType(type);
                keys = this.keys[type];
                return [2, core_1.isNull(keys) ? 0 : this.keys[type].size];
            });
        });
    };
    InMemoryDb.prototype.isEmpty = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var length;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.count(type)];
                    case 1:
                        length = _a.sent();
                        return [2, length === 0];
                }
            });
        });
    };
    InMemoryDb.prototype.getKeys = function (type, range) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                this.validateType(type);
                keys = Array.from(this.keys[type].keys());
                return [2, range ? range.slice(keys) : keys];
            });
        });
    };
    InMemoryDb.prototype.getInvertedKeys = function (excludedKeys, type, range) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                this.validateType(type);
                keys = Array.from(this.keys[type].keys())
                    .filter(function (key) { return excludedKeys.indexOf(key) < 0; });
                return [2, range ? range.slice(keys) : keys];
            });
        });
    };
    InMemoryDb.prototype.hasKey = function (key, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.validateType(type);
                return [2, this.keys[type].has(key)];
            });
        });
    };
    InMemoryDb.prototype.getAll = function (type, depth, range) {
        return this.denormalizer.applyAll(core_1.deepClone(this.data[type]), type, depth);
    };
    InMemoryDb.prototype.getAllInverted = function (excludedKeys, type, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var invertedKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getInvertedKeys(excludedKeys, type, range)];
                    case 1:
                        invertedKeys = _a.sent();
                        return [2, this.getAllByKeys(invertedKeys, type)];
                }
            });
        });
    };
    InMemoryDb.prototype.getAllByKeys = function (keys, type, depth, range) {
        var _this = this;
        this.validateType(type);
        return Promise.all(keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getByKey(key, type, depth)];
                case 1: return [2, _a.sent()];
            }
        }); }); }));
    };
    InMemoryDb.prototype.getByKey = function (key, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        return [4, this.getOrDefault(key, type, null, depth)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            throw new Error('Could not find \'' + type + '\' with key \'' + String(key) + '\'');
                        }
                        return [2, result];
                }
            });
        });
    };
    InMemoryDb.prototype.getLatestKey = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                this.validateType(type);
                if (this.isEmpty(type)) {
                    return [2, null];
                }
                else {
                    config = this.schema.getConfig(type);
                    return [2, this.data[type][this.data[type].length - 1][config.key]];
                }
                return [2];
            });
        });
    };
    InMemoryDb.prototype.getOrDefault = function (key, type, defaultResult, depth) {
        if (defaultResult === void 0) { defaultResult = null; }
        return __awaiter(this, void 0, void 0, function () {
            var typeKeys, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        typeKeys = this.keys[type];
                        if (!(!core_1.isNull(typeKeys) && typeKeys.has(key))) return [3, 4];
                        item = core_1.deepClone(this.data[type][typeKeys.get(key)]);
                        if (!(depth && depth <= 0)) return [3, 1];
                        return [2, item];
                    case 1: return [4, this.denormalizer.apply(item, type, depth)];
                    case 2: return [2, _a.sent()];
                    case 3: return [3, 5];
                    case 4: return [2, defaultResult];
                    case 5: return [2];
                }
            });
        });
    };
    InMemoryDb.prototype.put = function (data, rootType) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var newData;
            return __generator(this, function (_a) {
                newData = this.normalizer.apply(data, rootType);
                Object.keys(newData).forEach(function (type) {
                    var config = _this.schema.getConfig(type);
                    var items = newData[type];
                    if (type in _this.data) {
                        var typeKeys_1 = _this.keys[type];
                        var typeResult_1 = _this.data[type];
                        items.forEach(function (item) {
                            var key = item[config.key];
                            if (typeKeys_1.has(key)) {
                                _this.overrideItem(typeResult_1, typeKeys_1.get(key), item);
                            }
                            else {
                                var typeFreeIndices = _this.freeIndices[type];
                                if (typeFreeIndices && !typeFreeIndices.isEmpty) {
                                    var index = typeFreeIndices.dequeue();
                                    typeKeys_1.set(key, index);
                                    typeResult_1[index] = item;
                                }
                                else {
                                    typeKeys_1.set(key, typeResult_1.length);
                                    typeResult_1.push(item);
                                }
                            }
                        });
                    }
                    else {
                        _this.data[type] = items;
                        _this.keys[type] = new Map(items.map(function (item, index) { return [
                            item[config.key],
                            index
                        ]; }));
                    }
                });
                return [2];
            });
        });
    };
    InMemoryDb.prototype.remove = function (keys, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var config, typeKeys;
            return __generator(this, function (_a) {
                this.validateType(type);
                config = this.schema.getConfig(type);
                typeKeys = this.keys[type];
                if (!Array.isArray(keys)) {
                    keys = [keys];
                }
                return [2, keys.filter(function (key) { return typeKeys.has(key); }).map(function (key) {
                        var index = typeKeys.get(key);
                        if (!core_1.isNull(config.targets)) {
                            var item_1 = _this.data[type][index];
                            var parent_1 = new core_1.Parent(key, type);
                            Object.keys(config.targets)
                                .filter(function (field) { return field in item_1; })
                                .forEach(function (field) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.removeTarget(parent_1, item_1[field], config.targets[field])];
                                    case 1: return [2, _a.sent()];
                                }
                            }); }); });
                        }
                        _this.data[type][index] = {};
                        _this.freeIndices[type].enqueue(index);
                        typeKeys.delete(key);
                        return key;
                    })];
            });
        });
    };
    InMemoryDb.prototype.getNested = function (key, type, field, depth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, null];
            });
        });
    };
    InMemoryDb.prototype.getAllNested = function (key, type, field, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, []];
            });
        });
    };
    InMemoryDb.prototype.getNestedFromArray = function (key, type, field, fieldKey, depth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, null];
            });
        });
    };
    InMemoryDb.prototype.getNestedInverted = function (key, type, field, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, []];
            });
        });
    };
    InMemoryDb.prototype.addNested = function (key, type, item, field) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, false];
            });
        });
    };
    InMemoryDb.prototype.removeNested = function (key, type, nestedItem, field) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, null];
            });
        });
    };
    InMemoryDb.prototype.clear = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!type) return [3, 2];
                        return [4, this.clearType(type)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        this.schema.getTypes().forEach(function (t) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, this.clearType(t)];
                                case 1: return [2, _a.sent()];
                            }
                        }); }); });
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    InMemoryDb.prototype.overrideItem = function (typeResult, index, item) {
        typeResult[index] = item;
    };
    InMemoryDb.prototype.removeTarget = function (parent, key, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(target.cascadeRemoval === true)) return [3, 2];
                        return [4, this.remove(key, target.type)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    InMemoryDb.prototype.clearType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.validateType(type);
                if (this.keys[type]) {
                    this.keys[type].clear();
                }
                if (this.data[type]) {
                    this.data[type] = [];
                }
                this.freeIndices[type].clear();
                return [2];
            });
        });
    };
    InMemoryDb.prototype.buildNormalizer = function () {
        return new normalizer_1.NormalizerBuilder()
            .withSchema(this.schema)
            .withUniqueKeyCallback(this.uniqueKeyCallback);
    };
    InMemoryDb.prototype.buildDenormalizer = function () {
        return new denormalizer_1.DenormalizerBuilder()
            .withSchema(this.schema)
            .withNormalizedData(this.data)
            .withKeys(this.keys);
    };
    InMemoryDb.prototype.validateType = function (type) {
        if (!this.schema.hasType(type)) {
            throw new Error('Type \'' + type + '\' is not defined');
        }
    };
    return InMemoryDb;
}());
exports.InMemoryDb = InMemoryDb;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("normalized-db", [], factory);
	else if(typeof exports === 'object')
		exports["normalized-db"] = factory();
	else
		root["normalized-db"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("normalized-db", [], factory);
	else if(typeof exports === 'object')
		exports["normalized-db"] = factory();
	else
		root["normalized-db"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isNull(object) {
    return typeof object === 'undefined' || object === null;
}
exports.isNull = isNull;
function isObject(object) {
    return !isNull(object) && typeof object === 'object';
}
exports.isObject = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deepClone(object) {
    var ctor = object ? object.constructor : null;
    if (object === null || typeof object !== 'object' || ctor === ArrayBuffer || ctor === Blob || ctor === File) {
        return object;
    }
    if (ctor === Date || ctor === RegExp || ctor === Function || ctor === JSON ||
        ctor === String || ctor === Number || ctor === Boolean ||
        ctor === Set || ctor === Map || ctor === WeakMap || ctor === WeakSet) {
        return new ctor(object);
    }
    var result = new ctor();
    Object.keys(object)
        .forEach(function (key) { return result[key] = deepClone(object[key]); });
    return result;
}
exports.deepClone = deepClone;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(1);
var object_1 = __webpack_require__(0);
var Schema = (function () {
    function Schema(userConfig) {
        var _this = this;
        this.config = {};
        this.userConfig = deep_clone_1.deepClone(userConfig);
        this.initDefaults();
        var keys = Object.keys(this.userConfig);
        keys.filter(function (type) { return !type.startsWith('_'); })
            .forEach(function (type) { return _this.config[type] = _this.expandSchemaForType(type); });
    }
    Schema.prototype.hasType = function (type) {
        return type in this.config;
    };
    Schema.prototype.getTypes = function () {
        return Object.keys(this.config);
    };
    Schema.prototype.getConfig = function (type) {
        if (this.hasType(type)) {
            return this.config[type];
        }
        else {
            this.onNoSchemaFound(type);
        }
    };
    Schema.prototype.getTargetItem = function (type, field) {
        var config = this.getConfig(type);
        if (field in config.targets) {
            return config.targets[field];
        }
        else {
            return null;
        }
    };
    Schema.prototype.getTargetConfig = function (type, field) {
        var config = this.getConfig(type);
        if (field in config.targets) {
            return this.getConfig(config.targets[field].type);
        }
        else {
            this.onNoSchemaFound(type + '.' + field);
        }
    };
    Schema.prototype.toString = function () {
        return JSON.stringify(this.config);
    };
    Schema.prototype.initDefaults = function () {
        if (Schema.TYPE_DEFAULTS in this.userConfig) {
            if (typeof this.userConfig._defaults !== 'object') {
                throw new Error('Defaults must be an instance of `IStoreConfig`');
            }
            this.userConfig._defaults.autoKey = this.userConfig._defaults.autoKey === true;
            if (!('targets' in this.userConfig._defaults)) {
                this.userConfig._defaults.targets = {};
            }
        }
        else {
            this.userConfig._defaults = {
                autoKey: false,
                targets: {}
            };
        }
    };
    Schema.prototype.expandSchemaForType = function (type) {
        if (type in this.userConfig && this.userConfig[type] !== false) {
            var typeSchema = this.userConfig[type];
            if (type === Schema.TYPE_DEFAULTS) {
                var defaults = this.userConfig[Schema.TYPE_DEFAULTS];
                if (defaults.targets) {
                    defaults.targets = this.expandTargets(defaults.targets);
                }
                return deep_clone_1.deepClone(defaults);
            }
            else if (typeSchema === true) {
                return Object.assign(this.expandSchemaForType(Schema.TYPE_DEFAULTS), { type: type });
            }
            else if (typeof typeSchema === 'string') {
                return Object.assign(deep_clone_1.deepClone(this.expandSchemaForType(typeSchema)), { type: type });
            }
            else if (typeof typeSchema === 'object') {
                var parentSchema = this.expandSchemaForType(typeSchema.parent || Schema.TYPE_DEFAULTS);
                return this.mergeConfigs(type, typeSchema, parentSchema);
            }
            else {
                throw new Error('Schema for type \'' + type + '\' is invalid');
            }
        }
        else {
            this.onNoSchemaFound(type);
        }
    };
    Schema.prototype.mergeConfigs = function (type, typeConfig, parent) {
        var targets = Object.assign(parent.targets, typeConfig.targets);
        var autoKey = object_1.isNull(typeConfig.autoKey || null) ? parent.autoKey : typeConfig.autoKey;
        var result = {
            type: type,
            key: typeConfig.key || parent.key,
            autoKey: autoKey || false,
            targets: this.expandTargets(targets)
        };
        var lastModified = typeConfig.lastModified || parent.lastModified;
        if (lastModified) {
            result.lastModified = lastModified;
        }
        return result;
    };
    Schema.prototype.expandTargets = function (targetConfig) {
        var result = {};
        Object.keys(targetConfig).forEach(function (field) {
            var item = targetConfig[field];
            result[field] = typeof item === 'string'
                ? { type: item }
                : item;
        });
        return result;
    };
    Schema.prototype.onNoSchemaFound = function (type) {
        throw new Error('No config found for type \'' + type + '\'');
    };
    Schema.TYPE_DEFAULTS = '_defaults';
    return Schema;
}());
exports.Schema = Schema;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(0);
var StoreBuilder = (function () {
    function StoreBuilder(parent, key, lastModified, autoKey, targets) {
        this.parent = parent;
        this.key = key;
        this.lastModified = lastModified;
        this.autoKey = autoKey;
        this.targets = targets;
    }
    StoreBuilder.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    StoreBuilder.prototype.setLastModified = function (lastModified) {
        this.lastModified = lastModified;
        return this;
    };
    StoreBuilder.prototype.setAutoKey = function (autoKey) {
        this.autoKey = autoKey;
        return this;
    };
    StoreBuilder.prototype.setParent = function (parent) {
        this.parent = parent;
        return this;
    };
    StoreBuilder.prototype.hasTarget = function (field) {
        return field in this.targets;
    };
    StoreBuilder.prototype.setTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        var config = { type: type };
        if (cascadeRemoval) {
            config.cascadeRemoval = true;
        }
        if (this.targets) {
            this.targets[field] = config;
        }
        else {
            this.targets = (_a = {}, _a[field] = config, _a);
        }
        return this;
        var _a;
    };
    StoreBuilder.prototype.setArrayTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.setTarget(field, type, cascadeRemoval);
        this.targets[field].isArray = true;
        return this;
    };
    StoreBuilder.prototype.removeTarget = function (field) {
        if (this.hasTarget(field)) {
            delete this.targets[field];
        }
        return this;
    };
    Object.defineProperty(StoreBuilder.prototype, "build", {
        get: function () {
            if (this.hasConfiguration) {
                var result = {};
                if (this.key) {
                    result.key = this.key;
                }
                if (!object_1.isNull(this.autoKey)) {
                    result.autoKey = this.autoKey;
                }
                if (this.parent) {
                    result.parent = this.parent;
                }
                if (this.targets) {
                    result.targets = this.targets;
                }
                return result;
            }
            else if (this.parent) {
                return this.parent;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreBuilder.prototype, "hasConfiguration", {
        get: function () {
            return !object_1.isNull(this.key) || !object_1.isNull(this.autoKey) || this.hasTargets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreBuilder.prototype, "hasTargets", {
        get: function () {
            return !object_1.isNull(this.targets) && Object.keys(this.targets).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    return StoreBuilder;
}());
exports.StoreBuilder = StoreBuilder;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(8));
__export(__webpack_require__(11));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(1);
exports.deepClone = deep_clone_1.deepClone;
var object_1 = __webpack_require__(0);
exports.isNull = object_1.isNull;
exports.isObject = object_1.isObject;
var queue_1 = __webpack_require__(7);
exports.Queue = queue_1.Queue;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = (function () {
    function Queue(data) {
        if (data === void 0) { data = []; }
        this.data = data;
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "isEmpty", {
        get: function () {
            return this.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    Queue.prototype.clear = function () {
        this.data.splice(0, this.length);
    };
    return Queue;
}());
exports.Queue = Queue;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var depth_1 = __webpack_require__(9);
exports.Depth = depth_1.Depth;
var parent_1 = __webpack_require__(10);
exports.Parent = parent_1.Parent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Depth = (function () {
    function Depth() {
    }
    return Depth;
}());
exports.Depth = Depth;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parent = (function () {
    function Parent(key, type) {
        this.key = key;
        this.type = type;
    }
    Object.defineProperty(Parent.prototype, "isValid", {
        get: function () {
            return this.key !== null;
        },
        enumerable: true,
        configurable: true
    });
    return Parent;
}());
exports.Parent = Parent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(2);
exports.Schema = schema_1.Schema;
__export(__webpack_require__(12));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_builder_1 = __webpack_require__(13);
exports.SchemaBuilder = schema_builder_1.SchemaBuilder;
var store_builder_1 = __webpack_require__(3);
exports.StoreBuilder = store_builder_1.StoreBuilder;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(2);
var store_builder_1 = __webpack_require__(3);
var SchemaBuilder = (function () {
    function SchemaBuilder() {
        this.defaultStore = new store_builder_1.StoreBuilder();
        this.schema = (_a = {}, _a[schema_1.Schema.TYPE_DEFAULTS] = this.defaultStore, _a);
        var _a;
    }
    Object.defineProperty(SchemaBuilder.prototype, "getDefaultStore", {
        get: function () {
            return this.defaultStore;
        },
        enumerable: true,
        configurable: true
    });
    SchemaBuilder.prototype.setDefaultKey = function (key) {
        this.defaultStore.setKey(key);
        return this;
    };
    SchemaBuilder.prototype.setDefaultLastModified = function (lastModified) {
        this.defaultStore.setLastModified(lastModified);
        return this;
    };
    SchemaBuilder.prototype.setDefaultAutoKey = function (autoKey) {
        this.defaultStore.setAutoKey(autoKey);
        return this;
    };
    SchemaBuilder.prototype.setDefaultTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.defaultStore.setTarget(field, type, cascadeRemoval);
        return this;
    };
    SchemaBuilder.prototype.setDefaultArrayTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.defaultStore.setArrayTarget(field, type, cascadeRemoval);
        return this;
    };
    SchemaBuilder.prototype.hasStore = function (type) {
        return type in this.schema;
    };
    SchemaBuilder.prototype.getStore = function (type) {
        if (this.hasStore(type)) {
            return this.schema[type];
        }
        else {
            throw new Error('No prefix \'' + type + '\' is defined');
        }
    };
    SchemaBuilder.prototype.setStore = function (type, parent) {
        if (parent === void 0) { parent = null; }
        var storeBuilder = new store_builder_1.StoreBuilder(parent);
        this.schema[type] = storeBuilder;
        return storeBuilder;
    };
    SchemaBuilder.prototype.setAbstractStore = function (type, parent) {
        if (parent === void 0) { parent = null; }
        return this.setStore('_' + type, parent);
    };
    SchemaBuilder.prototype.getAbstractStore = function (type) {
        return this.getStore('_' + type);
    };
    SchemaBuilder.prototype.removeStore = function (type) {
        if (this.hasStore(type)) {
            delete this.schema[type];
        }
        return this;
    };
    Object.defineProperty(SchemaBuilder.prototype, "build", {
        get: function () {
            var _this = this;
            return Object.keys(this.schema)
                .filter(function (type) { return _this.schema[type] instanceof store_builder_1.StoreBuilder; })
                .reduce(function (result, type) {
                result[type] = _this.schema[type].build;
                return result;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    return SchemaBuilder;
}());
exports.SchemaBuilder = SchemaBuilder;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BasicDenormalizer = (function () {
    function BasicDenormalizer(schema, normalizedData, keys, fetchCallback) {
        var _this = this;
        this.schema = schema;
        this.normalizedData = normalizedData;
        this.keys = keys;
        this.fetchCallback = fetchCallback;
        if (core_1.isNull(this.keys)) {
            this.keys = {};
            this.schema.getTypes().forEach(function (type) {
                if (type in _this.normalizedData) {
                    var config_1 = _this.schema.getConfig(type);
                    _this.keys[type] = new Map(_this.normalizedData[type].map(function (item, index) { return [item[config_1.key], index]; }));
                }
                else {
                    _this.keys[type] = new Map();
                }
            });
        }
    }
    BasicDenormalizer.prototype.applyAll = function (data, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        return [4, this.denormalizeArray(data, type, depth)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    BasicDenormalizer.prototype.applyAllKeys = function (keys, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        return [4, Promise.all(keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.applyKey(key, type, depth)];
                                    case 1: return [2, _a.sent()];
                                }
                            }); }); }))];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    BasicDenormalizer.prototype.apply = function (data, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        if (!core_1.isObject(data)) return [3, 2];
                        return [4, this.denormalizeObject(data, type, depth)];
                    case 1: return [2, _a.sent()];
                    case 2: return [2, data];
                }
            });
        });
    };
    BasicDenormalizer.prototype.applyKey = function (key, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchedData, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        if (!!this.keys[type].has(key)) return [3, 6];
                        if (!this.fetchCallback) return [3, 5];
                        return [4, this.fetchCallback(key, type)];
                    case 1:
                        fetchedData = _a.sent();
                        if (!fetchedData) return [3, 3];
                        if (type in this.normalizedData) {
                            this.keys[type].set(key, this.normalizedData[type].length);
                            this.normalizedData[type].push(fetchedData);
                        }
                        else {
                            this.keys[type].set(key, 0);
                            this.normalizedData[type] = [fetchedData];
                        }
                        return [4, this.apply(core_1.deepClone(fetchedData), type, depth)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        this.notFound(type, key);
                        _a.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        this.notFound(type, key);
                        _a.label = 6;
                    case 6:
                        data = this.normalizedData[type][this.keys[type].get(key)];
                        return [4, this.apply(core_1.deepClone(data), type, depth)];
                    case 7: return [2, _a.sent()];
                }
            });
        });
    };
    BasicDenormalizer.prototype.denormalizeArray = function (data, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Promise.all(data.map(function (item) { return _this.denormalizeObject(item, type, depth); }))];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    BasicDenormalizer.prototype.denormalizeObject = function (data, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = this.schema.getConfig(type);
                        if (!!core_1.isNull(config.targets)) return [3, 2];
                        return [4, this.denormalizeTargets(data, type, config, depth)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, data];
                }
            });
        });
    };
    BasicDenormalizer.prototype.denormalizeTargets = function (data, type, config, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = Object.keys(config.targets)
                            .filter(function (field) { return field in data; })
                            .map(function (field) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, done, nextDepth, _b, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        _a = this.validateDepth(depth, field), done = _a.done, nextDepth = _a.nextDepth;
                                        if (!!done) return [3, 2];
                                        _b = data;
                                        _c = field;
                                        return [4, this.denormalizeTarget(data[field], config.targets[field], type, nextDepth)];
                                    case 1:
                                        _b[_c] = _d.sent();
                                        _d.label = 2;
                                    case 2: return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    BasicDenormalizer.prototype.denormalizeTarget = function (keys, target, parent, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isArray, targetType, resultPromises, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isArray = Array.isArray(keys);
                        this.validateArrayType(target, parent, isArray);
                        if (!isArray) {
                            keys = [keys];
                        }
                        targetType = target.type;
                        resultPromises = keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var targetConfig, typeKeys, data, targetObject;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        targetConfig = this.schema.getConfig(targetType);
                                        if (core_1.isObject(key) && targetConfig.key in key) {
                                            return [2, key];
                                        }
                                        typeKeys = this.keys[targetType];
                                        if (!(!typeKeys.has(key) && this.fetchCallback)) return [3, 3];
                                        return [4, this.fetchCallback(key, targetType)];
                                    case 1:
                                        data = _a.sent();
                                        if (!data) return [3, 3];
                                        if (targetType in this.normalizedData) {
                                            typeKeys.set(key, this.normalizedData[targetType].length);
                                            this.normalizedData[targetType].push(data);
                                        }
                                        else {
                                            typeKeys.set(key, 0);
                                            this.normalizedData[targetType] = [data];
                                        }
                                        return [4, this.apply(core_1.deepClone(data), targetType, depth)];
                                    case 2: return [2, _a.sent()];
                                    case 3:
                                        if (!typeKeys.has(key)) return [3, 5];
                                        targetObject = this.normalizedData[targetType][typeKeys.get(key)];
                                        return [4, this.applyTarget(core_1.deepClone(targetObject), targetType, depth)];
                                    case 4: return [2, _a.sent()];
                                    case 5: return [2, key];
                                }
                            });
                        }); });
                        return [4, Promise.all(resultPromises)];
                    case 1:
                        result = _a.sent();
                        return [2, isArray ? result : result[0]];
                }
            });
        });
    };
    BasicDenormalizer.prototype.applyTarget = function (data, type, depth) {
        return this.apply(data, type, depth);
    };
    BasicDenormalizer.prototype.validateDepth = function (depth, field) {
        if (core_1.isNull(depth)) {
            return { done: false, nextDepth: null };
        }
        else if (typeof depth === 'number') {
            return { done: depth <= 0, nextDepth: depth - 1 };
        }
        else {
            if (field in depth) {
                var typeDepth = depth[field];
                if (core_1.isNull(typeDepth)) {
                    return { done: false, nextDepth: null };
                }
                else if (typeof typeDepth === 'number') {
                    return { done: typeDepth < 0, nextDepth: typeDepth - 1 };
                }
                else {
                    return { done: false, nextDepth: typeDepth };
                }
            }
            else {
                return { done: true, nextDepth: depth };
            }
        }
    };
    BasicDenormalizer.prototype.validateArrayType = function (target, parent, isArray) {
        if (target.isArray) {
            if (!isArray) {
                throw new Error('\'' + parent + '\' is expected to have an array of \'' + target.type + '\' but got object');
            }
        }
        else if (isArray) {
            throw new Error('\'' + parent + '\' is expected to have an object of \'' + target.type + '\' but got array');
        }
    };
    BasicDenormalizer.prototype.validateType = function (type) {
        if (!this.schema.hasType(type)) {
            throw new Error('Type \'' + type + '\' is not defined');
        }
    };
    BasicDenormalizer.prototype.notFound = function (type, key) {
        throw new Error('Could not find \'' + type + '\' with key \'' + String(key) + '\'');
    };
    return BasicDenormalizer;
}());
exports.BasicDenormalizer = BasicDenormalizer;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var basic_denormalizer_1 = __webpack_require__(1);
var reverse_reference_denormalizer_1 = __webpack_require__(3);
var Denormalizer = (function () {
    function Denormalizer(schema, normalizedData, keys, deleteReverseRefs, fetchCallback) {
        if (deleteReverseRefs === void 0) { deleteReverseRefs = false; }
        this.schema = schema;
        this.normalizedData = normalizedData;
        this.keys = keys;
        this.deleteReverseRefs = deleteReverseRefs;
        this.fetchCallback = fetchCallback;
        if (core_1.isNull(schema)) {
            throw new Error('Cannot create a normalizer without a schema');
        }
        if (core_1.isNull(normalizedData)) {
            throw new Error('Cannot create a normalizer without normalized data');
        }
        this.implementation = this.buildDenormalizer();
    }
    Denormalizer.prototype.applyAll = function (data, type, depth) {
        return this.implementation.applyAll(data, type, depth);
    };
    Denormalizer.prototype.applyAllKeys = function (keys, type, depth) {
        return this.implementation.applyAllKeys(keys, type, depth);
    };
    Denormalizer.prototype.apply = function (data, type, depth) {
        return this.implementation.apply(data, type, depth);
    };
    Denormalizer.prototype.applyKey = function (key, type, depth) {
        return this.implementation.applyKey(key, type, depth);
    };
    Denormalizer.prototype.buildDenormalizer = function () {
        return this.deleteReverseRefs
            ? new reverse_reference_denormalizer_1.ReverseReferenceDenormalizer(this.schema, this.normalizedData, this.keys, this.fetchCallback)
            : new basic_denormalizer_1.BasicDenormalizer(this.schema, this.normalizedData, this.keys, this.fetchCallback);
    };
    return Denormalizer;
}());
exports.Denormalizer = Denormalizer;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_denormalizer_1 = __webpack_require__(1);
var ReverseReferenceDenormalizer = (function (_super) {
    __extends(ReverseReferenceDenormalizer, _super);
    function ReverseReferenceDenormalizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReverseReferenceDenormalizer.prototype.applyTarget = function (data, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var denormalizedTarget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _super.prototype.applyTarget.call(this, data, type, depth)];
                    case 1:
                        denormalizedTarget = _a.sent();
                        if ('_refs' in denormalizedTarget) {
                            delete denormalizedTarget['_refs'];
                        }
                        return [2, denormalizedTarget];
                }
            });
        });
    };
    return ReverseReferenceDenormalizer;
}(basic_denormalizer_1.BasicDenormalizer));
exports.ReverseReferenceDenormalizer = ReverseReferenceDenormalizer;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var denormalizer_1 = __webpack_require__(2);
exports.Denormalizer = denormalizer_1.Denormalizer;
var denormalizer_builder_1 = __webpack_require__(6);
exports.DenormalizerBuilder = denormalizer_builder_1.DenormalizerBuilder;
__export(__webpack_require__(7));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var denormalizer_1 = __webpack_require__(2);
var DenormalizerBuilder = (function () {
    function DenormalizerBuilder() {
        this.normalizedData = {};
    }
    DenormalizerBuilder.prototype.withSchema = function (schema) {
        this.schema = schema;
        return this;
    };
    DenormalizerBuilder.prototype.withSchemaConfig = function (schemaConfig) {
        this.schema = new core_1.Schema(schemaConfig);
        return this;
    };
    DenormalizerBuilder.prototype.withNormalizedData = function (data) {
        this.normalizedData = data;
        return this;
    };
    DenormalizerBuilder.prototype.withKeys = function (keys) {
        this.keys = keys;
        return this;
    };
    DenormalizerBuilder.prototype.withReverseRefsDeleted = function (deleteReverseRefs) {
        this.deleteReverseRefs = deleteReverseRefs;
        return this;
    };
    DenormalizerBuilder.prototype.withFetchCallback = function (fetchCallback) {
        this.fetchCallback = fetchCallback;
        return this;
    };
    Object.defineProperty(DenormalizerBuilder.prototype, "build", {
        get: function () {
            return new denormalizer_1.Denormalizer(this.schema, this.normalizedData, this.keys, this.deleteReverseRefs, this.fetchCallback);
        },
        enumerable: true,
        configurable: true
    });
    return DenormalizerBuilder;
}());
exports.DenormalizerBuilder = DenormalizerBuilder;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var basic_denormalizer_1 = __webpack_require__(1);
exports.BasicDenormalizer = basic_denormalizer_1.BasicDenormalizer;
var reverse_reference_denormalizer_1 = __webpack_require__(3);
exports.ReverseReferenceDenormalizer = reverse_reference_denormalizer_1.ReverseReferenceDenormalizer;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("normalized-db", [], factory);
	else if(typeof exports === 'object')
		exports["normalized-db"] = factory();
	else
		root["normalized-db"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("normalized-db", [], factory);
	else if(typeof exports === 'object')
		exports["normalized-db"] = factory();
	else
		root["normalized-db"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isNull(object) {
    return typeof object === 'undefined' || object === null;
}
exports.isNull = isNull;
function isObject(object) {
    return !isNull(object) && typeof object === 'object';
}
exports.isObject = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deepClone(object) {
    var ctor = object ? object.constructor : null;
    if (object === null || typeof object !== 'object' || ctor === ArrayBuffer || ctor === Blob || ctor === File) {
        return object;
    }
    if (ctor === Date || ctor === RegExp || ctor === Function || ctor === JSON ||
        ctor === String || ctor === Number || ctor === Boolean ||
        ctor === Set || ctor === Map || ctor === WeakMap || ctor === WeakSet) {
        return new ctor(object);
    }
    var result = new ctor();
    Object.keys(object)
        .forEach(function (key) { return result[key] = deepClone(object[key]); });
    return result;
}
exports.deepClone = deepClone;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(1);
var object_1 = __webpack_require__(0);
var Schema = (function () {
    function Schema(userConfig) {
        var _this = this;
        this.config = {};
        this.userConfig = deep_clone_1.deepClone(userConfig);
        this.initDefaults();
        var keys = Object.keys(this.userConfig);
        keys.filter(function (type) { return !type.startsWith('_'); })
            .forEach(function (type) { return _this.config[type] = _this.expandSchemaForType(type); });
    }
    Schema.prototype.hasType = function (type) {
        return type in this.config;
    };
    Schema.prototype.getTypes = function () {
        return Object.keys(this.config);
    };
    Schema.prototype.getConfig = function (type) {
        if (this.hasType(type)) {
            return this.config[type];
        }
        else {
            this.onNoSchemaFound(type);
        }
    };
    Schema.prototype.getTargetItem = function (type, field) {
        var config = this.getConfig(type);
        if (field in config.targets) {
            return config.targets[field];
        }
        else {
            return null;
        }
    };
    Schema.prototype.getTargetConfig = function (type, field) {
        var config = this.getConfig(type);
        if (field in config.targets) {
            return this.getConfig(config.targets[field].type);
        }
        else {
            this.onNoSchemaFound(type + '.' + field);
        }
    };
    Schema.prototype.toString = function () {
        return JSON.stringify(this.config);
    };
    Schema.prototype.initDefaults = function () {
        if (Schema.TYPE_DEFAULTS in this.userConfig) {
            if (typeof this.userConfig._defaults !== 'object') {
                throw new Error('Defaults must be an instance of `IStoreConfig`');
            }
            this.userConfig._defaults.autoKey = this.userConfig._defaults.autoKey === true;
            if (!('targets' in this.userConfig._defaults)) {
                this.userConfig._defaults.targets = {};
            }
        }
        else {
            this.userConfig._defaults = {
                autoKey: false,
                targets: {}
            };
        }
    };
    Schema.prototype.expandSchemaForType = function (type) {
        if (type in this.userConfig && this.userConfig[type] !== false) {
            var typeSchema = this.userConfig[type];
            if (type === Schema.TYPE_DEFAULTS) {
                var defaults = this.userConfig[Schema.TYPE_DEFAULTS];
                if (defaults.targets) {
                    defaults.targets = this.expandTargets(defaults.targets);
                }
                return deep_clone_1.deepClone(defaults);
            }
            else if (typeSchema === true) {
                return Object.assign(this.expandSchemaForType(Schema.TYPE_DEFAULTS), { type: type });
            }
            else if (typeof typeSchema === 'string') {
                return Object.assign(deep_clone_1.deepClone(this.expandSchemaForType(typeSchema)), { type: type });
            }
            else if (typeof typeSchema === 'object') {
                var parentSchema = this.expandSchemaForType(typeSchema.parent || Schema.TYPE_DEFAULTS);
                return this.mergeConfigs(type, typeSchema, parentSchema);
            }
            else {
                throw new Error('Schema for type \'' + type + '\' is invalid');
            }
        }
        else {
            this.onNoSchemaFound(type);
        }
    };
    Schema.prototype.mergeConfigs = function (type, typeConfig, parent) {
        var targets = Object.assign(parent.targets, typeConfig.targets);
        var autoKey = object_1.isNull(typeConfig.autoKey || null) ? parent.autoKey : typeConfig.autoKey;
        var result = {
            type: type,
            key: typeConfig.key || parent.key,
            autoKey: autoKey || false,
            targets: this.expandTargets(targets)
        };
        var lastModified = typeConfig.lastModified || parent.lastModified;
        if (lastModified) {
            result.lastModified = lastModified;
        }
        return result;
    };
    Schema.prototype.expandTargets = function (targetConfig) {
        var result = {};
        Object.keys(targetConfig).forEach(function (field) {
            var item = targetConfig[field];
            result[field] = typeof item === 'string'
                ? { type: item }
                : item;
        });
        return result;
    };
    Schema.prototype.onNoSchemaFound = function (type) {
        throw new Error('No config found for type \'' + type + '\'');
    };
    Schema.TYPE_DEFAULTS = '_defaults';
    return Schema;
}());
exports.Schema = Schema;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(0);
var StoreBuilder = (function () {
    function StoreBuilder(parent, key, lastModified, autoKey, targets) {
        this.parent = parent;
        this.key = key;
        this.lastModified = lastModified;
        this.autoKey = autoKey;
        this.targets = targets;
    }
    StoreBuilder.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    StoreBuilder.prototype.setLastModified = function (lastModified) {
        this.lastModified = lastModified;
        return this;
    };
    StoreBuilder.prototype.setAutoKey = function (autoKey) {
        this.autoKey = autoKey;
        return this;
    };
    StoreBuilder.prototype.setParent = function (parent) {
        this.parent = parent;
        return this;
    };
    StoreBuilder.prototype.hasTarget = function (field) {
        return field in this.targets;
    };
    StoreBuilder.prototype.setTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        var config = { type: type };
        if (cascadeRemoval) {
            config.cascadeRemoval = true;
        }
        if (this.targets) {
            this.targets[field] = config;
        }
        else {
            this.targets = (_a = {}, _a[field] = config, _a);
        }
        return this;
        var _a;
    };
    StoreBuilder.prototype.setArrayTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.setTarget(field, type, cascadeRemoval);
        this.targets[field].isArray = true;
        return this;
    };
    StoreBuilder.prototype.removeTarget = function (field) {
        if (this.hasTarget(field)) {
            delete this.targets[field];
        }
        return this;
    };
    Object.defineProperty(StoreBuilder.prototype, "build", {
        get: function () {
            if (this.hasConfiguration) {
                var result = {};
                if (this.key) {
                    result.key = this.key;
                }
                if (!object_1.isNull(this.autoKey)) {
                    result.autoKey = this.autoKey;
                }
                if (this.parent) {
                    result.parent = this.parent;
                }
                if (this.targets) {
                    result.targets = this.targets;
                }
                return result;
            }
            else if (this.parent) {
                return this.parent;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreBuilder.prototype, "hasConfiguration", {
        get: function () {
            return !object_1.isNull(this.key) || !object_1.isNull(this.autoKey) || this.hasTargets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreBuilder.prototype, "hasTargets", {
        get: function () {
            return !object_1.isNull(this.targets) && Object.keys(this.targets).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    return StoreBuilder;
}());
exports.StoreBuilder = StoreBuilder;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(8));
__export(__webpack_require__(11));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(1);
exports.deepClone = deep_clone_1.deepClone;
var object_1 = __webpack_require__(0);
exports.isNull = object_1.isNull;
exports.isObject = object_1.isObject;
var queue_1 = __webpack_require__(7);
exports.Queue = queue_1.Queue;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = (function () {
    function Queue(data) {
        if (data === void 0) { data = []; }
        this.data = data;
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "isEmpty", {
        get: function () {
            return this.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    Queue.prototype.clear = function () {
        this.data.splice(0, this.length);
    };
    return Queue;
}());
exports.Queue = Queue;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parent_1 = __webpack_require__(9);
exports.Parent = parent_1.Parent;
var range_1 = __webpack_require__(10);
exports.Range = range_1.Range;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parent = (function () {
    function Parent(key, type) {
        this.key = key;
        this.type = type;
    }
    Object.defineProperty(Parent.prototype, "isValid", {
        get: function () {
            return this.key !== null;
        },
        enumerable: true,
        configurable: true
    });
    return Parent;
}());
exports.Parent = Parent;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Range = (function () {
    function Range(offset, limit) {
        this.offset = offset;
        this.limit = limit;
    }
    Range.prototype.slice = function (data) {
        return data.slice(this.offset, this.limit);
    };
    return Range;
}());
exports.Range = Range;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(2);
exports.Schema = schema_1.Schema;
__export(__webpack_require__(12));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_builder_1 = __webpack_require__(13);
exports.SchemaBuilder = schema_builder_1.SchemaBuilder;
var store_builder_1 = __webpack_require__(3);
exports.StoreBuilder = store_builder_1.StoreBuilder;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(2);
var store_builder_1 = __webpack_require__(3);
var SchemaBuilder = (function () {
    function SchemaBuilder() {
        this.defaultStore = new store_builder_1.StoreBuilder();
        this.schema = (_a = {}, _a[schema_1.Schema.TYPE_DEFAULTS] = this.defaultStore, _a);
        var _a;
    }
    Object.defineProperty(SchemaBuilder.prototype, "getDefaultStore", {
        get: function () {
            return this.defaultStore;
        },
        enumerable: true,
        configurable: true
    });
    SchemaBuilder.prototype.setDefaultKey = function (key) {
        this.defaultStore.setKey(key);
        return this;
    };
    SchemaBuilder.prototype.setDefaultLastModified = function (lastModified) {
        this.defaultStore.setLastModified(lastModified);
        return this;
    };
    SchemaBuilder.prototype.setDefaultAutoKey = function (autoKey) {
        this.defaultStore.setAutoKey(autoKey);
        return this;
    };
    SchemaBuilder.prototype.setDefaultTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.defaultStore.setTarget(field, type, cascadeRemoval);
        return this;
    };
    SchemaBuilder.prototype.setDefaultArrayTarget = function (field, type, cascadeRemoval) {
        if (cascadeRemoval === void 0) { cascadeRemoval = false; }
        this.defaultStore.setArrayTarget(field, type, cascadeRemoval);
        return this;
    };
    SchemaBuilder.prototype.hasStore = function (type) {
        return type in this.schema;
    };
    SchemaBuilder.prototype.getStore = function (type) {
        if (this.hasStore(type)) {
            return this.schema[type];
        }
        else {
            throw new Error('No prefix \'' + type + '\' is defined');
        }
    };
    SchemaBuilder.prototype.setStore = function (type, parent) {
        if (parent === void 0) { parent = null; }
        var storeBuilder = new store_builder_1.StoreBuilder(parent);
        this.schema[type] = storeBuilder;
        return storeBuilder;
    };
    SchemaBuilder.prototype.setAbstractStore = function (type, parent) {
        if (parent === void 0) { parent = null; }
        return this.setStore('_' + type, parent);
    };
    SchemaBuilder.prototype.getAbstractStore = function (type) {
        return this.getStore('_' + type);
    };
    SchemaBuilder.prototype.removeStore = function (type) {
        if (this.hasStore(type)) {
            delete this.schema[type];
        }
        return this;
    };
    Object.defineProperty(SchemaBuilder.prototype, "build", {
        get: function () {
            var _this = this;
            return Object.keys(this.schema)
                .filter(function (type) { return _this.schema[type] instanceof store_builder_1.StoreBuilder; })
                .reduce(function (result, type) {
                result[type] = _this.schema[type].build;
                return result;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    return SchemaBuilder;
}());
exports.SchemaBuilder = SchemaBuilder;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var basic_normalizer_1 = __webpack_require__(2);
var reverse_reference_normalizer_1 = __webpack_require__(5);
var Normalizer = (function () {
    function Normalizer(schema, useReverseReferences, uniqueKeyCallback) {
        if (useReverseReferences === void 0) { useReverseReferences = false; }
        this.schema = schema;
        this.useReverseReferences = useReverseReferences;
        this.uniqueKeyCallback = uniqueKeyCallback;
        if (core_1.isNull(schema)) {
            throw new Error('Cannot create a normalizer without a schema');
        }
    }
    Normalizer.prototype.apply = function (data, type) {
        return this.getImplementation().apply(data, type);
    };
    Normalizer.prototype.getImplementation = function () {
        return this.useReverseReferences
            ? new reverse_reference_normalizer_1.ReverseReferenceNormalizer(this.schema, this.uniqueKeyCallback)
            : new basic_normalizer_1.BasicNormalizer(this.schema, this.uniqueKeyCallback);
    };
    return Normalizer;
}());
exports.Normalizer = Normalizer;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BasicNormalizer = (function () {
    function BasicNormalizer(schema, uniqueKeyCallback) {
        this.schema = schema;
        this.uniqueKeyCallback = uniqueKeyCallback;
        this.result = {};
        this.keys = {};
        this.onNormalizedSimpleType = this.onNormalizedSimpleType.bind(this);
        this.onNormalizedKeyedType = this.onNormalizedKeyedType.bind(this);
        if (core_1.isNull(this.uniqueKeyCallback)) {
            this.nextKey = this.nextKey.bind(this);
            this.uniqueKeyCallback = this.nextKey;
        }
    }
    BasicNormalizer.prototype.apply = function (data, type) {
        this.applyHelper(core_1.deepClone(data), { type: type }, null, true);
        return this.result;
    };
    BasicNormalizer.prototype.applyHelper = function (data, target, parent, isRoot) {
        if (parent === void 0) { parent = new core_1.Parent(); }
        if (isRoot === void 0) { isRoot = false; }
        this.validateType(target.type);
        if (core_1.isNull(data)) {
            return null;
        }
        else if (Array.isArray(data)) {
            return this.normalizeArray(data, target, parent, isRoot);
        }
        else if (core_1.isObject(data)) {
            return this.normalizeObject(data, target, parent);
        }
        else {
            return data;
        }
    };
    BasicNormalizer.prototype.normalizeArray = function (data, target, parent, isRoot) {
        var _this = this;
        return data.map(function (item) { return _this.normalizeObject(item, target, parent, !isRoot); });
    };
    BasicNormalizer.prototype.normalizeObject = function (data, target, parent, isArray) {
        if (isArray === void 0) { isArray = false; }
        this.isArrayTypeValid(target, parent, isArray);
        if (!core_1.isObject(data) || data instanceof Date) {
            return data;
        }
        var config = this.schema.getConfig(target.type);
        if (core_1.isNull(data[config.key])) {
            if (!config.autoKey) {
                throw new Error('You must provide a unique key for objects of type \'' +
                    target.type + '\' (or set `autoKey` to `true`');
            }
            data[config.key] = this.uniqueKeyCallback(target.type);
        }
        if (!core_1.isNull(config.targets)) {
            this.normalizeTargets(data, target.type, config);
        }
        this.onNormalized(data, target.type, parent);
        return core_1.isNull(config.key) ? data : data[config.key];
    };
    BasicNormalizer.prototype.isArrayTypeValid = function (target, parent, isArray) {
        if (target.isArray) {
            if (!isArray) {
                throw new Error('\'' +
                    parent.type +
                    '\' is expected to have an array of \'' +
                    target.type +
                    '\' but got object');
            }
        }
        else if (isArray) {
            throw new Error('\'' + parent.type + '\' is expected to have an object of \'' + target.type + '\' but got array');
        }
    };
    BasicNormalizer.prototype.normalizeTargets = function (data, type, config) {
        var _this = this;
        var childParent = new core_1.Parent(data[config.key], type);
        Object.keys(config.targets)
            .filter(function (field) { return field in data; })
            .forEach(function (field) { return data[field] = _this.applyHelper(data[field], config.targets[field], childParent, false); });
    };
    BasicNormalizer.prototype.onNormalized = function (data, type, parent) {
        var config = this.schema.getConfig(type);
        var onNormalizedFunction = core_1.isNull(config.key)
            ? this.onNormalizedSimpleType
            : this.onNormalizedKeyedType;
        return onNormalizedFunction(data, type, config);
    };
    BasicNormalizer.prototype.onNormalizedKeyedType = function (data, type, config) {
        var newKey = data[config.key];
        if (type in this.result) {
            var keyMap = this.keys[type];
            if (keyMap.has(newKey)) {
                return keyMap.get(newKey);
            }
            else {
                keyMap.set(newKey, this.result[type].length);
                this.result[type].push(data);
            }
        }
        else {
            this.keys[type] = new Map([[newKey, 0]]);
            this.result[type] = [data];
        }
        return this.result[type].length - 1;
    };
    BasicNormalizer.prototype.nextKey = function (type) {
        return Date.now().toString(36) +
            Math.random().toString(36).substr(2, 5);
    };
    BasicNormalizer.prototype.onNormalizedSimpleType = function (data, type) {
        if (type in this.result) {
            this.result[type].push(data);
        }
        else {
            this.result[type] = [data];
        }
        return this.result[type].length - 1;
    };
    BasicNormalizer.prototype.validateType = function (type) {
        if (!this.schema.hasType(type)) {
            throw new Error('Type \'' + type + '\' is not defined');
        }
    };
    return BasicNormalizer;
}());
exports.BasicNormalizer = BasicNormalizer;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var normalizer_1 = __webpack_require__(1);
exports.Normalizer = normalizer_1.Normalizer;
var normalizer_builder_1 = __webpack_require__(6);
exports.NormalizerBuilder = normalizer_builder_1.NormalizerBuilder;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var basic_normalizer_1 = __webpack_require__(2);
var ReverseReferenceNormalizer = (function (_super) {
    __extends(ReverseReferenceNormalizer, _super);
    function ReverseReferenceNormalizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReverseReferenceNormalizer.prototype.onNormalized = function (data, type, parent) {
        var resultIndex = _super.prototype.onNormalized.call(this, data, type, parent);
        data = this.result[type][resultIndex];
        if (parent && parent.isValid) {
            if (!data._refs) {
                data._refs = {};
            }
            if (parent.type in data._refs) {
                data._refs[parent.type].add(parent.key);
            }
            else {
                data._refs[parent.type] = new Set([parent.key]);
            }
        }
        return resultIndex;
    };
    return ReverseReferenceNormalizer;
}(basic_normalizer_1.BasicNormalizer));
exports.ReverseReferenceNormalizer = ReverseReferenceNormalizer;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var normalizer_1 = __webpack_require__(1);
var NormalizerBuilder = (function () {
    function NormalizerBuilder() {
    }
    NormalizerBuilder.prototype.withSchema = function (schema) {
        this.schema = schema;
        return this;
    };
    NormalizerBuilder.prototype.withSchemaConfig = function (schemaConfig) {
        this.schema = new core_1.Schema(schemaConfig);
        return this;
    };
    NormalizerBuilder.prototype.withReverseReferences = function (useReverseReferences) {
        this.useReverseReferences = useReverseReferences;
        return this;
    };
    NormalizerBuilder.prototype.withUniqueKeyCallback = function (uniqueKeyCallback) {
        this.uniqueKeyCallback = uniqueKeyCallback;
        return this;
    };
    Object.defineProperty(NormalizerBuilder.prototype, "build", {
        get: function () {
            return new normalizer_1.Normalizer(this.schema, this.useReverseReferences, this.uniqueKeyCallback);
        },
        enumerable: true,
        configurable: true
    });
    return NormalizerBuilder;
}());
exports.NormalizerBuilder = NormalizerBuilder;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var denormalizer_1 = __webpack_require__(12);
var normalizer_1 = __webpack_require__(13);
var idb_1 = __webpack_require__(36);
var logging_config_1 = __webpack_require__(15);
var log_entry_1 = __webpack_require__(37);
var log_history_1 = __webpack_require__(10);
var IndexedDb = (function () {
    function IndexedDb(schema, logging) {
        if (logging === void 0) { logging = new logging_config_1.LoggingConfig(); }
        this.schema = schema;
        this.logging = logging;
        this.onUpgradeNeeded = this.onUpgradeNeeded.bind(this);
        this.fetchCallback = this.fetchCallback.bind(this);
        this.normalizer = this.buildNormalizer().build;
    }
    IndexedDb.prototype.open = function (name, version, upgrade) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, idb_1.default.open(name, version, upgrade ? upgrade : this.onUpgradeNeeded)];
                    case 1:
                        _a.db = _b.sent();
                        return [2];
                }
            });
        });
    };
    IndexedDb.prototype.getLoggingStore = function (type) {
        return this.logging.prefix + '_' + type;
    };
    IndexedDb.prototype.createLoggingStore = function (upgradeDb, type) {
        var loggingStore = upgradeDb.createObjectStore(this.getLoggingStore(type), {
            keyPath: 'id',
            autoIncrement: true
        });
        loggingStore.createIndex('time', 'time');
        loggingStore.createIndex('key', 'key');
    };
    Object.defineProperty(IndexedDb.prototype, "isLoggingActive", {
        get: function () {
            return this.logging.isActive;
        },
        set: function (isActive) {
            this.logging.isActive = isActive;
        },
        enumerable: true,
        configurable: true
    });
    IndexedDb.prototype.getHistory = function (type, range) {
        return __awaiter(this, void 0, void 0, function () {
            var loggingStoreName, objectStore, history, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loggingStoreName = this.getLoggingStore(type);
                        objectStore = this.db.transaction(loggingStoreName).objectStore(loggingStoreName);
                        if (!range) return [3, 2];
                        return [4, objectStore.index('time').getAll(range.idbRange)];
                    case 1:
                        _a = _b.sent();
                        return [3, 4];
                    case 2: return [4, objectStore.getAll()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        history = (_a);
                        return [2, history.reduce(function (result, logEntry) {
                                result.add(logEntry);
                                return result;
                            }, new log_history_1.LogHistory())];
                }
            });
        });
    };
    IndexedDb.prototype.clearHistory = function (type, range) {
        return __awaiter(this, void 0, void 0, function () {
            var loggingStoreName, loggingStore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loggingStoreName = this.getLoggingStore(type);
                        loggingStore = this.db.transaction(loggingStoreName, 'readwrite').objectStore(loggingStoreName);
                        if (!range) return [3, 1];
                        loggingStore.iterateCursor(range.idbRange, function (cursor) {
                            if (cursor) {
                                cursor.delete();
                                cursor.continue();
                            }
                        });
                        return [3, 3];
                    case 1: return [4, loggingStore.clear()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    IndexedDb.prototype.getTypes = function () {
        return Promise.resolve(this.schema.getTypes());
    };
    IndexedDb.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var types, transaction, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getTypes()];
                    case 1:
                        types = _a.sent();
                        transaction = this.read.apply(this, types);
                        result = {};
                        return [4, Promise.all(types.map(function (type) { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = result;
                                        _b = type;
                                        return [4, transaction.objectStore(type).getAll()];
                                    case 1: return [2, _a[_b] = _c.sent()];
                                }
                            }); }); }))];
                    case 2:
                        _a.sent();
                        return [2, result];
                }
            });
        });
    };
    IndexedDb.prototype.count = function (type) {
        this.validateType(type);
        return this.read(type)
            .objectStore(type)
            .count();
    };
    IndexedDb.prototype.isEmpty = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.count(type)];
                    case 1: return [2, (_a.sent()) === 0];
                }
            });
        });
    };
    IndexedDb.prototype.getKeys = function (type, range) {
        this.validateType(type);
        return range
            ? this.iterateRangeCursor(type, range, true)
            : this.read(type).objectStore(type).getAllKeys();
    };
    IndexedDb.prototype.getInvertedKeys = function (excludedKeys, type, range) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.validateType(type);
                        _b = (_a = Array).from;
                        return [4, this.getKeys(type)];
                    case 1:
                        keys = _b.apply(_a, [_c.sent()])
                            .filter(function (key) { return excludedKeys.indexOf(key) < 0; });
                        return [2, range ? range.slice(keys) : keys];
                }
            });
        });
    };
    IndexedDb.prototype.hasKey = function (key, type) {
        return __awaiter(this, void 0, void 0, function () {
            var cursor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        return [4, this.read(type)
                                .objectStore(type)
                                .openKeyCursor(key)];
                    case 1:
                        cursor = _a.sent();
                        return [2, !core_1.isNull(cursor)];
                }
            });
        });
    };
    IndexedDb.prototype.getAll = function (type, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.validateType(type);
                        if (!range) return [3, 2];
                        return [4, this.iterateRangeCursor(type, range)];
                    case 1:
                        _a = _b.sent();
                        return [3, 4];
                    case 2: return [4, this.read(type).objectStore(type).getAll()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        data = _a;
                        return [4, this.buildDenormalizer().build.applyAll(data, type, depth)];
                    case 5: return [2, _b.sent()];
                }
            });
        });
    };
    IndexedDb.prototype.getAllInverted = function (excludedKeys, type, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var invertedKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getInvertedKeys(excludedKeys, type, range)];
                    case 1:
                        invertedKeys = _a.sent();
                        return [2, this.getAllByKeys(invertedKeys, type)];
                }
            });
        });
    };
    IndexedDb.prototype.getAllByKeys = function (keys, type, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var rangedKeys, objectStore, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        rangedKeys = range ? range.slice(keys) : keys;
                        objectStore = this.read(type).objectStore(type);
                        data = [];
                        return [4, Promise.all(rangedKeys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                                var cursor;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, objectStore.openCursor(key)];
                                        case 1:
                                            cursor = _a.sent();
                                            if (cursor) {
                                                data.push(cursor.value);
                                            }
                                            return [2];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [4, this.buildDenormalizer().build.applyAll(data, type, depth)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    IndexedDb.prototype.getByKey = function (key, type, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var cursor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        return [4, this.read(type)
                                .objectStore(type)
                                .openCursor(key)];
                    case 1:
                        cursor = _a.sent();
                        if (core_1.isNull(cursor) || core_1.isNull(cursor.value)) {
                            this.notFound(type, key);
                        }
                        return [4, this.buildDenormalizer().build.apply(cursor.value, type, depth)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    IndexedDb.prototype.getLatestKey = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var cursor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        return [4, this.read(type)
                                .objectStore(type)
                                .openCursor(null, 'prevunique')];
                    case 1:
                        cursor = _a.sent();
                        return [2, cursor ? cursor.key : null];
                }
            });
        });
    };
    IndexedDb.prototype.getOrDefault = function (key, type, defaultResult, depth) {
        if (defaultResult === void 0) { defaultResult = null; }
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.getByKey(key, type)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        return [2, defaultResult];
                    case 3: return [2];
                }
            });
        });
    };
    IndexedDb.prototype.put = function (data, rootType) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var normalizedData, types, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(rootType);
                        normalizedData = this.normalizer.apply(data, rootType);
                        types = Object.keys(normalizedData);
                        transaction = this.write(types);
                        types.forEach(function (type) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var config_1, objectStore_1, loggingStore_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!this.isLoggingActive) return [3, 2];
                                        config_1 = this.schema.getConfig(type);
                                        objectStore_1 = transaction.objectStore(type);
                                        loggingStore_1 = transaction.objectStore(this.getLoggingStore(type));
                                        return [4, Promise.all(normalizedData[type].map(function (newValue) { return __awaiter(_this, void 0, void 0, function () {
                                                var lastModified, key, cursor, logEntry;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            lastModified = null;
                                                            key = newValue[config_1.key];
                                                            return [4, objectStore_1.openCursor(key, 'nextunique')];
                                                        case 1:
                                                            cursor = _a.sent();
                                                            if (!('lastModified' in config_1)) return [3, 3];
                                                            lastModified = this.getLastModified(config_1, newValue);
                                                            if (!(cursor && cursor.value[config_1.lastModified].getTime() >= lastModified.getTime())) return [3, 3];
                                                            return [4, this.persistItem(objectStore_1, newValue, key, cursor)];
                                                        case 2:
                                                            _a.sent();
                                                            return [2];
                                                        case 3:
                                                            logEntry = new log_entry_1.LogEntry(type, cursor ? 'update' : 'create', key, newValue, lastModified);
                                                            return [4, this.callPreLog(logEntry)];
                                                        case 4:
                                                            _a.sent();
                                                            return [4, this.persistItem(objectStore_1, logEntry.value, logEntry.key, cursor)];
                                                        case 5:
                                                            _a.sent();
                                                            return [4, loggingStore_1.add(logEntry)];
                                                        case 6:
                                                            _a.sent();
                                                            return [2];
                                                    }
                                                });
                                            }); }))];
                                    case 1:
                                        _a.sent();
                                        return [3, 4];
                                    case 2: return [4, this.persist(transaction.objectStore(type), normalizedData[type], type)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2];
                                }
                            });
                        }); });
                        return [4, transaction.complete];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IndexedDb.prototype.remove = function (keys, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var config, keysArray, transaction, objectStore, loggingStore, removedKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateType(type);
                        config = this.schema.getConfig(type);
                        keysArray = Array.isArray(keys) ? keys : [keys];
                        transaction = this.write(type);
                        objectStore = transaction.objectStore(type);
                        loggingStore = this.isLoggingActive ? transaction.objectStore(this.getLoggingStore(type)) : null;
                        removedKeys = [];
                        keysArray.forEach(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var cursor, item_1, parent_1, logEntry;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, objectStore.openCursor(key)];
                                    case 1:
                                        cursor = _a.sent();
                                        if (!cursor) return [3, 7];
                                        if (!core_1.isNull(config.targets)) {
                                            item_1 = cursor.value;
                                            parent_1 = new core_1.Parent(key, type);
                                            Object.keys(config.targets)
                                                .filter(function (field) { return field in item_1; })
                                                .forEach(function (field) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, this.removeTarget(parent_1, item_1[field], config.targets[field])];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); }); });
                                        }
                                        if (!this.isLoggingActive) return [3, 4];
                                        logEntry = new log_entry_1.LogEntry(type, 'remove', cursor.value[config.key]);
                                        return [4, cursor.delete()];
                                    case 2:
                                        _a.sent();
                                        return [4, loggingStore.add(logEntry)];
                                    case 3:
                                        _a.sent();
                                        return [3, 6];
                                    case 4: return [4, cursor.delete()];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        removedKeys.push(key);
                                        _a.label = 7;
                                    case 7: return [2];
                                }
                            });
                        }); });
                        return [4, transaction.complete];
                    case 1:
                        _a.sent();
                        return [2, removedKeys];
                }
            });
        });
    };
    IndexedDb.prototype.getNested = function (key, type, field, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var item, targetItem, targetConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getByKey(key, type, 0)];
                    case 1:
                        item = _a.sent();
                        if (!(field in item)) return [3, 3];
                        targetItem = this.schema.getTargetItem(type, field);
                        if (targetItem.isArray) {
                            throw new Error('\'' + type + '#' + field + '\' is an array. Use `getAllNested` instead');
                        }
                        targetConfig = this.schema.getTargetConfig(type, field);
                        return [4, this.buildDenormalizer().build.applyKey(item[field], targetConfig.type, depth)];
                    case 2: return [2, _a.sent()];
                    case 3: return [2, null];
                }
            });
        });
    };
    IndexedDb.prototype.getAllNested = function (key, type, field, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var item, targetItem, targetConfig, keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getByKey(key, type, 0)];
                    case 1:
                        item = _a.sent();
                        if (!(field in item)) return [3, 3];
                        targetItem = this.schema.getTargetItem(type, field);
                        if (!targetItem.isArray) {
                            throw new Error('\'' + type + '#' + field + '\' is a single object. Use `getNested` instead');
                        }
                        targetConfig = this.schema.getTargetConfig(type, field);
                        keys = range ? range.slice(item[field]) : item[field];
                        return [4, this.buildDenormalizer().build.applyAllKeys(keys, targetConfig.type, depth)];
                    case 2: return [2, _a.sent()];
                    case 3: return [2, []];
                }
            });
        });
    };
    IndexedDb.prototype.getNestedFromArray = function (key, type, field, fieldKey, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var item, targetItem, targetConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getByKey(key, type, 0)];
                    case 1:
                        item = _a.sent();
                        if (!(field in item)) return [3, 3];
                        targetItem = this.schema.getTargetItem(type, field);
                        if (!targetItem.isArray) {
                            throw new Error('\'' + type + '#' + field + '\' is an object. Use `getNested` instead');
                        }
                        targetConfig = this.schema.getTargetConfig(type, field);
                        return [4, this.buildDenormalizer().build.applyKey(item[field].find(function (itemKey) { return itemKey === fieldKey; }), targetConfig.type, depth)];
                    case 2: return [2, _a.sent()];
                    case 3: return [2, null];
                }
            });
        });
    };
    IndexedDb.prototype.getNestedInverted = function (key, type, field, depth, range) {
        return __awaiter(this, void 0, void 0, function () {
            var targetItem, transaction, cursor, excludedKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetItem = this.schema.getTargetItem(type, field);
                        transaction = this.read(type, targetItem.type);
                        return [4, transaction.objectStore(type).openCursor(key, 'nextunique')];
                    case 1:
                        cursor = _a.sent();
                        if (cursor) {
                            excludedKeys = targetItem.isArray ? cursor.value[field] : [cursor.value[field]];
                            return [2, this.getAllInverted(excludedKeys, targetItem.type, depth, range)];
                        }
                        else {
                            this.notFound(type, key);
                        }
                        return [2];
                }
            });
        });
    };
    IndexedDb.prototype.addNested = function (key, type, nestedItem, field) {
        return __awaiter(this, void 0, void 0, function () {
            var targetConfig, nestedKey, _a, _b, transaction, cursor, item, targetItem, nestedValue, logEntry, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 9, , 10]);
                        targetConfig = this.schema.getTargetConfig(type, field);
                        return [4, this.put(nestedItem, targetConfig.type)];
                    case 1:
                        _c.sent();
                        nestedKey = nestedItem[targetConfig.key];
                        if (!core_1.isNull(nestedKey)) return [3, 3];
                        _a = nestedItem;
                        _b = targetConfig.key;
                        return [4, this.getLatestKey(targetConfig.type)];
                    case 2:
                        _a[_b] = nestedKey = _c.sent();
                        _c.label = 3;
                    case 3: return [4, this.write(type)];
                    case 4:
                        transaction = _c.sent();
                        return [4, transaction.objectStore(type).openCursor(key)];
                    case 5:
                        cursor = _c.sent();
                        if (!cursor) return [3, 8];
                        item = cursor.value;
                        targetItem = this.schema.getTargetItem(type, field);
                        if (targetItem.isArray) {
                            if (field in item) {
                                item[field].push(nestedItem[targetConfig.key]);
                            }
                            else {
                                item[field] = [];
                            }
                        }
                        else {
                            item[field] = nestedItem[targetConfig.key];
                        }
                        return [4, cursor.update(item)];
                    case 6:
                        _c.sent();
                        if (!this.isLoggingActive) return [3, 8];
                        nestedValue = new log_entry_1.NestedValue(key, nestedKey, field, targetConfig.type);
                        logEntry = new log_entry_1.LogEntry(type, 'addNested', key, nestedValue);
                        return [4, transaction.objectStore(this.getLoggingStore(type)).add(logEntry)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [3, 10];
                    case 9:
                        e_1 = _c.sent();
                        return [2, false];
                    case 10: return [2, true];
                }
            });
        });
    };
    IndexedDb.prototype.removeNested = function (key, type, nestedItem, field) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var targetConfig, nestedKey_1, targetItem_1, removedKeys, transaction_1, cursor, item, log, index, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 13, , 14]);
                        targetConfig = this.schema.getTargetConfig(type, field);
                        nestedKey_1 = nestedItem[targetConfig.key];
                        targetItem_1 = this.schema.getTargetItem(type, field);
                        if (!targetItem_1.cascadeRemoval) return [3, 2];
                        return [4, this.remove(nestedKey_1, targetItem_1.type)];
                    case 1:
                        removedKeys = _a.sent();
                        if (removedKeys.length !== 1) {
                            return [2, false];
                        }
                        return [3, 4];
                    case 2: return [4, this.persistRemoveNested(nestedKey_1, targetItem_1.type, new core_1.Parent(key, type))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        transaction_1 = this.write(type);
                        return [4, transaction_1.objectStore(type).openCursor(key)];
                    case 5:
                        cursor = _a.sent();
                        if (!cursor) return [3, 12];
                        item = cursor.value;
                        if (!(field in item)) return [3, 12];
                        log = function () { return __awaiter(_this, void 0, void 0, function () {
                            var nestedValue, logEntry;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!this.isLoggingActive) return [3, 2];
                                        nestedValue = new log_entry_1.NestedValue(key, nestedKey_1, field, targetItem_1.type);
                                        logEntry = new log_entry_1.LogEntry(type, 'removedNested', key, nestedValue);
                                        return [4, transaction_1.objectStore(this.getLoggingStore(type)).add(logEntry)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2];
                                }
                            });
                        }); };
                        if (!targetItem_1.isArray) return [3, 9];
                        index = item[field].findIndex(function (nk) { return nk === nestedKey_1; });
                        if (!(index >= 0)) return [3, 8];
                        item[field].splice(index, 1);
                        return [4, cursor.update(item)];
                    case 6:
                        _a.sent();
                        return [4, log()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3, 12];
                    case 9:
                        item[field] = null;
                        return [4, cursor.update(item)];
                    case 10:
                        _a.sent();
                        return [4, log()];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [3, 14];
                    case 13:
                        e_2 = _a.sent();
                        return [2, false];
                    case 14: return [2, true];
                }
            });
        });
    };
    IndexedDb.prototype.clear = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!type) return [3, 5];
                        this.validateType(type);
                        if (!this.isLoggingActive) return [3, 2];
                        transaction = this.write(type);
                        return [4, Promise.all([
                                transaction.objectStore(type).clear(),
                                transaction.objectStore(this.getLoggingStore(type)).clear()
                            ])];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, this.write(type).objectStore(type).clear()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3, 7];
                    case 5: return [4, idb_1.default.delete(this.db.name)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    IndexedDb.prototype.buildNormalizer = function () {
        return new normalizer_1.NormalizerBuilder()
            .withSchema(this.schema);
    };
    IndexedDb.prototype.buildDenormalizer = function () {
        return new denormalizer_1.DenormalizerBuilder()
            .withSchema(this.schema)
            .withFetchCallback(this.fetchCallback);
    };
    IndexedDb.prototype.read = function () {
        var storeNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            storeNames[_i] = arguments[_i];
        }
        return this.db.transaction(storeNames, IndexedDb.MODE_READ);
    };
    IndexedDb.prototype.write = function (storeNames) {
        var _this = this;
        if (!this.isLoggingActive) {
            return this.db.transaction(storeNames, IndexedDb.MODE_READ_WRITE);
        }
        else if (Array.isArray(storeNames)) {
            var stores = storeNames.map(function (type) { return [type, _this.getLoggingStore(type)]; })
                .reduce(function (result, type) {
                result.push.apply(result, type);
                return result;
            }, []);
            return this.db.transaction(stores, IndexedDb.MODE_READ_WRITE);
        }
        else {
            return this.db.transaction([storeNames, this.getLoggingStore(storeNames)], IndexedDb.MODE_READ_WRITE);
        }
    };
    IndexedDb.prototype.persist = function (objectStore, data, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = this.schema.getConfig(type);
                        return [4, Promise.all(data.map(function (item) { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = item;
                                        _b = config.key;
                                        return [4, objectStore.put(item)];
                                    case 1: return [2, _a[_b] = _c.sent()];
                                }
                            }); }); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IndexedDb.prototype.persistItem = function (objectStore, item, key, cursor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cursor) return [3, 2];
                        return [4, cursor.update(item)];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, objectStore.put(item)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    IndexedDb.prototype.persistRemoveNested = function (key, type, parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    IndexedDb.prototype.removeTarget = function (parent, keys, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(target.cascadeRemoval === true)) return [3, 2];
                        return [4, this.remove(keys, target.type)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    IndexedDb.prototype.iterateRangeCursor = function (type, range, keyOnly) {
        if (keyOnly === void 0) { keyOnly = false; }
        return __awaiter(this, void 0, void 0, function () {
            var transaction, data, hasSkipped, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transaction = this.read(type);
                        data = [];
                        hasSkipped = false;
                        i = 0;
                        transaction.objectStore(type).iterateCursor(function (cursor) {
                            if (!cursor) {
                                return;
                            }
                            if (range.offset > 0 && !hasSkipped) {
                                cursor.advance(range.offset);
                                hasSkipped = true;
                                return;
                            }
                            data.push(keyOnly ? cursor.key : cursor.value);
                            if (++i < range.limit) {
                                cursor.continue();
                            }
                        });
                        return [4, transaction.complete];
                    case 1:
                        _a.sent();
                        return [2, data];
                }
            });
        });
    };
    IndexedDb.prototype.getLastModified = function (config, item) {
        if (config.lastModified in item) {
            return item[config.lastModified];
        }
        else {
            var now = new Date();
            item[config.lastModified] = now;
            return now;
        }
    };
    IndexedDb.prototype.notFound = function (type, key) {
        throw new Error('Could not find \'' + type + '\' with key \'' + String(key) + '\'');
    };
    IndexedDb.prototype.onUpgradeNeeded = function (upgradeDb) {
        var _this = this;
        this.schema.getTypes().forEach(function (type) {
            _this.createLoggingStore(upgradeDb, type);
            var config = _this.schema.getConfig(type);
            upgradeDb.createObjectStore(type, { keyPath: config.key });
        });
    };
    IndexedDb.prototype.fetchCallback = function (keys, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var objectStore_2;
            return __generator(this, function (_a) {
                if (core_1.isNull(keys)) {
                    return [2, null];
                }
                if (Array.isArray(keys)) {
                    objectStore_2 = this.read(type).objectStore(type);
                    return [2, Promise.all(keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, objectStore_2.getKey(key)];
                                case 1: return [2, _a.sent()];
                            }
                        }); }); }))];
                }
                else {
                    return [2, this.read(type)
                            .objectStore(type)
                            .get(keys)];
                }
                return [2];
            });
        });
    };
    IndexedDb.prototype.callPreLog = function (logEntry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.logging.preCallback) return [3, 2];
                        return [4, this.logging.preCallback(logEntry)];
                    case 1: return [2, _a.sent()];
                    case 2: return [2];
                }
            });
        });
    };
    IndexedDb.prototype.validateType = function (type) {
        if (!this.schema.hasType(type)) {
            throw new Error('Type \'' + type + '\' is not defined');
        }
    };
    IndexedDb.MODE_READ = 'readonly';
    IndexedDb.MODE_READ_WRITE = 'readwrite';
    IndexedDb.MODE_VERSION_CHANGE = 'versionchange';
    return IndexedDb;
}());
exports.IndexedDb = IndexedDb;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoggingConfig = (function () {
    function LoggingConfig(prefix, preCallback, isActive) {
        if (prefix === void 0) { prefix = LoggingConfig.DEFAULT_PREFIX; }
        if (isActive === void 0) { isActive = false; }
        this.prefix = prefix;
        this.preCallback = preCallback;
        this.isActive = isActive;
    }
    LoggingConfig.DEFAULT_PREFIX = '_history';
    return LoggingConfig;
}());
exports.LoggingConfig = LoggingConfig;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
exports.DataStore = data_store_1.DataStore;
var observed_data_store_1 = __webpack_require__(5);
exports.ObservedDataStore = observed_data_store_1.ObservedDataStore;
__export(__webpack_require__(29));
__export(__webpack_require__(32));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(19);
var Subscriber_1 = __webpack_require__(6);
var Subscription_1 = __webpack_require__(3);
var ObjectUnsubscribedError_1 = __webpack_require__(27);
var SubjectSubscription_1 = __webpack_require__(28);
var rxSubscriber_1 = __webpack_require__(4);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(2);
var toSubscriber_1 = __webpack_require__(21);
var observable_1 = __webpack_require__(26);
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observables internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remote this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2,5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(6);
var rxSubscriber_1 = __webpack_require__(4);
var Observer_1 = __webpack_require__(9);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(8);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(2);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(3);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var history_range_1 = __webpack_require__(30);
exports.HistoryRange = history_range_1.HistoryRange;
var log_history_1 = __webpack_require__(10);
exports.LogHistory = log_history_1.LogHistory;
var range_1 = __webpack_require__(31);
exports.Range = range_1.Range;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var HistoryRange = (function () {
    function HistoryRange(from, to) {
        if (to === void 0) { to = new Date(); }
        this.from = from;
        this.to = to;
        if (core_1.isNull(this.from)) {
            this.from = new Date();
            this.from.setDate(this.from.getDate() - 1);
        }
    }
    Object.defineProperty(HistoryRange.prototype, "idbRange", {
        get: function () {
            return IDBKeyRange.bound(this.from, this.to);
        },
        enumerable: true,
        configurable: true
    });
    return HistoryRange;
}());
exports.HistoryRange = HistoryRange;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Range = (function () {
    function Range(offset, limit) {
        this.offset = offset;
        this.limit = limit;
    }
    Range.prototype.slice = function (data) {
        return data.slice(this.offset, this.limit);
    };
    return Range;
}());
exports.Range = Range;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_builder_1 = __webpack_require__(33);
exports.DataStoreBuilder = data_store_builder_1.DataStoreBuilder;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var in_memory_db_1 = __webpack_require__(11);
var in_memory_db_rr_1 = __webpack_require__(34);
var observed_data_store_1 = __webpack_require__(5);
var indexed_db_config_1 = __webpack_require__(35);
var logging_config_1 = __webpack_require__(15);
var DataStoreBuilder = (function () {
    function DataStoreBuilder() {
    }
    DataStoreBuilder.prototype.withSchema = function (schema) {
        this.schema = schema;
        return this;
    };
    DataStoreBuilder.prototype.withSchemaConfig = function (schemaConfig) {
        this.schema = new core_1.Schema(schemaConfig);
        return this;
    };
    DataStoreBuilder.prototype.withReverseReferences = function (useReverseReferences) {
        this.useReverseReferences = useReverseReferences;
        return this;
    };
    DataStoreBuilder.prototype.withUniqueKeyCallback = function (uniqueKeyCallback) {
        this.uniqueKeyCallback = uniqueKeyCallback;
        return this;
    };
    DataStoreBuilder.prototype.withObservers = function (useObservers) {
        this.useObservers = useObservers;
        return this;
    };
    DataStoreBuilder.prototype.withIndexedDb = function (name, version, upgrade) {
        this.indexedDb = new indexed_db_config_1.IndexedDbConfig(name, version, upgrade);
        return this;
    };
    DataStoreBuilder.prototype.withLogging = function (prefix, preCallback, isActive) {
        if (isActive === void 0) { isActive = true; }
        this.logging = new logging_config_1.LoggingConfig(prefix, preCallback, isActive);
        return this;
    };
    DataStoreBuilder.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var implementation, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.indexedDb && this.indexedDb.isValid)) return [3, 2];
                        return [4, this.buildIndexedDbImplementation()];
                    case 1:
                        _a = _b.sent();
                        return [3, 4];
                    case 2: return [4, this.buildInMemoryImplementation()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        implementation = _a;
                        return [2, this.useObservers
                                ? new observed_data_store_1.ObservedDataStore(this.schema, implementation, this.useReverseReferences)
                                : new data_store_1.DataStore(this.schema, implementation, this.useReverseReferences)];
                }
            });
        });
    };
    DataStoreBuilder.prototype.buildIndexedDbImplementation = function () {
        return this.indexedDb.build(this.schema, this.useReverseReferences, this.logging);
    };
    DataStoreBuilder.prototype.buildInMemoryImplementation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.useReverseReferences
                        ? new in_memory_db_rr_1.InMemoryDbRr(this.schema, this.uniqueKeyCallback)
                        : new in_memory_db_1.InMemoryDb(this.schema, this.uniqueKeyCallback)];
            });
        });
    };
    return DataStoreBuilder;
}());
exports.DataStoreBuilder = DataStoreBuilder;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = __webpack_require__(11);
var InMemoryDbRr = (function (_super) {
    __extends(InMemoryDbRr, _super);
    function InMemoryDbRr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InMemoryDbRr.prototype.buildNormalizer = function () {
        return _super.prototype.buildNormalizer.call(this)
            .withReverseReferences(true);
    };
    InMemoryDbRr.prototype.buildDenormalizer = function () {
        return _super.prototype.buildDenormalizer.call(this)
            .withReverseRefsDeleted(true);
    };
    InMemoryDbRr.prototype.overrideItem = function (typeResult, index, item) {
        var oldItem = typeResult[index];
        if ('_refs' in item && '_refs' in oldItem) {
            var mergedRefs_1 = oldItem._refs;
            Object.keys(item._refs).forEach(function (type) {
                if (type in mergedRefs_1) {
                    var typeRefs_1 = mergedRefs_1[type];
                    item._refs[type].forEach(function (ref) { return typeRefs_1.add(ref); });
                }
                else {
                    mergedRefs_1[type] = item._refs[type];
                }
            });
            item._refs = mergedRefs_1;
        }
        else if ('_refs' in oldItem) {
            item._refs = oldItem._refs;
        }
        _super.prototype.overrideItem.call(this, typeResult, index, item);
    };
    InMemoryDbRr.prototype.removeTarget = function (parent, keys, target) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var typeKeys_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(target.cascadeRemoval === true)) return [3, 2];
                        return [4, this.remove(keys, target.type)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        if (!Array.isArray(keys)) {
                            keys = [keys];
                        }
                        typeKeys_1 = this.keys[target.type];
                        keys.forEach(function (key) {
                            if (typeKeys_1.has(key)) {
                                var targetItem = _this.data[target.type][typeKeys_1.get(key)];
                                if (!('_refs' in targetItem)) {
                                    return;
                                }
                                var typeRefs = targetItem._refs[parent.type];
                                typeRefs.delete(parent.key);
                                if (typeRefs.size === 0) {
                                    delete targetItem._refs[parent.type];
                                    if (Object.keys(targetItem._refs).length === 0) {
                                        delete targetItem._refs;
                                    }
                                }
                            }
                        });
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    return InMemoryDbRr;
}(in_memory_db_1.InMemoryDb));
exports.InMemoryDbRr = InMemoryDbRr;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexed_db_1 = __webpack_require__(14);
var indexed_db_rr_1 = __webpack_require__(38);
var IndexedDbConfig = (function () {
    function IndexedDbConfig(name, version, upgrade) {
        this.name = name;
        this.version = version;
        this.upgrade = upgrade;
    }
    IndexedDbConfig.prototype.build = function (schema, useReverseReferences, logging) {
        if (useReverseReferences === void 0) { useReverseReferences = false; }
        return __awaiter(this, void 0, void 0, function () {
            var normalizedDb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        normalizedDb = useReverseReferences
                            ? new indexed_db_rr_1.IndexedDbRr(schema, logging)
                            : new indexed_db_1.IndexedDb(schema, logging);
                        return [4, normalizedDb.open(this.name, this.version, this.upgrade)];
                    case 1:
                        _a.sent();
                        return [2, normalizedDb];
                }
            });
        });
    };
    Object.defineProperty(IndexedDbConfig.prototype, "isValid", {
        get: function () {
            return this.name && this.name.length > 0 && this.version && this.version > 0;
        },
        enumerable: true,
        configurable: true
    });
    return IndexedDbConfig;
}());
exports.IndexedDbConfig = IndexedDbConfig;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      if (method === 'openCursor' && args && args[1] && args[1] === 'nextunique') {
        args[1] = 'next';
      }
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (true) {
    module.exports = exp;
    module.exports.default = module.exports;
  }
  else {
    self.idb = exp;
  }
}());


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NestedValue = (function () {
    function NestedValue(key, nestedKey, field, type) {
        this.key = key;
        this.nestedKey = nestedKey;
        this.field = field;
        this.type = type;
    }
    return NestedValue;
}());
exports.NestedValue = NestedValue;
var LogEntry = (function () {
    function LogEntry(store, action, key, value, time) {
        if (value === void 0) { value = null; }
        if (time === void 0) { time = new Date(); }
        this.store = store;
        this.action = action;
        this.key = key;
        this.value = value;
        this.time = time;
    }
    return LogEntry;
}());
exports.LogEntry = LogEntry;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexed_db_1 = __webpack_require__(14);
var IndexedDbRr = (function (_super) {
    __extends(IndexedDbRr, _super);
    function IndexedDbRr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexedDbRr.prototype.addNested = function (key, type, nestedItem, field) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if ('_refs' in nestedItem) {
                    if (type in nestedItem['_refs']) {
                        nestedItem['_refs'][type].add(key);
                    }
                    else {
                        nestedItem['_refs'][type] = new Set([key]);
                    }
                }
                else {
                    nestedItem['_refs'] = (_a = {}, _a[type] = new Set([key]), _a);
                }
                return [2, _super.prototype.addNested.call(this, key, type, nestedItem, field)];
            });
        });
    };
    IndexedDbRr.prototype.removeNested = function (key, type, nestedItem, field) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ('_refs' in nestedItem && type in nestedItem['_refs']) {
                    nestedItem['_refs'][type].delete(key);
                }
                return [2, _super.prototype.removeNested.call(this, key, type, nestedItem, field)];
            });
        });
    };
    IndexedDbRr.prototype.buildNormalizer = function () {
        return _super.prototype.buildNormalizer.call(this)
            .withReverseReferences(true);
    };
    IndexedDbRr.prototype.buildDenormalizer = function () {
        return _super.prototype.buildDenormalizer.call(this)
            .withReverseRefsDeleted(true);
    };
    IndexedDbRr.prototype.persist = function (objectStore, data, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        count = data.length;
                        if (count <= 0) {
                            return [2];
                        }
                        return [4, objectStore.count()];
                    case 1:
                        if (!((_a.sent()) === 0)) return [3, 3];
                        return [4, _super.prototype.persist.call(this, objectStore, data, type)];
                    case 2:
                        _a.sent();
                        return [2];
                    case 3:
                        config = this.schema.getConfig(type);
                        return [4, Promise.all(data.map(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.persistItem(objectStore, item, item[config.key])];
                                    case 1: return [2, _a.sent()];
                                }
                            }); }); }))];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IndexedDbRr.prototype.persistItem = function (objectStore, item, key, cursor) {
        return __awaiter(this, void 0, void 0, function () {
            var oldItem, mergedRefs_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!cursor) return [3, 2];
                        return [4, objectStore.openCursor(key)];
                    case 1:
                        cursor = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!cursor) return [3, 4];
                        oldItem = cursor.value;
                        if ('_refs' in item && '_refs' in oldItem) {
                            mergedRefs_1 = oldItem._refs;
                            Object.keys(item._refs).forEach(function (type) {
                                if (type in mergedRefs_1) {
                                    var typeRefs_1 = mergedRefs_1[type];
                                    item._refs[type].forEach(function (ref) { return typeRefs_1.add(ref); });
                                }
                                else {
                                    mergedRefs_1[type] = item._refs[type];
                                }
                            });
                            item._refs = mergedRefs_1;
                        }
                        else if ('_refs' in oldItem) {
                            item._refs = oldItem._refs;
                        }
                        return [4, cursor.update(item)];
                    case 3:
                        _a.sent();
                        return [3, 6];
                    case 4: return [4, objectStore.add(item)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    IndexedDbRr.prototype.persistRemoveNested = function (key, type, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var cursor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.write(type).objectStore(type).openCursor(key, 'nextunique')];
                    case 1:
                        cursor = _a.sent();
                        if (!(cursor && '_refs' in cursor.value && parent.type in cursor.value._refs)) return [3, 3];
                        cursor.value._refs[parent.type].delete(parent.key);
                        return [4, cursor.update(cursor.value)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    IndexedDbRr.prototype.removeTarget = function (parent, targetKeys, target) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var keys, config_1, transaction, objectStore_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(target.cascadeRemoval === true)) return [3, 2];
                        return [4, this.remove(targetKeys, target.type)];
                    case 1:
                        _a.sent();
                        return [3, 5];
                    case 2:
                        keys = Array.isArray(targetKeys) ? targetKeys : [targetKeys];
                        config_1 = this.schema.getConfig(target.type);
                        transaction = this.write(target.type);
                        objectStore_1 = transaction.objectStore(target.type);
                        return [4, Promise.all(keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                                var cursor, targetItem, typeRefs;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, objectStore_1.openCursor(key)];
                                        case 1:
                                            cursor = _a.sent();
                                            if (!cursor) return [3, 3];
                                            targetItem = cursor.value;
                                            if (!(key === targetItem[config_1.key])) return [3, 3];
                                            typeRefs = targetItem._refs[parent.type];
                                            typeRefs.delete(parent.key);
                                            if (typeRefs.size === 0) {
                                                delete targetItem._refs[parent.type];
                                                if (Object.keys(targetItem._refs).length === 0) {
                                                    delete targetItem._refs;
                                                }
                                            }
                                            return [4, cursor.update(targetItem)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        return [4, transaction.complete];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    return IndexedDbRr;
}(indexed_db_1.IndexedDb));
exports.IndexedDbRr = IndexedDbRr;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map