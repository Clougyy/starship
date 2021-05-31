
const smokes = document.querySelectorAll(".smoke_handler img")
const fires = document.querySelectorAll(".starship div")
const stars = document.querySelectorAll(".star")


docWidth = document.documentElement.clientWidth;
docHeight = document.documentElement.clientHeight;
stars.forEach(function(e) {
    starSize = 10 * Math.random();
    e.style.height = starSize + "px";
    e.style.width = starSize + "px";    
    e.style.top =  (-100 * Math.random()) + "%";    
});
setTimeout(function(){
    stars.forEach(function(e) {
        let rand =  e.style.width.split('px')[0] / 10;
        timeRand= 20 - rand * 20;
        e.style.transition = timeRand+"s linear";
        starLeft = docWidth *  Math.random();
        starTop = 300;
        e.style.left = starLeft + "px";
        e.style.top = starTop + "%";
    });

    setInterval(function(){ 
        stars.forEach(function(e) {
                var pos = e.getBoundingClientRect();
                if(pos.bottom > docHeight){
                    e.style.transition = "0s";
                    starSize = 10 * Math.random();
                    e.style.height = starSize + "px";
                    e.style.width = starSize + "px";    
                    e.style.top =  (-100 * Math.random()) + "%";    
                    var pos = e.getBoundingClientRect();

                    setTimeout(function(){
                        let rand =  e.style.width.split('px')[0] / 10;
                        timeRand= 20 - rand * 20;
                        e.style.transition = timeRand+"s linear";
                        e.style.top =  "300%";
                    }, 100);
                }
        });
    }, 200);
}, 100);
setInterval(function(){ 
    smokes.forEach(function(e) {
        heightRan_s = 300 + 300 * Math.random()
        widthRan_s = 50 + 180 * Math.random()
        e.style.height = heightRan_s + "px";
        e.style.width = widthRan_s + "px";

    });

    fires.forEach(function(e) {
        heightRan = 80 + 30 * Math.random(); 
        e.style.height = heightRan + "px";


    });

}, 150);