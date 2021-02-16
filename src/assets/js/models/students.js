const {Student} = require('./student.js');

class Students {
    constructor() {
        this.students = new Map();
    }
    
    get(id) {
        if (this.students.get(id)) {
            return this.students.get(id);
        }
        this.students.set(id, new Student(id));
        return this.students.get(id);
    }
}
module.exports = {
    Students
}