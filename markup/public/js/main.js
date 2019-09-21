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
	    // запуск с валидацией
	    if ((0, _Validation.validation)()) {
	        actionObject.btnEvent();
	    } else {
	        setTimeout(function () {
	            alert('fill the all fields');
	        }, 100);
	    }
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
	    // let counter = 0;
	    // arrayInputs.forEach((item) => {
	    //     if (item.classList.contains('input-error')) {
	    //         counter++;
	    //     }
	    // });
	
	    // return counter;
	    return arrayInputs.filter(function (item) {
	        return item.value == '';
	    }).length == 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2FmOTJjMzZiOGI2Y2Q3ZWVhMGQiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0FjdGlvbldpdGhFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50RGF5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9EYXlzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImFjdGlvbk9iamVjdCIsIkFjdGlvbldpdGhFdmVudHMiLCJidG5DcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3REYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJidG5FdmVudCIsInNldFRpbWVvdXQiLCJhbGVydCIsImZpbHRlckRheXNCeURhdGUiLCJ2YWx1ZSIsImluaXREYXRlcGlja2VyIiwiZGF0ZXBpY2tlciIsImpRdWVyeSIsImVhY2giLCJmb3JtYXQiLCJmdW5jdGlvbnNPYmplY3QiLCJjcmVhdGVBbmRHZXRFdmVudE9iamVjdCIsImdldElucHV0cyIsInRleHQiLCJkYXRlIiwic3RhcnQiLCJlbmQiLCJvYmplY3QiLCJFdmVudE9iamVjdCIsIklkRXZlbnQiLCJjb3VudGVyRm9ySWRFdmVudHMiLCJkYXlzTGlzdE9iamVjdCIsIkRheXNMaXN0T2JqZWN0IiwiY291bnRlckZvcklkRGF5cyIsImRheU9iamVjdCIsIkRheU9iamVjdCIsInJvdyIsInNlbGVjdERvbSIsImlzRXhpc3QiLCJEYXRlRGF5IiwiZGF5c01hcCIsInRhcmdldERheU9iamVjdCIsImdldERheU9iamVjdEJ5RGF0ZSIsImV2ZW50T2JqZWN0IiwiYWRkT2JqZWN0VG9Db2xsZWN0aW9uIiwiZXZlbnRzTWFwIiwicmVuZGVyRXZlbnRUb1RhcmdldERheSIsIklkRGF5IiwicmVuZGVyIiwicHVzaERhdGVUb1NlbGVjdCIsImFwcGVuZENoaWxkIiwiYXJyYXkiLCJjbGVhckFsbElucHV0RmllbGQiLCJpZCIsInJlbmRlckV2ZW50IiwiZG9tRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFyZ2V0RGF5RnJvbURvbSIsImdldERheUl0ZW1CeUlkIiwiZXZlbnRMaXN0IiwiaW5uZXJIVE1MIiwidmFsdWVzIiwib2JqZWN0RGF5IiwiaWRUYXJnZXREYXlEb20iLCJnZXRBdHRyaWJ1dGUiLCJyZW5kZXJBbGxFdmVudHNJblRhcmdldERheSIsImFycmF5RXZlbnRzIiwidGFyZ2V0RGF5IiwiZXZlbnQiLCJpbnB1dFRleHRFdmVudCIsImlucHV0RGF0ZUV2ZW50IiwiaW5wdXRTdGFydEV2ZW50IiwiaW5wdXRFbmRFdmVudCIsImlucHV0VmFsdWVzIiwic2VsZWN0Iiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImVsZW1lbnQiLCJjb2xsZWN0aW9uIiwia2V5Iiwic2V0IiwiRXZlbnRJdGVtIiwidGV4dEV2ZW50IiwiZGF0ZUV2ZW50IiwidGltZVN0YXJ0RXZlbnQiLCJ0aW1lRW5kRXZlbnQiLCJpZEV2ZW50IiwibGkiLCJjbGFzc05hbWUiLCJldmVudENvbnRlbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJFdmVudERheSIsIk1hcCIsImlkRGF5IiwiY291bnRlckRheSIsImNvbCIsImRpdiIsImRheUNvbnRlbnQiLCJEYXlzTGlzdCIsInZhbGlkYXRpb24iLCJpc0VtcHR5RmllbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXRJbnZhbGlkQ291bnRJbnB1dCIsImFycmF5SW5wdXRzIiwiZmlsdGVyIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0E7O0FBR0FBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QjtBQUNILEVBRkQ7O0FBSUEsS0FBTUMsZUFBZSxJQUFJQyxrQ0FBSixFQUFyQjs7QUFFQSxLQUFNQyxZQUFZQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFsQjtBQUNBLEtBQU1DLGFBQWFGLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7O0FBRUFGLFdBQVVJLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztBQUN2QztBQUNBLFNBQUcsNkJBQUgsRUFBZ0I7QUFDWlAsc0JBQWFRLFFBQWI7QUFDSCxNQUZELE1BRUs7QUFDREMsb0JBQVcsWUFBTTtBQUNiQyxtQkFBTSxxQkFBTjtBQUNILFVBRkQsRUFFRyxHQUZIO0FBR0g7QUFDSixFQVREOztBQVdBTCxZQUFXQyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFVQyxDQUFWLEVBQWE7QUFDL0NQLGtCQUFhVyxnQkFBYixDQUE4QixLQUFLQyxLQUFuQztBQUNILEVBRkQsRTs7Ozs7Ozs7Ozs7QUMxQkEsS0FBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFVO0FBQzdCLFNBQU1DLGFBQWFDLE9BQU8sYUFBUCxDQUFuQjtBQUNBRCxnQkFBV0UsSUFBWCxDQUFnQixZQUFVO0FBQ3RC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QU9DLHFCQUFxQiwyQkFBckIsQ0FBUDtBQUNIOztBQUVELFVBQVNBLG9CQUFULENBQThCQyxXQUE5QixFQUEyQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFPQSxZQUFZQyxNQUFaLENBQW1CLFVBQUM5QixJQUFELEVBQVU7QUFDaEMsZ0JBQU9BLEtBQUtwRSxLQUFMLElBQWMsRUFBckI7QUFDSCxNQUZNLEVBRUprRSxNQUZJLElBRU0sQ0FGYjtBQUdIOztBQUVELFVBQVMwQixZQUFULENBQXNCTyxLQUF0QixFQUE2QjtBQUN6QixTQUFJQSxTQUFTLEVBQWIsRUFBaUI7QUFDYixnQkFBTyxDQUFQO0FBQ0gsTUFGRCxNQUVPO0FBQ0gsZ0JBQU8sQ0FBUDtBQUNIO0FBQ0osRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2FmOTJjMzZiOGI2Y2Q3ZWVhMGQiLCJpbXBvcnQgeyBpbml0RGF0ZXBpY2tlciB9IGZyb20gJy4vbGliL2RhdGVwaWNrZXInO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uV2l0aEV2ZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9BY3Rpb25XaXRoRXZlbnRzJztcclxuaW1wb3J0IHsgdmFsaWRhdGlvbiB9IGZyb20gJy4vbW9kdWxlRnVuY3Rpb25zL1ZhbGlkYXRpb24nXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGluaXREYXRlcGlja2VyKCk7XHJcbn1cclxuXHJcbmNvbnN0IGFjdGlvbk9iamVjdCA9IG5ldyBBY3Rpb25XaXRoRXZlbnRzKCk7XHJcblxyXG5jb25zdCBidG5DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNyZWF0ZS1ldmVudCcpO1xyXG5jb25zdCBzZWxlY3REYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1kYXRlJyk7XHJcblxyXG5idG5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgLy8g0LfQsNC/0YPRgdC6INGBINCy0LDQu9C40LTQsNGG0LjQtdC5XHJcbiAgICBpZih2YWxpZGF0aW9uKCkpe1xyXG4gICAgICAgIGFjdGlvbk9iamVjdC5idG5FdmVudCgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdmaWxsIHRoZSBhbGwgZmllbGRzJyk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5zZWxlY3REYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBhY3Rpb25PYmplY3QuZmlsdGVyRGF5c0J5RGF0ZSh0aGlzLnZhbHVlKTtcclxufSlcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbWFpbi5qcyIsImNvbnN0IGluaXREYXRlcGlja2VyID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBqUXVlcnkoJy5kYXRlcGlja2VyJyk7XHJcbiAgICBkYXRlcGlja2VyLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkodGhpcykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ21tLmRkLnl5eXknXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge2luaXREYXRlcGlja2VyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2xpYi9kYXRlcGlja2VyLmpzIiwiaW1wb3J0ICogYXMgZnVuY3Rpb25zT2JqZWN0IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnXHJcblxyXG5pbXBvcnQgeyBFdmVudEl0ZW0gYXMgRXZlbnRPYmplY3QgfSBmcm9tICcuL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IEV2ZW50RGF5IGFzIERheU9iamVjdCB9IGZyb20gJy4vRXZlbnREYXknO1xyXG5pbXBvcnQgeyBEYXlzTGlzdCBhcyBEYXlzTGlzdE9iamVjdCB9IGZyb20gJy4vRGF5c0xpc3QnO1xyXG5cclxuY2xhc3MgQWN0aW9uV2l0aEV2ZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRheXNMaXN0T2JqZWN0ID0gbmV3IERheXNMaXN0T2JqZWN0KCk7IC8vINC+0LHRitC10LrRgiBEYXlzTGlzdFxyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRGF5cyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9ySWRFdmVudHMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkV2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0LCBkYXRlLCBzdGFydCwgZW5kXSA9IGZ1bmN0aW9uc09iamVjdC5nZXRJbnB1dHMoKTtcclxuICAgICAgICBjb25zdCBkYXlPYmplY3QgPSBuZXcgRGF5T2JqZWN0KGRhdGUudmFsdWUpOyAvLyBjcmVhdGUgb2JqZWN0IERheVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudHMtbGlzdCAucm93LWRheXMnKTtcclxuICAgICAgICBjb25zdCBzZWxlY3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bmN0aW9uc09iamVjdC5pc0V4aXN0KGRheU9iamVjdC5EYXRlRGF5LCB0aGlzLmRheXNMaXN0T2JqZWN0LmRheXNNYXApKSB7IC8vINC10YHQu9C4INC00LXQvdGMINGB0YPRidC10YHRgtCy0YPQtdGCXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldERheU9iamVjdCA9IGZ1bmN0aW9uc09iamVjdC5nZXREYXlPYmplY3RCeURhdGUoZGF5T2JqZWN0LkRhdGVEYXksIHRoaXMuZGF5c0xpc3RPYmplY3QuZGF5c01hcCk7IC8vINC90LDRhdC+0LTQuNC8INCyINC60L7Qu9C70LXQutGG0LjQuCDQtNC10L3RjCDQv9C+INC00LDRgtC1INC4INC/0L7Qu9GD0YfQsNC10Lwg0LXQs9C+XHJcblxyXG4gICAgICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IHRoaXMuY3JlYXRlQW5kR2V0RXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC10Lwg0Lgg0L/QvtC70YPRh9Cw0LXQvCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uc09iamVjdC5hZGRPYmplY3RUb0NvbGxlY3Rpb24odGFyZ2V0RGF5T2JqZWN0LmV2ZW50c01hcCwgZXZlbnRPYmplY3QuSWRFdmVudCwgZXZlbnRPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQodC+0LHRi9GC0LjRjyDQsiDQutC+0LvQu9C10LrRhtC40Y4g0YHQvtCx0YvRgtC40Lkg0JTQvdGPXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50VG9UYXJnZXREYXkodGFyZ2V0RGF5T2JqZWN0LklkRGF5LCBldmVudE9iamVjdC5yZW5kZXIoKSk7IC8vINC+0YLRgNC40YHQvtCy0LrQsCDRgdC+0LHRi9GC0LjRjyDQsiDRgtC10LrRg9GJ0LjQuSDQtNC10L3RjFxyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyDQtdGB0LvQuCDQtNC10L3RjCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gdGhpcy5jcmVhdGVBbmRHZXRFdmVudE9iamVjdCgpOyAvLyDRgdC+0LfQtNCw0LXQvCDQuCDQv9C+0LvRg9GH0LDQtdC8INC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb25zT2JqZWN0LmFkZE9iamVjdFRvQ29sbGVjdGlvbihkYXlPYmplY3QuZXZlbnRzTWFwLCBldmVudE9iamVjdC5JZEV2ZW50LCBldmVudE9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCh0L7QsdGL0YLQuNGPINCyINC60L7Qu9C70LXQutGG0LjRjiDRgdC+0LHRi9GC0LjQuSDQlNC90Y9cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uc09iamVjdC5hZGRPYmplY3RUb0NvbGxlY3Rpb24odGhpcy5kYXlzTGlzdE9iamVjdC5kYXlzTWFwLCBkYXRlLnZhbHVlLCBkYXlPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQlNC90Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINCU0L3QtdC5XHJcblxyXG4gICAgICAgICAgICBkYXlPYmplY3QuSWREYXkgPSB0aGlzLmNvdW50ZXJGb3JJZERheXM7IC8vINGD0LLQtdC70LjRh9C40LLQsNGOIGlkINC90LAg0L7QsdGK0LXQutGCINCU0LXQvdGMXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbnNPYmplY3QucHVzaERhdGVUb1NlbGVjdChzZWxlY3REb20sIGRhdGUudmFsdWUpOyAvLyDQvtGC0YDQuNGB0L7QstC60LAg0LTQvdGPINCyINGB0LXQu9C10LrRgiBcclxuXHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXlPYmplY3QucmVuZGVyKCkpOyAvLyDQvtGC0YDQuNGB0L7QstC60LAg0LTQvdGPXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50VG9UYXJnZXREYXkoZGF5T2JqZWN0LklkRGF5LCBldmVudE9iamVjdC5yZW5kZXIoKSk7IC8vINC+0YLRgNC40YHQvtCy0LrQsCDRgdC+0LHRi9GC0LjRjyDQsiDQtNC10L3RjFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyRm9ySWREYXlzKys7IC8vINGD0LLQtdC70LjRh9C10L3QuNC1INGB0YfQtdGC0YfQuNC60LAg0LTQu9GPIGlkINC00L3QtdC5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQvtGH0LjRgdGC0LjRgtGMINCy0YHQtSDQv9C+0LvRjyDQstCy0L7QtNCwXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBmdW5jdGlvbnNPYmplY3QuZ2V0SW5wdXRzKCk7XHJcbiAgICAgICAgZnVuY3Rpb25zT2JqZWN0LmNsZWFyQWxsSW5wdXRGaWVsZChhcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRXZlbnRUb1RhcmdldERheShpZCwgcmVuZGVyRXZlbnQpIHsgLy8g0L7RgtGA0LjRgdC+0LLQutCwINCh0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWl0ZW0nKTtcclxuICAgICAgICBjb25zdCB0YXJnZXREYXlGcm9tRG9tID0gZnVuY3Rpb25zT2JqZWN0LmdldERheUl0ZW1CeUlkKGlkLCBkb21FbGVtZW50cyk7IC8vINC/0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90Ywg0L/QviBpZCDQsiBET00g0LTQtdGA0LXQstC1XHJcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gdGFyZ2V0RGF5RnJvbURvbS5xdWVyeVNlbGVjdG9yKCcuZGF5LWV2ZW50cy1saXN0Jyk7IC8vINGB0L/QuNGB0L7QuiDRgdC+0LHRi9GC0LjQuSDQsiDRgtC10LrRg9GJ0LjQtdC8INC00L3QtVxyXG4gICAgICAgIGV2ZW50TGlzdC5hcHBlbmRDaGlsZChyZW5kZXJFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNGC0Ywg0L7QsdGK0LXQutGCINGB0L7QsdGL0YLQuNC1INGD0LLQtdC70LjRh9C40YLRjCDQtdCz0L4gaWQg0Lgg0LLQtdGA0L3Rg9GC0YxcclxuICAgIGNyZWF0ZUFuZEdldEV2ZW50T2JqZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0LCBkYXRlLCBzdGFydCwgZW5kXSA9IGZ1bmN0aW9uc09iamVjdC5nZXRJbnB1dHMoKTtcclxuICAgICAgICBjb25zdCBvYmplY3QgPSBuZXcgRXZlbnRPYmplY3QodGV4dC52YWx1ZSwgZGF0ZS52YWx1ZSwgc3RhcnQudmFsdWUsIGVuZC52YWx1ZSk7XHJcbiAgICAgICAgb2JqZWN0LklkRXZlbnQgPSB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cztcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cysrO1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyRGF5c0J5RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50cy1saXN0IC5yb3ctZGF5cycpO1xyXG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0RGF5IG9mIHRoaXMuZGF5c0xpc3RPYmplY3QuZGF5c01hcC52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0RGF5LmRhdGUgPT0gZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9iamVjdERheS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZFRhcmdldERheURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktaXRlbScpLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsRXZlbnRzSW5UYXJnZXREYXkob2JqZWN0RGF5LmV2ZW50c01hcCwgaWRUYXJnZXREYXlEb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckFsbEV2ZW50c0luVGFyZ2V0RGF5KGFycmF5RXZlbnRzLCB0YXJnZXREYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBldmVudCBvZiBhcnJheUV2ZW50cy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50VG9UYXJnZXREYXkodGFyZ2V0RGF5LCBldmVudC5yZW5kZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBY3Rpb25XaXRoRXZlbnRzIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvQWN0aW9uV2l0aEV2ZW50cy5qcyIsImV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dHMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFRleHRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC10ZXh0LWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dERhdGVFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRlLWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dFN0YXJ0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtc3RhcnQtZXZlbnQnKTtcclxuICAgIGNvbnN0IGlucHV0RW5kRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZW5kLWV2ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSBbaW5wdXRUZXh0RXZlbnQsIGlucHV0RGF0ZUV2ZW50LCBpbnB1dFN0YXJ0RXZlbnQsIGlucHV0RW5kRXZlbnRdXHJcblxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHVzaERhdGVUb1NlbGVjdChzZWxlY3QsIGRhdGUpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRlKTtcclxuICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRlO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXlJdGVtQnlJZCA9IChpZCwgYXJyYXkpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGFycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmIChhcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsSW5wdXRGaWVsZChhcnJheSkge1xyXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0udmFsdWUgPSAnJztcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vINGB0YPRidC10YHRgtCy0L7QstCw0L3QuNC1INC+0LHRitC10LrRgtCwICjQodC+0LHRi9GC0LjQtSwg0JTQsNGC0LAg0Lgg0YIu0LQpINCyINC60L7Qu9C70LXQutGG0LjQuCAoMS3RgdGD0YnQtdGB0YLQstGD0LXRgiwgMC3QvdC1INGB0YPRidC10YHRgtCy0YPQtdGCKVxyXG5leHBvcnQgY29uc3QgaXNFeGlzdCA9IChlbGVtZW50LCBhcnJheSkgPT4ge1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheS52YWx1ZXMoKSkge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGUgPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERheU9iamVjdEJ5RGF0ZSA9IChkYXRlLCBhcnJheSkgPT4ge1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheS52YWx1ZXMoKSkge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGUgPT0gZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRPYmplY3RUb0NvbGxlY3Rpb24oY29sbGVjdGlvbiwga2V5LCBvYmplY3QpIHtcclxuICAgIGNvbGxlY3Rpb24uc2V0KGtleSwgb2JqZWN0KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMuanMiLCJjbGFzcyBFdmVudEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dEV2ZW50LCBkYXRlRXZlbnQsIHRpbWVTdGFydEV2ZW50LCB0aW1lRW5kRXZlbnQpIHtcclxuICAgICAgICB0aGlzLnRleHRFdmVudCA9IHRleHRFdmVudDtcclxuICAgICAgICB0aGlzLnRpbWVTdGFydEV2ZW50ID0gdGltZVN0YXJ0RXZlbnQ7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kRXZlbnQgPSB0aW1lRW5kRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5kYXRlRXZlbnQgPSBkYXRlRXZlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaWRFdmVudCA9IDA7IC8vIGlkINGB0L7QsdGL0YLQuNGPXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRpbWVTdGFydEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVTdGFydEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUaW1lU3RhcnRFdmVudCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGltZVN0YXJ0RXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZUVuZEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVFbmRFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVGltZUVuZEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGF0ZUV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBJZEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS5jbGFzc05hbWUgPSAnZXZlbnQtaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJztcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZEV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGV4dCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+JHt0aGlzLnRleHRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtcGFuZWwtc2lkZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImRhdGVwaWNrZXJcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGltZSBzdGFydCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3RoaXMudGltZVN0YXJ0RXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRpbWUgZW5kIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPiR7dGhpcy50aW1lRW5kRXZlbnR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWNvbnRyb2xzIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jaGVja1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1lZGl0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBsaS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBldmVudENvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEV2ZW50SXRlbSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0V2ZW50SXRlbS5qcyIsImNsYXNzIEV2ZW50RGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwID0gbmV3IE1hcCgpOyAvLyDQutC+0LvQu9C10LrRhtC40Y8g0YHQvtCx0YvRgtC40Lkg0LIg0JTQvdC1XHJcbiAgICAgICAgdGhpcy5pZERheSA9IDA7IC8vIGlkINCU0L3Rj1xyXG4gICAgICAgIHRoaXMuY291bnRlckRheSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50ZXJEYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckRheTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckRheSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRlckRheSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZERheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZERheTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSWREYXkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlkRGF5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERhdGVEYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGF0ZURheSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2wuY2xhc3NOYW1lID0gJ2NvbC00JztcclxuXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdkYXktaXRlbSc7XHJcblxyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZERheSk7XHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0ZS1kYXknLCB0aGlzLmRhdGUpO1xyXG5cclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF5Q29udGVudCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHt0aGlzLmRhdGV9XCI+JHt0aGlzLmRhdGV9PC90aW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZGF5LWV2ZW50cy1saXN0XCI+PC91bD5gO1xyXG5cclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZGF5Q29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2w7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEV2ZW50RGF5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnREYXkuanMiLCJjbGFzcyBEYXlzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRheXNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9ySWREYXlzID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50ZXJGb3JJZERheXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckZvcklkRGF5cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckZvcklkRGF5cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRGF5cyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRm9ySWRFdmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckZvcklkRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDb3VudGVyRm9ySWRFdmVudHModmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgRGF5c0xpc3QgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRGF5c0xpc3QuanMiLCJpbXBvcnQgeyBnZXRJbnB1dHMgfSBmcm9tICcuLi9tb2R1bGVGdW5jdGlvbnMvRnVuY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRpb24oKSB7XHJcbiAgICBnZXRJbnB1dHMoKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRW1wdHlGaWVsZChpdGVtLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGdldEludmFsaWRDb3VudElucHV0KGdldElucHV0cygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW52YWxpZENvdW50SW5wdXQoYXJyYXlJbnB1dHMpIHtcclxuICAgIC8vIGxldCBjb3VudGVyID0gMDtcclxuICAgIC8vIGFycmF5SW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIC8vICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWVycm9yJykpIHtcclxuICAgIC8vICAgICAgICAgY291bnRlcisrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHJldHVybiBjb3VudGVyO1xyXG4gICAgcmV0dXJuIGFycmF5SW5wdXRzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlID09ICcnO1xyXG4gICAgfSkubGVuZ3RoID09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHlGaWVsZChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0ID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL1ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9