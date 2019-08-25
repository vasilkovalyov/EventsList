// const getInputs = () => {
//     const inputTextEvent = document.querySelector('.input-text-event').value;
//     const inputDateEvent = document.querySelector('.input-date-event').value;
//     const inputStartEvent = document.querySelector('.input-start-event').value;
//     const inputEndEvent = document.querySelector('.input-end-event').value;

//     const inputValues = [inputTextEvent, inputDateEvent, inputStartEvent, inputEndEvent]

//     return inputValues;
// }

// export {getInputs};

 
export function getInputs(){
    const inputTextEvent = document.querySelector('.input-text-event').value;
    const inputDateEvent = document.querySelector('.input-date-event').value;
    const inputStartEvent = document.querySelector('.input-start-event').value;
    const inputEndEvent = document.querySelector('.input-end-event').value;

    const inputValues = [inputTextEvent, inputDateEvent, inputStartEvent, inputEndEvent]

    return inputValues;
}