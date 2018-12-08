$(function(){
    var brandtitleid = location.search.split('=')[1];
    var productid = 0;
    var src;
    var txt;
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            brandtitleid:brandtitleid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var Str1 = template('brand_des',info);
            $('.list ul').html(Str1);
            // rander(productid);
        }
    });

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            brandtitleid:brandtitleid,
            // pagesize:4
        },
        dataType:'json',
        success:function(info){
            console.log(info);
        var productStr = template('product',info);
           $('.father').html(productStr);
        }
    });

   function rander(productid){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid :productid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
        var commentStr  = template('comment',info);
        $('.comment ul').html(commentStr);
        
        console.log('hhh');
        src = $('.product ul li').find('.product_left img').attr('src');
        txt = $('.product ul li').find('.product_right p:first-child').text();
        console.log(src);
        // $('.iiii').attr('src',src);
        $('.iiii').each(function(i,v){
            $(v).attr('src',src);
        });
        $('.pppp').each(function(i,v){
            $(v).text(txt);
        });
        // $('.comment ul product_right p').text(txt);
        }
    });
   }

    $('.product ul').on('click','li',function(){
        productid = $(this).attr('data-productId');
        // console.log(productid);
    //   src = $(this).find('.product_left img').attr('src');
    //  console.log(src);
    //  txt = $(this).find('.product_right p:first-child').text();
    //  console.log(txt);
     console.log('xxxx');
     rander(productid);

    //  $('.comment ul product_left img').attr('src',src);
    //  $('.comment ul product_right p').text(txt);
    });
});