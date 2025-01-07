export class TodoItem {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc ? desc : 'No description provided.';
        this.dueDate = dueDate ? dueDate : new Date();
        this.priority = priority ? priority : 'None';
        this.done = false;
        this.expanded = false;
    }

    update(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc ? desc : 'No description provided.';
        this.dueDate = dueDate ? dueDate : new Date();
        this.priority = priority ? priority : 'None';
    }
}

export function addProject(projects, name) {
    if (name in projects || name === '') {
        alert('Project cannot be duplicate or blank!');
        return false;
    }
    projects[name] = [];
    return true;
}

export function removeProject(projects, name) {
    if (!(name in projects)) {
        alert('Project with name does not exist!');
        return false;
    }
    delete projects[name];
    return true;
}

export function addTodo(projects, project, todo) {
    projects[project].push(todo);
}

export function removeTodo(projects, project, index) {
    projects[project].splice(index, 1);
}
