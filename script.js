/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Le prototype contacts 
var contacts = {
			init : function (nom, prenom) {
					this.nom=nom;
					this.prenom=prenom;	
			},
			decrire : function(){
			var description = "Nom : " +  this.nom +" ,  Prenom :  "+ this.prenom;
return description;
}};

// creation des objets pour gerer les contacts a partir du prototype 

var contact1 = Object.create(contacts);
contact1.init("Carole","Levisse");
var contact2 = Object.create(contacts);
contact2.init("Mélodie", "Nelsonne");

// creation d'un tableau tabContact

var tabContact = [];

// ajout des contacts dans le tableau cree
tabContact.push (contact1);
tabContact.push (contact2);

console.log("Bienvenue dans le gestionnaire des contacts !  ");
tantQueNePasQuitter=true;

// la boucle while pour que le programme reste en boucle jusque l'utilisateur choisit de quitter 

while (tantQueNePasQuitter) {
	console.log("\n 1 . Lister les contacts \n 2 . Ajouter un contact \n 0 . quitter");
	var choix=prompt("Choisissez votre option");
	votreChoix= Number(choix);
	// Option 1 == affichage de liste des contactes 
	if (votreChoix===1){
		console.log("\n\nvoici la liste de tous vos contacte  \n");
tabContact.forEach(function (contact){
	console.log(contact.decrire()); 
});
	}
	// option 2 == ajouter des contactes 
	
	else if (votreChoix === 2){
	var contactAjoute = Object.create(contacts);
	var choix=prompt("Entrer le nom du nouveau contact");
contactAjoute.nom=choix; 
			var choix=prompt("Entrer le prenom du nouveau contact");
contactAjoute.prenom=choix; 
contactAjoute.init(contactAjoute.nom,contactAjoute.prenom);
tabContact.push(contactAjoute);
console.log("le nouveau contact a ete ajouté ");
	}
	// option 3 == quitter 
else if (votreChoix === 0) {
	console.log("au revoir !");
	tantQueNePasQuitter = false;
}}
