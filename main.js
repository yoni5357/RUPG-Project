import UserFactory from "./util/userFactory.js";
import Renderer from "./render.js";

let currentUser;

async function generateUser(){
    let user = await UserFactory.createUser();
    currentUser = user;
    Renderer.render(user);
}

function saveUser() {
    window.localStorage.setItem('user', JSON.stringify(currentUser));
}

async function loadUser() {
    const userData = window.localStorage.getItem('user');
    const user = await JSON.parse(userData);
    Renderer.render(user);
}

document.addEventListener('DOMContentLoaded', () => {
    const genButton = document.getElementById('generate-button');
    genButton.addEventListener('click', generateUser);
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', saveUser);
    const loadButton = document.getElementById('load-button');
    loadButton.addEventListener('click', loadUser);
})