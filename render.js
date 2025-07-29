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
    }
}

export default Renderer;