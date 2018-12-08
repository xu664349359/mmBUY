$(function(){
    // console.log('1111');
    var productid = location.search.split('=')[1];
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid:productid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var Str = template('money',info);
            $('.main .rander').html(Str);
        }
    }); 

});