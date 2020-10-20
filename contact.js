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

//Fonction pour vérifier la longueur du nom : 
const checkStringLength = (mot) => {
	if (mot.length >= 2) {
		return true; 
	} else {
		return false; 
	}
}


//Fonction pour vérifier le format d'email 
const isEmailValid = (adresse) => {
	return /^[a-zA-Z0-9]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/.test(adresse);
}; 

