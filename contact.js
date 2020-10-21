class Contact {
	constructor(nom) {
		this.nom = nom; 
		this.prenom = ""; 
		this.email = ""; 
	}
	displayInfos() { 
		alert("Nom : " + this.nom + " || Prénom : " + this.prenom + " || Email : " + this.email); 
	}
}; 


class ContactManager {
	displayMenu() {
		let actionChoice = document.getElementById("action-choice"); 
		actionChoice.innerHTML = '<ul class="contact-manager-menu"><li id="list-contacts">Lister les contacts</li><li id="add-contact">Ajouter un nouveau contact</li><li id="modify-contact">Modifier un contact existant</li><li id="delate-contact">Supprimer un contact</li><li id="quit-contact-manager">Quitter le gestionnaire de contact</li>'; 
		
		let quitContactManager = document.getElementById("quit-contact-manager"); 
		quitContactManager.addEventListener('click', function(e) {
			e.preventDefault; 
			let userQuit = confirm("Êtes-vous sûr de vouloir quitter le gestionnaire de contact ?"); 
			if (userQuit) {
				let fullBody = document.getElementById("full-page"); 
				fullBody.innerHTML = '<p class="info-message">Gestionnaire de contact quitté avec succès</p>'; 
			}
		}); 
	}; 
}; 

