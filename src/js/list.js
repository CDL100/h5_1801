 document.addEventListener("DOMContentLoaded",function(){
var btn = document.querySelector('#btn');
 var shangping = document.querySelector('.shangping');
        var $page = $('.page');

        let pageNo = 1;
        let qty = 20;

        function getajax(){
            $.ajax({
                url:'../api/list.php',
                type:'GET',
                data:{
                    pageNo:pageNo,
                    qty:qty
                },
                success:function(data){
                   var total = JSON.parse(data).total;
                   var data = JSON.parse(data).data;
                   // console.log(total,data)
                   // paixu();
                   // function paixu(){
                    shangping.innerHTML = data.map(function(item,idx){
                        return `
                                <li class="splb" data-id="${item.id}">
                                        <img src="../${item.imgurl}">
                                        <p>${item.price}</p>
                                        <h4>${item.name}</h4>
                                        <span class="span1">${item.yiyou}</span>
                                        <span class="span2">${item.yishou}</span>
                                </li>`
                   }).join('');
                   // } 

                // 价格排序

                //      var  btn = document.querySelector('#btn');
                // btn.onclick = function(){
                //     data.map(function(){
                        
                //     })
                // }      



                   //分页效果
                    let pageQty = Math.ceil(total/qty);
                    $page[0].innerText = '';
                    for(let i = 1;i<=pageQty;i++){
                        let b = document.createElement('b');
                        b.innerText = i;
                        if(i==pageNo){
                            // console.log(11)
                            b.className = 'active nohao';
                        }
                        $page[0].appendChild(b);                   }
                    }
            })
        }
        getajax()
        //点击分页高亮
        $page.on('click','b',function(){
            pageNo = $(this).text();
            getajax()
        })

        //点击传送ID,跳转详情页
        $('.shangping').on('click','li',function(){
            var $sp = $(this).attr('data-id');
            location.href = 'xiangqing.html?id=' + $sp;   
        })

 })