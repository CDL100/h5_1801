document.addEventListener("DOMContentLoaded",function(){

                var youy = document.querySelector('.youy');
                ajax.get({
                    url:"../api/you.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                    </li>`
                            }).join('');

                         youy.appendChild(ul);
                    }
                })
                var youyy = document.querySelector('.youyy');
                ajax.get({
                    url:"../api/you.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                    </li>`
                            }).join('');

                         youyy.appendChild(ul);
                    }
                })
                var youyyy = document.querySelector('.youyyy');
                ajax.get({
                    url:"../api/you.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                    </li>`
                            }).join('');

                         youyyy.appendChild(ul);
                    }
                })
                var youyyyy = document.querySelector('.youyyyy');
                ajax.get({
                    url:"../api/you.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                    </li>`
                            }).join('');

                         youyyyy.appendChild(ul);
                    }
                })
                var youyyyyy = document.querySelector('.youyyyyy');
                ajax.get({
                    url:"../api/you.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                    </li>`
                            }).join('');

                         youyyyyy.appendChild(ul);
                    }
                })
                var zuoo = document.querySelector('.zuoo');
                ajax.get({
                    url:"../api/you.php",
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="../${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                    </li>`
                            }).join('');

                         zuoo.appendChild(ul);
                    }
                })
                var btn = document.getElementById('btn');
var gouwuche = document.getElementById('gouwuche');
// var ding = document.getElementById('ding');
   var show= true;
    btn.onclick = function(){
        if(show){
            gouwuche.style.display = 'block';
            btn.style.right='330px';
            // btn.style.top='500px';
            // ding.style.display = 'dlock';
            show=false;
        }else{
            gouwuche.style.display = 'none';
            show=true;
            btn.style.right='0';
        }
    }
   })