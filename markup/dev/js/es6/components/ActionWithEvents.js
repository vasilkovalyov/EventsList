import * as functionsObject from '../moduleFunctions/Functions'

import { EventItem as EventObject } from './EventItem';
import { EventDay as DayObject } from './EventDay';
import { DaysList as DaysListObject } from './DaysList';

export default class ActionWithEvents {
    constructor() {
        this.daysListObject = new DaysListObject();
        this.counterForIdDays = 0;
        this.counterForIdEvents = 0;

    }

    btnEvent() {
        const [text, date, start, end] = functionsObject.getInputs();
        const dayObject = new DayObject(date.value); // create object Day


        const row = document.querySelector('.events-list .row-days');

        if (this.isExist(dayObject.DateDay, this.daysListObject.daysMap)) { // если день существует
            const targetDayObject = functionsObject.getDayObjectByDate(dayObject.DateDay, this.daysListObject.daysMap); // находим в коллекции день по дате и получаем его
            const eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие

            dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня

            //отрисовка события в текущий день
            this.renderEventToTargetDay(targetDayObject.IdDay, eventObject.render());

        } else { // если день не существует
            const eventObject = this.createAndGetEventObject(); // создаем и получаем объект Событие

            dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня


            this.daysListObject.daysMap.set(date.value, dayObject); // добавление Дня в коллекцию Дней
            dayObject.IdDay = this.counterForIdDays; // увеличиваю id на объект День

            //отрисовка дня в селект 
            functionsObject.pushDateToSelect(document.querySelector('.select-date'), date.value);

            //отрисовка дня
            row.appendChild(dayObject.render());
            this.renderEventToTargetDay(dayObject.IdDay, eventObject.render());

            this.counterForIdDays++;
        }

        // очистить все поля ввода
        const array = functionsObject.getInputs();
        functionsObject.clearAllInputField(array);

    }

    renderEventToTargetDay(id, renderEvent) { // отрисовка События
        const targetDayFromDom = functionsObject.getDayItemById(id, document.querySelectorAll('.day-item')); // получить день по id в DOM дереве
        const eventList = targetDayFromDom.querySelector('.day-events-list');
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

    isExist = (date, arrayMap) => functionsObject.isExistenceElementByDate(date, arrayMap); // существование объекта (Событие, Дата и т.д) в коллекции (1-существует, 0-не существует)
}