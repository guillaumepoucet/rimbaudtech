//localStorage.setItem('key', 'value');
//localStorage.getItem('key');
//localStorage.removeItem('key');

jQuery(function($){
    $.fn.saveBackUp = function(){
        if(!localStorage){
            return false;
        }
        //alert('ça fct');
        var saves = this;
        var datas = {};
        datas.href = window.location.href;
        //localStorage.removeItem('saveBackUp');

        saves.find('input, radio').keyup(function(e){
            datas[$(this).attr('id')] = $(this).val();
            localStorage.setItem('saveBackUp', JSON.stringify(datas));
            console.log(localStorage);
        });
        console.log(localStorage);
    }
    $('save').saveBackUp();
});