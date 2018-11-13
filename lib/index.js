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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
var depth_1 = __webpack_require__(17);
exports.Depth = depth_1.Depth;
var log_mode_enum_1 = __webpack_require__(18);
exports.LogMode = log_mode_enum_1.LogMode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var StoreLogBuilder = (function () {
    function StoreLogBuilder(mode, eventSelection, keys) {
        this.mode = mode;
        this.eventSelection = eventSelection;
        this.keys = Array.isArray(keys) ? keys : [];
    }
    StoreLogBuilder.prototype.setMode = function (value) {
        this.mode = value;
        return this;
    };
    StoreLogBuilder.prototype.setEventSelection = function (value) {
        this.eventSelection = value;
        return this;
    };
    StoreLogBuilder.prototype.addKey = function (value) {
        if (Array.isArray(value)) {
            (_a = this.keys).push.apply(_a, value);
        }
        else {
            this.keys.push(value);
        }
        return this;
        var _a;
    };
    StoreLogBuilder.prototype.build = function () {
        var config = { mode: this.mode || model_1.LogMode.Disabled };
        if (this.eventSelection) {
            config.eventSelection = this.eventSelection;
        }
        if (this.keys && this.keys.length > 0) {
            config.keys = this.keys;
        }
        return config;
    };
    return StoreLogBuilder;
}());
exports.StoreLogBuilder = StoreLogBuilder;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_clone_1 = __webpack_require__(14);
exports.deepClone = deep_clone_1.deepClone;
var object_1 = __webpack_require__(0);
exports.isNull = object_1.isNull;
exports.isObject = object_1.isObject;
var queue_1 = __webpack_require__(15);
exports.Queue = queue_1.Queue;
var refs_1 = __webpack_require__(16);
exports.RefsUtility = refs_1.RefsUtility;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(3);
var store_log_builder_1 = __webpack_require__(2);
var schema_log_config_1 = __webpack_require__(5);
var Schema = (function () {
    function Schema(userConfig) {
        var _this = this;
        this.config = {};
        this.userConfig = utility_1.deepClone(userConfig);
        this.initDefaults();
        var keys = Object.keys(this.userConfig);
        keys.filter(function (type) { return !type.startsWith('_'); })
            .forEach(function (type) { return _this.config[type] = _this.expandSchemaForType(type); });
        this.logConfig = new schema_log_config_1.SchemaLogConfig(this);
    }
    Schema.prototype.getLogConfig = function () {
        return this.logConfig;
    };
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
                var defaults = this.userConfig[Schema.TYPE_DEFAULTS] || {};
                if (defaults.targets) {
                    defaults.targets = this.expandTargets(defaults.targets);
                }
                if (!defaults.logging) {
                    defaults.logging = new store_log_builder_1.StoreLogBuilder().build();
                }
                return utility_1.deepClone(defaults);
            }
            else if (typeSchema === true) {
                return Object.assign(this.expandSchemaForType(Schema.TYPE_DEFAULTS), { type: type });
            }
            else if (typeof typeSchema === 'string') {
                return Object.assign(utility_1.deepClone(this.expandSchemaForType(typeSchema)), { type: type });
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
        var autoKey = utility_1.isNull(typeConfig.autoKey || null) ? parent.autoKey : typeConfig.autoKey;
        var targets = Object.assign(parent.targets, typeConfig.targets);
        var logging = Object.assign(parent.logging, typeConfig.logging);
        return {
            type: type,
            key: typeConfig.key || parent.key,
            autoKey: autoKey || false,
            targets: this.expandTargets(targets),
            logging: logging
        };
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var object_1 = __webpack_require__(0);
var store_log_builder_1 = __webpack_require__(2);
var SchemaLogConfig = (function () {
    function SchemaLogConfig(_schema) {
        this._schema = _schema;
    }
    SchemaLogConfig.prototype.getConfig = function (type, orDefault) {
        var config = orDefault || new store_log_builder_1.StoreLogBuilder().build();
        if (this._schema.hasType(type)) {
            config = Object.assign(config, this._schema.getConfig(type).logging);
        }
        return config;
    };
    SchemaLogConfig.prototype.getLogMode = function (type, orDefault) {
        if (orDefault === void 0) { orDefault = model_1.LogMode.Disabled; }
        return this._schema.hasType(type)
            ? this._schema.getConfig(type).logging.mode
            : orDefault;
    };
    SchemaLogConfig.prototype.getEventTypes = function (type, orDefault) {
        var types;
        if (this._schema.hasType(type)) {
            var eventSelection = this._schema.getConfig(type).logging.eventSelection;
            types = Array.isArray(eventSelection) ? eventSelection : [eventSelection];
        }
        return types && types.length > 0 ? types : orDefault;
    };
    SchemaLogConfig.prototype.getKeys = function (type, orDefault) {
        var keys;
        if (this._schema.hasType(type)) {
            keys = this._schema.getConfig(type).logging.keys;
        }
        return keys && keys.length > 0 ? keys : orDefault;
    };
    SchemaLogConfig.prototype.isLoggingEnabled = function (type, eventType, key) {
        var isEnabled = this._schema.hasType(type);
        if (isEnabled) {
            var logConfig = this._schema.getConfig(type).logging;
            isEnabled = logConfig.mode !== model_1.LogMode.Disabled;
            if (isEnabled && eventType && logConfig.eventSelection) {
                isEnabled = Array.isArray(logConfig.eventSelection)
                    ? logConfig.eventSelection.length === 0 || logConfig.eventSelection.indexOf(eventType) >= 0
                    : logConfig.eventSelection === eventType;
            }
            if (isEnabled && !object_1.isNull(key) && logConfig.keys && logConfig.keys.length > 0) {
                isEnabled = logConfig.keys.indexOf(key) >= 0;
            }
        }
        return isEnabled;
    };
    return SchemaLogConfig;
}());
exports.SchemaLogConfig = SchemaLogConfig;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(0);
var StoreBuilder = (function () {
    function StoreBuilder(parent, key, autoKey, targets, logging) {
        this.parent = parent;
        this.key = key;
        this.autoKey = autoKey;
        this.targets = targets;
        this.logging = logging;
    }
    StoreBuilder.prototype.setKey = function (key) {
        this.key = key;
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
    StoreBuilder.prototype.setLogging = function (logging) {
        this.logging = logging;
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
                if (this.logging) {
                    result.logging = this.logging;
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
            return !object_1.isNull(this.key) || !object_1.isNull(this.autoKey) || this.hasTargets || !object_1.isNull(this.logging);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(19));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invalid_type_error_1 = __webpack_require__(10);
exports.InvalidTypeError = invalid_type_error_1.InvalidTypeError;
var missing_key_error_1 = __webpack_require__(11);
exports.MissingKeyError = missing_key_error_1.MissingKeyError;
var not_found_error_1 = __webpack_require__(12);
exports.NotFoundError = not_found_error_1.NotFoundError;
var type_mismatch_error_1 = __webpack_require__(13);
exports.TypeMismatchError = type_mismatch_error_1.TypeMismatchError;


/***/ }),
/* 10 */
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
var InvalidTypeError = (function (_super) {
    __extends(InvalidTypeError, _super);
    function InvalidTypeError(type) {
        return _super.call(this, "Type \"" + type + "\" is not configured") || this;
    }
    return InvalidTypeError;
}(Error));
exports.InvalidTypeError = InvalidTypeError;


/***/ }),
/* 11 */
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
var MissingKeyError = (function (_super) {
    __extends(MissingKeyError, _super);
    function MissingKeyError(type, keyField) {
        return _super.call(this, "Key " + keyField + " is missing in object of type " + type) || this;
    }
    return MissingKeyError;
}(Error));
exports.MissingKeyError = MissingKeyError;


/***/ }),
/* 12 */
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
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(type, key) {
        return _super.call(this, "Could not find \"" + type + "\" with key \"" + key + "\"") || this;
    }
    return NotFoundError;
}(Error));
exports.NotFoundError = NotFoundError;


/***/ }),
/* 13 */
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
var TypeMismatchError = (function (_super) {
    __extends(TypeMismatchError, _super);
    function TypeMismatchError(parentType, parentField, expectedArray) {
        return _super.call(this, "\"" + parentType + "." + parentField + "\" is expected to be an " + (expectedArray
            ? 'array'
            : 'object') + " but got " + (expectedArray ? 'object' : 'array') + ".") || this;
    }
    return TypeMismatchError;
}(Error));
exports.TypeMismatchError = TypeMismatchError;


/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RefsUtility = (function () {
    function RefsUtility() {
    }
    RefsUtility.has = function (item, type) {
        return '_refs' in item && type in item._refs && item._refs[type].size > 0;
    };
    RefsUtility.hasKey = function (item, type, key) {
        return this.has(item, type) && item._refs[type].has(key);
    };
    RefsUtility.iterator = function (item, type) {
        return this.has(item, type) ? item._refs[type].values() : {
            next: function () {
                return { value: null, done: true };
            }
        };
    };
    RefsUtility.getAll = function (item, type) {
        return this.has(item, type) ? Array.from(item._refs[type]) : [];
    };
    RefsUtility.first = function (item, type) {
        return this.has(item, type) ? (item._refs[type].values().next().value) : null;
    };
    return RefsUtility;
}());
exports.RefsUtility = RefsUtility;


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogMode;
(function (LogMode) {
    LogMode["Disabled"] = "disabled";
    LogMode["Simple"] = "simple";
    LogMode["Full"] = "full";
})(LogMode = exports.LogMode || (exports.LogMode = {}));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(4);
exports.Schema = schema_1.Schema;
var schema_log_config_1 = __webpack_require__(5);
exports.SchemaLogConfig = schema_log_config_1.SchemaLogConfig;
__export(__webpack_require__(20));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_builder_1 = __webpack_require__(21);
exports.SchemaBuilder = schema_builder_1.SchemaBuilder;
var store_builder_1 = __webpack_require__(6);
exports.StoreBuilder = store_builder_1.StoreBuilder;
var store_log_builder_1 = __webpack_require__(2);
exports.StoreLogBuilder = store_log_builder_1.StoreLogBuilder;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(4);
var store_builder_1 = __webpack_require__(6);
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
var BaseOptionsBuilder = (function () {
    function BaseOptionsBuilder() {
    }
    BaseOptionsBuilder.prototype.autoCloseContext = function (value) {
        this._autoCloseContext = value;
        return this;
    };
    BaseOptionsBuilder.prototype.buildBase = function () {
        return { autoCloseContext: this._autoCloseContext };
    };
    BaseOptionsBuilder.prototype.assignBase = function (options) {
        return Object.assign(options, this.buildBase());
    };
    return BaseOptionsBuilder;
}());
exports.BaseOptionsBuilder = BaseOptionsBuilder;


/***/ }),
/* 2 */
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
var EmptyInputError = (function (_super) {
    __extends(EmptyInputError, _super);
    function EmptyInputError(commandType) {
        return _super.call(this, "Cannot run a " + commandType + "-command with a null-value") || this;
    }
    return EmptyInputError;
}(Error));
exports.EmptyInputError = EmptyInputError;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseEvent = (function () {
    function BaseEvent(eventType, dataStoreType, item, itemKey) {
        this.eventType = eventType;
        this.dataStoreType = dataStoreType;
        this.item = item;
        this.itemKey = itemKey;
        this.time = new Date();
    }
    return BaseEvent;
}());
exports.BaseEvent = BaseEvent;


/***/ }),
/* 4 */
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
var core_1 = __webpack_require__(0);
var logger_1 = __webpack_require__(24);
var log_entry_1 = __webpack_require__(26);
var idb_clear_logs_command_1 = __webpack_require__(27);
var idb_log_query_runner_1 = __webpack_require__(28);
var IdbLogger = (function (_super) {
    __extends(IdbLogger, _super);
    function IdbLogger(idbContext) {
        return _super.call(this, idbContext) || this;
    }
    IdbLogger.prototype.onUpgradeNeeded = function (upgradeDb) {
        if (!upgradeDb.objectStoreNames.contains(IdbLogger.OBJECT_STORE)) {
            var logStore = upgradeDb.createObjectStore(IdbLogger.OBJECT_STORE, { keyPath: 'id', autoIncrement: true });
            logStore.createIndex(IdbLogger.IDX_TIME, 'time');
            logStore.createIndex(IdbLogger.IDX_ACTION, 'action');
            logStore.createIndex(IdbLogger.IDX_TYPE, 'type');
            logStore.createIndex(IdbLogger.IDX_KEY, 'key');
        }
    };
    IdbLogger.prototype.queryRunner = function (config) {
        return new idb_log_query_runner_1.IdbLogQueryRunner(this._context, config);
    };
    IdbLogger.prototype.ndbOnDataChanged = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction, logStore, includeData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggingEnabled(event.dataStoreType, event)) return [3, 3];
                        return [4, this._context.write(IdbLogger.OBJECT_STORE)];
                    case 1:
                        transaction = _a.sent();
                        logStore = transaction.objectStore(IdbLogger.OBJECT_STORE);
                        includeData = this.getLogMode(event.dataStoreType) === core_1.LogMode.Full;
                        return [4, logStore.put(new log_entry_1.LogEntry(event, includeData))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    IdbLogger.prototype.clear = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = new idb_clear_logs_command_1.IdbClearLogsCommand(this._context);
                        return [4, cmd.execute(options)];
                    case 1:
                        success = _a.sent();
                        this.autoCloseContext(options);
                        return [2, success];
                }
            });
        });
    };
    IdbLogger.prototype.autoCloseContext = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options && options.autoCloseContext)) return [3, 2];
                        return [4, this._context.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    IdbLogger.OBJECT_STORE = '_logs';
    IdbLogger.IDX_TIME = 'idx_time';
    IdbLogger.IDX_ACTION = 'idx_action';
    IdbLogger.IDX_TYPE = 'idx_type';
    IdbLogger.IDX_KEY = 'idx_key';
    return IdbLogger;
}(logger_1.Logger));
exports.IdbLogger = IdbLogger;


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
var base_command_1 = __webpack_require__(18);
var IdbBaseCommand = (function (_super) {
    __extends(IdbBaseCommand, _super);
    function IdbBaseCommand(context, type, typeIsOptional) {
        if (typeIsOptional === void 0) { typeIsOptional = false; }
        return _super.call(this, context, type, typeIsOptional) || this;
    }
    return IdbBaseCommand;
}(base_command_1.BaseCommand));
exports.IdbBaseCommand = IdbBaseCommand;


