$(function(){
    var getStr = decodeURI(location.search);
    var getArr = getStr.split('&');
    var productid = getArr[0].split('=')[1];
    var categoryId = getArr[1].split('=')[1];
    var brandName = getArr[2].split('=')[1];
    console.log(categoryId);
    $('.lay').text(brandName);

        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategorybyid',
            data:{
                categoryid:categoryId 
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                $('.cate').text(info.result[0].category);
            }
        });

    // var productid = +location.search.slice(4);
    rander('http://127.0.0.1:9090/api/getproduct');

    // rander('http://127.0.0.1:9090/api/getproductcom');
    function rander(url){
        $.ajax({
            type:'get',
            url:url,
            data:{
                productid:productid
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var descriptionStr = template('description',info);
                $('.banner')[0].innerHTML += descriptionStr;

            }
        });
    }
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid:productid

        },
        dataType:'json', 
        success:function(info){
            console.log(info);
        var commentStr = template('comments',info);
            $('.comments ul').html(commentStr);
        }
    });

}); 