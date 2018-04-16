       


document.addEventListener("DOMContentLoaded",function(){
          var btn = document.getElementById('btn');
var gouwuche = document.getElementById('gouwuche');
   var show= true;
    btn.onclick = function(){
        if(show){
            gouwuche.style.display = 'block';
            btn.style.right='330px';
            // btn.style.top='500px';
            show=false;
        }else{
            gouwuche.style.display = 'none';
            show=true;
            btn.style.right='0';
        }
    }
})