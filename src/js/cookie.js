document.addEventListener("DOMContentLoaded",function(){
var $copyImg = $('.tupian').find('img').clone();
                    var $img = $('.tupian').find('img');
                    // 定位复制的图片到当前图片位置
                    $copyImg.css({
                        position:'absolute',
                        left:$img.offset().left,
                        top:$img.offset().top,
                        width:$img.width(),
                        height:$img.height()
                    });
                    // 把复制的图片写入页面
                    // 建议写到body
                    $copyImg.appendTo('body');
                    $copyImg.animate({
                        left:$('.gouwu1').offset().left-(window.innerWidth - document.body.clientWidth)-37,
                        top:$('.spc').height + 97,
                        width:83,
                        height:75
                    },function(){
                        //动画完成
                        // 删除复制的图片
                        $copyImg.remove();

                        var $copyImgg = $('.tupian').find('img').clone();
                        $copyImgg.css({
                            width:83,
                            height:75
                        })
                        var _imgs = $('.tupian').find('img').attr('src');
                        var _price =$('price').text(); ;
                        var _headline = $('name').text();
                        // var _number = $('.chima_b').find('input').val();
                        // var _color = color;
                         // 用于保存购物车中的商品信息
                        var carlist = [];
                        var cookies = document.cookie;
                        if(cookies.length){
                            cookies = cookies.split('; ');//['carlist=[{},{}]','username=xxx']
                            cookies.forEach(function(item){
                                var arr = item.split('=');
                                if(arr[0] === 'carlist'){
                                    carlist = JSON.parse(arr[1]);
                                }
                            });
                        }     

                        var currentLi = $('.spcImg').find('li');
                        // 获取当前商品的id
                        // var guid = attr[0].id;
                        //  for(var i=0;i<carlist.length;i++){
                        //     if(carlist[i].guid === guid){
                        //         break;
                        //     }
                        // }

                        if(i===carlist.length){
                            //不存在：创建对象，并且数量为1
                            var goods = {
                                guid:guid,
                                imgs:_imgs,
                                price:_price,
                                name:_name,
                                // number:_number,
                                // color:_color,
                                qty:1
                            }
                            carlist.push(goods);
                            
                        }else{
                            //存在：数量+1
                            carlist[i].qty++;
                        }


                        // 写入cookie
                        document.cookie = 'carlist=' + JSON.stringify(carlist);
                    });
                    
                });

 // })

