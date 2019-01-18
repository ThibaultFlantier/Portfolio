<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
	<title>Contact</title>
</head>

<body id="contactez">
	<header>

	<h1 class="ml14">
  <span class="text-wrapper">
    <span class="letters">Contactez-moi</span>
    <span class="line"></span>
  </span>
</h1>

</header>

<div id="divcontact">
<a href="index.php"><i class=" backarrow fas fa-arrow-left"></i></a>
</div>
	<div class="form">
<p id="prespar">
	Vous avez un <span class="motvert">commentaire</span> à faire ou une <span class="motvert">question</span> à poser ? </br>
	Vous pouvez utiliser ce <span class="motvert">formulaire</span>:
</p>



		<form id="form1">
			<label>Votre <span class="motvert">nom*</span> </label><input id="nom" type="text" name="nom" placeholder="Votre nom" /><br/>
			<label>Votre <span class="motvert">mail*</span> </label><input type="mail" id="mail" name="mail" placeholder="Votre email" /><br/>
			<label>Votre <span class="motvert">numéro*</span> </label><input id="numero" type="tel" placeholder="Votre numéro" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"></br>
			<label>Votre <span class="motvert">message*</span> </label><textarea id="message" name="message" placeholder="Votre message"></textarea><br/>
			<button class="button" id="valid">
	<span >Envoyer</span>
</button></br>
<p><INPUT type="checkbox" name="rgpd" id="rgpd" value="rgpd"> En cochant cette case, j’accepte la politique de confidentialité de ce site.</p>
		</form>
		
		<div id="result1"></div></br>
	
	</div>
	
	</div>
	<footer>
	<?php include('include/footer.php');?>
</footer>
</body>
</html>