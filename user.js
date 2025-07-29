class User{
    constructor(firstName, lastName, city, state, imageUrl, friends, quote, pokemonName, pokemonUrl, ipsum){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.profileImage = imageUrl;
        this.friends = friends;
        this.quote = quote;
        this.pokemonName = pokemonName;
        this.pokemonUrl = pokemonUrl;
        this.ipsum = ipsum;
    }
}

export default User;