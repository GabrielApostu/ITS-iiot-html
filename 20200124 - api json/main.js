var o = new Object();
o.name = "Andrea";
o.surname = "Dottor";
o.age = 37;
o.address = new Object();
o.address.city = "San Vendemiano";

console.log(JSON.stringify(o));


function getApiData(){

    fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=")
        .then(function(response){
            return response.json();
        }).then(function(data){

            alert("Totale personaggi presenti:" + data.data.total);
            var list = data.data.results;

            for (let i = 0; i < list.length; i++) {
                const person = list[i];
                console.log(person.name);
            }
        });

}