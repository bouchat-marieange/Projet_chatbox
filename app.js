// On surligne le champs si il y a une erreur, on enlève le surlignage du champ si tout ok

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

// On va créer 3 fonction pour vérifier les différents champs et en plus 1 mégafonction pour vérifier la tatalité du formulaire avant l'envoi

// Vérification du pseudo - Cette fonction doit être appelée lorsque l'utilisateur à fini de saisir son pseudo

function verifPseudo(champ)
{
   if(champ.value.length < 3 || champ.value.length > 25) // vérifie la longueur du pseudo pourra compter minimum 3 caractères et maximum 25 caractères
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

// Vérification de l'adresse mail avec la méthode test (str) de l'objet RegExp

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

// Tout vérifier avant l'envoi

// Voici une méga fonction qui appelle nos autres fonctions et renvoie true si tout est bon

function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);

   if(pseudoOk && mailOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
