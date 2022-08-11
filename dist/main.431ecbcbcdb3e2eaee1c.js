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
    var response, weatherData, timeData, newData;
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
            timeData = processTime(weatherData);
            newData = processData(weatherData);
            setSearchResult(newData);

          case 10:
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
  var feelsLike = document.querySelector(".feelsLike");
  var wind = document.querySelector(".wind");
  var humidity = document.querySelector(".humidity");
  city.textContent = "".concat(weatherData.location, ", ").concat(weatherData.region);
  weather.textContent = "".concat(weatherData.condition);
  celsius.textContent = "".concat(weatherData.currentTemp, "\xB0C");
  feelsLike.textContent = "Gef\xFChlt: ".concat(weatherData.feelslike, " \xB0C");
  wind.textContent = "Wind: ".concat(weatherData.wind, " km/h");
  humidity.textContent = "Luftfeuchtigkeit: ".concat(weatherData.humidity, "%");
}

function processData(weatherData) {
  var data = {
    condition: weatherData.current.condition.text,
    feelslike: Math.round(weatherData.current.feelslike_c),
    currentTemp: Math.round(weatherData.current.temp_c),
    wind: weatherData.current.wind_kph,
    humidity: weatherData.current.humidity,
    location: weatherData.location.name,
    region: weatherData.location.region,
    date: new Date("".concat(weatherData.location.localtime))
  };
  return data;
}

function processTime(weatherData) {
  var date = new Date("".concat(weatherData.location.localtime));
  var day = date.getDay();
  var dayDe;

  switch (day) {
    case 0:
      dayDe = "Sonntag";
      break;

    case 1:
      dayDe = "Montag";
      break;

    case 2:
      dayDe = "Dienstag";
      break;

    case 3:
      dayDe = "Mittwoch";
      break;

    case 4:
      dayDe = "Donnerstag";
      break;

    case 5:
      dayDe = "Freitag";
      break;

    case 6:
      dayDe = "Samstag";
      break;
  }
}

function testfunction() {
  var date = new Date("2022-08-12 15:12");
  var day = date.getDay();
  var dayDe;

  switch (day) {
    case 0:
      dayDe = "Sonntag";
      break;

    case 1:
      dayDe = "Montag";
      break;

    case 2:
      dayDe = "Dienstag";
      break;

    case 3:
      dayDe = "Mittwoch";
      break;

    case 4:
      dayDe = "Donnerstag";
      break;

    case 5:
      dayDe = "Freitag";
      break;

    case 6:
      dayDe = "Samstag";
      break;
  }

  return dayDe;
}

