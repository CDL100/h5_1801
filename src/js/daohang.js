jQuery(function($){
            let $min = $('.zuo');
            let timer;
            // 添加箭头;100个li
            $min.find('li').has('ul').addClass('has-menu').append('<span class="arrow"></span>');
            $min.on('mouseover','.has-menu',function(){
                clearTimeout(this.timer);
                $(this).children('ul').show(200);
            }).on('mouseout','.has-menu',function(){
                this.timer = setTimeout(()=>{
                    $(this).children('ul').hide();
                },200)
            })

        })