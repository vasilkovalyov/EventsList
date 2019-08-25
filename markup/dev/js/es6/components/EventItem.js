class EventItem{
    constructor(textEvent, timeStartEvent, timeEndEvent, dateEvent){
        this.textEvent = textEvent;
        this.timeStartEvent = timeStartEvent;
        this.timeEndEvent = timeEndEvent;
        this.dateEvent = dateEvent;
        this.idEvent = 0;
    }

    get TimeStartEvent(){
        return this.timeStartEvent;
    }

    set TimeStartEvent(value){
        this.timeStartEvent = value;
    }

    get TimeEndEvent(){
        return this.timeEndEvent;
    }

    set TimeEndEvent(value){
        this.timeEndEvent = value;
    }

    get DateEvent(){
        return this.dateEvent;
    }

    set DateEvent(value){
        this.dateEvent = value;
    }

    get IdEvent(){
        return this.idEvent;
    }

    set IdEvent(value){
        this.idEvent = value;
    }

    render(){
        const li = document.createElement('li');
        li.className='event-item d-flex align-items-center justify-content-between';

        const eventContent = `
            <div class="event-text d-flex align-items-center">
                <label>${this.textEvent}</label>
                <input type="text">
            </div>
            <div class="event-panel-side d-flex align-items-center">
                <div class="event-date">
                    <input class="datepicker" type="text">
                </div>
                <div class="event-time start d-flex align-items-center">
                    <label class="text-center">${this.timeStartEvent}</label>
                    <input type="text">
                </div>
                <div class="event-time end d-flex align-items-center">
                    <label class="text-center">${this.timeEndEvent}</label>
                    <input type="text">
                </div>
            </div>
            <div class="event-controls d-flex align-items-center">
                <span class="icon-check"></span>
                <span class="icon-edit"></span>
                <span class="icon-close"></span>
            </div>`;

        li.insertAdjacentHTML('afterbegin', eventContent);

        return li;
    }
}

export {EventItem}