document.addEventListener("DOMContentLoaded",function(){
                var dix = document.querySelector('#dix');
                var zhong2 = document.querySelector('.zhong2');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong2.appendChild(ul);
                    }
                })
                var zhong4 = document.querySelector('.zhong4');
              
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong4.appendChild(ul);
                    }
                })
                 var zhong6 = document.querySelector('.zhong6');
              
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong6.appendChild(ul);
                    }
                })
                 var zhong8 = document.querySelector('.zhong8');
              
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong8.appendChild(ul);
                    }
                })
                 var zhong10 = document.querySelector('.zhong10');
              
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong10.appendChild(ul);
                    }
                })
                // var dix = document.querySelector('#dix');
                var zhong11 = document.querySelector('.zhong11');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong11.appendChild(ul);
                    }
                })
                var zhong13 = document.querySelector('.zhong13');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong13.appendChild(ul);
                    }
                })
                var zhong15 = document.querySelector('.zhong15');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong15.appendChild(ul);
                    }
                })
                var zhong17 = document.querySelector('.zhong17');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong17.appendChild(ul);
                    }
                })
                var zhong19 = document.querySelector('.zhong19');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong19.appendChild(ul);
                    }
                })
                 var zhong21 = document.querySelector('.zhong21');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong21.appendChild(ul);
                    }
                })
                 var zhong23 = document.querySelector('.zhong23');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong23.appendChild(ul);
                    }
                })
                 var zhong25 = document.querySelector('.zhong25');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong25.appendChild(ul);
                    }
                })
                 var zhong27 = document.querySelector('.zhong27');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong27.appendChild(ul);
                    }
                })
                 var zhong31 = document.querySelector('.zhong31');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong31.appendChild(ul);
                    }
                })
                 var zhong41 = document.querySelector('.zhong41');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong41.appendChild(ul);
                    }
                })
                 var zhong43 = document.querySelector('.zhong43');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong43.appendChild(ul);
                    }
                })
                 var zhong33 = document.querySelector('.zhong33');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong33.appendChild(ul);
                    }
                })
                 var zhong35 = document.querySelector('.zhong35');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong35.appendChild(ul);
                    }
                })
                 var zhong37 = document.querySelector('.zhong37');
                ajax.get({
                    url:"../api/maomao.php",
    
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zhong37.appendChild(ul);
                    }
                })
                var zuoo = document.querySelector('.zuoo');
                ajax.get({
                    url:"../api/goodalist.php",
                    success:function(data){
                       let ul = document.createElement('ul');
                           // console.log();
                         ul.innerHTML = data.map(function(item){
                                return `
                                    <li data-id="${item.id}">
                                       <a href="#"> <img src="${item.imgurl}"></a>
                                        <h4><a href="#">${item.name}</a></h4>
                                        <span class="price">${item.price}</span>
                                        <span class="yihou">${item.yihou}</span>
                                    </li>`
                            }).join('');

                         zuoo.appendChild(ul);
                    }
                })

})