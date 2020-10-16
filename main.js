const contact01 = new Contact ("Bessac"); 
const contact02 = new Contact ("Touque"); 

 

if (!checkStringLength(contact01.prenom)) {
	contact01.prenom = prompt("La règle c\'est 2 minimum 🤨. Rentrez à nouveau le prénom")
}; 

if (!checkStringLength(contact01.nom)) {
	contact01.nom = prompt("La règle c\'est 2 minimum 😯. Rentrez à nouveau le nom")
}; 

contact01.displayInfos();