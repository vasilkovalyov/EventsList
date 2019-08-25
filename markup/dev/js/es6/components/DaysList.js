import { EventItem } from './EventItem';
import { EventDay } from './EventDay';
import { getInputs } from '../moduleFunctions/Functions'

class DaysList{
    constructor(eventItemObject, eventDayObject){
        this.eventItemObject = eventItemObject;
        this.eventDayObject = eventDayObject;
        this.daysMap = new Map();
        this.counterDay = 0;
        this.counterEvent = 0;
    }

    get CounterDay(){
        return this.counterDay;
    }

    set CounterDay(value){
        this.counterDay = value;
    }
    
    createDay(dayObject){
        dayObject.render();
    }

    isExistenceElement(element, array){
        for(let item of array.values()){
            if(item.date == element){
                return 1;
            }
        }
        return 0;
    }

    getDayObjectByDate(date, array){
        for(let item of array.values()){
            if(item.date == date){
                return item;
            }
        }
    }

    btnEvent(){
        const [text, date, start, end] = getInputs();
        const dayObject = new EventDay(date); // объект ДЕНЬ
        const isExist = this.isExistenceElement(dayObject.DateDay, this.daysMap); // 1 - day exist 0 - day not exist
        
        if(isExist){
            const dayObject = this.getDayObjectByDate(date, this.daysMap); // находим в коллекции объект День по дате создания
            const eventObject = dayObject.createEventObject(); // создал объект Событие
            eventObject.IdEvent = this.counterEvent // поставил id на объект Событие
            dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
            this.counterEvent++;

        }else{
            const eventObject = dayObject.createEventObject(); // создал объект Событие
            eventObject.IdEvent = this.counterEvent // поставил id на объект Событие
            dayObject.eventsMap.set(eventObject.IdEvent, eventObject); // добавление События в коллекцию событий Дня
            this.daysMap.set(date, dayObject); // добавление Дня в коллекцию Дней
            dayObject.IdDay = this.counterDay; // поставил id на объект День
            this.counterEvent++;
            this.counterDay++;
        }        
    }
}

export { DaysList }
