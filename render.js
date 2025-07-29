class Renderer{
    static render(user){
        const imageDiv = document.getElementById('image-container');
        imageDiv.innerHTML = '';
        const image = document.createElement('img');
        image.src = user.profileImage;
        image.className = 'user-image'
        imageDiv.appendChild(image);

        const infoDiv = document.getElementById('info-container');
        infoDiv.innerHTML = '';
        const nameP = document.createElement('p');
        nameP.textContent = `${user.firstName} ${user.lastName}`;
        nameP.className = 'info-text';
        const locationP = document.createElement('p');
        locationP.textContent = `${user.city}, ${user.state}`;
        locationP.className = 'info-text';
        infoDiv.appendChild(nameP);
        infoDiv.appendChild(locationP);

        const quoteDiv = document.getElementById('quote-container');
        quoteDiv.innerHTML = '';
        const quoteP = document.createElement('p');
        quoteP.className = 'quote';
        quoteP.textContent = `Favorite quote: ${user.quote}`;
        quoteDiv.appendChild(quoteP);

        const pokemonDiv = document.getElementById('pokemon-container');
        pokemonDiv.innerHTML = '';
        const pokemonSprite = document.createElement('img');
        pokemonSprite.src = user.pokemonUrl;
        const pokemonName = document.createElement('p');
        pokemonName.textContent = user.pokemonName;
        pokemonDiv.appendChild(pokemonSprite);
        pokemonDiv.appendChild(pokemonName);
    }
}

export default Renderer;