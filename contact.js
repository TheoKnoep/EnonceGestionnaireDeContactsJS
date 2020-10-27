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

class ContactsManager {
	constructor(liste) {
		this.liste = liste; 
	}

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
		if (userChoice == '5') {
			console.log('Vous avez choisi : Quitter le gestionnaire de contacts'); 
			console.log("C'est bon c'est quitté 👋"); 
		} else {
			switch (userChoice) {
				case '1':
					console.log('Vous avez choisi : Lister les contacts'); 
					this.toListContacts(); 
					break; 
				case '2': 
					console.log('Vous avez choisi : Ajouter un nouveau contact'); 
					this.addContact(); 
					break; 
				case '3': 
					console.log('Vous avez choisi : Modifier un contact existant'); 
					this.modifyContact(); 
					break; 
				case '4': 
					console.log('Vous avez choisi : Supprimer un contact'); 
					this.delateContact(); 
					break; 
			}
			this.displayMenu(); 
			userChoice = ''; //on réinitialise le choix pour la prochaine boucle du menu
		}

	}

	toListContacts() {
		//méthode qui permet de lister les contacts dans la console (??)
		for (let i in this.liste) {
			this.liste[i].displayInfos(); 
		}
	 }

	addContact() {
		let newPrenom = prompt("Renseignez le prénom du nouveau contact"); 
		while (!checkStringLength(newPrenom, 2)) {
			newPrenom = prompt("Veuillez saisir un prénom d'au mois deux lettres"); 
			}; 
		let newContact = new Contact(newPrenom); 
		newContact.nom = prompt("Renseignez le nom du nouveau contact"); 
		while (!checkStringLength(newPrenom, 2)) {
			newContact.nom = prompt("Veuillez saisir un nom d'au mois deux lettres"); 
			}; 
		newContact.email = prompt("Renseignez l'adresse email du nouveau contact"); 
		while(!emailIsValid(newContact.email)) {
			newContact.email = prompt("Veuillez saisir une adresse email valide"); 
		}

		//feature vérification doublon email : 
		let listeEmails = []; 
		for (let i in this.liste) {
			listeEmails.push(this.liste[i].email); 
		}
		if (listeEmails.indexOf(newContact.email) != -1) {
			let doublon = this.liste[listeEmails.indexOf(newContact.email)].prenom; 
			alert(`⚠️ L\'adresse email saisie correspond déjà à celle de ${doublon}`); 
		}

		//ajout du nouveau contact créé à la liste : 
		this.liste.push(newContact); 
		console.log("Le contact a bien été ajouté");  //feedback utilisateur : confirmation de l'ajout
		newContact.displayInfos(); 
	}

	delateContact() {
		for (let i in this.liste) {
			console.log(`${i} - ${this.liste[i].prenom}`); 
		}
		let contactToDelate = prompt('Merci de sélectionner le numéro du contact à supprimer (cf liste dans la console) :'); 
		
		this.liste.splice(contactToDelate, 1); 
		console.log(`Le contact a été supprimé, adieu`); 
	}

	modifyContact() {
		for (let i in this.liste) {
			console.log(`${i} - ${this.liste[i].prenom}`); 
		}
		let contactToModify = prompt(`Indiquez le numéro du contact à modifier (cf la liste dans la console) :`); 
		contactToModify = parseInt(contactToModify); 
		console.log(`Vous avez choisi de modifier ${this.liste[contactToModify].prenom}`); 
		let infoToModify = prompt(`Quelle information souhaitez-vous modifier ? Tapez correctement : \n prenom \n nom \n email`); 
		let valeursOk = ['prenom', 'nom', 'email']; 
		while (valeursOk.indexOf(infoToModify) == -1) {
			infoToModify = prompt(`Veuillez saisir une instruction valide svp : \n prenom \n nom \n email`); 
		}
		console.log(contactToModify); 
		console.log(infoToModify); 
		console.log(this.liste[contactToModify]); 
		console.log(this.liste[contactToModify].email); 
		switch (infoToModify) {
			case 'prenom': 
				this.liste[contactToModify].prenom = prompt(`Renseignez le nouveau prénom :`);
				break;
			case 'nom': 
				this.liste[contactToModify].nom = prompt(`Renseignez le nouveau nom :`);
				break;
			case 'email': 
				this.liste[contactToModify].email = prompt('Renseignez le nouvel email : '); 
				break; 
		}
		console.log('Le contact a bien été modifié'); 
	}
}
