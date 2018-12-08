$(function(){
    // console.log('wwww');
     var Str = location.search;
    var id = +(Str.slice(4));
    console.log(typeof id,id);
    var pageid = 1;

    rander();


    // 分类标题渲染

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{
            categoryid:id
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var title_leftStr = template('product_title',info);
            $('.title_left').html(title_leftStr);
        }
    });

   function rander(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductlist',
        data:{
            categoryid:id,
            pageid :pageid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
        var productStr = template('product_list',info);
        $('.title').next().html(productStr);
        // var product_selectStr = template('product_select',info);
        var product_selectStr;
            var end =Math.ceil(info.totalCount/info.pagesize);
            for(var i =1;i<= end;i++){
                product_selectStr += '<option a="'+ i +'" value="'+i+'">'+i+'/'+end+'</option>';
            }
            // <option value="{{i}}"> </option>
        $('.product_footer select').html(product_selectStr);
        $('option[a='+ pageid +']').prop('selected',true);
        // $('select option').on('click',function(){
        //     $(this).attr('selected',true);
        //     console.log($(this).prop('selected',true))
        //     console.log(111);
        // });
        },
        error:function(){
            console.log('qqq');
        }
    });
   }

   

   $('.product_footer select').on('change',function(){
    
    pageid = $(this).val();
        
        rander();
   });

   //上一页点击渲染

   $('.last').click(function(){

    pageid--;

    rander();

   });

//    下一页渲染

    $('.next').click(function(){

        pageid++;

        rander();

    });


    $('.father').on('click','a',function(){
     var id = $(this).data('id');
     var categoryId = $(this).attr('data-categoryId');
     console.log(categoryId);
     var brandName = $(this).attr('data-brandName');
     console.log(brandName);

        // console.log(id);
        location.href = "description.html?id="+id+"&categoryId="+categoryId+"&brandName="+brandName;
    });



});