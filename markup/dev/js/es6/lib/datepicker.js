const initDatepicker = function(){
    const datepicker = jQuery('.datepicker');
    datepicker.each(function(){
        jQuery(this).datepicker({
            format: 'mm.dd.yyyy'
        });
    })
}

export {initDatepicker};