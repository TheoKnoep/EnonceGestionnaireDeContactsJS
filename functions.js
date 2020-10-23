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
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adresse);
}; 