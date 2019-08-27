export class Filter {
    constructor() {

    }

    getDayObjectByDate(date, array) {
        for (let item of array.values()) {
            if (item.date == date) {
                return item;
            }
        }
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
}