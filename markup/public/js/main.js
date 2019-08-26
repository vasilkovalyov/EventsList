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
	
	var dayListObject = new _DaysList.DaysList();
	
	var btnCreate = document.querySelector('.btn-create-event');
	
	btnCreate.addEventListener('click', function (e) {
	    dayListObject.btnEvent();
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
	            col.className = 'col-4';
	
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
	    function DaysList(eventItemObject, eventDayObject) {
	        _classCallCheck(this, DaysList);
	
	        this.eventItemObject = eventItemObject;
	        this.eventDayObject = eventDayObject;
	        this.daysMap = new Map();
	        this.counterDay = 0;
	        this.counterEvent = 0;
	        this.select = document.querySelector('.select-date');
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
	
	            var dayObject = new _EventDay.EventDay(date.value); // объект ДЕНЬ
	            var isExist = this.isExistenceElement(dayObject.DateDay, this.daysMap); // 1 - day exist 0 - day not exist
	
	            if (isExist) {
	                var _dayObject = this.getDayObjectByDate(date.value, this.daysMap); // находим в коллекции объект День по дате создания
	                var eventObject = _dayObject.createEventObject(); // создал объект Событие
	                eventObject.IdEvent = this.counterEvent; // поставил id на объект Событие
	                _dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	                this.counterEvent++;
	
	                var idDate = _dayObject.IdDay;
	                var daysArray = document.querySelectorAll('.day-item');
	                var targetDay = (0, _Functions.getDayItemById)(idDate, daysArray);
	                var eventList = targetDay.querySelector('.day-events-list');
	                eventList.appendChild(eventObject.render());
	            } else {
	                var _eventObject = dayObject.createEventObject(); // создал объект Событие
	                _eventObject.IdEvent = this.counterEvent; // поставил id на объект Событие
	                dayObject.eventsMap.set(_eventObject.IdEvent, _eventObject); // добавление События в коллекцию событий Дня
	                this.daysMap.set(date, dayObject); // добавление Дня в коллекцию Дней
	                dayObject.IdDay = this.counterDay; // поставил id на объект День
	                this.counterEvent++;
	                this.counterDay++;
	
	                (0, _Functions.pushDateToSelect)(this.select, date.value);
	
	                var row = document.querySelector('.events-list .row-days');
	                row.appendChild(dayObject.render());
	                var _targetDay = document.querySelector('.day-item');
	                var _eventList = _targetDay.querySelector('.day-events-list');
	                _eventList.appendChild(_eventObject.render());
	            }
	
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc5NzBiYzJmODc5NTM0NzAyOWMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJkYXlMaXN0T2JqZWN0IiwiRGF5c0xpc3QiLCJidG5DcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJ0bkV2ZW50IiwiaW5pdERhdGVwaWNrZXIiLCJkYXRlcGlja2VyIiwialF1ZXJ5IiwiZWFjaCIsImZvcm1hdCIsIkV2ZW50SXRlbSIsInRleHRFdmVudCIsImRhdGVFdmVudCIsInRpbWVTdGFydEV2ZW50IiwidGltZUVuZEV2ZW50IiwiaWRFdmVudCIsImxpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50Q29udGVudCIsImluc2VydEFkamFjZW50SFRNTCIsInZhbHVlIiwiRXZlbnREYXkiLCJkYXRlIiwiZXZlbnRzTWFwIiwiTWFwIiwiaWREYXkiLCJjb3VudGVyRXZlbnQiLCJrZXkiLCJvYmplY3QiLCJzZXQiLCJ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJjb2wiLCJkaXYiLCJhcHBlbmRDaGlsZCIsImRheUNvbnRlbnQiLCJnZXRJbnB1dHMiLCJwdXNoRGF0ZVRvU2VsZWN0IiwiZ2V0RGF5SXRlbUJ5SWQiLCJjbGVhckFsbElucHV0RmllbGQiLCJpbnB1dFRleHRFdmVudCIsImlucHV0RGF0ZUV2ZW50IiwiaW5wdXRTdGFydEV2ZW50IiwiaW5wdXRFbmRFdmVudCIsImlucHV0VmFsdWVzIiwic2VsZWN0Iiwib3B0aW9uIiwiaW5uZXJUZXh0IiwiaWQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwiaXRlbSIsImV2ZW50SXRlbU9iamVjdCIsImV2ZW50RGF5T2JqZWN0IiwiZGF5c01hcCIsImNvdW50ZXJEYXkiLCJkYXlPYmplY3QiLCJyZW5kZXIiLCJlbGVtZW50IiwidmFsdWVzIiwiaXNFeGlzdCIsImlzRXhpc3RlbmNlRWxlbWVudCIsIkRhdGVEYXkiLCJnZXREYXlPYmplY3RCeURhdGUiLCJldmVudE9iamVjdCIsImNyZWF0ZUV2ZW50T2JqZWN0IiwiSWRFdmVudCIsImlkRGF0ZSIsIklkRGF5IiwiZGF5c0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsInRhcmdldERheSIsImV2ZW50TGlzdCIsInJvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQUEsUUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCO0FBQ0gsRUFGRDs7QUFLQSxLQUFNQyxnQkFBZ0IsSUFBSUMsa0JBQUosRUFBdEI7O0FBRUEsS0FBTUMsWUFBWUMsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbEI7O0FBRUFGLFdBQVVHLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztBQUN2Q04sbUJBQWNPLFFBQWQ7QUFDSCxFQUZELEU7Ozs7Ozs7Ozs7O0FD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QyxNQUFWLEVBQWhCO0FBQ0EscUJBQU1jLGFBQVk3RSxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWxCO0FBQ0EscUJBQU02RSxhQUFZRCxXQUFVNUUsYUFBVixDQUF3QixrQkFBeEIsQ0FBbEI7QUFDQTZFLDRCQUFVekMsV0FBVixDQUFzQmlDLGFBQVlQLE1BQVosRUFBdEI7QUFDSDs7QUFFRCxpQkFBTVgsUUFBUSwyQkFBZDtBQUNBLGdEQUFtQkEsS0FBbkI7QUFDSDs7OzZCQXBFZ0I7QUFDYixvQkFBTyxLQUFLUyxVQUFaO0FBQ0gsVTsyQkFFY3ZDLEssRUFBTztBQUNsQixrQkFBS3VDLFVBQUwsR0FBa0J2QyxLQUFsQjtBQUNIOzs7Ozs7U0FpRUl4QixRLEdBQUFBLFEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA3OTcwYmMyZjg3OTUzNDcwMjljIiwiaW1wb3J0IHsgaW5pdERhdGVwaWNrZXIgfSBmcm9tICcuL2xpYi9kYXRlcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudERheSc7XHJcbmltcG9ydCB7IERheXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0RheXNMaXN0JztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0RGF0ZXBpY2tlcigpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZGF5TGlzdE9iamVjdCA9IG5ldyBEYXlzTGlzdCgpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jcmVhdGUtZXZlbnQnKTtcclxuXHJcbmJ0bkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBkYXlMaXN0T2JqZWN0LmJ0bkV2ZW50KCk7XHJcbn0pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tYWluLmpzIiwiY29uc3QgaW5pdERhdGVwaWNrZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlciA9IGpRdWVyeSgnLmRhdGVwaWNrZXInKTtcclxuICAgIGRhdGVwaWNrZXIuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnbW0uZGQueXl5eSdcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdERhdGVwaWNrZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJjbGFzcyBFdmVudEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dEV2ZW50LCBkYXRlRXZlbnQsIHRpbWVTdGFydEV2ZW50LCB0aW1lRW5kRXZlbnQpIHtcclxuICAgICAgICB0aGlzLnRleHRFdmVudCA9IHRleHRFdmVudDtcclxuICAgICAgICB0aGlzLnRpbWVTdGFydEV2ZW50ID0gdGltZVN0YXJ0RXZlbnQ7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kRXZlbnQgPSB0aW1lRW5kRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5kYXRlRXZlbnQgPSBkYXRlRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZVN0YXJ0RXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVN0YXJ0RXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRpbWVTdGFydEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhcnRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaW1lRW5kRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZUVuZEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUaW1lRW5kRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVFbmRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBEYXRlRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGVFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IElkRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlkRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdldmVudC1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkRXZlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10ZXh0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4ke3RoaXMudGV4dEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1wYW5lbC1zaWRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZGF0ZXBpY2tlclwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10aW1lIHN0YXJ0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPiR7dGhpcy50aW1lU3RhcnRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGltZSBlbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtY2VudGVyXCI+JHt0aGlzLnRpbWVFbmRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtY29udHJvbHMgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNoZWNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWVkaXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGxpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGV2ZW50Q29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRXZlbnRJdGVtIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnRJdGVtLmpzIiwiaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSAnLi9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBnZXRJbnB1dHMgfSBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJztcclxuXHJcbmNsYXNzIEV2ZW50RGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaWREYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWREYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWREYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IElkRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pZERheSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXRlRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERhdGVEYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnRlckV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoRXZlbnRUb0RheShrZXksIG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwLnNldChrZXksIG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXZlbnRPYmplY3QoKSB7XHJcbiAgICAgICAgY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IEV2ZW50SXRlbSh0ZXh0LnZhbHVlLCBkYXRlLnZhbHVlLCBzdGFydC52YWx1ZSwgZW5kLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2wuY2xhc3NOYW1lID0gJ2NvbC00JztcclxuXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdkYXktaXRlbSc7XHJcblxyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZERheSk7XHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0ZS1kYXknLCB0aGlzLmRhdGUpO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF5Q29udGVudCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHt0aGlzLmRhdGV9XCI+JHt0aGlzLmRhdGV9PC90aW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZGF5LWV2ZW50cy1saXN0XCI+PC91bD5gO1xyXG5cclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZGF5Q29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2w7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEV2ZW50RGF5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRzKCkge1xyXG4gICAgY29uc3QgaW5wdXRUZXh0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGV4dC1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXREYXRlRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0ZS1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXRTdGFydEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXN0YXJ0LWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dEVuZEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWVuZC1ldmVudCcpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0gW2lucHV0VGV4dEV2ZW50LCBpbnB1dERhdGVFdmVudCwgaW5wdXRTdGFydEV2ZW50LCBpbnB1dEVuZEV2ZW50XVxyXG5cclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hEYXRlVG9TZWxlY3Qoc2VsZWN0LCBkYXRlKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0ZSk7XHJcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gZGF0ZTtcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5SXRlbUJ5SWQoaWQsIGFycmF5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhcnJheS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyYXlbaV0uZ2V0QXR0cmlidXRlKCdpZCcpID09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbElucHV0RmllbGQoYXJyYXkpIHtcclxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwiaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSAnLi9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vRXZlbnREYXknO1xyXG5pbXBvcnQgeyBnZXRJbnB1dHMsIHB1c2hEYXRlVG9TZWxlY3QsIGdldERheUl0ZW1CeUlkLCBjbGVhckFsbElucHV0RmllbGQgfSBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJ1xyXG5cclxuY2xhc3MgRGF5c0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoZXZlbnRJdGVtT2JqZWN0LCBldmVudERheU9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRJdGVtT2JqZWN0ID0gZXZlbnRJdGVtT2JqZWN0O1xyXG4gICAgICAgIHRoaXMuZXZlbnREYXlPYmplY3QgPSBldmVudERheU9iamVjdDtcclxuICAgICAgICB0aGlzLmRheXNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRGF5ID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJFdmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnRlckRheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDb3VudGVyRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRGF5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGF5KGRheU9iamVjdCkge1xyXG4gICAgICAgIGRheU9iamVjdC5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0V4aXN0ZW5jZUVsZW1lbnQoZWxlbWVudCwgYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFycmF5LnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGUgPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF5T2JqZWN0QnlEYXRlKGRhdGUsIGFycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheS52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5kYXRlID09IGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ0bkV2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0LCBkYXRlLCBzdGFydCwgZW5kXSA9IGdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IGRheU9iamVjdCA9IG5ldyBFdmVudERheShkYXRlLnZhbHVlKTsgLy8g0L7QsdGK0LXQutGCINCU0JXQndCsXHJcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMuaXNFeGlzdGVuY2VFbGVtZW50KGRheU9iamVjdC5EYXRlRGF5LCB0aGlzLmRheXNNYXApOyAvLyAxIC0gZGF5IGV4aXN0IDAgLSBkYXkgbm90IGV4aXN0XHJcblxyXG4gICAgICAgIGlmIChpc0V4aXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheU9iamVjdCA9IHRoaXMuZ2V0RGF5T2JqZWN0QnlEYXRlKGRhdGUudmFsdWUsIHRoaXMuZGF5c01hcCk7IC8vINC90LDRhdC+0LTQuNC8INCyINC60L7Qu9C70LXQutGG0LjQuCDQvtCx0YrQtdC60YIg0JTQtdC90Ywg0L/QviDQtNCw0YLQtSDRgdC+0LfQtNCw0L3QuNGPXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZGF5T2JqZWN0LmNyZWF0ZUV2ZW50T2JqZWN0KCk7IC8vINGB0L7Qt9C00LDQuyDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZXZlbnRPYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckV2ZW50IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZGF5T2JqZWN0LmV2ZW50c01hcC5zZXQoZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckV2ZW50Kys7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZERhdGUgPSBkYXlPYmplY3QuSWREYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheXNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktaXRlbScpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXREYXkgPSBnZXREYXlJdGVtQnlJZChpZERhdGUsIGRheXNBcnJheSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TGlzdCA9IHRhcmdldERheS5xdWVyeVNlbGVjdG9yKCcuZGF5LWV2ZW50cy1saXN0Jyk7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdC5hcHBlbmRDaGlsZChldmVudE9iamVjdC5yZW5kZXIoKSk7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IGRheU9iamVjdC5jcmVhdGVFdmVudE9iamVjdCgpOyAvLyDRgdC+0LfQtNCw0Lsg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcbiAgICAgICAgICAgIGV2ZW50T2JqZWN0LklkRXZlbnQgPSB0aGlzLmNvdW50ZXJFdmVudCAvLyDQv9C+0YHRgtCw0LLQuNC7IGlkINC90LAg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcbiAgICAgICAgICAgIGRheU9iamVjdC5ldmVudHNNYXAuc2V0KGV2ZW50T2JqZWN0LklkRXZlbnQsIGV2ZW50T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0KHQvtCx0YvRgtC40Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0L7QsdGL0YLQuNC5INCU0L3Rj1xyXG4gICAgICAgICAgICB0aGlzLmRheXNNYXAuc2V0KGRhdGUsIGRheU9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCU0L3RjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0JTQvdC10LlcclxuICAgICAgICAgICAgZGF5T2JqZWN0LklkRGF5ID0gdGhpcy5jb3VudGVyRGF5OyAvLyDQv9C+0YHRgtCw0LLQuNC7IGlkINC90LAg0L7QsdGK0LXQutGCINCU0LXQvdGMXHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckV2ZW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckRheSsrO1xyXG5cclxuICAgICAgICAgICAgcHVzaERhdGVUb1NlbGVjdCh0aGlzLnNlbGVjdCwgZGF0ZS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXZlbnRzLWxpc3QgLnJvdy1kYXlzJyk7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXlPYmplY3QucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXREYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWl0ZW0nKTtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gdGFyZ2V0RGF5LnF1ZXJ5U2VsZWN0b3IoJy5kYXktZXZlbnRzLWxpc3QnKTtcclxuICAgICAgICAgICAgZXZlbnRMaXN0LmFwcGVuZENoaWxkKGV2ZW50T2JqZWN0LnJlbmRlcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY2xlYXJBbGxJbnB1dEZpZWxkKGFycmF5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGF5c0xpc3QgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRGF5c0xpc3QuanMiXSwic291cmNlUm9vdCI6IiJ9