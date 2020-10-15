class Contact {
	constructor(nom) {
		this.nom = nom; 
		this.prenom = ""; 
		this.email = ""; 
	}
	displayInfos() {
		console.log("Nom : " + this.nom + " || Prénom : " + this.prenom + " || Email : " + this.email); 
	}
}; 

