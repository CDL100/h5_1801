document.addEventListener('DOMContentLoaded',function(){
let username = document.querySelector('#username');
            let password = document.querySelector('#password');
            let btnReg = document.querySelector('.btnReg');
            btnReg.onclick = function(){
                let _username = username.value;
                let _password = password.value;
                //发起请求
                ajax({
                    url:'../api/denglv.php',
                    //数据
                    data:{
                        username:_username,
                        password:_password,
                    },
                    success:function(data){
                        if(data == 'fail'){
                         window.location.href="http://localhost:1801";
                        }
                        else{
                         alert("用户名或密码错误，登录失败");
                        }
                    }
                })
            }
})
