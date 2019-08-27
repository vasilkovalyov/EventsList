import { initDatepicker } from './lib/datepicker';

import { EventItem } from './components/EventItem';
import { EventDay } from './components/EventDay';
import { DaysList } from './components/DaysList';
import { valid } from './moduleFunctions/Validation'


window.onload = function () {
    initDatepicker();
}


const dayListObject = new DaysList();

const btnCreate = document.querySelector('.btn-create-event');
const selectDate = document.querySelector('.select-date');

btnCreate.addEventListener('click', (e) => {
    dayListObject.btnEvent();
    // valid() == 0 ? dayListObject.btnEvent() : 0;
});

selectDate.addEventListener('change', function (e) {
    dayListObject.filterDaysByDate(this.value);
})

