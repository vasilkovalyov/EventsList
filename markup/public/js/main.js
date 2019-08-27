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
	var selectDate = document.querySelector('.select-date');
	
	btnCreate.addEventListener('click', function (e) {
	    (0, _Validation.valid)() == 0 ? dayListObject.btnEvent() : 0;
	});
	
	selectDate.addEventListener('change', function (e) {
	    dayListObject.filterDaysByDate(this.value);
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
	        key: 'filterDaysByDate',
	        value: function filterDaysByDate(date) {
	            var row = document.querySelector('.events-list .row-days');
	            row.innerHTML = '';
	
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = this.daysMap.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var objectDay = _step3.value;
	
	                    if (objectDay.date == date) {
	                        row.appendChild(objectDay.render());
	                        var targetDay = document.querySelector('.day-item');
	                        this.renderAllEventsInTargetDay(objectDay.eventsMap, targetDay);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'renderAllEventsInTargetDay',
	        value: function renderAllEventsInTargetDay(arrayEvents, targetDay) {
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = arrayEvents.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var event = _step4.value;
	
	                    this.renderEventInTargetDay(targetDay, event.render());
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQ4N2Y5NTM1NTNjNDZiNzc5ZWIiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRheUxpc3RPYmplY3QiLCJEYXlzTGlzdCIsImJ0bkNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdERhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJ0bkV2ZW50IiwiZmlsdGVyRGF5c0J5RGF0ZSIsInZhbHVlIiwiaW5pdERhdGVwaWNrZXIiLCJkYXRlcGlja2VyIiwialF1ZXJ5IiwiZWFjaCIsImZvcm1hdCIsIkV2ZW50SXRlbSIsInRleHRFdmVudCIsImRhdGVFdmVudCIsInRpbWVTdGFydEV2ZW50IiwidGltZUVuZEV2ZW50IiwiaWRFdmVudCIsImxpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50Q29udGVudCIsImluc2VydEFkamFjZW50SFRNTCIsIkV2ZW50RGF5IiwiZGF0ZSIsImV2ZW50c01hcCIsIk1hcCIsImlkRGF5IiwiY291bnRlckV2ZW50Iiwia2V5Iiwib2JqZWN0Iiwic2V0IiwidGV4dCIsInN0YXJ0IiwiZW5kIiwiY29sIiwiZGl2IiwiYXBwZW5kQ2hpbGQiLCJkYXlDb250ZW50IiwiZ2V0SW5wdXRzIiwicHVzaERhdGVUb1NlbGVjdCIsImdldERheUl0ZW1CeUlkIiwiY2xlYXJBbGxJbnB1dEZpZWxkIiwiaW5wdXRUZXh0RXZlbnQiLCJpbnB1dERhdGVFdmVudCIsImlucHV0U3RhcnRFdmVudCIsImlucHV0RW5kRXZlbnQiLCJpbnB1dFZhbHVlcyIsInNlbGVjdCIsIm9wdGlvbiIsImlubmVyVGV4dCIsImlkIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJkYXlzTWFwIiwiY291bnRlckRheSIsImVsZW1lbnQiLCJ2YWx1ZXMiLCJ0YXJnZXREYXkiLCJldmVudCIsImV2ZW50TGlzdCIsInJvdyIsImlubmVySFRNTCIsIm9iamVjdERheSIsInJlbmRlciIsInJlbmRlckFsbEV2ZW50c0luVGFyZ2V0RGF5IiwiYXJyYXlFdmVudHMiLCJyZW5kZXJFdmVudEluVGFyZ2V0RGF5IiwiZGF5T2JqZWN0IiwiaXNFeGlzdCIsImlzRXhpc3RlbmNlRWxlbWVudCIsIkRhdGVEYXkiLCJnZXREYXlPYmplY3RCeURhdGUiLCJldmVudE9iamVjdCIsImNyZWF0ZUV2ZW50T2JqZWN0IiwiSWRFdmVudCIsImlkRGF0ZSIsIklkRGF5IiwiZGF5c0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsInZhbGlkIiwiaXNFbXB0eUZpZWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0SW52YWxpZENvdW50SW5wdXQiLCJhcnJheUlucHV0cyIsImNvdW50ZXIiLCJjb250YWlucyIsImlucHV0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0FELGlCQUFZbEMsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsYUFBSUEsS0FBSzZCLFNBQUwsQ0FBZU0sUUFBZixDQUF3QixhQUF4QixDQUFKLEVBQTRDO0FBQ3hDRDtBQUNIO0FBQ0osTUFKRDs7QUFNQSxZQUFPQSxPQUFQO0FBQ0g7O0FBRUQsVUFBU04sWUFBVCxDQUFzQlEsS0FBdEIsRUFBNkI7QUFDekIsU0FBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ2IsZ0JBQU8sQ0FBUDtBQUNILE1BRkQsTUFFTztBQUNILGdCQUFPLENBQVA7QUFDSDtBQUNKLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVkODdmOTUzNTUzYzQ2Yjc3OWViIiwiaW1wb3J0IHsgaW5pdERhdGVwaWNrZXIgfSBmcm9tICcuL2xpYi9kYXRlcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudERheSc7XHJcbmltcG9ydCB7IERheXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0RheXNMaXN0JztcclxuaW1wb3J0IHsgdmFsaWQgfSBmcm9tICcuL21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uJ1xyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0RGF0ZXBpY2tlcigpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZGF5TGlzdE9iamVjdCA9IG5ldyBEYXlzTGlzdCgpO1xyXG5cclxuY29uc3QgYnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jcmVhdGUtZXZlbnQnKTtcclxuY29uc3Qgc2VsZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZGF0ZScpO1xyXG5cclxuYnRuQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHZhbGlkKCkgPT0gMCA/IGRheUxpc3RPYmplY3QuYnRuRXZlbnQoKSA6IDA7XHJcbn0pO1xyXG5cclxuc2VsZWN0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZGF5TGlzdE9iamVjdC5maWx0ZXJEYXlzQnlEYXRlKHRoaXMudmFsdWUpO1xyXG59KVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tYWluLmpzIiwiY29uc3QgaW5pdERhdGVwaWNrZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlciA9IGpRdWVyeSgnLmRhdGVwaWNrZXInKTtcclxuICAgIGRhdGVwaWNrZXIuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnbW0uZGQueXl5eSdcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdERhdGVwaWNrZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJjbGFzcyBFdmVudEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dEV2ZW50LCBkYXRlRXZlbnQsIHRpbWVTdGFydEV2ZW50LCB0aW1lRW5kRXZlbnQpIHtcclxuICAgICAgICB0aGlzLnRleHRFdmVudCA9IHRleHRFdmVudDtcclxuICAgICAgICB0aGlzLnRpbWVTdGFydEV2ZW50ID0gdGltZVN0YXJ0RXZlbnQ7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kRXZlbnQgPSB0aW1lRW5kRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5kYXRlRXZlbnQgPSBkYXRlRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZVN0YXJ0RXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVN0YXJ0RXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRpbWVTdGFydEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhcnRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaW1lRW5kRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZUVuZEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUaW1lRW5kRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVFbmRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBEYXRlRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGVFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IElkRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlkRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdldmVudC1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkRXZlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10ZXh0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4ke3RoaXMudGV4dEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1wYW5lbC1zaWRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZGF0ZXBpY2tlclwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10aW1lIHN0YXJ0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPiR7dGhpcy50aW1lU3RhcnRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGltZSBlbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtY2VudGVyXCI+JHt0aGlzLnRpbWVFbmRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtY29udHJvbHMgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNoZWNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWVkaXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGxpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGV2ZW50Q29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRXZlbnRJdGVtIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnRJdGVtLmpzIiwiaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSAnLi9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBnZXRJbnB1dHMgfSBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJztcclxuXHJcbmNsYXNzIEV2ZW50RGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaWREYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWREYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWREYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IElkRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pZERheSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXRlRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERhdGVEYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnRlckV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoRXZlbnRUb0RheShrZXksIG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwLnNldChrZXksIG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXZlbnRPYmplY3QoKSB7XHJcbiAgICAgICAgY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IEV2ZW50SXRlbSh0ZXh0LnZhbHVlLCBkYXRlLnZhbHVlLCBzdGFydC52YWx1ZSwgZW5kLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2wuY2xhc3NOYW1lID0gJ2NvbC00JztcclxuXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdkYXktaXRlbSc7XHJcblxyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZERheSk7XHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0ZS1kYXknLCB0aGlzLmRhdGUpO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF5Q29udGVudCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHt0aGlzLmRhdGV9XCI+JHt0aGlzLmRhdGV9PC90aW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZGF5LWV2ZW50cy1saXN0XCI+PC91bD5gO1xyXG5cclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZGF5Q29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2w7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEV2ZW50RGF5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRzKCkge1xyXG4gICAgY29uc3QgaW5wdXRUZXh0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGV4dC1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXREYXRlRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0ZS1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXRTdGFydEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXN0YXJ0LWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dEVuZEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWVuZC1ldmVudCcpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0gW2lucHV0VGV4dEV2ZW50LCBpbnB1dERhdGVFdmVudCwgaW5wdXRTdGFydEV2ZW50LCBpbnB1dEVuZEV2ZW50XVxyXG5cclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hEYXRlVG9TZWxlY3Qoc2VsZWN0LCBkYXRlKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0ZSk7XHJcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gZGF0ZTtcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5SXRlbUJ5SWQoaWQsIGFycmF5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhcnJheS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyYXlbaV0uZ2V0QXR0cmlidXRlKCdpZCcpID09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbElucHV0RmllbGQoYXJyYXkpIHtcclxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwiaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSAnLi9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSB9IGZyb20gJy4vRXZlbnREYXknO1xyXG5pbXBvcnQgeyBnZXRJbnB1dHMsIHB1c2hEYXRlVG9TZWxlY3QsIGdldERheUl0ZW1CeUlkLCBjbGVhckFsbElucHV0RmllbGQgfSBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJ1xyXG5cclxuY2xhc3MgRGF5c0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXlzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY291bnRlckRheSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRXZlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJEYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50ZXJEYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJEYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNFeGlzdGVuY2VFbGVtZW50KGVsZW1lbnQsIGFycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheS52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5kYXRlID09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERheU9iamVjdEJ5RGF0ZShkYXRlLCBhcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZGF0ZSA9PSBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBldmVudExpc3QgPSB0YXJnZXREYXkucXVlcnlTZWxlY3RvcignLmRheS1ldmVudHMtbGlzdCcpO1xyXG4gICAgICAgIGV2ZW50TGlzdC5hcHBlbmRDaGlsZChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyRGF5c0J5RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50cy1saXN0IC5yb3ctZGF5cycpO1xyXG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0RGF5IG9mIHRoaXMuZGF5c01hcC52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0RGF5LmRhdGUgPT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9iamVjdERheS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXREYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsRXZlbnRzSW5UYXJnZXREYXkob2JqZWN0RGF5LmV2ZW50c01hcCwgdGFyZ2V0RGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBbGxFdmVudHNJblRhcmdldERheShhcnJheUV2ZW50cywgdGFyZ2V0RGF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnQgb2YgYXJyYXlFdmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnQucmVuZGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidG5FdmVudCgpIHtcclxuICAgICAgICBjb25zdCBbdGV4dCwgZGF0ZSwgc3RhcnQsIGVuZF0gPSBnZXRJbnB1dHMoKTtcclxuICAgICAgICBjb25zdCBkYXlPYmplY3QgPSBuZXcgRXZlbnREYXkoZGF0ZS52YWx1ZSk7IC8vINC+0LHRitC10LrRgiDQlNCV0J3QrFxyXG4gICAgICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLmlzRXhpc3RlbmNlRWxlbWVudChkYXlPYmplY3QuRGF0ZURheSwgdGhpcy5kYXlzTWFwKTsgLy8gMSAtIGRheSBleGlzdCAwIC0gZGF5IG5vdCBleGlzdFxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudHMtbGlzdCAucm93LWRheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF5T2JqZWN0ID0gdGhpcy5nZXREYXlPYmplY3RCeURhdGUoZGF0ZS52YWx1ZSwgdGhpcy5kYXlzTWFwKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LIg0LrQvtC70LvQtdC60YbQuNC4INC+0LHRitC10LrRgiDQlNC10L3RjCDQv9C+INC00LDRgtC1INGB0L7Qt9C00LDQvdC40Y9cclxuICAgICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkYXlPYmplY3QuY3JlYXRlRXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC7INC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG5cclxuICAgICAgICAgICAgZXZlbnRPYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckV2ZW50IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZGF5T2JqZWN0LmV2ZW50c01hcC5zZXQoZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZERhdGUgPSBkYXlPYmplY3QuSWREYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheXNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGF5ID0gZ2V0RGF5SXRlbUJ5SWQoaWREYXRlLCBkYXlzQXJyYXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50SW5UYXJnZXREYXkodGFyZ2V0RGF5LCBldmVudE9iamVjdC5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZGF5T2JqZWN0LmNyZWF0ZUV2ZW50T2JqZWN0KCk7IC8vINGB0L7Qt9C00LDQuyDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgZXZlbnRPYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckV2ZW50IC8vINC/0L7RgdGC0LDQstC40LsgaWQg0L3QsCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuXHJcbiAgICAgICAgICAgIGRheU9iamVjdC5ldmVudHNNYXAuc2V0KGV2ZW50T2JqZWN0LklkRXZlbnQsIGV2ZW50T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0KHQvtCx0YvRgtC40Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0L7QsdGL0YLQuNC5INCU0L3Rj1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXlzTWFwLnNldChkYXRlLnZhbHVlLCBkYXlPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQlNC90Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINCU0L3QtdC5XHJcbiAgICAgICAgICAgIGRheU9iamVjdC5JZERheSA9IHRoaXMuY291bnRlckRheTsgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQlNC10L3RjFxyXG5cclxuICAgICAgICAgICAgcHVzaERhdGVUb1NlbGVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXlPYmplY3QucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXlzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldERheSA9IGdldERheUl0ZW1CeUlkKGRheU9iamVjdC5JZERheSwgZGF5c0FycmF5KTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnRPYmplY3QucmVuZGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyRGF5Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50ZXJFdmVudCsrO1xyXG5cclxuICAgICAgICBjb25zdCBhcnJheSA9IGdldElucHV0cygpO1xyXG4gICAgICAgIGNsZWFyQWxsSW5wdXRGaWVsZChhcnJheSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERheXNMaXN0IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0RheXNMaXN0LmpzIiwiaW1wb3J0IHsgZ2V0SW5wdXRzIH0gZnJvbSAnLi4vbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZCgpIHtcclxuICAgIGdldElucHV0cygpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXNFbXB0eUZpZWxkKGl0ZW0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZ2V0SW52YWxpZENvdW50SW5wdXQoZ2V0SW5wdXRzKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbnZhbGlkQ291bnRJbnB1dChhcnJheUlucHV0cykge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgYXJyYXlJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtZXJyb3InKSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHlGaWVsZChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0ID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL1ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9