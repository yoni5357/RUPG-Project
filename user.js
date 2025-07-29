class User{
    constructor(firstName, lastName, city, state, imageUrl, friends, quote, pokemoneName, pokemoneUrl, ipsum){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.profileImage = imageUrl;
        this.friends = friends;
        this.quote = quote;
        this.pokemoneName = pokemoneName;
        this.pokemoneUrl = pokemoneUrl;
        this.ipsum = ipsum;
    }
}

export default User;