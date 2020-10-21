//instanciation de 2 contacts à partir de la classe Contact : 
let contact1 = new Contact ("Eve"); 
let contact2 = new Contact("Albertine"); 


//vérification des formats de données pour la contact 1 :
while (!checkStringLength(contact1.prenom, 2)) {
	contact1.prenom = prompt("Veuillez saisir un prénom d'au mois deux lettres"); 
}; 

while (!checkStringLength(contact1.nom, 2)) {
	contact1.nom = prompt("Veuillez saisir un nom d'au mois deux lettres");
}; 

while (!emailIsValid(contact1.email)) {
	contact1.email = prompt("Veuillez saisir une adresse email valide"); 
};


//affichage des infos des contacts 1 et 2 : 
contact1.displayInfos(); 
contact2.displayInfos(); 

//appel à la méthode du tableau : 
let manager = new ContactManager; 
manager.toListContacts(contact1, contact2); 