/***/ }),
/* 6 */
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
var core_1 = __webpack_require__(0);
var created_event_1 = __webpack_require__(10);
var updated_event_1 = __webpack_require__(20);
var refs_write_1 = __webpack_require__(21);
var idb_base_command_1 = __webpack_require__(5);
var IdbBaseWriteCommand = (function (_super) {
    __extends(IdbBaseWriteCommand, _super);
    function IdbBaseWriteCommand(context, type) {
        return _super.call(this, context, type) || this;
    }
    IdbBaseWriteCommand.prototype.write = function (data, parent, isPartialUpdate) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var normalizedData, involvedTypes, transaction, newItemKeys_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._context.normalizer().apply(this._type, data)];
                    case 1:
                        normalizedData = _a.sent();
                        involvedTypes = this.getTypes(normalizedData).concat(this.getTypes(normalizedData));
                        if (parent) {
                            if (Array.isArray(parent)) {
                                parent.forEach(function (p) { return involvedTypes.push(p.type); });
                            }
                            else {
                                involvedTypes.push(parent.type);
                            }
                        }
                        return [4, this._context.write(involvedTypes)];
                    case 2:
                        transaction = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, , 8]);
                        newItemKeys_1 = [];
                        return [4, Promise.all(Object.keys(normalizedData).map(function (type) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var config, objectStore;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            config = this.schema.getConfig(type);
                                            objectStore = transaction.objectStore(type);
                                            return [4, Promise.all(normalizedData[type].map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                    var key, _a, _b, cursor, mergedItem;
                                                    return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                if (parent) {
                                                                    refs_write_1.RefsWriteUtility.add(item, parent);
                                                                }
                                                                key = this.getKey(item, config, true);
                                                                if (!core_1.isNull(key)) return [3, 3];
                                                                return [4, objectStore.put(item)];
                                                            case 1:
                                                                _c.sent();
                                                                _a = item;
                                                                _b = config.key;
                                                                return [4, this.getLatestKey(objectStore)];
                                                            case 2:
                                                                _a[_b] = key = _c.sent();
                                                                this._eventQueue.enqueue(new created_event_1.CreatedEvent(type, item, key, type === this._type ? parent : null));
                                                                return [3, 8];
                                                            case 3: return [4, objectStore.openCursor(key)];
                                                            case 4:
                                                                cursor = _c.sent();
                                                                if (!(cursor && cursor.value)) return [3, 6];
                                                                return [4, this.updateCursor(cursor, item, isPartialUpdate)];
                                                            case 5:
                                                                mergedItem = _c.sent();
                                                                this._eventQueue.enqueue(new updated_event_1.UpdatedEvent(type, mergedItem, key));
                                                                return [3, 8];
                                                            case 6: return [4, objectStore.put(item)];
                                                            case 7:
                                                                _c.sent();
                                                                this._eventQueue.enqueue(new created_event_1.CreatedEvent(type, item, key, type === this._type ? parent : null));
                                                                _c.label = 8;
                                                            case 8:
                                                                if (type === this._type) {
                                                                    newItemKeys_1.push(key);
                                                                }
                                                                return [2];
                                                        }
                                                    });
                                                }); }))];
                                        case 1:
                                            _a.sent();
                                            return [2];
                                    }
                                });
                            }); }))];
                    case 4:
                        _a.sent();
                        if (!parent) return [3, 6];
                        return [4, this.addToParents(transaction, parent, newItemKeys_1)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3, 8];
                    case 7:
                        e_1 = _a.sent();
                        console.error(e_1);
                        try {
                            transaction.abort();
                        }
                        catch (e2) {
                            console.error(e2);
                        }
                        return [2, false];
                    case 8:
                        this.onSuccess();
                        return [2, true];
                }
            });
        });
    };
    IdbBaseWriteCommand.prototype.updateCursor = function (cursor, newItem, isPartialUpdate) {
        return __awaiter(this, void 0, void 0, function () {
            var mergedItem, mergedRefs_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isPartialUpdate) {
                            mergedItem = cursor.value;
                            Object.keys(newItem)
                                .filter(function (field) { return field !== '_refs'; })
                                .forEach(function (field) { return mergedItem[field] = newItem[field]; });
                        }
                        else {
                            mergedItem = newItem;
                        }
                        if ((cursor.value._refs && Object.keys(cursor.value._refs).length > 0) ||
                            (newItem._refs && Object.keys(newItem._refs).length > 0)) {
                            mergedRefs_1 = cursor.value._refs || {};
                            if (newItem._refs) {
                                Object.keys(newItem._refs)
                                    .forEach(function (refType) {
                                    if (refType in mergedRefs_1) {
                                        var it_1 = newItem._refs[refType].values();
                                        var current = it_1.next();
                                        while (!current.done) {
                                            mergedRefs_1[refType].add(current.value);
                                            current = it_1.next();
                                        }
                                    }
                                    else {
                                        mergedRefs_1[refType] = newItem._refs[refType];
                                    }
                                });
                            }
                            Object.assign(mergedItem, { _refs: mergedRefs_1 });
                        }
                        return [4, cursor.update(mergedItem)];
                    case 1:
                        _a.sent();
                        return [2, mergedItem];
                }
            });
        });
    };
    IdbBaseWriteCommand.prototype.addToParents = function (transaction, parent, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (keys && keys.length === 0) {
                            return [2];
                        }
                        if (!Array.isArray(parent)) return [3, 2];
                        return [4, Promise.all(parent.map(function (p) { return _this.addToParent(transaction, p, keys); }))];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, this.addToParent(transaction, parent, keys)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    IdbBaseWriteCommand.prototype.addToParent = function (transaction, parent, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var parentItem, parentTargets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, transaction.objectStore(parent.type).get(parent.key)];
                    case 1:
                        parentItem = _a.sent();
                        if (core_1.isNull(parentItem)) {
                            throw new core_1.NotFoundError(parent.type, parent.key);
                        }
                        parentTargets = this.schema.getConfig(parent.type).targets;
                        if (!parentTargets || !(parent.field in parentTargets) || parentTargets[parent.field].type !== this._type) {
                            throw new Error(parent.type + "." + parent.field + " is not configured as target for " + this._type);
                        }
                        return [4, this.addKeysToParentsHelper(transaction, parent, parentItem, keys)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    IdbBaseWriteCommand.prototype.addKeysToParentsHelper = function (transaction, parent, parentItem, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var parentChanged, fieldValue, isArrayExpected, newChildKey, oldChildCursor, oldChild;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parentChanged = false;
                        fieldValue = parentItem[parent.field];
                        isArrayExpected = this.schema.getConfig(parent.type).targets[parent.field].isArray;
                        if (!isArrayExpected) return [3, 1];
                        if (core_1.isNull(fieldValue)) {
                            parentItem[parent.field] = keys;
                            parentChanged = true;
                        }
                        else if (Array.isArray(fieldValue)) {
                            keys.forEach(function (itemKey) {
                                var index = fieldValue.findIndex(function (key) { return key === itemKey; });
                                if (index < 0) {
                                    fieldValue.push(itemKey);
                                    parentChanged = true;
                                }
                            });
                        }
                        else {
                            throw new core_1.TypeMismatchError(parent.type, parent.field, true);
                        }
                        return [3, 5];
                    case 1:
                        if (keys.length > 1) {
                            throw new Error('Cannot add multiple children to a non-array parent field');
                        }
                        newChildKey = keys.shift();
                        if (!(fieldValue !== newChildKey)) return [3, 5];
                        if (!!core_1.isNull(fieldValue)) return [3, 4];
                        if (Array.isArray(fieldValue)) {
                            throw new core_1.TypeMismatchError(parent.type, parent.field, false);
                        }
                        return [4, transaction.objectStore(this._type).openCursor(fieldValue)];
                    case 2:
                        oldChildCursor = _a.sent();
                        if (!oldChildCursor) return [3, 4];
                        oldChild = oldChildCursor.value;
                        if (!('_refs' in oldChild && parent.type in oldChild._refs)) return [3, 4];
                        oldChild._refs[parent.type].delete(parent.key);
                        return [4, oldChildCursor.update(oldChild)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        parentItem[parent.field] = newChildKey;
                        parentChanged = true;
                        _a.label = 5;
                    case 5:
                        if (!parentChanged) return [3, 7];
                        return [4, transaction.objectStore(parent.type).put(parentItem)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    IdbBaseWriteCommand.prototype.getLatestKey = function (objectStore) {
        return __awaiter(this, void 0, void 0, function () {
            var cursor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, objectStore.openCursor(null, 'prevunique')];
                    case 1:
                        cursor = _a.sent();
                        return [2, cursor ? cursor.key : null];
                }
            });
        });
    };
    return IdbBaseWriteCommand;
}(idb_base_command_1.IdbBaseCommand));
exports.IdbBaseWriteCommand = IdbBaseWriteCommand;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parent = (function () {
    function Parent(type, key, field) {
        this.type = type;
        this.key = key;
        this.field = field;
    }
    Parent.prototype.equals = function (other) {
        return other && this.key === other.key && this.field === other.field && this.type === other.type;
    };
    return Parent;
}());
exports.Parent = Parent;


/***/ }),
/* 8 */
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
var BaseQuery = (function () {
    function BaseQuery(_context, _autoCloseContext, _type) {
        this._context = _context;
        this._autoCloseContext = _autoCloseContext;
        this._type = _type;
        if (!this.schema.hasType(_type)) {
            throw new core_1.InvalidTypeError(_type);
        }
    }
    BaseQuery.prototype.invalidateCachedResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._cachedResult = null;
                return [2];
            });
        });
    };
    BaseQuery.prototype.getQueryConfig = function () {
        return { type: this._type };
    };
    Object.defineProperty(BaseQuery.prototype, "schema", {
        get: function () {
            return this._context.schema();
        },
        enumerable: true,
        configurable: true
    });
    BaseQuery.prototype.autoClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._autoCloseContext) return [3, 2];
                        return [4, this._context.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    return BaseQuery;
}());
exports.BaseQuery = BaseQuery;


/***/ }),
/* 9 */
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
var core_1 = __webpack_require__(0);
var idb_base_write_command_1 = __webpack_require__(6);
var IdbBaseUpdateCommand = (function (_super) {
    __extends(IdbBaseUpdateCommand, _super);
    function IdbBaseUpdateCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdbBaseUpdateCommand.prototype.executeHelper = function (data, isPartialUpdate) {
        if (isPartialUpdate === void 0) { isPartialUpdate = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var objectStore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._context.read(this._type)];
                    case 1:
                        objectStore = (_a.sent()).objectStore(this._type);
                        if (!Array.isArray(data)) return [3, 3];
                        return [4, Promise.all(data.map(function (item) { return _this.checkExistence(objectStore, item); }))];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3: return [4, this.checkExistence(objectStore, data)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2, _super.prototype.write.call(this, data, null, isPartialUpdate)];
                }
            });
        });
    };
    IdbBaseUpdateCommand.prototype.checkExistence = function (objectStore, item) {
        return __awaiter(this, void 0, void 0, function () {
            var key, existingItem;
            return __generator(this, function (_a) {
                key = this.getKey(item);
                existingItem = objectStore.get(key);
                if (core_1.isNull(existingItem)) {
                    throw new core_1.NotFoundError(this._type, key);
                }
                return [2];
            });
        });
    };
    return IdbBaseUpdateCommand;
}(idb_base_write_command_1.IdbBaseWriteCommand));
exports.IdbBaseUpdateCommand = IdbBaseUpdateCommand;


/***/ }),
/* 10 */
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
var base_event_1 = __webpack_require__(3);
var CreatedEvent = (function (_super) {
    __extends(CreatedEvent, _super);
    function CreatedEvent(type, item, itemKey, parent) {
        var _this = _super.call(this, 'created', type, item, itemKey) || this;
        _this.parent = parent;
        return _this;
    }
    return CreatedEvent;
}(base_event_1.BaseEvent));
exports.CreatedEvent = CreatedEvent;


/***/ }),
/* 11 */
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
var base_event_1 = __webpack_require__(3);
var RemovedEvent = (function (_super) {
    __extends(RemovedEvent, _super);
    function RemovedEvent(type, item, itemKey, parent) {
        var _this = _super.call(this, 'removed', type, item, itemKey) || this;
        _this.parent = parent;
        return _this;
    }
    return RemovedEvent;
}(base_event_1.BaseEvent));
exports.RemovedEvent = RemovedEvent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var child_not_found_error_1 = __webpack_require__(29);
exports.ChildNotFoundError = child_not_found_error_1.ChildNotFoundError;
var empty_input_error_1 = __webpack_require__(2);
exports.EmptyInputError = empty_input_error_1.EmptyInputError;
var empty_result_error_1 = __webpack_require__(30);
exports.EmptyResultError = empty_result_error_1.EmptyResultError;
var invalid_query_config_error_1 = __webpack_require__(31);
exports.InvalidQueryConfigError = invalid_query_config_error_1.InvalidQueryConfigError;
var invalid_query_runner_status_error_1 = __webpack_require__(66);
exports.InvalidQueryRunnerStatusError = invalid_query_runner_status_error_1.InvalidQueryRunnerStatusError;
var listener_registered_error_1 = __webpack_require__(32);
exports.ListenerRegisteredError = listener_registered_error_1.ListenerRegisteredError;
var order_by_invalid_type_error_1 = __webpack_require__(33);
exports.OrderByInvalidTypeError = order_by_invalid_type_error_1.OrderByInvalidTypeError;
var order_by_type_mismatch_error_1 = __webpack_require__(34);
exports.OrderByTypeMismatchError = order_by_type_mismatch_error_1.OrderByTypeMismatchError;
var query_runner_registered_error_1 = __webpack_require__(67);
exports.InvalidQueryRunnerRegistration = query_runner_registered_error_1.InvalidQueryRunnerRegistration;
var ref_not_found_error_1 = __webpack_require__(35);
exports.RefNotFoundError = ref_not_found_error_1.RefNotFoundError;


/***/ }),
/* 13 */
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
var index_1 = __webpack_require__(12);
var IdbBaseQueryRunner = (function () {
    function IdbBaseQueryRunner(_context, _config) {
        this._context = _context;
        this._config = _config;
        this._isRunning = false;
        this.fetchCallback = this.fetchCallback.bind(this);
        this._schema = this._context.schema();
    }
    IdbBaseQueryRunner.prototype.start = function () {
        if (this._isRunning) {
            throw new index_1.InvalidQueryRunnerStatusError('Query is already running');
        }
        this._isRunning = true;
        this._denormalizer = this._context.denormalizerBuilder()
            .fetchCallback(this.fetchCallback)
            .build();
    };
    IdbBaseQueryRunner.prototype.stop = function () {
        this._isRunning = false;
    };
    IdbBaseQueryRunner.prototype.fetchCallback = function (type, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var objectStore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._context.read(type)];
                    case 1:
                        objectStore = (_a.sent()).objectStore(type);
                        return [4, (Array.isArray(keys)
                                ? Promise.all(keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, objectStore.get(key)];
                                        case 1: return [2, _a.sent()];
                                    }
                                }); }); }))
                                : objectStore.get(keys))];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    return IdbBaseQueryRunner;
}());
exports.IdbBaseQueryRunner = IdbBaseQueryRunner;


