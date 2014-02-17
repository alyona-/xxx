var bar = {};
bar.name = document.querySelector('.bar_color');
bar.val =document.querySelector('.bar_val');
bar.procent =20;
bar.progress = bar.procent;
bar.name.style.width ='20%';
bar.width = function(width){
    if(width>=0 && width<=100) {
        bar.name.style.width = width+'%';
        var i = setInterval(function(){
            bar.val.innerText = bar.progress+"%";
            if(bar.progress<width) bar.progress++;
            else if(bar.progress>width)bar.progress--;
            if(bar.progress==width) {
                bar.val.innerText = width+'%';
                clearInterval(i);
            }
        },0.8);
    }
}
bar.val.innerHTML = bar.progress+'%';