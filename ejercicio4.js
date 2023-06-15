//1.1 
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 
avengers.unshift("IronMan");
console.log(avengers);

//1.3 
console.log(avengers.length);
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

//1.4 
rickAndMortyCharacters.push("Morty", "Summer", "Lapiz Lopez");
console.log(rickAndMortyCharacters.length - 1)

//1.5 
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0],rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

//1.6 
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);