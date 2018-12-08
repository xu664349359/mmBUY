$(function(){
    // var shopId = 0;
    // var areaId = 0;
    var shopId = 0;
    var areaId = 0;
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:'json',
        success:function(info){
            console.log(info);
            var Str = template('shop1',info);
            $('.shop > ul').html(Str);
            // console.log(areaId);
            rander(shopId,areaId);
        }
    });
   
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dataType:'json',
        success:function(info){
            console.log(info);
        var adress = template('adress',info);
            $('.adress > ul').html(adress);
            // rander(shopId,areaId);
        }
    });

    $('.title > ul >li').on('click',function(){
        $(this).children('span').toggleClass('fa-chevron-up').toggleClass('fa-angle-down');
        $(this).siblings().children('ul');
        $(this).children('ul').stop().slideToggle();
    });

    $('#shop').on('click','li',function(){
        $(this).addClass('current').siblings().removeClass('current');
         var i =  $(this).text();
        $(this).parent().siblings('a').text(i);

        shopId = $(this).attr('data-shopId');
        // console.log(areaId);
        // console.log(shopId);
        rander(shopId,areaId);
         
    });

    $('#adress1').on('click','li',function(){
        $(this).addClass('current').siblings().removeClass('current');
         var i =  $(this).text();
        $(this).parent().siblings('a').text(i);

        areaId = $(this).attr('data-areaId');
        console.log(shopId);
        console.log(areaId);

        rander(shopId,areaId);
    });
    

    // rander();
    function rander(shopId,areaId){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopId,
                areaid:areaId
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var contentStr = template('content',info);
                $('.content ul').html(contentStr);
                // console.log('111')
            }
        });
    }

});