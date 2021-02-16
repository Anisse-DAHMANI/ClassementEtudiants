const csv = require('csv-parser');
const fs = require('fs');
const { Student } = require('../models/student');
const { Students } = require('../models/students');
const { start } = require('./writer');
const config = require('../../../../config.json');
const { resolve } = require('path');


const students = new Students();


// Récupération des arguments de l'appel du script
// const data = {
//     's1': process.argv[2],
//     's2': process.argv[3],
//     's3': process.argv[4],
//     's3a': process.argv[5]
// }
const data = {
    's1': 'data/nachouki_files/s1.csv',
    's2': 'data/nachouki_files/s2.csv',
    's3': 'data/nachouki_files/s3.csv',
    's3a': 'data/nachouki_files/s3a.csv'
}

Promise.all([getSN(data.s1, students, config.s1),
getSN(data.s2, students, config.s2),
getSN(data.s3, students, config.s3),
getSN(data.s3a, students, config.s3)]).then(() => {
    students.students.forEach(student => {
        console.log(student);
    })
});

async function getSN(file, students, config) {
    let student;
    return new Promise(resolve => {
        fs.createReadStream(file)
            .pipe(csv({ separator: ';' }))
            .on('data', (row) => {
                if (row.Rg != '') {
                    student = students.get(row.code_nip);
                    student.name = row.Nom;
                    student[config.id] = {'average': parseFloat(row.Moy)};
                    config.ue.forEach(ue => student[config.id][ue.id] = parseFloat(row[ue.header]));
                }
            })
            .on('end', () => {
                resolve();
            });
    });
}