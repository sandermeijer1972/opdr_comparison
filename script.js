const age = 33;
const isFemale = true;
const naam = 'michelle';
const totalAmount = 14;
const driverStatus = 'bob';
// leeftijd check
if(age < 18) {
    console.log("Sorry, kom maar terug als je oud genoeg bent");
} else {
    console.log("Kom binnen!")
}
// kom je in aanmerking voor een leeftijds-korting
if(age >= 18 && age <= 25 ) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Veel plezier")
}
// gender check
if(isFemale) {
    console.log("Welkom, jongedame");
} else {
    console.log("Kom binnen, meneer");
}
// speciale namen krijgen gratis drankje
if(naam === 'bram' || naam === 'sarah') {
    console.log("Je deelt mee in onze feestvreugde en krijgt een gratis drankje aangeboden!");
}
// extraatjes bij grote bestellingen
if(totalAmount > 100) {
    console.log("Wij bieden U een fles champagne aan, vanwege ons jubileum en Uw dorstige gesteldheid");
} else if(totalAmount > 50) {
    console.log("Wij bieden U een flinke portie nachos aan, vanwege ons jubileum");
} else if(totalAmount > 25) {
    console.log("Wij bieden U een schaaltje (vega)bitterballen aan, vanwege ons jubileum");
} else {
    console.log("Had U gezien dat U bij een minimale besteding van 25 euro wat lekkers extra krijgt?");
}
// controle of mevrouw nog mag rijden
if(driverStatus === 'bob') {
    console.log("Rij voorzichtig!");
} else {
    console.log("Sorry, maar U heeft teveel gedronken, ik regel een taxi voor U");
}

