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
	
	var _DaysList = __webpack_require__(2);
	
	var _ActionWithEvents = __webpack_require__(3);
	
	var _ActionWithEvents2 = _interopRequireDefault(_ActionWithEvents);
	
	var _Validation = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	    (0, _datepicker.initDatepicker)();
	};
	
	var dayListObject = new _DaysList.DaysList();
	var actionObject = new _ActionWithEvents2.default();
	
	var btnCreate = document.querySelector('.btn-create-event');
	var selectDate = document.querySelector('.select-date');
	
	btnCreate.addEventListener('click', function (e) {
	    actionObject.btnEvent();
	    // validation() == 0 ? actionObject.btnEvent() : 0;
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
	    }, {
	        key: "DaysMap",
	        get: function get() {
	            return this.daysMap;
	        },
	        set: function set(value) {
	            this.daysMap.set(value, value);
	        }
	
	        // get CounterDay() {
	        //     return this.counterDay;
	        // }
	
	        // set CounterDay(value) {
	        //     this.counterDay = value;
	        // }
	
	        // getDayObjectByDate(date, array) {
	        //     for (let item of array.values()) {
	        //         if (item.date == date) {
	        //             return item;
	        //         }
	        //     }
	        // }
	
	        // renderEventInTargetDay(targetDay, event) {
	        //     const eventList = targetDay.querySelector('.day-events-list');
	        //     eventList.appendChild(event);
	        // }
	
	        // filterDaysByDate(date) {
	        //     const row = document.querySelector('.events-list .row-days');
	        //     row.innerHTML = '';
	
	        //     for (let objectDay of this.daysMap.values()) {
	        //         if (objectDay.date == date) {
	        //             row.appendChild(objectDay.render());
	        //             const targetDay = document.querySelector('.day-item');
	        //             this.renderAllEventsInTargetDay(objectDay.eventsMap, targetDay);
	        //         }
	        //     }
	        // }
	
	        // renderAllEventsInTargetDay(arrayEvents, targetDay) {
	        //     for (let event of arrayEvents.values()) {
	        //         this.renderEventInTargetDay(targetDay, event.render());
	        //     }
	        // }
	
	        // btnEvent() {
	        //     const [text, date, start, end] = functionsObject.getInputs();
	        //     const dayObject = new EventDay(date.value); // объект ДЕНЬ
	        //     const isExist = functionsObject.isExistenceElementByDate(dayObject.DateDay, this.daysMap); // 1 - day exist 0 - day not exist
	        //     const row = document.querySelector('.events-list .row-days');
	        //     if (isExist) {
	        //         const dayObject = this.getDayObjectByDate(date.value, this.daysMap); // находим в коллекции объект День по дате создания
	        //         const eventObject = dayObject.createEventObject(); // создал объект Событие
	        //         eventObject.IdEvent = this.counterEvent // поставил id на объект Событие
	        //         dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	        //         const idDate = dayObject.IdDay;
	        //         const daysArray = document.querySelectorAll('.day-item');
	        //         const targetDay = functionsObject.getDayItemById(idDate, daysArray);
	        //         this.renderEventInTargetDay(targetDay, eventObject.render());
	        //     } else {
	        //         const eventObject = dayObject.createEventObject(); // создал объект Событие
	        //         eventObject.IdEvent = this.counterEvent // поставил id на объект Событие
	        //         dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	        //         this.daysMap.set(date.value, dayObject); // добавление Дня в коллекцию Дней
	        //         dayObject.IdDay = this.counterDay; // поставил id на объект День
	        //         functionsObject.pushDateToSelect(document.querySelector('.select-date'), date.value);
	        //         row.appendChild(dayObject.render());
	        //         const daysArray = document.querySelectorAll('.day-item');
	        //         const targetDay = functionsObject.getDayItemById(dayObject.IdDay, daysArray);
	        //         this.renderEventInTargetDay(targetDay, eventObject.render());
	        //         this.counterDay++;
	        //     }
	        //     this.counterEvent++;
	        //     const array = functionsObject.getInputs();
	        //     functionsObject.clearAllInputField(array);
	        // }
	
	    }]);
	
	    return DaysList;
	}();
	
	exports.default = DaysList;
	exports.DaysList = DaysList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Functions = __webpack_require__(4);
	
	var functionsObject = _interopRequireWildcard(_Functions);
	
	var _EventItem = __webpack_require__(5);
	
	var _EventDay = __webpack_require__(6);
	
	var _DaysList = __webpack_require__(2);
	
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
	
	        this.isExist = function (date, arrayMap) {
	            return functionsObject.isExistenceElementByDate(date, arrayMap);
	        };
	
	        this.daysListObject = new _DaysList.DaysList();
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
	
	            if (this.isExist(dayObject.DateDay, this.daysListObject.daysMap)) {
	                // если день существует
	                var targetDayObject = functionsObject.getDayObjectByDate(dayObject.DateDay, this.daysListObject.daysMap); // находим в коллекции день по дате и получаем его
	                var eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие
	
	                dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
	
	                //отрисовка события в текущий день
	                this.renderEventToTargetDay(targetDayObject.IdDay, eventObject.render());
	            } else {
	                // если день не существует
	                var _eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие
	
	                dayObject.eventsMap.set(_eventObject.IdEvent, _eventObject); // добавление События в коллекцию событий Дня
	
	
	                this.daysListObject.daysMap.set(date.value, dayObject); // добавление Дня в коллекцию Дней
	                dayObject.IdDay = this.counterForIdDays; // увеличиваю id на объект День
	
	                //отрисовка дня в селект 
	                functionsObject.pushDateToSelect(document.querySelector('.select-date'), date.value);
	
	                //отрисовка дня
	                row.appendChild(dayObject.render());
	                this.renderEventToTargetDay(dayObject.IdDay, _eventObject.render());
	
	                this.counterForIdDays++;
	            }
	
	            // очистить все поля ввода
	            var array = functionsObject.getInputs();
	            functionsObject.clearAllInputField(array);
	        }
	    }, {
	        key: 'renderEventToTargetDay',
	        // существование объекта (Событие, Дата и т.д) в коллекции (1-существует, 0-не существует)
	        value: function renderEventToTargetDay(id, renderEvent) {
	            // отрисовка События
	            var targetDayFromDom = functionsObject.getDayItemById(id, document.querySelectorAll('.day-item')); // получить день по id в DOM дереве
	            var eventList = targetDayFromDom.querySelector('.day-events-list');
	            eventList.appendChild(renderEvent);
	        }
	
	        // создать объект событие увеличить его id и вернуть
	
	    }]);
	
	    return ActionWithEvents;
	}();
	
	exports.default = ActionWithEvents;

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
	exports.isExistenceElementByDate = isExistenceElementByDate;
	exports.getDayObjectByDate = getDayObjectByDate;
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
	
	function isExistenceElementByDate(element, array) {
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
	
	function getDayObjectByDate(date, array) {
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

/***/ }),
/* 5 */
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
	
	exports.default = EventItem;
	exports.EventItem = EventItem;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EventDay = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventItem = __webpack_require__(5);
	
	var _EventItem2 = _interopRequireDefault(_EventItem);
	
	var _Functions = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventDay = function () {
	    function EventDay(date) {
	        _classCallCheck(this, EventDay);
	
	        _initialiseProps.call(this);
	
	        this.date = date;
	        this.eventsMap = new Map();
	        this.idDay = 0;
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
	
	var _initialiseProps = function _initialiseProps() {
	    var _this = this;
	
	    this.createAndGetEventObject = function () {
	        var _functionsObject$getI = functionsObject.getInputs(),
	            _functionsObject$getI2 = _slicedToArray(_functionsObject$getI, 4),
	            text = _functionsObject$getI2[0],
	            date = _functionsObject$getI2[1],
	            start = _functionsObject$getI2[2],
	            end = _functionsObject$getI2[3];
	
	        var object = new _EventItem2.default(text.value, date.value, start.value, end.value);
	        object.IdEvent = _this.counterForIdEvents;
	        _this.counterForIdEvents++;
	        return object;
	    };
	};
	
	exports.default = EventDay;
	exports.EventDay = EventDay;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validation = validation;
	
	var _Functions = __webpack_require__(4);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzg2YjRhZjczMTUxODgzODA5YjgiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2VzNi9jb21wb25lbnRzL0RheXNMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9BY3Rpb25XaXRoRXZlbnRzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnRJdGVtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudERheS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvZXM2L21vZHVsZUZ1bmN0aW9ucy9WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRheUxpc3RPYmplY3QiLCJEYXlzTGlzdCIsImFjdGlvbk9iamVjdCIsIkFjdGlvbldpdGhFdmVudHMiLCJidG5DcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3REYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJidG5FdmVudCIsImZpbHRlckRheXNCeURhdGUiLCJ2YWx1ZSIsImluaXREYXRlcGlja2VyIiwiZGF0ZXBpY2tlciIsImpRdWVyeSIsImVhY2giLCJmb3JtYXQiLCJkYXlzTWFwIiwiTWFwIiwiY291bnRlckZvcklkRGF5cyIsImNvdW50ZXJGb3JJZEV2ZW50cyIsInNldCIsImZ1bmN0aW9uc09iamVjdCIsImNyZWF0ZUFuZEdldEV2ZW50T2JqZWN0IiwiZ2V0SW5wdXRzIiwidGV4dCIsImRhdGUiLCJzdGFydCIsImVuZCIsIm9iamVjdCIsIkV2ZW50T2JqZWN0IiwiSWRFdmVudCIsImlzRXhpc3QiLCJhcnJheU1hcCIsImlzRXhpc3RlbmNlRWxlbWVudEJ5RGF0ZSIsImRheXNMaXN0T2JqZWN0IiwiRGF5c0xpc3RPYmplY3QiLCJkYXlPYmplY3QiLCJEYXlPYmplY3QiLCJyb3ciLCJEYXRlRGF5IiwidGFyZ2V0RGF5T2JqZWN0IiwiZ2V0RGF5T2JqZWN0QnlEYXRlIiwiZXZlbnRPYmplY3QiLCJldmVudHNNYXAiLCJyZW5kZXJFdmVudFRvVGFyZ2V0RGF5IiwiSWREYXkiLCJyZW5kZXIiLCJwdXNoRGF0ZVRvU2VsZWN0IiwiYXBwZW5kQ2hpbGQiLCJhcnJheSIsImNsZWFyQWxsSW5wdXRGaWVsZCIsImlkIiwicmVuZGVyRXZlbnQiLCJ0YXJnZXREYXlGcm9tRG9tIiwiZ2V0RGF5SXRlbUJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlbnRMaXN0IiwiaW5wdXRUZXh0RXZlbnQiLCJpbnB1dERhdGVFdmVudCIsImlucHV0U3RhcnRFdmVudCIsImlucHV0RW5kRXZlbnQiLCJpbnB1dFZhbHVlcyIsInNlbGVjdCIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJlbGVtZW50IiwidmFsdWVzIiwiRXZlbnRJdGVtIiwidGV4dEV2ZW50IiwiZGF0ZUV2ZW50IiwidGltZVN0YXJ0RXZlbnQiLCJ0aW1lRW5kRXZlbnQiLCJpZEV2ZW50IiwibGkiLCJjbGFzc05hbWUiLCJldmVudENvbnRlbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJFdmVudERheSIsImlkRGF5IiwiY29sIiwiZGl2IiwiZGF5Q29udGVudCIsInZhbGlkYXRpb24iLCJpc0VtcHR5RmllbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZXRJbnZhbGlkQ291bnRJbnB1dCIsImFycmF5SW5wdXRzIiwiY291bnRlciIsImNvbnRhaW5zIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7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RCxLQUFLZCxLQUFuQixFQUEwQmUsS0FBS2YsS0FBL0IsRUFBc0NnQixNQUFNaEIsS0FBNUMsRUFBbURpQixJQUFJakIsS0FBdkQsQ0FBZjtBQUNBa0IsZ0JBQU9FLE9BQVAsR0FBaUIsTUFBS1gsa0JBQXRCO0FBQ0EsZUFBS0Esa0JBQUw7QUFDQSxnQkFBT1MsTUFBUDtBQUNILE07OzttQkE3QmdCd0QsUTtTQXVEWkEsUSxHQUFBQSxROzs7Ozs7Ozs7OztTQ3hET0ssVSxHQUFBQSxVOztBQUZoQjs7QUFFTyxVQUFTQSxVQUFULEdBQXNCO0FBQ3pCLGlDQUFZbkIsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsYUFBSW1CLGFBQWFuQixLQUFLN0QsS0FBbEIsQ0FBSixFQUE4QjtBQUMxQjZELGtCQUFLb0IsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBQ0gsVUFGRCxNQUVPO0FBQ0hyQixrQkFBS29CLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixhQUF0QjtBQUNIO0FBQ0osTUFORDs7QUFRQSxZQUFPQyxxQkFBcUIsMkJBQXJCLENBQVA7QUFDSDs7QUFFRCxVQUFTQSxvQkFBVCxDQUE4QkMsV0FBOUIsRUFBMkM7QUFDdkMsU0FBSUMsVUFBVSxDQUFkO0FBQ0FELGlCQUFZekIsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsYUFBSUEsS0FBS29CLFNBQUwsQ0FBZU0sUUFBZixDQUF3QixhQUF4QixDQUFKLEVBQTRDO0FBQ3hDRDtBQUNIO0FBQ0osTUFKRDs7QUFNQSxZQUFPQSxPQUFQO0FBQ0g7O0FBRUQsVUFBU04sWUFBVCxDQUFzQlEsS0FBdEIsRUFBNkI7QUFDekIsU0FBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ2IsZ0JBQU8sQ0FBUDtBQUNILE1BRkQsTUFFTztBQUNILGdCQUFPLENBQVA7QUFDSDtBQUNKLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4NmI0YWY3MzE1MTg4MzgwOWI4IiwiaW1wb3J0IHsgaW5pdERhdGVwaWNrZXIgfSBmcm9tICcuL2xpYi9kYXRlcGlja2VyJztcclxuXHJcbmltcG9ydCB7IERheXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0RheXNMaXN0JztcclxuaW1wb3J0IEFjdGlvbldpdGhFdmVudHMgZnJvbSAnLi9jb21wb25lbnRzL0FjdGlvbldpdGhFdmVudHMnO1xyXG5pbXBvcnQgeyB2YWxpZGF0aW9uIH0gZnJvbSAnLi9tb2R1bGVGdW5jdGlvbnMvVmFsaWRhdGlvbidcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdERhdGVwaWNrZXIoKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRheUxpc3RPYmplY3QgPSBuZXcgRGF5c0xpc3QoKTtcclxuY29uc3QgYWN0aW9uT2JqZWN0ID0gbmV3IEFjdGlvbldpdGhFdmVudHMoKTtcclxuXHJcbmNvbnN0IGJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY3JlYXRlLWV2ZW50Jyk7XHJcbmNvbnN0IHNlbGVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKTtcclxuXHJcbmJ0bkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBhY3Rpb25PYmplY3QuYnRuRXZlbnQoKVxyXG4gICAgLy8gdmFsaWRhdGlvbigpID09IDAgPyBhY3Rpb25PYmplY3QuYnRuRXZlbnQoKSA6IDA7XHJcbn0pO1xyXG5cclxuc2VsZWN0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZGF5TGlzdE9iamVjdC5maWx0ZXJEYXlzQnlEYXRlKHRoaXMudmFsdWUpO1xyXG59KVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L2pzL2VzNi9tYWluLmpzIiwiY29uc3QgaW5pdERhdGVwaWNrZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlciA9IGpRdWVyeSgnLmRhdGVwaWNrZXInKTtcclxuICAgIGRhdGVwaWNrZXIuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAnbW0uZGQueXl5eSdcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdERhdGVwaWNrZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbGliL2RhdGVwaWNrZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRheXNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9ySWREYXlzID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50ZXJGb3JJZERheXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckZvcklkRGF5cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnRlckZvcklkRGF5cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRGF5cyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudGVyRm9ySWRFdmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlckZvcklkRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDb3VudGVyRm9ySWRFdmVudHModmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXlzTWFwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRheXNNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERheXNNYXAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRheXNNYXAuc2V0KHZhbHVlLCB2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gZ2V0IENvdW50ZXJEYXkoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuY291bnRlckRheTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXQgQ291bnRlckRheSh2YWx1ZSkge1xyXG4gICAgLy8gICAgIHRoaXMuY291bnRlckRheSA9IHZhbHVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldERheU9iamVjdEJ5RGF0ZShkYXRlLCBhcnJheSkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgIC8vICAgICAgICAgaWYgKGl0ZW0uZGF0ZSA9PSBkYXRlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnQpIHtcclxuICAgIC8vICAgICBjb25zdCBldmVudExpc3QgPSB0YXJnZXREYXkucXVlcnlTZWxlY3RvcignLmRheS1ldmVudHMtbGlzdCcpO1xyXG4gICAgLy8gICAgIGV2ZW50TGlzdC5hcHBlbmRDaGlsZChldmVudCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZmlsdGVyRGF5c0J5RGF0ZShkYXRlKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50cy1saXN0IC5yb3ctZGF5cycpO1xyXG4gICAgLy8gICAgIHJvdy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgb2JqZWN0RGF5IG9mIHRoaXMuZGF5c01hcC52YWx1ZXMoKSkge1xyXG4gICAgLy8gICAgICAgICBpZiAob2JqZWN0RGF5LmRhdGUgPT0gZGF0ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9iamVjdERheS5yZW5kZXIoKSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCB0YXJnZXREYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWl0ZW0nKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsRXZlbnRzSW5UYXJnZXREYXkob2JqZWN0RGF5LmV2ZW50c01hcCwgdGFyZ2V0RGF5KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZW5kZXJBbGxFdmVudHNJblRhcmdldERheShhcnJheUV2ZW50cywgdGFyZ2V0RGF5KSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgZXZlbnQgb2YgYXJyYXlFdmVudHMudmFsdWVzKCkpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnQucmVuZGVyKCkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBidG5FdmVudCgpIHtcclxuICAgIC8vICAgICBjb25zdCBbdGV4dCwgZGF0ZSwgc3RhcnQsIGVuZF0gPSBmdW5jdGlvbnNPYmplY3QuZ2V0SW5wdXRzKCk7XHJcbiAgICAvLyAgICAgY29uc3QgZGF5T2JqZWN0ID0gbmV3IEV2ZW50RGF5KGRhdGUudmFsdWUpOyAvLyDQvtCx0YrQtdC60YIg0JTQldCd0KxcclxuICAgIC8vICAgICBjb25zdCBpc0V4aXN0ID0gZnVuY3Rpb25zT2JqZWN0LmlzRXhpc3RlbmNlRWxlbWVudEJ5RGF0ZShkYXlPYmplY3QuRGF0ZURheSwgdGhpcy5kYXlzTWFwKTsgLy8gMSAtIGRheSBleGlzdCAwIC0gZGF5IG5vdCBleGlzdFxyXG4gICAgLy8gICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudHMtbGlzdCAucm93LWRheXMnKTtcclxuICAgIC8vICAgICBpZiAoaXNFeGlzdCkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBkYXlPYmplY3QgPSB0aGlzLmdldERheU9iamVjdEJ5RGF0ZShkYXRlLnZhbHVlLCB0aGlzLmRheXNNYXApOyAvLyDQvdCw0YXQvtC00LjQvCDQsiDQutC+0LvQu9C10LrRhtC40Lgg0L7QsdGK0LXQutGCINCU0LXQvdGMINC/0L4g0LTQsNGC0LUg0YHQvtC30LTQsNC90LjRj1xyXG4gICAgLy8gICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IGRheU9iamVjdC5jcmVhdGVFdmVudE9iamVjdCgpOyAvLyDRgdC+0LfQtNCw0Lsg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcbiAgICAvLyAgICAgICAgIGV2ZW50T2JqZWN0LklkRXZlbnQgPSB0aGlzLmNvdW50ZXJFdmVudCAvLyDQv9C+0YHRgtCw0LLQuNC7IGlkINC90LAg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcbiAgICAvLyAgICAgICAgIGRheU9iamVjdC5ldmVudHNNYXAuc2V0KGV2ZW50T2JqZWN0LklkRXZlbnQsIGV2ZW50T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0KHQvtCx0YvRgtC40Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0L7QsdGL0YLQuNC5INCU0L3Rj1xyXG4gICAgLy8gICAgICAgICBjb25zdCBpZERhdGUgPSBkYXlPYmplY3QuSWREYXk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGRheXNBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktaXRlbScpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCB0YXJnZXREYXkgPSBmdW5jdGlvbnNPYmplY3QuZ2V0RGF5SXRlbUJ5SWQoaWREYXRlLCBkYXlzQXJyYXkpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlbmRlckV2ZW50SW5UYXJnZXREYXkodGFyZ2V0RGF5LCBldmVudE9iamVjdC5yZW5kZXIoKSk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkYXlPYmplY3QuY3JlYXRlRXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC7INC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgLy8gICAgICAgICBldmVudE9iamVjdC5JZEV2ZW50ID0gdGhpcy5jb3VudGVyRXZlbnQgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQodC+0LHRi9GC0LjQtVxyXG4gICAgLy8gICAgICAgICBkYXlPYmplY3QuZXZlbnRzTWFwLnNldChldmVudE9iamVjdC5JZEV2ZW50LCBldmVudE9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCh0L7QsdGL0YLQuNGPINCyINC60L7Qu9C70LXQutGG0LjRjiDRgdC+0LHRi9GC0LjQuSDQlNC90Y9cclxuICAgIC8vICAgICAgICAgdGhpcy5kYXlzTWFwLnNldChkYXRlLnZhbHVlLCBkYXlPYmplY3QpOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQlNC90Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINCU0L3QtdC5XHJcbiAgICAvLyAgICAgICAgIGRheU9iamVjdC5JZERheSA9IHRoaXMuY291bnRlckRheTsgLy8g0L/QvtGB0YLQsNCy0LjQuyBpZCDQvdCwINC+0LHRitC10LrRgiDQlNC10L3RjFxyXG4gICAgLy8gICAgICAgICBmdW5jdGlvbnNPYmplY3QucHVzaERhdGVUb1NlbGVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAvLyAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXlPYmplY3QucmVuZGVyKCkpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBkYXlzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWl0ZW0nKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgdGFyZ2V0RGF5ID0gZnVuY3Rpb25zT2JqZWN0LmdldERheUl0ZW1CeUlkKGRheU9iamVjdC5JZERheSwgZGF5c0FycmF5KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZW5kZXJFdmVudEluVGFyZ2V0RGF5KHRhcmdldERheSwgZXZlbnRPYmplY3QucmVuZGVyKCkpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvdW50ZXJEYXkrKztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5jb3VudGVyRXZlbnQrKztcclxuICAgIC8vICAgICBjb25zdCBhcnJheSA9IGZ1bmN0aW9uc09iamVjdC5nZXRJbnB1dHMoKTtcclxuICAgIC8vICAgICBmdW5jdGlvbnNPYmplY3QuY2xlYXJBbGxJbnB1dEZpZWxkKGFycmF5KTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGF5c0xpc3QgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRGF5c0xpc3QuanMiLCJpbXBvcnQgKiBhcyBmdW5jdGlvbnNPYmplY3QgZnJvbSAnLi4vbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucydcclxuXHJcbmltcG9ydCB7IEV2ZW50SXRlbSBhcyBFdmVudE9iamVjdCB9IGZyb20gJy4vRXZlbnRJdGVtJztcclxuaW1wb3J0IHsgRXZlbnREYXkgYXMgRGF5T2JqZWN0IH0gZnJvbSAnLi9FdmVudERheSc7XHJcbmltcG9ydCB7IERheXNMaXN0IGFzIERheXNMaXN0T2JqZWN0IH0gZnJvbSAnLi9EYXlzTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25XaXRoRXZlbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGF5c0xpc3RPYmplY3QgPSBuZXcgRGF5c0xpc3RPYmplY3QoKTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZERheXMgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRXZlbnRzID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZnVuY3Rpb25zT2JqZWN0LmdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IGRheU9iamVjdCA9IG5ldyBEYXlPYmplY3QoZGF0ZS52YWx1ZSk7IC8vIGNyZWF0ZSBvYmplY3QgRGF5XHJcblxyXG5cclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXZlbnRzLWxpc3QgLnJvdy1kYXlzJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRXhpc3QoZGF5T2JqZWN0LkRhdGVEYXksIHRoaXMuZGF5c0xpc3RPYmplY3QuZGF5c01hcCkpIHsgLy8g0LXRgdC70Lgg0LTQtdC90Ywg0YHRg9GJ0LXRgdGC0LLRg9C10YJcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGF5T2JqZWN0ID0gZnVuY3Rpb25zT2JqZWN0LmdldERheU9iamVjdEJ5RGF0ZShkYXlPYmplY3QuRGF0ZURheSwgdGhpcy5kYXlzTGlzdE9iamVjdC5kYXlzTWFwKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LIg0LrQvtC70LvQtdC60YbQuNC4INC00LXQvdGMINC/0L4g0LTQsNGC0LUg0Lgg0L/QvtC70YPRh9Cw0LXQvCDQtdCz0L5cclxuICAgICAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB0aGlzLmNyZWF0ZUFuZEdldEV2ZW50T2JqZWN0KCk7IC8vINGB0L7Qt9C00LDQtdC8INC4INC/0L7Qu9GD0YfQsNC10Lwg0L7QsdGK0LXQutGCINCh0L7QsdGL0YLQuNC1XHJcblxyXG4gICAgICAgICAgICBkYXlPYmplY3QuZXZlbnRzTWFwLnNldChldmVudE9iamVjdC5JZEV2ZW50LCBldmVudE9iamVjdCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INCh0L7QsdGL0YLQuNGPINCyINC60L7Qu9C70LXQutGG0LjRjiDRgdC+0LHRi9GC0LjQuSDQlNC90Y9cclxuXHJcbiAgICAgICAgICAgIC8v0L7RgtGA0LjRgdC+0LLQutCwINGB0L7QsdGL0YLQuNGPINCyINGC0LXQutGD0YnQuNC5INC00LXQvdGMXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRXZlbnRUb1RhcmdldERheSh0YXJnZXREYXlPYmplY3QuSWREYXksIGV2ZW50T2JqZWN0LnJlbmRlcigpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0LTQtdC90Ywg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRglxyXG4gICAgICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IHRoaXMuY3JlYXRlQW5kR2V0RXZlbnRPYmplY3QoKTsgLy8g0YHQvtC30LTQsNC10Lwg0Lgg0L/QvtC70YPRh9Cw0LXQvCDQvtCx0YrQtdC60YIg0KHQvtCx0YvRgtC40LVcclxuXHJcbiAgICAgICAgICAgIGRheU9iamVjdC5ldmVudHNNYXAuc2V0KGV2ZW50T2JqZWN0LklkRXZlbnQsIGV2ZW50T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0KHQvtCx0YvRgtC40Y8g0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0L7QsdGL0YLQuNC5INCU0L3Rj1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF5c0xpc3RPYmplY3QuZGF5c01hcC5zZXQoZGF0ZS52YWx1ZSwgZGF5T2JqZWN0KTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0JTQvdGPINCyINC60L7Qu9C70LXQutGG0LjRjiDQlNC90LXQuVxyXG4gICAgICAgICAgICBkYXlPYmplY3QuSWREYXkgPSB0aGlzLmNvdW50ZXJGb3JJZERheXM7IC8vINGD0LLQtdC70LjRh9C40LLQsNGOIGlkINC90LAg0L7QsdGK0LXQutGCINCU0LXQvdGMXHJcblxyXG4gICAgICAgICAgICAvL9C+0YLRgNC40YHQvtCy0LrQsCDQtNC90Y8g0LIg0YHQtdC70LXQutGCIFxyXG4gICAgICAgICAgICBmdW5jdGlvbnNPYmplY3QucHVzaERhdGVUb1NlbGVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUnKSwgZGF0ZS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAvL9C+0YLRgNC40YHQvtCy0LrQsCDQtNC90Y9cclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGRheU9iamVjdC5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRXZlbnRUb1RhcmdldERheShkYXlPYmplY3QuSWREYXksIGV2ZW50T2JqZWN0LnJlbmRlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlckZvcklkRGF5cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0L7Rh9C40YHRgtC40YLRjCDQstGB0LUg0L/QvtC70Y8g0LLQstC+0LTQsFxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gZnVuY3Rpb25zT2JqZWN0LmdldElucHV0cygpO1xyXG4gICAgICAgIGZ1bmN0aW9uc09iamVjdC5jbGVhckFsbElucHV0RmllbGQoYXJyYXkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFdmVudFRvVGFyZ2V0RGF5KGlkLCByZW5kZXJFdmVudCkgeyAvLyDQvtGC0YDQuNGB0L7QstC60LAg0KHQvtCx0YvRgtC40Y9cclxuICAgICAgICBjb25zdCB0YXJnZXREYXlGcm9tRG9tID0gZnVuY3Rpb25zT2JqZWN0LmdldERheUl0ZW1CeUlkKGlkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWl0ZW0nKSk7IC8vINC/0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90Ywg0L/QviBpZCDQsiBET00g0LTQtdGA0LXQstC1XHJcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gdGFyZ2V0RGF5RnJvbURvbS5xdWVyeVNlbGVjdG9yKCcuZGF5LWV2ZW50cy1saXN0Jyk7XHJcbiAgICAgICAgZXZlbnRMaXN0LmFwcGVuZENoaWxkKHJlbmRlckV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0YLRjCDQvtCx0YrQtdC60YIg0YHQvtCx0YvRgtC40LUg0YPQstC10LvQuNGH0LjRgtGMINC10LPQviBpZCDQuCDQstC10YDQvdGD0YLRjFxyXG4gICAgY3JlYXRlQW5kR2V0RXZlbnRPYmplY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZnVuY3Rpb25zT2JqZWN0LmdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBFdmVudE9iamVjdCh0ZXh0LnZhbHVlLCBkYXRlLnZhbHVlLCBzdGFydC52YWx1ZSwgZW5kLnZhbHVlKTtcclxuICAgICAgICBvYmplY3QuSWRFdmVudCA9IHRoaXMuY291bnRlckZvcklkRXZlbnRzO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvcklkRXZlbnRzKys7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBpc0V4aXN0ID0gKGRhdGUsIGFycmF5TWFwKSA9PiBmdW5jdGlvbnNPYmplY3QuaXNFeGlzdGVuY2VFbGVtZW50QnlEYXRlKGRhdGUsIGFycmF5TWFwKTsgLy8g0YHRg9GJ0LXRgdGC0LLQvtCy0LDQvdC40LUg0L7QsdGK0LXQutGC0LAgKNCh0L7QsdGL0YLQuNC1LCDQlNCw0YLQsCDQuCDRgi7QtCkg0LIg0LrQvtC70LvQtdC60YbQuNC4ICgxLdGB0YPRidC10YHRgtCy0YPQtdGCLCAwLdC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIpXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvQWN0aW9uV2l0aEV2ZW50cy5qcyIsImV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dHMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFRleHRFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC10ZXh0LWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dERhdGVFdmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRlLWV2ZW50Jyk7XHJcbiAgICBjb25zdCBpbnB1dFN0YXJ0RXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtc3RhcnQtZXZlbnQnKTtcclxuICAgIGNvbnN0IGlucHV0RW5kRXZlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZW5kLWV2ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSBbaW5wdXRUZXh0RXZlbnQsIGlucHV0RGF0ZUV2ZW50LCBpbnB1dFN0YXJ0RXZlbnQsIGlucHV0RW5kRXZlbnRdXHJcblxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHVzaERhdGVUb1NlbGVjdChzZWxlY3QsIGRhdGUpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRlKTtcclxuICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRlO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlJdGVtQnlJZChpZCwgYXJyYXkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGFycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmIChhcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsSW5wdXRGaWVsZChhcnJheSkge1xyXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0udmFsdWUgPSAnJztcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4aXN0ZW5jZUVsZW1lbnRCeURhdGUoZWxlbWVudCwgYXJyYXkpIHtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgICAgICBpZiAoaXRlbS5kYXRlID09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPYmplY3RCeURhdGUoZGF0ZSwgYXJyYXkpIHtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXkudmFsdWVzKCkpIHtcclxuICAgICAgICBpZiAoaXRlbS5kYXRlID09IGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL0Z1bmN0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0RXZlbnQsIGRhdGVFdmVudCwgdGltZVN0YXJ0RXZlbnQsIHRpbWVFbmRFdmVudCkge1xyXG4gICAgICAgIHRoaXMudGV4dEV2ZW50ID0gdGV4dEV2ZW50O1xyXG4gICAgICAgIHRoaXMudGltZVN0YXJ0RXZlbnQgPSB0aW1lU3RhcnRFdmVudDtcclxuICAgICAgICB0aGlzLnRpbWVFbmRFdmVudCA9IHRpbWVFbmRFdmVudDtcclxuICAgICAgICB0aGlzLmRhdGVFdmVudCA9IGRhdGVFdmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5pZEV2ZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGltZVN0YXJ0RXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVN0YXJ0RXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRpbWVTdGFydEV2ZW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhcnRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaW1lRW5kRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZUVuZEV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUaW1lRW5kRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVFbmRFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBEYXRlRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGVFdmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IElkRXZlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlkRXZlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdldmVudC1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkRXZlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudENvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10ZXh0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4ke3RoaXMudGV4dEV2ZW50fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1wYW5lbC1zaWRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZGF0ZXBpY2tlclwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10aW1lIHN0YXJ0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPiR7dGhpcy50aW1lU3RhcnRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGltZSBlbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtY2VudGVyXCI+JHt0aGlzLnRpbWVFbmRFdmVudH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtY29udHJvbHMgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNoZWNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWVkaXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGxpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGV2ZW50Q29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRXZlbnRJdGVtIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXYvanMvZXM2L2NvbXBvbmVudHMvRXZlbnRJdGVtLmpzIiwiaW1wb3J0IEV2ZW50SXRlbSBmcm9tICcuL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IGdldElucHV0cyB9IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnREYXkge1xyXG4gICAgY29uc3RydWN0b3IoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5ldmVudHNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pZERheSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElkRGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBJZERheSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaWREYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGF0ZURheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBEYXRlRGF5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5kR2V0RXZlbnRPYmplY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3RleHQsIGRhdGUsIHN0YXJ0LCBlbmRdID0gZnVuY3Rpb25zT2JqZWN0LmdldElucHV0cygpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBFdmVudEl0ZW0odGV4dC52YWx1ZSwgZGF0ZS52YWx1ZSwgc3RhcnQudmFsdWUsIGVuZC52YWx1ZSk7XHJcbiAgICAgICAgb2JqZWN0LklkRXZlbnQgPSB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cztcclxuICAgICAgICB0aGlzLmNvdW50ZXJGb3JJZEV2ZW50cysrO1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbC5jbGFzc05hbWUgPSAnY29sLTQnO1xyXG5cclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2RheS1pdGVtJztcclxuXHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkRGF5KTtcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRlLWRheScsIHRoaXMuZGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXlDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWhlYWRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke3RoaXMuZGF0ZX1cIj4ke3RoaXMuZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJkYXktZXZlbnRzLWxpc3RcIj48L3VsPmA7XHJcblxyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkYXlDb250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRXZlbnREYXkgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvY29tcG9uZW50cy9FdmVudERheS5qcyIsImltcG9ydCB7IGdldElucHV0cyB9IGZyb20gJy4uL21vZHVsZUZ1bmN0aW9ucy9GdW5jdGlvbnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGlvbigpIHtcclxuICAgIGdldElucHV0cygpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXNFbXB0eUZpZWxkKGl0ZW0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZ2V0SW52YWxpZENvdW50SW5wdXQoZ2V0SW5wdXRzKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbnZhbGlkQ291bnRJbnB1dChhcnJheUlucHV0cykge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgYXJyYXlJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtZXJyb3InKSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHlGaWVsZChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0ID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi9qcy9lczYvbW9kdWxlRnVuY3Rpb25zL1ZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9