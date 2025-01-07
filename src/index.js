import './style.css';
import { addProject, removeProject, addTodo, removeTodo, TodoItem } from './items';
import { renderProjects, showProject, showDummyProject, addTodoFromForm } from './render';

let projects = {};

document
    .getElementById('cancel-form')
    .addEventListener('click', (_) => document.querySelector('dialog').close());

document.querySelector('form').addEventListener('submit', (_) => {
    const currProject = document.querySelector('#project-display > h1').textContent;
    addTodoFromForm(projects, currProject);
    showProject(projects, currProject);
    document.querySelector('form').reset();
});

const projectList = document.getElementById('projects');
addProject(projects, 'Horror Game');
addTodo(projects, 'Horror Game', new TodoItem('Lorem', 'FUck off', new Date(), 'low'));
addTodo(projects, 'Horror Game', new TodoItem('Never', 'FUck off', new Date(), 'nah'));
renderProjects(projectList, projects);
showProject(projects, 'Horror Game');

projectList.addEventListener('click', (e) => {
    switch (e.target.className) {
        case 'del-project':
            removeProject(projects, e.target.dataset.key);
            renderProjects(projectList, projects);
            showDummyProject();
            return;
        case 'project-card':
            showProject(projects, e.target.querySelector('p').textContent);
            return;
    }
});

const newProjectName = document.getElementById('new-project-name');
document.querySelector('.new-project > button').addEventListener('click', (_) => {
    if (!addProject(projects, newProjectName.value)) return;
    newProjectName.value = '';
    renderProjects(projectList, projects);
});

document.getElementById('project-display').addEventListener('click', (e) => {
    const target = e.target;
    switch (target.className) {
        case 'delete':
            removeTodo(projects, target.dataset.project, target.dataset.index);
            showProject(projects, target.dataset.project);
            return;
        case 'more':
            projects[target.dataset.project][target.dataset.index].expanded = true;
            showProject(projects, target.dataset.project);
            return;
        case 'less':
            projects[target.dataset.project][target.dataset.index].expanded = false;
            showProject(projects, target.dataset.project);
            return;
        case 'edit':
            return;
    }
});
