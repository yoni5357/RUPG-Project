import UserFactory from "./util/userFactory.js";
import Renderer from "./render.js";

async function generateUser(){
    let user = await UserFactory.createUser();
    Renderer.render(user);
}

document.addEventListener('DOMContentLoaded', () => {
    const genButton = document.getElementById('generate-button');
    genButton.addEventListener('click', generateUser);
})