/***/ }),
/* 14 */
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
var core_1 = __webpack_require__(0);
var index_1 = __webpack_require__(53);
var idb_base_query_runner_1 = __webpack_require__(13);
var IdbBaseDocumentQueryRunner = (function (_super) {
    __extends(IdbBaseDocumentQueryRunner, _super);
    function IdbBaseDocumentQueryRunner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdbBaseDocumentQueryRunner.prototype.findAllByKeys = function (keys, type) {
        if (type === void 0) { type = this._config.type; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, objectStore, items, keyIndex, resultIndex, key, item, denormalizedData, isValid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this._transaction) return [3, 2];
                        _a = this;
                        return [4, this._context.read(type)];
                    case 1:
                        _a._transaction = _b.sent();
                        _b.label = 2;
                    case 2:
                        objectStore = this._transaction.objectStore(type);
                        items = [];
                        keyIndex = 0, resultIndex = 0;
                        _b.label = 3;
                    case 3:
                        if (!(keyIndex < keys.length)) return [3, 14];
                        key = keys[keyIndex];
                        if (core_1.isNull(key)) {
                            keyIndex++;
                            return [3, 3];
                        }
                        return [4, objectStore.get(key)];
                    case 4:
                        item = _b.sent();
                        if (core_1.isNull(item)) {
                            keyIndex++;
                            return [3, 3];
                        }
                        denormalizedData = void 0, isValid = true;
                        if (!this._config.filter) return [3, 9];
                        if (!this._config.filter.requiresDenormalization) return [3, 7];
                        return [4, this._denormalizer.apply(type, item, this._config.depth)];
                    case 5:
                        denormalizedData = _b.sent();
                        return [4, this._config.filter.test(denormalizedData)];
                    case 6:
                        isValid = _b.sent();
                        return [3, 9];
                    case 7: return [4, this._config.filter.test(item)];
                    case 8:
                        isValid = _b.sent();
                        _b.label = 9;
                    case 9:
                        if (!isValid) return [3, 13];
                        if (!(resultIndex >= this._config.offset && items.length < this._config.limit)) return [3, 12];
                        if (!!denormalizedData) return [3, 11];
                        return [4, this._denormalizer.apply(type, item, this._config.depth)];
                    case 10:
                        denormalizedData = _b.sent();
                        _b.label = 11;
                    case 11:
                        items.push(denormalizedData);
                        _b.label = 12;
                    case 12:
                        resultIndex++;
                        _b.label = 13;
                    case 13:
                        keyIndex++;
                        return [3, 3];
                    case 14: return [2, this.createListResult(items, resultIndex)];
                }
            });
        });
    };
    IdbBaseDocumentQueryRunner.prototype.findByKey = function (type, key) {
        if (type === void 0) { type = this._config.type; }
        if (key === void 0) { key = this._config.singleItem; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, item, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this._transaction) return [3, 2];
                        _a = this;
                        return [4, this._context.read(type)];
                    case 1:
                        _a._transaction = _c.sent();
                        _c.label = 2;
                    case 2: return [4, this._transaction.objectStore(type).get(key)];
                    case 3:
                        item = _c.sent();
                        if (!item) return [3, 5];
                        return [4, this._denormalizer.apply(type, item, this._config.depth)];
                    case 4:
                        _b = _c.sent();
                        return [3, 6];
                    case 5:
                        _b = null;
                        _c.label = 6;
                    case 6: return [2, _b];
                }
            });
        });
    };
    IdbBaseDocumentQueryRunner.prototype.findInParent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, parent, keys, key, childConfig, _b, parentObj, fieldValue_1, fieldIsArray, filteredChildKeys;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this._config, parent = _a.parent, keys = _a.keys, key = _a.singleItem;
                        childConfig = this._schema.getTargetConfig(parent.type, parent.field);
                        _b = this;
                        return [4, this._context.read([parent.type, childConfig.type])];
                    case 1:
                        _b._transaction = _c.sent();
                        return [4, this._transaction.objectStore(parent.type).get(parent.key)];
                    case 2:
                        parentObj = _c.sent();
                        if (!parentObj) {
                            throw new core_1.NotFoundError(parent.type, parent.key);
                        }
                        if (!(parent.field in parentObj)) return [3, 12];
                        fieldValue_1 = parentObj[parent.field];
                        fieldIsArray = Array.isArray(fieldValue_1);
                        if (!core_1.isNull(key)) return [3, 10];
                        if (!keys) return [3, 7];
                        if (!fieldIsArray) return [3, 4];
                        filteredChildKeys = fieldValue_1.filter(function (k) { return keys.findIndex(function (filterKey) { return filterKey === k; }) >= 0; });
                        return [4, this.findAllByKeys(filteredChildKeys, childConfig.type)];
                    case 3: return [2, _c.sent()];
                    case 4:
                        if (!(keys.findIndex(function (filterKey) { return filterKey === fieldValue_1; }) >= 0)) return [3, 6];
                        return [4, this.findByKey(childConfig.type, fieldValue_1)];
                    case 5: return [2, _c.sent()];
                    case 6: return [3, 9];
                    case 7: return [4, fieldIsArray];
                    case 8: return [2, (_c.sent())
                            ? this.findAllByKeys(fieldValue_1, childConfig.type)
                            : this.findByKey(childConfig.type, key)];
                    case 9: return [3, 12];
                    case 10:
                        if (!((!fieldIsArray && fieldValue_1 === key) || (fieldIsArray && fieldValue_1.indexOf(function (k) { return k === key; }) >= 0))) return [3, 12];
                        return [4, this.findByKey(childConfig.type, key)];
                    case 11: return [2, _c.sent()];
                    case 12: return [2, null];
                }
            });
        });
    };
    IdbBaseDocumentQueryRunner.prototype.createListResult = function (items, total) {
        return new index_1.ListResultBuilder()
            .items(items)
            .total(total)
            .offset(this._config.offset)
            .limit(this._config.limit)
            .build();
    };
    return IdbBaseDocumentQueryRunner;
}(idb_base_query_runner_1.IdbBaseQueryRunner));
exports.IdbBaseDocumentQueryRunner = IdbBaseDocumentQueryRunner;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ListResult = (function () {
    function ListResult(_items, _total, _offset, _limit) {
        this._items = _items;
        this._total = _total;
        this._offset = _offset;
        this._limit = _limit;
        if (!this._items) {
            this._items = [];
        }
        if (core_1.isNull(this._total)) {
            this._total = this._items.length;
        }
        if (core_1.isNull(this._offset)) {
            this._offset = ListResult.DEFAULT_OFFSET;
        }
        if (core_1.isNull(this._limit)) {
            this._limit = ListResult.DEFAULT_LIMIT;
        }
    }
    Object.defineProperty(ListResult.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "first", {
        get: function () {
            return this.isEmpty ? null : this._items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "isEmpty", {
        get: function () {
            return !this.hasItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "hasItems", {
        get: function () {
            return this._total > 0 && this._offset < this._total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListResult.prototype, "hasBoundaries", {
        get: function () {
            return this._offset > 0 || this._limit < Infinity;
        },
        enumerable: true,
        configurable: true
    });
    ListResult.prototype.push = function (item) {
        this._items.push(item);
        this._total++;
    };
    ListResult.prototype.unshift = function (item) {
        this._items.unshift(item);
        this._total++;
    };
    ListResult.prototype.remove = function (item) {
        var index = this._items.indexOf(item);
        if (index >= 0) {
            this._items.splice(index, 1);
            this._total--;
        }
    };
    ListResult.prototype.removeAt = function (index) {
        if (index >= 0 && index < this._items.length) {
            this._items.splice(index, 1);
            this._total--;
        }
    };
    ListResult.DEFAULT_OFFSET = 0;
    ListResult.DEFAULT_LIMIT = Infinity;
    return ListResult;
}());
exports.ListResult = ListResult;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Filter = (function () {
    function Filter(_predicate, requiresDenormalization) {
        if (requiresDenormalization === void 0) { requiresDenormalization = false; }
        this._predicate = _predicate;
        this.requiresDenormalization = requiresDenormalization;
    }
    Filter.prototype.test = function (item) {
        return this._predicate(item);
    };
    return Filter;
}());
exports.Filter = Filter;


/***/ }),
/* 17 */
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
var Reducer = (function () {
    function Reducer(query, mapper, _callback, _initialValue) {
        if (_initialValue === void 0) { _initialValue = null; }
        this.query = query;
        this.mapper = mapper;
        this._callback = _callback;
        this._initialValue = _initialValue;
    }
    Reducer.prototype.result = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var parentResult, parentResultLength, i, accumulated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._cachedResult && !noCache) {
                            return [2, this._cachedResult];
                        }
                        return [4, this.parent.result(noCache)];
                    case 1:
                        parentResult = (_a.sent()).items;
                        parentResultLength = parentResult.length;
                        i = 0, accumulated = this._initialValue;
                        _a.label = 2;
                    case 2:
                        if (!(i < parentResultLength)) return [3, 4];
                        return [4, this._callback(accumulated, parentResult[i], i, parentResult)];
                    case 3:
                        accumulated = _a.sent();
                        i++;
                        return [3, 2];
                    case 4: return [2, this._cachedResult = accumulated];
                }
            });
        });
    };
    Reducer.prototype.invalidateCachedResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.parent.invalidateCachedResult()];
                    case 1:
                        _a.sent();
                        this._cachedResult = null;
                        return [2];
                }
            });
        });
    };
    Object.defineProperty(Reducer.prototype, "parent", {
        get: function () {
            return this.mapper || this.query;
        },
        enumerable: true,
        configurable: true
    });
    Reducer.prototype.queryResult = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return this.query.result(noCache);
    };
    Reducer.prototype.mapResult = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return this.mapper ? this.mapper.result(noCache) : this.queryResult(noCache);
    };
    return Reducer;
}());
exports.Reducer = Reducer;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var event_queue_1 = __webpack_require__(19);
var BaseCommand = (function () {
    function BaseCommand(_context, _type, typeIsOptional) {
        if (typeIsOptional === void 0) { typeIsOptional = false; }
        this._context = _context;
        this._type = _type;
        this._eventQueue = new event_queue_1.EventQueue(this._context.eventPipe);
        var schema = this.schema;
        if (!typeIsOptional && (!_type || !schema.hasType(_type))) {
            throw new core_1.InvalidTypeError(_type);
        }
        this._typeConfig = this._type ? schema.getConfig(this._type) : null;
    }
    Object.defineProperty(BaseCommand.prototype, "schema", {
        get: function () {
            return this._context.schema();
        },
        enumerable: true,
        configurable: true
    });
    BaseCommand.prototype.hasKey = function (item, config) {
        if (config === void 0) { config = this._typeConfig; }
        return config.key in item && !core_1.isNull(item[config.key]);
    };
    BaseCommand.prototype.getKey = function (item, config, isNullAllowed) {
        if (config === void 0) { config = this._typeConfig; }
        if (isNullAllowed === void 0) { isNullAllowed = false; }
        if (!isNullAllowed && !this.hasKey(item, config)) {
            throw new core_1.MissingKeyError(this._type, config.key);
        }
        return item[config.key];
    };
    BaseCommand.prototype.getTypes = function (normalizedData) {
        return Object.keys(normalizedData);
    };
    BaseCommand.prototype.onSuccess = function () {
        this._eventQueue.notify();
    };
    return BaseCommand;
}());
exports.BaseCommand = BaseCommand;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventQueue = (function () {
    function EventQueue(_eventPipe) {
        this._eventPipe = _eventPipe;
        this._queue = [];
    }
    EventQueue.prototype.enqueue = function (event) {
        this._queue.unshift(event);
    };
    EventQueue.prototype.notify = function () {
        var i = this._queue.length;
        while (--i >= 0) {
            this._eventPipe.notify(this._queue.pop());
        }
    };
    return EventQueue;
}());
exports.EventQueue = EventQueue;


/***/ }),
/* 20 */
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
var base_event_1 = __webpack_require__(3);
var UpdatedEvent = (function (_super) {
    __extends(UpdatedEvent, _super);
    function UpdatedEvent(type, item, itemKey) {
        return _super.call(this, 'updated', type, item, itemKey) || this;
    }
    return UpdatedEvent;
}(base_event_1.BaseEvent));
exports.UpdatedEvent = UpdatedEvent;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RefsWriteUtility = (function () {
    function RefsWriteUtility() {
    }
    RefsWriteUtility.add = function (item, parent) {
        var _this = this;
        var refs = item._refs || {};
        if (Array.isArray(parent)) {
            parent.forEach(function (p) { return _this.addKey(refs, p.type, p.key); });
        }
        else {
            this.addKey(refs, parent.type, parent.key);
        }
        if (!item._refs) {
            Object.assign(item, { _refs: refs });
        }
    };
    RefsWriteUtility.addKey = function (refs, type, key) {
        if (type in refs) {
            refs[type].add(key);
        }
        else {
            refs[type] = new Set([key]);
        }
    };
    return RefsWriteUtility;
}());
exports.RefsWriteUtility = RefsWriteUtility;


/***/ }),
/* 22 */
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
var cleared_event_1 = __webpack_require__(23);
var idb_logger_1 = __webpack_require__(4);
var idb_base_command_1 = __webpack_require__(5);
var IdbClearCommand = (function (_super) {
    __extends(IdbClearCommand, _super);
    function IdbClearCommand(context, _includeLogs) {
        if (_includeLogs === void 0) { _includeLogs = false; }
        var _this = _super.call(this, context, null, true) || this;
        _this._includeLogs = _includeLogs;
        return _this;
    }
    IdbClearCommand.prototype.execute = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var involvedTypes, logStoreIndex, transaction, e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!type) return [3, 1];
                        involvedTypes = Array.isArray(type) ? type : [type];
                        return [3, 3];
                    case 1: return [4, this._context.objectStoreNames(false)];
                    case 2:
                        involvedTypes = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!this._includeLogs) {
                            logStoreIndex = involvedTypes.indexOf(idb_logger_1.IdbLogger.OBJECT_STORE);
                            if (logStoreIndex >= 0) {
                                involvedTypes.splice(logStoreIndex, 1);
                            }
                        }
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4, this._context.write(involvedTypes)];
                    case 5:
                        transaction = _a.sent();
                        return [3, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2, false];
                    case 7:
                        _a.trys.push([7, 9, , 10]);
                        involvedTypes.forEach(function (osn) { return transaction.objectStore(osn).clear(); });
                        return [4, transaction.complete];
                    case 8:
                        _a.sent();
                        return [3, 10];
                    case 9:
                        e_2 = _a.sent();
                        try {
                            transaction.abort();
                        }
                        catch (e2) {
                            e_2 = e2;
                        }
                        console.error(e_2);
                        return [2, false];
                    case 10:
                        involvedTypes.forEach(function (involvedType) {
                            return _this._eventQueue.enqueue(new cleared_event_1.ClearedEvent(involvedType));
                        });
                        this.onSuccess();
                        return [2, true];
                }
            });
        });
    };
    return IdbClearCommand;
}(idb_base_command_1.IdbBaseCommand));
exports.IdbClearCommand = IdbClearCommand;


/***/ }),
/* 23 */
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
var base_event_1 = __webpack_require__(3);
var ClearedEvent = (function (_super) {
    __extends(ClearedEvent, _super);
    function ClearedEvent(type) {
        return _super.call(this, 'cleared', type, null, null) || this;
    }
    return ClearedEvent;
}(base_event_1.BaseEvent));
exports.ClearedEvent = ClearedEvent;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_query_1 = __webpack_require__(25);
var Logger = (function () {
    function Logger(_context) {
        this._context = _context;
        this._eventPipe = this._context.eventPipe;
        this._schemaLogConfig = this._context.schema().getLogConfig();
    }
    Logger.prototype.enable = function (enable) {
        if (enable !== false) {
            this._config = typeof enable === 'object' ? enable : undefined;
            return this._eventPipe.register(this).build();
        }
        else {
            this.disable();
            return undefined;
        }
    };
    Logger.prototype.disable = function () {
        this._config = undefined;
        this._eventPipe.unregister(this);
    };
    Logger.prototype.logs = function (autoCloseContext) {
        if (autoCloseContext === void 0) { autoCloseContext = true; }
        return new log_query_1.LogQuery(this._context, autoCloseContext);
    };
    Logger.prototype.isLoggingEnabled = function (type, event) {
        return this._config
            ? this._config.isLoggingEnabled(type, event.eventType, event.itemKey)
            : this._schemaLogConfig.isLoggingEnabled(type, event.eventType, event.itemKey);
    };
    Logger.prototype.getLogMode = function (type) {
        return this._config
            ? this._config.getLogMode(type)
            : this._schemaLogConfig.getLogMode(type);
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 25 */
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
var LogQuery = (function () {
    function LogQuery(_context, _autoCloseContext) {
        this._context = _context;
        this._autoCloseContext = _autoCloseContext;
    }
    LogQuery.prototype.time = function (time) {
        this._dateRange = IDBKeyRange.only(time);
        return this;
    };
    LogQuery.prototype.after = function (lower, open) {
        if (open === void 0) { open = false; }
        this._dateRange = IDBKeyRange.lowerBound(lower, open);
        return this;
    };
    LogQuery.prototype.before = function (upper, open) {
        if (open === void 0) { open = false; }
        this._dateRange = IDBKeyRange.upperBound(upper, open);
        return this;
    };
    LogQuery.prototype.between = function (lower, upper, lowerOpen, upperOpen) {
        if (lowerOpen === void 0) { lowerOpen = false; }
        if (upperOpen === void 0) { upperOpen = false; }
        this._dateRange = IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);
        return this;
    };
    LogQuery.prototype.type = function (type) {
        this._type = type;
        return this;
    };
    LogQuery.prototype.key = function (key) {
        this._key = key;
        return this;
    };
    LogQuery.prototype.action = function (action) {
        this._action = action;
        return this;
    };
    LogQuery.prototype.parent = function (parent) {
        this._parent = parent;
        return this;
    };
    LogQuery.prototype.filter = function (callback) {
        this._filter = callback;
        return this;
    };
    LogQuery.prototype.result = function (noCache) {
        return __awaiter(this, void 0, void 0, function () {
            var runner, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._cachedResult && !noCache) {
                            return [2, this._cachedResult];
                        }
                        return [4, this._context.open()];
                    case 1:
                        _b.sent();
                        runner = this._context.logger().queryRunner(this.getQueryConfig());
                        _a = this;
                        return [4, runner.execute()];
                    case 2:
                        _a._cachedResult = _b.sent();
                        this.autoClose();
                        return [2, this._cachedResult];
                }
            });
        });
    };
    LogQuery.prototype.invalidateCachedResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._cachedResult = null;
                return [2];
            });
        });
    };
    LogQuery.prototype.getQueryConfig = function () {
        return {
            dateRange: this._dateRange,
            type: this._type,
            key: this._key,
            action: this._action,
            parent: this._parent,
            filter: this._filter
        };
    };
    LogQuery.prototype.autoClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._autoCloseContext) return [3, 2];
                        return [4, this._context.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    return LogQuery;
}());
exports.LogQuery = LogQuery;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var created_event_1 = __webpack_require__(10);
var removed_event_1 = __webpack_require__(11);
var LogEntry = (function () {
    function LogEntry(event, includeData) {
        if (includeData === void 0) { includeData = false; }
        this.time = event.time;
        this.action = event.eventType;
        this.type = event.dataStoreType;
        this.key = event.itemKey;
        if (includeData) {
            this.item = event.item;
        }
        if (event instanceof created_event_1.CreatedEvent || event instanceof removed_event_1.RemovedEvent) {
            this.parent = event.parent;
        }
    }
    return LogEntry;
}());
exports.LogEntry = LogEntry;


