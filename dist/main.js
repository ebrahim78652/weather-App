/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DomManipulation.js":
/*!********************************!*\
  !*** ./src/DomManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUpListeners": () => (/* binding */ setUpListeners),
/* harmony export */   "updateWeather": () => (/* binding */ updateWeather)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


let currentTempMode = "C";

function searchIconListener() {
  const icon = document.querySelector(".search_icon");

  icon.addEventListener("click", () => {
    console.log("Search icon clicked");
    fetchCountry();
  });
}

function inputListener() {
  const input = document.querySelector("input");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log("enter pressed!");
      fetchCountry();
    }
  });
}

function fetchCountry() {
  const input = document.querySelector("input");
  const placeName = input.value;
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(placeName);
}

function temperatureModeListener() {
  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    if (currentTempMode === "C") {
      currentTempMode = "F";
      console.log(currentTempMode);
      switchTemp("F");
    } else {
      currentTempMode = "C";
      console.log(currentTempMode);
      switchTemp("C");
    }
  });
}

function switchTemp(FOrC) {
  const alltempSign = document.querySelectorAll(".tempSign");
  alltempSign.forEach((element) => {
    element.innerHTML = `&deg;${FOrC}`;
  });

  const alltemp = document.querySelectorAll(".temp");

  if (FOrC == "F") {
    alltemp.forEach((element) => {
      element.innerHTML =
        Math.round(((+element.innerHTML * 9) / 5 + 32) * 10) / 10;
    });
  }
  if (FOrC == "C") {
    alltemp.forEach((element) => {
      element.innerHTML =
        Math.round((+element.innerHTML - 32) * (5 / 9) * 10) / 10;
    });
  }
}

function setUpListeners() {
  console.log("setUpListeners called!");
  searchIconListener();
  inputListener();
  temperatureModeListener();
  // default hardcoded country in the beginning
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)("Berlin");
}

function updateWeather(response) {
  console.log(response);
  const tempDiv = document.querySelector(".temp");
  const locationDiv = document.querySelector(".location");
  const feelsLikeDiv = document.querySelector(".fl");
  const maxDiv = document.querySelector(".max");
  const minDiv = document.querySelector(".min");
  const humidityDiv = document.querySelector(".humid");
  const icon = document.querySelector(".weatherIcon");

  tempDiv.textContent = response.main.temp;
  locationDiv.textContent = response.name;
  feelsLikeDiv.textContent = `${response.main.feels_like}`;
  maxDiv.textContent = `${response.main.temp_max}`;
  minDiv.textContent = `${response.main.temp_min}`;
  humidityDiv.textContent = `Humidity: ${response.main.humidity}`;
  icon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
}


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather)
/* harmony export */ });
/* harmony import */ var _DomManipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulation.js */ "./src/DomManipulation.js");


