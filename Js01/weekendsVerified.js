// Ecrivez un programme qui prend en entrée une chaîne de caractères 
// représentant un jour de la semaine, utilisez une condition if-else pour 
// vérifier si le jour est samedi ou dimanche et affiche "weekend" si le jour 
// est samedi ou dimanche, et "weekday" sinon.

function weekday(day) {
    if(day === "Lundi" || day === "Mardi" || day === "Mercredi" || day === "Jeudi" || day === "vendredi") {
        console.log("Weekday");
    }
     else {
        console.log("Weekend");
    }

}
weekday("Samedi");