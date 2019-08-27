export default class DaysList {
    constructor() {
        this.daysMap = new Map();
        this.counterForIdDays = 0;
        this.counterForIdEvents = 0;
    }

    get CounterForIdDays() {
        return this.counterForIdDays;
    }

    set CounterForIdDays(value) {
        this.counterForIdDays = value;
    }

    get CounterForIdEvents() {
        return this.counterForIdEvents;
    }

    set CounterForIdEvents(value) {
        this.counterForIdEvents = value;
    }

    get DaysMap() {
        return this.daysMap;
    }

    set DaysMap(value) {
        this.daysMap.set(value, value)
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
}

export { DaysList }
