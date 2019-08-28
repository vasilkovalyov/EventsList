import { initDatepicker } from './lib/datepicker';

import { ActionWithEvents } from './components/ActionWithEvents';
import { validation } from './moduleFunctions/Validation'


window.onload = function () {
    initDatepicker();
}

const actionObject = new ActionWithEvents();

const btnCreate = document.querySelector('.btn-create-event');
const selectDate = document.querySelector('.select-date');

btnCreate.addEventListener('click', (e) => {
    validation() == 0 ? actionObject.btnEvent() : 0; // запуск с валидацией
});

selectDate.addEventListener('change', function (e) {
    actionObject.filterDaysByDate(this.value);
})

