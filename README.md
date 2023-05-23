
School Project

<html lang="en">
<head>
    <link rel="stylesheet" href="TDEE.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Je suis Batman</title>
</head>
<body>


    <div class='logo'>
        <img src="Bat.png"
        width="100"
        height="70">
    </div>
    <div class='text'>
        <h1>Batman TDEE</h1>
    </div>
    <hr color="#FFFFFF" noshade="" >
    </hr>
<p>Quel est votre niveau d'activité?</p>
<optgroup style="font-family:verdana">
<label for="operations">Option :</label>
</optgroup>
<select name="operations" id="operations">
    <option value="M">Choisis une option</option>
  <option value="M">Activité moyenne</option>
  <option value="m">Pas très actif</option>
  <option value="nm">Très actif</option>
</select>
<p>Poid en KG</p>
<input type="number" id="myNumber" placeholder="entrée un nombre">
<p>Taille en CM</p>
<input type="number" id="myNumber" placeholder="entrée un nombre">
<p>Age</p>
<input type="number" id="myNumber" placeholder="entrée un nombre">
<button>Calcul</button>
<output id="a"></output>
<h2 id ="Output"> </h2>
<button onclick="window.print()">imprimer la page</button>
<button onClick="window.location.reload();">supprimer tout</button>
    <script src="TDEE.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
</body>
</html>
