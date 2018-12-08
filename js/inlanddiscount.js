$(function(){
   
    $.ajax({
        type:'get',
        url:'http:127.0.0.1:9090/api/getinlanddiscount',
        dataType:'json',
        success:function(info){
            console.log(info);
            var Str = template('list',info);
            $('.main ul').html(Str);
             $('.main ul > li img').lazyload({
                placeholder: "../images/none.png",
            });
        }
    }); 


});