// How do i process the api
// Display around 50 pokemons --- To display pokemons type "pokemon" in search box.
// Each pokemon’s ability needs to be listed..  --- To display pokemons ability type "ability" in search box.
// Display the pokemon’s moves.  --- To display pokemons moves type "move" in search box.
// Also display the weight of each pokemon. --- To display pokemons weight  type pokemon id's i.e. 1,2,3,4.... in search box.



var form = document.createElement("form");
form.setAttribute("id", "myform");

form.innerHTML = `<div class="header">
<h1> POKEMON API</h1> </div>
<div class="subhead">
<h3>Finding Pokemon Names, Abilities, Moves and Weight</h3> </div>
`;

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "poke");
input.setAttribute("required", " true");
var sub = document.createElement("input");
sub.setAttribute("type", "submit");
sub.setAttribute("id", "Search");
sub.setAttribute("value", "Search");


form.append(input, sub);
let bre = document.createElement("br");

document.body.append(form);

let division = document.createElement("div");
division.setAttribute("id", "pokemon");

document.body.append(division);


var formres = document.getElementById("myform");
formres.addEventListener("submit", (event) => {
    event.preventDefault();

    var string = document.getElementById("poke").value;
    var url = `https://pokeapi.co/api/v2/${string}/?limit=50&offset=0`;


    display(url);

    var weight = document.getElementById("poke").value;
    var src = `https://pokeapi.co/api/v2/pokemon/${weight}/`;

    mass(src);


});


async function display(url) {

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        let index = 0;
        let doc = document.getElementById("pokemon");

        pokemon.innerHTML = " ";


        while (index <= data.results.length) {
            var lineBreak = document.createElement('br');
            pokemon.appendChild(lineBreak);
            doc.append(`Name : ${data.results[index].name} `);
            index++;
        }


    } catch (error) {
        console.log(error);
    }
}


async function mass(src) {

    try {
        let response = await fetch(src);
        let data = await response.json();
        console.log(data);

        let name = document.getElementById("pokemon");
        let pokeweight = data.weight;
       

        pokemon.innerHTML = " ";
        name.append(`Weight : ${pokeweight}`)

    } catch (error) {
        console.log(error);
    }
}



