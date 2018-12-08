$(function(){

    var couponid = +location.search.split('=')[1];
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{
            couponid:couponid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
        var Str = template('coupon_list',info);
        $('.main ul').html(Str);
        }
    });

});