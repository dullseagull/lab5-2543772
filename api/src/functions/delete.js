const { app } = require('@azure/functions');
const fs = require('fs').promises;
const path = require('path');

const unparsedPath = path.resolve(__dirname, "cars.json");

app.http('delete', {
    methods: ['DELETE'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            // Read the existing JSON data from the file
            const jsonSet = await fs.readFile(unparsedPath, 'utf8');
            const parsedData = JSON.parse(jsonSet);
            
            // Get the car ID from the request parameters
            const { carId } = request.params;
            
            // Find the index of the car in the array
            const index = parsedData.findIndex(car => car.id === carId);
            
            // If car not found, return 404 Not Found
            if (index === -1) {
                return {
                    status: 404,
                    body: "Car not found"
                };
            }
            
            // Remove the car from the array
            parsedData.splice(index, 1);
            
            // Write the updated data back to the file
            await fs.writeFile(unparsedPath, JSON.stringify(parsedData, null, 2));
            
            return {
                status: 200,
                body: "Car deleted successfully"
            };
        } catch (error) {
            console.error("Error deleting car:", error);
            return {
                status: 500,
                body: "Internal Server Error"
            };
        }
    }
});

// const fs = require('fs').promises;
// const path = require('path');
// const { app } = require('@azure/functions');

// const jsonFilePath = path.resolve(__dirname, 'cars.json');


// app.http('delete', {
//     methods: ['DELETE'],
//     route:'cars/{carID}',
//     handler: async (request, context) => {

//     id = req.params.id;
//     index = cars.findIndex(car => car.id === id);
//     cars.splice(index, 1);



//         return{
//             status:200,
//             body:  JSON.stringify(parsedData) ,
//             body:id
//         }
//     }
// });