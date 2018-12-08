$(function(){
    



    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function(info){
            console.log(info);
        var titleStr = template('baicai_title',info);
            $('.title ul').html(titleStr);
            var Width = 10;
        $('.title ul li').each(function(i,v){
            Width += $(v).innerWidth();
            console.log(Width);
        });
        $('.title ul').width(Width);
            new IScroll('.title',{
                scrollX: true,
                scrollY: false
            });
        rander(0);
        
        }
    });


    // rander();
    function rander(titleid){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data:{
                titleid:titleid
            },
            dataType:'json',
            success:function(info){
                console.log(info);
            var list_content = template('list_content',info);
            $('.main > ul').html(list_content);
            }
        });
    }

    $('.title ul').on('click','a',function(){
        var  titleid = $(this).data('id');
        
        $(this).addClass('current').parent().siblings().find('a').removeClass('current');
        console.log(titleid);
        rander(titleid);
    });
});