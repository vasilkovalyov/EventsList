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
	
	var _Validation = __webpack_require__(6);
	
	window.onload = function () {
	    (0, _datepicker.initDatepicker)();
	};
	
	var dayListObject = new _DaysList.DaysList();
	
	var btnCreate = document.querySelector('.btn-create-event');
	
	btnCreate.addEventListener('click', function (e) {
	    console.log((0, _Validation.valid)());
	    // if(valid()){
	    //     console.log('error');
	    // }else{
	    //     dayListObject.btnEvent();
	    // }
	});

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
	    function EventItem(textEvent, dateEvent, timeStartEvent, timeEndEvent) {
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
	            li.setAttribute('id', this.idEvent);
	
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
	
	            var object = new _EventItem.EventItem(text.value, date.value, start.value, end.value);
	            return object;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var col = document.createElement('div');
	            col.className = 'col-6';
	
	            var div = document.createElement('div');
	            div.className = 'day-item';
	
	            div.setAttribute('id', this.idDay);
	            div.setAttribute('date-day', this.date);
	
	            col.appendChild(div);
	
	            var dayContent = '\n            <div class="day-header text-center">\n                <time datetime="' + this.date + '">' + this.date + '</time>\n            </div>\n            <ul class="day-events-list"></ul>';
	
	            div.insertAdjacentHTML('afterbegin', dayContent);
	
	            return col;
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
	exports.pushDateToSelect = pushDateToSelect;
	exports.getDayItemById = getDayItemById;
	exports.clearAllInputField = clearAllInputField;
	function getInputs() {
	    var inputTextEvent = document.querySelector('.input-text-event');
	    var inputDateEvent = document.querySelector('.input-date-event');
	    var inputStartEvent = document.querySelector('.input-start-event');
	    var inputEndEvent = document.querySelector('.input-end-event');
	
	    var inputValues = [inputTextEvent, inputDateEvent, inputStartEvent, inputEndEvent];
	
	    return inputValues;
	}
	
	function pushDateToSelect(select, date) {
	    var option = document.createElement('option');
	    option.setAttribute('value', date);
	    option.innerText = date;
	    select.appendChild(option);
	}
	
	function getDayItemById(id, array) {
	    for (var i = 0; i <= array.length - 1; i++) {
	        if (array[i].getAttribute('id') == id) {
	            return array[i];
	        }
	    }
	}
	
	function clearAllInputField(array) {
	    array.forEach(function (item) {
	        item.value = '';
	    });
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
	    function DaysList() {
	        _classCallCheck(this, DaysList);
	
	        this.daysMap = new Map();
	        this.counterDay = 0;
	        this.counterEvent = 0;
	    }
	
	    _createClass(DaysList, [{
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
	        key: 'renderEventInTargetDay',
	        value: function renderEventInTargetDay(targetDay, event) {
	            var eventList = targetDay.querySelector('.day-events-list');
	            eventList.appendChild(event);
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
	
	            var dayObject = new _EventDay.EventDay(date.value); // объект ДЕНЬ
	            var isExist = this.isExistenceElement(dayObject.DateDay, this.daysMap); // 1 - day exist 0 - day not exist
	            var row = document.querySelector('.events-list .row-days');
	
	            if (isExist) {
	                var _dayObject = this.getDayObjectByDate(date.value, this.daysMap); // находим в коллекции объект День по дате создания
	                var eventObject = _dayObject.createEventObject(); // создал объект Событие
	
	                eventObject.IdEvent = this.counterEvent; // поставил id на объект Событие
	                _dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	
	                var idDate = _dayObject.IdDay;
	                var daysArray = document.querySelectorAll('.day-item');
	
	                var targetDay = (0, _Functions.getDayItemById)(idDate, daysArray);
	                this.renderEventInTargetDay(targetDay, eventObject.render());
	            } else {
	                var _eventObject = dayObject.createEventObject(); // создал объект Событие
	                _eventObject.IdEvent = this.counterEvent; // поставил id на объект Событие
	
	                dayObject.eventsMap.set(_eventObject.IdEvent, _eventObject); // добавление События в коллекцию событий Дня
	
	                this.daysMap.set(date.value, dayObject); // добавление Дня в коллекцию Дней
	                dayObject.IdDay = this.counterDay; // поставил id на объект День
	
	                (0, _Functions.pushDateToSelect)(document.querySelector('.select-date'), date.value);
	                row.appendChild(dayObject.render());
	                var _daysArray = document.querySelectorAll('.day-item');
	
	                var _targetDay = (0, _Functions.getDayItemById)(dayObject.IdDay, _daysArray);
	                this.renderEventInTargetDay(_targetDay, _eventObject.render());
	
	                this.counterDay++;
	            }
	
	            this.counterEvent++;
	
	            var array = (0, _Functions.getInputs)();
	            (0, _Functions.clearAllInputField)(array);
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.valid = valid;
	
	var _Functions = __webpack_require__(4);
	
	var arrayInputs = (0, _Functions.getInputs)();
	
	function valid() {
	    // const [text, date, start, end] = getInputs();
	
	    (0, _Functions.getInputs)().forEach(function (item) {
	        if (isEmptyField(item.value)) {
	            item.style.border = '1px solid #f8f8f8';
	        } else {
	            item.style.border = '1px solid red';
	        }
	    });
	}
	
	function isEmptyField(input) {
	    if (input == '') {
	        return 1;
	    } else {
	        return 0;
	    }
	}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODZmZjIwMDkwN2MyZGNhYTVlNTIiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRheUxpc3RPYmplY3QiLCJEYXlzTGlzdCIsImJ0bkNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsImluaXREYXRlcGlja2VyIiwiZGF0ZXBpY2tlciIsImpRdWVyeSIsImVhY2giLCJmb3JtYXQiLCJFdmVudEl0ZW0iLCJ0ZXh0RXZlbnQiLCJkYXRlRXZlbnQiLCJ0aW1lU3RhcnRFdmVudCIsInRpbWVFbmRFdmVudCIsImlkRXZlbnQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudENvbnRlbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ2YWx1ZSIsIkV2ZW50RGF5IiwiZGF0ZSIsImV2ZW50c01hcCIsIk1hcCIsImlkRGF5IiwiY291bnRlckV2ZW50Iiwia2V5Iiwib2JqZWN0Iiwic2V0IiwidGV4dCIsInN0YXJ0IiwiZW5kIiwiY29sIiwiZGl2IiwiYXBwZW5kQ2hpbGQiLCJkYXlDb250ZW50IiwiZ2V0SW5wdXRzIiwicHVzaERhdGVUb1NlbGVjdCIsImdldERheUl0ZW1CeUlkIiwiY2xlYXJBbGxJbnB1dEZpZWxkIiwiaW5wdXRUZXh0RXZlbnQiLCJpbnB1dERhdGVFdmVudCIsImlucHV0U3RhcnRFdmVudCIsImlucHV0RW5kRXZlbnQiLCJpbnB1dFZhbHVlcyIsInNlbGVjdCIsIm9wdGlvbiIsImlubmVyVGV4dCIsImlkIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJkYXlzTWFwIiwiY291bnRlckRheSIsImVsZW1lbnQiLCJ2YWx1ZXMiLCJ0YXJnZXREYXkiLCJldmVudCIsImV2ZW50TGlzdCIsImRheU9iamVjdCIsImlzRXhpc3QiLCJpc0V4aXN0ZW5jZUVsZW1lbnQiLCJEYXRlRGF5Iiwicm93IiwiZ2V0RGF5T2JqZWN0QnlEYXRlIiwiZXZlbnRPYmplY3QiLCJjcmVhdGVFdmVudE9iamVjdCIsIklkRXZlbnQiLCJpZERhdGUiLCJJZERheSIsImRheXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW5kZXJFdmVudEluVGFyZ2V0RGF5IiwicmVuZGVyIiwidmFsaWQiLCJhcnJheUlucHV0cyIsImlzRW1wdHlGaWVsZCIsInN0eWxlIiwiYm9yZGVyIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0FBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QjtBQUNILEVBRkQ7O0FBS0EsS0FBTUMsZ0JBQWdCLElBQUlDLGtCQUFKLEVBQXRCOztBQUVBLEtBQU1DLFlBQVlD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dHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2ZmYyMDA5MDdjMmRjYWE1ZTUyIiwiaW1wb3J0IHsgaW5pdERhdGVwaWNrZXIgfSBmcm9tICcuL2xpYi9kYXRlcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudERheSc7XHJcbmltcG9ydCB7IERheXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0RheXNMaXN0JztcclxuaW1wb3J0IHsgdmFsaWQgfSAgZnJvbSAnLi9tb2R1bGVGdW5jdGlvbnMvVmFsaWRhdGlvbidcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdERhdGVwaWNrZXIoKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRheUxpc3RPYmplY3QgPSBuZXcgRGF5c0xpc3QoKTtcclxuXHJcbmNvbnN0IGJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY3JlYXRlLWV2ZW50Jyk7XHJcblxyXG5idG5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsaWQoKSk7XHJcbiAgICAvLyBpZih2YWxpZCgpKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuICAgIC8vIH1lbHNle1xyXG4gICAgLy8gICAgIGRheUxpc3RPYmplY3QuYnRuRXZlbnQoKTtcclxuICAgIC8vIH1cclxufSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L21haW4uanMiLCJjb25zdCBpbml0RGF0ZXBpY2tlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkYXRlcGlja2VyID0galF1ZXJ5KCcuZGF0ZXBpY2tlcicpO1xyXG4gICAgZGF0ZXBpY2tlci5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICdtbS5kZC55eXl5J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHtpbml0RGF0ZXBpY2tlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9saWIvZGF0ZXBpY2tlci5qcyIsImNsYXNzIEV2ZW50SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0RXZlbnQsIGRhdGVFdmVudCwgdGltZVN0YXJ0RXZlbnQsIHRpbWVFbmRFdmVudCkge1xyXG4gICAgICAgIHRoaXMudGV4dEV2ZW50ID0gdGV4dEV2ZW50O1xyXG4gICAgICAgIHRoaXMudGltZVN0YXJ0RXZlbnQgPSB0aW1lU3RhcnRFdmVudDtcclxuICAgICAgICB0aGlzLnRpbWVFbmRFdmVudCA9IHRpbWVFbmRFdmVudDtcclxuICAgICAgICB0aGlzLmRhdGVFdmVudCA9IGRhdGVFdmVudDtcclxuICAgICAgICB0aGlzLmlkRXZlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaW1lU3RhcnRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lU3RhcnRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVGltZVN0YXJ0RXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVTdGFydEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRpbWVFbmRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lRW5kRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRpbWVFbmRFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGltZUVuZEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERhdGVFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERhdGVFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZUV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElkRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSWRFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaWRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2V2ZW50LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWRFdmVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50Q29udGVudCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRleHQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiR7dGhpcy50ZXh0RXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXBhbmVsLXNpZGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJkYXRlcGlja2VyXCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRpbWUgc3RhcnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtY2VudGVyXCI+JHt0aGlzLnRpbWVTdGFydEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10aW1lIGVuZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3RoaXMudGltZUVuZEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1jb250cm9scyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2hlY2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tZWRpdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbGkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZXZlbnRDb250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBFdmVudEl0ZW0gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJpbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tICcuL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IGdldElucHV0cyB9IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnO1xyXG5cclxuY2xhc3MgRXZlbnREYXkge1xyXG4gICAgY29uc3RydWN0b3IoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5ldmVudHNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pZERheSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZERheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZERheTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSWREYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlkRGF5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERhdGVEYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGF0ZURheSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDb3VudGVyRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hFdmVudFRvRGF5KGtleSwgb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNNYXAuc2V0KGtleSwgb2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFdmVudE9iamVjdCgpIHtcclxuICAgICAgICBjb25zdCBbdGV4dCwgZGF0ZSwgc3RhcnQsIGVuZF0gPSBnZXRJbnB1dHMoKTtcclxuICAgICAgICBjb25zdCBvYmplY3QgPSBuZXcgRXZlbnRJdGVtKHRleHQudmFsdWUsIGRhdGUudmFsdWUsIHN0YXJ0LnZhbHVlLCBlbmQudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbC5jbGFzc05hbWUgPSAnY29sLTYnO1xyXG5cclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2RheS1pdGVtJztcclxuXHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkRGF5KTtcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRlLWRheScsIHRoaXMuZGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXlDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWhlYWRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke3RoaXMuZGF0ZX1cIj4ke3RoaXMuZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJkYXktZXZlbnRzLWxpc3RcIj48L3VsPmA7XHJcblxyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkYXlDb250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRXZlbnREYXkgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudERheS5qcyIsImV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dHMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFRleHRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC10ZXh0LWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dERhdGVFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRlLWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dFN0YXJ0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtc3RhcnQtZXZlbnQnKTtcclxuICAgIGNvbnN0IGlucHV0RW5kRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZW5kLWV2ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSBbaW5wdXRUZXh0RXZlbnQsIGlucHV0RGF0ZUV2ZW50LCBpbnB1dFN0YXJ0RXZlbnQsIGlucHV0RW5kRXZlbnRdXHJcblxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHVzaERhdGVUb1NlbGVjdChzZWxlY3QsIGRhdGUpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRlKTtcclxuICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRlO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlJdGVtQnlJZChpZCwgYXJyYXkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGFycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmIChhcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsSW5wdXRGaWVsZChhcnJheSkge1xyXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0udmFsdWUgPSAnJztcclxuICAgIH0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMuanMiLCJpbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tICcuL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IEV2ZW50RGF5IH0gZnJvbSAnLi9FdmVudERheSc7XHJcbmltcG9ydCB7IGdldElucHV0cywgcHVzaERhdGVUb1NlbGVjdCwgZ2V0RGF5SXRlbUJ5SWQsIGNsZWFyQWxsSW5wdXRGaWVsZCB9IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnXHJcblxyXG5jbGFzcyBEYXlzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRheXNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRGF5ID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJFdmVudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50ZXJEYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckRheTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckRheSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRlckRheSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc0V4aXN0ZW5jZUVsZW1lbnQoZWxlbWVudCwgYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFycmF5LnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGUgPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF5T2JqZWN0QnlEYXRlKGRhdGUsIGFycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheS52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5kYXRlID09IGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckV2ZW50SW5UYXJnZXREYXkodGFyZ2V0RGF5LCBldmVudCl7XHJcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gdGFyZ2V0RGF5LnF1ZXJ5U2VsZWN0b3IoJy5kYXktZXZlbnRzLWxpc3QnKTtcclxuICAgICAgICBldmVudExpc3QuYXBwZW5kQ2hpbGQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidG5FdmVudCgpIHtcclxuICAgICAgICBjb25zdCBbdGV4dCwgZGF0ZSwgc3RhcnQsIGVuZF0gPSBnZXRJbnB1dHMoKTtcclxuICAgICAgICBjb25zdCBkYXlPYmplY3QgPSBuZXcgRXZlbnREYXkoZGF0ZS52YWx1ZSk7IC8vINC+0LHRitC10LrRgiDQlNCV0J3QrFxyXG4gICAgICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLmlzRXhpc3RlbmNlRWxlbWVudChkYXlPYmplY3QuRGF0ZURheSwgdGhpcy5kYXlzTWFwKTsgLy8gMSAtIGRheSBleGlzdCAwIC0gZGF5IG5vdCBleGlzdFxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudHMtbGlzdCAucm93LWRheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF5T2JqZWN0ID0gdGhpcy5nZXREYXlPYmplY3RCeURhdGUoZGF0ZS52YWx1ZSwgdGhpcy5kYXlzTWFwKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LIg0LrQvtC70LvQtdC60YbQuNC4INC+0LHRitC10LrRgiDQlNC10L3RjCDQv9C+INC00LDRgtC1INGB0L7Qt9C00LDQvdC40Y9cclxuICAgICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkYXlPYmplY3QuY3JlYXRlRXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC7INC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnRPYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckV2ZW50IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZGF5T2JqZWN0LmV2ZW50c01hcC5zZXQoZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZERhdGUgPSBkYXlPYmplY3QuSWREYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheXNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGF5ID0gZ2V0RGF5SXRlbUJ5SWQoaWREYXRlLCBkYXlzQXJyYXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50SW5UYXJnZXREYXkodGFyZ2V0RGF5LCBldmVudE9iamVjdC5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZGF5T2JqZWN0LmNyZWF0ZUV2ZW50T2JqZWN0KCk7IC8vINGB0L7Qt9C00LDQuyDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZXZlbnRPYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckV2ZW50IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuXHJcbiAgICAgICAgICAgIGRheU9iamVjdC5ldmVudHNNYXAuc2V0KGV2ZW50T2JqZWN0LklkRXZlbnQsIGV2ZW50T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0KHQvtCx0YvRgtC40Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0L7QsdGL0YLQuNC5INCU0L3Rj1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXlzTWFwLnNldChkYXRlLnZhbHVlLCBkYXlPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQlNC90Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINCU0L3QtdC5XHJcbiAgICAgICAgICAgIGRheU9iamVjdC5JZERheSA9IHRoaXMuY291bnRlckRheTsgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQlNC10L3RjFxyXG5cclxuICAgICAgICAgICAgcHVzaERhdGVUb1NlbGVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXlPYmplY3QucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXlzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWl0ZW0nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldERheSA9IGdldERheUl0ZW1CeUlkKGRheU9iamVjdC5JZERheSwgZGF5c0FycmF5KTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnRPYmplY3QucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyRGF5Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50Kys7XHJcblxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY2xlYXJBbGxJbnB1dEZpZWxkKGFycmF5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGF5c0xpc3QgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRGF5c0xpc3QuanMiLCJpbXBvcnQgeyBnZXRJbnB1dHMgfSBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJ1xyXG5cclxuY29uc3QgYXJyYXlJbnB1dHMgPSBnZXRJbnB1dHMoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZCgpe1xyXG4gICAgLy8gY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZ2V0SW5wdXRzKCk7XHJcblxyXG4gICAgZ2V0SW5wdXRzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKGlzRW1wdHlGaWVsZChpdGVtLnZhbHVlKSl7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZjhmOGY4JztcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eUZpZWxkKGlucHV0KXtcclxuICAgIGlmKGlucHV0ID09ICcnKXtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL1ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9