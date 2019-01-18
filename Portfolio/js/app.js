$(document).ready(function(){

///afficher images passage souris (page index)
	$("li").mouseenter(function(){
		$(this).find("img").finish().animate({
			opacity: "0.8"
		});
	}).mouseleave(function(){
		$(this).find("img").finish().animate({
			opacity: "0"
		});
	});

});

///afficher video passage souris (page index)
	$("li#video1").mouseenter( function(){

		$("#d333").animate({
			opacity: "0.8"
		});
		if($("#d333").get(0).paused) {
			$("#d333").get(0).play();
		}
		else {
			$("#d333").get(0).pause();
		}

	})
	.mouseleave(function(){
		$("#d333").animate({
			opacity: "0"

		});
	});



$("li#margintop").mouseenter( function(){
		$("#b111").animate({
			opacity: "0.8"
			
		});
		if($("#b111").get(0).paused) {
			$("#b111").get(0).play();
		}
		else {
			$("#b111").get(0).pause();
		}

	})
	.mouseleave(function(){
		$("#b111").animate({
			opacity: "0"

		});
	});





////////////////Titres de spages//////////
///

// Wrap every letter in a span
$('.ml14 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=500',
    delay: function(el, i) {
      return 150 + 25 * i;
    }
  });


  /////////
  ///afficher images passage souris (page qui suis-je)
  
$(document).ready(function(){

	$("span.motvert").mouseenter(function(){
		$(this).find("img").finish().animate({
			opacity: "0.6"
		});
	}).mouseleave(function(){
		$(this).find("img").finish().animate({
			opacity: "0"
		});
	});


 
	}); 

///// BOUTON ENVOYER CONTACT


document.querySelector('.button').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}


///VERIF FORMAT FORMULAIRE


// function verifform1(){
// var myRegexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
// var mail = document.getElementById('mail');
// var result1 = document.getElementById('result1')
// var form1 = document.getElementById('form1');
// result1.innerHTML= "";
// //mail
// if (myRegexMail.test(mail.value)) {
// 	}
// else {
// 	result1.innerHTML = "Mail non conforme";
// 	return false;
// }
// //nom
// if(form1.nom.value.length == 0) {
// 		result1.innerHTML="Le nom est obligatoire";
// 		return false;
// 	}
// 	//numero
// if(form1.numero.value.length == 0) {
// 		result1.innerHTML="Le numéro de téléphone est obligatoire";
// 		return false;
// 	}
// 	//message
// 	if(form1.message.value.length == 0) {
// 		result1.innerHTML="Le message est obligatoire";
// 		return false;
// 	}
// }
