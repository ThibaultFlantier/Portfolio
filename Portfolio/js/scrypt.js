$(document).ready(function() {

$("#valid").click(function(e){
		e.preventDefault();
		var nom = $("#nom").val();
		var mail = $("#mail").val();
		var message = $("#message").val();
		var rgpd = $("#rgpd").is(':checked');
		var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;



		if (!isNaN(nom) || nom.length == 0)
		{
		$("#result1").html("le nom ne peut être numérique et est obligatoire ");	
		}
		else
		{
			if (!myRegex.test(mail))
			{
			$("#result1").html("le mail n'est pas correct");	
			}
			else
			{	if (message.length == 0)
				{
				$("#result1").html("le commentaire est obligatoire ");	
				}
				else
				{
					if (!$("#rgpd").is(':checked'))
					{
					$("#result1").html("vous devez valider notre politique de confidentialité des données ");	
					}
					else
					{					
						$.ajax({
						url : '/function/envoie.php',
						type : 'POST',
						data : { "nom" : nom, "mail" : mail, "message" : message, "rgpd" : $("#rgpd").is(':checked') },
						dataType : 'json',
						success : function(donnees, statut){ // success est toujours en place, bien sûr !
						$("#result1").html(donnees);
						},
						error : function(resultat, statut, erreur){
						$("#result1").html("erreur : "+erreur+" status : "+status);	
						}
						});
					}
				}
			}
		}

});
})