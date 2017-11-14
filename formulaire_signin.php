<!DOCTYPE html>
<html lang="fr">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <link rel="stylesheet" href="assets/css/style.css"> -->
    <link rel="stylesheet" href="style.css">
    <title>Formulaire Signin</title>
  </head>

  <body>

    <h2>Formulaire d'inscription</h2>

    <form action="../controller/log_in.php" onsubmit="return verifForm(this)">
        <!-- permet de bloquer l'envoi du formulaire si l'un des champ n'est pas correctement rempli -->

      <div>
        <label for="pseudo">Pseudo : </label>
        <input type = "text" name="pseudo" id="pseudo" placeholder="Votre pseudo" onblur="verifPseudo(this)" />
        <!-- onBlur, déclenché lorsque le champ en question perd le focus, on utilise le mot-clé this puisque le champ à vérifier est justement celui qui vient de perdre le focus -->
      </div>

      <div>
        <label for="email">Email : </label>
        <input type = "text" name="email" size="30" id="email" placeholder="Votre email" onblur="verifMail(this)" />
      </div>

      <div>
        <label for="pass">Mot de passe :</label>
        <input type = "password" id="pass" placeholder="Votre mot de passe"/>
      </div>

      <div class="button">
        <input type="submit" value="S'enregister"/>
      </div>

    </form>

    <!-- lien vers script javascript -->
    <!-- <script src="assets/js/app.js"></script> -->
    <script src="app.js"></script>

  </body>

</html>
