document.addEventListener('DOMContentLoaded',function(){
            let username = document.querySelector('#username');
            let password = document.querySelector('#password');
            let btnReg = document.querySelector('.btnReg');
            let group = username.parentNode;
            let txt = username.nextElementSibling;
            username.onblur = function(){
                let _username = username.value;
                ajax({
                    url:'../api/zhuce.php',
                    data:{username:_username},
                    success:function(data){
                        if(data === 'success'){
                            group.classList.remove('has-success');
                            group.classList.add('has-error');
                             txt.innerText = '';
                        }else{
                            group.classList.remove('has-error');
                            group.classList.add('has-success');
                           txt.innerText = _username + '此用户太帅被占用'
                        }
                    }
                })
            }
            // 失去焦点验证用户是否可注册var yanzm = document.getElementById('yanzm');
                  function RandomNumber(){
                    var a = parseInt(Math.random()*10);
                    var b = parseInt(Math.random()*10);
                    var c = parseInt(Math.random()*10);
                    var d = parseInt(Math.random()*10);
                    var str = '';
                    str += str + a + b + c+ d;
                    return str;
                }
                yanzm.innerHTML = RandomNumber();
                yanzm.onclick = function(){
                    yanzm.innerHTML = RandomNumber();
                }
            btnReg.onclick = function(){
                var usernam = document.getElementById('username').value;
                    var reg = /^[a-z][\da-z\-]{5,19}$/i
                    if(!reg.test(usernam)){
                        alert('用户名格式不正确');
                        return false;
                    };
                    var _yan =yan.value;
                    if(_yan!=yanzm.innerHTML){ 
                        alert('验证码有误');
                        return false;
                    }
                    var password = document.getElementById('password').value;
                    var ret = /^[a-z][\da-z\-]{5,19}$/i
                    if(!ret.test(password)){
                        alert('密码不合法');
                        return false;
                    };
                    let _username = username.value;
                    let _password = password.value;
                ajax({
                    url:'../api/zhuce.php',
                    data:{
                        username:_username,
                        password:_password,
                        type:'reg',
                    },
                    success:function(data){
                        if(data == 'success'){
                            window.location.href="http://localhost:1801/html/denglv.html";
                        }
                    }
                })
            }
        });