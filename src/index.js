import './style.css';
import { addProject, removeProject, addTodo, removeTodo, TodoItem } from './items';

const projectList = document.querySelector('#projects');
const newProjectName = document.querySelector('#new-project-name');
const addProjectButton = document.querySelector('.new-project > button');

let projects = {};

function renderProjects() {
    projectList.replaceChildren();
    for (let project in projects) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let button = document.createElement('button');
        div.classList = 'project-card';
        p.textContent = project;
        button.textContent = 'delete';
        button.dataset.key = project;
        div.append(p);
        div.append(button);
        projectList.appendChild(div);
    }
}

projectList.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') return;
    removeProject(projects, e.target.dataset.key);
    renderProjects();
});

addProjectButton.addEventListener('click', (_) => {
    if (!addProject(projects, newProjectName.value)) return;
    newProjectName.value = '';
    renderProjects();
});
