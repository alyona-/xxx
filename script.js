var bar = {};
bar.name = document.querySelector('.bar_color');
bar.val =document.querySelector('.bar_val');
bar.procent =20;
bar.name.style.width ='20%';
bar.width =function(width){
    if(width>=0 && width<=100) {
        if(bar.procent<width){
            var i= setInterval(function(){
                bar.val.innerText = bar.procent+'%';
                bar.name.style.width=bar.procent+'%';
                bar.procent++;

                if(bar.procent>width) clearInterval(i);
            },50);}
        else if(bar.procent>width){
            var i=setInterval(function(){
                bar.val.innerText=bar.procent+'%';
                bar.name.style.width=bar.procent+'%';
                bar.procent--;
                if(bar.procent<width) clearInterval(i);
            },50); }

    }}
bar.val.innerHTML = bar.procent+'%';