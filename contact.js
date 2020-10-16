class Contact {
	constructor(nom) {
		this.nom = nom; 
		this.prenom = ""; 
		this.email = ""; 
	}
	displayInfos() {
		let displayContact = document.getElementById("display-contact"); 
		displayContact.textContent = "Nom : " + this.nom + " || Prénom : " + this.prenom + " || Email : " + this.email; 
	}
}; 



