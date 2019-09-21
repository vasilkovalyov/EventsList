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
    // запуск с валидацией
    if(validation()){
        actionObject.btnEvent();
    }else{
        setTimeout(() => {
            alert('fill the all fields');
        }, 100);
    }
});

selectDate.addEventListener('change', function (e) {
    actionObject.filterDaysByDate(this.value);
})

