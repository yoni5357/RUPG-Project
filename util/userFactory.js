import DataProvider from "./dataProvider.js";
import User from "../user.js";

class UserFactory{
    static async createUser(){
        const[users, quote, pokemone, ipsum] = await DataProvider.fetchAll();

        const [user, ...friends] = users;
        const firstName = user.name.first;
        const lastName = user.name.last;
        const city = user.location.city;
        const state = user.location.state;
        const profileImage = user.picture.thumbnail;
        const friendNames = friends.map(friend => friend.name.first + " " +friend.name.last);
        const pokemoneName = pokemone.name;
        const pokemoneSprite = pokemone.sprites.front_default;
        
        return new User(firstName, lastName, city, state, profileImage, friendNames, quote, pokemoneName, pokemoneSprite, ipsum)
    }
}
