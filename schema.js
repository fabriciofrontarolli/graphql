const graphql = require('graphql');
const axios = require('axios');

const CustomerType = require('./schemas/customer.js').CustomerType;

const RootSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            customer: {
                type: CustomerType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: (_, args) => {
                    const customer = axios.get(`http://localhost:4005/customers/${args.id}`)
                                          .then(res => res.data);
                    return customer;
                }
            },
            customers: {
                type: new graphql.GraphQLList(CustomerType),
                resolve: (_, args) => {
                    const customers = axios.get('http://localhost:4005/customers')
                                           .then(res => res.data);
                    return customers;
                }
            }
        }
    })
});


module.exports = RootSchema;