/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cityInput = document.querySelector("#input-city");
var searchBtn = document.querySelector(".search");
var img = document.querySelector(".pictest");

function getWeatherData(_x) {
  return _getWeatherData.apply(this, arguments);
}

function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var response, weatherData, newData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=".concat(location, "&lang=de"), {
              mode: 'cors'
            });

          case 2:
            response = _context.sent;

            if (!response.ok) {
              throwErrorMsg();
            }

            _context.next = 6;
            return response.json();

          case 6:
            weatherData = _context.sent;
            newData = processData(weatherData);
            setSearchResult(newData);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getWeatherData.apply(this, arguments);
}

function throwErrorMsg() {
  console.log("error");
}

function setSearchResult(weatherData) {
  if (!weatherData) return;
  var weather = document.querySelector(".weather");
  var city = document.querySelector(".city");
  var celsius = document.querySelector(".celsius");
  var feelsLike = document.querySelector(".feelslike-data");
  var wind = document.querySelector(".wind-data");
  var humidity = document.querySelector(".humidity-data");
  var day = document.querySelector(".day");
  var time = document.querySelector(".time");
  city.textContent = "".concat(weatherData.location, ", ").concat(weatherData.region);
  weather.textContent = "".concat(weatherData.condition);
  celsius.textContent = "".concat(weatherData.currentTemp, "\xB0C");
  feelsLike.textContent = "".concat(weatherData.feelslike, " \xB0C");
  wind.textContent = "".concat(weatherData.wind, " km/h");
  humidity.textContent = "".concat(weatherData.humidity, "%");
  day.textContent = "".concat(weatherData.dayName, ", ").concat(weatherData.day, ". ").concat(weatherData.month, " ").concat(weatherData.year);
  time.textContent = "".concat(weatherData.hours, ":").concat(weatherData.minutes, " Uhr");
}

function processData(weatherData) {
  var date = new Date("".concat(weatherData.location.localtime));
  var data = {
    condition: weatherData.current.condition.text,
    feelslike: Math.round(weatherData.current.feelslike_c),
    currentTemp: Math.round(weatherData.current.temp_c),
    wind: Math.round(weatherData.current.wind_kph),
    humidity: weatherData.current.humidity,
    location: weatherData.location.name,
    region: weatherData.location.region,
    day: date.getDate(),
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes()
  };
  var hours = date.getHours();

  switch (hours) {
    case 0:
      data["hours"] = "00";
      break;

    case 1:
      data["hours"] = "01";
      break;

    case 2:
      data["hours"] = "02";
      break;

    case 3:
      data["hours"] = "03";
      break;

    case 4:
      data["hours"] = "04";
      break;

    case 5:
      data["hours"] = "05";
      break;

    case 6:
      data["hours"] = "06";
      break;

    case 7:
      data["hours"] = "07";
      break;

    case 8:
      data["hours"] = "08";
      break;

    case 9:
      data["hours"] = "09";
      break;
  }

  var dayName = date.getDay();

  switch (dayName) {
    case 0:
      data["dayName"] = "Sonntag";
      break;

    case 1:
      data["dayName"] = "Montag";
      break;

    case 2:
      data["dayName"] = "Dienstag";
      break;

    case 3:
      data["dayName"] = "Mittwoch";
      break;

    case 4:
      data["dayName"] = "Donnerstag";
      break;

    case 5:
      data["dayName"] = "Freitag";
      break;

    case 6:
      data["dayName"] = "Samstag";
      break;
  }

  var month = date.getMonth();

  switch (month) {
    case 0:
      data["month"] = "Januar";
      break;

    case 1:
      data["month"] = "Februar";
      break;

    case 2:
      data["month"] = "März";
      break;

    case 3:
      data["month"] = "April";
      break;

    case 4:
      data["month"] = "Mai";
      break;

    case 5:
      data["month"] = "Juni";
      break;

    case 6:
      data["month"] = "Juli";
      break;

    case 7:
      data["month"] = "August";
      break;

    case 8:
      data["month"] = "September";
      break;

    case 9:
      data["month"] = "Oktober";
      break;

    case 10:
      data["month"] = "November";
      break;

    case 11:
      data["month"] = "Dezember";
      break;
  }

  console.log(data);
  return data;
} // function processTime(weatherData) {
//     const date = new Date(`${weatherData.location.localtime}`)
//     const day = date.getDay();
//     let dayDe;
//     switch (day) {
//         case 0:
//             dayDe = "Sonntag"
//             break;
//         case 1:
//             dayDe = "Montag"
//             break;
//         case 2:
//             dayDe = "Dienstag"
//             break;
//         case 3:
//             dayDe = "Mittwoch"
//             break;
//         case 4:
//             dayDe = "Donnerstag"
//             break;
//         case 5:
//             dayDe = "Freitag"
//             break;
//         case 6:
//             dayDe = "Samstag"
//             break;
//     }
//     return dayDe;
// }


