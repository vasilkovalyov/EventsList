import { initDatepicker } from './lib/datepicker';

import { EventItem } from './components/EventItem';
import { EventDay } from './components/EventDay';
import { DaysList } from './components/DaysList';

window.onload = function () {
    initDatepicker();
}


const dayListObject = new DaysList();

const btnCreate = document.querySelector('.btn-create-event');

btnCreate.addEventListener('click', (e) => {
    dayListObject.btnEvent();
});

