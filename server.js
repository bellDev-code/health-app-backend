import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "hi hello"
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(() => console.log("Server is running on http://loaclhost:4000/"))