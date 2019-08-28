import * as functionsObject from '../moduleFunctions/Functions'

import { EventItem as EventObject } from './EventItem';
import { EventDay as DayObject } from './EventDay';
import { DaysList as DaysListObject } from './DaysList';

class ActionWithEvents {
    constructor() {
        this.daysListObject = new DaysListObject(); // объект DaysList
        this.counterForIdDays = 0;
        this.counterForIdEvents = 0;
    }

    btnEvent() {
        const [text, date, start, end] = functionsObject.getInputs();
        const dayObject = new DayObject(date.value); // create object Day
        const row = document.querySelector('.events-list .row-days');
        const selectDom = document.querySelector('.select-date');

        if (functionsObject.isExist(dayObject.DateDay, this.daysListObject.daysMap)) { // если день существует
            const targetDayObject = functionsObject.getDayObjectByDate(dayObject.DateDay, this.daysListObject.daysMap); // находим в коллекции день по дате и получаем его

            const eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие

            functionsObject.addObjectToCollection(targetDayObject.eventsMap, eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня

            this.renderEventToTargetDay(targetDayObject.IdDay, eventObject.render()); // отрисовка события в текущий день

        } else { // если день не существует
            const eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие

            functionsObject.addObjectToCollection(dayObject.eventsMap, eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня

            functionsObject.addObjectToCollection(this.daysListObject.daysMap, date.value, dayObject); // добавление Дня в коллекцию Дней

            dayObject.IdDay = this.counterForIdDays; // увеличиваю id на объект День

            functionsObject.pushDateToSelect(selectDom, date.value); // отрисовка дня в селект 

            row.appendChild(dayObject.render()); // отрисовка дня

            this.renderEventToTargetDay(dayObject.IdDay, eventObject.render()); // отрисовка события в день

            this.counterForIdDays++; // увеличение счетчика для id дней
        }

        // очистить все поля ввода
        const array = functionsObject.getInputs();
        functionsObject.clearAllInputField(array);
    }

    renderEventToTargetDay(id, renderEvent) { // отрисовка События
        const domElements = document.querySelectorAll('.day-item');
        const targetDayFromDom = functionsObject.getDayItemById(id, domElements); // получить день по id в DOM дереве
        const eventList = targetDayFromDom.querySelector('.day-events-list'); // список событий в текущием дне
        eventList.appendChild(renderEvent);
    }

    // создать объект событие увеличить его id и вернуть
    createAndGetEventObject = () => {
        const [text, date, start, end] = functionsObject.getInputs();
        const object = new EventObject(text.value, date.value, start.value, end.value);
        object.IdEvent = this.counterForIdEvents;
        this.counterForIdEvents++;
        return object;
    }

    filterDaysByDate(date) {
        const row = document.querySelector('.events-list .row-days');
        row.innerHTML = '';

        for (let objectDay of this.daysListObject.daysMap.values()) {
            if (objectDay.date == date) {
                row.appendChild(objectDay.render());
                const idTargetDayDom = document.querySelector('.day-item').getAttribute('id');
                this.renderAllEventsInTargetDay(objectDay.eventsMap, idTargetDayDom);
            }
        }
    }

    renderAllEventsInTargetDay(arrayEvents, targetDay) {
        for (let event of arrayEvents.values()) {
            this.renderEventToTargetDay(targetDay, event.render());
        }
    }
}

export { ActionWithEvents }