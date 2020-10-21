//Fonction pour vérifier la longueur du nom : 
const checkStringLength = (mot, nombre) => {
	if (mot.length >= nombre) {
		return true; 
	} else {
		return false; 
	}
}

//Fonction pour vérifier le format d'email 
const emailIsValid = (adresse) => {
	return /^[a-zA-Z0-9]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/.test(adresse);
}; 