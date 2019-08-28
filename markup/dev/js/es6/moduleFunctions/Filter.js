class Filter {
    constructor() {

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


export { Filter }