import UserFactory from "./util/userFactory.js";
import Renderer from "./render.js";

let currentUser;

const getSavedUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

const populateDropdown = () => {
    const select = document.getElementById("user-select");
    if (!select) return;
    select.innerHTML = "";
    const placeholderOption = document.createElement("option");
    placeholderOption.textContent = "Select a user";
    // placeholderOption.disabled = true;
    select.appendChild(placeholderOption);
    getSavedUsers().forEach((u, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `${u.firstName} ${u.lastName}`;
        select.appendChild(opt);
    });
};

async function generateUser(){
    currentUser= await UserFactory.createUser();
    Renderer.render(currentUser);
}

function saveUser() {
    if (!currentUser) return;
    const users = getSavedUsers();
    users.push(currentUser);
    localStorage.setItem("users", JSON.stringify(users));
    populateDropdown();
}

function loadUser() {
    const select = document.getElementById("user-select");
    const users = getSavedUsers();
    const chosen = users[select.value];
    if (chosen) {
        Renderer.render(chosen);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const genButton = document.getElementById('generate-button');
    genButton.addEventListener('click', generateUser);
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', saveUser);
    const loadButton = document.getElementById('load-button');
    loadButton.addEventListener('click', loadUser);
    populateDropdown();
})