function maFonction(monObjet) {
    monObjet = {fabricant: "Ford", modèle: "Focus", année: 2006};
  }

  var mavoiture = {fabricant: "Honda", modèle: "Accord", année: 1998};
  var x, y;

  x = mavoiture.fabricant;     // x reçoit la valeur "Honda"

  maFonction(mavoiture);
  y = mavoiture.fabricant;