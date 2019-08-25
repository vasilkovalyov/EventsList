window.onload = function(){
    initDatepicker();
}

function initDatepicker(){
    const datepicker = jQuery('.datepicker');
    datepicker.each(function(){
        jQuery(this).datepicker({
            format: 'mm.dd.yyyy'
        });
    })
}