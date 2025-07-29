
async function fetchtUsers() {
    const response = await fetch('https://randomuser.me/api/?results=7');
    if(!response.ok){
        throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    return users.results;
}


async function fetchQuote() {
    const response = await fetch('https://api.kanye.rest');
    if(!response.ok){
        throw new Error('Faild to fetch quote')
    }
    const quote = await response.json();
    return quote.quote;
}
