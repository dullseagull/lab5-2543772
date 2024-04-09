const { app } = require('@azure/functions');

app.http('addcar', {
    methods: ['POST'],
    handler: async (request, context) => {
        newCar = await request.json();
        return{
            status:200,
            body : "Added new car successfully"
        }
    }
});