/***/ }),
/* 27 */
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
var idb_logger_1 = __webpack_require__(4);
var IdbClearLogsCommand = (function () {
    function IdbClearLogsCommand(_context) {
        this._context = _context;
    }
    IdbClearLogsCommand.prototype.execute = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        if (!(options && !core_1.isNull(options.key))) return [3, 2];
                        return [4, this.clearItem(options)];
                    case 1:
                        _a.sent();
                        return [3, 7];
                    case 2:
                        if (!(options && options.types && options.types.length > 0)) return [3, 4];
                        return [4, this.clearTypes(options)];
                    case 3:
                        _a.sent();
                        return [3, 7];
                    case 4: return [4, this.getWritableObjectStore()];
                    case 5: return [4, (_a.sent()).clear()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3, 9];
                    case 8:
                        e_1 = _a.sent();
                        console.error('message' in e_1 ? e_1.message : e_1);
                        return [2, false];
                    case 9: return [2, true];
                }
            });
        });
    };
    IdbClearLogsCommand.prototype.clearTypes = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var lower, upper, typeArr, typeIdx, requests, cursor, logEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Array.isArray(options.types)) {
                            typeArr = options.types.sort();
                            lower = typeArr[0];
                            upper = typeArr[options.types.length - 1];
                        }
                        else {
                            typeArr = [options.types];
                            lower = upper = options.types;
                        }
                        return [4, this.getWritableObjectStore()];
                    case 1:
                        typeIdx = (_a.sent()).index(idb_logger_1.IdbLogger.IDX_TYPE);
                        requests = [];
                        return [4, typeIdx.openCursor(IDBKeyRange.bound(lower, upper))];
                    case 2:
                        cursor = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!cursor) return [3, 5];
                        if (cursor.value) {
                            logEntry = cursor.value;
                            if (typeArr.indexOf(logEntry.type) >= 0) {
                                requests.push(cursor.delete());
                            }
                        }
                        return [4, cursor.continue()];
                    case 4:
                        cursor = _a.sent();
                        return [3, 3];
                    case 5: return [4, Promise.all(requests)];
                    case 6:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IdbClearLogsCommand.prototype.clearItem = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var keyIdx, requests, isTypesArray, cursor, logEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getWritableObjectStore()];
                    case 1:
                        keyIdx = (_a.sent()).index(idb_logger_1.IdbLogger.IDX_KEY);
                        requests = [];
                        isTypesArray = Array.isArray(options.types);
                        return [4, keyIdx.openCursor(options.key)];
                    case 2:
                        cursor = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!cursor) return [3, 5];
                        if (cursor.value) {
                            logEntry = cursor.value;
                            if ((isTypesArray && options.types.indexOf(logEntry.type) >= 0) ||
                                logEntry.type === options.types) {
                                requests.push(cursor.delete());
                            }
                        }
                        return [4, cursor.continue()];
                    case 4:
                        cursor = _a.sent();
                        return [3, 3];
                    case 5: return [4, Promise.all(requests)];
                    case 6:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IdbClearLogsCommand.prototype.getWritableObjectStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._context.write(idb_logger_1.IdbLogger.OBJECT_STORE)];
                    case 1: return [2, (_a.sent()).objectStore(idb_logger_1.IdbLogger.OBJECT_STORE)];
                }
            });
        });
    };
    return IdbClearLogsCommand;
}());
exports.IdbClearLogsCommand = IdbClearLogsCommand;


/***/ }),
/* 28 */
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
var index_1 = __webpack_require__(12);
var idb_logger_1 = __webpack_require__(4);
var IdbLogQueryRunner = (function () {
    function IdbLogQueryRunner(_context, _config) {
        this._context = _context;
        this._config = _config;
        this.result = [];
    }
    IdbLogQueryRunner.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cursor, requests;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [4, (this._config.dateRange
                                ? this.logStore.index(idb_logger_1.IdbLogger.IDX_TIME).openCursor(this._config.dateRange)
                                : this.logStore.openCursor())];
                    case 2:
                        cursor = _a.sent();
                        requests = [];
                        _a.label = 3;
                    case 3:
                        if (!cursor) return [3, 5];
                        if (cursor.value) {
                            requests.push(this.validate(cursor.value));
                        }
                        return [4, cursor.continue()];
                    case 4:
                        cursor = _a.sent();
                        return [3, 3];
                    case 5: return [4, Promise.all(requests)];
                    case 6:
                        _a.sent();
                        this.stop();
                        return [2, this.result];
                }
            });
        });
    };
    IdbLogQueryRunner.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.transaction) {
                            throw new index_1.InvalidQueryRunnerStatusError('Log-Query is already running');
                        }
                        _a = this;
                        return [4, this._context.read(idb_logger_1.IdbLogger.OBJECT_STORE)];
                    case 1:
                        _a.transaction = _b.sent();
                        this.logStore = this.transaction.objectStore(idb_logger_1.IdbLogger.OBJECT_STORE);
                        return [2];
                }
            });
        });
    };
    IdbLogQueryRunner.prototype.stop = function () {
        this.transaction = this.logStore = null;
    };
    IdbLogQueryRunner.prototype.validate = function (logEntry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._config.type || this._config.type === logEntry.type) {
                    if (core_1.isNull(this._config.key) || this._config.key === logEntry.key) {
                        if (!this._config.action || this._config.action === logEntry.action) {
                            if (!this._config.parent || this._config.parent.equals(logEntry.parent)) {
                                if (!this._config.filter || this._config.filter(logEntry)) {
                                    this.result.push(logEntry);
                                }
                            }
                        }
                    }
                }
                return [2];
            });
        });
    };
    return IdbLogQueryRunner;
}());
exports.IdbLogQueryRunner = IdbLogQueryRunner;


/***/ }),
/* 29 */
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
var core_1 = __webpack_require__(0);
var ChildNotFoundError = (function (_super) {
    __extends(ChildNotFoundError, _super);
    function ChildNotFoundError(parent, key) {
        return _super.call(this, 'Could not find child ' + (core_1.isNull(key) ? "with key \"" + key + "\"" : '') +
            (" in \"" + parent.type + "." + parent.field + "\" from \"" + parent.key + "\"")) || this;
    }
    return ChildNotFoundError;
}(Error));
exports.ChildNotFoundError = ChildNotFoundError;


/***/ }),
/* 30 */
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
var EmptyResultError = (function (_super) {
    __extends(EmptyResultError, _super);
    function EmptyResultError() {
        return _super.call(this, 'Query returned an empty result') || this;
    }
    return EmptyResultError;
}(Error));
exports.EmptyResultError = EmptyResultError;


/***/ }),
/* 31 */
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
var InvalidQueryConfigError = (function (_super) {
    __extends(InvalidQueryConfigError, _super);
    function InvalidQueryConfigError(reason) {
        return _super.call(this, "The query config is invalid. " + reason) || this;
    }
    return InvalidQueryConfigError;
}(Error));
exports.InvalidQueryConfigError = InvalidQueryConfigError;


/***/ }),
/* 32 */
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
var ListenerRegisteredError = (function (_super) {
    __extends(ListenerRegisteredError, _super);
    function ListenerRegisteredError() {
        return _super.call(this, 'Event listener is already registered') || this;
    }
    return ListenerRegisteredError;
}(Error));
exports.ListenerRegisteredError = ListenerRegisteredError;


/***/ }),
/* 33 */
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
var OrderByInvalidTypeError = (function (_super) {
    __extends(OrderByInvalidTypeError, _super);
    function OrderByInvalidTypeError(field, type) {
        return _super.call(this, field + " was expected to be a number, string or Date but " + type + " was found") || this;
    }
    return OrderByInvalidTypeError;
}(Error));
exports.OrderByInvalidTypeError = OrderByInvalidTypeError;


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
Object.defineProperty(exports, "__esModule", { value: true });
var OrderByTypeMismatchError = (function (_super) {
    __extends(OrderByTypeMismatchError, _super);
    function OrderByTypeMismatchError(field, t1, t2) {
        return _super.call(this, "Values on field \"" + field + "\" are not from same type hence cannot be compared (" + t1 + ", " + t2 + ")") || this;
    }
    return OrderByTypeMismatchError;
}(Error));
exports.OrderByTypeMismatchError = OrderByTypeMismatchError;


/***/ }),
/* 35 */
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
var core_1 = __webpack_require__(0);
var RefNotFoundError = (function (_super) {
    __extends(RefNotFoundError, _super);
    function RefNotFoundError(refType, key) {
        return _super.call(this, "Could not find reverse reference to \"" + refType + "\"" + (core_1.isNull(key) ? "with key \"" + key + "\"" : '')) || this;
    }
    return RefNotFoundError;
}(Error));
exports.RefNotFoundError = RefNotFoundError;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idb_clear_command_1 = __webpack_require__(22);
var idb_create_command_1 = __webpack_require__(37);
var idb_put_command_1 = __webpack_require__(38);
var idb_remove_command_1 = __webpack_require__(39);
var idb_set_command_1 = __webpack_require__(68);
var idb_update_command_1 = __webpack_require__(41);
var IdbCommandFactory = (function () {
    function IdbCommandFactory(_context) {
        this._context = _context;
    }
    IdbCommandFactory.instance = function (context) {
        if (!this._instance) {
            this._instance = new IdbCommandFactory(context);
        }
        return this._instance;
    };
    IdbCommandFactory.prototype.createCommand = function (type) {
        return new idb_create_command_1.IdbCreateCommand(this._context, type);
    };
    IdbCommandFactory.prototype.updateCommand = function (type) {
        return new idb_update_command_1.IdbUpdateCommand(this._context, type);
    };
    IdbCommandFactory.prototype.setCommand = function (type) {
        return new idb_set_command_1.IdbSetCommand(this._context, type);
    };
    IdbCommandFactory.prototype.putCommand = function (type) {
        return new idb_put_command_1.IdbPutCommand(this._context, type);
    };
    IdbCommandFactory.prototype.removeCommand = function (type) {
        return new idb_remove_command_1.IdbRemoveCommand(this._context, type);
    };
    IdbCommandFactory.prototype.clearCommand = function (includeLogs) {
        return new idb_clear_command_1.IdbClearCommand(this._context, includeLogs);
    };
    return IdbCommandFactory;
}());
exports.IdbCommandFactory = IdbCommandFactory;


/***/ }),
/* 37 */
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
var core_1 = __webpack_require__(0);
var empty_input_error_1 = __webpack_require__(2);
var idb_base_write_command_1 = __webpack_require__(6);
var IdbCreateCommand = (function (_super) {
    __extends(IdbCreateCommand, _super);
    function IdbCreateCommand(context, type) {
        var _this = _super.call(this, context, type) || this;
        _this.setKey = _this.setKey.bind(_this);
        return _this;
    }
    IdbCreateCommand.prototype.execute = function (data, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (core_1.isNull(data)) {
                            throw new empty_input_error_1.EmptyInputError('create');
                        }
                        if (!Array.isArray(data)) return [3, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < data.length)) return [3, 4];
                        return [4, this.setKey(data[i])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5: return [4, this.setKey(data)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2, _super.prototype.write.call(this, data, parent)];
                }
            });
        });
    };
    IdbCreateCommand.prototype.setKey = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var newKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._typeConfig.autoKey) return [3, 1];
                        delete item[this._typeConfig.key];
                        return [3, 3];
                    case 1: return [4, this._context.newKey(this._type)];
                    case 2:
                        newKey = _a.sent();
                        if (core_1.isNull(newKey)) {
                            throw new core_1.MissingKeyError(this._type, this._typeConfig.key);
                        }
                        item[this._typeConfig.key] = newKey;
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    return IdbCreateCommand;
}(idb_base_write_command_1.IdbBaseWriteCommand));
exports.IdbCreateCommand = IdbCreateCommand;


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
var core_1 = __webpack_require__(0);
var empty_input_error_1 = __webpack_require__(2);
var idb_base_write_command_1 = __webpack_require__(6);
var IdbPutCommand = (function (_super) {
    __extends(IdbPutCommand, _super);
    function IdbPutCommand(context, type) {
        var _this = _super.call(this, context, type) || this;
        _this.setKey = _this.setKey.bind(_this);
        return _this;
    }
    IdbPutCommand.prototype.execute = function (data, parent, isPartialUpdate) {
        if (isPartialUpdate === void 0) { isPartialUpdate = false; }
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (core_1.isNull(data)) {
                            throw new empty_input_error_1.EmptyInputError('put');
                        }
                        if (!Array.isArray(data)) return [3, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < data.length)) return [3, 4];
                        return [4, this.setKey(data[i])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5: return [4, this.setKey(data)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [4, _super.prototype.write.call(this, data, parent)];
                    case 8: return [2, _a.sent()];
                }
            });
        });
    };
    IdbPutCommand.prototype.setKey = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var newKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasKey(item) || this._typeConfig.autoKey) {
                            return [2];
                        }
                        return [4, this._context.newKey(this._type)];
                    case 1:
                        newKey = _a.sent();
                        if (core_1.isNull(newKey)) {
                            throw new core_1.MissingKeyError(this._type, this._typeConfig.key);
                        }
                        item[this._typeConfig.key] = newKey;
                        return [2];
                }
            });
        });
    };
    return IdbPutCommand;
}(idb_base_write_command_1.IdbBaseWriteCommand));
exports.IdbPutCommand = IdbPutCommand;


