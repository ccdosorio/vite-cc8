

/*
|
|   Registra  los formularios de mailchimp
|
*/
function members(list, data, msg){
    data={
        action : 'register_list',
        list   : list,
        data   : data
    };
    $.post(MyAjax.url,data,function(result){
        if(result.indexOf('404') >0 ){
           console.log('404');
            $('#mailchimp-form').append('<h3 style="padding: 15px 0px; text-align: center; border: 4px solid #841717; margin-top: 15px; color: #3F3C3D; font-weight: bold;">Lo sentimos, El servicio no está Disponible por el momento</h3>');
        }
    }).done(function( data, textStatus, jqXHR ) {
        if( msg != ''){
            $("#msg-form-mailchimp").html(msg);
            $("#msg-form-mailchimp").fadeIn();
            setTimeout(function(){
                $("#msg-form-mailchimp").fadeOut();
            },2000);
        }
    }).complete(function(){

    });
}