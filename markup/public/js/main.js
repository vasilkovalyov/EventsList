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
	    (0, _Validation.valid)() == 0 ? dayListObject.btnEvent() : 0;
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
	
	function valid() {
	    (0, _Functions.getInputs)().forEach(function (item) {
	        if (isEmptyField(item.value)) {
	            item.classList.add('input-error');
	        } else {
	            item.classList.remove('input-error');
	        }
	    });
	
	    return getInvalidCountInput((0, _Functions.getInputs)());
	}
	
	function getInvalidCountInput(arrayInputs) {
	    var counter = 0;
	    arrayInputs.forEach(function (item) {
	        if (item.classList.contains('input-error')) {
	            counter++;
	        }
	    });
	
	    return counter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTIyM2IyYThiNjJiYTk2YWQ0ZDIiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRheUxpc3RPYmplY3QiLCJEYXlzTGlzdCIsImJ0bkNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnRuRXZlbnQiLCJpbml0RGF0ZXBpY2tlciIsImRhdGVwaWNrZXIiLCJqUXVlcnkiLCJlYWNoIiwiZm9ybWF0IiwiRXZlbnRJdGVtIiwidGV4dEV2ZW50IiwiZGF0ZUV2ZW50IiwidGltZVN0YXJ0RXZlbnQiLCJ0aW1lRW5kRXZlbnQiLCJpZEV2ZW50IiwibGkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiZXZlbnRDb250ZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidmFsdWUiLCJFdmVudERheSIsImRhdGUiLCJldmVudHNNYXAiLCJNYXAiLCJpZERheSIsImNvdW50ZXJFdmVudCIsImtleSIsIm9iamVjdCIsInNldCIsInRleHQiLCJzdGFydCIsImVuZCIsImNvbCIsImRpdiIsImFwcGVuZENoaWxkIiwiZGF5Q29udGVudCIsImdldElucHV0cyIsInB1c2hEYXRlVG9TZWxlY3QiLCJnZXREYXlJdGVtQnlJZCIsImNsZWFyQWxsSW5wdXRGaWVsZCIsImlucHV0VGV4dEV2ZW50IiwiaW5wdXREYXRlRXZlbnQiLCJpbnB1dFN0YXJ0RXZlbnQiLCJpbnB1dEVuZEV2ZW50IiwiaW5wdXRWYWx1ZXMiLCJzZWxlY3QiLCJvcHRpb24iLCJpbm5lclRleHQiLCJpZCIsImFycmF5IiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImZvckVhY2giLCJpdGVtIiwiZGF5c01hcCIsImNvdW50ZXJEYXkiLCJlbGVtZW50IiwidmFsdWVzIiwidGFyZ2V0RGF5IiwiZXZlbnQiLCJldmVudExpc3QiLCJkYXlPYmplY3QiLCJpc0V4aXN0IiwiaXNFeGlzdGVuY2VFbGVtZW50IiwiRGF0ZURheSIsInJvdyIsImdldERheU9iamVjdEJ5RGF0ZSIsImV2ZW50T2JqZWN0IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJJZEV2ZW50IiwiaWREYXRlIiwiSWREYXkiLCJkYXlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVuZGVyRXZlbnRJblRhcmdldERheSIsInJlbmRlciIsInZhbGlkIiwiaXNFbXB0eUZpZWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0SW52YWxpZENvdW50SW5wdXQiLCJhcnJheUlucHV0cyIsImNvdW50ZXIiLCJjb250YWlucyIsImlucHV0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUdBQSxRQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEI7QUFDSCxFQUZEOztBQUtB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QixhQUF4QixDQUFKLEVBQTRDO0FBQ3hDRDtBQUNIO0FBQ0osTUFKRDs7QUFNQSxZQUFPQSxPQUFQO0FBQ0g7O0FBRUQsVUFBU04sWUFBVCxDQUFzQlEsS0FBdEIsRUFBNkI7QUFDekIsU0FBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ2IsZ0JBQU8sQ0FBUDtBQUNILE1BRkQsTUFFTztBQUNILGdCQUFPLENBQVA7QUFDSDtBQUNKLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkyMjNiMmE4YjYyYmE5NmFkNGQyIiwiaW1wb3J0IHsgaW5pdERhdGVwaWNrZXIgfSBmcm9tICcuL2xpYi9kYXRlcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudERheSc7XHJcbmltcG9ydCB7IERheXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0RheXNMaXN0JztcclxuaW1wb3J0IHsgdmFsaWQgfSBmcm9tICcuL21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uJ1xyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0RGF0ZXBpY2tlcigpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZGF5TGlzdE9iamVjdCA9IG5ldyBEYXlzTGlzdCgpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jcmVhdGUtZXZlbnQnKTtcclxuXHJcbmJ0bkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICB2YWxpZCgpID09IDAgPyBkYXlMaXN0T2JqZWN0LmJ0bkV2ZW50KCkgOiAwO1xyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbWFpbi5qcyIsImNvbnN0IGluaXREYXRlcGlja2VyID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBqUXVlcnkoJy5kYXRlcGlja2VyJyk7XHJcbiAgICBkYXRlcGlja2VyLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ21tLmRkLnl5eXknXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge2luaXREYXRlcGlja2VyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2xpYi9kYXRlcGlja2VyLmpzIiwiY2xhc3MgRXZlbnRJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHRFdmVudCwgZGF0ZUV2ZW50LCB0aW1lU3RhcnRFdmVudCwgdGltZUVuZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0RXZlbnQgPSB0ZXh0RXZlbnQ7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhcnRFdmVudCA9IHRpbWVTdGFydEV2ZW50O1xyXG4gICAgICAgIHRoaXMudGltZUVuZEV2ZW50ID0gdGltZUVuZEV2ZW50O1xyXG4gICAgICAgIHRoaXMuZGF0ZUV2ZW50ID0gZGF0ZUV2ZW50O1xyXG4gICAgICAgIHRoaXMuaWRFdmVudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRpbWVTdGFydEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVTdGFydEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUaW1lU3RhcnRFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGltZVN0YXJ0RXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZUVuZEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVFbmRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVGltZUVuZEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGF0ZUV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBJZEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS5jbGFzc05hbWUgPSAnZXZlbnQtaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJztcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZEV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGV4dCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+JHt0aGlzLnRleHRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtcGFuZWwtc2lkZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImRhdGVwaWNrZXJcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGltZSBzdGFydCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3RoaXMudGltZVN0YXJ0RXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRpbWUgZW5kIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPiR7dGhpcy50aW1lRW5kRXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWNvbnRyb2xzIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jaGVja1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1lZGl0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBsaS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBldmVudENvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEV2ZW50SXRlbSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsImltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vRXZlbnRJdGVtJztcclxuaW1wb3J0IHsgZ2V0SW5wdXRzIH0gZnJvbSAnLi4vbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucyc7XHJcblxyXG5jbGFzcyBFdmVudERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLmV2ZW50c01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlkRGF5ID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJFdmVudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElkRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBJZERheSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaWREYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGF0ZURheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBEYXRlRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50ZXJFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50ZXJFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEV2ZW50VG9EYXkoa2V5LCBvYmplY3QpIHtcclxuICAgICAgICB0aGlzLmV2ZW50c01hcC5zZXQoa2V5LCBvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUV2ZW50T2JqZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0LCBkYXRlLCBzdGFydCwgZW5kXSA9IGdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBFdmVudEl0ZW0odGV4dC52YWx1ZSwgZGF0ZS52YWx1ZSwgc3RhcnQudmFsdWUsIGVuZC52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29sLmNsYXNzTmFtZSA9ICdjb2wtNCc7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSAnZGF5LWl0ZW0nO1xyXG5cclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWREYXkpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGUtZGF5JywgdGhpcy5kYXRlKTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheUNvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7dGhpcy5kYXRlfVwiPiR7dGhpcy5kYXRlfTwvdGltZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImRheS1ldmVudHMtbGlzdFwiPjwvdWw+YDtcclxuXHJcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRheUNvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBFdmVudERheSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50RGF5LmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0cygpIHtcclxuICAgIGNvbnN0IGlucHV0VGV4dEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXRleHQtZXZlbnQnKTtcclxuICAgIGNvbnN0IGlucHV0RGF0ZUV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWRhdGUtZXZlbnQnKTtcclxuICAgIGNvbnN0IGlucHV0U3RhcnRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1zdGFydC1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXRFbmRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1lbmQtZXZlbnQnKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IFtpbnB1dFRleHRFdmVudCwgaW5wdXREYXRlRXZlbnQsIGlucHV0U3RhcnRFdmVudCwgaW5wdXRFbmRFdmVudF1cclxuXHJcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXNoRGF0ZVRvU2VsZWN0KHNlbGVjdCwgZGF0ZSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGUpO1xyXG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IGRhdGU7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERheUl0ZW1CeUlkKGlkLCBhcnJheSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYXJyYXkubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycmF5W2ldLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxJbnB1dEZpZWxkKGFycmF5KSB7XHJcbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS52YWx1ZSA9ICcnO1xyXG4gICAgfSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucy5qcyIsImltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vRXZlbnRJdGVtJztcclxuaW1wb3J0IHsgRXZlbnREYXkgfSBmcm9tICcuL0V2ZW50RGF5JztcclxuaW1wb3J0IHsgZ2V0SW5wdXRzLCBwdXNoRGF0ZVRvU2VsZWN0LCBnZXREYXlJdGVtQnlJZCwgY2xlYXJBbGxJbnB1dEZpZWxkIH0gZnJvbSAnLi4vbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucydcclxuXHJcbmNsYXNzIERheXNMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGF5c01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJEYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnRlckRheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDb3VudGVyRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRGF5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzRXhpc3RlbmNlRWxlbWVudChlbGVtZW50LCBhcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZGF0ZSA9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXlPYmplY3RCeURhdGUoZGF0ZSwgYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFycmF5LnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGUgPT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRXZlbnRJblRhcmdldERheSh0YXJnZXREYXksIGV2ZW50KXtcclxuICAgICAgICBjb25zdCBldmVudExpc3QgPSB0YXJnZXREYXkucXVlcnlTZWxlY3RvcignLmRheS1ldmVudHMtbGlzdCcpO1xyXG4gICAgICAgIGV2ZW50TGlzdC5hcHBlbmRDaGlsZChldmVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ0bkV2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0LCBkYXRlLCBzdGFydCwgZW5kXSA9IGdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IGRheU9iamVjdCA9IG5ldyBFdmVudERheShkYXRlLnZhbHVlKTsgLy8g0L7QsdGK0LXQutGCINCU0JXQndCsXHJcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMuaXNFeGlzdGVuY2VFbGVtZW50KGRheU9iamVjdC5EYXRlRGF5LCB0aGlzLmRheXNNYXApOyAvLyAxIC0gZGF5IGV4aXN0IDAgLSBkYXkgbm90IGV4aXN0XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50cy1saXN0IC5yb3ctZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoaXNFeGlzdCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXlPYmplY3QgPSB0aGlzLmdldERheU9iamVjdEJ5RGF0ZShkYXRlLnZhbHVlLCB0aGlzLmRheXNNYXApOyAvLyDQvdCw0YXQvtC00LjQvCDQsiDQutC+0LvQu9C10LrRhtC40Lgg0L7QsdGK0LXQutGCINCU0LXQvdGMINC/0L4g0LTQsNGC0LUg0YHQvtC30LTQsNC90LjRj1xyXG4gICAgICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IGRheU9iamVjdC5jcmVhdGVFdmVudE9iamVjdCgpOyAvLyDRgdC+0LfQtNCw0Lsg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBldmVudE9iamVjdC5JZEV2ZW50ID0gdGhpcy5jb3VudGVyRXZlbnQgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgICBkYXlPYmplY3QuZXZlbnRzTWFwLnNldChldmVudE9iamVjdC5JZEV2ZW50LCBldmVudE9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCh0L7QsdGL0YLQuNGPINCyINC60L7Qu9C70LXQutGG0LjRjiDRgdC+0LHRi9GC0LjQuSDQlNC90Y9cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkRGF0ZSA9IGRheU9iamVjdC5JZERheTtcclxuICAgICAgICAgICAgY29uc3QgZGF5c0FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1pdGVtJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXREYXkgPSBnZXREYXlJdGVtQnlJZChpZERhdGUsIGRheXNBcnJheSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRXZlbnRJblRhcmdldERheSh0YXJnZXREYXksIGV2ZW50T2JqZWN0LnJlbmRlcigpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkYXlPYmplY3QuY3JlYXRlRXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC7INC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgICBldmVudE9iamVjdC5JZEV2ZW50ID0gdGhpcy5jb3VudGVyRXZlbnQgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG5cclxuICAgICAgICAgICAgZGF5T2JqZWN0LmV2ZW50c01hcC5zZXQoZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRheXNNYXAuc2V0KGRhdGUudmFsdWUsIGRheU9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCU0L3RjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0JTQvdC10LlcclxuICAgICAgICAgICAgZGF5T2JqZWN0LklkRGF5ID0gdGhpcy5jb3VudGVyRGF5OyAvLyDQv9C+0YHRgtCw0LLQuNC7IGlkINC90LAg0L7QsdGK0LXQutGCINCU0LXQvdGMXHJcblxyXG4gICAgICAgICAgICBwdXNoRGF0ZVRvU2VsZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZGF0ZScpLCBkYXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGRheU9iamVjdC5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheXNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktaXRlbScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGF5ID0gZ2V0RGF5SXRlbUJ5SWQoZGF5T2JqZWN0LklkRGF5LCBkYXlzQXJyYXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50SW5UYXJnZXREYXkodGFyZ2V0RGF5LCBldmVudE9iamVjdC5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJEYXkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQrKztcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBnZXRJbnB1dHMoKTtcclxuICAgICAgICBjbGVhckFsbElucHV0RmllbGQoYXJyYXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEYXlzTGlzdCB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyIsImltcG9ydCB7IGdldElucHV0cyB9IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWQoKSB7XHJcbiAgICBnZXRJbnB1dHMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRW1wdHlGaWVsZChpdGVtLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGdldEludmFsaWRDb3VudElucHV0KGdldElucHV0cygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW52YWxpZENvdW50SW5wdXQoYXJyYXlJbnB1dHMpIHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGFycmF5SW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWVycm9yJykpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5RmllbGQoaW5wdXQpIHtcclxuICAgIGlmIChpbnB1dCA9PSAnJykge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==