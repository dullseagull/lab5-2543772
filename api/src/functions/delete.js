const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');

const jsonFilePath = path.resolve(__dirname, 'cars.json');


app.http('delete', {
    methods: ['DELETE'],
    route:'cars/{carID}',
    handler: async (request, context) => {

    id = req.params.id;
    index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);



        return{
            status:200,
            body:  JSON.stringify(parsedData) ,
            body:id
        }
    }
});