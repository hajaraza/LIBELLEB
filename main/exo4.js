function afficher() {
    let texte = document.getElementById("mot").value;
    let numcar = document.getElementById("cara").value;
    let numero = texte.charAt(numcar-1);
    let txt=""
    document.getElementById("resultat").innerHTML="le caractere est : " + numero;
    for (let i=texte.length; i>=0;i--) {
        txt=txt+texte.substring(i);
    }
    document.getElementById("resultat2").innerHTML=txt;
}