$(function(){
    var pageid =1;
    rander();
    function rander(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            data:{
                pageid:pageid  
            },
            dataType:'json',
            success:function(info){
                console.log(info);
            var Str = template('money',info);
            $('.main ul').html(Str);
            var product_selectStr;
                
                var end =Math.ceil(info.totalCount/info.pagesize);
                   if(pageid === end){
                        pageid =1; 
                   }
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
        $(this).val(pageid).attr('select','selected');
        // console.log(id);
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

});