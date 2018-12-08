$(function(){

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        dataType:'json',
        success:function(info){
            console.log(info);
        var brandStr = template('brand',info);
        $('.list ul').html(brandStr);
        }
    });


    $('.list ul').on('click','li',function(){
        var brandTitleId = $(this).attr('data-brandTitleId');
        console.log(brandTitleId);
        location.href = "brand.html?brandTitleId="+brandTitleId;
    });

    
});