import { initDatepicker } from './lib/datepicker';

import { DaysList } from './components/DaysList';
import ActionWithEvents from './components/ActionWithEvents';
import { validation } from './moduleFunctions/Validation'


window.onload = function () {
    initDatepicker();
}


const dayListObject = new DaysList();
const actionObject = new ActionWithEvents();

const btnCreate = document.querySelector('.btn-create-event');
const selectDate = document.querySelector('.select-date');

btnCreate.addEventListener('click', (e) => {
    actionObject.btnEvent()
    // validation() == 0 ? actionObject.btnEvent() : 0;
});

selectDate.addEventListener('change', function (e) {
    dayListObject.filterDaysByDate(this.value);
})