console.log(testfunction());
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (cityInput.value == "") return;
  getWeatherData(cityInput.value);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxHQUFHLFFBQVI7TUFDQTs7SUFDSixLQUFLLENBQUw7TUFDSUEsS0FBSyxHQUFHLFVBQVI7TUFDQTs7SUFDSixLQUFLLENBQUw7TUFDSUEsS0FBSyxHQUFHLFVBQVI7TUFDQTs7SUFDSixLQUFLLENBQUw7TUFDSUEsS0FBSyxHQUFHLFlBQVI7TUFDQTs7SUFDSixLQUFLLENBQUw7TUFDSUEsS0FBSyxHQUFHLFNBQVI7TUFDQTs7SUFDSixLQUFLLENBQUw7TUFDSUEsS0FBSyxHQUFHLFNBQVI7TUFDQTtFQXJCUjs7RUF3QkEsT0FBT0EsS0FBUDtBQUVIOztBQUVEM0IsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixZQUFZLEVBQXhCO0FBR0E1QyxTQUFTLENBQUM2QyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDQyxDQUFELEVBQU87RUFDdkNBLENBQUMsQ0FBQ0MsY0FBRjtFQUNBLElBQUlsRCxTQUFTLENBQUNtRCxLQUFWLElBQW1CLEVBQXZCLEVBQTJCO0VBQzNCOUMsY0FBYyxDQUFDTCxTQUFTLENBQUNtRCxLQUFYLENBQWQ7QUFDSCxDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LWNpdHlcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKVxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waWN0ZXN0XCIpXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xOTg2NDgwNjU2ZWM0OTBkOTUwMjA0OTIzMjAyNjExJnE9JHtsb2NhdGlvbn0mbGFuZz1kZWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgICB9XG4gICAgKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93RXJyb3JNc2coKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgdGltZURhdGEgPSBwcm9jZXNzVGltZSh3ZWF0aGVyRGF0YSk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHByb2Nlc3NEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICBzZXRTZWFyY2hSZXN1bHQobmV3RGF0YSk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3JNc2coKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxufVxuXG5mdW5jdGlvbiBzZXRTZWFyY2hSZXN1bHQod2VhdGhlckRhdGEpIHtcbiAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpO1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIilcbiAgICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzXCIpXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VcIik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG5cbiAgICBjaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb259LCAke3dlYXRoZXJEYXRhLnJlZ2lvbn1gXG4gICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmNvbmRpdGlvbn1gXG4gICAgY2Vsc2l1cy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRUZW1wfcKwQ2BcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgR2Vmw7xobHQ6ICR7d2VhdGhlckRhdGEuZmVlbHNsaWtlfSDCsENgXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dlYXRoZXJEYXRhLndpbmR9IGttL2hgXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgTHVmdGZldWNodGlna2VpdDogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYFxufVxuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YSh3ZWF0aGVyRGF0YSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgZmVlbHNsaWtlOiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MpLFxuICAgICAgICBjdXJyZW50VGVtcDogTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyksXG4gICAgICAgIHdpbmQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGgsXG4gICAgICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICBsb2NhdGlvbjogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgcmVnaW9uOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZX1gKVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1RpbWUod2VhdGhlckRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lfWApXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZGF5RGU7XG5cbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBkYXlEZSA9IFwiU29ubnRhZ1wiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZGF5RGUgPSBcIk1vbnRhZ1wiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZGF5RGUgPSBcIkRpZW5zdGFnXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBkYXlEZSA9IFwiTWl0dHdvY2hcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGRheURlID0gXCJEb25uZXJzdGFnXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBkYXlEZSA9IFwiRnJlaXRhZ1wiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgZGF5RGUgPSBcIlNhbXN0YWdcIlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiB0ZXN0ZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFwiMjAyMi0wOC0xMiAxNToxMlwiKVxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGRheURlO1xuXG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZGF5RGUgPSBcIlNvbm50YWdcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGRheURlID0gXCJNb250YWdcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGRheURlID0gXCJEaWVuc3RhZ1wiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZGF5RGUgPSBcIk1pdHR3b2NoXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBkYXlEZSA9IFwiRG9ubmVyc3RhZ1wiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgZGF5RGUgPSBcIkZyZWl0YWdcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGRheURlID0gXCJTYW1zdGFnXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlEZTtcblxufVxuXG5jb25zb2xlLmxvZyh0ZXN0ZnVuY3Rpb24oKSlcblxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjaXR5SW5wdXQudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xuICAgIGdldFdlYXRoZXJEYXRhKGNpdHlJbnB1dC52YWx1ZSk7XG59KSJdLCJuYW1lcyI6WyJjaXR5SW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hCdG4iLCJpbWciLCJnZXRXZWF0aGVyRGF0YSIsImxvY2F0aW9uIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJvayIsInRocm93RXJyb3JNc2ciLCJqc29uIiwid2VhdGhlckRhdGEiLCJ0aW1lRGF0YSIsInByb2Nlc3NUaW1lIiwibmV3RGF0YSIsInByb2Nlc3NEYXRhIiwic2V0U2VhcmNoUmVzdWx0IiwiY29uc29sZSIsImxvZyIsIndlYXRoZXIiLCJjaXR5IiwiY2Vsc2l1cyIsImZlZWxzTGlrZSIsIndpbmQiLCJodW1pZGl0eSIsInRleHRDb250ZW50IiwicmVnaW9uIiwiY29uZGl0aW9uIiwiY3VycmVudFRlbXAiLCJmZWVsc2xpa2UiLCJkYXRhIiwiY3VycmVudCIsInRleHQiLCJNYXRoIiwicm91bmQiLCJmZWVsc2xpa2VfYyIsInRlbXBfYyIsIndpbmRfa3BoIiwibmFtZSIsImRhdGUiLCJEYXRlIiwibG9jYWx0aW1lIiwiZGF5IiwiZ2V0RGF5IiwiZGF5RGUiLCJ0ZXN0ZnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9