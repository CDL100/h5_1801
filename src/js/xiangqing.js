document.addEventListener("DOMContentLoaded",function(){
        var params = location.search;
                params = params.substring(1).split('=')[1];
                $.ajax({
                   url: '../api/xiangqing.php',
                   type:'get',
                   data: {
                        id:params
                   },
                   success:function(data){
                        var data = JSON.parse(data);
                            $('.tup')[0].src = '../'+data[0].imgurl;
                            $('.minzi')[0].innerText = data[0].name;
                            $('.jiage')[0].innerText = data[0].price;
                   }
                   
               })
       //           $main = $('tupian');
       //                  // $mbar_cart  = $('.mbar_cart ul');

       //                  $btn('click','.shouc-btn',function(){
       //                          console.log(3232323)
       //                      var $main_m = $(this).closest('.tupian');

       //                      var $img = $main_m.find('.tuli');
       //                          console.log($img);
       //                      // 1>复制当前商品图片(目的：用于实现动画效果)
       //                      var $copyImg = $img.clone();
       //                          console.log($copyImg)
       //                      // 设定图片样式
       //                      $copyImg.css({
       //                          position:'absolute',
       //                          left:$img.offset().left,
       //                          top:$img.offset().top,
       //                          width:$img.outerWidth()
       //                      });

       //                      // 把图片写入页面
       //                      $('body').append($copyImg);
       // // 动画
       //                      $copyImg.animate({
       //                          left:$mbar_cart.offset().left,
       //                          top:$mbar_cart.offset().top + $mbar_cart.height(),
       //                          width:30
       //                      },function(){
 })
   