require('source-map-support/register');
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  server: {
    port: 4000
  },
  // This secret will be read by JWT library while creating and validating
  // tokens. In production, we need to store this secret in environment variable
  // instead of a file.
  // https://github.com/clintmod/koa-jwt-login-example/blob/master/src/app.js
  JWT_SECRET: process.env.JWT_SECRET || 'my_jwt_secret'
});

/***/ }),

/***/ "./src/core/database/mysql.js":
/*!************************************!*\
  !*** ./src/core/database/mysql.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_1__);




const pool = mysql__WEBPACK_IMPORTED_MODULE_1___default.a.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'nuxtuser',
  password: 'nuxtpass',
  database: 'nuxtDB'
});
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed');
    }

    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections');
    }

    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  } // Release the connection to the pool if no error


  if (connection) {
    connection.release();
  }
});
pool.query = util__WEBPACK_IMPORTED_MODULE_0___default.a.promisify(pool.query);
/* harmony default export */ __webpack_exports__["default"] = (pool);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares.js");





const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || _config__WEBPACK_IMPORTED_MODULE_1__["default"].server.port;
Object(_middlewares__WEBPACK_IMPORTED_MODULE_2__["default"])(app);
app.listen(port, host);

/***/ }),

/***/ "./src/middlewares.js":
/*!****************************!*\
  !*** ./src/middlewares.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes-public */ "./src/routes-public.js");
/* harmony import */ var _routes_private__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes-private */ "./src/routes-private.js");
/* harmony import */ var _middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/errorHandler */ "./src/middlewares/errorHandler.js");
/* harmony import */ var _middlewares_notFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/notFound */ "./src/middlewares/notFound.js");
/* harmony import */ var _middlewares_okOutput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/okOutput */ "./src/middlewares/okOutput.js");


 // import favicon from 'koa-favicon'







/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use(koa_static__WEBPACK_IMPORTED_MODULE_0___default()('assets')); // app.use(favicon('static/favicon.ico'))

  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()());
  app.use(_middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_4__["default"]);
  app.use(_middlewares_notFound__WEBPACK_IMPORTED_MODULE_5__["default"]);
  app.use(_middlewares_okOutput__WEBPACK_IMPORTED_MODULE_6__["default"]);
  app.use(_routes_public__WEBPACK_IMPORTED_MODULE_2__["default"].routes(), _routes_public__WEBPACK_IMPORTED_MODULE_2__["default"].allowedMethods());
  app.use(_routes_private__WEBPACK_IMPORTED_MODULE_3__["default"].routes(), _routes_private__WEBPACK_IMPORTED_MODULE_3__["default"].allowedMethods());
});

/***/ }),

/***/ "./src/middlewares/authenticate.js":
/*!*****************************************!*\
  !*** ./src/middlewares/authenticate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config/index.js");




/* harmony default export */ __webpack_exports__["default"] = (async (ctx, next) => {
  if (!ctx.header.authorization) {
    ctx.throw(401, 'should sign-in or sign-up to access this content');
  } // get the token


  const token = ctx.header.authorization.split(' ')[1];

  try {
    ctx.state.jwtPayload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, config__WEBPACK_IMPORTED_MODULE_1__["default"].JWT_SECRET);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      ctx.throw(401, err.message);
    }

    ctx.throw(403, err.message);
  }

  await next();
});

/***/ }),

/***/ "./src/middlewares/errorHandler.js":
/*!*****************************************!*\
  !*** ./src/middlewares/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.type = 'json';
    ctx.body = {
      status: ctx.status,
      message: err.message
    };
    ctx.app.emit('error', err, ctx);
  }
});

/***/ }),

/***/ "./src/middlewares/notFound.js":
/*!*************************************!*\
  !*** ./src/middlewares/notFound.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (async (ctx, next) => {
  await next();

  if (ctx.status === 404) {
    ctx.throw(404, 'Not found');
  }
});

/***/ }),

