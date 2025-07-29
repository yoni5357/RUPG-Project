
async function fetchtUsers() {
    try{
        const response = await fetch('https://randomuser.me/api/?results=7');
        if(!response.ok){
            throw new Error('Response not ok');
        }
        const users = await response.json();
        return users.results;
    }catch(error){
        console.error("Failed to fetch users: ", error.message);
    }

}


async function fetchQuote() {
    try{
        const response = await fetch('https://api.kanye.rest');
        if(!response.ok){
            throw new Error('Response not ok')
        }
        const quote = await response.json();
        return quote.quote;
    }catch(error){
        console.error("Failed to fetch quote: ", error.message);
    }

}


async function fetchPokemone() {
    try{
        const countResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1');
        if(!countResponse.ok){
            throw new Error('Count Response not ok');
        }
        const pokemoneCount = await countResponse.json();
        const totalPokemone =  pokemoneCount.count;

        const randomId = Math.floor(Math.random() * totalPokemone) + 1;

        const pokemoneResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        if(!pokemoneResponse.ok){
            throw new Error('Pokemone Response not ok');
        }
        const pokemone = pokemoneResponse.json();
        return pokemone;
    }catch(error){
        console.error("Failed to fetch Pokemone: ", error.message);
    }

}
