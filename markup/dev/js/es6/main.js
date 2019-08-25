import {initDatepicker} from './lib/datepicker';

import { EventItem } from './components/EventItem';
import { EventDay } from './components/EventDay';
import { DaysList } from './components/DaysList';

window.onload = function(){
    initDatepicker();
}

// const inputTextEvent = document.querySelector('.input-text-event');
// const inputDateEvent = document.querySelector('.input-date-event');
// const inputStartEvent = document.querySelector('.input-start-event');
// const inputEndEvent = document.querySelector('.input-end-event');

const dayListObject = new DaysList();

const btnCreate = document.querySelector('.btn-create-event');

btnCreate.addEventListener('click', (e) => {
    dayListObject.btnEvent();
    // dayListObject.btnEvent(inputTextEvent.value, inputDateEvent.value, inputStartEvent.value, inputEndEvent.value);


});


// const array = ['05.05.2019','09.02.2019','21.06.2019','18.03.2019','01.02.2019'];

// function isExistenceElement(element, array){
//     // console.log('find elem');
//     // console.log(element);
//     // array.forEach(item => {
//     //     if(item == element){
//     //         return 1;
//     //     }
//     // });
//     for(let i = 0; i <= array.length - 1; i++){
//         // console.log(array[i]);
//         if(array[i] == element){
//             return 1;
//         }
//     }
// }
// isExistenceElement('01.02.2019', array);
// const a = isExistenceElement('01.02.2019', array);
// console.log(a);