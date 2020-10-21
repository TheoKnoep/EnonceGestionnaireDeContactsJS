const contact01 = new Contact ("Bessac"); 
const contact02 = new Contact ("Touque"); 

contact01.displayInfos();
contact02.displayInfos(); 

 

while (!checkStringLength(contact01.prenom, 2)) {
	contact01.prenom = prompt("Veuillez saisir un prénom d'au mois deux lettres"); 
}; 

while (!checkStringLength(contact01.nom, 2)) {
	contact01.nom = prompt("Veuillez saisir un nom d'au mois deux lettres");
}; 

while (!emailIsValid(contact01.email)) {
	contact01.email = prompt("Veuillez saisir une adresse email valide"); 
};


let displayContact = document.getElementById("display-contact"); 
displayContact.textContent = "Nom : " + contact01.nom + " || Prénom : " + contact01.prenom + " || Email : " + contact01.email;
