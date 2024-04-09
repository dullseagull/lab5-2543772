const fs = require('fs').promises;
const path = require('path');
const { app } = require('@azure/functions');

const jsonFilePath = path.resolve(__dirname, 'cars.json');


app.http('getCarById', {
    methods: ['DELETE'],
    route:'cars/{carID}',
    handler: async (request, context) => {
        id = request.params.carID

        return{
            status:200,
            body:id
        }
    }
});