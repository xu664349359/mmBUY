$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function(info){
            // console.log(info);
            var htmlStr = template('search_list',info);
            $('.list ul').html(htmlStr);
            $('.list ul').on('click','.list_son',function(){
            var id = $(this).data('id');
            console.log(id);
                
            // $('[index]').removeClass('current');
            // $("ul[index= "+id+"]").slideToggle();
              if($(this).children('div').next().find('li').length == 0){
                  console.log(1)
                  ajax(id);
              }else{
                  console.log(2)
                $(this).children('div').next().find('li').stop().slideToggle();
              }
                // if($(this).firstChild().find("li").length == 0){
                //     
                // }else{
                //     $(this).next.
                // }
               
             });
                $('.list_son').on('click','a',function(){
                var id = $(this).attr('data-categoryId');
                console.log(id);
                location.href = "product.html?id="+id;
            });
        }
    });

    


    function ajax(id){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategory',

            data:{
                titleid:id
            },
            success:function(info){
                console.log(info);
                var list_Str = template('list_two',info);
                $("ul[index= "+id+"]").html(list_Str);
                
                // $("ul[index]").removeClass('current');
                // $("ul[index= "+id+"]").addClass('current');
                // $("ul[index= "+id+"]").css({
                //     "display":"none"
                // });
                $("ul[index= "+id+"]").slideDown();
                // $("ul[index= "+id+"]").slideDown();
            }
        });
    }


    $('.l3').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });

});