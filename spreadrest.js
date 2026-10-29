
// spread (degroupage) et rest (regroupage)
const tab1 = [100,200,32];
const tab2 = [10,20,39];
const tabunion = [...tab1,...tab2];
console.log(tabunion);

const et1 = {
    id : 1,
    nom : "ba",
}
const et2 = {
    id : 2,
    nom : "ndiaye", 
}
const etunion = {
  ...et1,...et2
}
//console.log(etunion);