/***/ }),
/* 39 */
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
var core_1 = __webpack_require__(0);
var empty_input_error_1 = __webpack_require__(2);
var removed_event_1 = __webpack_require__(11);
var parent_1 = __webpack_require__(7);
var valid_key_1 = __webpack_require__(40);
var idb_base_command_1 = __webpack_require__(5);
var IdbRemoveCommand = (function (_super) {
    __extends(IdbRemoveCommand, _super);
    function IdbRemoveCommand(context, type) {
        return _super.call(this, context, type) || this;
    }
    IdbRemoveCommand.prototype.execute = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var key, transaction, oldItem, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (core_1.isNull(data)) {
                            throw new empty_input_error_1.EmptyInputError('remove');
                        }
                        key = valid_key_1.isValidKey(data) ? data : this.getKey(data);
                        return [4, this._context.write()];
                    case 1:
                        transaction = _a.sent();
                        return [4, transaction.objectStore(this._type).get(key)];
                    case 2:
                        oldItem = _a.sent();
                        if (core_1.isNull(oldItem)) {
                            throw new core_1.NotFoundError(this._type, key);
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, this.executeRecursive(this._type, oldItem, transaction, transaction.objectStore(this._type))];
                    case 4:
                        _a.sent();
                        return [3, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        try {
                            transaction.abort();
                        }
                        catch (e2) {
                            console.error(e2);
                        }
                        return [2, false];
                    case 6:
                        this.onSuccess();
                        return [2, true];
                }
            });
        });
    };
    IdbRemoveCommand.prototype.executeRecursive = function (type, item, transaction, objectStore) {
        return __awaiter(this, void 0, void 0, function () {
            var config, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = this.schema.getConfig(type);
                        key = this.getKey(item, config);
                        return [4, Promise.all([
                                this.cascadeRemoval(transaction, config.targets, type, item),
                                this.updateParents(transaction, type, item),
                                objectStore.delete(key)
                            ])];
                    case 1:
                        _a.sent();
                        this._eventQueue.enqueue(new removed_event_1.RemovedEvent(type, item, key));
                        return [2];
                }
            });
        });
    };
    IdbRemoveCommand.prototype.cascadeRemoval = function (transaction, targets, type, oldItem) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var oldItemKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!targets) {
                            return [2];
                        }
                        oldItemKey = this.getKey(oldItem, this.schema.getConfig(type));
                        return [4, Promise.all(Object.keys(targets).map(function (field) { return __awaiter(_this, void 0, void 0, function () {
                                var target;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            target = targets[field];
                                            if (!(target.cascadeRemoval && field in oldItem && !core_1.isNull(oldItem[field]))) return [3, 2];
                                            return [4, this.removeTarget(transaction, type, oldItemKey, target.type, oldItem[field])];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IdbRemoveCommand.prototype.removeTarget = function (transaction, parentType, parentKey, targetType, targetKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var objectStore, remover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectStore = transaction.objectStore(targetType);
                        remover = function (targetKey) { return __awaiter(_this, void 0, void 0, function () {
                            var target;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, objectStore.get(targetKey)];
                                    case 1:
                                        target = _a.sent();
                                        if (!!core_1.isNull(target)) return [3, 3];
                                        if ('_refs' in target && parentType in target._refs) {
                                            target._refs[parentType].delete(parentKey);
                                        }
                                        return [4, this.executeRecursive(targetType, target, transaction, objectStore)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); };
                        if (!Array.isArray(targetKeys)) return [3, 2];
                        return [4, Promise.all(targetKeys.map(remover))];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, remover(targetKeys)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    IdbRemoveCommand.prototype.updateParents = function (transaction, oldItemType, oldItem) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var oldItemKey_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!('_refs' in oldItem)) return [3, 2];
                        oldItemKey_1 = this.getKey(oldItem, this.schema.getConfig(oldItemType));
                        return [4, Promise.all(Object.keys(oldItem['_refs']).map(function (refType) { return __awaiter(_this, void 0, void 0, function () {
                                var parentConfig, parentFields, requests, objectStore, it, current;
                                return __generator(this, function (_a) {
                                    parentConfig = this.schema.getConfig(refType);
                                    parentFields = this.getParentFields(oldItemType, parentConfig);
                                    requests = [];
                                    objectStore = transaction.objectStore(refType);
                                    it = oldItem._refs[refType].values();
                                    current = it.next();
                                    while (!current.done) {
                                        requests.push(this.removeFromParent(oldItemType, oldItem, oldItemKey_1, objectStore, current.value, parentFields));
                                        current = it.next();
                                    }
                                    return [2, Promise.all(requests)];
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    IdbRemoveCommand.prototype.getParentFields = function (oldItemType, parentConfig) {
        var parentFields = [];
        Object.keys(parentConfig.targets).forEach(function (field) {
            if (parentConfig.targets[field].type === oldItemType) {
                parentFields.push(field);
            }
        });
        return parentFields;
    };
    IdbRemoveCommand.prototype.removeFromParent = function (oldItemType, oldItem, oldItemKey, parentObjectStore, parentKey, fields) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var parentCursor, enqueueRemovedEvent_1, parentChanged_1, parent_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, parentObjectStore.openCursor(parentKey)];
                    case 1:
                        parentCursor = _a.sent();
                        if (!!core_1.isNull(parentCursor)) return [3, 3];
                        enqueueRemovedEvent_1 = function (field) { return _this._eventQueue.enqueue(new removed_event_1.RemovedEvent(oldItemType, oldItem, oldItemKey, new parent_1.Parent(parentObjectStore.name, parentKey, field))); };
                        parentChanged_1 = false;
                        parent_2 = parentCursor.value;
                        fields.forEach(function (field) { return __awaiter(_this, void 0, void 0, function () {
                            var fieldValue, index;
                            return __generator(this, function (_a) {
                                if (!(field in parent_2) || core_1.isNull(parent_2[field])) {
                                    return [2];
                                }
                                fieldValue = parent_2[field];
                                if (Array.isArray(fieldValue)) {
                                    index = fieldValue.findIndex(function (key) { return key === oldItemKey; });
                                    if (index >= 0) {
                                        fieldValue.splice(index, 1);
                                        parentChanged_1 = true;
                                        enqueueRemovedEvent_1(field);
                                    }
                                }
                                else if (fieldValue === oldItemKey) {
                                    parent_2[field] = null;
                                    parentChanged_1 = true;
                                    enqueueRemovedEvent_1(field);
                                }
                                return [2];
                            });
                        }); });
                        if (!parentChanged_1) return [3, 3];
                        return [4, parentCursor.update(parent_2)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    return IdbRemoveCommand;
}(idb_base_command_1.IdbBaseCommand));
exports.IdbRemoveCommand = IdbRemoveCommand;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isValidKey(key) {
    var type = typeof key;
    return type === 'number' || type === 'string' || key instanceof Date;
}
exports.isValidKey = isValidKey;


/***/ }),
/* 41 */
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
var core_1 = __webpack_require__(0);
var empty_input_error_1 = __webpack_require__(2);
var idb_base_update_command_1 = __webpack_require__(9);
var IdbUpdateCommand = (function (_super) {
    __extends(IdbUpdateCommand, _super);
    function IdbUpdateCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdbUpdateCommand.prototype.execute = function (data, isPartialUpdate) {
        if (isPartialUpdate === void 0) { isPartialUpdate = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (core_1.isNull(data)) {
                    throw new empty_input_error_1.EmptyInputError('update');
                }
                return [2, this.executeHelper(data, isPartialUpdate)];
            });
        });
    };
    return IdbUpdateCommand;
}(idb_base_update_command_1.IdbBaseUpdateCommand));
exports.IdbUpdateCommand = IdbUpdateCommand;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_pipe_1 = __webpack_require__(43);
var Context = (function () {
    function Context(_schema, _normalizerBuilder, _denormalizerBuilder) {
        this._schema = _schema;
        this._normalizerBuilder = _normalizerBuilder;
        this._denormalizerBuilder = _denormalizerBuilder;
        this.eventPipe = new event_pipe_1.EventPipe();
        this._normalizer = _normalizerBuilder.build();
        this._uniqueKeyCallback = this._normalizer.getUniqueKeyCallback();
    }
    Context.prototype.schema = function () {
        return this._schema;
    };
    Context.prototype.normalizer = function () {
        return this._normalizer;
    };
    Context.prototype.denormalizerBuilder = function () {
        return this._denormalizerBuilder;
    };
    Context.prototype.newKey = function (type) {
        return this._uniqueKeyCallback ? this._uniqueKeyCallback(type) : undefined;
    };
    return Context;
}());
exports.Context = Context;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_registration_builder_1 = __webpack_require__(44);
var EventPipe = (function () {
    function EventPipe() {
        this._registrations = new Map();
    }
    EventPipe.prototype.register = function (listener) {
        return new event_registration_builder_1.EventRegistrationBuilder(this._registrations, listener);
    };
    EventPipe.prototype.unregister = function (listener) {
        this._registrations.delete(listener);
    };
    EventPipe.prototype.notify = function (event) {
        this._registrations.forEach(function (registration) {
            if (registration.isMatching(event)) {
                registration.notify(event);
            }
        });
    };
    return EventPipe;
}());
exports.EventPipe = EventPipe;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var listener_registered_error_1 = __webpack_require__(32);
var event_registration_1 = __webpack_require__(45);
var EventRegistrationBuilder = (function () {
    function EventRegistrationBuilder(_registrations, _listener) {
        this._registrations = _registrations;
        this._listener = _listener;
        if (this._registrations.has(_listener)) {
            throw new listener_registered_error_1.ListenerRegisteredError();
        }
    }
    EventRegistrationBuilder.prototype.eventType = function (value) {
        this._eventSelection = value;
        return this;
    };
    EventRegistrationBuilder.prototype.type = function (value) {
        this._dataStoreType = value;
        return this;
    };
    EventRegistrationBuilder.prototype.itemKey = function (value) {
        this._itemKey = value;
        return this;
    };
    EventRegistrationBuilder.prototype.build = function () {
        var registration = new event_registration_1.EventRegistration(this._listener, this._eventSelection, this._dataStoreType, this._itemKey);
        this._registrations.set(this._listener, registration);
        return registration;
    };
    return EventRegistrationBuilder;
}());
exports.EventRegistrationBuilder = EventRegistrationBuilder;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var EventRegistration = (function () {
    function EventRegistration(_listener, _eventSelection, _dataStoreType, _itemKey) {
        this._listener = _listener;
        this._eventSelection = _eventSelection;
        this._dataStoreType = _dataStoreType;
        this._itemKey = _itemKey;
    }
    EventRegistration.prototype.addEventType = function (type) {
        if (!this._eventSelection) {
            this._eventSelection = type;
        }
        else if (Array.isArray(this._eventSelection)) {
            this._eventSelection.push(type);
        }
        else {
            this._eventSelection = [this._eventSelection, type];
        }
    };
    EventRegistration.prototype.removeEventType = function (type) {
        if (this._eventSelection) {
            if (Array.isArray(this._eventSelection)) {
                var index = this._eventSelection.indexOf(type);
                if (index >= 0) {
                    this._eventSelection.splice(index, 1);
                }
            }
            else if (this._eventSelection === type) {
                this._eventSelection = undefined;
            }
        }
    };
    EventRegistration.prototype.addDataStoreType = function (type) {
        if (!this._dataStoreType) {
            this._dataStoreType = type;
        }
        else if (Array.isArray(this._dataStoreType)) {
            this._dataStoreType.push(type);
        }
        else {
            this._dataStoreType = [this._dataStoreType, type];
        }
    };
    EventRegistration.prototype.removeDataStoreType = function (type) {
        if (this._dataStoreType) {
            if (Array.isArray(this._dataStoreType)) {
                var index = this._dataStoreType.indexOf(type);
                if (index >= 0) {
                    this._dataStoreType.splice(index, 1);
                }
            }
            else if (this._dataStoreType === type) {
                this._dataStoreType = undefined;
            }
        }
    };
    EventRegistration.prototype.addItemKey = function (key) {
        if (!this._itemKey) {
            this._itemKey = key;
        }
        else if (Array.isArray(this._itemKey)) {
            this._itemKey.push(key);
        }
        else {
            this._itemKey = [this._itemKey, key];
        }
    };
    EventRegistration.prototype.removeItemKey = function (key) {
        if (this._itemKey) {
            if (Array.isArray(this._itemKey)) {
                var index = this._itemKey.indexOf(key);
                if (index >= 0) {
                    this._itemKey.splice(index, 1);
                }
            }
            else if (this._itemKey === key) {
                this._itemKey = undefined;
            }
        }
    };
    EventRegistration.prototype.isMatching = function (event) {
        if (!core_1.isNull(this._itemKey)) {
            if (Array.isArray(this._itemKey)) {
                if (this._itemKey.indexOf(event.itemKey) < 0) {
                    return false;
                }
            }
            else if (this._itemKey !== event.itemKey) {
                return false;
            }
        }
        if (this._eventSelection) {
            if (Array.isArray(this._eventSelection)) {
                if (this._eventSelection.indexOf(event.eventType) < 0) {
                    return false;
                }
            }
            else if (this._eventSelection !== event.eventType) {
                return false;
            }
        }
        if (this._dataStoreType) {
            if (Array.isArray(this._dataStoreType)) {
                if (this._dataStoreType.indexOf(event.dataStoreType) < 0) {
                    return false;
                }
            }
            else if (this._dataStoreType !== event.dataStoreType) {
                return false;
            }
        }
        return true;
    };
    EventRegistration.prototype.notify = function (event) {
        this._listener.ndbOnDataChanged(event);
    };
    return EventRegistration;
}());
exports.EventRegistration = EventRegistration;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ContextBuilder = (function () {
    function ContextBuilder() {
    }
    ContextBuilder.prototype.schema = function (value) {
        this._schema = value;
        return this;
    };
    ContextBuilder.prototype.schemaConfig = function (value) {
        this._schema = new core_1.Schema(value);
        return this;
    };
    ContextBuilder.prototype.normalizerBuilder = function (value) {
        this._normalizerBuilder = value;
        return this;
    };
    ContextBuilder.prototype.denormalizerBuilder = function (value) {
        this._denormalizerBuilder = value;
        return this;
    };
    ContextBuilder.prototype.enableLogging = function (value) {
        this._enableLogging = core_1.isNull(value) ? true : value;
        return this;
    };
    return ContextBuilder;
}());
exports.ContextBuilder = ContextBuilder;


/***/ }),
/* 47 */
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
var idb_1 = __webpack_require__(71);
var idb_command_factory_1 = __webpack_require__(36);
var idb_logger_1 = __webpack_require__(4);
var idb_query_runner_factory_1 = __webpack_require__(48);
var context_1 = __webpack_require__(42);
var IdbContext = (function (_super) {
    __extends(IdbContext, _super);
    function IdbContext(schema, normalizerBuilder, denormalizerBuilder, dbConfig) {
        var _this = _super.call(this, schema, normalizerBuilder, denormalizerBuilder) || this;
        _this.dbConfig = dbConfig;
        _this._logger = new idb_logger_1.IdbLogger(_this);
        _this.onUpgradeNeeded = _this.onUpgradeNeeded.bind(_this);
        return _this;
    }
    IdbContext.prototype.isReady = function () {
        return !!this._db;
    };
    IdbContext.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.isReady()) return [3, 2];
                        _a = this;
                        return [4, idb_1.default.open(this.dbConfig.name, this.dbConfig.version, this.dbConfig.upgrade || this.onUpgradeNeeded)];
                    case 1:
                        _a._db = _b.sent();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    IdbContext.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isReady()) {
                    this._db.close();
                    this._db = null;
                }
                return [2];
            });
        });
    };
    IdbContext.prototype.queryRunnerFactory = function () {
        return idb_query_runner_factory_1.IdbQueryRunnerFactory.instance(this);
    };
    IdbContext.prototype.commandFactory = function () {
        return idb_command_factory_1.IdbCommandFactory.instance(this);
    };
    IdbContext.prototype.logger = function () {
        return this._logger;
    };
    IdbContext.prototype.objectStoreNames = function (autoCloseContext) {
        if (autoCloseContext === void 0) { autoCloseContext = false; }
        return __awaiter(this, void 0, void 0, function () {
            var osnList, osnArray, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.open()];
                    case 1:
                        _a.sent();
                        osnList = this._db.objectStoreNames;
                        osnArray = [];
                        for (i = 0; i < osnList.length; i++) {
                            osnArray.push(osnList.item(i));
                        }
                        if (autoCloseContext) {
                            this.close();
                        }
                        return [2, osnArray];
                }
            });
        });
    };
    IdbContext.prototype.read = function (stores) {
        if (stores === void 0) { stores = this._schema.getTypes(); }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.open()];
                    case 1:
                        _a.sent();
                        return [2, this._db.transaction(stores, 'readonly')];
                }
            });
        });
    };
    IdbContext.prototype.write = function (stores) {
        if (stores === void 0) { stores = this._schema.getTypes(); }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.open()];
                    case 1:
                        _a.sent();
                        return [2, this._db.transaction(stores, 'readwrite')];
                }
            });
        });
    };
    IdbContext.prototype.onUpgradeNeeded = function (upgradeDb) {
        var _this = this;
        this._logger.onUpgradeNeeded(upgradeDb);
        this._schema.getTypes()
            .filter(function (type) { return !upgradeDb.objectStoreNames.contains(type); })
            .forEach(function (type) {
            var config = _this._schema.getConfig(type);
            upgradeDb.createObjectStore(type, { keyPath: config.key });
        });
    };
    return IdbContext;
}(context_1.Context));
exports.IdbContext = IdbContext;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idb_count_query_runner_1 = __webpack_require__(49);
var idb_query_runner_1 = __webpack_require__(50);
var idb_single_item_query_runner_1 = __webpack_require__(55);
var IdbQueryRunnerFactory = (function () {
    function IdbQueryRunnerFactory(_context) {
        this._context = _context;
    }
    IdbQueryRunnerFactory.instance = function (context) {
        if (!this._instance) {
            this._instance = new IdbQueryRunnerFactory(context);
        }
        return this._instance;
    };
    IdbQueryRunnerFactory.prototype.countQueryRunner = function (config) {
        return new idb_count_query_runner_1.IdbCountQueryRunner(this._context, config);
    };
    IdbQueryRunnerFactory.prototype.queryRunner = function (config) {
        return new idb_query_runner_1.IdbQueryRunner(this._context, config);
    };
    IdbQueryRunnerFactory.prototype.singleItemQueryRunner = function (config) {
        return new idb_single_item_query_runner_1.IdbSingleItemQueryRunner(this._context, config);
    };
    return IdbQueryRunnerFactory;
}());
exports.IdbQueryRunnerFactory = IdbQueryRunnerFactory;


