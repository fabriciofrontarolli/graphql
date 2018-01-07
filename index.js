const express = require('express');
const graphqlHttp = require('express-graphql');

const schema = require('./schema.js');

const app = express();

app.use('/graphql', graphqlHttp({
    schema: schema,
    graphiql: true
}));

const port = 4000;
app.listen(port, () => {
    console.log(`running on port ${port}`);
});