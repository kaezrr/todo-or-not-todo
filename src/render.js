import { format } from 'date-fns';
import { addTodo, TodoItem } from './items';

function getTodoObject(todo, name, i) {
    const div1 = document.createElement('div');
    div1.classList = 'todo-item';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'item-done';
    input.checked = todo.done;
    input.addEventListener('click', (e) => {
        todo.done = e.target.checked;
    });
    const h3 = document.createElement('h3');
    h3.textContent = todo.title;
    const btn1 = document.createElement('button');
    btn1.textContent = 'more';
    btn1.classList = 'more';
    btn1.dataset.project = name;
    btn1.dataset.index = i;
    const btn2 = document.createElement('button');
    btn2.textContent = 'edit';
    btn2.classList = 'edit';
    btn2.dataset.project = name;
    btn2.dataset.index = i;
    const btn3 = document.createElement('button');
    btn3.textContent = 'delete';
    btn3.classList = 'delete';
    btn3.dataset.project = name;
    btn3.dataset.index = i;
    div1.append(input, h3, btn1, btn2, btn3);
    if (todo.expanded) {
        btn1.classList = 'less';
        btn1.textContent = 'less';
        div1.classList += ' expanded';
        const desc = document.createElement('p');
        desc.classList = 'desc';
        desc.textContent = todo.desc;
        const date = document.createElement('p');
        date.textContent = format(todo.dueDate, 'dd MMM y');
        const prio = document.createElement('p');
        prio.textContent = `Priority: ${todo.priority}`;
        div1.append(desc, date, prio);
    }
    return div1;
}

export function renderProjects(list, projects) {
    list.replaceChildren();
    for (let project in projects) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let button = document.createElement('button');
        div.classList = 'project-card';
        p.textContent = project;
        button.textContent = 'delete';
        button.dataset.key = project;
        button.classList = 'del-project';
        div.append(p);
        div.append(button);
        list.appendChild(div);
    }
}

export function showProject(projects, name) {
    const projectDisplay = document.getElementById('project-display');
    projectDisplay.replaceChildren();
    const h1 = document.createElement('h1');
    h1.textContent = name;
    projectDisplay.append(h1);
    const div = document.createElement('div');
    div.id = 'todo-list';

    projects[name].forEach((e, i) => {
        div.append(getTodoObject(e, name, i));
    });

    const btn = document.createElement('button');
    btn.id = 'add-todo';
    btn.textContent = 'New Item';
    btn.addEventListener('click', (_) => {
        document.querySelector('dialog').showModal();
    });
    projectDisplay.append(div);
    projectDisplay.append(btn);
}

export function showDummyProject() {
    const projectDisplay = document.getElementById('project-display');
    projectDisplay.replaceChildren();
    const h1 = document.createElement('h1');
    h1.textContent = 'Select a project';
    projectDisplay.append(h1);
}

export function addTodoFromForm(projects) {
    const title = document.getElementById('title').value;
    const about = document.getElementById('about').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const currProject = document.querySelector('#project-display > h1').textContent;
    addTodo(
        projects,
        currProject,
        new TodoItem(
            title,
            about ? about : 'No description provided',
            date ? date : new Date(),
            priority ? priority : 'N/A'
        )
    );
}
