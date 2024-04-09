const { app } = require('@azure/functions');

app.http('cars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return{
            status:200,
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        }
    }
});
