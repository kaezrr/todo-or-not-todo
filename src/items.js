export class TodoItem {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
    toggleDone() {
        this.done = !this.done;
    }
    changeDesc(newDesc) {
        this.desc = newDesc;
    }
    changeTitle(newTitle) {
        this.title = newTitle;
    }
    changeDate(newDate) {
        this.dueDate = newDate;
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

export function removeTodo(projects, project, todo) {
    projects[project] = projects[project].filter((e) => e !== todo);
}
