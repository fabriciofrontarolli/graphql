const graphql = require('graphql');

module.exports.CustomerType = new graphql.GraphQLObjectType({
    name: 'Customer',
    fields: {
        id: { type: (graphql.GraphQLInt) },
        name: { type: graphql.GraphQLString }
    }
});
