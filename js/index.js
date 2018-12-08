
$(function(){

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function(info){
            console.log(info);
           var htmlStr = template('index_nav',info);
            $('.index_nav ul').html(htmlStr);
        }
    });
    $('.index_nav').on('click','.more',function(){
        // console.log($('.index_nav li:nth-last-child(-n+4)')).slideDown();
        $('.index_nav li:nth-last-child(-n+4)').each(function(i,v){
            $(v).stop().slideToggle();
            $(v).toggleClass('current');
        });
    });
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('index_recommend',info);
            $('.recommend_content ul').html(htmlStr);
        }
    });

});