/***/ "./src/middlewares/okOutput.js":
/*!*************************************!*\
  !*** ./src/middlewares/okOutput.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (async (ctx, next) => {
  await next();

  if (ctx.status === 200) {
    ctx.body = {
      status: 200,
      data: ctx.body
    };
  }
});

/***/ }),

/***/ "./src/modules/private/animes/_router/index.js":
/*!*****************************************************!*\
  !*** ./src/modules/private/animes/_router/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_database_mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/database/mysql */ "./src/core/database/mysql.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
router.get('/', (ctx, next) => {
  try {
    var animes = core_database_mysql__WEBPACK_IMPORTED_MODULE_1__["default"].query('SELECT a.* FROM `episode` as e inner join `anime` as a on e.anime_id = a.id');
  } catch (err) {
    ctx.throw(500, err.sqlMessage);
  }

  ctx.type = 'json';
  ctx.body = animes;
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/private/animes/index.js":
/*!*********************************************!*\
  !*** ./src/modules/private/animes/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_router */ "./src/modules/private/animes/_router/index.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/anime'
});
const routes = [_router__WEBPACK_IMPORTED_MODULE_1__["default"]];

for (let route of routes) {
  router.use(route.routes(), route.allowedMethods());
}

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/animes/_routes/index.js":
/*!****************************************************!*\
  !*** ./src/modules/public/animes/_routes/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_database_mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/database/mysql */ "./src/core/database/mysql.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
