window.onload=function(){
    var params = decodeURI(location.search.slice(4));console.log(params)

    let ji = document.querySelector('.ji');
    let qty = document.querySelector('.qty');

        var data2=(function(){
            var jieshou;
            $.ajax({
                url:"../api/gouwuche.php",
                data:{id:params},
                async:false,
                success:function(data){
                    jieshou=JSON.parse(data);
                }
            });
            return jieshou;
        })();
        var data=data2[0];
        var jia = document.getElementById('jia');
        // console.log(jia.innerHTML)
        ji.onclick=function(){
           data.qty=jia.innerHTML;
            var naduotiaoshuju = Cookie.get('naduotiaoshuju') || [];
            if(typeof naduotiaoshuju === 'string'){
                    naduotiaoshuju = JSON.parse(naduotiaoshuju);
                };
            var idx;
            var has = naduotiaoshuju.some(function(g,i){
                idx = i;
                return g.id === params;
            });
            if(has){
                naduotiaoshuju[idx].qty=(naduotiaoshuju[idx].qty)*1+jia.innerHTML*1;
            }else{
                naduotiaoshuju.push(data);
            }
            Cookie.set("naduotiaoshuju",JSON.stringify(naduotiaoshuju),{path:"/"});
        }
       // 读取cookie所有信息
       // 
        var carList = document.getElementById('carList');
        var subPrice = carList.nextElementSibling;
        // var subprice = querySelector('.subprice')
        // var subPrice =document.getElementById('subPrice');
        var btnClear = document.getElementById('btnClear');
        
        var naduotiaoshuju;
        render();
        function render(){
            // 获取cookie
            naduotiaoshuju = Cookie.get('naduotiaoshuju');

            if(naduotiaoshuju.length === 0){
                naduotiaoshuju = [];
            }else{
                naduotiaoshuju = JSON.parse(naduotiaoshuju)
            }
            // 商品金额
            // var Ttotal = 0;
            // 
            // 根据数据生成html结构
            // var ul = document.createElement('ul');
            //
            // ul.innerHTML = naduotiaoshuju.map(function(data){
            //     // 计算总价
            //  console.log(naduotiaoshuju)
            //    total += data.price*data.qty;
            //     return '<li id="'+data.params+'">' + 
            //             '<img src="'+data.imgurl+'">' + 
            //             '<h4>'+data.name+'</h4>' + 
            //             '<p class="price">价格：<span>'+data.price+'&times;'+data.qty+'</span></p>' + 
            //             '<span class="btn-close">&times;</span>' + 
            //         '</li>'
            // }).join(''); 

            
            //  // console.log( naduotiaoshuju)
            // // 写入前先清空
            // carList.innerHTML = '';
            // carList.appendChild(ul);
            // // 计算总价
            // subPrice.innerHTML = total.toFixed(2);
            

            var total = 0;
             carList.innerHTML=naduotiaoshuju.map(function(data){
                total +=data.qty*data.price;
                return `<li data-guid="${data.id}" >
                        <sapn class="span1">
                            <img src="${data.imgurl}"class="imgone"/>
                        </sapn>
                         <p class="content">${data.name}</p>
                        <p class="price">数量：<span>${data.price}&times${data.qty}</span></p>
                        </li>`
            }).join('');
          subPrice.innerHTML =total;
        } 

}