/***/ }),
/* 49 */
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
var idb_base_query_runner_1 = __webpack_require__(13);
var IdbCountQueryRunner = (function (_super) {
    __extends(IdbCountQueryRunner, _super);
    function IdbCountQueryRunner(context, config) {
        return _super.call(this, context, config) || this;
    }
    IdbCountQueryRunner.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var objectStore, requests, cursor, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.start();
                        this.result = 0;
                        return [4, this._context.read(this._config.type)];
                    case 1:
                        objectStore = (_b.sent()).objectStore(this._config.type);
                        if (!this._config.filter) return [3, 7];
                        requests = [];
                        return [4, objectStore.openCursor()];
                    case 2:
                        cursor = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!(cursor && cursor.value)) return [3, 5];
                        requests.push(this.processCursorValue(cursor.value));
                        return [4, cursor.continue()];
                    case 4:
                        cursor = _b.sent();
                        return [3, 3];
                    case 5: return [4, Promise.all(requests)];
                    case 6:
                        _b.sent();
                        return [3, 9];
                    case 7:
                        _a = this;
                        return [4, objectStore.count()];
                    case 8:
                        _a.result = _b.sent();
                        _b.label = 9;
                    case 9:
                        this.stop();
                        return [2, this.result];
                }
            });
        });
    };
    IdbCountQueryRunner.prototype.processCursorValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, denormalizedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._config.filter.requiresDenormalization) return [3, 3];
                        return [4, this._denormalizer.apply(this._config.type, value, this._config.depth)];
                    case 1:
                        denormalizedData = _a.sent();
                        return [4, this._config.filter.test(denormalizedData)];
                    case 2:
                        isValid = _a.sent();
                        return [3, 5];
                    case 3: return [4, this._config.filter.test(value)];
                    case 4:
                        isValid = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (isValid) {
                            this.result++;
                        }
                        return [2];
                }
            });
        });
    };
    return IdbCountQueryRunner;
}(idb_base_query_runner_1.IdbBaseQueryRunner));
exports.IdbCountQueryRunner = IdbCountQueryRunner;


/***/ }),
/* 50 */
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
var sorter_1 = __webpack_require__(51);
var idb_base_document_query_runner_1 = __webpack_require__(14);
var IdbQueryRunner = (function (_super) {
    __extends(IdbQueryRunner, _super);
    function IdbQueryRunner(context, config) {
        return _super.call(this, context, config) || this;
    }
    IdbQueryRunner.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.start();
                        if (!this._config.parent) return [3, 2];
                        return [4, this.findInParent()];
                    case 1:
                        result = (_a.sent());
                        return [3, 6];
                    case 2:
                        if (!this._config.keys) return [3, 4];
                        return [4, this.findAllByKeys(this._config.keys)];
                    case 3:
                        result = _a.sent();
                        return [3, 6];
                    case 4:
                        if (this._config.singleItem) {
                            console.warn('The query configuration has a key for a single-item-query but is run as list-query. The key will be ignored');
                        }
                        return [4, this.findAll()];
                    case 5:
                        result = _a.sent();
                        _a.label = 6;
                    case 6:
                        this.stop();
                        return [2, result];
                }
            });
        });
    };
    IdbQueryRunner.prototype.findAll = function (type) {
        if (type === void 0) { type = this._config.type; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, objectStore, hasRange, hasFilter, isOrdered, data, denormalizedData, sorter, items, cursor, data, _b, _c, denormalizedData, sorter, result, items, index, cursor, denormalizedData, isValid, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this._transaction) return [3, 2];
                        _a = this;
                        return [4, this._context.read(type)];
                    case 1:
                        _a._transaction = _e.sent();
                        _e.label = 2;
                    case 2:
                        objectStore = this._transaction.objectStore(type);
                        hasRange = this._config.offset > 0 || this._config.limit < Infinity;
                        hasFilter = !!this._config.filter;
                        isOrdered = !!this._config.orderBy;
                        if (!(!hasRange && !hasFilter)) return [3, 5];
                        return [4, objectStore.getAll()];
                    case 3:
                        data = _e.sent();
                        return [4, this._denormalizer.applyAll(type, data, this._config.depth)];
                    case 4:
                        denormalizedData = _e.sent();
                        if (isOrdered) {
                            sorter = new sorter_1.Sorter(this._config.orderBy);
                            denormalizedData = denormalizedData.sort(sorter.compare);
                        }
                        return [2, this.createListResult(denormalizedData, data.length)];
                    case 5:
                        if (!isOrdered) return [3, 16];
                        items = [];
                        return [4, objectStore.openCursor()];
                    case 6:
                        cursor = _e.sent();
                        _e.label = 7;
                    case 7:
                        if (!cursor) return [3, 14];
                        if (!(hasFilter && this._config.filter.requiresDenormalization)) return [3, 9];
                        return [4, this._denormalizer.apply(type, cursor.value, this._config.depth)];
                    case 8:
                        _b = _e.sent();
                        return [3, 10];
                    case 9:
                        _b = cursor.value;
                        _e.label = 10;
                    case 10:
                        data = _b;
                        _c = !hasFilter;
                        if (_c) return [3, 12];
                        return [4, this._config.filter.test(data)];
                    case 11:
                        _c = (_e.sent());
                        _e.label = 12;
                    case 12:
                        if (_c) {
                            items.push(data);
                        }
                        return [4, cursor.continue()];
                    case 13:
                        cursor = _e.sent();
                        return [3, 7];
                    case 14: return [4, this._denormalizer.applyAll(type, items, this._config.depth)];
                    case 15:
                        denormalizedData = _e.sent();
                        sorter = new sorter_1.Sorter(this._config.orderBy);
                        result = denormalizedData.sort(sorter.compare);
                        if (hasRange) {
                            result = result.slice(this._config.offset, this._config.offset + this._config.limit);
                        }
                        return [2, this.createListResult(result, denormalizedData.length)];
                    case 16:
                        items = [];
                        index = 0;
                        return [4, objectStore.openCursor()];
                    case 17:
                        cursor = _e.sent();
                        _e.label = 18;
                    case 18:
                        if (!cursor) return [3, 33];
                        denormalizedData = void 0, isValid = void 0;
                        if (!hasFilter) return [3, 24];
                        if (!this._config.filter.requiresDenormalization) return [3, 21];
                        return [4, this._denormalizer.apply(type, cursor.value, this._config.depth)];
                    case 19:
                        denormalizedData = _e.sent();
                        return [4, this._config.filter.test(denormalizedData)];
                    case 20:
                        isValid = _e.sent();
                        return [3, 23];
                    case 21: return [4, this._config.filter.test(cursor.value)];
                    case 22:
                        isValid = _e.sent();
                        _e.label = 23;
                    case 23: return [3, 25];
                    case 24:
                        isValid = true;
                        _e.label = 25;
                    case 25:
                        if (!isValid) return [3, 29];
                        if (!(index >= this._config.offset && items.length < this._config.limit)) return [3, 28];
                        if (!!denormalizedData) return [3, 27];
                        return [4, this._denormalizer.apply(type, cursor.value, this._config.depth)];
                    case 26:
                        denormalizedData = _e.sent();
                        _e.label = 27;
                    case 27:
                        items.push(denormalizedData);
                        _e.label = 28;
                    case 28:
                        index++;
                        _e.label = 29;
                    case 29:
                        if (!(items.length < this._config.limit)) return [3, 31];
                        return [4, cursor.continue()];
                    case 30:
                        _d = _e.sent();
                        return [3, 32];
                    case 31:
                        _d = null;
                        _e.label = 32;
                    case 32:
                        cursor = _d;
                        return [3, 18];
                    case 33: return [2, this.createListResult(items, index)];
                }
            });
        });
    };
    return IdbQueryRunner;
}(idb_base_document_query_runner_1.IdbBaseDocumentQueryRunner));
exports.IdbQueryRunner = IdbQueryRunner;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var order_by_invalid_type_error_1 = __webpack_require__(33);
var order_by_type_mismatch_error_1 = __webpack_require__(34);
var order_1 = __webpack_require__(52);
var Sorter = (function () {
    function Sorter(orderBy) {
        this.orderBy = orderBy;
        this.compare = this.compare.bind(this);
    }
    Sorter.prototype.compare = function (item1, item2) {
        var fields = Object.keys(this.orderBy);
        var fieldCount = fields.length;
        var i = -1, result = 0;
        while (++i < fieldCount && result === 0) {
            result = this.compareFields(fields[i], item1, item2);
        }
        return result;
    };
    Sorter.prototype.compareFields = function (field, item1, item2) {
        var fieldParts = field.split('.');
        var depth = fieldParts.length - 1;
        var value1, value2;
        if (depth <= 0) {
            value1 = item1[field];
            value2 = item2[field];
        }
        else {
            value1 = this.getNestedValue(fieldParts, depth, item1);
            value2 = this.getNestedValue(fieldParts, depth, item2);
        }
        var isNull1 = core_1.isNull(value1);
        var isNull2 = core_1.isNull(value2);
        var result;
        if (isNull1 && isNull2) {
            result = 0;
        }
        else if (!isNull1 && isNull2) {
            result = 1;
        }
        else if (isNull1 && !isNull2) {
            result = -1;
        }
        else {
            result = this.compareValues(field, value1, value2);
        }
        return this.orderBy[field] === order_1.ORDER_ASC ? result : -result;
    };
    Sorter.prototype.getNestedValue = function (fieldParts, depth, item) {
        var currentDocument = item;
        var i = 0;
        do {
            var fieldPart = fieldParts[i];
            var currentType = typeof currentDocument;
            if (currentType !== 'undefined' && currentType !== 'object') {
                throw new order_by_invalid_type_error_1.OrderByInvalidTypeError(fieldPart, currentType);
            }
            currentDocument = currentDocument[fieldPart];
        } while (++i < depth && currentDocument);
        return currentDocument ? currentDocument[fieldParts[i]] : undefined;
    };
    Sorter.prototype.compareValues = function (field, value1, value2) {
        var result = 0;
        var type1 = typeof value1, type2 = typeof value2;
        if (type1 !== type2) {
            throw new order_by_type_mismatch_error_1.OrderByTypeMismatchError(field, type1, type2);
        }
        switch (type1) {
            case 'string':
                result = value1.localeCompare(value2);
                break;
            case 'number':
                result = value1 - value2;
                break;
            case 'boolean':
                if (value1 === value2) {
                    result = 0;
                }
                else {
                    var b1 = value1 ? 2 : 0;
                    var b2 = value2 ? 1 : 0;
                    result = b1 - b2;
                }
                break;
            case 'object':
                if (value1 instanceof Date && value2 instanceof Date) {
                    result = value1.getTime() - value2.getTime();
                }
                else if (Array.isArray(value1) && Array.isArray(value2)) {
                    result = value1.length - value2.length;
                }
                else {
                    throw new order_by_invalid_type_error_1.OrderByInvalidTypeError(field, type1);
                }
                break;
            default:
                throw new order_by_invalid_type_error_1.OrderByInvalidTypeError(field, type1);
        }
        return result;
    };
    return Sorter;
}());
exports.Sorter = Sorter;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_ASC = 1;
exports.ORDER_DESC = -1;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list_result_1 = __webpack_require__(15);
exports.ListResult = list_result_1.ListResult;
var list_result_builder_1 = __webpack_require__(54);
exports.ListResultBuilder = list_result_builder_1.ListResultBuilder;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list_result_1 = __webpack_require__(15);
var ListResultBuilder = (function () {
    function ListResultBuilder() {
    }
    ListResultBuilder.prototype.items = function (value) {
        this._items = value;
        return this;
    };
    ListResultBuilder.prototype.total = function (value) {
        this._total = value;
        return this;
    };
    ListResultBuilder.prototype.offset = function (value) {
        this._offset = value;
        return this;
    };
    ListResultBuilder.prototype.limit = function (value) {
        this._limit = value;
        return this;
    };
    ListResultBuilder.prototype.build = function () {
        return new list_result_1.ListResult(this._items, this._total, this._offset, this._limit);
    };
    return ListResultBuilder;
}());
exports.ListResultBuilder = ListResultBuilder;


/***/ }),
/* 55 */
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
var invalid_query_config_error_1 = __webpack_require__(31);
var idb_base_document_query_runner_1 = __webpack_require__(14);
var IdbSingleItemQueryRunner = (function (_super) {
    __extends(IdbSingleItemQueryRunner, _super);
    function IdbSingleItemQueryRunner(context, config) {
        return _super.call(this, context, config) || this;
    }
    IdbSingleItemQueryRunner.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.start();
                        if (!this._config.singleItem) {
                            throw new invalid_query_config_error_1.InvalidQueryConfigError('Primary key for `singleExecute` is missing');
                        }
                        if (!this._config.parent) return [3, 2];
                        return [4, this.findInParent()];
                    case 1:
                        result = (_a.sent());
                        return [3, 4];
                    case 2: return [4, this.findByKey()];
                    case 3:
                        result = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.stop();
                        return [2, result];
                }
            });
        });
    };
    return IdbSingleItemQueryRunner;
}(idb_base_document_query_runner_1.IdbBaseDocumentQueryRunner));
exports.IdbSingleItemQueryRunner = IdbSingleItemQueryRunner;


/***/ }),
/* 56 */
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
var base_query_1 = __webpack_require__(8);
var filter_1 = __webpack_require__(16);
var CountQuery = (function (_super) {
    __extends(CountQuery, _super);
    function CountQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CountQuery.prototype.filter = function (predicate, requiresDenormalization) {
        this._filter = new filter_1.Filter(predicate, requiresDenormalization);
        return this;
    };
    CountQuery.prototype.depth = function (depth) {
        this._depth = depth;
        return this;
    };
    CountQuery.prototype.result = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var runner, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._cachedResult && !noCache) {
                            return [2, this._cachedResult];
                        }
                        runner = this._context.queryRunnerFactory().countQueryRunner(this.getQueryConfig());
                        return [4, this._context.open()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4, runner.execute()];
                    case 2:
                        _a._cachedResult = _b.sent();
                        this.autoClose();
                        return [2, this._cachedResult];
                }
            });
        });
    };
    CountQuery.prototype.getQueryConfig = function () {
        return Object.assign({
            filter: this._filter,
            depth: this._depth
        }, _super.prototype.getQueryConfig.call(this));
    };
    return CountQuery;
}(base_query_1.BaseQuery));
exports.CountQuery = CountQuery;


