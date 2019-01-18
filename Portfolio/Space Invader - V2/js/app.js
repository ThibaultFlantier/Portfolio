window.onload = function () {
    //   
    var body = document.getElementsByName('body');
    var vaisseau = document.getElementById('vaisseau');
    var sonTir = document.getElementById('audio1');
    var spaceInvaders = document.getElementsByClassName('spaceInvader');
    var afficheScore = document.getElementById('score');
    var score = 0; // variable incrementation score
   var widthEcran = window.innerWidth;
    // deplacement vaisseau + création et tir de missiles
    window.addEventListener('keydown', function (e) {

        if (e.keyCode == 37) {
            vaisseau.style.left = vaisseau.offsetLeft - 10 + 'px';
           if(vaisseau.style.left <= 0+'px'){
               vaisseau.style.left =0 + 'px';
                
           }
        }

        if (e.keyCode == 39) {
            vaisseau.style.left = vaisseau.offsetLeft + 10 + 'px';
           
        }
        if (e.keyCode == 32) {
            var missile = document.createElement('div');
            missile.className = 'missile';
            missile.style.backgroundImage = 'url(img/rocket.png)';
            missile.style.left = vaisseau.offsetLeft + 'px';
            document.body.appendChild(missile);
            sonTir.play();

        }


    })




    // deplacement missile + collisions
    var x = setInterval(function () {


        var missiles = document.getElementsByClassName('missile');

        for (var i = 0; i < missiles.length; i++) {
            missiles[i].style.top = missiles[i].offsetTop - 10 + 'px';

            for (var j = 0; j < spaceInvaders.length; j++) {

                
                if (missiles[i].offsetLeft < spaceInvaders[j].offsetLeft + 50 && missiles[i].offsetLeft + 50 > spaceInvaders[j].offsetLeft && missiles[i].offsetTop < spaceInvaders[j].offsetTop + 50 && 50 + missiles[i].offsetTop > spaceInvaders[j].offsetTop) {
                    //                    alert('boom');

                    missiles[i].style.backgroundImage = 'url(img/explosion.png)';
                    document.getElementById('invaders').removeChild(spaceInvaders[j]);
                   //score
                    
                    score = score + 50;
                    afficheScore.innerHTML = "score : " + score;
                    console.log(score);
                }
            }
        }
    }, 30)

//    deplacement space invader

        var y = setInterval(function(){
           
            for (var i = 0; i< spaceInvaders.length; i++){
                spaceInvaders[i].style.top = spaceInvaders[i].offsetTop + Math.floor(Math.random() * Math.floor(50)) +'px';
                spaceInvaders[i].style.left = spaceInvaders[i].offsetLeft + (Math.random()*200 - 100) +'px';
                
            }
        },1500)
        
        var createInvader = setInterval(function(){
            var invader = document.createElement('img');
            invader.src= 'img/invader.png';
            invader.className='spaceInvader';
            invader.style.top = 0 + 'px';
            invader.style.left = Math.random()*window.innerWidth;
            document.getElementById('invaders').appendChild(invader);
        },5000)


     
    //    var collision = 'missiles.offsetLeft < spaceInvaders.offsetLeft + spaceInvaders.width && missiles.offsetLeft + missiles.width >spaceInvaders.offsetLeft && missiles.offsetTop < spaceInvaders.offsetTop + spaceInvaders.height && missiles.height + missiles.offsettop > spaceInvaders.ofsetTop ';


}
