import { getInputs } from '../moduleFunctions/Functions'

const arrayInputs = getInputs();

export function valid(){
    // const [text, date, start, end] = getInputs();

    getInputs().forEach((item) => {
        if(isEmptyField(item.value)){
            item.style.border = '1px solid #f8f8f8';

        }else{
            item.style.border = '1px solid red';
        }
    })


}

function isEmptyField(input){
    if(input == ''){
        return 1;
    }else{
        return 0;
    }
}



