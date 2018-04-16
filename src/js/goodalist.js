document.addEventListener("DOMContentLoaded",function(){

                var zhong1 = document.querySelector('.zhong1');
              
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

                         zhong1.appendChild(ul);
                    }
                })
                var zhong3 = document.querySelector('.zhong3');
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

                         zhong3.appendChild(ul);
                    }
                })
                 var zhong5 = document.querySelector('.zhong5');
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

                         zhong5.appendChild(ul);
                    }
                })
                    var zhong7 = document.querySelector('.zhong7');
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

                         zhong7.appendChild(ul);
                    }
                })
                var zhong9 = document.querySelector('.zhong9');
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

                         zhong9.appendChild(ul);
                    }
                })
                var zhong12 = document.querySelector('.zhong12');
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

                         zhong12.appendChild(ul);
                    }
                })
                var zhong14 = document.querySelector('.zhong14');
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

                         zhong14.appendChild(ul);
                    }
                })
                var zhong16 = document.querySelector('.zhong16');
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

                         zhong16.appendChild(ul);
                    }
                })
                var zhong18 = document.querySelector('.zhong18');
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

                         zhong18.appendChild(ul);
                    }
                })
                var zhong20 = document.querySelector('.zhong20');
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

                         zhong20.appendChild(ul);
                    }
                })
                var zhong22 = document.querySelector('.zhong22');
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

                         zhong22.appendChild(ul);
                    }
                })
                var zhong24 = document.querySelector('.zhong24');
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

                         zhong24.appendChild(ul);
                    }
                })
                var zhong26 = document.querySelector('.zhong26');
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

                         zhong26.appendChild(ul);
                    }
                })
                var zhong28 = document.querySelector('.zhong28');
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

                         zhong28.appendChild(ul);
                    }
                })
                var zhong32 = document.querySelector('.zhong32');
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

                         zhong32.appendChild(ul);
                    }
                })
                var zhong42 = document.querySelector('.zhong42');
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

                         zhong42.appendChild(ul);
                    }
                })
                var zhong34 = document.querySelector('.zhong34');
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

                         zhong34.appendChild(ul);
                    }
                })
                var zhong44 = document.querySelector('.zhong44');
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

                         zhong44.appendChild(ul);
                    }
                })
                var zhong36 = document.querySelector('.zhong36');
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

                         zhong36.appendChild(ul);
                    }
                })
                var zhong38 = document.querySelector('.zhong38');
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

                         zhong38.appendChild(ul);
                    }
                })
                 var shang1 = document.querySelector('.shang1');
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

                         shang1.appendChild(ul);
                    }
                })
       })