async function fetchWeather(placeName) {
  console.log(placeName);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&APPID=bf58202ced5040b0e1656fdce3488d4c&mode=metric`,
      { mode: "cors" }
    );

    const responseConverted = await response.json();

    (0,_DomManipulation_js__WEBPACK_IMPORTED_MODULE_0__.updateWeather)(responseConverted);
  } catch (err) {
    console.log(err);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulation */ "./src/DomManipulation.js");


(0,_DomManipulation__WEBPACK_IMPORTED_MODULE_0__.setUpListeners)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDOztBQUUxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFZO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixFQUFFLEtBQUs7QUFDckMsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBWTtBQUNkOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQseUNBQXlDLHVCQUF1QjtBQUNoRSxpREFBaUQseUJBQXlCO0FBQzFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZxRDs7QUFFOUM7QUFDUDs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELFVBQVU7QUFDckUsUUFBUTtBQUNSOztBQUVBOztBQUVBLElBQUksa0VBQWE7QUFDakIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVuRCxnRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvRG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcblxubGV0IGN1cnJlbnRUZW1wTW9kZSA9IFwiQ1wiO1xuXG5mdW5jdGlvbiBzZWFyY2hJY29uTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9pY29uXCIpO1xuXG4gIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNlYXJjaCBpY29uIGNsaWNrZWRcIik7XG4gICAgZmV0Y2hDb3VudHJ5KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnB1dExpc3RlbmVyKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgcHJlc3NlZCFcIik7XG4gICAgICBmZXRjaENvdW50cnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaENvdW50cnkoKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCBwbGFjZU5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgZmV0Y2hXZWF0aGVyKHBsYWNlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRlbXBlcmF0dXJlTW9kZUxpc3RlbmVyKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoY3VycmVudFRlbXBNb2RlID09PSBcIkNcIikge1xuICAgICAgY3VycmVudFRlbXBNb2RlID0gXCJGXCI7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGVtcE1vZGUpO1xuICAgICAgc3dpdGNoVGVtcChcIkZcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRUZW1wTW9kZSA9IFwiQ1wiO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFRlbXBNb2RlKTtcbiAgICAgIHN3aXRjaFRlbXAoXCJDXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRlbXAoRk9yQykge1xuICBjb25zdCBhbGx0ZW1wU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcFNpZ25cIik7XG4gIGFsbHRlbXBTaWduLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGAmZGVnOyR7Rk9yQ31gO1xuICB9KTtcblxuICBjb25zdCBhbGx0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wXCIpO1xuXG4gIGlmIChGT3JDID09IFwiRlwiKSB7XG4gICAgYWxsdGVtcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgIE1hdGgucm91bmQoKCgrZWxlbWVudC5pbm5lckhUTUwgKiA5KSAvIDUgKyAzMikgKiAxMCkgLyAxMDtcbiAgICB9KTtcbiAgfVxuICBpZiAoRk9yQyA9PSBcIkNcIikge1xuICAgIGFsbHRlbXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICBNYXRoLnJvdW5kKCgrZWxlbWVudC5pbm5lckhUTUwgLSAzMikgKiAoNSAvIDkpICogMTApIC8gMTA7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwTGlzdGVuZXJzKCkge1xuICBjb25zb2xlLmxvZyhcInNldFVwTGlzdGVuZXJzIGNhbGxlZCFcIik7XG4gIHNlYXJjaEljb25MaXN0ZW5lcigpO1xuICBpbnB1dExpc3RlbmVyKCk7XG4gIHRlbXBlcmF0dXJlTW9kZUxpc3RlbmVyKCk7XG4gIC8vIGRlZmF1bHQgaGFyZGNvZGVkIGNvdW50cnkgaW4gdGhlIGJlZ2lubmluZ1xuICBmZXRjaFdlYXRoZXIoXCJCZXJsaW5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyKHJlc3BvbnNlKSB7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsXCIpO1xuICBjb25zdCBtYXhEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heFwiKTtcbiAgY29uc3QgbWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5cIik7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZFwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckljb25cIik7XG5cbiAgdGVtcERpdi50ZXh0Q29udGVudCA9IHJlc3BvbnNlLm1haW4udGVtcDtcbiAgbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSByZXNwb25zZS5uYW1lO1xuICBmZWVsc0xpa2VEaXYudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5tYWluLmZlZWxzX2xpa2V9YDtcbiAgbWF4RGl2LnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UubWFpbi50ZW1wX21heH1gO1xuICBtaW5EaXYudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5tYWluLnRlbXBfbWlufWA7XG4gIGh1bWlkaXR5RGl2LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3Jlc3BvbnNlLm1haW4uaHVtaWRpdHl9YDtcbiAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtyZXNwb25zZS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG59XG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVyIH0gZnJvbSBcIi4vRG9tTWFuaXB1bGF0aW9uLmpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIocGxhY2VOYW1lKSB7XG4gIGNvbnNvbGUubG9nKHBsYWNlTmFtZSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtwbGFjZU5hbWV9JnVuaXRzPW1ldHJpYyZBUFBJRD1iZjU4MjAyY2VkNTA0MGIwZTE2NTZmZGNlMzQ4OGQ0YyZtb2RlPW1ldHJpY2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuXG4gICAgY29uc3QgcmVzcG9uc2VDb252ZXJ0ZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICB1cGRhdGVXZWF0aGVyKHJlc3BvbnNlQ29udmVydGVkKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXRVcExpc3RlbmVycyB9IGZyb20gXCIuL0RvbU1hbmlwdWxhdGlvblwiO1xuXG5zZXRVcExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9