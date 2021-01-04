const toDoList = {
    tasks: [],

    addTask (text, id = Date.now()) {
        const task = {
            text,
            status: false,
            id,
        };
    
        this.tasks.push(task);

        return toDoList;
    },

    deleteTask (id) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks.splice(index, 1);
        }

        return toDoList;
    },

    changeTask (id, text) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks[index].text = text;
        }

        return toDoList;
    },

    updateStatus (id) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks[index].status = true;
        }

        return toDoList;
    },

    _findTaskByID (id) {
        return this.tasks.findIndex((task) => task.id === id);
    }
};

Object.freeze(toDoList);

localStorage.setItem('new task', toDoList.tasks);

console.log(toDoList.addTask('to watch a lesson', 123));
console.log(toDoList.addTask('to watch a lesson2', 124));
console.log(toDoList.addTask('to watch a lesson3', 125));

localStorage.setItem('new task', toDoList.tasks);

console.log(JSON.stringify(toDoList.tasks, null, 3));

localStorage.setItem('tasks', JSON.stringify(toDoList.tasks));

const result = JSON.parse(localStorage.getItem('tasks'));

console.log(result);

