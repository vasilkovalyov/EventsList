export function getInputs() {
    const inputTextEvent = document.querySelector('.input-text-event');
    const inputDateEvent = document.querySelector('.input-date-event');
    const inputStartEvent = document.querySelector('.input-start-event');
    const inputEndEvent = document.querySelector('.input-end-event');

    const inputValues = [inputTextEvent, inputDateEvent, inputStartEvent, inputEndEvent]

    return inputValues;
}

export function pushDateToSelect(select, date) {
    const option = document.createElement('option');
    option.setAttribute('value', date);
    option.innerText = date;
    select.appendChild(option);
}

export function getDayItemById(id, array) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i].getAttribute('id') == id) {
            return array[i];
        }
    }
}

export function clearAllInputField(array) {
    array.forEach((item) => {
        item.value = '';
    })
}