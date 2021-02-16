class Student {
    constructor(id) {
        this.id = id;
    }
    
    applyData(data) {
        Object.assign(this, data);
    }
}
module.exports = {
    Student
}