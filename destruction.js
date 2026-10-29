const produits = {
    id : 1,
    libelle : "ordinateur",
    prixU : 100,
    quantite : 5
}
const {libelle ,quantite} = produits;
console.log(libelle);
console.log(quantite);

const tab = [100,2,10];
const [un,deux,trois] = tab;
console.log(deux);

const deleguer = {
    id : 1,
    nom : "diop" ,
    prenom : "rokhaya" ,
    nationalite : "senegalaise"
}
const NOM = deleguer.nom;
const PRENOM = deleguer.prenom; 

const {nom, prenom :PR} = deleguer; // extraction 
console.log(nom);
console.log(PR);  
