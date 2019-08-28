class EventDay {
    constructor(date) {
        this.date = date;
        this.eventsMap = new Map(); // коллекция событий в Дне
        this.idDay = 0; // id Дня
        this.counterDay = 0;
    }

    get CounterDay() {
        return this.counterDay;
    }

    set CounterDay(value) {
        this.counterDay = value;
    }

    get IdDay() {
        return this.idDay;
    }

    set IdDay(value) {
        this.idDay = value;
    }

    get DateDay() {
        return this.date;
    }

    set DateDay(value) {
        this.date = value;
    }

    render() {
        const col = document.createElement('div');
        col.className = 'col-4';

        const div = document.createElement('div');
        div.className = 'day-item';

        div.setAttribute('id', this.idDay);
        div.setAttribute('date-day', this.date);

        col.appendChild(div);

        const dayContent = `
            <div class="day-header text-center">
                <time datetime="${this.date}">${this.date}</time>
            </div>
            <ul class="day-events-list"></ul>`;

        div.insertAdjacentHTML('afterbegin', dayContent);

        return col;
    }
}

export { EventDay }