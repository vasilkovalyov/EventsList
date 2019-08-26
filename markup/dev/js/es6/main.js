import { initDatepicker } from './lib/datepicker';

import { EventItem } from './components/EventItem';
import { EventDay } from './components/EventDay';
import { DaysList } from './components/DaysList';
import { valid }  from './moduleFunctions/Validation'


window.onload = function () {
    initDatepicker();
}


const dayListObject = new DaysList();

const btnCreate = document.querySelector('.btn-create-event');

btnCreate.addEventListener('click', (e) => {
    console.log(valid());
    // if(valid()){
    //     console.log('error');
    // }else{
    //     dayListObject.btnEvent();
    // }
});