router.get('/', async (ctx, next) => {
  try {
    var animes = await core_database_mysql__WEBPACK_IMPORTED_MODULE_1__["default"].query('SELECT a.*, e.* FROM episode e INNER JOIN anime a ON e.anime_id = a.id ');
  } catch (err) {
    ctx.throw(500, err.sqlMessage);
  }

  ctx.type = 'json';
  ctx.body = animes;
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/animes/_routes/show.js":
/*!***************************************************!*\
  !*** ./src/modules/public/animes/_routes/show.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_database_mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/database/mysql */ "./src/core/database/mysql.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
router.get('/:id', async (ctx, next) => {
  try {
    var anime = await core_database_mysql__WEBPACK_IMPORTED_MODULE_1__["default"].query('SELECT * FROM anime WHERE id = ?', [ctx.params.id]);
  } catch (err) {
    ctx.throw(500, err.sqlMessage);
  }

  if (!anime) {
    ctx.status = 404;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/animes/index.js":
/*!********************************************!*\
  !*** ./src/modules/public/animes/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./src/modules/public/animes/_routes/index.js");
/* harmony import */ var _routes_show_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_routes/show.js */ "./src/modules/public/animes/_routes/show.js");





const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/anime'
});
const routes = [_routes__WEBPACK_IMPORTED_MODULE_1__["default"], _routes_show_js__WEBPACK_IMPORTED_MODULE_2__["default"]];

for (let route of routes) {
  router.use(route.routes(), route.allowedMethods());
}

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/login/_routes/local.js":
/*!***************************************************!*\
  !*** ./src/modules/public/login/_routes/local.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_database_mysql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/database/mysql */ "./src/core/database/mysql.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config */ "./src/config/index.js");







const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
router.post('/local', async (ctx, next) => {
  let request = ctx.request.body || {};

  if (request.username === undefined) {
    ctx.throw(400, 'username param is required');
  }

  if (request.username === '') {
    ctx.throw(400, 'username is required');
  }

  if (request.password === undefined) {
    ctx.throw(400, 'password param is required');
  }

  if (request.password === '') {
    ctx.throw(400, 'password is required');
  }

  let username = request.username;
  let password = request.password;
  let users = [];

  try {
    users = await core_database_mysql__WEBPACK_IMPORTED_MODULE_3__["default"].query('SELECT * FROM `users` WHERE username = ?', [username]);
  } catch (err) {
    ctx.throw(400, err.sqlMessage);
  }

  if (users.length === 0) {
    ctx.throw(404, 'user not found');
  }

  let user = users[0];
  let match = false;

  try {
    match = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.compareSync(password, user.password);
  } catch (err) {
    ctx.throw(401, err);
  }

  if (match === false) {
    ctx.throw(401, 'invalid password');
  }

  let payload = {
    name: user.name,
    email: user.email
  };
  let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(payload, config__WEBPACK_IMPORTED_MODULE_4__["default"].JWT_SECRET, {
    expiresIn: 1 * 60
  });
  ctx.body = {
    user: payload,
    message: 'logged in ok',
    token: token
  };
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/login/index.js":
/*!*******************************************!*\
  !*** ./src/modules/public/login/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes/local */ "./src/modules/public/login/_routes/local.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/login'
});
const routes = [_routes_local__WEBPACK_IMPORTED_MODULE_1__["default"]];

for (let route of routes) {
  router.use(route.routes(), route.allowedMethods());
}

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/user/_routes/fetch-user.js":
/*!*******************************************************!*\
  !*** ./src/modules/public/user/_routes/fetch-user.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_database_mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/database/mysql */ "./src/core/database/mysql.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
router.get('/:id', async (ctx, next) => {
  const id = parseInt(ctx.params.id);

  try {
    var user = core_database_mysql__WEBPACK_IMPORTED_MODULE_1__["default"].query('SELECT `id`, `name`, `created_on` FROM `users` WHERE id = ?', [ctx.params.id]);
  } catch (err) {
    ctx.throw(500, err.sqlMessage);
  }

  if (!user) {
    ctx.status = 404;
  } else {
    ctx.type = 'json';
    ctx.body = user;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/user/_routes/index.js":
/*!**************************************************!*\
  !*** ./src/modules/public/user/_routes/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_database_mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/database/mysql */ "./src/core/database/mysql.js");




const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
router.get('/', async (ctx, next) => {
  try {
    var users = await core_database_mysql__WEBPACK_IMPORTED_MODULE_1__["default"].query('SELECT `id`, `name`, `created_on` FROM `users`');
  } catch (err) {
    ctx.throw(500, err.sqlMessage);
  }

  ctx.type = 'json';
  ctx.body = users;
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/modules/public/user/index.js":
/*!******************************************!*\
  !*** ./src/modules/public/user/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./src/modules/public/user/_routes/index.js");
/* harmony import */ var _routes_fetch_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_routes/fetch-user */ "./src/modules/public/user/_routes/fetch-user.js");





const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/users'
});
const routes = [_routes__WEBPACK_IMPORTED_MODULE_1__["default"], _routes_fetch_user__WEBPACK_IMPORTED_MODULE_2__["default"]];

for (let route of routes) {
  router.use(route.routes(), route.allowedMethods());
}

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/routes-private.js":
/*!*******************************!*\
  !*** ./src/routes-private.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_animes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private/animes */ "./src/modules/private/animes/index.js");
/* harmony import */ var _middlewares_authenticate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/authenticate */ "./src/middlewares/authenticate.js");





const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/private'
});
const modules = [private_animes__WEBPACK_IMPORTED_MODULE_1__["default"]];

for (let module of modules) {
  router.use(_middlewares_authenticate__WEBPACK_IMPORTED_MODULE_2__["default"], module.routes(), module.allowedMethods());
}

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/routes-public.js":
/*!******************************!*\
  !*** ./src/routes-public.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_public_animes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/public/animes */ "./src/modules/public/animes/index.js");
/* harmony import */ var modules_public_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/public/login */ "./src/modules/public/login/index.js");
/* harmony import */ var modules_public_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/public/user */ "./src/modules/public/user/index.js");






const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  prefix: '/public'
});
const modules = [modules_public_animes__WEBPACK_IMPORTED_MODULE_1__["default"], modules_public_login__WEBPACK_IMPORTED_MODULE_2__["default"], modules_public_user__WEBPACK_IMPORTED_MODULE_3__["default"]];

for (let module of modules) {
  router.use(module.routes(), module.allowedMethods());
}

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/omar/tailwind-practice/nuxt-with-tail/backend/src/index.js */"./src/index.js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=main.map