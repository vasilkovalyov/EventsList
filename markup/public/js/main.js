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
	
	var _ActionWithEvents = __webpack_require__(2);
	
	var _Validation = __webpack_require__(7);
	
	window.onload = function () {
	    (0, _datepicker.initDatepicker)();
	};
	
	var actionObject = new _ActionWithEvents.ActionWithEvents();
	
	var btnCreate = document.querySelector('.btn-create-event');
	var selectDate = document.querySelector('.select-date');
	
	btnCreate.addEventListener('click', function (e) {
	    (0, _Validation.validation)() == 0 ? actionObject.btnEvent() : 0; // запуск с валидацией
	});
	
	selectDate.addEventListener('change', function (e) {
	    actionObject.filterDaysByDate(this.value);
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ActionWithEvents = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Functions = __webpack_require__(3);
	
	var functionsObject = _interopRequireWildcard(_Functions);
	
	var _EventItem = __webpack_require__(4);
	
	var _EventDay = __webpack_require__(5);
	
	var _DaysList = __webpack_require__(6);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ActionWithEvents = function () {
	    function ActionWithEvents() {
	        var _this = this;
	
	        _classCallCheck(this, ActionWithEvents);
	
	        this.createAndGetEventObject = function () {
	            var _functionsObject$getI = functionsObject.getInputs(),
	                _functionsObject$getI2 = _slicedToArray(_functionsObject$getI, 4),
	                text = _functionsObject$getI2[0],
	                date = _functionsObject$getI2[1],
	                start = _functionsObject$getI2[2],
	                end = _functionsObject$getI2[3];
	
	            var object = new _EventItem.EventItem(text.value, date.value, start.value, end.value);
	            object.IdEvent = _this.counterForIdEvents;
	            _this.counterForIdEvents++;
	            return object;
	        };
	
	        this.daysListObject = new _DaysList.DaysList(); // объект DaysList
	        this.counterForIdDays = 0;
	        this.counterForIdEvents = 0;
	    }
	
	    _createClass(ActionWithEvents, [{
	        key: 'btnEvent',
	        value: function btnEvent() {
	            var _functionsObject$getI3 = functionsObject.getInputs(),
	                _functionsObject$getI4 = _slicedToArray(_functionsObject$getI3, 4),
	                text = _functionsObject$getI4[0],
	                date = _functionsObject$getI4[1],
	                start = _functionsObject$getI4[2],
	                end = _functionsObject$getI4[3];
	
	            var dayObject = new _EventDay.EventDay(date.value); // create object Day
	            var row = document.querySelector('.events-list .row-days');
	            var selectDom = document.querySelector('.select-date');
	
	            if (functionsObject.isExist(dayObject.DateDay, this.daysListObject.daysMap)) {
	                // если день существует
	                var targetDayObject = functionsObject.getDayObjectByDate(dayObject.DateDay, this.daysListObject.daysMap); // находим в коллекции день по дате и получаем его
	
	                var eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие
	
	                functionsObject.addObjectToCollection(targetDayObject.eventsMap, eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	
	                this.renderEventToTargetDay(targetDayObject.IdDay, eventObject.render()); // отрисовка события в текущий день
	            } else {
	                // если день не существует
	                var _eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие
	
	                functionsObject.addObjectToCollection(dayObject.eventsMap, _eventObject.IdEvent, _eventObject); // добавление События в коллекцию событий Дня
	
	                functionsObject.addObjectToCollection(this.daysListObject.daysMap, date.value, dayObject); // добавление Дня в коллекцию Дней
	
	                dayObject.IdDay = this.counterForIdDays; // увеличиваю id на объект День
	
	                functionsObject.pushDateToSelect(selectDom, date.value); // отрисовка дня в селект 
	
	                row.appendChild(dayObject.render()); // отрисовка дня
	
	                this.renderEventToTargetDay(dayObject.IdDay, _eventObject.render()); // отрисовка события в день
	
	                this.counterForIdDays++; // увеличение счетчика для id дней
	            }
	
	            // очистить все поля ввода
	            var array = functionsObject.getInputs();
	            functionsObject.clearAllInputField(array);
	        }
	    }, {
	        key: 'renderEventToTargetDay',
	        value: function renderEventToTargetDay(id, renderEvent) {
	            // отрисовка События
	            var domElements = document.querySelectorAll('.day-item');
	            var targetDayFromDom = functionsObject.getDayItemById(id, domElements); // получить день по id в DOM дереве
	            var eventList = targetDayFromDom.querySelector('.day-events-list'); // список событий в текущием дне
	            eventList.appendChild(renderEvent);
	        }
	
	        // создать объект событие увеличить его id и вернуть
	
	    }, {
	        key: 'filterDaysByDate',
	        value: function filterDaysByDate(date) {
	            var row = document.querySelector('.events-list .row-days');
	            row.innerHTML = '';
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this.daysListObject.daysMap.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var objectDay = _step.value;
	
	                    if (objectDay.date == date) {
	                        row.appendChild(objectDay.render());
	                        var idTargetDayDom = document.querySelector('.day-item').getAttribute('id');
	                        this.renderAllEventsInTargetDay(objectDay.eventsMap, idTargetDayDom);
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
	        }
	    }, {
	        key: 'renderAllEventsInTargetDay',
	        value: function renderAllEventsInTargetDay(arrayEvents, targetDay) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = arrayEvents.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var event = _step2.value;
	
	                    this.renderEventToTargetDay(targetDay, event.render());
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
	    }]);
	
	    return ActionWithEvents;
	}();
	
	exports.ActionWithEvents = ActionWithEvents;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getInputs = getInputs;
	exports.pushDateToSelect = pushDateToSelect;
	exports.clearAllInputField = clearAllInputField;
	exports.addObjectToCollection = addObjectToCollection;
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
	
	var getDayItemById = exports.getDayItemById = function getDayItemById(id, array) {
	    for (var i = 0; i <= array.length - 1; i++) {
	        if (array[i].getAttribute('id') == id) {
	            return array[i];
	        }
	    }
	};
	
	function clearAllInputField(array) {
	    array.forEach(function (item) {
	        item.value = '';
	    });
	}
	
	// существование объекта (Событие, Дата и т.д) в коллекции (1-существует, 0-не существует)
	var isExist = exports.isExist = function isExist(element, array) {
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
	};
	
	var getDayObjectByDate = exports.getDayObjectByDate = function getDayObjectByDate(date, array) {
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
	};
	
	function addObjectToCollection(collection, key, object) {
	    collection.set(key, object);
	}

/***/ }),
/* 4 */
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
	
	        this.idEvent = 0; // id события
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
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventDay = function () {
	    function EventDay(date) {
	        _classCallCheck(this, EventDay);
	
	        this.date = date;
	        this.eventsMap = new Map(); // коллекция событий в Дне
	        this.idDay = 0; // id Дня
	        this.counterDay = 0;
	    }
	
	    _createClass(EventDay, [{
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
	        key: 'CounterDay',
	        get: function get() {
	            return this.counterDay;
	        },
	        set: function set(value) {
	            this.counterDay = value;
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
	    }]);
	
	    return EventDay;
	}();
	
	exports.EventDay = EventDay;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DaysList = function () {
	    function DaysList() {
	        _classCallCheck(this, DaysList);
	
	        this.daysMap = new Map();
	        this.counterForIdDays = 0;
	        this.counterForIdEvents = 0;
	    }
	
	    _createClass(DaysList, [{
	        key: "CounterForIdDays",
	        get: function get() {
	            return this.counterForIdDays;
	        },
	        set: function set(value) {
	            this.counterForIdDays = value;
	        }
	    }, {
	        key: "CounterForIdEvents",
	        get: function get() {
	            return this.counterForIdEvents;
	        },
	        set: function set(value) {
	            this.counterForIdEvents = value;
	        }
	    }]);
	
	    return DaysList;
	}();
	
	exports.DaysList = DaysList;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validation = validation;
	
	var _Functions = __webpack_require__(3);
	
	function validation() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjVhMjZkM2IzZTUyNjMwY2Y3MmEiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0FjdGlvbldpdGhFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50RGF5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImFjdGlvbk9iamVjdCIsIkFjdGlvbldpdGhFdmVudHMiLCJidG5DcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3REYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJidG5FdmVudCIsImZpbHRlckRheXNCeURhdGUiLCJ2YWx1ZSIsImluaXREYXRlcGlja2VyIiwiZGF0ZXBpY2tlciIsImpRdWVyeSIsImVhY2giLCJmb3JtYXQiLCJmdW5jdGlvbnNPYmplY3QiLCJjcmVhdGVBbmRHZXRFdmVudE9iamVjdCIsImdldElucHV0cyIsInRleHQiLCJkYXRlIiwic3RhcnQiLCJlbmQiLCJvYmplY3QiLCJFdmVudE9iamVjdCIsIklkRXZlbnQiLCJjb3VudGVyRm9ySWRFdmVudHMiLCJkYXlzTGlzdE9iamVjdCIsIkRheXNMaXN0T2JqZWN0IiwiY291bnRlckZvcklkRGF5cyIsImRheU9iamVjdCIsIkRheU9iamVjdCIsInJvdyIsInNlbGVjdERvbSIsImlzRXhpc3QiLCJEYXRlRGF5IiwiZGF5c01hcCIsInRhcmdldERheU9iamVjdCIsImdldERheU9iamVjdEJ5RGF0ZSIsImV2ZW50T2JqZWN0IiwiYWRkT2JqZWN0VG9Db2xsZWN0aW9uIiwiZXZlbnRzTWFwIiwicmVuZGVyRXZlbnRUb1RhcmdldERheSIsIklkRGF5IiwicmVuZGVyIiwicHVzaERhdGVUb1NlbGVjdCIsImFwcGVuZENoaWxkIiwiYXJyYXkiLCJjbGVhckFsbElucHV0RmllbGQiLCJpZCIsInJlbmRlckV2ZW50IiwiZG9tRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFyZ2V0RGF5RnJvbURvbSIsImdldERheUl0ZW1CeUlkIiwiZXZlbnRMaXN0IiwiaW5uZXJIVE1MIiwidmFsdWVzIiwib2JqZWN0RGF5IiwiaWRUYXJnZXREYXlEb20iLCJnZXRBdHRyaWJ1dGUiLCJyZW5kZXJBbGxFdmVudHNJblRhcmdldERheSIsImFycmF5RXZlbnRzIiwidGFyZ2V0RGF5IiwiZXZlbnQiLCJpbnB1dFRleHRFdmVudCIsImlucHV0RGF0ZUV2ZW50IiwiaW5wdXRTdGFydEV2ZW50IiwiaW5wdXRFbmRFdmVudCIsImlucHV0VmFsdWVzIiwic2VsZWN0Iiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImVsZW1lbnQiLCJjb2xsZWN0aW9uIiwia2V5Iiwic2V0IiwiRXZlbnRJdGVtIiwidGV4dEV2ZW50IiwiZGF0ZUV2ZW50IiwidGltZVN0YXJ0RXZlbnQiLCJ0aW1lRW5kRXZlbnQiLCJpZEV2ZW50IiwibGkiLCJjbGFzc05hbWUiLCJldmVudENvbnRlbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJFdmVudERheSIsIk1hcCIsImlkRGF5IiwiY291bnRlckRheSIsImNvbCIsImRpdiIsImRheUNvbnRlbnQiLCJEYXlzTGlzdCIsInZhbGlkYXRpb24iLCJpc0VtcHR5RmllbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXRJbnZhbGlkQ291bnRJbnB1dCIsImFycmF5SW5wdXRzIiwiY291bnRlciIsImNvbnRhaW5zIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0E7O0FBR0FBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QjtBQUNILEVBRkQ7O0FBSUEsS0FBTUMsZUFBZSxJQUFJQyxrQ0FBSixFQUFyQjs7QUFFQSxLQUFNQyxZQUFZQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFsQjtBQUNBLEtBQU1DLGFBQWFGLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7O0FBRUFGLFdBQVVJLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztBQUN2QyxzQ0FBZ0IsQ0FBaEIsR0FBb0JQLGFBQWFRLFFBQWIsRUFBcEIsR0FBOEMsQ0FBOUMsQ0FEdUMsQ0FDVTtBQUNwRCxFQUZEOztBQUlBSCxZQUFXQyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFVQyxDQUFWLEVBQWE7QUFDL0NQLGtCQUFhUyxnQkFBYixDQUE4QixLQUFLQyxLQUFuQztBQUNILEVBRkQsRTs7Ozs7Ozs7Ozs7QUNuQkEsS0FBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFVO0FBQzdCLFNBQU1DLGFBQWFDLE9BQU8sYUFBUCxDQUFuQjtBQUNBRCxnQkFBV0UsSUFBWCxDQUFnQixZQUFVO0FBQ3RCRCxnQkFBTyxJQUFQLEVBQWFELFVBQWIsQ0FBd0I7QUFDcEJHLHFCQUFRO0FBRFksVUFBeEI7QUFHSCxNQUpE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O0FBQ3ZDLFNBQUlDLFVBQVUsQ0FBZDtBQUNBRCxpQkFBWTlCLE9BQVosQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLGFBQUlBLEtBQUt5QixTQUFMLENBQWVNLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBSixFQUE0QztBQUN4Q0Q7QUFDSDtBQUNKLE1BSkQ7O0FBTUEsWUFBT0EsT0FBUDtBQUNIOztBQUVELFVBQVNOLFlBQVQsQ0FBc0JRLEtBQXRCLEVBQTZCO0FBQ3pCLFNBQUlBLFNBQVMsRUFBYixFQUFpQjtBQUNiLGdCQUFPLENBQVA7QUFDSCxNQUZELE1BRU87QUFDSCxnQkFBTyxDQUFQO0FBQ0g7QUFDSixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNWEyNmQzYjNlNTI2MzBjZjcyYSIsImltcG9ydCB7IGluaXREYXRlcGlja2VyIH0gZnJvbSAnLi9saWIvZGF0ZXBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb25XaXRoRXZlbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL0FjdGlvbldpdGhFdmVudHMnO1xyXG5pbXBvcnQgeyB2YWxpZGF0aW9uIH0gZnJvbSAnLi9tb2R1bGVGdW5jdGlvbnMvVmFsaWRhdGlvbidcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdERhdGVwaWNrZXIoKTtcclxufVxyXG5cclxuY29uc3QgYWN0aW9uT2JqZWN0ID0gbmV3IEFjdGlvbldpdGhFdmVudHMoKTtcclxuXHJcbmNvbnN0IGJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY3JlYXRlLWV2ZW50Jyk7XHJcbmNvbnN0IHNlbGVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKTtcclxuXHJcbmJ0bkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICB2YWxpZGF0aW9uKCkgPT0gMCA/IGFjdGlvbk9iamVjdC5idG5FdmVudCgpIDogMDsgLy8g0LfQsNC/0YPRgdC6INGBINCy0LDQu9C40LTQsNGG0LjQtdC5XHJcbn0pO1xyXG5cclxuc2VsZWN0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgYWN0aW9uT2JqZWN0LmZpbHRlckRheXNCeURhdGUodGhpcy52YWx1ZSk7XHJcbn0pXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L21haW4uanMiLCJjb25zdCBpbml0RGF0ZXBpY2tlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkYXRlcGlja2VyID0galF1ZXJ5KCcuZGF0ZXBpY2tlcicpO1xyXG4gICAgZGF0ZXBpY2tlci5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICdtbS5kZC55eXl5J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHtpbml0RGF0ZXBpY2tlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9saWIvZGF0ZXBpY2tlci5qcyIsImltcG9ydCAqIGFzIGZ1bmN0aW9uc09iamVjdCBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJ1xyXG5cclxuaW1wb3J0IHsgRXZlbnRJdGVtIGFzIEV2ZW50T2JqZWN0IH0gZnJvbSAnLi9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBFdmVudERheSBhcyBEYXlPYmplY3QgfSBmcm9tICcuL0V2ZW50RGF5JztcclxuaW1wb3J0IHsgRGF5c0xpc3QgYXMgRGF5c0xpc3RPYmplY3QgfSBmcm9tICcuL0RheXNMaXN0JztcclxuXHJcbmNsYXNzIEFjdGlvbldpdGhFdmVudHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXlzTGlzdE9iamVjdCA9IG5ldyBEYXlzTGlzdE9iamVjdCgpOyAvLyDQvtCx0YrQtdC60YIgRGF5c0xpc3RcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZERheXMgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRXZlbnRzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBidG5FdmVudCgpIHtcclxuICAgICAgICBjb25zdCBbdGV4dCwgZGF0ZSwgc3RhcnQsIGVuZF0gPSBmdW5jdGlvbnNPYmplY3QuZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY29uc3QgZGF5T2JqZWN0ID0gbmV3IERheU9iamVjdChkYXRlLnZhbHVlKTsgLy8gY3JlYXRlIG9iamVjdCBEYXlcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXZlbnRzLWxpc3QgLnJvdy1kYXlzJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1kYXRlJyk7XHJcblxyXG4gICAgICAgIGlmIChmdW5jdGlvbnNPYmplY3QuaXNFeGlzdChkYXlPYmplY3QuRGF0ZURheSwgdGhpcy5kYXlzTGlzdE9iamVjdC5kYXlzTWFwKSkgeyAvLyDQtdGB0LvQuCDQtNC10L3RjCDRgdGD0YnQtdGB0YLQstGD0LXRglxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXREYXlPYmplY3QgPSBmdW5jdGlvbnNPYmplY3QuZ2V0RGF5T2JqZWN0QnlEYXRlKGRheU9iamVjdC5EYXRlRGF5LCB0aGlzLmRheXNMaXN0T2JqZWN0LmRheXNNYXApOyAvLyDQvdCw0YXQvtC00LjQvCDQsiDQutC+0LvQu9C10LrRhtC40Lgg0LTQtdC90Ywg0L/QviDQtNCw0YLQtSDQuCDQv9C+0LvRg9GH0LDQtdC8INC10LPQvlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB0aGlzLmNyZWF0ZUFuZEdldEV2ZW50T2JqZWN0KCk7IC8vINGB0L7Qt9C00LDQtdC8INC4INC/0L7Qu9GD0YfQsNC10Lwg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbnNPYmplY3QuYWRkT2JqZWN0VG9Db2xsZWN0aW9uKHRhcmdldERheU9iamVjdC5ldmVudHNNYXAsIGV2ZW50T2JqZWN0LklkRXZlbnQsIGV2ZW50T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0KHQvtCx0YvRgtC40Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0L7QsdGL0YLQuNC5INCU0L3Rj1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudFRvVGFyZ2V0RGF5KHRhcmdldERheU9iamVjdC5JZERheSwgZXZlbnRPYmplY3QucmVuZGVyKCkpOyAvLyDQvtGC0YDQuNGB0L7QstC60LAg0YHQvtCx0YvRgtC40Y8g0LIg0YLQtdC60YPRidC40Lkg0LTQtdC90YxcclxuXHJcbiAgICAgICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0LTQtdC90Ywg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRglxyXG4gICAgICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IHRoaXMuY3JlYXRlQW5kR2V0RXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC10Lwg0Lgg0L/QvtC70YPRh9Cw0LXQvCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uc09iamVjdC5hZGRPYmplY3RUb0NvbGxlY3Rpb24oZGF5T2JqZWN0LmV2ZW50c01hcCwgZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbnNPYmplY3QuYWRkT2JqZWN0VG9Db2xsZWN0aW9uKHRoaXMuZGF5c0xpc3RPYmplY3QuZGF5c01hcCwgZGF0ZS52YWx1ZSwgZGF5T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0JTQvdGPINCyINC60L7Qu9C70LXQutGG0LjRjiDQlNC90LXQuVxyXG5cclxuICAgICAgICAgICAgZGF5T2JqZWN0LklkRGF5ID0gdGhpcy5jb3VudGVyRm9ySWREYXlzOyAvLyDRg9Cy0LXQu9C40YfQuNCy0LDRjiBpZCDQvdCwINC+0LHRitC10LrRgiDQlNC10L3RjFxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb25zT2JqZWN0LnB1c2hEYXRlVG9TZWxlY3Qoc2VsZWN0RG9tLCBkYXRlLnZhbHVlKTsgLy8g0L7RgtGA0LjRgdC+0LLQutCwINC00L3RjyDQsiDRgdC10LvQtdC60YIgXHJcblxyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGF5T2JqZWN0LnJlbmRlcigpKTsgLy8g0L7RgtGA0LjRgdC+0LLQutCwINC00L3Rj1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudFRvVGFyZ2V0RGF5KGRheU9iamVjdC5JZERheSwgZXZlbnRPYmplY3QucmVuZGVyKCkpOyAvLyDQvtGC0YDQuNGB0L7QstC60LAg0YHQvtCx0YvRgtC40Y8g0LIg0LTQtdC90YxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckZvcklkRGF5cysrOyAvLyDRg9Cy0LXQu9C40YfQtdC90LjQtSDRgdGH0LXRgtGH0LjQutCwINC00LvRjyBpZCDQtNC90LXQuVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0L7Rh9C40YHRgtC40YLRjCDQstGB0LUg0L/QvtC70Y8g0LLQstC+0LTQsFxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gZnVuY3Rpb25zT2JqZWN0LmdldElucHV0cygpO1xyXG4gICAgICAgIGZ1bmN0aW9uc09iamVjdC5jbGVhckFsbElucHV0RmllbGQoYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckV2ZW50VG9UYXJnZXREYXkoaWQsIHJlbmRlckV2ZW50KSB7IC8vINC+0YLRgNC40YHQvtCy0LrQsCDQodC+0LHRi9GC0LjRj1xyXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RGF5RnJvbURvbSA9IGZ1bmN0aW9uc09iamVjdC5nZXREYXlJdGVtQnlJZChpZCwgZG9tRWxlbWVudHMpOyAvLyDQv9C+0LvRg9GH0LjRgtGMINC00LXQvdGMINC/0L4gaWQg0LIgRE9NINC00LXRgNC10LLQtVxyXG4gICAgICAgIGNvbnN0IGV2ZW50TGlzdCA9IHRhcmdldERheUZyb21Eb20ucXVlcnlTZWxlY3RvcignLmRheS1ldmVudHMtbGlzdCcpOyAvLyDRgdC/0LjRgdC+0Log0YHQvtCx0YvRgtC40Lkg0LIg0YLQtdC60YPRidC40LXQvCDQtNC90LVcclxuICAgICAgICBldmVudExpc3QuYXBwZW5kQ2hpbGQocmVuZGVyRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINGB0L7Qt9C00LDRgtGMINC+0LHRitC10LrRgiDRgdC+0LHRi9GC0LjQtSDRg9Cy0LXQu9C40YfQuNGC0Ywg0LXQs9C+IGlkINC4INCy0LXRgNC90YPRgtGMXHJcbiAgICBjcmVhdGVBbmRHZXRFdmVudE9iamVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBbdGV4dCwgZGF0ZSwgc3RhcnQsIGVuZF0gPSBmdW5jdGlvbnNPYmplY3QuZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IEV2ZW50T2JqZWN0KHRleHQudmFsdWUsIGRhdGUudmFsdWUsIHN0YXJ0LnZhbHVlLCBlbmQudmFsdWUpO1xyXG4gICAgICAgIG9iamVjdC5JZEV2ZW50ID0gdGhpcy5jb3VudGVyRm9ySWRFdmVudHM7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9ySWRFdmVudHMrKztcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckRheXNCeURhdGUoZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudHMtbGlzdCAucm93LWRheXMnKTtcclxuICAgICAgICByb3cuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9iamVjdERheSBvZiB0aGlzLmRheXNMaXN0T2JqZWN0LmRheXNNYXAudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdERheS5kYXRlID09IGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvYmplY3REYXkucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRUYXJnZXREYXlEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWl0ZW0nKS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFsbEV2ZW50c0luVGFyZ2V0RGF5KG9iamVjdERheS5ldmVudHNNYXAsIGlkVGFyZ2V0RGF5RG9tKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBbGxFdmVudHNJblRhcmdldERheShhcnJheUV2ZW50cywgdGFyZ2V0RGF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnQgb2YgYXJyYXlFdmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudFRvVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnQucmVuZGVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWN0aW9uV2l0aEV2ZW50cyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0FjdGlvbldpdGhFdmVudHMuanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRzKCkge1xyXG4gICAgY29uc3QgaW5wdXRUZXh0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGV4dC1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXREYXRlRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0ZS1ldmVudCcpO1xyXG4gICAgY29uc3QgaW5wdXRTdGFydEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXN0YXJ0LWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dEVuZEV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWVuZC1ldmVudCcpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0gW2lucHV0VGV4dEV2ZW50LCBpbnB1dERhdGVFdmVudCwgaW5wdXRTdGFydEV2ZW50LCBpbnB1dEVuZEV2ZW50XVxyXG5cclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hEYXRlVG9TZWxlY3Qoc2VsZWN0LCBkYXRlKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0ZSk7XHJcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gZGF0ZTtcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF5SXRlbUJ5SWQgPSAoaWQsIGFycmF5KSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhcnJheS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyYXlbaV0uZ2V0QXR0cmlidXRlKCdpZCcpID09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbElucHV0RmllbGQoYXJyYXkpIHtcclxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjQtSDQvtCx0YrQtdC60YLQsCAo0KHQvtCx0YvRgtC40LUsINCU0LDRgtCwINC4INGCLtC0KSDQsiDQutC+0LvQu9C10LrRhtC40LggKDEt0YHRg9GJ0LXRgdGC0LLRg9C10YIsIDAt0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgilcclxuZXhwb3J0IGNvbnN0IGlzRXhpc3QgPSAoZWxlbWVudCwgYXJyYXkpID0+IHtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgICAgICBpZiAoaXRlbS5kYXRlID09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXlPYmplY3RCeURhdGUgPSAoZGF0ZSwgYXJyYXkpID0+IHtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgICAgICBpZiAoaXRlbS5kYXRlID09IGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkT2JqZWN0VG9Db2xsZWN0aW9uKGNvbGxlY3Rpb24sIGtleSwgb2JqZWN0KSB7XHJcbiAgICBjb2xsZWN0aW9uLnNldChrZXksIG9iamVjdCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwiY2xhc3MgRXZlbnRJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHRFdmVudCwgZGF0ZUV2ZW50LCB0aW1lU3RhcnRFdmVudCwgdGltZUVuZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0RXZlbnQgPSB0ZXh0RXZlbnQ7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhcnRFdmVudCA9IHRpbWVTdGFydEV2ZW50O1xyXG4gICAgICAgIHRoaXMudGltZUVuZEV2ZW50ID0gdGltZUVuZEV2ZW50O1xyXG4gICAgICAgIHRoaXMuZGF0ZUV2ZW50ID0gZGF0ZUV2ZW50O1xyXG5cclxuICAgICAgICB0aGlzLmlkRXZlbnQgPSAwOyAvLyBpZCDRgdC+0LHRi9GC0LjRj1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaW1lU3RhcnRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lU3RhcnRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVGltZVN0YXJ0RXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVTdGFydEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRpbWVFbmRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lRW5kRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRpbWVFbmRFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGltZUVuZEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERhdGVFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERhdGVFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZUV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElkRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSWRFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaWRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2V2ZW50LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWRFdmVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50Q29udGVudCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRleHQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiR7dGhpcy50ZXh0RXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXBhbmVsLXNpZGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJkYXRlcGlja2VyXCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRpbWUgc3RhcnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtY2VudGVyXCI+JHt0aGlzLnRpbWVTdGFydEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10aW1lIGVuZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3RoaXMudGltZUVuZEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1jb250cm9scyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2hlY2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tZWRpdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbGkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZXZlbnRDb250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBFdmVudEl0ZW0gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJjbGFzcyBFdmVudERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLmV2ZW50c01hcCA9IG5ldyBNYXAoKTsgLy8g0LrQvtC70LvQtdC60YbQuNGPINGB0L7QsdGL0YLQuNC5INCyINCU0L3QtVxyXG4gICAgICAgIHRoaXMuaWREYXkgPSAwOyAvLyBpZCDQlNC90Y9cclxuICAgICAgICB0aGlzLmNvdW50ZXJEYXkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJEYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50ZXJEYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJEYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWREYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWREYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IElkRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pZERheSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXRlRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERhdGVEYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29sLmNsYXNzTmFtZSA9ICdjb2wtNCc7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSAnZGF5LWl0ZW0nO1xyXG5cclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWREYXkpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGUtZGF5JywgdGhpcy5kYXRlKTtcclxuXHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheUNvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7dGhpcy5kYXRlfVwiPiR7dGhpcy5kYXRlfTwvdGltZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImRheS1ldmVudHMtbGlzdFwiPjwvdWw+YDtcclxuXHJcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRheUNvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBFdmVudERheSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50RGF5LmpzIiwiY2xhc3MgRGF5c0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXlzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRGF5cyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9ySWRFdmVudHMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRm9ySWREYXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJGb3JJZERheXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50ZXJGb3JJZERheXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZERheXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnRlckZvcklkRXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckZvcklkRXZlbnRzKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9ySWRFdmVudHMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IERheXNMaXN0IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0RheXNMaXN0LmpzIiwiaW1wb3J0IHsgZ2V0SW5wdXRzIH0gZnJvbSAnLi4vbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0aW9uKCkge1xyXG4gICAgZ2V0SW5wdXRzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpc0VtcHR5RmllbGQoaXRlbS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBnZXRJbnZhbGlkQ291bnRJbnB1dChnZXRJbnB1dHMoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEludmFsaWRDb3VudElucHV0KGFycmF5SW5wdXRzKSB7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICBhcnJheUlucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1lcnJvcicpKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eUZpZWxkKGlucHV0KSB7XHJcbiAgICBpZiAoaW5wdXQgPT0gJycpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvVmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=