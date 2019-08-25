/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _datepicker = __webpack_require__(1);
	
	var _EventItem = __webpack_require__(2);
	
	var _EventDay = __webpack_require__(3);
	
	var _DaysList = __webpack_require__(5);
	
	window.onload = function () {
	    (0, _datepicker.initDatepicker)();
	};
	
	// const inputTextEvent = document.querySelector('.input-text-event');
	// const inputDateEvent = document.querySelector('.input-date-event');
	// const inputStartEvent = document.querySelector('.input-start-event');
	// const inputEndEvent = document.querySelector('.input-end-event');
	
	var dayListObject = new _DaysList.DaysList();
	
	var btnCreate = document.querySelector('.btn-create-event');
	
	btnCreate.addEventListener('click', function (e) {
	    dayListObject.btnEvent();
	    // dayListObject.btnEvent(inputTextEvent.value, inputDateEvent.value, inputStartEvent.value, inputEndEvent.value);
	
	});
	
	// const array = ['05.05.2019','09.02.2019','21.06.2019','18.03.2019','01.02.2019'];
	
	// function isExistenceElement(element, array){
	//     // console.log('find elem');
	//     // console.log(element);
	//     // array.forEach(item => {
	//     //     if(item == element){
	//     //         return 1;
	//     //     }
	//     // });
	//     for(let i = 0; i <= array.length - 1; i++){
	//         // console.log(array[i]);
	//         if(array[i] == element){
	//             return 1;
	//         }
	//     }
	// }
	// isExistenceElement('01.02.2019', array);
	// const a = isExistenceElement('01.02.2019', array);
	// console.log(a);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initDatepicker = function initDatepicker() {
	    var datepicker = jQuery('.datepicker');
	    datepicker.each(function () {
	        jQuery(this).datepicker({
	            format: 'mm.dd.yyyy'
	        });
	    });
	};
	
	exports.initDatepicker = initDatepicker;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventItem = function () {
	    function EventItem(textEvent, timeStartEvent, timeEndEvent, dateEvent) {
	        _classCallCheck(this, EventItem);
	
	        this.textEvent = textEvent;
	        this.timeStartEvent = timeStartEvent;
	        this.timeEndEvent = timeEndEvent;
	        this.dateEvent = dateEvent;
	        this.idEvent = 0;
	    }
	
	    _createClass(EventItem, [{
	        key: 'render',
	        value: function render() {
	            var li = document.createElement('li');
	            li.className = 'event-item d-flex align-items-center justify-content-between';
	
	            var eventContent = '\n            <div class="event-text d-flex align-items-center">\n                <label>' + this.textEvent + '</label>\n                <input type="text">\n            </div>\n            <div class="event-panel-side d-flex align-items-center">\n                <div class="event-date">\n                    <input class="datepicker" type="text">\n                </div>\n                <div class="event-time start d-flex align-items-center">\n                    <label class="text-center">' + this.timeStartEvent + '</label>\n                    <input type="text">\n                </div>\n                <div class="event-time end d-flex align-items-center">\n                    <label class="text-center">' + this.timeEndEvent + '</label>\n                    <input type="text">\n                </div>\n            </div>\n            <div class="event-controls d-flex align-items-center">\n                <span class="icon-check"></span>\n                <span class="icon-edit"></span>\n                <span class="icon-close"></span>\n            </div>';
	
	            li.insertAdjacentHTML('afterbegin', eventContent);
	
	            return li;
	        }
	    }, {
	        key: 'TimeStartEvent',
	        get: function get() {
	            return this.timeStartEvent;
	        },
	        set: function set(value) {
	            this.timeStartEvent = value;
	        }
	    }, {
	        key: 'TimeEndEvent',
	        get: function get() {
	            return this.timeEndEvent;
	        },
	        set: function set(value) {
	            this.timeEndEvent = value;
	        }
	    }, {
	        key: 'DateEvent',
	        get: function get() {
	            return this.dateEvent;
	        },
	        set: function set(value) {
	            this.dateEvent = value;
	        }
	    }, {
	        key: 'IdEvent',
	        get: function get() {
	            return this.idEvent;
	        },
	        set: function set(value) {
	            this.idEvent = value;
	        }
	    }]);
	
	    return EventItem;
	}();
	
	exports.EventItem = EventItem;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EventDay = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventItem = __webpack_require__(2);
	
	var _Functions = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventDay = function () {
	    function EventDay(date) {
	        _classCallCheck(this, EventDay);
	
	        this.date = date;
	        this.eventsMap = new Map();
	        this.idDay = 0;
	        this.counterEvent = 0;
	    }
	
	    _createClass(EventDay, [{
	        key: 'pushEventToDay',
	        value: function pushEventToDay(key, object) {
	            this.eventsMap.set(key, object);
	        }
	    }, {
	        key: 'createEventObject',
	        value: function createEventObject() {
	            var _getInputs = (0, _Functions.getInputs)(),
	                _getInputs2 = _slicedToArray(_getInputs, 4),
	                text = _getInputs2[0],
	                date = _getInputs2[1],
	                start = _getInputs2[2],
	                end = _getInputs2[3];
	
	            var object = new _EventItem.EventItem(text, date, start, end);
	            return object;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var div = document.createElement('div');
	            div.className = 'day-item';
	            div.setAttribute('id', this.idDay);
	
	            var dayContent = '\n            <div class="day-header text-center">\n                <time datetime="' + this.date + '">' + this.date + '</time>\n            </div>\n            <ul class="day-events-list"></ul>';
	
	            div.insertAdjacentHTML('afterbegin', dayContent);
	
	            return div;
	        }
	    }, {
	        key: 'IdDay',
	        get: function get() {
	            return this.idDay;
	        },
	        set: function set(value) {
	            this.idDay = value;
	        }
	    }, {
	        key: 'DateDay',
	        get: function get() {
	            return this.date;
	        },
	        set: function set(value) {
	            this.date = value;
	        }
	    }, {
	        key: 'CounterEvent',
	        get: function get() {
	            return this.counterEvent;
	        },
	        set: function set(value) {
	            this.counterEvent = value;
	        }
	    }]);
	
	    return EventDay;
	}();
	
	exports.EventDay = EventDay;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getInputs = getInputs;
	// const getInputs = () => {
	//     const inputTextEvent = document.querySelector('.input-text-event').value;
	//     const inputDateEvent = document.querySelector('.input-date-event').value;
	//     const inputStartEvent = document.querySelector('.input-start-event').value;
	//     const inputEndEvent = document.querySelector('.input-end-event').value;
	
	//     const inputValues = [inputTextEvent, inputDateEvent, inputStartEvent, inputEndEvent]
	
	//     return inputValues;
	// }
	
	// export {getInputs};
	
	
	function getInputs() {
	    var inputTextEvent = document.querySelector('.input-text-event').value;
	    var inputDateEvent = document.querySelector('.input-date-event').value;
	    var inputStartEvent = document.querySelector('.input-start-event').value;
	    var inputEndEvent = document.querySelector('.input-end-event').value;
	
	    var inputValues = [inputTextEvent, inputDateEvent, inputStartEvent, inputEndEvent];
	
	    return inputValues;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DaysList = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventItem = __webpack_require__(2);
	
	var _EventDay = __webpack_require__(3);
	
	var _Functions = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DaysList = function () {
	    function DaysList(eventItemObject, eventDayObject) {
	        _classCallCheck(this, DaysList);
	
	        this.eventItemObject = eventItemObject;
	        this.eventDayObject = eventDayObject;
	        this.daysMap = new Map();
	        this.counterDay = 0;
	        this.counterEvent = 0;
	    }
	
	    _createClass(DaysList, [{
	        key: 'createDay',
	        value: function createDay(dayObject) {
	            dayObject.render();
	        }
	    }, {
	        key: 'isExistenceElement',
	        value: function isExistenceElement(element, array) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = array.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;
	
	                    if (item.date == element) {
	                        return 1;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return 0;
	        }
	    }, {
	        key: 'getDayObjectByDate',
	        value: function getDayObjectByDate(date, array) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = array.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;
	
	                    if (item.date == date) {
	                        return item;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'btnEvent',
	        value: function btnEvent() {
	            var _getInputs = (0, _Functions.getInputs)(),
	                _getInputs2 = _slicedToArray(_getInputs, 4),
	                text = _getInputs2[0],
	                date = _getInputs2[1],
	                start = _getInputs2[2],
	                end = _getInputs2[3];
	
	            var dayObject = new _EventDay.EventDay(date); // объект ДЕНЬ
	            var isExist = this.isExistenceElement(dayObject.DateDay, this.daysMap); // 1 - day exist 0 - day not exist
	
	            if (isExist) {
	                var _dayObject = this.getDayObjectByDate(date, this.daysMap); // находим в коллекции объект День по дате создания
	                var eventObject = _dayObject.createEventObject(); // создал объект Событие
	                eventObject.IdEvent = this.counterEvent; // поставил id на объект Событие
	                _dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	                this.counterEvent++;
	            } else {
	                var _eventObject = dayObject.createEventObject(); // создал объект Событие
	                _eventObject.IdEvent = this.counterEvent; // поставил id на объект Событие
	                dayObject.eventsMap.set(_eventObject.IdEvent, _eventObject); // добавление События в коллекцию событий Дня
	                this.daysMap.set(date, dayObject); // добавление Дня в коллекцию Дней
	                dayObject.IdDay = this.counterDay; // поставил id на объект День
	                this.counterEvent++;
	                this.counterDay++;
	            }
	        }
	    }, {
	        key: 'CounterDay',
	        get: function get() {
	            return this.counterDay;
	        },
	        set: function set(value) {
	            this.counterDay = value;
	        }
	    }]);
	
	    return DaysList;
	}();
	
	exports.DaysList = DaysList;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDU1YjVkMmU2YjljMzc3MTRkMjYiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJkYXlMaXN0T2JqZWN0IiwiRGF5c0xpc3QiLCJidG5DcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJ0bkV2ZW50IiwiaW5pdERhdGVwaWNrZXIiLCJkYXRlcGlja2VyIiwialF1ZXJ5IiwiZWFjaCIsImZvcm1hdCIsIkV2ZW50SXRlbSIsInRleHRFdmVudCIsInRpbWVTdGFydEV2ZW50IiwidGltZUVuZEV2ZW50IiwiZGF0ZUV2ZW50IiwiaWRFdmVudCIsImxpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImV2ZW50Q29udGVudCIsImluc2VydEFkamFjZW50SFRNTCIsInZhbHVlIiwiRXZlbnREYXkiLCJkYXRlIiwiZXZlbnRzTWFwIiwiTWFwIiwiaWREYXkiLCJjb3VudGVyRXZlbnQiLCJrZXkiLCJvYmplY3QiLCJzZXQiLCJ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJkaXYiLCJzZXRBdHRyaWJ1dGUiLCJkYXlDb250ZW50IiwiZ2V0SW5wdXRzIiwiaW5wdXRUZXh0RXZlbnQiLCJpbnB1dERhdGVFdmVudCIsImlucHV0U3RhcnRFdmVudCIsImlucHV0RW5kRXZlbnQiLCJpbnB1dFZhbHVlcyIsImV2ZW50SXRlbU9iamVjdCIsImV2ZW50RGF5T2JqZWN0IiwiZGF5c01hcCIsImNvdW50ZXJEYXkiLCJkYXlPYmplY3QiLCJyZW5kZXIiLCJlbGVtZW50IiwiYXJyYXkiLCJ2YWx1ZXMiLCJpdGVtIiwiaXNFeGlzdCIsImlzRXhpc3RlbmNlRWxlbWVudCIsIkRhdGVEYXkiLCJnZXREYXlPYmplY3RCeURhdGUiLCJldmVudE9iamVjdCIsImNyZWF0ZUV2ZW50T2JqZWN0IiwiSWRFdmVudCIsIklkRGF5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUNBOztBQUNBOztBQUVBQSxRQUFPQyxNQUFQLEdBQWdCLFlBQVU7QUFDdEI7QUFDSCxFQUZEOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQU1DLGdCQUFnQixJQUFJQyxrQkFBSixFQUF0Qjs7QUFFQSxLQUFNQyxZQUFZQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFsQjs7QUFFQUYsV0FBVUcsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZDTixtQkFBY08sUUFBZDtBQUNBOztBQUdILEVBTEQ7O0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1COzs7Ozs7Ozs7OztBQzlDQSxLQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVU7QUFDN0IsU0FBTUMsYUFBYUMsT0FBTyxhQUFQLENBQW5CO0FBQ0FELGdCQUFXRSxJQUFYLENBQWdCLFlB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QVYsRUFBcEIsQ0FGTyxDQUU0QztBQUNuREQsNkJBQVlFLE9BQVosR0FBc0IsS0FBS2hDLFlBQTNCLENBSE8sQ0FHaUM7QUFDeENvQiw0QkFBVXZCLFNBQVYsQ0FBb0JNLEdBQXBCLENBQXdCMkIsWUFBWUUsT0FBcEMsRUFBNkNGLFdBQTdDLEVBSk8sQ0FJb0Q7QUFDM0Qsc0JBQUs5QixZQUFMO0FBRUgsY0FQRCxNQU9LO0FBQ0QscUJBQU04QixlQUFjVixVQUFVVyxpQkFBVixFQUFwQixDQURDLENBQ2tEO0FBQ25ERCw4QkFBWUUsT0FBWixHQUFzQixLQUFLaEMsWUFBM0IsQ0FGQyxDQUV1QztBQUN4Q29CLDJCQUFVdkIsU0FBVixDQUFvQk0sR0FBcEIsQ0FBd0IyQixhQUFZRSxPQUFwQyxFQUE2Q0YsWUFBN0MsRUFIQyxDQUcwRDtBQUMzRCxzQkFBS1osT0FBTCxDQUFhZixHQUFiLENBQWlCUCxJQUFqQixFQUF1QndCLFNBQXZCLEVBSkMsQ0FJa0M7QUFDbkNBLDJCQUFVYSxLQUFWLEdBQWtCLEtBQUtkLFVBQXZCLENBTEMsQ0FLa0M7QUFDbkMsc0JBQUtuQixZQUFMO0FBQ0Esc0JBQUttQixVQUFMO0FBQ0g7QUFDSjs7OzZCQWxEZTtBQUNaLG9CQUFPLEtBQUtBLFVBQVo7QUFDSCxVOzJCQUVjekIsSyxFQUFNO0FBQ2pCLGtCQUFLeUIsVUFBTCxHQUFrQnpCLEtBQWxCO0FBQ0g7Ozs7OztTQStDSXZCLFEsR0FBQUEsUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDU1YjVkMmU2YjljMzc3MTRkMjYiLCJpbXBvcnQge2luaXREYXRlcGlja2VyfSBmcm9tICcuL2xpYi9kYXRlcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudERheSc7XHJcbmltcG9ydCB7IERheXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0RheXNMaXN0JztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgaW5pdERhdGVwaWNrZXIoKTtcclxufVxyXG5cclxuLy8gY29uc3QgaW5wdXRUZXh0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGV4dC1ldmVudCcpO1xyXG4vLyBjb25zdCBpbnB1dERhdGVFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRlLWV2ZW50Jyk7XHJcbi8vIGNvbnN0IGlucHV0U3RhcnRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1zdGFydC1ldmVudCcpO1xyXG4vLyBjb25zdCBpbnB1dEVuZEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWVuZC1ldmVudCcpO1xyXG5cclxuY29uc3QgZGF5TGlzdE9iamVjdCA9IG5ldyBEYXlzTGlzdCgpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jcmVhdGUtZXZlbnQnKTtcclxuXHJcbmJ0bkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBkYXlMaXN0T2JqZWN0LmJ0bkV2ZW50KCk7XHJcbiAgICAvLyBkYXlMaXN0T2JqZWN0LmJ0bkV2ZW50KGlucHV0VGV4dEV2ZW50LnZhbHVlLCBpbnB1dERhdGVFdmVudC52YWx1ZSwgaW5wdXRTdGFydEV2ZW50LnZhbHVlLCBpbnB1dEVuZEV2ZW50LnZhbHVlKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBjb25zdCBhcnJheSA9IFsnMDUuMDUuMjAxOScsJzA5LjAyLjIwMTknLCcyMS4wNi4yMDE5JywnMTguMDMuMjAxOScsJzAxLjAyLjIwMTknXTtcclxuXHJcbi8vIGZ1bmN0aW9uIGlzRXhpc3RlbmNlRWxlbWVudChlbGVtZW50LCBhcnJheSl7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZmluZCBlbGVtJyk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuLy8gICAgIC8vIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbi8vICAgICAvLyAgICAgaWYoaXRlbSA9PSBlbGVtZW50KXtcclxuLy8gICAgIC8vICAgICAgICAgcmV0dXJuIDE7XHJcbi8vICAgICAvLyAgICAgfVxyXG4vLyAgICAgLy8gfSk7XHJcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGFycmF5Lmxlbmd0aCAtIDE7IGkrKyl7XHJcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coYXJyYXlbaV0pO1xyXG4vLyAgICAgICAgIGlmKGFycmF5W2ldID09IGVsZW1lbnQpe1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gMTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gaXNFeGlzdGVuY2VFbGVtZW50KCcwMS4wMi4yMDE5JywgYXJyYXkpO1xyXG4vLyBjb25zdCBhID0gaXNFeGlzdGVuY2VFbGVtZW50KCcwMS4wMi4yMDE5JywgYXJyYXkpO1xyXG4vLyBjb25zb2xlLmxvZyhhKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L21haW4uanMiLCJjb25zdCBpbml0RGF0ZXBpY2tlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkYXRlcGlja2VyID0galF1ZXJ5KCcuZGF0ZXBpY2tlcicpO1xyXG4gICAgZGF0ZXBpY2tlci5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICdtbS5kZC55eXl5J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHtpbml0RGF0ZXBpY2tlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9saWIvZGF0ZXBpY2tlci5qcyIsImNsYXNzIEV2ZW50SXRlbXtcclxuICAgIGNvbnN0cnVjdG9yKHRleHRFdmVudCwgdGltZVN0YXJ0RXZlbnQsIHRpbWVFbmRFdmVudCwgZGF0ZUV2ZW50KXtcclxuICAgICAgICB0aGlzLnRleHRFdmVudCA9IHRleHRFdmVudDtcclxuICAgICAgICB0aGlzLnRpbWVTdGFydEV2ZW50ID0gdGltZVN0YXJ0RXZlbnQ7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kRXZlbnQgPSB0aW1lRW5kRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5kYXRlRXZlbnQgPSBkYXRlRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZVN0YXJ0RXZlbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lU3RhcnRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVGltZVN0YXJ0RXZlbnQodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudGltZVN0YXJ0RXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZUVuZEV2ZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZUVuZEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUaW1lRW5kRXZlbnQodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudGltZUVuZEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERhdGVFdmVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGF0ZUV2ZW50KHZhbHVlKXtcclxuICAgICAgICB0aGlzLmRhdGVFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZEV2ZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSWRFdmVudCh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmNsYXNzTmFtZT0nZXZlbnQtaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJztcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGV4dCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+JHt0aGlzLnRleHRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtcGFuZWwtc2lkZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImRhdGVwaWNrZXJcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGltZSBzdGFydCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3RoaXMudGltZVN0YXJ0RXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRpbWUgZW5kIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPiR7dGhpcy50aW1lRW5kRXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWNvbnRyb2xzIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jaGVja1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1lZGl0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBsaS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBldmVudENvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnRJdGVtfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJpbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tICcuL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IGdldElucHV0cyB9IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnO1xyXG5cclxuY2xhc3MgRXZlbnREYXl7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlKXtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaWREYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWREYXkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZERheTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSWREYXkodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuaWREYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGF0ZURheSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERhdGVEYXkodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRXZlbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50ZXJFdmVudCh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoRXZlbnRUb0RheShrZXksIG9iamVjdCl7XHJcbiAgICAgICAgdGhpcy5ldmVudHNNYXAuc2V0KGtleSwgb2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFdmVudE9iamVjdCgpe1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0LCBkYXRlLCBzdGFydCwgZW5kXSA9IGdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBFdmVudEl0ZW0odGV4dCwgZGF0ZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2RheS1pdGVtJztcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWREYXkpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXlDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWhlYWRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke3RoaXMuZGF0ZX1cIj4ke3RoaXMuZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJkYXktZXZlbnRzLWxpc3RcIj48L3VsPmA7XHJcblxyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkYXlDb250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRXZlbnREYXkgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudERheS5qcyIsIi8vIGNvbnN0IGdldElucHV0cyA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGlucHV0VGV4dEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXRleHQtZXZlbnQnKS52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGlucHV0RGF0ZUV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhdGUtZXZlbnQnKS52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGlucHV0U3RhcnRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1zdGFydC1ldmVudCcpLnZhbHVlO1xyXG4vLyAgICAgY29uc3QgaW5wdXRFbmRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1lbmQtZXZlbnQnKS52YWx1ZTtcclxuXHJcbi8vICAgICBjb25zdCBpbnB1dFZhbHVlcyA9IFtpbnB1dFRleHRFdmVudCwgaW5wdXREYXRlRXZlbnQsIGlucHV0U3RhcnRFdmVudCwgaW5wdXRFbmRFdmVudF1cclxuXHJcbi8vICAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7Z2V0SW5wdXRzfTtcclxuXHJcbiBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0cygpe1xyXG4gICAgY29uc3QgaW5wdXRUZXh0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGV4dC1ldmVudCcpLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXREYXRlRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0ZS1ldmVudCcpLnZhbHVlO1xyXG4gICAgY29uc3QgaW5wdXRTdGFydEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXN0YXJ0LWV2ZW50JykudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dEVuZEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWVuZC1ldmVudCcpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0gW2lucHV0VGV4dEV2ZW50LCBpbnB1dERhdGVFdmVudCwgaW5wdXRTdGFydEV2ZW50LCBpbnB1dEVuZEV2ZW50XVxyXG5cclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucy5qcyIsImltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vRXZlbnRJdGVtJztcclxuaW1wb3J0IHsgRXZlbnREYXkgfSBmcm9tICcuL0V2ZW50RGF5JztcclxuaW1wb3J0IHsgZ2V0SW5wdXRzIH0gZnJvbSAnLi4vbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucydcclxuXHJcbmNsYXNzIERheXNMaXN0e1xyXG4gICAgY29uc3RydWN0b3IoZXZlbnRJdGVtT2JqZWN0LCBldmVudERheU9iamVjdCl7XHJcbiAgICAgICAgdGhpcy5ldmVudEl0ZW1PYmplY3QgPSBldmVudEl0ZW1PYmplY3Q7XHJcbiAgICAgICAgdGhpcy5ldmVudERheU9iamVjdCA9IGV2ZW50RGF5T2JqZWN0O1xyXG4gICAgICAgIHRoaXMuZGF5c01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJEYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnRlckRheSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJEYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50ZXJEYXkodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuY291bnRlckRheSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVEYXkoZGF5T2JqZWN0KXtcclxuICAgICAgICBkYXlPYmplY3QucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFeGlzdGVuY2VFbGVtZW50KGVsZW1lbnQsIGFycmF5KXtcclxuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpe1xyXG4gICAgICAgICAgICBpZihpdGVtLmRhdGUgPT0gZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXlPYmplY3RCeURhdGUoZGF0ZSwgYXJyYXkpe1xyXG4gICAgICAgIGZvcihsZXQgaXRlbSBvZiBhcnJheS52YWx1ZXMoKSl7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uZGF0ZSA9PSBkYXRlKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ0bkV2ZW50KCl7XHJcbiAgICAgICAgY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY29uc3QgZGF5T2JqZWN0ID0gbmV3IEV2ZW50RGF5KGRhdGUpOyAvLyDQvtCx0YrQtdC60YIg0JTQldCd0KxcclxuICAgICAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5pc0V4aXN0ZW5jZUVsZW1lbnQoZGF5T2JqZWN0LkRhdGVEYXksIHRoaXMuZGF5c01hcCk7IC8vIDEgLSBkYXkgZXhpc3QgMCAtIGRheSBub3QgZXhpc3RcclxuICAgICAgICBcclxuICAgICAgICBpZihpc0V4aXN0KXtcclxuICAgICAgICAgICAgY29uc3QgZGF5T2JqZWN0ID0gdGhpcy5nZXREYXlPYmplY3RCeURhdGUoZGF0ZSwgdGhpcy5kYXlzTWFwKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LIg0LrQvtC70LvQtdC60YbQuNC4INC+0LHRitC10LrRgiDQlNC10L3RjCDQv9C+INC00LDRgtC1INGB0L7Qt9C00LDQvdC40Y9cclxuICAgICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkYXlPYmplY3QuY3JlYXRlRXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC7INC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgICBldmVudE9iamVjdC5JZEV2ZW50ID0gdGhpcy5jb3VudGVyRXZlbnQgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgICBkYXlPYmplY3QuZXZlbnRzTWFwLnNldChldmVudE9iamVjdC5JZEV2ZW50LCBldmVudE9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCh0L7QsdGL0YLQuNGPINCyINC60L7Qu9C70LXQutGG0LjRjiDRgdC+0LHRi9GC0LjQuSDQlNC90Y9cclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQrKztcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZGF5T2JqZWN0LmNyZWF0ZUV2ZW50T2JqZWN0KCk7IC8vINGB0L7Qt9C00LDQuyDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZXZlbnRPYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckV2ZW50IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZGF5T2JqZWN0LmV2ZW50c01hcC5zZXQoZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcbiAgICAgICAgICAgIHRoaXMuZGF5c01hcC5zZXQoZGF0ZSwgZGF5T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0JTQvdGPINCyINC60L7Qu9C70LXQutGG0LjRjiDQlNC90LXQuVxyXG4gICAgICAgICAgICBkYXlPYmplY3QuSWREYXkgPSB0aGlzLmNvdW50ZXJEYXk7IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0JTQtdC90YxcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQrKztcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyRGF5Kys7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERheXNMaXN0IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0RheXNMaXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==