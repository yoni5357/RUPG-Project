
async function fetchtUsers() {
    const response = await fetch('https://randomuser.me/api/?results=7');
    if(!response.ok){
        throw new Error('Failed fetching users');
    }
    const users = await response.json();
    return users.results;
}
