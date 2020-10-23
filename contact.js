class Contact {
	constructor(prenom) {
	    this.prenom = prenom; 
	    this.nom = ""; 
	    this.email = ""; 
	}
	
	displayInfos() {
	    console.log("Prénom : "+this.prenom +" || Nom : "+ this.nom + " || Email : "+this.email); 
	}
    }

    class ContactManager {
	displayMenu() {
		//afficher dans une boîte de dialogue un menu avec les options du gestionnaire de contact (??) 
		console.log('Le menu s\'affiche'); 
		let userChoice = prompt("Veuillez saisir le nombre de l'action à exécuter : \n 1 - Lister les contacts \n 2 - Ajouter un nouveau contact \n 3 - Modifier un contact existant \n 4 - Supprimer un contact \n 5 - Quitter le gestionnaire de contacts");
		//on vérifie le format saisi :
		let responsesAcceptees = ["1", "2", "3", "4", "5"]; 
		while (responsesAcceptees.indexOf(userChoice) === -1 ) {
			userChoice = prompt("Veuillez saisir un nombre valide svp :  \n 1 - Lister les contacts \n 2 - Ajouter un nouveau contact \n 3 - Modifier un contact existant \n 4 - Supprimer un contact \n 5 - Quitter le gestionnaire de contacts");
		}
		//feedback : 
		switch (userChoice) {
			case '1':
				console.log('Vous avez choisi : Lister les contacts'); 
				break; 
			case '2': 
				console.log('Vous avez choisi : Ajouter un nouveau contact'); 
				break; 
			case '3': 
				console.log('Vous avez choisi : Modifier un contact existant'); 
				break; 
			case '4': 
				console.log('Vous avez choisi : Supprimer un contact'); 
				break; 
			case '5': 
				console.log('Vous avez choisi : Quitter le gestionnaire de contacts'); 
				break; 
		}
		if (userChoice === "5") {
			console.log("C'est bon c'est quitté 👋"); 
		}
		return userChoice; 
	}

	toListContacts() {
		//méthode qui permet de lister les contacts dans la console (??)
		let listeDeContacts = [...tableContacts]; 
		for (let i in listeDeContacts) {
			listeDeContacts[i].displayInfos(); 
		}
	 }

	addContact() {
		    let newPrenom = prompt("Renseignez le prénom du nouveau contact"); 
		    while (!checkStringLength(newPrenom, 2)) {
			newPrenom = prompt("Veuillez saisir un prénom d'au mois deux lettres"); 
			}; 
		    let newContact = new Contact(newPrenom); 
		    newContact.email = prompt("Renseignez l'adresse email du nouveau contact"); 
		    while(!emailIsValid(newContact.email)) {
			    newContact.email = prompt("Veuillez saisir une adresse email valide"); 
		    }
		    tableContacts.push(newContact); 
		    console.log("Le contact a bien été ajouté");  //feedback utilisateur : confirmation de l'ajout
		    newContact.displayInfos(); 
	}
}

