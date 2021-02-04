const container = document.querySelector(".container");

async function callApi() {
    try{
        const response = await fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating");
        const responseJson = await response.json();
        const results = responseJson.results;
        console.log(results);
        container.innerHTML = "";
        for(let i = 0; i < 8; i++){
            container.innerHTML += `<div class="game"><h2>Name: ${results[i].name}</h2> 
                <p>Rating: ${results[i].rating}</p>
                <p>Number of tags: ${results[i].tags.length}</p></div>`
        }
    }
    catch(error){
        container.innerHTML = `Something went wrong`;
    }
  }
  callApi();