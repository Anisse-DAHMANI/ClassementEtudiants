const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './output.csv',
    header: [
        {id: 'order', title: 'Rang'},
        {id: 'name', title: 'Nom'},
        {id: 'id', title: 'code_nip'},
        {id: 'S1', title: 'MS1'},
        {id: 'UE 11', title: 'UE 11'},
        {id: 'UE 12', title: 'UE 12'},
        {id: 'S2', title: 'MS2'},
        {id: 'UE 21', title: 'UE 21'},
        {id: 'UE 22', title: 'UE 22'},
        {id: 'S3', title: 'MS3'},
        {id: 'UE 31', title: 'UE 31'},
        {id: 'UE 32', title: 'UE 32'},
        {id: 'UE 33', title: 'UE 33'},
        {id: 'S123', title: 'MS123'}
    ]
});
 


function start(records) {
    csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
}
module.exports = {
    start
}