function testfunction() {
  var date = new Date("2022-08-12 15:12");
  var day = date.getDate();
  return day;
}

console.log(testfunction());
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (cityInput.value == "") return;
  getWeatherData(cityInput.value);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0EsU0FBU2UsWUFBVCxHQUF3QjtFQUNwQixJQUFNbEIsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBUyxrQkFBVCxDQUFiO0VBQ0EsSUFBTWIsR0FBRyxHQUFHWSxJQUFJLENBQUNZLE9BQUwsRUFBWjtFQUNBLE9BQU94QixHQUFQO0FBQ0g7O0FBRURSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUMsWUFBWSxFQUF4QjtBQUdBcEQsU0FBUyxDQUFDcUQsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0VBQ3ZDQSxDQUFDLENBQUNDLGNBQUY7RUFDQSxJQUFJMUQsU0FBUyxDQUFDMkQsS0FBVixJQUFtQixFQUF2QixFQUEyQjtFQUMzQnRELGNBQWMsQ0FBQ0wsU0FBUyxDQUFDMkQsS0FBWCxDQUFkO0FBQ0gsQ0FKRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC1jaXR5XCIpO1xyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKVxyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBpY3Rlc3RcIilcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTE5ODY0ODA2NTZlYzQ5MGQ5NTAyMDQ5MjMyMDI2MTEmcT0ke2xvY2F0aW9ufSZsYW5nPWRlYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJ1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3dFcnJvck1zZygpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gcHJvY2Vzc0RhdGEod2VhdGhlckRhdGEpO1xyXG4gICAgc2V0U2VhcmNoUmVzdWx0KG5ld0RhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aHJvd0Vycm9yTXNnKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZWFyY2hSZXN1bHQod2VhdGhlckRhdGEpIHtcclxuICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpO1xyXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKVxyXG4gICAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Vsc2l1c1wiKVxyXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc2xpa2UtZGF0YVwiKTtcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtZGF0YVwiKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eS1kYXRhXCIpO1xyXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXlcIik7XHJcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xyXG5cclxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbn0sICR7d2VhdGhlckRhdGEucmVnaW9ufWBcclxuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jb25kaXRpb259YFxyXG4gICAgY2Vsc2l1cy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRUZW1wfcKwQ2BcclxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmZlZWxzbGlrZX0gwrBDYFxyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLndpbmR9IGttL2hgXHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSVgXHJcbiAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5kYXlOYW1lfSwgJHt3ZWF0aGVyRGF0YS5kYXl9LiAke3dlYXRoZXJEYXRhLm1vbnRofSAke3dlYXRoZXJEYXRhLnllYXJ9YFxyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmhvdXJzfToke3dlYXRoZXJEYXRhLm1pbnV0ZXN9IFVocmBcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEod2VhdGhlckRhdGEpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWV9YClcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIGZlZWxzbGlrZTogTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jKSxcclxuICAgICAgICBjdXJyZW50VGVtcDogTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyksXHJcbiAgICAgICAgd2luZDogTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoKSxcclxuICAgICAgICBodW1pZGl0eTogd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgICBsb2NhdGlvbjogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgICAgICByZWdpb246IHdlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbixcclxuICAgICAgICBkYXk6IGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBob3VyczogZGF0ZS5nZXRIb3VycygpLFxyXG4gICAgICAgIG1pbnV0ZXM6IGRhdGUuZ2V0TWludXRlcygpLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIHN3aXRjaCAoaG91cnMpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDBcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDFcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDJcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDNcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDRcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDVcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDZcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDdcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDhcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgIGRhdGFbXCJob3Vyc1wiXSA9IFwiMDlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXlOYW1lID0gZGF0ZS5nZXREYXkoKTtcclxuICAgIHN3aXRjaCAoZGF5TmFtZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZGF0YVtcImRheU5hbWVcIl0gPSBcIlNvbm50YWdcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGRhdGFbXCJkYXlOYW1lXCJdID0gXCJNb250YWdcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGRhdGFbXCJkYXlOYW1lXCJdID0gXCJEaWVuc3RhZ1wiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgZGF0YVtcImRheU5hbWVcIl0gPSBcIk1pdHR3b2NoXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBkYXRhW1wiZGF5TmFtZVwiXSA9IFwiRG9ubmVyc3RhZ1wiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgZGF0YVtcImRheU5hbWVcIl0gPSBcIkZyZWl0YWdcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGRhdGFbXCJkYXlOYW1lXCJdID0gXCJTYW1zdGFnXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHJcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBkYXRhW1wibW9udGhcIl0gPSBcIkphbnVhclwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZGF0YVtcIm1vbnRoXCJdID0gXCJGZWJydWFyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBkYXRhW1wibW9udGhcIl0gPSBcIk3DpHJ6XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBkYXRhW1wibW9udGhcIl0gPSBcIkFwcmlsXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBkYXRhW1wibW9udGhcIl0gPSBcIk1haVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgZGF0YVtcIm1vbnRoXCJdID0gXCJKdW5pXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBkYXRhW1wibW9udGhcIl0gPSBcIkp1bGlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgIGRhdGFbXCJtb250aFwiXSA9IFwiQXVndXN0XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICBkYXRhW1wibW9udGhcIl0gPSBcIlNlcHRlbWJlclwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgZGF0YVtcIm1vbnRoXCJdID0gXCJPa3RvYmVyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgZGF0YVtcIm1vbnRoXCJdID0gXCJOb3ZlbWJlclwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgIGRhdGFbXCJtb250aFwiXSA9IFwiRGV6ZW1iZXJcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBwcm9jZXNzVGltZSh3ZWF0aGVyRGF0YSkge1xyXG4vLyAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZX1gKVxyXG4vLyAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcclxuLy8gICAgIGxldCBkYXlEZTtcclxuXHJcbi8vICAgICBzd2l0Y2ggKGRheSkge1xyXG4vLyAgICAgICAgIGNhc2UgMDpcclxuLy8gICAgICAgICAgICAgZGF5RGUgPSBcIlNvbm50YWdcIlxyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIDE6XHJcbi8vICAgICAgICAgICAgIGRheURlID0gXCJNb250YWdcIlxyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIDI6XHJcbi8vICAgICAgICAgICAgIGRheURlID0gXCJEaWVuc3RhZ1wiXHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIGNhc2UgMzpcclxuLy8gICAgICAgICAgICAgZGF5RGUgPSBcIk1pdHR3b2NoXCJcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgY2FzZSA0OlxyXG4vLyAgICAgICAgICAgICBkYXlEZSA9IFwiRG9ubmVyc3RhZ1wiXHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIGNhc2UgNTpcclxuLy8gICAgICAgICAgICAgZGF5RGUgPSBcIkZyZWl0YWdcIlxyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIDY6XHJcbi8vICAgICAgICAgICAgIGRheURlID0gXCJTYW1zdGFnXCJcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gZGF5RGU7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuZnVuY3Rpb24gdGVzdGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFwiMjAyMi0wOC0xMiAxNToxMlwiKVxyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gZGF5O1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyh0ZXN0ZnVuY3Rpb24oKSlcclxuXHJcblxyXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY2l0eUlucHV0LnZhbHVlID09IFwiXCIpIHJldHVybjtcclxuICAgIGdldFdlYXRoZXJEYXRhKGNpdHlJbnB1dC52YWx1ZSk7XHJcbn0pIl0sIm5hbWVzIjpbImNpdHlJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaEJ0biIsImltZyIsImdldFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsIm9rIiwidGhyb3dFcnJvck1zZyIsImpzb24iLCJ3ZWF0aGVyRGF0YSIsIm5ld0RhdGEiLCJwcm9jZXNzRGF0YSIsInNldFNlYXJjaFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ3ZWF0aGVyIiwiY2l0eSIsImNlbHNpdXMiLCJmZWVsc0xpa2UiLCJ3aW5kIiwiaHVtaWRpdHkiLCJkYXkiLCJ0aW1lIiwidGV4dENvbnRlbnQiLCJyZWdpb24iLCJjb25kaXRpb24iLCJjdXJyZW50VGVtcCIsImZlZWxzbGlrZSIsImRheU5hbWUiLCJtb250aCIsInllYXIiLCJob3VycyIsIm1pbnV0ZXMiLCJkYXRlIiwiRGF0ZSIsImxvY2FsdGltZSIsImRhdGEiLCJjdXJyZW50IiwidGV4dCIsIk1hdGgiLCJyb3VuZCIsImZlZWxzbGlrZV9jIiwidGVtcF9jIiwid2luZF9rcGgiLCJuYW1lIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0RGF5IiwiZ2V0TW9udGgiLCJ0ZXN0ZnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9