/***/ }),
/* 57 */
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
var core_1 = __webpack_require__(0);
var empty_result_error_1 = __webpack_require__(30);
var parent_1 = __webpack_require__(7);
var base_query_1 = __webpack_require__(8);
var list_result_1 = __webpack_require__(15);
var mapper_1 = __webpack_require__(58);
var reducer_1 = __webpack_require__(17);
var filter_1 = __webpack_require__(16);
var query_config_1 = __webpack_require__(59);
var Query = (function (_super) {
    __extends(Query, _super);
    function Query() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Query.prototype.offset = function (offset) {
        this._offset = Math.max(offset, 0);
        return this;
    };
    Query.prototype.limit = function (limit) {
        this._limit = limit;
        return this;
    };
    Query.prototype.keys = function (keys) {
        this._keys = keys;
        return this;
    };
    Query.prototype.filter = function (predicate, requiresDenormalization) {
        this._filter = new filter_1.Filter(predicate, requiresDenormalization);
        return this;
    };
    Query.prototype.orderBy = function (orderBy) {
        this._orderBy = orderBy;
        return this;
    };
    Query.prototype.nested = function (key, field) {
        this._parent = new parent_1.Parent(this._type, key, field);
        return this;
    };
    Query.prototype.reverse = function (sourceItem) {
        this._keys = core_1.RefsUtility.getAll(sourceItem, this._type);
        return this;
    };
    Query.prototype.depth = function (depth) {
        this._depth = depth;
        return this;
    };
    Query.prototype.map = function (callback) {
        return new mapper_1.Mapper(this, callback);
    };
    Query.prototype.reduce = function (callback, initialValue) {
        return new reducer_1.Reducer(this, null, callback, initialValue);
    };
    Query.prototype.result = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var runner, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._cachedResult && !noCache) {
                            return [2, this._cachedResult];
                        }
                        runner = this._context.queryRunnerFactory().queryRunner(this.getQueryConfig());
                        return [4, this._context.open()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4, runner.execute()];
                    case 2:
                        _a._cachedResult = (_b.sent()) || new list_result_1.ListResult();
                        this.autoClose();
                        return [2, this._cachedResult];
                }
            });
        });
    };
    Query.prototype.count = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.result(noCache)];
                    case 1: return [2, (_a.sent()).total];
                }
            });
        });
    };
    Query.prototype.isEmpty = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.count(noCache)];
                    case 1: return [2, (_a.sent()) === 0];
                }
            });
        });
    };
    Query.prototype.first = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isEmpty(noCache)];
                    case 1:
                        if (_a.sent()) {
                            throw new empty_result_error_1.EmptyResultError();
                        }
                        return [2, this._cachedResult[0]];
                }
            });
        });
    };
    Query.prototype.firstOrDefault = function (defaultResult, noCache) {
        if (defaultResult === void 0) { defaultResult = null; }
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isEmpty(noCache)];
                    case 1: return [2, (_a.sent()) ? defaultResult : this._cachedResult[0]];
                }
            });
        });
    };
    Query.prototype.getQueryConfig = function () {
        return Object.assign({
            offset: this._offset || query_config_1.QueryConfig.DEFAULT_OFFSET,
            limit: this._limit || query_config_1.QueryConfig.DEFAULT_LIMIT,
            keys: this._keys,
            filter: this._filter,
            orderBy: this._orderBy,
            parent: this._parent,
            depth: this._depth
        }, _super.prototype.getQueryConfig.call(this));
    };
    return Query;
}(base_query_1.BaseQuery));
exports.Query = Query;


/***/ }),
/* 58 */
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
var list_result_builder_1 = __webpack_require__(54);
var reducer_1 = __webpack_require__(17);
var Mapper = (function () {
    function Mapper(query, _callback) {
        this.query = query;
        this._callback = _callback;
    }
    Mapper.prototype.reduce = function (callback, initialValue) {
        return new reducer_1.Reducer(this.query, this, callback, initialValue);
    };
    Mapper.prototype.result = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var parentResult, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this._cachedResult && !noCache) {
                            return [2, this._cachedResult];
                        }
                        return [4, this.query.result(noCache)];
                    case 1:
                        parentResult = _d.sent();
                        _a = this;
                        _c = (_b = new list_result_builder_1.ListResultBuilder()).items;
                        return [4, Promise.all(parentResult.items.map(this._callback))];
                    case 2: return [2, _a._cachedResult = _c.apply(_b, [_d.sent()])
                            .total(parentResult.total)
                            .offset(parentResult.offset)
                            .limit(parentResult.limit)
                            .build()];
                }
            });
        });
    };
    Mapper.prototype.invalidateCachedResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.query.invalidateCachedResult()];
                    case 1:
                        _a.sent();
                        this._cachedResult = null;
                        return [2];
                }
            });
        });
    };
    Mapper.prototype.queryResult = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return this.query.result(noCache);
    };
    return Mapper;
}());
exports.Mapper = Mapper;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryConfig = (function () {
    function QueryConfig() {
        this.offset = QueryConfig.DEFAULT_OFFSET;
        this.limit = QueryConfig.DEFAULT_LIMIT;
    }
    QueryConfig.DEFAULT_OFFSET = 0;
    QueryConfig.DEFAULT_LIMIT = Infinity;
    return QueryConfig;
}());
exports.QueryConfig = QueryConfig;


/***/ }),
/* 60 */
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
var core_1 = __webpack_require__(0);
var child_not_found_error_1 = __webpack_require__(29);
var ref_not_found_error_1 = __webpack_require__(35);
var parent_1 = __webpack_require__(7);
var base_query_1 = __webpack_require__(8);
var SingleItemQuery = (function (_super) {
    __extends(SingleItemQuery, _super);
    function SingleItemQuery(_context, _autoCloseContext, _type, _key) {
        if (_autoCloseContext === void 0) { _autoCloseContext = true; }
        var _this = _super.call(this, _context, _autoCloseContext, _type) || this;
        _this._key = _key;
        _this._default = null;
        return _this;
    }
    SingleItemQuery.prototype.nested = function (key, field) {
        this._parent = new parent_1.Parent(this._type, key, field);
        return this;
    };
    SingleItemQuery.prototype.reverse = function (sourceItem) {
        if (!core_1.RefsUtility.hasKey(sourceItem, this._type, this._key)) {
            throw new ref_not_found_error_1.RefNotFoundError(this._type, this._key);
        }
        return this;
    };
    SingleItemQuery.prototype.depth = function (depth) {
        this._depth = depth;
        return this;
    };
    SingleItemQuery.prototype.defaultValue = function (value) {
        this._default = value;
        return this;
    };
    SingleItemQuery.prototype.result = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.orDefault(noCache)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            if (this._parent) {
                                throw new child_not_found_error_1.ChildNotFoundError(this._parent, this._key);
                            }
                            else {
                                throw new core_1.NotFoundError(this._type, this._key);
                            }
                        }
                        return [2, result];
                }
            });
        });
    };
    SingleItemQuery.prototype.orDefault = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var runner, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._cachedResult && !noCache) {
                            return [2, this._cachedResult];
                        }
                        runner = this._context.queryRunnerFactory().singleItemQueryRunner(this.getQueryConfig());
                        return [4, this._context.open()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4, runner.execute()];
                    case 2:
                        _a._cachedResult = (_b.sent()) || this._default;
                        this.autoClose();
                        return [2, this._cachedResult];
                }
            });
        });
    };
    SingleItemQuery.prototype.hasResult = function (noCache) {
        if (noCache === void 0) { noCache = false; }
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.result(noCache)];
                    case 1:
                        _a.sent();
                        key = this.schema.getConfig(this._type).key;
                        return [2, !core_1.isNull(this._cachedResult) && this._cachedResult[key] !== this._default[key]];
                }
            });
        });
    };
    SingleItemQuery.prototype.getQueryConfig = function () {
        return Object.assign({
            singleItem: this._key,
            parent: this._parent,
            depth: this._depth
        }, _super.prototype.getQueryConfig.call(this));
    };
    return SingleItemQuery;
}(base_query_1.BaseQuery));
exports.SingleItemQuery = SingleItemQuery;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var LogConfig = (function () {
    function LogConfig(types, defaultConfig) {
        var _this = this;
        this._types = new Map();
        this._types = types;
        this._defaultConfig = defaultConfig || new core_1.StoreLogBuilder().build();
        this._types.forEach(function (config) {
            if (core_1.isNull(config.mode)) {
                config.mode = _this._defaultConfig.mode;
            }
            if ((!config.eventSelection || (Array.isArray(config.eventSelection) && config.eventSelection.length === 0)) &&
                _this._defaultConfig.eventSelection) {
                config.eventSelection = _this._defaultConfig.eventSelection;
            }
            if ((!config.keys || config.keys.length === 0) && _this._defaultConfig.keys) {
                config.keys = _this._defaultConfig.keys;
            }
        });
    }
    LogConfig.prototype.hasType = function (type) {
        return this._types.has(type);
    };
    LogConfig.prototype.getConfig = function (type) {
        return this._types.get(type) || this._defaultConfig;
    };
    LogConfig.prototype.getLogMode = function (type, orDefault) {
        var config = this.getConfig(type);
        return config && config.mode ? config.mode : orDefault;
    };
    LogConfig.prototype.getEventTypes = function (type, orDefault) {
        var types;
        var config = this.getConfig(type);
        if (config) {
            var selection = Array.isArray(config.eventSelection) ? config.eventSelection : [config.eventSelection];
            types = selection.length > 0 ? selection : orDefault;
        }
        return types;
    };
    LogConfig.prototype.getKeys = function (type, orDefault) {
        var keys;
        var config = this.getConfig(type);
        if (config) {
            keys = config.keys;
        }
        return keys && keys.length > 0 ? keys : orDefault;
    };
    LogConfig.prototype.isLoggingEnabled = function (type, eventType, key) {
        var logConfig = this.getConfig(type);
        var isEnabled = logConfig && logConfig.mode !== core_1.LogMode.Disabled;
        if (isEnabled && eventType && logConfig.eventSelection) {
            isEnabled = Array.isArray(logConfig.eventSelection)
                ? logConfig.eventSelection.length === 0 || logConfig.eventSelection.indexOf(eventType) >= 0
                : logConfig.eventSelection === eventType;
        }
        if (isEnabled && !core_1.isNull(key) && logConfig.keys && logConfig.keys.length > 0) {
            isEnabled = logConfig.keys.indexOf(key) >= 0;
        }
        return isEnabled;
    };
    return LogConfig;
}());
exports.LogConfig = LogConfig;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(64));
__export(__webpack_require__(69));
__export(__webpack_require__(73));
__export(__webpack_require__(12));
__export(__webpack_require__(86));
__export(__webpack_require__(88));
__export(__webpack_require__(97));
__export(__webpack_require__(98));
__export(__webpack_require__(103));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var base_command_1 = __webpack_require__(18);
exports.BaseCommand = base_command_1.BaseCommand;
__export(__webpack_require__(65));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idb_base_command_1 = __webpack_require__(5);
exports.IdbBaseCommand = idb_base_command_1.IdbBaseCommand;
var idb_base_update_command_1 = __webpack_require__(9);
exports.IdbBaseUpdateCommand = idb_base_update_command_1.IdbBaseUpdateCommand;
var idb_base_write_command_1 = __webpack_require__(6);
exports.IdbBaseWriteCommand = idb_base_write_command_1.IdbBaseWriteCommand;
var idb_clear_command_1 = __webpack_require__(22);
exports.IdbClearCommand = idb_clear_command_1.IdbClearCommand;
var idb_command_factory_1 = __webpack_require__(36);
exports.IdbCommandFactory = idb_command_factory_1.IdbCommandFactory;
var idb_create_command_1 = __webpack_require__(37);
exports.IdbCreateCommand = idb_create_command_1.IdbCreateCommand;
var idb_put_command_1 = __webpack_require__(38);
exports.IdbPutCommand = idb_put_command_1.IdbPutCommand;
var idb_remove_command_1 = __webpack_require__(39);
exports.IdbRemoveCommand = idb_remove_command_1.IdbRemoveCommand;
var idb_update_command_1 = __webpack_require__(41);
exports.IdbUpdateCommand = idb_update_command_1.IdbUpdateCommand;


/***/ }),
/* 66 */
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
var InvalidQueryRunnerStatusError = (function (_super) {
    __extends(InvalidQueryRunnerStatusError, _super);
    function InvalidQueryRunnerStatusError(reason) {
        return _super.call(this, "Query runner is in a invalid state. " + reason) || this;
    }
    return InvalidQueryRunnerStatusError;
}(Error));
exports.InvalidQueryRunnerStatusError = InvalidQueryRunnerStatusError;


/***/ }),
/* 67 */
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
var InvalidQueryRunnerRegistration = (function (_super) {
    __extends(InvalidQueryRunnerRegistration, _super);
    function InvalidQueryRunnerRegistration(key, type) {
        return _super.call(this, type === 'already-registered'
            ? "A query runner with \"key " + key + "\" is already registered"
            : "No query runner with key \"" + key + "\" found") || this;
    }
    return InvalidQueryRunnerRegistration;
}(Error));
exports.InvalidQueryRunnerRegistration = InvalidQueryRunnerRegistration;


/***/ }),
/* 68 */
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
var core_1 = __webpack_require__(0);
var empty_input_error_1 = __webpack_require__(2);
var idb_base_update_command_1 = __webpack_require__(9);
var IdbSetCommand = (function (_super) {
    __extends(IdbSetCommand, _super);
    function IdbSetCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdbSetCommand.prototype.execute = function (key, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (core_1.isNull(data)) {
                    throw new empty_input_error_1.EmptyInputError('set');
                }
                data[this._typeConfig.key] = key;
                return [2, _super.prototype.executeHelper.call(this, data, true)];
            });
        });
    };
    return IdbSetCommand;
}(idb_base_update_command_1.IdbBaseUpdateCommand));
exports.IdbSetCommand = IdbSetCommand;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(42);
exports.Context = context_1.Context;
var context_builder_1 = __webpack_require__(46);
exports.ContextBuilder = context_builder_1.ContextBuilder;
__export(__webpack_require__(70));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idb_context_1 = __webpack_require__(47);
exports.IdbContext = idb_context_1.IdbContext;
var idb_context_builder_1 = __webpack_require__(72);
exports.IdbContextBuilder = idb_context_builder_1.IdbContextBuilder;


/***/ }),
/* 71 */
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
/* 72 */
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
var core_1 = __webpack_require__(0);
var context_builder_1 = __webpack_require__(46);
var idb_context_1 = __webpack_require__(47);
var IdbContextBuilder = (function (_super) {
    __extends(IdbContextBuilder, _super);
    function IdbContextBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdbContextBuilder.prototype.dbName = function (value) {
        this._dbName = value;
        return this;
    };
    IdbContextBuilder.prototype.dbVersion = function (value) {
        this._dbVersion = value;
        return this;
    };
    IdbContextBuilder.prototype.dbUpgrade = function (value) {
        this._dbUpgrade = value;
        return this;
    };
    IdbContextBuilder.prototype.build = function () {
        if (!this.isValid()) {
            throw new Error('Configuration for IndexedDb-Context is incomplete. Please provide a `name` and a `version` greater than 0.');
        }
        var config = {
            name: this._dbName,
            version: this._dbVersion,
            upgrade: this._dbUpgrade
        };
        var context = new idb_context_1.IdbContext(this._schema, this._normalizerBuilder, this._denormalizerBuilder, config);
        if (this._enableLogging) {
            context.logger().enable(this._enableLogging);
        }
        return context;
    };
    IdbContextBuilder.prototype.isValid = function () {
        return this._dbName &&
            this._dbName.length > 0 &&
            !core_1.isNull(this._dbVersion) &&
            this._dbVersion > 0;
    };
    return IdbContextBuilder;
}(context_builder_1.ContextBuilder));
exports.IdbContextBuilder = IdbContextBuilder;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(74);
exports.DataStore = data_store_1.DataStore;
__export(__webpack_require__(75));


