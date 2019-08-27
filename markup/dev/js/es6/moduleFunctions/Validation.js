import { getInputs } from '../moduleFunctions/Functions'

export function validation() {
    getInputs().forEach((item) => {
        if (isEmptyField(item.value)) {
            item.classList.add('input-error');
        } else {
            item.classList.remove('input-error');
        }
    })

    return getInvalidCountInput(getInputs());
}

function getInvalidCountInput(arrayInputs) {
    let counter = 0;
    arrayInputs.forEach((item) => {
        if (item.classList.contains('input-error')) {
            counter++;
        }
    });

    return counter;
}

function isEmptyField(input) {
    if (input == '') {
        return 1;
    } else {
        return 0;
    }
}



