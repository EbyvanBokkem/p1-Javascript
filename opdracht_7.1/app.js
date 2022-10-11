// begin 7.1
// let budget = 100;
// let product = 60;

// if(budget >product){
//     console.log("U heeft genoeg geld!")
// } 
// else if(budget <product) {
//     console.log("Helaas, te weinig geld")
// }
// eind 7.1

//  begin 7.2
let budget = prompt("budget", "");  
let product = 60
if (budget > product) {
    document.getElementById("eindbedrag").style.color = "green"
    document.getElementById("eindbedrag").innerHTML = "U heeft genoeg geld!"
} else {
    document.getElementById("eindbedrag").style.color = "red"
    document.getElementById("eindbedrag").innerHTML = "Helaas, te weinig geld"
}
// eind 7.2