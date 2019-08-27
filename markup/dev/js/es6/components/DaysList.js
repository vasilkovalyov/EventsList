import { EventItem } from './EventItem';
import { EventDay } from './EventDay';
import { getInputs, pushDateToSelect, getDayItemById, clearAllInputField } from '../moduleFunctions/Functions'

class DaysList {
    constructor() {
        this.daysMap = new Map();
        this.counterDay = 0;
        this.counterEvent = 0;
    }

    get CounterDay() {
        return this.counterDay;
    }

    set CounterDay(value) {
        this.counterDay = value;
    }


    isExistenceElement(element, array) {
        for (let item of array.values()) {
            if (item.date == element) {
                return 1;
            }
        }
        return 0;
    }

    getDayObjectByDate(date, array) {
        for (let item of array.values()) {
            if (item.date == date) {
                return item;
            }
        }
    }

    renderEventInTargetDay(targetDay, event) {
        const eventList = targetDay.querySelector('.day-events-list');
        eventList.appendChild(event);
    }

    filterDaysByDate(date) {
        const row = document.querySelector('.events-list .row-days');
        row.innerHTML = '';

        for (let objectDay of this.daysMap.values()) {
            if (objectDay.date == date) {
                row.appendChild(objectDay.render());
                const targetDay = document.querySelector('.day-item');
                this.renderAllEventsInTargetDay(objectDay.eventsMap, targetDay);
            }
        }
    }

    renderAllEventsInTargetDay(arrayEvents, targetDay) {
        for (let event of arrayEvents.values()) {
            this.renderEventInTargetDay(targetDay, event.render());
        }
    }

    btnEvent() {
        const [text, date, start, end] = getInputs();
        const dayObject = new EventDay(date.value); // объект ДЕНЬ
        const isExist = this.isExistenceElement(dayObject.DateDay, this.daysMap); // 1 - day exist 0 - day not exist
        const row = document.querySelector('.events-list .row-days');

        if (isExist) {
            const dayObject = this.getDayObjectByDate(date.value, this.daysMap); // находим в коллекции объект День по дате создания
            const eventObject = dayObject.createEventObject(); // создал объект Событие

            eventObject.IdEvent = this.counterEvent // поставил id на объект Событие
            dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня

            const idDate = dayObject.IdDay;
            const daysArray = document.querySelectorAll('.day-item');

            const targetDay = getDayItemById(idDate, daysArray);
            this.renderEventInTargetDay(targetDay, eventObject.render());

        } else {
            const eventObject = dayObject.createEventObject(); // создал объект Событие
            eventObject.IdEvent = this.counterEvent // поставил id на объект Событие

            dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня

            this.daysMap.set(date.value, dayObject); // добавление Дня в коллекцию Дней
            dayObject.IdDay = this.counterDay; // поставил id на объект День

            pushDateToSelect(document.querySelector('.select-date'), date.value);
            row.appendChild(dayObject.render());
            const daysArray = document.querySelectorAll('.day-item');

            const targetDay = getDayItemById(dayObject.IdDay, daysArray);
            this.renderEventInTargetDay(targetDay, eventObject.render());

            this.counterDay++;
        }

        this.counterEvent++;

        const array = getInputs();
        clearAllInputField(array);
    }
}

export { DaysList }