/***/ }),
/* 74 */
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
var count_query_1 = __webpack_require__(56);
var query_1 = __webpack_require__(57);
var single_item_query_1 = __webpack_require__(60);
var DataStore = (function () {
    function DataStore(_context, _autoCloseContext) {
        if (_autoCloseContext === void 0) { _autoCloseContext = true; }
        this._context = _context;
        this._autoCloseContext = _autoCloseContext;
        this.eventPipe = this._context.eventPipe;
    }
    DataStore.prototype.count = function (type, options) {
        return new count_query_1.CountQuery(this._context, this.isAutoClose(options), type);
    };
    DataStore.prototype.find = function (type, options) {
        return new query_1.Query(this._context, this.isAutoClose(options), type);
    };
    DataStore.prototype.findByKey = function (type, key, options) {
        return new single_item_query_1.SingleItemQuery(this._context, this.isAutoClose(options), type, key);
    };
    DataStore.prototype.create = function (type, item, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this._context.commandFactory().createCommand(type);
                        return [4, cmd.execute(item, options ? options.parent : null)];
                    case 1:
                        success = _a.sent();
                        this.autoClose(options);
                        return [2, success];
                }
            });
        });
    };
    DataStore.prototype.update = function (type, item, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this._context.commandFactory().updateCommand(type);
                        return [4, cmd.execute(item, options && options.isPartialUpdate)];
                    case 1:
                        success = _a.sent();
                        this.autoClose(options);
                        return [2, success];
                }
            });
        });
    };
    DataStore.prototype.set = function (type, key, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this._context.commandFactory().setCommand(type);
                        return [4, cmd.execute(key, data)];
                    case 1:
                        success = _a.sent();
                        this.autoClose(options);
                        return [2, success];
                }
            });
        });
    };
    DataStore.prototype.put = function (type, item, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this._context.commandFactory().putCommand(type);
                        return [4, (options
                                ? cmd.execute(item, options.parent, options.isPartialUpdate)
                                : cmd.execute(item))];
                    case 1:
                        success = _a.sent();
                        this.autoClose(options);
                        return [2, success];
                }
            });
        });
    };
    DataStore.prototype.remove = function (type, item, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this._context.commandFactory().removeCommand(type);
                        return [4, cmd.execute(item)];
                    case 1:
                        success = _a.sent();
                        this.autoClose(options);
                        return [2, success];
                }
            });
        });
    };
    DataStore.prototype.clear = function (type, options) {
        return __awaiter(this, void 0, void 0, function () {
            var success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._context.commandFactory().clearCommand(options && options.includeLogs).execute(type)];
                    case 1:
                        success = _a.sent();
                        this.autoClose(options);
                        return [2, success];
                }
            });
        });
    };
    DataStore.prototype.isAutoClose = function (options) {
        return (options && options.autoCloseContext) || this._autoCloseContext;
    };
    DataStore.prototype.autoClose = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isAutoClose(options)) return [3, 2];
                        return [4, this._context.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    return DataStore;
}());
exports.DataStore = DataStore;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(76));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var base_options_builder_1 = __webpack_require__(1);
exports.BaseOptionsBuilder = base_options_builder_1.BaseOptionsBuilder;
var clear_options_builder_1 = __webpack_require__(77);
exports.ClearOptionsBuilder = clear_options_builder_1.ClearOptionsBuilder;
var count_options_builder_1 = __webpack_require__(78);
exports.CountOptionsBuilder = count_options_builder_1.CountOptionsBuilder;
var create_options_builder_1 = __webpack_require__(79);
exports.CreateOptionsBuilder = create_options_builder_1.CreateOptionsBuilder;
var find_by_key_options_builder_1 = __webpack_require__(80);
exports.FindByKeyOptionsBuilder = find_by_key_options_builder_1.FindByKeyOptionsBuilder;
var find_options_builder_1 = __webpack_require__(81);
exports.FindOptionsBuilder = find_options_builder_1.FindOptionsBuilder;
var put_options_builder_1 = __webpack_require__(82);
exports.PutOptionsBuilder = put_options_builder_1.PutOptionsBuilder;
var remove_options_builder_1 = __webpack_require__(83);
exports.RemoveOptionsBuilder = remove_options_builder_1.RemoveOptionsBuilder;
var set_options_builder_1 = __webpack_require__(84);
exports.SetOptionsBuilder = set_options_builder_1.SetOptionsBuilder;
var update_options_builder_1 = __webpack_require__(85);
exports.UpdateOptionsBuilder = update_options_builder_1.UpdateOptionsBuilder;


/***/ }),
/* 77 */
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
var base_options_builder_1 = __webpack_require__(1);
var ClearOptionsBuilder = (function (_super) {
    __extends(ClearOptionsBuilder, _super);
    function ClearOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearOptionsBuilder.prototype.includeLogs = function (value) {
        this._includeLogs = value;
        return this;
    };
    ClearOptionsBuilder.prototype.build = function () {
        return this.assignBase({ includeLogs: this._includeLogs });
    };
    return ClearOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.ClearOptionsBuilder = ClearOptionsBuilder;


/***/ }),
/* 78 */
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
var base_options_builder_1 = __webpack_require__(1);
var CountOptionsBuilder = (function (_super) {
    __extends(CountOptionsBuilder, _super);
    function CountOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CountOptionsBuilder.prototype.build = function () {
        return this.buildBase();
    };
    return CountOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.CountOptionsBuilder = CountOptionsBuilder;


/***/ }),
/* 79 */
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
var base_options_builder_1 = __webpack_require__(1);
var CreateOptionsBuilder = (function (_super) {
    __extends(CreateOptionsBuilder, _super);
    function CreateOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateOptionsBuilder.prototype.parent = function (value) {
        this._parent = value;
        return this;
    };
    CreateOptionsBuilder.prototype.build = function () {
        return this.assignBase({ parent: this._parent });
    };
    return CreateOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.CreateOptionsBuilder = CreateOptionsBuilder;


/***/ }),
/* 80 */
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
var base_options_builder_1 = __webpack_require__(1);
var FindByKeyOptionsBuilder = (function (_super) {
    __extends(FindByKeyOptionsBuilder, _super);
    function FindByKeyOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindByKeyOptionsBuilder.prototype.build = function () {
        return this.buildBase();
    };
    return FindByKeyOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.FindByKeyOptionsBuilder = FindByKeyOptionsBuilder;


/***/ }),
/* 81 */
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
var base_options_builder_1 = __webpack_require__(1);
var FindOptionsBuilder = (function (_super) {
    __extends(FindOptionsBuilder, _super);
    function FindOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindOptionsBuilder.prototype.build = function () {
        return this.buildBase();
    };
    return FindOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.FindOptionsBuilder = FindOptionsBuilder;


/***/ }),
/* 82 */
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
var base_options_builder_1 = __webpack_require__(1);
var PutOptionsBuilder = (function (_super) {
    __extends(PutOptionsBuilder, _super);
    function PutOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PutOptionsBuilder.prototype.parent = function (value) {
        this._parent = value;
        return this;
    };
    PutOptionsBuilder.prototype.isPartialUpdate = function (value) {
        this._isPartialUpdate = value;
        return this;
    };
    PutOptionsBuilder.prototype.build = function () {
        return this.assignBase({
            parent: this._parent,
            isPartialUpdate: this._isPartialUpdate
        });
    };
    return PutOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.PutOptionsBuilder = PutOptionsBuilder;


/***/ }),
/* 83 */
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
var base_options_builder_1 = __webpack_require__(1);
var RemoveOptionsBuilder = (function (_super) {
    __extends(RemoveOptionsBuilder, _super);
    function RemoveOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveOptionsBuilder.prototype.build = function () {
        return this.buildBase();
    };
    return RemoveOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.RemoveOptionsBuilder = RemoveOptionsBuilder;


/***/ }),
/* 84 */
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
var base_options_builder_1 = __webpack_require__(1);
var SetOptionsBuilder = (function (_super) {
    __extends(SetOptionsBuilder, _super);
    function SetOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetOptionsBuilder.prototype.build = function () {
        return this.buildBase();
    };
    return SetOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.SetOptionsBuilder = SetOptionsBuilder;


/***/ }),
/* 85 */
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
var base_options_builder_1 = __webpack_require__(1);
var UpdateOptionsBuilder = (function (_super) {
    __extends(UpdateOptionsBuilder, _super);
    function UpdateOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateOptionsBuilder.prototype.isPartialUpdate = function (value) {
        this._isPartialUpdate = value;
        return this;
    };
    UpdateOptionsBuilder.prototype.build = function () {
        return this.assignBase({ isPartialUpdate: this._isPartialUpdate });
    };
    return UpdateOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.UpdateOptionsBuilder = UpdateOptionsBuilder;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var base_event_1 = __webpack_require__(3);
exports.BaseEvent = base_event_1.BaseEvent;
var cleared_event_1 = __webpack_require__(23);
exports.ClearedEvent = cleared_event_1.ClearedEvent;
var created_event_1 = __webpack_require__(10);
exports.CreatedEvent = created_event_1.CreatedEvent;
var removed_event_1 = __webpack_require__(11);
exports.RemovedEvent = removed_event_1.RemovedEvent;
var updated_event_1 = __webpack_require__(20);
exports.UpdatedEvent = updated_event_1.UpdatedEvent;
__export(__webpack_require__(87));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_pipe_1 = __webpack_require__(43);
exports.EventPipe = event_pipe_1.EventPipe;
var event_queue_1 = __webpack_require__(19);
exports.EventQueue = event_queue_1.EventQueue;
var event_registration_1 = __webpack_require__(45);
exports.EventRegistration = event_registration_1.EventRegistration;
var event_registration_builder_1 = __webpack_require__(44);
exports.EventRegistrationBuilder = event_registration_builder_1.EventRegistrationBuilder;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(24);
exports.Logger = logger_1.Logger;
__export(__webpack_require__(89));
__export(__webpack_require__(91));
__export(__webpack_require__(93));
__export(__webpack_require__(94));
__export(__webpack_require__(95));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clear_logs_options_builder_1 = __webpack_require__(90);
exports.ClearLogsOptionsBuilder = clear_logs_options_builder_1.ClearLogsOptionsBuilder;


/***/ }),
/* 90 */
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
var base_options_builder_1 = __webpack_require__(1);
var ClearLogsOptionsBuilder = (function (_super) {
    __extends(ClearLogsOptionsBuilder, _super);
    function ClearLogsOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearLogsOptionsBuilder.prototype.types = function (value) {
        this._types = value;
        return this;
    };
    ClearLogsOptionsBuilder.prototype.key = function (value) {
        this._key = value;
        return this;
    };
    ClearLogsOptionsBuilder.prototype.build = function () {
        return this.assignBase({
            types: this._types,
            key: this._key
        });
    };
    return ClearLogsOptionsBuilder;
}(base_options_builder_1.BaseOptionsBuilder));
exports.ClearLogsOptionsBuilder = ClearLogsOptionsBuilder;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_config_1 = __webpack_require__(61);
exports.LogConfig = log_config_1.LogConfig;
var log_config_builder_1 = __webpack_require__(92);
exports.LogConfigBuilder = log_config_builder_1.LogConfigBuilder;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_config_1 = __webpack_require__(61);
var LogConfigBuilder = (function () {
    function LogConfigBuilder() {
        this._types = new Map();
    }
    LogConfigBuilder.prototype.setDefault = function (config) {
        this._defaultConfig = config;
        return this;
    };
    LogConfigBuilder.prototype.hasType = function (type) {
        return this._types.has(type);
    };
    LogConfigBuilder.prototype.setType = function (type, config) {
        this._types.set(type, config);
        return this;
    };
    LogConfigBuilder.prototype.removeType = function (type) {
        this._types.delete(type);
        return this;
    };
    LogConfigBuilder.prototype.build = function () {
        return new log_config_1.LogConfig(this._types, this._defaultConfig);
    };
    return LogConfigBuilder;
}());
exports.LogConfigBuilder = LogConfigBuilder;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idb_clear_logs_command_1 = __webpack_require__(27);
exports.IdbClearLogsCommand = idb_clear_logs_command_1.IdbClearLogsCommand;
var idb_log_query_runner_1 = __webpack_require__(28);
exports.IdbLogQueryRunner = idb_log_query_runner_1.IdbLogQueryRunner;
var idb_logger_1 = __webpack_require__(4);
exports.IdbLogger = idb_logger_1.IdbLogger;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_entry_1 = __webpack_require__(26);
exports.LogEntry = log_entry_1.LogEntry;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_query_1 = __webpack_require__(25);
exports.LogQuery = log_query_1.LogQuery;
var log_query_config_1 = __webpack_require__(96);
exports.LogQueryConfig = log_query_config_1.LogQueryConfig;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogQueryConfig = (function () {
    function LogQueryConfig() {
    }
    return LogQueryConfig;
}());
exports.LogQueryConfig = LogQueryConfig;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parent_1 = __webpack_require__(7);
exports.Parent = parent_1.Parent;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var base_query_1 = __webpack_require__(8);
exports.BaseQuery = base_query_1.BaseQuery;
var count_query_1 = __webpack_require__(56);
exports.CountQuery = count_query_1.CountQuery;
var query_1 = __webpack_require__(57);
exports.Query = query_1.Query;
var single_item_query_1 = __webpack_require__(60);
exports.SingleItemQuery = single_item_query_1.SingleItemQuery;
__export(__webpack_require__(53));
__export(__webpack_require__(99));
__export(__webpack_require__(100));
__export(__webpack_require__(101));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mapper_1 = __webpack_require__(58);
exports.Mapper = mapper_1.Mapper;
var reducer_1 = __webpack_require__(17);
exports.Reducer = reducer_1.Reducer;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __webpack_require__(16);
exports.Filter = filter_1.Filter;
var query_config_1 = __webpack_require__(59);
exports.QueryConfig = query_config_1.QueryConfig;
var sorter_1 = __webpack_require__(51);
exports.Sorter = sorter_1.Sorter;
__export(__webpack_require__(52));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(102));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idb_base_document_query_runner_1 = __webpack_require__(14);
exports.IdbBaseDocumentQueryRunner = idb_base_document_query_runner_1.IdbBaseDocumentQueryRunner;
var idb_base_query_runner_1 = __webpack_require__(13);
exports.IdbBaseQueryRunner = idb_base_query_runner_1.IdbBaseQueryRunner;
var idb_count_query_runner_1 = __webpack_require__(49);
exports.IdbCountQueryRunner = idb_count_query_runner_1.IdbCountQueryRunner;
var idb_query_runner_1 = __webpack_require__(50);
exports.IdbQueryRunner = idb_query_runner_1.IdbQueryRunner;
var idb_query_runner_factory_1 = __webpack_require__(48);
exports.IdbQueryRunnerFactory = idb_query_runner_factory_1.IdbQueryRunnerFactory;
var idb_single_item_query_runner_1 = __webpack_require__(55);
exports.IdbSingleItemQueryRunner = idb_single_item_query_runner_1.IdbSingleItemQueryRunner;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var refs_write_1 = __webpack_require__(21);
exports.RefsWriteUtility = refs_write_1.RefsWriteUtility;
var valid_key_1 = __webpack_require__(40);
exports.isValidKey = valid_key_1.isValidKey;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map