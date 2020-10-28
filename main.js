//instanciation de 2 contacts à partir de la classe Contact : 
let contact1 = new Contact ("Eve"); 
let contact2 = new Contact("Albertine"); 

contact1.nom = "Hu"; 
contact1.email = "huhu@email.com"; 

contact2.nom = "Benur"; 
contact2.email = "biquette@email.com"; 

let tableContacts = []; 

tableContacts.push(contact1); 
tableContacts.push(contact2); 


let contact3 = new Contact("Roberta"); 
contact3.nom = "Trevor"; 
contact3.email = "rob.trev@coco.co"; 
tableContacts.push(contact3); 


for (let i in tableContacts) {
	while (!checkStringLength(tableContacts[i].prenom, 2)) {
		tableContacts[i].prenom = prompt("Le prénom renseigné est : " + tableContacts[i].prenom + "\n Veuillez saisir un prénom d'au mois deux lettres"); 
	}; 

	while (!checkStringLength(tableContacts[i].nom, 2)) {
		tableContacts[i].nom = prompt("Le nom renseigné est : " + tableContacts[i].nom + "\n Veuillez saisir un nom d'au mois deux lettres");
	}; 

	while (!emailIsValid(tableContacts[i].email)) {
		tableContacts[i].email = prompt("L'email renseigné est : " + tableContacts[i].email + "\n Veuillez saisir une adresse email valide"); 
	};
}


//on initialise le manager à partir de l'objet ContactManager : 
let manager = new ContactsManager(); 

//on appelle le menu du manager : 
manager.displayMenu(); 








