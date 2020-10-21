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
	    }

	    toListContacts(contact1, contact2) {
		//méthode qui permet de lister les contacts dans la console (??)
		// créer un tableau / ajouter au tableau les objets 'contacts' saisis en paramètre de la méthode / console.log chaque élément du tableau
		let listeDeContacts = [contact1, contact2]; 
		for (let i in listeDeContacts) {
			listeDeContacts[i].displayInfos(); 
		}
	    }

	    addContact() {
		    
	    }
    }

