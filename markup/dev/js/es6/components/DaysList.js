class DaysList {
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

}

export { DaysList }
